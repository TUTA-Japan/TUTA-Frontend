import type { StaticImageData } from "next/image";

import aqualabel from "@/assets/brands/aqualabel.png";
import by365 from "@/assets/brands/by365.png";
import canmake from "@/assets/brands/canmake.png";
import clubCosmetics from "@/assets/brands/club-cosmetics.png";
import curel from "@/assets/brands/curel.png";
import dhc from "@/assets/brands/dhc.png";
import kincho from "@/assets/brands/kincho.png";
import kissmeHeroineMake from "@/assets/brands/kissme-heroine-make.png";
import koseCosmeport from "@/assets/brands/kose-cosmeport.png";
import lion from "@/assets/brands/lion.png";
import majolicaMajorca from "@/assets/brands/majolica-majorca.png";
import orihiro from "@/assets/brands/orihiro.png";
import pdc from "@/assets/brands/pdc.png";
import qualityFirst from "@/assets/brands/quality-1st.png";
import rohto from "@/assets/brands/rohto.png";
import santen from "@/assets/brands/santen.png";
import sato from "@/assets/brands/sato.png";
import transino from "@/assets/brands/transino.png";

export type Brand = {
  name: string;

  logo?: StaticImageData;
};


export const FEATURED_BRANDS: readonly Brand[] = [
  { name: "DHC", logo: dhc },
  { name: "Aqualabel", logo: aqualabel },
  { name: "Canmake", logo: canmake },
  { name: "Transino", logo: transino },
  { name: "PDC", logo: pdc },
  { name: "Majolica Majorca", logo: majolicaMajorca },
  { name: "ORIHIRO", logo: orihiro },
  // The Santen company logo: no separate Sante product-line logo yet.
  { name: "Sante", logo: santen },
  { name: "Rohto", logo: rohto },
  { name: "Eisai" },
  { name: "Cezanne" },
  { name: "Curél", logo: curel },
  { name: "Kosé Cosmeport", logo: koseCosmeport },
  { name: "Kissme Heroine Make", logo: kissmeHeroineMake },
  { name: "Club Cosmetics", logo: clubCosmetics },
  { name: "Lion", logo: lion },
  { name: "Kincho", logo: kincho },
  { name: "Sato", logo: sato },
  { name: "Quality 1st", logo: qualityFirst },
  { name: "by365", logo: by365 },
];
