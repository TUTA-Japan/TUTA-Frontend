export type Product = {
  id: string;
  slug: string;
  nameVi: string;
  nameJp?: string;
  brand: string;
  category: string;
  referencePriceVnd?: number;
  originalPriceVnd?: number;
  specification?: string;
  image: string;
  shortDescription?: string;
  description?: string;
};
