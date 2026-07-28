import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'quelle-nil-jinja'

const faqs = [
  {
    q: 'Welcher Nil fließt durch Uganda?',
    a: 'Der Viktoria-Nil fließt durch Uganda — er verlässt den Viktoriasee bei Jinja, durchquert den Norden des Landes durch den Murchison Falls National Park und tritt schließlich in den Südsudan über. Der ugandische Nilabschnitt erstreckt sich auf rund 500 Kilometer und bietet auf dieser Strecke einige der eindrucksvollsten Nillandschaften des Kontinents: vom ruhigen Ausfluss in Jinja über die spektakulären Murchison-Wasserfälle bis in die Savannen des Nordens. Erst dort wird der Viktoria-Nil zum Weißen Nil, der später in Khartum mit dem Blauen Nil zum eigentlichen Nil zusammenfließt.',
  },
  {
    q: 'Wo genau befindet sich die Nilquelle in Jinja?',
    a: 'Die als "Nilquelle" bezeichnete Stätte liegt im Viktoria-Nil, kurz nach seinem Austritt aus dem Viktoriasee am nordwestlichen Stadtrand von Jinja. Genauer handelt es sich um eine kleine Insel im Fluss, die mit einem Schild und einem Monument markiert ist. Sie ist ausschließlich per Boot erreichbar. Mehrere Anbieter am Flussufer bieten geführte Bootstouren ab etwa 25.000 ugandischen Schilling pro Person an.',
  },
  {
    q: 'Wie viel kostet die Bootsfahrt zur Nilquelle in Jinja?',
    a: 'Einfache Rundfahrten zur markierten Nilquelleninsel beginnen bei rund 25.000 ugandischen Schilling pro Person — das entspricht etwa sieben US-Dollar zum Zeitpunkt der Recherche. Preise können je nach Anbieter, Gruppengröße und Saison variieren. Zusätzliche Kosten können für Nationalpark-Eintritte oder Führergebühren anfallen. Ein Vergleich mehrerer Anbieter vor Ort lohnt sich.',
  },
  {
    q: 'Wie kommt man von Kampala nach Jinja?',
    a: 'Jinja liegt rund 80 Kilometer östlich von Kampala. Matatu-Minibusse verbinden beide Städte den ganzen Tag über und kosten zwischen 8.000 und 10.000 ugandischen Schilling bei einer Fahrtzeit von etwa zwei Stunden. Dazu fahren Busse der langen Strecken über Jinja; Rafting-Anbieter bieten oft kostenlose Shuttles zwischen den Städten an. Private Taxis und Mietwagen sind teurer, aber komfortabler.',
  },
  {
    q: 'Was kann man in Jinja außer der Nilquelle erleben?',
    a: 'Jinja gilt als Abenteuer-Hauptstadt Ostafrikas. Wildwasser-Rafting und Kajakfahren am Viktoria-Nil, Bungee-Jumping, Quad-Touren, Mountainbike-Ausflüge und Bootsausflüge auf dem Fluss sind die bekanntesten Aktivitäten. Stadtführungen durch Märkte, Werkstätten und Handwerkerzentren — teils von ehemaligen Straßenkindern geleitet — bieten einen anderen Blick auf das Jinja abseits des Tourismus. Die Umgebung des Nils bietet außerdem lohnende Vogelbeobachtung.',
  },
  {
    q: 'Wann ist die beste Reisezeit für einen Jinja-Besuch?',
    a: 'Jinja ist ganzjährig besucht, doch die Trockenperioden von Juni bis August sowie von Dezember bis Februar sind angenehmer: weniger Regen, bessere Straßenverhältnisse und kühlere Temperaturen am Fluss. Für Wildwasser-Rafting gelten die Regenzeiten als besonders spannungsreich, da der Wasserpegel höher ist — das erhöht jedoch auch die Schwierigkeit. Wer Jinja mit einer Gorilla-Trekking-Reise kombiniert, plant am besten für die Trockenmonate ein.',
  },
]

export default function QuelleNilJinjaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Head
        title="Weißer Nil: Ursprung in Uganda, Nilquelle Jinja & Geschichte"
        description="Weißer Nil — der Viktoria-Nil entspringt dem Viktoriasee bei Jinja, Uganda. Bootsfahrt zur Nilquelle, Rafting bei Bujagali, Geschichte der Entdeckung durch Speke 1862."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Image */}
        <figure className="w-full max-h-[480px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, Uganda – ein Moment unmittelbarer menschlicher Begegnung auf einer Uganda-Reise im Juni 2026"
            className="w-full object-cover object-center"
            style={{ maxHeight: '480px' }}
          />
          <figcaption className="text-sm text-gray-500 text-center py-2 px-4 bg-gray-50">
            Buhoma, Juni 2026 — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Weißer Nil: Ursprung in Uganda, Nilquelle Jinja und der Weg durch Afrika
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Es war ein Morgen im Juni 2026 in Buhoma, kurz nach halb sieben. Drei Kinder aus der
            Nachbarschaft des örtlichen Waisenhauses standen zögernd vor dem Gelände, ihre Kleidung
            abgetragen, ihre Blicke unsicher. Man brauchte keine Erklärung — die Situation war
            unmittelbar lesbar. Wir luden sie ein, mit uns zu essen. Was folgte, war ein stilles,
            würdiges Frühstück, das nichts mit Tourismusmarketing gemein hatte. Uganda zeigt sich
            selten so klar wie in solchen Momenten: ein Land mit gewaltigen Schönheiten und tiefen
            sozialen Widersprüchen, das beides gleichzeitig trägt.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Diese Uganda-Reise im Juni 2026 führte mich auch in den Südwesten des Landes, in die
            dichten Wälder rund um Bwindi — GPS-Koordinaten und drei Originalfotos belegen diesen
            Besuch. Doch Uganda hält noch eine weitere ikonische Station bereit, die jede
            Ost-Afrika-Route ernsthaft in Betracht ziehen sollte: Jinja, die Stadt am Ausfluss des
            Viktoriasees, an jener Stelle, wo der Viktoria-Nil seinen Lauf beginnt und die seit
            Jahrzehnten als quelle nil jinja in den Reiseberichten auftaucht. Was auf den ersten
            Blick wie eine touristisch vermarktete Sehenswürdigkeit wirkt, ist bei näherer
            Betrachtung ein Ort von historischer Schwere, geografischer Faszination und einer
            Lebendigkeit, die weit über das Nilquellen-Denkmal hinausgeht.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Jinja ist heute die zweitgrößte Stadt Ugandas und gilt unter Reisenden als
            Abenteuer-Hauptstadt Ostafrikas. Das Rafting auf dem Viktoria-Nil, Kajakfahren,
            Bungee-Jumping und geführte Bootsausflüge zur markierten Nilquelle ziehen jährlich
            Tausende Besucher an — darunter, wie die ugandischen Tourismusdaten zeigen,
            überwiegend Menschen aus der ostafrikanischen Region selbst.
          </p>

          {/* Fakten-Box */}
          <div className="bg-safari-50 border border-safari-200 rounded-2xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-safari-900 mb-4">
              Jinja und die Nilquelle — Eckdaten
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-semibold text-safari-800 min-w-[140px]">Lage:</span>
                <span>Südöstlich Ugandas, Ausfluss des Viktoriasees</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-safari-800 min-w-[140px]">Entfernung Kampala:</span>
                <span>ca. 80 km, etwa 2 Stunden Fahrt</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-safari-800 min-w-[140px]">Bootsfahrt Nilquelle:</span>
                <span>ab 25.000 ugandischen Schilling p.P.</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-safari-800 min-w-[140px]">Fluss:</span>
                <span>Viktoria-Nil (oberer Abschnitt des Nils)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-safari-800 min-w-[140px]">Entdecker:</span>
                <span>John Hanning Speke, 1862</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-safari-800 min-w-[140px]">Rafting-Standort:</span>
                <span>Bujagali, 7–8 km nördlich von Jinja</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-safari-800 min-w-[140px]">Anreise per Matatu:</span>
                <span>8.000–10.000 UGX von Kampala</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-safari-800 min-w-[140px]">Beste Reisezeit:</span>
                <span>Juni–August, Dezember–Februar</span>
              </div>
            </div>
          </div>

          {/* H2: Weißer Nil vs Blauer Nil */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Weißer Nil und Blauer Nil: Zwei Quellen, ein Fluss
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Nil setzt sich aus zwei Hauptarmen zusammen. Der <strong>Weiße Nil</strong> entspringt
            dem Äquatorialen Hochland — sein hydrologischer Ausgangspunkt ist der Viktoriasee in
            Uganda, wo das Wasser bei Jinja als Viktoria-Nil in nördliche Richtung abfließt.
            Unterwegs durchquert er Uganda (Murchison Falls), den Südsudan und tritt schließlich
            als Weißer Nil in den Sudan ein. Der <strong>Blaue Nil</strong> hat seinen Ursprung
            im Hochland Äthiopiens, am Tanasee südlich von Bahir Dar. Er trägt mehr als 80 Prozent
            des Jahreswassers und nahezu den gesamten Nilschlamm — das Fundament der ägyptischen
            Landwirtschaft seit der Antike.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Beide Arme vereinigen sich in Khartum, der Hauptstadt des Sudan, zum eigentlichen Nil,
            der von dort durch Ägypten bis zum Mittelmeer fließt. Die Frage "wo entspringt der Nil"
            ist also eine Frage der Definition: Wer den längsten zusammenhängenden Flussweg sucht,
            findet den Ursprung des Weißen Nils im Victoria-See bei Jinja — oder, wenn man die
            Zuflüsse des Sees mitrechnet, im Kagera-Fluss, dessen fernste Quelle in den burundischen
            Bergen liegt. Wer den wasserreichsten Arm sucht, landet in Äthiopien. Uganda gibt die
            geografisch und emotional überzeugendere Antwort.
          </p>

          {/* H2: Geschichte der Entdeckung */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Wo der Nil beginnt — die Geschichte einer Entdeckung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Nil ist der längste Fluss der Welt, und seine Quellen beschäftigten die europäische
            Geografie jahrhundertelang. Wo genau das Wasser seinen Ursprung nimmt, das die
            ägyptische Zivilisation tränkte, blieb für westliche Wissenschaftler lange ungeklärt.
            Arabische Geograpen und äthiopische Gelehrte hatten bereits früh die großen
            Binnenseen des afrikanischen Hochlands als Teil des Nilsystems beschrieben — doch eine
            als "wissenschaftlich bestätigte" Entdeckung nach europäischen Standards fehlte.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            John Hanning Speke war der erste britische Offizier, der im Jahr 1862 den Ausfluss des
            Viktoriasees am heutigen Standort von Jinja dokumentierte und ihn als Quelle des Nils
            bezeichnete. Er nannte diesen Punkt "Ripon Falls" — nach dem damaligen Präsidenten der
            Royal Geographical Society. Speke war fest überzeugt, die entscheidende Antwort auf
            eine der zentralen Fragen der damaligen Geografie gefunden zu haben. Diese Überzeugung
            blieb jahrzehntelang umstritten: Sein Reisegefährte Richard Francis Burton glaubte, der
            Tanganikasee sei die eigentliche Quelle; andere Forscher verwiesen auf den Luvyronza-
            oder Kagera-Fluss im heutigen Burundi und Ruanda als noch fernere Ursprünge.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die moderne Geografie gibt dem Streit eine differenziertere Antwort: Der Viktoriasee
            selbst wird durch mehrere Zuflüsse gespeist — darunter den Kagera, der aus Burundi,
            Ruanda und dem östlichen Kongo kommt. Insofern lässt sich der Ausfluss bei Jinja
            strenggenommen nur als eine der Quellen des Nils bezeichnen, nicht als die einzige.
            Ugandische Reiseführer weisen auf diesen Umstand ausdrücklich hin: Von einer "einen"
            Nilquelle in Jinja kann man nur im übertragenen Sinne sprechen — und dennoch ist dieser
            Punkt für viele Reisende der emotionale Fixpunkt einer Nilerinnerung.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die ursprünglichen Ripon Falls, die Speke dokumentiert hatte, existieren in ihrer
            ursprünglichen Form heute nicht mehr. Mit dem Bau des Owen Falls Dam in den 1950er
            Jahren, der den Wasserpegel des Viktoriasees künstlich reguliert, wurden die Fälle
            überflutet. Was heute als Nilquelle besucht wird, ist eine kleine Insel im Viktoria-Nil,
            wenige Kilometer nach dem Seeausfluss — markiert durch ein Schild, ein Monument und
            zugänglich per Bootsfahrt. Die Bootsfahrt dauert etwa eine Stunde und ist idyllisch:
            Der Fluss ist hier noch breit und ruhig, das Schilf am Ufer dicht, und wer aufmerksam
            hinschaut, entdeckt die ersten Nilkrokodile und Wasservögel.
          </p>

          {/* H2: Besuch heute */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Der Besuch an der Nilquelle heute — Bootsfahrt, Denkmal und Erwartungen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Wer heute die Nilquelle in Jinja besucht, bucht in der Regel eine geführte Bootsfahrt.
            Die Anlegestellen liegen am Stadtrand von Jinja, nahe dem Explorers-Campingplatz und
            dem Ausfluss des Viktoriasees. Mehrere lokale Anbieter konkurrieren um Besucher;
            Preise von rund 25.000 ugandischen Schilling pro Person für eine einfache Fahrt zur
            markierten Insel sind üblich. Die Fahrt selbst ist weniger spektakulär als erwartet,
            aber durchaus lohnend: Der Fluss zeigt sich hier in seiner ruhigsten, breitesten Form,
            bevor er wenige Kilometer flussabwärts an Gefälle und Dynamik gewinnt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Das eigentliche Nilquellen-Denkmal auf der kleinen Insel ist schlicht gehalten — ein
            Schild, ein Aussichtspunkt, gelegentlich Händler mit Souvenirs. Wer spektakuläre
            Naturkulissen erwartet, wird zunächst überrascht sein. Der Wert des Besuchs liegt
            weniger im Monument selbst als im Bewusstsein: Hier fließt das Wasser, das Tausende
            Kilometer durch den Sudan und Ägypten reisen wird, bevor es ins Mittelmeer mündet.
            Diese Vorstellung allein trägt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Ein interessantes Begleitprogramm bieten auch stadtführende Touren durch Jinjas
            Märkte, Werkstätten und Handwerkerzentren. Einige dieser Touren werden von ehemaligen
            Straßenkindern geleitet, und rund 50 Prozent der Einnahmen fließen direkt in Projekte
            zur Unterstützung gefährdeter Jugendlicher. Das Hotel and Tourism Training Institute,
            das in Jinja ansässig ist, bildet außerdem lokale Fachkräfte für den Tourismussektor
            aus — ein Bildungsangebot, das langfristig zur Professionalisierung des lokalen
            Gastgewerbes beiträgt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            [ZITAT: Guide über den ersten Eindruck der Nilquelle bei Morgenlicht]
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Wer Zeit und Interesse mitbringt, kann auch die Umgebung der Stadt zu Fuß erkunden.
            Das Alltagsleben in Jinja abseits der touristischen Hauptachse — Marktgassen,
            Fischerboote am Flussufer, die Architektur der Altstadt mit ihrer indisch geprägten
            Bausubstanz aus der Zeit der ugandischen Eisenbahnarbeiter — erzählt eine Geschichte,
            die in keinem Reiseführer vollständig erfasst ist.
          </p>

          {/* H2: Abenteuer bei Bujagali */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Bujagali und der Viktoria-Nil: Wildwasser und Wandel
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Rund sieben bis acht Kilometer nördlich von Jinja liegt Bujagali, und dieser Ortsname
            stand über zwei Jahrzehnte für eines der renommiertesten Wildwasser-Rafting-Gebiete
            weltweit. Der Viktoria-Nil stürzte hier durch eine Abfolge von Stromschnellen der
            Schwierigkeitsgrade III bis V — kraftvoll, unberechenbar und für geübte Paddler ein
            Erlebnis der Sonderklasse. Anfänger konnten auf geführten Schlauchboot-Fahrten durch
            die wildesten Stellen mitgenommen werden; Kajakfahrer aus aller Welt machten Bujagali
            zu einem festen Punkt auf ihrer internationalen Saison-Route.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Diese Ära endete mit dem Bau des Bujagali-Wasserkraftdammes, dessen endgültige
            Fertigstellung die Stromschnellen weitgehend veränderte. Der Damm ist Teil von Ugandas
            Strategie zur Ausweitung der nationalen Energieversorgung — ein Infrastrukturprojekt
            mit erheblichen sozialen und ökologischen Folgen für die Region. Die berühmtesten
            Stromschnellen wurden überflutet oder abgemildert. Rafting-Anbieter haben sich
            angepasst und nutzen heute die verbliebenen Abschnitte flussaufwärts, die weiterhin
            attraktive Wildwasserbedingungen bieten. Das Erlebnis ist verändert, aber nicht
            verschwunden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Neben dem Rafting bietet die Region um Bujagali eine Vielzahl weiterer
            Aktivitäten: Bungee-Jumping über dem Nil — von einer Plattform aus, die direkt über
            dem Fluss errichtet wurde — zählt zu den eindrucksvollsten Abenteuern der Region.
            Quadtouren entlang der Flussufer führen durch ländliche Siedlungen und
            Zuckerrohrfelder. Mountainbike-Organisationen wie FABIO (First African Bicycles
            Information Organization) verleihen Fahrräder und organisieren geführte
            Tagestouren durch die Umgebung. Mehrere Eco-Lodges haben sich am Nilufer
            angesiedelt — einige davon auf Inseln im Fluss, erreichbar per Boot ab einem
            Parkplatz am Ufer. Tagesbesucher sind bei einigen dieser Unterkünfte gegen
            Eintrittsgebühr willkommen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Für Reisende, die Jinja als Tagesausflug von Kampala aus besuchen, ist eine
            Kombination aus Nilquellen-Bootsfahrt am Morgen und Rafting oder Flussufer-Spaziergang
            am Nachmittag gut umsetzbar. Rafting-Anbieter bieten häufig kostenlose Shuttles
            zwischen Kampala und Jinja an, was die Logistik erleichtert.
          </p>

          {/* H2: Wildtiere entlang des Nils */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Wildtiere entlang des Viktoria-Nils: Krokodile, Flusspferde und Vögel
          </h2>

          {/* Inline: Gorilla-Foto als visueller Einschub für Uganda-Wildtier-Kontext */}
          <figure className="my-8 rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
              alt="Berggorilla sitzt im Baumkronendach des Bwindi Impenetrable Forest und frisst Blätter – Wildtierbeobachtung im Juni 2026"
              className="w-full object-cover"
              style={{ maxHeight: '400px', objectPosition: 'center' }}
            />
            <figcaption className="text-sm text-gray-500 px-4 py-2 bg-gray-50">
              Berggorilla im Bwindi Impenetrable Forest, Juni 2026 — Foto: Mark Suer
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-5">
            Uganda ist nicht nur Gorillaland — ein Blick auf die Tierwelt entlang der Wasserläufe
            zeigt, wie vielfältig das Land tatsächlich ist. Beim Gorilla-Trekking im Bwindi
            Impenetrable Forest im Juni 2026 zeigt sich diese Vielfalt besonders eindrücklich:
            Bereits nach etwa einer Stunde Wanderung war die erste Gorilla-Familie anzutreffen,
            einer der Silberrücken saß oben im Baum und fraß ruhig Blätter — ein unmittelbarer,
            stiller Moment, der das gesamte Trekking in einem einzigen Bild verdichtet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Entlang des Viktoria-Nils zwischen Jinja und den weiter nördlich gelegenen
            Nationalparkgebieten präsentiert sich eine andere, ebenso faszinierende Tierwelt.
            Das Nilkrokodil — wissenschaftlich bekannt als Crocodylus niloticus — ist an vielen
            Gewässerabschnitten Ugandas verbreitet. Am Viktoria-Nil bei Jinja sind Krokodile
            bereits auf der Bootsfahrt zur Nilquelle zu beobachten, meist an flachen Uferstellen
            und auf Sandbänken. Sie liegen dort oft reglos in der Morgensonne — träge wirkend,
            aber jederzeit reaktionsbereit. Diese Reptilien können im ausgewachsenen Zustand sechs
            Meter Länge erreichen und zählen zu den größten Krokodilarten der Welt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Flusspferde sind im Bereich des Viktoria-Nils seltener als etwa im Kazinga-Kanal im
            Queen Elizabeth National Park oder im Murchison Falls Nationalpark weiter nördlich —
            doch vereinzelte Sichtungen sind möglich, vor allem in den frühen Morgenstunden und
            am späten Nachmittag. Wer eine konzentrierte Beobachtung von Flusspferden und
            Krokodilen anstrebt, plant am besten einen Abstecher nach Norden ein: Der
            Murchison Falls National Park bietet auf Bootsafaris entlang des Nils einige der
            besten Nilpferd-Beobachtungsmöglichkeiten des gesamten Kontinents.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Vogelkundler finden entlang des Nils südlich von Jinja eine reiche Fauna. Uganda
            zählt insgesamt zu den vogelreichsten Ländern der Welt. Der Shoebill — auf Deutsch
            Schuhschnabel — gehört zu den ikonischsten Vogelarten Ugandas und ist vor allem im
            Mabamba-Sumpf nahe Entebbe zu beobachten, einem Feuchtgebiet, das speziell für diese
            Art weltbekannt ist. Entlang des Nils bei Jinja sind Eisvögel, Reiher, Strandläufer
            und zahlreiche Wasservögel allgegenwärtig. Für Ornithologen ist Uganda ein
            eigenständiges Reiseziel — der Viktoria-Nil ist dabei eine der lohnendsten Strecken.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Rothschild-Giraffe, endemisch in Uganda, ist im Süden des Landes kaum zu finden —
            ihr Verbreitungsschwerpunkt liegt im Murchison Falls National Park. Wer die komplette
            Palette ugandischer Wildtiere erleben möchte, kombiniert Jinja sinnvoll mit einer
            Route in den Norden: von Kampala nach Jinja, von dort weiter nach Masindi und in den
            Murchison Falls Nationalpark. Diese Route verbindet Stadtgeschichte, Flussabenteuer
            und klassische Big-Safari-Begegnungen in einer logisch aufgebauten Rundreise.
          </p>

          {/* H2: Tourismus und Zahlen */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Uganda-Tourismus im Kontext: Jinja als Teil eines wachsenden Reiseziels
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Jinja ist keine Insel im ugandischen Tourismusgefüge — die Stadt ist Teil eines Landes,
            das in den vergangenen Jahren international an Sichtbarkeit gewonnen hat. Ugandas
            Tourismusdaten aus dem Statistischen Jahrbuch 2014 zeigen, dass 64 Prozent der
            Besucher des Landes damals aus dem östlichen und südlichen Afrika stammten. Die
            Nationalparks wurden 2013 zu 47 Prozent von ausländischen Nicht-Bewohnern besucht,
            gefolgt von 24 Prozent aus der ostafrikanischen Gemeinschaft. Diese Zahlen belegen,
            dass Ugandas Tourismus — anders als oft angenommen — nicht primär ein Phänomen des
            westeuropäischen Fernreisenden ist, sondern ein regionaler und kontinentaler Markt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Museumsdaten aus demselben Zeitraum geben weitere Einblicke: Das Uganda Museum in
            Kampala verzeichnete 2013 insgesamt 112.684 Besucher — ein Anstieg von 14 Prozent
            gegenüber dem Vorjahr. Unter diesen Besuchern stellten Schulkinder mit 84 Prozent die
            mit Abstand größte Gruppe. Diese Entwicklung zeigt, dass kulturelle Bildung und
            nationales Erbe in Uganda aktiv gefördert werden — und dass der Tourismus nicht nur
            von außen nach Uganda kommt, sondern in der ugandischen Gesellschaft selbst tief
            verankert ist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Für Jinja selbst bedeutet dieser Kontext: Die Stadt ist längst mehr als ein
            Durchgangspunkt auf dem Weg zu den Gorillas oder den nördlichen Parks. Jinja hat
            eine eigenständige Identität als Reiseziel entwickelt — als Ort der
            Auseinandersetzung mit dem Nil, als Abenteuer-Hub und als Stadt mit einer Geschichte,
            die tief in die koloniale wie vorkoloniale Vergangenheit des Landes reicht. Das Hotel
            and Tourism Training Institute am Ort bildet lokale Fachkräfte aus und trägt zur
            Professionalisierung des Sektors bei — ein Zeichen, dass die Infrastruktur für
            nachhaltiges Wachstum aufgebaut wird.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Verbindung zwischen Jinja und dem Rest Ugandas ist logistisch gut gelöst:
            Matatu-Minibusse verbinden die Stadt den ganzen Tag über mit Kampala (Kosten: 8.000
            bis 10.000 ugandische Schilling, Fahrtzeit ca. zwei Stunden). Regelmäßige Verbindungen
            führen auch nach Mbale und Tororo in Richtung der kenianischen Grenze. Ein
            Übernachtungsbus ab Kampala fährt täglich gegen 6:30 Uhr vom Hauptpostamt ab und
            passiert Jinja am frühen Nachmittag. Wer mehrere Tage einplant, entdeckt die Stadt
            in einem ganz anderen Rhythmus — ruhiger, tiefer und abseits der tagestouristischen
            Hektik.
          </p>

          {/* PagePhotos Galerie */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur Nilquelle in Jinja
            </h2>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 bg-white hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-gray-900 text-base leading-snug">
                      {item.q}
                    </span>
                    <span
                      className="text-safari-600 text-xl font-light flex-shrink-0"
                      aria-hidden="true"
                    >
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-700 leading-relaxed text-sm border-t border-gray-100 pt-4 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interne Links */}
          <div className="mt-14 border-t border-gray-100 pt-10">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
              Mehr zu Uganda entdecken
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/regionen/entebbe"
                className="block p-4 rounded-xl border border-gray-200 hover:border-safari-400 hover:bg-safari-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm">Entebbe — Ankunft &amp; Transfer</span>
                <p className="text-gray-500 text-xs mt-1">
                  Flughafen, Visa, SIM-Karte und Transfer nach Jinja (2,5 Std.)
                </p>
              </a>
              <a
                href="/regionen/jinja"
                className="block p-4 rounded-xl border border-gray-200 hover:border-safari-400 hover:bg-safari-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm">Region Jinja</span>
                <p className="text-gray-500 text-xs mt-1">
                  Alles über die Abenteuer-Hauptstadt Ostafrikas
                </p>
              </a>
              <a
                href="/murchison-falls-nationalpark-guide"
                className="block p-4 rounded-xl border border-gray-200 hover:border-safari-400 hover:bg-safari-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm">Murchison Falls Nationalpark</span>
                <p className="text-gray-500 text-xs mt-1">
                  Nilsafaris, Wasserfälle und 240 Löwen im größten Nationalpark Ugandas
                </p>
              </a>
              <a
                href="/nationalparks/queen_elizabeth"
                className="block p-4 rounded-xl border border-gray-200 hover:border-safari-400 hover:bg-safari-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm">Queen Elizabeth Nationalpark</span>
                <p className="text-gray-500 text-xs mt-1">
                  Kazinga-Kanal, Baumkletternde Löwen und Flusspferde in Massen
                </p>
              </a>
              <a
                href="/gorilla-trekking"
                className="block p-4 rounded-xl border border-gray-200 hover:border-safari-400 hover:bg-safari-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm">Gorilla-Trekking in Uganda</span>
                <p className="text-gray-500 text-xs mt-1">
                  Berggorillas im Bwindi Impenetrable Forest besuchen
                </p>
              </a>
              <a
                href="/beste-reisezeit-uganda"
                className="block p-4 rounded-xl border border-gray-200 hover:border-safari-400 hover:bg-safari-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm">Beste Reisezeit Uganda</span>
                <p className="text-gray-500 text-xs mt-1">
                  Trockenmonate, Regenzeiten und Klima im Überblick
                </p>
              </a>
              <a
                href="/nachhaltiger-tourismus-uganda"
                className="block p-4 rounded-xl border border-gray-200 hover:border-safari-400 hover:bg-safari-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm">Nachhaltiger Tourismus</span>
                <p className="text-gray-500 text-xs mt-1">
                  Wie Reisende aktiv zum Schutz von Natur und Gemeinden beitragen
                </p>
              </a>
              <a
                href="/reiseplanung"
                className="block p-4 rounded-xl border border-gray-200 hover:border-safari-400 hover:bg-safari-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm">Uganda Reiseplanung</span>
                <p className="text-gray-500 text-xs mt-1">
                  Routen, Budgets und praktische Tipps für die Vorbereitung
                </p>
              </a>
              <a
                href="/nationalparks/bwindi"
                className="block p-4 rounded-xl border border-gray-200 hover:border-safari-400 hover:bg-safari-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm">Bwindi Impenetrable Forest</span>
                <p className="text-gray-500 text-xs mt-1">
                  UNESCO-Welterbe und Heimat der Hälfte aller Berggorillas der Welt
                </p>
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
