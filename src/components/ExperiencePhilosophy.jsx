"use client";

import { 
  Briefcase, 
  CheckCircle2, 
  Target, 
  Zap, 
  ShieldCheck, 
  Clock,
  Sparkles,
  Building2
} from "lucide-react";

export default function ExperiencePhilosophy() {
  const experiences = [
    {
      period: "Present",
      role: "Software Engineer",
      company: "Recurso Labs",
      badge: "Current",
      description: "Engineering production enterprise SaaS modules, complex relational database schemas, and intelligent GenAI workflows. Architecting high-density automotive CRM features (Shop Bay floor plans, multi-channel SMS/Email drawer) and LangGraph RAG systems.",
      achievements: [
        "Architecting Next.js & React enterprise applications integrated with PostgreSQL via Prisma ORM.",
        "Developing real-time multi-channel communication drawers and dynamic floor plan occupancy centers.",
        "Building LangGraph multi-agent orchestration and ChromaDB vector retrieval pipelines."
      ]
    },
    {
      period: "2024 - 2025",
      role: "MERN Stack Developer",
      company: "Senew Tech",
      badge: "Full-Stack",
      description: "Engineered scalable web applications and RESTful API services using MongoDB, Express.js, React.js, and Node.js. Built modular UI components, optimized database queries, and implemented secure authentication pipelines.",
      achievements: [
        "Developed end-to-end MERN stack features with responsive React interfaces and Express backends.",
        "Designed normalized MongoDB schemas, aggregation pipelines, and secure JWT authentication.",
        "Collaborated on client-facing features with focus on performance, state management, and clean code."
      ]
    },
    {
      period: "2024",
      role: "Software Engineering Intern",
      company: "Suave Solutions",
      badge: "Internship",
      description: "Gained hands-on professional experience in modern software development lifecycles, collaborating with engineering teams on web development, code reviews, and frontend performance optimizations.",
      achievements: [
        "Contributed to frontend feature development using modern JavaScript and component patterns.",
        "Participated in agile sprints, technical code reviews, and bug resolution workflows.",
        "Built solid foundations in full-stack architecture, Git collaboration, and deployment."
      ]
    }
  ];

  const philosophies = [
    {
      icon: Target,
      title: "End-to-End Ownership",
      desc: "From UI interactions to database schemas, API routes, and vector embeddings, I ensure each layer is clean, typed, and maintainable."
    },
    {
      icon: Zap,
      title: "Pragmatic AI Systems",
      desc: "Focusing on reliable LangGraph state machines, grounded RAG retrieval, and low-latency embeddings rather than brittle API wrappers."
    },
    {
      icon: ShieldCheck,
      title: "Production Craftsmanship",
      desc: "Writing maintainable code, implementing intuitive keyboard accessibility, and delivering snappy user interfaces built to scale."
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience &amp; <span className="text-glossy-emerald">Track Record</span>.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Professional journey across Recurso Labs, Senew Tech, and Suave Solutions.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Experience Timeline</span>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-px before:bg-gradient-to-b before:from-emerald-500 before:via-slate-800 before:to-transparent">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-9 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1.5 top-2.5 h-3.5 w-3.5 rounded-full bg-[#06080c] border-2 border-emerald-400 shadow-sm shadow-emerald-500/50" />

                  {/* Card Content */}
                  <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-3.5 border border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 whitespace-nowrap flex-shrink-0 leading-none">
                          {exp.period}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-white whitespace-nowrap">
                          <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800 whitespace-nowrap flex-shrink-0 leading-none">
                        {exp.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Philosophy & Values */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Engineering Principles</span>
            </div>

            <div className="space-y-3.5">
              {philosophies.map((phil, idx) => {
                const Icon = phil.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-5 space-y-2.5 border border-slate-800"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-200">
                        {phil.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-10">
                      {phil.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Clean Quote Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-slate-900/80 to-slate-950 border border-emerald-500/20 space-y-2.5 shadow-sm light-quote-card">
              <div className="text-[10px] font-mono uppercase text-emerald-400 font-semibold tracking-wider quote-badge">Guiding Standard</div>
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed quote-text">
                "High-value engineering happens when clean architecture, robust data modeling, and intuitive user experience work in complete synergy."
              </p>
              <div className="text-[11px] text-slate-400 font-semibold quote-author">— Areej Khalid</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
