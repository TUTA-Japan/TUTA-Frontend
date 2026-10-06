import type { Metadata } from "next";
import Link from "next/link";

import { CONTACT_LINKS } from "@/constants/contact";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Hướng dẫn mua hàng | TUTA",
  description:
    "Hướng dẫn cách xem sản phẩm, liên hệ, xác nhận đơn hàng và nhận hàng tại TUTA.",
};

const steps = [
  {
    number: "01",
    title: "Chọn sản phẩm",
    description:
      "Xem thông tin sản phẩm trên website TUTA và chọn sản phẩm bạn quan tâm.",
  },
  {
    number: "02",
    title: "Liên hệ TUTA",
    description:
      "Liên hệ với TUTA qua Zalo hoặc Facebook và gửi tên hoặc đường dẫn sản phẩm bạn muốn đặt.",
  },
  {
    number: "03",
    title: "Xác nhận đơn hàng",
    description:
      "TUTA sẽ xác nhận tình trạng hàng, giá tại thời điểm đặt, số lượng, thông tin nhận hàng và chi phí vận chuyển nếu có.",
  },
  {
    number: "04",
    title: "Nhận hàng",
    description:
      "Sau khi thông tin đơn hàng được xác nhận, sản phẩm sẽ được gửi đến địa chỉ nhận hàng mà bạn đã cung cấp.",
  },
];

const policies = [
  {
    title: "Giá sản phẩm được xác nhận thế nào?",
    paragraphs: [
      "Giá hiển thị trên website là giá tham khảo tại thời điểm cập nhật và có thể thay đổi tùy theo tình trạng hàng, thời điểm nhập hàng và các yếu tố liên quan. TUTA sẽ xác nhận lại giá với bạn trước khi hoàn tất việc đặt hàng.",
    ],
  },
  {
    title: "Thời gian và chi phí giao hàng",
    paragraphs: [
      "Thời gian và chi phí giao hàng phụ thuộc vào địa chỉ nhận hàng, tình trạng sản phẩm và đơn vị vận chuyển. Thông tin cụ thể sẽ được TUTA xác nhận với bạn trước khi gửi hàng.",
    ],
  },
  {
    title: "Đổi trả & hỗ trợ sau khi nhận hàng",
    paragraphs: [
      "Nếu sản phẩm nhận được có vấn đề về tình trạng hàng hóa, sai sản phẩm hoặc xảy ra sự cố trong quá trình vận chuyển, vui lòng liên hệ với TUTA sớm nhất có thể và cung cấp hình ảnh sản phẩm để được hỗ trợ.",
      "Việc đổi trả sẽ được xem xét dựa trên tình trạng thực tế của sản phẩm và đơn hàng.",
    ],
  },
];

const focusClass =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tuta-green";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 shrink-0"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}

export default function PurchaseGuidePage() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-7xl px-5 pt-8 pb-20 md:px-8 md:pt-10 md:pb-28 lg:px-12"
    >
      <nav
        aria-label="Breadcrumb"
        className="text-xs text-text-secondary md:text-sm"
      >
        <ol className="flex flex-wrap items-center gap-3">
          <li>
            <Link
              href={ROUTES.home}
              className={`transition-colors hover:text-tuta-green-dark ${focusClass}`}
            >
              Trang chủ
            </Link>
          </li>
          <li aria-hidden="true" className="text-border">
            /
          </li>
          <li aria-current="page" className="text-text-primary">
            Hướng dẫn mua hàng
          </li>
        </ol>
      </nav>

      <section
        aria-labelledby="purchase-title"
        className="grid gap-10 pt-12 pb-14 md:pt-18 md:pb-20 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-20"
      >
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-tuta-green uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-tuta-green" />
            Mua hàng tại TUTA
          </p>
          <h1
            id="purchase-title"
            className="mt-5 text-4xl font-semibold leading-[1.15] tracking-[-0.045em] text-text-primary md:text-5xl"
          >
            Hướng dẫn
            <br />
            mua hàng<span className="text-tuta-green">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary md:text-base md:leading-8">
            Bạn chọn món đồ mình quan tâm, TUTA hỗ trợ phần còn lại. Xem sản
            phẩm trên website và liên hệ trực tiếp để được tư vấn, xác nhận
            thông tin và đặt hàng.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href={ROUTES.products}
              className={`group inline-flex min-h-12 items-center gap-5 rounded-full bg-tuta-green px-6 text-sm font-semibold text-white transition-[background-color,transform] hover:bg-tuta-green-dark active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none ${focusClass}`}
            >
              Khám phá sản phẩm
              <Arrow />
            </Link>
            <a
              href="#purchase-steps"
              className={`inline-flex min-h-11 items-center text-sm font-medium text-tuta-green-dark underline decoration-tuta-green/35 underline-offset-4 hover:decoration-tuta-green ${focusClass}`}
            >
              Xem cách đặt hàng
            </a>
          </div>
        </div>
        <aside
          aria-labelledby="prepare-title"
          className="relative rounded-2xl border border-tuta-green/15 bg-tuta-green-light p-6 md:p-8"
        >
          <div className="flex items-center justify-between border-b border-tuta-green/20 pb-5">
            <span className="text-xs font-semibold tracking-[0.18em] text-tuta-green-dark">
              TUTA / JAPAN SELECT
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6 text-tuta-green"
            >
              <path d="M8 5H6a2 2 0 0 0-2 2v13h16V7a2 2 0 0 0-2-2h-2M8 3h8v4H8zM8 12h8M8 16h5" />
            </svg>
          </div>
          <h2
            id="prepare-title"
            className="mt-6 text-xl font-semibold leading-snug tracking-tight text-text-primary"
          >
            Chuẩn bị trước khi đặt
          </h2>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Một vài thông tin giúp TUTA hỗ trợ bạn dễ dàng hơn.
          </p>
          <ul className="mt-6 space-y-4">
            {[
              "Tên hoặc đường dẫn sản phẩm",
              "Số lượng bạn muốn đặt",
              "Thông tin và địa chỉ nhận hàng",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-text-primary"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mt-0.5 size-5 shrink-0 text-tuta-green"
                >
                  <circle cx="10" cy="10" r="8" />
                  <path d="m6.5 10 2.5 2.5 4.5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-7 border-t border-tuta-green/20 pt-4 text-xs leading-6 text-text-secondary">
            Đơn hàng được xác nhận trực tiếp qua Zalo hoặc Facebook.
          </p>
        </aside>
      </section>

      <section
        id="purchase-steps"
        aria-labelledby="steps-title"
        className="scroll-mt-8 grid gap-8 border-t border-border py-14 md:py-20 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-tuta-green uppercase">
            Từ lựa chọn đến nhận hàng
          </p>
          <h2
            id="steps-title"
            className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.035em] text-text-primary md:text-4xl"
          >
            Bốn bước để
            <br />
            đặt món đồ bạn thích.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-text-secondary">
            TUTA hiện nhận đơn qua các kênh liên hệ. Mọi thông tin sẽ được trao
            đổi với bạn trước khi gửi hàng.
          </p>
        </div>
        <ol className="divide-y divide-border border-y border-border">
          {steps.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[2.5rem_1fr] gap-4 py-7 md:grid-cols-[3.5rem_1fr] md:gap-6 md:py-8"
            >
              <span
                aria-hidden="true"
                className="pt-0.5 font-mono text-2xl tracking-tight text-tuta-green/70 md:text-3xl"
              >
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-text-primary md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-text-secondary">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="policies-title"
        className="grid gap-8 border-t border-border py-14 md:py-20 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-tuta-green uppercase">
            Trước khi đặt hàng
          </p>
          <h2
            id="policies-title"
            className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-text-primary md:text-4xl"
          >
            Thông tin cần biết
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-text-secondary">
            Về giá sản phẩm, giao hàng và hỗ trợ sau khi nhận.
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {policies.map((policy, index) => (
            <details key={policy.title} open={index === 0} className="group">
              <summary
                className={`flex min-h-18 cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-semibold text-text-primary transition-colors hover:text-tuta-green-dark md:text-base [&::-webkit-details-marker]:hidden ${focusClass}`}
              >
                {policy.title}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-5 shrink-0 text-tuta-green transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                >
                  <path d="M4 10h12M10 4v12" />
                </svg>
              </summary>
              <div className="space-y-3 pb-7 pr-4">
                {policy.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-text-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className="grid gap-8 rounded-2xl bg-tuta-green-dark px-6 py-10 text-white md:px-10 md:py-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-tuta-green-light uppercase">
            TUTA luôn sẵn sàng hỗ trợ
          </p>
          <h2
            id="contact-title"
            className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] md:text-3xl"
          >
            Bạn đã chọn được
            <br />
            sản phẩm mình thích?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
            Gửi tên hoặc đường dẫn sản phẩm cho TUTA để được tư vấn và xác nhận
            đơn hàng.
          </p>
        </div>
        <div className="space-y-3">
          {[
            { name: "Nhắn qua Zalo", href: CONTACT_LINKS.zalo, primary: true },
            {
              name: "Liên hệ Facebook",
              href: CONTACT_LINKS.facebook,
              primary: false,
            },
          ]
            .filter((channel) => channel.href)
            .map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${channel.name} (mở tab mới)`}
                className={`flex min-h-14 items-center justify-between gap-4 rounded-xl border px-5 text-sm font-semibold transition-[background-color,transform] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none ${channel.primary ? "border-white bg-white text-tuta-green-dark hover:bg-tuta-green-light" : "border-white/35 text-white hover:bg-white/10"}`}
              >
                {channel.name}
                <Arrow diagonal />
              </a>
            ))}
          <p className="pt-1 text-xs leading-6 text-white/75">
            Giá và thông tin giao hàng được xác nhận trước khi đặt.
          </p>
        </div>
      </section>
    </main>
  );
}
