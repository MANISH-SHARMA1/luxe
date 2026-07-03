"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    ArrowRight,
} from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const services = [
    "Hair Styling",
    "Bridal Makeup",
    "Skin Care",
    "Nail Art",
    "Spa Therapy",
];

const quickLinks = [
    "Home",
    "About",
    "Services",
    "Gallery",
    "Contact",
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#090909] text-white">

            {/* Background */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3A2814,transparent_45%)] opacity-50" />

            <div className="absolute -left-60 top-0 h-137.5 w-137.5 rounded-full bg-[#D6A45C]/10 blur-[170px]" />

            <div className="absolute -right-60 bottom-0 h-137.5 w-137.5 rounded-full bg-[#D6A45C]/10 blur-[170px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-16">

                {/* Newsletter */}

                <div className="mb-12 rounded-4xl border border-[#D6A45C]/20 bg-[#111111] p-5 lg:p-10">

                    <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

                        <div>

                            <p className="uppercase tracking-[0.35em] text-sm text-[#D6A45C]">
                                Newsletter
                            </p>

                            <h2 className="mt-3 font-serif text-3xl">
                                Get Beauty Tips & Offers
                            </h2>

                        </div>

                        <div className="flex w-full max-w-xl overflow-hidden rounded-full border border-[#D6A45C]/20">

                            <input
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent px-3 lg:px-6 py-2 lg:py-4 outline-none"
                            />

                            <button className="flex items-center gap-2 bg-[#D6A45C] px-2 lg:px-8 text-sm lg:text-base font-medium text-black transition hover:bg-[#c7964e]">

                                Subscribe

                                <ArrowRight size={18} />

                            </button>

                        </div>

                    </div>

                </div>

                {/* Footer Grid */}

                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}

                    <div>

                        {/* Logo */}
                        <Link href="/" className="flex flex-col">
                            <h2 className="text-3xl font-serif font-bold tracking-widest text-[#D6A45C]">
                                LUXÉ
                            </h2>
                            <span className="text-[11px] uppercase tracking-[0.35em] text-gray-400">
                                Beauty Salon
                            </span>
                        </Link>

                        <p className="mt-6 leading-6 text-gray-400 text-sm">

                            Experience luxury beauty services,
                            personalized care, and premium
                            treatments crafted by expert
                            professionals.

                        </p>

                        <div className="mt-8 flex gap-4">

                            {[FaInstagram, FaFacebook, FaLinkedin].map(
                                (Icon, index) => (
                                    <button
                                        key={index}
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D6A45C]/20 transition hover:bg-[#D6A45C] hover:text-black"
                                    >
                                        <Icon size={18} />
                                    </button>
                                )
                            )}

                        </div>

                    </div>

                    {/* Services */}

                    <div>

                        <h3 className="mb-6 font-serif text-2xl text-[#D6A45C]">
                            Services
                        </h3>

                        <div className="space-y-2">

                            {services.map((item) => (

                                <Link
                                    key={item}
                                    href="/"
                                    className="block text-gray-400 transition hover:text-[#D6A45C] text-sm"
                                >
                                    {item}
                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="mb-6 font-serif text-2xl text-[#D6A45C]">
                            Quick Links
                        </h3>

                        <div className="space-y-2">

                            {quickLinks.map((item) => (

                                <Link
                                    key={item}
                                    href="/"
                                    className="block text-gray-400 transition hover:text-[#D6A45C] text-sm"
                                >
                                    {item}
                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="mb-6 font-serif text-2xl text-[#D6A45C]">
                            Contact
                        </h3>

                        <div className="space-y-3 text-sm">

                            <div className="flex gap-4">

                                <Phone
                                    className="mt-1 text-[#D6A45C]"
                                    size={14}
                                />

                                <div>

                                    <p className="text-gray-500">
                                        Phone
                                    </p>

                                    <p>+91 98765 43210</p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <Mail
                                    className="mt-1 text-[#D6A45C]"
                                    size={14}
                                />

                                <div>

                                    <p className="text-gray-500">
                                        Email
                                    </p>

                                    <p>hello@luxesalon.com</p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <MapPin
                                    className="mt-1 text-[#D6A45C]"
                                    size={14}
                                />

                                <div>

                                    <p className="text-gray-500">
                                        Address
                                    </p>

                                    <p>
                                        123 Luxury Avenue,
                                        New Delhi, India
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Instagram Gallery */}

                <div className="mt-12">

                    <h3 className="mb-8 text-center font-serif text-3xl text-[#D6A45C]">
                        Follow Our Journey
                    </h3>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

                        {["/hair-style.png", "/bridal-makeup.png", "/skin-care.png", "/whyUs.png", "/nail-art.png", "/hero.png"].map((img, index) => (
                            <div
                                key={index}
                                className="group relative aspect-square overflow-hidden rounded-2xl"
                            >

                                <Image
                                    src={img}
                                    alt=""
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />

                            </div>
                        ))}

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="border-t border-[#D6A45C]/10 text-xs">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-gray-500 md:flex-row">

                    <p>
                        © 2026 Luxe Salon. All Rights Reserved.
                    </p>

                    <div className="flex gap-8">

                        <Link href="/">Privacy Policy</Link>

                        <Link href="/">Terms & Conditions</Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}