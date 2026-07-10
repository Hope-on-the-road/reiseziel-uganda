import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'pauschalreisen-uganda'

export default function PauschalreisenUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Was ist der Unterschied zwischen einer klassischen Pauschalreise und einem modularen Uganda-Paket?',
      antwort: 'Eine klassische Pauschalreise bündelt alle Leistungen vorab zu einem Festpreis: Flug, Unterkunft, Transfers, Gorilla-Permit, Pirschfahrten und Guide-Leistungen sind als Einheit gebucht. Ein modulares Paket trennt diese Bausteine: Man bucht zum Beispiel den Flug separat, wählt die Lodge selbst aus und ergänzt das Gorilla-Permit bei Bedarf. Dieser Ansatz gibt mehr Kontrolle über Kosten und Zeitplan, setzt aber auch mehr Eigeninitiative und Kenntnis der ugandischen Logistik voraus. Für Uganda-Erstbesucher ist die Frage nicht entweder-oder, sondern welche Kombination zum eigenen Reisestil passt.'
    },
    {
      frage: 'Wie teuer ist ein Gorilla-Permit in Uganda, und muss es Teil eines Pakets sein?',
      antwort: 'Ein Gorilla-Permit für Uganda kostet derzeit 800 US-Dollar pro Person und Tag. Es ist nicht an eine bestimmte Lodge oder ein Komplettpaket gebunden — man kann es direkt bei der Uganda Wildlife Authority beantragen oder über einen lokalen Reiseveranstalter besorgen. In der Praxis lohnt sich der Kauf über einen Veranstalter, weil dieser kurzfristige Umplanungen einfacher abwickeln und auf Wartelisten zurückgreifen kann. Der Permit-Preis ist für alle Besucher gleich, unabhängig davon, in welcher Unterkunft man übernachtet oder wie die Reise ansonsten organisiert ist.'
    },
    {
      frage: 'Welche Kombination aus Nationalparks gilt als Uganda-Standardroute?',
      antwort: 'Die am häufigsten gebuchte Uganda-Route verbindet Gorilla-Trekking im Bwindi Impenetrable Forest (Südwesten) mit Schimpansen-Trekking im Kibale National Park und einem Savannensafari-Aufenthalt im Queen Elizabeth National Park, oft ergänzt durch eine Bootsfahrt auf dem Kazinga-Kanal. Diese Kombination deckt das gesamte Spektrum ugandischer Wildtiererlebnisse ab — Menschenaffen, Savannengroßwild und Wasservögel — und ist räumlich gut zusammenhängend. Je nach verfügbarer Zeit lässt sie sich auf sieben bis vierzehn Tage ausdehnen.'
    },
    {
      frage: 'Macht eine Pauschalreise in Uganda wirklich Sinn, wenn man unabhängig reisen möchte?',
      antwort: 'Uganda stellt unabhängige Reisende vor echte logistische Herausforderungen: große Distanzen, teils schlechte Straßen, begrenzte öffentliche Transportoptionen zwischen den Nationalparks und eine komplexe Permit-Vergabe. Wer wenig Zeit hat oder zum ersten Mal nach Uganda reist, profitiert davon, dass ein Veranstalter diese Abläufe kennt und auffängt. Gleichzeitig bedeutet mehr Planung durch einen Anbieter nicht zwingend weniger Flexibilität — ein guter lokaler Operator kann ein Programm aufbauen, das vorgefertigte Grundstruktur mit persönlichen Anpassungen verbindet.'
    },
    {
      frage: 'Wann ist die beste Reisezeit für eine Uganda-Pauschalreise?',
      antwort: 'Die Hauptreisezeiten in Uganda sind die Trockenphasen von Juni bis September und von Dezember bis Februar. In diesen Monaten sind Wege trockener, Wildtiere leichter zu beobachten, und die Gorilla-Permits sind besonders stark nachgefragt. Die Regenzeiten im März bis Mai und Oktober bis November sind nicht grundsätzlich ungeeignet — Gorilla-Trekking ist ganzjährig möglich — aber schlechtere Straßenverhältnisse und höhere Regenwahrscheinlichkeit machen die Planung aufwendiger. Für preisbewusste Reisende bieten die Schultern der Regenzeit oft niedrigere Lodge-Preise bei weiterhin vertretbaren Bedingungen.'
    }
  ]

  return (
    <>
      <Head
        title="Pauschalreisen Uganda: Komplettpaket oder modularer Aufbau? | Reiseziel Uganda"
        description="Wie Uganda-Pauschalreisen sich veraendern: von starren Kompletpaketen zu flexiblen Bausteinen. Was das fuer Reisende bedeutet und wie sich Gorilla-Permit, Lodge und Safari sinnvoll kombinieren lassen."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Pauschalreisen Uganda: Zwischen Komplettpaket und modularem Aufbau
          </h1>

          {/* Eröffnungsabsatz */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Uganda war lange ein Reiseziel, das man nicht einfach spontan bucht. Gorilla-Permits müssen vorab reserviert werden, Nationalparks liegen weit auseinander, die Straßenqualität zwischen den Zielen ist uneinheitlich, und die Logistik erfordert Planung. Für viele Reisende war die Antwort auf diese Komplexität das klassische Komplettpaket: Ein Anbieter bündelt Flug, Unterkunft, Transfers, Guide und Permit zu einem Festpreis — der Reisende bucht einmal und kommt mit einem fertigen Programm an. Dieses Modell funktioniert, hat aber Grenzen.
            </p>
            <p>
              In den vergangenen Jahren hat sich etwas verändert. Reisende kommen informierter nach Uganda. Sie haben Reiseberichte gelesen, wissen, dass das Gorilla-Permit 800 US-Dollar kostet, kennen Unterschiede zwischen den Bwindi-Zugängen und fragen gezielt nach Programmen, die ihrem eigenen Rhythmus folgen. Gleichzeitig hat sich das Angebot lokaler Anbieter verbreitert: Kleine Operatoren in Buhoma, Tagesgäste in Queen Elizabeth, Community-Guides in Kibale — Leistungen, die früher nur als Teil teurer Vollpakete verfügbar waren, lassen sich heute einzeln zukaufen.
            </p>
            <p>
              Ich selbst habe Uganda auf 14 Reisen und insgesamt 65 Tagen in sehr unterschiedlichen Formaten erlebt: als Teil eines organisierten Programms, als weitgehend eigenständig Reisender, und als Mitorganisator von Gruppen. Aus dieser Erfahrung heraus lässt sich sagen: Weder das starre Paket noch das vollständig eigenständige Reisen ist für jeden die richtige Antwort. Interessant wird es dort, wo sich beide Prinzipien sinnvoll verbinden lassen.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Pauschalreisen Uganda auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Gorilla-Permit:</span> 800 USD / Person / Tag (Uganda Wildlife Authority)</div>
                <div><span className="font-semibold">Typische Reisedauer:</span> 7–14 Tage für eine Kombinations-Safari</div>
                <div><span className="font-semibold">Klassisches Premium-Trio:</span> Bwindi + Kibale + Queen Elizabeth NP</div>
                <div><span className="font-semibold">Logistikfaktor:</span> Große Distanzen, teils schlechte Straßen begünstigen Vorbündelung</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Hauptreisezeiten:</span> Jun–Sep und Dez–Feb</div>
                <div><span className="font-semibold">Modular buchbar:</span> Permit, Tagesführungen, Community-Programme</div>
                <div><span className="font-semibold">Anbieterspektrum:</span> Internationale Veranstalter bis lokale Day-Operator</div>
                <div><span className="font-semibold">Kostenübersicht:</span> <a href="/reiseplanung/kosten" className="text-jungle-700 hover:underline">Reiseplanung und Kosten</a></div>
              </div>
            </div>
          </div>

          {/* H2: Das klassische Paket */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Das klassische Uganda-Paket: Was drin steckt und wo es Grenzen hat
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ein vollständiges Ugandapaket enthält in seiner klassischen Form: Internationaler Flug, Abholung in Entebbe, Transfers zwischen allen Nationalparks, Übernachtungen mit Halbpension oder Vollpension, ein oder mehrere Gorilla-Permits, Schimpansen-Tracking in Kibale, Pirschfahrten in Queen Elizabeth und Murchison Falls sowie englischsprachige Reiseleitung während der gesamten Reise. Der Reisende bucht, zahlt und reist — Planung und Organisation bleiben vollständig beim Anbieter.
              </p>
              <p>
                Dieser Ansatz hat klare Vorteile, besonders für Erstbesucher. Uganda vergibt Gorilla-Permits begrenzt und oft weit im Voraus. Wer zum ersten Mal nach Uganda reist und nicht genau weiß, welcher Bwindi-Eingang mit welchem Permit-Verfügbarkeit zusammenhängt, wie weit Buhoma von Rushaga entfernt liegt oder wie man verlässlich von Queen Elizabeth nach Kibale reist, profitiert davon, dass jemand anderes diesen Ablauf kennt und die Lücken schließt.
              </p>
              <p>
                Die Grenzen des klassischen Pakets zeigen sich an anderen Stellen. Starre Itinerare reagieren schlecht auf persönliche Bedürfnisse: Wer nach dem Gorilla-Trekking gerne zwei Tage länger am Lake Bunyonyi bliebe, kann das bei einem Festpaket in der Regel nicht ohne Umplanung und Mehrkosten realisieren. Wer das Budget für ein bestimmtes Ziel — etwa Kidepo Valley im Nordosten Ugandas — nicht aufbringen möchte, kann es nicht einfach weglassen und den Preis entsprechend senken. Das Paket ist so angelegt, dass alle Teile gebucht werden oder keiner.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Organisierte Gruppenreisen und ihr wirtschaftlicher Beitrag</h3>
              <p>
                Ein Argument, das in der Diskussion über Reiseformen in Uganda oft untergeht: Organisierte Gruppentouren haben eine wirtschaftliche Funktion, die unabhängiges Reisen nicht replizieren kann. Gruppen buchen Unterkünfte und Aktivitäten mit Vorlauf, geben lokalen Akteuren Planungssicherheit und bringen garantierte Ausgaben — für Lodges, Guides, Fahrer und lokale Dienstleister. Der unabhängige Reisende entscheidet oft spontaner, verteilt seine Ausgaben breiter, ist aber schwerer für lokale Wirtschaftskreisläufe zu erfassen. Für Regionen wie Buhoma, wo der Tourismus ein entscheidender Einkommensfaktor für die lokale Bevölkerung ist, macht das einen spürbaren Unterschied.
              </p>
              <p>
                Das ist kein Argument für schlechte Pakete oder teure Vollpensions-Bundles ohne echten Mehrwert. Es ist ein Argument dafür, die Frage "Pauschalreise oder nicht?" nicht nur durch die Brille des individuellen Erlebnisses zu betrachten, sondern auch im Hinblick darauf, welche wirtschaftliche Wirkung verschiedene Reiseformen vor Ort entfalten. Mehr dazu unter <a href="/nachhaltiger-tourismus-uganda" className="text-jungle-700 hover:underline">nachhaltiger Tourismus in Uganda</a>.
              </p>
            </div>
          </section>

          {/* H2: Modulare Bausteine */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Modulare Bausteine: Wie Uganda-Reisen flexibler werden
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die Alternative zum Komplettpaket ist kein Vakuum, sondern ein anderer Planungsansatz. Anstatt alle Elemente als festes Bündel zu kaufen, werden sie einzeln geprüft und nach Bedarf kombiniert. Das Gorilla-Permit wird direkt oder über einen lokalen Vermittler gebucht, die Unterkunft in Buhoma direkt bei der Lodge angefragt, der Transfer vom Flughafen separat organisiert. Aktivitäten wie Community-Besuche oder ein Kochkurs in einem lokalen Haushalt werden vor Ort dazugebucht.
              </p>
              <p>
                Dieser Ansatz stellt echte Anforderungen. Man braucht Zeit für Recherche, Vertrauen in die eigene Organisationsfähigkeit und Toleranz für Unwägbarkeiten. In Uganda kommen logistische Besonderheiten hinzu: Die schlechten Straßen zwischen einigen Nationalparks machen Eigenanreisen aufwendig, und wer ohne Fahrer-Guide reist, muss Transferoptionen sorgfältig prüfen. Es gibt in Uganda kein vergleichbares öffentliches Netz zwischen den Tourismuszielen, wie man es etwa aus Ostafrika-Destinationen mit besserer Infrastruktur kennt.
              </p>
              <p>
                Gleichzeitig hat der modulare Ansatz genuine Vorteile. Bei meinen eigenen Reisen habe ich mehrfach erlebt, dass ich nach einem intensiven Trekking-Tag einfach einen zusätzlichen Ruhetag eingebaut habe — am Lake Bunyonyi, auf einer Insel, ohne Programm. Das ist mit einem festen Gruppenpaket nicht möglich. Wer individuell plant, kann solche Momente einbauen, ohne gegen ein Itinerar zu arbeiten.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Lokale Tagesangebote als eigenständiger Baustein</h3>
              <p>
                Ein praktisch relevanter Bereich, in dem sich der modulare Ansatz konkret niederschlägt: Lokale Betreiber in der Nähe der Nationalparks bieten immer mehr Tagesleistungen an, die nicht an eine bestimmte Lodge gebunden sind. In Buhoma gibt es Community-Führungen, Kaffee-Farm-Besuche und Küchenprogramme, die unabhängig buchbar sind — also auch für Reisende, die in einer anderen Unterkunft übernachten oder die Gegend mit einem eigenen Fahrzeug durchqueren. Diese Angebote stärken genau die Art von Tourismusstruktur, die Uganda braucht: breit verteilte Einnahmen, die nicht nur in großen Lodges ankommen.
              </p>
              <p>
                Das gilt auch für das Konzept "Soft Adventure": Gemeinschaftsbesuche, Kochprogramme bei lokalen Familien, unterstützende Besuche bei sozialen Projekten wie der HopeKitchen — diese Elemente lassen sich flexibel in fast jede Uganda-Reise einbauen, egal ob sie als Paket oder unabhängig organisiert ist. Sie erfordern wenig zusätzliche Logistik, hinterlassen aber einen direkteren Eindruck vom Alltag der Menschen in Uganda als ein Programm, das ausschließlich auf Wildtiersichtungen ausgerichtet ist.
              </p>
            </div>
          </section>

          {/* H2: Premium-Produkt Uganda */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Ugandas Premiumprodukt: Gorilla, Schimpanse, Savanne, Wasser
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die meistgebuchte Kombination in Uganda ist kein Zufall. Wer Bwindi (Gorilla-Trekking), Kibale (Schimpansen-Tracking), Queen Elizabeth National Park (Savannensafari mit Löwen, Elefanten, Büffeln) und den Kazinga-Kanal (Nilpferde, Wasservögel, Wasserbüffel auf engem Raum) miteinander verbindet, hat das gesamte Spektrum dessen erlebt, was Uganda einzigartig macht. Kein anderes Land in Afrika bietet diese vier Erfahrungen so kompakt und logistisch miteinander verbindbar wie Uganda.
              </p>
              <p>
                Diese Route bildet das Grundgerüst der meisten Uganda-Pakete — egal ob als starres Sieben-Tage-Programm oder als flexibles Zwei-Wochen-Itinerar. Ein genauer Blick auf die <a href="/rundreisen/7-tage" className="text-jungle-700 hover:underline">7-Tage-Rundreise</a> zeigt, wie eng gefasst diese Kombination in der Praxis oft ist: Wer sieben Tage bucht, hat kaum Spielraum für Unvorhergesehenes oder echte Pausen. Wer weiß, dass er langsamer reist oder gerne mehr Ruhe einbaut, sollte das beim Buchungsgespräch aktiv ansprechen.
              </p>
              <p>
                Kidepo Valley National Park im Nordosten ist ein anderes Kapitel. Der Park gilt als einer der eindrucksvollsten Afrikas, ist aber für viele Reisende logistisch schwer erreichbar — die Anfahrt mit dem Fahrzeug aus Kampala dauert acht bis zehn Stunden, alternativ gibt es Charterflüge. Pakete, die Kidepo einschließen, sind teurer und zeitintensiver. Im modularen Ansatz lässt Kidepo sich theoretisch weglassen, wenn Budget oder Zeit knapp sind — im Komplettpaket ist das Herausrechnen einzelner Parks in der Regel nicht vorgesehen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Gorilla-Trekking als Anker jeder Uganda-Reise</h3>
              <p>
                Das Gorilla-Trekking im Bwindi Impenetrable Forest ist für die meisten Besucher der eigentliche Anlass der Uganda-Reise. Alles andere — Schimpansen, Savannensafari, Nilbootsfahrt — ist willkommene Ergänzung, aber der Berg-Gorilla ist der Grund, warum jemand nach Uganda fliegt und nicht nach einem anderen afrikanischen Land. Das hat direkte Auswirkungen auf die Planung: Das Gorilla-Permit muss als erstes gesichert werden, bevor die übrige Reise darum herum gebaut wird.
              </p>
              <p>
                In der Praxis bedeutet das: Wer modular plant, startet mit der Permit-Buchung und baut dann Lodge, Anreise und Zusatzprogramm drumherum. Wer ein Paket bucht, vertraut darauf, dass der Anbieter das Permit für den gewünschten Zeitraum gesichert hat. Beide Wege führen zum selben Ziel — dem Moment, in dem man einer Gorilla-Familie gegenübersteht — aber die Kontrolle über den Ablauf liegt an unterschiedlichen Stellen. Mehr zum Ablauf selbst findet sich unter <a href="/gorilla-trekking" className="text-jungle-700 hover:underline">Gorilla-Trekking in Uganda</a>.
              </p>
            </div>
          </section>

          {/* H2: Logistik und Saisonalität */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Logistik und Saisonalität: Warum Ugandas Infrastruktur die Planung beeinflusst
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ugandas Nationalparks liegen nicht nebeneinander. Die Distanz von Entebbe nach Bwindi Impenetrable Forest beträgt je nach Route zwischen 450 und 530 Kilometer, mit Fahrzeiten von acht bis zwölf Stunden. Wer die westliche Safari-Route mit Bwindi, Queen Elizabeth und Kibale verbindet, legt in etwa einer Woche mehrere hundert Kilometer auf teils schlechten Straßen zurück. Das ist der Hauptgrund, warum viele Reisende — auch erfahrene — zu einem Grundgerüst mit vorgebuchten Transfers greifen: Es spart Energie und reduziert das Risiko, wegen eines Pannenfahrzeugs einen Permit-Termin zu verpassen.
              </p>
              <p>
                Saisonalität ist ein weiterer Faktor, der Paketangebote beeinflusst. Die langen Regenzeiten in Uganda — grob März bis Mai — sind in traditionellen Paketen unterrepräsentiert, weil viele internationale Veranstalter diese Monate meiden. Schlammige Pisten, schlechtere Fotobedingungen und das Risiko von Regenunterbrechungen machen die Planung aufwendiger. Gleichzeitig sind die Regenzeiten nicht grundsätzlich schlechte Reisezeiten: Gorilla-Trekking ist ganzjährig möglich, die Vegetation ist üppiger, und Lodge-Preise fallen in diesen Monaten oft merklich.
              </p>
              <p>
                Wer modular plant, kann diese Saisonlücken gezielt nutzen. Ein selbst zusammengestelltes Uganda-Programm im April oder November ist nicht dasselbe wie ein Paket aus dem Katalog — es erfordert mehr Eigenrecherche, belohnt aber mit günstigeren Unterkunftspreisen und ruhigeren Permit-Verfügbarkeiten. Für preisbewusste Reisende aus dem deutschsprachigen Raum, die Uganda schon gut kennen oder zumindest gut vorbereitet anreisen, ist das eine reale Option.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Transparente Preise als Vertrauensfaktor</h3>
              <p>
                Ein Punkt, der in der Buchungspraxis oft unterschätzt wird: Der deutschsprachige Markt reagiert empfindlich auf undurchsichtige Preisstrukturen. Wer für ein Uganda-Paket 4.000 Euro bezahlt und nicht weiß, wie viel davon das Permit, die Lodge und der Transfer kosten, bucht mit einem Misstrauen, das die gesamte Reiseerfahrung einfärben kann. Transparente Aufschlüsselung der Einzelkosten — auch wenn die Summe am Ende dieselbe ist — ist kein Luxus, sondern ein Qualitätsmerkmal seriöser Anbieter.
              </p>
              <p>
                Das modulare Preismodell hat in dieser Hinsicht einen natürlichen Vorteil: Wer Bausteine einzeln kauft, sieht automatisch, was jede Komponente kostet. Wer ein Paket kauft, sollte auf einer Aufschlüsselung bestehen. Was genau im Reisepreis enthalten ist, welche Leistungen optional sind und welche Kosten vor Ort anfallen, gehört in jedes seriöse Uganda-Angebot. Eine Orientierung zu Gesamtkosten bietet die Seite <a href="/reiseplanung/kosten" className="text-jungle-700 hover:underline">Reiseplanung: Kosten Uganda</a>.
              </p>
            </div>
          </section>

          {/* H2: Misty Gorilla Expeditions Kontext */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Zwischen beiden Welten: Wie Misty Gorilla Expeditions arbeitet
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Misty Gorilla Expeditions bietet sowohl vollständige Safari-Programme als auch individuelle Reiseberatung an — und das ist keine Marketingentscheidung, sondern die direkte Konsequenz aus dem, was Reisende tatsächlich nachfragen. Manche wollen ankommen und alles organisiert vorfinden. Andere haben bestimmte Teile ihrer Reise bereits geplant — Flug gebucht, Unterkunft in Kampala bekannt — und suchen nur noch Unterstützung für das Gorilla-Permit und die Transfers in den Nationalparks.
              </p>
              <p>
                Was ich aus meinen eigenen Uganda-Erfahrungen mitbringe: das Wissen, wo Flexibilität im Programm sinnvoll ist und wo sie auf Kosten des Erlebnisses geht. Die Fahrtzeit von Buhoma nach Queen Elizabeth zum Beispiel — je nach Straßenzustand sechs bis acht Stunden — ist für eigenständige Reisende ohne Fahrer-Guide schwer planbar. Das ist ein Bereich, in dem vorgebundene Transfers echten Wert haben. Gleichzeitig gibt es Programmteile, die sich sehr gut ergänzen lassen: ein Abstecher zu einem Community-Projekt in Buhoma oder ein freier Nachmittag am Kazinga-Kanal kostet nichts, wenn der Transfer schon steht.
              </p>
              <p>
                Die Reiseplanung für Uganda beginnt sinnvoll mit einer Klärung der eigenen Prioritäten — nicht mit der Auswahl eines fertigen Programms aus dem Katalog. Mehr dazu findet sich auf der Seite zur <a href="/reiseplanung" className="text-jungle-700 hover:underline">Uganda-Reiseplanung</a>.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Pauschalreisen Uganda" />

          {/* FAQ */}
          <section className="mb-12 mt-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu Pauschalreisen in Uganda
            </h2>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-gray-800 pr-4">{item.frage}</span>
                    <span className="text-jungle-700 text-xl flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 pt-1 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.antwort}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-display text-xl font-semibold text-gray-800 mb-5">
              Mehr zur Planung Ihrer Uganda-Reise
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/reiseplanung', label: 'Uganda-Reiseplanung: Schritt für Schritt' },
                { href: '/gorilla-trekking', label: 'Gorilla-Trekking in Uganda: Ablauf und Vorbereitung' },
                { href: '/rundreisen/7-tage', label: '7-Tage-Rundreise Uganda' },
                { href: '/reiseplanung/kosten', label: 'Reiseplanung: Kosten und Budget' },
                { href: '/nachhaltiger-tourismus-uganda', label: 'Nachhaltiger Tourismus in Uganda' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-jungle-700 hover:text-jungle-900 hover:underline text-sm py-1"
                >
                  <span className="text-jungle-400">&#8594;</span>
                  {label}
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
