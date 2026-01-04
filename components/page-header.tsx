"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  description,
  className
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("max-w-3xl", className)}
    >
      <h1 className="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
      {description && (
        <p className="mt-3 text-lg text-slate-300 md:text-xl">{description}</p>
      )}
    </motion.div>
  );
}
