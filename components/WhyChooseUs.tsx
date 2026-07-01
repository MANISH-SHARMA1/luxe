"use client";

import { Sparkles } from "lucide-react";
import WhyChooseCards from "./WhyChooseCards";
import StatsCard from "./StatsCard";
import WhyChooseImage from "./WhyChooseImage";
import { FaSpa } from "react-icons/fa";

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-[#090909] py-28">
            {/* Background Glow */}
            <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#D6A45C]/40 blur-[170px]" />
            <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D6A45C]/40 blur-[170px]" />

            {/* Decorative Gold Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3b2812,transparent_45%)] opacity-80" />

            {/* Gold Curve */}
            {/* <div className="absolute -bottom-32 left-1/2 h-[420px] w-[140%] -translate-x-1/2 rounded-full border border-[#D6A45C]/15" /> */}

            {/* Floating Sparkles */}
            <span className="absolute left-20 top-40 text-4xl text-[#D6A45C]/70">
                ✦
            </span>

            <span className="absolute right-32 top-56 text-3xl text-[#D6A45C]/60">
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
                    <div className="mt-5 flex items-center justify-center gap-5">

                        <span className="h-px w-32 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />

                        <FaSpa
                            size={18}
                            className="text-[#D6A45C]"
                        />

                        <span className="h-px w-32 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />

                    </div>

                    {/* Main Heading */}
                    <h2 className="my-8 font-serif text-5xl leading-tight text-white text-center md:text-6xl">
                        Experience Beauty
                        <br />

                        Like{" "}
                        <span className="text-[#D6A45C]">
                            Never
                        </span>{" "}
                        Before
                    </h2>

                    {/* Description */}
                    <p className="mb-8 leading-9 text-lg text-center text-gray-400">
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