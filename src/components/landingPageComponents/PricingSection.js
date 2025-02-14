"use client";
import MaxWidthWrapper from '../MaxWidthWrapper';
import { useState } from 'react';
import EarlyAdopterModal from './EarlyAdopterModal'; // Ensure the path is correct
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

function EarlyAdopterSection() {
  // Define state for controlling the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler for modal submission (customize as needed)
  const handleEarlyAdopterSubmit = ({ name, email }) => {
    // Process the submission (e.g., send data to your backend)
    alert(`Thank you ${name}! We will be in touch.`);
    setIsModalOpen(false);
  };

  return (
    <section
      id="early-adopter"
      className="bg-gradient-to-br from-customLightPurple/50 via-customPurple/50 to-customBlue/50 py-20"
    >
      <MaxWidthWrapper>
        <div className="flex flex-col items-center">
          <h2 className="text-black text-3xl font-bold leading-relaxed mb-6">
            Programul Early Adopter
          </h2>
          <div className="max-w-3xl text-center bg-white p-6 shadow-lg rounded-lg">
            <p className="text-[#6B7989] text-lg leading-relaxed">
              Alătură-te <span className="font-bold">programului Early Adopter</span> și primești <span className="font-bold">o instanță Facturio personalizată</span> pentru nevoile tale de facturare. Pentru o <span className="font-bold">taxă unică de 250 RON</span>, ai acces pe viață la un preț semnificativ redus față de cel final. Sunt <span className="font-bold">doar 10 locuri disponibile</span>, iar fiecare participant beneficiază de configurare personalizată și suport dedicat—including reguli pentru gestionarea mai multor serii de facturi (ex: RO pentru clienți locali, EXT pentru internaționali). <span className="font-bold">Fii printre primii utilizatori și automatizează-ți facturarea chiar acum!</span>
            </p>
            {/* Terms of Service Link */}
            <p className="mt-4 text-sm text-gray-600">
              Prin aderarea la Programul Early Adopter, accepți Termenii și condițiile noastre. {' '}
                <Link href="/terms-of-service" target="_blank" className="text-blue-600 hover:underline">
                    Termeni și Condiții
                </Link>.
            </p>
            <div className="flex justify-center mt-2">
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => window.open("https://buy.stripe.com/14k14lfLY03V7Cg4gs", "_blank")}
                  className={cn(buttonVariants({ size: 'lg' }), "flex items-center justify-center group")}
                >
                  <span>Asigură-ți locul acum</span>
                  <ArrowRight className="ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Apăsând butonul, vei fi redirecționat către o pagină Stripe securizată pentru achiziționarea accesului Early Adopter. După efectuarea plății, vei urma un proces simplu pentru lansarea instanței tale Facturio.
            </p>

          </div>
        </div>
      </MaxWidthWrapper>
      {/* Conditionally render the EarlyAdopterModal */}
      {isModalOpen && (
        <EarlyAdopterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleEarlyAdopterSubmit}
        />
      )}
    </section>
  );
}

export default EarlyAdopterSection;
