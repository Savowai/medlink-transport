type LogoMarkProps = {
  className?: string;
  /** Set true when adjacent visible text already announces "MedLink Transport". */
  decorative?: boolean;
};

export function LogoMark({ className = "", decorative = false }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      {...(decorative
        ? { "aria-hidden": "true" }
        : { role: "img", "aria-label": "MedLink Transport" })}
    >
      <path
        d="M24 4c8.3 0 15 6.6 15 14.7C39 29.5 24 44 24 44S9 29.5 9 18.7C9 10.6 15.7 4 24 4Z"
        fill="var(--color-primary)"
      />
      <g fill="#ffffff">
        <rect x="20.2" y="10.5" width="7.6" height="18" rx="2" />
        <rect x="15.2" y="15.5" width="17.6" height="7.6" rx="2" />
      </g>
      <g
        fill="none"
        stroke="var(--color-secondary)"
        strokeWidth="2.4"
        strokeLinecap="round"
      >
        <path d="M6 40c3.5-2.6 8-2.6 11.5 0" />
        <path d="M30.5 40c3.5-2.6 8-2.6 11.5 0" />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function Logo({ className = "", markClassName = "h-9 w-9" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={`shrink-0 ${markClassName}`} />
      <span className="font-display text-lg font-extrabold leading-none text-primary sm:text-xl">
        MedLink <span className="text-secondary">Transport</span>
      </span>
    </span>
  );
}
