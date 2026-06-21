import { flughaefen } from '../data/flughaefen.js'
import PageLayout from '../components/PageLayout.jsx'

export default function FlughafenPage({ photos, clusters }) {
  const page = flughaefen['flughaefen-uganda']

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

  const airportPhotos = clusters?.landschaft || clusters?.dorfleben || []
  const heroPhoto = airportPhotos[0] || photos.find(p =>
    p.category === 'Landscapes' && p.thumbnail_url
  )

  return <PageLayout page={page} heroPhoto={heroPhoto || null} contentPhotos={airportPhotos.slice(1, 8)} />
}
