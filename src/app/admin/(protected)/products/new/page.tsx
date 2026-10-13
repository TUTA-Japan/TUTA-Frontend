import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ProductForm } from "@/components/admin/products/product-form";

export default function NewProductPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <Link
        href="/admin/products"
        className="inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-tuta-green-dark"
      >
        <ArrowLeft className="size-4" />
        Quay lại sản phẩm
      </Link>

      <div className="mt-6 mb-8">
        <p className="text-xs font-medium tracking-[0.16em] text-tuta-green uppercase">
          Sản phẩm
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-text-primary">
          Thêm sản phẩm
        </h1>

        <p className="mt-2 text-sm text-text-secondary">
          Tạo sản phẩm mới cho website TUTA.
        </p>
      </div>

      <ProductForm />
    </div>
  );
}
