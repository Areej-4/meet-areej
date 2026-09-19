"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  ArrowRight, 
  Sparkles,
  Loader2,
  AlertCircle
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web / SaaS Project",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = "areejkhalid360@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/58967a4600ee6e3166b1fdf61cab9176", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          projectType: formState.projectType,
          message: formState.message,
          _subject: `New Portfolio Inquiry from ${formState.name} (${formState.projectType})`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        try {
          confetti({
            particleCount: 65,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#10b981", "#34d399", "#6ee7b7", "#ffffff"]
          });
        } catch (err) {
          console.log(err);
        }
        setSubmitted(true);
      } else {
        throw new Error(data.message || "Unable to send message.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      // Fallback: If network fails, offer instant mailto link
      setErrorMessage("Could not deliver automatically. You can reach out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let’s Build Something <span className="text-glossy-emerald">Exceptional</span>.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Open for software engineering opportunities, enterprise SaaS contracts, and AI consulting.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Connect & Links */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-7 space-y-6 flex flex-col justify-between border border-slate-800">
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-white">Direct Connect</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reach out directly via LinkedIn, GitHub, or email.
                </p>
              </div>

              {/* Status Badge */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <div>
                  <div className="text-xs font-semibold text-emerald-300">Available for Opportunities</div>
                  <div className="text-[11px] text-slate-400">Typical response within 24h</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5">
                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/areejkhalid04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-lg bg-slate-800 text-slate-300 group-hover:text-emerald-300 flex items-center justify-center transition-colors">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">LinkedIn</div>
                      <div className="text-[11px] text-slate-400">in/areejkhalid04</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/Areej-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-lg bg-slate-800 text-slate-300 group-hover:text-emerald-300 flex items-center justify-center transition-colors">
                      <GithubIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">GitHub</div>
                      <div className="text-[11px] text-slate-400">@Areej-4</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Email Copy Card */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-[11px] text-slate-400 mb-1.5 font-medium">Direct Email:</div>
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 transition-colors cursor-pointer"
              >
                <span>{directEmail}</span>
                {copiedEmail ? (
                  <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-7 sm:p-8 border border-slate-800">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white">Message Dispatched</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Areej has received your inquiry and will be in touch shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", projectType: "Full-Stack Web / SaaS Project", message: "" });
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-white">Send a Message</h3>
                  <span className="text-[11px] font-mono text-emerald-400">Direct Delivery</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500/70 focus:outline-none text-xs text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500/70 focus:outline-none text-xs text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Inquiry Topic</label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500/70 focus:outline-none text-xs text-slate-300 transition-colors"
                  >
                    <option>Full-Stack Web / Next.js SaaS Project</option>
                    <option>GenAI &amp; Agentic RAG Development</option>
                    <option>Full-Time Engineering Role</option>
                    <option>Technical Consultation / Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or engineering role..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500/70 focus:outline-none text-xs text-white placeholder-slate-600 resize-none transition-colors"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <a
                      href={`mailto:${directEmail}?subject=${encodeURIComponent("Portfolio Inquiry: " + formState.name)}&body=${encodeURIComponent(formState.message)}`}
                      className="underline font-semibold hover:text-red-300"
                    >
                      Email Direct
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl font-semibold text-xs bg-emerald-400 hover:bg-emerald-300 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-slate-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message to Areej</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
