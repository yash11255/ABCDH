"use client";

import React, { useState } from 'react';
import { Microscope, Activity, Globe, ChevronRight, Plus, Scan, ArrowRight, Mail } from 'lucide-react';

const abcdFramework = [
  { id: 'metabolic', title: 'Metabolic Drivers', subtitle: 'Insulin & Lipid Pathways', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800' },
  { id: 'biomechanical', title: 'Biomechanical Stress', subtitle: 'Skeletal Integrity', img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800' },
  { id: 'cardio', title: 'Cardiometabolic', subtitle: 'Vascular Precision', img: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=800' },
  { id: 'cellular', title: 'Adipose Tissue', subtitle: 'Pathophysiological Analysis', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800' },
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

          <div className="absolute top-[200px] left-0 w-[42%] h-[600px] rounded-[60px] overflow-hidden shadow-2xl z-30 border-[12px] border-white rotate-1">
             <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000" className="w-full h-full object-cover" alt="Medical Professional" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-2">Lead Diagnostic</p>
                <p className="text-xl font-serif leading-tight">Advanced Adiposity Analysis Protocol</p>
             </div>
          </div>

          <div className="absolute bottom-[100px] right-[15%] z-40 bg-white/80 backdrop-blur-2xl p-8 rounded-[40px] shadow-xl border border-white max-w-[280px]">
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

      {/* --- NEW MINIMALIST CONTACT SECTION --- */}
      <div className="max-w-[1500px] mx-auto mt-20 md:mt-32 relative z-10">
        <div className="bg-white rounded-[60px] border border-slate-100 shadow-[0_50px_100px_rgba(0,0,0,0.02)] p-10 md:p-20 overflow-hidden relative">
          {/* Subtle Form Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 mb-12 lg:mb-0">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight leading-none mb-6">
                  Inquire <span className="italic font-light text-slate-400">Clinical Integration.</span>
                </h4>
                <p className="text-slate-500 font-light text-lg max-w-md">
                  Have questions about the ABCD staging protocol or interested in collaboration? Our medical desk is here to assist.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 inline-block">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 mb-2">Primary Contact</p>
                <p className="text-slate-900 font-bold">clinical@abcd.health</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">Full Name</label>
                  <input type="text" placeholder="Dr. John Doe" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600/10 transition-all outline-none text-slate-900" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">Email Address</label>
                  <input type="email" placeholder="john@hospital.com" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600/10 transition-all outline-none text-slate-900" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">Message / Inquiry</label>
                <textarea rows={4} placeholder="How can we help your clinical practice?" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600/10 transition-all outline-none text-slate-900 resize-none"></textarea>
              </div>
              <button className="group w-full bg-slate-900 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10">
                Submit Inquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* ------------------------------------- */}

      <div className="lg:hidden mt-10">
        <button className="w-full bg-slate-900 text-white py-6 rounded-3xl font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <Microscope size={16} /> Begin Staging Analysis
        </button>
      </div>
    </section>
  );
}