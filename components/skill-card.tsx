"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type Skill = {
  name: string;
  items: string[];
};

export function SkillGrid({ categories }: { categories: Skill[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {categories.map((category, index) => (
        <SkillCard key={category.name} category={category} delay={index * 0.05} />
      ))}
    </div>
  );
}

function SkillCard({ category, delay }: { category: Skill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
        <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">
          {category.items.length} skills
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className={cn(
              "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
