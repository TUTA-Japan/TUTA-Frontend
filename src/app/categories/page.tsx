import { CategoryCard } from "@/components/categories/category-card";
import { categories } from "@/data/categories";

export default function CategoriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
      <div className="mb-10">
        <p className="text-sm text-text-secondary">Khám phá theo nhóm</p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
          Danh mục
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </main>
  );
}
