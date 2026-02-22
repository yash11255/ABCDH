"use client";

import React from 'react';
import { Microscope, Activity, ShieldCheck, ArrowRight, ChevronRight } from 'lucide-react';

const stages = [
  {
    number: "01",
    title: "At Risk",
    desc: "Early detection of metabolic predisposition and adiposity pathophysiology.",
    focus: "Primary Prevention",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800", 
    accent: "bg-blue-600"
  },
  {
    number: "02",
    title: "Mild/Moderate",
    desc: "Targeted intervention for subclinical complications and organ stress.",
    focus: "Secondary Prevention",
    image: "https://images.unsplash.com/photo-1579152276506-44446359bc44?q=80&w=800",
    accent: "bg-emerald-600"
  },
  {
    number: "03",
    title: "Established",
    desc: "Advanced management of manifest clinical complications and systemic health.",
    focus: "Active Management",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800",
    accent: "bg-amber-500"
  },
  {
    number: "04",
    title: "Advanced",
    desc: "Comprehensive tertiary care for structural damage and functional impairment.",
    focus: "Tertiary Intervention",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800",
    accent: "bg-rose-600"
  }
];

export default function WhatIsABCD() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 border-l-4 border-slate-900 pl-8">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-[1.1] tracking-tight">
              360° Perspective on <br />
              <span className="italic font-light text-slate-400">Adiposity-Based Care</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 pt-4">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              ABCD is a complication-centric medical model. By shifting focus from weight to <strong>pathophysiology</strong>, we move beyond BMI toward a data-driven understanding of systemic health.
            </p>
          </div>
        </div>

        {/* The Dark-Bordered Hover Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stages.map((stage, idx) => (
            <div 
              key={idx} 
              className="group relative h-[450px] w-full overflow-hidden rounded-2xl border-2 border-slate-900/10 bg-white transition-all duration-500 hover:border-slate-900 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background Reveal */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={stage.image} 
                  alt={stage.title}
                  className="h-full w-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-0 group-hover:opacity-10"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-serif text-slate-300 group-hover:text-slate-900 transition-colors duration-500">
                      {stage.number}
                    </span>
                    <div className={`h-1.5 w-12 ${stage.accent} rounded-full transition-all duration-700 group-hover:w-full`} />
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">
                      {stage.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-800 transition-colors">
                      {stage.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Metadata */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-900/10 group-hover:border-slate-900 transition-colors">
                  <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-slate-900">
                    {stage.focus}
                  </span>
                  <div className="h-8 w-8 rounded-full border-2 border-slate-900/10 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                    <ChevronRight size={14} className="text-slate-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <div className="rounded-[40px] overflow-hidden border-2 border-slate-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600" 
                alt="Clinical Data" 
                className="w-full h-[500px] md:h-[650px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-4 md:right-10 bg-slate-900 p-8 md:p-10 rounded-[32px] shadow-2xl text-white max-w-xs md:max-w-sm border-4 border-white">
               <Activity className="text-blue-400 mb-4" size={28} />
               <h4 className="text-xl font-serif mb-3">Diagnostic Integrity</h4>
               <p className="text-xs text-slate-400 leading-relaxed mb-6">
                 Utilizing the ABCD staging model to ensure precise medical titration for systemic health restoration.
               </p>
               <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-blue-400 group">
                 Technical Brief 
                 <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
            {[
              { label: "Precision Metric", title: "Pathophysiological Mapping", color: "text-blue-600" },
              { label: "Diagnostic Pillar", title: "Holistic Itinerary", color: "text-slate-400" }
            ].map((item, i) => (
              <div key={i} className="relative pl-8 border-l-4 border-slate-900">
                <h5 className={`text-[9px] font-black uppercase tracking-[0.3em] ${item.color} mb-3`}>{item.label}</h5>
                <h6 className="text-lg font-serif text-slate-900 mb-2">{item.title}</h6>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Analyzing functional adipose tissue dysfunction to mitigate long-term systemic risk.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}