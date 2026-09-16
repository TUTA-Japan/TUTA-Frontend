"use client";

import Image from "next/image";
import { useState } from "react";
import type { StaticImageData } from "next/image";

type ProductGalleryProps = {
  images: (string | StaticImageData)[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div>
      <div className="relative aspect-4/5 overflow-hidden bg-surface">
        <Image
          src={images[activeIndex]}
          alt={`${productName} - ảnh ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-6 md:p-8"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {images.map((image, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Xem ảnh ${index + 1} của ${productName}`}
                aria-current={active ? "true" : undefined}
                className={[
                  "relative aspect-4/5 w-18 shrink-0 overflow-hidden border bg-surface transition-colors",
                  active
                    ? "border-tuta-green"
                    : "border-border hover:border-tuta-green",
                ].join(" ")}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="72px"
                  className="object-contain p-1.5"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
