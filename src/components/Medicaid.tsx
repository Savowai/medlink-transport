import { CallButton } from "./CallButton";

export function Medicaid() {
  return (
    <section id="medicaid" aria-labelledby="medicaid-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl border-2 border-secondary/20 bg-secondary/5 p-8 sm:p-12">
          <h2
            id="medicaid-heading"
            className="text-3xl font-bold text-foreground sm:text-4xl"
          >
            Medicaid Transportation
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground">
            We proudly accept Medicaid transportation. If your transportation
            is covered through Medicaid, we can help coordinate your ride. If
            you are unsure whether you qualify, please give us a call and
            we&apos;ll be happy to answer your questions.
          </p>
          <CallButton
            variant="secondary"
            className="mt-8 !border-secondary !text-secondary hover:!bg-white"
            label="Call to Ask About Medicaid Rides"
          />
        </div>
      </div>
    </section>
  );
}
