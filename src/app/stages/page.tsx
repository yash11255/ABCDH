import React from 'react';
import Link from 'next/link';
import { AlertCircle, TrendingUp, Heart, Shield, Search, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../Footer';
import ABCDStages from '../ABCDStages';

export const metadata = {
  title: "ABCD Stages | Clinical Portal",
  description: "Understand the four stages of Adiposity-Based Chronic Disease (ABCD)."
};

const StagesDetails = () => {
  const stages = [
    {
      id: "stage-1",
      number: "Stage 1",
      title: "At Risk",
      focus: "Primary Prevention",
      icon: AlertCircle,
      description: "Early detection of metabolic predisposition without manifest complications. Focuses heavily on identifying risk factors before clinical symptoms appear.",
      details: [
        "Characterized by metabolic risk factors and early signs of adiposopathy",
        "No clinically apparent complications yet present",
        "Focus on primary prevention strategies",
        "Regular monitoring and lifestyle interventions",
        "Educational support for weight management"
      ],
      keyMarkers: ["Fasting glucose", "Lipid profile", "Blood pressure", "Inflammatory markers"],
      interventions: ["Lifestyle modifications", "Nutrition counseling", "Physical activity programs", "Risk factor monitoring"]
    },
    {
      id: "stage-2",
      number: "Stage 2",
      title: "Mild/Moderate",
      focus: "Secondary Prevention",
      icon: TrendingUp,
      description: "Presence of subclinical complications with early organ stress. Requires active secondary prevention to halt progression.",
      details: [
        "Evidence of metabolic dysfunction in one or more organ systems",
        "Subclinical complications without significant functional impairment",
        "Higher risk of disease progression",
        "Intensive lifestyle and pharmacological interventions",
        "Close monitoring for disease advancement"
      ],
      keyMarkers: ["HOMA-IR", "Liver enzymes", "Microalbuminuria", "AHI index"],
      interventions: ["GLP-1 agonists", "Metformin", "Intensive lifestyle programs", "Organ-specific monitoring"]
    },
    {
      id: "stage-3",
      number: "Stage 3",
      title: "Established",
      focus: "Active Management",
      icon: Heart,
      description: "Manifest clinical complications requiring active disease management and a multidisciplinary care approach.",
      details: [
        "Clear evidence of clinical disease in multiple organ systems",
        "Functional impairment and symptoms present",
        "Requires comprehensive multidisciplinary approach",
        "Aggressive pharmacological and lifestyle interventions",
        "Regular clinical follow-up and adjustment"
      ],
      keyMarkers: ["Type 2 Diabetes", "Sleep apnea", "Hypertension", "Coronary artery calcification"],
      interventions: ["Combination pharmacotherapy", "Bariatric surgery consideration", "Specialized clinic services", "Behavioral therapy"]
    },
    {
      id: "stage-4",
      number: "Stage 4",
      title: "Advanced",
      focus: "Tertiary Intervention",
      icon: Shield,
      description: "Structural damage and significant functional impairment from complications. Tertiary care is often required.",
      details: [
        "Severe complications with organ damage",
        "Significant functional impairment and disability",
        "Complex management requirements",
        "Tertiary care involvement often necessary",
        "Focus on preventing further deterioration"
      ],
      keyMarkers: ["Heart failure", "CKD stage 3+", "Advanced cardiomyopathy", "End-organ damage"],
      interventions: ["Advanced pharmacotherapy", "Cardiac/renal support", "Intensive medical management", "Surgical interventions"]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white font-sans text-slate-800">

        {/* Hero Section: High Contrast, Clinical */}
        <section className="bg-slate-900 text-white py-16 md:py-20 px-6 md:px-20 border-t-4 border-blue-700">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              The Four Stages of ABCD
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
              A comprehensive classification system that moves beyond BMI to evaluate the severity of adiposity-related complications and guide clinical management. Effective treatment depends on getting the right diagnosis.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 font-semibold rounded-sm transition-colors">
                View Clinical Guidelines
              </button>
            </div>
          </div>
        </section>
        
        {/* Staging Framework Visual */}
        <section className="py-12 px-6 md:px-20 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative w-full aspect-[16/6] bg-gradient-to-br from-blue-100 via-slate-50 to-blue-50 rounded-lg overflow-hidden border border-slate-200 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=525&fit=crop&q=80" 
                alt="ABCD Staging Framework Diagram"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <h3 className="text-3xl md:text-4xl font-serif mb-4">Four-Stage Classification System</h3>
                  <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                    A progressive framework from at-risk identification through advanced disease management
                  </p>
                </div>
              </div>
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
                  {stages.map((stage) => (
                    <li key={stage.id}>
                      <a href={`#${stage.id}`} className="text-blue-700 hover:underline text-sm font-medium flex items-center gap-2">
                        {stage.number}: {stage.title}
                      </a>
                    </li>
                  ))}
                  <li className="pt-4 mt-4 border-t border-slate-200">
                    <a href="#progression" className="text-blue-700 hover:underline text-sm font-medium">Stage Progression Model</a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="md:w-3/4 space-y-16">
              {stages.map((stage) => {
                const IconComponent = stage.icon;
                return (
                  <div key={stage.id} id={stage.id} className="scroll-mt-12 border-b border-slate-200 pb-12 last:border-0">
                    
                    {/* Stage Header */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="bg-blue-700 text-white p-3 rounded-sm">
                        <IconComponent size={28} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif text-slate-900">
                          {stage.number}: {stage.title}
                        </h2>
                        <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm mt-1">
                          {stage.focus}
                        </p>
                      </div>
                    </div>

                    {/* Overview Text */}
                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                      {stage.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* Characteristics List */}
                      <div>
                        <h3 className="text-xl font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
                          Key Characteristics
                        </h3>
                        <ul className="space-y-3">
                          {stage.details.map((detail, i) => (
                            <li key={i} className="flex gap-3 text-slate-700">
                              <span className="text-blue-700 font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Clinical Markers & Interventions */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
                            Key Biomarkers
                          </h3>
                          <ul className="grid grid-cols-1 gap-2">
                            {stage.keyMarkers.map((marker, i) => (
                              <li key={i} className="text-slate-700 flex items-center gap-2">
                                <ChevronRight className="text-blue-700" size={16} />
                                {marker}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
                            Clinical Interventions
                          </h3>
                          <ul className="grid grid-cols-1 gap-2">
                            {stage.interventions.map((intervention, i) => (
                              <li key={i} className="text-slate-700 flex items-center gap-2">
                                <ChevronRight className="text-blue-700" size={16} />
                                {intervention}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </main>
          </div>
        </section>

        {/* Interactive Visualization - Kept clean and separated */}
        <section id="progression" className="py-16 px-6 md:px-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl font-serif text-slate-900 mb-8 text-center">Stage Progression</h2>
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <ABCDStages />
            </div>
          </div>
        </section>

        {/* Mayo-style Featured Links / "More from Mayo Clinic" equivalent */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b border-slate-200">
              Related Health Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/about" className="group block border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">What is ABCD?</h3>
                <p className="text-slate-600">Comprehensive overview of the ABCD framework and classification system.</p>
              </Link>
              <Link href="/complications" className="group block border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">Complications</h3>
                <p className="text-slate-600">Understand the systemic impact across metabolism, biomechanics, cardiovascular and psychology.</p>
              </Link>
              <Link href="/resources" className="group block border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">Clinical Resources</h3>
                <p className="text-slate-600">Guidelines, tools, and resources for clinical management of ABCD.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default StagesDetails;