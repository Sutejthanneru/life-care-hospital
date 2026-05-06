import { Phone, MapPin, Clock, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-slate-950 text-slate-100 text-[12px] tracking-[0.02em]">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2 md:px-6">
        <div className="flex flex-wrap items-center gap-4 text-slate-200">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            Christianpet Main Road, Kavali
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            24/7 emergency care available
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a href="tel:7287049516" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-slate-100 transition hover:bg-white/15">
            <Phone className="h-3.5 w-3.5 text-secondary" />
            72870 49516
          </a>
          <a href="tel:08626244417" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-slate-100 transition hover:bg-white/15">
            <Phone className="h-3.5 w-3.5 text-secondary" />
            08626 - 244417
          </a>
          <a href="mailto:lifecarehospital@gmail.com" className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-slate-100 transition hover:bg-white/15 md:inline-flex">
            <Mail className="h-3.5 w-3.5 text-slate-100" />
            lifecarehospital@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
