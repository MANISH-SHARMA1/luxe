"use client";

import Image from "next/image";
import { FaSpa } from "react-icons/fa";
import CountUp from "../CountUp";

export default function WhyChooseImage() {
    return (
        <div className="relative">

            {/* Gold Glow */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#D6A45C]/15 blur-[120px]" />

            {/* Image */}
            <div className="relative h-132 overflow-hidden rounded-[40px] border border-[#D6A45C]/20">

                <Image
                    src="/whyUs.png"
                    alt="Beauty Salon"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

            </div>

            {/* Floating Card */}
            <div
                className="
                    absolute
                    bottom-6 lg:bottom-8
                    left-6 lg:left-8
                    w-[320px]
                    rounded-[28px]
                    border border-[#D6A45C]/30
                    bg-black/60
                    p-6
                    text-center
                    backdrop-blur-xl
                    shadow-[0_20px_50px_rgba(0,0,0,.4)]
                    "
            >

                <h2 className="mt-5 font-serif text-5xl text-white">
                    <CountUp end={5000} duration={3000} suffix="+" />
                </h2>

                <p className="mt-1 text-[#D6A45C]">
                    Happy Clients Worldwide
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
            </div>
        </div>
    );
}