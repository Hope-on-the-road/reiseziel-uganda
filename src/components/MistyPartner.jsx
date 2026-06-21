import { Link } from 'react-router-dom'

export default function MistyPartner({ context = 'rundreise' }) {
  const contextText = {
    rundreise: 'Diese Route wird von unserem Partner Misty Gorilla Expeditions als massgeschneiderte Privattour angeboten -- mit erfahrenen Driver-Guides, handverlesenen Unterkuenften und persoenlicher Betreuung vor Ort.',
    gorilla: 'Misty Gorilla Expeditions organisiert dein Gorilla Trekking von der Permit-Buchung bis zur Lodge -- damit du dich ganz auf das Erlebnis konzentrieren kannst.',
    default: 'Unser Partner vor Ort organisiert massgeschneiderte Uganda-Reisen mit persoenlicher Betreuung, erfahrenen Guides und lokaler Expertise.',
  }

  return (
    <div className="my-12 sm:my-16 relative overflow-hidden">
      <div className="bg-gradient-to-br from-jungle-800 via-jungle-900 to-jungle-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-jungle-400/10 rounded-full blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
          {/* Content */}
          <div className="md:col-span-3">
            <p className="text-gold-400/80 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3">Unser Partner vor Ort</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
              Misty Gorilla Expeditions
            </h3>
            <p className="text-white/50 text-sm sm:text-[15px] leading-relaxed mb-5">
              {contextText[context] || contextText.default}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://mistygorillaexpeditions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-safari-500 to-safari-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-safari-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Tour anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a
                href="https://mistygorillaexpeditions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold text-sm border border-white/15 hover:bg-white/20 transition-all duration-300"
              >
                mistygorillaexpeditions.com
              </a>
            </div>
          </div>

          {/* Highlights */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {[
              { value: '10+', label: 'Jahre Erfahrung' },
              { value: '100%', label: 'Lokal gefuehrt' },
              { value: '4.9', label: 'Bewertung' },
              { value: '24/7', label: 'Betreuung vor Ort' },
            ].map(stat => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <div className="text-xl sm:text-2xl font-display font-bold text-gold-400">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
