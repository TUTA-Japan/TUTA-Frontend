import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

import type {
  CategoryDto,
  PaginationDto,
  ProductImageDto,
  PublicProductDto,
  RelatedProductDto,
} from "./types";

export type Pagination = PaginationDto;

export type Paginated<T> = {
  items: T[];
  pagination: Pagination;
};

const optional = <T>(value: T | null | undefined): T | undefined =>
  value ?? undefined;

function imageUrl(image: string | ProductImageDto): string {
  return typeof image === "string" ? image : image.url;
}

/** Backend product payload → UI `Product` (null → undefined, category → name). */
export function toProduct(dto: PublicProductDto | RelatedProductDto): Product {
  return {
    id: dto.id,
    slug: dto.slug,
    nameVi: dto.nameVi,
    nameJp: optional(dto.nameJp),
    brand: dto.brand,
    category: dto.category.name,
    referencePriceVnd: optional(dto.referencePriceVnd),
    originalPriceVnd: optional(dto.originalPriceVnd),
    specification: optional(dto.specification),
    images: dto.images.map(imageUrl),
    shortDescription: optional(dto.shortDescription),
    description: optional(dto.description),
  };
}

export function toCategory(dto: CategoryDto): Category {
  return {
    id: dto.id,
    slug: dto.slug,
    name: dto.name,
    description: optional(dto.description),
    image: optional(dto.imageUrl),
  };
}

export function toPaginated<TDto, T>(
  page: { items: TDto[]; pagination: PaginationDto },
  map: (dto: TDto) => T,
): Paginated<T> {
  return { items: page.items.map(map), pagination: page.pagination };
}
