import { gorillaTrekking } from '../data/gorilla.js'
import PageLayout from '../components/PageLayout.jsx'

export default function GorillaPage({ photos, clusters }) {
  const page = gorillaTrekking
  const clusterPhotos = clusters?.gorilla || []
  const heroPhoto = clusterPhotos[0] || null
  const contentPhotos = clusterPhotos.slice(1)

  return <PageLayout page={page} heroPhoto={heroPhoto} contentPhotos={contentPhotos} />
}
