"use client";

import { Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section className="relative overflow-hidden bg-[#0B0B0B] py-28">
            {/* Background Glow */}
            <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#D6A45C]/40 blur-[170px]" />
            <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D6A45C]/40 blur-[170px]" />

            {/* Noise Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2c1d09_0%,transparent_45%)] opacity-40" />

            {/* Decorative Lines */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D6A45C]/20 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 text-center">

                {/* Small Heading */}
                <div className="flex items-center justify-center gap-4">

                    <span className="h-px w-16 bg-[#D6A45C]/60" />

                    <p className="uppercase tracking-[0.35em] text-sm font-medium text-[#D6A45C]">
                        Our Services
                    </p>

                    <span className="h-px w-16 bg-[#D6A45C]/60" />

                </div>

                {/* Main Heading */}
                <h2 className="mt-8 font-serif text-5xl leading-tight text-white md:text-6xl">

                    Luxury
                    {" "}
                    <span className="text-[#D6A45C]">
                        Beauty
                    </span>
                    {" "}
                    Services
                    <br />
                    Designed Just for You

                </h2>

                {/* Decorative Icon */}
                <div className="mt-8 flex items-center justify-center gap-4">

                    <span className="h-px w-20 bg-[#D6A45C]/40" />

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6A45C]/30 bg-[#171717]">
                        <Sparkles
                            className="text-[#D6A45C]"
                            size={18}
                        />
                    </div>

                    <span className="h-px w-20 bg-[#D6A45C]/40" />

                </div>

                {/* Description */}
                <p className="mx-auto mt-10 max-w-3xl leading-9 text-gray-400">

                    From precision haircuts to flawless bridal makeovers,
                    every service is delivered using premium products,
                    experienced professionals, and meticulous attention
                    to every detail. Experience luxury that enhances your
                    confidence and celebrates your natural beauty.

                </p>

            </div>

            {/* Decorative Sparkles */}

            <div className="absolute left-24 top-40 text-[#D6A45C]/70">
                ✦
            </div>

            <div className="absolute right-32 top-56 text-2xl text-[#D6A45C]/70">
                ✦
            </div>

            <div className="absolute bottom-20 left-20 text-xl text-[#D6A45C]/40">
                ✦
            </div>

            <div className="absolute bottom-32 right-24 text-[#D6A45C]/40">
                ✦
            </div>

            <div className="mx-auto mt-20 max-w-7xl px-6">

                {/* Large Cards */}
                <div className="grid gap-8 lg:grid-cols-2">

                    <ServiceCard
                        large
                        image="/hair-style.png"
                        title="Hair Styling"
                        description="Haircut • Blow Dry • Hair Wash • Styling"
                        rating="4.9"
                        duration="60-90 mins"
                    />

                    <ServiceCard
                        large
                        image="/bridal-makeup.png"
                        title="Bridal Makeup"
                        description="HD Makeup • Airbrush • Hairstyle • Draping"
                        rating="4.9"
                        duration="90-120 mins"
                    />

                </div>

                {/* Small Cards */}
                <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    <ServiceCard
                        image="/skin-care.png"
                        title="Skin Care"
                        description="Hydra Facial • Cleanup • De-Tan"
                        rating="4.9"
                        duration="60 mins"
                    />

                    <ServiceCard
                        image="/nail-art.png"
                        title="Nail Studio"
                        description="Extensions • Gel Polish • Nail Art"
                        rating="4.9"
                        duration="45 mins"
                    />

                    <ServiceCard
                        image="/hair-style.png"
                        title="Hair Spa"
                        description="Head Massage • Steam Therapy"
                        rating="4.8"
                        duration="60 mins"
                    />

                    <ServiceCard
                        image="/skin-care.png"
                        title="Spa Therapy"
                        description="Relaxation • Body Massage"
                        rating="4.9"
                        duration="90 mins"
                    />

                </div>

            </div>
        </section>
    );
}