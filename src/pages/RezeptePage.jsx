import { rezepte } from '../data/rezepte.js'
import PageLayout from '../components/PageLayout.jsx'

export default function RezeptePage({ photos, clusters, rezeptId }) {
  const page = rezepte[rezeptId || 'ugandische-kueche']

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

  const foodPhotos = clusters?.essen || []
  const heroPhoto = foodPhotos[0] || photos.find(p =>
    (p.category === 'Food & Cooking' || p.category === 'HopeKitchen') && p.thumbnail_url
  )

  return <PageLayout page={page} heroPhoto={heroPhoto || null} contentPhotos={foodPhotos.slice(1)} />
}
