import { useState, useEffect } from 'react'
import Head from '../components/seo/Head.jsx'
import { supabase, thumbUrl } from '../supabase.js'

const SLUG = 'murchison-falls-nationalpark-guide'
const CANONICAL = `https://www.reiseziel-uganda.de/${SLUG}`

const HERO_URL = 'https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg'
const COMMUNITY_URL = 'https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg'
const GORILLA_URL = 'https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg'

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
        setPhotos(
          mediaData
            .map(p => ({ ...p, thumbnail_url: thumbUrl(p.thumbnail_path) }))
            .filter(p => p.thumbnail_url)
        )
      }
    }
    load()
  }, [slug])

  if (!photos.length) return null

  return (
    <div className="mt-12 mb-10">
      <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Eindrücke aus Uganda</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map(photo => (
          <figure key={photo.id} className="overflow-hidden rounded-xl bg-gray-100">
            <img
              src={photo.thumbnail_url}
              alt={photo.title || 'Murchison Falls Nationalpark Uganda'}
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
    frage: 'Was sind die Murchison Falls im Murchison Falls Nationalpark?',
    antwort: 'Die Murchison Falls sind der namensgebende Wasserfall des Parks: Der Viktoria-Nil zwängt sich hier auf eine Breite von nur sieben Metern zusammen und stürzt 43 Meter in die Tiefe. Das Ergebnis ist einer der kraftvollsten Wasserfälle Afrikas. Der beste Aussichtspunkt liegt direkt am oberen Rand des Falls.',
  },
  {
    frage: 'Welche Tiere kann man im Murchison Falls Nationalpark sehen?',
    antwort: 'Murchison Falls beherbergt nach aktuellen Erhebungen rund 240 Löwen — die größte Löwenpopulation Ugandas. Dazu kommen Elefanten in großer Zahl, Rothschild-Giraffen, Nilkrokodile, Flusspferde und Büffel. Auf der Bootsafari sind Nilpferde und Krokodile aus nächster Nähe zu beobachten.',
  },
  {
    frage: 'Wie kommt man zum Murchison Falls Nationalpark?',
    antwort: 'Die Stadt Masindi ist das nächste größere Eingangstor zum Park. Von Kampala dauert die Fahrt etwa vier bis fünf Stunden, entweder direkt über Masindi oder über die nördlichere Route. Es gibt auch Flugverbindungen zu Bugungu und Pakuba airstrips innerhalb oder nahe des Parks.',
  },
  {
    frage: 'Wann ist die beste Reisezeit für den Murchison Falls Nationalpark?',
    antwort: 'Die Trockenmonate Januar bis Februar und Juni bis September gelten als beste Reisezeit. Das Gras ist niedriger, Tiere versammeln sich an Wasserquellen und die Pisten sind besser befahrbar. In der Regenzeit (März bis Mai) ist der Park grüner, aber anspruchsvoller zu bereisen.',
  },
  {
    frage: 'Was ist die Bootsafari auf dem Nil und lohnt sie sich?',
    antwort: 'Die Bootsafari vom Parkhafen Paraa zu den Murchison Falls gilt als eines der besten Safari-Erlebnisse Ostafrikas. Auf zwei bis drei Stunden Fahrt sind Nilpferdgruppen, Krokodile und Hunderte Wasservögel aus nächster Nähe zu erleben. Die Fahrt endet direkt am Fuß der Wasserfälle.',
  },
]

export default function MurchisonFallsNationalparkGuidePage() {
  return (
    <>
      <Head
        title="Murchison Falls Nationalpark Uganda: Safari-Guide, Löwen & Nil"
        description="Murchison Falls Nationalpark: Ugandas größter Nationalpark mit 240 Löwen, Rothschild-Giraffen, Nilpferden und der spektakulären 43-Meter-Schlucht. Vollständiger Safari-Guide."
        canonical={CANONICAL}
        publishedTime="2026-07-06T00:00:00+00:00"
        modifiedTime="2026-07-06T00:00:00+00:00"
      />

      <main className="bg-white">

        {/* Hero */}
        <figure className="relative w-full overflow-hidden" style={{ maxHeight: '520px' }}>
          <img
            src={HERO_URL}
            alt="Kinder in einem ugandischen Dorf nahe Buhoma — Begegnung während einer Uganda-Reise, Foto: Mark Suer"
            className="w-full object-cover object-center"
            style={{ maxHeight: '520px' }}
          />
          <figcaption className="absolute bottom-3 right-4 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
            Foto: Mark Suer · Uganda, Juni 2026
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          {/* Titel */}
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Murchison Falls Nationalpark: Safari-Guide für Ugandas größten Schutzpark
          </h1>

          {/* Einstieg */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der Murchison Falls Nationalpark ist Ugandas größter und ältester Nationalpark — 3.893 Quadratkilometer Savanne, Flusskorridore und tropischer Wald im Nordwesten des Landes. Er verbindet zwei Erfahrungen, die in Ostafrika selten so nah beieinander liegen: einen der engsten Wasserfälle der Erde, durch den der gesamte Viktoria-Nil auf sieben Meter Breite gepresst wird, und eine Löwenpopulation von rund 240 Tieren — eine der größten in Uganda.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Uganda zeigt sich auf vielen Ebenen gleichzeitig. Während unserer mehrwöchigen Aufenthalte — verteilt auf vierzehn Reisen, davon allein im Januar 2026 elf Tage vor Ort — begegneten wir immer wieder Momenten, die das Land abseits seiner berühmten Nationalparks zeigen. Im Dorf Buhoma standen eines Morgens drei Kinder vor einem einfachen Lehmgebäude. Sie waren zurückhaltend, ihre Kleidung und Körperhaltung verrieten schwierige Lebensumstände. Es war selbstverständlich, sie zum Essen einzuladen — kein Programm, kein Konzept, nur der nächste Schritt. Dieser Moment und tausend andere wie er gehören zu Uganda genauso wie die Wasserfälle und die Savanne. Beides ist echt, beides ist das Land.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Murchison Falls liegt im Nordwesten, rund vier bis fünf Stunden von Kampala entfernt. Der Park umfasst über 3.800 Quadratkilometer und zählt zu den ältesten Schutzgebieten Ugandas. Was ihn von anderen Parks der Region unterscheidet: die Kombination aus Flusskorridor, Savanne und tropischem Wald, die eine außergewöhnliche Artenvielfalt ermöglicht.
          </p>

          {/* Faktenkarte */}
          <div className="bg-safari-50 border border-safari-200 rounded-2xl p-6 mb-10">
            <h2 className="font-display text-lg font-bold text-safari-800 mb-4">Murchison Falls Nationalpark — Auf einen Blick</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                ['Fläche', 'über 3.893 km²'],
                ['Lage', 'Nordwest-Uganda, Bezirke Bulisa, Nwoya, Kiryandongo'],
                ['Gegründet', '1952 (als Nationalpark)'],
                ['Wasserfall-Höhe', '43 Meter'],
                ['Wasserfall-Breite', '7 Meter (engste Stelle)'],
                ['Löwenpopulation', 'ca. 240 Individuen (Uganda Large Carnivore Action Plan 2024–2034)'],
                ['Nächste Stadt', 'Masindi (ca. 80 km)'],
                ['Bootsafari-Start', 'Paraa, am Nil-Ufer'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-safari-100 pb-2">
                  <dt className="text-sm font-medium text-safari-700">{label}</dt>
                  <dd className="text-sm text-gray-700 text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* H2: Die Wasserfälle */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Die Murchison Falls — wo der Nil durch sieben Meter passt
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der Viktoria-Nil fließt auf einer Breite von mehreren hundert Metern durch den Park — bis er an einer Stelle auf sieben Meter zusammengepresst wird und 43 Meter in die Tiefe stürzt. Das ist der Murchison Fall, Namensgeber und geografisches Herzstück des Parks. Die Kraft des Wassers an dieser Stelle ist physisch spürbar: der Boden vibriert, der Sprühnebel reicht weit, und das Rauschen übertönt jedes Gespräch.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der beste Aussichtspunkt liegt am oberen Rand des Falls, erreichbar per Fahrzeug und kurzem Fußweg. Wer früh morgens kommt, erlebt den Wasserfall im ersten Sonnenlicht — mit einem Regenbogen im Sprühnebel, der so konstant ist, dass man auf ihn zählen kann. Der untere Aussichtspunkt, erreichbar per Boot, zeigt die Fälle von der Seite: hier sieht man das volle Ausmaß des Sturzes, und im Wasser darunter liegen reglos Nilkrokodile, die auf das angeschwemmte Futter warten.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der Nil, der hier fließt, ist der Viktoria-Nil — das Segment zwischen dem Austritt aus dem Victoriasee bei Jinja und dem Eintritt in den Albertsee weiter westlich. Er durchquert den Park auf etwa 115 Kilometern und ist die Lebensader aller Tiere, die den Park bewohnen. Entlang des Flussufers konzentriert sich ein erheblicher Teil der Tierwelt — was die Bootsafari zu einem der produktivsten Tierbeobachtungserlebnisse Ostafrikas macht.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der Name des Parks geht auf den schottischen Entdecker Samuel Baker zurück, der die Fälle 1864 als erster Europäer dokumentierte und sie nach Sir Roderick Murchison, dem damaligen Präsidenten der Royal Geographical Society, benannte. Diese koloniale Namensgebung ist bekannt — Uganda diskutiert wie andere afrikanische Länder die historische Aufarbeitung solcher Bezeichnungen. Der Park selbst wurde 1926 zunächst als Wildschutzgebiet ausgewiesen, 1952 in seinen heutigen Status als Nationalpark erhoben.
          </p>

          {/* H2: Löwen und Großraubtiere */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            240 Löwen: Murchison Falls und der Uganda Large Carnivore Action Plan
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Murchison Falls Nationalpark beherbergt die größte Löwenpopulation Ugandas. Der Uganda Large Carnivore Action Plan 2024–2034, ein Strategiepapier der Uganda Wildlife Authority, dokumentiert auf Grundlage systematischer Bestandserhebungen rund 240 Individuen (Unsicherheitsbereich ±34) in diesem Park. Zum Vergleich: Queen Elizabeth National Park, Ugandas bekanntester Park für Großkatzen, kommt auf knapp 40 Löwen, Kidepo Valley auf etwa 12.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Diese Zahlen sind das Ergebnis moderner Erfassungsmethoden, die erstmals in dieser Systematik für Uganda angewendet wurden: Playback-Protokolle, bei denen Löwenrufe abgespielt und Reaktionen gemessen werden, kombiniert mit Kamerafallen-Netzwerken und GPS-Collar-Daten. Frühere Schätzungen basierten auf weniger präzisen Methoden und ließen erhebliche Unsicherheiten. Die neuen Daten sind die verlässlichste Grundlage, die Uganda je für seine Löwenpopulationen hatte.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Warum ist Murchison Falls so löwenreich? Der Park bietet eine große, zusammenhängende Savannenlandschaft mit hoher Beute-Tier-Dichte: Kob-Antilopen, Büffel, Warzenschweine und Wasserböcke in großer Zahl. Anders als in Queen Elizabeth gibt es in Murchison keine Fragmentierung durch landwirtschaftliche Flächen. Der Park ist groß genug, um lebensfähige Rudel mit ausreichend Reviergröße zu tragen. Die Löwen hier sind echte Savannen-Löwen — größer und territorial anders als die baumkletternden Löwen im Queen Elizabeth, die durch die besonderen Bedingungen des Kazinga-Gebiets bekannt sind.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Neben Löwen dokumentiert der Action Plan auch Leoparden und Fleckenhyänen für Murchison. Leoparden sind schwerer zu erfassen — ihre heimliche Lebensweise und die Abhängigkeit von Kamerafallen machen präzise Zählungen aufwändig. Hyänen profitieren in Murchison von der hohen Beutetierdichte und erscheinen nach aktuellen Einschätzungen stabiler als in Parkgebieten mit weniger großen Herbivoren. [RECHERCHE NOETIG: aktuelle Hyänen-Bestandszahlen für Murchison Falls]
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der Action Plan 2024–2034 ist nicht nur eine Bestandsaufnahme, sondern ein Schutzrahmen: Er definiert Maßnahmen zur Reduzierung von Mensch-Tier-Konflikten an den Parkgrenzen, zum Monitoring der Populationen und zur Stärkung der Ranger-Kapazitäten. Uganda investiert — nach Angaben der Uganda Wildlife Authority ist der Tourismussektor der größte Devisenbringer des Landes, mit jährlichen Einnahmen die den Export-Erlösen aus Kaffee deutlich übertreffen. Löwen in Murchison sind damit nicht nur ökologisch bedeutsam, sondern wirtschaftlich.
          </p>

          {/* H2: Weitere Tierwelt */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Elefanten, Giraffen und die Tierwelt der Savanne
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Murchison Falls ist kein Park, der auf eine einzige Art ausgerichtet ist. Die Tierwelt ist breit und dicht. Elefanten sind allgegenwärtig — in Herden von gelegentlich mehreren Dutzend Tieren, die durch die Savanne nördlich des Nils ziehen. Afrikanische Elefanten in Murchison zählen zu den erfahrensten Park-Elefanten des Kontinents: Viele Tiere tragen das genetische Gedächtnis der Wilderei-Jahrzehnte des 20. Jahrhunderts, in denen Ugandas Elefantenpopulation dramatisch zurückging. Die Vorsicht dieser Tiere gegenüber Fahrzeugen auf bestimmten Distanzen ist kein Zufall.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Die Rothschild-Giraffe — eine der seltensten Giraffenunterarten weltweit — hat in Murchison Falls eines ihrer wichtigsten verbleibenden Habitate. Uganda beherbergt eine wachsende Population dieser Unterart, die durch gezielte Schutzmaßnahmen stabilisiert wurde. Rothschild-Giraffen unterscheiden sich von anderen Giraffenarten durch die weißen Beine, die keine Flecken unterhalb der Kniegelenke aufweisen — ein Merkmal, das im Feld gut erkennbar ist.
          </p>

          <figure className="my-8 overflow-hidden rounded-2xl">
            <img
              src={GORILLA_URL}
              alt="Berggorilla in den Ästen eines Baums, Bwindi Nationalpark — Uganda bietet sowohl Primaten-Trekking als auch Savannensafari"
              className="w-full object-cover"
              style={{ maxHeight: '420px' }}
            />
            <figcaption className="text-sm text-gray-500 mt-2 px-1">
              Uganda vereint zwei völlig verschiedene Safari-Erfahrungen: Gorilla Trekking im Regenwald und Savannensafari in Murchison Falls — Foto: Mark Suer, Januar 2026
            </figcaption>
          </figure>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Uganda hat nach offiziellen Angaben mehr als 1.050 dokumentierte Vogelarten — mehr als ganz Europa zusammen. Murchison Falls trägt erheblich zu dieser Zahl bei: Entlang des Nilufers sind Schuhschnabel-Störche, Goliath-Reiher, diverse Eisvögel und der Afrikanische Fischaar zu beobachten. Der Park gilt als einer der besten Orte weltweit für die Sichtung des Schuhschnabels, auch wenn Mabamba Swamp nahe Entebbe für gezielte Suche oft verlässlicher ist.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Nilkrokodile sind in Murchison eine konstantere Präsenz als anderswo. Die Gewässer unterhalb der Fälle — besonders die Flachwasserregionen in der Nähe von Paraa — beherbergen große Populationen. Krokodile liegen hier nicht versteckt, sondern offen auf Sandbänken in der Sonne: braun, unbewegt, und auf den ersten Blick fast wie Steine. Die Bootsafari gibt den besten Eindruck von ihrer tatsächlichen Dichte.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Flusspferde sind in Murchison in außergewöhnlicher Zahl vorhanden. Große Gruppen — manchmal dreißig oder mehr Tiere — liegen im flachen Wasser nahe dem Ufer und verharren dort den größten Teil des Tages. Flusspferde sind trotz ihres behäbigen Erscheinungsbilds die gefährlichsten Landsäugetiere Afrikas gemessen an Menschenopfern pro Jahr — ein Kontext, den Bootsafari-Guides regelmäßig mitgeben.
          </p>

          {/* H2: Bootsafari */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Die Bootsafari auf dem Nil — drei Stunden zum Wasserfall
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Die Bootsafari von Paraa zu den Murchison Falls ist eines der bekanntesten Safari-Erlebnisse Ostafrikas — und das aus gutem Grund. Die Fahrt stromaufwärts dauert zwei bis drei Stunden und führt durch Ufervegetation, an Sandinseln vorbei und direkt an den Tiergruppen am Nilufer entlang. Am Ende der Fahrt liegt der Wasserfall — von unten gesehen deutlich beeindruckender als vom oberen Aussichtspunkt.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Was die Bootsafari besonders macht, ist die Distanz zu den Tieren. Auf einer Landsafari im Fahrzeug gibt es immer eine Windschutzscheibe, einen Türrahmen, eine physische Grenze. Auf dem Boot liegt das Ufer mitunter nur wenige Meter entfernt, und ein Flusspferd kann seinen Kopf direkt neben dem Bootsrumpf aus dem Wasser heben. Diese Nähe ist real, nicht inszeniert. Guides halten das Boot auf sicherer Distanz — aber „sicher" ist in diesem Kontext ein relatives Konzept.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Die Abfahrtszeiten sind in der Regel morgens und nachmittags, mit der Morgenfahrt als empfohlener Option: Das Licht ist besser für Fotografie, die Tiere aktiver und die Temperaturen angenehmer. Die Fahrt wird von Uganda Wildlife Authority-Guides begleitet, die die Tiere kennen und auf Sichtungen hinweisen.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            [ZITAT: Bootsafari-Guide über die häufigsten Fragen der Gäste zu den Krokodilen]
          </p>

          {/* H2: Praktische Infos */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Anreise, Unterkunft und praktische Informationen
          </h2>

          <figure className="my-8 overflow-hidden rounded-2xl">
            <img
              src={COMMUNITY_URL}
              alt="Gemeinschaft in Buhoma, Uganda — Menschen als Teil des ugandischen Reiseerlebnisses, Foto: Mark Suer"
              className="w-full object-cover"
              style={{ maxHeight: '380px' }}
            />
            <figcaption className="text-sm text-gray-500 mt-2 px-1">
              Uganda ist mehr als seine Parks — die Begegnungen mit Menschen gehören zu den stärksten Reise-Erfahrungen. Buhoma, Juni 2026. Foto: Mark Suer
            </figcaption>
          </figure>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Die Stadt Masindi ist das logistische Tor zum Murchison Falls Nationalpark und liegt etwa 80 Kilometer südlich des Paraa-Eingangs. Von Kampala aus ist Masindi in drei bis vier Stunden erreichbar. Masindi selbst bietet Unterkünfte für verschiedene Budgets und ist der letzte Ort, an dem Bankautomaten und gut sortierte Supermärkte vorhanden sind, bevor es in den Park geht.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Im und direkt am Park gibt es ein breites Spektrum an Unterkünften: von Budgetcamps mit einfachen Zelten bis zu gehobenen Lodges mit Nilblick. Die Paraa Safari Lodge ist die bekannteste Unterkunft — direkt am Nil-Ufer gelegen, mit Blick auf den Fluss und täglichen Hippopotamus-Sichtungen vom Frühstückstisch. Für Budgetreisende gibt es Campingoptionen innerhalb des Parks, die von der UWA verwaltet werden.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Der Park ist ganzjährig geöffnet. Die Trockenmonate Juni bis September und Dezember bis Februar gelten als beste Reisezeit. In diesen Monaten ist das Gras kürzer, Tiere versammeln sich an den verbleibenden Wasserstellen und die unbefestigten Pisten sind besser befahrbar. In der langen Regenzeit von März bis Mai kann der Zugang zu bestimmten Teilen des Parks erschwert sein.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Murchison Falls Nationalpark lässt sich gut mit anderen Zielen im Norden und Nordwesten Ugandas kombinieren: Kidepo Valley National Park (Nordosten, ca. 6 Stunden Fahrt), Ziwa Rhino Sanctuary (auf dem Weg von Kampala) und der Albertsee-Bereich mit Semuliki Valley. Eine gut geplante Route durch den Norden Ugandas kann all diese Punkte verbinden — ein Reiseprogramm, das selten überlastet ist und einen völlig anderen Uganda-Kontrast zu Bwindi und Buhoma bietet.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Uganda ist nach Angaben der Uganda Wildlife Authority der größte Devisenbringer des Landes — der Tourismussektor beschäftigt direkt rund 200.000 Menschen und indirekt weitere Hunderttausende. Murchison Falls spielt in dieser Gleichung eine wichtige Rolle: Der Park ist nach Bwindi die meistbesuchte Wildtier-Destination des Landes. Die Nationalpark-Besucher insgesamt stiegen laut Uganda Bureau of Statistics von knapp über 180.000 im Jahr 2012 auf über 213.000 im Jahr 2013 — ein Trend der sich in den Folgejahren fortsetzte.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} />

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Häufige Fragen zum Murchison Falls Nationalpark
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
                { href: '/regionen/entebbe', label: 'Entebbe — Ankunft & Transfer (6 Std. südlich)' },
                { href: '/quelle-nil-jinja', label: 'Weißer Nil: Nilquelle in Jinja' },
                { href: '/nationalparks/murchison_falls', label: 'Murchison Falls — Nationalpark-Übersicht' },
                { href: '/nordwesten-ugandas-murchison-falls', label: 'Nordwesten Ugandas erkunden' },
                { href: '/lodges-murchison-falls', label: 'Lodges am Murchison Falls' },
                { href: '/nationalparks-uganda', label: 'Alle Nationalparks Ugandas' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 hover:bg-safari-50 text-gray-700 hover:text-safari-700 text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-safari-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        Title:       Murchison Falls Nationalpark: Safari, Löwen und Nil (53 Zeichen)
        Description: Murchison Falls Nationalpark: 240 Löwen, Rothschild-Giraffen, Nilpferde. Vollständiger Safari-Guide für Ugandas größten Nationalpark. (141 Zeichen)
        H1:          Murchison Falls Nationalpark: Safari, Löwen und der Viktoria-Nil
        Slug:        murchison-falls-nationalpark-guide
        Hauptkeyword: murchison falls nationalpark
        Nebenkeywords: murchison falls, murchison falls safari, löwen uganda, murchison falls bootsafari, nationalpark uganda
      */}
    </>
  )
}
