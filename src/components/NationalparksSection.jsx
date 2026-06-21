import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader.jsx'

const FEATURED = { id: 'bwindi', name: 'Bwindi Impenetrable Forest', subtitle: 'Heimat der letzten Berggorillas', desc: 'UNESCO-Welterbe und Zuhause von knapp der Haelfte aller Berggorillas weltweit. Das Gorilla Trekking in Bwindi ist das unvergesslichste Erlebnis einer Uganda-Reise.', color: 'from-jungle-700 to-jungle-900' }

const PARKS = [
  { id: 'queen_elizabeth', name: 'Queen Elizabeth', subtitle: 'Afrikas vielfaeltigster Park' },
  { id: 'murchison_falls', name: 'Murchison Falls', subtitle: 'Der maechtigste Wasserfall' },
  { id: 'kibale', name: 'Kibale Forest', subtitle: 'Hauptstadt der Primaten' },
  { id: 'kidepo', name: 'Kidepo Valley', subtitle: 'Ugandas wildeste Wildnis' },
  { id: 'mt_elgon', name: 'Mount Elgon & Sipi Falls', subtitle: 'Ugandas hoechster Vulkan' },
  { id: 'lake_mburo', name: 'Lake Mburo', subtitle: 'Zebras und Seen' },
  { id: 'mgahinga', name: 'Mgahinga Gorilla', subtitle: 'Vulkane und Goldmeerkatzen' },
  { id: 'semuliki', name: 'Semuliki', subtitle: 'Kongolischer Regenwald' },
]

function ParkCard({ park, photo, tall = false }) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <Link to={`/nationalparks/${park.id}`} className="group block">
      <div className={`relative ${tall ? 'h-80 sm:h-[28rem]' : 'h-64 sm:h-72'} rounded-2xl sm:rounded-3xl overflow-hidden`}>
        {photo?.thumbnail_url ? (
          <img
            src={photo.thumbnail_url}
            alt={park.name}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${park.color || 'from-jungle-700 to-earth-800'}`} />
        )}
        {!imgLoaded && photo?.thumbnail_url && (
          <div className="absolute inset-0 bg-gradient-to-br from-earth-100 to-earth-200 animate-pulse" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">{park.name}</h3>
          <p className="text-white/60 text-sm mt-1">{park.subtitle}</p>
          <div className="mt-3 flex items-center gap-2 text-white/50 text-xs font-medium group-hover:text-gold-300 group-hover:gap-3 transition-all duration-300">
            Entdecken
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function NationalparksSection({ clusters }) {
  const getPhoto = (id) => clusters[id]?.[0] || null

  return (
    <section id="nationalparks" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Schutzgebiete"
          title="Ugandas Nationalparks"
          subtitle="Von nebelverhangenen Bergwaeldern bis zur weiten Savanne -- jeder Park ist ein eigenes Universum."
        />

        {/* Featured + First Two */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
          <Link to={`/nationalparks/${FEATURED.id}`} className="group block">
            <div className="relative h-80 sm:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden">
              {getPhoto(FEATURED.id)?.thumbnail_url ? (
                <img
                  src={getPhoto(FEATURED.id).thumbnail_url}
                  alt={FEATURED.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${FEATURED.color}`} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-gold-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2 sm:mb-3">UNESCO Welterbe</p>
                <h3 className="text-white text-2xl sm:text-3xl font-display font-bold leading-tight mb-2">{FEATURED.name}</h3>
                <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed">{FEATURED.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-gold-300 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <div className="grid grid-rows-2 gap-5 sm:gap-6">
            {PARKS.slice(0, 2).map(park => (
              <ParkCard key={park.id} park={park} photo={getPhoto(park.id)} />
            ))}
          </div>
        </div>

        {/* Remaining Parks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PARKS.slice(2).map(park => (
            <ParkCard key={park.id} park={park} photo={getPhoto(park.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}
