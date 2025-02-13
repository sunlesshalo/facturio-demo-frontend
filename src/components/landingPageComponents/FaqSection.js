'use client'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

function FaqSection() {
    const faqs = [
        {
            question: "How does Facturio work?",
            answer: "It automatically monitors your Stripe account and converts every payment into a compliant SmartBill invoice."
        },
        {
            question: "Do I need technical expertise to use it?",
            answer: "Not at all—simply connect your accounts and let Facturio handle the rest."
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely—Facturio leverages the robust security features of both Stripe and SmartBill."
        },
        {
            question: "Can it email invoices to my clients?",
            answer: "Yes, Facturio can directly email invoices once they’re generated."
        },
        {
            question: "Who can benefit from using Facturio?",
            answer: "To benefit from Facturio, your business must be set up to accept payments via Stripe and be a SmartBill user with a Platinum subscription. The Platinum level is essential as it provides the API access and advanced features needed for Facturio to automate invoice creation and delivery effectively. If you’re not yet using SmartBill or if you're looking for a more integrated solution, we can also help guide you through setting up a complete system that ties together Stripe, SmartBill, and automated invoicing. Please note that Facturio is an independent solution and is not affiliated with, endorsed by, or supported by Stripe or SmartBill."
        },
        {
            question: "What if I have multiple invoice series?",
            answer: "Every early adopter gets a custom instance of Facturio, tailored to your specific invoicing needs. We configure your app with personalized rules to handle multiple invoice series automatically—using, for example, the RO series for local clients and the EXT series for international payments. This ensures accuracy, compliance, and a seamless experience without any manual adjustments."
        },
        {
            question: "What’s the cost to get started?",
            answer: "Join our early adopter program for a one-time fee of 250 RON for lifetime access."
        },
    ];

    return (
        <section className="bg-white/80 py-20" id='faq'>
            <div className="max-w-sm sm:max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12 capitalize">Frequently Asked Questions</h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        return (
                            <div key={index} className="bg-slate-100/50 p-4 px-7 rounded-lg hover:shadow">
                                <Accordion
                                    className='flex w-full flex-col'
                                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                                    variants={{
                                        expanded: {
                                            opacity: 1,
                                            scale: 1,
                                        },
                                        collapsed: {
                                            opacity: 0,
                                            scale: 0.7,
                                        },
                                    }}
                                >
                                    <AccordionItem value='getting-started' className='py-2'>
                                        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950'>
                                            <div className='flex items-center'>
                                                <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90' />
                                                <div className='ml-2 text-zinc-950 text-xl font-semibold'>
                                                    {faq.question}
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className='origin-left'>
                                            <p className='pl-6 pr-2 leading-relaxed text-zinc-500'>
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default FaqSection