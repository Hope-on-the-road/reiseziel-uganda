import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader.jsx'

const TOPICS = [
  { slug: '/reiseplanung/visa', title: 'Visa & Einreise', desc: 'E-Visum, Kosten und alles fuer die Einreise.' },
  { slug: '/reiseplanung/impfungen', title: 'Impfungen', desc: 'Gelbfieber-Pflicht und Malaria-Prophylaxe.' },
  { slug: '/reiseplanung/beste-reisezeit', title: 'Beste Reisezeit', desc: 'Trocken- und Regenzeiten im Ueberblick.' },
  { slug: '/reiseplanung/kosten', title: 'Kosten & Budget', desc: 'Von Budget-Reise bis Luxus-Safari.' },
  { slug: '/reiseplanung/sicherheit', title: 'Sicherheit', desc: 'Aktuelle Lage und Tipps fuer Reisende.' },
  { slug: '/reiseplanung/transport', title: 'Transport', desc: 'Mietwagen, Fahrer und Boda-Bodas.' },
  { slug: '/reiseplanung/internet', title: 'Internet & SIM', desc: 'SIM-Karten und Netzabdeckung.' },
  { slug: '/reiseplanung/geld', title: 'Geld & Waehrung', desc: 'Shilling, Geldautomaten und Mobile Money.' },
]

const TOURS = [
  { days: '7', title: '7 Tage Highlights', desc: 'Gorilla Trekking und Queen Elizabeth kompakt', tag: 'Beliebt' },
  { days: '10', title: '10 Tage Classic', desc: 'Murchison Falls, Schimpansen und Gorillas' },
  { days: '14', title: '14 Tage Grand Tour', desc: 'Alle Highlights mit Zeit zum Geniessen', tag: 'Empfohlen' },
  { days: '21', title: '21 Tage Explorer', desc: 'Das komplette Uganda mit Kidepo und Sipi Falls' },
]

export default function PlanungSection({ photos }) {
  return (
    <section id="planung" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Vorbereitung"
          title="Reiseplanung Uganda"
          subtitle="Alles, was du fuer deine Uganda-Reise wissen musst -- von der Einreise bis zur perfekten Route."
        />

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20 sm:mb-28">
          {TOPICS.map(t => (
            <Link
              key={t.title}
              to={t.slug}
              className="group p-5 sm:p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-safari-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-bold text-gray-900 mb-2 text-[15px] group-hover:text-safari-700 transition-colors">{t.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-safari-600 text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all duration-300">
                Lesen
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Rundreisen */}
        <div className="relative">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[10px] sm:text-xs font-bold text-safari-600 tracking-[0.25em] uppercase mb-4">Rundreisen</p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">Die perfekte Route</h3>
            <div className="mt-6 w-16 h-px mx-auto bg-safari-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TOURS.map(tour => (
              <Link key={tour.days} to={`/rundreisen/${tour.days}-tage`} className="group relative">
                <div className="bg-gradient-to-br from-jungle-800 to-jungle-950 rounded-2xl sm:rounded-3xl p-6 sm:p-7 h-full hover:shadow-2xl hover:shadow-jungle-900/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl" />
                  <div className="relative">
                    {tour.tag && (
                      <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-300 text-[10px] font-bold tracking-[0.15em] uppercase rounded-full mb-4">
                        {tour.tag}
                      </span>
                    )}
                    <div className="text-5xl sm:text-6xl font-display font-bold text-white/90 mb-1">{tour.days}</div>
                    <div className="text-[10px] text-gold-400/60 font-bold uppercase tracking-[0.2em] mb-4">Tage</div>
                    <h4 className="font-bold text-white text-base mb-2">{tour.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{tour.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-gold-300/70 text-xs font-medium group-hover:text-gold-300 group-hover:gap-3 transition-all duration-300">
                      Route ansehen
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
