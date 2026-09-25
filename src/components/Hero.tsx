import { CallButton } from "./CallButton";
import { LogoMark } from "./Logo";
import { SeattleSkyline } from "./SeattleSkyline";
import { business } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="flex flex-1 flex-col bg-gradient-to-b from-background to-surface"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-8 text-center sm:px-6 sm:pt-10">
        <h1
          id="hero-heading"
          className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <LogoMark decorative className="h-14 w-14 sm:h-16 sm:w-16" />
          <span className="text-4xl font-extrabold text-primary sm:text-6xl">
            MedLink <span className="text-secondary">Transport</span>
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-foreground sm:text-xl">
          {business.tagline}
        </p>

        <div className="mt-6">
          <CallButton />
        </div>
      </div>

      <div className="mx-auto flex min-h-40 w-full max-w-6xl flex-1 flex-col px-4 pb-6 pt-8 sm:px-6 sm:pb-8">
        {/* Seattle skyline at dusk — illustrated PNW backdrop, not a stock photo */}
        <div className="relative min-h-40 flex-1 overflow-hidden rounded-[2rem] rounded-br-[5rem] shadow-xl">
          <SeattleSkyline className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  );
}
