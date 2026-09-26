import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { products } from "@/data/products";
import { ROUTES } from "@/constants/routes";
import { HomeHero } from "@/components/home/home-hero";
import { ProductGrid } from "@/components/products/product-grid";

export const metadata: Metadata = {
  title: "TUTA Japan Select | Khám phá sản phẩm nội địa Nhật",
  description:
    "TUTA tuyển chọn và giới thiệu sản phẩm nội địa Nhật dành cho người Việt.",
};

const selectionPrinciples = [
  {
    title: "Đáng dùng hằng ngày",
    description:
      "Ưu tiên những sản phẩm có công dụng rõ ràng và phù hợp với nhịp sống thực tế.",
  },
  {
    title: "Thông tin dễ hiểu",
    description:
      "Giải thích sản phẩm bằng tiếng Việt, tập trung vào điều bạn cần biết trước khi lựa chọn.",
  },
  {
    title: "Chọn lọc có chủ đích",
    description:
      "Mỗi sản phẩm xuất hiện vì một lý do cụ thể, không chạy theo số lượng hay xu hướng ngắn hạn.",
  },
];

const featuredBrands = ["Rohto", "Hada Labo", "MUJI", "Kao", "Pilot", "Zebra"];

export default function Home() {
  const featuredIndexes = [15, 2, 6, 10];

  const featuredProducts = featuredIndexes
    .map((index) => products[index])
    .filter(Boolean);

  return (
    <main
      id="main-content"
      className="home-page w-full max-w-full overflow-x-hidden"
    >
      <HomeHero />

      <section
        aria-labelledby="home-products-title"
        className="border-y border-border bg-surface px-5 py-24 md:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-350">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tuta-green">
                Tuyển chọn gần đây
              </p>
              <h2
                id="home-products-title"
                className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-text-primary md:text-5xl"
              >
                Những sản phẩm đáng chú ý
              </h2>
            </div>

            <Link
              href={ROUTES.products}
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-tuta-green-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuta-green"
            >
              Tất cả sản phẩm
              <ArrowRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </Link>
          </div>

          <div className="mt-12">
            <ProductGrid products={featuredProducts} headingLevel="h3" />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="home-selection-title"
        className="px-5 py-24 md:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto grid max-w-350 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tuta-green">
              Cách TUTA chọn sản phẩm
            </p>
            <h2
              id="home-selection-title"
              className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-text-primary md:text-5xl"
            >
              Một lựa chọn tốt bắt đầu từ thông tin đủ rõ.
            </h2>
          </div>

          <dl className="border-t border-border lg:col-span-7">
            {selectionPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="grid gap-3 border-b border-border py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:py-9"
              >
                <dt className="text-base font-semibold text-text-primary">
                  {principle.title}
                </dt>
                <dd className="text-sm leading-7 text-[#59635b]">
                  {principle.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="home-brands-title"
        className="border-y border-border bg-tuta-green-light px-5 py-20 md:px-8 md:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-350">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <h2
              id="home-brands-title"
              className="text-2xl font-semibold tracking-[-0.03em] text-text-primary md:text-4xl capitalize"
            >
              Những thương hiệu quen thuộc từ Nhật
            </h2>
            <p className="text-sm text-[#59635b]">
              Được chọn theo từng nhu cầu
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 border-t border-l border-tuta-green/25 sm:grid-cols-3 lg:grid-cols-6">
            {featuredBrands.map((brand) => (
              <li
                key={brand}
                className="flex min-h-24 items-center justify-center border-r border-b border-tuta-green/25 px-4 text-center text-sm font-semibold tracking-wide text-tuta-green-dark md:min-h-28"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-tuta-green-dark px-5 py-20 text-white md:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-350 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tuta-green-light">
              Tiếp tục khám phá
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Tìm món đồ Nhật phù hợp với nhịp sống của bạn.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={ROUTES.products}
              className="group inline-flex min-h-12 items-center gap-3 bg-white px-5 text-sm font-semibold text-tuta-green-dark transition-colors duration-200 hover:bg-tuta-green-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            >
              Xem sản phẩm
              <ArrowRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </Link>
            <Link
              href={ROUTES.categories}
              className="inline-flex min-h-12 items-center border border-white/45 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            >
              Chọn theo danh mục
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
