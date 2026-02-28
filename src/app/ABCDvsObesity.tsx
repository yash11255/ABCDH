"use client";

import React, { useState } from 'react';
import { Microscope, ShieldCheck, Activity, Globe, ChevronRight, Plus, Scan } from 'lucide-react';

const abcdFramework = [
  { id: 'metabolic', title: 'Metabolic Drivers', subtitle: 'Insulin & Lipid Pathways', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800' },
  { id: 'biomechanical', title: 'Biomechanical Stress', subtitle: 'Skeletal Integrity', img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800' },
  { id: 'cardio', title: 'Cardiometabolic', subtitle: 'Vascular Precision', img: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=800' },
  { id: 'cellular', title: 'Adipose Tissue', subtitle: 'Pathophysiological Analysis', img: 'https://images.unsplash.com/photo-1579152276506-44446359bc44?q=80&w=800' },
  { id: 'neuro', title: 'Neurometabolic', subtitle: 'Systemic Signaling', img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800' },
];

export default function AdvancedMedicalMasonry() {
  const [activeItem, setActiveItem] = useState(abcdFramework[0]);

  return (
    <section className="bg-[#fcfcfd] py-16 md:py-24 px-4 md:px-10 lg:px-20 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-10 left-0 text-[12rem] md:text-[15rem] font-serif font-black text-slate-200/20 select-none pointer-events-none tracking-tighter">
        ABCD
      </div>

      <div className="max-w-[1500px] mx-auto lg:grid lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Left Column: Navigation & Content */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-12">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-700">Clinical Standard</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[0.9] tracking-tight">
              Diagnostic <br/> 
              <span className="italic font-light text-slate-400">Precision.</span>
            </h3>
            <p className="text-slate-500 font-light text-lg max-w-sm mx-auto lg:mx-0">
              Moving beyond mass to metabolic mapping. A comprehensive evaluation of five critical systemic drivers.
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block space-y-2">
            {abcdFramework.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveItem(item)}
                className={`w-full group flex items-center justify-between p-6 transition-all duration-500 rounded-3xl ${
                  activeItem.id === item.id 
                  ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] translate-x-4' 
                  : 'hover:bg-slate-50 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="text-left">
                  <p className={`text-[9px] uppercase tracking-[0.2em] font-bold mb-1 transition-colors ${
                    activeItem.id === item.id ? 'text-blue-600' : 'text-slate-400'
                  }`}>
                    {item.subtitle}
                  </p>
                  <h4 className="text-xl font-serif text-slate-900">{item.title}</h4>
                </div>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  activeItem.id === item.id ? 'bg-slate-900 text-white scale-110' : 'bg-slate-100 text-slate-400'
                }`}>
                  {activeItem.id === item.id ? <Scan size={18} /> : <Plus size={18} />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Masonry */}
        <div className="hidden lg:block lg:col-span-7 xl:col-span-8 relative h-[850px]">
          
          {/* Active Reveal Image (Dynamic) */}
          <div className="absolute top-0 right-0 w-[70%] h-[500px] rounded-[80px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] z-10 transition-all duration-700">
             <div className="absolute inset-0 bg-slate-900/5 mix-blend-overlay z-10" />
             <img 
               src={activeItem.img} 
               className="w-full h-full object-cover transition-transform duration-1000 scale-105" 
               alt={activeItem.title} 
             />
             <div className="absolute bottom-12 right-12 z-20">
                <div className="bg-white/20 backdrop-blur-xl p-4 rounded-2xl border border-white/30 text-white">
                    <Activity size={24} className="mb-2" />
                    <p className="text-xs font-bold tracking-widest uppercase">Live Data Stream</p>
                </div>
             </div>
          </div>

          {/* Static Portrait - The "Anchor" */}
          <div className="absolute top-[200px] left-0 w-[42%] h-[600px] rounded-[60px] overflow-hidden shadow-2xl z-30 border-[12px] border-white rotate-1">
             <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000" className="w-full h-full object-cover" alt="Medical Professional" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-2">Lead Diagnostic</p>
                <p className="text-xl font-serif leading-tight">Advanced Adiposity Analysis Protocol</p>
             </div>
          </div>

          {/* Floating Glass Metric */}
          <div className="absolute bottom-[50px] right-[5%] z-40 bg-white/80 backdrop-blur-2xl p-8 rounded-[40px] shadow-xl border border-white max-w-[280px]">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Globe size={20} />
                </div>
                <div>
                    <h5 className="font-bold text-slate-900">EBM Guidelines</h5>
                    <p className="text-[10px] text-slate-400 uppercase font-black">2026 Global Standard</p>
                </div>
             </div>
             <p className="text-sm text-slate-600 leading-relaxed font-light">
                Our staging framework aligns with latest clinical consensus reports for metabolic health.
             </p>
          </div>

          {/* Decorative Detail - Microscopic View */}
          <div className="absolute top-[480px] right-[40%] w-32 h-32 rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white -rotate-6 transition-transform hover:rotate-0 duration-500 bg-slate-100">
             <img 
               src="ttps://images.unsplash.com/photo-1h579152276506-44446359bc44?q=80&w=400" 
               className="w-full h-full object-cover" 
               alt="Microscopic Cellular Detail" 
             />
             <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
          </div>
        </div>

        {/* Mobile View: Scroller */}
        <div className="lg:hidden flex overflow-x-auto gap-4 pb-12 snap-x snap-mandatory no-scrollbar px-2">
          {abcdFramework.map((item) => (
            <div key={item.id} className="min-w-[85vw] snap-center relative rounded-[40px] overflow-hidden bg-white border border-slate-100 shadow-xl">
              <div className="h-64 relative">
                <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                   <span className="text-[9px] font-black uppercase text-blue-600 tracking-tighter">Diagnostic Unit</span>
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h4 className="text-3xl font-serif text-slate-900">{item.title}</h4>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{item.subtitle}</p>
                <div className="h-[1px] w-full bg-slate-100 my-4" />
                <button className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  View Protocol <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden mt-4">
        <button className="w-full bg-slate-900 text-white py-6 rounded-3xl font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <Microscope size={16} /> Begin Staging Analysis
        </button>
      </div>
    </section>
  );
}