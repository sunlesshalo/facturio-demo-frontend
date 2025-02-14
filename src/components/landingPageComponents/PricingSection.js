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
            Early Adopter Program
          </h2>
          <div className="max-w-3xl text-center bg-white p-6 shadow-lg rounded-lg">
            <p className="text-[#6B7989] text-lg leading-relaxed">
              Join our exclusive <span className="font-bold">Early Adopter Program</span> and get a{' '}
              <span className="font-bold">customized instance of Facturio</span> tailored to your
              specific invoicing needs. For a <span className="font-bold">one-time fee of 250 RON</span>,
              you'll secure lifetime access at a steep discount compared to future pricing. With{' '}
              <span className="font-bold">only 10 spots available</span>, each participant receives
              personalized setup and dedicated support—including custom rules to manage multiple invoice
              series (e.g., RO for local and EXT for international payments).{' '}
              <span className="font-bold">Become a pioneer and streamline your billing process today!</span>
            </p>
            {/* Terms of Service Link */}
            <p className="mt-4 text-sm text-gray-600">
                By joining the Early Adopter Program, you agree to our{' '}
                <Link href="/terms-of-service" target="_blank" className="text-blue-600 hover:underline">
                    Terms of Service
                </Link>.
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => window.open("https://buy.stripe.com/14k14lfLY03V7Cg4gs", "_blank")}
                  className={cn(buttonVariants({ size: 'lg' }), "flex items-center justify-center group")}
                >
                  <span>Claim Your Spot</span>
                  <ArrowRight className="ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Disclaimer: Clicking this button will redirect you to a secure Stripe payment page where you can purchase your Early Adopter spot. Once your payment is processed, you'll be guided through a simple setup process to launch your Facturio instance.
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
