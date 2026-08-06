/**
 * Dry-Run-Kandidatenbericht für media_items Projektzuordnung
 *
 * Listet alle media_items mit leerem projects-Array und klassifiziert sie
 * anhand belastbarer Merkmale in drei Gruppen:
 *   - eindeutig reiseziel-uganda
 *   - eindeutig anderes Projekt (z.B. hotr-de)
 *   - unklar (manuelle Prüfung erforderlich)
 *
 * Standard: --dry-run (kein Schreiben)
 * Mit --apply: setzt projects-Tag nur für eindeutige Kandidaten
 *
 * Ausführen:
 *   node scripts/tag-media-projects.mjs
 *   node scripts/tag-media-projects.mjs --apply
 *
 * Benötigt für --apply:
 *   SUPABASE_SERVICE_KEY=<service_role_key> node scripts/tag-media-projects.mjs --apply
 */

import { createClient } from '@supabase/supabase-js'
import { writeFileSync } from 'fs'

const SUPABASE_URL = 'https://eqlnmpmfhxdllkuetury.supabase.co'
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbG5tcG1maHhkbGxrdWV0dXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2OTczNzIsImV4cCI6MjA5NjI3MzM3Mn0.ehpdizTUxQui3JYC6IJTQTTXa_O4ie0xtVlCucsqfR8'

const APPLY = process.argv.includes('--apply')
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY

if (APPLY && !SERVICE_KEY) {
  console.error('Fehler: --apply benötigt SUPABASE_SERVICE_KEY als Umgebungsvariable.')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, ANON_KEY)
const supabaseWrite = APPLY ? createClient(SUPABASE_URL, SERVICE_KEY) : null

// ── Erkennungssignale ──────────────────────────────────────────────────────────

const UGANDA_FILENAME_SIGNALS = [
  'gorilla', 'silverback', 'bwindi', 'murchison', 'elephant', 'giraffe',
  'zebra', 'hippo', 'hippopotamus', 'shoebill', 'chimp', 'chimpanzee',
  'baboon', 'impala', 'warthog', 'buffalo', 'lion', 'crane',
  'uganda', 'kampala', 'entebbe', 'jinja', 'buhoma', 'butiru', 'kibale', 'kidepo',
  'queen-elizabeth', 'lake-mburo', 'mgahinga', 'semuliki', 'sipi', 'elgon',
  'nile', 'victoria', 'kazinga', 'ishasha', 'rwenzori', 'ntungamo',
  'safari', 'trekking', 'lodge', 'boda-boda', 'matatu', 'matooke',
  'rolex-uganda', 'chapati-uganda',
]

const HOTR_FILENAME_SIGNALS = [
  'hamburg', 'guido', 'homeless', 'obdachlos', 'street-outreach', 'bollerwagen',
  'hansplatz', 'waffeln', 'kröppelshagen', 'kroeppelshagen', 'steindamm',
  'bakery-donation', 'wednesday-meals', 'breakfast-support',
  'street-vendor-hamburg', 'hauptbahnhof',
  // 'hope-on-the-road' und 'hope-road' sind zu generisch —
  // das ist der Organisationsname, erscheint auch in Uganda-Fotos (Buhoma, Butiru)
]

// Kategorien die eindeutig Uganda sind
const UGANDA_CATEGORIES = new Set([
  'Wildlife', 'National Parks', 'HopeKitchen', 'Landscapes',
])

// Kategorien die ambivalent sind (kein eindeutiges Signal)
const AMBIGUOUS_CATEGORIES = new Set([
  'People', 'Food', 'Food & Cooking', 'Community Life', 'Villages',
  'Markets & Local Business', 'Roads & Transport', 'Infrastructure',
])

function matchesAny(text, signals) {
  const lower = (text || '').toLowerCase()
  return signals.some(s => lower.includes(s))
}

function classify(item) {
  const fn = (item.file_name || '').toLowerCase()
  const title = (item.title || '').toLowerCase()
  const desc = (item.description || '').toLowerCase()
  const keywords = (item.keywords || []).join(' ').toLowerCase()
  const allText = [fn, title, desc, keywords].join(' ')

  const hotrSignal = matchesAny(allText, HOTR_FILENAME_SIGNALS)
  const ugandaSignalText = matchesAny(allText, UGANDA_FILENAME_SIGNALS)
  const ugandaCategory = UGANDA_CATEGORIES.has(item.category)

  if (hotrSignal && !ugandaSignalText) {
    return {
      group: 'hotr-de',
      proposed_project: 'hotr-de',
      signal: `Dateiname enthält Hamburg/HOTR-Schlüsselwort`,
    }
  }

  if (ugandaSignalText && !hotrSignal) {
    return {
      group: 'reiseziel-uganda',
      proposed_project: 'reiseziel-uganda',
      signal: `Dateiname/Metadaten enthalten Uganda-Schlüsselwort`,
    }
  }

  if (ugandaCategory && !hotrSignal) {
    return {
      group: 'reiseziel-uganda',
      proposed_project: 'reiseziel-uganda',
      signal: `Kategorie '${item.category}' ist Uganda-spezifisch`,
    }
  }

  if (hotrSignal && ugandaSignalText) {
    return {
      group: 'unklar',
      proposed_project: null,
      signal: 'Sowohl Uganda- als auch HOTR-Signale vorhanden — manuelle Prüfung',
    }
  }

  return {
    group: 'unklar',
    proposed_project: null,
    signal: `Keine eindeutigen Signale (Kategorie: ${item.category || 'keine'})`,
  }
}

// ── Hauptlogik ─────────────────────────────────────────────────────────────────

async function main() {
  console.log('Lade media_items mit leerem projects-Array...')

  const { data, error } = await supabase
    .from('media_items')
    .select('id, file_name, title, description, keywords, category, animals_visible, animal_type, thumbnail_path, projects, status')
    .or('projects.eq.{},projects.is.null')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Supabase-Fehler:', error.message)
    process.exit(1)
  }

  console.log(`${data.length} ungetaggte Datensätze gefunden.\n`)

  const results = data.map(item => {
    const { group, proposed_project, signal } = classify(item)
    return {
      id: item.id,
      file_name: item.file_name,
      title: item.title || '',
      description: (item.description || '').slice(0, 80),
      category: item.category || '',
      animals_visible: item.animals_visible || [],
      thumbnail_path: item.thumbnail_path || '',
      status: item.status || '',
      current_projects: item.projects || [],
      proposed_project,
      group,
      signal,
    }
  })

  const byGroup = {
    'reiseziel-uganda': results.filter(r => r.group === 'reiseziel-uganda'),
    'hotr-de':          results.filter(r => r.group === 'hotr-de'),
    'unklar':           results.filter(r => r.group === 'unklar'),
  }

  // ── Ausgabe ───────────────────────────────────────────────────────────────────

  console.log('═══════════════════════════════════════════════════')
  console.log('KANDIDATENBERICHT — media_items Projektzuordnung')
  console.log('═══════════════════════════════════════════════════\n')

  for (const [group, items] of Object.entries(byGroup)) {
    const emoji = group === 'reiseziel-uganda' ? '✅' : group === 'hotr-de' ? '🚫' : '❓'
    console.log(`${emoji}  ${group.toUpperCase()} — ${items.length} Bilder`)
    console.log('─'.repeat(51))
    for (const item of items) {
      console.log(`  ${item.file_name}`)
      console.log(`    Kategorie: ${item.category || '—'}  |  Signal: ${item.signal}`)
    }
    console.log()
  }

  console.log('═══════════════════════════════════════════════════')
  console.log(`Gesamt: ${results.length}`)
  console.log(`  reiseziel-uganda: ${byGroup['reiseziel-uganda'].length}`)
  console.log(`  hotr-de:          ${byGroup['hotr-de'].length}`)
  console.log(`  unklar:           ${byGroup['unklar'].length}`)
  console.log()

  // JSON-Bericht speichern
  const reportPath = `reports/media-tag-candidates-${new Date().toISOString().slice(0,10)}.json`
  const { resolve, dirname } = await import('path')
  const { fileURLToPath } = await import('url')
  const __dir = dirname(fileURLToPath(import.meta.url))
  writeFileSync(
    resolve(__dir, '..', reportPath),
    JSON.stringify({ generated_at: new Date().toISOString(), summary: { total: results.length, ...Object.fromEntries(Object.entries(byGroup).map(([k,v]) => [k, v.length])) }, results }, null, 2)
  )
  console.log(`Bericht gespeichert: ${reportPath}`)

  if (!APPLY) {
    console.log('\nDry-Run — keine Änderungen. Mit --apply und SUPABASE_SERVICE_KEY schreiben.')
    return
  }

  // ── Apply-Modus ───────────────────────────────────────────────────────────────

  const toTag = [
    ...byGroup['reiseziel-uganda'].map(r => ({ id: r.id, projects: ['reiseziel-uganda'] })),
    ...byGroup['hotr-de'].map(r => ({ id: r.id, projects: ['hotr-de'] })),
  ]

  console.log(`\nApply: ${toTag.length} Datensätze werden getaggt (${byGroup['unklar'].length} unklar werden übersprungen)...`)

  let updated = 0
  let failed = 0
  for (const { id, projects } of toTag) {
    const { error: ue } = await supabaseWrite
      .from('media_items')
      .update({ projects })
      .eq('id', id)
      .filter('projects', 'eq', '{}')  // Sicherheitsguard: nur leere überschreiben
    if (ue) {
      console.error(`  Fehler bei ${id}: ${ue.message}`)
      failed++
    } else {
      updated++
    }
  }

  console.log(`\nFertig: ${updated} getaggt, ${failed} Fehler, ${byGroup['unklar'].length} übersprungen (unklar).`)
}

main().catch(err => {
  console.error('Unerwarteter Fehler:', err)
  process.exit(1)
})
