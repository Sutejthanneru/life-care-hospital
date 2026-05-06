import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services are available at Life Care Hospital?",
    a: "We offer a broad range of medical specialties, including emergency medicine, surgery, women’s health, pediatrics, orthopedics, cardiology, neurology, psychiatry, oncology, and an advanced diagnostic laboratory.",
  },
  {
    q: "Do you provide emergency care?",
    a: "Yes. Our emergency department operates 24/7 with a dedicated trauma team, ambulance support, and direct ICU backup for rapid assessment and treatment.",
  },
  {
    q: "How can I book an appointment?",
    a: "Call our reception at 08626 - 244417 or emergency desk at 72870 49516. You can also submit the appointment form on the Contact page and our team will follow up immediately.",
  },
  {
    q: "What are the visiting hours?",
    a: "General visiting hours are 10:00 AM – 12:00 PM and 4:00 PM – 6:00 PM. ICU visits are coordinated by the nursing team to ensure patient safety.",
  },
  {
    q: "Which doctors are available and what are their specializations?",
    a: "Our core specialists include intensive care, gynecology, surgery, anesthesiology, and reproductive medicine. Visiting consultants support orthopedics, ENT, cardiology, neurology, dermatology, and more.",
  },
  {
    q: "Do you accept health insurance?",
    a: "We accept many government and private insurance plans. For coverage details and cashless service inquiries, please contact our billing department before admission.",
  },
  {
    q: "Is the hospital equipped for surgeries?",
    a: "Yes. We have modern operating theatres, laparoscopic equipment, anesthesiology support, and post-operative recovery care for a wide range of procedures.",
  },
  {
    q: "Where is Life Care Hospital located?",
    a: "We are on Christianpet Main Road in Kavali, Andhra Pradesh. The hospital is easy to reach from nearby transport hubs and local communities.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-secondary">Questions answered</p>
          <h2 className="mt-3 section-heading">Frequently asked questions</h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-slate-600">
            Get clear answers about appointments, emergency care, visiting hours, doctors, and insurance so you can plan your visit with confidence.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
