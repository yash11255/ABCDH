import React from 'react';
import Link from 'next/link';
import { Download, ExternalLink, BookOpen, FileText, Calculator, Users, Search, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../Footer';

export const metadata = {
  title: "Clinical Resources | Clinical Portal",
  description: "Tools, guidelines, and resources for clinical management of ABCD-related complications."
};

export default function Resources() {
  const resources = [
    {
      title: "ABCD Staging Algorithm",
      description: "Step-by-step decision tree for classifying patients into ABCD stages based on complications.",
      type: "Clinical Tool",
      format: "Interactive PDF",
      icon: Calculator
    },
    {
      title: "Metabolic Complications Management",
      description: "Evidence-based guidelines for managing Type 2 Diabetes, dyslipidemia, and NASH in ABCD patients.",
      type: "Clinical Guideline",
      format: "PDF",
      icon: FileText
    },
    {
      title: "Cardiovascular Risk Assessment",
      description: "Comprehensive cardiovascular risk stratification protocol for ABCD patients.",
      type: "Assessment Tool",
      format: "Spreadsheet & Guide",
      icon: Calculator
    },
    {
      title: "Biomechanical Complications Protocol",
      description: "Management strategies for sleep apnea, osteoarthritis, and GERD in adiposity-related disease.",
      type: "Clinical Protocol",
      format: "PDF",
      icon: FileText
    },
    {
      title: "Psychological Support Resources",
      description: "Mental health screening tools, referral pathways, and integrated care approaches.",
      type: "Support Guide",
      format: "PDF + Tools",
      icon: Users
    },
    {
      title: "Patient Education Materials",
      description: "Handouts and resources for patient education on ABCD stages and management.",
      type: "Patient Resource",
      format: "PDF",
      icon: BookOpen
    }
  ];

  const guidelines = [
    {
      organization: "AACE/ACE",
      title: "American Association of Clinical Endocrinologists Position Statement on Obesity",
      focus: "Metabolic classification and management",
      year: "2024"
    },
    {
      organization: "AHA/ACC",
      title: "Cardiovascular Risk in Obesity and ABCD",
      focus: "Cardiovascular assessment and prevention",
      year: "2024"
    },
    {
      organization: "ASPC",
      title: "Sleep Medicine Guidelines in ABCD",
      focus: "Obstructive sleep apnea diagnosis and management",
      year: "2023"
    },
    {
      organization: "ADA",
      title: "Standards of Care in ABCD with Type 2 Diabetes",
      focus: "Diabetes management in adiposity-related disease",
      year: "2024"
    }
  ];

  const calculators = [
    {
      name: "HOMA-IR Calculator",
      description: "Calculate insulin resistance from fasting glucose and insulin levels.",
      purpose: "Assess degree of metabolic dysfunction"
    },
    {
      name: "10-Year Cardiovascular Risk Estimator",
      description: "Framingham or ASCVD risk calculator for ABCD patients.",
      purpose: "Stratify cardiovascular prevention strategies"
    },
    {
      name: "BMI vs ABCD Stage Comparison",
      description: "Compare traditional BMI classification with ABCD staging.",
      purpose: "Educational tool showing classification differences"
    },
    {
      name: "Medication Interaction Checker",
      description: "Check drug interactions for common ABCD medications.",
      purpose: "Ensure safe medication prescribing"
    }
  ];

  const trainingPrograms = [
    {
      title: "ABCD Essentials for Primary Care",
      description: "Fundamentals of ABCD for primary care physicians.",
      duration: "4-6 weeks",
      format: "Online course with CME"
    },
    {
      title: "Specialist Training in ABCD Management",
      description: "Advanced concepts for endocrinologists, cardiologists, and other specialists.",
      duration: "8-12 weeks",
      format: "Online course with CME"
    },
    {
      title: "Multidisciplinary ABCD Team Training",
      description: "Team-based approach to ABCD management for clinics and health systems.",
      duration: "3 months",
      format: "Cohort-based learning"
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
              Clinical Resources
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              Comprehensive tools, guidelines, and educational resources to support evidence-based clinical implementation of the ABCD framework in your practice.
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
                  Resource Directory
                </h3>
                <ul className="space-y-3">
                  <li><a href="#tools" className="text-blue-700 hover:underline text-sm font-medium block py-1">Essential Clinical Tools</a></li>
                  <li><a href="#guidelines" className="text-blue-700 hover:underline text-sm font-medium block py-1">Guidelines & Standards</a></li>
                  <li><a href="#calculators" className="text-blue-700 hover:underline text-sm font-medium block py-1">Interactive Calculators</a></li>
                  <li><a href="#training" className="text-blue-700 hover:underline text-sm font-medium block py-1">Training & Education</a></li>
                  <li><a href="#additional" className="text-blue-700 hover:underline text-sm font-medium block py-1">Additional Resources</a></li>
                </ul>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="md:w-3/4 space-y-16">
              
              {/* Essential Clinical Tools */}
              <div id="tools" className="scroll-mt-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  Essential Clinical Tools
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resources.map((resource, idx) => {
                    const IconComponent = resource.icon;
                    return (
                      <a href="#" key={idx} className="block border border-slate-200 rounded-sm p-5 hover:bg-slate-50 transition-colors group">
                        <div className="flex items-start gap-4 mb-3">
                          <IconComponent className="text-blue-700 shrink-0 mt-0.5" size={24} />
                          <div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{resource.type}</div>
                            <h3 className="font-bold text-blue-800 group-hover:underline">{resource.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm text-slate-700 mb-4">{resource.description}</p>
                        <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                          <span className="text-xs font-bold text-slate-600">{resource.format}</span>
                          <span className="text-blue-700 flex items-center gap-1 text-sm font-bold">
                            Download <Download size={14} />
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Clinical Guidelines - Structured Table */}
              <div id="guidelines" className="scroll-mt-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  Clinical Guidelines & Standards
                </h2>
                <div className="border border-slate-200 rounded-sm overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 bg-slate-100 border-b border-slate-200 p-4 font-bold text-slate-900 text-sm uppercase tracking-wider">
                    <div className="col-span-2">Org / Year</div>
                    <div className="col-span-6">Guideline</div>
                    <div className="col-span-4 text-right">Action</div>
                  </div>
                  <div className="divide-y divide-slate-200">
                    {guidelines.map((guideline, idx) => (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 gap-4 items-center hover:bg-slate-50 transition-colors">
                        <div className="md:col-span-2">
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-sm mb-1">{guideline.organization}</span>
                          <div className="text-xs font-bold text-slate-500">{guideline.year}</div>
                        </div>
                        <div className="md:col-span-6">
                          <h3 className="font-bold text-slate-900 text-base mb-1">{guideline.title}</h3>
                          <p className="text-sm text-slate-700">{guideline.focus}</p>
                        </div>
                        <div className="md:col-span-4 md:text-right">
                          <a href="#" className="inline-flex items-center gap-1 text-blue-700 font-bold text-sm hover:underline">
                            View Guideline <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculators & Tools */}
              <div id="calculators" className="scroll-mt-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  Interactive Calculators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {calculators.map((calculator, idx) => (
                    <div key={idx} className="border border-slate-200 bg-slate-50 rounded-sm p-5 flex flex-col">
                      <h3 className="font-bold text-slate-900 mb-1">{calculator.name}</h3>
                      <p className="text-xs font-bold text-blue-700 mb-3">{calculator.purpose}</p>
                      <p className="text-sm text-slate-700 mb-6 flex-grow">{calculator.description}</p>
                      <button className="w-full py-2 px-4 bg-white border border-blue-700 text-blue-700 rounded-sm font-bold hover:bg-blue-50 transition-colors text-sm">
                        Launch Tool
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training Programs */}
              <div id="training" className="scroll-mt-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  Training & Education Programs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {trainingPrograms.map((program, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-sm p-6 flex flex-col">
                      <h3 className="font-bold text-blue-800 mb-3">{program.title}</h3>
                      <p className="text-slate-700 text-sm mb-6 flex-grow">{program.description}</p>
                      <div className="space-y-2 border-t border-slate-200 pt-4 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="font-bold text-slate-900">Duration:</span>
                          <span className="text-slate-700">{program.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="font-bold text-slate-900">Format:</span>
                          <span className="text-slate-700">{program.format}</span>
                        </div>
                      </div>
                      <button className="w-full py-2 px-4 bg-blue-700 text-white rounded-sm font-bold hover:bg-blue-800 transition-colors text-sm">
                        Enroll Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Resources */}
              <div id="additional" className="scroll-mt-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">
                  Additional Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Patient Resources", items: ["Patient education materials", "Lifestyle modification guides", "Support group directories", "Medication information sheets"] },
                    { title: "Research & Literature", items: ["Curated bibliography of landmark studies", "Latest publications on adiposopathy", "Clinical trial registries", "Evidence summaries for CME"] },
                    { title: "Implementation Support", items: ["Health system implementation guides", "EHR integration templates", "Workflow optimization strategies", "Quality metrics and tracking"] },
                    { title: "Community & Collaboration", items: ["Clinical discussion forums", "International provider network", "Webinar series and expert panels", "Research collaboration"] }
                  ].map((block, idx) => (
                    <div key={idx} className="border border-slate-200 p-5 rounded-sm">
                      <h3 className="font-bold text-slate-900 mb-3">{block.title}</h3>
                      <ul className="space-y-2 mb-4">
                        {block.items.map((item, i) => (
                          <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                            <ChevronRight size={16} className="text-blue-700 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a href="#" className="text-blue-700 font-bold text-sm hover:underline flex items-center gap-1">
                        Access {block.title.split(' ')[0]} <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </main>
          </div>
        </section>

        {/* Related Pages - Standardized Grid */}
        <section className="py-16 px-6 md:px-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b border-slate-200">
              Explore More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/about" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">About ABCD</h3>
                <p className="text-slate-600 text-sm">Comprehensive overview of the ABCD framework and core principles.</p>
              </Link>
              <Link href="/stages" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">ABCD Stages</h3>
                <p className="text-slate-600 text-sm">Four stages with detailed clinical characteristics.</p>
              </Link>
              <Link href="/faq" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">FAQ</h3>
                <p className="text-slate-600 text-sm">Frequently asked questions about the framework.</p>
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}