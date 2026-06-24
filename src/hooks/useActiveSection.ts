import { useEffect, useState } from "react";

/**
 * Tracks which section is currently active based on scroll position,
 * replicating the original setActive() logic.
 */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const setFromScroll = () => {
      let current = "";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          current = id;
        }
      });
      if (current) setActive(current);
    };

    setFromScroll();
    window.addEventListener("scroll", setFromScroll, { passive: true });
    return () => window.removeEventListener("scroll", setFromScroll);
  }, [sectionIds]);

  return active;
}
