import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader.jsx'

const EDITORIAL = [
  {
    title: 'Gorilla Trekking in Bwindi',
    desc: 'Das emotionalste Tiererlebnis der Welt -- Auge in Auge mit den letzten Berggorillas im nebelverhangenen Regenwald.',
    to: '/gorilla-trekking',
    tag: 'Highlight',
    photoFilter: 'gorilla',
    size: 'large',
  },
  {
    title: 'Queen Elizabeth Safari',
    desc: 'Baumkletternde Loewen, Bootsfahrt auf dem Kazinga-Kanal und ueber 600 Vogelarten.',
    to: '/nationalparks/queen_elizabeth',
    tag: 'Safari',
    photoFilter: 'queen_elizabeth',
    size: 'medium',
  },
  {
    title: 'Murchison Falls',
    desc: 'Der maechtigste Wasserfall Afrikas, Giraffen in der Savanne und Nilbootsfahrten.',
    to: '/nationalparks/murchison_falls',
    tag: 'Nationalpark',
    photoFilter: 'murchison_falls',
    size: 'medium',
  },
  {
    title: 'Sipi Falls & Mount Elgon',
    desc: 'Spektakulaere Wasserfaelle, Kaffeetouren und Wanderungen auf Ugandas hoechsten Vulkan.',
    to: '/nationalparks/mt_elgon',
    tag: 'Abenteuer',
    photoFilter: 'mt_elgon',
    size: 'small',
  },
  {
    title: 'Rundreise planen',
    desc: '7 bis 21 Tage -- die perfekte Route fuer dein Uganda-Abenteuer.',
    to: '/rundreisen/14-tage',
    tag: 'Reiseplanung',
    photoFilter: 'landschaft',
    size: 'small',
  },
  {
    title: 'Schuhschnabel entdecken',
    desc: 'Einer der seltensten Voegel der Welt -- nur in Uganda so nah zu beobachten.',
    to: '/tiere/schuhschnabel',
    tag: 'Birding',
    photoFilter: 'voegel',
    size: 'small',
  },
]

function EditorialCard({ item, photo, className = '' }) {
  const isLarge = item.size === 'large'
  const bgUrl = photo?.thumbnail_url

  return (
    <Link to={item.to} className={`group relative block overflow-hidden rounded-2xl sm:rounded-3xl ${className}`}>
      <div className="absolute inset-0">
        {bgUrl ? (
          <img
            src={bgUrl}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-jungle-700 to-earth-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 group-hover:from-black/70 transition-colors duration-500" />
      </div>
      <div className="relative h-full flex flex-col justify-end p-5 sm:p-7 md:p-8">
        <span className="self-start px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
          {item.tag}
        </span>
        <h3 className={`font-display font-bold text-white leading-tight mb-2 ${
          isLarge ? 'text-xl sm:text-2xl md:text-3xl' : 'text-lg sm:text-xl'
        }`}>
          {item.title}
        </h3>
        <p className={`text-white/70 leading-relaxed ${
          isLarge ? 'text-sm sm:text-base max-w-lg' : 'text-xs sm:text-sm'
        }`}>
          {item.desc}
        </p>
        <div className="mt-4 flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium group-hover:text-white group-hover:gap-3 transition-all duration-300">
          Weiterlesen
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function EntdeckenSection({ photos, clusters }) {
  const getPhoto = (filter) => {
    if (clusters?.[filter]?.length > 0) return clusters[filter][0]
    return photos.find(p => p.category === 'Landscapes' && p.thumbnail_url) || null
  }

  return (
    <section id="entdecken" className="py-20 sm:py-28 bg-gradient-to-b from-safari-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Magazin"
          title="Uganda entdecken"
          subtitle="Winston Churchill nannte es 'Die Perle Afrikas'. Entdecke, warum Uganda eines der faszinierendsten Reiseziele der Welt ist."
        />

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
          <EditorialCard
            item={EDITORIAL[0]}
            photo={getPhoto(EDITORIAL[0].photoFilter)}
            className="h-72 sm:h-80 md:h-96"
          />
          <div className="grid grid-rows-2 gap-4 sm:gap-5">
            <EditorialCard
              item={EDITORIAL[1]}
              photo={getPhoto(EDITORIAL[1].photoFilter)}
              className="h-36 sm:h-[calc(50%-10px)] md:h-auto"
            />
            <EditorialCard
              item={EDITORIAL[2]}
              photo={getPhoto(EDITORIAL[2].photoFilter)}
              className="h-36 sm:h-[calc(50%-10px)] md:h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {EDITORIAL.slice(3).map(item => (
            <EditorialCard
              key={item.title}
              item={item}
              photo={getPhoto(item.photoFilter)}
              className="h-56 sm:h-64"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
