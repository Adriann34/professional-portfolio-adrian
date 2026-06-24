import React from "react";
import { navLinks } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.href);

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar: React.FC = () => {
  const active = useActiveSection(sectionIds);

  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-logo">AT.</span>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`nav-link${active === link.href ? " active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="nav-cta" onClick={() => scrollToSection("contact")}>
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
