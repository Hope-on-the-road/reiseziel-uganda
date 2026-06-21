import { useState, useMemo } from 'react'
import SectionHeader from './SectionHeader.jsx'
import { photoAlt } from '../utils/photoAlt.js'

const FILTERS = [
  { key: 'all', label: 'Alle' },
  { key: 'wildlife', label: 'Wildlife' },
  { key: 'landscape', label: 'Landschaft' },
  { key: 'culture', label: 'Kultur' },
  { key: 'food', label: 'Essen' },
]

export default function GalerieSection({ photos }) {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    let pool = photos.filter(p => p.thumbnail_url)
    if (filter === 'wildlife') pool = pool.filter(p => p.category === 'Wildlife' || p.category === 'National Parks' || p.animals_visible)
    else if (filter === 'landscape') pool = pool.filter(p => p.category === 'Landscapes' || p.category === 'Roads & Transport')
    else if (filter === 'culture') pool = pool.filter(p => p.category === 'Villages' || p.category === 'Community Life' || p.category === 'Markets & Local Business' || p.category === 'People')
    else if (filter === 'food') pool = pool.filter(p => p.category === 'Food & Cooking' || p.category === 'HopeKitchen')
    return pool.slice(0, 16)
  }, [photos, filter])

  return (
    <section className="py-20 sm:py-28 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Fotografie"
          title="Uganda in Bildern"
          subtitle="Alle Aufnahmen stammen aus unserer eigenen Fotodatenbank -- authentisch, vor Ort und unvergesslich."
          light
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.key
                  ? 'bg-white text-gray-900'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80 border border-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {filtered.map(photo => (
            <div
              key={photo.id}
              className="group relative break-inside-avoid rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <img
                src={photo.thumbnail_url}
                alt={photoAlt(photo)}
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-xs sm:text-sm font-medium line-clamp-2">{photo.title || photo.file_name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Count */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
            <span className="text-gold-400 font-display font-bold text-lg">{photos.filter(p => p.thumbnail_url).length}</span>
            <span className="text-white/40 text-sm">Fotos in unserer Datenbank</span>
          </div>
        </div>
      </div>
    </section>
  )
}
