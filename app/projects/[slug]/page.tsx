import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { MetricsChart } from "@/components/metrics-chart";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project not found"
    };
  }
  return {
    title: `${project.title} | Case Study`,
    description: project.problem
  };
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <Link
        href="/projects"
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <PageHeader title={project.title} description={project.problem} />

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <InfoCard title="Dataset" content={project.dataset} />
        <InfoCard title="Impact" content={project.impact} />
        <InfoCard
          title="Stack"
          content={project.stack.slice(0, 5).join(" • ")}
          muted
        />
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Architecture & pipeline</h3>
          <ul className="space-y-3 text-slate-300">
            {project.architecture.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Results</h3>
          <p className="text-slate-300">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href={project.repo} icon={<Github size={16} />} label="GitHub" />
            <LinkButton
              href={project.demo}
              icon={<ExternalLink size={16} />}
              label="Live demo"
              intent="secondary"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Model metrics</h3>
          <span className="text-sm text-slate-400">
            RMSE / MAE / Accuracy depending on project
          </span>
        </div>
        <MetricsChart data={project.metrics} />
      </div>
    </div>
  );
}

function InfoCard({
  title,
  content,
  muted
}: {
  title: string;
  content: string;
  muted?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">{title}</div>
      <p className={cn("mt-2 text-sm text-slate-200", muted && "text-slate-400")}>
        {content}
      </p>
    </div>
  );
}

function LinkButton({
  href,
  icon,
  label,
  intent = "primary"
}: {
  href: string;
  icon: ReactNode;
  label: string;
  intent?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
        intent === "primary"
          ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-glow"
          : "border border-white/15 bg-white/5 text-slate-100"
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
