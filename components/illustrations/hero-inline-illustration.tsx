export const HeroInlineIllustration = () => {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="hi-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <filter id="hi-soft">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <circle cx="80" cy="110" r="70" fill="#2563eb" opacity="0.07" filter="url(#hi-soft)" />
      <rect
        x="26"
        y="60"
        width="108"
        height="72"
        rx="10"
        fill="#0a1628"
        stroke="rgba(96,165,250,0.18)"
        strokeWidth="1"
        transform="rotate(-6 80 96)"
      />
      <rect
        x="22"
        y="54"
        width="108"
        height="72"
        rx="10"
        fill="#0d1e3a"
        stroke="rgba(96,165,250,0.28)"
        strokeWidth="1"
        transform="rotate(-2 80 90)"
      />
      <rect
        x="18"
        y="48"
        width="116"
        height="74"
        rx="10"
        fill="#0d1e3a"
        stroke="rgba(96,165,250,0.42)"
        strokeWidth="1"
      />
      <rect x="18" y="48" width="116" height="3" rx="1" fill="url(#hi-a)" opacity="0.9" />
      <rect x="30" y="62" width="72" height="9" rx="3" fill="url(#hi-a)" opacity="0.7" />
      <rect x="30" y="77" width="52" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="30" y="89" width="64" height="6" rx="2" fill="rgba(255,255,255,0.09)" />
      <rect x="30" y="101" width="44" height="6" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect
        x="10"
        y="138"
        width="140"
        height="38"
        rx="10"
        fill="rgba(37,99,235,0.11)"
        stroke="rgba(96,165,250,0.28)"
        strokeWidth="1"
      />
      <circle cx="28" cy="157" r="8" fill="rgba(2,132,199,0.28)" />
      <text x="28" y="161" fontSize="9" textAnchor="middle" fill="#38bdf8">
        ✓
      </text>
      <rect x="44" y="149" width="60" height="7" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="44" y="161" width="40" height="6" rx="2" fill="rgba(37,99,235,0.45)" />
      <text
        x="126"
        y="161"
        fontSize="11"
        textAnchor="middle"
        fill="#60a5fa"
        fontWeight="bold"
        fontFamily="'Playfair Display',serif"
      >
        100
      </text>
      {['Next', 'TS', 'TB'].map((t, i) => (
        <g key={t}>
          <rect
            x={10 + i * 48}
            y="186"
            width="40"
            height="20"
            rx="6"
            fill="rgba(37,99,235,0.14)"
            stroke="rgba(96,165,250,0.23)"
            strokeWidth="0.8"
          />
          <text
            x={30 + i * 48}
            y="200"
            fontSize="8"
            fill="#93c5fd"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {t}
          </text>
        </g>
      ))}
    </svg>
  );
};
