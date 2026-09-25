import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { ROUTES } from "@/constants/routes";
import type { Product } from "@/types/product";
import { CONTACT_LINKS } from "@/constants/contact";
import { ProductContact } from "@/components/products/product-contact";
import { ProductGallery } from "@/components/products/product-gallery";

type ProductDetailProps = {
  product: Product;
};

function formatVnd(value: number) {
  return `${value.toLocaleString("vi-VN")} ₫`;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const hasDiscount =
    product.referencePriceVnd &&
    product.originalPriceVnd &&
    product.originalPriceVnd > product.referencePriceVnd;

  const discountPercent = hasDiscount
    ? Math.round(
        ((product.originalPriceVnd! - product.referencePriceVnd!) /
          product.originalPriceVnd!) *
          100,
      )
    : null;

  return (
    <main className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12 lg:px-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text-secondary">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link
              href={ROUTES.home}
              className="transition-colors hover:text-tuta-green-dark"
            >
              Trang chủ
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li>
            <Link
              href={ROUTES.products}
              className="transition-colors hover:text-tuta-green-dark"
            >
              Sản phẩm
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li
            aria-current="page"
            className="max-w-64 truncate text-text-primary"
          >
            {product.nameVi}
          </li>
        </ol>
      </nav>

      <div className="min-w-0 flex flex-col"></div>

      <section className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <ProductGallery
            images={product.images}
            productName={product.nameVi}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-medium tracking-[0.16em] text-text-secondary uppercase">
            {product.brand}
          </p>

          <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-text-primary md:text-4xl">
            {product.nameVi}
          </h1>

          {/* {product.nameJp && (
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {product.nameJp}
            </p>
          )} */}

          {product.referencePriceVnd !== undefined && (
            <div className="mt-7">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <p className="text-2xl font-semibold text-text-primary">
                  {formatVnd(product.referencePriceVnd)}
                </p>

                {hasDiscount && (
                  <>
                    <p className="text-sm text-text-secondary line-through">
                      {formatVnd(product.originalPriceVnd!)}
                    </p>

                    <span className="text-xs font-medium text-tuta-orange">
                      -{discountPercent}%
                    </span>
                  </>
                )}
              </div>
            </div>
          )}

          <ProductContact
            zaloUrl={CONTACT_LINKS.zalo}
            facebookUrl={CONTACT_LINKS.facebook}
          />

          {product.shortDescription && (
            <p className="mt-8 max-w-xl text-base leading-7 text-text-secondary">
              {product.shortDescription}
            </p>
          )}

          <dl className="mt-10 divide-y divide-border border-y border-border">
            <div className="grid grid-cols-[120px_1fr] gap-4 py-4">
              <dt className="text-sm text-text-secondary">Thương hiệu</dt>
              <dd className="text-sm font-medium text-text-primary">
                {product.brand}
              </dd>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-4 py-4">
              <dt className="text-sm text-text-secondary">Danh mục</dt>
              <dd className="text-sm font-medium text-text-primary">
                {product.category}
              </dd>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-4 py-4">
              <dt className="text-sm text-text-secondary">Xuất xứ</dt>
              <dd className="text-sm font-medium text-text-primary">
                Nhật Bản
              </dd>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-4 py-4">
              <dt className="text-sm text-text-secondary">Quy cách</dt>
              <dd className="text-sm font-medium text-text-primary">
                {product.specification ?? "Đang cập nhật"}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {product.description && (
        <section className="mt-16 border-t border-border pt-10 md:mt-20 md:pt-14">
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
            <h2 className="text-lg font-semibold text-text-primary">
              Thông tin sản phẩm
            </h2>

            <div className="max-w-3xl">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="mb-4 text-base leading-8 text-text-secondary last:mb-0">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-text-primary">
                      {children}
                    </strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-5 space-y-2 pl-5 text-base leading-8 text-text-secondary">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="list-disc pl-1">{children}</li>
                  ),
                  hr: () => <hr className="my-7 border-border" />,
                }}
              >
                {product.description}
              </ReactMarkdown>
            </div>
          </div>
        </section>
      )}

      <section className="mt-12 border-t border-border pt-10">
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
          <h2 className="text-lg font-semibold text-text-primary">Lưu ý</h2>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-text-secondary">
              Giá hiển thị là giá tham khảo tại Việt Nam và có thể thay đổi theo
              thời điểm.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
