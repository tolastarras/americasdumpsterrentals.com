type ConcentricCirclesProps = {
  count?: number; // Number of circles to render (default: 3)
  color?: string; // Base color for the circles (default: 'blue')
};

export const ConcentricCircles = ({ count = 5, color = 'border-gray-200' }: ConcentricCirclesProps) => {
  return (
    <div className="z-10">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className={`w-${(index + 1) * 100} h-${(index + 1) * 100} rounded-full border ${color}`}
          />
        </div>
      ))}
    </div>
  );
};
