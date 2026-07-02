"use client";

import { Sparkles } from "lucide-react";
import TeamGrid from "./TeamGrid";

export default function Team() {
    return (
        <section className="relative overflow-hidden bg-[#090909] py-20 2xl:py-28">
            {/* ================= Background ================= */}

            {/* Gold Glow */}
            <div className="absolute -left-40 top-0 h-112.5 w-112.5 rounded-full bg-[#D6A45C]/10 blur-[170px]" />
            <div className="absolute -right-40 bottom-0 h-112.5 w-112.5 rounded-full bg-[#D6A45C]/10 blur-[170px]" />

            {/* Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b2812,transparent_45%)] opacity-40" />

            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#D6A45C]/20 to-transparent" />

            {/* ================= Content ================= */}

            <div className="relative mx-auto max-w-7xl px-6 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-4">
                    <span className="h-px w-16 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6A45C]/25 bg-[#141414]">
                        <Sparkles
                            size={18}
                            className="text-[#D6A45C]"
                        />
                    </div>

                    <span className="h-px w-16 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />
                </div>

                <p className="mt-3 2xl:mt-6 uppercase tracking-[0.35em] text-sm font-semibold text-[#D6A45C]">
                    Our Team
                </p>

                {/* Heading */}
                <h2 className="mt-4 2xl:mt-8 font-serif leading-tight text-white text-3xl md:text-5xl 2xl:text-7xl">
                    The Experts Behind Your{" "}
                    <span className="text-[#D6A45C]">
                        Glow
                    </span>
                </h2>

                {/* Divider */}
                <div className="mt-4 2xl:mt-8 flex items-center justify-center gap-3">
                    <span className="h-px w-24 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />
                    <div className="h-2 w-2 rounded-full bg-[#D6A45C]" />
                    <span className="h-px w-24 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />
                </div>

                {/* Description */}
                <p className="mx-auto mt-4 2xl:mt-8 max-w-3xl leading-7 text-xs md:text-sm 2xl:text-base text-gray-400">
                    Our highly skilled professionals are passionate about beauty
                    and dedicated to creating exceptional experiences. From
                    precision hair styling to flawless makeup and advanced skincare,
                    every expert is committed to helping you look and feel your
                    absolute best.
                </p>

                <TeamGrid />
            </div>
        </section>
    );
}