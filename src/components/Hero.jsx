"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  MessageSquareCode, 
  Check, 
  Copy, 
  ChevronDown, 
  Sparkles,
  Bot,
  Zap
} from "lucide-react";
import { 
  GithubIcon, 
  LinkedinIcon, 
  ReactIcon, 
  NodeIcon, 
  MongoIcon, 
  PythonIcon, 
  PostgresIcon,
  NextIcon 
} from "@/components/Icons";

export default function Hero({ onOpenCopilot }) {
  const [activeTab, setActiveTab] = useState("mern");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    mern: {
      filename: "server/routes/api.js",
      badge: "MERN Stack API",
      code: `// Express.js & MongoDB Multi-Channel Stream
import express from 'express';
import { WorkOrder, Message } from '../models/schema.js';

const router = express.Router();

router.post('/dispatch-channel', async (req, res) => {
  const { customerId, channel, payload } = req.body;
  
  const record = await Message.create({
    customerId,
    channel, // 'SMS' | 'Email' | 'Internal'
    content: payload.text,
    status: 'delivered',
    timestamp: new Date()
  });

  return res.status(200).json({ success: true, record });
});`
    },
    next: {
      filename: "app/actions/shop-bays.js",
      badge: "Next.js & PostgreSQL",
      code: `// Next.js Server Action with Prisma
'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateBayOccupancy(bayId, vehicleData) {
  const bay = await prisma.shopBay.update({
    where: { id: bayId },
    data: {
      status: 'IN_SERVICE',
      vehicleVin: vehicleData.vin,
      updatedAt: new Date()
    }
  });

  revalidatePath('/dashboard/bays');
  return { status: 200, bay };
}`
    },
    ai: {
      filename: "agents/rag_orchestrator.py",
      badge: "LangGraph & Vector RAG",
      code: `# Multi-Agent LangGraph Workflow
from langgraph.graph import StateGraph, END
from langchain_google_genai import ChatGoogleGenerativeAI
from core.vector_store import chroma_retriever

llm = ChatGoogleGenerativeAI(model="gemini-1.5-pro", temperature=0.2)

def retrieve_and_synthesize(state):
    docs = chroma_retriever.get_relevant_documents(state["query"])
    response = llm.invoke(f"Context: {docs}\\nQuery: {state['query']}")
    return {"synthesized_output": response.content}

workflow = StateGraph()
workflow.add_node("rag_engine", retrieve_and_synthesize)
workflow.set_entry_point("rag_engine")`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStackStrip = [
    { name: "React", Icon: ReactIcon },
    { name: "Node.js", Icon: NodeIcon },
    { name: "MongoDB", Icon: MongoIcon },
    { name: "Next.js", Icon: NextIcon },
    { name: "PostgreSQL", Icon: PostgresIcon },
    { name: "Python", Icon: PythonIcon },
  ];

  // Subtle container and item variants for premium smooth entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-grid">
      {/* Glossy Emerald Ambient Spotlight */}
      <div className="hero-spotlight" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Value Proposition with Framer Motion */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            
            {/* Top Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full-Stack MERN &amp; AI Engineer • 2+ Years Experience</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.14] text-white"
            >
              Building scalable <span className="text-glossy-white">MERN SaaS</span> &amp; <span className="text-glossy-emerald">AI systems</span>.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              variants={itemVariants}
              className="text-base text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Hi, I’m <strong className="text-slate-100 font-semibold">Areej Khalid</strong>. I engineer production-grade web applications with the <strong className="text-slate-200">MERN Stack</strong>, <strong className="text-slate-200">Next.js</strong>, and <strong className="text-emerald-300">LangGraph RAG pipelines</strong>.
            </motion.p>

            {/* Clean Tech Icon Strip */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              {techStackStrip.map((item, idx) => {
                const IconComponent = item.Icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors text-xs font-medium"
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCopilot}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 text-slate-200 hover:text-white transition-all cursor-pointer"
              >
                <MessageSquareCode className="w-4 h-4 text-emerald-400" />
                <span>Ask AI About Me</span>
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/Areej-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: @Areej-4"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/areejkhalid04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-300 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: /in/areejkhalid04"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Metrics Bar */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-5 border-t border-slate-800/80 max-w-md mx-auto lg:mx-0 text-left"
            >
              <div>
                <div className="text-xl font-bold text-white">2+ <span className="text-emerald-400 text-xs font-semibold">Years</span></div>
                <div className="text-[11px] text-slate-400 font-medium">Software Engineering</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">MERN &amp; Next</div>
                <div className="text-[11px] text-slate-400 font-medium">Full-Stack Core</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">GenAI</div>
                <div className="text-[11px] text-slate-400 font-medium">LangGraph &amp; RAG</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Clean Code Terminal Console with Entrance Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-xl glass-card rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
              
              {/* Terminal Window Header Bar */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 pl-2 truncate max-w-[200px] sm:max-w-none">
                    areej ~ {codeSnippets[activeTab].filename}
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  title="Copy code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-900/60 px-2 pt-2 gap-1.5">
                {[
                  { id: "mern", label: "MERN Stack API", Icon: NodeIcon },
                  { id: "next", label: "Next.js & DB", Icon: NextIcon },
                  { id: "ai", label: "LangGraph RAG", Icon: PythonIcon },
                ].map((tab) => {
                  const IconComp = tab.Icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-slate-950 text-emerald-300 border-t border-x border-slate-800 font-semibold"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Area */}
              <div className="p-4 sm:p-5 bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto min-h-[250px] leading-relaxed select-text">
                <pre>
                  <code>{codeSnippets[activeTab].code}</code>
                </pre>
              </div>

              {/* Terminal Bottom Telemetry Bar */}
              <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400">{codeSnippets[activeTab].badge}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <span>AI-Augmented Architecture</span>
                  <span>•</span>
                  <span>Node v22</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer">
        <a href="#projects" aria-label="Scroll down">
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
