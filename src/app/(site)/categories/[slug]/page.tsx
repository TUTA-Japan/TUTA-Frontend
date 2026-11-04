import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductGrid } from "@/components/products/product-grid";
import { ROUTES } from "@/constants/routes";
import {
  getCategoryBySlug,
  getCategorySlugs,
  getProductsByCategory,
} from "@/lib/catalog";
import { buildPageMetadata } from "@/lib/metadata";

type CategoryDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getCategorySlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) return {};

  return buildPageMetadata({
    title: category.name,
    description: category.description,
    path: ROUTES.categoryDetail(category.slug),
  });
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailPageProps) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = await getProductsByCategory(category);

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm text-text-secondary">Danh mục</p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
          {category.name}
        </h1>

        {category.description && (
          <p className="mt-4 text-sm leading-7 text-text-secondary">
            {category.description}
          </p>
        )}
      </div>

      <ProductGrid products={categoryProducts} />
    </main>
  );
}
