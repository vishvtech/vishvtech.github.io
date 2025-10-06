type NeonLogoProps = {
  size?: number
  className?: string
}

export function NeonLogo({ size = 40, className }: NeonLogoProps) {
  const s = size
  return (
    <svg
      role="img"
      aria-label="VishvTech logo"
      width={s}
      height={s}
      viewBox="0 0 120 120"
      className={className}
      style={{ color: "var(--vt-primary)", overflow: 'visible' }}
    >
      <defs>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.2" result="blur1" />
          <feGaussianBlur stdDeviation="3.2" in="SourceGraphic" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Outer hex frame */}
      <g filter="url(#neon-glow)">
        <polygon
          points="60,12 96,34 96,86 60,108 24,86 24,34"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          opacity="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtle corner glows */}
        <circle cx="24" cy="34" r="4" fill="url(#dotGlow)" opacity="0.6" />
        <circle cx="96" cy="34" r="4" fill="url(#dotGlow)" opacity="0.6" />
        <circle cx="96" cy="86" r="4" fill="url(#dotGlow)" opacity="0.6" />
        <circle cx="24" cy="86" r="4" fill="url(#dotGlow)" opacity="0.6" />
      </g>

      {/* Monogram: stylized V and T */}
      <g transform="translate(0,4)">
        <path
          d="M38 38 L56 86 L66 86 L48 38 Z"
          fill="url(#logoGradient)"
          stroke="currentColor"
          strokeWidth="0.6"
          filter="url(#neon-glow)"
          opacity="0.95"
        />

        <path
          d="M68 38 L68 48 L84 48 L84 56 L68 56 L68 86"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#neon-glow)"
          opacity="0.95"
        />

        {/* center connector */}
        {/* <line x1="58" y1="58" x2="74" y2="" fill="none" stroke="currentColor" strokeWidth="5" opacity="0.9" /> */}
      </g>

      {/* Tiny animated accent - a soft pulse circle */}
      {/* <circle cx="60" cy="40" r="2.2" fill="currentColor" opacity="0.9">
        <animate attributeName="r" dur="1.8s" values="2.2;5;2.2" repeatCount="indefinite" />
        <animate attributeName="opacity" dur="1.8s" values="0.9;0.18;0.9" repeatCount="indefinite" />
      </circle> */}
    </svg>
  )
}
