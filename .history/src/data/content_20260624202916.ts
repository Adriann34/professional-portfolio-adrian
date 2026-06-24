export interface SkillTag {
  label: string;
}

export interface SkillCard {
  category: string;
  name: string;
  iconColor: string;
  iconBg: string;
  tags: SkillTag[];
  proficiency?: number; // optional progress bar (0-100)
}

export interface ProjectHighlight {
  text: string;
}

export interface Project {
  number: string;
  category: string;
  accentColor: string;
  title: string;
  description: string;
  highlights: ProjectHighlight[];
  stack: string[];
  mainImage: string;
  mainImageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  glowColor: string;
  visualBackground: string;
}

export const skillCards: SkillCard[] = [
  {
    category: "Layer",
    name: "Frontend",
    iconColor: "#5b7fff",
    iconBg: "rgba(91,127,255,0.12)",
    tags: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "TSX" },
      { label: "Tailwind CSS" },
      { label: "Material UI" },
    ],
    proficiency: 90,
  },
  {
    category: "Layer",
    name: "Backend",
    iconColor: "#a259ff",
    iconBg: "rgba(162,89,255,0.12)",
    tags: [
      { label: "Node.js" },
      { label: "Express.js" },
      { label: "PHP" },
      { label: "CodeIgniter" },
    ],
    proficiency: 81,
  },
  {
    category: "Layer",
    name: "Database & Cloud",
    iconColor: "#00d4aa",
    iconBg: "rgba(0,212,170,0.1)",
    tags: [{ label: "MySQL" }, { label: "Firebase" }],
    proficiency: 76,
  },
];

export const projects: Project[] = [
  {
    number: "01 / 02",
    category: "Piano Learning App",
    accentColor: "#5b7fff",
    title: "SIMPU",
    description:
      "An interactive piano learning web app inspired by Duolingo. Features skill-level onboarding, note-reading exercises with rendered sheet music, real-time feedback with confetti animations, and per-lesson progress tracking.",
    highlights: [
      { text: "Skill-level onboarding — Novice, Proficient, Master" },
      { text: "Sheet music rendering with labeled pitch notation" },
      { text: "Real-time note detection with confetti on correct answer" },
      { text: "Progress bar and lesson completion tracking" },
    ],
    stack: ["React", "Tailwind CSS", "Firebase"],
    mainImage: "/images/simpu-main.png",
    mainImageAlt: "SIMPU login screen",
    secondaryImage: "/images/simpu-secondary.png",
    secondaryImageAlt: "SIMPU practice screen",
    glowColor: "#5b7fff",
    visualBackground:
      "linear-gradient(135deg, rgba(91,127,255,0.08), rgba(162,89,255,0.06))",
  },
  {
    number: "02 / 02",
    category: "Operations Platform",
    accentColor: "#00d4aa",
    title: "Taters Web Work System",
    description:
      "A full-stack 6Ms operations management platform for Taters. Covers inventory levels, daily manpower attendance, incident reports, machine logs, purchase requisitions, and efficiency metrics — all in a unified admin panel.",
    highlights: [
      { text: "Materials and inventory level management" },
      { text: "Daily manpower attendance and incident reporting" },
      { text: "Machine logs and efficiency metrics dashboards" },
      { text: "Purchase requisition and approval workflows" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "PHP", "CodeIgniter", "MySQL"],
    mainImage: "/images/taters-main.jpg",
    mainImageAlt: "Taters web system",
    glowColor: "#00d4aa",
    visualBackground:
      "linear-gradient(135deg, rgba(0,212,170,0.07), rgba(91,127,255,0.06))",
  },
];

export const contactInfo = {
  phone: "09395027112",
  email: "adriantanbusiness34@gmail.com",
  location: "156 Socorro, Las Piñas City",
  linkedinUrl: "https://www.linkedin.com/in/adrian-jude-tan/",
  linkedinHandle: "adrian-jude-tan",
};

export const navLinks = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];
