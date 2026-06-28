/**
 * Smooth-scrolls to the element with the given id, if it exists.
 * Shared by Navbar (nav links + "Hire Me") and Hero (CTA buttons).
 */
export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
