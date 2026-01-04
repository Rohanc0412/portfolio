"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({
  title,
  eyebrow,
  description,
  children,
  className,
  disableMotion = false
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  disableMotion?: boolean;
}) {
  const MotionContainer = disableMotion ? "section" : motion.section;
  const MotionHeader = disableMotion ? "div" : motion.div;

  return (
    <MotionContainer
      className={cn("mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10", className)}
      {...(!disableMotion && {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: false, margin: "-60px" },
        transition: { duration: 0.6, ease: "easeOut" }
      })}
    >
      <MotionHeader
        {...(!disableMotion && {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: false },
          transition: { duration: 0.5 }
        })}
        className="mb-8"
      >
        {eyebrow && (
          <div className="text-sm uppercase tracking-[0.26em] text-cyan-300 sm:text-base md:text-lg">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl">
            {description}
          </p>
        )}
      </MotionHeader>
      {children}
    </MotionContainer>
  );
}
