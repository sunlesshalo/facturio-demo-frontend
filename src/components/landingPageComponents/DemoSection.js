"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import EarlyAdopterModal from "./EarlyAdopterModal";

function DemoSection() {
  const [smartbillUsername, setSmartbillUsername] = useState('');
  const [smartbillToken, setSmartbillToken] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [invoiceSeries, setInvoiceSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState('');
  const [demoId, setDemoId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleEarlyAdopterSubmit = async ({ name, email }) => {
    try {
      // Add your submission logic here
      console.log('Early adopter submission:', { name, email });
      alert('Thank you for joining our Early Adopter program!');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error processing your request. Please try again.');
    }
  };

  const isRunTestEnabled =
    invoiceSeries.length === 1 || (invoiceSeries.length > 1 && selectedSeries !== '');

  return (
    <section className="bg-white/80 py-20">
      <div className="w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-gray-700">
        <h1 className="font-bold text-3xl text-center">Hi, I'm Ferencz</h1>

        <img
          src="/users/profil.jpg"
          alt="user"
          className="inline-block pointer-events-none h-24 w-24 rounded-full my-10"
        />

        <p className="max-w-prose w-fit text-center font-semibold leading-relaxed">
          <span className="font-bold">I'm the creator of Facturio.</span> I built this tool out of frustration from manually generating invoices after every Stripe payment. What began as a personal fix evolved into a solution for busy professionals who need error-free, automated invoicing. I'm now inviting a select group of early adopters to help shape Facturio into an indispensable tool for their businesses.
        </p>

        <div className="my-20 scroll-mt-28 w-full" id="demo">
          <div className="w-full lg:w-4/5 lg:mx-auto h-auto shadow-md bg-gray-200 rounded-xl p-8">
            {/* Instructions Accordion */}
            <details className="mb-8 bg-white rounded-lg">
              <summary className="cursor-pointer font-bold text-xl p-4 hover:bg-gray-50">
                Try Our Demo
              </summary>
              <div className="p-4 text-gray-700 text-sm leading-relaxed border-t">
                <p className="font-semibold">Step-by-Step Demo Process</p>
                <p className="mt-2"><span className="font-semibold">Connect Your SmartBill Account:</span></p>
                <ul className="list-disc pl-5">
                  <li>Enter your SmartBill email (username), token, and Tax Number (CIF).</li>
                  <li>Click "Connect to SmartBill" to securely link your account.</li>
                </ul>
                <p className="mt-2"><span className="font-semibold">Retrieve Invoice Series:</span></p>
                <ul className="list-disc pl-5">
                  <li>Facturio fetches your available invoice series.</li>
                  <li>If there's only one series, you'll automatically be directed to the test payment page.</li>
                  <li>If multiple series exist, choose the appropriate one from the dropdown.</li>
                </ul>
                <p className="mt-2"><span className="font-semibold">Run the Test:</span></p>
                <ul className="list-disc pl-5">
                  <li>Click "Run Test" to trigger the demo.</li>
                  <li>You'll be redirected to a Stripe test payment page (no real money is transferred).</li>
                  <li>Make a test payment using:
                    <ul className="list-disc pl-5">
                      <li>Card Number: 4242 4242 4242 4242</li>
                      <li>Expiration Date: A valid future date (e.g., 12/34)</li>
                      <li>CVC: Any three-digit number (or four digits for American Express)</li>
                      <li>Other Fields: Fill in with any values.</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-2"><span className="font-semibold">Check Your SmartBill Account:</span></p>
                <ul className="list-disc pl-5">
                  <li>After completing the test payment, visit your SmartBill account.</li>
                  <li>Locate the draft invoice generated from the test Stripe payment.</li>
                  <li>No worries—it won't be emailed or submitted to the eFactura system. Simply delete it if you wish.</li>
                </ul>
                <p className="mt-2"><span className="font-semibold">Data Safety Assurance:</span></p>
                <ul className="list-disc pl-5">
                  <li>Your SmartBill credentials are used securely and only for the demo session.</li>
                  <li>Experience a risk-free demonstration of Facturio's automated invoicing in action.</li>
                </ul>
              </div>
            </details>

            {/* Demo Form */}
            <form onSubmit={handleGetSeries} className="w-full max-w-md mx-auto space-y-6">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="SmartBill Username (Email)"
                  value={smartbillUsername}
                  onChange={(e) => setSmartbillUsername(e.target.value)}
                  className="w-full p-3 border rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                  disabled={isLoading}
                />
                <input
                  type="password"
                  placeholder="SmartBill Token"
                  value={smartbillToken}
                  onChange={(e) => setSmartbillToken(e.target.value)}
                  className="w-full p-3 border rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                  disabled={isLoading}
                />
                <input
                  type="text"
                  placeholder="Tax Number (CIF)"
                  value={taxNumber}
                  onChange={(e) => setTaxNumber(e.target.value)}
                  className="w-full p-3 border rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                  disabled={isLoading}
                />
              </div>

              {invoiceSeries.length > 1 && (
                <div className="space-y-2">
                  <label className="block font-semibold">Select an Invoice Series</label>
                  <select
                    value={selectedSeries}
                    onChange={(e) => setSelectedSeries(e.target.value)}
                    className="w-full p-3 border rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
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

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-3 rounded font-medium transition-colors ${
                    isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  } text-white flex-1 sm:flex-none`}
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
                  } text-white flex-1 sm:flex-none`}
                >
                  {isLoading ? 'Processing...' : 'Run Test'}
                </button>
              </div>

              {errorMessage && (
                <p className="text-center text-red-500 font-medium">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          <ChevronDown className="animate-bounce w-10 h-10 text-gray-600" />
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="font-medium text-2xl text-gray-600 hover:text-gray-800 cursor-pointer mt-8 underline"
        >
          Become an Early Adopter
        </button>
      </div>

      <EarlyAdopterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleEarlyAdopterSubmit}
      />
    </section>
  );
}

export default DemoSection;