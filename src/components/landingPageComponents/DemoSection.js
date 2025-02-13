"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function DemoSection() {
  const [smartbillUsername, setSmartbillUsername] = useState('');
  const [smartbillToken, setSmartbillToken] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [invoiceSeries, setInvoiceSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState('');
  const [demoId, setDemoId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const stripeTestPage = "https://buy.stripe.com/test_fZe0102nF4tn4x2cMN";

  const handleGetSeries = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/get-series', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          smartbill_username: smartbillUsername,
          smartbill_token: smartbillToken,
          tax_number: taxNumber,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        const series = data.invoice_series;
        setDemoId(data.demo_id);

        if (series.length === 1) {
          window.open(stripeTestPage, '_blank');
          setInvoiceSeries([]);
          setSelectedSeries('');
        } else if (series.length > 1) {
          setInvoiceSeries(series);
        }
      } else {
        setErrorMessage(data.error || 'Error retrieving series');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRunTest = async () => {
    if (!selectedSeries) {
      setErrorMessage('Please select an invoice series.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/save-selection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          smartbill_username: smartbillUsername,
          smartbill_token: smartbillToken,
          tax_number: taxNumber,
          selected_series: selectedSeries,
          demo_id: demoId,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        window.open(stripeTestPage, '_blank');
        setInvoiceSeries([]);
        setSelectedSeries('');
      } else {
        setErrorMessage(data.error || 'Error saving selection');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  const isRunTestEnabled = invoiceSeries.length === 1 || 
    (invoiceSeries.length > 1 && selectedSeries !== '');

  return (
    <section className="bg-white/80 py-20">
      <div className="w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-gray-700">
        <h1 className="font-bold text-3xl text-center">Hi, I'm Ferencz</h1>

        <img
          src="/users/john.png"
          alt="user"
          className="inline-block pointer-events-none h-24 w-24 rounded-full my-10"
        />

        <p className="max-w-prose w-fit text-center font-semibold leading-relaxed">
          <span className="font-bold"> I’m the creator of Facturio.</span> I built this tool out of frustration from manually generating invoices after every Stripe payment. What began as a personal fix evolved into a solution for busy professionals who need error-free, automated invoicing. I’m now inviting a select group of early adopters to help shape Facturio into an indispensable tool for their businesses. Every early adopter receives a customized instance, plus exclusive access to our guided demo that shows you exactly how your Stripe payments transform into SmartBill invoices in real time.
        </p>

        <div className="my-20 scroll-mt-28 w-full" id="demo">
          <div className="w-full lg:w-4/5 lg:mx-auto h-auto shadow-md bg-gray-200 rounded-xl p-8">
            <form onSubmit={handleGetSeries} className="w-full max-w-md mx-auto space-y-6">
              {/* Form Inputs */}
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="SmartBill Username (Email)"
                  value={smartbillUsername}
                  onChange={(e) => setSmartbillUsername(e.target.value)}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  required
                  disabled={isLoading}
                />

                <input
                  type="password"
                  placeholder="SmartBill Token"
                  value={smartbillToken}
                  onChange={(e) => setSmartbillToken(e.target.value)}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  required
                  disabled={isLoading}
                />

                <input
                  type="text"
                  placeholder="Tax Number (CIF)"
                  value={taxNumber}
                  onChange={(e) => setTaxNumber(e.target.value)}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Series Selection Dropdown */}
              {invoiceSeries.length > 1 && (
                <div className="space-y-2">
                  <label className="block font-semibold">Select an Invoice Series</label>
                  <select
                    value={selectedSeries}
                    onChange={(e) => setSelectedSeries(e.target.value)}
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                    disabled={isLoading}
                  >
                    <option value="">-- Choose a series --</option>
                    {invoiceSeries.map((series, index) => (
                      <option key={index} value={series.name}>
                        {series.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-3 rounded font-medium transition-colors ${
                    isLoading
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {isLoading ? 'Connecting...' : 'Connect to SmartBill'}
                </button>

                <button
                  type="button"
                  onClick={handleRunTest}
                  disabled={!isRunTestEnabled || isLoading}
                  className={`px-6 py-3 rounded font-medium transition-colors ${
                    isRunTestEnabled && !isLoading
                      ? 'bg-green-600 hover:bg-green-700 cursor-pointer'
                      : 'bg-gray-400 cursor-not-allowed'
                  } text-white`}
                >
                  {isLoading ? 'Processing...' : 'Run Test'}
                </button>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <p className="text-center text-red-500 font-medium">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          <ChevronDown className="animate-bounce w-10 h-10 text-gray-600" />
        </div>

        <div className="font-medium text-center text-2xl text-gray-600 hover:text-gray-800 cursor-pointer">
          Become an Early Adopter
        </div>
      </div>
    </section>
  );
}

export default DemoSection;