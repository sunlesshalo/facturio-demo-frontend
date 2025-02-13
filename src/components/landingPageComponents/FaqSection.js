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
            question: "Who benefits from using Facturio?",
            answer: "Freelancers, small business owners, SaaS companies, and digital agencies using Stripe and SmartBill."
        },
        {
            question: "What if I have multiple invoice series?",
            answer: "You can easily select your preferred series during setup—Facturio will use it consistently."
        },
        {
            question: "What’s the cost to get started?",
            answer: "Join our early adopter program for a one-time fee of 50 EUR for lifetime access."
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