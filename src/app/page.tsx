import type { Metadata } from "next";


import Header from "./components/Header";
import HeroSection from "./HeroSection";
import WhatIsABCD from "./WhatIsABCD";
import ABCDvsObesity from "./ABCDvsObesity";
import Footer from "./Footer";
import { faqPageNode, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Adiposity-Based Chronic Disease | ABCD Health",
  description:
    "Learn why obesity is a disease through the adiposity-based chronic disease framework, including metabolic health assessment, metabolic health check pathways, and metabolic syndrome risk insights.",
  alternates: {
    canonical: "/",
  },
};

const homepageFaqs = [
  {
    question: "What is adiposity-based chronic disease?",
    answer:
      "Adiposity-Based Chronic Disease (ABCD) is a clinical framework that classifies disease by complication severity across organ systems rather than BMI alone. It recognizes obesity as a disease and enables personalized metabolic health management through staged interventions.",
  },
  {
    question: "Why is obesity considered a disease in the ABCD framework?",
    answer:
      "The ABCD model defines obesity as a disease because it focuses on the metabolic dysfunction and complications caused by adiposity, not just excess weight. This includes metabolic, biomechanical, cardiovascular, and psychological complications that require medical management.",
  },
  {
    question: "What is metabolic health assessment under ABCD?",
    answer:
      "Metabolic health assessment in ABCD evaluates insulin resistance, lipid profiles, glucose control, and inflammatory markers to determine disease severity and treatment needs, rather than relying on BMI or weight alone.",
  },
  {
    question: "How does ABCD address metabolic syndrome risk?",
    answer:
      "ABCD identifies and stages metabolic syndrome risk by assessing complications across multiple systems. It provides targeted interventions at each stage to reduce metabolic syndrome risk and prevent disease progression.",
  },
  {
    question: "What is a metabolic health check and how does it relate to ABCD?",
    answer:
      "A metabolic health check evaluates metabolic markers, organ-specific complications, and disease stage under the ABCD framework. It assesses risk factors and guides treatment decisions independent of BMI or appearance.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            faqPageNode(
              "/",
              "Adiposity-Based Chronic Disease | ABCD Health",
              homepageFaqs,
              "Learn why obesity is a disease through the adiposity-based chronic disease framework.",
            ),
          ),
        }}
      />
      <HeroSection />
      <WhatIsABCD />
      <ABCDvsObesity />

      <section className="bg-white px-6 py-14 md:px-20">
        <div className="mx-auto max-w-350 border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="text-2xl font-serif text-slate-900 md:text-3xl">ABCD Topic Hub</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            Explore key guides on adiposity-based chronic disease, staging, symptoms, treatment, prevention, and cardiometabolic risk.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <a href="/adiposity-based-chronic-disease" className="rounded-sm border border-slate-200 bg-white p-3 text-sm font-semibold text-blue-700 hover:text-blue-900">
              Adiposity-Based Chronic Disease (Pillar)
            </a>
            <a href="/what-is-adiposity-based-chronic-disease" className="rounded-sm border border-slate-200 bg-white p-3 text-sm font-semibold text-blue-700 hover:text-blue-900">
              What Is ABCD?
            </a>
            <a href="/abcd-staging-system" className="rounded-sm border border-slate-200 bg-white p-3 text-sm font-semibold text-blue-700 hover:text-blue-900">
              ABCD Staging System
            </a>
            <a href="/adiposity-based-chronic-disease-symptoms" className="rounded-sm border border-slate-200 bg-white p-3 text-sm font-semibold text-blue-700 hover:text-blue-900">
              ABCD Symptoms
            </a>
            <a href="/adiposity-based-chronic-disease-treatment" className="rounded-sm border border-slate-200 bg-white p-3 text-sm font-semibold text-blue-700 hover:text-blue-900">
              ABCD Treatment
            </a>
            <a href="/cardiometabolic-disease-and-abcd" className="rounded-sm border border-slate-200 bg-white p-3 text-sm font-semibold text-blue-700 hover:text-blue-900">
              Cardiometabolic Disease and ABCD
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14 md:px-20">
        <div className="mx-auto max-w-350">
          <h2 className="border-b border-slate-200 pb-2 text-2xl font-serif text-slate-900 md:text-3xl">
            ABCD Questions
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {homepageFaqs.map((faq) => (
              <article key={faq.question} className="border border-slate-200 bg-white p-5">
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
