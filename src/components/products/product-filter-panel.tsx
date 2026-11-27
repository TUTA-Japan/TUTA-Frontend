"use client";

import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

type ProductFilterPanelProps = {
  activeCount: number;
  children: React.ReactNode;
};

export function ProductFilterPanel({
  activeCount,
  children,
}: ProductFilterPanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="product-filters"
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-full items-center justify-between border border-border bg-surface px-4 text-sm font-medium text-text-primary lg:hidden"
      >
        <span className="flex items-center gap-2.5">
          <SlidersHorizontal
            aria-hidden="true"
            strokeWidth={1.5}
            className="size-4"
          />
          Bộ lọc
        </span>
        {activeCount > 0 && (
          <span className="flex size-6 items-center justify-center rounded-sm bg-tuta-green text-xs font-semibold text-white">
            {activeCount}
          </span>
        )}
      </button>

      <div
        id="product-filters"
        className={`${open ? "block" : "hidden"} mt-6 lg:mt-0 lg:block`}
      >
        {children}
      </div>
    </div>
  );
}
