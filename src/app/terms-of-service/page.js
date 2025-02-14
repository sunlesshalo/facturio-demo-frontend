// File: /src/app/terms-of-service/page.js

"use client";
import { useState } from "react";

export default function TermsOfService() {
  const [selectedLang, setSelectedLang] = useState("en");

  // Content for each language (replace with your actual translations)
  const content = {
    en: (
    <div className="max-w-3xl mx-auto py-12 px-6">
      {/* Title and Effective Date */}
      <h1 className="text-3xl font-bold mb-4">
        Terms of Service for the Early Adopter Program
      </h1>
      <p className="text-gray-700 text-sm mb-8">
        <em>Effective Date: 14.02.2025</em>
      </p>

      {/* Section 1: Introduction and Acceptance */}
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction and Acceptance</h2>
      <p className="text-gray-700 mb-4">
        1.1. These Terms constitute a legally binding agreement (“Agreement”) between you (“User”, “you”, or “your”) and Pine Lines SRL (“Service Provider”, “we”, “us”, or “our”) governing your participation in our Early Adopter Program for the beta version of our SaaS application.
      </p>
      <p className="text-gray-700 mb-4">
        1.2. By paying the one‑time fee and accessing the Service, you confirm that you have read, understood, and agree to be bound by these Terms.
      </p>
      <p className="text-gray-700 mb-4">
        1.3. You acknowledge that the Service is provided in an MVP/beta stage for market research and product validation and that you will receive a separate, customized Replit prototype for your use.
      </p>

      {/* Section 2: Service Description and Guarantees */}
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Service Description and Guarantees</h2>
      <p className="text-gray-700 mb-4">
        <strong>2.1. Beta Status and Custom Prototypes:</strong> The Service is currently an MVP in beta. While the Service is operational, it is under active development. Each User will receive a separate, customized prototype deployed on Replit.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>2.2. Lifetime Access and Uptime Guarantee:</strong> For the one‑time fee of 250 RON, you are granted lifetime access to your prototype. In the event that a final production app is never released, we guarantee that your Replit prototype will remain operational (available 24/7) for a period of 12 months from its date of deployment—except for interruptions attributable to Replit outages or other third‑party service issues as detailed in Section 9.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>2.3. Core Guarantee Modification:</strong> The guarantees of lifetime access and the 12‑month uptime guarantee are core to this Agreement. Any proposed changes to these guarantees will be communicated via email. If you do not respond within ten (10) working days of the communication, you will be deemed to have consented to the change.
      </p>

      {/* Section 3: Payment */}
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Payment</h2>
      <p className="text-gray-700 mb-4">
        3.1. The participation fee is a one‑time payment of USD $50 that secures your lifetime access to the Service, subject to these Terms.
      </p>
      <p className="text-gray-700 mb-4">
        3.2. No additional fees will be charged for continued access under this Agreement.
      </p>

      {/* Section 4: Changes and Upgrades During the Beta Phase */}
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes and Upgrades During the Beta Phase</h2>
      <p className="text-gray-700 mb-4">
        <strong>4.1. General Updates:</strong> As the Service is in beta, features and functionalities may be updated or upgraded as we continue to develop the application. Such changes (except those affecting the core guarantees described in Section 2.2) may be implemented without further consent.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>4.2. Communication of Changes:</strong> All changes will be communicated via email at least 48 hours prior to taking effect.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>4.3. Core Guarantee Changes:</strong> Any changes affecting your lifetime access or the 12‑month uptime guarantee require your explicit consent. If no response is received within ten (10) working days of the notification, you will be deemed to have agreed to the change.
      </p>

      {/* Section 5: Ongoing Support */}
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Ongoing Support</h2>
      <p className="text-gray-700 mb-4">
        5.1. <strong>Support Channel:</strong> All issues, bugs, problems, or suggestions must be submitted via email to <a className="underline" href="mailto:ferencz@pinelines.eu">ferencz@pinelines.eu</a>.
      </p>
      <p className="text-gray-700 mb-4">
        5.2. <strong>Acknowledgement and Response:</strong> We will acknowledge receipt of your support request within 24 hours and will use commercially reasonable efforts to address the issue promptly; however, resolution times will depend on the complexity of the issue.
      </p>
      <p className="text-gray-700 mb-4">
        5.3. Unless otherwise agreed in writing, email is the sole support channel provided.
      </p>

      {/* Section 6: Termination */}
      <h2 className="text-xl font-semibold mt-6 mb-2">6. Termination</h2>
      <p className="text-gray-700 mb-4">
        6.1. <strong>Termination by the User:</strong> You may terminate this Agreement for convenience by providing 30 days’ written notice. In the event of termination by you for convenience, no refund of the participation fee shall be provided.
      </p>
      <p className="text-gray-700 mb-4">
        6.2. <strong>Termination for Material Breach:</strong> Either party may terminate this Agreement if the other materially breaches any provision and fails to cure such breach within 14 days after written notice.
      </p>
      <p className="text-gray-700 mb-4">
        6.3. <strong>Termination Due to Third‑Party Dependency:</strong> If you lose access to required third‑party services—such as a downgrade, termination, or non‑payment affecting your Smartbill or Stripe accounts or the Smartbill app itself—the Service Provider shall not be responsible for resulting service interruptions and reserves the right to suspend or terminate your participation.
      </p>
      <p className="text-gray-700 mb-4">
        6.4. <strong>Termination for Force Majeure:</strong> If a Force Majeure Event (as defined in Section 7) persists for more than 30 consecutive days, either party may terminate this Agreement upon written notice.
      </p>
      <p className="text-gray-700 mb-4">
        6.5. <strong>Effect of Termination:</strong> Upon termination, your access to the Service will be immediately suspended, and any outstanding obligations shall be settled according to our refund and data return policies.
      </p>

      {/* Section 7: Force Majeure */}
      <h2 className="text-xl font-semibold mt-6 mb-2">7. Force Majeure</h2>
      <p className="text-gray-700 mb-4">
        7.1. <strong>Definition:</strong> For the purposes of this Agreement, a "Force Majeure Event" means an event or circumstance beyond the reasonable control of the affected party that prevents or delays performance of its obligations.
      </p>
      <p className="text-gray-700 mb-4">
        7.2. <strong>Examples:</strong> Without limitation, Force Majeure Events include: (a) Natural Disasters; (b) Acts of War and Civil Disturbance; (c) Government Actions; (d) Third‑Party Disruptions; (e) Personal Health Emergencies.
      </p>
      <p className="text-gray-700 mb-4">
        7.3. <strong>Notice and Mitigation:</strong> The affected party shall notify the other as soon as reasonably practicable and shall use all reasonable efforts to mitigate the impact of the Force Majeure Event. Delays caused by such events shall not constitute a breach of this Agreement.
      </p>

      {/* Section 8: Third‑Party Dependencies */}
      <h2 className="text-xl font-semibold mt-6 mb-2">8. Third‑Party Dependencies</h2>
      <p className="text-gray-700 mb-4">
        8.1. <strong>Smartbill Integration:</strong> Your access to and use of the Smartbill API and the Smartbill app requires that you maintain the appropriate subscription level and account status. We are not responsible for service interruptions or issues resulting from any downgrade, termination, or non‑payment affecting your Smartbill account or the Smartbill app.
      </p>
      <p className="text-gray-700 mb-4">
        8.2. <strong>Stripe Account:</strong> Similarly, we are not liable for any service interruptions or issues caused by changes to your Stripe account status, including downgrades, terminations, or non‑payment.
      </p>
      <p className="text-gray-700 mb-4">
        8.3. <strong>User-Controlled Data:</strong> We cannot be held accountable for any service interruptions resulting from changes, deletions, or inaccessibility of API keys, webhooks, tokens, secrets, or any user‑side data.
      </p>

      {/* Section 9: Transition to the Final App */}
      <h2 className="text-xl font-semibold mt-6 mb-2">9. Transition to the Final App</h2>
      <p className="text-gray-700 mb-4">
        9.1. <strong>Transition Option:</strong> In the event that a final production version of the Service is released, early adopters will be offered the option to transition to the final app.
      </p>
      <p className="text-gray-700 mb-4">
        9.2. <strong>Migration and Benefits:</strong> Should you choose to transition, your existing data and configuration will be migrated to the final app at no additional cost, and you shall continue to receive at least the same level of support and benefits as provided under these Terms, subject to any changes in the final app’s terms which shall not be less favorable than those set forth herein.
      </p>
      <p className="text-gray-700 mb-4">
        9.3. <strong>Non-Transition:</strong> If you choose not to transition, your current prototype shall continue to operate under the terms of this Agreement for the remainder of the 12‑month uptime guarantee period, subject to the limitations set forth herein.
      </p>

      {/* Section 10: Intellectual Property and Confidentiality */}
      <h2 className="text-xl font-semibold mt-6 mb-2">10. Intellectual Property and Confidentiality</h2>
      <p className="text-gray-700 mb-4">
        10.1. <strong>Intellectual Property:</strong> All intellectual property rights in the Service and its underlying software remain with the Service Provider. You are granted a limited, non‑exclusive license to use the Service solely for your internal business purposes.
      </p>
      <p className="text-gray-700 mb-4">
        10.2. <strong>Confidentiality:</strong> Each party agrees to maintain the confidentiality of any proprietary information disclosed in connection with this Agreement, as further detailed in our Privacy Policy.
      </p>
      <p className="text-gray-700 mb-4">
        10.3. <strong>Disclaimer of Warranties and Limitation of Liability:</strong> The Service is provided "as is" without warranties of any kind, whether express or implied. In no event shall the Service Provider be liable for any indirect, incidental, or consequential damages, except as provided in Section 7 regarding Force Majeure.
      </p>
      <p className="text-gray-700 mb-4">
        10.4. <strong>Governing Law:</strong> This Agreement shall be governed by and construed in accordance with the laws of Romania. Any disputes arising from or relating to this Agreement shall be resolved through the courts of Romania or via arbitration, as agreed upon by the parties.
      </p>

      {/* Section 11: Additional Provisions */}
      <h2 className="text-xl font-semibold mt-6 mb-2">11. Additional Provisions</h2>
      <p className="text-gray-700 mb-4">
        11.1. <strong>Promised Functionalities:</strong> The exact functionalities offered by the prototype are described in an addendum to be provided separately.
      </p>
      <p className="text-gray-700 mb-4">
        11.2. <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between the parties regarding your participation in the Early Adopter Program and supersede all prior agreements or communications related thereto.
      </p>
      <p className="text-gray-700 mb-4">
        11.3. <strong>Severability:</strong> If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.
      </p>
      <p className="text-gray-700 mb-4">
        11.4. <strong>Assignment:</strong> You may not assign any rights or obligations under this Agreement without our prior written consent.
      </p>
      <p className="text-gray-700 mb-4">
        11.5. <strong>Notices:</strong> All notices to you will be sent via email to the address you have provided. You agree to keep your contact information up to date.
      </p>

      {/* Acceptance Clause */}
      <p className="text-gray-700 mt-8">
        <strong>Acceptance:</strong> By making the one‑time payment and accessing the Service, you acknowledge that you have read, understood, and agree to these Terms. If no response is received regarding a proposed change to the core guarantees within ten (10) working days of notification, such change will be deemed accepted.
      </p>
      <p className="text-gray-700 mt-4">
        For any questions regarding these Terms, please contact us at <a className="underline" href="mailto:ferencz@pinelines.eu">ferencz@pinelines.eu</a>.
      </p>
    </div>
  ),
  ro: (
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Termeni de Utilizare pentru Programul Early Adopter (v0.5)
          </h1>
          <p className="text-sm text-gray-700 mb-8">
            <em>Data intrării în vigoare: {new Date().toLocaleDateString("ro-RO")}</em>
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Introducere și Acceptare</h2>
          <p className="text-gray-700 mb-4">
            1.1. Acești termeni constituie un acord juridic obligatoriu („Acord”) între dumneavoastră („Utilizator”, „dvs.”) și Pine Lines SRL („Furnizor de Servicii”, „noi”, „nouă” sau „al nostru”) care reglementează participarea dumneavoastră în Programul Early Adopter pentru versiunea beta a aplicației noastre SaaS.
          </p>
          {/* Adăugați secțiunile suplimentare în română */}
        </div>
      ),
      hu: (
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Felhasználási Feltételek a Korai Adopter Programhoz (v0.5)
          </h1>
          <p className="text-sm text-gray-700 mb-8">
            <em>Hatálybalépés dátuma: {new Date().toLocaleDateString("hu-HU")}</em>
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Bevezetés és Elfogadás</h2>
          <p className="text-gray-700 mb-4">
            1.1. Ezek a feltételek jogilag kötelező érvényű megállapodást jelentenek („Megállapodás”) Ön („Felhasználó”, „Ön” vagy „Öné”) és a Pine Lines SRL („Szolgáltató”, „mi”, „nekünk” vagy „a miénk”) között, amely szabályozza a részvételét a SaaS alkalmazásunk korai adopter programjában.
          </p>
          {/* További szekciók hozzáadása magyarul */}
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
