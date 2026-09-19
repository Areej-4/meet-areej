"use client";

import { 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Boxes,
  CheckCircle2, 
  ExternalLink,
  MessageSquareCode,
  Sparkles,
  Server
} from "lucide-react";

export default function AboutSection({ onOpenCopilot }) {
  const pillars = [
    {
      title: "MERN & Full-Stack Development",
      icon: Boxes,
      description: "Developing scalable end-to-end web applications with MongoDB, Express.js, React, Node.js, and Next.js with clean API architectures and state management.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Next.js"]
    },
    {
      title: "Agentic AI & Vector RAG",
      icon: Cpu,
      description: "Building autonomous agent workflows with LangGraph, semantic document chunking, ChromaDB vector indexing, and Google Gemini API integration.",
      tags: ["LangGraph", "ChromaDB", "Gemini API", "RAG Pipelines"]
    },
    {
      title: "Relational & Document Databases",
      icon: Layers,
      description: "Architecting normalized relational and NoSQL schemas with PostgreSQL, Prisma ORM, Supabase, and MongoDB with optimized queries.",
      tags: ["PostgreSQL", "MongoDB", "Prisma ORM", "Supabase"]
    },
    {
      title: "Enterprise SaaS Craftsmanship",
      icon: ShieldCheck,
      description: "Delivering real-world production modules like multi-channel messaging drawers, interactive shop bay controllers, and high-speed PDF engines.",
      tags: ["High-Touch UI", "Multi-Channel SMS/Email", "PDF Engines"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Architecture, MERN &amp; <span className="text-glossy-emerald">AI Execution</span>.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            With 2+ years of software engineering experience, I build resilient full-stack systems and practical AI agent workflows.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Narrative Story Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-7 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Executive Summary</span>
              </div>
              <h3 className="text-xl font-bold text-white leading-snug">
                Turning complex business logic into intuitive, lightning-fast digital products.
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                I specialize in <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>, <strong>Next.js</strong>, and <strong>practical GenAI architectures</strong>. Over the last 2+ years, I’ve engineered core production modules for enterprise platforms — including interactive <strong>Shop Bay Floor Plan controllers</strong>, <strong>multi-channel communication drawers</strong>, and <strong>LangGraph multi-agent sandboxes</strong>.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                My engineering standard is built on type safety, clean API design, scalable database models, and deterministic AI pipelines.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-300 font-bold font-mono text-sm">
                  2+
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Years Professional Experience</div>
                  <div className="text-[11px] text-slate-400">MERN Stack, Next.js &amp; GenAI</div>
                </div>
              </div>

              <button
                onClick={onOpenCopilot}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <MessageSquareCode className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ask AI About My Background</span>
              </button>
            </div>
          </div>

          {/* Key Strengths Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-7 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Core Strengths</span>
            </div>
            
            <div className="space-y-3">
              {[
                { title: "MERN Stack & Next.js Core", desc: "Building scalable single-page & server-rendered SaaS applications." },
                { title: "RAG & LangGraph Architecture", desc: "Agent state graphs, ChromaDB vector indexing & LLM orchestration." },
                { title: "AI-Augmented Engineering (Cursor • Claude • AGY)", desc: "Leveraging modern AI tooling for rapid scaffolding, clean architecture & testing." },
                { title: "Database Systems (PostgreSQL & MongoDB)", desc: "Relational modeling, Prisma ORM, and NoSQL aggregation pipelines." },
                { title: "Multi-Channel Communication", desc: "Unified drawers bridging SMS, Email, and Internal Team Notes." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="h-4 w-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">{item.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <a 
                href="https://github.com/Areej-4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
              >
                <span>View verified code commits on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-200">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {pillar.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 text-slate-400 border border-slate-800 whitespace-nowrap flex-shrink-0 leading-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
