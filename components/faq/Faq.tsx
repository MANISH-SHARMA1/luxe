"use client";

import { Headphones, HelpCircle } from "lucide-react";
import FaqAccordion from "./FAQAccordion";
import Image from "next/image";

export default function FAQ() {
    return (
        <section className="relative overflow-hidden bg-[#090909] py-20">

            {/* ================= BACKGROUND ================= */}

            {/* Left Gold Glow */}
            <div className="absolute -left-56 top-0 h-162.5 w-162.5 rounded-full bg-[#D6A45C]/10 blur-[220px]" />

            {/* Right Gold Glow */}
            <div className="absolute -right-56 top-0 h-162.5 w-162.5 rounded-full bg-[#D6A45C]/10 blur-[220px]" />

            {/* Center Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3d2813,transparent_45%)] opacity-50" />

            {/* Decorative Top Border */}
            <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-[#D6A45C]/20 to-transparent" />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
                }}
            />

            {/* Floating Gold Particles */}

            <div className="absolute left-24 top-36 h-2 w-2 rounded-full bg-[#D6A45C]/50 blur-[1px]" />
            <div className="absolute left-40 top-60 h-1.5 w-1.5 rounded-full bg-[#D6A45C]/70" />

            <div className="absolute right-24 top-40 h-2 w-2 rounded-full bg-[#D6A45C]/50 blur-[1px]" />
            <div className="absolute right-40 top-64 h-1.5 w-1.5 rounded-full bg-[#D6A45C]/70" />

            {/* ================= CONTENT ================= */}

            <div className="relative mx-auto max-w-7xl px-6 text-center">

                {/* Icon */}

                <div className="inline-flex items-center gap-6">

                    <div className="h-px w-24 bg-[#D6A45C]/30" />

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D6A45C]/30 bg-[#121212] shadow-[0_0_30px_rgba(214,164,92,.15)]">

                        <HelpCircle
                            size={30}
                            className="text-[#D6A45C]"
                        />

                    </div>

                    <div className="h-px w-24 bg-[#D6A45C]/30" />

                </div>

                {/* Badge */}

                <p className="mt-3 uppercase tracking-[0.45em] text-sm font-medium text-[#D6A45C]">
                    FAQ
                </p>

                {/* Heading */}

                <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl 2xl:text-7xl">

                    <span className="text-white">
                        Frequently Asked
                    </span>

                    {" "}

                    <span className="bg-linear-to-r from-[#F6E1B5] via-[#D6A45C] to-[#F4CE76] bg-clip-text text-transparent">
                        Questions
                    </span>

                </h2>

                {/* Divider */}

                <div className="mt-4 flex items-center justify-center gap-3">

                    <div className="h-px w-28 bg-[#D6A45C]/30" />

                    <div className="h-2 w-2 rotate-45 border border-[#D6A45C]" />

                    <div className="h-px w-28 bg-[#D6A45C]/30" />

                </div>

                {/* Description */}

                <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-400">
                    Everything you need to know before booking your beauty
                    appointment. From consultations to hygiene standards,
                    we've answered the questions our clients ask most often.
                </p>

            </div>

            <section className="mx-auto max-w-7xl px-6 pt-16">
                <div className="grid gap-16 lg:grid-cols-2">

                    {/* Left Side */}
                    <div className="overflow-hidden rounded-4xl border border-[#D6A45C]/20 bg-[#111111]">

                        {/* Hero Image */}
                        <div className="relative h-full overflow-hidden">

                            <Image
                                src="/hero.png"
                                alt="Luxury Salon"
                                fill
                                className="object-cover"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/20" />

                            {/* Gold Glow */}
                            <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[#D6A45C]/15 blur-[120px]" />

                            {/* Bottom Support Card */}
                            <div className="absolute bottom-0 w-full border-t border-[#D6A45C]/10 bg-[#0E0E0E] p-4 2xl:p-8">

                                <div className="flex items-center gap-6">

                                    <div className="flex h-16 2xl:h-20 w-16 2xl:w-20 items-center justify-center rounded-full border border-[#D6A45C]/30">

                                        <Headphones className="text-[#D6A45C]" />

                                    </div>

                                    <div>

                                        <h4 className="font-serif text-2xl 2xl:text-3xl text-[#D6A45C]">
                                            Still have questions?
                                        </h4>

                                        <p className="mt-1 2xl:mt-2 text-sm 2xl:text-base text-gray-400">
                                            Our support team is here to help you.
                                        </p>

                                        <a
                                            href="tel:+919876543210"
                                            className="mt-2 2xl:mt-4 inline-block text-lg 2xl:text-2xl font-medium text-[#D6A45C] hover:text-white transition"
                                        >
                                            +91 98765 43210
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <FaqAccordion />

                </div>
            </section>
        </section>
    );
}