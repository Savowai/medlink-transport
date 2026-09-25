type SeattleSkylineProps = {
  className?: string;
};

/**
 * Bold, illustrated Seattle skyline at dusk — Mount Rainier, downtown towers,
 * the Space Needle, and Puget Sound under a warm sunset gradient. Built as a
 * flat-color SVG (not a photo) so there's no licensing dependency and the
 * scene reads at any size without a stock-photo look.
 */
export function SeattleSkyline({ className = "" }: SeattleSkylineProps) {
  return (
    <svg
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyline-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbe6f2" />
          <stop offset="40%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-primary-dark)" />
        </linearGradient>
        <linearGradient id="skyline-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0" />
          <stop offset="55%" stopColor="var(--color-secondary)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="skyline-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary-dark)" />
          <stop offset="100%" stopColor="#000f20" />
        </linearGradient>
      </defs>

      {/* Dusk sky */}
      <rect x="0" y="0" width="1440" height="420" fill="url(#skyline-sky)" />
      {/* Sunset glow near the horizon */}
      <rect x="0" y="50" width="1440" height="255" fill="url(#skyline-glow)" />
      {/* Sun, centered on the viewBox so it survives narrow (mobile) crops */}
      <circle cx="720" cy="150" r="46" fill="var(--color-secondary)" opacity="0.9" />

      {/* Mount Rainier, far background */}
      <path
        d="M980 300 L1120 110 L1180 180 L1245 100 L1400 300 Z"
        fill="var(--color-primary-dark)"
        opacity="0.55"
      />

      {/* Downtown skyline, midground — kept close to center so it survives narrow crops */}
      <g fill="var(--color-primary-dark)">
        <rect x="120" y="215" width="48" height="90" />
        <rect x="180" y="180" width="38" height="125" />
        <rect x="230" y="230" width="54" height="75" />
        <rect x="298" y="160" width="42" height="145" />
        <rect x="352" y="200" width="36" height="105" />
        <rect x="950" y="195" width="44" height="110" />
        <rect x="1002" y="150" width="48" height="155" />
        <rect x="1058" y="210" width="36" height="95" />
        <rect x="1330" y="210" width="40" height="95" />
        <rect x="1376" y="170" width="50" height="135" />
      </g>

      {/* Space Needle, foreground — centered on the viewBox */}
      <g fill="var(--color-primary-dark)">
        <path d="M694 305 L710 145 L730 145 L746 305 Z" />
        <path d="M674 110 a64 22 0 1 0 128 0 a64 22 0 1 0 -128 0 Z" />
        <rect x="715" y="48" width="8" height="64" />
      </g>
      <circle cx="719" cy="46" r="7" fill="#ffffff" />

      {/* Puget Sound */}
      <rect x="0" y="303" width="1440" height="117" fill="url(#skyline-water)" />
      <g stroke="#ffffff" strokeOpacity="0.14" strokeWidth="2" strokeLinecap="round">
        <line x1="30" y1="335" x2="230" y2="335" />
        <line x1="300" y1="358" x2="560" y2="358" />
        <line x1="640" y1="340" x2="860" y2="340" />
        <line x1="930" y1="365" x2="1160" y2="365" />
        <line x1="1220" y1="345" x2="1410" y2="345" />
        <line x1="80" y1="385" x2="380" y2="385" />
        <line x1="460" y1="400" x2="760" y2="400" />
        <line x1="860" y1="390" x2="1180" y2="390" />
      </g>
    </svg>
  );
}
