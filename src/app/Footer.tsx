"use client";

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight, Globe } from 'lucide-react';

export default function ABCDFooter() {
  return (
    <footer className="bg-[#fcfcfc] border-t border-slate-100 pt-24 pb-12 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Section: CTA & Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-serif italic text-xl">A</div>
              <span className="text-xl font-serif tracking-tight text-slate-900">ABCD <span className="text-slate-400 font-light">Precision</span></span>
            </div>
            <h4 className="text-4xl font-serif text-slate-900 leading-tight">
              Leading the shift to <br/>
              <span className="italic text-blue-600">complication-centric</span> care.
            </h4>
            
            {/* Newsletter Signup */}
            <div className="relative max-w-sm group">
              <input 
                type="email" 
                placeholder="Join the research network" 
                className="w-full bg-white border border-slate-200 py-4 px-6 rounded-2xl outline-none focus:border-blue-600 transition-all text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-4 rounded-xl hover:bg-blue-600 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Framework</h5>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Pathophysiology</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Staging Model</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Diagnostic Clusters</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Clinical Guidelines</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Institution</h5>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Our Specialists</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Research Papers</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Global Network</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact Hub</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Access</h5>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Patient Portal</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Clinician Login</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Referral Intake</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Hubs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-slate-100 mb-12">
          <div className="flex items-start gap-4 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">North America</p>
              <p className="text-sm font-medium text-slate-900">8700 Beverly Blvd, Los Angeles</p>
              <p className="text-xs text-slate-500 mt-1">+1 (310) 423-3277</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Global Support</p>
              <p className="text-sm font-medium text-slate-900">International Care Coordination</p>
              <p className="text-xs text-slate-500 mt-1">support@abcd-precision.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Clinical Intake</p>
              <p className="text-sm font-medium text-slate-900">Immediate Assessment Line</p>
              <p className="text-xs text-slate-500 mt-1">Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Legal & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] text-slate-400 font-medium uppercase tracking-[0.2em]">
            © 2026 ABCD Precision Health. All Rights Reserved.
          </p>
          
          <div className="flex gap-8">
            <Linkedin size={18} className="text-slate-300 hover:text-blue-600 cursor-pointer transition-colors" />
            <Twitter size={18} className="text-slate-300 hover:text-blue-400 cursor-pointer transition-colors" />
            <Mail size={18} className="text-slate-300 hover:text-rose-500 cursor-pointer transition-colors" />
          </div>

          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}