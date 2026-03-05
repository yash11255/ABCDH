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
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link 
            href="/" 
            className="ml-4 flex items-center gap-1.5 px-5 py-2 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
          >
            Home
            <ChevronRight size={12} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-1 text-slate-900">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100 shadow-lg' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-widest text-slate-700">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}