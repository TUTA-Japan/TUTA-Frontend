import type { ReactNode } from "react";

import { FloatingContact } from "@/components/floating-contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <>
      <SiteHeader />

      <div className="flex-1">{children}</div>

      <SiteFooter />
      <FloatingContact />
    </>
  );
}
