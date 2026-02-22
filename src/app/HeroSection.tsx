"use client";

import React from 'react';
import Image from 'next/image';
import { Play, Pause, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#05070a] text-white font-sans">
      {/* 1. Background: Video Metabolic Health Visualization */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://cfvod.kaltura.com/pd/p/1825021/sp/182502100/serveFlavor/entryId/1_fql24rnz/v/1/ev/5/flavorId/1_bg4ovn8h/name/a.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-center w-full h-full scale-105 animate-subtle-zoom opacity-40"
        />
        // ...existing code...
      </div>

      {/* 2. Precision Navigation */}
      <header className="relative z-20">
        <nav className="flex items-center justify-between px-10 py-8 md:px-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-blue-600 rounded-lg">
                <Activity size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-serif tracking-tight leading-none uppercase">
                ABCD <span className="font-light italic text-blue-400">Clinical Portal</span>
              </h2>
              <p className="text-[8px] uppercase tracking-[0.4em] font-bold mt-1 text-slate-500">
                Adiposity-Based Chronic Disease
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-300">
              {['Pathophysiology', 'Assessment', 'Complications', 'Management'].map((item) => (
                <a key={item} href="#" className="hover:text-blue-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <button className="border border-blue-500/50 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-500 backdrop-blur-md">
              Diagnostic Intake
            </button>
          </div>
        </nav>
      </header>

      {/* 3. Hero Content: ABCD Focus */}
      <div className="relative z-10 flex h-[calc(100%-120px)] flex-col justify-center px-10 md:px-24">
        <div className="max-w-5xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-widest">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Complication-Centric Model
          </div>

          <h1 className="text-6xl md:text-[5rem] font-serif leading-[1.05] tracking-tight animate-reveal">
            Beyond the Scale. <br />
            <span className="italic font-extralight text-slate-300">Targeted ABCD Intervention.</span>
          </h1>

          <p className="max-w-xl text-slate-400 text-lg font-light leading-relaxed">
            Transitioning from BMI-based metrics to a comprehensive 
            <strong className="text-white font-medium"> pathophysiology-driven </strong> 
            approach for adiposity-related complications.
          </p>
          
          <div className="flex items-center gap-8 group cursor-pointer w-fit pt-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse" />
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-blue-500/40 bg-black/40 backdrop-blur-md group-hover:bg-blue-600 transition-all duration-700">
                <Play size={20} fill="white" className="ml-1" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">The ABCD Framework</p>
              <p className="text-[12px] font-light text-slate-400 max-w-[220px]">
                Understand the 4 stages of adiposity-based chronic disease.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Stage Indicator (Bottom Left) */}
      <div className="absolute bottom-12 left-24 hidden md:flex gap-12 text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase">
        <span className="text-blue-500 border-b border-blue-500 pb-2 transition-all">Stage 1</span>
        <span className="hover:text-white transition-all cursor-pointer">Stage 2</span>
        <span className="hover:text-white transition-all cursor-pointer">Stage 3</span>
        <span className="hover:text-white transition-all cursor-pointer">Stage 4</span>
      </div>

      <style jsx global>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 25s infinite alternate ease-in-out;
        }
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: reveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}