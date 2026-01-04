
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SkillGrid, type Skill } from "@/components/skill-card";
import { ProjectCard } from "@/components/project-card";
import { ExperienceList, type Experience } from "@/components/experience";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { projects } from "@/data/projects";

const experiences: Experience[] = [
  {
    company: "Northeastern University",
    location: "Boston, MA",
    role: "Teaching Assistant",
    dates: "May 2025 - Present",
    bullets: [
      "Supported 240+ students in Programming with Data (DS 2000) and Intermediate Programming with Data (DS 2500) across Python, OOP, APIs, data analysis, debugging, and applied ML.",
      "Led labs and office hours on Python, web scraping, APIs, visualization, regression, classification, and clustering.",
      "Built hands-on coding exercises with real-world datasets, improving project adoption and engagement."
    ]
  },
  {
    company: "Accenture Solutions Pvt Ltd",
    location: "Bengaluru, India",
    role: "Advanced App Engineering Associate",
    dates: "Dec 2022 - Jun 2024",
    bullets: [
      "Engineered data-centric web apps with Java, Spring, and Hibernate; refactored queries to cut latency by 15%.",
      "Built and maintained RESTful APIs, integrated Kafka for real-time streaming, and managed MySQL/MongoDB datasets (2M+ records).",
      "Authored 300+ unit/integration tests (JUnit/Mockito), automated CI/CD to 95% coverage, reducing prod defects by 40%."
    ]
  },
  {
    company: "Whitetail Technologies",
    location: "Bengaluru, India",
    role: "Data Scientist Intern",
    dates: "Jan 2022 - Nov 2022",
    bullets: [
      "Deployed ML models for classification, forecasting, and time series with >88% accuracy and 0.85 F1 via feature engineering and hyperparameter tuning.",
      "Automated ETL pipelines with MLOps practices (experiment tracking, Docker, CI/CD), reducing preprocessing time by 60% and deployment cycles by 40%.",
      "Built Tableau dashboards that cut reporting time by 20% and improved data-driven decision-making."
    ]
  }
];

const education: Experience[] = [
  {
    company: "Northeastern University",
    location: "Boston, MA",
    role: "M.S. Data Science",
    dates: "Sep 2024 - May 2026 (Expected)",
    bullets: [
      "Algorithms, Data Management & Processing, Large Language Models, Supervised ML, NLP, DBMS, Data Mining in Engineering."
    ]
  },
  {
    company: "B.N.M Institute Of Technology (VTU)",
    location: "Bengaluru, India",
    role: "B.E. Electronics & Communication Engineering",
    dates: "Aug 2018 - May 2022",
    bullets: []
  }
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:chandrashekhar.r@northeastern.edu",
    icon: Mail
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohan-chandrashekhar-900b03212/",
    icon: Linkedin
  },
  {
    label: "GitHub",
    href: "https://github.com/Rohanc0412",
    icon: Github
  }
];

export default function HomePage() {
  return (
    <div className="space-y-6 pb-12">
      <Hero />

      <div id="experience" className="scroll-mt-28">
        <Section
          eyebrow="Experience Timeline"
          title="Experience"
          description="Roles and impact across teaching, engineering, and data science."
        >
          <ExperienceList items={experiences} />
        </Section>
      </div>

      <div id="education" className="scroll-mt-28">
        <Section
          eyebrow="Education"
          title="Academic background"
          description="Formal training in data science, machine learning, and engineering fundamentals."
        >
          <ExperienceList items={education} />
        </Section>
      </div>

      <Section
        eyebrow="Featured Work"
        title="Selected projects"
        description="Case studies that span analytics, retrieval augmented generation, forecasting, and recommender systems."
        className="mt-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <SkillsSection />

      <div id="contact" className="scroll-mt-28">
        <Section
          eyebrow="Contact"
          title="Let's connect"
          description="Reach out for collaborations, speaking, or ML/AI projects."
        >
          <div className="flex flex-wrap gap-3">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="group relative inline-flex items-center gap-3 rounded-full border border-cyan-300/40 bg-slate-950/70 px-6 py-3 text-white text-base shadow-[0_14px_34px_-18px_rgba(34,211,238,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-22px_rgba(94,234,212,0.55)] focus:outline-none focus:ring-2 focus:ring-cyan-200/60 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.12),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.15),transparent_40%)] opacity-80 transition group-hover:opacity-100" />
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/60 to-blue-500/60 text-white shadow-[0_10px_24px_-14px_rgba(14,165,233,0.65)] ring-1 ring-white/20">
                  <Icon size={18} />
                </span>
                <span className="relative text-base font-semibold tracking-tight">{label}</span>
                <span className="relative ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-white ring-1 ring-cyan-200/40 transition group-hover:translate-x-0.5 group-hover:bg-cyan-400/25">
                  <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
