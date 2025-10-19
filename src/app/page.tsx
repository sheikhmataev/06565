import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import NewsSection from "@/components/sections/NewsSection";
import SectionSeparator from "@/components/layout/SectionSeparator";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <div className="container mx-auto px-4">
        <SectionSeparator />
      </div>
      <WhyChooseUsSection />
      <div className="container mx-auto px-4">
        <SectionSeparator />
      </div>
      <NewsSection />
    </main>
  );
}
