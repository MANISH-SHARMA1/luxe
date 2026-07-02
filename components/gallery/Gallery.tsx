"use client";

import { ArrowRight, Camera } from "lucide-react";
import Filter from "./Filter";
import Card from "./Card";

export default function Gallery() {
    return (
        <section className="relative overflow-hidden bg-[#090909] py-20">
            {/* ================= BACKGROUND ================= */}

            {/* Left Glow */}
            <div className="absolute -left-44 top-0 h-130 w-130 rounded-full bg-[#D6A45C]/10 blur-[180px]" />

            {/* Right Glow */}
            <div className="absolute -right-44 bottom-0 h-130 w-130 rounded-full bg-[#D6A45C]/10 blur-[180px]" />

            {/* Center Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3c2913,transparent_45%)] opacity-40" />

            {/* Top Border */}
            <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-[#D6A45C]/25 to-transparent" />

            {/* Floating Particles */}
            <div className="absolute left-10 top-40 h-2 w-2 rounded-full bg-[#D6A45C]/50 blur-[1px]" />
            <div className="absolute right-20 top-56 h-1.5 w-1.5 rounded-full bg-[#D6A45C]/40" />
            <div className="absolute left-24 top-72 h-1 w-1 rounded-full bg-[#D6A45C]/60" />
            <div className="absolute right-12 top-80 h-2 w-2 rounded-full bg-[#D6A45C]/30 blur-[1px]" />

            {/* ================= TITLE ================= */}

            <div className="relative mx-auto max-w-7xl px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-5">
                    <div className="h-px w-20 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D6A45C]/30 bg-[#141414]">
                        <Camera className="text-[#D6A45C]" size={24} />
                    </div>

                    <div className="h-px w-20 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />
                </div>

                <p className="mt-3 2xl:mt-6 uppercase tracking-[0.4em] text-sm font-medium text-[#D6A45C]">
                    Gallery
                </p>

                <h2 className="mt-4 2xl:mt-8 font-serif text-3xl leading-tight text-white md:text-5xl 2xl:text-7xl">
                    Beauty in{" "}
                    <span className="bg-linear-to-r from-[#F5E1B2] via-[#D6A45C] to-[#F7D58B] bg-clip-text text-transparent">
                        Every Detail
                    </span>
                </h2>

                {/* Divider */}
                <div className="mt-4 2xl:mt-8 flex items-center justify-center gap-3">
                    <div className="h-px w-24 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />
                    <div className="h-2 w-2 rotate-45 border border-[#D6A45C]" />
                    <div className="h-px w-24 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />
                </div>

                <p className="mx-auto mt-4 2xl:mt-8 max-w-3xl 2xltext-lg leading-7 2xl:leading-9 text-gray-400">
                    Explore our finest transformations and premium beauty experiences.
                    Every hairstyle, makeup look, skincare treatment, and nail design
                    reflects our passion for perfection and attention to detail.
                </p>
            </div>

            <Filter active="All" setActive={() => { }} />

            <div className="mt-8 2xl:mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4 px-4">

                <Card
                    image="/hair-style.png"
                    title="Bridal Hairstyle"
                    category="Hair"
                    height="large"
                />

                <Card
                    image="/hero.png"
                    title="Hair Coloring"
                    category="Hair"
                    height="large"
                />

                <Card
                    image="/bridal-makeup.png"
                    title="Luxury Makeup"
                    category="Makeup"
                    height="large"
                />

                <Card
                    image="/skin-care.png"
                    title="Facial Therapy"
                    category="Skin"
                    height="large"
                />

                <Card
                    image="/nail-art.png"
                    title="Nail Art"
                    category="Nails"
                    height="large"
                />

            </div>

            <div className="mt-16 flex justify-center">
                <button
                    className="
          group
          relative
          inline-flex
          items-center
          gap-4
          overflow-hidden
          rounded-full
          border
          border-[#D6A45C]/30
          bg-[#111111]
          px-10
          py-4
          text-sm
          font-medium
          uppercase
          tracking-[0.25em]
          text-[#D6A45C]
          transition-all
          duration-500
          hover:border-[#D6A45C]
          hover:shadow-[0_0_35px_rgba(214,164,92,.25)]
        "
                >
                    {/* Hover Glow */}
                    <span
                        className="
            absolute
            inset-0
            -translate-x-full
            bg-linear-to-r
            from-transparent
            via-[#D6A45C]/15
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
                    />

                    <span className="relative z-10">
                        View More
                    </span>

                    <ArrowRight
                        size={18}
                        className="
            relative
            z-10
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
                    />
                </button>
            </div>
        </section>
    );
}