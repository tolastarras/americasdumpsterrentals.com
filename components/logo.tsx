export const Logo = ({ size = 40, onDark = true }: { size?: number; onDark?: boolean }): React.ReactElement => {
  const uid = `TL${size}${onDark ? 'd' : 'l'}`;
  const cell = size / 3;
  const r = cell * 0.4;
  const dots: [number, number][] = [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
    [1, 2],
  ];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <defs>
        <linearGradient id={`${uid}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={onDark ? '#60a5fa' : '#1d4ed8'} />
          <stop offset="100%" stopColor={onDark ? '#38bdf8' : '#0284c7'} />
        </linearGradient>
      </defs>
      {dots.map(([c, row]) => (
        <circle
          key={`${c}-${row}`}
          cx={cell * c + cell / 2}
          cy={cell * row + cell / 2}
          r={r}
          fill={`url(#${uid}g)`}
        />
      ))}
    </svg>
  );
};
