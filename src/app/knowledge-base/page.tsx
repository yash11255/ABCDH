import type { Metadata } from "next";
import Header from "../components/Header";
import ABCD_Knowledge_Base from "../ABCD_Knowledge_Base";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "ABCD Knowledge Base | Clinical Portal",
  description:
    "Explore the ABCD knowledge base with pathophysiology references, staging concepts, and systemic complication taxonomy.",
  alternates: {
    canonical: "/knowledge-base",
  },
};

const kbFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.abcd.health/knowledge-base#faqpage",
  url: "https://www.abcd.health/knowledge-base",
  name: "ABCD Knowledge Base",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is contained in the ABCD knowledge base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ABCD knowledge base contains comprehensive information on adiposity-based chronic disease pathophysiology, staging concepts, systemic complication taxonomy, clinical assessment protocols, and evidence-based management strategies.",
      },
    },
    {
      "@type": "Question",
      name: "How do I search the knowledge base for specific topics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the search function to find topics related to ABCD staging, complications, metabolic dysfunction, clinical assessment, or specific conditions. Results provide evidence-based information and clinical references.",
      },
    },
    {
      "@type": "Question",
      name: "What topics are covered in the ABCD knowledge base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Topics include ABCD framework overview, staging methodology, metabolic complications, biomechanical complications, cardiovascular complications, psychological complications, and multidisciplinary management approaches.",
      },
    },
  ],
};

export default function KnowledgeBasePage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kbFAQSchema) }}
      />
      <ABCD_Knowledge_Base />
      <Footer />
    </>
  );
}
