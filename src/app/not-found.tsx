'use client';

import React from 'react';
import Link from 'next/link';
import { AlertCircle, Home, Search, ChevronRight, Activity } from 'lucide-react';
import Header from './components/Header';
import Footer from './Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
        
        {/* Hero Section: 404 Message */}
        <section className="flex-1 bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 md:py-32 px-6 md:px-20 border-t-4 border-blue-700">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left: Large 404 and Message */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <AlertCircle size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-7xl md:text-8xl font-serif font-bold text-blue-400 leading-none">
                    404
                  </h1>
                  <p className="text-sm uppercase tracking-widest text-slate-400 mt-2">Page Not Found</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                  Page Not Found
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                  The page you're looking for doesn't exist or may have been moved. But don't worry—you can navigate back to our clinical resources below.
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-3 font-bold rounded-sm hover:bg-blue-800 transition-colors"
                >
                  <Home size={18} />
                  Return to Homepage
                </Link>
                <Link
                  href="/knowledge-base"
                  className="inline-flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 font-bold rounded-sm hover:bg-slate-600 transition-colors"
                >
                  <Search size={18} />
                  Browse Knowledge Base
                </Link>
              </div>
            </div>

            {/* Right: Illustration Space */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-full blur-3xl" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-blue-500/10 border-2 border-blue-400/30">
                      <AlertCircle size={64} className="text-blue-400 opacity-50" />
                    </div>
                    <p className="text-sm text-slate-300 opacity-70">Page Not Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Pages Grid */}
        <section className="bg-slate-50 py-16 px-6 md:px-20 border-y border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-serif text-slate-900 mb-3">Explore ABCD Resources</h2>
              <p className="text-slate-600 text-lg">Here are some popular pages you might find helpful:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1: About ABCD */}
              <Link
                href="/about"
                className="group block bg-white border border-slate-200 rounded-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors shrink-0">
                    <Activity className="text-blue-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      What is ABCD?
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Adiposity-Based Chronic Disease Framework</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Learn about the clinical framework for understanding and managing adiposity-related complications beyond BMI.
                </p>
                <div className="flex items-center text-blue-700 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Explore <ChevronRight size={16} />
                </div>
              </Link>

              {/* Card 2: ABCD Stages */}
              <Link
                href="/stages"
                className="group block bg-white border border-slate-200 rounded-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg group-hover:bg-emerald-200 transition-colors shrink-0">
                    <ChevronRight className="text-emerald-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      ABCD Stages
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Obesity Staging Model</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Understand the four stages of adiposity-based chronic disease and clinical management strategies.
                </p>
                <div className="flex items-center text-emerald-700 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Explore <ChevronRight size={16} />
                </div>
              </Link>

              {/* Card 3: Complications */}
              <Link
                href="/complications"
                className="group block bg-white border border-slate-200 rounded-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors shrink-0">
                    <AlertCircle className="text-orange-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                      Complications
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Systemic Impact & Management</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Explore obesity-related complications across metabolic, cardiovascular, and psychological domains.
                </p>
                <div className="flex items-center text-orange-700 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Explore <ChevronRight size={16} />
                </div>
              </Link>

              {/* Card 4: FAQ */}
              <Link
                href="/faq"
                className="group block bg-white border border-slate-200 rounded-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors shrink-0">
                    <Search className="text-purple-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      FAQ
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Frequently Asked Questions</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Find answers to common questions about ABCD, staging, complications, and clinical management.
                </p>
                <div className="flex items-center text-purple-700 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Explore <ChevronRight size={16} />
                </div>
              </Link>

              {/* Card 5: Resources */}
              <Link
                href="/resources"
                className="group block bg-white border border-slate-200 rounded-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-cyan-100 p-3 rounded-lg group-hover:bg-cyan-200 transition-colors shrink-0">
                    <Home className="text-cyan-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      Clinical Resources
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Tools & Guidelines</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Access clinical guidelines, tools, and resources for managing adiposity-based chronic disease.
                </p>
                <div className="flex items-center text-cyan-700 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Explore <ChevronRight size={16} />
                </div>
              </Link>

              {/* Card 6: Knowledge Base */}
              <Link
                href="/knowledge-base"
                className="group block bg-white border border-slate-200 rounded-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-rose-100 p-3 rounded-lg group-hover:bg-rose-200 transition-colors shrink-0">
                    <Search className="text-rose-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                      Knowledge Base
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Comprehensive Medical Reference</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Search our comprehensive medical knowledge base for in-depth clinical information and evidence.
                </p>
                <div className="flex items-center text-rose-700 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Explore <ChevronRight size={16} />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Search Suggestion */}
        <section className="bg-white py-12 px-6 md:px-20">
          <div className="max-w-[1400px] mx-auto space-y-6">
            <h2 className="text-2xl font-serif text-slate-900">Still looking for something?</h2>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search the ABCD portal..."
                  className="w-full bg-slate-50 border border-slate-300 px-6 py-3 rounded-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                />
              </div>
              <button className="bg-blue-700 text-white px-8 py-3 font-bold rounded-sm hover:bg-blue-800 transition-colors">
                Search
              </button>
            </div>
            <p className="text-sm text-slate-600">
              Contact our <Link href="/contact" className="text-blue-700 hover:underline font-semibold">support team</Link> if you need additional assistance.
            </p>
          </div>
        </section>

        {/* Footer pushed to bottom with flex-1 */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
