import type { Metadata } from "next";


import Header from "./components/Header";
import HeroSection from "./HeroSection";
import WhatIsABCD from "./WhatIsABCD";
import ABCDvsObesity from "./ABCDvsObesity";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Adiposity-Based Chronic Disease | ABCD Health",
  description:
    "Learn why obesity is a disease through the adiposity-based chronic disease framework, including metabolic health assessment, metabolic health check pathways, and metabolic syndrome risk insights.",
  alternates: {
    canonical: "/",
  },
};

const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.abcd.health/#faqpage",
  url: "https://www.abcd.health/",
  name: "Adiposity-Based Chronic Disease | ABCD Health",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is adiposity-based chronic disease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adiposity-Based Chronic Disease (ABCD) is a clinical framework that classifies disease by complication severity across organ systems rather than BMI alone. It recognizes obesity as a disease and enables personalized metabolic health management through staged interventions.",
      },
    },
    {
      "@type": "Question",
      name: "Why is obesity considered a disease in the ABCD framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ABCD model defines obesity as a disease because it focuses on the metabolic dysfunction and complications caused by adiposity, not just excess weight. This includes metabolic, biomechanical, cardiovascular, and psychological complications that require medical management.",
      },
    },
    {
      "@type": "Question",
      name: "What is metabolic health assessment under ABCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Metabolic health assessment in ABCD evaluates insulin resistance, lipid profiles, glucose control, and inflammatory markers to determine disease severity and treatment needs, rather than relying on BMI or weight alone.",
      },
    },
    {
      "@type": "Question",
      name: "How does ABCD address metabolic syndrome risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ABCD identifies and stages metabolic syndrome risk by assessing complications across multiple systems. It provides targeted interventions at each stage to reduce metabolic syndrome risk and prevent disease progression.",
      },
    },
    {
      "@type": "Question",
      name: "What is a metabolic health check and how does it relate to ABCD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A metabolic health check evaluates metabolic markers, organ-specific complications, and disease stage under the ABCD framework. It assesses risk factors and guides treatment decisions independent of BMI or appearance.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQSchema) }}
      />
      <HeroSection />
      <WhatIsABCD />
      <ABCDvsObesity />
      <Footer />
    </>
  );
}
