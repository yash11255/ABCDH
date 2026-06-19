import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../Footer";
import { doctorProfileGraph, jsonLd } from "@/lib/schema";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dr. Ashish Kalla | Metabolic Health Specialist",
  description:
    "Profile of Dr. Ashish Kalla, Senior Consultant in Internal Medicine, Metabolic Health Specialist, and Senior Longevity Consultant.",
  alternates: {
    canonical: "/dr-ashish-kalla",
  },
};

const credentials = [
  "MBBS",
  "DNB (Internal Medicine)",
  "ECFMG (USA)",
  "Fellowship in Endocrinology & Diabetic Complications (USA)",
  "Fellowship in Gastroenterology (USA)",
  "MRCP (UK)",
];

const roles = [
  "Senior Consultant - Internal Medicine",
  "Metabolic Health Specialist",
  "Senior Longevity Consultant",
];

const focusAreas = [
  "Internal medicine",
  "Metabolic health",
  "Diabetic complications",
  "Endocrinology",
  "Gastroenterology",
  "Longevity care",
  "Adiposity-Based Chronic Disease",
];

export default function DoctorProfilePage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(doctorProfileGraph()) }}
      />
      <main className="min-h-screen bg-white font-sans text-slate-800">
        <section className="border-t-4 border-blue-700 bg-slate-900 px-6 py-16 text-white md:px-20 md:py-20">
          <div className="mx-auto grid max-w-350 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-200">
                Doctor Profile
              </p>
              <h1 className="mt-4 text-4xl font-serif leading-tight md:text-6xl">
                Dr. Ashish Kalla
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">
                Senior Consultant in Internal Medicine, Metabolic Health
                Specialist, and Senior Longevity Consultant focused on metabolic
                disease, diabetic complications, and long-term health
                optimization.
              </p>
            </div>

            <div className="border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="flex aspect-square items-center justify-center border border-white/20 bg-slate-800">
                <Image
                  src="/dr-ashish-kalla.jpeg"
                  alt="Dr. Ashish Kalla"
                  width={300}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:px-20">
          <div className="mx-auto grid max-w-350 gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <article>
              <section className="border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-center gap-3">
                  <HeartPulse className="text-blue-700" size={24} />
                  <h2 className="text-2xl font-serif text-slate-900">
                    Clinical Focus
                  </h2>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  Dr. Ashish Kalla works across internal medicine, metabolic
                  health, diabetic complications, gastroenterology, and
                  longevity-focused care. His profile supports the ABCD
                  framework's focus on complication-centric metabolic disease
                  assessment and long-term clinical outcomes.
                </p>
              </section>

              <section className="mt-10">
                <h2 className="border-b border-slate-200 pb-2 text-2xl font-serif text-slate-900">
                  Qualifications
                </h2>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {credentials.map((credential) => (
                    <div
                      key={credential}
                      className="flex items-start gap-3 border border-slate-200 bg-slate-50 p-4"
                    >
                      <GraduationCap
                        className="mt-0.5 shrink-0 text-blue-700"
                        size={20}
                      />
                      <span className="text-sm font-medium leading-relaxed text-slate-800">
                        {credential}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <h2 className="border-b border-slate-200 pb-2 text-2xl font-serif text-slate-900">
                  Specialist Areas
                </h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </section>
            </article>

            <aside className="h-fit border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="text-blue-700" size={24} />
                <h2 className="text-xl font-serif text-slate-900">
                  Current Roles
                </h2>
              </div>
              <ul className="mt-5 space-y-3">
                {roles.map((role) => (
                  <li
                    key={role}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                  >
                    <Award
                      className="mt-0.5 shrink-0 text-blue-700"
                      size={16}
                    />
                    {role}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <Link
                  href="/contact"
                  className="inline-flex w-full justify-center bg-blue-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-800"
                >
                  Contact ABCD Health
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
