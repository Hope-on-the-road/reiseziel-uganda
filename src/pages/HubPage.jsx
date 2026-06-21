import { hubPages } from '../data/hub-pages.js'
import PageLayout from '../components/PageLayout.jsx'

export default function HubPage({ photos, clusters, hubId }) {
  const page = hubPages[hubId]

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

  const clusterPhotos = clusters?.wildlife || []
  const heroPhoto = clusterPhotos[0] || photos.find(p => p.category === 'National Parks' && p.thumbnail_url)

  return <PageLayout page={page} heroPhoto={heroPhoto || null} contentPhotos={clusterPhotos.slice(1, 8)} />
}
