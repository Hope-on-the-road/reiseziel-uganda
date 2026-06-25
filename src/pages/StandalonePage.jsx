import { useState, useEffect } from 'react'
import { standalonePages } from '../data/standalone-pages.js'
import PageLayout from '../components/PageLayout.jsx'
import { loadPagePhotos } from '../supabase.js'

const PROJECT_ID = 'reiseziel-uganda'

export default function StandalonePage({ photos, clusters, pageId }) {
  const page = standalonePages[pageId]
  const [pagePhotoIds, setPagePhotoIds] = useState(null)

  useEffect(() => {
    if (!pageId) return
    setPagePhotoIds(null)
    loadPagePhotos(pageId, PROJECT_ID).then(ids => setPagePhotoIds(ids || [])).catch(() => setPagePhotoIds([]))
  }, [pageId])

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Seite nicht gefunden</h1>
          <a href="/" className="text-safari-600 hover:text-safari-700">Zurueck zur Startseite</a>
        </div>
      </div>
    )
  }

  let contentPhotos
  if (pagePhotoIds && pagePhotoIds.length > 0) {
    const idSet = new Set(pagePhotoIds)
    const byId = {}
    photos.forEach(p => { if (idSet.has(p.id)) byId[p.id] = p })
    contentPhotos = pagePhotoIds.map(id => byId[id]).filter(p => p?.thumbnail_url)
  } else {
    contentPhotos = (page.photoFilter && clusters?.[page.photoFilter]) || clusters?.landschaft || clusters?.dorfleben || []
  }

  const heroPhoto = contentPhotos[0]
    || photos.find(p => p.category === 'Landscapes' && p.thumbnail_url)
    || null

  return <PageLayout page={page} heroPhoto={heroPhoto || null} contentPhotos={contentPhotos.slice(1, 30)} />
}
