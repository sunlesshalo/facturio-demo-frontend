import MaxWidthWrapper from '../MaxWidthWrapper'
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

function HeroSection() {
    return (
        <section className='bg-slate-50'>
            <MaxWidthWrapper className="pt-10 !px-2 lg:!px-10 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:pt-24 lg:pb-20">
                <div className="col-span-1 px-2 lg:px-0">
                    <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl">
                            Transformă-ți plățile Stripe în facturi SmartBill—automatizat!
                        </h1>

                        <p className="mt-8 text-balance text-lg max-w-prose text-center font-semibold lg:pr-10 md:text-wrap lg:text-left">
                            Integrare perfectă care automatizează facturarea, elimină erorile și îți oferă mai mult timp pentru ce contează.
                        </p>

                        <ul className="hidden mt-8 text-left font-medium md:flex flex-col items-center sm:items-start">
                            <div className="space-y-2">
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Facturare instantă
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Facturi fără eroare
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Integrare perfectă
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                                    Eficiență sporită
                                </li>
                            </div>
                        </ul>

                        <Link 
                          href="#demo" 
                          className={cn(
                            buttonVariants({ size: 'lg' }),
                            "flex items-center justify-center group mt-8" // add mt-8 (or another value) here
                          )}
                        >
                          <span>Încearcă demo-ul</span>
                          <ArrowRight className="ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="col-span-full mt-14 md:mt-0 lg:col-span-1">
                    <div className="relative w-full aspect-square lg:aspect-auto lg:h-full rounded-3xl bg-gray-200/80 overflow-hidden">
                        <img 
                            src="https://i.imgur.com/knVagH2.gif" 
                            alt="Animated Graphic" 
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
                        />
                    </div>
                    <p className="mt-4 text-xs text-gray-500 text-center italic">
                        Facturio este o soluție independentă și nu este afiliată, aprobată sau susținută de Stripe sau SmartBill.
                    </p>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default HeroSection