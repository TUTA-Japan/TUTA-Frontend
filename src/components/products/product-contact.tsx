import { MessageCircle, Send } from "lucide-react";
type ProductContactProps = {
  zaloUrl: string;
  facebookUrl: string;
};

export function ProductContact({ zaloUrl, facebookUrl }: ProductContactProps) {
  return (
    <section className="mt-8 border-t border-border pt-6">
      <p className="text-sm font-medium text-text-primary">Liên hệ mua hàng</p>

      <p className="mt-2 text-sm leading-6 text-text-secondary">
        TUTA hiện nhận tư vấn và đặt hàng qua Zalo hoặc Facebook.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 bg-tuta-green px-5 text-sm font-medium text-white transition-colors hover:bg-tuta-green-dark"
        >
          <MessageCircle className="size-4" strokeWidth={1.5} />
          Liên hệ Zalo
        </a>

        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 border border-border px-5 text-sm font-medium text-text-primary transition-colors hover:border-tuta-green hover:text-tuta-green-dark"
        >
          <Send className="size-4" strokeWidth={1.5} />
          Nhắn Fanpage
        </a>
      </div>
    </section>
  );
}
