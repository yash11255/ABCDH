"use client";

import React from 'react';
import { 
  Scale, 
  UserCheck, 
  Gavel, 
  AlertCircle, 
  FileText, 
  ShieldAlert, 
  Ban,
  ScrollText
} from 'lucide-react';

const termsSections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: <UserCheck className="w-5 h-5 text-indigo-500" />,
    content: "By accessing or using ABCD Clinical Portal, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree, you are prohibited from using or accessing this site."
  },
  {
    id: "use-license",
    title: "2. Use License",
    icon: <FileText className="w-5 h-5 text-indigo-500" />,
    content: "Permission is granted to temporarily access the materials on our portal for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
  },
  {
    id: "prohibited",
    title: "3. Prohibited Conduct",
    icon: <Ban className="w-5 h-5 text-indigo-500" />,
    content: "You may not use the portal to engage in any data mining, robots, or similar data gathering and extraction tools. Any attempt to interfere with the proper working of the portal is strictly forbidden."
  },
  {
    id: "disclaimer",
    title: "4. Disclaimer",
    icon: <AlertCircle className="w-5 h-5 text-indigo-500" />,
    content: "The materials on ABCD Clinical Portal are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties of merchantability."
  },
  {
    id: "liability",
    title: "5. Limitations of Liability",
    icon: <ShieldAlert className="w-5 h-5 text-indigo-500" />,
    content: "In no event shall ABCD Clinical Portal or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our platform."
  },
  {
    id: "governing-law",
    title: "6. Governing Law",
    icon: <Gavel className="w-5 h-5 text-indigo-500" />,
    content: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which ABCD Clinical Portal operates and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
  }
];

export default function TermsAndConditionsPage() {
  return (
    
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 pb-20">
      {/* Header */}
      <header className="py-20 px-4 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Scale size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 font-medium italic">
            Last Updated: <span className="text-slate-900 dark:text-white">March 1, 2026</span>
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Nav */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-8 space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4 px-3">On this page</p>
            {termsSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-800 transition-all duration-200 border-l-2 border-transparent hover:border-indigo-500"
              >
                {section.title.split('. ')[1]}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-12">
          <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
            <div className="flex gap-4">
              <ScrollText className="w-6 h-6 text-indigo-500 shrink-0" />
              <p className="text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
                Please read these terms carefully before using the <span className="font-semibold text-slate-900 dark:text-white">ABCD Clinical Portal</span>. By using our services, you agree to these conditions.
              </p>
            </div>
          </section>

          {termsSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-10 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm group-hover:border-indigo-500/50 transition-colors duration-300">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{section.title}</h2>
              </div>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed pl-12 text-[1.05rem]">
                {section.content}
              </p>
            </section>
          ))}

          {/* Bottom Alert */}
          <div className="mt-16 p-6 rounded-2xl bg-amber-50 dark:bg-amber-500/5 border border-amber-100 dark:border-amber-500/20">
            <p className="text-sm text-amber-800 dark:text-amber-200 text-center font-medium">
              Note: Failure to comply with these terms may result in immediate suspension of your access to the portal.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}