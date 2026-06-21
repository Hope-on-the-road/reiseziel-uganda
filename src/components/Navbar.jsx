import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  {
    label: 'Nationalparks',
    to: '/nationalparks',
    children: [
      { label: 'Alle 10 Nationalparks', to: '/nationalparks' },
      { label: 'Bwindi Impenetrable', to: '/nationalparks/bwindi' },
      { label: 'Queen Elizabeth', to: '/nationalparks/queen_elizabeth' },
      { label: 'Murchison Falls', to: '/nationalparks/murchison_falls' },
      { label: 'Kibale Forest', to: '/nationalparks/kibale' },
      { label: 'Kidepo Valley', to: '/nationalparks/kidepo' },
      { label: 'Mount Elgon & Sipi Falls', to: '/nationalparks/mt_elgon' },
      { label: 'Lake Mburo', to: '/nationalparks/lake_mburo' },
      { label: 'Mgahinga Gorilla', to: '/nationalparks/mgahinga' },
      { label: 'Semuliki', to: '/nationalparks/semuliki' },
    ],
  },
  { label: 'Gorilla Trekking', to: '/gorilla-trekking' },
  {
    label: 'Tiere',
    to: '/tiere',
    children: [
      { label: 'Alle Tiere Ugandas', to: '/tiere' },
      { label: 'Berggorilla', to: '/tiere/berggorilla' },
      { label: 'Schimpanse', to: '/tiere/schimpanse' },
      { label: 'Schuhschnabel', to: '/tiere/schuhschnabel' },
      { label: 'Loewe (Big Five)', to: '/tiere/loewe' },
      { label: 'Leopard (Big Five)', to: '/tiere/leopard' },
      { label: 'Elefant (Big Five)', to: '/tiere/elefant' },
      { label: 'Bueffel (Big Five)', to: '/tiere/bueffel' },
      { label: 'Nashorn (Big Five)', to: '/tiere/nashorn' },
      { label: 'Flusspferd', to: '/tiere/flusspferd' },
      { label: 'Kronenkranich', to: '/tiere/kronenkranich' },
      { label: 'Rothschild-Giraffe', to: '/tiere/rothschild-giraffe' },
      { label: 'Krokodil', to: '/tiere/krokodil' },
      { label: 'Pangolin', to: '/pangolin-uganda' },
      { label: 'Goldene Affen', to: '/goldene-affen-uganda' },
      { label: 'Colobus-Affe', to: '/colobus-affe-uganda' },
      { label: 'Schuhschnabel Mabamba', to: '/schuhschnabel-mabamba' },
      { label: 'Walking Safari', to: '/walking-safari-uganda' },
      { label: 'Primate Tracking', to: '/primate-tracking-uganda' },
    ],
  },
  {
    label: 'Reiseplanung',
    to: '/reiseplanung',
    children: [
      { label: 'Visa & Einreise', to: '/reiseplanung/visa' },
      { label: 'Impfungen', to: '/reiseplanung/impfungen' },
      { label: 'Beste Reisezeit', to: '/reiseplanung/beste-reisezeit' },
      { label: 'Kosten & Budget', to: '/reiseplanung/kosten' },
      { label: 'Sicherheit', to: '/reiseplanung/sicherheit' },
      { label: 'Transport', to: '/reiseplanung/transport' },
      { label: 'Internet & SIM', to: '/reiseplanung/internet' },
      { label: 'Geld & Waehrung', to: '/reiseplanung/geld' },
      { label: 'Malaria-Prophylaxe', to: '/reiseplanung/malaria' },
      { label: 'Packliste', to: '/reiseplanung/packliste' },
      { label: 'Trinkgeld', to: '/reiseplanung/trinkgeld' },
      { label: 'Steckdosen & Strom', to: '/reiseplanung/steckdosen' },
      { label: 'Uganda oder Kenia?', to: '/vergleiche/uganda-vs-kenia' },
      { label: 'Uganda oder Tansania?', to: '/vergleiche/uganda-vs-tansania' },
      { label: 'Uganda oder Ruanda?', to: '/vergleiche/uganda-vs-ruanda' },
      { label: 'Bwindi oder Volcanoes?', to: '/vergleiche/bwindi-vs-volcanoes' },
    ],
  },
  {
    label: 'Rundreisen',
    to: '/rundreisen',
    children: [
      { label: '7 Tage Highlights', to: '/rundreisen/7-tage' },
      { label: '10 Tage Classic', to: '/rundreisen/10-tage' },
      { label: '14 Tage Grand Tour', to: '/rundreisen/14-tage' },
      { label: '21 Tage Explorer', to: '/rundreisen/21-tage' },
    ],
  },
  {
    label: 'Regionen',
    to: '/regionen',
    children: [
      { label: 'Buhoma', to: '/regionen/buhoma' },
      { label: 'Entebbe', to: '/regionen/entebbe' },
      { label: 'Kampala', to: '/regionen/kampala' },
      { label: 'Jinja', to: '/regionen/jinja' },
      { label: 'Fort Portal', to: '/regionen/fort-portal' },
      { label: 'Kabale', to: '/regionen/kabale' },
      { label: 'Lake Bunyonyi', to: '/regionen/lake-bunyonyi' },
      { label: 'Rwenzori-Berge', to: '/regionen/rwenzori' },
      { label: 'Kasese', to: '/regionen/kasese' },
      { label: 'Kraterseen', to: '/regionen/kraterseen' },
      { label: 'Ssese-Inseln', to: '/regionen/ssese-islands' },
    ],
  },
  {
    label: 'Land & Leute',
    to: '/land-und-leute',
    children: [
      { label: 'Staedte Ugandas', to: '/staedte' },
      { label: 'Der Nil in Uganda', to: '/der-nil-in-uganda' },
      { label: 'Sehenswuerdigkeiten', to: '/sehenswuerdigkeiten' },
      { label: 'Sipi Falls', to: '/sipi-falls' },
      { label: 'Victoriasee-Tiere', to: '/welche-tiere-leben-im-viktoriasee' },
      { label: 'Schimpansen-Trekking', to: '/schimpansen-trekking' },
      { label: 'Vogelbeobachten', to: '/erlebnisse/vogelbeobachten-uganda' },
      { label: 'Rwenzori-Marathon', to: '/erlebnisse/rwenzori-marathon' },
      { label: 'Rwenzori Trekking', to: '/rwenzori-trekking' },
      { label: 'Rwenzori vs. Kilimanjaro', to: '/rwenzori-vs-kilimanjaro' },
      { label: 'Sempaya Hot Springs', to: '/sempaya-hot-springs' },
      { label: 'Tooro-Koenigspalast', to: '/tooro-koenigspalast' },
      { label: 'Uganda Tourismus 2030', to: '/uganda-tourismus-2030' },
      { label: 'Bakonzo-Volk', to: '/kultur/bakonzo-volk' },
      { label: 'Tooro-Koenigreich', to: '/kultur/tooro-koenigreich' },
      { label: 'Gorilla Permit Verfuegbarkeit', to: '/gorilla-permit-verfuegbarkeit' },
      { label: 'CHEX Schimpansen Habituation', to: '/schimpansen-habituation-chex' },
      { label: 'Uganda Nebensaison', to: '/uganda-nebensaison' },
      { label: 'Uganda fuer Deutsche', to: '/uganda-fuer-deutsche' },
      { label: 'Tourismus Statistik 2025', to: '/uganda-tourismus-statistik' },
      { label: 'Uganda als Frau allein', to: '/uganda-als-frau-allein-reisen' },
      { label: 'Uganda mit Kindern', to: '/uganda-mit-kindern' },
      { label: 'Sprachen in Uganda', to: '/sprachen-in-uganda' },
      { label: 'Ugandische Rezepte', to: '/ugandische-kueche' },
      { label: 'Ugandischer Rolex', to: '/rolex-uganda' },
      { label: 'Ugandische Mahlzeit', to: '/ugandische-mahlzeit' },
      { label: 'Katogo Fruehstueck', to: '/katogo-fruehstueck' },
      { label: 'Flughaefen', to: '/flughaefen-uganda' },
      { label: 'Nachbarlaender', to: '/nachbarlaender-uganda' },
      { label: 'Wirtschaft & Waehrung', to: '/wirtschaft-uganda' },
      { label: 'Gorilla-Trekking Erfahrung', to: '/gorilla-trekking-erfahrungsbericht' },
      { label: 'Ueber uns', to: '/ueber-uns' },
      { label: 'Gorilla Trekking Ethik', to: '/gorilla-trekking-ethik' },
      { label: 'Wilderei in Uganda', to: '/wilderei-uganda' },
      { label: 'Ziwa Rhino Sanctuary', to: '/ziwa-rhino-sanctuary' },
      { label: 'Kidepo Safari Guide', to: '/kidepo-safari-guide' },
      { label: 'Mgahinga vs. Bwindi', to: '/mgahinga-vs-bwindi' },
      { label: 'Berggorilla Naturschutz', to: '/berggorilla-naturschutz' },
    ],
  },
]

function DesktopDropdown({ item, solid }) {
  const [open, setOpen] = useState(false)
  const timeout = useRef(null)

  const enter = () => { clearTimeout(timeout.current); setOpen(true) }
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150) }

  const cls = `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-1 ${
    solid
      ? 'text-gray-600 hover:text-jungle-800 hover:bg-jungle-50'
      : 'text-white/80 hover:text-white hover:bg-white/10'
  }`

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      {item.href ? (
        <a href={item.href} className={cls}>
          {item.label}
          <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      ) : (
        <Link to={item.to} className={cls}>
          {item.label}
          <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      )}

      <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
        open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
      }`}>
        <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 min-w-[220px]">
          {item.children.map(child => (
            <Link
              key={child.to}
              to={child.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-jungle-800 hover:bg-jungle-50/50 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileSubMenu({ item, onClose }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:bg-jungle-50 text-sm font-medium transition-colors"
      >
        {item.label}
        <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="pl-4 pb-1 space-y-0.5">
          {item.children.map(child => (
            <Link
              key={child.to}
              to={child.to}
              onClick={onClose}
              className="block px-4 py-2.5 rounded-lg text-gray-500 hover:text-jungle-800 hover:bg-jungle-50 text-sm transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const solid = scrolled || !isHome

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${solid ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-baseline gap-0.5">
            <span className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-500 ${solid ? 'text-jungle-900' : 'text-white'}`}>
              Reiseziel
            </span>
            <span className={`font-display text-xl sm:text-2xl font-light italic tracking-tight transition-colors duration-500 ${solid ? 'text-safari-600' : 'text-gold-300'}`}>
              Uganda
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map(item => {
              if (item.children) {
                return <DesktopDropdown key={item.label} item={item} solid={solid} />
              }
              const cls = `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                solid
                  ? 'text-gray-600 hover:text-jungle-800 hover:bg-jungle-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`
              return item.to
                ? <Link key={item.label} to={item.to} className={cls}>{item.label}</Link>
                : <a key={item.label} href={item.href} className={cls}>{item.label}</a>
            })}
            <Link
              to="/rundreisen/14-tage"
              className={`ml-3 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                solid
                  ? 'bg-gradient-to-r from-safari-500 to-safari-600 text-white hover:shadow-lg hover:shadow-safari-500/25'
                  : 'bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25'
              }`}
            >
              Reise planen
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-3 rounded-lg transition-colors ${solid ? 'text-gray-700' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map(item => {
              if (item.children) {
                return <MobileSubMenu key={item.label} item={item} onClose={() => setOpen(false)} />
              }
              return item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-jungle-50 hover:text-jungle-800 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-jungle-50 hover:text-jungle-800 text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              )
            })}
            <Link
              to="/rundreisen/14-tage"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-safari-500 to-safari-600 text-white text-sm font-semibold text-center"
            >
              Reise planen
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
