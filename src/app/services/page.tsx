import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WhoWeServe } from "@/components/WhoWeServe";

export const metadata: Metadata = {
  title: "Services | MedLink Transport",
  description:
    "Non-emergency medical, medical courier, private school, senior and adult day program, and corporate transportation in the Greater Seattle area.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <WhyChooseUs />
      <WhoWeServe />
    </>
  );
}
