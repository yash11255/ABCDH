import React from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../Footer';

// 1. Enhanced SEO Metadata
export const metadata = {
    title: "Frequently Asked Questions | ABCD Clinical Portal",
    description: "Find clinical answers and guidelines regarding the Adiposity-Based Chronic Disease (ABCD) classification, staging, and multidisciplinary management.",
    openGraph: {
        title: "ABCD Clinical Framework FAQs",
        description: "Answers to common clinical questions about Adiposity-Based Chronic Disease (ABCD).",
        type: "website",
    }
};

// 2. Structured Data for UI mapping AND Schema generation
const faqCategories = [
    {
        id: "understanding-abcd",
        title: "Understanding ABCD",
        faqs: [
            {
                question: "What does ABCD stand for?",
                schemaAnswer: "ABCD stands for Adiposity-Based Chronic Disease. It's a diagnostic framework that replaces the traditional 'obesity' diagnosis with a focus on metabolic dysfunction and complications rather than body mass index (BMI) alone.",
                answer: "ABCD stands for Adiposity-Based Chronic Disease. It's a diagnostic framework that replaces the traditional 'obesity' diagnosis with a focus on metabolic dysfunction and complications rather than body mass index (BMI) alone."
            },
            {
                question: "How is ABCD different from traditional obesity classification?",
                schemaAnswer: "Traditional classification relies primarily on BMI. ABCD differs by focusing on actual complications, recognizing that people with similar BMI can have different disease severity, classifying disease into 4 stages, and enabling personalized treatments.",
                answer: (
                    <>
                        <p className="mb-4">Traditional obesity classification relies primarily on BMI (weight/height²), which is a crude measure that doesn't account for metabolic health. ABCD differs by:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Focusing on actual complications rather than weight alone</li>
                            <li>Recognizing that people with similar BMI can have very different disease severity</li>
                            <li>Classifying disease into 4 stages based on type and severity of complications</li>
                            <li>Enabling personalized, targeted treatment strategies</li>
                        </ul>
                    </>
                )
            },
            {
                question: "Can someone with a BMI less than 30 have ABCD?",
                schemaAnswer: "Yes. Some individuals with normal BMI still have metabolic dysfunction and complications related to ectopic fat deposition (metabolically unhealthy normal weight). ABCD classification accounts for these scenarios.",
                answer: "Yes. Some individuals with normal BMI still have metabolic dysfunction and complications related to ectopic fat deposition (metabolically unhealthy normal weight). Conversely, some obese individuals have minimal complications. ABCD classification accounts for these scenarios better than BMI alone."
            }
        ]
    },
    {
        id: "four-stages",
        title: "The Four Stages",
        faqs: [
            {
                question: "What are the four stages of ABCD?",
                schemaAnswer: "Stage 1: At Risk (Primary prevention). Stage 2: Mild/Moderate (Secondary prevention). Stage 3: Established (Active management). Stage 4: Advanced (Tertiary intervention).",
                answer: (
                    <ul className="space-y-3">
                        <li><strong>Stage 1 - At Risk:</strong> Metabolic predisposition without manifest complications; focus on primary prevention.</li>
                        <li><strong>Stage 2 - Mild/Moderate:</strong> Subclinical complications with early organ stress; focus on secondary prevention.</li>
                        <li><strong>Stage 3 - Established:</strong> Manifest clinical complications; focus on active management.</li>
                        <li><strong>Stage 4 - Advanced:</strong> Structural damage and functional impairment; focus on tertiary intervention.</li>
                    </ul>
                )
            },
            {
                question: "How do I determine a patient's ABCD stage?",
                schemaAnswer: "ABCD staging is based on the presence and severity of complications across four domains: metabolic, biomechanical, cardiovascular, and psychological. A patient is classified at the most severe stage represented by any complication.",
                answer: "ABCD staging is based on the presence and severity of complications across four domains: metabolic, biomechanical, cardiovascular, and psychological. Clinicians evaluate organ-specific complications using clinical assessment, biomarkers, and imaging. A patient is classified at the most severe stage represented by any complication."
            }
        ]
    },
    {
        id: "clinical-management",
        title: "Clinical Management",
        faqs: [
            {
                question: "What is the role of weight loss in ABCD management?",
                schemaAnswer: "While weight loss is beneficial, the focus is on improving metabolic function and reducing complications. 5-10% intentional weight loss can improve metabolic markers, but preventing further weight gain and managing complications remains paramount.",
                answer: "While weight loss is beneficial for many patients with ABCD, the ABCD framework recognizes that weight loss is not the only goal. The focus is on improving metabolic function and reducing complications. 5-10% intentional weight loss can improve metabolic markers and reduce some complications. However, not all patients will achieve or maintain significant weight loss, and preventing further weight gain and managing complications remains important."
            },
            {
                question: "What pharmacologic interventions are used in ABCD?",
                schemaAnswer: "Treatment depends on the patient's stage. Stage 1-2: Metformin, GLP-1 agonists, statins. Stage 3: Combination therapy targeting specific organ complications. Stage 4: Advanced medications and potential bariatric surgery.",
                answer: (
                    <>
                        <p className="mb-3">Treatment depends on the patient's stage and complications:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Stage 1-2:</strong> Metformin, GLP-1 agonists, statins, antihypertensives</li>
                            <li><strong>Stage 3:</strong> Combination therapy targeting specific organ complications</li>
                            <li><strong>Stage 4:</strong> Advanced medications, potential bariatric surgery consideration</li>
                        </ul>
                    </>
                )
            }
        ]
    }
];

// 3. Schema Generator for Google Rich Snippets
const generateFAQSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqCategories.flatMap(category =>
            category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.schemaAnswer
                }
            }))
        )
    };
    return JSON.stringify(schema);
};

// 4. Clinical FAQ Component
const FAQAccordion = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
    return (
        <details className="group border-b border-slate-200 last:border-0 [&_summary::-webkit-details-marker]:hidden">
            <summary className="cursor-pointer py-5 flex items-start justify-between font-bold text-blue-800 hover:text-blue-900 transition-colors list-none">
                <span className="pr-6">{question}</span>
                <ChevronDown className="flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform mt-0.5" size={20} />
            </summary>
            <div className="pb-6 text-slate-700 leading-relaxed">
                {answer}
            </div>
        </details>
    );
};

export default function FAQ() {
    return (
        <>
            <Header />

            {/* Injecting JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: generateFAQSchema() }}
            />

            <div className="min-h-screen bg-white font-sans text-slate-800">

                {/* Hero Section */}
                <section className="bg-slate-900 text-white py-16 md:py-20 px-6 md:px-20 border-t-4 border-blue-700">
                    <div className="max-w-[1400px] mx-auto">
                        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
                            Find clinical answers and guidelines regarding the ABCD classification system, staging protocols, and multidisciplinary management strategies.
                        </p>
                    </div>
                </section>

                {/* Main Content Layout */}
                <section className="py-12 px-6 md:px-20 bg-white">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12">

                        {/* Left Navigation Sidebar */}
                        <aside className="md:w-1/4 hidden md:block">
                            <div className="sticky top-8">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-200">
                                    Categories
                                </h3>
                                <ul className="space-y-3">
                                    {faqCategories.map((category) => (
                                        <li key={category.id}>
                                            <a href={`#${category.id}`} className="text-blue-700 hover:underline text-sm font-medium block py-1">
                                                {category.title}
                                            </a>
                                        </li>
                                    ))}
                                    <li className="pt-4 mt-4 border-t border-slate-200">
                                        <a href="#support" className="text-blue-700 hover:underline text-sm font-medium">Contact Support</a>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        {/* Right Main Content (FAQs) */}
                        <main className="md:w-3/4 space-y-16">
                            {faqCategories.map((category) => (
                                <div key={category.id} id={category.id} className="scroll-mt-12">
                                    <h2 className="text-3xl font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">
                                        {category.title}
                                    </h2>
                                    <div className="border border-slate-200 rounded-sm px-6 bg-slate-50 shadow-sm">
                                        {category.faqs.map((faq, idx) => (
                                            <FAQAccordion
                                                key={idx}
                                                question={faq.question}
                                                answer={faq.answer}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </main>
                    </div>
                </section>

                {/* Contact/Support Section - Clinical Styling */}
                <section id="support" className="py-16 px-6 md:px-20 bg-slate-100 border-y border-slate-200 scroll-mt-12">
                    <div className="max-w-[1400px] mx-auto text-center space-y-6">
                        <h2 className="text-3xl font-serif text-slate-900">Require further clinical clarification?</h2>
                        <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8">
                            Consult our comprehensive knowledge base or reach out directly to our clinical support team for nuanced case inquiries.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/knowledge-base" className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white rounded-sm font-bold hover:bg-blue-800 transition-colors">
                                Visit Knowledge Base
                            </Link>
                            <button className="inline-flex items-center justify-center px-8 py-3 bg-white border border-blue-700 text-blue-700 rounded-sm font-bold hover:bg-blue-50 transition-colors">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </section>

                {/* Related Pages Grid */}
                <section className="py-16 px-6 md:px-20 bg-white">
                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b border-slate-200">
                            Related Health Information
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
                            <Link href="/complications" className="group block border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow rounded-sm">
                                <h3 className="text-lg font-bold text-blue-700 group-hover:underline mb-2">Complications</h3>
                                <p className="text-slate-600 text-sm">Understand systemic complications across the four health domains.</p>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}