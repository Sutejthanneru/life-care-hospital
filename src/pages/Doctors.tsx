import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyStrip from "@/components/EmergencyStrip";
import { Phone, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. CH. Prasad",
    qualification: "MD, DA, FCGP, CDiab",
    specialization: ["Consultant Intensive Care Specialist", "Anaesthetist", "Diabetes Management"],
    experience: "15+ Years",
    image: "/images/dr-prasad.jpg",
    bio: "Dr. Prasad leads our ICU and critical care services with a focus on complex medical management, emergency stabilization, and diabetes care.",
    expertise: ["ICU & Critical Care", "Anesthesia", "Diabetes Management", "Trauma Care", "Pain Control"],
  },
  {
    name: "Dr. A. Nalini Padma",
    qualification: "MBBS, DGO",
    specialization: ["Consultant Gynecologist", "Laparoscopic Surgeon"],
    experience: "12+ Years",
    image: "/images/dr-nalini-padma.jpg",
    bio: "Dr. Padma provides compassionate obstetric and gynecological care with special expertise in minimally invasive surgery and high-risk pregnancy management.",
    expertise: ["Obstetrics", "Laparoscopy", "High-risk Pregnancy", "Women's Health", "Infertility Support"],
  },
  {
    name: "Dr. I. Rajendra Mohan",
    qualification: "MS (Gen)",
    specialization: ["Consultant Laparoscopic Surgeon", "General Surgeon"],
    experience: "10+ Years",
    image: "/images/dr-rajendra-mohan.jpg",
    bio: "Dr. Mohan is an experienced surgeon specializing in keyhole surgery, general surgical care, and emergency abdominal procedures.",
    expertise: ["Laparoscopic Surgery", "Hernia Repair", "Appendectomy", "Emergency Surgery", "Wound Care"],
  },
  {
    name: "Dr. Ahalya Prasanthi",
    qualification: "MBBS, MS(ObG), FMAS, DMAS",
    specialization: ["Reproductive Medicine Specialist"],
    experience: "8+ Years",
    image: "/images/dr-ahalya-prasanthi.jpg",
    bio: "Dr. Prasanthi supports couples through fertility evaluation, assisted reproduction, and personalized women's health planning.",
    expertise: ["IVF", "IUI", "Ovulation Support", "Fertility Counseling", "Reproductive Health"],
  },
];

const Doctors = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <TopBar />
    <Navbar />

    <section className="bg-slate-950 text-slate-50">
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Meet our care team</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Experienced doctors guiding every step of your care.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
          Each specialist combines clinical excellence with personal attention, creating a trusted environment for treatment and recovery.
        </p>
      </div>
    </section>

    <main className="section-padding">
      <div className="container mx-auto space-y-8">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doc) => (
            <article key={doc.name} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="h-72 overflow-hidden bg-slate-100">
                <img src={doc.image} alt={doc.name} className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">{doc.name}</h2>
                <p className="mt-2 text-sm font-medium text-secondary">{doc.qualification}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{doc.bio}</p>
                <div className="mt-5 space-y-3">
                  <div className="text-sm font-semibold text-slate-900">Expertise</div>
                  <div className="grid gap-2 text-sm text-slate-600">
                    {doc.expertise.map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">• {item}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="tel:08626244417" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary/90">
                    <Calendar className="h-4 w-4" /> Book
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Visiting Consultants</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We also host visiting consultants in orthopedics, ENT, cardiology, neurology, dermatology, and other specialties. Please call <a href="tel:08626244417" className="font-semibold text-slate-900">08626 - 244417</a> or <a href="tel:9849678505" className="font-semibold text-slate-900">9849678505</a> to confirm availability.
          </p>
        </div>
      </div>
    </main>

    <Footer />
    <EmergencyStrip />
  </div>
);

export default Doctors;
