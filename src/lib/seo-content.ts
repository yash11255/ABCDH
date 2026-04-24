export const ABCD_PILLAR_SLUG = "adiposity-based-chronic-disease";

export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoSection = {
  heading: string;
  subheading: string;
  body: string;
  bullets: string[];
};

export type SeoTopicPage = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroSummary: string;
  definition: string;
  keyTakeaways: string[];
  sections: SeoSection[];
  faqs: SeoFaq[];
  relatedSlugs: string[];
  cta: string;
};

const createTopic = (
  slug: string,
  seoTitle: string,
  metaDescription: string,
  h1: string,
  heroSummary: string,
  definition: string,
  keywordFocus: string,
  relatedSlugs: string[],
): SeoTopicPage => ({
  slug,
  seoTitle,
  metaDescription,
  h1,
  heroSummary,
  definition,
  keyTakeaways: [
    "ABCD focuses on health impact, not body size alone.",
    "Early detection can reduce cardiometabolic risk.",
    "Treatment combines medical care, nutrition, movement, and behavior change.",
    "Long-term follow-up is essential because ABCD is a chronic condition.",
  ],
  sections: [
    {
      heading: `How ${keywordFocus} works in real life`,
      subheading: "Why this matters for patients and families",
      body:
        "People often hear mixed messages about obesity and metabolic disease. ABCD gives a clearer model by looking at complications, organ impact, and progression over time. This approach helps patients understand the condition without blame and supports practical treatment planning.",
      bullets: [
        "Looks beyond weight and BMI-only thinking",
        "Connects symptoms to real clinical risk",
        "Encourages earlier, personalized intervention",
      ],
    },
    {
      heading: `Clinical approach to ${keywordFocus}`,
      subheading: "What clinicians usually evaluate",
      body:
        "A complete ABCD review includes history, physical exam, blood markers, and complication screening. Providers identify disease stage and then match interventions to risk level, goals, and patient preferences.",
      bullets: [
        "Cardiometabolic markers: glucose, lipids, blood pressure",
        "Complication review: liver, sleep, cardiovascular, endocrine",
        "Lifestyle and social factors affecting treatment success",
      ],
    },
    {
      heading: "Long-term management",
      subheading: "Sustainable care plan",
      body:
        "ABCD care is not a short-term program. It is continuous chronic disease management with regular reassessment. Clinical outcomes improve when patients receive ongoing education, clear follow-up milestones, and multidisciplinary support.",
      bullets: [
        "Track progress with measurable health markers",
        "Adjust treatment when complications change",
        "Maintain prevention plans to reduce relapse risk",
      ],
    },
  ],
  faqs: [
    {
      question: `What does ${keywordFocus} mean?`,
      answer:
        "It describes adiposity-related chronic disease using clinical impact and complication severity rather than weight alone.",
    },
    {
      question: "Can this be managed without extreme diets?",
      answer:
        "Yes. Most care plans combine realistic nutrition changes, movement, medical guidance, and long-term monitoring.",
    },
    {
      question: "Who should get evaluated?",
      answer:
        "Anyone with risk factors such as central adiposity, insulin resistance, hypertension, fatty liver, sleep apnea, or family history of metabolic disease.",
    },
    {
      question: "Is this only for people with high BMI?",
      answer:
        "No. ABCD recognizes that people with lower BMI can still have harmful adiposity patterns and metabolic complications.",
    },
  ],
  relatedSlugs,
  cta: "Book a clinical evaluation to assess metabolic risk and create a personalized ABCD management plan.",
});

export const SEO_TOPIC_PAGES: SeoTopicPage[] = [
  createTopic(
    "adiposity-based-chronic-disease",
    "Adiposity Based Chronic Disease Guide",
    "Understand ABCD with causes, symptoms, staging, and treatment strategies in clear patient-friendly language.",
    "Adiposity Based Chronic Disease (ABCD): Complete Guide",
    "This pillar page explains adiposity-based chronic disease in clear language for patients, caregivers, and clinicians.",
    "Adiposity-Based Chronic Disease (ABCD) is a chronic condition where excess or dysfunctional adipose tissue drives metabolic, hormonal, and organ complications.",
    "adiposity-based chronic disease",
    ["adiposity-based-chronic-disease-definition", "abcd-staging-system", "adiposity-based-chronic-disease-treatment"],
  ),
  createTopic(
    "what-is-adiposity-based-chronic-disease",
    "What Is Adiposity Based Chronic Disease?",
    "Learn what adiposity based chronic disease means, how it differs from obesity labels, and why it matters clinically.",
    "What Is Adiposity-Based Chronic Disease?",
    "A beginner-friendly explanation of ABCD and why it is changing obesity care.",
    "ABCD is a medical framework that defines disease using adiposity-related complications instead of body weight alone.",
    "what is adiposity based chronic disease",
    ["adiposity-based-chronic-disease-definition", "abcd-disease-explained", "obesity-vs-adiposity-based-chronic-disease"],
  ),
  createTopic(
    "adiposity-based-chronic-disease-definition",
    "ABCD Definition: Clinical Meaning",
    "Get a clear, snippet-friendly definition of adiposity based chronic disease and how clinicians apply it.",
    "Adiposity-Based Chronic Disease Definition",
    "A direct clinical definition written for search intent and featured snippets.",
    "Adiposity-Based Chronic Disease is a complication-centered diagnosis where excess or dysfunctional adipose tissue contributes to chronic metabolic and organ disease.",
    "adiposity based chronic disease definition",
    ["what-is-adiposity-based-chronic-disease", "abcd-model-explained", "aace-abcd-framework"],
  ),
  createTopic(
    "abcd-disease-explained",
    "ABCD Disease Explained Simply",
    "ABCD disease explained in simple terms, including risk, progression, and practical management options.",
    "ABCD Disease Explained",
    "An easy-to-read explanation of how ABCD develops and why early action helps.",
    "ABCD describes how adipose dysfunction can progress into multi-system chronic disease over time.",
    "abcd disease explained",
    ["what-is-adiposity-based-chronic-disease", "risk-factors-of-abcd", "can-abcd-be-reversed"],
  ),
  createTopic(
    "adiposity-based-chronic-disease-symptoms",
    "ABCD Symptoms: Early to Advanced Signs",
    "Recognize adiposity based chronic disease symptoms, including early warning signs and advanced complications.",
    "Adiposity-Based Chronic Disease Symptoms",
    "Understand common ABCD symptoms and when to seek evaluation.",
    "ABCD symptoms can include fatigue, glucose instability, central adiposity, sleep disturbance, and progressive metabolic complications.",
    "adiposity based chronic disease symptoms",
    ["early-signs-of-adiposity-based-chronic-disease", "risk-factors-of-abcd", "adiposity-based-chronic-disease-diagnosis"],
  ),
  createTopic(
    "adiposity-based-chronic-disease-causes",
    "ABCD Causes: Why It Develops",
    "Explore the causes of adiposity based chronic disease, including genetics, environment, and metabolic stress.",
    "What Causes Adiposity-Based Chronic Disease?",
    "A practical look at the biological and lifestyle drivers behind ABCD.",
    "ABCD develops from interacting drivers such as genetics, food environment, sleep disruption, inactivity, stress biology, and endocrine-metabolic imbalance.",
    "adiposity based chronic disease causes",
    ["risk-factors-of-abcd", "lifestyle-changes-for-abcd", "diet-plan-for-adiposity-based-chronic-disease"],
  ),
  createTopic(
    "adiposity-based-chronic-disease-diagnosis",
    "How ABCD Is Diagnosed Clinically",
    "Learn how adiposity based chronic disease diagnosis works beyond BMI, including tests and staging.",
    "Adiposity-Based Chronic Disease Diagnosis",
    "A step-by-step explanation of clinical ABCD assessment.",
    "ABCD diagnosis combines metabolic markers, complication screening, and stage-based risk evaluation.",
    "adiposity based chronic disease diagnosis",
    ["abcd-staging-system", "adiposity-based-chronic-disease-symptoms", "aace-abcd-framework"],
  ),
  createTopic(
    "adiposity-based-chronic-disease-treatment",
    "ABCD Treatment Options Explained",
    "Compare treatment options for adiposity based chronic disease, from lifestyle care to medical therapy.",
    "Adiposity-Based Chronic Disease Treatment",
    "Evidence-informed treatment pathways for long-term ABCD care.",
    "ABCD treatment is stage-matched and usually combines nutrition, activity, behavior support, and medical therapies.",
    "adiposity based chronic disease treatment",
    ["diet-plan-for-adiposity-based-chronic-disease", "exercise-for-abcd-patients", "can-abcd-be-reversed"],
  ),
  createTopic(
    "adiposity-based-chronic-disease-prevention",
    "ABCD Prevention: Practical Steps",
    "Prevent adiposity based chronic disease progression with practical, sustainable prevention habits.",
    "Adiposity-Based Chronic Disease Prevention",
    "Prevention strategies that support long-term metabolic health.",
    "ABCD prevention focuses on early risk identification and consistent metabolic health habits.",
    "adiposity based chronic disease prevention",
    ["lifestyle-changes-for-abcd", "risk-factors-of-abcd", "early-signs-of-adiposity-based-chronic-disease"],
  ),
  createTopic(
    "is-obesity-a-chronic-disease",
    "Is Obesity a Chronic Disease?",
    "Understand why obesity is treated as a chronic disease in modern clinical frameworks like ABCD.",
    "Is Obesity a Chronic Disease?",
    "Clear answer with medical context and patient implications.",
    "Yes. In modern care models, obesity is treated as a chronic disease because it drives persistent biological and clinical complications.",
    "is obesity a chronic disease",
    ["why-obesity-is-a-chronic-disease", "obesity-vs-adiposity-based-chronic-disease", "what-is-adiposity-based-chronic-disease"],
  ),
  createTopic(
    "why-obesity-is-a-chronic-disease",
    "Why Obesity Is a Chronic Disease",
    "Learn why obesity is recognized as a chronic disease and how ABCD improves management.",
    "Why Obesity Is a Chronic Disease",
    "Medical reasoning explained in patient-friendly language.",
    "Obesity is considered chronic because it involves long-term biological dysregulation and recurring risk of complications.",
    "why obesity is a chronic disease",
    ["is-obesity-a-chronic-disease", "aace-abcd-framework", "adiposity-based-chronic-disease-treatment"],
  ),
  createTopic(
    "adiposity-based-chronic-disease-guidelines",
    "ABCD Guidelines: Clinical Overview",
    "Review adiposity based chronic disease guideline principles for diagnosis, staging, and care planning.",
    "Adiposity-Based Chronic Disease Guidelines",
    "A practical summary of guideline-aligned ABCD care.",
    "ABCD guidelines emphasize complication-first evaluation, stage-based interventions, and individualized long-term follow-up.",
    "adiposity based chronic disease guidelines",
    ["aace-abcd-framework", "abcd-staging-system", "adiposity-based-chronic-disease-treatment"],
  ),
  createTopic(
    "abcd-model-explained",
    "ABCD Model Explained for Patients",
    "A simple explanation of the ABCD model and why it improves obesity and metabolic disease care.",
    "ABCD Model Explained",
    "Understand how the ABCD model shifts focus from weight to health impact.",
    "The ABCD model classifies disease severity by adiposity-driven complications rather than weight category alone.",
    "abcd model explained",
    ["aace-abcd-framework", "abcd-staging-system", "obesity-vs-adiposity-based-chronic-disease"],
  ),
  createTopic(
    "aace-abcd-framework",
    "AACE ABCD Framework Summary",
    "Learn the AACE ABCD framework and how clinicians use it to stage and treat adiposity-related disease.",
    "AACE ABCD Framework",
    "A concise guide to the AACE-endorsed ABCD approach.",
    "The AACE ABCD framework supports complication-centric diagnosis and stage-driven treatment for adiposity-related chronic disease.",
    "aace abcd framework",
    ["adiposity-based-chronic-disease-guidelines", "abcd-model-explained", "abcd-staging-system"],
  ),
  createTopic(
    "adiposity-based-chronic-disease-complications",
    "ABCD Complications by Organ System",
    "Explore adiposity based chronic disease complications affecting cardiovascular, liver, endocrine, and sleep health.",
    "Adiposity-Based Chronic Disease Complications",
    "How ABCD complications affect multiple systems and quality of life.",
    "ABCD complications can involve cardiovascular disease, insulin resistance, fatty liver, sleep apnea, endocrine dysfunction, and reduced function.",
    "adiposity based chronic disease complications",
    ["cardiometabolic-disease-and-abcd", "abcd-staging-system", "adiposity-based-chronic-disease-symptoms"],
  ),
  createTopic(
    "cardiometabolic-disease-and-abcd",
    "Cardiometabolic Disease and ABCD",
    "Understand how ABCD increases cardiometabolic risk and what early intervention can change.",
    "Cardiometabolic Disease and ABCD",
    "A focused guide on metabolic and cardiovascular overlap in ABCD.",
    "ABCD is strongly linked to cardiometabolic disease through insulin resistance, inflammation, dyslipidemia, and vascular stress.",
    "cardiometabolic disease and abcd",
    ["adiposity-based-chronic-disease-complications", "risk-factors-of-abcd", "adiposity-based-chronic-disease-treatment"],
  ),
  createTopic(
    "obesity-vs-adiposity-based-chronic-disease",
    "Obesity vs ABCD: Key Differences",
    "Compare obesity vs adiposity based chronic disease and learn why ABCD provides deeper clinical insight.",
    "Obesity vs Adiposity-Based Chronic Disease",
    "A side-by-side comparison for patients and clinicians.",
    "ABCD differs from obesity labels by grading disease using complications, not body size alone.",
    "obesity vs adiposity based chronic disease",
    ["how-is-abcd-different-from-obesity", "what-is-adiposity-based-chronic-disease", "abcd-model-explained"],
  ),
  createTopic(
    "abcd-staging-system",
    "ABCD Staging System Explained",
    "Learn how the ABCD staging system classifies risk and guides treatment decisions.",
    "ABCD Staging System",
    "Understand stage-based care from early risk to advanced complications.",
    "The ABCD staging system categorizes disease severity based on the number and seriousness of adiposity-related complications.",
    "abcd staging system",
    ["adiposity-based-chronic-disease-diagnosis", "adiposity-based-chronic-disease-treatment", "aace-abcd-framework"],
  ),
  createTopic(
    "adiposity-related-chronic-disease",
    "Adiposity-Related Chronic Disease Overview",
    "A clear overview of adiposity-related chronic disease and how ABCD supports better outcomes.",
    "Adiposity-Related Chronic Disease",
    "Terminology, risk, and management in one practical guide.",
    "Adiposity-related chronic disease refers to long-term health conditions driven by excess or dysfunctional adipose tissue.",
    "adiposity related chronic disease",
    ["adiposity-based-chronic-disease", "adiposity-based-chronic-disease-complications", "cardiometabolic-disease-and-abcd"],
  ),
  createTopic(
    "how-is-abcd-different-from-obesity",
    "How Is ABCD Different From Obesity?",
    "See how ABCD differs from traditional obesity labels with a complication-based clinical approach.",
    "How Is ABCD Different From Obesity?",
    "A direct answer page for long-tail comparison intent.",
    "ABCD differs from obesity labels by prioritizing biological impact and complication severity over weight category alone.",
    "how is abcd different from obesity",
    ["obesity-vs-adiposity-based-chronic-disease", "abcd-model-explained", "is-obesity-a-chronic-disease"],
  ),
  createTopic(
    "can-abcd-be-reversed",
    "Can ABCD Be Reversed?",
    "Learn whether adiposity based chronic disease can be reversed or controlled with stage-specific care.",
    "Can ABCD Be Reversed?",
    "What improvement and remission can realistically look like.",
    "Many ABCD complications can improve significantly with sustained treatment, though ongoing monitoring is usually needed.",
    "can abcd be reversed",
    ["adiposity-based-chronic-disease-treatment", "lifestyle-changes-for-abcd", "diet-plan-for-adiposity-based-chronic-disease"],
  ),
  createTopic(
    "lifestyle-changes-for-abcd",
    "Lifestyle Changes for ABCD",
    "Practical lifestyle changes for adiposity based chronic disease that support long-term metabolic health.",
    "Lifestyle Changes for ABCD",
    "Sustainable daily actions to support clinical care.",
    "Lifestyle changes for ABCD include structured sleep, stress regulation, nutrition quality, and progressive physical activity.",
    "lifestyle changes for abcd",
    ["diet-plan-for-adiposity-based-chronic-disease", "exercise-for-abcd-patients", "adiposity-based-chronic-disease-prevention"],
  ),
  createTopic(
    "diet-plan-for-adiposity-based-chronic-disease",
    "Diet Plan for ABCD Patients",
    "A practical diet plan approach for adiposity based chronic disease focused on metabolic health.",
    "Diet Plan for Adiposity-Based Chronic Disease",
    "Food strategy principles that support ABCD treatment goals.",
    "A practical ABCD diet plan prioritizes protein quality, fiber-rich foods, glycemic control, and long-term adherence.",
    "diet plan for adiposity based chronic disease",
    ["lifestyle-changes-for-abcd", "exercise-for-abcd-patients", "adiposity-based-chronic-disease-treatment"],
  ),
  createTopic(
    "exercise-for-abcd-patients",
    "Exercise for ABCD Patients",
    "Safe exercise guidance for ABCD patients, including cardio, strength, and progression tips.",
    "Exercise for ABCD Patients",
    "Movement guidance designed for long-term adherence and cardiometabolic benefit.",
    "Exercise for ABCD should include aerobic fitness, resistance training, and progressive goals adapted to current health status.",
    "exercise for abcd patients",
    ["lifestyle-changes-for-abcd", "can-abcd-be-reversed", "adiposity-based-chronic-disease-treatment"],
  ),
  createTopic(
    "risk-factors-of-abcd",
    "Risk Factors of ABCD",
    "Identify the major risk factors of adiposity based chronic disease and learn who needs early screening.",
    "Risk Factors of ABCD",
    "Know the clinical and lifestyle risks linked to disease progression.",
    "Key risk factors of ABCD include central adiposity, family history, poor sleep, inactivity, stress load, and metabolic dysfunction markers.",
    "risk factors of abcd",
    ["early-signs-of-adiposity-based-chronic-disease", "adiposity-based-chronic-disease-symptoms", "adiposity-based-chronic-disease-prevention"],
  ),
  createTopic(
    "early-signs-of-adiposity-based-chronic-disease",
    "Early Signs of ABCD",
    "Learn early signs of adiposity based chronic disease and when to seek a medical evaluation.",
    "Early Signs of Adiposity-Based Chronic Disease",
    "Early detection signals patients should not ignore.",
    "Early signs of ABCD can include waist gain, fatigue, rising glucose, sleep disruption, and blood pressure changes.",
    "early signs of adiposity based chronic disease",
    ["adiposity-based-chronic-disease-symptoms", "risk-factors-of-abcd", "adiposity-based-chronic-disease-diagnosis"],
  ),
];

export function getSeoTopicBySlug(slug: string): SeoTopicPage | undefined {
  return SEO_TOPIC_PAGES.find((item) => item.slug === slug);
}

export function getSeoTopicSlugs(): string[] {
  return SEO_TOPIC_PAGES.map((item) => item.slug);
}
