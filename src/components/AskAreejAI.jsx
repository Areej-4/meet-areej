"use client";

import { useState, useRef, useEffect } from "react";
import { 
  X, 
  Send, 
  Bot, 
  User, 
  MessageSquareCode,
  RefreshCw,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function AskAreejAI({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I am Areej Khalid's AI Copilot. Ask me anything about her **MERN Stack & Next.js** SaaS systems, **LangGraph RAG** architectures, **AWS & Cloud deployment**, or how to get in touch with her!",
      tags: ["MERN Stack", "Next.js", "GenAI", "PostgreSQL", "AWS & Cloud"],
      time: "Now"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "How can I get in touch with Areej?",
    "What is her experience across companies?",
    "Tell me about her Automotive CRM & Shop Flow",
    "How does she build LangGraph RAG workflows?",
    "What are her AWS & Deployment skills?"
  ];

  const knowledgeBase = [
    {
      id: "contact",
      matches: [
        "contact", "touch", "get in touch", "reach", "reach out", "hire", "email", 
        "mail", "talk", "connect", "call", "meeting", "message", "chat", "linkedin", 
        "github", "where to find", "send message", "discuss", "interview", "work with", 
        "ping", "dm", "social", "phone", "number", "available", "opportunity"
      ],
      response: "You can easily connect with **Areej Khalid** through multiple channels:\n\n• ✉️ **Direct Email:** [areejkhalid360@gmail.com](mailto:areejkhalid360@gmail.com)\n• 💼 **LinkedIn:** [linkedin.com/in/areejkhalid04](https://www.linkedin.com/in/areejkhalid04/)\n• 🐙 **GitHub:** [github.com/Areej-4](https://github.com/Areej-4)\n• 📝 **Direct Contact Form:** Fill out the message form in the Contact section at the bottom of this page for direct inquiries.\n\nShe is currently **Available** and typically responds within 24 hours.",
      tags: ["Direct Email", "LinkedIn", "GitHub", "Contact Form"]
    },
    {
      id: "experience",
      matches: [
        "experience", "career", "background", "company", "companies", "recurso", 
        "senew", "senew tech", "suave", "suave solutions", "history", "years", 
        "roles", "worked at", "timeline", "past work", "resume", "cv"
      ],
      response: "Areej has **2+ Years of Professional Software Engineering Experience** across high-impact teams:\n\n1. 🚀 **Recurso Labs (Present):** Software Engineer architecting enterprise automotive SaaS platforms, Next.js & PostgreSQL backends with Prisma ORM, and LangGraph multi-agent RAG systems.\n2. 🏢 **Senew Tech (2024 - 2025):** MERN Stack Developer building scalable RESTful APIs in Express.js, MongoDB aggregation pipelines, and responsive React interfaces.\n3. 💻 **Suave Solutions (2024):** Software Engineering Intern contributing to frontend feature lifecycles, code reviews, and Git agile workflows.",
      tags: ["Recurso Labs", "Senew Tech", "Suave Solutions", "2+ Yrs Exp"]
    },
    {
      id: "crm",
      matches: [
        "crm", "automotive", "shop", "bay", "floor plan", "messaging", "drawer", 
        "work order", "shopmonkey", "auto crm"
      ],
      response: "In the **Enterprise Auto CRM & Shop Flow** project, Areej engineered mission-critical workshop modules:\n\n• **Multi-Channel Drawer:** Unified Customer SMS, Email notifications, and Internal Shop Notes with real-time optimistic UI sync.\n• **Shop Bay Floor Plan Visualizer:** Interactive SVG canvas tracking technician bay allocations with PostgreSQL persistence.\n• **AI Voice Co-Pilot & Estimator:** Integrated AI job estimation modal tailored with dark/light theme contrast calibration.\n• **Tech Stack:** Next.js (App Router), React 19, PostgreSQL, Prisma ORM, Tailwind CSS, Framer Motion.",
      tags: ["Automotive CRM", "PostgreSQL", "Next.js", "Prisma ORM"]
    },
    {
      id: "fintech",
      matches: [
        "fintech", "payroll", "invoice", "billing", "trueclientpro", "tax", "pdf", 
        "salary", "payslip", "superannuation", "calculation"
      ],
      response: "In **FinTech & Enterprise Payroll Systems** (TrueClientPro), Areej engineered robust financial calculation engines:\n\n• **Automated Calculation Engines:** Superannuation formulas, tax compliance deductions, and audit trail logs.\n• **Dynamic PDF Document Engine:** Real-time generation of downloadable payslips and invoices using `@react-pdf/renderer`.\n• **Multi-Tier Architecture:** Structured data layers across admin, accounting, business logic, and customer tiers.\n• **Tech Stack:** React.js, Node.js, Express.js, MongoDB Atlas.",
      tags: ["FinTech", "Payroll", "PDF Generation", "MongoDB"]
    },
    {
      id: "rag",
      matches: [
        "rag", "langgraph", "langchain", "ai", "gemini", "chromadb", "vector", 
        "zenith", "agents", "agentic", "llm", "embeddings", "ollama", "state machine"
      ],
      response: "Areej builds **Autonomous AI Agent & RAG Architectures**:\n\n1. **Zenith Multi-Agent Sandbox:** Constructed **LangGraph** state machines with cyclic decision nodes routing complex tasks to specialized agents.\n2. **Vector Ingestion & Retrieval:** Semantic PDF document chunking and vector similarity search indexed in **ChromaDB**.\n3. **Multi-Model Runtime:** Integrated the **Google Gemini API**, self-hosted local **Ollama** models, and streaming responses.\n4. **Diagnostic UI:** Interactive Streamlit evaluation dashboards for prompt benchmarking and citation grounding.",
      tags: ["LangGraph", "ChromaDB", "Google Gemini API", "Vector RAG"]
    },
    {
      id: "cloud",
      matches: [
        "aws", "cloud", "deploy", "deployment", "vercel", "s3", "ec2", "hosting", 
        "devops", "ci/cd", "github actions", "docker", "infra", "infrastructure"
      ],
      response: "Areej is experienced in **Cloud Infrastructure, Deployment & DevOps**:\n\n• **AWS Cloud & S3:** S3 asset buckets for document storage, EC2 server hosting, IAM role policies, and CloudFront CDN.\n• **Vercel & Edge Network:** Edge runtime functions, Server Actions, automated branch previews, and production domains.\n• **CI/CD Pipelines:** GitHub Actions for automated linting, test suites, and build verification.\n• **Databases:** PostgreSQL (AWS RDS / Supabase) and MongoDB Atlas with automated migration scripts.",
      tags: ["AWS S3 & EC2", "Vercel Edge", "GitHub Actions", "Cloud Infrastructure"]
    },
    {
      id: "salestech",
      matches: [
        "salestech", "pipelineiq", "sales", "deals", "supabase", "react query", 
        "kanban", "pipeline"
      ],
      response: "In **PipelineIQ — Sales Automation Platform**, Areej built:\n\n• **Real-Time Kanban Pipeline:** Drag-and-drop deal stage management with TanStack React Query cache invalidation.\n• **Supabase SSR:** Row-Level Security (RLS), remote TypeScript database types, and live data streaming.\n• **User Activity Logs:** Granular audit tracking for deal conversions and revenue forecasting.",
      tags: ["SalesTech", "Supabase SSR", "React Query", "Next.js"]
    },
    {
      id: "stack",
      matches: [
        "stack", "tech", "technologies", "mern", "frameworks", "tools", "skills", 
        "languages", "frontend", "backend", "mongo", "express", "node", "react", 
        "next", "typescript", "postgres", "prisma", "python"
      ],
      response: "Areej's core **Technical Stack & Engineering Specialization**:\n\n• **MERN & Web:** React.js, Node.js, Express.js, MongoDB Atlas, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion\n• **Databases & ORMs:** PostgreSQL, Prisma ORM, Supabase SSR, MongoDB\n• **GenAI & Vector Search:** LangGraph, LangChain, ChromaDB, Google Gemini API, Ollama\n• **Cloud & Tooling:** AWS (S3, EC2), Vercel Edge, GitHub Actions CI/CD, Cursor IDE, Claude 3.7",
      tags: ["MERN Stack", "Next.js", "PostgreSQL", "LangGraph", "AWS"]
    }
  ];

  const getAIResponse = (userQuery) => {
    const cleanQuery = userQuery.toLowerCase().trim();

    // Check direct pattern matches across knowledgeBase
    for (const entry of knowledgeBase) {
      if (entry.matches.some((keyword) => cleanQuery.includes(keyword))) {
        return entry;
      }
    }

    // Fallback intelligent response
    return {
      response: `Areej Khalid is a **Full-Stack Software Engineer & AI Developer** (2+ Years Experience) specializing in:\n\n• **MERN Stack & Next.js** production web applications\n• **PostgreSQL & Prisma ORM** relational data architecture\n• **LangGraph & ChromaDB** multi-agent RAG pipelines\n• **AWS Cloud & Vercel** deployments\n\nHow can I assist you further? You can ask about her **projects**, **career timeline**, **AWS cloud skills**, or **how to contact her**!`,
      tags: ["MERN Stack", "Next.js", "GenAI", "AWS Cloud", "Contact Info"]
    };
  };

  const handleSend = (queryToSend) => {
    const query = queryToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const match = getAIResponse(query);
      const assistantMsg = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: match.response,
        tags: match.tags,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0b0f17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[82vh]">
        
        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white tracking-wide">Ask About Areej</h3>
              <p className="text-[10px] text-slate-400">Verified knowledge base of Areej's technical background &amp; projects</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div className="h-6 w-6 rounded-md bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center text-emerald-400 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[88%] rounded-xl p-3.5 ${
                  msg.role === "user"
                    ? "bg-emerald-400 text-slate-950 font-medium"
                    : "bg-slate-900/90 border border-slate-800 text-slate-300"
                }`}
              >
                <div className="whitespace-pre-line leading-relaxed font-sans text-xs">
                  {msg.content}
                </div>

                {msg.tags && msg.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-slate-800/80">
                    {msg.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-emerald-400 border border-emerald-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {msg.role === "user" && (
                <div className="h-6 w-6 rounded-md bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center text-slate-300 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2 items-center text-slate-400 text-xs pl-1">
              <RefreshCw className="w-3 h-3 animate-spin text-emerald-400" />
              <span className="font-mono text-[11px]">Searching knowledge base...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions Pills Bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-950/95 border-t border-slate-800/80 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex-shrink-0 font-semibold">Suggested:</span>
          {suggestedQuestions.map((q, qIdx) => (
            <button
              key={qIdx}
              onClick={() => handleSend(q)}
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 transition-all cursor-pointer whitespace-nowrap flex-shrink-0 leading-none shadow-sm"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask anything (e.g. how to contact, experience, AWS, projects)..."
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500/70 focus:outline-none text-xs text-white placeholder-slate-500"
          />

          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="Send message"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
