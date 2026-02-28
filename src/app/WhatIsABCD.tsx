"use client";

import React from 'react';
import { Microscope, Activity, ShieldCheck, ChevronRight, Target, Zap } from 'lucide-react';

const stages = [
  {
    number: "01",
    title: "At Risk",
    desc: "Early detection of metabolic predisposition and adiposity pathophysiology.",
    focus: "Primary Prevention",
    accent: "bg-blue-500"
  },
  {
    number: "02",
    title: "Mild/Moderate",
    desc: "Targeted intervention for subclinical complications and organ stress.",
    focus: "Secondary Prevention",
    accent: "bg-emerald-500"
  },
  {
    number: "03",
    title: "Established",
    desc: "Advanced management of manifest clinical complications.",
    focus: "Active Management",
    accent: "bg-orange-400"
  },
  {
    number: "04",
    title: "Advanced",
    desc: "Comprehensive tertiary care for structural damage and functional impairment.",
    focus: "Tertiary Intervention",
    accent: "bg-rose-500"
  }
];

export default function WhatIsABCD() {
  return (
    <section className="bg-[#f8f9fa] py-20 px-6 sm:px-10 lg:px-20 text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-blue-600 rounded-full"></span>
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Clinical Framework</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-[1.1]">
              A 360° Perspective on <br />
              <span className="italic font-light text-slate-400">Adiposity Care</span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 font-light border-l border-slate-300 pl-6">
            ABCD is a complication-centric model. By shifting focus from weight to <strong>pathophysiology</strong>, we move beyond BMI toward data-driven systemic health.
          </p>
        </div>

        {/* Improved Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stages.map((stage, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-serif text-slate-200 group-hover:text-blue-100 transition-colors">
                  {stage.number}
                </span>
                <div className={`h-1.5 w-10 ${stage.accent} rounded-full`} />
              </div>
              
              <h4 className="text-xl font-semibold mb-3">{stage.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{stage.desc}</p>
              
              <div className="mt-auto flex items-center justify-between text-slate-400 group-hover:text-slate-900 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider">{stage.focus}</span>
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>

        {/* Feature Section */}
        <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-200 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide">
                <ShieldCheck size={14} />
                Protocol Focus
              </div>
              <h3 className="text-4xl font-serif text-slate-900">Precision Mapping</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Weight is a proxy, not a diagnosis. By evaluating adipose tissue dysfunction, clinicians can prescribe interventions tailored to metabolic phenotype.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <Target className="text-blue-500" size={24} />
                  <h4 className="font-bold text-sm uppercase">Clinical Precision</h4>
                  <p className="text-xs text-slate-500">Targeted titration based on severity.</p>
                </div>
                <div className="space-y-2">
                  <Zap className="text-emerald-500" size={24} />
                  <h4 className="font-bold text-sm uppercase">Systemic Impact</h4>
                  <p className="text-xs text-slate-500">Focus on cardiovascular restoration.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-center">
              <blockquote className="text-xl italic text-slate-700 leading-relaxed">
                "The shift to ABCD allows for a medically relevant diagnosis of obesity as a chronic disease."
                <footer className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest not-italic">
                  — AACE Consensus Report
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}