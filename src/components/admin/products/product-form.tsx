"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, Trash2 } from "lucide-react";

import {
  productFormSchema,
  type ProductFormValues,
} from "@/schemas/product-form-schema";
import { useEffect, useState } from "react";

type ProductFormProps = {
  defaultValues?: Partial<ProductFormValues>;
};

export function ProductForm({ defaultValues }: ProductFormProps) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      nameVi: "",
      nameJp: "",
      slug: "",
      brand: "",
      category: "",
      specification: "",
      shortDescription: "",
      description: "",
      images: [],
      status: "draft",
      ...defaultValues,
    },
  });

  const images = watch("images");
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageError, setImageError] = useState("");

  const nameVi = watch("nameVi");

  useEffect(() => {
    setValue("slug", createSlug(nameVi), {
      shouldValidate: true,
    });
  }, [nameVi, setValue]);

  function createSlug(value: string) {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function handleImagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);

    setImageError("");

    const validTypes = ["image/jpeg", "image/png", "image/webp"];

    const maxFileSize = 5 * 1024 * 1024;

    const invalidType = selectedFiles.find(
      (file) => !validTypes.includes(file.type),
    );

    if (invalidType) {
      setImageError("Chỉ hỗ trợ JPG, PNG và WebP.");
      event.target.value = "";
      return;
    }

    const oversizedFile = selectedFiles.find((file) => file.size > maxFileSize);

    if (oversizedFile) {
      setImageError("Mỗi hình ảnh không được lớn hơn 5MB.");
      event.target.value = "";
      return;
    }

    if (selectedFiles.length > 10) {
      setImageError("Tối đa 10 hình ảnh cho một sản phẩm.");
      event.target.value = "";
      return;
    }

    setValue("images", selectedFiles, {
      shouldValidate: true,
      shouldDirty: true,
    });

    event.target.value = "";
  }

  function removeImage(index: number) {
    const nextImages = images.filter((_, imageIndex) => imageIndex !== index);

    setValue("images", nextImages, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  useEffect(() => {
    const urls = images.map((file) => URL.createObjectURL(file));

    setImagePreviews(urls);

    return () => {
      urls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [images]);

  async function onSubmit(values: ProductFormValues) {
    const payload = {
      ...values,
      images: values.images.map((image) => image.name),
    };

    // TODO: Send payload to backend when API is available.
    console.log(payload);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Basic information */}
      <section className="rounded-xl border border-border bg-background p-5 md:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary">
            Thông tin sản phẩm
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Thông tin cơ bản được hiển thị trên website.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label
              htmlFor="nameVi"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Tên sản phẩm
            </label>

            <input
              id="nameVi"
              {...register("nameVi")}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            />

            {errors.nameVi && (
              <p className="mt-1.5 text-xs text-red-600">
                {errors.nameVi.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="nameJp"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Tên tiếng Nhật (optional)
            </label>

            <input
              id="nameJp"
              {...register("nameJp")}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            />
          </div>

          <div>
            <label
              htmlFor="slug"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Slug
            </label>

            <input
              id="slug"
              readOnly
              {...register("slug")}
              className="h-11 w-full cursor-default rounded-lg border border-border bg-surface px-3 text-sm text-text-secondary outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="brand"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Thương hiệu
            </label>

            <input
              id="brand"
              {...register("brand")}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            />

            {errors.brand && (
              <p className="mt-1.5 text-xs text-red-600">
                {errors.brand.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Danh mục
            </label>

            <input
              id="category"
              {...register("category")}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            />

            {errors.category && (
              <p className="mt-1.5 text-xs text-red-600">
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="specification"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Quy cách
            </label>

            <input
              id="specification"
              placeholder="30 viên, 7g, 100ml..."
              {...register("specification")}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Trạng thái
            </label>

            <select
              id="status"
              {...register("status")}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            >
              <option value="draft">Bản nháp</option>

              <option value="published">Công khai</option>
            </select>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="rounded-xl border border-border bg-background p-5 md:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary">
            Giá sản phẩm
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="referencePriceVnd"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Giá bán
            </label>

            <input
              id="originalPriceVnd"
              type="number"
              min="0"
              {...register("originalPriceVnd", {
                setValueAs: (value) =>
                  value === "" ? undefined : Number(value),
              })}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            />

            {errors.referencePriceVnd && (
              <p className="mt-1.5 text-xs text-red-600">
                {errors.referencePriceVnd.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="originalPriceVnd"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Giá gốc
            </label>

            <input
              id="originalPriceVnd"
              type="number"
              min="0"
              {...register("originalPriceVnd")}
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
            />

            {errors.originalPriceVnd && (
              <p className="mt-1.5 text-xs text-red-600">
                {errors.originalPriceVnd.message}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="rounded-xl border border-border bg-background p-5 md:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary">Hình ảnh</h2>

          <p className="mt-1 text-sm text-text-secondary">
            Tải hình ảnh sản phẩm từ máy tính. Tối đa 10 ảnh, mỗi ảnh không quá
            5MB.
          </p>
        </div>

        <label
          htmlFor="product-images"
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-6 py-10 text-center transition hover:border-tuta-green"
        >
          <Upload className="size-6 text-tuta-green" />

          <span className="mt-3 text-sm font-medium text-text-primary">
            Chọn hình ảnh
          </span>

          <span className="mt-1 text-xs text-text-secondary">
            JPG, PNG hoặc WebP
          </span>
        </label>

        <input
          id="product-images"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={handleImagesChange}
          className="sr-only"
        />

        {imageError && (
          <p className="mt-2 text-xs text-red-600">{imageError}</p>
        )}

        {errors.images?.message && (
          <p className="mt-2 text-xs text-red-600">{errors.images.message}</p>
        )}

        {imagePreviews.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {imagePreviews.map((src, index) => (
              <div
                key={src}
                className="group relative aspect-4/5 overflow-hidden rounded-lg border border-border bg-surface"
              >
                <img
                  src={src}
                  alt={`Ảnh sản phẩm ${index + 1}`}
                  className="h-full w-full object-contain p-2"
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  aria-label={`Xóa ảnh ${index + 1}`}
                  className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-red-600"
                >
                  <Trash2 className="size-4" />
                </button>

                {index === 0 && (
                  <span className="absolute bottom-2 left-2 rounded-full bg-tuta-green px-2 py-1 text-[10px] font-semibold text-white">
                    Ảnh đại diện
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
      {/* Description */}
      <section className="rounded-xl border border-border bg-background p-5 md:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary">Nội dung</h2>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="shortDescription"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Mô tả ngắn
            </label>

            <textarea
              id="shortDescription"
              rows={3}
              {...register("shortDescription")}
              className="w-full resize-y rounded-lg border border-border bg-background px-3 py-2.5 text-sm leading-6 outline-none transition focus:border-tuta-green"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Mô tả chi tiết
            </label>

            <textarea
              id="description"
              rows={12}
              placeholder="Có thể nhập Markdown..."
              {...register("description")}
              className="w-full resize-y rounded-lg border border-border bg-background px-3 py-2.5 font-mono text-sm leading-6 outline-none transition focus:border-tuta-green"
            />
          </div>
        </div>
      </section>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-tuta-green px-6 text-sm font-semibold text-white transition hover:bg-tuta-green-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Đang xử lý..." : "Lưu sản phẩm"}
        </button>
      </div>
    </form>
  );
}
