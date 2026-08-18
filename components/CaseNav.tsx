"use client";

import { useEffect, useState } from "react";

/** Floating table of contents for a long multi-project case study.
 * Anchors to each project heading and highlights the one in view. */
export function CaseNav({
  items,
}: {
  /** `number` is optional: a page with a handful of named sections lists
   * them by title alone. */
  items: { id: string; number?: string; title: string }[];
}) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!headings.length) return;

    // Treat the heading nearest the top of the viewport (but still above
    // the fold line) as current, so the marker tracks scrolling in both
    // directions without flicker.
    const onScroll = () => {
      const line = 160;
      let current = headings[0];
      for (const el of headings) {
        if (el.getBoundingClientRect().top <= line) current = el;
      }
      setActiveId(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <>
      {/* Wide screens: rail in the left margin. It needs ~224px of margin
          beside the 768px text column, so it only appears past 1216px. */}
      <nav
        aria-label="Project contents"
        className="pointer-events-none fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 min-[1216px]:block"
      >
        <ul className="pointer-events-auto space-y-2.5 border-l border-neutral-200 pl-4">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "true" : undefined}
                  className={`block max-w-[11rem] text-xs leading-snug transition-colors ${
                    active
                      ? "font-medium text-neutral-950"
                      : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  {item.number && (
                    <span className="tabular-nums">{item.number} </span>
                  )}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Narrower screens: the margin is gone, so the same contents ride
          under the site header as a scrollable strip. */}
      <nav
        aria-label="Project contents"
        className="sticky top-[63px] z-20 border-y border-neutral-200 bg-white/90 backdrop-blur min-[1216px]:hidden"
      >
        <ul className="mx-auto flex max-w-3xl gap-4 overflow-x-auto px-6 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "true" : undefined}
                  className={`text-xs whitespace-nowrap transition-colors ${
                    active
                      ? "font-medium text-neutral-950"
                      : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  {item.number && (
                    <span className="tabular-nums">{item.number} </span>
                  )}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
