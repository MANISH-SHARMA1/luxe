"use client";

import Image from "next/image";
import { Eye, Plus } from "lucide-react";

interface CardProps {
    image: string;
    title: string;
    category: string;
    height?: "small" | "medium" | "large";
}

export default function Card({
    image,
    title,
    category,
    height = "medium",
}: CardProps) {

    const heights = {
        small: "h-[250px]",
        medium: "h-[360px]",
        large: "h-[300px]",
    };

    return (
        <div
            className={`
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-[#D6A45C]/20
        ${heights[height]}
      `}
        >
            {/* Image */}

            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />

            {/* Hover Overlay */}

            <div
                className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          bg-black/60
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
            >
                <div className="flex gap-4">

                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D6A45C] text-black transition hover:scale-110">
                        <Eye size={22} />
                    </button>

                    <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D6A45C] text-[#D6A45C] transition hover:bg-[#D6A45C] hover:text-black">
                        <Plus size={22} />
                    </button>

                </div>
            </div>

            {/* Bottom Info */}

            <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="rounded-full border border-[#D6A45C]/40 bg-[#111]/70 px-4 py-1 text-xs uppercase tracking-widest text-[#D6A45C] backdrop-blur-lg">
                    {category}
                </span>

                <h3 className="mt-4 font-serif text-2xl 2xl:text-3xl text-white">
                    {title}
                </h3>

            </div>

            {/* Gold Border Glow */}

            <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-transparent transition duration-500 group-hover:border-[#D6A45C]" />

        </div>
    );
}