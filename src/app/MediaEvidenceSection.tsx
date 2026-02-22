import React from 'react';
import { FileText, BarChart3, Zap, Crosshair } from 'lucide-react';

const visuals = [
  {
    icon: <FileText className="w-6 h-6 text-indigo-600" />, // Histopathology
    title: 'Histopathology',
    desc: 'Microscopic tissue analysis for cellular changes.',
    img: '/Gemini_Generated_Image_w1sa03w1sa03w1sa.png',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-pink-600" />, // Body Composition
    title: 'Body Composition',
    desc: 'Quantitative imaging of fat and lean mass.',
    img: 'http://googleusercontent.com/image_collection/image_retrieval/11775002769053623968_0',
  },
  {
    icon: <Crosshair className="w-6 h-6 text-orange-600" />, // Molecular
    title: 'Molecular',
    desc: 'Biomarker and cytokine profiling for metabolic risk.',
    img: 'http://googleusercontent.com/image_collection/image_retrieval/9851616751297497227_0',
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-600" />, // Functional
    title: 'Functional',
    desc: 'Dynamic tests for tissue and organ function.',
    img: 'http://googleusercontent.com/image_collection/image_retrieval/12002314033861949197_0',
  },
];

const MediaEvidenceSection = () => {
  return (
    <section className="relative bg-white pt-10 md:pt-16 pb-20 overflow-hidden">
      {/* Background Decoration - subtle grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none hidden sm:block"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-4 inline-block px-3 py-1 bg-indigo-50 rounded-full text-indigo-600 text-xs md:text-sm font-bold tracking-wide uppercase">
          Visual Evidence
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0f172a] mb-4 tracking-tight leading-[1.1]">
          Multi-Modal <span className="text-indigo-600 block sm:inline">Diagnostics</span>
        </h2>
        <p className="text-sm md:text-lg font-bold text-slate-400 uppercase tracking-[0.15em] md:tracking-[0.3em] mb-6">
          Imaging, Biomarkers & Function
        </p>
        <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-xl leading-relaxed mb-10 px-2">
          Integrating histopathology, advanced imaging, molecular profiling, and functional tests to provide a comprehensive view of metabolic disease.
        </p>
      </div>

      {/* Visual Evidence Grid */}
      <div className="container mx-auto px-4 relative z-20 -mt-8 md:-mt-16">
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 p-6 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {visuals.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-slate-50">
                  {v.icon}
                </div>
                <img src={v.img} alt={v.title} className="w-full h-32 object-cover rounded-xl shadow-md mb-2" />
                <h4 className="font-bold text-slate-900 text-base md:text-lg">{v.title}</h4>
                <p className="text-xs md:text-sm text-slate-500 mt-1 leading-snug">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaEvidenceSection;