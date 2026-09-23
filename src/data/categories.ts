import type { Category } from "@/types/category";

import myPham from "@/assets/categories/my-pham.png";
import thucPham from "@/assets/categories/thuc-pham-chuc-nang.png";
import thuoc from "@/assets/categories/thuoc.png";

export const categories: Category[] = [
  {
    id: "1",
    slug: "my-pham",
    name: "Mỹ phẩm",
    description: "Các sản phẩm mỹ phẩm nội địa Nhật dùng hằng ngày.",
    image: myPham,
  },
  {
    id: "2",
    slug: "thuc-pham-chuc-nang",
    name: "Thực phẩm chức năng",
    description: "Các sản phẩm hỗ trợ chăm sóc sức khỏe từ Nhật Bản.",
    image: thucPham,
  },
  {
    id: "3",
    slug: "thuoc",
    name: "Thuốc",
    description:
      "Các sản phẩm thuốc và chăm sóc sức khỏe chính hãng từ Nhật Bản.",
    image: thuoc,
  },
];
