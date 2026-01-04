"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, MapPin } from "lucide-react";

export type Experience = {
  company: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
};

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <div className="grid gap-6">
      {items.map((item, idx) => (
        <motion.article
          key={`${item.company}-${item.role}`}
          initial={{ opacity: 0, y: 40, rotateX: 8, rotateY: -6, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.05, type: "spring", stiffness: 120, damping: 16 }}
          whileHover={{
            y: -8,
            scale: 1.02,
            rotateX: 0,
            rotateY: 0,
            boxShadow: "0 25px 60px -25px rgba(124,58,237,0.5)",
            backgroundColor: "rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.18)"
          }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/50 will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 18px 45px -20px rgba(0,0,0,0.55)"
          }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-lg text-cyan-300">
                <Building2 className="h-5 w-5 md:h-6 md:w-6" />
                {item.company}
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
            </div>
            <div className="flex flex-col items-start gap-1 text-[0.90rem] font-medium text-sky-200 sm:items-end">
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {item.dates}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {item.location}
              </span>
            </div>
          </div>
          <ul className="mt-4 space-y-3 text-base text-slate-200">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="leading-relaxed text-justify">
                {bullet}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
