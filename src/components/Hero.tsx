import React, { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { scrollToSection } from "../utils/scroll";

// Chip color is one of three accent palettes; class names map to the
// .chip-accent1/2/3 rules in index.css so chips stay visually grouped by layer.
type ChipAccent = "accent1" | "accent2" | "accent3";

const STACK_CHIPS: { label: string; accent: ChipAccent }[] = [
  { label: "React", accent: "accent1" },
  { label: "TypeScript", accent: "accent1" },
  { label: "Tailwind", accent: "accent2" },
  { label: "PHP", accent: "accent2" },
  { label: "Firebase", accent: "accent3" },
];

const Hero: React.FC = () => {
  const leftRef = useFadeIn<HTMLDivElement>();
  const rightRef = useFadeIn<HTMLDivElement>();
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="hero-grid">
          <div className="fade-in" ref={leftRef}>
            <div className="hero-availability">
              <div className="hero-availability-dot" />
              Available for work
            </div>
            <div className="hero-name">
              Adrian
              <br />
              <span className="hero-name-accent">Tan</span>
            </div>
            <div className="hero-role">Full Stack Developer</div>
            <p className="hero-desc">
              Building full-stack web applications with React, TypeScript,
              Tailwind, and modern backend technologies. Focused on
              delivering visually polished, seamless, and user-friendly
              experiences.
            </p>
            <div className="hero-actions">
              <a
                href="#projects"
                className="btn-grad"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="m8 21 4-4 4 4" />
                  <path d="M12 17v4" />
                </svg>
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Dashboard-style side panels */}
          <div
            className="hero-right fade-in"
            style={{ "--delay": "0.15s" } as React.CSSProperties}
            ref={rightRef}
          >
            <div className="profile-card">
              <div className="avatar">
                {avatarError ? (
                  <span className="avatar-initials">AT</span>
                ) : (
                  <img
                    src="/images/profile-photo.png"
                    alt="Adrian Tan"
                    onError={() => setAvatarError(true)}
                  />
                )}
              </div>
              <div>
                <div className="profile-name">Adrian Tan</div>
                <div className="profile-title">Full Stack Developer</div>
              </div>
              <div className="profile-dot" />
            </div>

            <div className="hero-cards-grid">
              <div className="hcard">
                <div className="hcard-label">Projects</div>
                <div className="hcard-value hcard-accent">2+ Projects</div>
                <div className="hcard-sub">Shipped products</div>
              </div>
              <div className="hcard">
                <div className="hcard-label">Experience</div>
                <div className="hcard-value hcard-accent2">1+ Years</div>
                <div className="hcard-sub">Years building</div>
              </div>
              <div className="hcard hcard-wide">
                <div className="hcard-label">Primary stack</div>
                <div className="stack-chip-row">
                  {STACK_CHIPS.map((chip) => (
                    <span
                      key={chip.label}
                      className={`stack-chip chip-${chip.accent}`}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
