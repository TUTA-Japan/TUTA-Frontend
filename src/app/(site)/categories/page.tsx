import type { Metadata } from "next";

import { CategoryCard } from "@/components/categories/category-card";
import { ROUTES } from "@/constants/routes";
import { getCategories } from "@/lib/catalog";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Danh mục",
  description:
    "Khám phá sản phẩm nội địa Nhật tại TUTA theo nhóm: mỹ phẩm, thực phẩm chức năng, thuốc, gia dụng và mẹ bé.",
  path: ROUTES.categories,
});

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <div className="mb-10">
        <p className="text-sm text-text-secondary">Khám phá theo nhóm</p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
          Danh mục
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </main>
  );
}
