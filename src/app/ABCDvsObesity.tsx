"use client";

import React, { useState } from 'react';
import { ArrowRight, Microscope, ShieldCheck, Activity, Globe, ChevronRight } from 'lucide-react';

const abcdFramework = [
  { id: 'metabolic', title: 'Metabolic Drivers', subtitle: 'Insulin & Lipid Pathways', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800' },
  { id: 'biomechanical', title: 'Biomechanical Stress', subtitle: 'Skeletal Integrity', img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800' },
  { id: 'cardio', title: 'Cardiometabolic', subtitle: 'Vascular Precision', img: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=800' },
  { id: 'cellular', title: 'Adipose Tissue', subtitle: 'Pathophysiological Analysis', img: 'https://images.unsplash.com/photo-1579152276506-44446359bc44?q=80&w=800' },
  { id: 'neuro', title: 'Neurometabolic', subtitle: 'Systemic Signaling', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800' },
];

export default function ResponsiveMillionDollarMasonry() {
  const [activeImg, setActiveImg] = useState(abcdFramework[0].img);

  return (
    <section className="bg-white py-10 md:py-15 px-4 md:px-20 overflow-hidden relative">
      <div className="max-w-[1500px] mx-auto lg:grid lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Editorial Header - Adjusted for Mobile Centering */}
        <div className="lg:col-span-4 space-y-2 text-center lg:text-left mb-12 lg:mb-0">
          <div className="mb-8 md:mb-12">
             <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold text-blue-600 mb-4">Precision Framework</h2>
             <h3 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
               Advanced <br/> 
               <span className="italic font-light text-slate-400">Diagnostic Staging</span>
             </h3>
          </div>

          {/* Desktop Navigation List (Hidden on Mobile) */}
          <div className="hidden lg:block space-y-1">
            {abcdFramework.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveImg(item.img)}
                className="w-full flex items-center justify-between py-8 px-6 group transition-all hover:bg-slate-50 hover:rounded-3xl hover:-translate-y-1 border-b border-slate-100"
              >
                <div className="text-left">
                  <h4 className="text-xl font-serif text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-2">{item.subtitle}</p>
                </div>
                <ArrowRight size={18} className="text-slate-200 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Scroller (Hidden on Desktop) */}
        <div className="lg:hidden flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar px-2">
          {abcdFramework.map((item) => (
            <div key={item.id} className="min-w-[85vw] snap-center relative rounded-[40px] overflow-hidden shadow-2xl bg-white border border-slate-100">
              <div className="h-64 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif text-slate-900">{item.title}</h4>
                <p className="text-[10px] uppercase tracking-widest text-blue-600 font-bold mt-2">{item.subtitle}</p>
                <button className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group">
                  Protocol Details <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: 7-Image Masonry (Hidden on Mobile) */}
        <div className="hidden lg:block lg:col-span-8 relative min-h-[1000px] w-full">
          {/* Main Reveal Image */}
          <div className="absolute top-0 right-0 w-[60%] h-[450px] rounded-[60px] overflow-hidden shadow-2xl z-30 transition-all duration-700">
             <img src={activeImg} className="w-full h-full object-cover" alt="Main Reveal" />
          </div>

          {/* Large Vertical Portrait */}
          <div className="absolute top-[150px] left-0 w-[45%] h-[650px] rounded-[60px] overflow-hidden shadow-2xl z-40 border-[16px] border-white -rotate-1">
             <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000" className="w-full h-full object-cover" alt="Expert Specialist" />
             <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                <ShieldCheck className="text-blue-600 mb-2" size={20} />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ABCD Protocol</p>
                <p className="text-md font-serif text-slate-900 leading-tight">Gold Standard Assessment</p>
             </div>
          </div>

          {/* Abstract Science / Floating Detail */}
          <div className="absolute top-[400px] right-[10%] w-[180px] h-[180px] rounded-full overflow-hidden shadow-2xl z-50 border-8 border-white">
             <img src="https://images.unsplash.com/photo-1579152276506-44446359bc44?q=80&w=400" className="w-full h-full object-cover" alt="Cell Detail" />
          </div>

          {/* Floating Action Card */}
          <div className="absolute top-[80px] right-[55%] z-50 bg-slate-900 text-white p-8 rounded-[35px] shadow-2xl space-y-4 max-w-[220px]">
             <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <Globe size={20} />
             </div>
             <div>
                <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Global Network</p>
                <p className="text-xl font-serif leading-none italic">Multidisciplinary Support</p>
             </div>
          </div>
        </div>

      </div>
      
      {/* Mobile CTA (Fixed bottom/Last item) */}
      <div className="lg:hidden mt-8">
        <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] shadow-xl">
          Enter Diagnostic Portal
        </button>
      </div>
    </section>
  );
}