"use client";

import Link, { useLinkStatus } from "next/link";

type FilterLinkProps = {
  href: string;
  active: boolean;
  className: string;
  children: React.ReactNode;
};

export function FilterLink({
  href,
  active,
  className,
  children,
}: FilterLinkProps) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={active ? "true" : undefined}
      className={`relative ${className}`}
    >
      {children}
      <PendingLine />
    </Link>
  );
}

function PendingLine() {
  const { pending } = useLinkStatus();
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-x-0 -bottom-px h-px origin-left bg-tuta-green transition-transform duration-700 ease-out motion-reduce:transition-none ${pending ? "scale-x-100" : "scale-x-0"}`}
    />
  );
}
