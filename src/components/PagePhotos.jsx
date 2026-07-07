import { useState, useEffect } from 'react'
import { supabase, thumbUrl } from '../supabase.js'

export default function PagePhotos({ slug, title = 'Eindrücke aus Uganda' }) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    async function load() {
      const { data: pageData } = await supabase
        .from('page_photos')
        .select('photo_ids')
        .eq('page_slug', slug)
        .eq('project_id', 'reiseziel-uganda')
        .maybeSingle()

      if (!pageData?.photo_ids?.length) return

      const { data: mediaData } = await supabase
        .from('media_items')
        .select('id, title, description, thumbnail_path')
        .in('id', pageData.photo_ids)

      if (mediaData) {
        setPhotos(mediaData.map(p => ({ ...p, thumbnail_url: thumbUrl(p.thumbnail_path) })).filter(p => p.thumbnail_url))
      }
    }
    load()
  }, [slug])

  if (!photos.length) return null

  return (
    <div className="mt-12 mb-10">
      <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map(photo => (
          <figure key={photo.id} className="overflow-hidden rounded-xl bg-gray-100">
            <img
              src={photo.thumbnail_url}
              alt={photo.title || 'Uganda Reise Foto'}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            {photo.title && (
              <figcaption className="text-xs text-gray-500 px-3 py-2">
                {photo.title} — Foto: Mark Suer
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  )
}
