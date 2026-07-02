import About from "@/components/About";
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

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Team />
      <Gallery />
      <SpecialOffers />
      <Testimonials />
      <FAQ />
      <Footer/>
    </div>
  );
}
