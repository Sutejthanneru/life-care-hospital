import { Link } from "react-router-dom";
import {
  Stethoscope, Baby, Scissors, HeartPulse, Brain, Bone, Dumbbell,
  ShieldPlus, Activity, Microscope, Ear, Heart, Pill, Zap, Eye, Thermometer,
} from "lucide-react";
import { servicesData } from "@/data/services";

const iconMap: Record<string, any> = {
  Stethoscope, Scissors, ShieldPlus, Baby, Bone, Ear, Heart, Pill,
  Activity, Thermometer, Eye, Brain, Dumbbell, Zap, Microscope,
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-secondary">Core specialties</p>
          <h2 className="mt-3 section-heading">Medical services built around patient outcomes.</h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-slate-600">
            We deliver coordinated care across emergency medicine, surgery, diagnostics, women’s health, and recovery services for stronger clinical results.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.slice(0, 9).map(({ icon, name, slug }) => {
            const Icon = iconMap[icon] || Stethoscope;
            return (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className="group block overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 group-hover:text-secondary">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Explore our patient-focused care path and learn how we deliver safe, timely, and compassionate treatment.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link to="/about#services" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80">
            Explore our services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
