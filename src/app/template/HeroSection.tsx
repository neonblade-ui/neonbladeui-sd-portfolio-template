"use client";

import { Badge } from "../../components/neonblade-ui/badge";
import { CornerCutButton } from "../../components/neonblade-ui/corner-cut-button";
import { DatalinesWithGrid } from "../../components/neonblade-ui/datalines-with-grid";
import { GlitchText } from "../../components/neonblade-ui/glitch-text";
import { CONFIG } from "./config";
import type { Theme } from "./themes";

interface HeroSectionProps {
  T: Theme;
}

export function HeroSection({ T }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background data-lines */}
      <div className="absolute inset-0 pointer-events-none">
        <DatalinesWithGrid
          overlay
          lineColor={T.lineColor}
          shadowColor={T.lineColor}
          bgGridColor={T.gridColor}
          maxLines={12}
          baseSpeed={2}
        />
      </div>

      {/* Radial vignette  */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, ${T.bg} 100%)`,
          opacity: 0.8,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <Badge color={T.primary} dot="pulse" variant="outline" glow>
            Available for work
          </Badge>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold font-orbitron tracking-tight mb-4 leading-none">
          <GlitchText
            text={CONFIG.name}
            mode="hover"
            intensity="subtle"
            neon
            glowColor={T.primary}
            colorA={T.glitchA}
            colorB={T.glitchB}
          >
            {CONFIG.name}
          </GlitchText>
        </h1>

        {/* Title */}
        <p
          className="text-xl md:text-2xl font-orbitron text-transparent bg-clip-text mb-6 tracking-wider"
          style={{
            backgroundImage: `linear-gradient(to right, ${T.primary}, ${T.secondary})`,
          }}
        >
          {CONFIG.title}
        </p>

        {/* Tagline */}
        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          {CONFIG.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects">
            <CornerCutButton
              color={T.primary}
              showArrow
              hoverEffect="glow"
              size="lg"
            >
              View Projects
            </CornerCutButton>
          </a>
          <a href={CONFIG.resumeUrl} target="_blank" rel="noopener noreferrer">
            <CornerCutButton
              color={T.secondary}
              variant="ghost"
              hoverEffect="pulse"
              size="lg"
            >
              Download Resume
            </CornerCutButton>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-xs font-orbitron tracking-widest uppercase">
          Scroll
        </span>
        <span
          className="w-px h-10"
          style={{
            background: `linear-gradient(to bottom, ${T.primary}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}
