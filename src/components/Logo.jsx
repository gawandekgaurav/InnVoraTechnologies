const Logo = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="InnVora Technologies Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="40" height="40" rx="10" fill="url(#logoGradient)" />
      {/* Subtle inner highlight */}
      <rect width="40" height="40" rx="10" fill="url(#logoGradient2)" />
      {/* White accent line top */}
      <rect x="8" y="8" width="24" height="2" rx="1" fill="white" opacity="0.2" />
      {/* IN Text */}
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
        fontSize="15"
        fontWeight="800"
        fill="white"
        letterSpacing="-0.5"
      >
        IN
      </text>
    </svg>
  )
}

export default Logo
