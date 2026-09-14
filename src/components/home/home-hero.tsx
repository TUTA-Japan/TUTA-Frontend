import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";

export function HomeHero() {
  return (
    <section
      className="border-b border-border"
      aria-labelledby="home-hero-title"
    >
      <div className="mx-auto grid max-w-350 lg:min-h-170 lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-20 md:px-8 md:py-28 lg:col-span-7 lg:border-r lg:border-border lg:px-12 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tuta-green">
            TUTA Japan Select
          </p>

          <h1
            id="home-hero-title"
            className="mt-6 max-w-4xl text-[clamp(2.25rem,5.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-text-primary"
          >
            Đồ Nhật đáng dùng, được chọn cho bạn.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#59635b] md:text-lg md:leading-8">
            TUTA giúp người Việt khám phá sản phẩm nội địa Nhật qua những lựa
            chọn có gu, thông tin rõ ràng và giá trị sử dụng thực tế.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href={ROUTES.products}
              className="group inline-flex min-h-12 items-center gap-3 bg-tuta-green-dark px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-tuta-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuta-green motion-reduce:transition-none"
            >
              Khám phá sản phẩm
              <ArrowRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </Link>

            <Link
              href={ROUTES.categories}
              className="group inline-flex min-h-12 items-center gap-2 border-b border-tuta-green text-sm font-semibold text-tuta-green-dark transition-colors duration-200 hover:border-tuta-orange hover:text-tuta-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuta-green motion-reduce:transition-none"
            >
              Xem theo danh mục
              <ArrowRight
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="bg-tuta-green-light px-5 py-10 md:px-8 md:py-14 lg:col-span-5 lg:px-10 lg:py-16"
        >
          <div className="relative flex min-h-115 h-full overflow-hidden border border-tuta-green/25 bg-background p-6 md:min-h-[520px] md:p-9 lg:min-h-0">
            <div className="absolute top-[8%] right-[7%] size-[clamp(9rem,18vw,15rem)] rounded-full border border-tuta-orange/25 bg-tuta-orange-light" />
            <div className="absolute top-0 bottom-0 left-[34%] w-px bg-tuta-green/15" />
            <div className="absolute right-0 bottom-[20%] left-0 h-px bg-tuta-green/15" />

            <div className="relative flex w-full flex-col justify-between">
              <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-tuta-green-dark">
                <span>Japan</span>
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-tuta-orange" />
                  Vietnam
                </span>
              </div>

              <div className="grid grid-cols-[auto_1fr] items-center gap-7 md:gap-9">
                <p
                  lang="ja"
                  className="text-[clamp(4.75rem,13vw,8.5rem)] font-medium leading-none tracking-[-0.12em] text-tuta-green-dark"
                >
                  日本
                </p>

                <div className="border-l border-tuta-green/35 pl-5 md:pl-7">
                  <p className="max-w-44 text-xl font-semibold leading-tight tracking-[-0.035em] text-text-primary md:text-2xl">
                    Những điều hay từ Nhật Bản.
                  </p>
                  <p className="mt-4 max-w-44 text-xs leading-5 text-[#59635b] md:text-sm md:leading-6">
                    Được chọn lọc và kể lại bằng tiếng Việt.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-tuta-green/25 pt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-tuta-green-dark md:text-[11px]">
                <span>Chọn lọc</span>
                <span className="text-center">Dễ hiểu</span>
                <span className="text-right">Gần gũi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
