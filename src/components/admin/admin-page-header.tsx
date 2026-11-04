import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

type AdminPageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export function AdminPageHeader({
  eyebrow,
  title,
  description,
  action,
}: AdminPageHeaderProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-xs font-medium tracking-[0.16em] text-tuta-green uppercase">
          {eyebrow}
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-text-primary">
          {title}
        </h1>

        <p className="mt-2 text-sm text-text-secondary">{description}</p>
      </div>

      {action}
    </div>
  );
}

type AdminCreateLinkProps = {
  href: string;
  children: ReactNode;
};

export function AdminCreateLink({ href, children }: AdminCreateLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex h-10 items-center gap-2 rounded-lg bg-tuta-green px-4 text-sm font-semibold text-white transition hover:bg-tuta-green-dark"
    >
      <Plus className="size-4" />
      {children}
    </Link>
  );
}

type AdminEmptyPanelProps = {
  title: string;
  message: string;
};

export function AdminEmptyPanel({ title, message }: AdminEmptyPanelProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-border bg-background">
      <div className="border-b border-border px-5 py-4">
        <p className="text-sm font-medium text-text-primary">{title}</p>
      </div>

      <div className="px-5 py-12 text-center">
        <p className="text-sm text-text-secondary">{message}</p>
      </div>
    </div>
  );
}
