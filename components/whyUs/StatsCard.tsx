"use client";

import {
  Users,
  BadgeCheck,
  Star,
  HeartHandshake,
} from "lucide-react";
import { PiCertificateBold } from "react-icons/pi";
import CountUp from "../CountUp";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: PiCertificateBold,
    value: 10,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "Client Rating",
  },
  {
    icon: HeartHandshake,
    value: 100,
    suffix: "%",
    label: "Satisfaction",
  },
];

export default function StatsCard() {
  return (
    <section className="relative mx-auto mt-20 max-w-7xl px-6">
      <div
        className="
          relative overflow-hidden
          rounded-[34px]
          border border-[#D6A45C]/25
          bg-linear-to-b from-[#181818] to-[#101010]
          shadow-[0_0_40px_rgba(214,164,92,.08)]
        "
      >
        {/* Glow */}
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#D6A45C]/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#D6A45C]/10 blur-[120px]" />

        <div className="relative grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  group relative flex items-center gap-5
                  px-8 py-10
                  transition-all duration-500
                  hover:bg-white/2
                  ${index !== stats.length - 1
                    ? "lg:border-r lg:border-[#D6A45C]/15"
                    : ""
                  }
                `}
              >
                {/* Icon */}
                <div
                  className="
                    flex h-10 w-10 lg:h-16 lg:w-16 shrink-0 items-center justify-center
                    rounded-full
                    border border-[#D6A45C]/20
                    bg-[#171717]
                    transition
                    group-hover:scale-110
                    group-hover:border-[#D6A45C]
                  "
                >
                  <Icon
                    size={30}
                    className="text-[#D6A45C]"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-serif text-3xl lg:text-5xl text-[#D6A45C]">
                    <CountUp end={item.value} duration={3000} suffix={item.suffix} />
                  </h3>

                  <p className="mt-2 text-xs lg:text-base text-gray-300">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}