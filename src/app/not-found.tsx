import { NotFoundContent } from "@/components/not-found-content";
import { SiteFrame } from "@/components/site-frame";

// Unmatched URLs only get the root layout, so the site frame is added here.
export default function NotFound() {
  return (
    <SiteFrame>
      <NotFoundContent />
    </SiteFrame>
  );
}
