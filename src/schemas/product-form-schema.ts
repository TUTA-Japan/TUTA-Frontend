import { z } from "zod";

export const PRODUCT_IMAGE_RULES: {
  acceptedTypes: readonly string[];
  maxFileSize: number;
  maxFiles: number;
} = {
  acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
  maxFileSize: 5 * 1024 * 1024,
  maxFiles: 10,
};

export const productFormSchema = z.object({
  nameVi: z.string().trim().min(1, "Vui lòng nhập tên sản phẩm"),

  nameJp: z.string().trim().optional(),

  slug: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập slug")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug chỉ được chứa chữ thường, số và dấu gạch ngang",
    ),

  brand: z.string().trim().min(1, "Vui lòng nhập thương hiệu"),

  category: z.string().trim().min(1, "Vui lòng nhập danh mục"),

  referencePriceVnd: z
    .number({ error: "Vui lòng nhập giá bán" })
    .nonnegative("Giá bán không được nhỏ hơn 0"),

  originalPriceVnd: z
    .number({ error: "Giá gốc không hợp lệ" })
    .nonnegative("Giá gốc không được nhỏ hơn 0")
    .optional(),

  specification: z.string().trim().optional(),

  shortDescription: z.string().trim().optional(),

  description: z.string().trim().optional(),

  images: z
    .array(z.instanceof(File))
    .min(1, "Sản phẩm cần ít nhất một hình ảnh")
    .max(PRODUCT_IMAGE_RULES.maxFiles, "Tối đa 10 hình ảnh"),

  status: z.enum(["draft", "published"]),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
