export interface ServiceData {
  slug: string;
  name: string;
  icon: string;
  highlight?: boolean;
  shortDesc: string;
  overview: string[];
  conditionsTreated: string[];
  procedures: string[];
  equipment: string[];
  whenToConsult: string[];
  whyChooseUs: string[];
  relatedServices: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    icon: "Stethoscope",
    shortDesc: "Comprehensive diagnosis and treatment for a wide range of medical conditions by experienced physicians.",
    overview: [
      "The General Medicine department at Life Care Hospital provides first-line medical consultation for patients with acute and chronic illnesses. Our physicians are trained to diagnose, treat, and manage conditions affecting multiple organ systems.",
      "Whether you have a persistent fever, uncontrolled blood sugar, hypertension, or require a general health check-up, our internal medicine specialists offer evidence-based treatment with a patient-centric approach.",
      "We work closely with other departments including cardiology, pulmonology, and nephrology to ensure holistic treatment when multi-system involvement is identified."
    ],
    conditionsTreated: [
      "Diabetes Mellitus (Type 1 & Type 2)",
      "Hypertension (High Blood Pressure)",
      "Thyroid Disorders",
      "Respiratory Infections (Bronchitis, Pneumonia)",
      "Dengue, Malaria, Typhoid",
      "Anemia and Blood Disorders",
      "Liver and Kidney Function Abnormalities",
      "Chronic Fatigue and Weakness",
      "Allergic Reactions"
    ],
    procedures: [
      "Complete Blood Panel & Health Screening",
      "ECG and Blood Pressure Monitoring",
      "Blood Sugar Management Programs",
      "IV Fluid Administration",
      "Referral Coordination with Specialists"
    ],
    equipment: [
      "Digital BP monitors and glucometers",
      "12-lead ECG machine",
      "Pulse oximeters",
      "Fully automated biochemistry analyser"
    ],
    whenToConsult: [
      "Persistent fever lasting more than 3 days",
      "Unexplained weight loss or gain",
      "Frequent headaches, dizziness, or fatigue",
      "Difficulty breathing or chest discomfort",
      "Routine health check-ups and preventive care"
    ],
    whyChooseUs: [
      "Experienced physicians with 15+ years of clinical practice",
      "Same-day consultation and diagnostic reports",
      "Integrated care — seamless referral to specialists within the hospital",
      "Affordable consultation fees suitable for all income groups",
      "Special diabetes and hypertension management programs"
    ],
    relatedServices: ["nephrology-urology", "non-invasive-cardiology", "pulmonology", "lab-diagnostics"]
  },
  {
    slug: "general-laparoscopic-surgery",
    name: "General & Laparoscopic Surgery",
    icon: "Scissors",
    shortDesc: "Minimally invasive and open surgical procedures by skilled surgeons with modern OT facilities.",
    overview: [
      "The Department of General & Laparoscopic Surgery at Life Care Hospital provides both conventional open surgeries and advanced minimally invasive (keyhole) procedures. Our surgeons have extensive experience in abdominal, hernia, and gallbladder surgeries.",
      "Laparoscopic surgery offers patients smaller incisions, less pain, faster recovery, and shorter hospital stays compared to traditional open surgery. Our fully equipped operation theatre supports a wide range of surgical procedures.",
      "Under the leadership of Dr. I. Rajendra Mohan (MS Gen), the department handles both elective and emergency surgical cases with a high success rate."
    ],
    conditionsTreated: [
      "Appendicitis (Acute & Chronic)",
      "Gallstones (Cholelithiasis)",
      "Hernia (Inguinal, Umbilical, Incisional)",
      "Intestinal Obstruction",
      "Piles, Fissures & Fistula",
      "Abscesses and Wound Infections",
      "Thyroid Nodules (requiring surgery)",
      "Breast Lumps"
    ],
    procedures: [
      "Laparoscopic Cholecystectomy (Gallbladder Removal)",
      "Laparoscopic Appendectomy",
      "Laparoscopic Hernia Repair (TAPP/TEP)",
      "Open Hernioplasty with Mesh",
      "Excision of Lumps and Cysts",
      "Wound Debridement and Dressing",
      "Circumcision",
      "Abscess Drainage (I&D)"
    ],
    equipment: [
      "HD Laparoscopic Surgery System",
      "Electrosurgical Unit (Cautery)",
      "Advanced Suturing Instruments",
      "Fully equipped modular Operation Theatre",
      "Post-operative ICU monitoring"
    ],
    whenToConsult: [
      "Severe abdominal pain (especially right lower or right upper side)",
      "Swelling or lump in the groin, navel, or any part of the body",
      "Recurrent acidity or vomiting with gallstone history",
      "Bleeding during bowel movements",
      "Non-healing wounds or chronic infections"
    ],
    whyChooseUs: [
      "Experienced surgeon — Dr. I. Rajendra Mohan (MS Gen) with 10+ years",
      "Modern laparoscopic equipment for minimally invasive procedures",
      "Dedicated pre-op and post-op care",
      "Affordable surgical packages with transparent pricing",
      "ICU backup for complex surgical cases"
    ],
    relatedServices: ["icu-critical-care", "anaesthesia-pain-medicine", "gastroenterology", "lab-diagnostics"]
  },
  {
    slug: "obstetrics-gynecology",
    name: "Obstetrics & Gynecology",
    icon: "ShieldPlus",
    shortDesc: "Complete women's healthcare including pregnancy care, delivery, and gynecological treatments.",
    overview: [
      "The Obstetrics & Gynecology department at Life Care Hospital is dedicated to providing comprehensive women's health services. Under the expert care of Dr. A. Nalini Padma (MBBS, DGO), we handle everything from routine gynecological consultations to high-risk pregnancies and deliveries.",
      "Our department offers antenatal care, safe delivery (normal and cesarean), postnatal care, family planning services, and treatment for menstrual disorders, PCOD, fibroids, and infertility issues.",
      "We are equipped with a dedicated labour room, neonatal care unit, and round-the-clock availability for emergency obstetric situations. Our focus is on safe motherhood and holistic women's wellness."
    ],
    conditionsTreated: [
      "High-Risk Pregnancy",
      "PCOD / PCOS (Polycystic Ovarian Syndrome)",
      "Uterine Fibroids",
      "Menstrual Irregularities",
      "Ovarian Cysts",
      "Infertility (basic workup)",
      "Cervical & Vaginal Infections",
      "Menopausal Symptoms",
      "Ectopic Pregnancy"
    ],
    procedures: [
      "Normal Vaginal Delivery",
      "Cesarean Section (LSCS)",
      "Laparoscopic Gynecological Surgery",
      "D&C (Dilation and Curettage)",
      "Hysterectomy (Abdominal/Vaginal)",
      "Tubectomy / Family Planning",
      "Pap Smear Screening",
      "Antenatal & Postnatal Checkups"
    ],
    equipment: [
      "Fetal Doppler & NST Machine",
      "Ultrasound (Obstetric & Gynecological)",
      "Dedicated Labour Room",
      "Neonatal Warmer & Resuscitation Unit",
      "Laparoscopic Surgery Setup"
    ],
    whenToConsult: [
      "Missed periods or irregular menstrual cycles",
      "Planning pregnancy or fertility concerns",
      "Pregnancy confirmation and antenatal registration",
      "Pelvic pain, abnormal discharge, or heavy bleeding",
      "Routine PAP smear or breast screening"
    ],
    whyChooseUs: [
      "Dr. A. Nalini Padma — experienced gynecologist & laparoscopic surgeon",
      "24/7 emergency obstetric care and delivery services",
      "Neonatal ICU backup for premature and high-risk newborns",
      "Affordable delivery and surgery packages",
      "Dedicated women's ward with privacy and comfort"
    ],
    relatedServices: ["neonatology-paediatrics", "general-laparoscopic-surgery", "lab-diagnostics"]
  },
  {
    slug: "neonatology-paediatrics",
    name: "Neonatology & Paediatrics",
    icon: "Baby",
    shortDesc: "Specialized care for newborns, infants, and children with trained pediatricians.",
    overview: [
      "The Paediatrics and Neonatology department provides specialized medical care for newborns, infants, children, and adolescents. We handle routine immunization, growth monitoring, childhood infections, and neonatal emergencies.",
      "Our Neonatal Intensive Care Unit (NICU) is equipped to manage premature births, low birth weight babies, and neonatal complications. The department works closely with our obstetrics team to ensure seamless care from delivery to early childhood.",
      "We follow the national immunization schedule and also provide optional vaccinations. Parents can consult our pediatricians for any concerns related to feeding, growth, development milestones, or childhood illnesses."
    ],
    conditionsTreated: [
      "Premature Birth & Low Birth Weight",
      "Neonatal Jaundice",
      "Childhood Asthma & Wheezing",
      "Diarrhea and Dehydration",
      "Febrile Seizures",
      "Growth and Developmental Delays",
      "Childhood Infections (Measles, Chickenpox, etc.)",
      "Allergies and Skin Rashes"
    ],
    procedures: [
      "Neonatal Resuscitation",
      "Phototherapy for Jaundice",
      "Routine Immunization (as per NIS)",
      "Nebulization Therapy",
      "IV Fluid Management for Dehydration",
      "Growth & Development Assessment"
    ],
    equipment: [
      "Neonatal Warmer & Incubator",
      "Phototherapy Unit",
      "Pediatric Pulse Oximeter",
      "Nebulizer Machines",
      "Baby-friendly weighing scales"
    ],
    whenToConsult: [
      "Newborn not feeding well or excessive crying",
      "Yellowish discoloration of skin (jaundice)",
      "High fever in infants or toddlers",
      "Delayed milestones (sitting, walking, talking)",
      "Routine vaccination and growth check-ups"
    ],
    whyChooseUs: [
      "Dedicated NICU for critical newborn care",
      "Trained nursing staff for pediatric patients",
      "Child-friendly environment and consultation",
      "Coordination with obstetrics for high-risk deliveries",
      "Affordable immunization and wellness packages"
    ],
    relatedServices: ["obstetrics-gynecology", "general-medicine", "icu-critical-care"]
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    icon: "Bone",
    shortDesc: "Expert treatment for bone fractures, joint disorders, and musculoskeletal conditions.",
    overview: [
      "The Orthopedics department at Life Care Hospital provides diagnosis and treatment for a wide range of bone, joint, and musculoskeletal conditions. From simple fractures to complex joint problems, our orthopedic specialists deliver comprehensive care.",
      "We handle trauma cases, sports injuries, degenerative conditions like arthritis, and provide post-operative rehabilitation support. Our goal is to restore mobility and improve quality of life for every patient."
    ],
    conditionsTreated: [
      "Bone Fractures (Simple & Compound)",
      "Arthritis (Osteo & Rheumatoid)",
      "Ligament & Tendon Injuries",
      "Back Pain & Disc Problems",
      "Joint Dislocations",
      "Osteoporosis",
      "Carpal Tunnel Syndrome"
    ],
    procedures: [
      "Fracture Reduction & Casting",
      "Internal Fixation (Plating, Nailing)",
      "Joint Aspiration",
      "Soft Tissue Repair",
      "Physiotherapy Referral & Rehabilitation"
    ],
    equipment: [
      "Digital X-Ray",
      "Orthopedic Implants & Instruments",
      "Plaster Room",
      "Physiotherapy Equipment"
    ],
    whenToConsult: [
      "After any fall or accident with bone/joint pain",
      "Persistent back or neck pain",
      "Joint swelling, stiffness, or reduced mobility",
      "Sports-related injuries"
    ],
    whyChooseUs: [
      "Experienced orthopedic surgeons",
      "Emergency fracture management available 24/7",
      "In-house physiotherapy for rehabilitation",
      "Affordable surgical packages"
    ],
    relatedServices: ["trauma-sports-medicine", "physiotherapy", "icu-critical-care"]
  },
  {
    slug: "ent",
    name: "ENT (Ear, Nose & Throat)",
    icon: "Ear",
    shortDesc: "Diagnosis and treatment of ear, nose, and throat disorders for all age groups.",
    overview: [
      "The ENT department at Life Care Hospital offers medical and surgical treatment for conditions affecting the ear, nose, throat, head, and neck. Our specialists manage both common and complex ENT problems in patients of all ages.",
      "From chronic sinusitis and tonsillitis to hearing loss and nasal polyps, we provide accurate diagnosis and effective treatment plans. Minor procedures are performed in the OPD itself, while surgical cases are handled in our modern operation theatre."
    ],
    conditionsTreated: [
      "Chronic Sinusitis",
      "Tonsillitis & Adenoiditis",
      "Ear Infections (Otitis Media)",
      "Hearing Loss & Tinnitus",
      "Nasal Polyps & Deviated Septum",
      "Voice & Throat Disorders",
      "Allergic Rhinitis"
    ],
    procedures: [
      "Tonsillectomy & Adenoidectomy",
      "Septoplasty",
      "Ear Wax Removal",
      "Audiometry (Hearing Test)",
      "Nasal Endoscopy",
      "Foreign Body Removal"
    ],
    equipment: [
      "ENT Examination Unit",
      "Audiometer",
      "Nasal Endoscope",
      "Microscope for Ear Surgery"
    ],
    whenToConsult: [
      "Persistent ear pain or discharge",
      "Difficulty hearing or ringing in ears",
      "Chronic nasal congestion or snoring",
      "Sore throat lasting more than a week",
      "Recurrent tonsil infections"
    ],
    whyChooseUs: [
      "Experienced ENT specialists",
      "In-house audiometry and endoscopy",
      "Both medical and surgical management available",
      "Affordable consultation and procedure costs"
    ],
    relatedServices: ["general-medicine", "neonatology-paediatrics"]
  },
  {
    slug: "non-invasive-cardiology",
    name: "Non-Invasive Cardiology",
    icon: "Heart",
    shortDesc: "Heart health monitoring and treatment without invasive procedures.",
    overview: [
      "The Non-Invasive Cardiology department focuses on diagnosing and monitoring heart conditions using non-surgical methods. We provide ECG, echocardiography, and holter monitoring to detect cardiac abnormalities early.",
      "Patients with hypertension, chest pain, palpitations, or known heart conditions can receive regular monitoring and medication management. We refer patients requiring interventional cardiology or cardiac surgery to higher centres when necessary."
    ],
    conditionsTreated: [
      "Hypertension (High Blood Pressure)",
      "Coronary Artery Disease",
      "Heart Failure Monitoring",
      "Arrhythmias (Irregular Heartbeat)",
      "Valvular Heart Disease",
      "Post-Heart Attack Follow-up"
    ],
    procedures: [
      "12-Lead ECG",
      "2D Echocardiography",
      "Holter Monitoring (24-hour ECG)",
      "Blood Pressure Monitoring",
      "Cardiac Risk Assessment"
    ],
    equipment: [
      "12-Lead ECG Machine",
      "2D Echo Machine",
      "Holter Monitor",
      "Digital BP Monitors"
    ],
    whenToConsult: [
      "Chest pain or tightness",
      "Breathlessness on exertion",
      "Palpitations or irregular heartbeat",
      "Known hypertension or diabetes with cardiac risk",
      "Family history of heart disease"
    ],
    whyChooseUs: [
      "Non-invasive diagnostic capabilities in-house",
      "Quick reporting and same-day consultations",
      "Coordination with ICU for emergency cardiac events",
      "Affordable cardiac screening packages"
    ],
    relatedServices: ["general-medicine", "icu-critical-care", "lab-diagnostics"]
  },
  {
    slug: "oncology",
    name: "Oncology",
    icon: "Pill",
    shortDesc: "Cancer screening, diagnosis, and supportive care with compassionate treatment approach.",
    overview: [
      "The Oncology department at Life Care Hospital provides cancer screening, early detection, and supportive care. While advanced cancer surgeries and chemotherapy may require referral to specialized cancer centres, we offer initial diagnostic workup, biopsy services, and pain management.",
      "Our team helps patients understand their diagnosis, connects them with appropriate specialists, and provides ongoing supportive care including nutrition counseling and palliative support."
    ],
    conditionsTreated: [
      "Suspected Cancers (Breast, Cervical, Oral, etc.)",
      "Unexplained Lumps or Masses",
      "Cancer Screening & Early Detection",
      "Pain Management in Cancer Patients",
      "Post-treatment Follow-up"
    ],
    procedures: [
      "Fine Needle Aspiration Cytology (FNAC)",
      "Biopsy",
      "Cancer Screening Tests",
      "Pain Management Protocols",
      "Referral to Specialized Cancer Centres"
    ],
    equipment: [
      "Biopsy Instruments",
      "Ultrasound-guided FNAC",
      "Laboratory for Tumor Markers"
    ],
    whenToConsult: [
      "Unexplained lump anywhere in the body",
      "Unexplained weight loss with other symptoms",
      "Persistent pain not responding to treatment",
      "Family history of cancer — screening",
      "Abnormal lab reports suggesting malignancy"
    ],
    whyChooseUs: [
      "Early detection and screening services available",
      "Compassionate and sensitive patient handling",
      "Coordination with regional cancer centres",
      "Pain management and palliative care support"
    ],
    relatedServices: ["general-medicine", "general-laparoscopic-surgery", "lab-diagnostics"]
  },
  {
    slug: "nephrology-urology",
    name: "Nephrology & Urology",
    icon: "Activity",
    shortDesc: "Treatment for kidney diseases, urinary tract disorders, and related conditions.",
    overview: [
      "The Nephrology & Urology department provides diagnosis and treatment for kidney diseases, urinary tract disorders, and related conditions. We manage both medical (nephrology) and surgical (urology) aspects of kidney and urinary care.",
      "From kidney stones and urinary infections to chronic kidney disease management, our team offers comprehensive care with modern diagnostic support."
    ],
    conditionsTreated: [
      "Kidney Stones (Renal Calculi)",
      "Urinary Tract Infections (UTI)",
      "Chronic Kidney Disease",
      "Enlarged Prostate (BPH)",
      "Urinary Incontinence",
      "Dialysis Management"
    ],
    procedures: [
      "Kidney Function Tests",
      "Ultrasound KUB",
      "Urinary Catheterization",
      "Stone Management (Medical)",
      "Dialysis Referral Coordination"
    ],
    equipment: [
      "Ultrasound Machine",
      "Urine Analyser",
      "Biochemistry Lab for Renal Profile"
    ],
    whenToConsult: [
      "Burning sensation during urination",
      "Blood in urine",
      "Severe flank or back pain (possible kidney stone)",
      "Swelling in legs/face with reduced urine output",
      "Known diabetes/hypertension — kidney screening"
    ],
    whyChooseUs: [
      "Integrated nephrology and urology care",
      "Quick diagnostic workup with in-house lab",
      "Emergency management of acute kidney conditions",
      "Affordable renal screening packages"
    ],
    relatedServices: ["general-medicine", "icu-critical-care", "lab-diagnostics"]
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    icon: "Thermometer",
    shortDesc: "Diagnosis and treatment of digestive system disorders including liver and stomach diseases.",
    overview: [
      "The Gastroenterology department manages diseases of the digestive system including the stomach, intestines, liver, and pancreas. We handle both acute conditions like gastritis and chronic diseases like liver cirrhosis.",
      "Our specialists provide medical management and coordinate with surgical teams when operative intervention is required for conditions like gallstones, intestinal obstruction, or severe GI bleeding."
    ],
    conditionsTreated: [
      "Gastritis & Peptic Ulcer Disease",
      "GERD (Acid Reflux)",
      "Irritable Bowel Syndrome (IBS)",
      "Hepatitis (A, B, C)",
      "Liver Cirrhosis",
      "Jaundice",
      "Gallstones",
      "GI Bleeding"
    ],
    procedures: [
      "Upper GI Endoscopy",
      "Liver Function Tests",
      "Ultrasound Abdomen",
      "H. Pylori Testing",
      "Stool Analysis"
    ],
    equipment: [
      "Endoscopy Unit",
      "Ultrasound Machine",
      "Biochemistry Lab"
    ],
    whenToConsult: [
      "Persistent acidity or heartburn",
      "Abdominal pain, bloating, or vomiting",
      "Yellowish eyes or skin (jaundice)",
      "Blood in stool or dark tarry stools",
      "Unexplained loss of appetite or weight"
    ],
    whyChooseUs: [
      "In-house endoscopy and ultrasound",
      "Same-day liver and GI diagnostic reports",
      "Coordination with surgery for gallstones and GI emergencies",
      "Experienced gastro specialists"
    ],
    relatedServices: ["general-medicine", "general-laparoscopic-surgery", "lab-diagnostics"]
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "Eye",
    shortDesc: "Skin, hair, and nail disorder treatment including allergies, infections, and cosmetic concerns.",
    overview: [
      "The Dermatology department provides diagnosis and treatment for skin, hair, and nail conditions. From common infections and allergies to chronic conditions like eczema and psoriasis, we offer comprehensive dermatological care.",
      "We also address cosmetic skin concerns and provide guidance on skincare routines, sun protection, and prevention of skin diseases."
    ],
    conditionsTreated: [
      "Acne & Pimples",
      "Eczema & Psoriasis",
      "Fungal Infections (Ringworm, etc.)",
      "Allergic Skin Rashes & Urticaria",
      "Hair Loss (Alopecia)",
      "Vitiligo",
      "Warts & Moles",
      "Scabies & Skin Infections"
    ],
    procedures: [
      "Skin Biopsy",
      "Cryotherapy for Warts",
      "Allergy Patch Testing",
      "Topical & Systemic Treatment Plans",
      "Skin Care Counseling"
    ],
    equipment: [
      "Dermatoscope",
      "Cryotherapy Unit",
      "UV Light (Wood's Lamp)"
    ],
    whenToConsult: [
      "Persistent skin rash or itching",
      "Hair fall or bald patches",
      "Non-healing skin sores or ulcers",
      "Changing moles or new skin growths",
      "Severe acne not responding to OTC products"
    ],
    whyChooseUs: [
      "Experienced dermatologists",
      "Quick diagnosis with in-house testing",
      "Affordable treatment plans",
      "Both medical and minor procedural management"
    ],
    relatedServices: ["general-medicine", "plastic-surgery"]
  },
  {
    slug: "plastic-surgery",
    name: "Plastic Surgery",
    icon: "Bone",
    shortDesc: "Reconstructive and cosmetic surgical procedures by trained plastic surgeons.",
    overview: [
      "The Plastic Surgery department handles reconstructive procedures for burn injuries, trauma, congenital deformities, and post-surgical reconstruction. We also provide cosmetic consultations for patients seeking aesthetic improvements.",
      "Our plastic surgeons work closely with the general surgery and orthopedics teams for cases requiring multi-disciplinary care."
    ],
    conditionsTreated: [
      "Burn Injuries & Contractures",
      "Post-Trauma Reconstruction",
      "Cleft Lip & Palate",
      "Skin Grafting",
      "Scar Revision",
      "Hand Injuries"
    ],
    procedures: [
      "Skin Grafting",
      "Flap Surgery",
      "Scar Revision Surgery",
      "Contracture Release",
      "Wound Reconstruction"
    ],
    equipment: [
      "Microsurgery Instruments",
      "Skin Grafting Tools",
      "Dedicated OT for Plastic Surgery"
    ],
    whenToConsult: [
      "Burn injuries requiring skin grafting",
      "Post-accident facial or hand injuries",
      "Non-healing chronic wounds",
      "Congenital deformities in children",
      "Keloid or hypertrophic scars"
    ],
    whyChooseUs: [
      "Trained plastic & reconstructive surgeons",
      "Modern OT with microsurgery capabilities",
      "Coordination with burn and trauma care",
      "Compassionate post-operative care"
    ],
    relatedServices: ["general-laparoscopic-surgery", "trauma-sports-medicine", "dermatology"]
  },
  {
    slug: "psychiatric-medicine",
    name: "Psychiatric Medicine",
    icon: "Brain",
    shortDesc: "Mental health consultations, counseling, and treatment for psychiatric conditions.",
    overview: [
      "The Psychiatric Medicine department provides confidential consultations for mental health concerns including depression, anxiety, insomnia, and behavioral disorders. We offer medication management and supportive counseling.",
      "Mental health is an integral part of overall wellness, and our psychiatrists provide a safe, non-judgmental space for patients to discuss their concerns and receive appropriate treatment."
    ],
    conditionsTreated: [
      "Depression & Mood Disorders",
      "Anxiety & Panic Attacks",
      "Insomnia & Sleep Disorders",
      "Obsessive-Compulsive Disorder (OCD)",
      "Psychosis & Schizophrenia",
      "Substance Abuse / De-addiction",
      "Stress-related Disorders"
    ],
    procedures: [
      "Psychiatric Evaluation",
      "Medication Management",
      "Supportive Counseling",
      "De-addiction Support",
      "Follow-up Monitoring"
    ],
    equipment: [
      "Private Consultation Room",
      "Assessment Tools & Questionnaires"
    ],
    whenToConsult: [
      "Persistent sadness, hopelessness, or loss of interest",
      "Severe anxiety or panic attacks",
      "Inability to sleep for extended periods",
      "Hearing voices or paranoid thoughts",
      "Substance abuse or addiction concerns"
    ],
    whyChooseUs: [
      "Confidential and compassionate consultations",
      "Experienced psychiatrists",
      "Integrated approach with general medicine",
      "De-addiction support programs",
      "Affordable follow-up consultations"
    ],
    relatedServices: ["general-medicine", "neurology"]
  },
  {
    slug: "emergency-medicine",
    name: "Emergency Medicine",
    icon: "Siren",
    highlight: true,
    shortDesc: "24/7 emergency department with trauma care, resuscitation, and ICU backup.",
    overview: [
      "The Emergency Department at Life Care Hospital operates 24 hours a day, 7 days a week, providing immediate medical attention for life-threatening conditions and acute emergencies. Our emergency team is trained in Advanced Cardiac Life Support (ACLS) and trauma management.",
      "From road accidents and heart attacks to poisoning and severe infections, our emergency room is equipped to stabilize patients and provide definitive care or coordinate transfer to the ICU or operation theatre as needed.",
      "An ambulance service is available for patient transport, and our emergency line (7287049516) is always reachable."
    ],
    conditionsTreated: [
      "Road Traffic Accidents & Trauma",
      "Heart Attacks & Cardiac Arrest",
      "Stroke",
      "Severe Breathing Difficulty",
      "Poisoning & Drug Overdose",
      "Snake & Insect Bites",
      "Severe Allergic Reactions (Anaphylaxis)",
      "Acute Abdominal Emergencies",
      "Obstetric Emergencies"
    ],
    procedures: [
      "Cardiopulmonary Resuscitation (CPR)",
      "Emergency Intubation & Ventilation",
      "Wound Suturing & Fracture Stabilization",
      "Emergency Blood Transfusion",
      "Stomach Wash (Gastric Lavage)",
      "Emergency Cesarean Section Coordination",
      "IV Access & Emergency Medications"
    ],
    equipment: [
      "Crash Cart with Defibrillator",
      "Emergency Ventilator",
      "Cardiac Monitor with SpO2",
      "Emergency OT Access",
      "Ambulance with Basic Life Support"
    ],
    whenToConsult: [
      "Any life-threatening situation — call 7287049516 immediately",
      "Severe chest pain or difficulty breathing",
      "Loss of consciousness or seizures",
      "Heavy bleeding or major trauma",
      "Suspected poisoning or snake bite"
    ],
    whyChooseUs: [
      "24/7 availability with no waiting for emergencies",
      "ACLS-trained emergency medical team",
      "Direct ICU and OT access for critical cases",
      "Ambulance service available",
      "Coordination with all departments for multi-system emergencies"
    ],
    relatedServices: ["icu-critical-care", "general-laparoscopic-surgery", "trauma-sports-medicine", "anaesthesia-pain-medicine"]
  },
  {
    slug: "pulmonology",
    name: "Pulmonology",
    icon: "HeartPulse",
    shortDesc: "Treatment of lung and respiratory diseases including asthma, COPD, and TB.",
    overview: [
      "The Pulmonology department manages respiratory and lung diseases including asthma, COPD, tuberculosis, and pneumonia. We provide diagnostic evaluation, treatment, and long-term management plans for chronic respiratory conditions.",
      "With rising air pollution and increasing TB cases, our pulmonologists play a critical role in community health by providing early diagnosis and DOTS-compliant TB treatment."
    ],
    conditionsTreated: [
      "Asthma",
      "COPD (Chronic Obstructive Pulmonary Disease)",
      "Tuberculosis (TB)",
      "Pneumonia",
      "Bronchitis",
      "Pleural Effusion",
      "Sleep Apnea"
    ],
    procedures: [
      "Pulmonary Function Tests (PFT)",
      "Nebulization Therapy",
      "Chest X-Ray Interpretation",
      "Sputum Analysis for TB",
      "Oxygen Therapy"
    ],
    equipment: [
      "Spirometer (PFT)",
      "Nebulizer Machines",
      "Oxygen Concentrator",
      "Pulse Oximeter"
    ],
    whenToConsult: [
      "Chronic cough lasting more than 3 weeks",
      "Breathlessness on exertion or at rest",
      "Wheezing or chest tightness",
      "Coughing blood (Hemoptysis)",
      "Known TB patient needing follow-up"
    ],
    whyChooseUs: [
      "Experienced pulmonologists with TB expertise",
      "In-house PFT and diagnostic testing",
      "DOTS-compliant TB treatment programs",
      "ICU backup for respiratory failure",
      "Affordable respiratory care"
    ],
    relatedServices: ["general-medicine", "icu-critical-care", "lab-diagnostics"]
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    icon: "Dumbbell",
    shortDesc: "Rehabilitation and physical therapy for post-surgical, orthopedic, and neurological recovery.",
    overview: [
      "The Physiotherapy department provides rehabilitation services for patients recovering from surgeries, fractures, strokes, and other conditions that affect mobility and function. Our physiotherapists create individualized treatment plans to help patients regain strength and independence.",
      "We use a combination of manual therapy, exercises, electrotherapy, and patient education to achieve optimal recovery outcomes."
    ],
    conditionsTreated: [
      "Post-Fracture Rehabilitation",
      "Post-Surgical Recovery",
      "Stroke Rehabilitation",
      "Back Pain & Neck Pain",
      "Frozen Shoulder",
      "Knee Osteoarthritis",
      "Sports Injuries"
    ],
    procedures: [
      "Therapeutic Exercises",
      "Ultrasound Therapy",
      "TENS (Transcutaneous Electrical Nerve Stimulation)",
      "Manual Therapy & Joint Mobilization",
      "Gait Training",
      "Breathing Exercises"
    ],
    equipment: [
      "Ultrasound Therapy Unit",
      "TENS Machine",
      "Exercise Equipment",
      "Parallel Bars for Gait Training"
    ],
    whenToConsult: [
      "After any surgery for rehabilitation",
      "Persistent joint stiffness or pain",
      "Difficulty walking after stroke or fracture",
      "Chronic back or neck pain",
      "Sports-related muscle injuries"
    ],
    whyChooseUs: [
      "Trained physiotherapists with rehabilitation expertise",
      "In-house facility within the hospital",
      "Coordination with orthopedics and neurology",
      "Personalized treatment plans",
      "Affordable session packages"
    ],
    relatedServices: ["orthopedics", "trauma-sports-medicine", "neurology"]
  },
  {
    slug: "icu-critical-care",
    name: "ICU & Critical Care",
    icon: "Zap",
    shortDesc: "Advanced intensive care with ventilator support, monitoring, and 24/7 critical care specialists.",
    overview: [
      "The ICU & Critical Care department at Life Care Hospital is the backbone of our emergency and surgical services. Under the leadership of Dr. CH. Prasad (MD, DA, FCGP, CDiab), our ICU provides round-the-clock monitoring and treatment for critically ill patients.",
      "Equipped with multi-parameter monitors, ventilators, infusion pumps, and central oxygen supply, our ICU handles post-operative care, cardiac emergencies, respiratory failure, sepsis, and multi-organ dysfunction.",
      "Our critical care team includes experienced intensivists, trained ICU nurses, and support staff who work together to deliver life-saving care."
    ],
    conditionsTreated: [
      "Post-Surgical Critical Care",
      "Respiratory Failure & Ventilator Support",
      "Sepsis & Septic Shock",
      "Cardiac Emergencies (MI, Arrhythmias)",
      "Multi-Organ Dysfunction Syndrome",
      "Diabetic Ketoacidosis (DKA)",
      "Poisoning & Overdose",
      "Severe Trauma Cases"
    ],
    procedures: [
      "Mechanical Ventilation",
      "Central Venous Catheterization",
      "Arterial Blood Gas (ABG) Analysis",
      "Continuous Cardiac Monitoring",
      "Blood Transfusion & Fluid Resuscitation",
      "Tracheostomy Care"
    ],
    equipment: [
      "Multi-Parameter Patient Monitors",
      "ICU Ventilators (Invasive & Non-Invasive)",
      "Infusion & Syringe Pumps",
      "Defibrillator",
      "Central Oxygen Supply",
      "ABG Analyser"
    ],
    whenToConsult: [
      "Patient requiring ventilator support",
      "Post-major surgery monitoring",
      "Deteriorating consciousness level",
      "Severe infection with falling BP (sepsis)",
      "Any condition requiring continuous monitoring"
    ],
    whyChooseUs: [
      "Dr. CH. Prasad — experienced intensivist with 15+ years",
      "Fully equipped ICU with modern monitoring systems",
      "24/7 intensivist and nursing coverage",
      "Seamless coordination with emergency and surgery departments",
      "Affordable critical care in Kavali region"
    ],
    relatedServices: ["emergency-medicine", "general-laparoscopic-surgery", "pulmonology", "anaesthesia-pain-medicine"]
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "Brain",
    shortDesc: "Diagnosis and treatment of brain, spinal cord, and nervous system disorders.",
    overview: [
      "The Neurology department provides diagnosis and treatment for conditions affecting the brain, spinal cord, and peripheral nervous system. We manage both acute neurological emergencies like stroke and chronic conditions like epilepsy and Parkinson's disease.",
      "Our neurologists use clinical examination, EEG, and imaging referrals to accurately diagnose and manage neurological disorders."
    ],
    conditionsTreated: [
      "Epilepsy & Seizures",
      "Stroke (Ischemic & Hemorrhagic)",
      "Headache & Migraine",
      "Parkinson's Disease",
      "Peripheral Neuropathy",
      "Bell's Palsy",
      "Vertigo & Dizziness"
    ],
    procedures: [
      "Neurological Examination",
      "EEG (Electroencephalography)",
      "Nerve Conduction Studies",
      "Stroke Assessment & Management",
      "Medication Management for Epilepsy"
    ],
    equipment: [
      "EEG Machine",
      "Nerve Conduction Study Equipment",
      "Clinical Examination Tools"
    ],
    whenToConsult: [
      "Sudden weakness or numbness on one side of the body",
      "Severe headache with vision changes",
      "Seizures or loss of consciousness",
      "Tremors, difficulty walking, or balance issues",
      "Tingling or numbness in hands/feet"
    ],
    whyChooseUs: [
      "Experienced neurologists",
      "Emergency stroke management capabilities",
      "EEG and nerve conduction studies available",
      "ICU backup for neurological emergencies",
      "Coordination with physiotherapy for rehabilitation"
    ],
    relatedServices: ["icu-critical-care", "physiotherapy", "psychiatric-medicine"]
  },
  {
    slug: "trauma-sports-medicine",
    name: "Trauma & Sports Medicine",
    icon: "Bone",
    shortDesc: "Immediate trauma care and sports injury management with rehabilitation support.",
    overview: [
      "The Trauma & Sports Medicine department provides immediate care for accident victims, trauma cases, and sports-related injuries. We handle everything from initial stabilization to surgical intervention and post-operative rehabilitation.",
      "Our trauma team coordinates with emergency, orthopedics, and surgery departments to ensure rapid and comprehensive management of multi-system injuries."
    ],
    conditionsTreated: [
      "Road Traffic Accident Injuries",
      "Fractures & Dislocations",
      "Ligament Tears (ACL, MCL, etc.)",
      "Muscle Strains & Sprains",
      "Head Injuries & Concussions",
      "Sports Overuse Injuries"
    ],
    procedures: [
      "Trauma Assessment & Stabilization",
      "Fracture Fixation",
      "Wound Management",
      "Joint Immobilization",
      "Rehabilitation Planning"
    ],
    equipment: [
      "Trauma Bay Equipment",
      "Portable X-Ray",
      "Splints & Immobilization Devices",
      "Emergency Surgical Instruments"
    ],
    whenToConsult: [
      "After any road accident or major fall",
      "Sports injury with pain, swelling, or limited movement",
      "Head injury with headache, nausea, or confusion",
      "Open wounds or deep cuts"
    ],
    whyChooseUs: [
      "24/7 trauma care availability",
      "Coordination between ER, orthopedics, and surgery",
      "ICU backup for severe trauma",
      "In-house rehabilitation services"
    ],
    relatedServices: ["emergency-medicine", "orthopedics", "icu-critical-care", "physiotherapy"]
  },
  {
    slug: "anaesthesia-pain-medicine",
    name: "Anaesthesia & Pain Medicine",
    icon: "Stethoscope",
    shortDesc: "Safe anaesthesia services for surgeries and chronic pain management programs.",
    overview: [
      "The Anaesthesia & Pain Medicine department provides safe anaesthesia services for all surgical procedures performed at Life Care Hospital. Dr. CH. Prasad (MD, DA) leads the department with expertise in both general and regional anaesthesia.",
      "Beyond surgical anaesthesia, we also manage chronic pain conditions including back pain, cancer pain, and post-surgical pain through evidence-based pain management protocols."
    ],
    conditionsTreated: [
      "Pre-operative Assessment for Surgery",
      "Chronic Back & Neck Pain",
      "Cancer Pain Management",
      "Post-Surgical Pain",
      "Neuropathic Pain",
      "Labour Analgesia"
    ],
    procedures: [
      "General Anaesthesia",
      "Spinal & Epidural Anaesthesia",
      "Nerve Blocks",
      "Pain Management Protocols",
      "Pre-Anaesthetic Checkup (PAC)",
      "Post-Operative Pain Management"
    ],
    equipment: [
      "Anaesthesia Workstation",
      "Patient Monitors",
      "Infusion Pumps",
      "Difficult Airway Management Kit"
    ],
    whenToConsult: [
      "Before any planned surgery (Pre-Anaesthetic Checkup)",
      "Chronic pain not responding to regular medications",
      "Severe post-operative pain",
      "Need for labour analgesia during delivery"
    ],
    whyChooseUs: [
      "Dr. CH. Prasad — MD, DA with 15+ years of anaesthesia experience",
      "Safe anaesthesia for all age groups including neonates",
      "Modern monitoring during every procedure",
      "Comprehensive pain management programs",
      "24/7 availability for emergency surgeries"
    ],
    relatedServices: ["icu-critical-care", "general-laparoscopic-surgery", "obstetrics-gynecology"]
  },
  {
    slug: "lab-diagnostics",
    name: "Lab & Diagnostics",
    icon: "Microscope",
    shortDesc: "Comprehensive diagnostic laboratory with quick reporting for blood tests, imaging, and more.",
    overview: [
      "The Laboratory & Diagnostics department is the diagnostic backbone of Life Care Hospital. We provide a full range of pathology, biochemistry, microbiology, and imaging services with quick turnaround times.",
      "Our fully automated analysers and trained lab technicians ensure accurate and reliable results. Most routine reports are available within a few hours, and emergency reports are prioritized for ICU and ER patients.",
      "We follow strict quality control protocols and maintain proper sample handling procedures to ensure accuracy of all test results."
    ],
    conditionsTreated: [
      "Diagnostic support for all departments",
      "Health Check-up Packages",
      "Pre-operative Investigations",
      "Disease Monitoring (Diabetes, Kidney, Liver, etc.)"
    ],
    procedures: [
      "Complete Blood Count (CBC)",
      "Blood Sugar (Fasting, PP, Random, HbA1c)",
      "Kidney Function Tests (KFT/RFT)",
      "Liver Function Tests (LFT)",
      "Thyroid Profile (T3, T4, TSH)",
      "Lipid Profile",
      "Urine Analysis",
      "Blood Grouping & Cross-Match",
      "ECG",
      "Digital X-Ray",
      "Ultrasound Scanning"
    ],
    equipment: [
      "Fully Automated Biochemistry Analyser",
      "Hematology Analyser (5-Part Differential)",
      "Digital X-Ray Machine",
      "Ultrasound Machine",
      "ECG Machine",
      "Urine Analyser"
    ],
    whenToConsult: [
      "Doctor-ordered blood tests or imaging",
      "Annual health check-up",
      "Pre-surgery investigations",
      "Monitoring chronic conditions (diabetes, kidney, etc.)",
      "Pregnancy-related investigations"
    ],
    whyChooseUs: [
      "Fully automated, accurate diagnostic equipment",
      "Quick turnaround — most reports within hours",
      "Affordable health check-up packages",
      "24/7 emergency lab services",
      "Trained technicians with quality control protocols"
    ],
    relatedServices: ["general-medicine", "obstetrics-gynecology", "icu-critical-care"]
  }
];

export const getServiceBySlug = (slug: string) => servicesData.find(s => s.slug === slug);
