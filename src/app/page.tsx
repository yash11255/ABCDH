import type { Metadata } from "next";


import Header from "./components/Header";
import HeroSection from "./HeroSection";
import WhatIsABCD from "./WhatIsABCD";
import ABCDvsObesity from "./ABCDvsObesity";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "ABCD Clinical Framework Overview",
  description:
    "Explore the ABCD framework for adiposity-based chronic disease, including staging, systemic complications, and evidence-based clinical guidance.",
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
