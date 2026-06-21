import { useParams } from 'react-router-dom'
import { tiere } from '../data/tiere.js'
import PageLayout from '../components/PageLayout.jsx'

export default function TierePage({ photos, clusters }) {
  const { tierId } = useParams()
  const page = tiere[tierId]

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Tier nicht gefunden</h1>
          <a href="/" className="text-safari-600 hover:text-safari-700">Zurueck zur Startseite</a>
        </div>
      </div>
    )
  }

  const clusterPhotos = page.photoFilter && clusters?.[page.photoFilter]
    ? clusters[page.photoFilter]
    : []

  return <PageLayout page={page} heroPhoto={clusterPhotos[0] || null} contentPhotos={clusterPhotos.slice(1)} />
}
