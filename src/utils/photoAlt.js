/**
 * Alt-Text eines Fotos aus BELEGTEN Foto-Feldern.
 *
 * Reihenfolge: redaktioneller title > description > sichtbare Tiere > ''
 *
 * Bis zum 17.08.2026 stand `title` an erster Stelle ohne Pruefung, und darunter
 * folgten Kategorie, bereinigter Dateiname und der Seitenkontext. Gemessen an
 * diesem Tag auf 50 Live-Seiten: 29 von 114 Bildern trugen einen technischen
 * Alt-Text wie `IMG_3793` — ausschliesslich Inline-Bilder, kein einziges
 * Hero-Bild.
 *
 * Ursache war nicht ein fehlender Fallback, sondern ein zu frueher Treffer:
 * 1.254 von 1.980 media_items tragen einen Kameradateinamen im `title`, und
 * `title` gewann. Die gute `description` darunter wurde nie erreicht. Bei
 * IMG_3793 lag dort "Die donnernden Murchison Falls offenbaren die gewaltige
 * Kraft des Nils…".
 *
 * ZWEI FELDER SIND BEWUSST KEINE QUELLE MEHR:
 *
 * `category` beschreibt das Motiv nicht. "Landscapes" belegt nicht, was zu
 * sehen ist — und ein Screenreader liest es als Beschreibung vor.
 *
 * `file_name` und `pageContext` ebenfalls nicht. Der Dateiname ist bei 1.225
 * dieser Assets selbst technisch (`533_IMG7528.jpg`), und der Seitenkontext
 * beweist den Bildinhalt nicht: das Bild unter "Botanischer Garten Entebbe"
 * zeigt nachweislich die Murchison Falls.
 *
 * Bleibt nichts Belegtes uebrig, ist '' das richtige Ergebnis. Ein leerer
 * Alt-Text laesst das Bild fuer Screenreader aus; `IMG_3793` wird dagegen als
 * Beschreibung vorgelesen und ist aktiv irrefuehrend. Fuer informationstragende
 * Bilder bleibt das eine Luecke — sie schliesst Asset-Enrichment, nicht der
 * Renderer.
 *
 * @param {object} photo        Foto-Objekt aus Supabase
 * @param {string} pageContext  Wird nicht mehr als Alt-Text verwendet. Der
 *                              Parameter bleibt, damit vorhandene Aufrufer
 *                              unveraendert funktionieren.
 */

/** Kameradateiname statt Beschreibung: IMG_3793, DSC_0042, PXL_20240817, P1010101. */
const TECHNISCHER_NAME = /^(img|dsc|dscn|dscf|pxl|p|gopr|dji)[\s_-]?\d+$/i

/** Ist der Text ein technischer Bezeichner statt einer Beschreibung? */
export function istTechnischerName(text) {
  const t = String(text ?? '').trim()
  if (!t) return false

  const ohneEndung = t.replace(/\.(jpe?g|png|webp|avif|gif|svg)$/i, '')
  if (TECHNISCHER_NAME.test(ohneEndung)) return true

  // Dateiname mit Endung, egal wie er beginnt: "533_IMG7528.jpg"
  if (/^[\w\-.]+\.(jpe?g|png|webp|avif|gif|svg)$/i.test(t)) return true

  // Reine Zahl, UUID oder Hash
  if (/^\d+$/.test(ohneEndung)) return true
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(ohneEndung)) return true
  // Hash-Verdacht nur in realistischer Laenge: ohne Obergrenze gilt jeder
  // lange Text aus den Buchstaben a-f als Hash.
  if (/^[0-9a-f]{16,64}$/i.test(ohneEndung)) return true

  // Platzhalterwoerter ohne Aussage
  if (/^(image|photo|picture|asset|bild|foto|untitled|unbenannt)$/i.test(ohneEndung)) return true

  return false
}

export function photoAlt(photo, pageContext = '') {
  if (!photo) return ''

  // 1. Redaktioneller Titel — die beste Quelle, solange er einer ist.
  if (photo.title && !istTechnischerName(photo.title)) return photo.title

  // 2. Beschreibung des Motivs.
  if (photo.description && !istTechnischerName(photo.description)) {
    return photo.description.slice(0, 125)
  }

  // 3. Sichtbare Tiere — das Feld sagt aus, was im Bild zu sehen IST.
  //    Nur als Liste verwertbar; in Teilen des Bestands ist es ein Boolean.
  const tiere = []
  if (Array.isArray(photo.animals_visible)) tiere.push(...photo.animals_visible.filter(Boolean))
  if (photo.animal_type && !tiere.includes(photo.animal_type)) tiere.push(photo.animal_type)
  if (tiere.length) return tiere.join(', ')

  // 4. Nichts Belegtes vorhanden. Kein Dateiname, keine Kategorie, kein
  //    Seitenkontext — lieber gar keine Aussage als eine falsche.
  return ''
}
