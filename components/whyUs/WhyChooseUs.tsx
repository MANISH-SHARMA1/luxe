"use client";

import { Sparkles } from "lucide-react";
import WhyChooseCards from "./WhyChooseCards";
import StatsCard from "./StatsCard";
import WhyChooseImage from "./WhyChooseImage";
import { FaSpa } from "react-icons/fa";

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-[#090909] py-20 2xl:py-28">
            {/* Background Glow */}
            <div className="absolute -left-40 top-0 h-125 w-125 rounded-full bg-[#D6A45C]/40 blur-[170px]" />
            <div className="absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-[#D6A45C]/40 blur-[170px]" />

            {/* Decorative Gold Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3b2812,transparent_45%)] opacity-80" />

            {/* Floating Sparkles */}
            <span className="absolute left-6 lg:left-20 top-36 lg:top-40 text-4xl text-[#D6A45C]/70">
                ✦
            </span>

            <span className="absolute right-16 lg:right-32 top-52 lg:top-56 text-3xl text-[#D6A45C]/60">
                ✦
            </span>

            <span className="absolute bottom-28 left-40 text-xl text-[#D6A45C]/40">
                ✦
            </span>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] px-6">

                <div className="relative">

                    {/* Small Heading */}
                    <p className="uppercase tracking-[0.35em] text-sm text-center font-medium text-[#D6A45C]">
                        Why Choose Us
                    </p>

                    {/* Decorative Divider */}
                    <div className="mt-4 2xl:mt-8 flex items-center justify-center gap-5">

                        <span className="h-px w-32 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />

                        <FaSpa
                            size={18}
                            className="text-[#D6A45C]"
                        />

                        <span className="h-px w-32 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />

                    </div>

                    {/* Main Heading */}
                    <h2 className="my-4 2xl:my-8 font-serif leading-tight text-white text-center text-3xl md:text-5xl 2xl:text-7xl">
                        Experience Beauty
                        <br />

                        Like{" "}
                        <span className="text-[#D6A45C]">
                            Never
                        </span>{" "}
                        Before
                    </h2>

                    {/* Description */}
                    <p className="mb-4 2xl:mb-8 leading-7 2xl:leading-9 text-sm md:text-base 2xl:text-lg text-center text-gray-400">
                        We combine luxury, expertise, and care to deliver an exceptional beauty
                        experience tailored just for you.
                    </p>

                    <WhyChooseImage />
                </div>

                <WhyChooseCards />
            </div>

            <StatsCard />

        </section>
    );
}