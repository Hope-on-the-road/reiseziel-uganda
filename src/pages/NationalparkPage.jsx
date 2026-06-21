import { useParams } from 'react-router-dom'
import { nationalparks } from '../data/nationalparks.js'
import PageLayout from '../components/PageLayout.jsx'

const FALLBACK_CLUSTERS = {
  bwindi: ['bwindi', 'gorilla'],
  queen_elizabeth: ['queen_elizabeth', 'elefant', 'nilpferd'],
  murchison_falls: ['murchison_falls', 'giraffe', 'nilpferd', 'elefant'],
  kibale: ['kibale', 'schimpanse'],
  kidepo: ['kidepo', 'wildlife'],
  lake_mburo: ['lake_mburo', 'zebra'],
  mgahinga: ['mgahinga', 'gorilla'],
  semuliki: ['semuliki', 'voegel'],
  mt_elgon: ['mt_elgon', 'landschaft'],
}

export default function NationalparkPage({ photos, clusters }) {
  const { parkId } = useParams()
  const page = nationalparks[parkId]

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Park nicht gefunden</h1>
          <a href="/" className="text-safari-600 hover:text-safari-700">Zurueck zur Startseite</a>
        </div>
      </div>
    )
  }

  const fallbacks = FALLBACK_CLUSTERS[parkId] || [parkId]
  const seen = new Set()
  const allPhotos = []

  for (const key of fallbacks) {
    const clusterPhotos = clusters?.[key] || []
    for (const p of clusterPhotos) {
      if (!seen.has(p.id) && p.thumbnail_url) {
        seen.add(p.id)
        allPhotos.push(p)
      }
    }
  }

  return <PageLayout page={page} heroPhoto={allPhotos[0] || null} contentPhotos={allPhotos.slice(1)} />
}
