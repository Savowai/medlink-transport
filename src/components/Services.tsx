import Link from "next/link";
import { services } from "@/lib/content";

const icons = {
  nemt: MedicalIcon,
  courier: CourierIcon,
  school: SchoolIcon,
  senior: SeniorIcon,
  corporate: CorporateIcon,
} as const;

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h1
          id="services-heading"
          className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl"
        >
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium text-foreground">
          A private, credentialed transportation partner across five service
          lines.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, title, description }) => {
            const Icon = icons[id as keyof typeof icons];
            return (
              <li
                key={id}
                className="relative rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow duration-200 focus-within:shadow-md hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-foreground">
                  <Link
                    href={`/services/${id}`}
                    className="after:absolute after:inset-0 after:content-[''] hover:text-primary"
                  >
                    {title}
                  </Link>
                </h2>
                <p className="mt-2 text-[15px] font-medium leading-relaxed text-foreground">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function MedicalIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 8v8M8 12h8" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </svg>
  );
}

function CourierIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 8 12 3 3 8v8l9 5 9-5Z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </svg>
  );
}

function SchoolIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6 11.5V17c0 1.1 2.7 3 6 3s6-1.9 6-3v-5.5" />
    </svg>
  );
}

function SeniorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="6" r="2.6" />
      <path d="M6 21c.5-3.5 2.8-6 6-6s5.5 2.5 6 6" />
      <path d="M9.5 15.5 8 21M14.5 15.5 16 21" />
    </svg>
  );
}

function CorporateIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
