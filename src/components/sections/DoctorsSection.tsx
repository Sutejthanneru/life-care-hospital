import { Award } from "lucide-react";

const doctors = [
  {
    name: "Dr. CH. Prasad",
    qualification: "MD, DA, FCGP, CDiab",
    specialization: ["Consultant Intensive Care Specialist", "Anaesthetist"],
    experience: "15+ Years",
    image: "/images/dr-prasad.jpg",
  },
  {
    name: "Dr. A. Nalini Padma",
    qualification: "MBBS, DGO",
    specialization: ["Consultant Gynecologist", "Laparoscopic Surgeon"],
    experience: "12+ Years",
    image: "/images/dr-nalini-padma.jpg",
  },
  {
    name: "Dr. I. Rajendra Mohan",
    qualification: "MS (Gen)",
    specialization: ["Consultant Laparoscopic Surgeon", "General Surgeon"],
    experience: "10+ Years",
    image: "/images/dr-rajendra-mohan.jpg",
  },
  {
    name: "Dr. Ahalya Prasanthi",
    qualification: "MBBS, MS(ObG), FMAS, DMAS",
    specialization: ["Reproductive Medicine Specialist"],
    experience: "8+ Years",
    image: "/images/dr-ahalya-prasanthi.jpg",
  },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-secondary">Meet the team</p>
          <h2 className="mt-3 section-heading">Experienced doctors who lead every patient journey.</h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-slate-600">
            Our specialists combine clinical expertise with compassionate communication, offering trusted care across surgery, women’s health, critical care, and diagnostics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doc) => (
            <article key={doc.name} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img src={doc.image} alt={doc.name} className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-950">{doc.name}</h3>
                <p className="mt-2 text-sm font-medium text-secondary">{doc.qualification}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {doc.specialization.map((specialty) => (
                    <span key={specialty} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">{specialty}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                  <Award className="h-4 w-4 text-secondary" />
                  <span>{doc.experience} experience</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
