/**
 * Erweiterungen bestehender Seiten aus content/erweiterungen/*.json.
 *
 * Warum es diese Schicht gibt: 212 der 261 Seiten liegen in gepflegten
 * JS-Datenmodulen (standalone-pages.js allein 149 Eintraege, 1,87 MB). Der
 * Publisher der HopePlatform kann dort nichts schreiben — Anwendungscode
 * programmatisch umzuschreiben waere die gefaehrlichste aller Varianten. Er
 * schreibt stattdessen eine reine JSON-Datei hierher, und die Seite rendert
 * sie zusaetzlich zu ihren eigenen Abschnitten.
 *
 * Damit gilt dieselbe Sicherheitszusage wie bei artikel-loader.js, nur
 * strenger: **gepflegter Inhalt kann gar nicht ueberschrieben werden.** Die
 * Datenmodule werden nie angefasst; eine Erweiterung kann ausschliesslich
 * HINTEN etwas ergaenzen.
 *
 * Dateiname = Slug ohne fuehrenden Schraegstrich, Schraegstriche als '__'.
 * Aus /regionen/entebbe wird also regionen__entebbe.json. Ein Punkt oder ein
 * echter Schraegstrich im Dateinamen kaeme nie aus einem Slug und wird beim
 * Schreiben abgewiesen.
 *
 * Node-Skripte (prerender, sitemap) koennen import.meta.glob nicht nutzen und
 * lesen dieselben Dateien ueber scripts/erweiterungs-dateien.mjs.
 */

const dateien = import.meta.glob('../../content/erweiterungen/*.json', { eager: true })

/** '/regionen/entebbe' → 'regionen__entebbe' */
export function dateiSchluessel(slug) {
  return String(slug ?? '').replace(/^\/+|\/+$/g, '').replace(/\//g, '__')
}

/** schluessel → Erweiterungsobjekt */
const nachSchluessel = Object.fromEntries(
  Object.entries(dateien).map(([pfad, modul]) => {
    const inhalt = modul.default ?? modul
    const schluessel = pfad.split('/').pop().replace(/\.json$/, '')
    return [schluessel, inhalt]
  }),
)

/**
 * Zusaetzliche Abschnitte fuer einen Slug. Leeres Array, wenn keine Erweiterung
 * vorliegt — der haeufige Fall, und er darf nichts kosten.
 *
 * Abschnitte, deren `id` die Seite schon fuehrt, werden verworfen. Damit bleibt
 * die Anzeige auch dann korrekt, wenn eine Erweiterung faelschlich einen
 * bestehenden Abschnitt wiederholt.
 */
export function erweiterungsAbschnitte(slug, vorhandeneAbschnitte) {
  const eintrag = nachSchluessel[dateiSchluessel(slug)]
  const neu = Array.isArray(eintrag?.sections) ? eintrag.sections : []
  if (!neu.length) return []

  const bekannt = new Set(
    (vorhandeneAbschnitte ?? []).map(a => a?.id).filter(Boolean),
  )
  return neu.filter(a => a?.title && (!a.id || !bekannt.has(a.id)))
}

/** Zusaetzliche FAQ-Eintraege, nach Frage entdoppelt. */
export function erweiterungsFaqs(slug, vorhandeneFaqs) {
  const eintrag = nachSchluessel[dateiSchluessel(slug)]
  const neu = Array.isArray(eintrag?.faqs) ? eintrag.faqs : []
  if (!neu.length) return []

  const bekannt = new Set((vorhandeneFaqs ?? []).map(f => f?.q ?? f?.question).filter(Boolean))
  return neu.filter(f => {
    const frage = f?.q ?? f?.question
    return frage && !bekannt.has(frage)
  })
}

/** Nur fuer Diagnose und Tests. */
export const erweiterungsSchluessel = Object.keys(nachSchluessel)
