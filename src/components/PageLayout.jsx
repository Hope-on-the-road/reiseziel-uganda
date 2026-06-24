import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import autoLinkText from '../utils/autolink.jsx'
import { photoAlt } from '../utils/photoAlt.js'
import Head from './seo/Head.jsx'
import { ArticleJsonLd, FaqJsonLd, BreadcrumbJsonLd, TouristDestinationJsonLd, RecipeJsonLd } from './seo/JsonLd.jsx'
import MistyPartner from './MistyPartner.jsx'

function imgRotationStyle(orientation) {
  if (!orientation) return {}
  if (orientation.includes('(90)')) return { transform: 'rotate(90deg)' }
  if (orientation.includes('(270)')) return { transform: 'rotate(-90deg)' }
  if (orientation.includes('(180)')) return { transform: 'rotate(180deg)' }
  return {}
}

function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
        <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Startseite</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            {item.href ? (
              <Link to={item.href} className="text-white/60 hover:text-white transition-colors">{item.label}</Link>
            ) : (
              <span className="text-white font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

function Kurzantwort({ text, currentSlug }) {
  if (!text) return null
  return (
    <div className="kurzantwort relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-lg shadow-jungle-900/5 border border-jungle-100">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-jungle-500 via-jungle-400 to-jungle-300 rounded-l-2xl sm:rounded-l-3xl" />
      <p className="text-[10px] sm:text-xs font-bold text-jungle-600 uppercase tracking-[0.2em] mb-2 sm:mb-3">Kurzantwort</p>
      <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-light">{autoLinkText(text, currentSlug)}</p>
    </div>
  )
}

function Faktenbox({ facts }) {
  if (!facts || facts.length === 0) return null
  return (
    <div className="faktenbox bg-gradient-to-br from-safari-50/80 to-earth-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-10 sm:mb-14 border border-safari-200/50">
      <h3 className="text-[10px] sm:text-xs font-bold text-safari-700 uppercase tracking-[0.2em] mb-5 sm:mb-6 flex items-center gap-2.5">
        <span className="w-8 h-px bg-safari-400" />
        Fakten auf einen Blick
      </h3>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {facts.map(f => (
          <div key={f.label} className="flex items-baseline gap-3 py-2.5 border-b border-safari-200/40 last:border-0">
            <dt className="text-xs text-safari-600/80 min-w-[100px] sm:min-w-[120px] shrink-0">{f.label}</dt>
            <dd className="text-sm sm:text-[15px] font-semibold text-gray-900">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function FaqSection({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null)
  if (!faqs || faqs.length === 0) return null

  return (
    <section id="faq" className="mt-16 sm:mt-24 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8 sm:mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 shrink-0">
          Haeufig gestellte Fragen
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
      </div>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
              openIdx === i
                ? 'bg-white shadow-lg shadow-safari-900/5 border border-safari-200'
                : 'bg-gray-50/80 border border-gray-100 hover:border-safari-200 hover:bg-white hover:shadow-md'
            }`}
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 text-left"
            >
              <span className="text-sm sm:text-[15px] font-semibold text-gray-900 pr-4">{faq.q}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                openIdx === i ? 'bg-safari-500 text-white rotate-180' : 'bg-gray-100 text-gray-400'
              }`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIdx === i ? 'max-h-96' : 'max-h-0'}`}>
              <div className="px-5 sm:px-7 pb-5 sm:pb-6 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function RelatedPages({ pages }) {
  if (!pages || pages.length === 0) return null
  return (
    <section className="mt-16 sm:mt-24">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Weiterlesen</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {pages.map(page => (
          <Link
            key={page.href}
            to={page.href}
            className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-safari-300 hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-safari-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h3 className="font-semibold text-gray-900 group-hover:text-safari-700 transition-colors mb-2 text-[15px]">{page.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{page.desc}</p>
              <div className="mt-4 text-safari-600 text-xs font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                Mehr erfahren
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function PhotoHero({ photo, title, subtitle, breadcrumbs }) {
  return (
    <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex items-end">
      {/* Background */}
      <div className="absolute inset-0">
        {photo?.thumbnail_url ? (
          <img src={photo.thumbnail_url} alt={title} className="w-full h-full object-cover" loading="eager" style={imgRotationStyle(photo.orientation)} />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-jungle-800 via-jungle-900 to-earth-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-10 pt-20 sm:pt-24">
        <Breadcrumb items={breadcrumbs || []} />
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-2 sm:mb-3 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

function ContentSection({ title, children, id, isFirst }) {
  return (
    <section id={id} className={`scroll-mt-24 ${isFirst ? 'mt-0' : 'mt-12 sm:mt-16'}`}>
      {title && (
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          {title}
        </h2>
      )}
      <div className="text-[15px] sm:text-base text-gray-600 leading-[1.8]">
        {children}
      </div>
    </section>
  )
}

function PhotoGallery({ photos, maxItems = 6 }) {
  if (!photos || photos.length === 0) return null
  const items = photos.filter(p => p.thumbnail_url).slice(0, maxItems)
  if (items.length === 0) return null

  const gridClass = items.length === 1
    ? 'grid-cols-1'
    : items.length === 2
    ? 'grid-cols-2'
    : items.length === 3
    ? 'grid-cols-2 sm:grid-cols-3'
    : 'grid-cols-2 sm:grid-cols-3'

  return (
    <div className={`grid ${gridClass} gap-3 sm:gap-4 my-8 sm:my-12`}>
      {items.map((photo, i) => (
        <div
          key={photo.id}
          className={`relative rounded-xl sm:rounded-2xl overflow-hidden group ${
            items.length === 3 && i === 0 ? 'col-span-2 sm:col-span-1 h-56 sm:h-72' :
            items.length >= 4 && i === 0 ? 'col-span-2 h-56 sm:h-72' :
            'h-48 sm:h-60'
          }`}
        >
          <img
            src={photo.thumbnail_url}
            alt={photoAlt(photo)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            style={imgRotationStyle(photo.orientation)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {photo.title && (
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1">
              {photo.title}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

function FullWidthPhotoStrip({ photos }) {
  if (!photos || photos.length < 2) return null
  const items = photos.filter(p => p.thumbnail_url).slice(0, 4)
  if (items.length < 2) return null

  return (
    <div className="my-12 sm:my-16 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="flex gap-2 sm:gap-3 overflow-hidden h-48 sm:h-64 md:h-80">
        {items.map(photo => (
          <div key={photo.id} className="flex-1 min-w-0 relative group">
            <img
              src={photo.thumbnail_url}
              alt={photoAlt(photo)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              style={imgRotationStyle(photo.orientation)}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  )
}

function Vergleichstabelle({ rows }) {
  if (!rows) return null

  // Format 2: Object with {title, headers, rows: [[...]]} (used by reiseplanung pages)
  if (!Array.isArray(rows) && rows.headers && rows.rows) {
    return (
      <div className="my-10 sm:my-14">
        {rows.title && (
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4">{rows.title}</h3>
        )}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-jungle-800 text-white">
                {rows.headers.map((h, i) => (
                  <th key={i} className={`text-left px-4 py-3 font-semibold ${i === 0 ? 'rounded-tl-xl' : ''} ${i === rows.headers.length - 1 ? 'rounded-tr-xl' : ''}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.rows.map((row, i) => (
                <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // Format 1: Array of {kriterium, col1, col2, vorteil} (used by vergleiche pages)
  if (!Array.isArray(rows) || rows.length === 0) return null

  // Detect column keys dynamically from first row
  const first = rows[0]
  const allKeys = Object.keys(first).filter(k => k !== 'kriterium' && k !== 'vorteil')
  const col1Key = allKeys[0] || 'uganda'
  const col2Key = allKeys[1] || 'kenia'
  const col1Label = { uganda: 'Uganda', kenia: 'Kenia', tansania: 'Tansania', ruanda: 'Ruanda', bwindi: 'Bwindi', volcanoes: 'Volcanoes' }[col1Key] || col1Key
  const col2Label = { uganda: 'Uganda', kenia: 'Kenia', tansania: 'Tansania', ruanda: 'Ruanda', bwindi: 'Bwindi', volcanoes: 'Volcanoes' }[col2Key] || col2Key

  return (
    <div className="my-10 sm:my-14 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-jungle-800 text-white">
            <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Kriterium</th>
            <th className="text-left px-4 py-3 font-semibold">{col1Label}</th>
            <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">{col2Label}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
              <td className="px-4 py-3 font-medium text-gray-900">{row.kriterium}</td>
              <td className={`px-4 py-3 ${row.vorteil === col1Key ? 'text-jungle-700 font-semibold' : 'text-gray-600'}`}>
                {row[col1Key]}
              </td>
              <td className={`px-4 py-3 ${row.vorteil === col2Key ? 'text-jungle-700 font-semibold' : 'text-gray-600'}`}>
                {row[col2Key]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function GerichteSection({ gerichte }) {
  if (!gerichte || gerichte.length === 0) return null
  return (
    <section className="mt-12 sm:mt-16">
      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 sm:mb-10">
        Die Gerichte
      </h2>
      <div className="space-y-10 sm:space-y-14">
        {gerichte.map((g, i) => (
          <div key={i} id={g.name?.toLowerCase().replace(/\s+/g, '-')} className="bg-gradient-to-br from-safari-50/50 to-earth-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-safari-200/30">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
                <span className="text-safari-500 mr-2">{i + 1}.</span>{g.name}
              </h3>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                {g.zeit && <span>{g.zeit}</span>}
                {g.schwierigkeit && <span className="px-2 py-0.5 bg-safari-100 text-safari-700 rounded-full">{g.schwierigkeit}</span>}
              </div>
            </div>
            {g.subtitle && <p className="text-safari-600 text-sm italic mb-4">{g.subtitle}</p>}
            {g.beschreibung && <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{g.beschreibung}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {g.zutaten && (
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em] mb-3">Zutaten</h4>
                  <ul className="space-y-1.5">
                    {g.zutaten.map((z, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-baseline gap-2">
                        <span className="w-1.5 h-1.5 bg-safari-400 rounded-full shrink-0 mt-1.5" />
                        {z}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {g.zubereitung && (
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em] mb-3">Zubereitung</h4>
                  <ol className="space-y-2">
                    {g.zubereitung.map((s, j) => (
                      <li key={j} className="text-sm text-gray-600 flex gap-3">
                        <span className="text-safari-500 font-bold shrink-0">{j + 1}.</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {g.tipps && (
              <p className="mt-5 pt-4 border-t border-safari-200/30 text-sm text-gray-500 italic">{g.tipps}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function QuellenSection({ quellen }) {
  if (!quellen || quellen.length === 0) return null
  return (
    <section className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em] mb-4">Quellen</h3>
      <ul className="space-y-1.5">
        {quellen.map((q, i) => (
          <li key={i} className="text-sm text-gray-400">{q}</li>
        ))}
      </ul>
    </section>
  )
}

function TableOfContents({ sections, faqs }) {
  const items = (sections || []).filter(s => s.title)
  if (items.length < 3) return null

  return (
    <nav aria-label="Inhaltsverzeichnis" className="mb-10 sm:mb-14 bg-gray-50/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-100">
      <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-3 sm:mb-4">Inhaltsverzeichnis</p>
      <ol className="space-y-1.5">
        {items.map((s, i) => (
          <li key={i}>
            <a
              href={`#${s.id || ''}`}
              className="flex items-baseline gap-2.5 text-sm text-gray-600 hover:text-jungle-700 transition-colors py-0.5"
            >
              <span className="text-[11px] text-gray-400 font-mono shrink-0">{String(i + 1).padStart(2, '0')}</span>
              {s.title}
            </a>
          </li>
        ))}
        {faqs?.length > 0 && (
          <li>
            <a href="#faq" className="flex items-baseline gap-2.5 text-sm text-gray-600 hover:text-jungle-700 transition-colors py-0.5">
              <span className="text-[11px] text-gray-400 font-mono shrink-0">{String(items.length + 1).padStart(2, '0')}</span>
              Haeufig gestellte Fragen
            </a>
          </li>
        )}
      </ol>
    </nav>
  )
}

function ReadingTime({ sections, kurzantwort }) {
  const text = (kurzantwort || '') + (sections || []).map(s => s.content).join(' ')
  const words = text.split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return (
    <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 sm:mb-10">
      <span>{minutes} Min. Lesezeit</span>
      <span className="w-1 h-1 bg-gray-300 rounded-full" />
      <span>{words.toLocaleString('de-DE')} Woerter</span>
    </div>
  )
}

function ShareBar({ title, slug }) {
  const url = `https://reiseziel-uganda.de${slug}`
  const text = `${title} -- Reiseziel Uganda`
  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex items-center gap-3 mt-12 mb-8 pt-8 border-t border-gray-100">
      <span className="text-xs text-gray-400 uppercase tracking-widest mr-2">Teilen</span>
      <a href={`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white text-gray-500 flex items-center justify-center transition-all" aria-label="Auf WhatsApp teilen">
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785c-1.794 0-3.555-.482-5.09-1.394l-.365-.217-3.786 .993 1.01-3.69-.238-.379A9.864 9.864 0 012.05 12.05c0-5.514 4.486-10 10-10 2.67 0 5.18 1.04 7.07 2.929A9.935 9.935 0 0122.05 12.05c-.004 5.514-4.49 10.004-10 10.004v-.269zm0-21.785C5.443 0 .05 5.393.05 12.05c0 2.12.553 4.19 1.605 6.017L.05 24l6.102-1.6A11.95 11.95 0 0012.05 24c6.607 0 12-5.393 12-12S18.657 0 12.05 0z"/></svg>
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-500 flex items-center justify-center transition-all" aria-label="Auf Facebook teilen">
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-safari-500 hover:text-white text-gray-500 flex items-center justify-center transition-all" aria-label="Per E-Mail teilen">
        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
      </a>
      <button onClick={copyLink} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-jungle-600 hover:text-white text-gray-500 flex items-center justify-center transition-all" aria-label="Link kopieren">
        {copied ? (
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        ) : (
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L5.25 9.879" /></svg>
        )}
      </button>
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-jungle-600 text-white shadow-lg shadow-jungle-600/30 hover:bg-jungle-700 transition-all flex items-center justify-center"
      aria-label="Nach oben scrollen"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  )
}

function AuthorBox() {
  return (
    <div className="mt-16 sm:mt-24 pt-8 sm:pt-10 border-t border-gray-200">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-jungle-500 to-jungle-700 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-jungle-500/20 shrink-0">RU</div>
        <div>
          <p className="text-sm sm:text-base font-semibold text-gray-900">Redaktion Reiseziel Uganda</p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
            Ein Projekt von <a href="https://hopeontheroad.de" target="_blank" rel="noopener noreferrer" className="text-jungle-700 hover:text-jungle-600 transition-colors">Hope on the Road gGmbH</a> -- mit lokaler Expertise aus Uganda und regelmaessiger Recherche vor Ort. Alle Inhalte werden von unserem Redaktionsteam mit Unterstuetzung lokaler Guides und Reiseveranstalter erstellt und geprueft.
          </p>
          <p className="text-[11px] sm:text-xs text-gray-400 mt-2">Zuletzt aktualisiert: Juni 2026 | Quellen werden am Ende jedes Artikels angegeben</p>
        </div>
      </div>
    </div>
  )
}

export default function PageLayout({ page, heroPhoto, contentPhotos = [] }) {
  const baseUrl = 'https://reiseziel-uganda.de'
  const breadcrumbItems = (page.breadcrumbs || []).map(b => ({
    ...b, url: b.href ? `${baseUrl}${b.href}` : undefined,
  }))

  const galleryPhotos = contentPhotos.filter(p => p.thumbnail_url)

  // Distribute unique photos across showPhotos sections (2 per section, non-overlapping)
  const sectionPhotoMap = (() => {
    const map = new Map()
    let offset = 0
    ;(page.sections || []).forEach((section, i) => {
      if (section.showPhotos) {
        const slice = galleryPhotos.slice(offset, offset + 2)
        if (slice.length > 0) map.set(i, slice)
        offset += 2
      }
    })
    return map
  })()
  const usedPhotoCount = sectionPhotoMap.size * 2
  const stripPhotos = galleryPhotos.slice(usedPhotoCount, usedPhotoCount + 4)

  return (
    <>
      <Head
        title={page.title}
        description={page.metaDescription}
        canonical={`${baseUrl}${page.slug}`}
        ogImage={heroPhoto?.thumbnail_url}
        publishedTime={page.publishedTime}
        modifiedTime={page.modifiedTime}
      />
      <ArticleJsonLd
        title={page.title}
        description={page.metaDescription}
        datePublished={page.publishedTime || '2026-06-01'}
        dateModified={page.modifiedTime || page.publishedTime || '2026-06-07'}
        url={`${baseUrl}${page.slug}`}
        image={heroPhoto?.thumbnail_url}
      />
      {page.faqs?.length > 0 && <FaqJsonLd faqs={page.faqs} />}
      <BreadcrumbJsonLd items={[{ name: 'Startseite', url: baseUrl }, ...breadcrumbItems.map(b => ({ name: b.label, url: b.url })), { name: page.title }]} />
      {page.isTouristDestination && (
        <TouristDestinationJsonLd
          name={page.h1}
          description={page.metaDescription}
          url={`${baseUrl}${page.slug}`}
          image={heroPhoto?.thumbnail_url}
        />
      )}
      {page.gerichte?.map((g, i) => g.zutaten && g.zubereitung && (
        <RecipeJsonLd
          key={i}
          name={g.name}
          description={g.beschreibung}
          ingredients={g.zutaten}
          instructions={g.zubereitung}
          prepTime={g.zeit ? `PT${parseInt(g.zeit) || 30}M` : undefined}
          keywords={`${g.name}, Ugandische Kueche, Uganda Rezept`}
        />
      ))}

      <div className="min-h-screen bg-white">
        <PhotoHero photo={heroPhoto} title={page.h1} subtitle={page.subtitle} breadcrumbs={page.breadcrumbs} />

        <div className="relative">
          {/* Decorative top overlap */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
            <ReadingTime sections={page.sections} kurzantwort={page.kurzantwort} />
            <Kurzantwort text={page.kurzantwort} currentSlug={page.slug} />
            <Faktenbox facts={page.fakten} />
            <TableOfContents sections={page.sections} faqs={page.faqs} />

            {page.sections?.map((section, i) => (
              <ContentSection key={i} title={section.title} id={section.id} isFirst={i === 0 && !page.kurzantwort && !page.fakten}>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} className="mb-5">{autoLinkText(para, page.slug)}</p>
                ))}
                {sectionPhotoMap.has(i) && (
                  <PhotoGallery photos={sectionPhotoMap.get(i)} maxItems={2} />
                )}
              </ContentSection>
            ))}

            {stripPhotos.length > 0 && (
              <FullWidthPhotoStrip photos={stripPhotos} />
            )}

            <Vergleichstabelle rows={page.vergleichstabelle} />
            <GerichteSection gerichte={page.gerichte} />

            {page.hidePartner !== true && (
              <MistyPartner context={page.partnerContext || 'default'} />
            )}

            <FaqSection faqs={page.faqs} />
            <RelatedPages pages={page.related} />
            <QuellenSection quellen={page.quellen} />
            <ShareBar title={page.title} slug={page.slug} />
            <AuthorBox />
          </article>
        </div>
        <BackToTop />
      </div>
    </>
  )
}

export { ContentSection, PhotoGallery, Faktenbox, Kurzantwort, FaqSection, PhotoHero, Breadcrumb, RelatedPages, AuthorBox, FullWidthPhotoStrip }
