"use client";

import Image from "next/image";
import { ArrowRight, Clock3, Star } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  rating: string;
  duration: string;
  large?: boolean;
}

export default function ServiceCard({
  title,
  description,
  image,
  rating,
  duration,
  large = false,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[30px] border border-[#D6A45C]/30 bg-[#111111]
      transition-all duration-500 hover:-translate-y-2 hover:border-[#D6A45C]
      hover:shadow-[0_0_40px_rgba(214,164,92,.18)]
      ${large ? "h-96 2xl:h-105" : "h-90"}`}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      {/* Gold Glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D6A45C]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#D6A45C]/40 bg-black/50 backdrop-blur-md">
        ✨
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-7">

        <h3 className="font-serif text-2xl 2xl:text-4xl text-white">
          {title}
        </h3>

        <p className="mt-1.5 2xl:mt-3 text-sm 2xl:text-base text-gray-300 leading-7">
          {description}
        </p>

        <div className="mt-3.5 2xl:mt-7 flex items-center justify-between">

          <div className="flex gap-6">

            <div className="flex items-center gap-2 text-[#D6A45C]">
              <Star size={16} fill="#D6A45C" />
              <span className="text-white text-sm 2xl:text-base">{rating}</span>
            </div>

            <div className="flex items-center gap-2 text-[#D6A45C]">
              <Clock3 size={16} />
              <span className="text-white text-sm 2xl:text-base">{duration}</span>
            </div>

          </div>

          <button className="flex h-12 2xl:h-14 w-12 2xl:w-14 items-center justify-center rounded-full border border-[#D6A45C] transition-all duration-300 hover:bg-[#D6A45C] hover:text-black">
            <ArrowRight size={22} />
          </button>

        </div>

      </div>
    </div>
  );
}