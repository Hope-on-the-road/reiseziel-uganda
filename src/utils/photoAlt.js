/**
 * Baut einen SEO-optimierten Alt-Text aus den verfuegbaren Foto-Feldern.
 * Reihenfolge: title > description > animals_visible > animal_type > category > Dateiname
 *
 * @param {object} photo        Foto-Objekt aus Supabase
 * @param {string} pageContext  Optionaler Seitenkontext (z.B. Seitentitel), als Fallback
 */
export function photoAlt(photo, pageContext = '') {
  if (!photo) return pageContext

  if (photo.title) return photo.title

  if (photo.description) return photo.description.slice(0, 125)

  const parts = []
  if (photo.animals_visible?.length) parts.push(...photo.animals_visible)
  if (photo.animal_type && !parts.includes(photo.animal_type)) parts.push(photo.animal_type)
  if (parts.length) {
    const base = parts.join(', ')
    return pageContext ? `${base} – ${pageContext}` : base
  }

  if (photo.category) return pageContext ? `${photo.category} – ${pageContext}` : photo.category

  // Dateiname aufraeuemen: "IMG_1234-gorilla.jpg" -> "gorilla"
  const cleaned = (photo.file_name || '')
    .replace(/\.[^.]+$/, '')
    .replace(/^(img|dsc|dscn|p\d+)[_-]?\d*/i, '')
    .replace(/[-_]+/g, ' ')
    .trim()

  return cleaned || pageContext
}
