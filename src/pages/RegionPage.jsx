import { useParams } from 'react-router-dom'
import { regionen } from '../data/regionen.js'
import PageLayout from '../components/PageLayout.jsx'

export default function RegionPage({ photos, clusters }) {
  const { regionId } = useParams()
  const page = regionen[regionId]

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Region nicht gefunden</h1>
          <a href="/" className="text-safari-600 hover:text-safari-700">Zurueck zur Startseite</a>
        </div>
      </div>
    )
  }

  const clusterPhotos = page.photoFilter && clusters?.[page.photoFilter]
    ? clusters[page.photoFilter]
    : []

  const isPortrait = (p) => {
    const o = p.orientation || ''
    return o.includes('(90)') || o.includes('(270)') || o.includes('Rotate 90') || o.includes('Rotate 270') || o.toLowerCase().includes('hochformat')
  }
  const heroPhoto = page.heroPhotoUrl
    ? { thumbnail_url: page.heroPhotoUrl }
    : clusterPhotos.find(p => !isPortrait(p)) || clusterPhotos[0] || null
  const contentPhotos = page.heroPhotoUrl
    ? clusterPhotos.filter(p => !isPortrait(p))
    : clusterPhotos.filter(p => p !== heroPhoto)

  return <PageLayout page={page} heroPhoto={heroPhoto} contentPhotos={contentPhotos} />
}
