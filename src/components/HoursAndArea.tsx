import { business } from "@/lib/content";

export function HoursAndArea() {
  return (
    <section
      id="service-area"
      aria-labelledby="hours-area-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="hours-area-heading" className="sr-only">
          Service Hours and Service Area
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="rounded-2xl border border-border bg-surface p-8 lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground">
              Service Hours
            </h3>
            <p className="mt-4 text-xl font-semibold text-primary">
              {business.hours}
            </p>
            <p className="mt-2 text-base text-muted">{business.hoursNote}</p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-foreground">
              Service Area
            </h3>
            <p className="mt-4 text-base text-muted">
              Proudly serving {business.counties}, including:
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {business.areas.map((area) => (
                <li key={area} className="text-lg text-foreground">
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base text-muted">
              …and surrounding communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
