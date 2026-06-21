import { nachbarlaender } from '../data/nachbarlaender.js'
import PageLayout from '../components/PageLayout.jsx'

export default function NachbarlaenderPage({ photos, clusters }) {
  const page = nachbarlaender['nachbarlaender-uganda']

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

  const heroPhoto = clusters?.landschaft?.[2] || photos.find(p =>
    p.category === 'Landscapes' && p.thumbnail_url
  )

  return <PageLayout page={page} heroPhoto={heroPhoto || null} contentPhotos={(clusters?.landschaft || []).slice(3, 10)} />
}
