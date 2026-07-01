"use client";

import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Packages", href: "#packages" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl shadow-2xl">

        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <h2 className="text-3xl font-serif font-bold tracking-widest text-[#D6A45C]">
            LUXÉ
          </h2>
          <span className="text-[11px] uppercase tracking-[0.35em] text-gray-400">
            Beauty Salon
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm uppercase tracking-wider text-gray-300 transition duration-300 hover:text-[#D6A45C]"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D6A45C] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <button className="hidden items-center gap-2 rounded-full bg-[#D6A45C] px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(214,164,92,0.5)] lg:flex">
          <Calendar size={18} />
          Book Appointment
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mx-4 mt-3 overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-[500px] p-6" : "max-h-0 p-0 border-0"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg text-gray-300 transition hover:text-[#D6A45C]"
            >
              {link.name}
            </Link>
          ))}

          <button className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#D6A45C] py-3 font-semibold text-black">
            <Calendar size={18} />
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}