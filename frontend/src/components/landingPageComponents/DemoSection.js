"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function DemoSection() {
  // Form state
  const [smartbillUsername, setSmartbillUsername] = useState('');
  const [smartbillToken, setSmartbillToken] = useState('');
  const [taxNumber, setTaxNumber] = useState('');

  // State for API responses
  const [invoiceSeries, setInvoiceSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState('');
  const [message, setMessage] = useState('');

  // Handler for retrieving invoice series
  const handleGetSeries = async (e) => {
    e.preventDefault();
    setMessage('');
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
        setInvoiceSeries(data.invoice_series);
      } else {
        setMessage(data.error || 'Error retrieving series');
      }
    } catch (error) {
      console.error(error);
      setMessage('Network error');
    }
  };

  // Handler for saving the selected invoice series
  const handleSaveSelection = async () => {
    if (!selectedSeries) {
      setMessage('Please select a series.');
      return;
    }
    setMessage('');
    try {
      const res = await fetch('/api/save-selection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          smartbill_username: smartbillUsername,
          smartbill_token: smartbillToken,
          tax_number: taxNumber,
          selected_series: selectedSeries,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMessage(data.message);
      } else {
        setMessage(data.error || 'Error saving selection');
      }
    } catch (error) {
      console.error(error);
      setMessage('Network error');
    }
  };

  return (
    <section className="bg-white/80 py-20">
      <div className="w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-gray-700">
        <h1 className="font-bold text-3xl text-center">Demo Section</h1>
        <img
          src="/users/john.png"
          alt="user"
          className="inline-block pointer-events-none h-24 w-24 rounded-full my-10"
        />
        <p className="max-w-prose w-fit text-center font-semibold leading-relaxed">
          <span className="font-bold">Your story goes here</span> – Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam optio omnis animi voluptatem modi! Distinctio dolorum ad aliquam temporibus quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facere.
        </p>

        {/* Place the demo form exactly where the placeholder was */}
        <div className="my-20 scroll-mt-28 w-full" id="demo">
          <div className="w-full lg:w-4/5 lg:mx-auto h-auto shadow-md bg-gray-200 rounded-xl p-8">
            <form onSubmit={handleGetSeries} className="w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="SmartBill Username (Email)"
                value={smartbillUsername}
                onChange={(e) => setSmartbillUsername(e.target.value)}
                className="w-full p-3 border rounded mb-4"
                required
              />
              <input
                type="password"
                placeholder="SmartBill Token"
                value={smartbillToken}
                onChange={(e) => setSmartbillToken(e.target.value)}
                className="w-full p-3 border rounded mb-4"
                required
              />
              <input
                type="text"
                placeholder="Tax Number (CIF)"
                value={taxNumber}
                onChange={(e) => setTaxNumber(e.target.value)}
                className="w-full p-3 border rounded mb-4"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Get Invoice Series
              </button>
            </form>

            {invoiceSeries.length > 0 && (
              <div className="w-full max-w-md mx-auto my-4">
                <label className="block mb-2 font-semibold">Select an Invoice Series</label>
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="w-full p-3 border rounded mb-4"
                >
                  <option value="">-- Choose a series --</option>
                  {invoiceSeries.map((series, index) => (
                    <option key={index} value={series.name}>
                      {series.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleSaveSelection}
                  className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Save Selection
                </button>
              </div>
            )}

            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          <ChevronDown className="animate-bounce w-10 h-10 text-gray-600" />
        </div>

        <div className="font-medium text-center text-2xl text-gray-600 hover:text-gray-800 cursor-pointer">
          Try it now
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
