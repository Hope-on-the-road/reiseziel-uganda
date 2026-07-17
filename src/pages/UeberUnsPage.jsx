import StandalonePage from './StandalonePage.jsx'
import { PersonJsonLd } from '../components/seo/JsonLd.jsx'

export default function UeberUnsPage({ photos, clusters }) {
  return (
    <>
      <PersonJsonLd
        name="Mark Suer"
        url="https://www.reiseziel-uganda.de/ueber-uns"
        description="Reisejournalist und Uganda-Experte mit mehr als 14 Besuchen vor Ort. Mitgruender von Hope on the Road gGmbH und Autor von reiseziel-uganda.de."
        jobTitle="Reisejournalist und Uganda-Experte"
      />
      <StandalonePage photos={photos} clusters={clusters} pageId="ueber-uns" />
    </>
  )
}
