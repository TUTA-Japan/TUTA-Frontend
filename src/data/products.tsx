import type { Product } from "@/types/product";


import canmakeImange from "@/assets/products/canmake/Canmake.png";
import canmakeImange1 from "@/assets/products/canmake/Canmake-1.png";
import canmakeImange2 from "@/assets/products/canmake/Canmake-2.png";
import canmakeImange3 from "@/assets/products/canmake/Canmake-3.png";

import dhcs001 from "@/assets/products/dhc/dhc-s001.png";
import dhcs0012 from "@/assets/products/dhc/dhc-s001-2.png";
import dhcs002 from "@/assets/products/dhc/dhc-s002.png";
import dhcs003 from "@/assets/products/dhc/dhc-s003.png";

import aqualabel1 from "@/assets/products/aqualabel/aqualabel-1.png";
import aqualabel2 from "@/assets/products/aqualabel/aqualabel-2.png";

import orihiro1 from "@/assets/products/orihiro/orihiro-1.png";
import orihiro2 from "@/assets/products/orihiro/orihiro-2.png";
import orihiro3 from "@/assets/products/orihiro/orihiro-3.png";

export const products: Product[] = [
  {
    id: "1",
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
  {
    id: "2",
    slug: "vien-uong-dhc-vitamin-c-20-ngay",
    nameVi: "Viên uống DHC bổ sung Vitamin C 20 ngày",
    brand: "DHC",
    category: "Thực phẩm chức năng",
    referencePriceVnd: 140000,
    specification: "60 viên",
    images: [dhcs001, dhcs0012],
    shortDescription:
      "Viên uống bổ sung Vitamin C DHC cung cấp 1.000mg vitamin C và vitamin B2, hỗ trợ sức khỏe và làm đẹp da.",
    description:
      "Viên uống bổ sung Vitamin C DHC cung cấp 1.000mg vitamin C và vitamin B2, hỗ trợ sức khỏe, làm đẹp da, tiện lợi cho người bận rộn. Quy cách: 60 viên. DHC nội địa Nhật Bản.",
  },
  {
    id: "3",
    slug: "vien-uong-bo-sung-kem-dhc",
    nameVi: "Viên uống bổ sung kẽm DHC - Tăng cường sức khỏe toàn diện",
    brand: "DHC",
    category: "Thực phẩm chức năng",
    referencePriceVnd: 150000,
    specification: "60 viên",
    images: [dhcs002],
    shortDescription:
      "Viên uống bổ sung kẽm DHC cung cấp lượng kẽm thiết yếu cho cơ thể, hỗ trợ chức năng miễn dịch, sức khỏe làn da và chức năng vị giác.",
    description:
      "Viên uống bổ sung kẽm DHC là sản phẩm cung cấp lượng kẽm thiết yếu cho cơ thể, góp phần nâng cao sức khỏe tổng thể. Kẽm đóng vai trò quan trọng trong việc duy trì chức năng miễn dịch, đồng thời hỗ trợ cải thiện tình trạng da và chức năng vị giác. Sản phẩm được sản xuất theo tiêu chuẩn chất lượng cao. Quy cách: 60 viên. Xuất xứ: DHC Nhật Bản.",
  },
  {
    id: "4",
    slug: "vien-uong-bo-sung-collagen-dhc",
    nameVi: "Viên uống bổ sung Collagen DHC",
    brand: "DHC",
    category: "Thực phẩm chức năng",
    originalPriceVnd: 201600,
    specification: "60 viên",
    images: [dhcs003],
    shortDescription:
      "Viên uống bổ sung Collagen DHC Nhật Bản hỗ trợ tăng cường độ đàn hồi, giúp da mịn màng, mềm mại và hỗ trợ sức khỏe xương khớp.",
    description:
      "Viên uống bổ sung Collagen DHC Nhật Bản hỗ trợ tăng cường độ đàn hồi và dưỡng da mịn màng, mềm mại, hạn chế sự hình thành của các nếp nhăn. Sản phẩm bổ sung dưỡng chất hỗ trợ xương khớp chắc khỏe, dẻo dai. Quy cách: 60 viên. Xuất xứ: DHC Nhật Bản.",
  },
  {
    id: "5",
    slug: "kem-duong-trang-da-aqualabel-xanh",
    nameVi: "Kem dưỡng trắng da AQUALABEL Xanh",
    brand: "Aqualabel",
    category: "Mỹ phẩm",
    referencePriceVnd: 345000,
    specification: "90g",
    images: [aqualabel1, aqualabel2],
    shortDescription:
      "Kem dưỡng da Aqualabel xanh 5 trong 1 hỗ trợ làm sáng da, giữ ẩm, làm săn chắc và chăm sóc các vùng da sậm màu.",
    description:
      "Kem dưỡng da Aqualabel xanh 5 trong 1 hỗ trợ làm sáng da, ngăn ngừa nám, tàn nhang và các vùng da sậm màu. Sản phẩm chứa collagen, axit hyaluronic và chiết xuất thảo dược giúp săn chắc da, duy trì độ ẩm và hỗ trợ nuôi dưỡng làn da. Quy cách: 90g. Nội địa Nhật Bản.",
  },

  {
    id: "6",
    slug: "vien-uong-nattokinase-2000fu-orihiro-nhat-ban",
    nameVi: "Viên uống Nattokinase 2000FU Orihiro Nhật Bản",
    brand: "ORIHIRO",
    category: "Thực phẩm chức năng",
    referencePriceVnd: 420000,
    specification: "60 viên",
    images: [orihiro1, orihiro2, orihiro3],
    shortDescription:
      "Viên uống Orihiro Nattokinase 2000FU 60 viên là thực phẩm chức năng hỗ trợ tuần hoàn máu và sức khỏe tim mạch.",
    description:
      "Viên uống Orihiro Nattokinase 2000FU 60 viên là thực phẩm chức năng của Nhật Bản hỗ trợ tuần hoàn máu. Công dụng chính: hỗ trợ lưu thông máu và sức khỏe tim mạch. Cách sử dụng: uống 2 viên/ngày, trước bữa ăn 30 phút hoặc sau khi ăn 60 phút. Lưu ý: không dùng cho người bị rối loạn đông máu, chuẩn bị phẫu thuật hoặc huyết áp quá thấp. Nên tham khảo ý kiến bác sĩ nếu đang sử dụng thuốc chống đông máu.",
  },
];
