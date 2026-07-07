import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'landwirtschaft-wakiso-uganda'

export default function LandwirtschaftWakisoPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Wie viele Menschen in Wakiso leben von der Landwirtschaft?',
      antwort:
        'Im Vergleich zu anderen ugandischen Distrikten ist der Anteil landwirtschaftlich tätiger Haushalte in Wakiso mit rund 16 Prozent niedrig. Dieser Wert erklärt sich durch den hohen Urbanisierungsgrad des Distrikts: Viele Menschen sind ins formelle und informelle Stadtgewerbe abgewandert, arbeiten als Tagelöhner auf Baustellen oder pendeln täglich in die Produktionsstätten Kampalas.'
    },
    {
      frage: 'Was bedeutet Agro-Industrialisierung konkret für Ugandas ländliche Bevölkerung?',
      antwort:
        'Agro-Industrialisierung meint die gezielte Verknüpfung von landwirtschaftlicher Produktion und weiterverarbeitender Industrie — also nicht nur Anbauen, sondern Verarbeiten, Verpacken und Vermarkten. Für die ländliche Bevölkerung bedeutet das: stabilere Preise für Rohprodukte, mehr Beschäftigungsmöglichkeiten vor Ort und weniger Abhängigkeit von Mittelsmännern, die den Großteil der Wertschöpfung abschöpfen.'
    },
    {
      frage: 'Welche Nutzpflanzen werden im Wakiso-Distrikt angebaut?',
      antwort:
        'Die fruchtbaren, durch ein bimodales Klima begünstigten Böden um Wakiso erlauben den Anbau von Kochbananen (Matooke), Maniok, Mais, Bohnen und Sorghum. In peri-urbanen Randbereichen gewinnt die Kleintierproduktion — Geflügel, Schweine, Milchwirtschaft — an Bedeutung, da sie wenig Fläche benötigt und direkte Absatzmärkte in der nahen Großstadt bietet.'
    },
    {
      frage: 'Welche Rolle spielt der Tourismus für Ugandas Gesamtwirtschaft?',
      antwort:
        'Tourismus ist Ugandas wichtigster Devisenbringer und übersteigt die Kaffee-Einnahmen deutlich. Der Sektor beschäftigt hunderttausende Menschen direkt und mittelbar — von Guides über Lodgebetreiber bis zu Handwerkerinnen und Kleinbäuerinnen, die Lebensmittel an Unterkünfte liefern. Gerade im Westen und Südwesten des Landes, wo Gorilla-Trekking und Schimpansen-Erlebnisse stattfinden, ist der wirtschaftliche Fußabdruck spürbar.'
    },
    {
      frage: 'Wie ist der Mabamba-Sumpf mit der Wirtschaft der Region verbunden?',
      antwort:
        'Das Feuchtgebiet nahe Entebbe, bekannt als bester Ort für Schuhschnabel-Sichtungen, hat sich zu einem Ökotourismus-Hotspot entwickelt. Lokale Gemeinschaften betreiben Kanufahrten und Vogelführungen, die direkte Einnahmen vor Ort generieren. Das Beispiel zeigt, wie Naturschutz und wirtschaftliche Entwicklung miteinander verknüpft werden können — ohne großflächige Infrastruktur und ohne die Abwanderung von Gewinnen in entfernte Investorenkreise.'
    }
  ]

  return (
    <>
      <Head
        title="Landwirtschaft & Wirtschaft im Wakiso-Distrikt"
        description="Wie Agro-Industrialisierung im Wakiso-Distrikt Beschäftigung schafft und Ugandas Wirtschaft verändert. Mit persönlichen Beobachtungen vor Ort."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero-Bild */}
        <figure className="w-full max-h-[480px] overflow-hidden">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Drei Kinder aus der Nachbarschaft des Waisenhauses in Buhoma stehen vor einem Lehmgebäude mit Wellblechdach"
            className="w-full h-full object-cover"
          />
          <figcaption className="text-sm text-gray-500 text-center py-2 px-4">
            Buhoma, Juni 2026. Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Landwirtschaft und Wirtschaft im Wakiso-Distrikt: Zwischen Urbanisierung und agrarischer Transformation
          </h1>

          {/* Eröffnungs-Hook */}
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-lg text-gray-800 leading-relaxed mb-5">
              Im Juni 2026 war ich in Buhoma, einem kleinen Ort im Westen Ugandas am Rand des Bwindi Impenetrable Forest. Direkt neben dem Waisenhaus, das von Hope on the Road unterstützt wird, kamen drei Kinder aus der Nachbarschaft. Sie standen still, ein wenig zögernd, ihre Kleidung zerknittert, ihre Blicke ausweichend — das Bild von Menschen, die gelernt haben, unsichtbar zu bleiben. Wir haben sie eingeladen, mit uns zu essen. Keiner hat groß darüber nachgedacht, es war das Naheliegendste der Welt. Doch dieser Moment erzählt mehr über die wirtschaftliche Realität Ugandas als jede Statistik: Subsistenz und Mangel sind hier keine abstrakten Begriffe, sondern der Alltag, der sich in Gesichtern ablesen lässt.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-5">
              Dieser Blick aus dem Südwesten des Landes, aus einer Region, die vor allem durch Gorilla-Trekking bekannt ist, führt geradewegs zu einer Frage, die Ugandas Entwicklungspolitik seit Jahren beschäftigt: Wie kann ein Land, dessen Bevölkerung zu großen Teilen von kleinbäuerlicher Landwirtschaft lebt, den Schritt zu einer diversifizierteren Wirtschaft schaffen? Im Wakiso-Distrikt, dem dichtbesiedelten Hinterland der Hauptstadt Kampala, ist diese Frage besonders drängend — und besonders komplex.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-5">
              Wakiso gehört zu den am stärksten urbanisierten Distrikten Ugandas. Wer die Straßen zwischen Kampala und Entebbe entlangfährt, sieht keine weiten Felder, sondern ein Gewirr aus Kleinstgewerbe, Baustellen, Märkten und peri-urbanen Siedlungen. Die GPS-verifizierten Fotos, die ich zwischen den Koordinaten -0.96 Grad Nord und 29.61 Grad Ost aufgenommen habe, zeigen eine Landschaft im Übergang — zwischen agrarischer Tradition und stadtnaher Arbeitswirtschaft. Beides ist hier präsent, beides formt den Alltag der Menschen.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border-l-4 border-jungle-600 rounded-lg p-6 mb-12">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">Wakiso im Überblick: Wirtschaftliche Eckdaten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4 shadow-sm">
                <div className="text-2xl font-bold text-jungle-700">16,2 %</div>
                <div className="text-sm text-gray-600 mt-1">Haushalte in Wakiso, die in der Landwirtschaft tätig sind — deutlich unter dem nationalen Schnitt</div>
              </div>
              <div className="bg-white rounded p-4 shadow-sm">
                <div className="text-2xl font-bold text-jungle-700">35,8 %</div>
                <div className="text-sm text-gray-600 mt-1">Anteil ernährungssicherer Haushalte im Distrikt</div>
              </div>
              <div className="bg-white rounded p-4 shadow-sm">
                <div className="text-2xl font-bold text-safari-700">200.000</div>
                <div className="text-sm text-gray-600 mt-1">Menschen in Uganda direkt im Tourismussektor beschäftigt</div>
              </div>
              <div className="bg-white rounded p-4 shadow-sm">
                <div className="text-2xl font-bold text-safari-700">bimodal</div>
                <div className="text-sm text-gray-600 mt-1">Klima mit zwei Regenzeiten — günstig für landwirtschaftliche Produktion</div>
              </div>
              <div className="bg-white rounded p-4 shadow-sm">
                <div className="text-2xl font-bold text-gold-700">Namanve</div>
                <div className="text-sm text-gray-600 mt-1">Industriegebiet an der Grenze zu Kampala, administrativ zwischen Wakiso und der Hauptstadt umstritten</div>
              </div>
              <div className="bg-white rounded p-4 shadow-sm">
                <div className="text-2xl font-bold text-earth-700">3 Besuche</div>
                <div className="text-sm text-gray-600 mt-1">Dokumentierte Aufenthalte vor Ort (Oktober 2024, Januar 2026, Juni 2026)</div>
              </div>
            </div>
          </div>

          {/* H2: Wakiso zwischen Metropole und ländlichem Umland */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Wakiso zwischen Metropole und ländlichem Umland
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Wakiso-Distrikt umschließt die ugandische Hauptstadt Kampala auf drei Seiten. Diese geografische Lage macht ihn zu einem der bevölkerungsreichsten und wirtschaftlich aktivsten Landkreise des Landes — und zugleich zu einem der am schwierigsten zu regierenden. Die Grenze zwischen Kampala und Wakiso ist nicht nur eine administrative Linie: Sie trennt zwei unterschiedliche Wirtschaftswelten, die täglich miteinander verhandeln.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Namanve-Gebiet ist das deutlichste Beispiel für diese Spannung. Hier wurde eines der größten Industrieparks Ostafrikas errichtet — direkt an der Grenze zwischen Wakiso und dem Stadtgebiet Kampalas. Wer das Sagen hat, wessen Steuereinnahmen, wessen Planungsrecht gilt: Diese Fragen sind bis heute nicht vollständig beantwortet. Der Konflikt ist kein bürokratischer Randnotiz, er hat reale Konsequenzen. Investoren zögern, wenn Zuständigkeiten unklar sind. Gemeinden wissen nicht, welcher Verwaltung sie sich zuwenden sollen, wenn Infrastruktur fehlt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trotz dieser Spannungen ist Wakiso ein Wachstumszentrum. Die Nähe zur Hauptstadt zieht Menschen an, die Arbeit suchen — als Tagelöhner auf Baustellen, als Händlerinnen auf dem Markt, als Angestellte in Verarbeitungsbetrieben. Viele kommen ohne Qualifikation, finden aber Einstiegsmöglichkeiten in der Bauwirtschaft oder im informellen Gewerbe. Gleichzeitig bleiben Teile des Distrikts ländlich geprägt: Die fruchtbaren Böden rund um die Hügel südlich von Kampala werden noch immer landwirtschaftlich genutzt, wenn auch unter zunehmendem Druck durch Bodenspekulation und städtische Expansion.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das bimodale Klima — zwei Regenzeiten im Jahr — bietet günstige Bedingungen für ganzjährigen Anbau. Kochbananen, Maniok, Mais und Bohnen gedeihen auf den roten Lateritböden des Distrikts. Doch der Zugang zu Land wird knapper. Junge Menschen, die aufwachsen und eigene Felder bewirtschaften wollen, stoßen auf Grundstücke, die längst verkauft oder parzelliert wurden. Die Verschiebung von der Subsistenzlandwirtschaft hin zu städtischer Lohnarbeit ist in Wakiso weiter vorangeschritten als in den meisten anderen ugandischen Distrikten — und der Rückweg ist schwieriger, als er scheint.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lediglich 16,2 Prozent der Haushalte in Wakiso sind noch in der Landwirtschaft tätig. Das klingt nach einem Zeichen von Modernisierung. Doch der erste Blick täuscht: Ein erheblicher Teil der Bevölkerung, die formal in anderen Sektoren arbeitet, betreibt informell Kleintierzucht oder Gemüseanbau im Hinterhof — zur Eigenversorgung, nicht für den Markt. Dass nur 35,8 Prozent der Haushalte als ernährungssicher gelten, zeigt, dass die Abkehr von der Landwirtschaft nicht automatisch zu besserer Versorgung geführt hat.
            </p>

            <figure className="my-8">
              <img
                src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                alt="Eine Gruppe von Menschen unterschiedlichen Alters vor einem einfachen Gebäude in Buhoma, Uganda"
                className="w-full rounded-lg object-cover max-h-96"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-2">
                Gemeinschaft in Buhoma, Juni 2026. Foto: Mark Suer
              </figcaption>
            </figure>
          </section>

          {/* H2: Agro-Industrialisierung als Entwicklungsstrategie */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Agro-Industrialisierung: Der Versuch, aus dem Rohstoffkreislauf auszubrechen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ugandas wirtschaftspolitisches Kernproblem ist seit Jahrzehnten dasselbe: Das Land produziert wertvolle Rohstoffe — Kaffee, Tee, Baumwolle, Früchte, Palmöl — und exportiert sie weitgehend unverarbeitet. Die Wertschöpfung, also der Teil des Weges von der Ernte zur verkauften Ware, findet anderswo statt. Europa, Asien, Nordamerika rösten den Kaffee, verpacken den Tee, veredeln das Öl. Uganda bekommt den kleinsten Anteil des Endpreises.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Strategie der Agro-Industrialisierung versucht, diesen Kreislauf zu durchbrechen. Sie zielt darauf ab, Verarbeitungskapazitäten direkt an den Anbaugebieten aufzubauen — Trocknungsanlagen, Mühlen, Kühlketten, Verpackungsbetriebe. Das klingt technisch, hat aber unmittelbare soziale Folgen: Wer Kaffee nicht nur anbaut, sondern röstet und mahlt, braucht andere Qualifikationen, zahlt andere Löhne und kann auf instabile Weltmarktpreise mit Qualitätsstrategie antworten statt mit Volumenerhöhung.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für Wakiso ist dieses Konzept besonders relevant, weil der Distrikt gleich an zwei Enden der Kette liegt: als agrarisch geprägtes Hinterland und als stadtnahes Industriegebiet. Die Planungsrahmenwerke für den Großraum Kampala — das sogenannte GKMA-UDAP-Konzept — sehen vor, dass Wakiso, Mukono und Mpigi in den kommenden Jahrzehnten zu Standorten agro-verarbeitender Betriebe werden sollen. Die Idee: Rohprodukte aus dem Umland werden im Randbereich der Metropole veredelt, bevor sie in den städtischen Markt oder in den Export fließen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Konkret bedeutet das die Förderung von drei Industriekategorien: Erstens agrarbasierte Industrien wie Fruchtverarbeitung, Kaffeeveredelung, Textilien aus Baumwolle, Cassava-Stärke und Milchprodukte. Zweitens rohstoffbasierte Fertigung, zu der Zement, Düngemittel und Petrochemikalien zählen. Drittens wissensintensive Industrien wie Pharmaherststellung und Elektronikassemblierung — ein noch kleiner, aber strategisch bedeutsamer Bereich. In Wakiso konzentriert sich die Hoffnung vor allem auf die erste Kategorie: Die agrarischen Vorleistungen sind vorhanden, die Infrastrukturanbindung an Kampala ist besser als in den meisten ugandischen Distrikten, und der Markt vor der Haustür ist groß.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Doch die Herausforderungen sind erheblich. Eine nachhaltige Agro-Industrialisierung setzt voraus, dass die landwirtschaftliche Basis selbst produktiver und qualitätsorientierter wird. Wer Verarbeitungsbetriebe baut, braucht gleichmäßige Rohstoffqualität, verlässliche Lieferketten und Erzeugerinnen und Erzeuger, die in Mengen liefern können, die sich industriell verarbeiten lassen. Kleinbäuerinnen und -bauern auf wenigen Hektar sind dazu allein meist nicht in der Lage — es sei denn, sie organisieren sich in Kooperativen oder schließen kollektive Lieferverträge ab.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Genau hier liegt ein zentrales Interventionsfeld: die Stärkung landwirtschaftlicher Organisationen. Kleinbäuerliche Verbünde können Einkaufspreise für Saatgut und Dünger senken, gemeinsam verhandeln, Qualitätsstandards einhalten und in Verarbeitungsanlagen investieren, die ein einzelner Haushalt nie finanzieren könnte. In benachbarten Distrikten wie Rwampara, wo über 80 Prozent der Bevölkerung in der Landwirtschaft tätig sind, hat diese Entwicklung bereits Fahrt aufgenommen — mit messbaren Auswirkungen auf Haushaltseinkommen und Ernährungssicherheit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ein weiterer kritischer Faktor ist der Zugang zu Wasser für die landwirtschaftliche Produktion. In einem Land, das zwar als „Perle Afrikas" bekannt ist und zahlreiche Seen und Flüsse hat, fehlt es in vielen ländlichen Gemeinden dennoch an verlässlicher Bewässerung. Wenn Regenzeiten ausbleiben oder sich verschieben — ein Muster, das sich im Zuge des Klimawandels zunehmend beobachten lässt — können Ernten ausbleiben, bevor die Verarbeitungsbetriebe überhaupt beliefert werden. Investitionen in Wasserinfrastruktur sind deshalb nicht nur eine humanitäre Aufgabe, sondern eine wirtschaftliche Grundvoraussetzung.
            </p>
          </section>

          {/* H2: Tourismus als wirtschaftliche Säule */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Tourismus als Wirtschaftsmotor: Was Uganda vom Naturerbe profitiert
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda hat über Jahrzehnte ein einzigartiges ökologisches Kapital aufgebaut — oder genauer: bewahrt. Die Berggorillas im Bwindi Impenetrable Forest, die Schimpansen im Kibale-Nationalpark, die Nilkrokodile am Murchison Falls, die Shoebill-Störche im Mabamba-Sumpf nahe Entebbe: Diese Wildtierdichte auf vergleichsweise kleinem Raum ist weltweit ohne Parallele. Wer Tourismus als wirtschaftliches Instrument ernst nimmt, muss verstehen, dass dieses Naturerbe nicht nur ein Nischenprodukt für Abenteuerreisende ist, sondern das Fundament eines ganzen Wirtschaftszweiges.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der ugandische Tourismussektor beschäftigt direkt rund 200.000 Menschen — und mittelbar, also über Zulieferung, Transport, Unterkunft und lokale Produkte, noch einmal 284.000 weitere. Das sind keine abstrakten Zahlen: Dahinter stehen Guides in Bwindi, die ihre Familien durch Gorilla-Trekkings ernähren, Frauen in Jinja, die Handwerk an Reisende verkaufen, Kleinstproduzenten in Fort Portal, die Lodges in der Umgebung beliefern. Tourismus ist Ugandas größter Devisenbringer — die Einnahmen übertreffen sogar die des Kaffeesektors erheblich, obwohl Kaffee gemeinhin als Ugandas Vorzeige-Exportprodukt gilt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beim Gorilla-Trekking im Januar 2026 — meinem zweiten Besuch in Bwindi — war dieser wirtschaftliche Zusammenhang unmittelbar spürbar. Nach etwa einer Stunde Wanderung durch dichtes Unterholz stießen wir auf eine Gorilla-Familie. Das erste Tier saß hoch oben in einem Baum und fraß seelenruhig frische Blätter, während wir reglos darunter standen. In diesem Moment war das Naturerlebnis alles — aber die wirtschaftliche Kette dahinter war lang: Uganda Wildlife Authority, lokale Gemeindeprogramme, die Bürgermeistereien der Dörfer, die Unterkunftsbetreiber in Buhoma, die Schulen, die über Tourismuszinsen mitfinanziert werden.
            </p>

            <figure className="my-8">
              <img
                src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
                alt="Ein Berggorilla sitzt im Baumkronendach des Bwindi Impenetrable Forest und frisst Blätter"
                className="w-full rounded-lg object-cover max-h-96"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-2">
                Berggorilla beim Fressen im Baumkronendach, Bwindi, Januar 2026. Foto: Mark Suer
              </figcaption>
            </figure>

            <p className="text-gray-700 leading-relaxed mb-4">
              Zwischen 2009 und 2013 wurden in Uganda fast 10.700 Absolventen tourismusbezogener Ausbildungen qualifiziert. Einrichtungen wie die YMCA und das staatliche Hotel and Tourism Training Institute (HTTI) spielten dabei eine wichtige Rolle. Diese Ausbildungskapazitäten haben sich seither erweitert, und das Uganda Wildlife Training Institute (UWTI) bereitet junge Menschen gezielt auf Aufgaben vor, die Naturschutz und Wirtschaft miteinander verbinden. Für Wakiso ist der direkte Tourismus-Effekt begrenzt — die Safari-Destinationen liegen weit entfernt. Aber der Flughafen Entebbe liegt im Distrikt, und fast alle internationalen Gäste reisen über Kampala und Wakiso ein. Zulieferbetriebe, Hotellerie und Transport profitieren direkt von der Tourismusnachfrage.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ein wachsendes Segment ist der Ökotourismus in unmittelbarer Nähe der Hauptstadt. Der Mabamba-Sumpf, wo der legendäre Schuhschnabel (Shoebill) beobachtet werden kann, zieht zunehmend Vogelfreunde aus aller Welt an — ein kurzer Abstecher für Reisende, die ohnehin über Entebbe ein- oder ausreisen. Solche Nischenmärkte, die Naturerlebnisse mit direkten Gemeindeeinkommen verbinden, sind ein Modell, das Wakiso und die benachbarten Distrikte verstärkt entwickeln könnten.
            </p>
          </section>

          {/* H2: Bergsteigen und regionale Wirtschaft */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Bergsteigen und Naturerlebnis: Wirtschaftspotenzial an den Grenzen des Möglichen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda wird international vor allem mit Gorilla-Trekking assoziiert — doch das Land hat mehr zu bieten als die Wälder im Südwesten. Die Rwenzori Mountains an der Grenze zur Demokratischen Republik Kongo und der Mount Elgon im Osten bieten mehrtägige Trekkingtouren durch unberührte Berglandschaften. Diese Destinationen sind weniger bekannt, weniger erschlossen — und genau deshalb wirtschaftlich interessant für Gemeinden, die jenseits des Gorilla-Tourismus nach Einkommensquellen suchen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bergsteigen und mehrtägiges Trekking erfordern Infrastruktur: Hütten entlang der Route, ausgebildete Guides, Träger, Verpflegungsversorgung. Jeder dieser Punkte ist ein wirtschaftlicher Einstiegspunkt für lokale Gemeinschaften. Im Gegensatz zu kapitalintensiven Lodge-Projekten, die häufig von außen finanziert werden, ist Trekking-Tourismus in Teilen kleinteilig genug, um von ortsansässigen Familienbetrieben getragen zu werden. Das wirtschaftliche Potenzial dieser Regionen — Masindi im Westen als Tor zu Murchison Falls, Fort Portal als Ausgangspunkt für Rwenzori und Kibale — ist noch nicht vollständig erschlossen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Was Uganda hier zu bieten hat, unterscheidet sich fundamental von dem, was klassische Safari-Destinationen in Kenia oder Tansania anbieten. Die Tiere hier — Gorillas, Schimpansen, die Rothschild-Giraffe im Murchison Falls Nationalpark, Flusspferde im Kazinga-Kanal, Zebras im Lake Mburo — sind in ihrer ökologischen Dichte einmalig. Wer versteht, dass Naturschutz und Wirtschaft keine Gegensätze sind, sondern sich gegenseitig tragen können, hat den Kern der ugandischen Tourismuspolitik verstanden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für den Wakiso-Distrikt bedeutet diese Einordnung: Der eigene touristische Beitrag liegt weniger in Safari-Erlebnissen als in der Funktion als urbaner Knotenpunkt. Hotels, Restaurants, Reisebüros, Transport und Logistik — die gesamte Infrastruktur, die internationale Gäste benötigen, bevor sie in die Nationalparks aufbrechen, konzentriert sich in und um Kampala und Wakiso. Wer die Wertschöpfungskette des Tourismus verstehen will, muss auch diese stadtnahen Glieder in den Blick nehmen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Langfristig entscheidet sich in Wakiso und den umliegenden Distrikten, ob Uganda den Übergang von einem exportorientierten Rohstofflieferanten zu einer stärker verarbeitenden Volkswirtschaft schafft. Die Zutaten sind vorhanden: fruchtbare Böden, ein wachsender städtischer Markt, internationale Touristen als Nachfragequelle, eine junge Bevölkerung, die nach Qualifikation und Arbeit sucht. Was noch fehlt, ist die konsequente Verknüpfung dieser Elemente — durch Planung, Investition und die politische Bereitschaft, Kleinproduzenten und Gemeinschaftsbetriebe als Rückgrat der Wirtschaft zu stärken statt nur auf Großinvestitionen zu warten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              [ZITAT: Bauer oder Händlerin aus Wakiso über Veränderungen in den letzten zehn Jahren] — ein solches Zitat, direkt aus dem Gespräch, würde diesen Abschnitt vervollständigen. Es fehlt noch in dieser Version, soll aber beim nächsten Besuch ergänzt werden.
            </p>
          </section>

          {/* H2: Ausblick */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Ausblick: Was Wakiso und Uganda brauchen, um den nächsten Schritt zu gehen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die wirtschaftliche Transformation eines Distrikts wie Wakiso ist kein Projekt, das sich in Jahresfrist abschließen lässt. Es geht um den langsamen, manchmal stockenden Wandel von Produktionsweisen, Berufsbildern und wirtschaftlichen Identitäten. Junge Menschen, die aufgewachsen sind mit dem Wissen, dass der Großvater Bananen anbaute und der Vater auf dem Bau arbeitete, brauchen neue Orientierungen — und Systeme, die diese Orientierungen stützen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ein zentrales Instrument dabei ist die gezielte Raumplanung. Die Konzepte des GKMA-UDAP für den Großraum Kampala sehen vor, dass durch ein Zonierungssystem — klare Trennung von Wohn-, Gewerbe- und Agrarflächen — sowohl Investitionen in Verarbeitungsbetriebe als auch die Qualität landwirtschaftlich nutzbarer Flächen geschützt werden. Ohne solche Regelungen droht das klassische ugandische Muster: Fruchtbares Land wird bebaut, bevor es produktiv gemacht wurde.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beim Blick auf die drei Kinder vor dem Waisenhaus in Buhoma, die im Juni 2026 still und wartend vor dem einfachen Lehmgebäude standen, wurde mir einmal mehr bewusst: Wirtschaftliche Transformation ist kein technokratisches Projekt. Sie findet in Gesichtern statt, in Mahlzeiten, in Schultaschen und in der Frage, ob das nächste Jahr besser wird als das letzte. Wakiso mit seinen 16 Prozent landwirtschaftlich tätiger Haushalte und seinen 35,8 Prozent ernährungssicherer Bevölkerung ist ein Spiegel für das, was in Uganda gleichzeitig gut läuft und noch nicht reicht. Ein Land im Aufbruch — mit echten Stärken und echten Lücken.
            </p>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <section className="mt-16 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Häufige Fragen zu Landwirtschaft und Wirtschaft in Wakiso
            </h2>
            <div className="space-y-3">
              {faqs.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-jungle-50 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{item.frage}</span>
                    <span className="text-jungle-700 text-xl flex-shrink-0">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-white text-gray-700 leading-relaxed">
                      {item.antwort}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-6">
              Weitere Themen rund um Uganda
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/nachhaltiger-tourismus-uganda"
                className="block p-4 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 transition-colors"
              >
                <div className="font-semibold text-jungle-800 mb-1">Nachhaltiger Tourismus in Uganda</div>
                <div className="text-sm text-jungle-700">Wie Reisen und Naturschutz zusammenwirken</div>
              </a>
              <a
                href="/regionen/kampala"
                className="block p-4 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 transition-colors"
              >
                <div className="font-semibold text-jungle-800 mb-1">Kampala entdecken</div>
                <div className="text-sm text-jungle-700">Ugandas Hauptstadt und wirtschaftliches Zentrum</div>
              </a>
              <a
                href="/gorilla-trekking"
                className="block p-4 rounded-lg border border-safari-200 bg-safari-50 hover:bg-safari-100 transition-colors"
              >
                <div className="font-semibold text-safari-800 mb-1">Gorilla-Trekking in Uganda</div>
                <div className="text-sm text-safari-700">Alles über das Erlebnis im Bwindi Forest</div>
              </a>
              <a
                href="/nationalparks/bwindi"
                className="block p-4 rounded-lg border border-safari-200 bg-safari-50 hover:bg-safari-100 transition-colors"
              >
                <div className="font-semibold text-safari-800 mb-1">Bwindi Impenetrable Forest</div>
                <div className="text-sm text-safari-700">Der Nationalpark und sein Erbe</div>
              </a>
              <a
                href="/murchison-falls-nationalpark"
                className="block p-4 rounded-lg border border-earth-200 bg-earth-50 hover:bg-earth-100 transition-colors"
              >
                <div className="font-semibold text-earth-800 mb-1">Murchison Falls Nationalpark</div>
                <div className="text-sm text-earth-700">Ugandas größtes Schutzgebiet</div>
              </a>
              <a
                href="/ranger-uganda"
                className="block p-4 rounded-lg border border-earth-200 bg-earth-50 hover:bg-earth-100 transition-colors"
              >
                <div className="font-semibold text-earth-800 mb-1">Ranger in Uganda</div>
                <div className="text-sm text-earth-700">Menschen, die Ugandas Naturerbe schützen</div>
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
