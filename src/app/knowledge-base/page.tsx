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

export default function KnowledgeBasePage() {
  return (
    <>
      <Header />
      <ABCD_Knowledge_Base />
      <Footer />
    </>
  );
}
