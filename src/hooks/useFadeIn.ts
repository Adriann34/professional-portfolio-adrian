import { useEffect, useRef } from "react";

/**
 * Replicates the original .fade-in / .visible IntersectionObserver behavior.
 * Attach the returned ref to any element; "fade-in" class should already be
 * present in the element's className, this hook just toggles "visible".
 */
export function useFadeIn<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
