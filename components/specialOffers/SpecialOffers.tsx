"use client";

import { Gift } from "lucide-react";
import OfferCard from "./OfferCard";

export default function SpecialOffers() {
    return (
        <section className="relative overflow-hidden bg-[#090909] py-20">
            {/* ================= Background ================= */}

            {/* Left Glow */}
            <div className="absolute -left-40 top-0 h-125 w-125 rounded-full bg-[#D6A45C]/10 blur-[180px]" />

            {/* Right Glow */}
            <div className="absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-[#D6A45C]/10 blur-[180px]" />

            {/* Center Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b2812,transparent_45%)] opacity-40" />

            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#D6A45C]/20 to-transparent" />

            {/* ================= Heading ================= */}

            <div className="relative mx-auto max-w-7xl px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-5">
                    <span className="h-px w-20 bg-[#D6A45C]/40" />

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D6A45C]/30 bg-[#121212]">
                        <Gift size={24} className="text-[#D6A45C]" />
                    </div>

                    <span className="h-px w-20 bg-[#D6A45C]/40" />
                </div>

                <p className="mt-3 uppercase tracking-[0.4em] text-sm font-medium text-[#D6A45C]">
                    Special Offers
                </p>

                <h2 className="mt-4 font-serif leading-tight text-white text-3xl md:text-5xl 2xl:text-7xl">
                    Luxury Treatments,
                    <br />
                    <span className="bg-linear-to-r from-[#E7C27A] via-[#D6A45C] to-[#F7DE9C] bg-clip-text text-transparent">
                        Exclusive Savings
                    </span>
                </h2>

                {/* Decorative Divider */}
                <div className="mt-4 flex items-center justify-center gap-3">
                    <div className="h-px w-28 bg-[#D6A45C]/30" />
                    <div className="h-2 w-2 rotate-45 border border-[#D6A45C] bg-[#090909]" />
                    <div className="h-px w-28 bg-[#D6A45C]/30" />
                </div>

                <p className="mx-auto mt-4 max-w-2xl text-xs md:text-sm leading-7 text-gray-400">
                    Indulge in our premium salon experiences with exclusive seasonal
                    discounts. Discover luxurious beauty treatments at exceptional
                    prices for a limited time.
                </p>
            </div>

            <section className="relative mx-auto mt-16 max-w-7xl px-6">

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    <OfferCard
                        title="Hair Makeover"
                        subtitle="Cut, Color & Styling"
                        discount={20}
                        icon="hair"
                    />

                    <OfferCard
                        title="Makeup Package"
                        subtitle="Party & Bridal Makeup"
                        discount={15}
                        icon="makeup"
                    />

                    <OfferCard
                        title="Skin Glow Facial"
                        subtitle="Deep Cleansing & Glow"
                        discount={25}
                        icon="skin"
                    />

                    <OfferCard
                        title="Nail Art Combo"
                        subtitle="Manicure & Nail Art"
                        discount={10}
                        icon="nail"
                    />

                </div>

                {/* Bottom Badge */}
                <div className="mt-14 flex items-center justify-center gap-4">
                    <div className="h-px w-28 bg-[#D6A45C]/30" />

                    <div className="rounded-full border border-[#D6A45C]/30 bg-[#121212] px-6 py-3">
                        <span className="uppercase tracking-[0.3em] text-sm font-medium text-[#D6A45C]">
                            Limited Time Only
                        </span>
                    </div>

                    <div className="h-px w-28 bg-[#D6A45C]/30" />
                </div>

            </section>
        </section>
    );
}