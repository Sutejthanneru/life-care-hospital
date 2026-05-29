import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyStrip from "@/components/EmergencyStrip";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, servicesData } from "@/data/services";
import {
  CheckCircle2, AlertCircle, Wrench, Monitor, Stethoscope,
  ArrowLeft, Phone, ChevronRight, Star,
} from "lucide-react";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <NotFound />;

  const relatedServices = service.relatedServices
    .map((rs) => servicesData.find((s) => s.slug === rs))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="bg-slate-950 text-slate-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/about" className="hover:text-white">About</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-slate-300">{service.name}</span>
            </div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
              {service.name}
            </span>
          </div>
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-semibold sm:text-5xl">{service.name}</h1>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.shortDesc}</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-10 md:px-6">
        <div className="grid gap-8 xl:grid-cols-[2.1fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                <Stethoscope className="h-5 w-5 text-primary" /> Overview
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                {service.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" /> Conditions Treated
                </h3>
                <ul className="mt-5 grid gap-3 text-sm text-slate-600">
                  {service.conditionsTreated.map((condition) => (
                    <li key={condition} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-secondary" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" /> Procedures Offered
                </h3>
                <ul className="mt-5 grid gap-3 text-sm text-slate-600">
                  {service.procedures.map((procedure) => (
                    <li key={procedure} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary" />
                      <span>{procedure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary" /> Equipment & Technology
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-slate-600">
                {service.equipment.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-secondary" /> When to Consult
              </h3>
              <div className="mt-5 space-y-3 rounded-3xl border border-secondary/20 bg-secondary/10 p-5 text-sm text-slate-700">
                {service.whenToConsult.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <Star className="h-5 w-5 text-secondary" /> Why Choose Us
              </h3>
              <div className="mt-5 grid gap-3 text-sm text-slate-600">
                {service.whyChooseUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Book an Appointment</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Schedule your consultation for {service.name.toLowerCase()} with our specialist team.
              </p>
              <div className="mt-6 space-y-3">
                <a href="tel:7287049516" className="flex items-center justify-center rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary/90">
                  <Phone className="mr-2 h-4 w-4" /> Call 72870 49516
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Book Online
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Hospital Timings</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>OPD Hours</span>
                  <span className="font-semibold text-slate-900">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency</span>
                  <span className="font-semibold text-red-600">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Lab Services</span>
                  <span className="font-semibold text-slate-900">24 hours</span>
                </div>
              </div>
            </div>

            {relatedServices.length > 0 && (
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Related Services</h3>
                <div className="mt-4 space-y-2 text-sm">
                  {relatedServices.map((rs) => rs && (
                    <Link
                      key={rs.slug}
                      to={`/services/${rs.slug}`}
                      className="flex items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                    >
                      <ChevronRight className="h-4 w-4 text-primary" />
                      {rs.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow-sm">
              <p>
                The information on this page is for general awareness. Please consult our medical team for care plans tailored to your individual needs.
              </p>
            </div>

            <Link to="/about#services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to services
            </Link>
          </aside>
        </div>
      </main>

      <Footer />
      <EmergencyStrip />
    </div>
  );
};

export default ServiceDetail;
