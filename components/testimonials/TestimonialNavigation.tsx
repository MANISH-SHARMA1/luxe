"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialNavigation() {
    return (
        <div className="mt-14 flex flex-col items-center gap-8">

            <div className="flex items-center gap-5">

                <button
                    className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D6A45C]/25
                    bg-[#111]
                    text-[#D6A45C]
                    transition
                    duration-300
                    hover:bg-[#D6A45C]
                    hover:text-black
                "
                >
                    <ArrowLeft size={22} />
                </button>

                <div className="flex items-center gap-3">

                    <span className="h-3 w-3 rounded-full bg-[#D6A45C]" />

                    <span className="h-3 w-3 rounded-full bg-[#D6A45C]/30" />

                    <span className="h-3 w-3 rounded-full bg-[#D6A45C]/30" />

                </div>

                <button
                    className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D6A45C]/25
                    bg-[#111]
                    text-[#D6A45C]
                    transition
                    duration-300
                    hover:bg-[#D6A45C]
                    hover:text-black
                "
                >
                    <ArrowRight size={22} />
                </button>

            </div>

            <p className="text-xs lg:text-sm uppercase tracking-[0.35em] text-[#D6A45C]/70">
                Swipe to explore more stories
            </p>

        </div>
    );
}