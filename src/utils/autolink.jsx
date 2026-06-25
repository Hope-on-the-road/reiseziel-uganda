import React from 'react'
import { Link } from 'react-router-dom'

// Sorted longest-first so multi-word terms match before single-word ones
const LINK_RULES = [
  { pattern: /Bwindi\s+Impenetrable/gi, path: '/nationalparks/bwindi' },
  { pattern: /Oekotourismus[\s-](?:in\s+)?Uganda/gi, path: '/oekotourismus-uganda' },
  { pattern: /\bOekotourismus\b/gi, path: '/oekotourismus-uganda' },
  { pattern: /Community[\s-]Lodges?\s+(?:in\s+)?Uganda/gi, path: '/oekotourismus-uganda' },
  { pattern: /Unterkuenfte\s+(?:in\s+)?Uganda/gi, path: '/unterkunft-uganda' },
  { pattern: /Lodges?\s+(?:in\s+)?Bwindi/gi, path: '/lodges-bwindi-lake-bunyonyi' },
  { pattern: /Lake[\s-]Bunyonyi[\s-](?:Lodge|Unterkunft)/gi, path: '/lodges-bwindi-lake-bunyonyi' },
  { pattern: /Inseln\s+(?:des\s+)?Lake\s+Bunyonyi/gi, path: '/inseln-lake-bunyonyi' },
  { pattern: /\bBwama\s+Island\b/gi, path: '/inseln-lake-bunyonyi' },
  { pattern: /\bPunishment\s+Island\b/gi, path: '/inseln-lake-bunyonyi' },
  { pattern: /\bAkampene\b/gi, path: '/inseln-lake-bunyonyi' },
  { pattern: /Gorilla[\s-]Unterarten/gi, path: '/gorilla-arten-uganda' },
  { pattern: /Gorilla[\s-]Arten\b/gi, path: '/gorilla-arten-uganda' },
  { pattern: /Berggorilla[\s-]Population/gi, path: '/gorilla-population-uganda' },
  { pattern: /BodaBoda[\s-](?:Fahrer|Taxi|Tour|Transport)\s+(?:in\s+)?Buhoma/gi, path: '/bodaboda-buhoma' },
  { pattern: /BodaBoda[\s-](?:in\s+)?Buhoma/gi, path: '/bodaboda-buhoma' },
  { pattern: /\bBodaBoda\b/gi, path: '/bodaboda-buhoma' },
  { pattern: /Gorilla[\s-]Trekking\s+(?:von\s+|in\s+)?Buhoma/gi, path: '/gorilla-trekking-buhoma' },
  { pattern: /Gorilla[\s-]Familien\s+(?:in\s+)?Bwindi/gi, path: '/gorilla-familien-bwindi' },
  { pattern: /habituierte[n]?\s+Gorilla[\s-]Familien?/gi, path: '/gorilla-familien-bwindi' },
  { pattern: /Gorilla[\s-]Trekking[\s-]Sicherheit/gi, path: '/gorilla-trekking-sicherheit' },
  { pattern: /Massaker\s+(?:von\s+|in\s+)?Bwindi/gi, path: '/gorilla-trekking-sicherheit' },
  { pattern: /(?:von\s+)?Kabale\s+(?:nach\s+)?Bwindi/gi, path: '/kabale-bwindi' },
  { pattern: /Vulkane\s+(?:im\s+)?Mgahinga/gi, path: '/vulkane-mgahinga' },
  { pattern: /\bMuhavura\b/gi, path: '/vulkane-mgahinga' },
  { pattern: /\bSabinyo\b/gi, path: '/vulkane-mgahinga' },
  { pattern: /\bGahinga\b/gi, path: '/vulkane-mgahinga' },
  { pattern: /Community[\s-]Tourismus\s+(?:am\s+)?Lake\s+Bunyonyi/gi, path: '/lake-bunyonyi-community' },
  { pattern: /Bushara\s+Island(?:\s+Camp)?/gi, path: '/lake-bunyonyi-community' },
  { pattern: /Leonard\s+Sharp/gi, path: '/leonard-sharp-bwama-island' },
  { pattern: /Bwama\s+Island[\s-]Krankenhaus/gi, path: '/leonard-sharp-bwama-island' },
  { pattern: /Community[\s-]Tourismus\s+(?:in\s+)?Bwindi/gi, path: '/community-tourismus-bwindi' },
  { pattern: /Ride\s+4\s+a\s+Woman/gi, path: '/community-tourismus-bwindi' },
  { pattern: /Anreise\s+(?:nach\s+|zum?\s+)?Bwindi/gi, path: '/anreise-bwindi' },
  { pattern: /Bwindi[\s-]Wellness/gi, path: '/bwindi-wellness' },
  { pattern: /Lake\s+Mutanda/gi, path: '/lake-mutanda-mulehe' },
  { pattern: /Lake\s+Mulehe/gi, path: '/lake-mutanda-mulehe' },
  { pattern: /Chameleon\s+Hill\s+Lodge/gi, path: '/lake-mutanda-mulehe' },
  { pattern: /\bBatwa[\s-]Trail\b/gi, path: '/batwa-trail-uganda' },
  { pattern: /\bBatwa\b/gi, path: '/batwa-trail-uganda' },
  { pattern: /Virunga\s+Conservation\s+Area/gi, path: '/virunga-conservation-area' },
  { pattern: /Senkwekwe[\s-]Center/gi, path: '/virunga-conservation-area' },
  { pattern: /Bigodi\s+Wetlands?/gi, path: '/vogelbeobachten-kibale-bigodi' },
  { pattern: /Vogelbeobacht(?:en|ung)\s+(?:bei|im)\s+Kibale/gi, path: '/vogelbeobachten-kibale-bigodi' },
  { pattern: /Katonga\s+Wildlife\s+Reserve/gi, path: '/vogelbeobachten-kibale-bigodi' },
  { pattern: /Mabira\s+Forest/gi, path: '/mabira-forest-voegel' },
  { pattern: /Bushara\s+Island\s+Camp/gi, path: '/bushara-island-camp' },
  { pattern: /\bLBDC\b/gi, path: '/bushara-island-camp' },
  { pattern: /Grenzen?\s+(?:Uganda[s]?\s+(?:zu|nach|in|Richtung)\s+)?(?:Ruanda|Kongo)/gi, path: '/grenzen-uganda-ruanda-kongo' },
  { pattern: /\bCyanika\b/gi, path: '/grenzen-uganda-ruanda-kongo' },
  { pattern: /\bBunagana\b/gi, path: '/grenzen-uganda-ruanda-kongo' },
  { pattern: /\bKatuna\b|\bGatuna\b/gi, path: '/grenzen-uganda-ruanda-kongo' },
  { pattern: /Packliste\s+(?:fuer\s+)?(?:das\s+)?Gorilla[\s-]Trekking/gi, path: '/packliste-gorilla-tracking-uganda' },
  { pattern: /H[oô]tel\s+(?:des\s+Mille\s+Collines|Ruanda)/gi, path: '/hotel-ruanda-geschichte-kigalis' },
  { pattern: /Mille\s+Collines/gi, path: '/hotel-ruanda-geschichte-kigalis' },
  { pattern: /\bKigali\b/gi, path: '/hotel-ruanda-geschichte-kigalis' },
  { pattern: /\bKisoro\b/gi, path: '/kisoro' },
  { pattern: /Gorilla[\s-]Trekking/gi, path: '/gorilla-trekking' },
  { pattern: /Murchison\s+Falls/gi, path: '/nationalparks/murchison_falls' },
  { pattern: /Queen\s+Elizabeth/gi, path: '/nationalparks/queen_elizabeth' },
  { pattern: /Kazinga[\s-]Kanal/gi, path: '/nationalparks/queen_elizabeth' },
  { pattern: /Kibale\s+Forest/gi, path: '/nationalparks/kibale' },
  { pattern: /Kidepo\s+Valley/gi, path: '/nationalparks/kidepo' },
  { pattern: /Mount\s+Elgon/gi, path: '/nationalparks/mt_elgon' },
  { pattern: /Mt\.\s*Elgon/gi, path: '/nationalparks/mt_elgon' },
  { pattern: /Lake\s+Mburo/gi, path: '/nationalparks/lake_mburo' },
  { pattern: /Lake\s+Bunyonyi/gi, path: '/regionen/lake-bunyonyi' },
  { pattern: /Sipi\s+Falls/gi, path: '/nationalparks/mt_elgon' },
  { pattern: /Fort\s+Portal/gi, path: '/regionen/fort-portal' },
  { pattern: /\bBwindi\b/gi, path: '/nationalparks/bwindi' },
  { pattern: /\bKibale\b/gi, path: '/nationalparks/kibale' },
  { pattern: /\bKidepo\b/gi, path: '/nationalparks/kidepo' },
  { pattern: /\bMgahinga\b/gi, path: '/nationalparks/mgahinga' },
  { pattern: /\bSemuliki\b/gi, path: '/nationalparks/semuliki' },
  { pattern: /\bBerggorillas?\b/g, path: '/tiere/berggorilla' },
  { pattern: /\bSchimpansen?\b/g, path: '/tiere/schimpanse' },
  { pattern: /\bSchuhschnabel\b/g, path: '/tiere/schuhschnabel' },
  { pattern: /\bLoewen?\b/g, path: '/tiere/loewe' },
  { pattern: /\bLeoparden?\b/g, path: '/tiere/leopard' },
  { pattern: /\bElefanten?\b/g, path: '/tiere/elefant' },
  { pattern: /\b(?:Kap)?[Bb]ueffel\b/g, path: '/tiere/bueffel' },
  { pattern: /\bNashorn\b/gi, path: '/tiere/nashorn' },
  { pattern: /\bNashoerner\b/gi, path: '/tiere/nashorn' },
  { pattern: /\bBreitmaulnashorn\b/gi, path: '/tiere/nashorn' },
  { pattern: /\bBig\s+Five\b/gi, path: '/tiere' },
  { pattern: /Rwenzori[\s-]Berge/gi, path: '/regionen/rwenzori' },
  { pattern: /\bRwenzori\b/gi, path: '/regionen/rwenzori' },
  { pattern: /Ssese[\s-]Inseln/gi, path: '/regionen/ssese-islands' },
  { pattern: /Rothschild[\s-]Giraffe/gi, path: '/tiere/rothschild-giraffe' },
  { pattern: /Malaria[\s-]Prophylaxe/gi, path: '/reiseplanung/malaria' },
  { pattern: /\bMalaria\b/gi, path: '/reiseplanung/malaria' },
  { pattern: /\bPackliste\b/gi, path: '/reiseplanung/packliste' },
  { pattern: /\bTrinkgeld\b/gi, path: '/reiseplanung/trinkgeld' },
  { pattern: /\bFlusspferd[e]?\b/gi, path: '/tiere/flusspferd' },
  { pattern: /\bNilpferd[e]?\b/gi, path: '/tiere/flusspferd' },
  { pattern: /\bKronenkranich[e]?\b/gi, path: '/tiere/kronenkranich' },
  { pattern: /\bKrokodil[e]?\b/gi, path: '/tiere/krokodil' },
  { pattern: /\bGiraffen?\b/gi, path: '/tiere/rothschild-giraffe' },
  { pattern: /\bKraterseen\b/gi, path: '/regionen/kraterseen' },
  { pattern: /\bEntebbe\b/gi, path: '/regionen/entebbe' },
  { pattern: /\bKampala\b/gi, path: '/regionen/kampala' },
  { pattern: /\bJinja\b/gi, path: '/regionen/jinja' },
  { pattern: /Rwenzori[\s-]Marathon/gi, path: '/erlebnisse/rwenzori-marathon' },
  { pattern: /Vogelbeobacht(?:en|ung)\s+in\s+Uganda/gi, path: '/erlebnisse/vogelbeobachten-uganda' },
  { pattern: /\bTheluji[\s-]Festival\b/gi, path: '/erlebnisse/rwenzori-marathon' },
  { pattern: /Kiwa\s+Hot\s+Springs/gi, path: '/kiwa-hot-springs' },
  { pattern: /Sempaya\s+Hot\s+Springs/gi, path: '/sempaya-hot-springs' },
  { pattern: /Kilembe\s+(?:Copper\s+)?Mines?/gi, path: '/regionen/kasese' },
  { pattern: /\bKasese\b/gi, path: '/regionen/kasese' },
  { pattern: /Rwenzori\s+vs\.?\s+Kilimanjaro/gi, path: '/rwenzori-vs-kilimanjaro' },
  { pattern: /Tooro[\s-](?:Koenigs)?palast/gi, path: '/tooro-koenigspalast' },
  { pattern: /Karuziika\s+Palace/gi, path: '/tooro-koenigspalast' },
  { pattern: /\bKoenig\s+Oyo\b/gi, path: '/tooro-koenigspalast' },
  { pattern: /Rwenzori[\s-](?:Destination[\s-])?(?:Management[\s-])?Plan/gi, path: '/uganda-tourismus-2030' },
  { pattern: /Rwenzururu[\s-](?:Kingdom|Koenigreich)/gi, path: '/kultur/bakonzo-volk' },
  { pattern: /\bBakonzo\b/gi, path: '/kultur/bakonzo-volk' },
  { pattern: /Tooro[\s-]Koenigreich/gi, path: '/kultur/tooro-koenigreich' },
  { pattern: /\bBatooro\b/gi, path: '/kultur/tooro-koenigreich' },
  { pattern: /Gorilla[\s-]Permit[\s-]Verf[uü]gbarkeit/gi, path: '/gorilla-permit-verfuegbarkeit' },
  { pattern: /\bCHEX\b/g, path: '/schimpansen-habituation-chex' },
  { pattern: /Schimpansen[\s-]Habituation[\s-]Experience/gi, path: '/schimpansen-habituation-chex' },
  { pattern: /Uganda[\s-]Nebensaison/gi, path: '/uganda-nebensaison' },
  { pattern: /Uganda[\s-]f[uü]r[\s-]Deutsche/gi, path: '/uganda-fuer-deutsche' },
  { pattern: /Tourismus[\s-]Statistik[\s-]2025/gi, path: '/uganda-tourismus-statistik' },
  { pattern: /MTWA[\s-]Statistical[\s-]Abstract/gi, path: '/uganda-tourismus-statistik' },
  { pattern: /\bPangolin\b/gi, path: '/pangolin-uganda' },
  { pattern: /baumkletternde[s\s-]L[oö]wen/gi, path: '/baumkletternde-loewen' },
  { pattern: /Goldene[s\s-]Affen?/gi, path: '/goldene-affen-uganda' },
  { pattern: /Grauer[s\s-]Papagei/gi, path: '/grauer-papagei-uganda' },
  { pattern: /\bColobus\b/gi, path: '/colobus-affe-uganda' },
  { pattern: /Uganda[s\s-]Kob/gi, path: '/uganda-kob-antilope' },
  { pattern: /Nubische[s\s-]Giraffe/gi, path: '/nubische-giraffe-uganda' },
  { pattern: /Ziwa[s\s-]Rhino/gi, path: '/ziwa-rhino-sanctuary' },
  { pattern: /Walking[s\s-]Safari/gi, path: '/walking-safari-uganda' },
  { pattern: /Gorilla[\s-]Trekking[\s-]Budget|Budget[\s-]Gorilla[\s-]Trekking/gi, path: '/gorilla-trekking-budget-bwindi' },
  { pattern: /Nebensaison.*Permit|Permit.*Nebensaison/gi, path: '/gorilla-trekking-budget-bwindi' },
  { pattern: /Kyambura\s+Gorge/gi, path: '/schimpansen-tracking-kyambura-gorge' },
  { pattern: /Kyambura[\s-]Schlucht/gi, path: '/schimpansen-tracking-kyambura-gorge' },
  { pattern: /Fig\s+Tree\s+Camp/gi, path: '/schimpansen-tracking-kyambura-gorge' },
  { pattern: /Primate[s\s-]Tracking/gi, path: '/primate-tracking-uganda' },
  { pattern: /Revenue[s\s-]Sharing/gi, path: '/revenue-sharing-nationalparks-uganda' },
  { pattern: /Human[s\s-]Wildlife[s\s-]Conflict|\bHWC\b/gi, path: '/human-wildlife-conflict-uganda' },
  { pattern: /\bCITES\b/g, path: '/cites-uganda' },
  { pattern: /Greater[s\s-]Virunga/gi, path: '/greater-virunga-collaboration' },
  { pattern: /\bSchuhschnabel\b.*Mabamba|\bMabamba\b/gi, path: '/schuhschnabel-mabamba' },
  { pattern: /ugandische[s\s-]Rolex/gi, path: '/rolex-uganda' },
  { pattern: /\bKatogo\b/gi, path: '/katogo-fruehstueck' },
  { pattern: /\bMatooke\b/gi, path: '/ugandische-mahlzeit' },
  { pattern: /\bLuwombo\b/gi, path: '/ugandische-mahlzeit' },
  { pattern: /Ostafrika[\s-]Vergleich/gi, path: '/uganda-ostafrika-vergleich' },
  { pattern: /Uganda[\s-]vs\.?[\s-](?:Kenia|Ruanda|Tansania)/gi, path: '/uganda-ostafrika-vergleich' },
  { pattern: /Primaten\s+(?:in\s+)?Uganda/gi, path: '/primaten-uganda' },
  { pattern: /Primatenarten?\s+(?:in\s+)?Uganda/gi, path: '/primaten-uganda' },
  { pattern: /\bPrimatendestination\b/gi, path: '/primaten-uganda' },
  { pattern: /beste[n]?\s+Reisezeit\s+(?:fuer\s+)?Uganda/gi, path: '/beste-reisezeit-uganda' },
  { pattern: /Uganda[\s-]Reisezeit/gi, path: '/beste-reisezeit-uganda' },
  { pattern: /Hauptsaison\s+Uganda/gi, path: '/beste-reisezeit-uganda' },
  { pattern: /\bBuhoma\b/gi, path: '/regionen/buhoma' },
  { pattern: /\bKabale\b/gi, path: '/regionen/kabale' },
  { pattern: /Lake[\s-]Bunyonyi/gi, path: '/regionen/lake-bunyonyi' },
  { pattern: /Ssese[\s-]Inseln/gi, path: '/regionen/ssese-islands' },
]

// External links — matched by phrase in text, rendered as <a> with target="_blank"
const EXTERNAL_RULES = [
  { pattern: /\bbuhoma\.com\b/gi, href: 'https://buhoma.com' },
  { pattern: /\bmistygorillaexpeditions\.com\b/gi, href: 'https://mistygorillaexpeditions.com' },
  { pattern: /\blodgesofuganda\.com\b/gi, href: 'https://lodgesofuganda.com' },
]

const LINK_STYLE = 'text-jungle-700 underline decoration-jungle-300 hover:decoration-jungle-600 transition-colors'

/**
 * Takes a plain text string and returns a React fragment with the first
 * occurrence of each known destination term converted into a <Link>.
 *
 * @param {string} text       Plain paragraph text
 * @param {string} currentSlug  The slug of the current page (to avoid self-links)
 * @returns {React.ReactNode}
 */
export default function autoLinkText(text, currentSlug) {
  if (!text) return text

  // Collect all first-occurrence matches across all rules
  // Each match: { index, length, matchedText, path }
  const matches = []
  const usedPaths = new Set()

  for (const rule of LINK_RULES) {
    if (rule.path === currentSlug) continue
    if (usedPaths.has(rule.path)) continue

    // Reset lastIndex for global regexes
    rule.pattern.lastIndex = 0
    const m = rule.pattern.exec(text)
    if (m) {
      matches.push({
        index: m.index,
        length: m[0].length,
        matchedText: m[0],
        path: rule.path,
      })
      usedPaths.add(rule.path)
    }
  }

  for (const rule of EXTERNAL_RULES) {
    rule.pattern.lastIndex = 0
    const m = rule.pattern.exec(text)
    if (m) {
      matches.push({
        index: m.index,
        length: m[0].length,
        matchedText: m[0],
        href: rule.href,
      })
    }
  }

  if (matches.length === 0) return text

  // Sort by position in text
  matches.sort((a, b) => a.index - b.index)

  // Remove overlapping matches (keep the earlier one)
  const filtered = []
  let lastEnd = 0
  for (const m of matches) {
    if (m.index >= lastEnd) {
      filtered.push(m)
      lastEnd = m.index + m.length
    }
  }

  // Build React elements
  const parts = []
  let cursor = 0
  for (let i = 0; i < filtered.length; i++) {
    const m = filtered[i]
    if (m.index > cursor) {
      parts.push(text.slice(cursor, m.index))
    }
    parts.push(
      m.href
        ? <a key={`al-${i}`} href={m.href} target="_blank" rel="noopener" className={LINK_STYLE}>{m.matchedText}</a>
        : <Link key={`al-${i}`} to={m.path} className={LINK_STYLE}>{m.matchedText}</Link>
    )
    cursor = m.index + m.length
  }
  if (cursor < text.length) {
    parts.push(text.slice(cursor))
  }

  return <>{parts}</>
}
