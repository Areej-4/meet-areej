import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Areej Khalid | Full-Stack Software Engineer & AI Systems Developer",
  description: "Portfolio of Areej Khalid — Full-Stack Software Engineer with 2+ years of experience building scalable Next.js 16 / React 19 SaaS platforms, LangGraph & RAG AI agents, and enterprise data systems.",
  keywords: [
    "Areej Khalid",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js 16",
    "React 19",
    "LangGraph",
    "LangChain",
    "RAG",
    "PostgreSQL",
    "Prisma",
    "AI Engineer"
  ],
  authors: [{ name: "Areej Khalid", url: "https://github.com/Areej-4" }],
  openGraph: {
    title: "Areej Khalid | Full-Stack Software Engineer & AI Systems Developer",
    description: "2+ Years Experience building Enterprise Next.js SaaS, LangGraph Agentic Workflows, and PostgreSQL Architectures.",
    type: "website",
    url: "https://github.com/Areej-4",
    images: [
      {
        url: "/areej-avatar.jpg",
        width: 800,
        height: 800,
        alt: "Areej Khalid - Full-Stack Software Engineer"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
