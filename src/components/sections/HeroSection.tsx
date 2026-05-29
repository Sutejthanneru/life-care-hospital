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
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.95fr] items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200">
              Trusted healthcare in Kavali
            </span>
            <h1 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Life Care Hospital — premium care, modern facilities, and a human-centered experience.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-200/90 sm:text-sm">
              Our hospital blends clinical expertise and compassionate service to deliver fast emergency support, advanced surgery, and recovery-focused care for every family.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-lg shadow-slate-950/20 transition hover:bg-secondary/90">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:7287049516" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
                <Phone className="h-4 w-4" />
                Emergency Helpline
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-slate-200">
                    <metric.icon className="h-4 w-4 text-secondary" />
                    <span className="text-[10px] uppercase tracking-[0.24em] text-slate-300">{metric.label}</span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.85)] backdrop-blur-xl text-slate-950">
            <div className="rounded-[1.75rem] bg-slate-950/95 p-5 text-slate-50 shadow-[0_18px_55px_-18px_rgba(15,23,42,0.45)]">
              <h2 className="text-lg font-semibold">Complete care in one place</h2>
              <p className="mt-3 text-sm leading-5 text-slate-300">
                Emergency medicine, surgery, women’s health, critical care, and diagnostics are integrated to help patients move from admission through recovery with clarity.
              </p>

              <div className="mt-5 grid gap-2">
                {keyServices.map((service) => (
                  <div key={service.label} className="rounded-3xl bg-slate-900/90 px-3 py-3 text-[13px] text-slate-100">
                    {service.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-white px-3 py-4 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Patient satisfaction</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">95%</p>
              </div>
              <div className="rounded-3xl bg-white px-3 py-4 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Emergency readiness</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
