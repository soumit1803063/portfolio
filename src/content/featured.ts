import type { FeaturedProject } from "@/types";

export const featuredContent: FeaturedProject[] = [
  {
    name: "Ochel",
    tagline:
      "Multi-tenant SaaS platform for augmented-reality restaurant menus.",
    context: "Freelance client project · Full-stack architecture & implementation",
    status: "Live in production",
    recent: true,
    stack: [
      ".NET 10",
      "ASP.NET Core",
      "EF Core 10",
      "PostgreSQL 17",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "SignalR",
      "Hangfire",
      "shadcn/ui",
    ],
    highlights: [
      "Shipped a multi-tenant headless CMS solo in 4 weeks — live with 15+ restaurants in France.",
      "Clean Architecture API with default-deny tenant isolation on both read and write, enforced by CI greps and reflection tests.",
      "Photo → animated video → live menu workflow with a <5s freshness guarantee via cache invalidation.",
      "Real-time and background jobs run in-process (SignalR + Hangfire) — one deployable, zero extra infrastructure.",
    ],
    metrics: [
      { label: "Restaurants live", value: "15+" },
      { label: "Menu freshness", value: "<5s" },
      { label: "Avg. basket lift", value: "+30%" },
    ],
    note: "Private client product — code not public.",
  },
  {
    name: "TaskMind",
    tagline:
      "AI-native task manager where every action also works by talking to an agent.",
    context: "Personal project · Full-stack",
    status: "Live demo",
    recent: true,
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "FastAPI",
      "SQLModel",
      "PostgreSQL",
      "Agno",
      "OpenRouter",
    ],
    highlights: [
      "Agentic plan → act → verify → report loop over ~40 server-side tools, streamed live over SSE.",
      "Layered scope guardrails (deterministic pre-filter + policy prompt + output sanitizer) keep it strictly a task assistant at zero extra cost.",
      "Clean Architecture backend — swapping SQLite → Postgres was a connection-string change.",
      "Model-agnostic across OpenRouter's tool-capable models; switching mid-chat preserves history.",
    ],
    links: [
      {
        label: "Live demo",
        href: "https://todo-web-yk6y.onrender.com",
        icon: "live",
      },
      {
        label: "Source",
        href: "https://github.com/soumit-kaz/todo",
        icon: "github",
      },
      {
        label: "API",
        href: "https://todo-api-wwze.onrender.com/api/help",
        icon: "api",
      },
    ],
    note: "Hosted on a free tier — the first request after idle can take ~1 minute to wake.",
  },
  {
    name: "Shongi",
    tagline:
      "Live patient-facing health assistant built on a multi-agent architecture.",
    context: "Sasthotech · AI development",
    stack: [
      "Python",
      "Agno",
      "FastAPI",
      "MongoDB",
      "Vector DB",
      "RAG",
      "LLMs",
    ],
    highlights: [
      "Multi-agent pipeline (Agno) spanning intent gating, entity extraction, and follow-up questioning.",
      "Lifelong patient memory on a structured-first MongoDB + vector store that invalidates outdated facts.",
      "Early intent gating and multi-tier model routing across providers to cut LLM cost.",
      "Live disease-trend detection via autonomous web search to ground nearest-doctor recommendations.",
    ],
    note: "Built at Sasthotech — internal product.",
  },
];
