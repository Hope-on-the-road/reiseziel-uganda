import { Link } from 'react-router-dom'

export default function Hero({ photos }) {
  const heroPhoto = photos.find(p =>
    (p.title || '').toLowerCase().includes('landschaft') ||
    (p.category === 'Landscapes' && p.thumbnail_url)
  ) || photos.find(p => p.category === 'National Parks' && p.thumbnail_url)

  const bgUrl = heroPhoto?.thumbnail_url

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {bgUrl ? (
          <img
            src={bgUrl}
            alt="Uganda Landschaft -- Die Perle Afrikas"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-jungle-800 via-jungle-900 to-earth-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Decorative top line */}
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8 sm:mb-10" />

        <h1 className="font-display font-bold text-white leading-[1.05] mb-5 sm:mb-6">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Reiseziel Uganda
          </span>
        </h1>

        {/* Die Perle Afrikas -- elegant, dezent, als Untertitel */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 mb-8 sm:mb-10">
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold-400/70" />
          <p className="text-gold-300 text-base sm:text-lg md:text-xl font-display italic tracking-wide">
            Die Perle Afrikas
          </p>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold-400/70" />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2">
          Die umfassendste deutschsprachige Wissensplattform zu Uganda.
          Nationalparks, Gorilla Trekking, Safari und authentische Reiseplanung.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20">
          <a
            href="#nationalparks"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-safari-500 to-safari-600 text-white rounded-2xl font-semibold text-base sm:text-lg shadow-xl shadow-safari-900/30 hover:shadow-2xl hover:shadow-safari-900/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Nationalparks erkunden
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link
            to="/gorilla-trekking"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-semibold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
          >
            Gorilla Trekking
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto">
          {[
            { value: '10', label: 'Nationalparks' },
            { value: '1.063', label: 'Berggorillas' },
            { value: '1.090+', label: 'Vogelarten' },
            { value: '12', label: 'UNESCO Welterbe' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-white/50 mt-1 sm:mt-1.5 font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
