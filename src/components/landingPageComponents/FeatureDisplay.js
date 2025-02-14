import { Sparkle, } from 'lucide-react';

function FeatureDisplay() {
    return (
        <section className="bg-gradient-to-br from-customLightPurple/50 via-customPurple/50 to-customBlue/50 py-20">
            <div className='max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto flex flex-col gap-4'>
                <h2 className='tracking-tight font-bold text-center md:text-left text-3xl lg:text-5xl lg:leading-[3.5rem]'>
                    Tot ce trebuie să faci este să conectezi conturile Stripe și SmartBill prin Facturio.
                </h2>
                <p className='font-semibold my-4 text-center md:text-left text-gray-700'>
                    Introduci datele de acreditare SmartBill, selectezi seria de facturi și lași Facturio să facă restul. Odată conectat, fiecare plată Stripe generează automat o factură conformă—și, dacă vrei, o trimite direct clientului. Fără efort, fără erori. Doar facturare automată, rapidă și fără stres.
                </p>

                <div className='flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8 md:gap-0 mt-4'>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Sparkle className={`h-5 w-5 md:h-10 md:w-10group-hover:text-gray-600 transition-colors duration-200`} />
                        <p className={`text-sm font-semibold  group-hover:text-gray-600 transition-colors duration-200`}>Facturare în timp real</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Sparkle className={`h-5 w-5 md:h-10 md:w-10group-hover:text-gray-600 transition-colors duration-200`} />
                        <p className={`text-sm font-semibold  group-hover:text-gray-600 transition-colors duration-200`}>Transfer securizat de date</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Sparkle className={`h-5 w-5 md:h-10 md:w-10group-hover:text-gray-600 transition-colors duration-200`} />
                        <p className={`text-sm font-semibold  group-hover:text-gray-600 transition-colors duration-200`}>Integrare perfectă cu Stripe</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 group cursor-pointer'>
                        <Sparkle className={`h-5 w-5 md:h-10 md:w-10group-hover:text-gray-600 transition-colors duration-200`} />
                        <p className={`text-sm font-semibold  group-hover:text-gray-600 transition-colors duration-200`}>Trimitere prin e-mail</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureDisplay