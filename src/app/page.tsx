import type { Metadata } from "next";


import Header from "./components/Header";
import HeroSection from "./HeroSection";
import WhatIsABCD from "./WhatIsABCD";
import ABCDvsObesity from "./ABCDvsObesity";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Adiposity-Based Chronic Disease | ABCD Health",
  description:
    "Learn why obesity is a disease through the adiposity-based chronic disease framework, including metabolic health assessment, metabolic health check pathways, and metabolic syndrome risk insights.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatIsABCD />
      <ABCDvsObesity />
      <Footer />
    </>
  );
}
