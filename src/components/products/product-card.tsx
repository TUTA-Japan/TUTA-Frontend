"use client";

import Image from "next/image";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { ArrowUpRight } from "lucide-react";

import { ROUTES } from "@/constants/routes";
import { formatVnd } from "@/utils/currency";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  headingLevel?: "h2" | "h3";
};

export function ProductCard({ product }: ProductCardProps) {
  const coverImage = product.images[0];

  const currentPrice =
    product.referencePriceVnd === undefined
      ? null
      : formatVnd(product.referencePriceVnd);

  const originalPrice =
    product.originalPriceVnd !== undefined &&
    product.originalPriceVnd > (product.referencePriceVnd ?? 0)
      ? formatVnd(product.originalPriceVnd)
      : null;

  return (
    <article className="group h-full">
      <Link
        href={ROUTES.productDetail(product.slug)}
        className="flex h-full flex-col rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuta-green"
      >
        <div className="relative aspect-4/5 overflow-hidden border border-transparent bg-surface transition-colors duration-200 group-hover:border-border group-focus-visible:border-tuta-green motion-reduce:transition-none">
          <Image
            src={coverImage}
            alt={product.nameVi}
            fill
            sizes="(max-width: 767px) calc(50vw - 28px), (max-width: 1023px) calc(33.333vw - 38px), (max-width: 1279px) calc(25vw - 42px), 278px"
            className="object-contain p-6 transition-transform duration-250 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none sm:p-7 lg:p-8"
          />

          <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-tuta-green transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" />
        </div>

        <div className="flex flex-1 flex-col pt-4 sm:pt-5">
          <div className="flex min-h-4 items-center gap-2.5">
            <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-tuta-green-dark">
              {product.brand}
            </p>
            <span
              aria-hidden="true"
              className="hidden size-1 shrink-0 rounded-full bg-tuta-orange sm:block"
            />
            <p className="hidden min-w-0 truncate text-[11px] font-medium text-[#59635b] sm:block">
              {product.category}
            </p>
          </div>

          <Tippy content={product.nameVi} placement="top" delay={[200, 0]}>
            <h2 className="mt-2 min-h-12 line-clamp-2 text-sm font-semibold leading-6 text-text-primary transition-colors duration-200 group-hover:text-tuta-green-dark group-focus-visible:text-tuta-green-dark motion-reduce:transition-none sm:text-[15px]">
              {product.nameVi}
            </h2>
          </Tippy>

          <div className="mt-auto flex items-end justify-between gap-4 pt-4">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <p className="text-sm font-bold tabular-nums sm:text-[15px]">
                {currentPrice ? (
                  <>
                    {currentPrice}
                    <span className="ml-1 text-[10px] font-semibold">đ</span>
                  </>
                ) : (
                  "Đang cập nhật"
                )}
              </p>
              {originalPrice && (
                <del className="text-xs tabular-nums text-[#59635b] decoration-1">
                  {originalPrice}
                  <span className="ml-0.5 text-[9px]">đ</span>
                </del>
              )}
            </div>

            <ArrowUpRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="mb-0.5 hidden size-5 shrink-0 text-tuta-green opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transform-none motion-reduce:transition-none sm:block sm:opacity-100"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
