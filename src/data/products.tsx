import type { Product } from "@/types/product";
import canmakeImange from "@/assets/products/Canmake/Canmake.png";
import canmakeImange1 from "@/assets/products/Canmake/Canmake.png";
import canmakeImange2 from "@/assets/products/Canmake/Canmake.png";
import canmakeImange3 from "@/assets/products/Canmake/Canmake.png";

export const products: Product[] = [
  {
    id: "1",
    slug: "skin-aqua-uv-super-moisture-gel",
    nameVi: "Kem chống nắng Skin Aqua UV Super Moisture Gel",
    nameJp: "スキンアクア UV スーパーモイスチャージェル",
    brand: "Rohto",
    category: "Chống nắng",
    referencePriceVnd: 229000,
    originalPriceVnd: 259000,
    specification: "110g × 1 tuýp",
    images: [
      "https://picsum.photos/seed/tuta-1-a/1200/900",
      "https://picsum.photos/seed/tuta-1-b/1200/900",
      "https://picsum.photos/seed/tuta-1-c/1200/900",
      "https://picsum.photos/seed/tuta-1-d/1200/900",
    ],
    shortDescription: "Kem chống nắng dạng gel nhẹ, phù hợp sử dụng hằng ngày.",
    description: "Sản phẩm chống nắng nội địa Nhật với kết cấu nhẹ...",
  },
  {
    id: "2",
    slug: "vien-uong-dhc-vitamin-c-20-ngay",
    nameVi: "Viên uống DHC bổ sung Vitamin C 20 ngày",
    brand: "DHC",
    category: "Thực phẩm chức năng",
    referencePriceVnd: 140000,
    specification: "60 viên",
    images: [
      "https://tshop.r10s.jp/rakutensokuhaimart/cabinet/rakuten24/wb3-a/4511413404133-a.jpg?fitin=660%3A660",
    ],
    shortDescription:
      "Viên uống bổ sung Vitamin C DHC cung cấp 1.000mg vitamin C và vitamin B2, hỗ trợ sức khỏe và làm đẹp da.",
    description:
      "Viên uống bổ sung Vitamin C DHC cung cấp 1.000mg vitamin C và vitamin B2, hỗ trợ sức khỏe, làm đẹp da, tiện lợi cho người bận rộn. Quy cách: 60 viên. DHC nội địa Nhật Bản.",
  },
  {
    id: "2",
    slug: "hada-labo-gokujyun-lotion",
    nameVi: "Lotion dưỡng ẩm Hada Labo Gokujyun",
    nameJp: "肌ラボ 極潤ヒアルロン液",
    brand: "Hada Labo",
    category: "Lotion",
    referencePriceVnd: 189000,
    specification: "170ml × 1 chai",
    images: ["https://picsum.photos/seed/tuta-2/800/1000"],
    shortDescription:
      "Lotion dưỡng ẩm với kết cấu đơn giản, dễ kết hợp routine.",
    description:
      "Một trong những dòng lotion phổ biến tại Nhật, tập trung vào khả năng cấp ẩm và hỗ trợ duy trì độ ẩm cho da.",
  },
  {
    id: "3",
    slug: "canmake-marshmallow-finish-powder-abloom",
    nameVi:
      "Canmake Marshmallow Finish Powder Abloom - Phấn phủ nén 5 màu hiệu chỉnh tông da",
    brand: "Canmake",
    category: "Mỹ phẩm",
    referencePriceVnd: 260000,

    images: [canmakeImange, canmakeImange1, canmakeImange2, canmakeImange3],

    shortDescription: "Phấn phủ nén 5 màu hiệu chỉnh tông da.",

    description:
      "Canmake Marshmallow Finish Powder Abloom là phấn phủ nén 5 màu giúp hiệu chỉnh sắc tố da và nâng tông tự nhiên.\n\nMàu 01 - Dearest Bouquet (ディアレストブーケ): Phối 5 sắc màu hiệu chỉnh (xanh, tím, vàng, hồng, trắng) giúp cân bằng sắc tố da và nâng tông tự nhiên.\n\nMàu 02 - Sakura Tulle (サクラチュール): Tông hồng phấn nhẹ nhàng giúp tăng độ hồng hào, rạng rỡ cho làn da.\n\nMàu 03 - Plumeria Wreath (プルメリアリース): Tông màu tươi sáng (vàng, xanh lá, hồng nhạt) mang lại vẻ rạng rỡ, trong trẻo và thanh thoát.\n.",
  },
];
