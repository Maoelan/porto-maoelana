import { FadeInStagger, FadeInItem, MagneticButton } from "@/components/MotionEngine";
import { ArrowUpRight, GithubLogo, LinkedinLogo, EnvelopeSimple, Briefcase, Code, Cpu, WhatsappLogo, LockKey } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full bg-zinc-950 text-zinc-50 selection:bg-white selection:text-black">
      
      {/* Tighter container: reduced vertical padding and gap */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-20">
        
        {/* HERO */}
        <section id="hero" className="min-h-[70vh] flex flex-col justify-center mt-12 md:mt-0">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10">
            <FadeInStagger className="flex flex-col gap-6 max-w-2xl">
              <FadeInItem>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                  Maulana Muhammad
                </h1>
                <p className="text-lg md:text-2xl text-zinc-400 font-medium leading-snug">
                  AI/ML Engineer & Automation Specialist. Translating complex data into operational reality.
                </p>
              </FadeInItem>
              <FadeInItem className="flex gap-4 mt-6">
                <a href="#contact" className="focus-visible:outline-none rounded-2xl">
                  <MagneticButton>
                    Let's work together <ArrowUpRight weight="bold" className="ms-2" />
                  </MagneticButton>
                </a>
                <a href="#projects" className="flex items-center justify-center px-4 py-2 font-medium text-zinc-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-2xl">
                  View Work
                </a>
              </FadeInItem>
            </FadeInStagger>
            
            {/* Photo */}
            <div className="shrink-0 mb-4 md:mb-0">
              <FadeInStagger>
                <FadeInItem>
                  <div className="relative w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-2xl">
                    <Image src="/my-photo.png" alt="Maulana Muhammad" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" priority />
                  </div>
                </FadeInItem>
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <FadeInStagger className="flex flex-col gap-4">
            <FadeInItem>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 whitespace-nowrap">About Me</h2>
                <div className="w-full h-px bg-zinc-800/50" />
              </div>
            </FadeInItem>
            <FadeInItem>
              <p className="text-lg md:text-xl leading-relaxed font-medium max-w-4xl text-zinc-300">
                I am an AI/ML Engineer and Automation Specialist dedicated to solving immediate, real-world operational bottlenecks. Rather than building technology for its own sake, I focus on engineering targeted solutions. My work ranges from digitizing legacy public health infrastructure to implementing scalable machine learning models that address critical human needs. With over 4,000+ code reviews completed, I emphasize clean architecture, data-driven decisions, and deploying systems that deliver measurable, immediate impact.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </section>

        {/* EXPERIENCE TIMELINE - Tighter gaps */}
        <section id="experience">
          <FadeInStagger className="flex flex-col gap-6">
            <FadeInItem>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 whitespace-nowrap">Experience</h2>
                <div className="w-full h-px bg-zinc-800/50" />
              </div>
            </FadeInItem>
            
            <div className="flex flex-col gap-8 border-s border-zinc-800 ms-2 ps-6 md:ps-8">
              
              <FadeInItem className="relative">
                <div className="absolute size-3 bg-zinc-300 rounded-full -start-[29.5px] md:-start-[37.5px] top-1.5 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
                  <h3 className="text-xl font-bold">AI Engineer <span className="text-zinc-500 font-normal">@ ArcDev</span></h3>
                  <span className="text-xs font-mono text-zinc-500">Jul 2026 - Present</span>
                </div>
                <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">Focusing on advanced artificial intelligence solutions and driving remote freelance projects.</p>
              </FadeInItem>

              <FadeInItem className="relative">
                <div className="absolute size-3 bg-zinc-600 rounded-full -start-[29.5px] md:-start-[37.5px] top-1.5" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
                  <h3 className="text-xl font-bold">Facilitator <span className="text-zinc-500 font-normal">@ Google Cloud Arcade</span></h3>
                  <span className="text-xs font-mono text-zinc-500">Jul 2026 - Present</span>
                </div>
                <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">Freelance facilitator for Google Cloud programs.</p>
              </FadeInItem>

              <FadeInItem className="relative">
                <div className="absolute size-3 bg-zinc-600 rounded-full -start-[29.5px] md:-start-[37.5px] top-1.5" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
                  <h3 className="text-xl font-bold">Health Info System & IT Support <span className="text-zinc-500 font-normal">@ Puskesmas Suranadi</span></h3>
                  <span className="text-xs font-mono text-zinc-500">Apr 2026 - Present</span>
                </div>
                <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">Managing health data operations (e-Puskesmas, P-Care, HFIS), maintaining IT infrastructure, and developing internal automation tools to digitize administrative workflows for clinical staff.</p>
              </FadeInItem>

              <FadeInItem className="relative">
                <div className="absolute size-3 bg-zinc-600 rounded-full -start-[29.5px] md:-start-[37.5px] top-1.5" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
                  <h3 className="text-xl font-bold">Capstone Advisor <span className="text-zinc-500 font-normal">@ Coding Camp (DBS Foundation)</span></h3>
                  <span className="text-xs font-mono text-zinc-500">Apr 2026 - May 2026</span>
                </div>
                <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">Provided technical mentoring and guidance for student capstone teams working on AI-focused projects (PsyScreening, MoodSense, CortiSoul). Assisted in system architecture, ML approaches, and deployment.</p>
              </FadeInItem>

              <FadeInItem className="relative">
                <div className="absolute size-3 bg-zinc-600 rounded-full -start-[29.5px] md:-start-[37.5px] top-1.5" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
                  <h3 className="text-xl font-bold">Facilitator <span className="text-zinc-500 font-normal">@ Microsoft Elevate</span></h3>
                  <span className="text-xs font-mono text-zinc-500">Mar 2026 - Jun 2026</span>
                </div>
                <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">Provided technical support for Generative AI Fundamentals and Machine Learning Systems courses, managing group communications and monitoring student progress.</p>
              </FadeInItem>

              <FadeInItem className="relative">
                <div className="absolute size-3 bg-zinc-600 rounded-full -start-[29.5px] md:-start-[37.5px] top-1.5" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
                  <h3 className="text-xl font-bold">External Code Reviewer <span className="text-zinc-500 font-normal">@ Dicoding</span></h3>
                  <span className="text-xs font-mono text-zinc-500">Jun 2024 - Present</span>
                </div>
                <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">Reviewed 4,000+ student submissions across Backend Development (Node.js) and ML paths (Python). Ensuring logic validity, testing code quality, and evaluating standard ML pipelines.</p>
              </FadeInItem>

              <FadeInItem className="relative">
                <div className="absolute size-3 bg-zinc-700 rounded-full -start-[29.5px] md:-start-[37.5px] top-1.5" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
                  <h3 className="text-xl font-bold">IT Teacher <span className="text-zinc-500 font-normal">@ SMKN 1 Narmada</span></h3>
                  <span className="text-xs font-mono text-zinc-500">Jan 2024 - Aug 2024</span>
                </div>
                <p className="text-zinc-400 text-sm max-w-3xl leading-relaxed">Taught foundational software engineering concepts, basic networking, and telecommunication topics.</p>
              </FadeInItem>

            </div>
          </FadeInStagger>
        </section>

        {/* PROJECTS - Converted to Grid for denser packing */}
        <section id="projects">
          <FadeInStagger className="flex flex-col gap-6">
            <FadeInItem>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 whitespace-nowrap">Selected Work</h2>
                <div className="w-full h-px bg-zinc-800/50" />
              </div>
            </FadeInItem>
            
            {/* Grid Layout instead of Stacked list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* HukumPekerja */}
              <FadeInItem className="group flex flex-col p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-800/40 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-zinc-500 font-mono text-xs mt-1">01 / AI & Legal Tech</div>
                  <a href="https://github.com/Bideng-Warrior/hukumpekerja-chatbot" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" title="View Source">
                    <GithubLogo size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">HukumPekerja</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                  Designed a strict RAG-based AI chatbot to democratize Indonesian labor law information. Engineered a Hybrid AI architecture (local Llama-3 with Gemini fallback) and implemented pgvector for semantic search, ensuring responses include transparent legal citations without hallucinations.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Next.js 14</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Supabase</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">pgvector</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Llama-3 & Gemini</span>
                </div>
              </FadeInItem>

              {/* e-Puskesmas RPA */}
              <FadeInItem className="group flex flex-col p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-800/40 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-zinc-500 font-mono text-xs mt-1">02 / RPA Automation</div>
                  <div className="flex items-center gap-1.5 text-zinc-600" title="Internal/Confidential Repository">
                    <LockKey size={16} />
                    <span className="text-[10px] font-medium uppercase tracking-wider">Internal</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">e-Puskesmas Automation</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                  Developed headless robotic process automation (RPA) scripts to extract and upload 13 daily operational and KIA reports across different government portals. Eliminated human error and saved administrative staff hours of manual data entry every day.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Python</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Playwright</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Task Scheduler</span>
                </div>
              </FadeInItem>

              {/* Portal Lapor Piket */}
              <FadeInItem className="group flex flex-col p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-800/40 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-zinc-500 font-mono text-xs mt-1">03 / Healthcare UX</div>
                  <div className="flex items-center gap-1.5 text-zinc-600" title="Internal/Confidential Repository">
                    <LockKey size={16} />
                    <span className="text-[10px] font-medium uppercase tracking-wider">Internal</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">Portal Lapor Piket</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                  Built a frictionless, real-time web portal for clinical staff to record shift attendance instantly without complicated logins. Replaced cumbersome manual tracking with a seamless mobile-first interface powered by a serverless backend.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">React</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Convex</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Tailwind</span>
                </div>
              </FadeInItem>

              {/* Queue Calling System */}
              <FadeInItem className="group flex flex-col p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-800/40 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-zinc-500 font-mono text-xs mt-1">04 / Healthcare Operations</div>
                  <a href="https://github.com/Maoelan/puskesmas-queue-system" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" title="View Source">
                    <GithubLogo size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">Smart Queue Management</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                  Resolved chaotic patient flow by replacing vocal queue calling with a smart digital system. Leveraged the browser's Web Speech API for automated Indonesian voice announcements and Local Storage for state persistence.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Vanilla JS</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Web Speech API</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Local Storage</span>
                </div>
              </FadeInItem>

              {/* Tokoku Sintung */}
              <FadeInItem className="group flex flex-col p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-800/40 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-zinc-500 font-mono text-xs mt-1">05 / Retail</div>
                  <a href="https://github.com/Maoelan/Tokoku" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" title="View Source">
                    <GithubLogo size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">Tokoku Sintung POS</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                  Engineered a cloud-based Point of Sale and inventory management system to resolve the manual tracking inefficiencies of a family-run retail store. Eliminated stock-outs through automated low-stock alerts.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Next.js</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Tailwind</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Supabase</span>
                </div>
              </FadeInItem>

              {/* Attendance Sync */}
              <FadeInItem className="group flex flex-col p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-800/40 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-zinc-500 font-mono text-xs mt-1">06 / Data Automation</div>
                  <div className="flex items-center gap-1.5 text-zinc-600" title="Internal/Confidential Repository">
                    <LockKey size={16} />
                    <span className="text-[10px] font-medium uppercase tracking-wider">Internal</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">Automated Leave Sync</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                  Engineered an AI-powered hybrid system bridging WhatsApp directly to ZKTeco MS Access databases. Leveraged Google Gemini to parse unstructured chat messages (NLP) and Node.js for real-time WebSocket connection. Includes fuzzy matching and real-time SQL deletion if a WhatsApp message is revoked.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Node.js & PM2</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Python (pyodbc)</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Gemini AI</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">WhatsApp Socket</span>
                </div>
              </FadeInItem>

              {/* AI Capstones */}
              <FadeInItem className="group flex flex-col p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-800/40 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-zinc-500 font-mono text-xs mt-1">07 / AI Capstone</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">Mental Health AI</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow max-w-3xl">
                  Mentored architectural design for impactful capstone projects: <strong>CortiSoul</strong> (speech-based emotion detection via Gemini API), <strong>PsyScreening</strong> (ML risk classification), and <strong>MoodSense</strong> (lifestyle tracking dashboards).
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Machine Learning</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Deep Learning</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Mentorship</span>
                </div>
              </FadeInItem>

              {/* Attendency Automation System */}
              <FadeInItem className="group flex flex-col p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-800/40 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-zinc-500 font-mono text-xs mt-1">08 / Data Automation</div>
                  <div className="flex items-center gap-1.5 text-zinc-600" title="Internal/Confidential Repository">
                    <LockKey size={16} />
                    <span className="text-[10px] font-medium uppercase tracking-wider">Internal</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">Attendency Automation System</h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">
                  Engineered an automation script to intelligently synchronize work schedules from Google Sheets directly to ZKTeco / Solution Attendance databases. Implemented a Smart Delta Sync algorithm to detect changes and eliminate manual data-entry every month, reducing human error to near zero.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Python</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Pandas</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">PyODBC & SQL</span>
                  <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-mono tracking-tight text-zinc-300">Google Sheets API</span>
                </div>
              </FadeInItem>

            </div>
          </FadeInStagger>
        </section>

        {/* SKILLS - Tighter grid */}
        <section id="skills">
          <FadeInStagger className="flex flex-col gap-6">
            <FadeInItem>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 whitespace-nowrap">Technical Arsenal</h2>
                <div className="w-full h-px bg-zinc-800/50" />
              </div>
            </FadeInItem>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FadeInItem className="flex flex-col gap-3 p-5 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
                <div className="flex items-center gap-3 text-white">
                  <Cpu weight="duotone" size={24} />
                  <h3 className="font-bold text-lg">AI & Data</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">Machine Learning, MLOps, Data Analytics, Python, Deep Learning, pgvector, Generative AI (Gemini API, Llama-3).</p>
              </FadeInItem>
              
              <FadeInItem className="flex flex-col gap-3 p-5 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
                <div className="flex items-center gap-3 text-white">
                  <Code weight="duotone" size={24} />
                  <h3 className="font-bold text-lg">Engineering</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">Next.js 14, React, Tailwind CSS, Node.js, Drizzle ORM, Convex, Supabase, Playwright, Vanilla JS.</p>
              </FadeInItem>
              
              <FadeInItem className="flex flex-col gap-3 p-5 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
                <div className="flex items-center gap-3 text-white">
                  <Briefcase weight="duotone" size={24} />
                  <h3 className="font-bold text-lg">Operations</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">RPA Automation, Task Scheduler, IT Infrastructure, Health Information Systems (e-Puskesmas), System Troubleshooting.</p>
              </FadeInItem>
            </div>
          </FadeInStagger>
        </section>

        {/* CONTACT & FOOTER */}
        <section id="contact" className="mt-12 pb-12">
          <FadeInStagger className="flex flex-col items-center text-center gap-6">
            <FadeInItem>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3">Let's build something.</h2>
              <p className="text-lg text-zinc-400 mb-6 max-w-lg mx-auto">
                Open for freelance opportunities, AI/ML advisory, or full-time roles in forward-thinking engineering teams.
              </p>
            </FadeInItem>
            <FadeInItem className="flex flex-wrap justify-center gap-4">
              <a href="mailto:maulanamuhammad2000@gmail.com" className="focus-visible:outline-none rounded-2xl">
                <MagneticButton>
                  Say Hello <EnvelopeSimple weight="bold" className="ms-2" />
                </MagneticButton>
              </a>
              <a href="https://wa.me/6287873026445" target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-2xl">
                <div className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all cursor-pointer overflow-hidden">
                  WhatsApp <WhatsappLogo weight="fill" className="ms-2" />
                </div>
              </a>
            </FadeInItem>
            
            <FadeInItem className="w-full mt-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-800/50 pt-8">
              <span className="text-zinc-500 font-medium text-sm">© 2026 Maulana Muhammad. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="https://github.com/Maoelan" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="GitHub">
                  <GithubLogo size={24} weight="fill" />
                </a>
                <a href="https://www.linkedin.com/in/maulanamuhammad2000" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
                  <LinkedinLogo size={24} weight="fill" />
                </a>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </section>

      </div>
    </main>
  );
}
