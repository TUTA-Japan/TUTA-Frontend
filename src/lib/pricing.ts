import type { Product } from "@/types/product";

export type ProductPricing = {
  price: number | null;
  compareAtPrice: number | null;
  discount: { originalPrice: number; percent: number } | null;
};

export function getProductPricing(product: Product): ProductPricing {
  const { referencePriceVnd: price, originalPriceVnd: originalPrice } =
    product;

  const compareAtPrice =
    originalPrice !== undefined && originalPrice > (price ?? 0)
      ? originalPrice
      : null;

  const discount =
    price && originalPrice && originalPrice > price
      ? {
          originalPrice,
          percent: Math.round(((originalPrice - price) / originalPrice) * 100),
        }
      : null;

  return { price: price ?? null, compareAtPrice, discount };
}
