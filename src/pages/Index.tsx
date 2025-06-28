
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import DocumentsSection from "@/components/DocumentsSection";
import PaymentSection from "@/components/PaymentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const [visitorsCount, setVisitorsCount] = useState(127);
  const [growthRate] = useState(15);

  useEffect(() => {
    // Simular incremento realista de visitantes
    const interval = setInterval(() => {
      setVisitorsCount(prev => {
        const increment = Math.random() > 0.7 ? 1 : 0;
        return prev + increment;
      });
    }, 45000); // Cada 45 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection visitorsCount={visitorsCount} growthRate={growthRate} />
        <FeaturesSection />
        <GallerySection />
        <LocationSection />
        <DocumentsSection />
        <PaymentSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
