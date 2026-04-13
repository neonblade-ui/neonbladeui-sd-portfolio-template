"use client";

import { AccentFrame } from "../../components/neonblade-ui/accent-frame";
import { CornerCutButton } from "../../components/neonblade-ui/corner-cut-button";
import { CONFIG } from "./config";
import type { Theme } from "./themes";

interface ContactSectionProps {
  T: Theme;
}

export function ContactSection({ T }: ContactSectionProps) {
  return (
    <section id="contact" className="px-6 py-12 md:py-24 lg:py-32 relative">
      {/* Separator line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${T.separators[2]}4d, transparent)`,
        }}
      />

      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-xs font-orbitron tracking-widest uppercase mb-4"
          style={{ color: T.primary }}
        >
          04 · Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-6">
          Let&apos;s build something
        </h2>
        <p className="text-white/50 text-lg mb-14 max-w-xl mx-auto">
          Open to senior / staff roles and interesting freelance projects. Send
          me a message and I&apos;ll get back within 24 hours.
        </p>

        <AccentFrame
          color={T.primary}
          colorB={T.secondary}
          mode="quad"
          hoverEffect="pulse"
          animated
          bgVariant="subtle"
          className="p-10 max-w-lg mx-auto"
        >
          <p className="font-orbitron text-2xl font-bold text-white mb-2">
            {CONFIG.name}
          </p>
          <p className="text-white/40 font-orbitron text-sm tracking-widest uppercase mb-8">
            {CONFIG.title} · {CONFIG.location}
          </p>

          <a href={`mailto:${CONFIG.email}`} className="block mb-6">
            <CornerCutButton
              color={T.primary}
              size="lg"
              corner="all"
              hoverEffect="glow"
              glowIntensity="high"
              showArrow
              className="w-full justify-center"
            >
              {CONFIG.email}
            </CornerCutButton>
          </a>

          <div className="flex gap-3 justify-center">
            {CONFIG.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CornerCutButton
                  color={T.secondary}
                  variant="outline"
                  size="sm"
                  cornerSize={10}
                  hoverEffect="glow"
                >
                  {link.label}
                </CornerCutButton>
              </a>
            ))}
          </div>
        </AccentFrame>
      </div>
    </section>
  );
}
