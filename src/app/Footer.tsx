"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Instagram, ChevronRight, Activity } from 'lucide-react';

export default function ABCDFooter() {
  return (
    <footer className="bg-slate-100 border-t border-slate-300 pt-16 pb-8 px-6 md:px-20 font-sans text-slate-800">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Section: Branding & Newsletter (Structured and Clinical) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-slate-300 pb-10 mb-10 gap-8">
          
          {/* Clinical Lockup */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Activity size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-serif tracking-tight leading-none uppercase text-slate-900">
              ABCD <span className="font-light italic text-blue-600">Clinical Portal</span>
            </h2>
            <p className="text-[8px] uppercase tracking-[0.4em] font-bold mt-1 text-slate-500">
              Adiposity-Based Chronic Disease
            </p>
          </div>
        </Link>
          
          {/* Professional Newsletter Signup */}
          <div className="w-full lg:w-auto">
            <label className="block text-sm font-bold text-slate-900 mb-2">Sign up for free clinical e-newsletters</label>
            <div className="flex w-full lg:w-96">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white border border-slate-300 py-2 px-4 rounded-l-sm outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-sm"
              />
              <button className="bg-blue-700 text-white px-6 font-bold text-sm rounded-r-sm hover:bg-blue-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Directory: The "Fat Footer" Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-slate-300 pb-12 mb-8">
          
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-4">About the Framework</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><Link href="/about" className="hover:underline hover:text-blue-700">What is ABCD?</Link></li>
              <li><Link href="/stages" className="hover:underline hover:text-blue-700">Staging Model</Link></li>
              <li><Link href="/complications" className="hover:underline hover:text-blue-700">Systemic Complications</Link></li>
              <li><Link href="/faq" className="hover:underline hover:text-blue-700">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:underline hover:text-blue-700">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-4">Medical Professionals</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><Link href="/resources" className="hover:underline hover:text-blue-700">Clinical Guidelines</Link></li>
              <li><Link href="/tools" className="hover:underline hover:text-blue-700">Assessment Tools</Link></li>
              <li><Link href="/knowledge-base" className="hover:underline hover:text-blue-700">Knowledge Base</Link></li>
              <li><Link href="/training" className="hover:underline hover:text-blue-700">Training & CME</Link></li>
              <li><Link href="/referrals" className="hover:underline hover:text-blue-700">Refer a Patient</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-4">Research & Data</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><Link href="/trials" className="hover:underline hover:text-blue-700">Clinical Trials</Link></li>
              <li><Link href="/laboratories" className="hover:underline hover:text-blue-700">Biomarker Laboratories</Link></li>
              <li><Link href="/publications" className="hover:underline hover:text-blue-700">Journals & Publications</Link></li>
              <li><Link href="/faculty" className="hover:underline hover:text-blue-700">Research Faculty</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-4">International Network</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><a href="#" className="hover:underline hover:text-blue-700">Global Care Coordination</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-700">International Hubs</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-700">Financial Services</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-700">Language Interpretation</a></li>
            </ul>
          </div>

          {/* Column 5 - Contact Info structured differently from links */}
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-4">Clinical Contact</h3>
            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-slate-500 shrink-0 mt-0.5" />
                <span>8700 Beverly Blvd<br/>Los Angeles, CA 90048</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-slate-500 shrink-0" />
                <a href="tel:+13104233277" className="hover:underline hover:text-blue-700">+1 (310) 423-3277</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-slate-500 shrink-0" />
                <a href="mailto:support@abcd-precision.com" className="hover:underline hover:text-blue-700">support@abcd-portal.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Social & App Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-300 pb-8 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-900">Follow Us</span>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-slate-300 hover:bg-blue-700 hover:text-white text-slate-700 flex items-center justify-center rounded-sm transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-300 hover:bg-blue-700 hover:text-white text-slate-700 flex items-center justify-center rounded-sm transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-300 hover:bg-blue-700 hover:text-white text-slate-700 flex items-center justify-center rounded-sm transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-300 hover:bg-blue-700 hover:text-white text-slate-700 flex items-center justify-center rounded-sm transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-300 hover:bg-blue-700 hover:text-white text-slate-700 flex items-center justify-center rounded-sm transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Placeholder for Medical App Links (Common in Hospital Footers) */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-900">Get the Clinical App</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-sm hover:bg-slate-800 transition-colors">
                App Store
              </button>
              <button className="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-sm hover:bg-slate-800 transition-colors">
                Google Play
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Footer */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-blue-800 font-medium">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Notice of Privacy Practices</a>
            <a href="#" className="hover:underline">Notice of Nondiscrimination</a>
            <a href="#" className="hover:underline">Digital Accessibility Statement</a>
            <a href="#" className="hover:underline">Site Map</a>
            <a href="#" className="hover:underline">Manage Cookies</a>
          </div>
          
          <p className="text-xs text-slate-500 leading-relaxed">
            © 1998-{new Date().getFullYear()} ABCD Precision Health Foundation for Medical Education and Research. All rights reserved. Any use of this site constitutes your agreement to the Terms and Conditions and Privacy Policy linked above. 
          </p>
        </div>
        
      </div>
    </footer>
  );
}