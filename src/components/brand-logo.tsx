import Image from "next/image";
import logo from "@/assets/tuta-logo.jpg";

type BrandLogoProps = {
  className?: string;
  eager?: boolean;
};

export function BrandLogo({
  className = "w-36",
  eager = false,
}: BrandLogoProps) {
  return (
    // Frame the original artwork without changing the source asset.
    <span
      className={`relative block aspect-16/5 overflow-hidden mix-blend-darken ${className}`}
    >
      <Image
        src={logo}
        alt="TUTA Japan Select"
        loading={eager ? "eager" : "lazy"}
        sizes="250px"
        className="pointer-events-none absolute top-[-203.75%] left-[-29.6875%] h-auto w-[156.25%] max-w-none select-none"
      />
    </span>
  );
}
