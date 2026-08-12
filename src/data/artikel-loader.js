/**
 * Datengetriebene Artikel aus content/artikel/*.json.
 *
 * Der Publisher der HopePlatform schreibt dorthin eine JSON-Datei je Seite.
 * Sie wird beim Build eingelesen und mit den handgeschriebenen
 * standalonePages zusammengefuehrt — gerendert wird beides vom selben
 * StandalonePage → PageLayout.
 *
 * WICHTIG: bestehende Handseiten gewinnen. Traegt eine JSON-Datei denselben
 * Slug wie eine gepflegte Seite, bleibt die gepflegte Seite stehen. So kann
 * eine automatisch erzeugte Datei niemals bestehende Arbeit ueberschreiben.
 *
 * Node-Skripte (prerender, sitemap) koennen import.meta.glob nicht nutzen und
 * lesen dieselben Dateien ueber scripts/artikel-dateien.mjs.
 */
import { standalonePages } from './standalone-pages.js'

const dateien = import.meta.glob('../../content/artikel/*.json', { eager: true })

/** slug ohne fuehrenden Schraegstrich → Seitenobjekt */
export const artikelSeiten = Object.fromEntries(
  Object.entries(dateien).map(([pfad, modul]) => {
    const seite = modul.default ?? modul
    const slug = seite.slug?.replace(/^\//, '') || pfad.split('/').pop().replace(/\.json$/, '')
    return [slug, { ...seite, slug: `/${slug}` }]
  }),
)

/** Alles, was StandalonePage rendern kann. Handseiten zuletzt — sie gewinnen. */
export const alleSeiten = { ...artikelSeiten, ...standalonePages }
