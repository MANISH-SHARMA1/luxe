import About from "@/components/About";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/faq/Faq";
import Footer from "@/components/Footer";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/services/Services";
import SpecialOffers from "@/components/specialOffers/SpecialOffers";
import Team from "@/components/team/Team";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/whyUs/WhyChooseUs";
import { BadgeCheck, Heart, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Stats */}
      <div className="relative overflow-hidden lg:hidden grid grid-cols-2 gap-6 bg-[#0b0b0b] p-8 backdrop-blur-lg md:grid-cols-4">
        {/* Background Glow */}
        <div className="absolute -left-40 top-0 h-125] w-125] rounded-full bg-[#D6A45C]/40 blur-[170px]" />
        <div className="absolute -right-40 bottom-0 h-125] w-125] rounded-full bg-[#D6A45C]/40 blur-[170px]" />

        {/* Noise Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2c1d09_0%,transparent_45%)] opacity-40" />

        {/* Decorative Lines */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
          <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-[#D6A45C]/20 to-transparent" />
        </div>

        <div className="flex flex-col items-center">
          <Star className="mb-3 text-[#d6a45c]" />
          <h2 className="text-2xl font-bold">
            <CountUp end={4.9} decimals={1} suffix="/5" />
          </h2>
          <p className="text-sm text-gray-400">
            Average Rating
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Users className="mb-3 text-[#d6a45c]" />
          <h2 className="text-2xl font-bold">
            <CountUp end={15} suffix="+" />
          </h2>
          <p className="text-sm text-gray-400">
            Expert Stylists
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Heart className="mb-3 text-[#d6a45c]" />
          <h2 className="text-2xl font-bold">
            <CountUp end={10} suffix="K+" />
          </h2>
          <p className="text-sm text-gray-400">
            Happy Clients
          </p>
        </div>

        <div className="flex flex-col items-center">
          <BadgeCheck
            className="mb-3 text-[#d6a45c]" />
          <h2 className="text-2xl font-bold">
            <CountUp end={7} suffix="days" />
          </h2>
          <p className="text-sm text-gray-400">
            Open Weekly
          </p>
        </div>

      </div>

      <Services />
      <WhyChooseUs />
      <About />
      <Team />
      <Gallery />
      <SpecialOffers />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
