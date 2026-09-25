import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallButton } from "@/components/CallButton";
import { business, services } from "@/lib/content";

type Params = { id: string };

export function generateStaticParams() {
  return services.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) return {};
  return {
    title: `${service.title} | MedLink Transport`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) notFound();

  return (
    <>
      <section aria-labelledby="service-heading" className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h1
            id="service-heading"
            className="text-3xl font-bold text-foreground sm:text-4xl"
          >
            {service.title}
          </h1>
          <p className="mt-5 text-lg font-medium leading-relaxed text-foreground">
            {service.description}
          </p>
          <p className="mt-4 text-base text-foreground">
            {business.hours}. {business.hoursNote}
          </p>
          {service.coverage && (
            <div className="mt-8 rounded-2xl border-2 border-primary/15 bg-surface p-6">
              <h2 className="text-lg font-bold text-foreground">
                Coverage &amp; Payment
              </h2>
              <p className="mt-2 text-base font-medium leading-relaxed text-foreground">
                {service.coverage}
              </p>
            </div>
          )}
          <div className="mt-8">
            <CallButton />
          </div>
        </div>
      </section>
    </>
  );
}
