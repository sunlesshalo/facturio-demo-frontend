// File: /src/app/privacy-policy/page.js

"use client";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [selectedLang, setSelectedLang] = useState("en");

  // Content for each language
  const content = {
    en: (
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 text-sm mb-8">
          <em>Effective Date: 14.02.2025</em>
        </p>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This Privacy Policy explains how Pine Lines SRL (“we”, “us”, or “our”) collects, uses, discloses, and protects your personal information when you access or use our services.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect personal information such as your name, email address, and usage data when you register for or use our services.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use your personal information to provide, maintain, and improve our services, and to communicate with you regarding updates or offers related to our services.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Disclosure of Your Information</h2>
        <p className="text-gray-700 mb-4">
          We do not sell your personal information. We may share your information with trusted third parties who assist us in operating our service, subject to confidentiality agreements.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise any of these rights.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
        <p className="text-gray-700 mt-8">
          For any questions regarding this Privacy Policy, please contact us at{" "}
          <a className="underline" href="mailto:ferencz@pinelines.eu">
            ferencz@pinelines.eu
          </a>.
        </p>
      </div>
    ),
    ro: (
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4">Politica de Confidențialitate</h1>
        <p className="text-gray-700 text-sm mb-8">
          <em>Data intrării în vigoare: 14.02.2025</em>
        </p>
        <p className="text-gray-700 mb-4">
          Confidențialitatea dumneavoastră este importantă pentru noi. Această Politică de Confidențialitate explică modul în care Pine Lines SRL („noi”, „nouă” sau „al nostru”) colectează, folosește, divulgă și protejează informațiile dumneavoastră personale atunci când accesați sau utilizați serviciile noastre.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Informații pe care le Colectăm</h2>
        <p className="text-gray-700 mb-4">
          Putem colecta informații personale, cum ar fi numele, adresa de email și date de utilizare, atunci când vă înregistrați sau utilizați serviciile noastre.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Cum Folosim Informațiile Dumneavoastră</h2>
        <p className="text-gray-700 mb-4">
          Folosim informațiile dumneavoastră personale pentru a furniza, menține și îmbunătăți serviciile noastre, precum și pentru a comunica cu dumneavoastră despre actualizări sau oferte legate de serviciile noastre.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Divulgarea Informațiilor</h2>
        <p className="text-gray-700 mb-4">
          Nu vindem informațiile dumneavoastră personale. Putem partaja informațiile cu terți de încredere care ne asistă în operarea serviciului nostru, sub rezerva acordurilor de confidențialitate.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Securitatea Datelor</h2>
        <p className="text-gray-700 mb-4">
          Implementăm măsuri de securitate rezonabile pentru a proteja informațiile dumneavoastră personale. Totuși, nici o metodă de transmitere a datelor pe internet nu este 100% sigură.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Drepturile Dumneavoastră</h2>
        <p className="text-gray-700 mb-4">
          Aveți dreptul de a accesa, actualiza sau șterge informațiile dumneavoastră personale. Vă rugăm să ne contactați dacă doriți să exercitați oricare dintre aceste drepturi.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Modificări ale Politicii</h2>
        <p className="text-gray-700 mb-4">
          Putem actualiza această Politică de Confidențialitate ocazional. Orice modificare va fi publicată pe această pagină, cu o dată de intrare în vigoare actualizată.
        </p>
        <p className="text-gray-700 mt-8">
          Pentru orice întrebări referitoare la această Politică de Confidențialitate, vă rugăm să ne contactați la{" "}
          <a className="underline" href="mailto:ferencz@pinelines.eu">
            ferencz@pinelines.eu
          </a>.
        </p>
      </div>
    ),
    hu: (
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4">Adatvédelmi Szabályzat</h1>
        <p className="text-gray-700 text-sm mb-8">
          <em>Érvénybelépés időpontja: 14.02.2025</em>
        </p>
        <p className="text-gray-700 mb-4">
          Az Ön adatainak védelme fontos számunkra. Ez az Adatvédelmi Szabályzat bemutatja, hogyan gyűjtjük, használjuk, osztjuk meg és védjük a személyes adatait a Pine Lines SRL („mi”, „rólunk”, „a mi”) által, amikor Ön igénybe veszi szolgáltatásainkat.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Gyűjtött Információk</h2>
        <p className="text-gray-700 mb-4">
          Személyes adatokat, például a nevét, email címét és használati adatokat gyűjthetünk, amikor regisztrál a szolgáltatásainkra vagy használja azokat.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Az Információk Felhasználása</h2>
        <p className="text-gray-700 mb-4">
          Az Ön személyes adatait a szolgáltatásaink nyújtására, fenntartására és fejlesztésére, valamint az Önnel való kommunikációra használjuk, különösen a frissítések és ajánlatok kapcsán.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Az Információk Megosztása</h2>
        <p className="text-gray-700 mb-4">
          Nem értékesítjük az Ön személyes adatait. Megoszthatjuk azokat megbízható harmadik felekkel, akik segítik a szolgáltatás működtetését, természetesen bizalmas megállapodások keretében.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Adatbiztonság</h2>
        <p className="text-gray-700 mb-4">
          Megfelelő biztonsági intézkedéseket vezetünk be a személyes adatok védelme érdekében. Ugyanakkor az interneten történő adatátvitel nem garantáltan 100%-os biztonságot nyújt.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Az Ön Jogai</h2>
        <p className="text-gray-700 mb-4">
          Ön jogosult hozzáférni, frissíteni vagy törölni a személyes adatait. Kérjük, vegye fel velünk a kapcsolatot, ha ezen jogok gyakorlása mellett dönt.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">6. A Szabályzat Módosítása</h2>
        <p className="text-gray-700 mb-4">
          Ezt az Adatvédelmi Szabályzatot időről időre frissíthetjük. A módosításokat ezen az oldalon tesszük közzé, a hatálybalépés dátumának frissítésével.
        </p>
        <p className="text-gray-700 mt-8">
          Bármilyen kérdés esetén kérjük, lépjen kapcsolatba velünk a{" "}
          <a className="underline" href="mailto:ferencz@pinelines.eu">
            ferencz@pinelines.eu
          </a>{" "}
          címen.
        </p>
      </div>
    )
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      {/* Language Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedLang("en")}
          className={`px-4 py-2 border rounded ${selectedLang === "en" ? "bg-gray-200" : "bg-white"}`}
        >
          English
        </button>
        <button
          onClick={() => setSelectedLang("ro")}
          className={`px-4 py-2 border rounded ${selectedLang === "ro" ? "bg-gray-200" : "bg-white"}`}
        >
          Română
        </button>
        <button
          onClick={() => setSelectedLang("hu")}
          className={`px-4 py-2 border rounded ${selectedLang === "hu" ? "bg-gray-200" : "bg-white"}`}
        >
          Magyar
        </button>
      </div>

      {/* Display the content for the selected language */}
      {content[selectedLang]}
    </div>
  );
}
