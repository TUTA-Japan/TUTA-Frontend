"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FocusEvent,
  type PointerEvent,
} from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type LogoLoopItem = {
  /** Accessible name, and the text shown when there is no logo. */
  label: string;
  href?: string;
  logo?: StaticImageData;
};

type LogoLoopProps = {
  items: readonly LogoLoopItem[];
  /** Scroll speed in pixels per second. */
  speed?: number;
  direction?: "left" | "right";
  /** Colour the edges fade into. Match the section background. */
  fadeColor?: string;
  /** Accessible name of the list, e.g. "Thương hiệu". */
  ariaLabel: string;
  className?: string;
};

/** Time constant (seconds) of the speed easing when pausing or resuming. */
const EASING_SECONDS = 0.25;
/** Longest frame step applied at once, so a stalled frame does not jump. */
const MAX_FRAME_SECONDS = 0.1;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * Whether the visitor asked for reduced motion. The server renders the
 * animated markup; the client switches to the static list after hydration.
 */
function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

/**
 * Endless horizontal loop of brand logos (or names, until logos exist).
 *
 * The first copy of the list is the accessible one; the extra copies that
 * fill the width are `aria-hidden` and `inert`, so screen readers and the Tab
 * key see each item once. The loop eases to a stop on mouse hover and keyboard
 * focus, only animates while on screen, and becomes a static wrapped list when
 * the visitor prefers reduced motion.
 */
export function LogoLoop({
  items,
  speed = 70,
  direction = "left",
  fadeColor = "var(--background)",
  ariaLabel,
  className,
}: LogoLoopProps) {
  const reducedMotion = usePrefersReducedMotion();

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLUListElement>(null);

  const [sequenceWidth, setSequenceWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(2);
  const [isOnScreen, setIsOnScreen] = useState(false);

  // Read every frame, so they live in refs rather than state.
  const holdRef = useRef({ hover: false, focus: false });
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  // Measure one copy and render enough copies to cover the viewport while it
  // scrolls by one copy's width. The first observation fires on observe().
  useEffect(() => {
    const viewport = viewportRef.current;
    const sequence = sequenceRef.current;
    if (reducedMotion || !viewport || !sequence) return;

    const observer = new ResizeObserver(() => {
      const width = sequence.getBoundingClientRect().width;
      if (width === 0) return;
      setSequenceWidth(width);
      setCopyCount(Math.max(2, Math.ceil(viewport.clientWidth / width) + 1));
    });
    observer.observe(viewport);
    observer.observe(sequence);
    return () => observer.disconnect();
  }, [reducedMotion, items]);

  // Animate only while the loop is visible, to spare the battery.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (reducedMotion || !viewport) return;

    const observer = new IntersectionObserver((entries) => {
      setIsOnScreen(entries.some((entry) => entry.isIntersecting));
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const targetVelocity = (direction === "left" ? 1 : -1) * Math.abs(speed);
  const isRunning = !reducedMotion && isOnScreen && sequenceWidth > 0;

  useEffect(() => {
    const track = trackRef.current;
    if (!isRunning || !track) return;

    let frame = 0;
    let lastTime: number | null = null;

    const tick = (time: number) => {
      const seconds =
        lastTime === null
          ? 0
          : Math.min((time - lastTime) / 1000, MAX_FRAME_SECONDS);
      lastTime = time;

      const hold = holdRef.current;
      const target = hold.hover || hold.focus ? 0 : targetVelocity;
      velocityRef.current +=
        (target - velocityRef.current) *
        (1 - Math.exp(-seconds / EASING_SECONDS));

      const offset = offsetRef.current + velocityRef.current * seconds;
      offsetRef.current =
        ((offset % sequenceWidth) + sequenceWidth) % sequenceWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isRunning, sequenceWidth, targetVelocity]);

  if (reducedMotion) {
    return (
      <ul
        aria-label={ariaLabel}
        className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-5 ${className ?? ""}`}
      >
        {items.map((item) => (
          <li key={item.label}>
            <LoopItem item={item} />
          </li>
        ))}
      </ul>
    );
  }

  // Touch devices fire pointerenter on tap and never leave; only a real mouse
  // hover should hold the loop.
  const setHover = (event: PointerEvent, hover: boolean) => {
    if (event.pointerType === "mouse") holdRef.current.hover = hover;
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      holdRef.current.focus = false;
    }
  };

  const fade = { width: "clamp(1.5rem, 8%, 7.5rem)" };

  return (
    <div
      ref={viewportRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      onPointerEnter={(event) => setHover(event, true)}
      onPointerLeave={(event) => setHover(event, false)}
      onFocus={() => {
        holdRef.current.focus = true;
      }}
      onBlur={handleBlur}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10"
        style={{
          ...fade,
          background: `linear-gradient(to right, ${fadeColor}, transparent)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10"
        style={{
          ...fade,
          background: `linear-gradient(to left, ${fadeColor}, transparent)`,
        }}
      />

      <div ref={trackRef} className="flex w-max will-change-transform">
        {Array.from({ length: copyCount }, (_, copy) => (
          <ul
            key={copy}
            ref={copy === 0 ? sequenceRef : undefined}
            aria-label={copy === 0 ? ariaLabel : undefined}
            aria-hidden={copy > 0 || undefined}
            inert={copy > 0}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li
                key={item.label}
                className="flex shrink-0 items-center gap-6 py-2 pr-6 md:gap-10 md:pr-10"
              >
                <LoopItem item={item} />
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-tuta-orange/70"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function LoopItem({ item }: { item: LogoLoopItem }) {
  const content = item.logo ? (
    <Image
      src={item.logo}
      alt={item.label}
      className="h-7 w-auto select-none md:h-9"
      draggable={false}
    />
  ) : (
    <span className="whitespace-nowrap text-lg font-semibold leading-none tracking-[-0.02em] md:text-2xl">
      {item.label}
    </span>
  );

  if (!item.href) {
    return <span className="text-tuta-green-dark/75">{content}</span>;
  }

  return (
    <Link
      href={item.href}
      prefetch={false}
      className="block rounded-sm text-tuta-green-dark/75 transition-colors duration-200 hover:text-tuta-green-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuta-green motion-reduce:transition-none"
    >
      {content}
    </Link>
  );
}
