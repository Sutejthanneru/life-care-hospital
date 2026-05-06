import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyStrip from "@/components/EmergencyStrip";
import { servicesData } from "@/data/services";
import {
  Stethoscope, Baby, Scissors, HeartPulse, Brain, Bone, Dumbbell,
  ShieldPlus, Activity, Microscope, Ear, Heart, Pill, Zap, Eye, Thermometer, ChevronRight,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Stethoscope, Scissors, ShieldPlus, Baby, Bone, Ear, Heart, Pill,
  Activity, Thermometer, Eye, Brain, Dumbbell, Zap, Microscope,
};

const Services = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <TopBar />
    <Navbar />

    <section className="bg-slate-950 text-slate-50">
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Care offerings</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Comprehensive services designed for modern patient care.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          Discover our full range of medical specialties, emergency support, surgical capabilities, and follow-up care services.
        </p>
      </div>
    </section>

    <main className="section-padding">
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicesData.map(({ slug, name, icon, shortDesc, highlight }) => {
            const Icon = iconMap[icon] || Stethoscope;
            return (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className={`group block overflow-hidden rounded-[1.75rem] border p-6 text-left transition duration-300 ${
                  highlight ? "border-secondary/30 bg-secondary/10 shadow-sm hover:-translate-y-1 hover:shadow-md" : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl ${
                  highlight ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 group-hover:text-secondary">{name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{shortDesc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm leading-7 text-slate-600">
            Life Care Hospital also supports visiting consultant services for additional specialties. For appointment availability and specialist consultations, please call our reception at <a href="tel:08626244417" className="font-semibold text-slate-900">08626 - 244417</a>.
          </p>
        </div>
      </div>
    </main>

    <Footer />
    <EmergencyStrip />
  </div>
);

export default Services;
