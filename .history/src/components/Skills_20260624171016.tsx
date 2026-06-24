import React from "react";
import { skillCards } from "../data/content";
import { useFadeIn } from "../hooks/useFadeIn";

const ICONS: Record<string, React.ReactNode> = {
  Frontend: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5b7fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </svg>
  ),
  Backend: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#a259ff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="m8 21 4-4 4 4" />
      <path d="M12 17v4" />
      <path d="m7 8 2 2-2 2" />
      <line x1="11" y1="10" x2="15" y2="10" />
    </svg>
  ),
  "Database & Cloud": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00d4aa"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
};

const SkillCardItem: React.FC<{
  card: (typeof skillCards)[number];
  delay: string;
}> = ({ card, delay }) => {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <div className="skill-card fade-in" style={{ transitionDelay: delay }} ref={ref}>
      <div className="skill-icon-wrap" style={{ background: card.iconBg }}>
        {ICONS[card.name]}
      </div>
      <div className="skill-category">{card.category}</div>
      <div className="skill-name">{card.name}</div>
      <div className="skill-tags">
        {card.tags.map((tag) => (
          <span
            key={tag.label}
            className="skill-tag"
            style={{ borderColor: `${card.iconColor}4d`, color: card.iconColor }}
          >
            {tag.label}
          </span>
        ))}
      </div>
      {card.proficiency !== undefined && (
        <div className="progress-wrap" style={{ marginTop: 20 }}>
          <div className="progress-label">
            <span>Proficiency</span>
            <span>{card.proficiency}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${card.proficiency}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Skills: React.FC = () => {
  const titleRef = useFadeIn<HTMLDivElement>();

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="fade-in" ref={titleRef}>
          <div className="section-eyebrow">Expertise</div>
          <div className="section-title">Skills &amp; Technologies</div>
        </div>
        <div className="skills-grid">
          {skillCards.map((card, i) => (
            <SkillCardItem key={card.name} card={card} delay={`${i * 0.05}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
