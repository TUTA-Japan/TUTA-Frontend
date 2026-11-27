"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

function skipAdmin<T extends { url: string }>(event: T): T | null {
  return new URL(event.url).pathname.startsWith("/admin") ? null : event;
}

export function SiteAnalytics() {
  return (
    <>
      <Analytics beforeSend={skipAdmin} />
      <SpeedInsights beforeSend={skipAdmin} />
    </>
  );
}
