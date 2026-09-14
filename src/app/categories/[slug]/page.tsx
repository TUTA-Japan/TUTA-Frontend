import { notFound } from "next/navigation";

import { ProductGrid } from "@/components/products/product-grid";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

type CategoryDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryDetailPage({
  params,
}: CategoryDetailPageProps) {
  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === category.name,
  );

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
