"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const roles = [
  "Software Engineer",
  "Data Analyst",
  "Data Scientist",
  "ML Engineer",
  "AI Engineer"
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      2200
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="absolute inset-x-4 -top-24 h-64 rounded-full bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-transparent blur-3xl sm:inset-x-8" />
      <div className="mx-auto grid max-w-6xl items-center gap-4 px-4 pb-16 pt-10 sm:px-6 sm:pb-16 sm:pt-12 md:grid-cols-[1.35fr_0.75fr] md:gap-2 md:px-8 md:pb-20">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.22em] text-slate-300 sm:px-4 sm:py-2 sm:text-xs"
          >
            Building intelligent systems end-to-end
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[62px]"
          >
            Rohan Chandrashekhar
          </motion.h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3 text-xl font-semibold text-slate-200 sm:text-2xl md:text-4xl">
              <span className="font-semibold text-slate-100">I am a</span>
              <div className="relative h-10 w-56 overflow-hidden sm:h-12 sm:w-64 md:w-80">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0 top-0 bg-gradient-to-r from-purple-300 to-cyan-200 bg-clip-text text-transparent"
                  >
                    {roles[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            <p className="max-w-2xl text-base text-slate-300 text-justify sm:text-lg md:text-xl">
              I design, ship, and operate AI systems, from data pipelines and feature engineering to rigorous evaluation, production inference, and analytics that turn model outputs into real decisions. 
              I build with Python and SQL, train and tune models with modern ML tooling, and develop LLM applications with RAG, vector search, and prompt driven workflows. 
              I care about reliability as much as accuracy, with strong attention to monitoring, reproducibility, and clean engineering that scales.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <LinkButton href="/projects" intent="primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton href="/resume" intent="secondary">
              Resume <Download className="h-4 w-4" />
            </LinkButton>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-purple-500/20 via-slate-900/40 to-cyan-400/10 p-1 shadow-glow sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-cyan-400/10 blur-2xl" />
            <Image
              src="/profile.jpeg"
              alt="Portrait"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LinkButton({
  href,
  children,
  intent
}: {
  href: string;
  children: React.ReactNode;
  intent: "primary" | "secondary";
}) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/50",
          intent === "primary"
            ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-glow"
            : "border border-white/15 bg-white/5 text-slate-100"
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
