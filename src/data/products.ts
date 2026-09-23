import type { Product } from "@/types/product";
export const products: Product[] = [
  {
    id: "1",
    slug: "canmake-marshmallow-finish-powder-abloom",
    nameVi:
      "Canmake Marshmallow Finish Powder Abloom - Phấn phủ nén 5 màu hiệu chỉnh tông da",
    brand: "Canmake",
    category: "Mỹ phẩm",
    referencePriceVnd: 260000,

    images: [
      "https://images.tutatuta.vn/image/products/canmake/1.png",
      "https://images.tutatuta.vn/image/products/canmake/2.png",
      "https://images.tutatuta.vn/image/products/canmake/3.png",
      "https://images.tutatuta.vn/image/products/canmake/4.png",
    ],

    shortDescription: "Phấn phủ nén 5 màu hiệu chỉnh tông da.",
    description: `
Canmake Marshmallow Finish Powder Abloom là phấn phủ nén 5 màu giúp hiệu chỉnh sắc tố da và nâng tông tự nhiên.

**Bảng màu Canmake Marshmallow Finish Powder Abloom**

- **Màu 01 - Dearest Bouquet** (ディアレストブーケ): Phối 5 sắc màu hiệu chỉnh (xanh, tím, vàng, hồng, trắng) giúp cân bằng sắc tố da và nâng tông tự nhiên.

- **Màu 02 - Sakura Tulle** (サクラチュール): Tông hồng phấn nhẹ nhàng giúp tăng độ hồng hào, rạng rỡ cho làn da.

- **Màu 03 - Plumeria Wreath** (プルメリアリース): Tông màu tươi sáng (vàng, xanh lá, hồng nhạt) mang lại vẻ rạng rỡ, trong trẻo và thanh thoát.
`,
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
      "https://images.tutatuta.vn/image/products/dhc1/1.png",
      "https://images.tutatuta.vn/image/products/dhc1/2.png",
    ],
    shortDescription:
      "Viên uống bổ sung Vitamin C DHC cung cấp 1.000mg vitamin C và vitamin B2, hỗ trợ sức khỏe và làm đẹp da.",
    description: `
Viên uống DHC Vitamin C là dòng thực phẩm chức năng đến từ thương hiệu DHC Nhật Bản. Với hàm lượng dưỡng chất tối ưu, sản phẩm hỗ trợ bổ sung vitamin C hằng ngày, đồng thời hỗ trợ chăm sóc sức khỏe và làn da.

**Công dụng nổi bật của viên uống DHC Vitamin C**

- **Tăng cường sức đề kháng:** Bổ sung Vitamin C cần thiết giúp hỗ trợ hoạt động của hệ miễn dịch và duy trì sức khỏe tổng thể.

- **Hỗ trợ làm sáng và đều màu da:** Vitamin C góp phần hỗ trợ quá trình chăm sóc làn da xỉn màu, thâm sau mụn và không đều màu.

- **Hỗ trợ tổng hợp collagen:** Vitamin C tham gia vào quá trình tổng hợp collagen, góp phần duy trì độ săn chắc và đàn hồi của da.

- **Chống oxy hóa:** Vitamin C có vai trò chống oxy hóa, hỗ trợ bảo vệ tế bào trước tác động của các gốc tự do.

- **Bổ sung Vitamin B2:** Hỗ trợ duy trì sức khỏe của da và niêm mạc.

**Thành phần dinh dưỡng**  
Trong mỗi 2 viên dùng hằng ngày:

- **Vitamin C:** 1.000mg
- **Vitamin B2:** 2mg
- **Phụ liệu:** Gelatin, caramel, titan dioxid và các thành phần khác theo công thức sản phẩm.

---

**Hướng dẫn sử dụng**

- **Liều lượng:** Uống 2 viên mỗi ngày.

- **Thời điểm dùng:** Nên sử dụng sau bữa ăn và uống cùng nước.

- **Lưu ý:** Không sử dụng quá liều khuyến nghị. Nếu đang điều trị bệnh, mang thai, cho con bú hoặc đang dùng thuốc, nên tham khảo ý kiến chuyên môn trước khi sử dụng.

---

**Đối tượng phù hợp**

- Người có nhu cầu bổ sung Vitamin C hằng ngày.
- Người có chế độ ăn ít rau củ và trái cây tươi.
- Người muốn bổ sung dưỡng chất hỗ trợ chăm sóc da và sức khỏe tổng thể.
`,
  },

  {
    id: "3",
    slug: "vien-uong-bo-sung-kem-dhc-60-ngay",
    nameVi: "Viên uống bổ sung kẽm DHC Nhật Bản 60 ngày",
    brand: "DHC",
    category: "Thực phẩm chức năng",
    referencePriceVnd: 180000,
    originalPriceVnd: 68880,
    specification: "60 viên",
    images: ["https://images.tutatuta.vn/image/products/zinc-dhc/zinc-dhc.png"],
    shortDescription:
      "Viên uống bổ sung kẽm DHC cung cấp 15mg kẽm mỗi ngày, kết hợp crom và selen, hỗ trợ bổ sung vi chất và duy trì sức khỏe tổng thể.",
    description: `
**Lợi ích nổi bật của viên uống kẽm DHC Zinc**

- **Hỗ trợ kiểm soát dầu thừa và chăm sóc da:** Kẽm là vi chất tham gia vào nhiều quá trình sinh học của cơ thể, hỗ trợ duy trì sức khỏe làn da và quá trình phục hồi mô.

- **Hỗ trợ sức khỏe tóc và móng:** Kẽm góp phần vào quá trình tổng hợp protein và duy trì cấu trúc keratin, hỗ trợ tóc và móng chắc khỏe.

- **Hỗ trợ hệ miễn dịch:** Bổ sung kẽm giúp đáp ứng nhu cầu vi chất của cơ thể và góp phần duy trì chức năng bình thường của hệ miễn dịch.

- **Hỗ trợ duy trì vị giác và sức khỏe tổng thể:** Kẽm tham gia vào nhiều hoạt động chuyển hóa và góp phần duy trì chức năng sinh lý bình thường của cơ thể.

- **Bổ sung Selen và Crom:** Hai vi chất này tham gia vào các quá trình chuyển hóa và chống oxy hóa của cơ thể.

---

**Hướng dẫn sử dụng**

- **Liều lượng:** Uống 1 viên mỗi ngày.

- **Thời điểm dùng:** Nên uống sau bữa ăn sáng hoặc trưa. Tránh dùng khi bụng đói nếu bạn dễ gặp cảm giác khó chịu ở dạ dày.

- **Nước uống kèm:** Uống cùng nước lọc hoặc nước ấm.

- **Lưu ý tương tác:** Không nên uống kẽm cùng thời điểm với các sản phẩm bổ sung sắt hoặc canxi; có thể dùng cách nhau khoảng 2 giờ.

---

**Đối tượng phù hợp**

- Người có nhu cầu bổ sung kẽm hằng ngày.
- Người muốn hỗ trợ chăm sóc sức khỏe da, tóc và móng.
- Người có chế độ ăn uống thiếu cân đối hoặc ít thực phẩm giàu kẽm.
- Người muốn bổ sung thêm vi chất hỗ trợ sức khỏe tổng thể.
`,
  },
  {
    id: "4",
    slug: "vien-uong-bo-sung-collagen-dhc",
    nameVi: "Viên uống bổ sung Collagen DHC",
    brand: "DHC",
    category: "Thực phẩm chức năng",
    originalPriceVnd: 280000,
    specification: "60 viên",
    images: [
      "https://images.tutatuta.vn/image/products/collagen-dhc/collagen-dhc.png",
    ],
    shortDescription:
      "Viên uống bổ sung Collagen DHC Nhật Bản hỗ trợ tăng cường độ đàn hồi, giúp da mịn màng, mềm mại và hỗ trợ sức khỏe xương khớp.",
    description: `
**Ưu điểm nổi bật của DHC Collagen**

- **Collagen Peptide dễ sử dụng:** Sản phẩm bổ sung collagen peptide có nguồn gốc từ cá, phù hợp với nhu cầu bổ sung collagen hằng ngày.

- **Hỗ trợ duy trì độ săn chắc và đàn hồi của da:** Collagen là thành phần cấu trúc quan trọng của da, góp phần hỗ trợ duy trì độ săn chắc và vẻ ngoài khỏe mạnh.

- **Hỗ trợ duy trì độ ẩm và bề mặt da:** Bổ sung collagen có thể hỗ trợ quá trình chăm sóc làn da khô, thiếu sức sống và giúp duy trì độ mềm mại của da.

- **Bổ sung Vitamin B1 và B2:** Hai vitamin nhóm B tham gia vào quá trình chuyển hóa năng lượng và hỗ trợ duy trì sức khỏe của da.

- **Hỗ trợ sức khỏe tóc, móng và khớp:** Collagen peptide góp phần bổ sung dưỡng chất cần thiết cho mô liên kết trong cơ thể.

---

**Hướng dẫn sử dụng**

- **Liều lượng:** Uống 6 viên mỗi ngày. Có thể dùng một lần hoặc chia thành 2 - 3 lần trong ngày.

- **Thời điểm dùng:** Có thể uống vào thời điểm thuận tiện trong ngày, ưu tiên sau bữa ăn và dùng đều đặn theo hướng dẫn của sản phẩm.

- **Nước uống kèm:** Uống cùng nước lọc hoặc nước ấm.

- **Thời gian sử dụng:** Có thể duy trì đều đặn theo nhu cầu bổ sung và hướng dẫn trên bao bì sản phẩm.

---

**Đối tượng phù hợp**

- Người trưởng thành có nhu cầu bổ sung collagen hằng ngày.
- Người muốn hỗ trợ chăm sóc làn da khô, thiếu sức sống hoặc có dấu hiệu lão hóa.
- Người muốn bổ sung thêm dưỡng chất hỗ trợ sức khỏe da, tóc, móng và mô liên kết.
`,
  },
  {
    id: "5",
    slug: "kem-duong-trang-da-aqualabel-xanh",
    nameVi: "Kem dưỡng trắng da AQUALABEL Xanh",
    brand: "Aqualabel",
    category: "Mỹ phẩm",
    referencePriceVnd: 345000,
    specification: "90g",
    images: [
      "https://images.tutatuta.vn/image/products/aqualabel-blue/1.png",
      "https://images.tutatuta.vn/image/products/aqualabel-blue/2.png",
    ],
    shortDescription:
      "Kem dưỡng da Aqualabel xanh 5 trong 1 hỗ trợ làm sáng da, giữ ẩm, làm săn chắc và chăm sóc các vùng da sậm màu.",
    description: `
**Ưu điểm nổi bật của Aqualabel Xanh 5in1**

- **Hỗ trợ dưỡng sáng và cải thiện tình trạng da xỉn màu:** Sản phẩm có chứa 4MSK, thành phần được Shiseido sử dụng trong các sản phẩm chăm sóc da hỗ trợ làm sáng và cải thiện vẻ ngoài của các vùng da không đều màu.

- **Tiện lợi với công thức 5 trong 1:** Tích hợp nhiều bước chăm sóc da gồm nước hoa hồng, sữa dưỡng, serum, kem dưỡng và mặt nạ ngủ, phù hợp với người muốn tối giản chu trình skincare.

- **Hỗ trợ cấp ẩm và duy trì hàng rào bảo vệ da:** Thành phần Amino Acid kết hợp Hyaluronic Acid giúp duy trì độ ẩm, hỗ trợ làm mềm da và hạn chế cảm giác khô ráp.

- **Hỗ trợ duy trì độ săn chắc của da:** Collagen thủy phân, dẫn xuất Vitamin E và chiết xuất trà đen góp phần hỗ trợ chăm sóc làn da có dấu hiệu kém săn chắc và thiếu sức sống.

- **Kết cấu gel nhẹ, dễ sử dụng:** Chất gel mỏng nhẹ, dễ tán và phù hợp với nhu cầu dưỡng ẩm hằng ngày mà không tạo cảm giác quá nặng trên da.

---

**Thành phần chính**

- **4MSK:** Thành phần hỗ trợ chăm sóc làn da xỉn màu và không đều màu.

- **Collagen GL & Hyaluronic Acid:** Hỗ trợ duy trì độ ẩm, độ mềm mại và vẻ căng mịn của da.

- **Amino Acid Complex:** Hỗ trợ duy trì hàng rào ẩm tự nhiên của da.

- **Chiết xuất trà đen & dẫn xuất Vitamin E:** Các thành phần có vai trò chống oxy hóa và hỗ trợ chăm sóc da trước tác động từ môi trường.

---

**Hướng dẫn sử dụng**

**Dùng làm kem dưỡng hằng ngày**

1. Sau khi làm sạch da, lấy một lượng gel vừa đủ và chấm lên trán, hai má, mũi và cằm.
2. Thoa đều và massage nhẹ nhàng từ trong ra ngoài.
3. Có thể áp nhẹ hai lòng bàn tay lên mặt để sản phẩm được dàn đều trên da.

**Dùng như mặt nạ ngủ**

- Lấy lượng sản phẩm nhiều hơn so với khi dùng hằng ngày.
- Thoa đều toàn mặt, có thể tập trung thêm ở các vùng da khô hoặc cần chăm sóc nhiều hơn.
- Để qua đêm và làm sạch da vào sáng hôm sau nếu cần.

---

**Đối tượng phù hợp**

- Người có làn da dầu, hỗn hợp hoặc da thiếu ẩm.
- Người có làn da xỉn màu, không đều màu hoặc có thâm sau mụn.
- Người muốn tối giản chu trình skincare với sản phẩm đa chức năng.
`,
  },
  {
    id: "6",
    slug: "vien-uong-nattokinase-2000fu-orihiro-nhat-ban",
    nameVi: "Viên uống Nattokinase 2000FU Orihiro Nhật Bản",
    brand: "ORIHIRO",
    category: "Thực phẩm chức năng",
    referencePriceVnd: 420000,
    specification: "60 viên",
    images: [
      "https://images.tutatuta.vn/image/products/nattokinase/1.png",
      "https://images.tutatuta.vn/image/products/nattokinase/2.png",
      "https://images.tutatuta.vn/image/products/nattokinase/3.png",
    ],
    shortDescription:
      "Viên uống Orihiro Nattokinase 2000FU 60 viên là thực phẩm chức năng hỗ trợ tuần hoàn máu và sức khỏe tim mạch.",
    description: `
**Ưu điểm nổi bật**

- **Hỗ trợ tuần hoàn máu:** Nattokinase là enzyme có nguồn gốc từ natto, thường được sử dụng trong các sản phẩm bổ sung hỗ trợ tuần hoàn và sức khỏe tim mạch.

- **Hỗ trợ lưu thông máu:** Sản phẩm phù hợp với người có nhu cầu bổ sung dưỡng chất hỗ trợ duy trì tuần hoàn máu và sức khỏe tổng thể.

- **Hỗ trợ sức khỏe tim mạch:** Công thức có Nattokinase góp phần hỗ trợ duy trì hoạt động tuần hoàn và chức năng tim mạch bình thường.

---

**Hướng dẫn sử dụng**

- **Liều lượng:** Sử dụng theo đúng hướng dẫn ghi trên bao bì sản phẩm.

- **Thời điểm dùng:** Có thể uống cùng nước lọc hoặc nước ấm, vào thời điểm phù hợp theo hướng dẫn của nhà sản xuất.

- **Lưu ý:** Người đang dùng thuốc chống đông máu, có rối loạn đông máu, chuẩn bị phẫu thuật hoặc đang điều trị bệnh tim mạch nên tham khảo ý kiến bác sĩ trước khi sử dụng.
`,
  },
  {
    id: "7",
    slug: "kem-duong-aqualabel-vang-shiseido-5in1",
    nameVi: "Kem dưỡng Aqualabel Vàng Shiseido 5in1",
    brand: "Aqualabel",
    category: "Mỹ phẩm",
    referencePriceVnd: 485000,
    specification: "Hũ 90g",
    images: [
      "https://images.tutatuta.vn/image/products/aqualabel-yellow/1.png",
      "https://images.tutatuta.vn/image/products/aqualabel-yellow/2.png",
      "https://images.tutatuta.vn/image/products/aqualabel-yellow/3.png",
    ],
    shortDescription:
      "Kem dưỡng Aqualabel Vàng Shiseido 5 trong 1 hỗ trợ dưỡng ẩm, cải thiện độ săn chắc và chăm sóc làn da có dấu hiệu lão hóa.",
    description: `
**Ưu điểm nổi bật**

- **Hỗ trợ chăm sóc da có dấu hiệu lão hóa:** Thành phần collagen kết hợp squalane hỗ trợ duy trì độ ẩm, độ mềm mại và độ săn chắc của da.

- **Công nghệ viên nang dầu dưỡng (Oil-In):** Chứa các thành phần dầu như jojoba, dầu mè và dầu ô liu, giúp bổ sung độ ẩm và tạo cảm giác mềm mượt khi thoa.

- **Hỗ trợ cải thiện bề mặt da:** Công thức dưỡng ẩm giúp làm mềm các vùng da khô ráp và hỗ trợ chăm sóc những vùng da có nếp nhăn nhỏ hoặc kém săn chắc.

- **Tiện lợi 5 trong 1:** Tích hợp nhiều bước chăm sóc da trong một sản phẩm, phù hợp với người muốn tối giản chu trình dưỡng da ban đêm.

---

**Hướng dẫn sử dụng**

- Sau khi làm sạch da, lấy một lượng kem vừa đủ và chấm lên trán, hai má, mũi và cằm.

- Thoa đều sản phẩm trên mặt, kết hợp vỗ nhẹ để kem được dàn đều trên da.

- Có thể thoa lượng nhiều hơn vào buổi tối tại các vùng da khô hoặc cần chăm sóc thêm như quanh mắt và rãnh cười.
`,
  },
  {
    id: "8",
    slug: "kem-duong-aqualabel-do-shiseido-5in1",
    nameVi: "Kem dưỡng Aqualabel Đỏ Shiseido 5in1",
    brand: "Aqualabel",
    category: "Mỹ phẩm",
    referencePriceVnd: 425000,
    specification: "Hũ 90g",
    images: [
      "https://images.tutatuta.vn/image/products/aqualabel-red/1.png",
      "https://images.tutatuta.vn/image/products/aqualabel-red/2.png",
      "https://images.tutatuta.vn/image/products/aqualabel-red/3.png",
    ],
    shortDescription:
      "Gel dưỡng ẩm Aqualabel Đỏ Shiseido 5 trong 1 hỗ trợ cấp ẩm, làm mềm da và chăm sóc làn da có dấu hiệu lão hóa sớm.",
    description: `
**Ưu điểm nổi bật**

- **Công thức 5in1 tiện lợi:** Tích hợp nhiều bước chăm sóc da trong một sản phẩm, phù hợp với người muốn tối giản chu trình dưỡng ẩm hằng ngày.

- **Hỗ trợ cấp nước và duy trì độ ẩm:** Phức hợp Hyaluronic Acid kết hợp Amino Acid giúp duy trì độ ẩm, làm mềm da và hỗ trợ giảm cảm giác khô ráp, bong tróc.

- **Hỗ trợ duy trì độ đàn hồi và mềm mại của da:** Collagen GL góp phần chăm sóc làn da kém săn chắc, giúp bề mặt da trông căng mịn và mềm mại hơn.

- **Kết cấu gel thạch nhẹ, dễ sử dụng:** Chất gel dễ tán, tạo cảm giác ẩm mượt mà không quá nặng trên da.

---

**Hướng dẫn sử dụng**

- Sau khi làm sạch da, lấy một lượng gel vừa đủ và chấm lên trán, mũi, cằm và hai má.

- Massage nhẹ nhàng để sản phẩm được dàn đều trên da.

- Khi da khô hoặc cần bổ sung độ ẩm nhiều hơn, có thể thoa lớp dày hơn vào buổi tối và sử dụng như mặt nạ ngủ.
`,
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
    images: [
      "https://images.tutatuta.vn/image/products/transino/1.png",
      "https://images.tutatuta.vn/image/products/transino/2.png",
      "https://images.tutatuta.vn/image/products/transino/3.png",
      "https://images.tutatuta.vn/image/products/transino/4.png",
    ],
    shortDescription:
      "Tinh chất Transino Melano Signal Essence hỗ trợ cải thiện thâm sạm, nám và tàn nhang, đồng thời dưỡng sáng và giúp da đều màu hơn.",
    description: `
**Ưu điểm nổi bật**

- **Hỗ trợ chăm sóc làn da có thâm sạm và không đều màu:** Tranexamic Acid là thành phần thường được sử dụng trong các sản phẩm chăm sóc da hỗ trợ cải thiện vẻ ngoài của các vùng da xỉn màu, đốm nâu và thâm sạm.

- **Hỗ trợ dưỡng sáng da:** Kết hợp các thành phần dưỡng sáng giúp chăm sóc làn da xỉn màu, hỗ trợ duy trì sắc da đều và tươi sáng hơn.

- **Hỗ trợ cấp ẩm và duy trì hàng rào bảo vệ da:** Công thức dưỡng ẩm giúp hạn chế cảm giác khô ráp, đồng thời hỗ trợ duy trì độ mềm mại và độ ẩm của da.

- **Kết cấu mỏng nhẹ, dễ sử dụng:** Chất kem dễ tán, thẩm thấu nhanh và phù hợp với chu trình chăm sóc da hằng ngày.

---

**Hướng dẫn sử dụng**

- **Tần suất:** Dùng 2 lần mỗi ngày, vào buổi sáng và buổi tối, sau bước làm sạch và nước hoa hồng.

- **Cách dùng:** Lấy một lượng vừa đủ, thoa lên các vùng da có đốm nâu, thâm sạm hoặc không đều màu, sau đó dàn đều sản phẩm trên da.

- **Bước tiếp theo:** Tiếp tục với kem dưỡng để duy trì độ ẩm cho da.

- **Ban ngày:** Nên kết hợp sử dụng kem chống nắng để hỗ trợ bảo vệ da trước tác động của tia UV.
`,
  },
  {
    id: "10",
    slug: "kem-duong-curel-aging-care-moisture-facial-cream-40g",
    nameVi: "Kem dưỡng Curél Aging Care Moisture Facial Cream 40g",
    brand: "Curél",
    category: "Mỹ phẩm",
    referencePriceVnd: 520800,
    specification: "Hũ 40g",
    images: [
      "https://images.tutatuta.vn/image/products/aging-care/1.png",
      "https://images.tutatuta.vn/image/products/aging-care/2.png",
      "https://images.tutatuta.vn/image/products/aging-care/3.png",
    ],
    shortDescription:
      "Kem dưỡng Curél Aging Care Moisture Facial Cream hỗ trợ cấp ẩm, củng cố hàng rào bảo vệ da và chăm sóc làn da khô, nhạy cảm có dấu hiệu lão hóa.",
    description: `
**Ưu điểm nổi bật**

- **Hỗ trợ cấp ẩm và duy trì độ ẩm cho da:** Công thức chứa Ceramide giúp bổ sung độ ẩm, hỗ trợ làm mềm da khô ráp và duy trì hàng rào bảo vệ tự nhiên của da.

- **Hỗ trợ chăm sóc da có dấu hiệu lão hóa:** Sản phẩm góp phần duy trì độ đàn hồi và độ mềm mại của da, phù hợp với làn da khô hoặc bắt đầu xuất hiện các dấu hiệu lão hóa.

- **Hỗ trợ củng cố hàng rào bảo vệ da:** Ceramide và các thành phần dưỡng ẩm giúp duy trì hàng rào ẩm tự nhiên, hỗ trợ giảm cảm giác khô căng và khó chịu ở da nhạy cảm.

- **Công thức dịu nhẹ:** Phù hợp với nhu cầu chăm sóc da khô và nhạy cảm hằng ngày. Nên tham khảo thông tin chính thức trên bao bì để xác nhận các đặc tính như không cồn, không hương liệu hoặc không chất tạo màu.

---

**Thành phần nổi bật**

- **Ceramide:** Hỗ trợ duy trì độ ẩm và hàng rào bảo vệ tự nhiên của da.

- **Niacinamide (Vitamin B3):** Thành phần thường được sử dụng trong các sản phẩm chăm sóc da nhằm hỗ trợ duy trì hàng rào da và cải thiện vẻ ngoài của làn da.

- **Các thành phần dầu dưỡng và chất làm mềm da:** Hỗ trợ bổ sung độ ẩm và làm mềm các vùng da khô ráp.

---

**Hướng dẫn sử dụng**

- **Tần suất:** Dùng vào buổi sáng và buổi tối sau bước làm sạch và nước hoa hồng.

- **Cách dùng:** Lấy một lượng kem vừa đủ, chấm lên trán, mũi, cằm và hai má rồi thoa đều trên da.

- **Vùng da khô:** Có thể thoa lượng nhiều hơn tại các vùng da khô hoặc cần được dưỡng ẩm thêm.
`,
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
    images: [
      "https://images.tutatuta.vn/image/products/aging-care-1/1.png",
      "https://images.tutatuta.vn/image/products/aging-care-1/2.png",
      "https://images.tutatuta.vn/image/products/aging-care-1/3.png",
      "https://images.tutatuta.vn/image/products/aging-care-1/4.png",
    ],
    shortDescription:
      "Kem dưỡng đêm Transino Whitening Repair Cream EX hỗ trợ dưỡng sáng, duy trì độ ẩm và chăm sóc làn da có thâm sạm, không đều màu.",
    description: `
**Ưu điểm nổi bật**

- **Hỗ trợ dưỡng sáng da vào ban đêm:** Công thức có Tranexamic Acid và các thành phần chăm sóc da giúp hỗ trợ cải thiện vẻ ngoài của các vùng da xỉn màu, thâm sạm và không đều màu.

- **Hỗ trợ chăm sóc làn da sau một ngày tiếp xúc với môi trường:** Sản phẩm giúp bổ sung độ ẩm, làm dịu cảm giác khô căng và hỗ trợ duy trì độ mềm mại, săn chắc của da.

- **Duy trì độ ẩm suốt quá trình chăm sóc ban đêm:** Kết cấu dưỡng ẩm giúp hạn chế cảm giác khô ráp và hỗ trợ duy trì làn da mềm mại, căng mịn vào sáng hôm sau.

- **Kết cấu gel cream mỏng nhẹ:** Chất kem dễ tán, thấm nhanh và phù hợp để sử dụng ở bước cuối của chu trình dưỡng da buổi tối.

---

**Hướng dẫn sử dụng**

- **Thời điểm dùng:** Sử dụng vào buổi tối ở bước cuối của chu trình dưỡng da, sau nước hoa hồng và tinh chất.

- **Cách dùng:** Lấy một lượng kem vừa đủ, chấm lên trán, hai má, mũi và cằm rồi thoa đều trên toàn mặt.

- **Massage nhẹ nhàng:** Có thể massage nhẹ theo hướng từ dưới lên trên để sản phẩm được dàn đều trên da.

- **Bước hoàn thiện:** Có thể áp nhẹ hai lòng bàn tay lên mặt sau khi thoa để hoàn tất bước dưỡng da.
`,
  },
  {
    id: "12",
    slug: "ma-hong-kem-canmake-cream-cheek",
    nameVi: "Má hồng kem Canmake Cream Cheek Nhật Bản",
    brand: "Canmake",
    category: "Mỹ phẩm",
    referencePriceVnd: 185000,
    originalPriceVnd: 117600,
    images: [
      "https://images.tutatuta.vn/image/products/canmake2/1.png",
      "https://images.tutatuta.vn/image/products/canmake2/2.png",
      "https://images.tutatuta.vn/image/products/canmake2/3.png",
      "https://images.tutatuta.vn/image/products/canmake2/4.png",
      "https://images.tutatuta.vn/image/products/canmake2/5.png",
      "https://images.tutatuta.vn/image/products/canmake2/6.png",
    ],
    shortDescription:
      "Má hồng kem Canmake Cream Cheek có kết cấu gel kem mịn nhẹ, cho hiệu ứng ửng hồng tự nhiên, dễ tán và dễ điều chỉnh độ đậm nhạt.",
    description: `
**Ưu điểm nổi bật**

- **Kết cấu kem gel mịn nhẹ:** Chất kem mềm mượt, dễ tán và tiệp vào da, tạo lớp finish tự nhiên mà không gây cảm giác quá nặng hay nhờn rít.

- **Màu sắc trong trẻo, dễ điều chỉnh:** Màu lên nhẹ nhàng, có thể tăng dần độ đậm theo nhu cầu, phù hợp với phong cách trang điểm tự nhiên.

- **Độ bám màu tốt:** Công thức giúp màu má duy trì ổn định trong nhiều giờ và phù hợp với nhu cầu trang điểm hằng ngày.

- **Bổ sung thành phần dưỡng da:** Squalane và amino acid hỗ trợ duy trì độ ẩm, giúp vùng da gò má mềm mại và hạn chế cảm giác khô ráp.

---

**Bảng màu**

- **P01 Peach Dazzle:** Đỏ hồng
- **19 Cinnamon Milk Tea:** Nâu trà sữa
- **21 Tangerine Tea:** Hồng cam đào
- **CL01 Clear Red Heart:** Đỏ táo
- **16 Almond Terracotta:** Cam gạch ánh đào
- **05 Sweet Apricot:** Cam đào
- **P02 Rose Petal:** Hồng đào
- **23 Cupid Pink:** Hồng sữa
- **P06 Sweet Coral:** Hồng san hô ngọt ngào
- **40th Anniversary - CL01 Clear Red Heart:** Cam đỏ
- **40th Anniversary - 23 Cupid Pink:** Hồng sữa
- **40th Anniversary - 24 Peach Mousse:** Kem mousse đào
`,
  },
  {
    id: "13",
    slug: "nuoc-nho-mat-lion-smile-40-ex-15ml",
    nameVi: "Nước nhỏ mắt Lion Smile 40 EX Nhật Bản 15ml",
    brand: "Lion",
    category: "Thuốc",
    referencePriceVnd: 80000,
    specification: "Chai 15ml",
    images: [
      "https://images.tutatuta.vn/image/products/smile/1.png",
      "https://images.tutatuta.vn/image/products/smile/2.png",
      "https://images.tutatuta.vn/image/products/smile/3.png",
      "https://images.tutatuta.vn/image/products/smile/4.png",
    ],
    shortDescription:
      "Nước nhỏ mắt Lion Smile 40 EX 15ml chứa vitamin A, E và B6, hỗ trợ làm dịu cảm giác mỏi, khô và khó chịu ở mắt.",
    description: `
**Ưu điểm nổi bật**

- **Bổ sung các vitamin hỗ trợ chăm sóc mắt:** Công thức chứa Vitamin A, Vitamin E và Vitamin B6, góp phần hỗ trợ duy trì chức năng bình thường của mắt và chăm sóc mắt khi phải điều tiết nhiều.

- **Hỗ trợ làm dịu cảm giác mỏi mắt:** Phù hợp với người thường xuyên sử dụng máy tính, điện thoại hoặc làm việc trong môi trường khiến mắt phải tập trung lâu.

- **Hỗ trợ giảm cảm giác khó chịu ở mắt:** Sản phẩm có thể hỗ trợ làm dịu cảm giác cộm, ngứa hoặc khó chịu do các tác nhân môi trường như bụi bẩn hoặc không khí khô.

- **Có nhiều mức độ the mát:** Hai phiên bản mang lại cảm giác sử dụng khác nhau, phù hợp với nhu cầu và mức độ nhạy cảm của từng người.

---

**Hướng dẫn sử dụng**

- **Liều dùng:** Nhỏ từ 1 đến 3 giọt mỗi lần vào từng bên mắt.

- **Tần suất:** Sử dụng từ 3 đến 6 lần mỗi ngày theo hướng dẫn của sản phẩm.

- **Bảo quản:** Để nơi khô ráo, tránh ánh nắng trực tiếp và đóng chặt nắp sau khi sử dụng.

- **Lưu ý:** Tránh để đầu lọ tiếp xúc trực tiếp với mắt, mí mắt hoặc lông mi. Nếu đang có bệnh lý về mắt, đang điều trị bằng thuốc hoặc triệu chứng kéo dài, nên tham khảo bác sĩ hoặc dược sĩ.
`,
  },
  {
    id: "14",
    slug: "nuoc-nho-mat-sante-medical-guard-ex-12ml",
    nameVi: "Nước nhỏ mắt Sante Medical Guard EX 12ml",
    brand: "Sante",
    category: "Thuốc",
    referencePriceVnd: 240000,
    specification: "Chai 12ml",
    images: [
      "https://images.tutatuta.vn/image/products/sante/1.png",
      "https://images.tutatuta.vn/image/products/sante/2.png",
    ],
    shortDescription:
      "Nước nhỏ mắt Sante Medical Guard EX 12ml hỗ trợ làm dịu tình trạng mỏi, khô và khó chịu ở mắt khi phải điều tiết nhiều.",
    description: `
**Ưu điểm nổi bật**

- **Công thức kết hợp nhiều hoạt chất:** Sản phẩm chứa các thành phần như Vitamin B12, Neostigmine Methylsulfate, Chondroitin Sulfate Sodium và Chlorpheniramine Maleate, hỗ trợ chăm sóc mắt khi có cảm giác mỏi hoặc khó chịu.

- **Hỗ trợ khả năng điều tiết của mắt:** Neostigmine Methylsulfate kết hợp Vitamin B12 được sử dụng trong công thức nhằm hỗ trợ chức năng điều tiết của mắt khi phải tập trung nhìn trong thời gian dài.

- **Hỗ trợ làm dịu cảm giác ngứa và khó chịu:** Công thức có Chlorpheniramine Maleate, phù hợp với nhu cầu chăm sóc mắt khi xuất hiện cảm giác ngứa hoặc khó chịu do các tác nhân bên ngoài.

- **Hỗ trợ duy trì độ ẩm bề mặt mắt:** Chondroitin Sulfate Sodium góp phần hỗ trợ duy trì độ ẩm và bảo vệ bề mặt mắt.

---

**Thành phần nổi bật**

- **Vitamin B12:** Thành phần được sử dụng trong công thức hỗ trợ chức năng của mắt.

- **Neostigmine Methylsulfate:** Hỗ trợ chức năng điều tiết của mắt.

- **Chondroitin Sulfate Sodium:** Hỗ trợ duy trì độ ẩm cho bề mặt mắt.

- **Chlorpheniramine Maleate:** Thành phần hỗ trợ giảm cảm giác ngứa và khó chịu ở mắt.

---

**Hướng dẫn sử dụng**

- **Liều dùng:** Nhỏ từ 1 đến 3 giọt mỗi lần vào mỗi bên mắt.

- **Tần suất:** Sử dụng từ 5 đến 6 lần mỗi ngày theo hướng dẫn của sản phẩm.

- **Vệ sinh khi sử dụng:** Tránh để đầu lọ tiếp xúc trực tiếp với mắt, mí mắt hoặc lông mi.

- **Lưu ý:** Không tự ý sử dụng vượt quá hướng dẫn trên bao bì. Nếu đang có bệnh lý về mắt, đang điều trị bằng thuốc hoặc triệu chứng kéo dài, nên tham khảo bác sĩ hoặc dược sĩ.

---

**Đối tượng phù hợp**

- Người thường xuyên sử dụng máy tính, điện thoại hoặc phải tập trung thị giác trong thời gian dài.
- Người thường xuyên lái xe hoặc làm việc trong môi trường điều hòa, khói bụi.
- Người có nhu cầu chăm sóc mắt khi xuất hiện cảm giác mỏi hoặc khó chịu do phải điều tiết nhiều.
`,
  },
  {
    id: "15",
    slug: "vien-uong-glucosamine-orihiro-1500mg-900-vien",
    nameVi: "Viên uống Glucosamine Orihiro 1500mg Nhật Bản 900 viên",
    brand: "ORIHIRO",
    category: "Thực phẩm chức năng",
    referencePriceVnd: 630000,
    originalPriceVnd: 394800,
    specification: "Hộp 900 viên",
    images: [
      "https://images.tutatuta.vn/image/products/glucosamine/1.png",
      "https://images.tutatuta.vn/image/products/glucosamine/2.png",
      "https://images.tutatuta.vn/image/products/glucosamine/3.png",
    ],
    shortDescription:
      "Viên uống Glucosamine Orihiro 1500mg hỗ trợ bổ sung dưỡng chất cho sụn khớp, duy trì khả năng vận động và chăm sóc sức khỏe xương khớp.",
    description: `
**Ưu điểm nổi bật**

- **Bổ sung Glucosamine:** Cung cấp Glucosamine nhằm hỗ trợ duy trì sức khỏe sụn và khớp, phù hợp với người có nhu cầu bổ sung dưỡng chất cho hệ vận động.

- **Hỗ trợ vận động khớp:** Glucosamine góp phần hỗ trợ duy trì chức năng khớp và sự linh hoạt khi vận động hằng ngày.

- **Hỗ trợ giảm cảm giác khó chịu khi vận động:** Sản phẩm phù hợp với người thường xuyên vận động hoặc có nhu cầu chăm sóc sức khỏe xương khớp.

---

**Hướng dẫn sử dụng**

- **Liều dùng:** Uống 10 viên mỗi ngày, chia thành 2 - 3 lần.

- **Thời điểm dùng:** Nên sử dụng sau bữa ăn cùng nước lọc hoặc nước ấm.

- **Lưu ý dị ứng:** Người có tiền sử dị ứng với hải sản như tôm, cua nên kiểm tra kỹ thành phần và cân nhắc trước khi sử dụng.

- **Lưu ý:** Không sử dụng quá liều khuyến nghị. Nếu đang điều trị bệnh xương khớp hoặc đang dùng thuốc, nên tham khảo bác sĩ hoặc dược sĩ trước khi dùng.
`,
  },
  {
    id: "16",
    slug: "mat-na-ba-ruou-sake-wafood-made-pdc-10-mieng",
    nameVi: "Mặt nạ bã rượu Sake Wafood Made PDC Nhật Bản 10 miếng",
    brand: "PDC",
    category: "Mỹ phẩm",
    referencePriceVnd: 210000,
    specification: "Gói 10 miếng",
    images: [
      "https://images.tutatuta.vn/image/products/sake-wafood/1.png",
      "https://images.tutatuta.vn/image/products/sake-wafood/2.png",
      "https://images.tutatuta.vn/image/products/sake-wafood/3.png",
    ],
    shortDescription:
      "Mặt nạ giấy Wafood Made PDC chiết xuất bã rượu sake hỗ trợ cấp ẩm, làm mềm da và cải thiện bề mặt da xỉn màu, thô ráp.",
    description: `
**Ưu điểm nổi bật**

- **Hỗ trợ dưỡng sáng da:** Công thức có các thành phần từ quá trình lên men sake và Kojic Acid, hỗ trợ cải thiện vẻ ngoài của làn da xỉn màu và không đều màu.

- **Hỗ trợ làm mịn bề mặt da:** Giúp chăm sóc vùng da thô ráp, mang lại cảm giác mềm mại và giúp bề mặt da trông mịn màng hơn.

- **Hỗ trợ cấp ẩm:** Thành phần chiết xuất cám gạo, dưa chuột và các dưỡng chất hỗ trợ duy trì độ ẩm, giúp da mềm mại và dễ chịu hơn sau khi sử dụng.

- **Miếng mask ôm sát khuôn mặt:** Chất liệu mặt nạ mỏng, mềm và giữ tinh chất tốt, giúp sản phẩm tiếp xúc đều với bề mặt da trong quá trình sử dụng.

---

**Hướng dẫn sử dụng**

- **Thời gian đắp:** Đắp mặt nạ trên da đã được làm sạch trong khoảng 10 - 15 phút.

- **Sau khi tháo mặt nạ:** Dùng tay vỗ nhẹ để phần tinh chất còn lại được dàn đều trên da.

- **Bước tiếp theo:** Có thể tiếp tục với kem dưỡng để duy trì độ ẩm cho da.

- **Lưu ý:** Không cần rửa lại với nước, trừ khi hướng dẫn trên bao bì sản phẩm có yêu cầu khác.
`,
  },
];
