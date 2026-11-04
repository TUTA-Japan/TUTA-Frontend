import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { ProductForm } from "@/components/admin/products/product-form";
import { ROUTES } from "@/constants/routes";

export default function NewProductPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <Link
        href={ROUTES.admin.products}
        className="inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-tuta-green-dark"
      >
        <ArrowLeft className="size-4" />
        Quay lại sản phẩm
      </Link>

      <div className="mt-6 mb-8">
        <AdminPageHeader
          eyebrow="Sản phẩm"
          title="Thêm sản phẩm"
          description="Tạo sản phẩm mới cho website TUTA."
        />
      </div>

      <ProductForm />
    </div>
  );
}
