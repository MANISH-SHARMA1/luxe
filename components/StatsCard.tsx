"use client";

import {
  Users,
  BadgeCheck,
  Star,
  HeartHandshake,
} from "lucide-react";
import { PiCertificateBold } from "react-icons/pi";

const stats = [
  {
    icon: Users,
    value: "5000+",
    label: "Happy Clients",
  },
  {
    icon: PiCertificateBold,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Client Rating",
  },
  {
    icon: HeartHandshake,
    value: "100%",
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
                  hover:bg-white/[0.02]
                  ${
                    index !== stats.length - 1
                      ? "lg:border-r lg:border-[#D6A45C]/15"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div
                  className="
                    flex h-16 w-16 shrink-0 items-center justify-center
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
                  <h3 className="font-serif text-5xl text-[#D6A45C]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-gray-300">
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