import type { ReactNode } from "react";

import { SiteFrame } from "@/components/site-frame";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return <SiteFrame>{children}</SiteFrame>;
}
