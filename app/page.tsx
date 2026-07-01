import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
    </div>
  );
}
