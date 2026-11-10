import { Search } from "lucide-react";

import { ROUTES } from "@/constants/routes";

type ProductSearchFormProps = {
  defaultValue?: string;
  maxLength: number;
};

/** Plain GET form to /search, so it works without client JavaScript. */
export function ProductSearchForm({
  defaultValue,
  maxLength,
}: ProductSearchFormProps) {
  return (
    <form
      action={ROUTES.search}
      method="get"
      role="search"
      className="mt-6 flex items-center gap-3 border-b border-border pb-3 focus-within:border-tuta-green"
    >
      <Search
        aria-hidden="true"
        strokeWidth={1.5}
        className="size-5 shrink-0 text-text-secondary"
      />

      <label htmlFor="search-query" className="sr-only">
        Từ khóa tìm kiếm
      </label>
      <input
        id="search-query"
        name="q"
        type="search"
        defaultValue={defaultValue}
        maxLength={maxLength}
        placeholder="Tìm sản phẩm hoặc thương hiệu"
        className="w-full bg-transparent text-base text-text-primary outline-none placeholder:text-text-secondary"
      />

      <button
        type="submit"
        className="text-sm font-medium text-tuta-green-dark transition-colors hover:text-tuta-green"
      >
        Tìm
      </button>
    </form>
  );
}
