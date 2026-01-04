"use client";

import { Section } from "@/components/section";
import { SkillsCanvas } from "./SkillsCanvas";

export function SkillsSection() {
  return (
    <Section
      eyebrow="Skills"
      title="Technical stack"
      description="Technologies I use to design, build, and deploy production systems."
    >
      <div className="mx-auto flex h-[540px] w-full max-w-screen-md items-start justify-center -mt-16 pt-0 md:h-[820px] md:max-w-screen-xl md:-mt-16 md:pt-2">
        <SkillsCanvas />
      </div>
    </Section>
  );
}
