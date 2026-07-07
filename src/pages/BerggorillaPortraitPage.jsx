import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'berggorilla-portrait-leben-verhalten'

export default function BerggorillaPortraitPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Wie viele Berggorillas gibt es noch weltweit?',
      antwort:
        'Die Gesamtpopulation der Berggorillas liegt heute bei über 1.000 Individuen. In Uganda wurden im Zeitraum 2018 bis 2020 rund 459 Tiere gezählt. Damit gilt die Unterart zwar nicht mehr als "vom Aussterben bedroht", sie bleibt aber weiterhin als "stark gefährdet" eingestuft und auf kontinuierlichen Schutz angewiesen.'
    },
    {
      frage: 'Wo in Uganda kann man Berggorillas sehen?',
      antwort:
        'Berggorillas leben in Uganda ausschließlich im Bwindi Impenetrable National Park sowie im Mgahinga Gorilla National Park im äußersten Südwesten des Landes. Bwindi beherbergt mit Abstand die größere der beiden Populationen und ist gleichzeitig der einzige Ort der Welt, an dem Berggorillas und Schimpansen denselben Lebensraum teilen.'
    },
    {
      frage: 'Was unterscheidet den Berggorilla vom Flachlandgorilla?',
      antwort:
        'Berggorillas sind größer und kräftiger gebaut als ihre östlichen und westlichen Flachlandverwandten. Ihr Fell ist dichter und länger, was sie an das kältere Klima der Hochlagen ab etwa 1.500 Metern angepasst. Sie bewegen sich überwiegend auf dem Boden und klettern seltener auf Bäume als andere Gorilla-Unterarten.'
    },
    {
      frage: 'Sind Berggorillas gefährlich für Menschen?',
      antwort:
        'Habituierte Berggorillas, also Gruppen die an menschliche Anwesenheit gewöhnt wurden, verhalten sich ruhig und zeigen kein aggressives Verhalten gegenüber Besuchern, solange die Verhaltensregeln eingehalten werden. Mindestabstand, keine lauten Geräusche und kein direkter Blickkontakt gehören zu den wichtigsten Grundregeln.'
    },
    {
      frage: 'Wie lange dauert eine Gorilla-Trekking-Tour in Bwindi?',
      antwort:
        'Die Wanderzeit bis zur Gorilla-Gruppe hängt vom Standort der Familie am jeweiligen Tag ab. Es können weniger als eine Stunde, aber auch drei bis fünf Stunden oder mehr sein. Bei unserem Besuch im Juni 2026 dauerte die Wanderung etwa drei Stunden, bevor wir die Familie trafen. Die erlaubte Beobachtungszeit beträgt in der Regel eine Stunde.'
    }
  ]

  return (
    <>
      <Head
        title="Berggorilla: Portrait, Leben und Verhalten"
        description="Berggorilla Steckbrief: Sozialstruktur, Verhalten und Schutz in Uganda. Persönlicher Bericht aus Bwindi mit GPS-verifizierten Fotos vom Juni 2026."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780726602862_1to3.jpg"
            alt="Ein Berggorilla blickt direkt in die Kamera, teilweise verborgen hinter dem Blattwerk des Bwindi Impenetrable National Park"
            className="w-full h-full object-cover"
          />
          <figcaption className="text-sm text-gray-500 text-center py-2 px-4">
            Berggorilla im Bwindi Impenetrable National Park — Foto: Mark Suer, Juni 2026
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Berggorilla: Portrait, Leben und Verhalten der Mountain Gorillas in Uganda
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Es war ein Morgen im Juni 2026 in Buhoma, dem kleinen Ort am Rand des Bwindi Impenetrable National Park, als wir auf drei Kinder stießen. Sie standen vor einem einfachen Lehmgebäude, leicht verschüchtert, die Kleidung abgenutzt. Sie gehörten zur Nachbarschaft des örtlichen Waisenhauses. Wir luden sie ein, gemeinsam mit uns zu essen. Ein kurzer Moment, unspektakulär — und doch einer, der zeigt, dass hinter jedem Besuch in dieser Region weit mehr steckt als Wildbeobachtung. Buhoma ist beides zugleich: Ausgangspunkt für eines der eindrücklichsten Naturerlebnisse der Welt und ein Ort, an dem Menschen ihren Alltag unter schwierigen Bedingungen gestalten.
          </p>

          <figure className="float-right ml-6 mb-4 max-w-xs">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
              alt="Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, aufgenommen am 21. Juni 2026"
              className="w-full rounded-lg"
            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Buhoma, 21. Juni 2026 — GPS: -0.9617°N, 29.6109°E. Foto: Mark Suer
            </figcaption>
          </figure>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Wenige Stunden nach diesem Morgen brachen wir zu einer dreistündigen Wanderung durch den Bergwald auf. Am Ende dieser Wanderung saßen wir, ein paar Meter entfernt, einer Gorilla-Familie gegenüber. Die Tiere zeigten keine Angst, kein Ausweichen. Ein Berggorilla schaute direkt in die Kamera, ruhig und ohne Hast, als wäre unser Besuch die natürlichste Sache der Welt. Diesen Moment habe ich nicht vergessen. Er ist der Grund, warum dieser Artikel mehr sein will als eine biologische Beschreibung — er soll erklären, wer diese Tiere wirklich sind.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Der Berggorilla gehört zu den am stärksten gefährdeten Wildtieren der Erde. Gleichzeitig ist seine Geschichte eine der wenigen echten Erfolgsgeschichten des modernen Naturschutzes. In Uganda lebt ein erheblicher Teil der weltweiten Population, vor allem im Bwindi Impenetrable National Park. Wer die Art verstehen will — ihre Biologie, ihr Sozialverhalten, die Bedrohungen und den Schutz — findet hier einen umfassenden Überblick, aufgebaut auf persönlicher Erfahrung und dokumentierten Fakten.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">Berggorilla — Steckbrief</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-800">
              <div><span className="font-semibold text-jungle-800">Wissenschaftlicher Name:</span> Gorilla beringei beringei</div>
              <div><span className="font-semibold text-jungle-800">Familie:</span> Menschenaffen (Hominidae)</div>
              <div><span className="font-semibold text-jungle-800">Bestand Uganda (2018–2020):</span> ca. 459 Individuen</div>
              <div><span className="font-semibold text-jungle-800">Weltweiter Bestand:</span> über 1.000 Individuen</div>
              <div><span className="font-semibold text-jungle-800">Lebensraum:</span> Bergwälder ab 1.500 m ü.M.</div>
              <div><span className="font-semibold text-jungle-800">Schutzstatus:</span> Stark gefährdet (IUCN)</div>
              <div><span className="font-semibold text-jungle-800">Vorkommen Uganda:</span> Bwindi NP, Mgahinga NP</div>
              <div><span className="font-semibold text-jungle-800">Besonderheit:</span> Einzige Gorilla-Art mit Fellwuchs im Gesicht</div>
              <div><span className="font-semibold text-jungle-800">Körpergröße (Männchen):</span> bis 180 cm, bis 220 kg</div>
              <div><span className="font-semibold text-jungle-800">Nahrung:</span> Pflanzen, Früchte, Rinde, Insekten</div>
              <div><span className="font-semibold text-jungle-800">Sozialstruktur:</span> Familiengruppen, angeführt vom Silberrücken</div>
              <div><span className="font-semibold text-jungle-800">Beobachtbar seit:</span> Habituierung dauert 2–3 Jahre</div>
            </div>
          </div>

          {/* H2: Biologie und Portrait */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Biologie und Portrait: Was den Berggorilla ausmacht
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Der Berggorilla ist eine Unterart des Östlichen Gorillas und lebt ausschließlich in einem schmalen Gebirgsgürtel in Zentralafrika — in den Virunga-Vulkanen an den Grenzen von Uganda, Ruanda und der Demokratischen Republik Kongo sowie im Bwindi Impenetrable National Park im Südwesten Ugandas. Beide Populationen sind voneinander getrennt und haben sich über Jahrtausende in leicht unterschiedliche Richtungen entwickelt. Was sie verbindet, ist ihr dicht bewaldeter Lebensraum in Höhenlagen, die andere Großaffenarten meiden.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Das auffälligste Merkmal des Berggorillas ist sein dichtes, langes Fell. Wer Fotos von Flachlandgorillas kennt, wird den Unterschied sofort bemerken: Das Haarkleid des Berggorillas ist deutlich länger und dunkler, was ihm Schutz vor den kühleren Temperaturen in Höhenlagen von 1.500 bis über 3.000 Metern bietet. Adulte Männchen — sogenannte Silberrücken — entwickeln ab einem Alter von etwa zehn bis zwölf Jahren das namensgebende silbergraue Fell auf dem Rücken, das ihre Dominanzstellung in der Gruppe anzeigt.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            In Körpergröße und Gewicht sind Berggorillas die größten lebenden Primaten der Welt. Ausgewachsene Männchen erreichen eine Körpergröße von bis zu 180 Zentimetern und ein Gewicht von 150 bis über 220 Kilogramm. Weibchen sind deutlich kleiner und leichter. Der Geschlechtsdimorphismus — also der Größenunterschied zwischen Männchen und Weibchen — ist bei dieser Art besonders ausgeprägt. Das Gesicht ist breiter und flacher als bei anderen Affen, mit kleinen Ohren, einem markanten Knochenkamm auf dem Schädel beim Männchen und einem ruhigen, fast menschlichen Blick, der bei einer ersten Begegnung etwas zutiefst Vertrautes auslöst.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Die Nahrung besteht zu über 85 Prozent aus Pflanzenmaterial — Blätter, Triebe, Stängel, Rinde und Früchte. Berggorillas sind keine selektiven Feinschmecker, sondern robuste Generalisten, die eine enorme Menge pflanzlicher Biomasse täglich verarbeiten. Ein ausgewachsenes Männchen nimmt bis zu 30 Kilogramm Nahrung pro Tag zu sich. Diese hohe Nahrungsaufnahme erklärt, warum Gorilla-Gruppen täglich weiträumig durch den Wald ziehen, immer auf der Suche nach frischen Nahrungsquellen. Dabei bewegen sie sich überwiegend auf dem Boden, vierfüßig auf den Fingerknöcheln — ein Fortbewegungsmuster, das als Knöchelgang bezeichnet wird und charakteristisch für alle Gorilla-Arten ist.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Berggorillas sind tagaktiv. In den frühen Morgenstunden beginnen sie mit der Nahrungssuche, ruhen in den Mittagsstunden und suchen abends einen geeigneten Schlafplatz, an dem jedes Tier sein eigenes Nestlager aus Ästen und Blättern baut. Dieses Nestbauen ist eine täglich neue Verhaltensroutine — ein Zeichen ihrer kognitiven Flexibilität und ihres hohen Werkzeugsinns im weitesten Sinne.
          </p>

          {/* H2: Sozialstruktur und Verhalten */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Sozialstruktur und Verhalten: Das Leben in der Gruppe
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Das soziale Leben des Berggorillas ist komplex und eng um den dominanten Silberrücken organisiert. Eine typische Gruppe besteht aus einem oder mehreren Silberrücken-Männchen, mehreren Weibchen und deren Jungtieren. Gruppen mit nur einem Männchen an der Spitze sind häufig, es gibt aber auch größere Familienverbände mit zwei oder drei adulten Männchen, von denen eines die Hauptführungsrolle übernimmt.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Der Silberrücken ist nicht nur körperlich dominant — er ist die Entscheidungsinstanz der Gruppe. Er bestimmt Reiseroute, Ruhezeiten und Schlafplatz. Er schützt die Gruppe vor Bedrohungen, indem er sich beeindruckend aufbaut, auf die Brust trommelt und laut vokalisiert. Dieses Verhalten — oft fälschlicherweise als Aggression gedeutet — ist primär eine Imponier- und Warngeste, die echten Körperkontakt vermeiden soll. In den meisten Fällen zieht sich ein Eindringling zurück, bevor es zu einer tatsächlichen Konfrontation kommt.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Jungtiere werden sehr eng von ihren Müttern betreut. In den ersten Lebensmonaten klammern sie sich dauerhaft am Körper der Mutter fest, später beginnen sie, unter Aufsicht die Umgebung zu erkunden. Das Spielverhalten ist ausgeprägt und dient dem Erlernen sozialer Signale. Jungtiere toben miteinander, klettern auf schlafende Erwachsene und testen dabei permanent ihre eigenen körperlichen Grenzen und die Geduld der Gruppe. Erwachsene Gorillas reagieren auf dieses Verhalten überraschend tolerant.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Die Kommunikation innerhalb der Gruppe erfolgt über eine Vielzahl von Lauten, Gesten und Körperhaltungen. Gorillas summen bei der Nahrungsaufnahme, was als Zufriedenheitssignal gilt. Sie grunzen zur Begrüßung und nutzen hohe, bellende Rufe als Alarmzeichen. Berührungen — gegenseitiges Körperpflegen, das sogenannte Grooming — stärken soziale Bindungen und reduzieren Stress. Diese sozialen Rituale sind bei Berggorillas weniger intensiv ausgeprägt als bei Schimpansen, erfüllen aber dieselbe Funktion: Sie halten den Zusammenhalt der Gruppe aufrecht.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Ein häufig unterschätzter Aspekt des Gorilla-Verhaltens ist die Individuelle Persönlichkeit jedes Tieres. Wer eine habituierte Gruppe mehrfach besucht, bemerkt schnell, dass nicht alle Tiere gleich reagieren. Manche Gorillas zeigen Neugier gegenüber menschlichen Besuchern, andere ignorieren diese vollständig. Einige Weibchen sind deutlich scheuer als andere. Diese Unterschiede sind keine zufälligen Stimmungsschwankungen, sondern stabile Charakterzüge, die die Ranger und Forscher über Jahre kennenlernen und dokumentieren.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Bei unserer Trekking-Tour im Juni 2026 war genau dieses Spektrum zu beobachten. Mehrere Tiere lagen in den Ästen und ruhten, kaum berührt von unserer Anwesenheit. Eines der Weibchen wanderte wenige Meter an uns vorbei, ohne den Blick zu heben. Und dann war da dieser eine Berggorilla, der direkt in die Kamera schaute — ruhig, ohne jede Aufregung, als wäre ein direkter Blickkontakt keine große Sache. Es war einer der seltenen Momente, in denen man spürt, wie nah uns diese Tiere evolutionär stehen.
          </p>

          {/* H2: Berggorillas in Uganda */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Berggorillas in Uganda: Bwindi und der Schutz durch Ökotourismus
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Uganda beherbergt die größte Teilpopulation der Berggorillas innerhalb des Bwindi Impenetrable National Park. Der Park liegt im äußersten Südwesten des Landes, unmittelbar an der Grenze zur Demokratischen Republik Kongo. Mit einer Fläche von rund 331 Quadratkilometern ist Bwindi einer der artenreichsten Bergwälder Afrikas — und der einzige Ort weltweit, an dem Berggorillas und Schimpansen denselben Lebensraum teilen. Diese biologische Besonderheit macht den Park zu einem Schlüsselstandort für die Primatenkunde und den Naturschutz.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Bwindi wurde 1994 als UNESCO-Weltnaturerbe anerkannt. Die Klassifizierung ist kein Marketingtitel, sondern Ergebnis einer umfangreichen wissenschaftlichen Bewertung: Der Wald gilt als eines der biologisch bedeutsamsten Ökosysteme Afrikas, mit über 1.000 Pflanzenarten, mehr als 350 Vogelarten und 120 Säugetierarten. Die Berggorilla-Population gibt diesem Reichtum ein Gesicht, das international verständlich ist und Reisende aus aller Welt anzieht.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            In Uganda wurden im Zeitraum 2018 bis 2020 rund 459 Berggorilla-Individuen gezählt. Dieser Wert ist das Ergebnis sorgfältiger Feldarbeit, bei der Ranger und Forscher anhand von Schlaf-Nestern, Kotproben und direkten Sichtungen die Populationsgröße abschätzen. Die Gesamtzahl weltweit liegt heute bei über 1.000 Tieren — ein Wert, der vor zwei Jahrzehnten als unerreichbares Ziel galt. Mitte des 20. Jahrhunderts war die Situation dramatisch: Wilderei, Lebensraumverlust und politische Instabilität hatten die Population auf unter 300 Tiere gedrückt.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Die Wende kam durch ein Zusammenspiel aus verstärkten Schutzmaßnahmen, internationaler Naturschutzfinanzierung und — entscheidend — dem Gorilla-Trekking-Tourismus. Die Einnahmen aus Permit-Verkäufen fließen zu einem Teil direkt in lokale Gemeinden und in den Parkbetrieb. Dieses Modell hat bewiesen, dass lebende Gorillas wirtschaftlich wertvoller sind als tote. Für die lokale Bevölkerung rund um Bwindi ist diese Tatsache keine abstrakte Naturschutzformel, sondern gelebte Realität: Lodges, Guides, Porterservices, Kunsthandwerk und Restaurantbetriebe entlang der Trekking-Routen sind ohne die Gorillas nicht denkbar.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Das Internationale Gorilla-Schutzprogramm (IGCP) koordiniert den grenzübergreifenden Schutz der Berggorillas in Uganda, Ruanda und der Demokratischen Republik Kongo. In Uganda engagieren sich außerdem nationale Naturschutzorganisationen und die Uganda Wildlife Authority. Eine besondere Rolle spielen die vor Ort arbeitenden Ranger, die täglich Gorilla-Gruppen im Gelände begleiten, ihren Gesundheitszustand überwachen und Schlingen entfernen. Ohne diese tägliche, körperlich anspruchsvolle Arbeit unter schwierigen Bedingungen wäre der Schutz der Berggorillas nicht möglich.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Im Rwampara-Distrikt, der zum weiteren Einzugsbereich des Gorilla-Tourismus gehört, werden derzeit 100 Tourismus-Fachkräfte jährlich weitergebildet. Ziel ist es, bis zum Haushaltsjahr 2029/30 auf 175 ausgebildete Fachkräfte zu kommen. Gleichzeitig wurde in der Region ein spezialisierter Tourismus-Polizeiposten eingerichtet, um die Sicherheit der Besucher und die Kontrolle touristischer Aktivitäten zu verbessern. Diese Zahlen zeigen: Der Gorilla-Tourismus ist kein Selbstläufer, sondern das Ergebnis jahrelanger Kapazitätsaufbauarbeit.
          </p>

          {/* H2: Gorilla-Trekking als Naturschutzmittel */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Gorilla-Trekking als Naturschutzmittel: Permit, Habituierung und Besucherregeln
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Gorilla-Trekking in Uganda ist kein spontaner Ausflug. Der Zugang zu den Gorilla-Gruppen ist streng reguliert. Täglich darf jede habituierte Gruppe von maximal acht Personen besucht werden. Die Beobachtungszeit ist auf eine Stunde begrenzt. Wer hustet, niest oder erkältet ist, darf nicht an einer Trekking-Tour teilnehmen — das Risiko einer Krankheitsübertragung auf die Gorillas ist real, da die genetische Ähnlichkeit zwischen Menschen und Gorillas bei über 98 Prozent liegt.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Bevor eine Gorilla-Gruppe für den Tourismus freigegeben wird, muss sie über zwei bis drei Jahre hinweg habituiert werden. Ranger besuchen die Gruppe täglich, halten respektvollen Abstand und gewöhnen die Tiere langsam an menschliche Anwesenheit. Erst wenn die Gruppe auf Menschenannäherung nicht mehr mit Flucht oder Aggression reagiert, gilt sie als touristisch nutzbar. Von den heute in Bwindi bekannten Gorilla-Gruppen sind mehrere Dutzend habituiert.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Das Permit für eine Gorilla-Trekking-Tour kostet für internationale Reisende einen festgesetzten Betrag, der von der Uganda Wildlife Authority (UWA) festgelegt und regelmäßig angepasst wird. Ein erheblicher Teil dieser Einnahmen wird für lokale Gemeindeprojekte verwendet — Schulbau, Brunnen, Gesundheitsstationen. Das ist kein Marketingversprechen, sondern dokumentierter Programmbestandteil des Tourism Development Programme, das Gorilla-Tourismus und regionale Entwicklung systematisch verknüpft.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Wer zum ersten Mal in Bwindi ein Gorilla-Trekking erlebt, ist oft überrascht, wie unspektakulär die Umgebung zunächst wirkt. Der Wald ist dicht, der Weg steil, die Vegetation undurchdringlich. Das ändert sich schlagartig, wenn die Ranger ein Zeichen geben und man zwischen den Blättern die ersten schwarzen Fell-Umrisse erkennt. In diesem Moment — und das berichten fast alle Besucher übereinstimmend — verändert sich etwas. Die Stille, die Statur der Tiere, der direkte Blick. Bei unserem Besuch im Juni 2026 dauerte die Wanderung gut drei Stunden. Die eine Stunde mit der Gruppe war kürzer, als sie sich anfühlte.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Die Statistiken bestätigen die Bedeutung des Gorilla-Tourismus für Uganda insgesamt. Der Berggorilla ist die bekannteste Einzelattraktion des Landes und zieht Besucher aus aller Welt an. Die Reisenden, die nach Uganda kommen, sind in der Regel keine Massentouristen: 65 Prozent der Besucher im Jahr 2013 waren zwischen 25 und 44 Jahre alt, 44 Prozent blieben länger als einen Monat im Land. Diese Zahlen zeigen, dass Uganda kein kurzfristiger Stopover ist, sondern ein Reiseziel, das intensiv bereist wird.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Der Gorilla-Tourismus hat Bwindi auf die Weltkarte des Naturtourismus gebracht. Zugleich bleibt er zerbrechlich. Politische Instabilität, Epidemien — die COVID-19-Pandemie hat den Tourismus auf Null gedrückt — oder sicherheitsrelevante Vorfälle können den Zustrom von Besuchern innerhalb weniger Wochen stoppen. Das macht den Schutz der Gorillas von einem stabilen Umfeld abhängig, das weit über den Parkzaun hinausgeht. [ZITAT: Guide über den Einfluss der Pandemie auf lokale Familien]
          </p>

          {/* H2: Gorilla-Schutz und Zukunft */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Schutz und Zukunft: Warum der Berggorilla eine Erfolgsgeschichte bleibt — aber keine sichere
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Der Anstieg der Berggorilla-Population von unter 300 auf über 1.000 Tiere ist ein Ergebnis, das die Naturschutzwelt bis heute aufhorchen lässt. Es ist eine der wenigen Arten, deren Bestand trotz zunehmendem menschlichem Druck gewachsen ist. Dafür gibt es keine einfache Erklärung — es war die Kombination aus guten Gesetzen, internationalem Geld, lokaler Eigenverantwortung und konsequenter Arbeit der Ranger.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Die Zoologische Gesellschaft Frankfurt (ZGF) engagiert sich seit über drei Jahrzehnten im Gorilla-Schutz, auch im benachbarten Parc National des Virunga im Kongo, wo die Habituierung mehrerer Gorilla-Familien auf ihr Zutun zurückgeht. Der Dian Fossey Gorilla Fund International, gegründet im Andenken an die Pionierin der Gorilla-Forschung, koordiniert Schutz und Wissenschaft vor allem im Bereich der Virunga-Vulkane in Ruanda. Diese internationalen Akteure sind keine Konkurrenten, sondern Partner in einem System, das transnational funktionieren muss, weil die Gorillas selbst keine Staatsgrenzen kennen.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Wilderei bleibt eine reale Bedrohung. Auch wenn Berggorillas selten direkt zum Ziel von Wilderern werden, sterben sie in Schlingen, die für andere Tiere — Buschböcke, Ducker — aufgestellt werden. Die Ranger in Bwindi und anderen Parks patrouillieren täglich, entfernen Schlingen und dokumentieren jeden Fund. Jeder Schlingenentfernungseinsatz ist gleichzeitig ein kleiner Naturschutzakt und ein großes Risiko für die beteiligten Ranger. Ihr Einsatz bleibt weitgehend unsichtbar — aber ohne ihn würde sich das Bild auf diesem Artikel nicht machen lassen.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Klimawandel ist ein weiterer Faktor, der die Zukunft der Berggorillas betrifft. Steigende Temperaturen in den Hochlagen Afrikas verändern die Vegetation langsam, aber messbar. Ob und wie die Gorillas auf veränderte Nahrungsverfügbarkeit reagieren können, ist Gegenstand laufender Forschung. Die enge Bindung an bestimmte Waldtypen macht sie anfälliger als Generalisten.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Wer einen Gorilla-Trekking-Permit kauft, leistet damit einen direkten Beitrag zu diesem System. Das ist keine Schönrederei — die Erlöse aus dem Tourismus sind ein nachweisbarer Teil der Finanzierung des Gorilla-Schutzes. Gleichzeitig sollte klar sein, dass kein einzelner Besuch ausreicht. Der Schutz einer Art, die in kleinen Populationen auf wenige Schutzgebiete beschränkt ist, erfordert dauerhaftes politisches Engagement und internationale Finanzierung weit über den Tourismuseinnahmen hinaus.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Häufige Fragen zum Berggorilla
          </h2>
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-12">
            {faqs.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex justify-between items-start gap-4 bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-gray-900 text-base leading-snug">{item.frage}</span>
                  <span className="text-jungle-700 text-xl mt-0.5 shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-700 leading-relaxed text-sm">
                    {item.antwort}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interne Links */}
          <div className="bg-safari-50 border border-safari-200 rounded-xl p-6 mt-4">
            <h2 className="font-display text-xl font-bold text-safari-900 mb-4">Weiterführende Seiten</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
              <li>
                <a href="/gorilla-trekking" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Gorilla-Trekking in Uganda — alles was du wissen musst
                </a>
              </li>
              <li>
                <a href="/nationalparks/bwindi" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Bwindi Impenetrable National Park: Reiseführer
                </a>
              </li>
              <li>
                <a href="/gorilla-trekking-erfahrungsbericht" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Gorilla-Trekking Erfahrungsbericht aus erster Hand
                </a>
              </li>
              <li>
                <a href="/gorilla-permit-verfuegbarkeit" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Gorilla-Permit Verfügbarkeit und Buchung
                </a>
              </li>
              <li>
                <a href="/schimpansen-trekking" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Schimpansen-Trekking in Uganda
                </a>
              </li>
              <li>
                <a href="/beste-reisezeit-uganda" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Beste Reisezeit für Uganda
                </a>
              </li>
              <li>
                <a href="/nachhaltiger-tourismus-uganda" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Nachhaltiger Tourismus in Uganda
                </a>
              </li>
              <li>
                <a href="/ranger-uganda" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Ranger in Uganda: Arbeit und Alltag
                </a>
              </li>
              <li>
                <a href="/regionen/buhoma" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Buhoma: Tor zum Bwindi-Wald
                </a>
              </li>
              <li>
                <a href="/uwa-anti-poaching" className="text-jungle-700 hover:text-jungle-900 underline underline-offset-2">
                  Anti-Poaching: Wie Uganda Wildtiere schützt
                </a>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </>
  )
}
