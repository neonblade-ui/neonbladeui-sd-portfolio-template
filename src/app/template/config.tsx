// ─── Portfolio Config ──────────────────────────────────────────────────────────
// Edit everything here to personalise the template.

import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../components/neonblade-ui/footer";
import type { THEMES } from "./themes";

export const CONFIG = {
  // ── Personal info ────────────────────────────────────────────────────────────
  name: "Vic Prime",
  title: "Full Stack Developer",
  tagline:
    "I build digital experiences that live at the intersection of design and engineering.",
  location: "San Francisco, CA",
  email: "alex@example.com",
  resumeUrl: "#",

  // ── Change to "S1" | "M3" | "S5" to set the default theme ──────────────────
  defaultTheme: "S1" as keyof typeof THEMES,

  // ── Navigation ───────────────────────────────────────────────────────────────
  navItems: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  // ── Skills — colors derived from active theme at render time ─────────────────
  skillLabels: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Python",
    "GraphQL",
    "Tailwind CSS",
  ],

  // ── Projects — colorA/colorB injected from active theme at render time ───────
  projects: [
    {
      title: "Orbital Dashboard",
      description:
        "Real-time analytics platform processing 2M+ events/day. Built with Next.js, ClickHouse, and WebSockets. Reduced report load time by 80%.",
      tags: ["Next.js", "ClickHouse", "WebSocket"],
      projectIndex: 0 as const,
      githubUrl: "#",
      liveUrl: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      title: "Nexus Auth",
      description:
        "Open-source authentication SDK with OAuth 2.0 / OIDC, passkeys, and MFA. 1.2k GitHub stars. Zero dependencies in the core.",
      tags: ["OAuth 2.0", "TypeScript", "Open Source"],
      projectIndex: 1 as const,
      githubUrl: "#",
      liveUrl: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: "Pulse CMS",
      description:
        "Headless CMS with a visual block builder, multi-tenant support, and edge-deployed preview. Used in production by 40+ teams.",
      tags: ["React", "Node.js", "PostgreSQL"],
      projectIndex: 2 as const,
      githubUrl: "#",
      liveUrl: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
  ],

  // ── Experience timeline ───────────────────────────────────────────────────────
  experience: [
    {
      date: "2023 – Present",
      title: "Senior Software Engineer",
      description:
        "Spectrum Labs · Leading the real-time data pipeline team. Architecting the move from monolith to event-driven microservices.",
      badge: "Current",
      active: true,
    },
    {
      date: "2021 – 2023",
      title: "Software Engineer II",
      description:
        "Axiom Technologies · Shipped the v2 API platform, cutting response times by 60%. Mentored 3 junior engineers.",
      badge: "2 yrs",
    },
    {
      date: "2019 – 2021",
      title: "Frontend Engineer",
      description:
        "Pixel & Co · Built React component library used across 5 products. Drove adoption of TypeScript across the frontend guild.",
      badge: "2 yrs",
    },
    {
      date: "2018 – 2019",
      title: "Junior Developer",
      description:
        "Freelance · Delivered 12 client projects — landing pages, e-commerce stores, and internal tooling.",
      badge: "1 yr",
    },
  ],

  // ── Social links ─────────────────────────────────────────────────────────────
  socialLinks: [
    { label: "GitHub", href: "#", icon: <GithubIcon /> },
    { label: "Twitter", href: "#", icon: <TwitterIcon /> },
    { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  ],
};
