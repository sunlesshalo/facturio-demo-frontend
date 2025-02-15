// src/components/OnboardingPage.js
import { useState } from 'react'

export default function OnboardingPage() {
  // State for SmartBill fields
  const [smartbillUsername, setSmartbillUsername] = useState('')
  const [smartbillToken, setSmartbillToken] = useState('')
  const [taxID, setTaxID] = useState('')
  // State for Stripe field
  const [stripeApiKey, setStripeApiKey] = useState('')
  // State for the unique user ID returned by the backend
  const [userId, setUserId] = useState('')

  // Handler for capturing SmartBill data and fetching invoice series automatically
  const handleSmartbillConnect = async (e) => {
    e.preventDefault()
    try {
      // Capture SmartBill credentials and tax ID
      const res = await fetch('/onboarding/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          smartbill_username: smartbillUsername,
          smartbill_token: smartbillToken,
          company_tax_id: taxID
        }),
      })
      const result = await res.json()
      if (result.success) {
        setUserId(result.user_id)
        alert('Datele SmartBill au fost salvate cu succes. ID: ' + result.user_id)
        // Automatically fetch invoice series after successful capture
        const seriesRes = await fetch('/onboarding/get-series', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: result.user_id }),
        })
        const seriesResult = await seriesRes.json()
        if (seriesResult.success && Array.isArray(seriesResult.invoice_series) && seriesResult.invoice_series.length > 0) {
          // Choose the first invoice series as default, whether there's one or multiple
          const defaultSeries = seriesResult.invoice_series[0]
          alert('Default invoice series set to: ' + JSON.stringify(defaultSeries))
          // Optionally, you could update a state or call another API to confirm that the default series has been saved.
        } else {
          alert('Eroare la preluarea seriilor de facturi: ' + (seriesResult.error || 'No series found'))
        }
      } else {
        alert('Eroare: ' + result.error)
      }
    } catch (err) {
      console.error(err)
      alert('Eroare la salvarea datelor SmartBill.')
    }
  }

  // Handler for finalizing onboarding with Stripe data and creating the webhook
  const handleStripeConnect = async (e) => {
    e.preventDefault()
    if (!userId) {
      alert('Vă rugăm să conectați mai întâi contul SmartBill.')
      return
    }
    try {
      const res = await fetch('/onboarding/finalize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          stripe_api_key: stripeApiKey
        }),
      })
      const result = await res.json()
      if (result.success) {
        alert('Stripe conectat cu succes. Webhook ID: ' + result.stripe_webhook_id)
      } else {
        alert('Eroare: ' + result.error)
      }
    } catch (err) {
      console.error(err)
      alert('Eroare la finalizarea onboarding-ului.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
        {/* Thank-you and confirmation messages */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Mulțumim și felicitări!
        </h1>
        <p className="text-lg text-center text-gray-600 mb-4">
          Ai făcut o alegere excelentă alăturându-te programului early adopter Facturio.
        </p>
        <p className="text-md text-center text-gray-600 mb-8">
          Mai ai doar câțiva pași și vei avea facturarea Stripe complet automatizată!
        </p>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Este timpul să vă conectați conturile și să lăsați deoparte sarcina facturării Stripe
        </h2>

        {/* Accordion: What happens after connection */}
        <details className="mb-8 bg-white rounded-lg">
          <summary className="cursor-pointer font-bold text-xl p-4 hover:bg-gray-50">
            Ce se întâmplă după connectare?
          </summary>
          <div className="p-4 text-gray-700 text-sm leading-relaxed border-t">
            <p>
              După ce v-ați conectat conturile SmartBill și Stripe la Facturio, procesul de automatizare a facturării se va desfășura astfel:
            </p>
            <ol className="list-decimal pl-5 mt-2">
              <li>
                <strong>Crearea unui webhook în Stripe:</strong> Facturio va configura automat un webhook în contul dvs. Stripe, permițând monitorizarea în timp real a tranzacțiilor și notificarea imediată la fiecare plată.
              </li>
              <li>
                <strong>Monitorizarea tranzacțiilor:</strong> Odată activat webhook-ul, Facturio va urmări toate plățile efectuate prin Stripe, primind notificări pentru fiecare tranzacție finalizată.
              </li>
              <li>
                <strong>Transmiterea datelor către SmartBill:</strong> La primirea notificării de plată, Facturio preia automat informațiile relevante și le transmite către SmartBill.
              </li>
              <li>
                <strong>Generarea automată a facturilor:</strong> Pe baza datelor primite, SmartBill emite automat o factură corespunzătoare tranzacției, fără intervenție manuală, asigurând o facturare rapidă și precisă.
              </li>
            </ol>
            <p className="mt-2">
              După configurarea inițială, nu mai este necesar să efectuați alte acțiuni. Întregul proces de facturare este complet automatizat.
            </p>
            <p className="mt-2">
              Dacă aveți întrebări sau nelămuriri, ne puteți contacta la{' '}
              <a href="mailto:ferencz@pinelines.eu" className="text-indigo-600 underline">
                ferencz@pinelines.eu
              </a>.
            </p>
          </div>
        </details>

        {/* Accordion: How to obtain SmartBill auth data */}
        <details className="mb-8 bg-white rounded-lg">
          <summary className="cursor-pointer font-bold text-xl p-4 hover:bg-gray-50">
            Cum îmi găsesc datele de autorizare pentru SmartBill?
          </summary>
          <div className="p-4 text-gray-700 text-sm leading-relaxed border-t">
            <p>
              Pentru a obține datele de autentificare necesare integrării cu SmartBill, urmați pașii de mai jos:
            </p>
            <ol className="list-decimal pl-5 mt-2">
              <li>
                <strong>Accesați contul dvs. SmartBill:</strong> Navigați la{' '}
                <a href="https://cloud.smartbill.ro/auth/login/" className="text-indigo-600 underline" target="_blank" rel="noreferrer">
                  https://cloud.smartbill.ro/auth/login/
                </a>{' '}
                și autentificați-vă cu datele dvs.
              </li>
              <li>
                <strong>Accesați secțiunea de integrări:</strong> După autentificare, în meniul principal, selectați "Contul meu". Din submeniul afișat, alegeți "Integrări".
              </li>
              <li>
                <strong>Localizați secțiunea API:</strong> În pagina de integrări, derulați până la secțiunea "API". Aici veți găsi informațiile necesare:
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Nume de utilizator (Email):</strong> Adresa de email folosită pentru contul SmartBill.
                  </li>
                  <li>
                    <strong>Token:</strong> Cheia API generată pentru contul dvs.
                  </li>
                  <li>
                    <strong>CUI (Cod Unic de Înregistrare):</strong> CIF-ul companiei dvs.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Copiați și stocați informațiile:</strong> Faceți clic pe butonul de copiere sau selectați manual textul pentru fiecare câmp și salvați-l. Introduceți valorile copiate în câmpurile de mai jos.
              </li>
            </ol>
            <p className="mt-2">
              <strong>Notă de securitate:</strong> Tratați aceste date cu maximă confidențialitate și evitați partajarea lor în medii nesecurizate sau publice.
            </p>
          </div>
        </details>

        {/* SmartBill Capture Form */}
        <form onSubmit={handleSmartbillConnect} className="space-y-4 mb-8">
          <div>
            <label htmlFor="smartbillUsername" className="block text-sm font-medium text-gray-700">
              SmartBill Username (Email)
            </label>
            <input
              type="email"
              id="smartbillUsername"
              value={smartbillUsername}
              onChange={(e) => setSmartbillUsername(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="smartbillToken" className="block text-sm font-medium text-gray-700">
              SmartBill Token
            </label>
            <input
              type="text"
              id="smartbillToken"
              value={smartbillToken}
              onChange={(e) => setSmartbillToken(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="taxID" className="block text-sm font-medium text-gray-700">
              Cod Unic de Înregistrare (CUI)
            </label>
            <input
              type="text"
              id="taxID"
              value={taxID}
              onChange={(e) => setTaxID(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Conectează la SmartBill
          </button>
        </form>

        {/* Accordion: How to create a Restricted Stripe API key */}
        <details className="mb-8 bg-white rounded-lg">
          <summary className="cursor-pointer font-bold text-xl p-4 hover:bg-gray-50">
            Cum creez un Restricted Stripe API key?
          </summary>
          <div className="p-4 text-gray-700 text-sm leading-relaxed border-t">
            <p>
              Pentru a crea o cheie API restricționată și a o furniza către Facturio.app, urmați pașii de mai jos:
            </p>
            <ol className="list-decimal pl-5 mt-2">
              <li>
                <strong>Accesați pagina de chei API:</strong> Navigați la{' '}
                <a href="https://dashboard.stripe.com/apikeys" className="text-indigo-600 underline" target="_blank" rel="noreferrer">
                  https://dashboard.stripe.com/apikeys
                </a>{' '}
                și autentificați-vă în contul dvs. Stripe.
              </li>
              <li>
                <strong>Creați o cheie restricționată:</strong> Faceți clic pe butonul "Create restricted key".
              </li>
              <li>
                <strong>Selectați utilizarea cheii API:</strong> La pasul "How will you use this API key?", selectați opțiunea "Providing this key to another website". Faceți clic pe "Continue".
              </li>
              <li>
                <strong>Introduceți detaliile Facturio:</strong>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Name:</strong> Introduceți "Facturio.app".
                  </li>
                  <li>
                    <strong>URL:</strong> Introduceți "https://facturio.app/".
                  </li>
                  <li>
                    <strong>Nu bifați</strong> caseta "Customize permissions for this key".
                  </li>
                </ul>
                Faceți clic pe "Create restricted key".
              </li>
              <li>
                <strong>Finalizați și salvați cheia:</strong> Noua cheie creată va fi afișată. Copiați-o imediat și stocați-o în siguranță, deoarece nu va mai fi vizibilă complet ulterior. Această cheie, un șir lung de caractere amestecate, trebuie introdusă în câmpul <em>Restricted Stripe API Key</em> de pe pagina de onboarding.
              </li>
            </ol>
            <p className="mt-2">
              <strong>Notă de securitate:</strong> Tratați cheile API cu maximă confidențialitate. Evitați expunerea lor în depozite publice, cod client-side sau medii nesecurizate. Revizuiți și rotiți periodic cheile pentru a menține securitatea.
            </p>
            <p className="mt-2">
              Pentru informații suplimentare, consultați documentația oficială Stripe despre cheile API și permisiuni.
            </p>
          </div>
        </details>

        {/* Stripe Capture Form */}
        <form onSubmit={handleStripeConnect} className="space-y-4 mb-8">
          <div>
            <label htmlFor="stripeApiKey" className="block text-sm font-medium text-gray-700">
              Restricted Stripe API Key
            </label>
            <input
              type="text"
              id="stripeApiKey"
              value={stripeApiKey}
              onChange={(e) => setStripeApiKey(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Conectează la Stripe
          </button>
        </form>
      </div>
    </div>
  )
}
