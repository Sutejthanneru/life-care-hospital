import { CheckCircle2, ShieldCheck, Users, Stethoscope, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-secondary">About Life Care Hospital</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Trusted, modern healthcare for Kavali and the surrounding communities.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">
              Life Care Hospital delivers compassionate patient care through a tightly coordinated medical team, advanced clinical systems, and 24/7 emergency readiness.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Our services include critical care, surgery, diagnostics, women’s health, and rehabilitation — all designed to help families receive treatment with confidence and clarity.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "15+ years of dependable community healthcare",
                "Integrated emergency, surgery, and diagnostic support",
                "Patient-centered care with transparent communication",
                "Special focus on diabetes, maternal health, and wellness",
                "Trusted by local families and referrals from regional clinics",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {[
              { icon: ShieldCheck, title: "Reliable care", desc: "A trusted local hospital with deep clinical experience and strong patient outcomes." },
              { icon: Users, title: "Specialist-led team", desc: "Our care is led by experienced doctors, nurses, and support staff who collaborate on every case." },
              { icon: Stethoscope, title: "Convenient coordination", desc: "Emergency, diagnostics, and treatment are connected under one roof for faster patient journeys." },
              { icon: Award, title: "Modern facilities", desc: "Well-equipped operating theatres, ICU monitoring, and lab systems support safer care delivery." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 text-secondary">
                  <Icon className="h-5 w-5" />
                  <h3 className="text-base font-semibold text-slate-950">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
