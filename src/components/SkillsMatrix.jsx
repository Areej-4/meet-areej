"use client";

import { useState } from "react";
import { 
  Code2, 
  Cpu, 
  Database, 
  Wrench, 
  Zap, 
  Boxes, 
  Server, 
  Sparkles, 
  Layers, 
  Cloud,
  GitBranch,
  Radio
} from "lucide-react";
import { 
  ReactIcon, 
  NodeIcon, 
  MongoIcon, 
  NextIcon, 
  PostgresIcon, 
  PythonIcon 
} from "@/components/Icons";

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    {
      id: "mern",
      title: "MERN Stack & Frontend Architecture",
      icon: Boxes,
      badge: "Core Engineering",
      skills: [
        { 
          name: "React.js", 
          Icon: ReactIcon,
          tag: "Daily Driver", 
          desc: "Component lifecycle, custom hooks, Zustand & optimistic updates",
          project: "Enterprise Auto CRM" 
        },
        { 
          name: "Node.js & Express", 
          Icon: NodeIcon,
          tag: "Production Core", 
          desc: "RESTful architecture, async middlewares & webhook routing",
          project: "Multi-Channel Drawers" 
        },
        { 
          name: "MongoDB & Mongoose", 
          Icon: MongoIcon,
          tag: "Production Core", 
          desc: "Aggregation pipelines, indexed schema models & data pipelines",
          project: "Customer & Messaging Hub" 
        },
        { 
          name: "Next.js (App Router)", 
          Icon: NextIcon,
          tag: "Production Core", 
          desc: "Server Actions, hybrid SSR/SSG, route handlers & SEO performance",
          project: "PipelineIQ, Auto CRM" 
        },
        { 
          name: "TypeScript & ES6+", 
          Icon: Code2,
          tag: "Advanced", 
          desc: "Strict type safety, generic utilities & robust interface contracts",
          project: "All Production Apps" 
        },
        { 
          name: "Tailwind CSS & Motion", 
          Icon: Layers,
          tag: "UI Architecture", 
          desc: "Responsive token systems, dark-mode glassmorphism & micro-interactions",
          project: "Meet Areej, Auto CRM" 
        }
      ]
    },
    {
      id: "ai",
      title: "Generative AI & Agentic Systems",
      icon: Cpu,
      badge: "AI & Vector Search",
      skills: [
        { 
          name: "LangGraph State Machines", 
          Icon: Cpu,
          tag: "Advanced", 
          desc: "Multi-agent cyclic graphs, decision nodes & autonomous tool calling",
          project: "Zenith AI Sandbox" 
        },
        { 
          name: "LangChain & RAG Pipelines", 
          Icon: Sparkles,
          tag: "Production Core", 
          desc: "Semantic document chunking, hybrid retrieval & grounded QA chains",
          project: "Zenith RAG, AI Estimator" 
        },
        { 
          name: "ChromaDB (Vector DB)", 
          Icon: Database,
          tag: "Production Core", 
          desc: "High-performance vector embeddings, metadata filtering & cosine search",
          project: "Zenith AI Sandbox" 
        },
        { 
          name: "Google Gemini API", 
          Icon: Sparkles,
          tag: "Daily Driver", 
          desc: "Multimodal prompts, structured JSON extraction & streaming responses",
          project: "Zenith AI, AI Co-Pilot" 
        },
        { 
          name: "Local Ollama & Open LLMs", 
          Icon: Server,
          tag: "Proficient", 
          desc: "Self-hosted model execution, fallback routing & prompt evaluation",
          project: "AI Learning Sandbox" 
        },
        { 
          name: "Streamlit Prototyping", 
          Icon: Layers,
          tag: "Advanced", 
          desc: "Interactive AI testing grounds, model benchmarking & diagnostic UI",
          project: "Zenith Sandbox UI" 
        }
      ]
    },
    {
      id: "backend",
      title: "Databases, Cloud & Deployment",
      icon: Cloud,
      badge: "Cloud & Storage",
      skills: [
        { 
          name: "PostgreSQL", 
          Icon: PostgresIcon,
          tag: "Production Core", 
          desc: "Relational data modeling, foreign keys & connection pooling",
          project: "Automotive CRM, PipelineIQ" 
        },
        { 
          name: "Prisma ORM", 
          Icon: Database,
          tag: "Production Core", 
          desc: "Type-safe database queries, schema migrations & pg adapters",
          project: "Automotive CRM" 
        },
        { 
          name: "AWS Cloud & S3", 
          Icon: Cloud,
          tag: "Cloud Infrastructure", 
          desc: "S3 asset storage, EC2 server hosting, IAM policies & CloudFront",
          project: "Production Deployments" 
        },
        { 
          name: "Vercel & Edge Deployment", 
          Icon: Server,
          tag: "Production Core", 
          desc: "Edge functions, SSR runtimes, custom domains & branch previews",
          project: "Next.js Applications" 
        },
        { 
          name: "Supabase (SSR)", 
          Icon: Server,
          tag: "Advanced", 
          desc: "Row-level security (RLS), real-time streams & remote auth",
          project: "PipelineIQ Sales" 
        },
        { 
          name: "Python & FastAPI", 
          Icon: PythonIcon,
          tag: "Proficient", 
          desc: "Async REST microservices, Pydantic validation & data scripts",
          project: "AI Backend & RAG" 
        }
      ]
    },
    {
      id: "tools",
      title: "Enterprise Modules & DevOps Tooling",
      icon: Wrench,
      badge: "Production Modules",
      skills: [
        { 
          name: "Multi-Channel Messaging Drawers", 
          Icon: Layers,
          tag: "Specialization", 
          desc: "Unified SMS, Email, and Internal Notes with real-time optimistic sync",
          project: "Automotive CRM" 
        },
        { 
          name: "Shop Bay & Schedule Visualizers", 
          Icon: Boxes,
          tag: "Specialization", 
          desc: "Interactive SVG bay occupancy and vehicle service scheduling logic",
          project: "Automotive CRM" 
        },
        { 
          name: "Automated PDF Document Engine", 
          Icon: Code2,
          tag: "Specialization", 
          desc: "Dynamic payroll summaries & invoice generation via @react-pdf",
          project: "Better Payroll, TCP" 
        },
        { 
          name: "AI Developer Tooling", 
          Icon: Sparkles,
          tag: "Modern Workflow", 
          desc: "Cursor IDE, Claude 3.7, Google Antigravity (AGY) & Gemini for rapid scaffolding & QA",
          project: "All Codebases" 
        },
        { 
          name: "Git & GitHub Actions CI/CD", 
          Icon: GitBranch,
          tag: "Daily Driver", 
          desc: "Branch workflows, PR reviews, automated linting & deployment pipelines",
          project: "All Production Apps" 
        },
        { 
          name: "REST APIs & Webhooks", 
          Icon: Radio,
          tag: "Production Core", 
          desc: "Payload schema validation, error handling & async event hooks",
          project: "CRM & Integrations" 
        }
      ]
    }
  ];

  const visibleCategories = activeTab === "all"
    ? skillCategories
    : skillCategories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/80 bg-slate-950/30">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header & Clean Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Engineering Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Tech Stack &amp; <span className="text-glossy-emerald">Expertise</span>.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              MERN Stack, Next.js, Cloud/AWS infrastructure, and GenAI frameworks proven in production.
            </p>
          </div>

          {/* Clean Segmented Filter Bar without default ugly scrollbars */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 overflow-x-auto no-scrollbar self-start md:self-auto max-w-full">
            {[
              { id: "all", label: "All Areas" },
              { id: "mern", label: "MERN & Frontend" },
              { id: "ai", label: "GenAI & RAG" },
              { id: "backend", label: "Cloud & Databases" },
              { id: "tools", label: "Enterprise & DevOps" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid - Symmetrical 6x6 inside each card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div
                key={category.id}
                className="glass-card rounded-2xl p-5 sm:p-6 space-y-4 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <CatIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight">{category.title}</h3>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 whitespace-nowrap flex-shrink-0">
                      {category.badge}
                    </span>
                  </div>

                  {/* Skills Grid: 6 Balanced, Clean Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3.5">
                    {category.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.Icon;
                      return (
                        <div 
                          key={sIdx} 
                          className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/70 hover:border-emerald-500/35 hover:bg-slate-900/80 transition-all flex flex-col justify-between gap-2.5 group"
                        >
                          <div className="space-y-1.5">
                            {/* Skill Title & Subtle Emerald Tag */}
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <SkillIcon className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
                                <span className="font-semibold text-slate-200 text-xs truncate group-hover:text-emerald-300 transition-colors">
                                  {skill.name}
                                </span>
                              </div>
                              
                              {/* Clean, Non-Breaking Emerald Tint Badge */}
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 whitespace-nowrap flex-shrink-0 leading-none">
                                {skill.tag}
                              </span>
                            </div>

                            {/* Crisp, High-Value Engineering Description */}
                            <p className="text-[11px] text-slate-400 leading-relaxed">
                              {skill.desc}
                            </p>
                          </div>

                          {/* Applied Project Tag */}
                          <div className="pt-2 border-t border-slate-800/40 flex items-center justify-between text-[10px] text-slate-400">
                            <span className="text-slate-500">Applied in:</span>
                            <span className="text-emerald-400 font-mono truncate font-medium max-w-[140px] text-right">
                              {skill.project}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
