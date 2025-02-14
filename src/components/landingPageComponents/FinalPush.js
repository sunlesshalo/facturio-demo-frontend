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
                        Transformă-ți facturarea astăzi—experimentează automatizarea care îți optimizează afacerea!
                    </h2>

                    <p className='text-lg font-medium leading-relaxed text-gray-700'>
                        Într-o piață dinamică, fiecare minut contează. Facturio elimină facturarea manuală, consumatoare de timp și predispusă la erori, astfel încât să te poți concentra pe dezvoltarea afacerii tale. Cu facturi generate automat în timp real și livrare directă către clienți, economisești timp, eviți greșelile costisitoare și te asiguri că rămâi conform cu reglementările. Nu lăsa procesele învechite să te încetinească—adoptă automatizarea și bucură-te de o facturare fără stres!
                    </p>

                    <div className="w-full lg:w-1/4">
                      <Link 
                        href="https://buy.stripe.com/14k14lfLY03V7Cg4gs" 
                        target="_blank"
                        className={cn(buttonVariants({ size: "lg" }), "flex items-center justify-center group px-4")}
                      >
                        <span>Devino Early Adopter</span>
                        <ArrowRight className="ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                    {/* Terms of Service Link */}
                    <p className="mt-4 text-sm text-gray-600">
                        Prin aderarea la Programul Early Adopter, accepți Termenii și condițiile noastre.{' '}
                        <Link href="/terms-of-service" target="_blank" className="text-blue-600 hover:underline">
                            Termeni și Condiții.
                        </Link>.
                    </p>
                    <p className="text-xs text-gray-500 mt-4 text-left">
                        Apăsând butonul, vei fi redirecționat către o pagină Stripe securizată pentru achiziționarea accesului Early Adopter. După efectuarea plății, vei urma un proces simplu pentru lansarea instanței tale Facturio.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default FinalPush