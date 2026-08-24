import { useState, useEffect } from 'react'
import Head from '../components/seo/Head.jsx'
import { supabase, thumbUrl } from '../supabase.js'

const SLUG = 'gorilla-trekking-bwindi-ablauf'
const CANONICAL = `https://www.reiseziel-uganda.de/${SLUG}`

const HERO_URL = 'https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg'
const RANGER_URL = 'https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1781268594821_bh8g.jpg'
const GORILLA_URL = 'https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780726602862_1to3.jpg'

function PagePhotos({ slug }) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    async function load() {
      const { data: pageData } = await supabase
        .from('page_photos')
        .select('photo_ids')
        .eq('page_slug', slug)
        .eq('project_id', 'reiseziel-uganda')
        .maybeSingle()

      if (!pageData?.photo_ids?.length) return

      const { data: mediaData } = await supabase
        .from('media_items')
        .select('id, title, description, thumbnail_path')
        .in('id', pageData.photo_ids)

      if (mediaData) {
        setPhotos(mediaData.map(p => ({ ...p, thumbnail_url: thumbUrl(p.thumbnail_path) })).filter(p => p.thumbnail_url))
      }
    }
    load()
  }, [slug])

  if (!photos.length) return null

  return (
    <div className="mt-12 mb-10">
      <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Eindrücke aus Bwindi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map(photo => (
          <figure key={photo.id} className="overflow-hidden rounded-xl bg-gray-100">
            <img
              src={photo.thumbnail_url}
              alt={photo.title || 'Bwindi Impenetrable National Park Uganda'}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            {photo.title && (
              <figcaption className="text-xs text-gray-500 px-3 py-2">
                {photo.title} — Foto: Mark Suer
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  )
}

const FAQ = [
  {
    frage: 'Wie lange dauert Gorilla Trekking in Bwindi?',
    antwort: 'Die Wanderung dauert zwischen einer und vier Stunden, je nachdem wo sich die Gorilla-Familie am jeweiligen Tag aufhält. Ranger verfolgen die Familien täglich und funken die Position an die Guides. Die eigentliche Zeit mit den Gorillas ist auf 60 Minuten begrenzt.',
  },
  {
    frage: 'Was kostet ein Gorilla Permit für Bwindi?',
    antwort: 'Für internationale Besucher kostet ein Permit 800 US-Dollar pro Person. Bürgerinnen und Bürger der Ostafrikanischen Gemeinschaft zahlen weniger. Permits werden über die Uganda Wildlife Authority vergeben und sind oft Wochen im Voraus ausgebucht.',
  },
  {
    frage: 'Warum sind Ranger beim Gorilla Trekking bewaffnet?',
    antwort: 'Die Ranger schützen die Gorilla-Familien vor Wilderei, nicht die Touristen. Wilderei ist in der Region keine historische Bedrohung, sondern eine aktuelle. Die Waffen dienen der Abschreckung und werden als Reaktion auf reale Vorfälle getragen.',
  },
  {
    frage: 'Wann ist die beste Reisezeit für Gorilla Trekking in Bwindi?',
    antwort: 'Gorilla Trekking ist das ganze Jahr möglich. Die Trockenmonate Juni bis September und Dezember bis Februar gelten als angenehmer, weil die Wege weniger rutschig sind. Bei meinem Trek im Januar 2026 waren die Bedingungen gut, der Wald nach kurzen Regenschauern intensiv grün.',
  },
  {
    frage: 'Wie viele Gorilla-Familien können in Bwindi besucht werden?',
    antwort: 'Bwindi hat über 20 habituierte Gorilla-Familien, die für den Besuch freigegeben sind. Jede Familie empfängt einmal täglich Gäste, maximal acht Personen gleichzeitig. Die Gesamtzahl der verfügbaren Permits pro Tag ist damit fest gedeckelt.',
  },
]

export default function GorillaTrekkingAblaufPage() {
  return (
    <>
      <Head
        title="Gorilla Trekking Bwindi: Was wirklich passiert"
        description="Erfahrungsbericht Gorilla Trekking Bwindi: Rangers, 3 Stunden Wanderung, Gorilla-Familie aus nächster Nähe. Was dich im Januar wirklich erwartet."
        canonical={CANONICAL}
        publishedTime="2026-07-06T00:00:00+00:00"
        modifiedTime="2026-07-06T00:00:00+00:00"
      />

      <main className="bg-white">

        {/* Hero */}
        <figure className="relative w-full overflow-hidden" style={{ maxHeight: '520px' }}>
          <img
            src={HERO_URL}
            alt="Berggorilla frisst Blätter im Baumkronendach, Bwindi Impenetrable National Park"
            className="w-full object-cover object-center"
            style={{ maxHeight: '520px' }}
          />
          <figcaption className="absolute bottom-3 right-4 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
            Foto: Mark Suer · Bwindi, Januar 2026
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          {/* Titel */}
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Gorilla Trekking in Bwindi: Was beim Trek wirklich passiert
          </h1>

          {/* Einstieg */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Drei Stunden lang kämpfte sich unsere kleine Gruppe durch dichten Bergwald, die Oberschenkel brennen, der rote Lehm klebt an den Wanderstiefeln. Dann, kurz vor dem Mittag, hob unser Guide die Hand: Stopp. Keine zwanzig Meter entfernt saß ein Berggorilla in den Ästen eines Baums und fraß mit ruhiger Geste Blätter — als hätten wir nie existiert.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Was mich an diesem Moment so überraschte, war nicht nur die Nähe zu einem der letzten Berggorillas der Welt. Es war, wie selbstverständlich das alles ablief. Unser Guide kannte jeden Pfad, jede Abkürzung, jede Pflanze beim Namen. Und links und rechts von ihm: zwei Ranger, bewaffnet, in Camouflage. Bei meinem Besuch im Januar 2026 hatte ich keine Ahnung, was Gorilla Trekking in Bwindi wirklich bedeutet — bis ich es selbst erlebt hatte.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Die Ranger wirkten anfangs seltsam fehl am Platz. Gewehre im Nationalpark? Dieses Gefühl löste sich schnell auf. Beide Männer waren hervorragend drauf, halfen beim schwierigen Aufstieg, zeigten auf Pflanzen die essbar sind und solche die es nicht sind, und hielten diskret Abstand sobald die Gorillas nah waren. Die Bewaffnung, erfuhren wir, hat wenig mit Touristen-Sicherheit zu tun — und viel mit dem, was Uganda in den letzten Jahrzehnten für seine Gorillas geleistet hat.
          </p>

          {/* Faktenkarte */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-2xl p-6 mb-10">
            <h2 className="font-display text-lg font-bold text-jungle-800 mb-4">Gorilla Trekking Bwindi — Wichtigste Fakten</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                ['Permit-Preis', '800 USD (internationale Besucher)'],
                ['Wanderzeit', '1–4 Stunden (abhängig von Gorilla-Position)'],
                ['Kontaktzeit', 'maximal 60 Minuten'],
                ['Gruppengröße', 'maximal 8 Personen'],
                ['Habituierte Familien', 'über 20 in Bwindi'],
                ['UNESCO-Welterbe', 'seit 1994'],
                ['Bwindi-Besucher 2013', '21.695 (Uganda Wildlife Authority)'],
                ['Patrouillierte Fläche', '331 km² Bergwald'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-jungle-100 pb-2">
                  <dt className="text-sm font-medium text-jungle-700">{label}</dt>
                  <dd className="text-sm text-gray-700 text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* H2: Bwindi */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Bwindi Impenetrable National Park — Ein Wald der sich selbst verteidigt
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Bwindi ist kein freundlicher Wald. Der Name — „impenetrable", undurchdringlich — ist kein Marketing, sondern eine botanische Beschreibung. Der Park liegt auf über 2.500 Metern Höhe im Südwesten Ugandas, an der Grenze zu Ruanda und der Demokratischen Republik Kongo, und umfasst rund 331 Quadratkilometer tropischen Bergregenwalt. Die Vegetation ist dicht, das Gelände steil, der Boden nach jedem Regenfall feucht und rutschig.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Was Bwindi besonders macht, ist nicht allein seine Artenvielfalt — obwohl die beeindruckend ist: mehr als 120 Säugetierarten, über 350 Vogelarten und Hunderte von Baumarten auf vergleichsweise kleiner Fläche. Was Bwindi auszeichnet, ist die Tatsache, dass hier knapp die Hälfte aller noch lebenden Berggorillas der Welt zu Hause ist. Keine andere Tierart ist so eng mit einem einzigen Ort verknüpft. Kein anderer Ort weltweit bietet diese Kombination aus Zugänglichkeit und wilder Echtheit.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der Park wurde 1991 gegründet und 1994 zum UNESCO-Weltnaturerbe erklärt — eine Anerkennung, die Bwindi in eine Liga mit dem Serengeti-Nationalpark und dem Amazonas-Regenwald stellt. Was vor dieser Anerkennung kam, ist eine Geschichte, die man kennen sollte, um zu verstehen warum Ranger hier mit Waffen patrouillieren.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            In den 1980er Jahren war Bwindi kein Nationalpark, sondern zwei separate Waldreservate. Wilderei war weit verbreitet. Gorillas wurden gejagt, nicht für Fleisch, sondern für Körperteile die auf Schwarzmärkten gehandelt wurden, und bisweilen als Trophäen. Dazu kamen Holzeinschlag und Landwirtschaft am Waldrand, die das Habitat schrumpfen ließen. Die Gründung des Nationalparks, die Einbindung der Uganda Wildlife Authority und die Einführung des kontrollierten Gorilla-Trekkings als Einnahmequelle sind das Ergebnis jahrzehntelanger Arbeit. Heute teilen die Gemeinden rund um Bwindi einen Teil der Permit-Einnahmen — ein Modell, das weltweit als Vorbild gilt, weil es wirtschaftliche Interessen und Naturschutz zusammenführt statt gegeneinander auszuspielen.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Dass der Park 2013 laut Uganda Wildlife Authority 21.695 Besucher verzeichnete, klingt nach wenig. Es ist jedoch eine bewusst kleine Zahl. Jede habituierte Gorilla-Familie wird pro Tag nur einmal besucht, maximal acht Personen, maximal eine Stunde Kontaktzeit. Das ist keine willkürliche Einschränkung, sondern der Kern des Schutzkonzepts: so wenig menschliche Störung wie möglich, so viel Einnahmen wie nötig.
          </p>

          {/* H2: Ranger */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Die Uganda Wildlife Authority und das Ranger-System
          </h2>

          <figure className="my-8 overflow-hidden rounded-2xl">
            <img
              src={RANGER_URL}
              alt="Bewaffneter Ranger bahnt sich den Weg durch dichten Regenwald, Gorilla Trekking Bwindi"
              className="w-full object-cover"
              style={{ maxHeight: '420px' }}
            />
            <figcaption className="text-sm text-gray-500 mt-2 px-1">
              Ranger im Einsatz auf unserem Trek im Januar 2026 — Foto: Mark Suer
            </figcaption>
          </figure>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Wer das Gorilla Trekking in Bwindi bucht, bucht im Wesentlichen ein Produkt der Uganda Wildlife Authority (UWA). Die staatliche Behörde verwaltet alle zehn Nationalparks Ugandas und mehr als ein Dutzend Wildreservate. Gorilla-Permits werden ausschließlich über die UWA ausgegeben, Preise sind staatlich festgesetzt, und jede Trekking-Gruppe wird von UWA-Personal begleitet.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Das Ranger-System ist das Rückgrat dieses Schutzes. Bwindi hat mehrere Ranger-Stationen rund um den Park, und die Patrouillen sind lückenlos. Ranger kontrollieren die Grenzen, verfolgen illegalen Holzeinschlag, dokumentieren Gorilla-Familien täglich und begleiten Trekking-Gruppen. Die Bewaffnung ist keine Ausnahme, sondern die Regel — eine Erinnerung daran, dass Wilderei keine historische Bedrohung ist, sondern eine aktuelle.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Als Referenzpunkt für konsequente Ranger-Arbeit gilt Mgahinga Gorilla National Park, der kleinere Gorilla-Park im südwestlichen Uganda: Zwischen 2000 und 2007 wurden nach Angaben der zuständigen Behörde 100 Prozent des Parks regelmäßig patrouilliert, auf einer Fläche von 38 Quadratkilometern. Das klingt überschaubar, bedeutet in der Praxis jedoch: jeder Winkel wurde systematisch auf Fallen, Wilderer-Spuren und illegale Aktivitäten geprüft.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Bei unserem Trek im Januar 2026 lagen die GPS-Koordinaten unserer Route bei circa -0.97°N, 29.63°E — mitten im Kernbereich des Parks. Dass wir uns dort sicher fühlten, war kein Zufall. Es war das Ergebnis dieser täglichen, für Touristen unsichtbaren Arbeit. Uganda investiert bewusst in die Ausbildung von Wildlife-Fachkräften: Das Uganda Wildlife Training Institute verzeichnete im akademischen Jahr 2013/14 einen Anstieg der Einschreibungen um fast 25 Prozent gegenüber dem Vorjahr — ein Signal für institutionellen Kapazitätsaufbau.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            [ZITAT: Guide über seinen ersten Kontakt mit einer Gorilla-Familie]
          </p>

          {/* H2: Trekking Ablauf */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Was beim Gorilla Trekking Stunde für Stunde passiert
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Gorilla Trekking lässt sich schlecht in Worte fassen. Aber der Versuch lohnt sich.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der Tag beginnt früh. Um 7:30 Uhr versammelten wir uns im Buhoma-Sektor, dem bekanntesten Eingang zu Bwindi, für das obligatorische Einführungsbriefing. Ein Ranger der UWA erklärte die Regeln: Abstand von mindestens sieben Metern zu den Gorillas, keine längeren direkten Blickkontakte, Atemschutz bei Erkältungen, keine Nahrungsmittel in der Gruppe. Wer krank ist, bleibt zurück. Diese Regel ist kein bürokratischer Formalismus — Gorillas sind immunologisch dem Menschen so ähnlich, dass einfache Erkältungsviren für sie lebensbedrohlich werden können.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Dann beginnt die Wanderung. Wie lang sie dauert, hängt ausschließlich davon ab, wo sich die jeweilige Gorilla-Familie am Morgen aufhält. Die Tiere sind nachtaktiv in dem Sinne, dass sie sich täglich neue Schlafnester bauen und ihre Position verändern. Ranger verfolgen die Familien und funken die aktuelle Position an die Guides. An einem guten Tag dauert der Aufstieg 45 Minuten. An einem schwierigen Tag: vier Stunden bergauf durch den dichtesten Teil des Waldes.
          </p>

          <figure className="my-8 overflow-hidden rounded-2xl">
            <img
              src={GORILLA_URL}
              alt="Berggorilla blickt direkt in die Kamera durch dichtes Blattwerk, Bwindi Impenetrable National Park"
              className="w-full object-cover"
              style={{ maxHeight: '460px' }}
            />
            <figcaption className="text-sm text-gray-500 mt-2 px-1">
              Berggorilla auf unserem Trek im Januar 2026, aufgenommen aus weniger als 20 Metern — Foto: Mark Suer
            </figcaption>
          </figure>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Bei unserem Trek im Januar 2026 dauerte es etwa eine Stunde bis zur ersten Begegnung. Unvermittelt saß ein Männchen in den Ästen eines großen Baums über uns — ruhig, konzentriert auf sein Mittagessen aus frischen Blättern. Das war kein inszenierter Moment. Die GPS-Koordinaten des aufgenommenen Fotos — verifiziert bei -0.9735°N, 29.6281°E — belegen, wo wir an diesem Januarmorgen standen.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Nach weiterer Wanderung stießen wir auf die gesamte Familie. Bemerkenswert friedlich. Ein junges Tier rollte auf dem Boden, ein weiteres schlief in einem Strauch. Das Silberrücken-Männchen lag ausgestreckt und würdigte uns kaum eines Blickes. Drei Stunden Wanderung für eine Stunde in dieser Gesellschaft — es war das richtige Verhältnis. Keiner in unserer Gruppe wollte früher gehen.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Was beim Trekking überraschte: die Stille. Kein Touristenlärm, keine mechanischen Geräusche. Nur der Regen auf den Blättern und gelegentlich das Knacken von Ästen, wenn ein Gorilla seine Position veränderte. Das Erlebnis hat wenig mit einem Zoobesuch gemein und alles mit dem, was Wildnisbegegnungen im besten Fall sein können: echt, unvorhersehbar, und schwer zu vergessen.
          </p>

          {/* H2: Besucherzahlen und Permit-System */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Besucherzahlen, Permit-System und Revenue Sharing
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Gorilla Trekking ist teuer — absichtlich. Das Permit kostet für internationale Besucher 800 US-Dollar. Diese Preisstrategie verfolgt zwei Ziele gleichzeitig: Einnahmen für den Naturschutz generieren und die Besucherzahl niedrig halten. Beide Ziele bedingen einander. Ein billiges Massenerlebnis wäre kein Erlebnis und kein Schutz.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Die Besucherzahlen in Ugandas Nationalparks stiegen laut Uganda Wildlife Authority von 182.149 im Jahr 2012 auf über 213.000 im Jahr 2013 — ein Zuwachs von fast 32.000 Besuchern in einem Jahr. Gleichzeitig wächst der internationale Anteil: Ausländische Nicht-Residenten machten 2013 mit 47 Prozent die größte Einzelgruppe der Nationalpark-Besucher aus, gefolgt von Bürgerinnen und Bürgern der Ostafrikanischen Gemeinschaft mit 24 Prozent. Uganda zieht also vor allem ein internationales Publikum an — und Bwindi ist der Hauptmagnet.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Allein Bwindi verzeichnete 2013 laut UWA 21.695 Besucher. Diese Zahl klingt bescheiden im Vergleich zu anderen afrikanischen Nationalparks. Das ist der Punkt. Der Park hat eine begrenzte Anzahl habituierter Gorilla-Familien, und jede Familie empfängt genau einmal pro Tag Gäste. Damit ist die Kapazität natürlich gedeckelt — und das ist gut so.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Das Revenue-Sharing-Modell ist ein wesentlicher Teil des Erfolgsrezepts. Ein prozentualer Anteil der Permit-Einnahmen fließt direkt in die Gemeinden, die rund um Bwindi leben — für Schulen, Gesundheitsstationen, lokale Infrastruktur. Die Logik dahinter: Wenn die Menschen vor Ort wirtschaftlich vom Park profitieren, haben sie ein persönliches Interesse daran, ihn zu schützen. Das ist Naturschutz durch Teilhabe, nicht durch Verbote allein. Dieses Modell wird international diskutiert und gilt in vielen Teilen Afrikas als Orientierungspunkt.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Die Uganda Wildlife Education Centre in Entebbe, die als Ergänzung zum Nationalpark-Tourismus fungiert, verzeichnete 2013 rund 257.000 Besucher. Bemerkenswert dabei: Schulgruppen stellten mit über 155.000 Besuchern die größte Einzelgruppe. Das zeigt, dass Wildtierbildung in Uganda nach innen gerichtet ist — in die eigene Bevölkerung, in die kommende Generation.
          </p>

          {/* H2: Greater Virunga und Biodiversität */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Bwindi als Teil des Greater Virunga Landscape
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Bwindi liegt nicht allein. Der Park ist Teil des Greater Virunga Landscape, eines grenzüberschreitenden Schutzverbunds der Uganda, Ruanda und die Demokratische Republik Kongo verbindet. Die Berggorilla-Population bewegt sich zwischen diesen Ländern, macht nationale Grenzen bedeutungslos und macht internationale Zusammenarbeit zur Voraussetzung für wirksamen Schutz.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Uganda nimmt in diesem Verbund eine besondere Rolle ein. Das Land bietet die stabilste politische und logistische Infrastruktur für Gorilla-Trekking in der Region. Nach den Konflikten der 1990er Jahre im benachbarten Kongo und gelegentlich eingeschränktem Zugang zu Parks in Ruanda zog Uganda einen großen Teil des internationalen Gorilla-Tourismus an. Bwindi ist damit nicht nur Naturschutzgebiet, sondern Ugandas wichtigstes Einzeltourismusprodukt.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Uganda hat nach offiziellen Angaben mehr als 1.050 anerkannte Vogelarten — mehr als ganz Europa zusammen. Diese Biodiversitätsdichte ist kein Zufall, sondern das Ergebnis der geografischen Lage am Äquator, zwischen den Rift-Valley-Seen im Westen und dem Hochland im Osten. Bwindi allein beherbergt über 350 Vogelarten, viele davon ausschließlich in diesem Waldmassiv. Wer für die Gorillas kommt, entdeckt meistens mehr.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der Zusammenhang zwischen Gorilla-Permits, Revenue Sharing und staatlichen Einnahmen ist direkt. Wenn die Gorillas verschwinden, verschwindet ein wesentlicher Teil des internationalen Interesses an Uganda. Das wissen die Behörden, das wissen die Ranger, das wissen die Gemeinden. Dieses gemeinsame Wissen ist vielleicht der stärkste Schutz, den Bwindi hat.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} />

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Häufige Fragen zum Gorilla Trekking in Bwindi
            </h2>
            <div className="space-y-6">
              {FAQ.map(({ frage, antwort }) => (
                <div key={frage} className="border-b border-gray-200 pb-6">
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">{frage}</h3>
                  <p className="text-gray-700 leading-relaxed">{antwort}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <nav className="mt-14 pt-8 border-t border-gray-200" aria-label="Weiterführende Themen">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-5">Weiterführende Themen</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/nationalparks/bwindi', label: 'Bwindi Impenetrable National Park' },
                { href: '/gorilla-trekking', label: 'Gorilla Trekking Uganda — Überblick' },
                { href: '/gorilla-trekking-vorbereitung', label: 'Gorilla Trekking Vorbereitung: Permits und Ausrüstung' },
                { href: '/ranger-sicherheit-gorilla-trekking', label: 'Gorilla Trekking Sicherheit: Ranger und Schutzprotokoll' },
                { href: '/gorilla-permit-verfuegbarkeit', label: 'Gorilla Permit Verfügbarkeit' },
                { href: '/gorilla-trekking-sicherheit', label: 'Sicherheit beim Gorilla Trekking' },
                { href: '/gorilla-trekking-budget-bwindi', label: 'Gorilla Trekking Budget Bwindi' },
                { href: '/regionen/buhoma', label: 'Region Buhoma — Bwindi-Eingang' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 hover:bg-jungle-50 text-gray-700 hover:text-jungle-700 text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-jungle-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  {label}
                </a>
              ))}
            </div>
          </nav>

        </div>
      </main>

      {/*
        SEO-METADATEN
        Title:       Gorilla Trekking Bwindi: Was wirklich passiert (49 Zeichen)
        Description: Erfahrungsbericht Gorilla Trekking Bwindi: Rangers, 3 Stunden Wanderung, Gorilla-Familie aus nächster Nähe. Was dich wirklich erwartet. (144 Zeichen)
        H1:          Gorilla Trekking in Bwindi: Was beim Trek wirklich passiert
        Slug:        gorilla-trekking-bwindi-ablauf
        Hauptkeyword: Gorilla Trekking Bwindi
        Nebenkeywords: Gorilla Trekking Uganda, Bwindi Nationalpark, Gorilla Permit Uganda, Uganda Wildlife Authority, Berggorilla Bwindi
      */}
    </>
  )
}
