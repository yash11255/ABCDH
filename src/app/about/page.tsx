import React from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, TrendingUp, Microscope, Search, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../Footer';

export const metadata = {
  title: "About ABCD | Clinical Portal",
  description: "Learn about the Adiposity-Based Chronic Disease (ABCD) classification system and how it's changing clinical practice."
};

export default function About() {
  const keyPrinciples = [
    {
      title: "Beyond BMI",
      description: "ABCD moves away from BMI-centric approaches to focus on actual pathophysiological complications and metabolic dysfunction.",
      icon: AlertCircle
    },
    {
      title: "Complication-Centric",
      description: "The framework classifies disease severity based on the presence and magnitude of adiposity-related complications.",
      icon: Microscope
    },
    {
      title: "Multisystem Approach",
      description: "ABCD evaluates metabolic, biomechanical, cardiovascular, and psychological complications comprehensively.",
      icon: TrendingUp
    },
    {
      title: "Evidence-Based",
      description: "Built on rigorous clinical research and validated biomarkers for accurate disease assessment and monitoring.",
      icon: CheckCircle2
    }
  ];

  const whyABCD = [
    {
      problem: "Traditional obesity classification using BMI alone",
      issue: "BMI doesn't distinguish between patients with and without complications",
      solution: "ABCD creates a dynamic framework that reflects actual disease burden"
    },
    {
      problem: "Inconsistent screening and diagnosis",
      issue: "Different healthcare systems use different criteria for identifying at-risk patients",
      solution: "ABCD provides standardized diagnostic criteria and staging system"
    },
    {
      problem: "One-size-fits-all treatment approaches",
      issue: "Patients with same BMI may have completely different metabolic profiles",
      solution: "ABCD enables personalized treatment based on specific complications"
    },
    {
      problem: "Fragmented care across specialties",
      issue: "Patients see multiple specialists without coordinated management",
      solution: "ABCD framework facilitates integrated multidisciplinary care"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white font-sans text-slate-800">

        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16 md:py-20 px-6 md:px-20 border-t-4 border-blue-700">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Understanding ABCD
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              Adiposity-Based Chronic Disease (ABCD) is a paradigm shift in how we classify, diagnose, and manage patients with adiposity-related health complications.
            </p>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="py-12 px-6 md:px-20 bg-white">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12">
            
            {/* Left Navigation Sidebar */}
            <aside className="md:w-1/4 hidden md:block">
              <div className="sticky top-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-200">
                  In this article
                </h3>
                <ul className="space-y-3">
                  <li><a href="#definition" className="text-blue-700 hover:underline text-sm font-medium">What is ABCD?</a></li>
                  <li><a href="#principles" className="text-blue-700 hover:underline text-sm font-medium">Core Principles</a></li>
                  <li><a href="#significance" className="text-blue-700 hover:underline text-sm font-medium">Why ABCD Matters</a></li>
                  <li><a href="#stages" className="text-blue-700 hover:underline text-sm font-medium">The Four Stages</a></li>
                  <li><a href="#impact" className="text-blue-700 hover:underline text-sm font-medium">Systemic Impact</a></li>
                </ul>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="md:w-3/4 space-y-16">
              
              {/* What is ABCD */}
              <div id="definition" className="scroll-mt-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">What is ABCD?</h2>
                <div className="prose max-w-none text-slate-700 leading-relaxed mb-8">
                  <p className="mb-4">
                    <strong>ABCD</strong> stands for <strong>Adiposity-Based Chronic Disease</strong>. It's a diagnostic framework that replaces "obesity" with a focus on metabolic dysfunction rather than body mass index alone.
                  </p>
                  <p className="mb-4">
                    The framework recognizes that not all people with excess body fat have metabolic complications, and conversely, some people with relatively normal weight still have significant metabolic dysfunction (metabolically unhealthy normal weight).
                  </p>
                  <p>
                    ABCD divides adiposity-related disease into four stages based on the type and severity of complications, allowing clinicians to deliver more targeted, evidence-based care.
                  </p>
                </div>

                {/* Callout Box - Replaces the gradient card */}
                <div className="bg-slate-50 border-l-4 border-blue-700 p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">ABCD Framework Breakdown</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-700">A</span>
                      <span><strong>Adiposity-Based</strong> - Focused on fat pathophysiology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-700">B</span>
                      <span><strong>Based on</strong> - Built on scientific evidence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-700">C</span>
                      <span><strong>Chronic</strong> - Long-term metabolic disease</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-blue-700">D</span>
                      <span><strong>Disease</strong> - Requiring medical management</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Key Principles */}
              <div id="principles" className="scroll-mt-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">Core Principles of ABCD</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {keyPrinciples.map((principle, idx) => {
                    const IconComponent = principle.icon;
                    return (
                      <div key={idx} className="bg-white p-6 border border-slate-200 rounded-sm">
                        <div className="flex items-start gap-3 mb-3">
                          <IconComponent className="text-blue-700 shrink-0 mt-0.5" size={20} />
                          <h3 className="text-lg font-bold text-slate-900">{principle.title}</h3>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed">{principle.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Why ABCD Matters - Re-structured as a clean clinical table/grid */}
              <div id="significance" className="scroll-mt-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">Why ABCD Matters</h2>
                <div className="border border-slate-200 rounded-sm overflow-hidden">
                  <div className="hidden md:grid grid-cols-3 bg-slate-100 border-b border-slate-200 p-4 font-bold text-slate-900 text-sm uppercase tracking-wider">
                    <div>Traditional Approach</div>
                    <div>Clinical Limitation</div>
                    <div>ABCD Solution</div>
                  </div>
                  <div className="divide-y divide-slate-200">
                    {whyABCD.map((item, idx) => (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 text-sm hover:bg-slate-50 transition-colors">
                        <div className="text-slate-900 font-semibold md:pr-4">
                          <span className="md:hidden font-bold text-xs uppercase text-slate-500 block mb-1">Approach:</span>
                          {item.problem}
                        </div>
                        <div className="text-slate-700 md:px-4 md:border-l border-slate-200">
                          <span className="md:hidden font-bold text-xs uppercase text-slate-500 block mb-1">Limitation:</span>
                          {item.issue}
                        </div>
                        <div className="text-blue-800 font-medium md:pl-4 md:border-l border-slate-200">
                          <span className="md:hidden font-bold text-xs uppercase text-slate-500 block mb-1">Solution:</span>
                          {item.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* The Four Stages Overview */}
              <div id="stages" className="scroll-mt-12">
                <div className="flex justify-between items-end mb-6 pb-2 border-b border-slate-200">
                  <h2 className="text-3xl font-serif text-slate-900">The Four Stages of ABCD</h2>
                  <Link href="/stages" className="text-blue-700 font-semibold hover:underline text-sm hidden md:block">
                    Explore All Stages →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                  {[
                    { num: "1", stage: "At Risk", focus: "Primary Prevention" },
                    { num: "2", stage: "Mild/Moderate", focus: "Secondary Prevention" },
                    { num: "3", stage: "Established", focus: "Active Management" },
                    { num: "4", stage: "Advanced", focus: "Tertiary Intervention" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-sm">
                      <div className="text-sm font-bold text-slate-500 mb-1">Stage {item.num}</div>
                      <h3 className="text-lg font-bold text-blue-800 mb-1">{item.stage}</h3>
                      <p className="text-sm text-slate-700">{item.focus}</p>
                    </div>
                  ))}
                </div>
                <Link href="/stages" className="text-blue-700 font-semibold hover:underline text-sm md:hidden">
                  Explore All Stages →
                </Link>
              </div>

              {/* Systemic Impact */}
              <div id="impact" className="scroll-mt-12">
                <div className="flex justify-between items-end mb-6 pb-2 border-b border-slate-200">
                  <h2 className="text-3xl font-serif text-slate-900">Systemic Impact</h2>
                  <Link href="/complications" className="text-blue-700 font-semibold hover:underline text-sm hidden md:block">
                    View Complications →
                  </Link>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  ABCD recognizes that adiposity affects multiple organ systems simultaneously. The disease is classified by the presence and severity of complications across four critical health domains:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { title: "Metabolic", examples: ["Type 2 Diabetes", "Dyslipidemia", "NAFLD", "Insulin Resistance"] },
                    { title: "Biomechanical", examples: ["Sleep Apnea", "Osteoarthritis", "GERD", "Urinary Issues"] },
                    { title: "Cardiovascular", examples: ["Hypertension", "Heart Failure", "CAD", "Arrhythmias"] },
                    { title: "Psychological", examples: ["Depression", "Anxiety", "Body Image Issues", "Stigma"] }
                  ].map((domain, idx) => (
                    <div key={idx} className="border border-slate-200 p-5 rounded-sm">
                      <h3 className="font-bold text-slate-900 mb-3">{domain.title}</h3>
                      <ul className="space-y-1">
                        {domain.examples.map((example, i) => (
                          <li key={i} className="text-sm text-slate-700 flex items-center gap-2">
                            <ChevronRight size={14} className="text-blue-700" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link href="/complications" className="text-blue-700 font-semibold hover:underline text-sm md:hidden">
                  View Complications →
                </Link>
              </div>

            </main>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-6 md:px-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b border-slate-200">
              Related Health Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/stages" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">ABCD Stages in Detail</h3>
                <p className="text-slate-600 text-sm">Deep dive into each stage with clinical characteristics and interventions.</p>
              </Link>
              <Link href="/complications" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">Complications & Impact</h3>
                <p className="text-slate-600 text-sm">Understand systemic complications across metabolic, biomechanical, cardiovascular, and psychological domains.</p>
              </Link>
              <Link href="/knowledge-base" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">Knowledge Base</h3>
                <p className="text-slate-600 text-sm">Comprehensive clinical resources, guidelines, and technical documentation.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}