"use client";

import React from 'react';
import { Microscope, Activity, ShieldCheck, ChevronRight, Beaker, Target, Zap } from 'lucide-react';

const stages = [
  {
    number: "01",
    title: "At Risk",
    desc: "Early detection of metabolic predisposition and adiposity pathophysiology.",
    focus: "Primary Prevention",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800", 
    accent: "bg-blue-500"
  },
  {
    number: "02",
    title: "Mild/Moderate",
    desc: "Targeted intervention for subclinical complications and organ stress.",
    focus: "Secondary Prevention",
    image: "https://images.unsplash.com/photo-1579152276506-44446359bc44?q=80&w=800",
    accent: "bg-emerald-500"
  },
  {
    number: "03",
    title: "Established",
    desc: "Advanced management of manifest clinical complications and systemic health.",
    focus: "Active Management",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800",
    accent: "bg-orange-400"
  },
  {
    number: "04",
    title: "Advanced",
    desc: "Comprehensive tertiary care for structural damage and functional impairment.",
    focus: "Tertiary Intervention",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800",
    accent: "bg-rose-500"
  }
];

export default function WhatIsABCD() {
  return (
    <section className="bg-[#fcfcfd] py-16 md:py-32 px-4 md:px-10 lg:px-20 overflow-hidden text-slate-900">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-blue-600"></span>
              <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">Clinical Framework</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight text-slate-900">
              A 360° Perspective on <br />
              <span className="italic font-light text-slate-400">Adiposity Care</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-slate-600 leading-relaxed font-light border-l-2 border-slate-100 pl-6">
              ABCD is a complication-centric model. By shifting focus from weight to <strong className="font-semibold text-slate-900">pathophysiology</strong>, we move beyond BMI toward data-driven systemic health.
            </p>
          </div>
        </div>

        {/* Hover Grid - Improved for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-40">
          {stages.map((stage, idx) => (
            <div 
              key={idx} 
              className="group relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2"
            >
              {/* Subtle Image Overlay */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <img 
                  src={stage.image} 
                  alt={stage.title}
                  className="h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 mix-blend-multiply grayscale-[0.5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              </div>

              {/* Content Card */}
              <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-5xl font-serif text-slate-100 group-hover:text-slate-200 transition-colors duration-500">
                      {stage.number}
                    </span>
                    <div className={`h-1 w-12 ${stage.accent} rounded-full transition-all duration-500 group-hover:w-20`} />
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                      {stage.title}
                    </h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed group-hover:text-slate-700 transition-colors">
                      {stage.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                    <div className="flex items-center justify-between group/btn">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                        {stage.focus}
                      </span>
                      <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                        <ChevronRight size={18} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Section - Light Mode Refinement */}
        <div className="relative rounded-[40px] bg-slate-50 border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-10 md:p-16 lg:p-24 space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-blue-600">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Clinical Protocol</span>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight">
                  Beyond BMI to <br />
                  <span className="text-blue-600 italic font-light">Precision Mapping</span>
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-lg font-light">
                  Weight is a proxy, not a diagnosis. By evaluating <strong>adipose tissue dysfunction</strong> (sick fat), clinicians can prescribe interventions tailored to metabolic phenotype.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                <div className="group">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Target size={20} className="text-blue-600 group-hover:text-white" />
                  </div>
                  <h4 className="text-slate-900 font-bold mb-2">Clinical Precision</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Targeted titration based on complication severity rather than flat weight loss goals.</p>
                </div>
                <div className="group">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Zap size={20} className="text-emerald-600 group-hover:text-white" />
                  </div>
                  <h4 className="text-slate-900 font-bold mb-2">Systemic Impact</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Focused on metabolic restoration and long-term cardiovascular risk reduction.</p>
                </div>
              </div>
            </div>
            
            <div className="relative min-h-[400px] bg-slate-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600" 
                alt="Research" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-50/20 to-slate-50 lg:to-transparent" />
              
              <div className="absolute bottom-8 right-8 left-8 md:left-auto md:w-80 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white">
                <Activity className="text-blue-600 mb-4" size={28} />
                <p className="text-slate-800 text-sm font-medium leading-relaxed italic">
                  "The shift to ABCD allows for a medically relevant diagnosis of obesity as a chronic disease."
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white uppercase">AACE</div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Consensus Report</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}