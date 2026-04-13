"use client";

import { AccentFrame } from "../../components/neonblade-ui/accent-frame";
import { Badge } from "../../components/neonblade-ui/badge";
import { CONFIG } from "./config";
import type { Theme } from "./themes";

interface AboutSectionProps {
  T: Theme;
}

export function AboutSection({ T }: AboutSectionProps) {
  const skills = CONFIG.skillLabels.map((label, i) => ({
    label,
    color: T.skillColors[i % 2],
  }));

  return (
    <section id="about" className="px-6 py-12 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-orbitron tracking-widest uppercase mb-4"
          style={{ color: T.primary }}
        >
          01 · About
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <div>
            <AccentFrame
              color={T.primary}
              colorB={T.secondary}
              mode="quad"
              hoverEffect="glow"
              bgVariant="subtle"
              className="p-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-6 leading-tight">
                Building things that{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${T.primary}, ${T.secondary})`,
                  }}
                >
                  matter
                </span>
              </h2>
              <p className="text-white/60 leading-loose mb-4">
                I&apos;m a full-stack engineer with 6+ years of experience
                building scalable web applications. I care deeply about
                developer experience, performance, and clean architecture.
              </p>
              <p className="text-white/60 leading-loose">
                When I&apos;m not coding, I contribute to open-source projects,
                write about system design, and tinker with Raspberry Pi
                experiments.
              </p>
            </AccentFrame>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-sm font-orbitron tracking-widest text-white/40 uppercase mb-6">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill.label}
                  color={skill.color}
                  variant="outline"
                  size="md"
                  shape="corner-cut"
                >
                  {skill.label}
                </Badge>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-white/10">
              {[
                { value: "6+", label: "Years Exp." },
                { value: "30+", label: "Projects" },
                { value: "1.2k", label: "GitHub Stars" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-3xl font-bold font-orbitron text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${T.primary}, ${T.secondary})`,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-orbitron tracking-widest text-white/40 uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
