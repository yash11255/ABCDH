import React from 'react';
import { BookOpen, Activity, LayoutGrid, FileSearch, ArrowRight, Info, Microscope } from 'lucide-react';

const ABCD_Knowledge_Base = () => {
  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#0F172A] font-sans">
      {/* 1. Technical Utility Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="bg-slate-900 text-white px-3 py-1 text-xs font-black tracking-tighter">ABCD.v2</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l pl-4 border-slate-200">
              Clinical Taxonomy Resource
            </span>
          </div>
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-600">
            <button className="hover:text-indigo-600 transition-colors">ICD-11 Reference</button>
            <button className="hover:text-indigo-600 transition-colors">MNT Protocols</button>
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto flex">
        {/* 2. Scientific Navigation Sidebar */}
        <aside className="w-80 hidden xl:block sticky top-[73px] h-[calc(100vh-73px)] border-r border-slate-100 p-8 overflow-y-auto bg-[#F8FAFC]">
          <div className="space-y-10">
            <section>
              <h4 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-6">Pathophysiology</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                <li className="flex items-center gap-2 text-slate-900"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Adiposopathy (Sick Fat)</li>
                <li className="pl-3.5 hover:text-indigo-600 transition-all cursor-pointer">Lipotoxicity Markers</li>
                <li className="pl-3.5 hover:text-indigo-600 transition-all cursor-pointer">Cytokine Signaling</li>
              </ul>
            </section>

            <section>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Staging System</h4>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                <li className="pl-3.5 hover:text-slate-900 cursor-pointer">Stage 0: Pre-clinical</li>
                <li className="pl-3.5 hover:text-slate-900 cursor-pointer">Stage 1: Sub-clinical</li>
                <li className="pl-3.5 hover:text-slate-900 cursor-pointer text-indigo-600 underline underline-offset-4">Stage 2: Clinical Dysfunction</li>
              </ul>
            </section>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-2 text-indigo-600 mb-3">
                <Info size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Update</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
                The 2026 update emphasizes GIP/GLP-1 receptor co-agonists in Stage 2 interventions.
              </p>
            </div>
          </div>
        </aside>

        {/* 3. Knowledge Content Area */}
        <main className="flex-1 px-6 md:px-16 py-16 max-w-5xl">
          
          {/* Section: The Paradigm Shift */}
          <div className="mb-24">
            <p className="text-xs font-bold font-mono text-indigo-500 mb-4 tracking-tighter">01. THEORETICAL FOUNDATION</p>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[1.05] mb-8 italic font-serif">
              Defining ABCD.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light mb-12">
              Adiposity-Based Chronic Disease is a diagnostic term that replaces "obesity" with a focus on 
              <strong> metabolic dysfunction</strong> rather than body mass index alone.
            </p>

            {/* High-Density Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-slate-900 text-white rounded-[32px] space-y-6">
                <Microscope className="text-indigo-400" size={32} />
                <h3 className="text-2xl font-bold tracking-tight">Ectopic Fat <br/>Deposition</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The infiltration of lipid into non-adipose organs (liver, muscle, pancreas) causing cellular stress and lipotoxicity.
                </p>
                <div className="pt-4 flex items-center gap-2 text-xs font-mono text-indigo-300 uppercase tracking-widest border-t border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" /> Pathogenic Marker: NASH/NAFLD
                </div>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-[32px] space-y-6">
                <Activity className="text-indigo-600" size={32} />
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">Endocrine <br/>Dysfunction</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Hypertrophic adipocytes secrete pro-inflammatory cytokines (IL-6, TNF-α), driving systemic insulin resistance.
                </p>
                <div className="pt-4 flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest border-t border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-slate-300" /> Clinical Metric: CRP levels
                </div>
              </div>
            </div>
          </div>

          {/* Section: Systemic Complications Diagram Placeholder */}
          <div className="mb-24 pt-12 border-t border-slate-100">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Systemic Complications Map</h2>
            <div className="bg-slate-50 rounded-3xl p-1 md:p-12 border border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Complication Column */}
                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] border-b border-slate-200 block pb-2">Metabolic Domain</span>
                  <ul className="space-y-4">
                    <li className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex justify-between items-center group cursor-pointer hover:border-indigo-400 transition-all">
                      <span className="text-sm font-bold">Type 2 Diabetes</span>
                      <ArrowRight size={14} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                    </li>
                    <li className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex justify-between items-center group cursor-pointer hover:border-indigo-400 transition-all">
                      <span className="text-sm font-bold">Dyslipidemia</span>
                      <ArrowRight size={14} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-2 relative min-h-[300px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-100/50">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
                    
                  </p>
                </div>

              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default ABCD_Knowledge_Base;
