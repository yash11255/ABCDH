import React from 'react';
import { Activity, Wind, Heart, Brain, ArrowUpRight } from 'lucide-react';

const SystemicImpactSection = () => {
  const domains = [
    {
      title: "Metabolic",
      icon: <Activity className="text-[#e91e63]" size={24} />,
      bg: "bg-pink-50",
      complications: ["Type 2 Diabetes", "Dyslipidemia", "NAFLD / NASH", "Insulin Resistance"],
      marker: "HOMA-IR / Lipid Profile"
    },
    {
      title: "Biomechanical",
      icon: <Wind className="text-blue-600" size={24} />,
      bg: "bg-blue-50",
      complications: ["Sleep Apnea", "Osteoarthritis", "GERD", "Urinary Incontinence"],
      marker: "AHI / Physical Function"
    },
    {
      title: "Cardiovascular",
      icon: <Heart className="text-emerald-600" size={24} />,
      bg: "bg-emerald-50",
      complications: ["Hypertension", "Heart Failure", "Coronary Artery Disease", "Atrial Fibrillation"],
      marker: "Blood Pressure / BNP"
    },
    {
      title: "Psychological",
      icon: <Brain className="text-orange-600" size={24} />,
      bg: "bg-orange-50",
      complications: ["Clinical Depression", "Body Image Disorders", "Anxiety", "Stigmatization"],
      marker: "PHQ-9 / QoL Score"
    }
  ];

  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="mb-4 inline-block px-3 py-1 bg-pink-50 rounded-full text-[#e91e63] text-xs font-bold tracking-widest uppercase">
            Section 02 — Systemic Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6 tracking-tight leading-none">
            Complications Beyond the <span className="text-[#e91e63]">Scale.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            ABCD is defined by the severity of complications. We move beyond BMI to look at how <span className="text-slate-900 font-bold">adiposopathy</span> affects four critical health domains.
          </p>
        </div>

        {/* Complications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`mb-8 p-4 ${domain.bg} w-fit rounded-2xl`}>
                {domain.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{domain.title}</h3>
              <ul className="space-y-4 mb-10">
                {domain.complications.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500 font-bold group-hover:text-slate-800 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#e91e63]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-slate-50">
                <span className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Diagnostic Marker</span>
                <span className="text-xs font-bold text-slate-900">{domain.marker}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pathophysiology CTA - FIXED LAYOUT */}
        <div className="bg-[#0f172a] rounded-[2.5rem] md:rounded-[4rem] flex flex-col lg:flex-row items-stretch justify-between relative overflow-hidden min-h-[500px]">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(233,30,99,0.1)_0%,_transparent_50%)] pointer-events-none" />
          
          {/* Left: Text Content */}
          <div className="flex-1 z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-center text-center lg:text-left">
            <h4 className="text-white text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
              Explore the <br className="hidden md:block" /> 
              <span className="text-[#e91e63]">Pathophysiology</span>
            </h4>
            <p className="text-slate-400 text-lg md:text-xl max-w-md mb-10 mx-auto lg:mx-0 leading-relaxed">
              Understand the molecular mechanisms of Lipotoxicity and multi-organ dysfunction driving ABCD complications.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-[#e91e63] text-white rounded-2xl font-black text-sm hover:bg-[#d81b60] transition-all flex items-center gap-3 shadow-lg shadow-pink-500/20">
                Open Scientific Index
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Full-Bleed Image Container */}
          <div className="flex-1 relative min-h-[350px] lg:min-h-full">
            <div className="absolute inset-0 p-4 md:p-8 lg:p-12">
               <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-slate-800">
                  <img 
                    src="/02.jpg" 
                    alt="Molecular Mechanism Illustration"
                    className="w-full h-full object-cover object-center opacity-90 transition-transform duration-700 hover:scale-110"
                  />
                  {/* Overlay to ensure smooth blending with dark background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent pointer-events-none" />
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SystemicImpactSection;