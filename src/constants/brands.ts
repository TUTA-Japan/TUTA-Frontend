import type { StaticImageData } from "next/image";

export type Brand = {
  /** Display name. Also the search query, so it must match the catalog. */
  name: string;
  /**
   * Optional logo, e.g. `import rohto from "@/assets/brands/rohto.svg"`.
   * Brands without one are shown as their name.
   */
  logo?: StaticImageData;
};

/**
 * Brands shown in the home page logo loop. Each one links to the search
 * results for its name, so keep the list to brands that have products in the
 * catalog (ORIHIRO also matches products filed as "Orihiro": search ignores
 * case).
 */
export const FEATURED_BRANDS: readonly Brand[] = [
  { name: "DHC" },
  { name: "Aqualabel" },
  { name: "Canmake" },
  { name: "Transino" },
  { name: "PDC" },
  { name: "Majolica Majorca" },
  { name: "ORIHIRO" },
  { name: "Sante" },
  { name: "Rohto" },
  { name: "Cezanne" },
  { name: "Curél" },
  { name: "Kosé Cosmeport" },
  { name: "Kissme Heroine Make" },
  { name: "Club Cosmetics" },
  { name: "Lion" },
  { name: "Kincho" },
  { name: "Sato" },
  { name: "Quality 1st" },
  { name: "by365" },
];
