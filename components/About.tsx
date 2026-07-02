"use client";

import Image from "next/image";
import { Heart, Sparkles, UserCheck } from "lucide-react";
import { IoDiamondOutline } from "react-icons/io5";

export default function About() {

    const about = [
        {
            icon: UserCheck,
            title: "Our Vision",
            description:
                "To become the most trusted beauty destination known for excellence, creativity, and personalized care.",
        },
        {
            icon: IoDiamondOutline,
            title: "Our Mission",
            description:
                "To provide exceptional beauty services that enhance natural beauty and boost confidence.",
        },
        {
            icon: Heart,
            title: "Our Values",
            description:
                "We value hygiene, innovation, integrity, client satisfaction, and building long-lasting relationships.",
        }
    ]
    return (
        <section className="relative overflow-hidden bg-[#090909] py-20 2xl:py-28">
            {/* ================= Background ================= */}

            {/* Gold Glow */}
            <div className="absolute -left-40 top-0 h-125 w-125 rounded-full bg-[#D6A45C]/10 blur-[180px]" />
            <div className="absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-[#D6A45C]/10 blur-[180px]" />

            {/* Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3a2710,transparent_45%)] opacity-30" />

            {/* Decorative Dots */}
            <div className="absolute left-16 top-28 text-[#D6A45C]/70">✦</div>
            <div className="absolute right-28 top-52 text-2xl text-[#D6A45C]/70">
                ✦
            </div>

            <div className="relative mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">

                {/* ================= LEFT IMAGE ================= */}

                <div className="relative">

                    {/* Outer Gold Glow */}
                    <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#D6A45C]/20 blur-[120px]" />

                    {/* Gold Border */}

                    <div className="relative h-full overflow-hidden">

                        <Image
                            src="/aboutUs.png"
                            alt="About Salon"
                            fill
                            className="transition duration-700 hover:scale-105 rounded-t-[200px] rounded-bl-[200px] rounded-br-2xl border border-[#D6A45C]/40"
                            priority
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                    </div>
                </div>

                {/* ================= RIGHT CONTENT ================= */}

                <div className="flex flex-col items-center justify-center">

                    {/* Small Heading */}
                    <div className="flex items-center gap-4">
                        <div className="h-px w-16 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />

                        <span className="uppercase tracking-[0.35em] text-sm font-medium text-[#D6A45C]">
                            About Us
                        </span>

                        <div className="h-px w-16 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="mt-4 2xl:mt-8 text-center font-serif leading-tight text-white text-3xl md:text-5xl 2xl:text-7xl">
                        Where Beauty
                        <br />
                        <span className="text-[#D6A45C]">
                            Meets Perfection
                        </span>
                    </h2>

                    {/* Decorative Divider */}
                    <div className="mt-4 2xl:mt-8 flex items-center gap-3">
                        <div className="h-px w-28 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />
                        <div className="h-2 w-2 rounded-full bg-[#D6A45C]" />
                        <div className="h-px w-28 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />
                    </div>

                    {/* Description */}
                    <p className="mt-4 2xl:mt-8 max-w-2xl leading-7 text-xs md:text-sm 2xl:text-base text-gray-400 text-center">
                        At Luxé Beauty Salon, we believe beauty is more than just
                        appearance—it's confidence, self-expression, and self-care.
                        Our mission is to bring out the best in you through
                        personalized services, premium products, and a luxurious
                        experience from the moment you walk in.
                    </p>

                    {/* Vision Mission Values */}

                    <div className="mt-16 grid gap-6 md:grid-cols-3">

                        {/* Card 1 */}

                        {about.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="group rounded-[28px] border border-[#D6A45C]/20 bg-[#121212] p-4 transition-all duration-500 hover:-translate-y-2 hover:border-[#D6A45C] hover:shadow-[0_0_40px_rgba(214,164,92,.15)]">

                                    {/* Icon */}
                                    <div
                                        className="mx-auto flex h-16 w-16 items-center justify-center
                                        rounded-full border border-[#D6A45C]/20
                                        bg-[#151515]
                                        transition duration-500
                                        group-hover:scale-110
                                        group-hover:border-[#D6A45C]"
                                    >
                                        <Icon
                                            size={36}
                                            className="text-[#D6A45C]"
                                        />
                                    </div>

                                    <h3 className="mt-6 text-center font-serif text-2xl text-white">
                                        {item.title}
                                    </h3>

                                    <div className="my-4 flex items-center justify-center gap-2">
                                        <div className="h-px w-10 bg-linear-to-r from-[#D6A45C]/10 to-[#D6A45C]" />
                                        <div className="h-2 w-2 rounded-full bg-[#D6A45C]" />
                                        <div className="h-px w-10 bg-linear-to-r from-[#D6A45C] to-[#D6A45C]/10" />
                                    </div>

                                    <p className="text-center text-sm text-gray-400">
                                        {item.description}
                                    </p>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}