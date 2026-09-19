"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ExperiencePhilosophy from "@/components/ExperiencePhilosophy";
import SkillsMatrix from "@/components/SkillsMatrix";
import BusinessLeadership from "@/components/BusinessLeadership";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AskAreejAI from "@/components/AskAreejAI";

export default function Home() {
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  return (
    <main className="min-h-screen bg-transparent selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* 1. Header & Navigation */}
      <Navbar onOpenCopilot={() => setIsCopilotOpen(true)} />

      {/* 2. Hero Section with Live Code Console */}
      <Hero onOpenCopilot={() => setIsCopilotOpen(true)} />

      {/* 3. Featured Production Projects (High Priority Proof First!) */}
      <FeaturedProjects />

      {/* 4. Verified Experience & Career History */}
      <ExperiencePhilosophy />

      {/* 5. MERN Stack & Engineering Capabilities Matrix */}
      <SkillsMatrix />

      {/* 6. Business Impact, Global Client Communication & ROI */}
      <BusinessLeadership />

      {/* 7. Engineering Background & Architectural Pillars */}
      <AboutSection onOpenCopilot={() => setIsCopilotOpen(true)} />

      {/* 8. Direct Contact & Inquiries ("Meet Areej") */}
      <ContactSection />

      {/* 9. System Footer */}
      <Footer />

      {/* 10. Interactive AI Copilot Modal */}
      <AskAreejAI 
        isOpen={isCopilotOpen} 
        onClose={() => setIsCopilotOpen(false)} 
      />
    </main>
  );
}
