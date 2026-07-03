"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

interface Props {
    image: string;
    avatar: string;
    name: string;
    service: string;
    review: string;
    rating?: number;
}

export default function TestimonialCard({
    image,
    avatar,
    name,
    service,
    review,
    rating = 5,
}: Props) {
    return (
        <div
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-[#D6A45C]/20
            bg-[#111]
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-[#D6A45C]
            hover:shadow-[0_0_40px_rgba(214,164,92,.15)]
        "
        >
            {/* Gold Glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D6A45C]/10 blur-[110px] opacity-0 transition group-hover:opacity-100" />

            <div className="grid h-full md:grid-cols-[1.1fr_1fr]">

                {/* Left */}

                <div className="flex flex-col p-4">

                    <Quote
                        size={42}
                        className="text-[#D6A45C]"
                    />

                    <p className="mt-6 text leading-9 text-gray-300">
                        {review}
                    </p>

                    <div className="my-7 h-px w-full bg-[#D6A45C]/20" />

                    <div className="mt-uto flex gap-4">

                        <div className="relative h-10 lg:h-14 w-10 lg:w-14 overflow-hidden rounded-full border border-[#D6A45C]">

                            <Image
                                src={avatar}
                                alt={name}
                                fill
                                className="object-cover"
                            />

                        </div>

                        <div>

                            <h3 className="text-base lg:text-lg font-semibold tracking-wide text-[#D6A45C]">
                                {name}
                            </h3>

                            <p className="mt-1 text-gray-400 text-xs lg:text-sm">
                                {service}
                            </p>

                            <div className="mt-3 flex gap-1">

                                {Array.from({ length: rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill="#D6A45C"
                                        className="text-[#D6A45C]"
                                    />
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Image */}

                <div className="relative min-h-60 lg:min-h-105 overflow-hidden">

                    <Image
                        src={image}
                        alt={service}
                        fill
                        className="lg:object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#111]" />

                </div>

            </div>
        </div>
    );
}