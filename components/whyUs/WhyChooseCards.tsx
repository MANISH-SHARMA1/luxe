"use client";

import {
  UserCheck,
  ShieldCheck,
  CalendarClock,
  Flower2,
  ThumbsUp,
} from "lucide-react";
import { IoDiamondOutline } from "react-icons/io5";

const features = [
  {
    icon: IoDiamondOutline,
    title: "Premium Quality",
    description:
      "We use only high-end, skin & hair-safe products to ensure exceptional beauty results.",
  },
  {
    icon: UserCheck,
    title: "Expert Professionals",
    description:
      "Certified stylists and beauty experts with years of industry experience.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Safe",
    description:
      "Clean, sanitized tools and a safe environment for every client.",
  },
  {
    icon: CalendarClock,
    title: "Personalized Care",
    description:
      "Every treatment is customized according to your unique beauty goals.",
  },
  {
    icon: Flower2,
    title: "Relaxing Ambience",
    description:
      "Elegant interiors, soothing music and a luxurious spa-like experience.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted by Thousands",
    description:
      "Thousands of happy clients choose us for quality and premium service.",
  },
];

export default function WhyChooseCards() {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[28px]
            border border-[#D6A45C]/25
            bg-linear-to-b from-[#181818] to-[#101010]
            p-4
            transition-all duration-500
            hover:-translate-y-2
            hover:border-[#D6A45C]
            hover:shadow-[0_0_40px_rgba(214,164,92,.15)]"
          >
            {/* Glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D6A45C]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center
              rounded-full border border-[#D6A45C]/20
              bg-[#151515]
              transition duration-500
              group-hover:scale-110
              group-hover:border-[#D6A45C]"
            >
              <Icon
                size={36}
                className="text-[#D6A45C]"
              />
            </div>

            {/* Title */}
            <h3 className="mt-7 text-center font-serif text-2xl text-white">
              {feature.title}
            </h3>

            {/* Gold Divider */}
            <div className="my-5 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />
              <div className="h-2 w-2 rounded-full bg-[#D6A45C]" />
              <div className="h-px w-12 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />
            </div>

            {/* Description */}
            <p className="text-center text-sm text-gray-400">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}