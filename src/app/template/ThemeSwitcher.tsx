"use client";

import { useEffect, useRef, useState } from "react";
import { THEMES } from "./themes";

interface ThemeSwitcherProps {
  themeId: string;
  onThemeChange: (id: string) => void;
}

export function ThemeSwitcher({ themeId, onThemeChange }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const T = THEMES[themeId];

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end"
    >
      {/* ── Expanded panel ─────────────────────────────────────────────────── */}
      <div
        className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "360px" : "0px",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(6px)",
          pointerEvents: isOpen ? "auto" : "none",
          marginBottom: isOpen ? "6px" : "0px",
        }}
      >
        <div
          className="rounded-sm w-[210px]"
          style={{
            border: `1px solid ${T.primary}33`,
            background: "rgba(4,4,6,0.92)",
            backdropFilter: "blur(20px)",
            boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px ${T.primary}11`,
          }}
        >
          {/* Panel header */}
          <div
            className="px-4 py-2.5 flex items-center gap-2"
            style={{
              borderBottom: `1px solid ${T.primary}18`,
            }}
          >
            {/* Decorative corner accent lines */}
            <span
              className="font-orbitron text-[8px] tracking-[0.25em] uppercase select-none"
              style={{ color: `${T.primary}66` }}
            >
              // Theme
            </span>
            <span
              className="flex-1 h-px"
              style={{
                background: `linear-gradient(to right, ${T.primary}33, transparent)`,
              }}
            />
          </div>

          {/* Theme rows */}
          {Object.values(THEMES).map((theme) => {
            const isActive = theme.id === themeId;
            return (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 transition-all duration-150 group"
                style={{
                  background: isActive
                    ? `color-mix(in srgb, ${theme.primary} 9%, transparent)`
                    : "transparent",
                  borderLeft: isActive
                    ? `2px solid ${theme.primary}`
                    : "2px solid transparent",
                }}
              >
                {/* Swatches */}
                <span className="flex gap-1 shrink-0">
                  {theme.swatches.map((s) => (
                    <span
                      key={s}
                      className="w-[7px] h-[7px] rounded-full inline-block transition-all duration-150"
                      style={{
                        backgroundColor: s,
                        boxShadow: isActive ? `0 0 6px ${s}` : `0 0 2px ${s}88`,
                      }}
                    />
                  ))}
                  {/* Pad single-swatch themes so columns align */}
                  {theme.swatches.length === 1 && (
                    <span className="w-[7px] h-[7px] inline-block" />
                  )}
                </span>

                {/* Label */}
                <span
                  className="font-orbitron text-[9.5px] tracking-wider uppercase flex-1 text-left transition-colors duration-150"
                  style={{
                    color: isActive ? theme.primary : "rgba(255,255,255,0.38)",
                  }}
                >
                  {theme.label}
                </span>

                {/* Active marker */}
                {isActive ? (
                  <span
                    className="text-[10px] shrink-0 leading-none"
                    style={{ color: theme.primary }}
                  >
                    ✦
                  </span>
                ) : (
                  <span className="w-[10px] shrink-0 inline-block" />
                )}
              </button>
            );
          })}

          {/* Panel footer accent */}
          <div
            className="h-px mx-4 mb-1"
            style={{
              background: `linear-gradient(to right, transparent, ${T.primary}22, transparent)`,
            }}
          />
        </div>
      </div>

      {/* ── Trigger button ──────────────────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2.5 px-4 py-2.5 font-orbitron text-[9.5px] tracking-widest uppercase transition-all duration-200 select-none"
        // style={{
        //   border: `1px solid ${T.primary}`,
        //   background: `color-mix(in srgb, ${T.primary} 12%, #000)`,
        //   color: T.primary,
        //   boxShadow: isOpen
        //     ? `0 0 18px ${T.primary}55, 0 0 4px ${T.primary}88, inset 0 0 10px ${T.primary}14`
        //     : `0 0 10px ${T.primary}33, inset 0 0 6px ${T.primary}0a`,
        //   backdropFilter: "blur(8px)",
        //   // Corner-cut shape (matches NeonBlade UI aesthetic)
        //   clipPath:
        //     "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
        // }}
      >
        {/* Active theme swatches */}
        <span className="flex gap-1 shrink-0">
          {T.swatches.map((s) => (
            <span
              key={s}
              className="w-[8px] h-[8px] rounded-full inline-block"
              style={{ backgroundColor: s, boxShadow: `0 0 6px ${s}` }}
            />
          ))}
        </span>

        {/* Active label */}
        <span className="leading-none">{T.label}</span>

        {/* Chevron — rotates when open */}
        <svg
          viewBox="0 0 10 6"
          className="w-[9px] h-[6px] shrink-0 transition-transform duration-300 ml-0.5"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            fill: T.primary,
          }}
        >
          <path d="M0 0 L5 6 L10 0Z" />
        </svg>
      </button>
    </div>
  );
}
