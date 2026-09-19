"use client";

import { 
  Globe2, 
  TrendingUp, 
  Users, 
  MessageSquareCheck, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Briefcase,
  Target,
  FileCheck
} from "lucide-react";

export default function BusinessLeadership() {
  const leadershipHighlights = [
    {
      title: "Global Stakeholder & Client Communication",
      icon: Globe2,
      subtitle: "International Client Delivery",
      description: "Fluent in articulating complex system architectures to non-technical stakeholders, executive leadership, and international clients across European and North American time zones.",
      bulletPoints: [
        "Translating abstract product requirements into clear technical roadmaps and actionable sprint deliverables.",
        "Conducting technical discovery and client presentation sessions with cross-border teams.",
        "Ensuring 100% transparency through structured documentation and asynchronous updates."
      ]
    },
    {
      title: "ROI & Business-Driven Engineering",
      icon: TrendingUp,
      subtitle: "Measurable Commercial Impact",
      description: "Writing code with a commercial mindset — prioritizing architectural decisions that reduce operational overhead, accelerate time-to-market, and deliver quantifiable ROI.",
      bulletPoints: [
        "Automated Shop Bay floor plans reducing technician idle time and boosting workshop capacity.",
        "Engineered real-time multi-channel drawers streamlining customer communication cycles by over 60%.",
        "Optimized database query latency and serverless compute costs."
      ]
    },
    {
      title: "Pre-Sales, Scoping & Technical Interviews",
      icon: Users,
      subtitle: "Technical Representation",
      description: "Representing engineering capabilities in client pitch sessions, technical interviews, and architectural feasibility assessments for new business opportunities.",
      bulletPoints: [
        "Leading technical vetting and scope definition during early pre-sales cycles.",
        "Evaluating third-party APIs, vendor integrations, and compliance constraints.",
        "Confidently bridging engineering rigor with business development goals."
      ]
    },
    {
      title: "End-to-End Product Ownership",
      icon: Target,
      subtitle: "Autonomous Execution",
      description: "Taking full ownership from requirement gathering and UI/UX design to database schema normalization, API implementation, and production deployment.",
      bulletPoints: [
        "Eliminating cross-functional bottlenecks through self-directed problem-solving.",
        "Balancing feature delivery speed with long-term codebase maintainability.",
        "Championing responsive design, accessibility, and high UX craft."
      ]
    }
  ];

  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Beyond The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Client Communication &amp; <span className="text-glossy-emerald">Business Impact</span>.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Combining technical engineering rigor with international stakeholder communication, pre-sales scoping, and commercial ROI focus.
          </p>
        </div>

        {/* 2x2 High-Value Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {leadershipHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-7 space-y-4 flex flex-col justify-between border border-slate-800"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                      {item.subtitle}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800/60">
                  {item.bulletPoints.map((bp, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Value Strip */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-950/20 via-slate-900/60 to-slate-950 leadership-banner">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center justify-center md:justify-start gap-2 banner-badge">
              <Compass className="w-4 h-4" />
              <span>International Engineering Standard</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white banner-title">
              Ready to represent your team in client calls, technical interviews, and architecture reviews.
            </h4>
            <p className="text-xs text-slate-400 max-w-xl banner-desc">
              Experienced working with distributed international teams, communicating fluently with non-technical stakeholders, and delivering high-value products on schedule.
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap"
          >
            Discuss a Project
          </a>
        </div>

      </div>
    </section>
  );
}
