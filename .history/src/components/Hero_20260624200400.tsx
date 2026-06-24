import React, { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";

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
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
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
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
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
            style={{ transitionDelay: "0.15s" }}
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
                <div className="hcard-value hcard-accent">2+</div>
                <div className="hcard-sub">Shipped products</div>
              </div>
              <div className="hcard">
                <div className="hcard-label">Experience</div>
                <div className="hcard-value hcard-accent2">2+</div>
                <div className="hcard-sub">Years building</div>
              </div>
              <div className="hcard hcard-wide">
                <div className="hcard-label">Primary stack</div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginTop: 10,
                  }}
                >
                  <span
                    className="stack-chip"
                    style={{
                      background: "rgba(91,127,255,0.12)",
                      color: "var(--accent1)",
                      border: "1px solid rgba(91,127,255,0.2)",
                    }}
                  >
                    React
                  </span>
                  <span
                    className="stack-chip"
                    style={{
                      background: "rgba(91,127,255,0.12)",
                      color: "var(--accent1)",
                      border: "1px solid rgba(91,127,255,0.2)",
                    }}
                  >
                    TypeScript
                  </span>
                  <span
                    className="stack-chip"
                    style={{
                      background: "rgba(162,89,255,0.12)",
                      color: "var(--accent2)",
                      border: "1px solid rgba(162,89,255,0.2)",
                    }}
                  >
                    Tailwind
                  </span>
                                    <span
                    className="stack-chip"
                    style={{
                      background: "rgba(162,89,255,0.12)",
                      color: "var(--accent2)",
                      border: "1px solid rgba(162,89,255,0.2)",
                    }}
                  >
                    PHP
                  </span>
                  <span
                    className="stack-chip"
                    style={{
                      background: "rgba(0,212,170,0.1)",
                      color: "var(--accent3)",
                      border: "1px solid rgba(0,212,170,0.2)",
                    }}
                  >
                    Firebase
                  </span>
                  <span
                    className="stack-chip"
                    style={{
                      background: "rgba(0,212,170,0.1)",
                      color: "var(--accent3)",
                      border: "1px solid rgba(0,212,170,0.2)",
                    }}
                  >
                    Node.js
                  </span>
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
