"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";

type ProductGalleryProps = {
  images: (string | StaticImageData)[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showPreviousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0 ? images.length - 1 : current - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === images.length - 1 ? 0 : current + 1,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen, images.length]);

  if (images.length === 0) return null;

  return (
    <div>
      <div className="relative aspect-4/5 overflow-hidden">
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          aria-label={`Phóng to ảnh ${productName}`}
          className="relative block aspect-4/5 w-full cursor-zoom-in overflow-hidden"
        >
          <Image
            src={images[activeIndex]}
            alt={productName}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </button>
      </div>
      {isFullscreen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Ảnh phóng to của ${productName}`}
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            aria-label="Đóng ảnh"
            className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                aria-label="Xem ảnh trước"
                className="absolute top-1/2 left-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-3xl text-white transition hover:bg-black/60 md:left-6"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                aria-label="Xem ảnh tiếp theo"
                className="absolute top-1/2 right-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-3xl text-white transition hover:bg-black/60 md:right-6"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative h-full w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={productName}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      {images.length > 1 && (
        <div className="mt-4 flex w-full max-w-full gap-3 overflow-x-auto pb-2">
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
