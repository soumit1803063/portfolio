import type { ExperienceItem } from "@/types";

export const experienceContent: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Kaz Software",
    location: "Dhaka, Bangladesh",
    period: "Jan 2025 – Present",
    employmentType: "Full-time",
    current: true,
    metrics: [
      { label: "OCR cost cut", value: "70–90%" },
      { label: "Manual monitoring reduced", value: "89%" },
      { label: "Classifier accuracy gain", value: "+48%" },
    ],
    projects: [
      {
        name: "P1ston",
        bullets: [
          "Developed ASP.NET Core REST APIs on AWS Lambda + DynamoDB for multi-tenant workflow and failure handling.",
          "Built a rule-driven validation engine that matches supplier documents to ERP purchase orders for auto-approval.",
          "Replaced AWS Comprehend + Textract with an ML PDF classifier and configurable LLM extraction, cutting cost 70–90% at ~95% accuracy.",
          "Designed a serverless document-processing pipeline on AWS Step Functions for scalable execution.",
        ],
      },
      {
        name: "TaxIntel: Tax Law Intelligence System",
        bullets: [
          "Built a platform processing 500+ tax articles daily across 25+ sources and 148 structured categories.",
          "Designed an agentic RAG pipeline to detect regulatory updates from streaming content.",
          "Reduced manual monitoring effort by 89%, saving ~21 lakh BDT annually.",
        ],
      },
      {
        name: "Risk Factor Classification System",
        bullets: [
          "Developed a production-grade multilabel ML classification system for regulatory documents.",
          "Improved model accuracy by 48% by redesigning preprocessing with semantic chunking.",
          "Reduced manual review effort by 20%, saving ~100k BDT/month.",
        ],
      },
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Python",
      "FastAPI",
      "AWS Lambda",
      "Step Functions",
      "Bedrock",
      "DynamoDB",
      "LangChain",
      "RAG",
      "LLMs",
      "Docker",
    ],
  },
  {
    role: "Developer",
    company: "Sasthotech",
    location: "Rajshahi, Bangladesh",
    period: "Nov 2023 – Dec 2024",
    employmentType: "Full-time",
    projects: [
      {
        name: "Chest X-ray Reporting System",
        bullets: [
          "Led AI development on a vision-language pipeline for automated chest X-ray report generation, owning code reviews, sprints, and client discussions.",
          "Managed radiologists and annotators to build a clinically validated training dataset.",
          "Architected a multi-model inference pipeline where a segmentation model iteratively refines the region of interest to focus report generation.",
          "Built an automated retraining system and deployed containerized models on serverless infrastructure.",
        ],
      },
      {
        name: "Shongi: Patient Health Assistant",
        bullets: [
          "Built a live patient-facing health assistant on a multi-agent architecture (Agno) spanning intent gating, entity extraction, and follow-up questioning.",
          "Engineered lifelong patient memory on a structured-first MongoDB + vector store that invalidates outdated facts.",
          "Reduced LLM cost via early intent gating and multi-tier model routing across providers.",
          "Added live disease-trend detection through autonomous web search to ground nearest-doctor recommendations.",
        ],
      },
    ],
    technologies: [
      "Python",
      "Agno",
      "VLM",
      "Computer Vision",
      "FastAPI",
      "MongoDB",
      "Vector DB",
      "RAG",
      "NLP",
      "AWS EC2",
      "Nginx",
      "Docker",
    ],
  },
];
