"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";

import {
  productFormSchema,
  type ProductFormValues,
} from "@/schemas/product-form-schema";
import { useEffect } from "react";

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

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

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

  async function onSubmit(values: ProductFormValues) {
    const payload = {
      ...values,
      images: values.images.map((image) => image.url),
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

            {errors.slug && (
              <p className="mt-1.5 text-xs text-red-600">
                {errors.slug.message}
              </p>
            )}
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
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">
              Hình ảnh
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              Hiện tại nhập URL hình ảnh. Upload file sẽ được kết nối với
              backend sau.
            </p>
          </div>

          <button
            type="button"
            onClick={() => append({ url: "" })}
            className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium text-text-primary transition hover:border-tuta-green"
          >
            <Plus className="size-4" />
            Thêm ảnh
          </button>
        </div>

        <div className="space-y-3">
          {fields.map((field, index) => (
            <div key={field.id}>
              <div className="flex gap-2">
                <input
                  placeholder="https://images.tutatuta.vn/..."
                  {...register(`images.${index}.url`)}
                  className="h-11 min-w-0 flex-1 rounded-lg border border-border bg-background px-3 text-sm outline-none transition focus:border-tuta-green"
                />

                <button
                  type="button"
                  disabled={fields.length === 1}
                  onClick={() => remove(index)}
                  aria-label={`Xóa ảnh ${index + 1}`}
                  className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border text-text-secondary transition hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {errors.images?.[index]?.url && (
                <p className="mt-1.5 text-xs text-red-600">
                  {errors.images[index]?.url?.message}
                </p>
              )}
            </div>
          ))}
        </div>

        {errors.images?.root && (
          <p className="mt-2 text-xs text-red-600">
            {errors.images.root.message}
          </p>
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
