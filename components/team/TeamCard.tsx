// components/TeamCard.tsx

"use client";

import Image from "next/image";
import {
  Scissors,
  Brush,
  Sparkles,
  Palette,
} from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  icon?: "hair" | "makeup" | "skin" | "color";
}

export default function TeamCard({
  name,
  role,
  image,
  icon = "hair",
}: TeamCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "hair":
        return <Scissors size={20} />;
      case "makeup":
        return <Brush size={20} />;
      case "skin":
        return <Sparkles size={20} />;
      case "color":
        return <Palette size={20} />;
      default:
        return <Scissors size={20} />;
    }
  };

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-4xl
      border
      border-[#D6A45C]/25
      bg-[#111]
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-[#D6A45C]
      hover:shadow-[0_0_45px_rgba(214,164,92,.18)]
    "
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#D6A45C]/10 blur-[100px] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative h-62.5 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Floating Icon */}
      <div className="absolute left-1/2 top-55 -translate-x-1/2">
        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-[#D6A45C]
          bg-[#141414]
          text-[#D6A45C]
          transition
          duration-500
          group-hover:rotate-12
        "
        >
          {renderIcon()}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-8 text-center">
        <h3 className="font-serif text-2xl text-white">
          {name}
        </h3>

        <p className="mt-2 text-[#D6A45C]">
          {role}
        </p>

        {/* Divider */}
        <div className="my-5 flex items-center justify-center gap-2">
          <div className="h-px w-10 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />
          <div className="h-2 w-2 rounded-full bg-[#D6A45C]" />
          <div className="h-px w-10 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          {[FaInstagram, FaFacebook, FaLinkedin].map((Icon, index) => (
            <button
              key={index}
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#D6A45C]/20
              bg-[#171717]
              text-gray-300
              transition-all
              duration-300
              hover:border-[#D6A45C]
              hover:bg-[#D6A45C]
              hover:text-black
            "
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}