/**
 * Sitemap-Generator fuer reiseziel-uganda.de
 * Generiert public/sitemap.xml automatisch aus der ROUTES-Liste in prerender.mjs.
 * Lastmod wird aus dem Datei-Aenderungsdatum der Quelldatei ermittelt.
 *
 * Aufruf: node scripts/generate-sitemap.mjs
 */

import { writeFileSync, readFileSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const prerenderSource = readFileSync(resolve(__dirname, 'prerender.mjs'), 'utf-8')
const routesMatch = prerenderSource.match(/const ROUTES = \[([\s\S]*?)\n\]/)
if (!routesMatch) {
  console.error('ROUTES nicht in prerender.mjs gefunden')
  process.exit(1)
}
const ROUTES = Array.from(routesMatch[1].matchAll(/'([^']+)'/g), m => m[1])

const BASE_URL = 'https://reiseziel-uganda.de'
const today = new Date().toISOString().split('T')[0]

function getMeta(route) {
  if (route === '/') return { priority: '1.0', changefreq: 'weekly' }
  if (['/gorilla-trekking', '/nationalparks-uganda', '/tiere-uganda', '/reiseplanung'].includes(route))
    return { priority: '0.9', changefreq: 'monthly' }
  if (route.startsWith('/nationalparks/') || route.startsWith('/regionen/') || route.startsWith('/tiere/'))
    return { priority: '0.8', changefreq: 'monthly' }
  if (route.startsWith('/reiseplanung/') || route.startsWith('/rundreisen/') || route.startsWith('/vergleiche/'))
    return { priority: '0.7', changefreq: 'monthly' }
  return { priority: '0.6', changefreq: 'monthly' }
}

function getLastmod(route) {
  const candidates = []
  if (route === '/') {
    candidates.push('src/pages/HomePage.jsx', 'src/App.jsx')
  } else if (route.startsWith('/nationalparks/')) {
    candidates.push('src/data/nationalparks.js')
  } else if (route.startsWith('/regionen/')) {
    candidates.push('src/data/regionen.js')
  } else if (route.startsWith('/tiere/')) {
    candidates.push('src/data/tiere.js')
  } else if (route.startsWith('/reiseplanung/')) {
    candidates.push('src/pages/ReiseplanungPage.jsx')
  } else if (route.startsWith('/rundreisen/')) {
    candidates.push('src/pages/RundreisenPage.jsx')
  } else if (route.startsWith('/vergleiche/')) {
    candidates.push('src/pages/VergleichPage.jsx')
  } else {
    candidates.push('src/data/standalone-pages.js')
  }
  for (const file of candidates) {
    try {
      const mtime = statSync(resolve(ROOT, file)).mtime
      return mtime.toISOString().split('T')[0]
    } catch {}
  }
  return today
}

console.log(`Generiere sitemap.xml fuer ${ROUTES.length} Routen...`)

const entries = ROUTES.map(route => {
  const { priority, changefreq } = getMeta(route)
  const lastmod = getLastmod(route)
  const loc = route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n\n')}\n</urlset>\n`

const outPath = resolve(ROOT, 'public', 'sitemap.xml')
writeFileSync(outPath, sitemap)
console.log(`Fertig: ${ROUTES.length} URLs -> public/sitemap.xml`)
