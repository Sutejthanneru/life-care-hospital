import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white backdrop-blur-xl transition-all duration-300",
        scrolled ? "shadow-sm border-slate-200/80" : "border-transparent shadow-none"
      )}
    >
      <nav className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-2.4 md:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Life Care Hospital logo" className="h-16 w-auto object-contain" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition duration-200",
                  location.pathname === link.href
                    ? "border border-secondary bg-secondary/10 text-secondary"
                    : "text-slate-700 hover:text-secondary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:7287049516"
            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-secondary/40 hover:text-secondary"
          >
            <Phone className="mr-2 h-4 w-4" /> 72870 49516
          </a>
          <Link to="/contact">
            <Button size="sm" className="rounded-full bg-secondary px-5 text-xs font-semibold text-secondary-foreground shadow-sm transition hover:bg-secondary/90">
              Book Appointment
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-secondary/40"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden border-t border-slate-200/80 bg-white/95 shadow-sm">
          <div className="container mx-auto px-4 py-0 md:px-6">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "block rounded-2xl px-4 py-0 text-sm font-semibold uppercase tracking-[0.12em] transition duration-200",
                    location.pathname === link.href
                      ? "bg-secondary/10 text-secondary"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3">
              <a
                href="tel:7287049516"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-secondary/40 hover:text-secondary"
              >
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary/90">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
