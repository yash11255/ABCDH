"use client";

import React from 'react';
import { ShieldCheck, Lock, Eye, Cookie, UserCheck, FileText, Bell } from 'lucide-react';
import Header from '../components/Header';

const policySections = [
  {
    id: "info-collect",
    title: "Information We Collect",
    icon: <Eye className="w-5 h-5 text-blue-500" />,
    content: "We collect personal information you voluntarily provide, such as your name and email address. We also automatically collect usage data, including your IP address, browser type, and pages visited to improve user experience."
  },
  {
    id: "how-use",
    title: "How We Use Information",
    icon: <UserCheck className="w-5 h-5 text-blue-500" />,
    content: "Your data helps us provide and maintain our services, notify you about changes, and provide customer support. It also allows us to monitor usage patterns to enhance our platform's performance."
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: <Cookie className="w-5 h-5 text-blue-500" />,
    content: "We use cookies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies, though some portions of our service may become inaccessible."
  },
  {
    id: "security",
    title: "Data Security",
    icon: <Lock className="w-5 h-5 text-blue-500" />,
    content: "The security of your data is important to us. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet is 100% secure."
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    content: "We may employ third-party companies to facilitate our service. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose it."
  },
  {
    id: "changes",
    title: "Policy Updates",
    icon: <Bell className="w-5 h-5 text-blue-500" />,
    content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Effective Date' at the top."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 pb-20">
        {/* Header Section */}
        <header className="py-20 px-4 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <FileText size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-slate-500 dark:text-zinc-400 font-medium">
              Effective Date: <span className="text-slate-900 dark:text-white">March 1, 2026</span>
            </p>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 space-y-1"> {/* Increased top offset for fixed headers */}
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4 px-3">Sections</p>
              {policySections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-9 space-y-10">
            <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-8 rounded-3xl shadow-sm">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
                At <span className="font-semibold text-slate-900 dark:text-white">ABCD Clinical Portal</span>, we value your trust. This policy explains how we handle your information when you interact with our platform.
              </p>
            </section>

            {policySections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 group"> {/* Increased scroll-mt to account for fixed header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm group-hover:border-blue-500/50 transition-colors">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed pl-12">
                  {section.content}
                </p>
              </section>
            ))}

            {/* Contact Section Placeholder */}
            <section className="mt-16 pt-8 border-t border-slate-200 dark:border-zinc-800 text-center">
              <h2 className="text-2xl font-bold mb-4">Questions?</h2>
              <p className="text-slate-500 dark:text-zinc-400 max-w-md mx-auto">
                If you have any inquiries regarding your data rights or this policy, please reach out to our administration team.
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}