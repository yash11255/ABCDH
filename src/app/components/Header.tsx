"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Small buffer to trigger the shadow/border
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About ABCD', href: '/about' },
    { name: 'Stages', href: '/stages' },
    { name: 'Complications', href: '/complications' },
    { name: 'Resources', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    /* Change: Used 'sticky' instead of 'fixed'. 
       This keeps the header in the layout flow, preventing overlap. */
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b ${
        isScrolled 
          ? 'py-2 border-slate-200 shadow-sm' 
          : 'py-3 border-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10">
        
        {/* Logo Section */}
        <Link href="/" className="relative group flex items-center w-48 h-10 overflow-hidden">
          <div className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-2`}>
            <h2 className="text-base font-serif tracking-tight leading-none text-slate-900">
              <span className="font-light italic text-blue-600">ABCD</span> HEALTH
            </h2>
            <p className="text-[7px] uppercase tracking-[0.2em] font-medium mt-0.5 text-slate-500">
              Adiposity-Based Chronic Disease
            </p>
          </div>

          <div className="absolute inset-0 flex items-center opacity-0 translate-y-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            <img 
              src="/PHOTO-2026-03-01-10-33-42.jpg" 
              alt="ABCD Logo" 
              className="h-7 w-auto object-contain"
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className={`flex py-5 space-x-8 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
            isScrolled ? 'text-slate-600' : 'text-slate-900'
          }`}>
            <Link href="/about" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-900'
            }`}>About ABCD</Link>
            <Link href="/stages" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-900'
            }`}>Stages</Link>
            <Link href="/complications" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-900'
            }`}>Complications</Link>
            <Link href="/resources" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-900'
            }`}>Resources</Link>
            <Link href="/faq" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-900'
            }`}>FAQ</Link>
            <Link href="/contact" className={`transition-colors ${
              isScrolled ? 'hover:text-blue-600' : 'hover:text-slate-900'
            }`}>Contact</Link>
          </div>
          <Link href="/" className={`border transition-all duration-500 px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest ${
            isScrolled 
              ? 'border-blue-500/50 text-slate-900 hover:bg-blue-600 hover:text-white' 
              : 'border-blue-300/50 text-slate-600 hover:bg-white hover:text-slate-900'
          }`}>
            Home
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-1 text-slate-900">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
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