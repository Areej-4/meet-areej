"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageSquareCode
} from "lucide-react";
import { GithubIcon, LinkedinIcon, AreejLogo } from "@/components/Icons";

export default function Navbar({ onOpenCopilot }) {
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Tech Stack" },
    { href: "#leadership", label: "Impact" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Minimal Status Indicator */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a 
              href="#hero" 
              className="flex items-center gap-2.5 text-base font-bold tracking-tight text-white group"
            >
              <AreejLogo className="w-8 h-8" />
              <span className="font-semibold text-slate-100 group-hover:text-white transition-colors">
                Areej Khalid<span className="text-emerald-400">.</span>
              </span>
            </a>

            {/* Subtle Live Dot */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="hover:text-emerald-300 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Ask AI Trigger Button */}
            <button
              onClick={onOpenCopilot}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 transition-all cursor-pointer shadow-sm"
            >
              <MessageSquareCode className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ask AI</span>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/Areej-4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/areejkhalid04/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-emerald-300 hover:bg-slate-800/60 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-950 hover:bg-emerald-400 transition-colors ml-1 shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Smooth Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#06080c]/98 backdrop-blur-2xl border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for Opportunities
              </div>

              <div className="flex flex-col space-y-3 pt-2 text-slate-200 font-medium text-base">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-emerald-400 py-1.5 border-b border-slate-900 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-600" />
                  </motion.a>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCopilot();
                  }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 w-full justify-center shadow-sm"
                >
                  <MessageSquareCode className="w-4 h-4 text-emerald-400" />
                  <span>Ask AI Copilot</span>
                </button>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href="https://github.com/Areej-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/areejkhalid04/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
