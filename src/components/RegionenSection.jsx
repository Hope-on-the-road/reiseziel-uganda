import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader.jsx'

const REGIONS = [
  { id: 'buhoma', name: 'Buhoma', desc: 'Tor zum Bwindi Impenetrable Forest und Ausgangspunkt fuer Gorilla Trekking.', photoCluster: 'buhoma' },
  { id: 'entebbe', name: 'Entebbe', desc: 'Am Victoriasee gelegen -- Ugandas Flughafen-Stadt mit botanischem Garten und Strand.', photoCluster: null },
  { id: 'kampala', name: 'Kampala', desc: 'Ugandas pulsierende Hauptstadt mit Maerkten, Nightlife und kulturellen Schaetzen.', photoCluster: 'maerkte' },
  { id: 'jinja', name: 'Jinja', desc: 'Abenteuer-Hauptstadt am Nil-Ursprung -- Rafting, Bungee und Wassersport.', photoCluster: null },
  { id: 'fort-portal', name: 'Fort Portal', desc: 'Charmante Stadt am Fusse der Rwenzori Mountains, Tor zu Kibale Forest.', photoCluster: null },
  { id: 'kabale', name: 'Kabale', desc: 'Die Schweiz Afrikas -- gruene Huegel, Lake Bunyonyi und Gorilla-Trekking-Basis.', photoCluster: 'landschaft' },
]

export default function RegionenSection({ clusters }) {
  const getPhoto = (region) => {
    if (region.photoCluster && clusters[region.photoCluster]?.length > 0) {
      return clusters[region.photoCluster][0]
    }
    if (clusters.dorfleben?.length > 0) return clusters.dorfleben[0]
    if (clusters.landschaft?.length > 0) return clusters.landschaft[0]
    return null
  }

  return (
    <section id="regionen" className="py-20 sm:py-28 bg-gradient-to-b from-earth-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Orte"
          title="Regionen und Staedte"
          subtitle="Von der lebhaften Hauptstadt Kampala bis zum abgelegenen Buhoma -- jede Region hat ihren eigenen Charakter."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {REGIONS.map(region => {
            const photo = getPhoto(region)
            return (
              <Link key={region.id} to={`/regionen/${region.id}`} className="group block">
                <div className="relative h-64 sm:h-72 rounded-2xl sm:rounded-3xl overflow-hidden">
                  {photo?.thumbnail_url ? (
                    <img
                      src={photo.thumbnail_url}
                      alt={region.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-earth-600 to-earth-800" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="text-white text-lg sm:text-xl font-bold leading-tight mb-1">{region.name}</h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-2">{region.desc}</p>
                    <div className="mt-3 flex items-center gap-2 text-white/40 text-xs font-medium group-hover:text-gold-300 group-hover:gap-3 transition-all duration-300">
                      Entdecken
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
