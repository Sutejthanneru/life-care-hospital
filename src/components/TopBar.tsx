import { Phone, MapPin, Clock, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden sm:block bg-slate-950 text-slate-100 text-[11px] sm:text-[12px] tracking-[0.02em]">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 md:px-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-slate-300">
          <span className="inline-flex items-center gap-1.5 sm:gap-2">
            <MapPin className="h-3 sm:h-3.5 w-3 sm:w-3.5 flex-shrink-0" />
            <span className="truncate">Christianpet Main Road, Kavali</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 sm:gap-2">
            <Clock className="h-3 sm:h-3.5 w-3 sm:w-3.5 flex-shrink-0" />
            24/7 emergency care available
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a href="tel:7287049516" className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 px-2.5 sm:px-3 py-1.5 text-slate-100 transition hover:bg-white/15 active:bg-white/20">
            <Phone className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-secondary flex-shrink-0" />
            <span className="text-xs sm:text-[12px]">72870 49516</span>
          </a>
          <a href="tel:08626244417" className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 px-2.5 sm:px-3 py-1.5 text-slate-100 transition hover:bg-white/15 active:bg-white/20">
            <Phone className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-secondary flex-shrink-0" />
            <span className="text-xs sm:text-[12px]">08626 - 244417</span>
          </a>
          <a href="mailto:lifecarehospital@gmail.com" className="hidden lg:inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 px-2.5 sm:px-3 py-1.5 text-slate-100 transition hover:bg-white/15 active:bg-white/20">
            <Mail className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-slate-100 flex-shrink-0" />
            <span className="text-xs sm:text-[12px]">lifecarehospital@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
