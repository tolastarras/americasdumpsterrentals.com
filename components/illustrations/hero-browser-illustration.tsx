export const HeroBrowserIllustration = () => {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="hb-win" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1e3a" />
          <stop offset="100%" stopColor="#071122" />
        </linearGradient>
        <linearGradient id="hb-acc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="hb-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#112040" />
          <stop offset="100%" stopColor="#0a1830" />
        </linearGradient>
        <linearGradient id="hb-code" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#060f20" />
          <stop offset="100%" stopColor="#04090f" />
        </linearGradient>
        <filter id="hb-glow">
          <feGaussianBlur stdDeviation="14" result="b" />
          <feComposite in="SourceGraphic" in2="b" operator="over" />
        </filter>
        <clipPath id="hb-clip">
          <rect x="10" y="10" width="460" height="340" rx="16" />
        </clipPath>
      </defs>
      <circle cx="380" cy="80" r="120" fill="#2563eb" opacity="0.07" filter="url(#hb-glow)" />
      <circle cx="80" cy="300" r="90" fill="#0284c7" opacity="0.06" filter="url(#hb-glow)" />
      <rect x="10" y="10" width="460" height="340" rx="16" fill="url(#hb-win)" />
      <rect
        x="10"
        y="10"
        width="460"
        height="340"
        rx="16"
        stroke="rgba(96,165,250,0.22)"
        strokeWidth="1"
      />
      <rect x="10" y="10" width="460" height="2" rx="1" fill="url(#hb-acc)" opacity="0.8" />
      <g clipPath="url(#hb-clip)">
        <rect x="10" y="10" width="460" height="30" fill="rgba(96,165,250,0.04)" />
        <circle cx="32" cy="25" r="4.5" fill="#ff5f57" />
        <circle cx="47" cy="25" r="4.5" fill="#ffbd2e" />
        <circle cx="62" cy="25" r="4.5" fill="#28c840" />
        <rect x="88" y="16" width="220" height="18" rx="5" fill="rgba(255,255,255,0.05)" />
        <text
          x="198"
          y="29"
          fontSize="8.5"
          fill="rgba(255,255,255,0.28)"
          textAnchor="middle"
          fontFamily="monospace"
        >
          americasdumpsterrentals.com
        </text>
        <rect x="10" y="40" width="100" height="310" fill="rgba(0,0,0,0.2)" />
        <rect x="10" y="40" width="100" height="1" fill="rgba(96,165,250,0.12)" />
        {[58, 80, 102, 124, 146].map((y, i) => (
          <rect
            key={y}
            x="20"
            y={y}
            width={i === 0 ? 76 : 44 + (i % 3) * 14}
            height="12"
            rx="4"
            fill={i === 0 ? 'url(#hb-acc)' : 'rgba(255,255,255,0.07)'}
            opacity={i === 0 ? 0.9 : 1}
          />
        ))}
        <circle
          cx="60"
          cy="315"
          r="18"
          fill="rgba(37,99,235,0.25)"
          stroke="rgba(96,165,250,0.3)"
          strokeWidth="1"
        />
        <circle cx="60" cy="308" r="7" fill="rgba(255,255,255,0.35)" />
        <ellipse cx="60" cy="326" rx="11" ry="7" fill="rgba(255,255,255,0.2)" />
        <rect x="124" y="50" width="336" height="290" fill="rgba(0,0,0,0.08)" />
        <rect x="136" y="62" width="312" height="118" rx="10" fill="url(#hb-card)" />
        <rect x="136" y="62" width="312" height="2.5" rx="1" fill="url(#hb-acc)" opacity="0.85" />
        <rect x="152" y="78" width="160" height="12" rx="4" fill="url(#hb-acc)" opacity="0.75" />
        <rect x="152" y="97" width="120" height="8" rx="3" fill="rgba(255,255,255,0.18)" />
        <rect x="152" y="111" width="140" height="8" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x="152" y="125" width="90" height="8" rx="3" fill="rgba(255,255,255,0.07)" />
        <rect x="152" y="142" width="76" height="24" rx="12" fill="url(#hb-acc)" />
        <text
          x="190"
          y="158"
          fontSize="8"
          fill="#fff"
          textAnchor="middle"
          fontWeight="bold"
          fontFamily="monospace"
        >
          START →
        </text>
        <circle cx="408" cy="114" r="38" fill="rgba(37,99,235,0.12)" />
        <circle cx="408" cy="114" r="22" fill="rgba(2,132,199,0.18)" />
        <text x="408" y="121" fontSize="18" textAnchor="middle" fill="rgba(255,255,255,0.38)">
          ⬡
        </text>
        <rect
          x="136"
          y="194"
          width="148"
          height="112"
          rx="10"
          fill="rgba(37,99,235,0.09)"
          stroke="rgba(96,165,250,0.2)"
          strokeWidth="1"
        />
        <circle cx="210" cy="250" r="32" fill="rgba(37,99,235,0.13)" />
        <circle cx="210" cy="250" r="18" fill="rgba(2,132,199,0.18)" />
        <text x="210" y="258" fontSize="20" textAnchor="middle" fill="rgba(255,255,255,0.38)">
          ✦
        </text>
        <rect x="298" y="194" width="152" height="112" rx="10" fill="url(#hb-code)" />
        <rect x="298" y="194" width="152" height="2.5" rx="1" fill="url(#hb-acc)" opacity="0.55" />
        {[
          { x: 310, y: 213, w: 28, c: '#60a5fa' },
          { x: 344, y: 213, w: 72, c: 'rgba(255,255,255,0.45)' },
          { x: 310, y: 228, w: 96, c: '#38bdf8' },
          { x: 310, y: 242, w: 80, c: 'rgba(255,255,255,0.28)' },
          { x: 310, y: 256, w: 60, c: '#60a5fa' },
          { x: 310, y: 270, w: 44, c: 'rgba(255,255,255,0.18)' },
          { x: 310, y: 284, w: 56, c: '#38bdf8' },
        ].map((l, i) => (
          <rect key={i} x={l.x} y={l.y} width={l.w} height="7" rx="2.5" fill={l.c} />
        ))}
        <rect x="310" y="298" width="2" height="8" rx="1" fill="#60a5fa" opacity="0.9" />
        <rect
          x="352"
          y="60"
          width="68"
          height="22"
          rx="11"
          fill="rgba(2,132,199,0.2)"
          stroke="rgba(56,189,248,0.35)"
          strokeWidth="1"
        />
        <circle cx="365" cy="71" r="3" fill="#38bdf8" />
        <text
          x="384"
          y="76"
          fontSize="8"
          fill="#38bdf8"
          textAnchor="middle"
          fontWeight="bold"
          fontFamily="monospace"
        >
          LIVE
        </text>
        <rect x="124" y="328" width="346" height="22" fill="rgba(0,0,0,0.22)" />
        {['#2563eb', '#38bdf8', '#60a5fa', '#93c5fd'].map((c, i) => (
          <circle key={c} cx={448 - i * 16} cy="339" r="4" fill={c} opacity="0.65" />
        ))}
        <text x="136" y="343" fontSize="7" fill="rgba(255,255,255,0.22)" fontFamily="monospace">
          Next.js · TypeScript · Tailwind · Supabase
        </text>
      </g>
    </svg>
  );
};
