import type { BlogFaq, BlogPost } from "@/lib/blog";

type QuestionAnswer = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type CollectionItem = {
  name: string;
  description?: string;
  url?: string;
};

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.abcd.health").replace(/\/$/, "");
const LOGO_PATH = "/PHOTO-2026-03-01-10-33-42.jpg";

export const SCHEMA_IDS = {
  website: `${SITE_URL}/#website`,
  organization: `${SITE_URL}/#organization`,
  founder: `${SITE_URL}/#dr-ashish-kalla`,
  medicalCondition: `${SITE_URL}/#adiposity-based-chronic-disease`,
};

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function jsonLd(payload: unknown) {
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

export function organizationNode() {
  return {
    "@type": "MedicalOrganization",
    "@id": SCHEMA_IDS.organization,
    name: "ABCD Health",
    alternateName: ["ABCD Clinical Portal", "Adiposity-Based Chronic Disease Health"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(LOGO_PATH),
    },
    image: absoluteUrl(LOGO_PATH),
    description:
      "ABCD Health is a medical education and clinical framework resource for adiposity-based chronic disease, metabolic health assessment, staging, and complication-centric care.",
    medicalSpecialty: ["Endocrinology", "Metabolic health", "Obesity medicine"],
    founder: {
      "@id": SCHEMA_IDS.founder,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-81309-06807",
        contactType: "customer support",
        email: "support@imedi.health",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "human resources",
        email: "hr@imedi.health",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Two Horizon Centre, Level 6, Golf Course Road",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    sameAs: ["https://imedi.health", "https://www.instagram.com/abcd_health/"],
  };
}

export function personNode() {
  return {
    "@type": "Person",
    "@id": SCHEMA_IDS.founder,
    name: "Dr. Ashish Kalla",
    honorificPrefix: "Dr.",
    url: absoluteUrl("/dr-ashish-kalla"),
    jobTitle: [
      "Senior Consultant - Internal Medicine",
      "Metabolic Health Specialist",
      "Senior Longevity Consultant",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "MBBS",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "DNB (Internal Medicine)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ECFMG (USA)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Fellowship in Endocrinology & Diabetic Complications (USA)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Fellowship in Gastroenterology (USA)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "MRCP (UK)",
      },
    ],
    knowsAbout: [
      "Internal medicine",
      "Metabolic health",
      "Endocrinology",
      "Diabetic complications",
      "Gastroenterology",
      "Longevity medicine",
      "Adiposity-Based Chronic Disease",
    ],
    affiliation: {
      "@id": SCHEMA_IDS.organization,
    },
  };
}

export function medicalConditionNode() {
  return {
    "@type": "MedicalCondition",
    "@id": SCHEMA_IDS.medicalCondition,
    name: "Adiposity-Based Chronic Disease",
    alternateName: ["ABCD", "Adiposity Based Chronic Disease", "Adiposity-related chronic disease"],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    name: "ABCD Health",
    alternateName: "ABCD Clinical Portal",
    url: SITE_URL,
    publisher: {
      "@id": SCHEMA_IDS.organization,
    },
    inLanguage: "en",
  };
}

export function globalSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [websiteNode(), organizationNode(), personNode(), medicalConditionNode()],
  };
}

export function breadcrumbNode(path: string, items: BreadcrumbItem[]) {
  const currentUrl = absoluteUrl(path);
  const allItems = [{ name: "Home", path: "/" }, ...items];

  return {
    "@type": "BreadcrumbList",
    "@id": `${currentUrl}#breadcrumb`,
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageNode(path: string, name: string, faqs: QuestionAnswer[], description?: string) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    url: absoluteUrl(path),
    name,
    ...(description ? { description } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function webpageNode(path: string, name: string, description: string, type = "WebPage") {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en",
    isPartOf: {
      "@id": SCHEMA_IDS.website,
    },
    publisher: {
      "@id": SCHEMA_IDS.organization,
    },
    breadcrumb: {
      "@id": `${absoluteUrl(path)}#breadcrumb`,
    },
  };
}

export function simpleWebPageGraph(path: string, name: string, description: string, breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [webpageNode(path, name, description), breadcrumbNode(path, breadcrumbs)],
  };
}

export function medicalPageGraph({
  path,
  name,
  description,
  faqs = [],
  breadcrumbs,
  mainContentOfPage,
}: {
  path: string;
  name: string;
  description: string;
  faqs?: QuestionAnswer[];
  breadcrumbs: BreadcrumbItem[];
  mainContentOfPage?: string[];
}) {
  const nodes: unknown[] = [
    {
      ...webpageNode(path, name, description),
      about: {
        "@id": SCHEMA_IDS.medicalCondition,
      },
    },
    {
      ...webpageNode(path, name, description, "MedicalWebPage"),
      "@id": `${absoluteUrl(path)}#medical-webpage`,
      about: {
        "@id": SCHEMA_IDS.medicalCondition,
      },
      audience: {
        "@type": "MedicalAudience",
        audienceType: "Patients and healthcare professionals",
      },
      medicalSpecialty: ["Endocrinology", "Metabolic health", "Obesity medicine"],
      ...(mainContentOfPage ? { mainContentOfPage } : {}),
    },
    breadcrumbNode(path, breadcrumbs),
  ];

  if (faqs.length > 0) {
    nodes.push(faqPageNode(path, name, faqs, description));
  }

  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function seoTopicGraph({
  path,
  title,
  description,
  faqs,
  dateModified,
}: {
  path: string;
  title: string;
  description: string;
  faqs: QuestionAnswer[];
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...webpageNode(path, title, description),
        about: {
          "@id": SCHEMA_IDS.medicalCondition,
        },
      },
      {
        ...webpageNode(path, title, description, "MedicalWebPage"),
        "@id": `${absoluteUrl(path)}#medical-webpage`,
        about: {
          "@id": SCHEMA_IDS.medicalCondition,
        },
        audience: {
          "@type": "MedicalAudience",
          audienceType: "Patients and healthcare professionals",
        },
        medicalSpecialty: ["Endocrinology", "Metabolic health", "Obesity medicine"],
        lastReviewed: dateModified,
        reviewedBy: {
          "@id": SCHEMA_IDS.organization,
        },
      },
      {
        "@type": "Article",
        "@id": `${absoluteUrl(path)}#article`,
        headline: title,
        description,
        mainEntityOfPage: {
          "@id": `${absoluteUrl(path)}#webpage`,
        },
        datePublished: dateModified,
        dateModified,
        author: {
          "@id": SCHEMA_IDS.organization,
        },
        reviewedBy: {
          "@id": SCHEMA_IDS.organization,
        },
        publisher: {
          "@id": SCHEMA_IDS.organization,
        },
        image: absoluteUrl(LOGO_PATH),
        about: {
          "@id": SCHEMA_IDS.medicalCondition,
        },
      },
      breadcrumbNode(path, [{ name: title, path }]),
      faqPageNode(path, title, faqs, description),
    ],
  };
}

export function collectionPageGraph({
  path,
  name,
  description,
  breadcrumbs,
  items,
  type = "CollectionPage",
}: {
  path: string;
  name: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  items: CollectionItem[];
  type?: "CollectionPage" | "Blog";
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webpageNode(path, name, description, type),
      breadcrumbNode(path, breadcrumbs),
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl(path)}#itemlist`,
        name,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: item.name,
            ...(item.description ? { description: item.description } : {}),
            ...(item.url ? { url: absoluteUrl(item.url) } : {}),
          },
        })),
      },
    ],
  };
}

export function contactPageGraph() {
  const path = "/contact";
  const name = "Contact ABCD Health";
  const description = "Contact ABCD Health for ABCD framework support, clinical inquiries, partnerships, careers, and technical assistance.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...webpageNode(path, name, description, "ContactPage"),
        mainEntity: {
          "@id": SCHEMA_IDS.organization,
        },
      },
      breadcrumbNode(path, [{ name: "Contact", path }]),
    ],
  };
}

export function doctorProfileGraph() {
  const path = "/dr-ashish-kalla";
  const name = "Dr. Ashish Kalla";
  const description =
    "Profile of Dr. Ashish Kalla, Senior Consultant in Internal Medicine, Metabolic Health Specialist, and Senior Longevity Consultant.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...webpageNode(path, name, description, "ProfilePage"),
        mainEntity: {
          "@id": SCHEMA_IDS.founder,
        },
        about: {
          "@id": SCHEMA_IDS.founder,
        },
      },
      breadcrumbNode(path, [{ name, path }]),
      personNode(),
    ],
  };
}

export function blogPostingGraph({
  path,
  post,
  title,
  description,
  authorName,
  image,
  breadcrumbs,
  faqs = [],
}: {
  path: string;
  post: BlogPost;
  title: string;
  description: string;
  authorName: string;
  image: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: BlogFaq[];
}) {
  const nodes: unknown[] = [
    webpageNode(path, title, description),
    breadcrumbNode(path, breadcrumbs),
    {
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(path)}#blogposting`,
      headline: title,
      description,
      author: {
        "@type": "Person",
        name: authorName,
      },
      datePublished: post.createdAt,
      dateModified: post.updatedAt || post.createdAt,
      image: absoluteUrl(image),
      publisher: {
        "@id": SCHEMA_IDS.organization,
      },
      mainEntityOfPage: {
        "@id": `${absoluteUrl(path)}#webpage`,
      },
      about: {
        "@id": SCHEMA_IDS.medicalCondition,
      },
    },
  ];

  if (faqs.length > 0) {
    nodes.push(faqPageNode(path, title, faqs, description));
  }

  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
