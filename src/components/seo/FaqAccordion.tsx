type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqs: FaqItem[];
};

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <section className="mt-12 border border-slate-200 bg-slate-50 p-5 md:p-7">
      <h2 className="text-xl font-serif text-slate-900">Frequently Asked Questions</h2>
      <div className="mt-4 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
