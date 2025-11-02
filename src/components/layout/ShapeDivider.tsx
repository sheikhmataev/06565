interface ShapeDividerProps {
  className?: string;
  color: string;
}

export default function ShapeDivider({ className, color }: ShapeDividerProps) {
  // Map Tailwind color classes to actual fill values
  const getFillColor = (colorClass: string): string => {
    const colorMap: Record<string, string> = {
      'text-white': '#ffffff',
      'text-gray-50': '#f9fafb',
      'text-gray-100': '#f3f4f6',
      'text-primary-1': '#1e293b', // Adjust based on your theme
      'text-primary-2': '#334155', // Adjust based on your theme
    };
    
    return colorMap[colorClass] || '#ffffff'; // Default to white
  };

  return (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ${className}`} style={{ pointerEvents: 'none', zIndex: 15 }}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`relative block w-[calc(100%+1.3px)] h-[120px] ${color}`}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill={getFillColor(color)}
        ></path>
      </svg>
    </div>
  );
}
