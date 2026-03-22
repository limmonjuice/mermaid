import { useMemo } from 'react'

function Bubbles() {
  const bubbles = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 4 + Math.random() * 10,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 4,
      opacity: 0.15 + Math.random() * 0.35,
    })),
  [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map(b => (
        <div
          key={b.id}
          className="absolute rounded-full bg-ocean-200/30"
          style={{
            left: `${b.left}%`,
            bottom: '-20px',
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animation: `bubble ${b.duration}s ease-in ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

function Whale() {
  return (
    <div className="animate-drift" style={{ transformOrigin: 'center center' }}>
      <svg viewBox="0 0 520 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto drop-shadow-2xl">
        {/* Body */}
        <ellipse cx="250" cy="155" rx="170" ry="90" fill="#1a5276" />
        <ellipse cx="250" cy="155" rx="170" ry="90" fill="url(#whaleGrad)" />

        {/* Belly */}
        <ellipse cx="240" cy="185" rx="130" ry="50" fill="#2d8abf" opacity="0.45" />

        {/* Head shape */}
        <ellipse cx="120" cy="148" rx="80" ry="65" fill="#1a5276" />
        <ellipse cx="120" cy="148" rx="80" ry="65" fill="url(#whaleGrad)" />

        {/* Mouth line */}
        <path d="M55 160 Q90 175 140 165" stroke="#0d2847" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Belly underside */}
        <path d="M60 165 Q120 210 260 200" fill="#4db8e8" opacity="0.3" />

        {/* Eye */}
        <circle cx="88" cy="138" r="8" fill="#0d2847" />
        <circle cx="90" cy="136" r="3" fill="#b5e8f7" />

        {/* Pectoral fin */}
        <path d="M180 195 Q160 250 210 260 Q230 240 200 200" fill="#145a8a" />

        {/* Dorsal bump */}
        <path d="M300 68 Q320 55 340 72" fill="#1a5276" />

        {/* Tail */}
        <path d="M400 130 Q450 100 500 60 Q470 120 490 140 Q470 140 450 170 Q500 230 485 250 Q440 190 400 175"
          fill="#1a5276" />
        <path d="M400 130 Q450 100 500 60 Q470 120 490 140"
          fill="#2471a3" opacity="0.5" />

        {/* Ventral grooves */}
        <g stroke="#4db8e8" strokeWidth="1" opacity="0.3">
          <path d="M100 175 Q180 200 260 192" />
          <path d="M110 183 Q175 205 250 198" />
          <path d="M120 190 Q170 208 240 203" />
        </g>

        <defs>
          <linearGradient id="whaleGrad" x1="80" y1="80" x2="420" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2d8abf" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1a5276" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function SeaweedLeft() {
  return (
    <svg className="absolute bottom-0 left-0 w-48 h-64 animate-sway" style={{ transformOrigin: 'bottom center' }}
      viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 280 Q45 220 55 170 Q65 120 50 70 Q45 40 55 10"
        stroke="#0d4a3a" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M60 280 Q70 230 65 190 Q55 150 65 110 Q75 70 60 30"
        stroke="#0b6b4f" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M90 280 Q80 230 85 180 Q95 130 85 80"
        stroke="#14866a" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Leaves */}
      <ellipse cx="45" cy="120" rx="18" ry="8" fill="#0d5c45" transform="rotate(-30 45 120)" />
      <ellipse cx="75" cy="90" rx="15" ry="7" fill="#14866a" transform="rotate(20 75 90)" />
      <ellipse cx="55" cy="50" rx="14" ry="6" fill="#0b6b4f" transform="rotate(-15 55 50)" />
      <ellipse cx="80" cy="160" rx="16" ry="7" fill="#0d5c45" transform="rotate(25 80 160)" />
    </svg>
  )
}

function SeaweedRight() {
  return (
    <svg className="absolute bottom-0 right-0 w-44 h-56 animate-sway" style={{ transformOrigin: 'bottom center', animationDelay: '1.5s' }}
      viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M120 260 Q135 200 125 150 Q115 100 130 50"
        stroke="#0d4a3a" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M100 260 Q110 210 105 160 Q95 120 110 70"
        stroke="#0b6b4f" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M140 260 Q130 220 135 180 Q145 140 135 100"
        stroke="#14866a" strokeWidth="7" strokeLinecap="round" fill="none" />
      <ellipse cx="130" cy="100" rx="16" ry="7" fill="#0d5c45" transform="rotate(30 130 100)" />
      <ellipse cx="100" cy="130" rx="14" ry="6" fill="#14866a" transform="rotate(-20 100 130)" />
      <ellipse cx="140" cy="160" rx="13" ry="6" fill="#0b6b4f" transform="rotate(15 140 160)" />
    </svg>
  )
}

function CoralCluster() {
  return (
    <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-32"
      viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Coral branches */}
      <path d="M120 140 Q115 100 100 80 Q90 60 95 40" stroke="#7b2d4e" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M120 140 Q130 95 145 75 Q155 55 150 35" stroke="#8e3560" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M200 140 Q195 110 180 90 Q170 70 175 50" stroke="#5e3a6e" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M200 140 Q210 105 225 85 Q235 65 230 45" stroke="#6e2855" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M280 140 Q275 105 265 85" stroke="#7b2d4e" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Coral tips */}
      <circle cx="95" cy="38" r="6" fill="#9b4070" />
      <circle cx="150" cy="33" r="5" fill="#a34878" />
      <circle cx="175" cy="48" r="6" fill="#7e4580" />
      <circle cx="230" cy="43" r="5" fill="#8b3565" />
      <circle cx="265" cy="83" r="5" fill="#9b4070" />
      {/* Small seafloor rocks */}
      <ellipse cx="60" cy="135" rx="30" ry="8" fill="#0a1a30" opacity="0.5" />
      <ellipse cx="320" cy="132" rx="35" ry="10" fill="#0a1a30" opacity="0.4" />
    </svg>
  )
}

function LightRay() {
  return (
    <div className="absolute top-0 right-10 w-64 h-full opacity-[0.06] pointer-events-none"
      style={{
        background: 'linear-gradient(180deg, rgba(77,184,232,0.4) 0%, transparent 60%)',
        clipPath: 'polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)',
      }}
    />
  )
}

export default function UnderwaterScene() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full overflow-hidden bg-gradient-to-b from-navy-700 via-navy-800 to-navy-900 p-8 lg:p-12">
      <LightRay />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-lg">
        {/* Logo area */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-ocean-300" />
          <div className="w-3 h-3 rounded-full bg-ocean-400" />
          <div className="w-3 h-3 rounded-full bg-ocean-200 opacity-60" />
          <span className="ml-3 text-ocean-200 font-body font-semibold tracking-widest uppercase text-sm">
            Mermaid
          </span>
        </div>

        {/* Whale illustration */}
        <Whale />

        {/* Headline */}
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
          Explore the<br />
          <span className="text-ocean-300">underwater</span>
        </h1>

        <p className="text-ocean-100/70 text-sm lg:text-base leading-relaxed max-w-sm">
          Dive into the world of fresh catches. Connect fishermen with vendors
          in one seamless marketplace.
        </p>
      </div>

      {/* Background decorations */}
      {/* Light circle behind whale */}
      <div className="absolute top-1/4 right-1/4 w-56 h-56 rounded-full bg-ocean-400/10 blur-3xl pointer-events-none" />

      <SeaweedLeft />
      <SeaweedRight />
      <CoralCluster />
      <Bubbles />
    </div>
  )
}
