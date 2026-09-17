import Image from "next/image";
import Link from "next/link";

import type { Category } from "@/types/category";

type CategoryCardProps = Category;

export function CategoryCard({
  name,
  slug,
  description,
  image,
}: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`} className="group block">
      <div className="relative aspect-4/3 overflow-hidden bg-surface">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>

      <div className="pt-4">
        <h2 className="text-lg font-semibold text-text-primary group-hover:text-tuta-green-dark">
          {name}
        </h2>

        {description && (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
