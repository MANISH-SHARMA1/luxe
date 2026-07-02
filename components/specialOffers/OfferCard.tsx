// components/OfferCard.tsx

"use client";

import {
  ArrowRight,
  Scissors,
  Brush,
  Sparkles,
  Paintbrush,
} from "lucide-react";
import CountUp from "../CountUp";

interface OfferCardProps {
  title: string;
  subtitle: string;
  discount: number;
  icon: "hair" | "makeup" | "skin" | "nail";
}

export default function OfferCard({
  title,
  subtitle,
  discount,
  icon,
}: OfferCardProps) {
  const Icon = {
    hair: Scissors,
    makeup: Brush,
    skin: Sparkles,
    nail: Paintbrush,
  }[icon];

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-[#D6A45C]/20
      bg-linear-to-b
      from-[#171717]
      to-[#101010]
      p-4
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#D6A45C]
      hover:shadow-[0_0_45px_rgba(214,164,92,.18)]
    "
    >
      {/* Gold Glow */}
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#D6A45C]/10 blur-[90px] opacity-0 transition group-hover:opacity-100" />

      {/* Icon */}
      <div className="mx-auto flex h-20 2xl:h-24 w-20 2xl:w-24 text-[30px] 2xl:text-[38px] items-center justify-center rounded-full border border-[#D6A45C]/30 bg-[#161616]">
        <Icon className="text-[#D6A45C]" />
      </div>

      <h3 className="mt-4 2xl:mt-8 text-center font-serif text-2xl 2xl:text-3xl text-white">
        {title}
      </h3>

      <p className="mt-1.5 2xl:mt-3 text-sm 2xl:text-base text-center text-[#D6A45C]">
        {subtitle}
      </p>

      <div className="my-6 flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-[#D6A45C]/30" />
        <div className="h-2 w-2 rotate-45 border border-[#D6A45C]" />
        <div className="h-px w-12 bg-[#D6A45C]/30" />
      </div>

      <div className="text-center">
        <h2 className="font-serif text-5xl 2xl:text-7xl leading-none text-[#D6A45C]">
          <CountUp end={discount} suffix="%" duration={3000}/>
        </h2>

        <p className="mt-1 text-base 2xl:text-2xl font-medium tracking-widest text-white">
          OFF
        </p>
      </div>

      <button
        className="
        mt-10
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-full
        border
        border-[#D6A45C]/30
        py-4
        text-[#D6A45C]
        transition
        hover:bg-[#D6A45C]
        hover:text-black
      "
      >
        Book Now
        <ArrowRight size={18} />
      </button>
    </div>
  );
}