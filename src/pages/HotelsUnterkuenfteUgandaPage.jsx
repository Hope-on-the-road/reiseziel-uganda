import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'hotels-unterkuenfte-uganda'

export default function HotelsUnterkuenfteUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Welche Unterkunftstypen gibt es in Uganda?',
      antwort: 'Uganda bietet ein breites Spektrum: von einfachen Guesthouses und Backpacker-Hostels in Kampala und Jinja über komfortable Mid-Range-Hotels bis hin zu premiumen Öko-Lodges an den Rändern der Nationalparks. Die Kategorien unterscheiden sich stark in Komfort, Lage und Preis. Wer Safari-Unterkünfte in der Nähe von Bwindi oder Queen Elizabeth NP sucht, findet dort spezialisierte Lodges, die auf Natur-Touristen ausgerichtet sind.'
    },
    {
      frage: 'Wie teuer sind Hotels in Uganda?',
      antwort: 'Die Preisspanne ist erheblich. Ein einfaches Guesthouse oder Hostel-Bett in Kampala ist bereits für wenige US-Dollar pro Nacht erhältlich. Mid-Range-Hotels in Kampala oder Entebbe liegen je nach Ausstattung zwischen 50 und 150 US-Dollar pro Nacht. Luxuslodges in der Nähe von Nationalparks, insbesondere rund um Bwindi Impenetrable Forest und Queen Elizabeth NP, kosten häufig mehrere Hundert US-Dollar pro Nacht und beinhalten oft Vollpension sowie Aktivitäten. Eine detaillierte Kostenübersicht findet sich unter Reiseplanung und Kosten.'
    },
    {
      frage: 'Muss man Unterkünfte in Uganda weit im Voraus buchen?',
      antwort: 'Das hängt stark vom Reiseziel und der Reisezeit ab. In Kampala und Entebbe sind auch kurzfristige Buchungen meist möglich. Anders sieht es bei Lodges in der Nähe von Nationalparks aus, besonders rund um Bwindi: Da Gorilla-Permits weit im Voraus vergeben werden, sollten passende Übernachtungen ebenfalls frühzeitig reserviert werden. In der Hochsaison (Dezember bis Februar und Juni bis August) sind beliebte Lodges oft Monate im Voraus ausgebucht.'
    },
    {
      frage: 'Gibt es gute Unterkünfte direkt in den ugandischen Nationalparks?',
      antwort: 'In den meisten Nationalparks befinden sich Unterkünfte nicht innerhalb der Parkgrenzen, sondern unmittelbar an den Randbereichen. In Queen Elizabeth NP gibt es Angebote rund um das Mweya-Halbinsel-Gebiet. Bei Bwindi liegen mehrere hochwertige Lodges in Buhoma und im Umfeld anderer Parkzugänge. Im Murchison Falls NP gibt es Unterkünfte sowohl innerhalb als auch außerhalb des Parks. Die Nähe zur Wildnis ist ein entscheidendes Argument — wer direkt am Park übernachtet, kann Pirschfahrten früh morgens oder am späten Nachmittag ohne lange Anfahrt einplanen.'
    },
    {
      frage: 'Wie sind die Unterkünfte am Lake Bunyonyi?',
      antwort: 'Lake Bunyonyi im Südwesten Ugandas, nicht weit von der Grenze zu Ruanda, ist eine der beliebtesten Erholungsdestinationen im Land. Die Unterkünfte reichen von einfachen Camps auf Inselchen bis zu komfortablen Lodges mit Seeblick. Viele Reisende verbinden einen Aufenthalt am Lake Bunyonyi mit Gorilla-Trekking in Bwindi, da die beiden Ziele nur etwa eine Stunde Fahrt voneinander entfernt sind. Die Atmosphäre am See ist ruhiger und entspannter als in Kampala.'
    }
  ]

  return (
    <>
      <Head
        title="Hotels und Unterkünfte in Uganda | Reiseziel Uganda"
        description="Ueberblick ueber Unterkunftstypen in Uganda: von Budget-Hostels bis Oeko-Lodges. Wo uebernachten in Kampala, Bwindi und Queen Elizabeth NP?"
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Hotels und Unterkünfte in Uganda: Was Reisende erwartet
          </h1>

          {/* Eröffnungsabsatz */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Wer zum ersten Mal nach Uganda reist, ist häufig überrascht, wie breit das Angebot an Unterkünften tatsächlich ist. Von einfachen Guesthouses in belebten Stadtvierteln Kampalas bis zu abgelegenen Öko-Lodges am Rand dichter Regenwälder reicht die Bandbreite erheblich weiter als viele Reisende im Vorfeld erwarten. Während meiner Besuche in Uganda über mehrere Jahre hinweg — zuletzt im April, Mai und Juni 2026 — habe ich selbst in sehr unterschiedlichen Unterkünften übernachtet und konnte beobachten, wie sehr sich Qualität, Preis und Atmosphäre von Region zu Region unterscheiden.
            </p>
            <p>
              Uganda hat in den vergangenen Jahren seine Infrastruktur für internationalen Tourismus ausgebaut. Die zehn Nationalparks des Landes sind dabei die entscheidenden Magnete: Gorilla-Trekking im Bwindi Impenetrable Forest, Schimpansen-Trekking im Kibale, Löwen- und Büffelsafaris in Queen Elizabeth und Murchison Falls — diese Angebote ziehen Besucher aus aller Welt an und haben dazu geführt, dass rund um die Parks ein dichtes Netz an Unterkünften entstanden ist. Gleichzeitig bleibt Kampala als Hauptstadt und wirtschaftliches Zentrum des Landes der Ausgangspunkt für die meisten Uganda-Reisen.
            </p>
            <p>
              Genaue Zahlen darüber, wie viele Hotels und registrierte Unterkünfte Uganda insgesamt hat, sind nicht ohne Weiteres verfügbar. [RECHERCHE NOETIG] Offizielle Statistiken, die regelmäßig aktuell gehalten werden, fehlen oder sind öffentlich nicht zugänglich. Was sich verlässlich sagen lässt: Die Konzentration von Unterkünften folgt klar den Tourismusrouten — entlang der westlichen Parkachse von Bwindi über Queen Elizabeth bis Murchison Falls sowie in den urbanen Zentren Kampala und Entebbe.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Unterkünfte Uganda auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Unterkunftstypen:</span> Hostels, Guesthouses, Mid-Range-Hotels, Eco-Lodges, Luxury Tented Camps</div>
                <div><span className="font-semibold">Gesamtzahl Hotels:</span> [RECHERCHE NOETIG]</div>
                <div><span className="font-semibold">Hauptzentren:</span> Kampala, Entebbe, Bwindi, Queen Elizabeth NP, Murchison Falls, Kibale, Lake Bunyonyi, Jinja</div>
                <div><span className="font-semibold">Nationalparks:</span> 10 (Uganda Wildlife Authority)</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Budget-Bereich:</span> Hostels ab ca. 10–20 USD / Nacht</div>
                <div><span className="font-semibold">Mittelklasse:</span> ca. 50–150 USD / Nacht</div>
                <div><span className="font-semibold">Luxus-Lodges:</span> ab 200 USD / Nacht, oft Vollpension</div>
                <div><span className="font-semibold">Buchungsempfehlung:</span> Nationalpark-Lodges mindestens 3–6 Monate im Voraus</div>
              </div>
            </div>
          </div>

          {/* H2: Kampala und Entebbe */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Kampala und Entebbe: Stadthotels als Einstieg
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Nahezu jede Uganda-Reise beginnt und endet in Entebbe, wo sich der Entebbe International Airport befindet. Die Stadt selbst ist kleiner und ruhiger als Kampala, liegt direkt am Ufer des Viktoriasees und bietet eine gute Auswahl an Unterkünften für die erste oder letzte Nacht. Hotels in Entebbe haben den Vorteil kurzer Wege zum Flughafen und einer entspannteren Atmosphäre als die geschäftige Hauptstadt.
              </p>
              <p>
                Kampala, etwa 40 Kilometer von Entebbe entfernt, ist das wirtschaftliche und kulturelle Zentrum Ugandas. Die Stadt erstreckt sich über mehrere Hügel und ist deutlich dichter besiedelt und verkehrsreicher als Entebbe. Das Hotelangebot ist entsprechend vielfältig: internationale Kettenhotels im Stadtzentrum, günstigere Guesthouses in Wohnvierteln wie Bukoto oder Kololo sowie Backpacker-Hostels, die sich vor allem an jüngere Rucksackreisende richten. Bei unserem Aufenthalt im Januar 2026 in Kampala wurde deutlich, wie unterschiedlich die Qualität selbst innerhalb derselben Preisklasse sein kann — eine sorgfältige Recherche und aktuelle Gästebewertungen lohnen sich.
              </p>
              <p>
                Jinja, am Nil-Ausfluss des Viktoriasees gelegen und bekannt als Wassersport-Zentrum Ugandas, hat in den vergangenen Jahren ein wachsendes Angebot an Boutique-Hotels und Hostels entwickelt. Die Stadt zieht Reisende an, die Wildwasser-Rafting, Kajak oder Radtouren mit einem Stadtaufenthalt verbinden möchten. Die Atmosphäre ist entspannter als in Kampala, das Angebot aber auch kleiner.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Was Stadthotels bieten — und was nicht</h3>
              <p>
                Stadthotels in Kampala und Entebbe erfüllen andere Bedürfnisse als Lodges in der Nähe von Nationalparks. Sie sind gut für Ankünfte und Abreisen, für Visaangelegenheiten, Arztbesuche oder den Einkauf von Reisebedarf. Ein direktes Naturerlebnis bieten sie in der Regel nicht. Wer Uganda wegen seiner Wildtiere besucht, sollte Kampala nur als Durch- oder Einstiegsstation betrachten und genug Zeit für die eigentlichen Ziele einplanen — Bwindi, Queen Elizabeth, Murchison Falls oder Kibale.
              </p>
            </div>
          </section>

          {/* H2: Unterkünfte an den Nationalparks */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Lodges an den Nationalparks: Wo das eigentliche Uganda-Erlebnis beginnt
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die Unterkünfte rund um Ugandas Nationalparks sind eine Kategorie für sich. Sie sind nicht einfach Hotels, die sich zufällig in der Nähe einer Sehenswürdigkeit befinden — viele von ihnen sind Teil des Reiseerlebnisses selbst. Eine Lodge in Buhoma, dem nördlichen Eingang zu Bwindi Impenetrable Forest, bedeutet: Aufwachen mit Blick in den Regenwald, Vogelstimmen beim Frühstück, und ein Gorilla-Permit für den nächsten Morgen. Die Atmosphäre dieser Unterkünfte ist schwer zu beschreiben, wenn man sie nicht erlebt hat.
              </p>
              <p>
                Bei meinen Aufenthalten in Buhoma im Oktober 2024, Januar 2026 und Mai 2026 waren es gerade die einfacheren Unterkünfte vor Ort, die den authentischsten Eindruck hinterließen. Viele kleinere Lodges und Guesthouses werden von einheimischen Ugandischen Unternehmern betrieben, was bedeutet, dass das Geld direkter in der lokalen Wirtschaft bleibt. Die Qualität des Essens, das oft aus regionalen Zutaten zubereitet wird, ist häufig überraschend gut.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Bwindi und Lake Bunyonyi: Süd- und Südwestuganda</h3>
              <p>
                Bwindi Impenetrable Forest hat mehrere Zugangspunkte: Buhoma im Norden, Ruhija im Osten, Rushaga und Nkuringo im Süden. Um jeden dieser Zugänge haben sich Unterkünfte in verschiedenen Preisklassen angesiedelt, von einfachen Campsites bis zu teuren Luxuslodges mit Wellness-Angeboten und spektakulärem Blick über die Bwindi-Täler. Wer ein Gorilla-Permit für Buhoma hat, übernachtet am besten in Buhoma — der Fahrzeug-Transfer zu anderen Zugängen ist aufwendig und durch schlechte Straßen erschwert.
              </p>
              <p>
                Lake Bunyonyi liegt etwa eine Stunde südöstlich von Bwindi und ist ein beliebter Erholungsort. Der von kleinen Inseln durchzogene See bietet eine gänzlich andere Stimmung als die dichten Bergwälder: ruhig, weitläufig, mit gemäßigtem Klima. Unterkünfte reichen von einfachen Camps auf Inseln, die nur per Boot erreichbar sind, bis zu komfortablen Seelodges mit Terrassen. Viele Reisende verbringen hier ein oder zwei Nächte, bevor oder nachdem sie Gorilla-Trekking in Bwindi absolvieren. Mehr zu Lodges in dieser Region findet sich unter Lodges Bwindi und Lake Bunyonyi.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Queen Elizabeth und Murchison Falls: Westuganda</h3>
              <p>
                Queen Elizabeth Nationalpark hat mehrere Übernachtungsoptionen in unterschiedlichen Lagen. Das Mweya-Halbinsel-Gebiet gilt als hochwertigste Adresse innerhalb des Parkumfelds: Die Halbinsel liegt zwischen Lake Edward und Lake George und bietet Aussicht auf Wasserbüffel, Nilpferde und gelegentlich Löwen. Abseits von Mweya gibt es preiswertere Alternativen in Kasese und den umliegenden Ortschaften — mit weniger Komfort, aber kürzeren Wegen zu günstigen Restaurants und lokalen Märkten.
              </p>
              <p>
                Murchison Falls Nationalpark liegt im Norden Ugandas, was bedeutet, dass die Anfahrt von Kampala drei bis fünf Stunden dauert. Unterkünfte gibt es sowohl innerhalb des Parks (in der Nähe der Paramu-Hochebene) als auch in und um Masindi, der nächstgelegenen Kleinstadt. Wer innerhalb des Parks übernachtet, hat den Vorteil kürzerer Wege zu Pirschfahrten und Nilbootsfahrten — und einer nächtlichen Atmosphäre, die man in Stadtunterkünften nicht findet.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kibale: Schimpansen und Regenwald</h3>
              <p>
                Kibale National Park im Westen Ugandas ist der beste Ort in Uganda für Schimpansen-Trekking. Die umliegenden Unterkünfte sind auf Reisende ausgerichtet, die Primaten-Erlebnisse suchen — und sie ergänzen häufig einen Besuch in Queen Elizabeth NP, da beide Parks gut kombinierbar sind. Die Auswahl ist kleiner als in Bwindi, aber es gibt sowohl Budget-Optionen als auch hochwertige Lodges. In der Nähe liegt auch Bigodi Wetland Sanctuary, ein ausgezeichnetes Vogelbeobachtungsgebiet, das einige Lodges in ihr Programm einbeziehen.
              </p>
            </div>
          </section>

          {/* H2: Öko-Lodges und nachhaltiger Tourismus */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Öko-Lodges in Uganda: Komfort und Verantwortung im Gleichgewicht
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ein wachsender Anteil der Unterkünfte in Uganda vermarktet sich als Öko-Lodge oder nachhaltiges Reiseziel. Hinter diesem Begriff steckt nicht immer dasselbe Konzept — manche Lodges meinen damit vor allem die Nähe zur Natur, andere haben tatsächlich umfassende Nachhaltigkeitsprogramme mit Solarenergie, Wasserrecycling und Programmen zur Unterstützung lokaler Gemeinden. Für Reisende, denen es wichtig ist, womit ihre Unterkunft tatsächlich punktet, lohnt sich ein genauerer Blick auf konkrete Maßnahmen statt auf Marketingvokabular.
              </p>
              <p>
                Einige der bekanntesten Öko-Lodges rund um Bwindi haben eigene Community-Projekte: Sie kaufen Lebensmittel von lokalen Bauern, beschäftigen Personal ausschließlich aus den umliegenden Dörfern und finanzieren Schulprojekte oder medizinische Einrichtungen. Ich habe während meiner Aufenthalte in Buhoma beobachtet, wie unterschiedlich dieser Ansatz in der Praxis aussieht — manche Lodges haben eine echte lokale Verankerung, andere kaufen ihre Lebensmittel hauptsächlich in Kampala ein und transportieren auch das meiste Personal von außerhalb.
              </p>
              <p>
                Susanne Suer und ich haben beim Aufenthalt im Januar 2026 besonders auf diesen Aspekt geachtet. Die Wahl der Unterkunft ist bei Uganda-Reisen nicht nur eine Frage des persönlichen Komforts — sie hat direkte Auswirkungen darauf, welche lokalen Wirtschaftskreisläufe gestärkt werden. Wer in einer Lodge übernachtet, die konsequent bei lokalen Zulieferern einkauft, unterstützt Landwirte und Kleinhändler, die sonst kaum Zugang zum internationalen Tourismus hätten.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Luxus-Lodges: Was rechtfertigt den hohen Preis?</h3>
              <p>
                Preisniveaus von 300 bis 500 US-Dollar pro Nacht für eine Luxuslodge in Uganda sind keine Seltenheit. Was ist in diesem Preis enthalten? In der Regel Vollpension, Transfers zwischen Aktivitäten, Guide-Leistungen, manchmal sogar ein inkludiertes Gorilla-Permit. Diese All-inclusive-Pakete können für bestimmte Reisende tatsächlich effizienter sein als Einzelbuchungen — besonders wenn die Organisation der Reise extern bleiben soll. Der Aufpreis gegenüber Mid-Range-Lodges ist erheblich, das Komfortniveau aber ebenfalls deutlich höher: größere Zimmer, eigene Terrassen, fließend warmes Wasser (was in abgelegenen Gebieten keine Selbstverständlichkeit ist) und häufig ein Pool.
              </p>
              <p>
                Wer Uganda in erster Linie wegen der Tierwelt besucht und weniger Zeit im Zimmer verbringen möchte, kann mit einer gut gewählten Mid-Range-Lodge genauso gute Nationalpark-Erlebnisse machen wie mit der teuersten Unterkunft am Ort. Das Gorilla-Permit kostet für alle Besucher denselben Preis, unabhängig davon, wo sie übernachten. Was sich unterscheidet, ist das Erlebnis vor und nach dem Trekking — und wie gut ausgeruht man morgens um sechs beim Briefing erscheint.
              </p>
            </div>
          </section>

          {/* H2: Praktische Tipps */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Praktische Hinweise für die Unterkunftssuche in Uganda
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die Unterkunftssuche für Uganda unterscheidet sich in einigen Punkten von der Buchung eines Stadthotels in Europa. Viele der kleinen Lodges in der Nähe der Nationalparks sind nicht auf großen Buchungsplattformen gelistet oder pflegen ihre Einträge dort nur unregelmäßig. Aktuelle Verfügbarkeit, Preise und konkrete Zimmerbeschreibungen erfährt man oft zuverlässiger per direkter E-Mail-Anfrage. Das klingt umständlicher, führt aber häufig auch zu persönlicherer Beratung und manchmal besseren Konditionen.
              </p>
              <p>
                Straßenqualität ist ein unterschätzter Faktor bei der Unterkunftswahl. Was auf der Karte wie eine kurze Strecke von zehn Kilometern aussieht, kann auf unbefestigten Pisten in der Regenzeit eine Stunde Fahrt bedeuten. Wer seine Unterkunft strategisch wählt — also möglichst nah am Parkeingang oder am geplanten Aktivitätsschwerpunkt — spart täglich Zeit und Energie. Das gilt besonders für Bwindi, wo die verschiedenen Parkzugänge durch teils sehr schlechte Bergstraßen miteinander verbunden sind.
              </p>
              <p>
                Stromversorgung und Internetverbindung sind in Uganda außerhalb der Städte nicht immer zuverlässig. In Nationalpark-Lodges laufen Generatoren oft nur zu bestimmten Zeiten. Wer auf ständige Konnektivität angewiesen ist, sollte das vorab klären. Wer die Abgeschiedenheit schätzt, wird es als Teil des Erlebnisses empfinden — in Bwindi abgeschnitten von allem außer dem Rauschen des Waldes zu sein, hat eine eigene Qualität.
              </p>
              <p>
                Unterkünfte am Lake Bunyonyi, in Kibale oder an der Murchison Falls-Route sind in der Regel günstiger als vergleichbare Angebote in Bwindi — dort treibt die hohe Nachfrage durch Gorilla-Tourismus die Preise. Wer ein knappes Budget hat, sollte prüfen, ob ein kürzerer Aufenthalt in einer teureren Bwindi-Lodge und mehr Nächte an anderen, preiswerteren Orten die bessere Gesamtlösung ist.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Hotels und Unterkünfte Uganda" />

          {/* FAQ */}
          <section className="mb-12 mt-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu Hotels und Unterkünften in Uganda
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
                { href: '/unterkunft-uganda', label: 'Unterkunft Uganda: Reisetypen und Empfehlungen' },
                { href: '/lodges-bwindi-lake-bunyonyi', label: 'Lodges Bwindi und Lake Bunyonyi' },
                { href: '/hotels-uganda-regionen', label: 'Hotels nach Regionen in Uganda' },
                { href: '/reiseplanung/kosten', label: 'Reiseplanung: Kosten und Budget' },
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
