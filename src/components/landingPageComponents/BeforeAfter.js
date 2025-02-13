import MaxWidthWrapper from '../MaxWidthWrapper'
import { Check, Star, X } from 'lucide-react';

function BeforeAfter() {
    return (
        <section className='bg-white/80'>
            <MaxWidthWrapper className='pb-10 pt-20'>
                <div className='max-w-3xl mx-auto tracking-tight flex flex-col items-center justify-center gap-5'>
                    <div className="flex items-center justify-center gap-1.5">
                        <X className='w-8 h-8 sm:w-6 sm:h-6 text-red-600' />
                        <h2 className='font-bold text-xl md:text-3xl text-center'>
                            Don’t waste time with error-prone, manual invoicing systems.
                        </h2>
                    </div>

                    <div className="flex items-center justify-center gap-1.5">
                        <Check className='w-8 h-8 sm:w-6 sm:h-6 text-green-600' />
                        <h2 className='font-bold text-xl md:text-3xl text-center text-balance'>
                            Facturio transforms every Stripe payment into a compliant SmartBill invoice—automatically and flawlessly.
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row lg:max-w-4xl lg:mx-auto items-center justify-center lg:gap-14 my-16">
                    <div className='flex w-full sm:flex-1 flex-col items-center bg-primary-foreground rounded-2xl shadow-md py-12'>
                        <ul className="text-left font-medium flex flex-col items-center sm:items-start">
                            <div className="space-y-2 tracking-wide text-xl">
                                <h3 className='font-bold'>Before</h3>

                                <li className="flex gap-1.5 items-center text-left">
                                    <X className="h-4 w-4 shrink-0 text-red-500" />
                                    You waste time and effort creating invoices from Stripe payments manually.
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <X className="h-4 w-4 shrink-0 text-red-500" />
                                    Manual data entry breeds frequent errors and compliance headaches.
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <X className="h-4 w-4 shrink-0 text-red-500" />
                                    Your billing process is a chaotic, time-sapping ordeal.
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <X className="h-4 w-4 shrink-0 text-red-500" />
                                    Administrative tasks distract you from focusing on your core business.
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div className='flex w-full sm:flex-1 flex-col items-center bg-primary/10 rounded-2xl shadow-md py-12'>
                        <ul className="text-left font-medium flex flex-col items-center sm:items-start">
                            <div className="space-y-2 tracking-wide text-xl">
                                <h3 className='font-bold'>After</h3>

                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                                    Invoicing becomes fully automated and instant.
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                                    Every Stripe payment is converted into a SmartBill invoice with precision.
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                                    Errors and compliance worries vanish from your workflow.
                                </li>
                                <li className="flex gap-1.5 items-center text-left">
                                    <Check className="h-4 w-4 shrink-0 text-green-600" />
                                    You gain extra time to focus on strategic growth and client relationships.
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* user testimonial 
                <div className="max-w-lg mx-auto my-20 flex flex-col items-center sm:items-start">
                    <div className="mx-auto flex items-center justify-center gap-1 mb-4">
                        {Array(5).fill().map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>

                    <div className='text-center font-semibold text-balance text-gray-800'>
                        I can't imagine my life without <span className='bg-yellow-200'>using this app</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, assumenda Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, odit
                    </div>

                    <div className='flex mx-auto items-center justify-center gap-4 my-6'>
                        <img src="/users/john.png" alt="user" className="inline-block pointer-events-none object-cover h-12 w-12 rounded-full ring-2 ring-gray-300" />
                        <div className="flex flex-col">
                            <p className='font-semibold'>John D</p>
                            <p className='text-sm'>User One</p>
                        </div>
                    </div>
                </div> 
                user testimonial end */}
            </MaxWidthWrapper>
        </section>
    )
}

export default BeforeAfter