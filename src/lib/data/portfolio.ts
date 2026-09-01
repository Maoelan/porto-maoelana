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
    description: "Focusing on advanced artificial intelligence solutions and driving remote freelance projects."
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
    description: "Managing health data operations (e-Puskesmas, P-Care, HFIS), maintaining IT infrastructure, and developing internal automation tools to digitize administrative workflows for clinical staff."
  },
  {
    period: "Apr '26 - May '26",
    role: "Capstone Advisor",
    company: "Coding Camp",
    description: "Provided technical mentoring and guidance for student capstone teams working on AI-focused projects (PsyScreening, MoodSense, CortiSoul). Assisted in system architecture, ML approaches, and deployment."
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
    description: "Reviewed 4,000+ student submissions across Backend Development (Node.js) and ML paths (Python). Ensuring logic validity, testing code quality, and evaluating standard ML pipelines."
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
    description: "Developed headless robotic process automation (RPA) scripts to extract and upload 13 daily operational and KIA reports across different government portals. Eliminated human error and saved administrative staff hours of manual data entry every day.",
    tech: ["Python", "Playwright", "Task Scheduler"]
  },
  {
    category: "Healthcare UX",
    type: "Internal",
    title: "Portal Lapor Piket",
    description: "Built a frictionless, real-time web portal for clinical staff to record shift attendance instantly without complicated logins. Replaced cumbersome manual tracking with a seamless mobile-first interface powered by a serverless backend.",
    tech: ["React", "Convex", "Tailwind"]
  },
  {
    category: "Operations",
    type: "Github",
    link: "https://github.com/Maoelan/puskesmas-queue-system",
    title: "Smart Queue Management",
    description: "Resolved chaotic patient flow by replacing vocal queue calling with a smart digital system. Leveraged the browser's Web Speech API for automated Indonesian voice announcements and Local Storage for state persistence.",
    tech: ["Vanilla JS", "Web Speech API", "Local Storage"]
  },
  {
    category: "Data Automation",
    type: "Internal",
    title: "Attendency Automation System",
    description: "Engineered an automation script to intelligently synchronize work schedules from Google Sheets directly to ZKTeco / Solution Attendance databases. Implemented a Smart Delta Sync algorithm to detect changes and eliminate manual data-entry every month, reducing human error to near zero.",
    tech: ["Python, Pandas", "PyODBC & SQL", "Google Sheets"]
  },
  {
    category: "Data Automation",
    type: "Internal",
    title: "Automated Leave Sync",
    description: "Engineered an AI-powered hybrid system bridging WhatsApp directly to ZKTeco MS Access databases. Leveraged Google Gemini to parse unstructured chat messages (NLP) and Node.js for real-time WebSocket connection. Includes fuzzy matching and real-time SQL deletion if a WhatsApp message is revoked.",
    tech: ["Node.js & PM2", "Python (pyodbc)", "Gemini AI", "WhatsApp Socket"]
  },
  {
    category: "AI & Legal Tech",
    type: "Github",
    link: "https://github.com/Bideng-Warrior/hukumpekerja-chatbot",
    title: "HukumPekerja",
    description: "Designed a strict RAG-based AI chatbot to democratize Indonesian labor law information. Engineered a Hybrid AI architecture (local Llama-3 with Gemini fallback) and implemented pgvector for semantic search, ensuring responses include transparent legal citations without hallucinations.",
    tech: ["Next.js 14", "Llama-3 & Gemini", "pgvector"]
  },
  {
    category: "AI Capstone",
    type: "None",
    title: "Mental Health AI",
    description: "Mentored architectural design for impactful capstone projects: CortiSoul (speech-based emotion detection via Gemini API), PsyScreening (ML risk classification), and MoodSense (lifestyle tracking dashboards).",
    tech: ["Machine Learning", "Deep Learning", "Mentorship"]
  },
  {
    category: "Retail",
    type: "Github",
    link: "https://github.com/Maoelan/Tokoku",
    title: "Tokoku Sintung POS",
    description: "Engineered a cloud-based Point of Sale and inventory management system to resolve the manual tracking inefficiencies of a family-run retail store. Eliminated stock-outs through automated low-stock alerts.",
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
