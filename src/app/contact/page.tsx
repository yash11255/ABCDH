import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Search, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../Footer';

export const metadata = {
  title: "Contact Us | Clinical Portal",
  description: "Get in touch with the ABCD Clinical Portal for support, inquiries, and clinical questions."
};

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (310) 423-3277", "Available 24/7"]
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["contact@abcd-portal.com", "support@abcd-portal.com"]
    },
    {
      icon: MapPin,
      title: "Main Office",
      details: ["8700 Beverly Blvd", "Los Angeles, CA 90048"]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Mon-Fri: 8 AM - 6 PM PT", "Sat: 10 AM - 2 PM PT"]
    }
  ];

  const departments = [
    {
      name: "Clinical Inquiries",
      email: "clinical@abcd-portal.com",
      description: "Questions about ABCD staging, management, and clinical implementation."
    },
    {
      name: "Patient Portal Support",
      email: "patients@abcd-portal.com",
      description: "Account issues, portal access, and patient resources."
    },
    {
      name: "Training & Certification",
      email: "training@abcd-portal.com",
      description: "Educational programs, courses, and certification inquiries."
    },
    {
      name: "Partnership & Integration",
      email: "partnerships@abcd-portal.com",
      description: "EHR integration, health system partnerships, and collaborations."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white font-sans text-slate-800">

        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16 md:py-20 px-6 md:px-20 border-t-4 border-blue-700">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              Have questions about the ABCD framework, require clinical support, or need technical assistance? Our team is available to help.
            </p>
          </div>
        </section>

        {/* Quick Contact Info - Clean Clinical Grid */}
        <section className="py-12 px-6 md:px-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon;
                return (
                  <div key={idx} className="bg-white p-6 border border-slate-200 rounded-sm flex flex-col items-center text-center">
                    <IconComponent className="text-blue-700 mb-4" size={32} />
                    <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                    <div className="space-y-1 text-sm text-slate-700">
                      {info.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Contact Layout */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Form */}
            <div className="lg:w-7/12">
              <h2 className="text-3xl font-serif text-slate-900 mb-8 pb-2 border-b border-slate-200">Send an Inquiry</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Inquiry Type *</label>
                  <select required className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 bg-white">
                    <option value="">Select a subject...</option>
                    <option value="clinical">Clinical Question</option>
                    <option value="support">Patient Support</option>
                    <option value="training">Training & Education</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <div className="pt-4">
                  <button type="submit" className="bg-blue-700 text-white px-8 py-3 font-bold rounded-sm hover:bg-blue-800 transition-colors">
                    Submit Inquiry
                  </button>
                  <p className="text-xs text-slate-500 mt-4">
                    For medical emergencies, please call 911 or go to your nearest emergency department. Do not submit personal health information (PHI) through this form.
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column: Directory & Info */}
            <div className="lg:w-5/12 space-y-10">
              
              {/* Emergency / Urgent Callout */}
              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Phone size={20} className="text-blue-700" /> Need Immediate Support?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  For urgent clinical questions or immediate technical issues, please call our 24/7 support line.
                </p>
                <a href="tel:+13104233277" className="text-blue-700 font-bold hover:underline text-lg">
                  +1 (310) 423-3277
                </a>
              </div>

              {/* Department Directory */}
              <div>
                <h3 className="text-2xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">Department Directory</h3>
                <div className="space-y-4">
                  {departments.map((dept, idx) => (
                    <div key={idx} className="border border-slate-200 bg-slate-50 rounded-sm p-5">
                      <h4 className="font-bold text-slate-900 mb-1">{dept.name}</h4>
                      <p className="text-sm text-slate-700 mb-3">{dept.description}</p>
                      <a href={`mailto:${dept.email}`} className="text-blue-700 font-semibold text-sm hover:underline flex items-center gap-1">
                        <Mail size={14} /> {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Common Questions - Restructured into a list format */}
        <section className="py-16 px-6 md:px-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl font-serif text-slate-900 mb-8 pb-2 border-b border-slate-200">Common Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <ChevronRight className="text-blue-700 mt-0.5 shrink-0" size={18} />
                  How long does it take to get a response?
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  We aim to respond to all inquiries within 24 hours during business days. Urgent clinical questions submitted via the portal may be prioritized.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <ChevronRight className="text-blue-700 mt-0.5 shrink-0" size={18} />
                  Can I schedule a clinical consultation?
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  Yes. Please use the contact form and select "Clinical Question" to request a consultation. Our scheduling team will follow up.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <ChevronRight className="text-blue-700 mt-0.5 shrink-0" size={18} />
                  Do you offer training programs?
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  Yes, we offer CME-accredited training on ABCD fundamentals. Contact <a href="mailto:training@abcd-portal.com" className="text-blue-700 hover:underline">training@abcd-portal.com</a> for schedules.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <ChevronRight className="text-blue-700 mt-0.5 shrink-0" size={18} />
                  How can my organization partner with ABCD?
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  We frequently collaborate with health systems for EHR integration. Reach out to <a href="mailto:partnerships@abcd-portal.com" className="text-blue-700 hover:underline">partnerships@abcd-portal.com</a>.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <Link href="/faq" className="text-blue-700 font-bold hover:underline text-sm">
                View all Frequently Asked Questions →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages Grid */}
        <section className="py-16 px-6 md:px-20 bg-white border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b border-slate-200">
              Related Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/about" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">About ABCD</h3>
                <p className="text-slate-600 text-sm">Learn about the framework, diagnostic criteria, and core principles.</p>
              </Link>
              <Link href="/resources" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">Clinical Resources</h3>
                <p className="text-slate-600 text-sm">Tools, algorithms, and guidelines for clinical implementation.</p>
              </Link>
              <Link href="/" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">Home</h3>
                <p className="text-slate-600 text-sm">Return to the main portal homepage.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}