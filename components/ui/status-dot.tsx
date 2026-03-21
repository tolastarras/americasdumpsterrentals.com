interface StatusDotProps {
  color: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  pulse?: boolean
  label?: string
}

const StatusDot = ({
  color,
  size = 'md',
  pulse = false,
  label,
}: StatusDotProps) => {
  const sizeClasses = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5',
  };

  const pulseClass = pulse ? 'animate-pulse' : '';

  return (
    <span
      className={`rounded-full ${sizeClasses[size]} ${color} ${pulseClass}`}
      aria-label={label}
      title={label}
    />
  );
};

export default StatusDot;
