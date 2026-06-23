import { useParams } from 'react-router-dom'
import { vergleiche } from '../data/vergleiche.js'
import { ComparisonJsonLd } from '../components/seo/JsonLd.jsx'
import PageLayout from '../components/PageLayout.jsx'

export default function VergleichPage({ photos }) {
  const { vergleichId } = useParams()
  const page = vergleiche[vergleichId]

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

  const heroPhoto = photos.find(p =>
    p.category === 'National Parks' && p.thumbnail_url
  ) || photos.find(p => p.category === 'Wildlife' && p.thumbnail_url)

  const comparisonItems = page.vergleichstabelle?.map(r => r.kriterium) || []

  return (
    <>
      {comparisonItems.length > 0 && (
        <ComparisonJsonLd
          name={page.h1}
          description={page.metaDescription}
          items={comparisonItems}
          url={`https://reiseziel-uganda.de${page.slug}`}
        />
      )}
      <PageLayout page={page} heroPhoto={heroPhoto || null} contentPhotos={[]} />
    </>
  )
}
