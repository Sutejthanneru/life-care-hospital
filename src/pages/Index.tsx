import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyStrip from "@/components/EmergencyStrip";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import EmergencySection from "@/components/sections/EmergencySection";
import ContactSection from "@/components/sections/ContactSection";
import ConsultationBanner from "@/components/sections/ConsultationBanner";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <FAQSection />
        <ContactSection />
        <ConsultationBanner />
      </main>
      <Footer />
      <EmergencyStrip />
    </div>
  );
};

export default Index;
