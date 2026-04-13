"use client";

import { Timeline } from "../../components/neonblade-ui/timeline";
import { CONFIG } from "./config";
import type { Theme } from "./themes";

interface ExperienceSectionProps {
  T: Theme;
}

export function ExperienceSection({ T }: ExperienceSectionProps) {
  return (
    <section id="experience" className="px-6 py-12 md:py-24 lg:py-32 relative">
      {/* Separator line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${T.separators[1]}4d, transparent)`,
        }}
      />

      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs font-orbitron tracking-widest uppercase mb-4"
          style={{ color: T.primary }}
        >
          03 · Experience
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-14">
          Work History
        </h2>

        <Timeline
          items={CONFIG.experience}
          color={T.primary}
          variant="glow"
          dotAnim="pulse"
          lineStyle="glow"
          animate
        />
      </div>
    </section>
  );
}
