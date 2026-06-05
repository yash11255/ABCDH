import type { Metadata } from "next";
import Header from "../components/Header";
import ABCD_Knowledge_Base from "../ABCD_Knowledge_Base";
import Footer from "../Footer";
import { collectionPageGraph, faqPageNode, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "ABCD Knowledge Base | Clinical Portal",
  description:
    "Explore the ABCD knowledge base with pathophysiology references, staging concepts, and systemic complication taxonomy.",
  alternates: {
    canonical: "/knowledge-base",
  },
};

const kbFaqs = [
  {
    question: "What is contained in the ABCD knowledge base?",
    answer:
      "The ABCD knowledge base contains comprehensive information on adiposity-based chronic disease pathophysiology, staging concepts, systemic complication taxonomy, clinical assessment protocols, and evidence-based management strategies.",
  },
  {
    question: "How do I search the knowledge base for specific topics?",
    answer:
      "Use the search function to find topics related to ABCD staging, complications, metabolic dysfunction, clinical assessment, or specific conditions. Results provide evidence-based information and clinical references.",
  },
  {
    question: "What topics are covered in the ABCD knowledge base?",
    answer:
      "Topics include ABCD framework overview, staging methodology, metabolic complications, biomechanical complications, cardiovascular complications, psychological complications, and multidisciplinary management approaches.",
  },
];

const kbSchema = collectionPageGraph({
  path: "/knowledge-base",
  name: "ABCD Knowledge Base",
  description:
    "Explore the ABCD knowledge base with pathophysiology references, staging concepts, and systemic complication taxonomy.",
  breadcrumbs: [{ name: "Knowledge Base", path: "/knowledge-base" }],
  items: [
    { name: "ABCD Framework Overview", description: "Core concepts behind adiposity-based chronic disease." },
    { name: "Staging Methodology", description: "Disease staging concepts and complication-based classification." },
    { name: "Metabolic Complications", description: "Insulin resistance, dyslipidemia, diabetes, and liver-related risk." },
    { name: "Cardiovascular Complications", description: "Cardiometabolic risk and cardiovascular disease pathways." },
    { name: "Multidisciplinary Management", description: "Care pathways for long-term ABCD management." },
  ],
});

export default function KnowledgeBasePage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(kbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageNode("/knowledge-base", "ABCD Knowledge Base", kbFaqs)) }}
      />
      <ABCD_Knowledge_Base />
      <section className="bg-white px-6 py-14 md:px-20">
        <div className="mx-auto max-w-350">
          <h2 className="border-b border-slate-200 pb-2 text-2xl font-serif text-slate-900">
            Knowledge Base Questions
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {kbFaqs.map((faq) => (
              <article key={faq.question} className="border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
