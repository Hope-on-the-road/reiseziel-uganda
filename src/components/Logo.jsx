export default function Logo({ className = 'w-9 h-9', variant = 'light' }) {
  const isLight = variant === 'light'

  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Perle -- leuchtende Kugel mit Glanz */}
      <circle
        cx="20"
        cy="20"
        r="14"
        fill={isLight ? 'url(#pearlGradLight)' : 'url(#pearlGradDark)'}
      />

      {/* Innerer Glanz oben links */}
      <ellipse
        cx="15"
        cy="14.5"
        rx="5.5"
        ry="4"
        fill="white"
        opacity={isLight ? 0.45 : 0.35}
        transform="rotate(-25 15 14.5)"
      />

      {/* Kleiner Lichtpunkt */}
      <circle
        cx="14"
        cy="13"
        r="2"
        fill="white"
        opacity={isLight ? 0.7 : 0.5}
      />

      {/* Feiner aeusserer Ring */}
      <circle
        cx="20"
        cy="20"
        r="17.5"
        stroke={isLight ? 'rgba(255,255,255,0.25)' : 'rgba(26,71,42,0.3)'}
        strokeWidth="0.75"
        fill="none"
      />

      {/* Gradients */}
      <defs>
        <radialGradient id="pearlGradLight" cx="0.35" cy="0.3" r="0.65">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="35%" stopColor="#D4A843" />
          <stop offset="75%" stopColor="#B8872B" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
        <radialGradient id="pearlGradDark" cx="0.35" cy="0.3" r="0.65">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="35%" stopColor="#D4A843" />
          <stop offset="75%" stopColor="#B8872B" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
      </defs>
    </svg>
  )
}
