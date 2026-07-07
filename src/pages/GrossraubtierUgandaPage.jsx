import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'grossraubtiere-uganda'

export default function GrossraubtierUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Welche fünf Großraubtiere gibt es in Uganda?',
      antwort:
        'Der Uganda Large Carnivore Action Plan 2024–2034 konzentriert sich auf Löwe, Leopard, Tüpfelhyäne, Afrikanischen Wildhund und Gepard. Löwe und Leopard sind in mehreren Nationalparks verbreitet, während Wildhund und Gepard nur noch in wenigen, isolierten Populationen vorkommen. Das Nilkrokodil gilt zwar nicht klassisch als Großraubtier, ist aber als Spitzenprädator in Ugandas Gewässern von hoher ökologischer Bedeutung.',
    },
    {
      frage: 'Wo kann ich Löwen in Uganda beobachten?',
      antwort:
        'Die besten Chancen auf Löwensichtungen bieten der Queen Elizabeth Nationalpark und der Murchison Falls Nationalpark. Im Queen Elizabeth sind die Baumkletternden Löwen der Ishasha-Ebene besonders bekannt. Murchison Falls beherbergt ebenfalls eine stabile Löwenpopulation nördlich des Nils.',
    },
    {
      frage: 'Sind Leoparden in Uganda häufig zu sehen?',
      antwort:
        'Leoparden kommen in fast allen größeren Schutzgebieten Ugandas vor, sind aber aufgrund ihrer nachtaktiven und scheuen Lebensweise selten zu beobachten. Die höchste Dichte wird im Queen Elizabeth und im Kidepo Valley Nationalpark vermutet. Abendliche Game Drives erhöhen die Sichtungschance deutlich.',
    },
    {
      frage: 'Was ist der Uganda Large Carnivore Action Plan 2024–2034?',
      antwort:
        'Der Uganda Large Carnivore Action Plan ist ein nationales Schutzprogramm, das auf zehn Jahre angelegt ist und konkrete Bestandsziele, Monitoring-Protokolle und Maßnahmen zur Reduktion von Mensch-Tier-Konflikten definiert. Er richtet sich an die Uganda Wildlife Authority und ihre Partnerorganisationen und bildet den offiziellen Rahmen für den Schutz der fünf prioritären Raubtierarten.',
    },
    {
      frage: 'Wie gefährlich sind Großraubtiere für Touristen in Uganda?',
      antwort:
        'Mit geführten Safaris und den Sicherheitsprotokollen der Uganda Wildlife Authority ist das Risiko für Touristen äußerst gering. Ranger begleiten alle Ausflüge in Raubtiergebieten. Vorfälle mit Touristen sind extrem selten. Ernsthaftere Konflikte entstehen vor allem in Randgemeinden rund um die Schutzgebiete, wo Nutztiere gelegentlich angegriffen werden.',
    },
  ]

  return (
    <>
      <Head
        title="Großraubtiere Uganda: Artenschutz & Bestand 2024"
        description="Löwe, Leopard, Hyäne, Wildhund: Ugandas fünf Großraubtiere im Überblick. Bestandszahlen, Schutzprogramme und Beobachtungstipps für Reisende."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        {/* Hero Bild */}
        <figure className="w-full overflow-hidden bg-jungle-900">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
            alt="Berggorilla frisst Blätter im Baumkronendach des Bwindi Impenetrable Forest – Foto: Mark Suer, Juni 2026"
            className="w-full max-h-[520px] object-cover object-center"
          />
          <figcaption className="text-xs text-gray-400 text-right px-4 py-1">
            Foto: Mark Suer, Bwindi, Juni 2026
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Ugandas Großraubtiere: Artenschutz, Bestandszahlen und Schutzprogramme bis 2034
          </h1>

          {/* Eröffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Es war ein früher Morgen in Buhoma, kurz nach sechs Uhr, als wir drei Kinder aus der Nachbarschaft des
            lokalen Waisenhauses trafen. Sie standen etwas abseits, leicht verschüchtert, ihre Kleidung abgetragen,
            ihre Körpersprache zurückhaltend. Ohne langes Überlegen luden wir sie ein, gemeinsam mit uns zu essen.
            Dieser eine Moment — so klein und selbstverständlich er schien — steht stellvertretend für das, was
            Uganda als Reiseland ausmacht: eine Unmittelbarkeit des Erlebens, die keine Hochglanzbroschüre ersetzen
            kann.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Buhoma liegt am Rand des Bwindi Impenetrable Forest, eines der artenreichsten Waldgebiete Afrikas.
            Wenige Kilometer weiter oben im Hang leben Berggorillas — die berühmtesten Bewohner dieses Waldes.
            Aber Bwindi ist mehr als Gorillaschutz. Der Wald und die angrenzenden Savannensysteme sind Teil eines
            größeren Wildtiernetzwerks, in dem auch Ugandas Großraubtiere existieren: Löwe, Leopard, Tüpfelhyäne,
            Afrikanischer Wildhund und Gepard. Diese fünf Arten stehen seit 2024 im Mittelpunkt eines nationalen
            Schutzprogramms, das ihre Bestände bis 2034 sichern soll.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Während meines Besuchs im Juni 2026 — und in früheren Aufenthalten von insgesamt mehreren Wochen über
            verschiedene Jahreszeiten hinweg — hat mich vor allem die Frage beschäftigt, wie Uganda mit dem
            Widerspruch umgeht, den Wildtiere und Menschen täglich neu aushandeln müssen: Wildnis braucht Raum,
            Menschen brauchen Land. Wo dieser Widerspruch konstruktiv aufgelöst wird, entsteht etwas Besonderes —
            das zeigt Ugandas Ansatz zum Schutz seiner Großraubtiere.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border-l-4 border-jungle-600 rounded-r-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">
              Großraubtiere Uganda — Wichtigste Fakten
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-800">
              <div>
                <span className="font-semibold text-jungle-800">Fünf prioritäre Arten:</span>{' '}
                Löwe, Leopard, Tüpfelhyäne, Afrikanischer Wildhund, Gepard
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Schutzrahmen:</span>{' '}
                Uganda Large Carnivore Action Plan 2024–2034
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Hauptschutzgebiete:</span>{' '}
                Queen Elizabeth NP, Murchison Falls NP, Kidepo Valley NP
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Größte Bedrohung:</span>{' '}
                Habitatverlust, Mensch-Tier-Konflikte, Wilderei
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Löwenpopulation Uganda:</span>{' '}
                ca. 400–500 Tiere (Schätzungen variieren je nach Quelle)
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Tourismus-Einnahmen:</span>{' '}
                Tourismus ist Ugandas wichtigster Devisenbringer mit jährlichen Einnahmen, die Kaffeeexporte
                deutlich übersteigen
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Zuständige Behörde:</span>{' '}
                Uganda Wildlife Authority (UWA)
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Beste Beobachtungszeit:</span>{' '}
                Trockenzeitraum Juni–September und Dezember–Februar
              </div>
            </div>
          </div>

          {/* H2: Löwe und Leopard */}
          <section className="mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Löwe und Leopard: Ugandas bekannteste Großraubtiere
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Löwe gilt in Uganda als Flaggschiff-Art des Savannenschutzes. Zwei Nationalparks beherbergen
              die bedeutendsten Populationen: der Queen Elizabeth Nationalpark im Westen und der Murchison Falls
              Nationalpark im Nordwesten. Beide Gebiete bieten unterschiedliche Ökosysteme, die das Verhalten der
              Löwen prägen. In Ishasha, dem südlichen Sektor des Queen Elizabeth Parks, sind die Löwen für ihre
              ungewöhnliche Angewohnheit bekannt, in Feigenbäumen zu ruhen — ein Verhalten, das in Ostafrika
              sonst fast ausschließlich bei den Löwen der Maasai Mara beobachtet wird.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Löwenzahlen in Uganda sind in den vergangenen Jahrzehnten gesunken — ein Trend, den das Land
              mit den meisten afrikanischen Ländern teilt. Ursachen sind Lebensraumverlust durch Landwirtschaft,
              Vergiftungsaktionen zum Schutz von Nutzvieh und Wilderei. Der Uganda Large Carnivore Action Plan
              2024–2034 setzt daher konkrete Bestandsziele und definiert Korridore, die Populationen miteinander
              verbinden sollen. Ein isolierter Bestand in einem Nationalpark ohne genetischen Austausch verliert
              langfristig an Resilienz — das ist der wissenschaftliche Hintergrund hinter der Korridorpolitik.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Leopard ist Ugandas scheustes Großraubtier. Er kommt in fast allen Schutzgebieten vor — von
              Bwindi bis Kidepo — und ist doch kaum zu sehen. Leoparden sind nachtaktiv, meisterhaft in der
              Tarnung und meiden offene Flächen tagsüber. Für Touristen sind Sichtungen ein besonderes Erlebnis,
              das oft dem Zufall überlassen bleibt. Abendliche Game Drives, vor allem in der Trockenzeit wenn die
              Vegetation niedrig ist, bieten die besten Chancen. [ZITAT: Guide über erste Leopardensichtung im
              Murchison Falls]
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Was Löwe und Leopard gemeinsam haben: Beide sind in Uganda von der Uganda Wildlife Authority (UWA)
              nach den Uganda Wildlife Regulations von 2022 vollständig geschützt. Das bedeutet, Jagd, Handel und
              Besitz dieser Tiere oder ihrer Körperteile sind verboten. Trotzdem gelangen Leopardenfelle und
              Löwenknochen gelegentlich in den illegalen Handel — ein Problem, das Uganda mit Ländern wie China
              als Hauptabnehmermarkt verbindet. Die Anti-Poaching-Einheiten der UWA führen regelmäßig
              Operationen durch, um diese Handelsketten zu unterbrechen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für Reisende, die Löwen in Uganda sehen möchten, gilt der Queen Elizabeth Nationalpark als
              verlässlichste Option. Die offene Savanne rund um den Kazinga-Kanal bietet ideale Voraussetzungen
              für Sichtungen am frühen Morgen. Im Murchison Falls Nationalpark konzentrieren sich die Löwen
              nördlich des Nils in der Trockenzeit in der Nähe von Wasserquellen — ein Verhalten, das Ranger
              gut kennen und das Safaris vorhersehbarer macht.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Doppelrolle dieser Tiere — als Touristenattraktion und als Bedrohung für Gemeinden an den
              Parkgrenzen — bleibt eine Grundspannung des ugandischen Wildtierschutzes. Löwen reißen Vieh, das
              für Familien oft das einzige wirtschaftliche Kapital darstellt. Ohne Kompensationsmechanismen
              und Community-Beteiligung endet diese Spannung in Vergiftungen. Die UWA betreibt deshalb
              Community-Programme, die lokalen Gemeinden ermöglichen, vom Tourismus zu profitieren — und damit
              ein wirtschaftliches Interesse am Überleben der Raubtiere zu entwickeln.
            </p>
          </section>

          {/* Inline Foto — Kinder Buhoma */}
          <figure className="my-8 rounded-xl overflow-hidden">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
              alt="Kinder aus der Nachbarschaft des Waisenhauses in Buhoma – Foto: Mark Suer, Juni 2026"
              className="w-full object-cover max-h-[420px]"
            />
            <figcaption className="text-sm text-gray-500 mt-2 px-2">
              Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, Bwindi-Region — Foto: Mark Suer, 21. Juni 2026,
              GPS: -0.9617°N, 29.6109°E
            </figcaption>
          </figure>

          {/* H2: Tüpfelhyäne, Wildhund, Gepard */}
          <section className="mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Tüpfelhyäne, Afrikanischer Wildhund und Gepard: Die selteneren Drei
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Neben Löwe und Leopard stehen drei weitere Arten im Zentrum des nationalen Schutzplans — und
              alle drei sind erheblich schwieriger zu sehen, weil ihre Populationen in Uganda kleiner, isolierter
              oder schlicht weniger gut dokumentiert sind.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Tüpfelhyäne ist das erfolgreichste Großraubtier Afrikas und auch in Uganda verbreitet — vor
              allem im Kidepo Valley Nationalpark im äußersten Nordosten des Landes, der topografisch und
              klimatisch der ostafrikanischen Savanne nähersteht als die feuchteren Parks im Westen. Der Kidepo
              Valley Nationalpark gilt als einer der schönsten und wildesten Parks Ugandas, ist aber aufgrund
              seiner Abgelegenheit weniger besucht. Genau das macht ihn für Wildtierbeobachtungen interessant:
              Die Tierdichte ist hoch, die Touristen sind wenige, das Erlebnis intensiv.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hyänen fressen hauptsächlich als Jäger, nicht als Aasfresser — ein weit verbreitetes Missverständnis,
              das ihrer Reputation schadet. Studien zeigen, dass bis zu 95 Prozent der Hyänennahrung selbst
              erjagt wird. Als Spitzenprädatoren regulieren sie Beutetierpopulationen und tragen zur Gesundheit
              des Ökosystems bei. Für Schutzprogramme ist das relevant: Eine Region ohne Raubtiere
              überpopuliert sich mit Herbivoren, die wiederum die Vegetation schädigen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Afrikanische Wildhund (Lycaon pictus) ist die am stärksten bedrohte Hundeartigkeit Afrikas
              und in Uganda nur noch in Restbeständen vorhanden. Sein Verschwinden aus weiten Teilen des
              Kontinents ist eine direkte Folge von Habitatverlust, Wilderei und der Übertragung von Krankheiten
              durch Haushunde. In Uganda ist der Wildhund auf einzelne Schutzgebiete beschränkt, eine gesicherte
              Bestandsgröße ist schwierig zu ermitteln. Der Action Plan 2024–2034 enthält deshalb spezifische
              Monitoring-Protokolle für diese Art.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Gepard schließlich ist in Uganda die seltenste der fünf Großraubtierarten. Gesicherte
              Sichtungen gibt es hauptsächlich aus dem Kidepo Valley und gelegentlich aus dem Pian Upe Wildlife
              Reserve. Geparden benötigen offene Savannenflächen für ihre Jagdtechnik — Sprintgeschwindigkeiten
              von bis zu 110 km/h erfordern hindernisfreies Terrain — und sind damit auf Lebensraumtypen
              angewiesen, die in Uganda weniger verbreitet sind als in Kenia oder Tansania. Das macht Uganda
              kein primäres Gepardenziel, aber die Art ist Teil des Schutzrahmens, weil jede isolierte Population
              für die Gesamtüberlebensfähigkeit der Art relevant ist.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für alle drei Arten gilt: ihr Schutz hängt direkt davon ab, ob die umgebenden Gemeinden
              Wildtiere als Ressource oder als Bedrohung wahrnehmen. Graduierungsprogramme und
              Mikrokreditsysteme, wie sie NGOs in Uganda betreiben, tragen indirekt zum Wildtierschutz bei,
              indem sie alternative Einkommensquellen schaffen, die das Abhängigkeitsverhältnis von
              Viehwirtschaft und damit den Druck auf Raubtiere reduzieren.
            </p>
          </section>

          {/* H2: Das Nilkrokodil als Wasserprädator */}
          <section className="mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Das Nilkrokodil: Ugandas größter Wasserprädator
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Technisch gesehen kein Großraubtier im Sinne des Action Plans, aber ökologisch nicht weniger
              bedeutsam: Das Nilkrokodil (Crocodylus niloticus) ist Ugandas unbestrittener Spitzenprädator
              in Gewässern. Am Kazinga-Kanal, der den Lake George mit dem Lake Edward verbindet, und entlang
              des Nil unterhalb der Murchison Falls sind Krokodile in großer Zahl zu beobachten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bei meiner Bootsfahrt auf dem Kazinga-Kanal im Mai 2026 lagen Dutzende Krokodile auf den
              Uferbänken — reglos, die Augen geschlossen, scheinbar teilnahmslos. Diese Trägheit ist
              Täuschung. Krokodile sind Lauerjäger von außergewöhnlicher Präzision; ihre Reaktionszeit und
              Beißkraft gehören zu den höchsten aller lebenden Tiere. Nilkrokodile können ein Alter von
              über 70 Jahren erreichen und Gewichte von bis zu 750 Kilogramm.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Am Murchison Falls National Park konzentrieren sich Krokodile besonders unterhalb der Stromschnellen,
              wo Fische aufgrund der turbulenten Strömung leicht Beute werden. Die Bootsfahrt von Paraa zu den
              Murchison Falls gehört zu den spektakulärsten Wildtierbeobachtungen Ugandas — nicht zuletzt
              wegen der Krokodile und Flusspferde, die den Uferstreifen bevölkern.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Krokodile stehen in Uganda unter dem Schutz der Uganda Wildlife Regulations 2022 und dürfen
              außerhalb genehmigter Farmbetriebe nicht getötet werden. Die kommerziell genutzten Krokodilfarmen
              — vor allem für Leder — unterliegen strengen Auflagen. Wild entnommene Krokodile sind verboten,
              obwohl der illegale Handel mit Krokodilprodukten weiterhin vorkommt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für Reisende ist wichtig zu wissen: Krokodile stellen an ugandischen Gewässern eine reale
              Gefahr dar. Schwimmen in unkontrollierten Naturgewässern ist riskant. Die meisten Unfälle
              ereignen sich in Bereichen, wo Fischer oder Wäscherinnen an Ufern hantieren — eine soziale
              Dimension des Mensch-Tier-Konflikts, der sich vom Sicherheitsrucksack eines Touristen
              grundlegend unterscheidet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Nilkrokodil ist ein Überlebensexperte: Seine Linie existiert seit über 200 Millionen Jahren
              nahezu unverändert. Klimaveränderungen stellen trotzdem eine zunehmende Belastung dar.
              Temperaturveränderungen beeinflussen das Geschlechterverhältnis im Gelege — bei Krokodilen
              wird es durch die Bruttemperatur bestimmt, nicht genetisch. Prognosen, die für Norduganda
              eine Erwärmung von etwa 25 auf 30 Grad Celsius bis zur Mitte des Jahrhunderts zeigen, könnten
              damit langfristig auch Krokodilpopulationen beeinflussen.
            </p>
          </section>

          {/* H2: Der Uganda Large Carnivore Action Plan 2024–2034 */}
          <section className="mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Der Uganda Large Carnivore Action Plan 2024–2034: Ziele und Maßnahmen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ugandas nationaler Schutzplan für Großraubtiere ist ein zehnjähriges Programm, das von der
              Uganda Wildlife Authority koordiniert wird. Es ist nicht das erste seiner Art — aber es ist
              spezifischer, messbarer und stärker auf die fünf prioritären Arten ausgerichtet als frühere
              Konzepte. Drei thematische Schwerpunkte kennzeichnen den Plan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Erstens die Bestandserhebung: Uganda verfügt noch immer über keine vollständigen, national
              repräsentativen Zählungen aller Großraubtierarten. Für Löwen existieren Schätzungen aus
              einzelnen Nationalparks, aber keine konsolidierte Nationalpopulationszahl. Der Action Plan
              setzt deshalb auf standardisierte Monitoring-Methoden — Kamerafallen, Spurenerhebungen,
              Transektzählungen — die über alle Schutzgebiete hinweg einheitlich angewendet werden sollen.
              Nur wer weiß, wie viele Tiere existieren und wo sie sich bewegen, kann Schutzerfolge messen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zweitens die Konfliktminimierung: Mensch-Tier-Konflikte sind der häufigste direkte Todesgrund
              für Großraubtiere in Uganda. Löwen töten Vieh, Hyänen reißen Ziegen, und die betroffenen
              Familien — oft in extremer Armut — reagieren mit Vergiftungen oder Fallen. Der Plan fördert
              Kompensationsfonds, präventive Maßnahmen wie verstärkte Pferche und Bomas sowie
              Community-Ranger-Programme, die lokale Gemeinschaften direkt in den Schutz einbeziehen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Drittens die rechtliche Durchsetzung: Die Uganda Wildlife Regulations 2022 bilden den
              aktuellen gesetzlichen Rahmen, aber Durchsetzung bleibt eine Herausforderung. Anti-Poaching-Einheiten
              sind unterfinanziert und operieren in Gebieten, die oft schwer zugänglich sind. Der Action Plan
              verbindet Schutzarbeit deshalb mit Kapazitätsaufbau — mehr ausgebildete Ranger, bessere
              Ausrüstung, stärkere Koordination zwischen UWA und Strafverfolgungsbehörden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Uganda Wildlife Training Institute bildet die Fachkräfte aus, die diesen Plan umsetzen
              sollen. Im akademischen Jahr 2013/14 waren 121 Studierende eingeschrieben — ein Anstieg von
              fast 25 Prozent gegenüber dem Vorjahr. Dieser Trend hat sich in den Folgejahren fortgesetzt,
              auch wenn aktuelle Zahlen für 2025 noch ausstehen. Die Nachfrage nach qualifizierten
              Wildtiermanagern wächst — ein Zeichen dafür, dass Uganda seinen Wildtierschutz als
              langfristige Investition begreift.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Tourismussektor liefert den wirtschaftlichen Rahmen, der all das finanzierbar macht.
              Tourismus ist Ugandas bedeutendster Devisenbringer — die Einnahmen übersteigen jene aus
              dem Kaffeeexport deutlich. Großraubtiere sind dabei nicht nur eine Randbemerkung im
              Reiseprospekt, sondern Teil des Kernprodukts: Safaris ohne Raubtiere verlieren ihren
              komparativen Vorteil gegenüber weniger dramatischen Reisezielen. Die wirtschaftliche
              Logik und die ökologische Logik des Artenschutzes zeigen in dieselbe Richtung — was
              Schutzprogrammen eine bessere Argumentationsgrundlage gibt als rein moralische Appelle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beim Uganda Wildlife Training Institute absolvierten zwischen 2009 und 2013 mehr als 10.600
              Personen tourismusbezogene Kurse — eine stille Infrastruktur, die im Hintergrund wirkt und
              sicherstellt, dass Uganda nicht nur Wildtiere hat, sondern auch Menschen, die wissen, wie
              man sie schützt und präsentiert.
            </p>
          </section>

          {/* H2: Rothschild-Giraffe und weitere Tierarten im Kontext */}
          <section className="mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Das Ökosystem der Großraubtiere: Giraffe, Flusspferd und Zebra als Kontext
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Großraubtiere existieren nicht im Vakuum. Ihr Überleben hängt von der Gesundheit der
              gesamten Tierpopulation ab, die ihre Nahrungsgrundlage bildet. Deshalb lohnt es, die
              Beutetiere und ökologischen Partner der Raubtiere im Blick zu behalten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Rothschild-Giraffe ist in Uganda endemisch — die einzige Giraffenunterart, die im
              Land vorkommt, und eine der am stärksten gefährdeten Giraffen weltweit. Ihr Hauptverbreitungsgebiet
              in Uganda ist der Murchison Falls Nationalpark, wo die Population in den vergangenen Jahrzehnten
              dank gezielter Schutzmaßnahmen stabilisiert werden konnte. Giraffen sind keine Beutetiere
              für Löwen im klassischen Sinne — erwachsene Tiere sind für die meisten Prädatoren zu groß
              und zu wehrhaft — aber Jungtiere werden gelegentlich von Löwen angegriffen. Die Beziehung
              zwischen Rothschild-Giraffe und Löwenpopulation im Murchison ist ein Beispiel für die
              komplexen Wechselwirkungen, die Ökologen als Trophic Cascade beschreiben.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Flusspferde sind im Queen Elizabeth Nationalpark und im Murchison Falls zu Hunderten
              anzutreffen. Sie teilen ihren Lebensraum mit Nilkrokodilen, was zu gelegentlichen
              Auseinandersetzungen führt — obwohl beide Arten in der Regel eine Art unausgesprochenes
              Koexistenzabkommen pflegen. Flusspferde sind für Menschen gefährlicher als Krokodile:
              Sie verlassen nachts das Wasser, um zu grasen, und reagieren aggressiv auf Störungen.
              Todesfälle durch Flusspferde sind in Afrika häufiger als durch die meisten anderen
              Großtierarten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zebras schließlich finden sich in Uganda hauptsächlich im Kidepo Valley Nationalpark und
              im Lake Mburo National Park — letzterer ist das einzige Schutzgebiet Ugandas mit Zebras
              nördlich des Äquators. Zebras sind klassische Beutetiere für Löwen und Wildhunde; ihre
              Präsenz oder Abwesenheit in einem Gebiet ist ein direktes Indiz für die Raubtiergesundheit
              des Ökosystems.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diese tierartliche Vielfalt ist der eigentliche Wettbewerbsvorteil Ugandas als Reiseland:
              Berggorillas, Schimpansen, Rothschild-Giraffen, Baumkletternde Löwen, Shoebill-Störche —
              keine andere Destination Ostafrikas bietet diese Kombination auf einem Territorium dieser
              Größe. Wer Uganda nur als Gorilla-Destination betrachtet, lässt einen großen Teil dieses
              Reichtums ungenutzt.
            </p>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <section className="mt-12 mb-10">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufig gestellte Fragen
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center text-left px-5 py-4 bg-gray-50 hover:bg-jungle-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.frage}</span>
                    <span className="text-jungle-700 text-xl flex-shrink-0">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 text-gray-700 leading-relaxed text-sm bg-white">
                      {faq.antwort}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-10 border-t border-gray-100 pt-8">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-4">
              Weitere Themen für deine Uganda-Reise
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/tiere/loewe', label: 'Löwen in Uganda: Verbreitung und Beobachtung' },
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark' },
                { href: '/nationalparks/murchison_falls', label: 'Murchison Falls Nationalpark' },
                { href: '/ranger-uganda', label: 'Ranger in Uganda: Artenschutz von innen' },
                { href: '/uwa-anti-poaching', label: 'UWA Anti-Poaching: Kampf gegen Wilderei' },
                { href: '/wildlife-crime-terrorismus-uganda', label: 'Wildlife Crime in Uganda' },
                { href: '/nachhaltiger-tourismus-uganda', label: 'Nachhaltiger Tourismus in Uganda' },
                { href: '/tiere/elefant', label: 'Elefanten in Uganda' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-jungle-700 hover:text-jungle-900 text-sm font-medium group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-jungle-400 group-hover:bg-jungle-700 flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
