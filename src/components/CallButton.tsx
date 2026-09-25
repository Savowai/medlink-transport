import { business } from "@/lib/content";

type CallButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  label?: string;
};

export function CallButton({
  variant = "primary",
  className = "",
  label = `Call Now: ${business.phoneDisplay}`,
}: CallButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-lg font-bold transition-colors duration-200 ease-out focus-visible:outline-3 focus-visible:outline-offset-2 min-h-[44px]";
  const variants = {
    primary: "bg-secondary text-white shadow-md hover:bg-secondary-dark",
    secondary:
      "bg-white text-primary border-2 border-primary hover:bg-surface",
  };

  return (
    <a
      href={business.phoneHref}
      aria-label={`Call Now: ${business.phoneDisplay}`}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
