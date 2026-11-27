"use client";

import { useEffect } from "react";

/**
 * Marks `[data-reveal]` elements as revealed when they scroll into view; the
 * motion itself lives in globals.css. Elements already on screen are marked
 * "instant" so they never flash hidden.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const elements = [
      ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    const pending = elements.filter((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.dataset.revealed = "instant";
        return false;
      }
      return true;
    });

    root.dataset.revealReady = "";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "in";
          observer.unobserve(entry.target);
        }
      },
      // The huge top margin also catches elements a fast scroll jumped past.
      { rootMargin: "100000px 0px -12% 0px" },
    );
    pending.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      delete root.dataset.revealReady;
    };
  }, []);

  return null;
}
