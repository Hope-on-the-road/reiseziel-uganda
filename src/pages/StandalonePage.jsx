import { standalonePages } from '../data/standalone-pages.js'
import PageLayout from '../components/PageLayout.jsx'

export default function StandalonePage({ photos, clusters, pageId }) {
  const page = standalonePages[pageId]

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

  const contentPhotos = (page.photoFilter && clusters?.[page.photoFilter]) || clusters?.landschaft || clusters?.dorfleben || []
  const isPortrait = (p) => {
    const o = p.orientation || ''
    return o.includes('(90)') || o.includes('(270)') || o.includes('Rotate 90') || o.includes('Rotate 270') || o.toLowerCase().includes('hochformat')
  }
  const heroPhoto = contentPhotos.find(p => !isPortrait(p))
    || photos.find(p => p.category === 'Landscapes' && p.thumbnail_url && !isPortrait(p))
    || contentPhotos[0]
    || null

  return <PageLayout page={page} heroPhoto={heroPhoto || null} contentPhotos={contentPhotos.slice(1, 30)} />
}
