import React from 'react';
import Link from 'next/link';
import { Search, ChevronRight, Activity, Wind, HeartPulse, BrainCircuit } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../Footer';
import SystemicImpactSection from '../SystemicImpactSection';

export const metadata = {
  title: "Complications | Clinical Portal",
  description: "Learn about the systemic complications of adiposity across metabolic, biomechanical, cardiovascular, and psychological domains."
};

export default function Complications() {
  const complications = [
    {
      id: "metabolic",
      domain: "Metabolic",
      icon: Activity,
      description: "Functional and structural complications of adipose tissue dysfunction and lipotoxicity.",
      conditions: [
        { name: "Type 2 Diabetes", details: "Insulin resistance and β-cell dysfunction leading to hyperglycemia" },
        { name: "Dyslipidemia", details: "Abnormal lipid profiles with elevated triglycerides and reduced HDL" },
        { name: "NAFLD/NASH", details: "Non-alcoholic fatty liver disease progressing to inflammation and fibrosis" },
        { name: "Insulin Resistance", details: "Reduced cellular response to insulin signaling and GLUT4 dysfunction" }
      ],
      biomarkers: ["Fasting glucose > 100 mg/dL", "HbA1c ≥ 5.7%", "HOMA-IR > 2.5", "Triglycerides > 150 mg/dL", "AST/ALT elevation"],
      management: ["Metformin", "GLP-1 agonists", "SGLT2 inhibitors", "Thiazolidinediones", "Dietary modification", "Weight loss programs"]
    },
    {
      id: "biomechanical",
      domain: "Biomechanical",
      icon: Wind,
      description: "Complications from mechanical burden and pressure effects of excess adiposity.",
      conditions: [
        { name: "Obstructive Sleep Apnea", details: "Airway collapse during sleep due to soft tissue obstruction" },
        { name: "Osteoarthritis", details: "Joint cartilage degradation from chronic mechanical stress" },
        { name: "Gastroesophageal Reflux", details: "Increased intra-abdominal pressure affecting lower esophageal sphincter" },
        { name: "Hypoventilation", details: "Reduced lung capacity from diaphragmatic compression" }
      ],
      biomarkers: ["Apnea-Hypopnea Index (AHI)", "Oxygen desaturation index", "Functional capacity testing", "Joint imaging findings"],
      management: ["CPAP/BiPAP therapy", "Physical therapy", "Weight loss", "Anti-inflammatory medications", "Surgical interventions if severe"]
    },
    {
      id: "cardiovascular",
      domain: "Cardiovascular",
      icon: HeartPulse,
      description: "Cardiac and vascular complications from systemic inflammation and metabolic dysfunction.",
      conditions: [
        { name: "Hypertension", details: "Elevated blood pressure from insulin resistance and sodium retention" },
        { name: "Heart Failure", details: "Impaired cardiac function with reduced ejection fraction (HFrEF) or diastolic dysfunction (HFpEF)" },
        { name: "Coronary Artery Disease", details: "Atherosclerotic plaque formation and arterial narrowing" },
        { name: "Atrial Fibrillation", details: "Arrhythmia from atrial remodeling and inflammatory state" }
      ],
      biomarkers: ["Blood pressure ≥ 130/80 mmHg", "BNP > 100 pg/mL", "LDL cholesterol", "Coronary calcium score", "Troponin elevation"],
      management: ["ACE inhibitors/ARBs", "Beta-blockers", "Statins", "GLP-1 agonists", "SGLT2 inhibitors", "Aspirin therapy", "Revascularization if needed"]
    },
    {
      id: "psychological",
      domain: "Psychological",
      icon: BrainCircuit,
      description: "Mental health and psychosocial complications of adiposity-related disease.",
      conditions: [
        { name: "Clinical Depression", details: "Major depressive disorder linked to inflammatory cytokines and metabolic dysfunction" },
        { name: "Anxiety Disorders", details: "Generalized anxiety, panic disorder, and social anxiety related to weight concerns" },
        { name: "Body Image Disorders", details: "Negative self-perception and dissatisfaction with physical appearance" },
        { name: "Eating Disorders", details: "Disordered eating patterns and maladaptive food relationships" }
      ],
      biomarkers: ["PHQ-9 score > 10", "GAD-7 score > 10", "Quality of life assessments", "Psychological screening tools"],
      management: ["Cognitive behavioral therapy (CBT)", "Antidepressants (SSRIs/SNRIs)", "Counseling services", "Support groups", "Integrated mental health care"]
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
              Complications Beyond the Scale
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
              ABCD is defined by the severity of complications. We move beyond BMI to understand how adiposity affects four critical health domains and their interconnected pathophysiology.
            </p>
          </div>
        </section>

        

        {/* Key Insight */}
        <section className="bg-slate-50 py-8 px-6 md:px-20 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="bg-white p-6 border-l-4 border-blue-700 shadow-sm">
              <p className="text-lg text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Adiposopathy</strong> - or "sick fat" - is the pathological state of adipose tissue characterized by inflammation, ectopic lipid accumulation, impaired metabolic function, and dysregulated cytokine production. This dysfunctional tissue is the root cause of complications across all domains.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content: Left Sidebar + Right Content Layout */}
        <section className="py-12 px-6 md:px-20 bg-white">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12">
            
            {/* Left Navigation (In this article) */}
            <aside className="md:w-1/4 hidden md:block">
              <div className="sticky top-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-200">
                  Sections
                </h3>
                <ul className="space-y-3">
                  {complications.map((domain) => (
                    <li key={domain.id}>
                      <a href={`#${domain.id}`} className="text-blue-700 hover:underline text-sm font-medium">
                        {domain.domain} Complications
                      </a>
                    </li>
                  ))}
                  <li className="pt-4 mt-4 border-t border-slate-200">
                    <a href="#comorbidities" className="text-blue-700 hover:underline text-sm font-medium">Comorbidity Interactions</a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="md:w-3/4 space-y-16">
              {complications.map((domain) => {
                const IconComponent = domain.icon;
                return (
                  <div key={domain.id} id={domain.id} className="scroll-mt-12 border-b border-slate-200 pb-12 last:border-0">
                    
                    {/* Domain Header */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="bg-blue-700 text-white p-3 rounded-sm">
                        <IconComponent size={28} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif text-slate-900">
                          {domain.domain}
                        </h2>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                      {domain.description}
                    </p>

                    {/* Conditions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {domain.conditions.map((condition, cIdx) => (
                        <div key={cIdx} className="border border-slate-200 bg-slate-50 rounded-sm p-5">
                          <h3 className="text-md font-bold text-slate-900 mb-2">{condition.name}</h3>
                          <p className="text-sm text-slate-700 leading-relaxed">{condition.details}</p>
                        </div>
                      ))}
                    </div>

                    {/* Biomarkers & Management */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h3 className="text-xl font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
                          Diagnostic Criteria
                        </h3>
                        <ul className="space-y-2">
                          {domain.biomarkers.map((marker, mIdx) => (
                            <li key={mIdx} className="text-slate-700 flex items-start gap-2 text-sm">
                              <ChevronRight className="text-blue-700 mt-0.5 shrink-0" size={16} />
                              <span className="leading-relaxed">{marker}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
                          Clinical Management
                        </h3>
                        <ul className="space-y-2">
                          {domain.management.map((approach, aIdx) => (
                            <li key={aIdx} className="text-slate-700 flex items-start gap-2 text-sm">
                              <ChevronRight className="text-blue-700 mt-0.5 shrink-0" size={16} />
                              <span className="leading-relaxed">{approach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </main>
          </div>
        </section>

        {/* Interactive Component Section */}
        <section className="py-16 px-6 md:px-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl font-serif text-slate-900 mb-8 text-center">Systemic Impact Explorer</h2>
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <SystemicImpactSection />
            </div>
          </div>
        </section>

        {/* Comorbidity Interactions - Structured to look like a clinical table/grid */}
        <section id="comorbidities" className="py-16 px-6 md:px-20 bg-white scroll-mt-12">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl font-serif text-slate-900 mb-6">Comorbidity Interactions</h2>
            <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-3xl">
              Complications often interact and compound each other. For example, metabolic dysfunction increases cardiovascular risk, which may limit physical capability, worsening both metabolic and psychological outcomes.
            </p>
            
            <div className="border border-slate-200 rounded-sm overflow-hidden">
              <div className="bg-slate-100 border-b border-slate-200 p-4">
                <h3 className="text-lg font-bold text-slate-900">Common Comorbidity Patterns</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-6">
                  <h4 className="font-bold text-blue-700 mb-2">Metabolic-Cardiovascular Axis</h4>
                  <p className="text-slate-700 text-sm">Type 2 Diabetes → Hypertension → CAD → Heart Failure</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-blue-700 mb-2">Biomechanical-Metabolic Loop</h4>
                  <p className="text-slate-700 text-sm">Sleep Apnea → Hypoxia → Insulin Resistance → OSA progression</p>
                </div>
                <div className="p-6 border-t border-slate-200">
                  <h4 className="font-bold text-blue-700 mb-2">Psychological-Metabolic Interaction</h4>
                  <p className="text-slate-700 text-sm">Depression → Poor adherence → Metabolic decompensation → Worsening depression</p>
                </div>
                <div className="p-6 border-t border-slate-200">
                  <h4 className="font-bold text-blue-700 mb-2">Systemic Inflammation Loop</h4>
                  <p className="text-slate-700 text-sm">Adiposopathy → Elevated TNF-α, IL-6 → Multi-organ dysfunction across all domains</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-6 md:px-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b border-slate-200">
              Related Health Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/about" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">What is ABCD?</h3>
                <p className="text-slate-600 text-sm">Overview of the ABCD framework and core principles.</p>
              </Link>
              <Link href="/stages" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">ABCD Stages</h3>
                <p className="text-slate-600 text-sm">Four stages of ABCD with clinical characteristics and interventions.</p>
              </Link>
              <Link href="/resources" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">Clinical Resources</h3>
                <p className="text-slate-600 text-sm">Guidelines and tools for managing ABCD complications.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}