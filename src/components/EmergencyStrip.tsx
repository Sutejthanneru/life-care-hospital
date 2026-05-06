import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

const EmergencyStrip = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On desktop, always show. On mobile, show dismissible snackbar
  if (!isVisible && isMobile) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <button
          onClick={() => setIsVisible(true)}
          className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-secondary/90 active:scale-95"
          aria-label="Show emergency contact"
        >
          <Phone className="h-4 w-4" />
          Emergency Contact
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Version - Dismissible Bottom Sheet */}
      {isMobile && isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-in slide-in-from-bottom-3 duration-300">
          <div className="mx-4 mb-4 rounded-2xl border border-secondary/20 bg-secondary px-5 py-4 text-white shadow-2xl shadow-slate-950/30">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-100/80 font-semibold">Emergency Support</p>
                <p className="mt-2 text-base font-semibold">24/7 Helpline</p>
                <p className="mt-1 text-sm text-slate-100/90">Immediate ambulance & urgent care</p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="shrink-0 rounded-full p-2 transition hover:bg-white/10 active:bg-white/20"
                aria-label="Dismiss emergency contact"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <a
              href="tel:7287049516"
              className="mt-3 flex items-center justify-center gap-2 w-full rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-900 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              Call Now: 72870 49516
            </a>
          </div>
        </div>
      )}

      {/* Desktop Version - Always Visible Sticky */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href="tel:7287049516"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition hover:bg-secondary/90 hover:shadow-xl active:scale-95"
          title="Call emergency helpline"
        >
          <Phone className="h-5 w-5" />
          <span>72870 49516</span>
        </a>
      </div>
    </>
  );
};

export default EmergencyStrip;
