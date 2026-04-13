"use client";

/**
 * NeonBlade UI â€” Software Developer Portfolio Template
 * â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 * Free & open-source. Built with NeonBlade UI components.
 * Customise src/app/template/config.tsx to make it yours.
 * Switch themes in themes.ts or via the floating ThemeSwitcher.
 *
 * Sections: Hero Â· About Â· Projects Â· Experience Â· Contact Â· Footer
 */

import { useState } from "react";
import { NavBar } from "../../components/neonblade-ui/navbar";
import { Footer } from "../../components/neonblade-ui/footer";
import { CONFIG } from "./config";
import { THEMES } from "./themes";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactSection } from "./ContactSection";

// ─── TEMPLATE ──────────────────────────────────────────────────────────────────

export default function SoftwareDeveloperPortfolio() {
  const [themeId, setThemeId] = useState<keyof typeof THEMES>(
    CONFIG.defaultTheme,
  );
  const T = THEMES[themeId];

  return (
    <div
      className="min-h-screen text-white antialiased"
      style={{ backgroundColor: T.bg }}
    >
      <ThemeSwitcher
        themeId={themeId}
        onThemeChange={(id) => setThemeId(id as keyof typeof THEMES)}
      />

      <NavBar
        variant="standard"
        position="fixed"
        transparency="transparent"
        color={T.primary}
        logoText={CONFIG.name}
        scrollEffect
        items={CONFIG.navItems}
        navAlign="right"
      />

      <HeroSection T={T} />
      <AboutSection T={T} />
      <ProjectsSection T={T} />
      <ExperienceSection T={T} />
      <ContactSection T={T} />

      <Footer
        variant="minimal"
        color={T.primary}
        logoText={CONFIG.name}
        navLinks={[
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Experience", href: "#experience" },
          { label: "Contact", href: "#contact" },
        ]}
        socialLinks={CONFIG.socialLinks}
        copyright={`© {year} ${CONFIG.name} · Built with NeonBlade UI`}
      />
    </div>
  );
}
