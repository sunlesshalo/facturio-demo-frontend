import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IoIosRocket } from "react-icons/io";
import { buttonVariants } from "../ui/button";

function FinalPush() {
    return (
        <section className='pt-40 pb-32 px-5' id='contact'>
            <div className='flex flex-col md:flex-row max-w-5xl mx-auto px-14 py-10 gap-10 bg-gradient-to-br from-customLightPurple via-customPurple to-customBlue rounded-3xl'>
                <div className="space-y-6">
                    <h2 className='relative tracking-tight font-bold text-3xl md:text-4xl'>
                        <span className='absolute top-[-20px] right-0'>
                            <IoIosRocket className='h-10 w-10 text-sky-900' />
                        </span>
                        Transform Your Billing Today—Experience Automation That Empowers Your Business!
                    </h2>

                    <p className='text-lg font-medium leading-relaxed text-gray-700'>
                        In today’s fast-paced market, every minute counts. Facturio eliminates the tedious, error-prone manual invoicing process, so you can focus on growing your business. With real-time, automated invoice creation and direct client delivery, you gain a competitive edge by saving time, ensuring compliance, and eliminating costly mistakes. Don’t let outdated methods slow you down—step into a future of effortless efficiency and true operational freedom.
                    </p>

                    <div className="w-full lg:w-1/4">
                      <Link 
                        href="https://buy.stripe.com/14k14lfLY03V7Cg4gs" 
                        target="_blank"
                        className={cn(buttonVariants({ size: "lg" }), "flex items-center justify-center group px-4")}
                      >
                        <span>Join Early Adopter Program</span>
                        <ArrowRight className="ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-left">
                      Disclaimer: Clicking this button will redirect you to a secure Stripe payment page where you can purchase your Early Adopter spot. Once your payment is processed, you'll be guided through a simple setup process to launch your Facturio instance.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default FinalPush