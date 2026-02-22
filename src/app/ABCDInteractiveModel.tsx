"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Heart, Brain, Bone, ChevronRight } from 'lucide-react';

const hotspots = [
  {
    id: 'neuro',
    icon: <Brain size={18} />,
    title: "Neurometabolic Axis",
    position: { top: '15%', left: '50%' },
    content: "Impact on hunger signaling, cognitive function, and the neuro-endocrine response to adipose tissue dysfunction.",
    color: "bg-purple-500"
  },
  {
    id: 'cardio',
    icon: <Heart size={18} />,
    title: "Cardiometabolic System",
    position: { top: '35%', left: '48%' },
    content: "Focus on vascular inflammation, hypertension, and the reduction of atherosclerotic risk markers.",
    color: "bg-rose-500"
  },
  {
    id: 'metabolic',
    icon: <Activity size={18} />,
    title: "Metabolic Organs",
    position: { top: '45%', left: '55%' },
    content: "Addressing insulin resistance within the liver and pancreas to restore systemic glucose homeostasis.",
    color: "bg-blue-500"
  },
  {
    id: 'skeletal',
    icon: <Bone size={18} />,
    title: "Biomechanical Structure",
    position: { top: '75%', left: '45%' },
    content: "Mitigating joint stress and structural degeneration caused by adiposity-induced mechanical load.",
    color: "bg-emerald-500"
  }
];

export default function ABCDInteractiveModel() {
  const [activeTab, setActiveTab] = useState(hotspots[0]);

  return (
    <section className="bg-white py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[11px] uppercase tracking-[0.6em] font-bold text-blue-600 mb-4">Precision Mapping</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
            The ABCD <span className="italic font-light text-slate-400">Human Model</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50/50 rounded-[60px] p-8 md:p-16 border border-slate-100">
          {/* Left: The Model Visualizer */}
          <div className="lg:col-span-7 relative flex justify-center min-h-[500px] md:min-h-[700px] bg-white rounded-[40px] shadow-inner overflow-hidden border border-slate-200/50">
            {/* Replace with your high-end 3D human render or medical illustration */}
            <img 
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-contain opacity-20 scale-110 pointer-events-none"
              alt="Medical Anatomy Backdrop"
            />
            {/* The "3D" Human Silhouette Placeholder */}
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
               <svg viewBox="0 0 200 500" className="h-full w-auto fill-slate-200/40">
                  <path d="M100,20 c15,0 25,10 25,25 s-10,25 -25,25 s-25,-10 -25,-25 s10,-25 25,-25 M100,80 c-20,0 -40,20 -40,50 v100 c0,10 5,20 15,25 v150 c0,15 10,25 25,25 s25,-10 25,-25 v-150 c10,-5 15,-15 15,-25 v-100 c0,-30 -20,-50 -40,-50" />
               </svg>
               {/* Interactive Hotspots */}
               {hotspots.map((spot) => (
                 <motion.button
                   key={spot.id}
                   className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer z-20 ${spot.color}`}
                   style={spot.position}
                   whileHover={{ scale: 1.2 }}
                   onClick={() => setActiveTab(spot)}
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                 >
                   <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-inherit" />
                   {spot.icon}
                 </motion.button>
               ))}
            </div>
          </div>

          {/* Right: The Insight Panel */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-10 md:p-14 rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden"
              >
                {/* Decorative Background Icon */}
                <div className="absolute -top-10 -right-10 opacity-[0.03] scale-[4]">
                  {activeTab.icon}
                </div>

                <div className={`w-14 h-14 rounded-2xl ${activeTab.color} flex items-center justify-center text-white mb-8`}>
                  {activeTab.icon}
                </div>
                
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2">Complication Focus</h4>
                <h5 className="text-3xl font-serif text-slate-900 mb-6">{activeTab.title}</h5>
                <p className="text-lg text-slate-500 leading-relaxed font-light mb-8">
                  {activeTab.content}
                </p>

                <button className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all">
                  View Diagnostic Criteria
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Quick Navigation Info */}
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-white rounded-3xl border border-slate-100">
                  <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-1">Status</p>
                  <p className="text-sm font-serif text-slate-900 leading-none">Real-time Staging</p>
               </div>
               <div className="p-6 bg-white rounded-3xl border border-slate-100">
                  <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Accuracy</p>
                  <p className="text-sm font-serif text-slate-900 leading-none">Cellular Fidelity</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
