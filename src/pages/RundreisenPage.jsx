import { useParams } from 'react-router-dom'
import { rundreisen } from '../data/rundreisen.js'
import PageLayout from '../components/PageLayout.jsx'

export default function RundreisenPage({ photos }) {
  const { reiseId } = useParams()
  const page = rundreisen[reiseId]

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Rundreise nicht gefunden</h1>
          <a href="/" className="text-safari-600 hover:text-safari-700">Zurueck zur Startseite</a>
        </div>
      </div>
    )
  }

  const heroPhoto = photos.find(p =>
    (p.title || '').toLowerCase().includes('landschaft') ||
    (p.category === 'Landscapes' && p.thumbnail_url)
  ) || photos.find(p => p.category === 'National Parks' && p.thumbnail_url)

  return <PageLayout page={page} heroPhoto={heroPhoto || null} contentPhotos={[]} />
}
