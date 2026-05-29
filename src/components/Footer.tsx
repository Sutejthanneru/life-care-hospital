import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr]">
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="Life Care Hospital logo" className="h-12 w-auto" />
            </Link>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Life Care Hospital delivers trusted, patient-centered care in Kavali with modern clinical services, compassionate specialists, and round-the-clock support.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary" />
                Christianpet Main Road, Kavali, Andhra Pradesh
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                lifecarehospitalkavali@gmail.com
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Contact</h3>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-900 p-4">
                <div className="flex items-center gap-3 text-secondary">
                  <Phone className="h-4 w-4" />
                  <div>
                    <p className="font-semibold text-slate-100">72870 49516</p>
                    <p className="text-xs text-slate-400">Emergency helpline</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-900 p-4">
                <div className="flex items-center gap-3 text-secondary">
                  <Clock className="h-4 w-4" />
                  <div>
                    <p className="font-semibold text-slate-100">24/7 Service</p>
                    <p className="text-xs text-slate-400">Emergency and critical care ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Life Care Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
