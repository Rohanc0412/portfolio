"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-center justify-between gap-4">
        <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
          {project.category}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-slate-300 transition hover:text-white"
          aria-label={`View ${project.title}`}
        >
          <ArrowUpRight size={22} />
        </Link>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-base text-slate-300 text-justify">{project.problem}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
            )}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
        >
          View case study
        </Link>
        <Link
          href={project.repo}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-200 hover:text-white"
        >
          GitHub
        </Link>
        <Link
          href={project.demo}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-200 hover:text-white"
        >
          Demo
        </Link>
      </div>
    </motion.article>
  );
}
