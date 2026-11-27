import Link from "next/link";
import { X } from "lucide-react";

import { FilterLink } from "@/components/products/filter-link";
import {
  PRODUCT_SORTS,
  productListHref,
  type ProductBrand,
  type ProductFacets,
  type ProductFilterQuery,
  type ProductFilters,
  type ProductSort,
} from "@/lib/catalog-filters";

const VISIBLE_BRANDS = 8;

type Option = { value: string; label: string; count: number };

type ProductFilterSidebarProps = {
  categories: { slug: string; name: string }[];
  brands: ProductBrand[];
  facets: ProductFacets;
  query: ProductFilterQuery;
};

export function ProductFilterSidebar({
  categories,
  brands,
  facets,
  query,
}: ProductFilterSidebarProps) {
  const categoryOptions = categories.map(({ slug, name }) => ({
    value: slug,
    label: name,
    count: facets.categories.counts[name] ?? 0,
  }));

  const brandOptions = brands
    .map(({ slug, name }) => ({
      value: slug,
      label: name,
      count: facets.brands.counts[slug] ?? 0,
    }))
    .filter((option) => option.count > 0 || option.value === query.brand);

  return (
    <div className="space-y-10">
      <FilterGroup
        title="Danh mục"
        field="category"
        allLabel="Tất cả danh mục"
        allCount={facets.categories.total}
        options={categoryOptions}
        query={query}
      />
      <FilterGroup
        title="Thương hiệu"
        field="brand"
        allLabel="Tất cả thương hiệu"
        allCount={facets.brands.total}
        options={brandOptions}
        query={query}
        collapseAfter={VISIBLE_BRANDS}
      />
    </div>
  );
}

type FilterGroupProps = {
  title: string;
  field: "category" | "brand";
  allLabel: string;
  allCount: number;
  options: Option[];
  query: ProductFilterQuery;
  collapseAfter?: number;
};

function FilterGroup({
  title,
  field,
  allLabel,
  allCount,
  options,
  query,
  collapseAfter = options.length,
}: FilterGroupProps) {
  const visible = options.slice(0, collapseAfter);
  const hidden = options.slice(collapseAfter);
  const hiddenHasSelection = hidden.some(
    (option) => option.value === query[field],
  );

  const renderOption = (option: Option) => (
    <FilterOption
      key={option.value}
      option={option}
      href={productListHref({ ...query, [field]: option.value })}
      active={query[field] === option.value}
    />
  );

  return (
    <section aria-labelledby={`filter-${field}`}>
      <h2
        id={`filter-${field}`}
        className="text-sm font-semibold text-text-primary"
      >
        {title}
      </h2>

      <ul className="mt-4 border-l border-border">
        <FilterOption
          option={{ value: "", label: allLabel, count: allCount }}
          href={productListHref({ ...query, [field]: "" })}
          active={query[field] === ""}
        />
        {visible.map(renderOption)}
      </ul>

      {hidden.length > 0 && (
        <details open={hiddenHasSelection} className="group/more">
          <summary className="mt-2 cursor-pointer list-none pl-4 text-sm font-medium text-tuta-green-dark hover:text-tuta-green group-open/more:hidden">
            Xem thêm {hidden.length} thương hiệu
          </summary>
          <ul className="border-l border-border">{hidden.map(renderOption)}</ul>
        </details>
      )}
    </section>
  );
}

function FilterOption({
  option,
  href,
  active,
}: {
  option: Option;
  href: string;
  active: boolean;
}) {
  const unavailable = option.count === 0 && !active;

  return (
    <li>
      {unavailable ? (
        <span className="flex items-baseline gap-3 py-1.5 pl-4 text-sm text-text-secondary/50">
          <span className="flex-1">{option.label}</span>
          <span className="text-xs tabular-nums">0</span>
        </span>
      ) : (
        <FilterLink
          href={href}
          active={active}
          className="group/option -ml-px flex items-baseline gap-3 border-l-2 border-transparent py-1.5 pl-4 text-sm text-text-primary transition-colors hover:text-tuta-green-dark aria-[current]:border-tuta-green aria-[current]:font-semibold aria-[current]:text-tuta-green-dark"
        >
          <span className="flex-1">{option.label}</span>
          <span className="text-xs font-normal tabular-nums text-text-secondary">
            {option.count}
          </span>
        </FilterLink>
      )}
    </li>
  );
}

export function ProductSortNav({ query }: { query: ProductFilterQuery }) {
  return (
    <nav
      aria-label="Sắp xếp sản phẩm"
      className="grid w-full grid-cols-3 items-center gap-1 text-center text-sm sm:flex sm:w-auto"
    >
      <span
        aria-hidden="true"
        className="mr-2 hidden text-text-secondary sm:inline"
      >
        Sắp xếp
      </span>
      {(Object.entries(PRODUCT_SORTS) as [ProductSort, string][]).map(
        ([value, label]) => (
          <FilterLink
            key={value}
            href={productListHref({ ...query, sort: value })}
            active={query.sort === value}
            className="rounded-sm px-2 py-2 text-text-secondary sm:px-3 sm:py-1.5 transition-colors hover:text-text-primary aria-[current]:bg-tuta-green-light aria-[current]:font-semibold aria-[current]:text-tuta-green-dark"
          >
            {label}
          </FilterLink>
        ),
      )}
    </nav>
  );
}

export function ActiveFilters({
  filters,
  query,
}: {
  filters: ProductFilters;
  query: ProductFilterQuery;
}) {
  const chips = [
    filters.category && {
      label: filters.category.name,
      href: productListHref({ ...query, category: "" }),
    },
    filters.brand && {
      label: filters.brand.name,
      href: productListHref({ ...query, brand: "" }),
    },
  ].filter((chip) => chip !== undefined);

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <Link
          key={chip.label}
          href={chip.href}
          scroll={false}
          aria-label={`Bỏ lọc ${chip.label}`}
          className="inline-flex h-8 items-center gap-2 rounded-sm border border-border bg-surface pl-3 pr-2 text-sm text-text-primary transition-colors hover:border-tuta-green hover:text-tuta-green-dark"
        >
          {chip.label}
          <X aria-hidden="true" strokeWidth={1.5} className="size-3.5" />
        </Link>
      ))}
      {chips.length > 1 && (
        <Link
          href={productListHref({ ...query, category: "", brand: "" })}
          scroll={false}
          className="px-2 text-sm font-medium text-tuta-green-dark underline-offset-4 hover:underline"
        >
          Bỏ tất cả
        </Link>
      )}
    </div>
  );
}
