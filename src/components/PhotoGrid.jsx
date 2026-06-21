import { useState } from 'react'
import { photoAlt } from '../utils/photoAlt.js'

function PhotoCard({ photo, size = 'md' }) {
  const [loaded, setLoaded] = useState(false)
  const heights = { sm: 'h-48', md: 'h-64', lg: 'h-80', xl: 'h-96' }

  return (
    <div className={`group relative ${heights[size]} rounded-2xl overflow-hidden bg-earth-100`}>
      {photo.thumbnail_url && (
        <img
          src={photo.thumbnail_url}
          alt={photoAlt(photo)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-earth-100 to-earth-200 animate-pulse" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-white text-sm font-medium leading-snug line-clamp-2">{photo.title || photo.file_name}</p>
        {photo.animal_type && (
          <span className="inline-block mt-1.5 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white/90">
            {photo.animal_type}
          </span>
        )}
      </div>
    </div>
  )
}

export function PhotoRow({ photos, maxItems = 4 }) {
  const items = photos.slice(0, maxItems)
  if (items.length === 0) return null

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(photo => (
        <PhotoCard key={photo.id} photo={photo} size="md" />
      ))}
    </div>
  )
}

export function PhotoMasonry({ photos, maxItems = 6 }) {
  const items = photos.slice(0, maxItems)
  if (items.length === 0) return null

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">
      {items.map((photo, i) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          size={i === 0 ? 'xl' : i < 3 ? 'lg' : 'md'}
        />
      ))}
    </div>
  )
}

export function PhotoHero({ photo, overlay }) {
  const [loaded, setLoaded] = useState(false)

  if (!photo?.thumbnail_url) return null

  return (
    <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden bg-earth-100">
      <img
        src={photo.thumbnail_url}
        alt={photoAlt(photo)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      {overlay && (
        <div className="absolute bottom-0 left-0 right-0 p-8">
          {overlay}
        </div>
      )}
    </div>
  )
}

export default PhotoCard
