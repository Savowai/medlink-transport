import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { HoursAndArea } from "@/components/HoursAndArea";
import { HowItWorks } from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "Contact | MedLink Transport",
  description:
    "Call MedLink Transport to schedule private transportation in the Greater Seattle area. Hours, service area, and how booking works.",
};

export default function ContactPage() {
  return (
    <>
      <ContactDetails />
      <HoursAndArea />
      <HowItWorks />
    </>
  );
}
