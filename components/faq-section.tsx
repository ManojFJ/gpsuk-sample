'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How can I place an order for promotional merchandise?',
    a: 'To place an order for business promotional products, browse our extensive catalogue of unique promotional products on our website, select your items, and securely complete your purchase. You can also contact us directly for bulk orders.',
  },
  {
    q: 'What is the typical turnaround time for orders?',
    a: 'Turnaround times vary based on customization and product type. Standard orders generally ship within 7-10 business days, with express options available for urgent requirements.',
  },
  {
    q: 'Can I get assistance in selecting the right promotional items?',
    a: 'Absolutely! Contact our team of experts for guidance in choosing the best promotional products tailored to your brand and marketing goals, whether for events or trade shows.',
  },
  {
    q: 'Do you offer customization or branding services?',
    a: 'Yes, we provide comprehensive customization for logo promotional products and brand promotional products. Our team ensures your branding needs are met with the highest standards.',
  },
  {
    q: 'What are the payment options available for orders?',
    a: 'We offer various payment methods, including credit/debit cards and secure online platforms, making it easy and convenient to purchase from the best company for promotional products.',
  },
  {
    q: 'Do you have a minimum order quantity?',
    a: 'We pride ourselves on offering low MOQs, making our products accessible whether you need a small batch or a large bulk order. Contact us for specific product minimums.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-14 bg-white">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1A1A1A] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-black/50 text-sm mb-8">
          Everything you need to know about our promotional products and services.
        </p>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-black/10 rounded-xl px-5 data-[state=open]:border-brand-blue/30 transition-colors"
            >
              <AccordionTrigger className="text-sm font-medium text-[#1A1A1A] hover:text-brand-blue py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-black/60 leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
