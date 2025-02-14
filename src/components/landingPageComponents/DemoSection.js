"use client";
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import EarlyAdopterModal from "./EarlyAdopterModal";
import { ArrowRight, Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';

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
      <div id="about" className="w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-gray-700">
        <h1 className="font-bold text-3xl text-center">Salut, sunt Ferencz</h1>

        <img
          src="/users/profil.jpg"
          alt="user"
          className="inline-block pointer-events-none h-24 w-24 rounded-full my-10"
        />

        <p className="max-w-prose w-fit text-center font-semibold leading-relaxed">
          <span className="font-bold">Eu am creat aplicația Facturio.</span> Am început dezvoltarea acestui app din frustrarea legată de crearea manuală a facturilor pentru fiecare plată Stripe. Ce a început ca o soluție personală s-a transformat rapid într-un instrument esențial pentru antreprenori ocupați, care doresc să se concentreze pe creșterea afacerii. Acum, invit un grup select de early adopters să se alăture și să ajute la perfecționarea acestui tool, astfel încât Facturio să devină partenerul tău de încredere în gestionarea facturării.
        </p>

            <div id="demo" className="my-20 scroll-mt-28 w-full">
          <div className="w-full lg:w-4/5 lg:mx-auto h-auto shadow-md bg-gradient-to-br from-customLightPurple via-customPurple to-customBlue rounded-xl p-8">
            {/* Instructions Accordion */}
            <details className="mb-8 bg-white rounded-lg">
              <summary className="cursor-pointer font-bold text-xl p-4 hover:bg-gray-50">
                Cum funcționează demo-ul?
              </summary>
              <div className="p-4 text-gray-700 text-sm leading-relaxed border-t">
                <p className="mt-2"><span className="font-semibold">Conectează-ți contul SmartBill:</span></p>
                <ul className="list-disc pl-5">
                  <li>Introduce numele tău de utilizator SmartBill (e-mail), token-ul și CUI-ul.</li>
                  <li>Dă clic pe 'Conectare la SmartBill' pentru o conexiune securizată la contul tău SmartBill.</li>
                </ul>
                <p className="mt-2"><span className="font-semibold">Preluare serii de facturi:</span></p>
                <ul className="list-disc pl-5">
                  <li>Facturio preia seriile de facturi disponibile.</li>
                  <li>Dacă există o singură serie, vei fi direcționat automat către pagina test de plată.</li>
                  <li>Dacă există mai multe serii, va trebui să alegi seria dorită din meniul derulant.
</li>
                </ul>
                <p className="mt-2"><span className="font-semibold">Executarea testului:</span></p>
                <ul className="list-disc pl-5">
                  <li>Dă clic pe 'Execută test' pentru a porni demo-ul.</li>
                  <li>Vei fi redirecționat către o pagină de plată test pe Stripe (nu se transferă bani reali).</li>
                  <li>Fă o plată test folosind:
                    <ul className="list-disc pl-5">
                      <li>Număr card: 4242 4242 4242 4242</li>
                      <li>Date de expirare: O dată validă în viitor (e.g., 12/34)</li>
                      <li>CVC: Orice număr de trei cifre </li>
                      <li>Restul câmpurilor: Completează cu orice valori.</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-2"><span className="font-semibold">Verifică-ți contul SmartBill::</span></p>
                <ul className="list-disc pl-5">
                  <li>După finalizarea plății de test, accesează contul tău SmartBill.</li>
                  <li>Uită-te la facturile emise și vei găsi factura ciornă aferentă plății de test.</li>
                  <li>Nu-ți face griji — factura nu va fi trimisă prin e-mail sau prin sistemul eFactură. Poți s-o și ștergi dacă vrei.</li>
                </ul>
                <p className="mt-2"><span className="font-semibold">Asigurarea siguranței datelor:</span></p>
                <ul className="list-disc pl-5">
                  <li>Datele de acreditare SmartBill sunt utilizate în siguranță și doar pentru sesiunea demo.</li>
                  <li>Așa poți testa în siguranță procesul automatizat de facturare al Facturio.</li>
                </ul>
              </div>
            </details>

            {/* Demo Form */}
            <form onSubmit={handleGetSeries} className="w-full max-w-md mx-auto space-y-6">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Nume de utilizator SmartBill (Email)"
                  value={smartbillUsername}
                  onChange={(e) => setSmartbillUsername(e.target.value)}
                  className="w-full p-3 border rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                  disabled={isLoading}
                />
                <input
                  type="password"
                  placeholder="Token SmartBill"
                  value={smartbillToken}
                  onChange={(e) => setSmartbillToken(e.target.value)}
                  className="w-full p-3 border rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                  disabled={isLoading}
                />
                <input
                  type="text"
                  placeholder="CUI"
                  value={taxNumber}
                  onChange={(e) => setTaxNumber(e.target.value)}
                  className="w-full p-3 border rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                  disabled={isLoading}
                />
              </div>

              {invoiceSeries.length > 1 && (
                <div className="space-y-2">
                  <label className="block font-semibold">Selectează o serie:</label>
                  <select
                    value={selectedSeries}
                    onChange={(e) => setSelectedSeries(e.target.value)}
                    className="w-full p-3 border rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                    disabled={isLoading}
                  >
                    <option value="">-- Selectează o serie --</option>
                    {invoiceSeries.map((series, index) => (
                      <option key={index} value={series.name}>
                        {series.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isLoading || demoId !== ''}
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    "group flex items-center justify-center",
                    (isLoading || demoId !== '') && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <span>{isLoading ? 'Conectare...' : 'Conectare la SmartBill'}</span>
                  <ArrowRight className="ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={handleRunTest}
                  disabled={!isRunTestEnabled || isLoading}
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    "flex items-center justify-center",
                    (!isRunTestEnabled || isLoading) && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <span>{isLoading ? 'Procesare...' : 'Execută test'}</span>
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
          onClick={() => window.open("https://buy.stripe.com/14k14lfLY03V7Cg4gs", "_blank")}
          className="font-medium text-2xl text-gray-600 hover:text-gray-800 cursor-pointer mt-8 underline"
        >
          Devino Early Adopter
        </button>
      </div>
      {/* Terms of Service Link */}
      <p className="mt-4 text-sm text-gray-600 text-center">
        Prin aderarea la Programul Early Adopter, accepți Termenii și condițiile noastre.{' '}
          <Link href="/terms-of-service" target="_blank" className="text-blue-600 hover:underline">
              Termeni și condiții
          </Link>.
      </p>
      <div className="max-w-sm mx-auto">
        <p className="text-xs text-gray-500 mt-4 text-center">
          Apăsând butonul, vei fi redirecționat către o pagină Stripe securizată pentru achiziționarea accesului Early Adopter. După efectuarea plății, vei urma un proces simplu pentru lansarea instanței tale Facturio.
        </p>
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