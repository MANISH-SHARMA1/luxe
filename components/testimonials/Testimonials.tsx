"use client";

import { MessageSquareQuote } from "lucide-react";
import TestimonialsGrid from "./TestimonialGrid";
import TestimonialNavigation from "./TestimonialNavigation";

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-[#090909] py-20">

            {/* ================= BACKGROUND ================= */}

            {/* Left Gold Glow */}
            <div className="absolute -left-56 top-0 h-150 w-150 rounded-full bg-[#D6A45C]/10 blur-[200px]" />

            {/* Right Gold Glow */}
            <div className="absolute -right-56 bottom-0 h-150 w-150 rounded-full bg-[#D6A45C]/10 blur-[200px]" />

            {/* Center Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3A2814,transparent_45%)] opacity-50" />

            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#D6A45C]/20 to-transparent" />

            {/* Background Noise */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
                }}
            />

            {/* Floating Gold Particles */}

            <div className="absolute left-24 top-32 h-2 w-2 rounded-full bg-[#D6A45C]/40 blur-[1px]" />
            <div className="absolute left-36 top-60 h-1.5 w-1.5 rounded-full bg-[#D6A45C]/60" />
            <div className="absolute right-24 top-40 h-2 w-2 rounded-full bg-[#D6A45C]/40 blur-[1px]" />
            <div className="absolute right-40 top-72 h-1.5 w-1.5 rounded-full bg-[#D6A45C]/60" />

            {/* ================= CONTENT ================= */}

            <div className="relative mx-auto max-w-7xl px-6 text-center">

                {/* Badge */}

                <div className="inline-flex items-center gap-5">

                    <div className="h-px w-20 bg-[#D6A45C]/30" />

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D6A45C]/30 bg-[#121212] shadow-[0_0_30px_rgba(214,164,92,.15)]">
                        <MessageSquareQuote
                            className="text-[#D6A45C]"
                            size={28}
                        />
                    </div>

                    <div className="h-px w-20 bg-[#D6A45C]/30" />

                </div>

                {/* Small Heading */}

                <p className="mt-3 uppercase tracking-[0.45em] text-sm font-medium text-[#D6A45C]">
                    Testimonials
                </p>

                {/* Main Heading */}

                <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
                    <span className="text-white">
                        Loved by
                    </span>{" "}

                    <span className="bg-linear-to-r from-[#F9E2A8] via-[#D6A45C] to-[#F4D387] bg-clip-text text-transparent">
                        Our Clients
                    </span>
                </h2>

                {/* Divider */}

                <div className="mt-4 flex items-center justify-center gap-3">

                    <div className="h-px w-24 bg-[#D6A45C]/30" />

                    <div className="h-2 w-2 rotate-45 border border-[#D6A45C] bg-[#090909]" />

                    <div className="h-px w-24 bg-[#D6A45C]/30" />

                </div>

                {/* Description */}

                <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-400 text-xs md:text-sm">
                    Real experiences. Beautiful transformations.
                    Discover why hundreds of clients trust our salon
                    for exceptional hair styling, flawless makeup,
                    rejuvenating skincare, and luxurious beauty services.
                </p>

            </div>

            <TestimonialsGrid />
            <TestimonialNavigation />
        </section>
    );
}