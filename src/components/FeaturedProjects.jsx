"use client";

import { useState } from "react";
import { 
  FolderGit2, 
  Terminal, 
  Sparkles,
  ArrowRight,
  Car,
  Landmark,
  Cpu,
  TrendingUp,
  Building2
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: "crm",
      category: "automotive",
      industry: "Automotive CRM & Field Operations",
      industryIcon: Car,
      title: "Enterprise Auto CRM & Shop Flow",
      subtitle: "High-density automotive management system with real-time bay allocation & multi-channel messaging",
      tagline: "Automotive SaaS",
      image: "/crm-preview.jpg",
      tags: ["Next.js", "React", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Framer Motion"],
      highlights: [
        "Shopmonkey-style Multi-Channel Drawer integrating Customer SMS, Email, and Internal Team Notes in real time.",
        "Interactive Visual Shop Bay Floor Plan and Occupancy Manager with PostgreSQL persistence.",
        "Dual-Theme contrast calibration (Dark/Light mode) tailored for high-density workshop screens.",
        "AI Voice Co-Pilot and estimation modal for accelerated job stage dispatching."
      ],
      github: "https://github.com/Areej-4",
      stats: { metric1: "Automotive CRM", label1: "Industry Vertical", metric2: "Real-Time", label2: "Multi-Channel Hub" }
    },
    {
      id: "zenith",
      category: "ai",
      industry: "Generative AI & Agentic Systems",
      industryIcon: Cpu,
      title: "Zenith — Multi-Agent RAG Sandbox",
      subtitle: "Autonomous agent state graphs, semantic PDF document chunking & ChromaDB vector search",
      tagline: "GenAI & RAG",
      image: "/zenith-preview.jpg",
      tags: ["LangGraph", "LangChain", "ChromaDB", "Google Gemini API", "Python", "Streamlit"],
      highlights: [
        "Constructed LangGraph state graph routing complex queries across collaborative AI agent nodes.",
        "Implemented end-to-end PDF document ingestion, recursive text chunking, and ChromaDB vector search.",
        "Multi-provider LLM runtime supporting Google Gemini API and self-hosted open LLMs.",
        "Diagnostic UI for rapid prompt engineering, model benchmarking, and citation-grounded outputs."
      ],
      github: "https://github.com/Areej-4",
      stats: { metric1: "GenAI", label1: "Agent State Graphs", metric2: "Vector RAG", label2: "ChromaDB Search" }
    },
    {
      id: "payroll",
      category: "fintech",
      industry: "FinTech & Enterprise Invoicing",
      industryIcon: Landmark,
      title: "TrueClientPro & FinTech Payroll Engine",
      subtitle: "Mission-critical financial calculation engines, automated compliance reporting & dynamic PDF billing",
      tagline: "FinTech & Payroll",
      image: null,
      tags: ["React", "Node.js", "Express", "MongoDB", "Dynamic PDF Engine"],
      highlights: [
        "Automated payroll calculation algorithms, superannuation formulas, and audit trail logging.",
        "Dynamic PDF document generation engine for instant payslips, financial invoices, and tax summaries.",
        "Multi-tier enterprise architecture across admin, accounting, business logic, and customer tiers.",
        "Structured financial data transactions with strict validation and audit compliance."
      ],
      github: "https://github.com/Areej-4",
      stats: { metric1: "FinTech", label1: "Payroll & Billing", metric2: "Automated", label2: "PDF Document Engine" }
    },
    {
      id: "pipelineiq",
      category: "salestech",
      industry: "SalesTech & Pipeline Intelligence",
      industryIcon: TrendingUp,
      title: "PipelineIQ — Sales Automation Platform",
      subtitle: "Real-time sales deal pipeline, Supabase SSR data flow, and user activity tracking",
      tagline: "Sales Automation",
      image: null,
      tags: ["Next.js", "Supabase SSR", "React Query", "PostgreSQL", "Tailwind CSS"],
      highlights: [
        "Real-time sales deal stages with drag-and-drop kanban boards and optimistic UI state sync.",
        "Supabase SSR authentication, Row-Level Security (RLS), and remote type-safe database queries.",
        "Visual revenue conversion metrics and granular user activity audit logging.",
        "Optimized server-rendered views with client cache invalidation pipelines."
      ],
      github: "https://github.com/Areej-4",
      stats: { metric1: "SalesTech", label1: "Pipeline Intelligence", metric2: "Real-Time", label2: "Supabase Stream" }
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
              <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Industry Experience &amp; Codebases</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured <span className="text-glossy-emerald">Projects</span>.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Real-world enterprise SaaS platforms, autonomous AI agent sandboxes, and full-stack modules.
            </p>
          </div>

          {/* Clean Segmented Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 overflow-x-auto no-scrollbar self-start md:self-auto max-w-full">
            {[
              { id: "all", label: "All Industries" },
              { id: "automotive", label: "Automotive CRM" },
              { id: "fintech", label: "FinTech & Payroll" },
              { id: "ai", label: "GenAI & Agents" },
              { id: "salestech", label: "SalesTech" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Balanced 2x2 Projects Grid with Clean Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const IndIcon = project.industryIcon;
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image or Header Bar */}
                  {project.image ? (
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-black/40 to-transparent" />
                      
                      {/* Top Floating Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                          <IndIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{project.industry}</span>
                        </div>
                        
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500/40 backdrop-blur-md transition-colors"
                          title="View GitHub repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 sm:p-6 bg-slate-900/40 border-b border-slate-800 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                          <IndIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                            {project.industry}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{project.title}</h3>
                        </div>
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors flex-shrink-0"
                        title="View GitHub repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  {/* Card Body Content */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    {project.image && (
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {project.subtitle}
                        </p>
                      </div>
                    )}

                    {!project.image && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.subtitle}
                      </p>
                    )}

                    {/* Architecture & Key Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-emerald-400" />
                        <span>Key Engineering Deliverables</span>
                      </div>
                      
                      <div className="space-y-1">
                        {project.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clean Industry Stats */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/60">
                      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        <div className="text-xs font-bold text-emerald-400">{project.stats.metric1}</div>
                        <div className="text-[10px] text-slate-400">{project.stats.label1}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        <div className="text-xs font-bold text-slate-200">{project.stats.metric2}</div>
                        <div className="text-[10px] text-slate-400">{project.stats.label2}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills Footer */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800 whitespace-nowrap flex-shrink-0 leading-none"
                      >
                        {tag}
                      </span>
                    ))}
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
