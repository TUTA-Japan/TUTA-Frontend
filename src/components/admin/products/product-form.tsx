"use client";

import { useLayoutEffect, useRef, useState, type ChangeEvent } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, Trash2 } from "lucide-react";

import {
  FormField,
  FormSection,
  inputClassName,
  primaryButtonClassName,
  textareaClassName,
} from "@/components/admin/form-primitives";
import {
  PRODUCT_IMAGE_RULES,
  productFormSchema,
  type ProductFormValues,
} from "@/schemas/product-form-schema";
import { createSlug } from "@/utils/slug";

type ProductFormProps = {
  defaultValues?: Partial<ProductFormValues>;
};

const optionalNumber = {
  setValueAs: (value: string) => (value === "" ? undefined : Number(value)),
};

function validateImageFiles(files: File[]) {
  if (
    files.some((file) => !PRODUCT_IMAGE_RULES.acceptedTypes.includes(file.type))
  ) {
    return "Chỉ hỗ trợ JPG, PNG và WebP.";
  }

  if (files.some((file) => file.size > PRODUCT_IMAGE_RULES.maxFileSize)) {
    return "Mỗi hình ảnh không được lớn hơn 5MB.";
  }

  if (files.length > PRODUCT_IMAGE_RULES.maxFiles) {
    return "Tối đa 10 hình ảnh cho một sản phẩm.";
  }

  return null;
}

type ImagePreviewProps = {
  file: File;
  alt: string;
};

function ImagePreview({ file, alt }: ImagePreviewProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const url = URL.createObjectURL(file);

    if (imageRef.current) {
      imageRef.current.src = url;
    }

    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- blob: preview URL cannot go through next/image
    <img
      ref={imageRef}
      alt={alt}
      className="h-full w-full object-contain p-2"
    />
  );
}

export function ProductForm({ defaultValues }: ProductFormProps) {
  const {
    register,
    control,
    handleSubmit,
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

  const images = useWatch({ control, name: "images" });
  const [imageError, setImageError] = useState("");

  function updateImages(nextImages: File[]) {
    setValue("images", nextImages, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  function handleImagesChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);
    event.target.value = "";

    const error = validateImageFiles(selectedFiles);
    setImageError(error ?? "");

    if (!error) {
      updateImages(selectedFiles);
    }
  }

  function removeImage(index: number) {
    updateImages(images.filter((_, imageIndex) => imageIndex !== index));
  }

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
      <FormSection
        title="Thông tin sản phẩm"
        description="Thông tin cơ bản được hiển thị trên website."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            id="nameVi"
            label="Tên sản phẩm"
            error={errors.nameVi?.message}
            className="md:col-span-2"
          >
            <input
              id="nameVi"
              {...register("nameVi", {
                onChange: (event: ChangeEvent<HTMLInputElement>) =>
                  setValue("slug", createSlug(event.target.value), {
                    shouldValidate: true,
                  }),
              })}
              className={inputClassName}
            />
          </FormField>

          <FormField id="nameJp" label="Tên tiếng Nhật (optional)">
            <input
              id="nameJp"
              {...register("nameJp")}
              className={inputClassName}
            />
          </FormField>

          <FormField id="slug" label="Slug" error={errors.slug?.message}>
            <input
              id="slug"
              readOnly
              {...register("slug")}
              className="h-11 w-full cursor-default rounded-lg border border-border bg-surface px-3 text-sm text-text-secondary outline-none"
            />
          </FormField>

          <FormField id="brand" label="Thương hiệu" error={errors.brand?.message}>
            <input
              id="brand"
              {...register("brand")}
              className={inputClassName}
            />
          </FormField>

          <FormField
            id="category"
            label="Danh mục"
            error={errors.category?.message}
          >
            <input
              id="category"
              {...register("category")}
              className={inputClassName}
            />
          </FormField>

          <FormField id="specification" label="Quy cách">
            <input
              id="specification"
              placeholder="30 viên, 7g, 100ml..."
              {...register("specification")}
              className={inputClassName}
            />
          </FormField>

          <FormField id="status" label="Trạng thái">
            <select
              id="status"
              {...register("status")}
              className={inputClassName}
            >
              <option value="draft">Bản nháp</option>

              <option value="published">Công khai</option>
            </select>
          </FormField>
        </div>
      </FormSection>

      <FormSection title="Giá sản phẩm">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            id="referencePriceVnd"
            label="Giá bán"
            error={errors.referencePriceVnd?.message}
          >
            <input
              id="referencePriceVnd"
              type="number"
              min="0"
              {...register("referencePriceVnd", optionalNumber)}
              className={inputClassName}
            />
          </FormField>

          <FormField
            id="originalPriceVnd"
            label="Giá gốc"
            error={errors.originalPriceVnd?.message}
          >
            <input
              id="originalPriceVnd"
              type="number"
              min="0"
              {...register("originalPriceVnd", optionalNumber)}
              className={inputClassName}
            />
          </FormField>
        </div>
      </FormSection>

      <FormSection
        title="Hình ảnh"
        description="Tải hình ảnh sản phẩm từ máy tính. Tối đa 10 ảnh, mỗi ảnh không quá 5MB."
      >
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
          accept={PRODUCT_IMAGE_RULES.acceptedTypes.join(",")}
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

        {images.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {images.map((file, index) => (
              <div
                key={`${file.name}-${file.size}-${file.lastModified}`}
                className="group relative aspect-4/5 overflow-hidden rounded-lg border border-border bg-surface"
              >
                <ImagePreview file={file} alt={`Ảnh sản phẩm ${index + 1}`} />

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
      </FormSection>

      <FormSection title="Nội dung">
        <div className="space-y-5">
          <FormField id="shortDescription" label="Mô tả ngắn">
            <textarea
              id="shortDescription"
              rows={3}
              {...register("shortDescription")}
              className={textareaClassName}
            />
          </FormField>

          <FormField id="description" label="Mô tả chi tiết">
            <textarea
              id="description"
              rows={12}
              placeholder="Có thể nhập Markdown..."
              {...register("description")}
              className={`${textareaClassName} font-mono`}
            />
          </FormField>
        </div>
      </FormSection>

      <div className="flex justify-end gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center justify-center px-6 ${primaryButtonClassName}`}
        >
          {isSubmitting ? "Đang xử lý..." : "Lưu sản phẩm"}
        </button>
      </div>
    </form>
  );
}
