export interface SkillTag {
  label: string;
}

export interface SkillCard {
  category: string;
  name: string;
  iconColor: string;
  iconBg: string;
  tags: SkillTag[];
}

export interface ProjectHighlight {
  text: string;
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
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
  /** External link to a live, working deployment. When present, the card shows a
   *  "Live Demo" button that opens this URL in a new tab. */
  liveUrl?: string;
  /** Full set of preview images for the lightbox, in display order. When omitted,
   *  the lightbox falls back to just mainImage + secondaryImage. Lets a project show
   *  more than two screenshots without changing the compact main/secondary card visual. */
  gallery?: ProjectGalleryImage[];
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
      { label: "Tailwind CSS" },
    ],
  },
  {
    category: "Layer",
    name: "Backend",
    iconColor: "#a259ff",
    iconBg: "rgba(162,89,255,0.12)",
    tags: [
      { label: "PHP" },
      { label: "Cloudflare Workers" },
      { label: "Node.js" },
    ],
  },
  {
    category: "Layer",
    name: "Database & Cloud",
    iconColor: "#00d4aa",
    iconBg: "rgba(0,212,170,0.1)",
    tags: [{ label: "MySQL" }, { label: "Firebase" }, { label: "Firestore" }],
  },
];

export const projects: Project[] = [
  {
    number: "01 / 02",
    category: "Live-Service Dashboard System",
    accentColor: "#8b5cf6",
    title: "Gacha Command Center",
    description:
      "A live, two-service dashboard system: a React/TypeScript frontend with Firebase Auth + real-time Firestore sync, fed by a separate Cloudflare Worker that runs a scheduled ETL job aggregating data from multiple unauthenticated third-party APIs — with data-integrity guards, fallback resolution, and graceful degradation when upstream sources fail. Applied to Genshin Impact, a live service game (banners, events, resets, 100+ characters).",
    highlights: [
      { text: "Live banners, events, and version tracking via a scheduled Cloudflare Worker" },
      { text: "Character showcase synced using Enka API — builds, artifacts, and stats" },
      { text: "Personal Task tracker with deadlines, categories, and global search" },
      { text: "Smart reminders for banner/event/reset deadlines, fully configurable" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Firestore Rest API", "Cloudflare Workers"],
    mainImage: "/images/gcc-02-dashboard.png",
    mainImageAlt: "Gacha Command Center dashboard with banner, event, and reset countdowns",
    secondaryImage: "/images/gcc-01-signin.png",
    secondaryImageAlt: "Gacha Command Center sign-in screen",
    glowColor: "#8b5cf6",
    visualBackground:
      "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(34,211,238,0.07))",
    liveUrl: "https://gacha-command-center.web.app/",
    gallery: [
      { src: "/images/gcc-01-signin.png", alt: "Sign-in page" },
      { src: "/images/gcc-02-dashboard.png", alt: "Dashboard — version, banners, events, and reset countdowns" },
      { src: "/images/gcc-03-tracker.png", alt: "Tracker page — personal goal tracking" },
      { src: "/images/gcc-04-account.png", alt: "My Account page — live character showcase" },
      { src: "/images/gcc-05-settings.png", alt: "Settings — profile" },
      { src: "/images/gcc-06-settings-security.png", alt: "Settings — security" },
      { src: "/images/gcc-07-notifications.png", alt: "Notifications window" },
      { src: "/images/gcc-08-search.png", alt: "Global search bar" },
      { src: "/images/gcc-09-settings-notifications.png", alt: "Settings — notification preferences" },
    ],
  },
  {
    number: "02 / 02",
    category: "Operations Platform",
    accentColor: "#00d4aa",
    title: "Taters Web Work System",
    description:
      "A full-stack operations management platform for Taters, a food company in the Philippines, featuring a React/TypeScript frontend that communicates with a PHP (CodeIgniter) REST API via Axios and persists data in a MySQL database. Covers inventory levels, daily manpower attendance, incident reports, machine logs, purchase requisitions, and efficiency metrics in a unified admin panel.",
    highlights: [
      { text: "Materials and inventory level management" },
      { text: "Daily manpower attendance and incident reporting" },
      { text: "Machine logs and efficiency metrics dashboards" },
      { text: "Purchase requisition and approval workflows" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
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
  location: "Manila, Philippines",
  linkedinUrl: "https://www.linkedin.com/in/adrian-jude-tan/",
  linkedinHandle: "adrian-jude-tan",
  githubUrl: "https://github.com/Adriann34",
  githubHandle: "Adriann34",
  onlineJobsUrl: "https://v2.onlinejobs.ph/jobseekers/info/5118200",
  onlineJobsHandle: "Adrian Tan",
};

export const navLinks = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];
