"use client";

import Image from "next/image";
import {
    Calendar,
    Play,
    Star,
    Users,
    Heart,
    BadgeCheck,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden text-white">

            {/* Background Image */}
            <Image
                src="/hero.png"
                alt="Salon Background"
                fill
                priority
                className="object-cover object-center -z-30"
            />

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3d2b14,transparent_45%)] opacity-50" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 py-16 lg:px-10">
                {/* LEFT */}
                <div className="w-full lg:w-1/2 z-10">

                    <div className="inline-flex items-center gap-2 rounded-full border border-[#d6a45c]/40 bg-[#1a1a1a] px-5 py-2 text-sm text-[#d6a45c]">
                        ✨ Premium Beauty Salon
                    </div>

                    <h1 className="mt-8 text-5xl font-serif leading-tight md:text-7xl">
                        Where{" "}
                        <span className="text-[#d6a45c]">
                            Beauty
                        </span>
                        <br />
                        Meets Perfection
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-gray-300 leading-8">
                        Experience luxurious salon & spa services tailored to
                        enhance your natural beauty. From hair styling to
                        bridal makeup, our experts help you look and feel your best.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">

                        <button className="flex items-center gap-3 rounded-full bg-[#d6a45c] px-8 py-4 font-semibold text-black transition hover:scale-105">
                            <Calendar size={18} />
                            Book Appointment
                        </button>

                        <button className="flex items-center gap-3 rounded-full border border-gray-600 px-8 py-4 transition hover:border-[#d6a45c]">
                            <Play size={18} />
                            Watch Video
                        </button>

                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg md:grid-cols-4">

                        <div className="flex flex-col items-center">
                            <Star className="mb-3 text-[#d6a45c]" />
                            <h2 className="text-2xl font-bold">4.9/5</h2>
                            <p className="text-sm text-gray-400">
                                Average Rating
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Users className="mb-3 text-[#d6a45c]" />
                            <h2 className="text-2xl font-bold">15+</h2>
                            <p className="text-sm text-gray-400">
                                Expert Stylists
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Heart className="mb-3 text-[#d6a45c]" />
                            <h2 className="text-2xl font-bold">10K+</h2>
                            <p className="text-sm text-gray-400">
                                Happy Clients
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <BadgeCheck className="mb-3 text-[#d6a45c]" />
                            <h2 className="text-2xl font-bold">7 Days</h2>
                            <p className="text-sm text-gray-400">
                                Open Weekly
                            </p>
                        </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="relative hidden lg:flex lg:w-1/2 justify-end gap-4 mb-8">
                    {/* Hair Styling */}
                    <div className="flex flex-col items-center relative">
                        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#d6a45c]">
                            <Image
                                src="/hair-style.png"
                                alt="Hair Styling"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <span className="absolute -bottom-3 rounded-full bg-[#d6a45c] px-4 py-1 text-xs text-black whitespace-nowrap">
                            Hair Styling
                        </span>
                    </div>

                    {/* Bridal Makeup */}
                    <div className="flex flex-col items-center relative">
                        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#d6a45c]">
                            <Image
                                src="/bridal-makeup.png"
                                alt="Bridal Makeup"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <span className="absolute -bottom-3 rounded-full bg-[#d6a45c] px-4 py-1 text-xs text-black whitespace-nowrap">
                            Bridal Makeup
                        </span>
                    </div>

                    {/* Skin Care */}
                    <div className="flex flex-col items-center relative">
                        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#d6a45c]">
                            <Image
                                src="/skin-care.png"
                                alt="Skin Care"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <span className="absolute -bottom-3 rounded-full bg-[#d6a45c] px-4 py-1 text-xs text-black whitespace-nowrap">
                            Skin Care
                        </span>
                    </div>

                    {/* Nail Art */}
                    <div className="flex flex-col items-center relative">
                        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#d6a45c]">
                            <Image
                                src="/nail-art.png"
                                alt="Nail Art"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <span className="absolute -bottom-3 rounded-full bg-[#d6a45c] px-4 py-1 text-xs text-black whitespace-nowrap">
                            Nail Art
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}