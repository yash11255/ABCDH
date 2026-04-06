import type { Metadata } from "next";

type BlogLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "ABCD Health Blog",
  description:
    "Evidence-based insights on adiposity-based chronic disease, clinical pathways, and long-term cardiometabolic outcomes.",
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return children;
}
