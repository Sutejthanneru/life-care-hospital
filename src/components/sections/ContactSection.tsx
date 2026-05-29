import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", age: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hospitalEmail = "lifecarehospitalkavali@gmail.com";
  const formEndpoint = `https://formsubmit.co/${hospitalEmail}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("age", formData.age);
      data.append("phone", formData.phone);
      data.append("message", formData.message);
      data.append("_subject", "New Appointment Request from Life Care Website");
      data.append("_captcha", "false");
      data.append("_template", "table");

      const response = await fetch(formEndpoint, {
        method: "POST",
        body: data,
      });

      if (response.ok || response.type === "opaque") {
        toast.success("Appointment details sent to the hospital email.");
        setFormData({ name: "", age: "", phone: "", message: "" });
      } else {
        toast.error("Unable to send appointment details. Please try again.");
      }
    } catch (error) {
      toast.error("Unable to send appointment details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl text-center mx-auto mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">Contact & Appointment</p>
          <h2 className="mt-3 section-heading">Speak with our care team today.</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Request a callback, get directions, or connect directly with our specialists for appointments and urgent support.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="content-surface p-6">
            <div className="space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">Our Location</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Christianpet Main Road, Kavali – 524201, Andhra Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">Call Us</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Landline: <a href="tel:08626244417" className="font-semibold text-slate-950">08626 - 244417</a><br />
                    Emergency: <a href="tel:7287049516" className="font-semibold text-slate-950">72870 49516</a>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-secondary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">Hours</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Emergency care – 24/7<br />OPD / Consultations – 9:00 AM to 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-border bg-card">
              <div className="relative h-64 w-full">
                <iframe
                  src="https://www.google.com/maps?q=14.911443966630662,79.99050835402967&z=16&output=embed"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Life Care Hospital Location"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=14.911443966630662,79.99050835402967"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0"
                  aria-label="Open hospital location in Google Maps"
                />
                <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-slate-900/85 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                  Open in Google Maps
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="content-surface p-6">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Appointment Request</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">Book a consultation with our care team.</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Provide your details and we will contact you to confirm availability and next steps.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="patient-name" className="mb-2 block text-sm font-semibold text-foreground">Patient Name *</label>
                <Input
                  id="patient-name"
                  placeholder="Enter patient name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="patient-age" className="mb-2 block text-sm font-semibold text-foreground">Age</label>
                  <Input
                    id="patient-age"
                    placeholder="Age"
                    type="number"
                    min={0}
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="patient-phone" className="mb-2 block text-sm font-semibold text-foreground">Phone Number *</label>
                  <Input
                    id="patient-phone"
                    placeholder="Phone number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="visit-reason" className="mb-2 block text-sm font-semibold text-foreground">Reason for Visit</label>
                <Textarea
                  id="visit-reason"
                  placeholder="e.g. follow-up consultation, new appointment, urgent concern"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </Button>

            <p className="mt-4 text-xs text-slate-500">
              We will contact you to confirm your appointment and answer any questions about your visit.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
