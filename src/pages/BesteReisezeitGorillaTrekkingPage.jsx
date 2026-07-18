import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'beste-reisezeit-gorilla-trekking'

const HERO_IMG = 'https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780726602862_1to3.jpg'

export default function BesteReisezeitGorillaTrekkingPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Was ist die beste Reisezeit für Gorilla Trekking in Uganda?',
      antwort: 'Die beste Reisezeit für Gorilla Trekking in Uganda sind die beiden Trockenzeiten: Juni bis September und Dezember bis Februar. In diesen Monaten sind die Trails im Bwindi Impenetrable National Park trockener, das Unterholz weniger dicht und die Wanderung körperlich leichter. Wer flexibel ist, kann auch in der Regenzeit (April, Mai, November) trekken — mit weniger Mitreisenden, günstigeren Lodgepreisen und Permits zu 450 statt 800 US-Dollar. Gorillas verlassen Bwindi zu keiner Jahreszeit.'
    },
    {
      frage: 'Wie viele Berggorillas gibt es in Uganda?',
      antwort: 'Laut dem Zensus der Uganda Wildlife Authority (UWA) aus dem Zeitraum 2018 bis 2020 leben 459 Berggorillas in Uganda — konzentriert auf den Bwindi Impenetrable National Park und den Mgahinga Gorilla National Park. Uganda beherbergt damit knapp die Hälfte der Weltpopulation. Insgesamt leben rund 1.063 Berggorillas (Gorilla beringei beringei) im Grenzgebiet Uganda–Ruanda–DR Kongo. Die Gesamtzahl aller Gorilla-Arten in Afrika beträgt etwa 50.000 — darunter rund 3.800 Östliche Flachlandgorillas (Gorilla beringei graueri) im Kahuzi-Biéga-Nationalpark in der DR Kongo.'
    },
    {
      frage: 'Welche Parks gibt es für Gorilla Trekking in Uganda?',
      antwort: 'Uganda hat zwei Parks mit habitualisierten Gorilla-Familien: der Bwindi Impenetrable National Park mit vier Zugangspunkten (Buhoma, Ruhija, Rushaga, Nkuringo) und der Mgahinga Gorilla National Park nahe der Grenze zu Ruanda und DR Kongo. Bwindi bietet mehr Familien, mehr tägliche Permit-Kontingente und höhere Buchungssicherheit. Mgahinga ist kompakter, die Landschaft offener (Bambuswälder, Vulkankegel), aber es gibt nur eine habitualisierte Familie — die Nyakagezi-Familie — die sich zeitweise in Ruanda oder den Kongo bewegen kann.'
    },
    {
      frage: 'Wie teuer ist ein Gorilla-Permit in Uganda und wann gibt es Rabatt?',
      antwort: 'Ein Gorilla-Trekking-Permit kostet in der Hauptsaison 800 US-Dollar pro Person. In der Nebensaison — April, Mai und November — sinkt der Preis auf 450 US-Dollar. Die Uganda Wildlife Authority (UWA) verwaltet alle Permits; Buchungen sind direkt über die UWA-Website oder über akkreditierte Reiseveranstalter möglich. Für die Hochsaison (Juli und August) sollte man neun bis zwölf Monate im Voraus buchen: Im August sind durchschnittlich 95,8 Prozent aller verfügbaren Permits ausverkauft, im Juli 91,1 Prozent.'
    },
    {
      frage: 'Wie lange dauert Gorilla Trekking in Bwindi?',
      antwort: 'Die Treckingdauer variiert je nach Standort der Gorilla-Familie am jeweiligen Tag. In günstigen Fällen erreicht man die Gruppe nach 30 bis 60 Minuten Fußmarsch, manchmal dauert es drei bis vier Stunden. Bei der Familie angekommen verbringt man genau eine Stunde — das ist die UWA-Regelung für alle Besucher. Das Terrain in Bwindi ist steil und oft schlammig; feste Wanderschuhe, eine Regenjacke und guter Fitnesszustand sind empfehlenswert.'
    },
    {
      frage: 'Ist Gorilla Trekking in der Regenzeit möglich?',
      antwort: 'Ja, Gorilla Trekking findet in Uganda das ganze Jahr statt. In der Regenzeit werden die Trails schlammiger und das Unterholz dichter, was die Wanderung körperlich anspruchsvoller macht. Dafür sind die Wälder in voller Grünpracht, die Permit-Verfügbarkeit ist besser und Lodgepreise sind oft deutlich günstiger. Das eigentliche Erlebnis — die eine Stunde mit der Gorilla-Familie — ist in Qualität und Nähe identisch mit dem in der Trockenzeit.'
    }
  ]

  return (
    <>
      <Head
        title="Beste Reisezeit Gorilla Trekking Uganda 2026: Wann und wo Gorillas sehen"
        description="Beste Reisezeit Gorilla Trekking Uganda: Trockenzeit Juni–September ideal, Nebensaison April/Mai mit 450 USD Permit. 459 Berggorillas, Bwindi vs. Mgahinga, Buchungstipps."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Beste Reisezeit Gorilla Trekking Uganda: Wann und wo Berggorillas erleben
          </h1>

          {/* Hero-Bild */}
          <figure className="mb-10 rounded-2xl overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Berggorilla blickt durch dichtes Blattwerk im Bwindi Impenetrable National Park, Uganda"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
              loading="eager"
            />
            <figcaption className="text-xs text-gray-400 mt-2 px-1">
              Berggorilla im Bwindi Impenetrable National Park — aufgenommen von Mark Suer während des Gorilla Trekkings im Januar 2026.
            </figcaption>
          </figure>

          {/* Eröffnungsabsatz */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Die beste Reisezeit für Gorilla Trekking in Uganda beginnt im Juni und dauert bis September — das sind die Monate, in denen die Pfade im Bwindi Impenetrable National Park trockener sind, das Unterholz weniger dicht und die Wanderung körperlich besser planbar. Wer in dieser Zeit nach Uganda reist, hat die einfachsten Bedingungen für das Trekking selbst. Wer flexibel ist, dem eröffnen sich in der Regenzeit ganz andere Vorteile.
            </p>
            <p>
              Wir waren im Januar 2026 beim Gorilla Trekking im Bwindi Nationalpark — nach drei Stunden Wanderung durch den Regenwald stießen wir auf eine Gorilla-Familie. Sie waren sehr friedlich, und wir kamen sehr nah. Dieser Moment, für den man frühmorgens aufbricht, stundenlang durch dichtes Unterholz steigt und dann plötzlich, ohne Vorwarnung, einem der wenigen über tausend Berggorillas weltweit gegenübersteht — das ist das Versprechen, das Uganda einlöst. Ganzjährig, in der Trockenzeit wie in der Regenzeit.
            </p>
            <p>
              Dieser Artikel erklärt die saisonalen Unterschiede, beschreibt die zwei Parks wo Gorillas in Uganda leben, fasst die aktuellen Populationsdaten zusammen und gibt praktische Hinweise zur Permit-Buchung — einschließlich der Monate, in denen Permits erheblich günstiger sind.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Gorilla Trekking Uganda auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Beste Reisezeit:</span> Juni–September und Dezember–Februar</div>
                <div><span className="font-semibold">Ganzjährig möglich:</span> Ja — Gorillas verlassen Bwindi nicht</div>
                <div><span className="font-semibold">Permit Hauptsaison:</span> 800 USD pro Person</div>
                <div><span className="font-semibold">Permit Nebensaison:</span> 450 USD (April, Mai, November)</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Berggorillas in Uganda:</span> 459 Individuen (Zensus 2018–2020)</div>
                <div><span className="font-semibold">Parks:</span> Bwindi Impenetrable NP + Mgahinga Gorilla NP</div>
                <div><span className="font-semibold">Bwindi-Zugänge:</span> Buhoma, Ruhija, Rushaga, Nkuringo</div>
                <div><span className="font-semibold">Buchungsvorlauf:</span> 9–12 Monate für Juli/August</div>
              </div>
            </div>
          </div>

          {/* H2: Beste Reisezeit */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Die beste Reisezeit für Gorilla Trekking: Trockenzeit und Regenzeit im Vergleich
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Uganda hat zwei Trockenzeiten: die lange von Juni bis September und die kurze von Dezember bis Februar. Beide eignen sich für Gorilla Trekking — mit dem Unterschied, dass die Hauptreisezeit für europäische Besucher in den Sommer (Juli und August) fällt, was sich unmittelbar in der Permit-Nachfrage zeigt. Im August sind laut den Auslastungsdaten der Uganda Wildlife Authority (UWA) durchschnittlich 95,8 Prozent aller verfügbaren Gorilla-Permits ausgebucht, im Juli 91,1 Prozent. Wer in diesen Monaten trekken möchte, muss neun bis zwölf Monate im Voraus buchen.
              </p>
              <p>
                Der praktische Vorteil der Trockenzeit liegt auf den Trails: Der Bwindi Impenetrable National Park liegt auf Höhen zwischen 1.160 und 2.607 Metern. Die Pfade sind in der Trockenzeit fester, der Unterholz-Bewuchs etwas lichter, und das Risiko tiefer Schlammlöcher ist geringer. Für Reisende, die körperliche Einschränkungen haben oder die sich bei einem langen, steilen Bergaufstieg nicht sicher sind, empfiehlt sich die Trockenzeit. Die Wanderung selbst kann je nach Position der Gorilla-Familie dreißig Minuten oder mehrere Stunden dauern — das Terrain bleibt anspruchsvoll, egal zu welcher Jahreszeit.
              </p>
              <p>
                Die kurze Trockenzeit von Dezember bis Februar ist für viele Reisende interessant, die den Sommerurlaub nicht belegen wollen oder Weihnachten und Silvester mit einer außergewöhnlichen Reise verbinden. Unsere Reise im Januar 2026 — elf Tage vor Ort — fiel genau in diese Zeit. Die Wege waren trocken, die Morgenstunden in Buhoma angenehm kühl, und die Permit-Verfügbarkeit besser als im August.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Nebensaison: Günstigere Permits, weniger Besucher</h3>
              <p>
                Die Regenzeiten in Uganda — März bis Mai (lange Regenzeit) und Oktober bis November (kurze Regenzeit) — gelten in der klassischen Reiseplanung als Nebensaison. Das hat messbare Konsequenzen für die Permit-Kosten: In den Monaten April, Mai und November senkt die UWA den Permit-Preis von 800 auf 450 US-Dollar pro Person. Eine Reisegruppe von vier Personen spart damit 1.400 Dollar allein durch die saisonale Wahl des Reisetermins.
              </p>
              <p>
                Dazu kommt die Verfügbarkeit: Im April sind durchschnittlich nur 20 Prozent der Permits ausgebucht — der niedrigste Wert des Jahres. Wer kurzfristig planen muss oder will, findet in den Regenmonaten realistische Chancen auf ein Permit ohne monatelangen Vorlauf. Lodges in und um Bwindi reduzieren in der Nebensaison ihre Preise spürbar, und die Parks sind erheblich ruhiger. Gruppen treffen unterwegs weniger andere Trekkinggruppen an.
              </p>
              <p>
                Die Kehrseite ist real: Schlamm. Der Wald hält den Regen, die Pfade werden rutschig, und der Aufstieg zu einer Gorilla-Familie in der Regenzeit kostet mehr Kraft. Wasserdichte Wanderschuhe und Gamaschen sind dann kein optionales Zubehör. Wer körperlich fit ist und kein Problem mit feuchtem Gelände hat, findet in der Regenzeit aber ein intensiveres Erlebnis: Der Bwindi Forest leuchtet in der Regenzeit in einem Grün, das die Trockenzeit nicht bietet. Das eigentliche Ziel — die Stunde mit der Gorilla-Familie — ist qualitativ identisch. Gorillas achten nicht auf Jahreszeiten.
              </p>
            </div>
          </section>

          {/* H2: Wo Gorillas sehen */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Wo kann man Gorillas in Uganda sehen? Bwindi und Mgahinga im Überblick
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Uganda hat zwei Parks, in denen Berggorillas für das Trekking habitualisiert wurden: der Bwindi Impenetrable National Park und der Mgahinga Gorilla National Park. Beide liegen im äußersten Südwesten des Landes, nahe der Grenzen zu Ruanda und der Demokratischen Republik Kongo.
              </p>
              <p>
                Bwindi ist der mit Abstand größere, bekanntere und am meisten besuchte Park. Er hat vier Zugangspunkte: Buhoma im Norden, Ruhija im Osten, sowie Rushaga und Nkuringo im Süden. Jeder dieser Sektoren hat eigene habitualisierte Gorilla-Familien, eigene Permit-Kontingente und ein lokales Netz an Lodges. Buhoma ist der traditionell bekannteste Zugang — der Sektor war der erste, der für Touristen geöffnet wurde, und er liegt am nächsten an der kleinen Ortschaft Buhoma, wo auch die <a href="/hopekitchen-buhoma" className="text-jungle-700 underline hover:text-jungle-900">HopeKitchen der Hope on the Road gGmbH</a> arbeitet. Für die Auswahl des Sektors gilt: Wer mehr Abgeschiedenheit sucht, findet diese in Rushaga oder Nkuringo. Wer zum ersten Mal nach Bwindi kommt und sich an eine Basisinfrastruktur halten möchte, ist in Buhoma gut aufgehoben.
              </p>
              <p>
                Bwindi beherbergt die große Mehrheit der ugandischen Berggorillas. Der zweite Park, der Mgahinga Gorilla National Park, liegt unmittelbar an der Dreiländergrenze zu Ruanda und der DR Kongo, inmitten der Virunga-Vulkane. Der Vulkan Gahinga mit 3.475 Metern Höhe ist namensgebend für den Park — bedeckt von Bambuswald, der für die Gorillas einen wichtigen Nahrungsraum darstellt. Mgahinga ist Ugandas kleinster Nationalpark, die Landschaft deutlich offener als das dichte Kronendach von Bwindi: Bambuswald, Alpenmatten, Vulkankegel.
              </p>
              <p>
                In Mgahinga ist nur eine Gorilla-Familie habitualisiert: die Nyakagezi-Familie. Das bedeutet erheblich weniger tägliche Permit-Kontingente als in Bwindi. Es bedeutet auch: Wenn die Nyakagezi-Familie sich in Richtung Ruanda oder DR Kongo bewegt — was zeitweise vorkommt, da Gorillas keine Staatsgrenzen kennen — können Trekkings für diesen Tag nicht stattfinden. Die UWA verschiebt Permits in solchen Fällen, aber wer einen knappen Reisezeitplan hat, sollte das Risiko einkalkulieren. Bwindi hat dieses Problem nicht in demselben Ausmaß.
              </p>
              <p>
                Zum Schutz der umliegenden Gemeinden unterhält die Uganda Wildlife Authority in Mgahinga eine 16 Kilometer lange Steinmauer entlang der Parkgrenze. Sie verhindert, dass Gorillas auf die angrenzenden Felder ausweichen und Ernteschäden anrichten — ein konkretes Beispiel für die Mensch-Wildtier-Koexistenz, an der die UWA seit Jahren arbeitet.
              </p>
            </div>
          </section>

          {/* H2: Population */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Aktuelle Gorilla-Populationszahlen: Stand 2025
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der letzte vollständige Zensus der Berggorilla-Population in Uganda wurde im Zeitraum 2018 bis 2020 durchgeführt und ergab 459 Individuen. Uganda beherbergt damit knapp die Hälfte der weltweiten Berggorilla-Population. Die andere Hälfte lebt im Virunga-Massiv, das sich über das Grenzgebiet von Ruanda, der DR Kongo und Uganda erstreckt. Der ugandische Anteil konzentriert sich fast vollständig auf Bwindi.
              </p>
              <p>
                Zum Vergleich: In ganz Afrika gibt es noch rund 50.000 Gorillas — die große Mehrheit davon sind Westliche und Östliche Flachlandgorillas, die in anderen Ländern Zentralafrikas leben. Berggorillas (Gorilla beringei beringei) sind die seltenste Unterart: Insgesamt leben rund 1.063 Individuen in Uganda, Ruanda und der DR Kongo. Dazu kommen rund 3.800 Östliche Flachlandgorillas (Gorilla beringei graueri), die vor allem im Kahuzi-Biéga-Nationalpark in der DR Kongo leben und ebenfalls als kritisch gefährdet gelten.
              </p>
              <p>
                Berggorillas sind die einzige Menschenaffenart, deren Bestand in den vergangenen vier Jahrzehnten trotz aller Bedrohungen zugenommen hat. In den frühen 1980er-Jahren wurde die Weltpopulation auf unter 300 geschätzt. Der Anstieg auf über 1.000 ist das Ergebnis intensiver Schutzprogramme: Habituierungsarbeit, Anti-Wilderei-Maßnahmen, Community-Revenue-Sharing-Modelle und — nicht zuletzt — der Tourismus selbst. Jedes verkaufte Gorilla-Permit finanziert anteilig die Arbeit der Uganda Wildlife Authority und die Gemeindeprogramme rund um Bwindi.
              </p>
              <p>
                Uganda gilt international als Erfolgsbeispiel für naturschutzbasierten Tourismus. Bis Mitte der 1960er-Jahre war Uganda nach den Daten des UWA-Berichts "State of Wildlife Resources 2026" das führende Safari-Ziel Afrikas — noch vor Kenia und Tansania. Nach Jahrzehnten politischer Instabilität und Wilderei hat das Land diesen Status im Bereich der Primaten-Tourismus zurückgewonnen.
              </p>
              <p>
                Während unserer Besuche in Bwindi — zuletzt zwölf Tage im Oktober 2024 und dreizehn Tage im Mai 2026 — war die Präsenz der UWA-Ranger im und um den Park durchgehend sichtbar. Habituierte Gorilla-Familien werden täglich von spezialisierten Trackern lokalisiert, damit die Trekking-Gruppen morgens eine präzise Route erhalten. Das System funktioniert reibungslos und macht das Erlebnis trotz der unvorhersehbaren Terrain-Variablen planbar.
              </p>
            </div>
          </section>

          {/* H2: Gorilla Trekking Kongo */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Gorilla Trekking Kongo: Reisezeit und Vergleich mit Uganda
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Wer Gorilla Trekking im Kongo in Betracht zieht — konkret im Virunga National Park im Osten der DR Kongo — findet saisonal ähnliche Muster wie in Uganda: Die Trockenzeiten von Juni bis September und Dezember bis Februar sind auch dort die einfacheren Monate für das Trekking. Berggorillas im Virunga-Massiv folgen denselben Klimamustern wie die Bwindi-Populationen, da das gesamte Grenzgebiet klimatisch ähnlich strukturiert ist.
              </p>
              <p>
                Der wesentliche Unterschied liegt nicht im Klima, sondern in der Sicherheitslage und der logistischen Verlässlichkeit. Im Virunga National Park gab es in den vergangenen Jahren wiederholt Phasen, in denen der Park für Touristen geschlossen war — bedingt durch bewaffnete Konflikte im Osten der DR Kongo. Uganda bleibt für deutschsprachige Reisende die deutlich verlässlichere Option: die politische und Sicherheitslage ist stabil, Permits sind planbar buchbar, und die touristische Infrastruktur rund um Bwindi ist gut entwickelt.
              </p>
              <p>
                Für Reisende, die sowohl Ruanda als auch Uganda in eine Reise integrieren, ergibt sich ein weiterer Vergleichspunkt: das Volcanoes National Park in Ruanda bietet Gorilla Trekking ebenfalls ganzjährig, mit saisonal ähnlichen Verhältnissen. Die Permit-Preise in Ruanda liegen jedoch bei 1.500 US-Dollar pro Person — nahezu doppelt so hoch wie in Uganda. Wer ein tiefes Gorilla-Trekking-Erlebnis mit vernünftigem Budget sucht, findet es in Uganda.
              </p>
            </div>
          </section>

          {/* H2: Permit und Vorbereitung */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Gorilla Permit 2026: Buchung, Kosten und Vorbereitung
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ein Gorilla-Trekking-Permit kostet in der Hauptsaison 800 US-Dollar pro Person, in der Nebensaison (April, Mai, November) 450 US-Dollar. Das Permit gilt für genau eine Stunde bei einer habitualisierten Gorilla-Familie und schließt den Transfer zum Parkeingang nicht ein. Buchungen erfolgen über die Uganda Wildlife Authority direkt — online über die UWA-Website, persönlich im Gorilla Tourism Office in Kabale, oder über akkreditierte Reiseveranstalter.
              </p>
              <p>
                Für die Hochsaison — Juli, August, Dezember, Anfang Januar — sollte man neun bis zwölf Monate im Voraus buchen. Für die Nebensaison und die Schulterperioden (Juni, September, Oktober) sind Buchungen mit zwei bis vier Monaten Vorlauf meist realistisch. In der Regenzeit (April/Mai) sind in manchen Jahren auch Permits mit wenigen Wochen Vorlauf erhältlich. Die <a href="/gorilla-permit-verfuegbarkeit" className="text-jungle-700 underline hover:text-jungle-900">monatlichen Auslastungsdaten für Gorilla Permits</a> zeigen die Nachfrage für jeden Monat im Jahresvergleich.
              </p>
              <p>
                Für die praktische Vorbereitung: Feste Wanderschuhe mit gutem Profil sind unerlässlich — keine Turnschuhe. Eine Regenjacke gehört in jeden Rucksack, auch in der Trockenzeit (der Regenwald im Bwindi hat sein eigenes Klima). Gamaschen schützen in der Regenzeit vor Schlamm und Insekten. Kamera und Handy sollten in wasserdichten Hüllen gesichert sein. Am Eingang der meisten Sektoren können Porter engagiert werden — gegen ein Trinkgeld von üblicherweise 15 bis 20 US-Dollar. Auf steilem Terrain ist das eine echte Hilfe.
              </p>
              <p>
                Jede Trekkinggruppe besteht aus maximal acht Besuchern, wird von einem erfahrenen Guide geleitet und von bewaffneten UWA-Rangern begleitet. Das Briefing am Morgen klärt die Verhaltensregeln: kein direkter Augenkontakt mit den Gorillas, kein Blitz beim Fotografieren, Mindestabstand von sieben Metern, und — falls sich ein Gorilla nähert — ruhig stehen bleiben und den Blick senken. [ZITAT: Guide über Verhalten wenn ein Silberrücken auf einen zukommt]
              </p>
              <p>
                Wer nach Bwindi reist, übernachtet am besten in der Region — ein langer Anreiseweg am Trekking-Tag kostet Energie. Kabale ist der nächste Ausgangspunkt für den südlichen Bwindi (Rushaga, Nkuringo), Buhoma liegt direkt am nördlichen Parkeingang. Mehr zu Unterkünften und Anreise findet sich im <a href="/gorilla-trekking" className="text-jungle-700 underline hover:text-jungle-900">kompletten Gorilla Trekking Guide für Uganda</a>.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Gorilla Trekking Uganda" />

          {/* FAQ */}
          <section className="mb-12 mt-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur besten Reisezeit Gorilla Trekking Uganda
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
              Weiterführende Seiten zum Gorilla Trekking in Uganda
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { href: '/gorilla-trekking', label: 'Gorilla Trekking Uganda: Der komplette Guide', desc: 'Ablauf, Vorbereitung, Erfahrungen' },
                { href: '/nationalparks/bwindi', label: 'Bwindi Impenetrable National Park', desc: 'Sektoren, Fauna, Anreise' },
                { href: '/nationalparks/mgahinga', label: 'Mgahinga Gorilla National Park', desc: 'Nyakagezi-Familie, Vulkane, Permits' },
                { href: '/gorilla-permit-verfuegbarkeit', label: 'Gorilla Permit Verfügbarkeit', desc: 'Monatliche Auslastungsdaten' },
                { href: '/gorilla-permit-kosten', label: 'Gorilla Permit Kosten 2026', desc: 'Was kostet das Permit, wo buchen?' },
                { href: '/beste-reisezeit-uganda', label: 'Beste Reisezeit Uganda gesamt', desc: 'Alle Parks und Aktivitäten im Saisonkalender' },
                { href: '/gorilla-trekking-erfahrungsbericht', label: 'Gorilla Trekking Erfahrungsbericht', desc: 'Persönliche Eindrücke aus Bwindi' },
                { href: '/nationalparks-uganda', label: 'Alle Nationalparks Ugandas', desc: 'Zehn Parks im Überblick' },
              ].map(({ href, label, desc }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                  >
                    <span className="font-semibold text-jungle-800 block">{label}</span>
                    <span className="block text-gray-500 mt-0.5">{desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </main>
    </>
  )
}
