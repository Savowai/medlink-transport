import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallButton } from "@/components/CallButton";
import { Medicaid } from "@/components/Medicaid";
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
          <Link
            href="/services"
            className="text-[15px] font-semibold text-primary hover:underline"
          >
            ← All services
          </Link>
          <h1
            id="service-heading"
            className="mt-6 text-3xl font-bold text-foreground sm:text-4xl"
          >
            {service.title}
          </h1>
          <p className="mt-5 text-lg font-medium leading-relaxed text-foreground">
            {service.description}
          </p>
          <p className="mt-4 text-base text-foreground">
            {business.hours}. {business.hoursNote}
          </p>
          <div className="mt-8">
            <CallButton />
          </div>
        </div>
      </section>
      {service.id === "nemt" && <Medicaid />}
    </>
  );
}
