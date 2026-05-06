import { Link } from "react-router-dom";
import { Phone, Calendar, Award, HeartPulse, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustMetrics = [
  { icon: Clock, label: "24/7 Availability", value: "Always On" },
  { icon: HeartPulse, label: "Patient First", value: "Compassion-led" },
  { icon: Award, label: "Clinical Expertise", value: "15+ years" },
];

const keyServices = [
  { label: "Critical Care & ICU" },
  { label: "Minimally Invasive Surgery" },
  { label: "Women’s Health" },
  { label: "Diagnostics & Lab" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary text-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
              Trusted healthcare in Kavali
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Life Care Hospital — premium care, modern facilities, and a human-centered experience.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200/90 sm:text-base">
              Our hospital blends clinical expertise and compassionate service to deliver fast emergency support, advanced surgery, and recovery-focused care for every family.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-slate-950/20 transition hover:bg-secondary/90">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:7287049516" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                <Phone className="h-4 w-4" />
                Emergency Helpline
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-slate-200">
                    <metric.icon className="h-5 w-5 text-secondary" />
                    <span className="text-xs uppercase tracking-[0.24em] text-slate-300">{metric.label}</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_35px_120px_-45px_rgba(15,23,42,0.85)] backdrop-blur-xl text-slate-950">
            <div className="rounded-[1.75rem] bg-slate-950/95 p-6 text-slate-50 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.45)]">
              <h2 className="text-xl font-semibold">Complete care in one place</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Emergency medicine, surgery, women’s health, critical care, and diagnostics are integrated to help patients move from admission through recovery with clarity.
              </p>

              <div className="mt-6 grid gap-3">
                {keyServices.map((service) => (
                  <div key={service.label} className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-100">
                    {service.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white px-4 py-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Patient satisfaction</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">95%</p>
              </div>
              <div className="rounded-3xl bg-white px-4 py-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Emergency readiness</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
