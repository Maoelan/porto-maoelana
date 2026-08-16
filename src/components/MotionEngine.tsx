"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";

export const springConfig = { type: "spring" as const, stiffness: 100, damping: 20 };

export function FadeInStagger({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: springConfig },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x, y }}
      transition={springConfig}
      whileTap={{ scale: 0.96 }}
      className="relative flex items-center justify-center px-6 py-3 font-medium text-white transition-colors rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 focus-within:ring-2 focus-within:ring-zinc-400 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950 cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

export function InfiniteDataStream({ data }: { data: string[] }) {
  return (
    <div className="flex overflow-hidden relative w-full mask-edges py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex gap-8 whitespace-nowrap min-w-max"
      >
        {[...data, ...data].map((item, i) => (
          <div key={i} className="font-mono text-sm text-zinc-400">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function GlowingDataCard({ title, value, label }: { title: string, value: string, label: string }) {
  return (
    <div className="relative p-8 rounded-[2.5rem] glass-panel group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="flex flex-col relative z-10">
        <span className="text-zinc-500 font-medium mb-12">{title}</span>
        <span className="text-4xl md:text-5xl font-mono tracking-tighter text-white mb-2">{value}</span>
        <span className="text-sm text-zinc-400">{label}</span>
      </div>
    </div>
  );
}
