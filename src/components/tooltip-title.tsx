"use client";

import { useEffect, useRef } from "react";
import tippy, { type Instance } from "tippy.js";
import "tippy.js/dist/tippy.css";

type TooltipTitleProps = {
  text: string;
  children: React.ReactElement;
};

export function TooltipTitle({ text, children }: TooltipTitleProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) return;

    let instance: Instance | null = null;

    const target = element.firstElementChild as HTMLElement | null;

    if (target && target.scrollHeight > target.clientHeight) {
      instance = tippy(target, {
        content: text,
        placement: "top",
        delay: [200, 0],
      });
    }

    return () => {
      instance?.destroy();
    };
  }, [text]);

  return <span ref={wrapperRef}>{children}</span>;
}
