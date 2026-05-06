import { Phone, Siren, Clock, Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencySection = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="content-surface grid gap-8 rounded-[2rem] border-slate-200/70 p-6 md:p-8 lg:grid-cols-[1.3fr_0.9fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              <Siren className="h-4 w-4" />
              24/7 Emergency Response
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Rapid access to urgent care, ambulance dispatch, and critical support.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Our emergency team is available around the clock with dedicated ICU support, trauma-ready transport, and immediate stabilization for serious medical needs.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { icon: Clock, label: "Open 24/7" },
                { icon: Ambulance, label: "Ambulance Ready" },
                { icon: Siren, label: "Critical Care Team" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-slate-100 px-4 py-4 text-sm text-slate-700 shadow-sm">
                  <div className="flex items-center gap-3 font-semibold text-slate-900">
                    <item.icon className="h-4 w-4 text-secondary" />
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-slate-950/95 p-6 text-slate-50 shadow-[0_32px_80px_-40px_rgba(15,23,42,0.6)]">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Immediate helpline</p>
            <p className="mt-3 text-3xl font-semibold">72870 49516</p>
            <p className="mt-2 text-sm text-slate-400">Reach our emergency desk directly for swift ambulance dispatch and urgent critical care coordination.</p>
            <div className="mt-6 grid gap-3">
              <a href="tel:08626244417" className="inline-flex items-center justify-center rounded-full bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                <Phone className="mr-2 h-4 w-4" /> 08626 - 244417
              </a>
              <Button size="sm" className="w-full rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary/90">
                Contact Emergency Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
