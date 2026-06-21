import { Link } from 'react-router-dom'

const LINKS = {
  'Nationalparks': [
    { label: 'Bwindi Impenetrable', to: '/nationalparks/bwindi' },
    { label: 'Queen Elizabeth', to: '/nationalparks/queen_elizabeth' },
    { label: 'Murchison Falls', to: '/nationalparks/murchison_falls' },
    { label: 'Kibale Forest', to: '/nationalparks/kibale' },
    { label: 'Kidepo Valley', to: '/nationalparks/kidepo' },
    { label: 'Mount Elgon', to: '/nationalparks/mt_elgon' },
  ],
  'Reiseplanung': [
    { label: 'Visa & Einreise', to: '/reiseplanung/visa' },
    { label: 'Impfungen', to: '/reiseplanung/impfungen' },
    { label: 'Beste Reisezeit', to: '/reiseplanung/beste-reisezeit' },
    { label: 'Kosten & Budget', to: '/reiseplanung/kosten' },
    { label: 'Sicherheit', to: '/reiseplanung/sicherheit' },
    { label: 'Transport', to: '/reiseplanung/transport' },
    { label: 'Malaria-Prophylaxe', to: '/reiseplanung/malaria' },
    { label: 'Packliste', to: '/reiseplanung/packliste' },
  ],
  'Erleben': [
    { label: 'Gorilla Trekking', to: '/gorilla-trekking' },
    { label: 'Berggorilla', to: '/tiere/berggorilla' },
    { label: 'Schimpanse', to: '/tiere/schimpanse' },
    { label: 'Big Five Tiere', to: '/tiere/loewe' },
    { label: '14 Tage Rundreise', to: '/rundreisen/14-tage' },
    { label: '7 Tage Rundreise', to: '/rundreisen/7-tage' },
    { label: 'Schimpansen-Trekking', to: '/schimpansen-trekking' },
    { label: 'Vogelbeobachten', to: '/erlebnisse/vogelbeobachten-uganda' },
    { label: 'Rwenzori-Marathon', to: '/erlebnisse/rwenzori-marathon' },
    { label: 'Rwenzori Trekking', to: '/rwenzori-trekking' },
    { label: 'Sempaya Hot Springs', to: '/sempaya-hot-springs' },
    { label: 'Uganda Tourismus 2030', to: '/uganda-tourismus-2030' },
    { label: 'Bakonzo-Volk', to: '/kultur/bakonzo-volk' },
    { label: 'Tooro-Koenigreich', to: '/kultur/tooro-koenigreich' },
    { label: 'Gorilla Permit Verfuegbarkeit', to: '/gorilla-permit-verfuegbarkeit' },
    { label: 'CHEX Schimpansen Habituation', to: '/schimpansen-habituation-chex' },
    { label: 'Uganda Nebensaison', to: '/uganda-nebensaison' },
    { label: 'Uganda fuer Deutsche', to: '/uganda-fuer-deutsche' },
    { label: 'Tourismus Statistik 2025', to: '/uganda-tourismus-statistik' },
    { label: 'Uganda mit Kindern', to: '/uganda-mit-kindern' },
    { label: 'Gorilla-Erfahrungsbericht', to: '/gorilla-trekking-erfahrungsbericht' },
    { label: 'Gorilla Trekking Ethik', to: '/gorilla-trekking-ethik' },
    { label: 'Walking Safari', to: '/walking-safari-uganda' },
    { label: 'Ziwa Rhino Sanctuary', to: '/ziwa-rhino-sanctuary' },
    { label: 'Wilderei in Uganda', to: '/wilderei-uganda' },
    { label: 'Berggorilla Naturschutz', to: '/berggorilla-naturschutz' },
    { label: 'Kidepo Safari Guide', to: '/kidepo-safari-guide' },
  ],
  'Land & Leute': [
    { label: 'Staedte Ugandas', to: '/staedte' },
    { label: 'Der Nil in Uganda', to: '/der-nil-in-uganda' },
    { label: 'Sehenswuerdigkeiten', to: '/sehenswuerdigkeiten' },
    { label: 'Sipi Falls', to: '/sipi-falls' },
    { label: 'Nachbarlaender', to: '/nachbarlaender-uganda' },
    { label: 'Ugandische Rezepte', to: '/ugandische-kueche' },
    { label: 'Ugandischer Rolex', to: '/rolex-uganda' },
    { label: 'Ugandische Mahlzeit', to: '/ugandische-mahlzeit' },
    { label: 'Katogo Fruehstueck', to: '/katogo-fruehstueck' },
    { label: 'Sprachen in Uganda', to: '/sprachen-in-uganda' },
    { label: 'Ueber uns', to: '/ueber-uns' },
  ],
}

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-gray-950 text-white border-t border-white/5">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-jungle-800 to-jungle-950 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-jungle-400/10 rounded-full blur-3xl" />
          <div className="relative">
            <p className="text-gold-400/80 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4">Die Perle Afrikas</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Bereit fuer Uganda?
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Lass uns gemeinsam deine Traumreise in die Perle Afrikas planen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/rundreisen/14-tage" className="px-8 py-4 bg-gradient-to-r from-safari-500 to-safari-600 text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-safari-500/25 transition-all">
                Rundreisen entdecken
              </Link>
              <Link to="/reiseplanung/kosten" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold text-lg border border-white/15 hover:bg-white/20 transition-all">
                Kosten berechnen
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Kontakt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 py-6 border-b border-white/10">
          <a href="mailto:info@hopeontheroad.de" className="flex items-center gap-3 text-white/50 hover:text-gold-400 transition-colors group">
            <svg className="w-5 h-5 text-gold-400/60 group-hover:text-gold-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm font-medium">info@hopeontheroad.de</span>
          </a>
          <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-gold-400 transition-colors group">
            <svg className="w-5 h-5 text-gold-400/60 group-hover:text-gold-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
          <Link to="/ueber-uns" className="flex items-center gap-3 text-white/50 hover:text-gold-400 transition-colors group">
            <svg className="w-5 h-5 text-gold-400/60 group-hover:text-gold-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            <span className="text-sm font-medium">Ueber uns</span>
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-white/70 mb-4 tracking-[0.15em] uppercase">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-white/40 hover:text-gold-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <Link to="/" className="flex items-baseline gap-0.5">
            <span className="font-display text-lg font-bold tracking-tight text-white/70">Reiseziel</span>
            <span className="font-display text-lg font-light italic tracking-tight text-gold-400/60">Uganda</span>
          </Link>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>Ein Projekt von Hope on the Road gGmbH</span>
            <span>|</span>
            <Link to="/impressum" className="hover:text-white/50 transition-colors">Impressum</Link>
            <span className="text-white/15">|</span>
            <Link to="/ueber-uns" className="hover:text-white/50 transition-colors">Ueber uns</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
