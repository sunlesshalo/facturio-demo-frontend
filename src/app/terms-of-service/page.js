// File: /src/app/terms-of-service/page.js

"use client";
import { useState } from "react";

export default function TermsOfService() {
  const [selectedLang, setSelectedLang] = useState("en");

  // Content for each language with full translations
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
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4">
          Termeni și Condiții pentru Programul Early Adopter
        </h1>
        <p className="text-gray-700 text-sm mb-8">
          <em>Data intrării în vigoare: 14.02.2024</em>
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Introducere și Acceptare</h2>
        <p className="text-gray-700 mb-4">
          1.1. Acești Termeni constituie un acord legal obligatoriu („Acordul”) între dumneavoastră („Utilizator”, „dumneavoastră” sau „al dumneavoastră”) și Pine Lines SRL („Furnizor de Servicii”, „noi”, „nouă” sau „al nostru”) care guvernează participarea dumneavoastră în Programul Early Adopter pentru versiunea beta a aplicației noastre SaaS.
        </p>
        <p className="text-gray-700 mb-4">
          1.2. Prin achitarea taxei unice și accesarea Serviciului, confirmați că ați citit, înțeles și sunteți de acord să fiți obligat de acești Termeni.
        </p>
        <p className="text-gray-700 mb-4">
          1.3. Recunoașteți că Serviciul este furnizat într-o etapă MVP/beta pentru cercetarea de piață și validarea produsului și că veți primi un prototip personalizat separat, implementat pe Replit, pentru uzul dumneavoastră.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Descrierea Serviciului și Garanții</h2>
        <p className="text-gray-700 mb-4">
          2.1. <strong>Statut Beta și Protocoale Personalizate:</strong> Serviciul este în prezent un MVP în faza beta. Deși Serviciul este operațional, acesta este în dezvoltare activă. Fiecare Utilizator va primi un prototip personalizat separat, implementat pe Replit.
        </p>
        <p className="text-gray-700 mb-4">
          2.2. <strong>Acces pe Viață și Garanția de Disponibilitate:</strong> Pentru taxa unică de 250 RON, vi se acordă acces pe viață la prototipul dumneavoastră. În eventualitatea în care o aplicație finală de producție nu este lansată niciodată, garantăm că prototipul dumneavoastră de pe Replit va rămâne operațional (disponibil 24/7) pentru o perioadă de 12 luni de la data implementării—cu excepția întreruperilor cauzate de defecțiuni ale Replit sau alte probleme ale serviciilor terțe, după cum este detaliat în Secțiunea 9.
        </p>
        <p className="text-gray-700 mb-4">
          2.3. <strong>Modificarea Garanției de Bază:</strong> Garanțiile de acces pe viață și garanția de disponibilitate de 12 luni sunt esențiale pentru acest Acord. Orice modificare propusă a acestor garanții va fi comunicată prin email. Dacă nu răspundeți în termen de zece (10) zile lucrătoare de la comunicare, se va considera că ați consimțit la modificare.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Plata</h2>
        <p className="text-gray-700 mb-4">
          3.1. Taxa de participare este o plată unică de 50 USD care asigură accesul pe viață la Serviciu, sub rezerva acestor Termeni.
        </p>
        <p className="text-gray-700 mb-4">
          3.2. Nu vor fi percepute taxe suplimentare pentru accesul continuu conform acestui Acord.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Modificări și Upgradări în Faza Beta</h2>
        <p className="text-gray-700 mb-4">
          4.1. <strong>Actualizări Generale:</strong> Deoarece Serviciul este în fază beta, caracteristicile și funcționalitățile pot fi actualizate sau îmbunătățite pe măsură ce dezvoltăm aplicația. Astfel de modificări (cu excepția celor care afectează garanțiile de bază descrise în Secțiunea 2.2) pot fi implementate fără consimțământ suplimentar.
        </p>
        <p className="text-gray-700 mb-4">
          4.2. <strong>Comunicarea Modificărilor:</strong> Toate modificările vor fi comunicate prin email cu cel puțin 48 de ore înainte de a intra în vigoare.
        </p>
        <p className="text-gray-700 mb-4">
          4.3. <strong>Modificări ale Garanțiilor de Bază:</strong> Orice modificare care afectează accesul pe viață sau garanția de disponibilitate de 12 luni necesită consimțământul explicit al dumneavoastră. Dacă nu primim niciun răspuns în termen de zece (10) zile lucrătoare de la notificare, se va considera că ați fost de acord cu modificarea.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Suport Continu</h2>
        <p className="text-gray-700 mb-4">
          5.1. <strong>Canalul de Suport:</strong> Toate problemele, erorile, sugestiile sau alte chestiuni trebuie trimise prin email la adresa: <a className="underline" href="mailto:ferencz@pinelines.eu">ferencz@pinelines.eu</a>.
        </p>
        <p className="text-gray-700 mb-4">
          5.2. <strong>Confirmarea și Răspunsul:</strong> Vom confirma primirea cererii de suport în termen de 24 de ore și vom depune eforturi comerciale rezonabile pentru a soluționa problema prompt; totuși, timpii de rezolvare vor depinde de complexitatea problemei.
        </p>
        <p className="text-gray-700 mb-4">
          5.3. Salvo acordul scris prealabil, emailul reprezintă singurul canal de suport oferit.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Încetarea</h2>
        <p className="text-gray-700 mb-4">
          6.1. <strong>Încetarea de către Utilizator:</strong> Puteți înceta prezentul Acord din motive de conveniență prin notificare scrisă cu 30 de zile înainte. În cazul încetării de către dumneavoastră din motive de conveniență, nu se va acorda nicio rambursare a taxei de participare.
        </p>
        <p className="text-gray-700 mb-4">
          6.2. <strong>Încetarea pentru Încălcarea Materială:</strong> Oricare dintre părți poate înceta prezentul Acord dacă cealaltă parte încalcă material orice prevedere și nu remediază încălcarea în termen de 14 zile de la notificarea scrisă.
        </p>
        <p className="text-gray-700 mb-4">
          6.3. <strong>Încetarea din Cauza Dependenței de Terți:</strong> Dacă pierdeți accesul la serviciile terțe necesare—cum ar fi o retrogradare, încetare sau neplată care afectează conturile dumneavoastră Smartbill sau Stripe sau chiar aplicația Smartbill—Furnizorul de Servicii nu va fi responsabil pentru întreruperile de serviciu rezultate și își rezervă dreptul de a suspenda sau înceta participarea dumneavoastră.
        </p>
        <p className="text-gray-700 mb-4">
          6.4. <strong>Încetarea pentru Forță Majoră:</strong> Dacă un Eveniment de Forță Majoră (conform definiției din Secțiunea 7) persistă mai mult de 30 de zile consecutive, oricare dintre părți poate înceta prezentul Acord prin notificare scrisă.
        </p>
        <p className="text-gray-700 mb-4">
          6.5. <strong>Efectele Încetării:</strong> La încetare, accesul dumneavoastră la Serviciu va fi suspendat imediat, iar orice obligații restante vor fi soluționate conform politicilor noastre de rambursare și returnare a datelor.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Forță Majoră</h2>
        <p className="text-gray-700 mb-4">
          7.1. <strong>Definiție:</strong> În contextul prezentului Acord, un „Eveniment de Forță Majoră” înseamnă un eveniment sau o circumstanță care scapă de sub controlul rezonabil al părții afectate și care împiedică sau întârzie îndeplinirea obligațiilor sale.
        </p>
        <p className="text-gray-700 mb-4">
          7.2. <strong>Exemple:</strong> Fără a se limita la acestea, Evenimentele de Forță Majoră includ:
          <br />(a) Dezastre Naturale: Cutremure, uragane, inundații, incendii de vegetație sau alte Fapte ale Naturii.
          <br />(b) Acte de Război și Tulburări Civile: Război, terorism, revolte sau tulburări civile.
          <br />(c) Acțiuni Guvernamentale: Schimbări legislative, reglementări sau ordine guvernamentale care afectează material performanța.
          <br />(d) Perturbări Terțe: Schimbări semnificative, ștergeri sau inaccesibilitatea cheilor API, webhook-urilor, token-urilor, secretelor, numelor de utilizator sau datelor utilizatorului.
          <br />(e) Situații de Urgență Medicală Personală: Evenimente semnificative de sănătate personală care afectează Furnizorul de Servicii—cum ar fi perioadele în care este necesară hemodializa în centru, spitalizare prelungită sau evenimente similare—care afectează în mod semnificativ capacitatea noastră de a îndeplini obligațiile.
        </p>
        <p className="text-gray-700 mb-4">
          7.3. <strong>Notificare și Atenuare:</strong> Partea afectată va notifica cealaltă parte cât mai curând posibil și va utiliza toate eforturile rezonabile pentru a atenua impactul Evenimentului de Forță Majoră. Întârzierile cauzate de astfel de evenimente nu vor constitui o încălcare a prezentului Acord.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Dependențe de Terți</h2>
        <p className="text-gray-700 mb-4">
          8.1. <strong>Integrarea Smartbill:</strong> Accesul și utilizarea API-ului Smartbill și a aplicației Smartbill necesită menținerea nivelului adecvat de abonament și a stării contului dumneavoastră. Nu suntem responsabili pentru întreruperile de serviciu sau problemele rezultate din orice retrogradare, încetare sau neplată care afectează contul dumneavoastră Smartbill sau aplicația Smartbill.
        </p>
        <p className="text-gray-700 mb-4">
          8.2. <strong>Contul Stripe:</strong> Similar, nu suntem răspunzători pentru întreruperile de serviciu sau problemele cauzate de schimbări ale stării contului dumneavoastră Stripe, inclusiv retrogradări, încetări sau neplată.
        </p>
        <p className="text-gray-700 mb-4">
          8.3. <strong>Date Controlate de Utilizator:</strong> Nu putem fi considerați responsabili pentru întreruperile de serviciu rezultate din modificări, ștergeri sau inaccesibilitatea cheilor API, webhook-urilor, token-urilor, secretelor sau oricăror date din partea utilizatorului.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Tranziția către Aplicația Finală</h2>
        <p className="text-gray-700 mb-4">
          9.1. <strong>Opțiunea de Tranziție:</strong> În eventualitatea lansării unei versiuni finale de producție a Serviciului, early adopters vor avea opțiunea de a trece la aplicația finală.
        </p>
        <p className="text-gray-700 mb-4">
          9.2. <strong>Migrarea și Beneficiile:</strong> Dacă alegeți să faceți tranziția, datele și configurația existentă vor fi migrate la aplicația finală fără costuri suplimentare, iar dumneavoastră veți continua să beneficiați de cel puțin același nivel de suport și avantaje ca cel prevăzut în acești Termeni, sub rezerva eventualelor modificări în termenii aplicației finale care nu vor fi mai puțin favorabile decât cei stabiliți aici.
        </p>
        <p className="text-gray-700 mb-4">
          9.3. <strong>Ne-tranziționarea:</strong> Dacă alegeți să nu faceți tranziția, prototipul dumneavoastră curent va continua să funcționeze conform termenilor prezentului Acord pentru restul perioadei de garanție a disponibilității de 12 luni, sub rezerva limitărilor stabilite aici.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">10. Proprietate Intelectuală și Confidențialitate</h2>
        <p className="text-gray-700 mb-4">
          10.1. <strong>Proprietate Intelectuală:</strong> Toate drepturile de proprietate intelectuală asupra Serviciului și a software-ului său de bază rămân la Furnizorul de Servicii. Vi se acordă o licență limitată, neexclusivă, de a utiliza Serviciul exclusiv pentru scopuri interne de afaceri.
        </p>
        <p className="text-gray-700 mb-4">
          10.2. <strong>Confidențialitate:</strong> Fiecare parte este de acord să păstreze confidențialitatea oricărei informații proprietare dezvăluite în legătură cu acest Acord, după cum este detaliat suplimentar în Politica noastră de Confidențialitate.
        </p>
        <p className="text-gray-700 mb-4">
          10.3. <strong>Declinarea Garanțiilor și Limitarea Răspunderii:</strong> Serviciul este furnizat „ca atare”, fără garanții de niciun fel, expres sau implicite. În niciun caz Furnizorul de Servicii nu va fi răspunzător pentru daune indirecte, incidentale sau consecvente, cu excepția celor prevăzute în Secțiunea 7 referitoare la Forța Majoră.
        </p>
        <p className="text-gray-700 mb-4">
          10.4. <strong>Legea Aplicabilă:</strong> Acest Acord va fi guvernat de și interpretat în conformitate cu legile României. Orice litigii ce decurg din sau în legătură cu acest Acord vor fi soluționate prin [specificați metoda de soluționare a litigiilor, de exemplu, arbitraj sau instanțele din România].
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">11. Dispoziții Suplimentare</h2>
        <p className="text-gray-700 mb-4">
          11.1. <strong>Funcționalități Promise:</strong> Funcționalitățile exacte oferite de prototip sunt descrise într-un [addendum/anexă] ce va fi furnizat separat.
        </p>
        <p className="text-gray-700 mb-4">
          11.2. <strong>Întregul Acord:</strong> Acești Termeni constituie întregul acord între părți referitor la participarea dumneavoastră în Programul Early Adopter și înlocuiesc toate acordurile sau comunicările anterioare referitoare la acest subiect.
        </p>
        <p className="text-gray-700 mb-4">
          11.3. <strong>Separabilitate:</strong> Dacă orice prevedere a acestor Termeni este considerată invalidă sau inaplicabilă, celelalte prevederi vor rămâne în vigoare.
        </p>
        <p className="text-gray-700 mb-4">
          11.4. <strong>Cesionare:</strong> Nu puteți cesiona niciun drept sau obligație din acest Acord fără consimțământul nostru scris prealabil.
        </p>
        <p className="text-gray-700 mb-4">
          11.5. <strong>Notificări:</strong> Toate notificările către dumneavoastră vor fi trimise prin email la adresa furnizată de dumneavoastră. Sunteți de acord să vă mențineți informațiile de contact actualizate.
        </p>

        <p className="text-gray-700 mt-8">
          <strong>Acceptare:</strong> Prin efectuarea plății unice și accesarea Serviciului, confirmați că ați citit, înțeles și sunteți de acord cu acești Termeni. Dacă nu primim niciun răspuns referitor la o modificare propusă a garanțiilor de bază în termen de zece (10) zile lucrătoare de la notificare, modificarea se va considera acceptată.
        </p>
        <p className="text-gray-700 mt-4">
          Pentru orice întrebări referitoare la acești Termeni, vă rugăm să ne contactați la <a className="underline" href="mailto:ferencz@pinelines.eu">ferencz@pinelines.eu</a>.
        </p>
      </div>
    ),
    hu: (
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-4">
          Szolgáltatási feltételek az Early Adopter Programhoz
        </h1>
        <p className="text-gray-700 text-sm mb-8">
          <em>Érvénybelépés időpontja: 2024.02.14.</em>
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Bevezetés és Elfogadás</h2>
        <p className="text-gray-700 mb-4">
          1.1. Ezek a Feltételek jogilag kötelező érvényű megállapodást („Megállapodás”) képeznek Ön („Felhasználó”, „Ön” vagy „Az Ön”) és a Pine Lines SRL („Szolgáltató”, „mi”, „rólunk” vagy „a mi”) között, amely szabályozza részvételét az Early Adopter Programunkban, a SaaS alkalmazásunk beta verziójára vonatkozóan.
        </p>
        <p className="text-gray-700 mb-4">
          1.2. Az egyszeri díj megfizetésével és a Szolgáltatás igénybevételével megerősíti, hogy elolvasta, megértette és elfogadja, hogy ezek a Feltételek kötelezőek az Ön számára.
        </p>
        <p className="text-gray-700 mb-4">
          1.3. Elismeri, hogy a Szolgáltatás MVP/beta stádiumban kerül biztosításra a piackutatás és a termék validálása céljából, és hogy külön, személyre szabott Replit prototípust fog kapni az Ön számára.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. A Szolgáltatás Leírása és Garanciák</h2>
        <p className="text-gray-700 mb-4">
          2.1. <strong>Beta Státusz és Személyre Szabott Prototípusok:</strong> A Szolgáltatás jelenleg egy MVP beta verzióban van. Bár a Szolgáltatás működőképes, aktív fejlesztés alatt áll. Minden Felhasználó külön, személyre szabott prototípust kap, amelyet a Replit-en telepítünk.
        </p>
        <p className="text-gray-700 mb-4">
          2.2. <strong>Élethosszig Tartó Hozzáférés és Üzemidő Garancia:</strong> Az egyszeri, 250 RON-os díj ellenében élethosszig tartó hozzáférést kap a prototípusához. Abban az esetben, ha a végleges, gyártási verzió soha nem kerül kiadásra, garantáljuk, hogy az Ön Replit prototípusa 12 hónapig a telepítéstől számítva működőképes marad (naponta 24 órán keresztül elérhető), kivéve, ha a Replit kiesése vagy más harmadik fél szolgáltatás problémái miatt fennállnak megszakítások, ahogy az a 9. szakaszban részletezett.
        </p>
        <p className="text-gray-700 mb-4">
          2.3. <strong>Az Alapgaranciák Módosítása:</strong> Az élethosszig tartó hozzáférésre és a 12 hónapos üzemidő garanciára vonatkozó garanciák az alapvető elemei ennek a Megállapodásnak. Bármilyen javasolt változtatást ezekben a garanciákban e-mailben fogunk közölni. Ha tíz (10) munkanapon belül nem kapunk választ a közlésre, azt fogjuk tekinteni, hogy Ön beleegyezett a változtatásba.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Fizetés</h2>
        <p className="text-gray-700 mb-4">
          3.1. A részvételi díj egyszeri, 50 USD összegű fizetés, amely biztosítja az élethosszig tartó hozzáférést a Szolgáltatáshoz, ezen Feltételek mellett.
        </p>
        <p className="text-gray-700 mb-4">
          3.2. Nem számolunk fel további díjakat a jelen Megállapodás szerinti folyamatos hozzáférésért.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Módosítások és Frissítések a Beta Fázisban</h2>
        <p className="text-gray-700 mb-4">
          4.1. <strong>Általános Frissítések:</strong> Mivel a Szolgáltatás beta állapotban van, a funkciók és képességek frissítésre vagy fejlesztésre kerülhetnek az alkalmazás fejlesztése során. Az ilyen változtatások (kivéve azok, amelyek az 2.2. szakaszban leírt alapgaranciákat érintik) további hozzájárulás nélkül kerülhetnek bevezetésre.
        </p>
        <p className="text-gray-700 mb-4">
          4.2. <strong>Változások Kommunikálása:</strong> Minden változtatást legalább 48 órával a hatálybalépés előtt e-mailben közlünk.
        </p>
        <p className="text-gray-700 mb-4">
          4.3. <strong>Alapgaranciákat Érintő Módosítások:</strong> Bármilyen, az élethosszig tartó hozzáférést vagy a 12 hónapos üzemidő garanciát érintő változtatás kifejezett hozzájárulását igényli. Ha tíz (10) munkanapon belül nem érkezik válasz a közlésre, azt tekintjük, hogy Ön beleegyezett a változtatásba.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Folyamatos Támogatás</h2>
        <p className="text-gray-700 mb-4">
          5.1. <strong>Támogatási Csatorna:</strong> Minden problémát, hibát, javaslatot vagy egyéb kérdést e-mailben kell benyújtania a következő címre: <a className="underline" href="mailto:ferencz@pinelines.eu">ferencz@pinelines.eu</a>.
        </p>
        <p className="text-gray-700 mb-4">
          5.2. <strong>Visszaigazolás és Válaszadás:</strong> 24 órán belül visszaigazoljuk a támogatási kérelmét, és kereskedelmileg ésszerű erőfeszítéseket teszünk a probléma mielőbbi megoldása érdekében; azonban a megoldási idők a probléma összetettségétől függnek.
        </p>
        <p className="text-gray-700 mb-4">
          5.3. Kivéve, ha írásban másként nem állapodtunk meg, az e-mail az egyetlen elérhető támogatási csatorna.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Megszüntetés</h2>
        <p className="text-gray-700 mb-4">
          6.1. <strong>Felhasználó általi Megszüntetés:</strong> Ön a saját kényelme érdekében 30 napos írásos értesítéssel megszüntetheti a jelen Megállapodást. Ha Ön saját kényelmi okokból szünteti meg a szerződést, a részvételi díj visszatérítése nem történik meg.
        </p>
        <p className="text-gray-700 mb-4">
          6.2. <strong>Lényegi Szerződésszegés miatti Megszüntetés:</strong> Bármelyik fél megszüntetheti a Megállapodást, ha a másik fél lényegesen megszegi a bármely rendelkezést, és nem orvosolja a szerződésszegést 14 napon belül az írásos értesítést követően.
        </p>
        <p className="text-gray-700 mb-4">
          6.3. <strong>Harmadik Fél Függősége miatti Megszüntetés:</strong> Ha elveszíti a hozzáférést az Ön számára szükséges harmadik fél szolgáltatásokhoz — például a Smartbill vagy Stripe fiókjában bekövetkező leminősítés, megszüntetés vagy a nemfizetés miatt, vagy a Smartbill alkalmazáshoz — a Szolgáltató nem vállal felelősséget az ebből eredő szolgáltatásmegszakításokért, és fenntartja a jogot, hogy felfüggessze vagy megszüntesse az Ön részvételét.
        </p>
        <p className="text-gray-700 mb-4">
          6.4. <strong>Forrásból Adódó Megszüntetés:</strong> Ha egy Forrásból Adódó Esemény (amint azt a 8. szakasz definiálja) több mint 30 egymást követő napig fennáll, bármelyik fél írásbeli értesítéssel megszüntetheti a Megállapodást.
        </p>
        <p className="text-gray-700 mb-4">
          6.5. <strong>A Megszüntetés Hatása:</strong> A megszüntetéskor azonnal felfüggesztjük a Szolgáltatáshoz való hozzáférését, és az esetleges fennálló kötelezettségeket a visszatérítési és adatvisszaadási szabályzatunknak megfelelően kell rendezni.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Forrásból Adódó Események (Force Majeure)</h2>
        <p className="text-gray-700 mb-4">
          7.1. <strong>Definíció:</strong> E Megállapodás céljából a „Forrásból Adódó Esemény” olyan eseményt vagy körülményt jelent, amely az érintett fél ésszerű ellenőrzésén kívül esik, és amely akadályozza vagy késlelteti az adott fél kötelezettségeinek teljesítését.
        </p>
        <p className="text-gray-700 mb-4">
          7.2. <strong>Példák:</strong> Korlátozás nélkül a Forrásból Adódó Események közé tartoznak:
          <br />(a) Természeti Katasztrófák: Földrengések, hurrikánok, árvizek, erdőtüzek vagy más természeti események.
          <br />(b) Háborús és Polgári Zavargások: Háború, terrorizmus, zavargások vagy polgári zavargások.
          <br />(c) Kormányzati Intézkedések: Olyan törvények, rendeletek vagy kormányzati határozatok módosulása, amelyek lényegesen befolyásolják a teljesítést.
          <br />(d) Harmadik Fél Által okozott Zavarok: Jelentős változások, törlések vagy az API kulcsok, webhook-ok, tokenek, titkok, felhasználói nevek vagy az Ön által kezelt adatok elérhetetlensége.
          <br />(e) Személyes Egészségügyi Vészhelyzetek: Olyan jelentős személyes egészségügyi események, amelyek a Szolgáltató működését lényegesen befolyásolják — például a központi hemodialízisre szoruló időszakok, hosszabb kórházi tartózkodás vagy hasonló események.
        </p>
        <p className="text-gray-700 mb-4">
          7.3. <strong>Értesítés és Enyhítés:</strong> Az érintett fél a lehető leghamarabb értesíti a másik felet, és minden ésszerű erőfeszítést megtesz az Esemény hatásainak enyhítésére. Az ilyen események okozta késedelmek nem minősülnek a Megállapodás megszegésének.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Harmadik Fél Függőségek</h2>
        <p className="text-gray-700 mb-4">
          8.1. <strong>Smartbill Integráció:</strong> Az Ön hozzáférése és a Smartbill API, valamint a Smartbill alkalmazás használata feltételezi, hogy fenntartja a megfelelő előfizetési szintet és fiókállapotot. Nem vállalunk felelősséget a szolgáltatásmegszakításokért vagy problémákért, amelyek bármilyen leminősítés, megszüntetés vagy nemfizetés miatt keletkeznek a Smartbill fiókjában vagy az alkalmazásban.
        </p>
        <p className="text-gray-700 mb-4">
          8.2. <strong>Stripe Fiók:</strong> Hasonlóképpen, nem vállalunk felelősséget a szolgáltatásmegszakításokért vagy problémákért, amelyek a Stripe fiókjában bekövetkező változások, például leminősítés, megszüntetés vagy nemfizetés miatt merülnek fel.
        </p>
        <p className="text-gray-700 mb-4">
          8.3. <strong>Felhasználó Által Kezelt Adatok:</strong> Nem tehetők felelőssé a szolgáltatásmegszakítások olyan változásokért, törlésekért vagy az API kulcsok, webhook-ok, tokenek, titkok vagy bármely felhasználó által kezelt adat elérhetetlenségéért.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Áttérés a Végleges Alkalmazásra</h2>
        <p className="text-gray-700 mb-4">
          9.1. <strong>Áttérés Opciója:</strong> Abban az esetben, ha a Szolgáltatás végleges gyártási verzióját kiadják, az early adopter felhasználók lehetőséget kapnak az áttérésre a végleges alkalmazásra.
        </p>
        <p className="text-gray-700 mb-4">
          9.2. <strong>Migráció és Előnyök:</strong> Amennyiben az áttérést választja, a meglévő adatait és konfigurációját további költségek nélkül migráljuk a végleges alkalmazásba, és Ön az itt meghatározott feltételek szerint legalább ugyanolyan szintű támogatást és előnyöket élvez, mint eddig, azzal a feltétellel, hogy a végleges alkalmazás feltételeiben bekövetkező változások nem lesznek hátrányosabbak a jelen dokumentumban foglaltakhoz képest.
        </p>
        <p className="text-gray-700 mb-4">
          9.3. <strong>Nem Áttérés:</strong> Ha úgy dönt, hogy nem tér át, a jelenlegi prototípusa a 12 hónapos üzemidő garanciás időszak fennmaradó részében a Megállapodás feltételei szerint működik, a jelen dokumentumban meghatározott korlátozásokkal.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">10. Szellemi Tulajdon és Titoktartás</h2>
        <p className="text-gray-700 mb-4">
          10.1. <strong>Szellemi Tulajdon:</strong> A Szolgáltatás és az azt alkotó szoftver összes szellemi tulajdonjoga a Szolgáltatónál marad. Önnek korlátozott, nem kizárólagos engedélyt adunk a Szolgáltatás kizárólag belső üzleti célú használatára.
        </p>
        <p className="text-gray-700 mb-4">
          10.2. <strong>Titoktartás:</strong> Mindkét fél vállalja, hogy a jelen Megállapodással összefüggésben bármilyen, a tulajdonjog által védett információt bizalmasan kezel, ahogy azt részletesebben kifejtjük az Adatvédelmi Szabályzatunkban.
        </p>
        <p className="text-gray-700 mb-4">
          10.3. <strong>Jótállások Kizárása és Felelősség Korlátozása:</strong> A Szolgáltatás „ahogy van” alapon kerül biztosításra, kifejezett vagy implicit jótállások nélkül. Semmilyen esetben sem vállal felelősséget a Szolgáltató semmilyen közvetett, véletlen vagy következményes kárért, kivéve a 7. szakaszban a Forrásból Adódó Eseményekkel kapcsolatban foglaltakat.
        </p>
        <p className="text-gray-700 mb-4">
          10.4. <strong>Irányadó Jog:</strong> Jelen Megállapodásra a magyar jog az irányadó, és azt azzal összhangban kell értelmezni. A jelen Megállapodásból eredő vagy azzal kapcsolatos jogvitákat [adja meg a vitarendezési módot, például választottbíróság vagy a magyar bíróságok] rendezik.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">11. Egyéb Feltételek</h2>
        <p className="text-gray-700 mb-4">
          11.1. <strong>Ígért Funkcionalitások:</strong> A prototípus által kínált pontos funkcionalitásokat egy külön [melléklet/függelék] tartalmazza, amelyet később biztosítunk.
        </p>
        <p className="text-gray-700 mb-4">
          11.2. <strong>Teljes Megállapodás:</strong> Jelen Feltételek képezik a felek közötti teljes megállapodást az Early Adopter Programban való részvételre vonatkozóan, és felülírják az addigi minden, ezzel kapcsolatos megállapodást vagy kommunikációt.
        </p>
        <p className="text-gray-700 mb-4">
          11.3. <strong>Elválaszthatóság:</strong> Ha ezeknek a Feltételeknek bármely rendelkezését érvénytelennek vagy alkalmazhatatlannak találják, a többi rendelkezés teljes hatályban marad.
        </p>
        <p className="text-gray-700 mb-4">
          11.4. <strong>Átruházás:</strong> Ön nem ruházhatja át a jelen Megállapodásból eredő jogait vagy kötelezettségeit a mi előzetes írásbeli hozzájárulásunk nélkül.
        </p>
        <p className="text-gray-700 mb-4">
          11.5. <strong>Értesítések:</strong> Minden értesítést az Ön részére az Ön által megadott e-mail címre küldünk. Ön elfogadja, hogy a kapcsolattartási adatait naprakészen tartja.
        </p>

        <p className="text-gray-700 mt-8">
          <strong>Elfogadás:</strong> Az egyszeri fizetés teljesítésével és a Szolgáltatás igénybevételével Ön kijelenti, hogy elolvasta, megértette és elfogadta ezeket a Feltételeket. Amennyiben tíz (10) munkanapon belül nem érkezik válasz az alapgaranciákat érintő javasolt módosításra, a módosítás elfogadottnak tekintendő.
        </p>
        <p className="text-gray-700 mt-4">
          Bármilyen kérdés esetén kérjük, lépjen kapcsolatba velünk a <a className="underline" href="mailto:ferencz@pinelines.eu">ferencz@pinelines.eu</a> címen.
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
