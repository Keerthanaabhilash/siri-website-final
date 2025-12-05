import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import OfferingsSection from "@/components/Approach";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="relative z-10 bg-background">
        <AboutSection />
        <ServicesSection />
        <OfferingsSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
