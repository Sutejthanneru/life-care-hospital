import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ConsultationBanner = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 rounded-[2rem] border border-primary/15 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/80">Need expert advice?</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Connect with our senior care team today.</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/80">
              Fast appointment scheduling, personalized care planning, and clear support from admission through recovery.
            </p>
          </div>
          <Link to="/contact">
            <Button className="rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-slate-950/20 transition hover:bg-secondary/90">
              Schedule a Visit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
