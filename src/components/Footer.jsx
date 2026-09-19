"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, AreejLogo } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080e] py-8 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-400 text-xs footer-container">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <AreejLogo className="w-7 h-7" />
          <p className="text-slate-400 text-xs">
            <span className="font-semibold text-white tracking-tight">Areej Khalid</span>
            <span className="mx-2 text-slate-600">•</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </p>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Areej-4"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/areejkhalid04/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors cursor-pointer"
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

