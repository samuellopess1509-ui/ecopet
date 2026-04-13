const Logo = ({ className = "h-10 w-auto", inverted = false }: { className?: string; inverted?: boolean }) => {
  const primary = inverted ? "#ffffff" : "hsl(152, 60%, 38%)";
  const accent = inverted ? "rgba(255,255,255,0.7)" : "hsl(152, 70%, 50%)";
  const dark = inverted ? "#ffffff" : "hsl(160, 40%, 12%)";

  return (
    <svg viewBox="0 0 180 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Icon: simplified 3D printer frame + bottle + recycling leaf */}
      <g>
        {/* Printer frame */}
        <rect x="2" y="4" width="24" height="2" rx="1" fill={dark} />
        <rect x="2" y="4" width="2" height="28" rx="1" fill={dark} />
        <rect x="24" y="4" width="2" height="28" rx="1" fill={dark} />
        <rect x="2" y="30" width="24" height="2" rx="1" fill={dark} />
        {/* Nozzle */}
        <rect x="12" y="4" width="4" height="6" rx="1" fill={dark} />
        <polygon points="13,10 15,10 14,13" fill={dark} />
        {/* Bottle shape inside */}
        <path d="M11 14 L11 26 Q11 28 14 28 Q17 28 17 26 L17 14 Q17 13 14 13 Q11 13 11 14Z" fill={accent} opacity="0.6" />
        {/* Recycling leaf arc */}
        <path d="M6 20 Q2 12 14 8" stroke={primary} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M22 20 Q26 28 14 32" stroke={primary} strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Leaf */}
        <path d="M4 22 Q2 18 6 17 Q5 20 4 22Z" fill={primary} />
      </g>
      {/* Text */}
      <text x="34" y="23" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="18" fill={dark}>
        ECO
        <tspan fill={primary}>PET</tspan>
        <tspan fill={dark} dx="3">3D</tspan>
      </text>
    </svg>
  );
};

export default Logo;
