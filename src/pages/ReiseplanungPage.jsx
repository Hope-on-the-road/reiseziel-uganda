import { useParams } from 'react-router-dom'
import { reiseplanung } from '../data/reiseplanung.js'
import PageLayout from '../components/PageLayout.jsx'

const slugMap = {
  'visa': 'visa',
  'impfungen': 'impfungen',
  'beste-reisezeit': 'besteReisezeit',
  'kosten': 'kosten',
  'sicherheit': 'sicherheit',
  'transport': 'transport',
  'internet': 'internet',
  'geld': 'geld',
  'malaria': 'malaria',
  'packliste': 'packliste',
  'trinkgeld': 'trinkgeld',
  'steckdosen': 'steckdosen',
}

export default function ReiseplanungPage() {
  const { topicId } = useParams()
  const dataKey = slugMap[topicId]
  const page = dataKey ? reiseplanung[dataKey] : null

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

  return <PageLayout page={page} heroPhoto={null} contentPhotos={[]} />
}
