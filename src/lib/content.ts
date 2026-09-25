// Placeholder business details — replace before launch.
export const business = {
  name: "MedLink Transport LLC",
  tagline:
    "Licensed private transportation for healthcare, education, and organizations throughout the Greater Seattle area.",
  phoneDisplay: "(206) 555-0142",
  phoneHref: "tel:+12065550142",
  email: "info@medlinktransport.com",
  hours: "Monday – Sunday, 6:00 AM – 9:00 PM",
  hoursNote: "Transportation is available by scheduled appointment.",
  areas: [
    "Seattle",
    "Bellevue",
    "Kent",
    "Renton",
    "Auburn",
    "Federal Way",
    "Shoreline",
    "Lynnwood",
    "Edmonds",
    "Everett",
    "Mountlake Terrace",
    "Mukilteo",
    "Bothell",
    "Mill Creek",
  ],
  counties: "King and Snohomish Counties, Washington",
} as const;

export const services = [
  {
    id: "nemt",
    title: "Non-Emergency Medical Transportation",
    description:
      "Scheduled rides to dialysis, physical therapy, chemotherapy/radiation, hospital discharge, and routine medical visits. Wheelchair-accessible vehicles, door-to-door assistance, on-time pickups.",
  },
  {
    id: "courier",
    title: "Medical Courier & Supplies Transportation",
    description:
      "Chain-of-custody transport of lab specimens, pharmaceuticals, and medical supplies between labs, clinics, and hospitals. HIPAA-trained drivers, scheduled routes or urgent on-demand runs.",
  },
  {
    id: "school",
    title: "Private School Run Services",
    description:
      "Recurring rides to and from private school, plus after-school activities, tutoring, and camps — outside the public school bus system. Vetted, background-checked drivers on a schedule parents can count on.",
  },
  {
    id: "senior",
    title: "Senior & Adult Day Program Transport",
    description:
      "Companion transportation for elderly clients — adult day programs, social visits, errands, and recurring checkups. Consistent, dignified day-to-day mobility support, not just appointment-based trips.",
  },
  {
    id: "corporate",
    title: "Corporate & Staff Transport Contracts",
    description:
      "Contracted transportation for healthcare and organizational clients — staff, travel RNs, home health aides between assignments, and supplies. A dependable contracted partner, not one-off rides.",
  },
  // Disability services transport is a planned future addition — not built out yet.
] as const;

export const whyChooseUs = [
  "Licensed and insured",
  "CPR & First Aid certified drivers",
  "Professional and courteous staff",
  "Clean, comfortable, wheelchair-accessible vehicles",
  "Safe door-to-door assistance",
  "Reliable scheduling",
  "On-time pickups",
  "Compassionate customer service",
  "Serving King & Snohomish Counties",
  "Dedicated to treating every passenger with dignity and respect",
] as const;

export const howItWorks = [
  {
    step: "1",
    title: "Call our office",
    description: "Call our office to schedule your transportation.",
  },
  {
    step: "2",
    title: "Share your details",
    description:
      "Provide your pickup location, destination, appointment time, and any mobility needs.",
  },
  {
    step: "3",
    title: "We confirm your ride",
    description: "We'll confirm your ride and provide pickup details.",
  },
  {
    step: "4",
    title: "We get you there safely",
    description:
      "Our professional driver will arrive on time and safely transport you to your destination.",
  },
] as const;

export const whoWeServe = [
  "Seniors",
  "Individuals with disabilities",
  "Wheelchair users",
  "Medicaid clients",
  "Hospitals",
  "Medical clinics",
  "Dialysis centers",
  "Rehabilitation facilities",
  "Adult family homes",
  "Assisted living communities",
  "Caregivers and family members arranging transportation",
] as const;
