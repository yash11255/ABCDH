"use client";

import React from 'react';
import { ChevronRight, Target, Activity, HeartPulse, Microscope } from 'lucide-react';

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

export default function PremiumABCDCards() {
  return (
    <section className="bg-white py-15 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 space-y-4">
          <h2 className="text-[11px] uppercase tracking-[0.6em] font-bold text-blue-600">ABCD Staging</h2>
          <h3 className="text-5xl font-serif text-slate-900 leading-tight">
            The Precision <span className="italic font-light text-slate-400">Model</span>
          </h3>
        </div>

        {/* Million-Dollar Hover Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => (
            <div 
              key={idx} 
              className="group relative h-[500px] w-full overflow-hidden rounded-xl border border-slate-100 bg-white transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* 1. Background Image Reveal Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={stage.image} 
                  alt={stage.title}
                  className="h-full w-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-0 group-hover:opacity-40"
                />
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-white group-hover:via-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* 2. Content Layer */}
              <div className="relative z-10 flex h-full flex-col justify-between p-10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-serif text-slate-200 group-hover:text-slate-900 transition-colors duration-500">
                      {stage.number}
                    </span>
                    <div className={`h-1 w-12 ${stage.accent} rounded-full transition-all duration-700 group-hover:w-full`} />
                  </div>
                  
                  <div className="pt-4 transition-transform duration-500 group-hover:-translate-y-2">
                    <h4 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">
                      {stage.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed opacity-100 group-hover:text-slate-800 transition-colors">
                      {stage.desc}
                    </p>
                  </div>
                </div>

                {/* 3. Bottom Action */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 group-hover:border-slate-200 transition-colors">
                  <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-slate-900 transition-colors">
                    {stage.focus}
                  </span>
                  <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-500">
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}