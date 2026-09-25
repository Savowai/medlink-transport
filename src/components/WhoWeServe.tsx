import { whoWeServe } from "@/lib/content";

export function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      aria-labelledby="who-we-serve-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="who-we-serve-heading"
          className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl"
        >
          Who We Serve
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {whoWeServe.map((group) => (
            <span
              key={group}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-base font-medium text-foreground"
            >
              {group}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
