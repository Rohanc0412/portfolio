import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Data Scientist & ML Engineer",
  description: "End-to-end ML, analytics, retrieval, forecasting, and recommender work."
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <PageHeader
        title="Projects"
        description="A collection of ML systems spanning analytics platforms, retrieval augmented generation, forecasting, and recommendations."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
