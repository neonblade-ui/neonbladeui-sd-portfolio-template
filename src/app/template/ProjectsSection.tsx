"use client";

import { Badge } from "../../components/neonblade-ui/badge";
import { CornerCutButton } from "../../components/neonblade-ui/corner-cut-button";
import { NeonGlowCornerCutCard } from "../../components/neonblade-ui/neon-glow-corner-cut-card";
import { CONFIG } from "./config";
import type { Theme } from "./themes";

interface ProjectsSectionProps {
  T: Theme;
}

export function ProjectsSection({ T }: ProjectsSectionProps) {
  return (
    <section id="projects" className="relative px-6 py-12 md:py-24 lg:py-32">
      {/* Subtle top separator line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${T.separators[0]}4d, transparent)`,
        }}
      />

      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-orbitron tracking-widest uppercase mb-4"
          style={{ color: T.primary }}
        >
          02 · Projects
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-4">
          Selected Work
        </h2>
        <p className="text-white/40 mb-14 max-w-lg">
          A handful of things I&apos;ve built or shipped. More on{" "}
          <a href="#" className="hover:underline" style={{ color: T.primary }}>
            GitHub
          </a>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.projects.map((project) => {
            const [colorA, colorB] = T.projectColors[project.projectIndex];
            return (
              <NeonGlowCornerCutCard
                key={project.title}
                title={project.title}
                description={project.description}
                colorA={colorA}
                colorB={colorB}
                hoverEffect="gradient"
                icon={project.icon}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} color={colorA} variant="ghost" size="xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CornerCutButton
                      color={colorA}
                      variant="outline"
                      size="xs"
                      cornerSize={8}
                      hoverEffect="glow"
                    >
                      GitHub
                    </CornerCutButton>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CornerCutButton
                      color={colorA}
                      variant="solid"
                      size="xs"
                      cornerSize={8}
                      hoverEffect="shine"
                      showArrow
                    >
                      Live
                    </CornerCutButton>
                  </a>
                </div>
              </NeonGlowCornerCutCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
