/**
 * Prerender-Skript fuer reiseziel-uganda.de
 *
 * Rendert alle Routen als statisches HTML, damit SEO-Crawler
 * (Seobility, Ahrefs, Bing) den Content sehen koennen.
 *
 * Ablauf:
 * 1. vite build (normaler Build)
 * 2. Lokaler Server startet auf dist/
 * 3. Puppeteer rendert jede Route
 * 4. HTML wird als index.html in den jeweiligen Ordner geschrieben
 * 5. React hydration uebernimmt im Browser
 */

import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '..', 'dist')
const PORT = 4173

const ROUTES = [
  '/gorilla-trekking',
  '/reiseplanung',
  '/nationalparks-uganda',
  '/tiere-uganda',
  '/tiere',
  '/nationalparks',
  '/regionen',
  '/rundreisen',
  '/land-und-leute',
  '/ugandische-kueche',
  '/flughaefen-uganda',
  '/nachbarlaender-uganda',
  '/wirtschaft-uganda',
  '/staedte',
  '/der-nil-in-uganda',
  '/welche-tiere-leben-im-viktoriasee',
  '/sehenswuerdigkeiten',
  '/sipi-falls',
  '/spenden',
  '/butiru-freundeskreis',
  '/rolex-uganda',
  '/ugandische-mahlzeit',
  '/katogo-fruehstueck',
  '/uganda-ostafrika-vergleich',
  '/beste-reisezeit-uganda',
  '/primaten-uganda',
  '/schimpansen-trekking',
  '/uganda-als-frau-allein-reisen',
  '/uganda-mit-kindern',
  '/sprachen-in-uganda',
  '/gorilla-trekking-erfahrungsbericht',
  '/ueber-uns',
  '/impressum',
  '/nationalparks/bwindi',
  '/nationalparks/queen_elizabeth',
  '/nationalparks/murchison_falls',
  '/nationalparks/kibale',
  '/nationalparks/kidepo',
  '/nationalparks/mt_elgon',
  '/nationalparks/lake_mburo',
  '/nationalparks/mgahinga',
  '/nationalparks/semuliki',
  '/tiere/berggorilla',
  '/tiere/schimpanse',
  '/tiere/schuhschnabel',
  '/tiere/loewe',
  '/tiere/leopard',
  '/tiere/elefant',
  '/tiere/bueffel',
  '/tiere/nashorn',
  '/tiere/flusspferd',
  '/tiere/kronenkranich',
  '/tiere/rothschild-giraffe',
  '/tiere/krokodil',
  '/regionen/buhoma',
  '/regionen/entebbe',
  '/regionen/kampala',
  '/regionen/jinja',
  '/regionen/fort-portal',
  '/regionen/kabale',
  '/regionen/lake-bunyonyi',
  '/regionen/rwenzori',
  '/regionen/kraterseen',
  '/regionen/ssese-islands',
  '/regionen/kasese',
  '/erlebnisse/vogelbeobachten-uganda',
  '/erlebnisse/rwenzori-marathon',
  '/rwenzori-vs-kilimanjaro',
  '/rwenzori-trekking',
  '/fort-portal-reisefuehrer',
  '/sempaya-hot-springs',
  '/kiwa-hot-springs',
  '/karamoja-vs-rwenzori',
  '/tooro-koenigspalast',
  '/uganda-tourismus-2030',
  '/kultur/bakonzo-volk',
  '/kultur/tooro-koenigreich',
  '/gorilla-permit-verfuegbarkeit',
  '/schimpansen-habituation-chex',
  '/uganda-nebensaison',
  '/uganda-fuer-deutsche',
  '/uganda-tourismus-statistik',
  '/pangolin-uganda',
  '/berggorilla-naturschutz',
  '/gorilla-arten-uganda',
  '/gorilla-trekking-buhoma',
  '/gorilla-population-uganda',
  '/unterkunft-uganda',
  '/lodges-bwindi-lake-bunyonyi',
  '/hotels-uganda-regionen',
  '/oekotourismus-uganda',
  '/bodaboda-buhoma',
  '/inseln-lake-bunyonyi',
  '/kabale-bwindi',
  '/gorilla-familien-bwindi',
  '/gorilla-trekking-sicherheit',
  '/lake-bunyonyi-community',
  '/vulkane-mgahinga',
  '/kisoro',
  '/leonard-sharp-bwama-island',
  '/community-tourismus-bwindi',
  '/anreise-bwindi',
  '/bwindi-wellness',
  '/lake-mutanda-mulehe',
  '/batwa-trail-uganda',
  '/virunga-conservation-area',
  '/vogelbeobachten-kibale-bigodi',
  '/mabira-forest-voegel',
  '/baumkletternde-loewen',
  '/nashorn-rueckkehr-uganda',
  '/goldene-affen-uganda',
  '/grauer-papagei-uganda',
  '/derby-eland-uganda',
  '/colobus-affe-uganda',
  '/uganda-kob-antilope',
  '/elefanten-safari-uganda',
  '/nilpferd-safari-uganda',
  '/nilkrokodil-uganda',
  '/nubische-giraffe-uganda',
  '/leoparden-uganda',
  '/chamaelaeon-uganda',
  '/python-uganda',
  '/schuhschnabel-mabamba',
  '/strauss-kidepo',
  '/walking-safari-uganda',
  '/nachtsafari-uganda',
  '/boot-safari-uganda',
  '/elefanten-tracking-uganda',
  '/reptilien-uganda',
  '/primate-tracking-uganda',
  '/kidepo-safari-guide',
  '/vogelbeobachten-queen-elizabeth',
  '/wilderei-uganda',
  '/gorilla-trekking-ethik',
  '/bushmeat-uganda',
  '/human-wildlife-conflict-uganda',
  '/cites-uganda',
  '/elfenbein-schmuggel-uganda',
  '/greater-virunga-collaboration',
  '/uwa-anti-poaching',
  '/revenue-sharing-nationalparks-uganda',
  '/klimawandel-wildlife-uganda',
  '/ranger-uganda',
  '/wildtier-zahlen-2025',
  '/kidepo-nashorn-2025',
  '/ziwa-rhino-sanctuary',
  '/mt-elgon-trekking-guide',
  '/semuliki-tieflandregenwald',
  '/lake-mburo-zebra-safari',
  '/mgahinga-vs-bwindi',
  '/pian-upe-wildlife-reserve',
  '/tiere-ugandische-kultur',
  '/bamasaba-colobus-tradition',
  '/wildtier-wirtschaft-uganda',
  '/problem-animal-management-uganda',
  '/zoonosen-wildlife-uganda',
  '/illegaler-holzeinschlag-uganda',
  '/wildlife-crime-terrorismus-uganda',
  '/bushara-island-camp',
  '/grenzen-uganda-ruanda-kongo',
  '/packliste-gorilla-tracking-uganda',
  '/hotel-ruanda-geschichte-kigalis',
  '/lodges-murchison-falls',
  '/gorilla-trekking-budget-bwindi',
  '/nachhaltiger-tourismus-uganda',
  '/duerre-armut-uganda',
  '/bwindi-artenvielfalt',
  '/umweltaudit-uganda',
  '/nema-umweltschutz-uganda',
  '/jinja-sehenswuerdigkeiten',
  '/murchison-falls-nationalpark',
  '/murchison-nationalpark',
  '/jinja',
  '/hauptstadt-ugandas',
  '/gorilla-permit-kosten',
  '/kigali-nach-kampala',
  '/bwindi-gorilla-reisefuehrer',
  '/schimpansen-tracking-kyambura-gorge',
  '/ruanda/akagera-nationalpark',
  '/reiseplanung/visa',
  '/reiseplanung/impfungen',
  '/reiseplanung/beste-reisezeit',
  '/reiseplanung/kosten',
  '/reiseplanung/sicherheit',
  '/reiseplanung/transport',
  '/reiseplanung/internet',
  '/reiseplanung/geld',
  '/reiseplanung/malaria',
  '/reiseplanung/packliste',
  '/reiseplanung/trinkgeld',
  '/reiseplanung/steckdosen',
  '/rundreisen/7-tage',
  '/rundreisen/10-tage',
  '/rundreisen/14-tage',
  '/rundreisen/21-tage',
  '/vergleiche/uganda-vs-kenia',
  '/vergleiche/uganda-vs-tansania',
  '/vergleiche/uganda-vs-ruanda',
  '/vergleiche/bwindi-vs-volcanoes',
  '/',  // Homepage zuletzt -- ueberschreibt index.html
]

// Simple static file server
function startServer() {
  return new Promise((resolve) => {
    // Read index.html ONCE before prerendering starts (avoids conflict when / overwrites it)
    const indexHtml = readFileSync(join(DIST, 'index.html'), 'utf-8')

    const server = createServer((req, res) => {
      const urlPath = req.url.split('?')[0]
      let filePath = join(DIST, urlPath)

      // SPA fallback -- serve index.html for all HTML requests
      if (!existsSync(filePath) || !filePath.includes('.')) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(indexHtml)
        return
      }

      try {
        const content = readFileSync(filePath)
        const ext = filePath.split('.').pop()
        const types = {
          js: 'application/javascript',
          css: 'text/css',
          svg: 'image/svg+xml',
          png: 'image/png',
          json: 'application/json',
          webmanifest: 'application/manifest+json',
          txt: 'text/plain',
          xml: 'application/xml',
        }
        res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' })
        res.end(content)
      } catch {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(indexHtml)
      }
    })

    server.listen(PORT, () => resolve(server))
  })
}

const CONCURRENCY = 6

async function renderRoute(browser, route, counters) {
  try {
    const page = await browser.newPage()

    await page.setRequestInterception(true)
    page.on('request', (req) => {
      if (['image', 'font'].includes(req.resourceType())) {
        req.abort()
      } else {
        req.continue()
      }
    })

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'load',
      timeout: 15000,
    })

    await page.waitForSelector('h1, h2, .kurzantwort, [class*="Hero"]', { timeout: 6000 }).catch(() => {})
    await new Promise(r => setTimeout(r, 200))

    let html = await page.content()
    html = html.replace(/http:\/\/localhost:\d+/g, 'https://reiseziel-uganda.de')

    const dir = route === '/' ? DIST : join(DIST, route)
    mkdirSync(dir, { recursive: true })
    const filePath = route === '/' ? join(DIST, 'index.html') : join(dir, 'index.html')
    writeFileSync(filePath, html)

    counters.success++
    process.stdout.write(`  [${counters.success}/${ROUTES.length}] ${route}\n`)

    await page.close()
  } catch (err) {
    counters.failed++
    console.error(`  FEHLER ${route}: ${err.message}`)
  }
}

async function prerender() {
  console.log(`\nPrerendering ${ROUTES.length} routes (concurrency: ${CONCURRENCY})...\n`)

  const server = await startServer()
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const counters = { success: 0, failed: 0 }

  for (let i = 0; i < ROUTES.length; i += CONCURRENCY) {
    const batch = ROUTES.slice(i, i + CONCURRENCY)
    await Promise.all(batch.map(route => renderRoute(browser, route, counters)))
  }

  await browser.close()
  server.close()

  console.log(`\nFertig: ${counters.success} gerendert, ${counters.failed} Fehler\n`)
}

prerender().catch(console.error)
