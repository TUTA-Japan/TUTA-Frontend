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

import aqualabely1 from "@/assets/products/aqualabel-yellow/1.png";
import aqualabely2 from "@/assets/products/aqualabel-yellow/2.png";
import aqualabely3 from "@/assets/products/aqualabel-yellow/3.png";
import aqualabely4 from "@/assets/products/aqualabel-yellow/4.png";

import aqualabelr1 from "@/assets/products/aqualabel-red/1.png";
import aqualabelr2 from "@/assets/products/aqualabel-red/2.png";
import aqualabelr3 from "@/assets/products/aqualabel-red/3.png";

import transino1 from "@/assets/products/transino/1.png";
import transino2 from "@/assets/products/transino/2.png";
import transino3 from "@/assets/products/transino/3.png";
import transino4 from "@/assets/products/transino/4.png";

import cream1 from "@/assets/products/cream/1.png";
import cream2 from "@/assets/products/cream/2.png";
import cream3 from "@/assets/products/cream/3.png";

import cream21 from "@/assets/products/cream2/1.png";
import cream22 from "@/assets/products/cream2/2.png";
import cream23 from "@/assets/products/cream2/3.png";
import cream24 from "@/assets/products/cream2/4.png";

import canmake1 from "@/assets/products/canmake2/1.png";
import canmake2 from "@/assets/products/canmake2/2.png";
import canmake3 from "@/assets/products/canmake2/3.png";
import canmake4 from "@/assets/products/canmake2/4.png";
import canmake5 from "@/assets/products/canmake2/5.png";
import canmake6 from "@/assets/products/canmake2/6.png";

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
  {
    id: "7",
    slug: "kem-duong-aqualabel-vang-shiseido-5in1",
    nameVi: "Kem dưỡng Aqualabel Vàng Shiseido 5in1",
    brand: "Aqualabel",
    category: "Mỹ phẩm",
    referencePriceVnd: 485000,
    specification: "Hũ 90g",
    images: [aqualabely1, aqualabely2, aqualabely3, aqualabely4],
    shortDescription:
      "Kem dưỡng Aqualabel Vàng Shiseido 5 trong 1 hỗ trợ dưỡng ẩm, cải thiện độ săn chắc và chăm sóc làn da có dấu hiệu lão hóa.",
    description:
      "Kem dưỡng Aqualabel Vàng Shiseido là sản phẩm chăm sóc da 5 trong 1, tích hợp các bước nước hoa hồng, sữa dưỡng, serum, kem dưỡng và mặt nạ ngủ. Sản phẩm chứa collagen thủy phân cùng các thành phần dầu dưỡng như jojoba, dầu mè, dầu ô liu và squalane, hỗ trợ duy trì độ ẩm, cải thiện độ mềm mại và độ săn chắc của da. Phù hợp với da khô, da có dấu hiệu lão hóa hoặc kém săn chắc. Cách sử dụng: sau khi làm sạch da, lấy một lượng vừa đủ chấm lên mặt rồi thoa đều và vỗ nhẹ. Có thể dùng lượng nhiều hơn vào buổi tối ở những vùng da khô hoặc cần chăm sóc thêm. Xuất xứ: Nhật Bản. Thương hiệu Shiseido.",
  },
  {
    id: "8",
    slug: "kem-duong-aqualabel-do-shiseido-5in1",
    nameVi: "Kem dưỡng Aqualabel Đỏ Shiseido 5in1",
    brand: "Aqualabel",
    category: "Mỹ phẩm",
    referencePriceVnd: 425000,
    specification: "Hũ 90g",
    images: [aqualabelr1, aqualabelr2, aqualabelr3],
    shortDescription:
      "Gel dưỡng ẩm Aqualabel Đỏ Shiseido 5 trong 1 hỗ trợ cấp ẩm, làm mềm da và chăm sóc làn da có dấu hiệu lão hóa sớm.",
    description:
      "Kem dưỡng Aqualabel Đỏ Shiseido là gel dưỡng ẩm 5 trong 1, tích hợp các bước nước hoa hồng, sữa dưỡng, serum, kem dưỡng và mặt nạ ngủ. Sản phẩm chứa collagen thủy phân, Hyaluronic Acid và các thành phần hỗ trợ duy trì độ ẩm, giúp làm mềm vùng da khô ráp và cải thiện độ đàn hồi của da. Kết cấu gel nhẹ, dễ tán và phù hợp với da thường, da khô, hỗn hợp thiên khô hoặc da có dấu hiệu lão hóa sớm. Cách sử dụng: sau khi làm sạch da, lấy một lượng vừa đủ chấm lên trán, mũi, cằm và hai má rồi massage đều. Có thể thoa lớp dày hơn vào buổi tối như mặt nạ ngủ khi da khô. Xuất xứ: Nhật Bản. Thương hiệu Shiseido.",
  },
  {
    id: "9",
    slug: "tinh-chat-transino-melano-signal-essence-30g",
    nameVi:
      "Tinh chất hỗ trợ giảm nám và sáng da Transino Melano Signal Essence 30g",
    brand: "Transino",
    category: "Mỹ phẩm",
    referencePriceVnd: 870000,
    originalPriceVnd: 621600,
    specification: "Tuýp 30g",
    images: [transino1, transino2, transino3, transino4],
    shortDescription:
      "Tinh chất Transino Melano Signal Essence hỗ trợ cải thiện thâm sạm, nám và tàn nhang, đồng thời dưỡng sáng và giúp da đều màu hơn.",
    description:
      "Transino Melano Signal Essence là tinh chất chăm sóc da của Nhật Bản, chứa Tranexamic Acid cùng các thành phần hỗ trợ dưỡng sáng và duy trì độ ẩm cho da. Sản phẩm phù hợp với làn da có thâm sạm, nám, tàn nhang hoặc không đều màu. Kết cấu mỏng nhẹ, dễ tán và thẩm thấu nhanh. Cách sử dụng: dùng 2 lần mỗi ngày vào buổi sáng và tối sau bước làm sạch và nước hoa hồng. Lấy một lượng vừa đủ, thoa lên vùng da cần chăm sóc rồi tiếp tục với kem dưỡng. Ban ngày nên kết hợp kem chống nắng. Xuất xứ: Nhật Bản. Thương hiệu Daiichi Sankyo Healthcare.",
  },
  {
    id: "10",
    slug: "kem-duong-curel-aging-care-moisture-facial-cream-40g",
    nameVi: "Kem dưỡng Curél Aging Care Moisture Facial Cream 40g",
    brand: "Curél",
    category: "Mỹ phẩm",
    referencePriceVnd: 520800,
    specification: "Hũ 40g",
    images: [cream1, cream2, cream3],
    shortDescription:
      "Kem dưỡng Curél Aging Care Moisture Facial Cream hỗ trợ cấp ẩm, củng cố hàng rào bảo vệ da và chăm sóc làn da khô, nhạy cảm có dấu hiệu lão hóa.",
    description:
      "Curél Aging Care Moisture Facial Cream là kem dưỡng dành cho da khô và nhạy cảm có dấu hiệu lão hóa. Sản phẩm chứa các thành phần hỗ trợ duy trì độ ẩm và củng cố hàng rào bảo vệ da, giúp da mềm mại và giảm cảm giác khô ráp. Phù hợp với da khô, da nhạy cảm hoặc da có dấu hiệu lão hóa. Cách sử dụng: dùng vào buổi sáng và tối sau bước làm sạch và nước hoa hồng. Lấy một lượng vừa đủ, thoa đều lên mặt và tập trung thêm ở những vùng da khô. Xuất xứ: Nhật Bản. Thương hiệu Curél thuộc KAO.",
  },
  {
    id: "11",
    slug: "kem-duong-dem-transino-whitening-repair-cream-ex-35g",
    nameVi: "Kem dưỡng đêm Transino Whitening Repair Cream EX 35g",
    brand: "Transino",
    category: "Mỹ phẩm",
    referencePriceVnd: 588000,
    originalPriceVnd: 0,
    specification: "Hũ 35g",
    images: [cream21, cream22, cream23, cream24],
    shortDescription:
      "Kem dưỡng đêm Transino Whitening Repair Cream EX hỗ trợ dưỡng sáng, duy trì độ ẩm và chăm sóc làn da có thâm sạm, không đều màu.",
    description:
      "Transino Whitening Repair Cream EX là kem dưỡng đêm của Nhật Bản, chứa Tranexamic Acid và Dipotassium Glycyrrhizate, hỗ trợ chăm sóc làn da có thâm sạm, không đều màu và chịu tác động từ tia UV. Sản phẩm có kết cấu gel cream mỏng nhẹ, giúp duy trì độ ẩm và hỗ trợ làm dịu da trong quá trình chăm sóc ban đêm. Phù hợp với nhiều loại da, đặc biệt là da có đốm nâu, thâm sạm hoặc không đều màu. Cách sử dụng: dùng vào buổi tối ở bước cuối của chu trình dưỡng da, sau nước hoa hồng và tinh chất. Lấy một lượng vừa đủ, thoa đều lên mặt và massage nhẹ nhàng. Xuất xứ: Nhật Bản. Thương hiệu Daiichi Sankyo Healthcare.",
  },
  {
    id: "12",
    slug: "ma-hong-kem-canmake-cream-cheek",
    nameVi: "Má hồng kem Canmake Cream Cheek Nhật Bản",
    brand: "Canmake",
    category: "Mỹ phẩm",
    referencePriceVnd: 185000,
    originalPriceVnd: 117600,
    images: [canmake1, canmake2, canmake3, canmake4, canmake5, canmake6],
    shortDescription:
      "Má hồng kem Canmake Cream Cheek có kết cấu gel kem mịn nhẹ, cho hiệu ứng ửng hồng tự nhiên, dễ tán và dễ điều chỉnh độ đậm nhạt.",
    description:
      "Canmake Cream Cheek là má hồng dạng kem của Nhật Bản với kết cấu gel kem mịn nhẹ, dễ tán và tiệp vào da. Sản phẩm mang lại hiệu ứng má ửng hồng tự nhiên, phù hợp với nhiều phong cách trang điểm. Chất kem cho phép điều chỉnh độ đậm nhạt linh hoạt và tạo lớp hoàn thiện mềm mại. Một số màu phổ biến gồm P01 Peach Dazzle, 19 Cinnamon Milk Tea, 21 Tangerine Tea, CL01 Clear Red Heart, 16 Almond Terracotta, 05 Sweet Apricot, P02 Rose Petal, 23 Cupid Pink, P06 Sweet Coral và 24 Peach Mousse. Xuất xứ: Nhật Bản. Thương hiệu Canmake Tokyo.",
  },
];
