"use client";

import React from 'react';
import Link from 'next/link';
import { Activity, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`relative z-20 sticky top-0 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-100' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-20 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Activity size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <h2 className={`text-lg font-serif tracking-tight leading-none uppercase transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
               <span className={`font-light italic transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-blue-300'
              }`}>ABCD Health</span>
            </h2>
            <p className={`text-[8px] uppercase tracking-[0.4em] font-bold mt-1 transition-colors duration-300 ${
              isScrolled ? 'text-slate-500' : 'text-slate-300'
            }`}>
              Adiposity-Based Chronic Disease
            </p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className={`flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
            isScrolled ? 'text-slate-600' : 'text-slate-900'
          }`}>
            <Link href="/about" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
            }`}>About ABCD</Link>
            <Link href="/stages" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
            }`}>Stages</Link>
            <Link href="/complications" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
            }`}>Complications</Link>
            <Link href="/resources" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
            }`}>Resources</Link>
            <Link href="/faq" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
            }`}>FAQ</Link>
            <Link href="/contact" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-white'
            }`}>Contact</Link>
          </div>
          <Link href="/" className={`border transition-all duration-500 px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest ${
            isScrolled 
              ? 'border-blue-500/50 text-slate-900 hover:bg-blue-600 hover:text-white' 
              : 'border-white/50 text-white hover:bg-white hover:text-slate-900'
          }`}>
            Home
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled 
              ? 'hover:bg-slate-100 text-slate-900' 
              : 'hover:bg-white/20 text-white'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-slate-50 px-6 py-4 space-y-2">
          <Link href="/" className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm font-semibold">Home</Link>
          <Link href="/about" className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm font-semibold">About ABCD</Link>
          <Link href="/stages" className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm font-semibold">Stages</Link>
          <Link href="/complications" className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm font-semibold">Complications</Link>
          <Link href="/resources" className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm font-semibold">Resources</Link>
          <Link href="/faq" className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm font-semibold">FAQ</Link>
          <Link href="/knowledge-base" className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm font-semibold">Knowledge Base</Link>
          <Link href="/contact" className="block py-2 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors text-sm font-semibold">Contact</Link>
        </div>
      )}
    </header>
  );
}
