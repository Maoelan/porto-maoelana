export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface Project {
  category: string;
  type: 'Internal' | 'Github' | 'None';
  link?: string; // GitHub URL if applicable
  title: string;
  description: string;
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string; // Stored as a comma-separated string for simplicity based on the design
}

export const experiences: Experience[] = [
  {
    period: "Jul '26 - Pres.",
    role: "AI Engineer",
    company: "ArcDev",
    description: "Focusing on <strong>advanced artificial intelligence solutions</strong> and driving remote freelance projects."
  },
  {
    period: "Jul '26 - Pres.",
    role: "Facilitator",
    company: "Google Cloud Arcade",
    description: "Freelance facilitator for Google Cloud programs."
  },
  {
    period: "Apr '26 - Pres.",
    role: "Health Info System & IT Support",
    company: "Puskesmas Suranadi",
    description: "Managing health data operations (e-Puskesmas, P-Care, HFIS), maintaining IT infrastructure, and developing <strong>internal automation tools</strong> to digitize administrative workflows for clinical staff."
  },
  {
    period: "Apr '26 - May '26",
    role: "Capstone Advisor",
    company: "Coding Camp",
    description: "Provided technical mentoring and guidance for student capstone teams working on <strong>AI-focused projects</strong> (PsyScreening, MoodSense, CortiSoul). Assisted in <strong>system architecture, ML approaches, and deployment</strong>."
  },
  {
    period: "Mar '26 - Jun '26",
    role: "Facilitator",
    company: "Microsoft Elevate",
    description: "Provided technical support for Generative AI Fundamentals and Machine Learning Systems courses, managing group communications and monitoring student progress."
  },
  {
    period: "Jun '24 - Pres.",
    role: "External Code Reviewer",
    company: "Dicoding",
    description: "Reviewed <strong>4,000+ student submissions</strong> across Backend Development (Node.js) and ML paths (Python). Ensuring logic validity, testing code quality, and evaluating <strong>standard ML pipelines</strong>."
  },
  {
    period: "Jan '24 - Aug '24",
    role: "IT Teacher",
    company: "SMKN 1 Narmada",
    description: "Taught foundational software engineering concepts, basic networking, and telecommunication topics."
  }
];

export const projects: Project[] = [
  {
    category: "RPA Automation",
    type: "Internal",
    title: "e-Puskesmas Automation",
    description: "Developed <strong>headless robotic process automation (RPA)</strong> scripts to extract and upload 13 daily operational and KIA reports across different government portals. <strong>Eliminated human error</strong> and saved administrative staff hours of manual data entry every day.",
    tech: ["Python", "Playwright", "Task Scheduler"]
  },
  {
    category: "Healthcare UX",
    type: "Internal",
    title: "Portal Lapor Piket",
    description: "Built a frictionless, <strong>real-time web portal</strong> for clinical staff to record shift attendance instantly without complicated logins. Replaced cumbersome manual tracking with a <strong>seamless mobile-first interface</strong> powered by a serverless backend.",
    tech: ["React", "Convex", "Tailwind"]
  },
  {
    category: "Operations",
    type: "Github",
    link: "https://github.com/Maoelan/puskesmas-queue-system",
    title: "Smart Queue Management",
    description: "Resolved chaotic patient flow by replacing vocal queue calling with a <strong>smart digital system</strong>. Leveraged the browser's <strong>Web Speech API</strong> for automated Indonesian voice announcements and Local Storage for state persistence.",
    tech: ["Vanilla JS", "Web Speech API", "Local Storage"]
  },
  {
    category: "Data Automation",
    type: "Internal",
    title: "Attendency Automation System",
    description: "Engineered an automation script to <strong>intelligently synchronize work schedules</strong> from Google Sheets directly to ZKTeco / Solution Attendance databases. Implemented a <strong>Smart Delta Sync algorithm</strong> to detect changes and eliminate manual data-entry every month, reducing human error to near zero.",
    tech: ["Python, Pandas", "PyODBC & SQL", "Google Sheets"]
  },
  {
    category: "Data Automation",
    type: "Internal",
    title: "Automated Leave Sync",
    description: "Engineered an <strong>AI-powered hybrid system</strong> bridging WhatsApp directly to ZKTeco MS Access databases. Leveraged <strong>Google Gemini to parse unstructured chat messages (NLP)</strong> and Node.js for real-time WebSocket connection. Includes fuzzy matching and real-time SQL deletion if a WhatsApp message is revoked.",
    tech: ["Node.js & PM2", "Python (pyodbc)", "Gemini AI", "WhatsApp Socket"]
  },
  {
    category: "AI & Legal Tech",
    type: "Github",
    link: "https://github.com/Bideng-Warrior/hukumpekerja-chatbot",
    title: "HukumPekerja",
    description: "Designed a <strong>strict RAG-based AI chatbot</strong> to democratize Indonesian labor law information. Engineered a <strong>Hybrid AI architecture</strong> (local Llama-3 with Gemini fallback) and implemented <strong>pgvector for semantic search</strong>, ensuring responses include transparent legal citations without hallucinations.",
    tech: ["Next.js 14", "Llama-3 & Gemini", "pgvector"]
  },
  {
    category: "AI Capstone",
    type: "None",
    title: "Mental Health AI",
    description: "Mentored <strong>architectural design</strong> for impactful capstone projects: CortiSoul (speech-based emotion detection via Gemini API), PsyScreening (ML risk classification), and MoodSense (lifestyle tracking dashboards).",
    tech: ["Machine Learning", "Deep Learning", "Mentorship"]
  },
  {
    category: "Retail",
    type: "Github",
    link: "https://github.com/Maoelan/Tokoku",
    title: "Tokoku Sintung POS",
    description: "Engineered a <strong>cloud-based Point of Sale</strong> and inventory management system to resolve the manual tracking inefficiencies of a family-run retail store. <strong>Eliminated stock-outs</strong> through automated low-stock alerts.",
    tech: ["Next.js", "Tailwind", "Supabase"]
  }
];

export const skills: SkillCategory[] = [
  {
    title: "AI & Data",
    skills: "Machine Learning, MLOps, Data Analytics, Python, Deep Learning, pgvector, Generative AI (Gemini API, Llama-3)."
  },
  {
    title: "Engineering",
    skills: "Next.js 14, React, Tailwind CSS, Node.js, Drizzle ORM, Convex, Supabase, Playwright, Vanilla JS."
  },
  {
    title: "Operations",
    skills: "RPA Automation, Task Scheduler, IT Infrastructure, Health Information Systems (e-Puskesmas), System Troubleshooting."
  }
];
