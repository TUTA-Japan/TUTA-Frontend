import type { StaticImageData } from "next/image";

import myPham from "@/assets/categories/my-pham.png";
import thucPhamChucNang from "@/assets/categories/thuc-pham-chuc-nang.png";
import thuoc from "@/assets/categories/thuoc.png";
import type { Category } from "@/types/category";

/**
 * TEMPORARY: the backend points these categories at
 * https://images.tutatuta.vn/image/categories/<slug>.png, which returns 404.
 * Until those files are uploaded to R2, the bundled assets are used instead.
 * Delete an entry (or this module) once its CDN image exists.
 */
const LOCAL_CATEGORY_IMAGES: Record<string, StaticImageData> = {
  "my-pham": myPham,
  "thuc-pham-chuc-nang": thucPhamChucNang,
  thuoc,
};

export function withLocalCategoryImage(category: Category): Category {
  const localImage = LOCAL_CATEGORY_IMAGES[category.slug];
  return localImage ? { ...category, image: localImage } : category;
}
