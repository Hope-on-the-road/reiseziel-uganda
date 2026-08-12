/**
 * Dieselben Artikel-JSONs wie src/data/artikel-loader.js — aber fuer Node.
 *
 * prerender.mjs und generate-sitemap.mjs laufen ausserhalb von Vite und
 * koennen import.meta.glob nicht verwenden. Beide lesen deshalb hier.
 * Eine Quelle (content/artikel/*.json), zwei Zugriffswege.
 */
import { readdirSync, readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const VERZEICHNIS = resolve(dirname(fileURLToPath(import.meta.url)), '../content/artikel')

/** [{ slug: '/foo', ...seite }] — leer, solange der Publisher nichts geschrieben hat. */
export function ladeArtikel() {
  if (!existsSync(VERZEICHNIS)) return []
  return readdirSync(VERZEICHNIS)
    .filter(d => d.endsWith('.json'))
    .map(d => {
      const seite = JSON.parse(readFileSync(resolve(VERZEICHNIS, d), 'utf-8'))
      const slug = String(seite.slug ?? d.replace(/\.json$/, '')).replace(/^\//, '')
      return { ...seite, slug: `/${slug}` }
    })
}

/** Nur die Routen — fuer ROUTES in prerender.mjs. */
export function artikelRouten() {
  return ladeArtikel().map(a => a.slug)
}
