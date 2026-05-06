import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyStrip from "@/components/EmergencyStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import ConsultationBanner from "@/components/sections/ConsultationBanner";

const About = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <TopBar />
    <Navbar />

    <section className="bg-slate-950 text-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">About Life Care Hospital</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Improving lives with modern care and compassionate service.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          Our hospital combines clinical excellence and family-centered care so every patient feels supported through every step of their health journey.
        </p>
      </div>
    </section>

    <main>
      <AboutSection />
      <DoctorsSection />

      <section className="section-padding bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-secondary">Featured specialties</p>
            <h2 className="mt-3 section-heading">Care and services designed for real patient needs</h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-slate-600">
              These are the core services we deliver with clinical depth, compassionate coordination, and a modern hospital experience.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-secondary">Trust & outcomes</p>
            <h2 className="mt-3 section-heading">Performance that families rely on</h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-slate-600">
              Our hospital combines advanced care, emergency readiness, and patient-first coordination to support better health outcomes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { value: "15+", label: "Years of care" },
              { value: "50,000+", label: "Patients supported" },
              { value: "20+", label: "Specialty services" },
              { value: "24/7", label: "Emergency readiness" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <div className="text-3xl font-semibold text-secondary">{metric.value}</div>
                <p className="mt-3 text-sm text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </main>

    <Footer />
    <EmergencyStrip />
  </div>
);

export default About;
