import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="why-us-heading"
          className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl"
        >
          Why Choose MedLink Transport
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {whyChooseUs.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-lg text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 h-6 w-6 shrink-0 text-primary"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
