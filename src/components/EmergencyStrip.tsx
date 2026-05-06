const EmergencyStrip = () => {
  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 rounded-[1.75rem] border border-slate-200/20 bg-secondary px-5 py-4 text-white shadow-2xl shadow-slate-950/20 md:right-6 md:left-auto md:w-auto"
      role="contentinfo"
      aria-label="Emergency contact information"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-100/80">Emergency support</p>
          <p className="mt-1 text-lg font-semibold">Call our 24/7 helpline</p>
          <p className="mt-1 text-sm text-slate-100/90">72870 49516 • Immediate ambulance and urgent care</p>
        </div>
        <a
          href="tel:7287049516"
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/30 transition hover:bg-slate-900"
        >
          Call Now
        </a>
      </div>
    </div>
  );
};

export default EmergencyStrip;
