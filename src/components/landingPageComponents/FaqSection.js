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
            question: "Cum funcționează Facturio?",
            answer: "Facturio monitorizează automat contul tău de Stripe și convertește fiecare plată într-o factură SmartBill."
        },
        {
            question: "Am nevoie de cunoștințe tehnice pentru a-l folosi?",
            answer: "Deloc—conectezi conturile prin Facturio și automatizarea se ocupă de restul."
        },
        {
            question: "Sunt în siguranță datele mele?",
            answer: "Absolut—Facturio folosește caracteristicile de securitate avansate ale Stripe și SmartBill."
        },
        {
            question: "Poate trimite facturile prin e-mail clienților mei?",
            answer: "Da, Facturio poate trimite direct facturile generate."
        },
        {
            question: "De ce am nevoie ca să pot folosi Facturio?",
            answer: "Pentru a folosi Facturio, trebuie să ai un cont Stripe și să fii utilizator SmartBill cu abonament Platinum. Nivelul Platinum oferă acces API și funcții avansate necesare pentru automatizarea facturilor."
        },
        {
            question: "Ce se întâmplă dacă am mai multe serii de facturi?",
            answer: "Fiecare utilizator early adopter primește o instanță personalizată Facturio, cu reguli pentru gestionarea automată a seriilor de facturi."
        },
        {
            question: "Cât costă?",
            answer: "O taxă unică de 250 RON pentru acces pe viață."
        },
    ];

    return (
        <section className="bg-white/80 py-20" id='faq'>
            <div className="max-w-sm sm:max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12 capitalize">Întrebări frecvente</h1>

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