// ─── Theme Types & Registry ────────────────────────────────────────────────────

export interface Theme {
  id: string;
  /** Display name shown in the switcher */
  label: string;
  /** Swatch hex colors shown as glowing dots in the switcher */
  swatches: string[];
  /** Page background color */
  bg: string;
  /** Primary accent — Navbar, Timeline, primary CTAs, section labels */
  primary: string;
  /** Secondary accent — secondary CTAs, opposite AccentFrame corners */
  secondary: string;
  /** GlitchText channel A color */
  glitchA: string;
  /** GlitchText channel B color */
  glitchB: string;
  /** DatalinesWithGrid line + shadow color */
  lineColor: string;
  /** DatalinesWithGrid grid cell border color */
  gridColor: string;
  /** Skills badge colors — alternates [primary, secondary] by index */
  skillColors: [string, string];
  /** Project card [colorA, colorB] pairs — one per card */
  projectColors: [[string, string], [string, string], [string, string]];
  /** Section-separator glow hex — [projects, experience, contact] */
  separators: [string, string, string];
}

export const THEMES: Record<string, Theme> = {
  M1: {
    id: "M1",
    label: "Mint + Amber",
    swatches: ["#7affb2", "#ffb700"],
    bg: "#040a05",
    primary: "#7affb2",
    secondary: "#ffb700",
    glitchA: "#ffb700",
    glitchB: "#7affb2",
    lineColor: "#7affb2",
    gridColor: "rgba(122,255,178,0.04)",
    skillColors: ["#7affb2", "#ffb700"],
    projectColors: [
      ["#7affb2", "#ffb700"],
      ["#ffb700", "#7affb2"],
      ["#7affb2", "#ffb700"],
    ],
    separators: ["#7affb2", "#ffb700", "#7affb2"],
  },

  S1: {
    id: "S1",
    label: "Phosphor Green",
    swatches: ["#39ff6e"],
    bg: "#020a02",
    primary: "#39ff6e",
    secondary: "#39ff6e",
    glitchA: "#00ff41",
    glitchB: "#ccff00",
    lineColor: "#39ff6e",
    gridColor: "rgba(57,255,110,0.04)",
    skillColors: ["#39ff6e", "#39ff6e"],
    projectColors: [
      ["#39ff6e", "#00ff41"],
      ["#00ff41", "#39ff6e"],
      ["#39ff6e", "#00ff41"],
    ],
    separators: ["#39ff6e", "#39ff6e", "#39ff6e"],
  },

  M3: {
    id: "M3",
    label: "Violet + Acid",
    swatches: ["#a259ff", "#d4ff00"],
    bg: "#08050f",
    primary: "#a259ff",
    secondary: "#d4ff00",
    glitchA: "#d4ff00",
    glitchB: "#a259ff",
    lineColor: "#a259ff",
    gridColor: "rgba(162,89,255,0.04)",
    skillColors: ["#a259ff", "#d4ff00"],
    projectColors: [
      ["#a259ff", "#d4ff00"],
      ["#d4ff00", "#a259ff"],
      ["#a259ff", "#d4ff00"],
    ],
    separators: ["#a259ff", "#d4ff00", "#a259ff"],
  },

  S5: {
    id: "S5",
    label: "Lava White",
    swatches: ["#e8e8e8"],
    bg: "#050505",
    primary: "#e8e8e8",
    secondary: "#e8e8e8",
    glitchA: "#ffffff",
    glitchB: "#aaaaaa",
    lineColor: "#c8c8c8",
    gridColor: "rgba(200,200,200,0.04)",
    skillColors: ["#e8e8e8", "#aaaaaa"],
    projectColors: [
      ["#e8e8e8", "#aaaaaa"],
      ["#aaaaaa", "#e8e8e8"],
      ["#e8e8e8", "#aaaaaa"],
    ],
    separators: ["#e8e8e8", "#aaaaaa", "#e8e8e8"],
  },
};
