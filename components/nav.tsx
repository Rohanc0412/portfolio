"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, MoreHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" }
];

export function Nav({ className }: { className?: string }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    pathname === "/" ? "hero" : null
  );

  // Highlight based on section visibility for hash links, otherwise fallback to path.
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionIds = ["hero", "experience", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        let topEntry: IntersectionObserverEntry | null = null;
        entries.forEach((entry) => {
          if (!topEntry || entry.intersectionRatio > topEntry.intersectionRatio) {
            topEntry = entry;
          }
        });
        if (topEntry?.isIntersecting) {
          setActiveSection(topEntry.target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    const [normalizedHref, hash] = href.split("#");
    if (hash) {
      // Only highlight section links when on home and the section is active.
      return pathname === "/" && activeSection === hash;
    }
    return normalizedHref === "/"
      ? pathname === "/"
      : pathname.startsWith(normalizedHref);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-white/5 bg-slate-900/35 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:px-6 md:py-5">
        <div className="flex items-center justify-between gap-4 md:justify-self-start">
          <Link href="/" className="whitespace-nowrap text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Rohan Chandrashekhar
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="hidden items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 hover:text-white [@media(max-width:320px)]:flex"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <MoreHorizontal size={18} />}
          </button>
        </div>
        <nav className="hidden items-center gap-5 rounded-full border border-white/10 bg-slate-900/40 px-5 py-2.5 text-base text-slate-200 shadow-2xl shadow-black/40 backdrop-blur md:flex md:justify-self-center">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-full px-2 py-1 transition hover:text-white",
                active && "bg-white/10 px-3 py-1.5 text-white shadow-glow"
              )}
            >
              {link.label}
            </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex md:justify-self-end">
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com/Rohanc0412"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 hover:text-white"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href="https://www.linkedin.com/in/rohan-chandrashekhar-900b03212/"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 hover:text-white"
          >
            <Linkedin size={20} />
          </motion.a>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:hidden [@media(max-width:320px)]:hidden">
        {links.map((link) => {
          const active = isActive(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-full px-2 py-1 text-sm text-slate-300 hover:text-white",
                active && "bg-white/10 px-3 py-1.5 text-white"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      {mobileOpen && (
        <div className="[@media(max-width:320px)]:block hidden">
          <div className="mx-auto w-full max-w-6xl px-4 pb-4">
            <div className="grid gap-2 rounded-2xl border border-white/10 bg-slate-900/60 p-3 shadow-2xl shadow-black/50 backdrop-blur">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm text-slate-300 hover:text-white",
                      active && "bg-white/10 text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-2 pt-1">
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://github.com/Rohanc0412"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 hover:text-white"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://www.linkedin.com/in/rohan-chandrashekhar-900b03212/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 hover:text-white"
                >
                  <Linkedin size={18} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
