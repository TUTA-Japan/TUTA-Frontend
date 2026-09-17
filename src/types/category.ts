import type { StaticImageData } from "next/image";

export type Category = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: string | StaticImageData;
};
