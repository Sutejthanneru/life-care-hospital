import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyStrip from "@/components/EmergencyStrip";
import EmergencySection from "@/components/sections/EmergencySection";
import ContactSection from "@/components/sections/ContactSection";

const Contact = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <Navbar />

    <section className="bg-slate-950 text-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Contact the hospital</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">We are ready to support your healthcare needs.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          Reach out for appointment scheduling, emergency assistance, referrals, or any questions about our services.
        </p>
      </div>
    </section>

    <ContactSection />
    <EmergencySection />
    <Footer />
    <EmergencyStrip />
  </div>
);

export default Contact;
