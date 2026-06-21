import { Link } from 'react-router-dom'

const FACTS = [
  { value: '1.063', label: 'Berggorillas weltweit' },
  { value: '459', label: 'Davon in Uganda' },
  { value: '$800', label: 'Permit pro Person' },
  { value: '1 Std.', label: 'Bei den Gorillas' },
]

export default function GorillaSection({ photos }) {
  const heroPhoto = photos[0]
  const galleryPhotos = photos.slice(1, 7)

  return (
    <section id="gorilla" className="relative bg-gray-950 text-white overflow-hidden">
      {/* Full-bleed hero image */}
      <div className="relative flex items-end">
        <div className="absolute inset-0">
          {heroPhoto?.thumbnail_url ? (
            <img src={heroPhoto.thumbnail_url} alt="Berggorilla in Bwindi" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-jungle-800 to-jungle-950" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 pt-10 sm:pt-14 w-full">
          <p className="text-gold-400/80 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4">Das Highlight jeder Uganda-Reise</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-3xl mb-6">
            Gorilla Trekking
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            Eine Begegnung mit den sanften Riesen des Bwindi Impenetrable Forest -- das emotionalste Tiererlebnis der Welt, das man nicht in Worte fassen kann.
          </p>
          <Link
            to="/gorilla-trekking"
            className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-safari-500 to-safari-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-safari-500/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Der komplette Guide
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Stats + Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {FACTS.map(f => (
            <div key={f.label} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gold-400 mb-2">{f.value}</div>
              <div className="text-xs sm:text-sm text-white/40 font-medium">{f.label}</div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        {galleryPhotos.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {galleryPhotos.map((photo, i) => (
              <div key={photo.id} className={`relative rounded-2xl sm:rounded-3xl overflow-hidden group ${
                i === 0 ? 'col-span-2 sm:col-span-1 h-56 sm:h-72' : 'h-48 sm:h-60'
              }`}>
                <img
                  src={photo.thumbnail_url}
                  alt={photo.title || 'Gorilla'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
            ))}
          </div>
        )}

        {/* Bottom Links */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Bwindi National Park', desc: '22 habituierte Gorilla-Familien im dichtesten Regenwald Afrikas.', to: '/nationalparks/bwindi' },
            { title: 'Mgahinga National Park', desc: 'Vulkanlandschaft, Goldmeerkatzen und Gorilla-Familien an der Grenze zu Ruanda.', to: '/nationalparks/mgahinga' },
            { title: 'Kosten & Permit', desc: 'Alles zu Preisen, Buchung und Verfuegbarkeit der begehrten Gorilla-Permits.', to: '/gorilla-trekking' },
          ].map(link => (
            <Link
              key={link.title}
              to={link.to}
              className="group p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h4 className="text-white font-semibold mb-2 group-hover:text-gold-300 transition-colors">{link.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
