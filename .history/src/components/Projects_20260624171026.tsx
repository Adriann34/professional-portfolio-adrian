import React, { useState } from "react";
import { projects, Project } from "../data/content";
import { useFadeIn } from "../hooks/useFadeIn";

const ProjectVisual: React.FC<{ project: Project }> = ({ project }) => {
  const [mainError, setMainError] = useState(false);
  const [secondaryError, setSecondaryError] = useState(false);

  return (
    <div
      className="project-visual"
      style={{ background: project.visualBackground }}
    >
      <div
        className="project-glow"
        style={{ background: project.glowColor }}
      />
      {mainError ? (
        <div
          className="project-visual-fallback"
          style={{
            background: `${project.glowColor}12`,
            border: `1px solid ${project.glowColor}26`,
          }}
        >
          {project.title} Preview
        </div>
      ) : (
        <div className="project-mockup-stack">
          <img
            className="main-shot"
            src={project.mainImage}
            alt={project.mainImageAlt}
            onError={() => setMainError(true)}
          />
          {project.secondaryImage && !secondaryError && (
            <img
              className="secondary-shot"
              src={project.secondaryImage}
              alt={project.secondaryImageAlt}
              onError={() => setSecondaryError(true)}
            />
          )}
        </div>
      )}
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; delay: string }> = ({
  project,
  delay,
}) => {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <div className="project-card fade-in" style={{ transitionDelay: delay }} ref={ref}>
      <div className="project-inner">
        <ProjectVisual project={project} />
        <div className="project-info">
          <div className="project-number">{project.number}</div>
          <div
            className="project-category"
            style={{ color: project.accentColor }}
          >
            {project.category}
          </div>
          <div className="project-title">{project.title}</div>
          <p className="project-desc">{project.description}</p>
          <ul className="project-highlights">
            {project.highlights.map((h) => (
              <li key={h.text}>
                <span
                  className="highlight-dot"
                  style={{ background: project.accentColor }}
                />
                {h.text}
              </li>
            ))}
          </ul>
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span className="stack-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const titleRef = useFadeIn<HTMLDivElement>();

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="fade-in" ref={titleRef}>
          <div className="section-eyebrow">Portfolio</div>
          <div className="section-title">Featured Projects</div>
        </div>
        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={`${i * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
