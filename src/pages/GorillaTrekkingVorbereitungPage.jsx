import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'gorilla-trekking-vorbereitung'

const faqItems = [
  {
    frage: 'Wie weit im Voraus sollte ich ein Gorilla-Permit buchen?',
    antwort:
      'Für die Hochsaison (Juni bis August sowie Dezember und Januar) empfiehlt sich eine Buchung mindestens drei bis sechs Monate im Voraus. In der Nebensaison sind Permits zwar kurzfristiger verfügbar, aber auch dann ist eine frühzeitige Reservierung sinnvoll, da die tägliche Besucherzahl pro Gruppe auf acht Personen begrenzt ist und Bwindi weltweit bekannt ist. Offizielle Buchung über die Uganda Wildlife Authority.',
  },
  {
    frage: 'Was kostet ein Gorilla-Permit in Uganda?',
    antwort:
      'Das Permit kostet für internationale Touristen 800 US-Dollar pro Person. Ostafrikaner zahlen einen reduzierten Tarif, ugandische Staatsangehörige einen deutlich günstigeren Preis. In der Nebensaison wurden in der Vergangenheit Rabatte gewährt, die sich jährlich ändern können. Im Preis ist die einstündige Begegnung mit einer habitualisierten Gorilla-Familie enthalten.',
  },
  {
    frage: 'Welche körperliche Kondition ist für das Gorilla Trekking erforderlich?',
    antwort:
      'Das Trekking bewegt sich im bergigen Regenwald auf Höhen zwischen 1.160 und über 2.600 Metern. Wege sind oft steil, feucht und uneben. Eine normale Wanderform genügt für die Routen ab Buhoma, bei denen die Gorillas manchmal schon nach einer Stunde gefunden werden. Die Nkuringo-Route gilt als deutlich anspruchsvoller und ist eher für konditionsstarke Wanderer geeignet. Wer gesundheitliche Einschränkungen hat, sollte vorab mit dem Arzt sprechen.',
  },
  {
    frage: 'Kann man das Gorilla Trekking das ganze Jahr machen?',
    antwort:
      'Ja, die Gorilla-Gruppen im Bwindi Impenetrable National Park sind ganzjährig besuchbar, auch an Feiertagen. Die Trockenmonate von Juni bis August sowie Dezember und Januar gelten als angenehmste Wanderzeit, weil die Wege weniger aufgeweicht sind. In den Regenmonaten April, Mai und Oktober sind die Wege teils tief verschlammt, die Vegetation ist aber besonders üppig und die Stimmung einzigartig.',
  },
  {
    frage: 'Welche Regeln gelten beim Besuch der Gorillas?',
    antwort:
      'Der Aufenthalt bei einer Gorilla-Familie ist auf eine Stunde begrenzt, um die Tiere so wenig wie möglich zu stören. Kinder unter 15 Jahren dürfen nicht teilnehmen. Personen mit Erkältungen oder ansteckenden Krankheiten werden abgewiesen, da Gorillas für menschliche Erreger empfänglich sind. Ein Mindestabstand von sieben Metern zu den Tieren ist einzuhalten, Blitze beim Fotografieren sind verboten. Die Gruppen bestehen aus maximal acht Personen.',
  },
]

export default function GorillaTrekkingVorbereitungPage() {
  const [offenesFaq, setOffenesFaq] = useState(null)

  return (
    <>
      <Head
        title="Gorilla Trekking Vorbereitung: Permits, Kosten & Tipps"
        description="Gorilla Trekking Vorbereitung für Bwindi: Permits buchen, Kosten, Ausrüstung und Ablauf. Erfahrungsbericht aus Januar und Juni 2026 mit GPS-Fotos."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        {/* Hero-Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
            alt="Berggorilla frisst Blätter im Baumkronendach des Bwindi Impenetrable National Park"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <figcaption className="text-sm text-gray-500 text-center py-2 px-4 bg-gray-50">
            Ein Berggorilla frisst Blätter im Kronendach des Bwindi-Regenwalds — Foto: Mark Suer, Juni 2026
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Gorilla Trekking Vorbereitung: Permits, Kosten und Ablauf in Bwindi
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Nach drei Stunden Wanderung durch den dichten Regenwald des Bwindi Impenetrable National Park saßen wir plötzlich
            still. Keine zehn Meter entfernt schaute ein Berggorilla direkt durch das Blattwerk hindurch — ruhig, neugierig,
            ohne die geringste Scheu. Der Moment hält die Luft an. Kein Bild vermittelt diese Stille, diesen Blick, dieses
            Gewicht der Begegnung. Bei unserem Besuch im Januar 2026 haben wir erlebt, warum Menschen aus aller Welt nach
            Uganda reisen — und warum die richtige Gorilla Trekking Vorbereitung entscheidend ist, damit genau dieser Moment
            nicht an mangelhafter Ausrüstung oder einem nicht erhältlichen Permit scheitert.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Schon nach der ersten Stunde Wanderung stießen wir auf die erste Gorilla-Familie. Der Erste saß oben im Baum
            und fraß Blätter — vollkommen unbeeindruckt von unserer Gruppe. Unser Guide und die zwei bewaffneten Ranger, die
            uns begleiteten, sorgten dafür, dass wir den richtigen Abstand hielten und sicher unterwegs waren. Die Waffen der
            Ranger wirkten zunächst befremdlich, erwiesen sich aber als völlig unproblematisch. Die Männer halfen uns beim
            schwierigen Aufstieg, kannten jeden Trampelpfad und machten den Tag erst möglich.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Diese Seite fasst alles zusammen, was eine gründliche Gorilla Trekking Vorbereitung ausmacht: Wo und wie man
            Permits bucht, was sie kosten, welche Ausrüstung wirklich nötig ist und wie der Ablauf am Trekking-Tag aussieht.
            Die Angaben stützen sich auf eigene Besuche in Bwindi im Januar 2026 und im Juni 2026 sowie auf GPS-verifizierte
            Fotos aus dem Nationalpark.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">Wichtigste Fakten auf einen Blick</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-jungle-600 uppercase tracking-wide">Permit-Preis</span>
                <span className="text-gray-800 font-medium">800 US-Dollar pro Person (internationaler Tarif)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-jungle-600 uppercase tracking-wide">Gruppengröße</span>
                <span className="text-gray-800 font-medium">Maximal 8 Personen pro Gorilla-Gruppe und Tag</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-jungle-600 uppercase tracking-wide">Aufenthalt bei den Tieren</span>
                <span className="text-gray-800 font-medium">Maximal 1 Stunde</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-jungle-600 uppercase tracking-wide">Mindestalter</span>
                <span className="text-gray-800 font-medium">15 Jahre</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-jungle-600 uppercase tracking-wide">Sektoren in Bwindi</span>
                <span className="text-gray-800 font-medium">Buhoma, Nkuringo, Ruhija, Rushaga</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-jungle-600 uppercase tracking-wide">Besuch möglich</span>
                <span className="text-gray-800 font-medium">Ganzjährig, auch an Feiertagen</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-jungle-600 uppercase tracking-wide">Wanderdauer</span>
                <span className="text-gray-800 font-medium">1 bis 8 Stunden je nach Standort der Gruppe</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-jungle-600 uppercase tracking-wide">Buchung</span>
                <span className="text-gray-800 font-medium">Uganda Wildlife Authority, vorab empfohlen</span>
              </div>
            </div>
          </div>

          {/* H2: Permits */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Das Permit: Wo buchen, was es kostet und was darin enthalten ist
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ohne Permit kein Gorilla Trekking — das ist der wichtigste Ausgangspunkt jeder Vorbereitung. Das Permit ist
              keine Formalität, sondern ein zentrales Steuerungsinstrument des ugandischen Naturschutzes. Die Einnahmen aus
              den Permits fließen in den Schutz des Bwindi Impenetrable National Park, in die Ausbildung der Ranger und in
              Entwicklungsprojekte der umliegenden Gemeinden. Wer ein Permit kauft, beteiligt sich direkt am Erhalt der
              Berggorilla-Population.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Preis für internationale Touristen liegt bei 800 US-Dollar pro Person. Dieser Betrag ist nicht verhandelbar
              und gilt unabhängig davon, ob die Wanderung kurz oder lang ausfällt. Für Ostafrikaner und ugandische
              Staatsangehörige gelten niedrigere Tarife. Vergünstigungen für die Nebensaison wurden in der Vergangenheit
              angeboten, gelten aber nicht jedes Jahr und sollten vor der Buchung direkt bei der Uganda Wildlife Authority
              erfragt werden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Offizielle Anlaufstelle für die Buchung ist die Uganda Wildlife Authority. Permits können online, über
              akkreditierte Reiseveranstalter oder direkt an den Parkeingängen erworben werden — wobei die Verfügbarkeit an
              den Eingängen kurzfristig stark schwankt. Für die Hochmonate Juni bis August sowie die Weihnachts- und
              Neujahrszeit empfiehlt sich eine Buchung drei bis sechs Monate im Voraus. Wir haben unsere Permits für Januar
              2026 über einen lokalen Anbieter gebucht und hatten keine Schwierigkeiten — aber die Auswahl des Sektors und
              der Gorilla-Gruppe war erst mit der Buchung möglich.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bwindi ist in vier Sektoren unterteilt: Buhoma im Nordwesten ist der älteste und bekannteste Bereich, von dem
              aus drei Gorilla-Familien besucht werden können — die Mubare-Gruppe mit elf Mitgliedern, die Habinyanja-Gruppe
              mit 15 Mitgliedern und die Rushegura-Gruppe, ebenfalls 15 Tiere stark. Die Mubare- und Habinyanja-Familien
              sind seit den frühen Jahren des Gorilla-Tourismus an die Anwesenheit von Menschen gewöhnt und reagieren in der
              Regel gelassen. Im Süden des Parks liegt der Sektor Nkuringo, der seit 2004 für den Tourismus geöffnet ist.
              Ruhija und Rushaga bieten weitere habitusalisierte Gruppen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wer sein Permit storniert, erhält unter bestimmten Bedingungen eine Rückerstattung — die Regelungen ändern
              sich jedoch und sollten bei der Buchung schriftlich festgehalten werden. Gültige Reisedokumente müssen am
              Trekking-Tag vorgelegt werden, da die Namen auf den Permits mit den Ausweisen abgeglichen werden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Gesamtkosten eines Gorilla Trekking Trips nach Bwindi liegen deutlich über dem Permit-Preis. Hinzu kommen
              Anreise aus Kampala (rund sechs bis acht Stunden Fahrt oder ein Inlandsflug), Unterkunft in oder bei Buhoma,
              Guide-Gebühren und Trinkgelder für Ranger sowie optionale Träger, die schweres Gepäck übernehmen. Wer das
              gesamte Budget im Blick hat, sollte mit mindestens 1.200 bis 1.500 US-Dollar pro Person für einen
              Zwei-Tages-Trip rechnen, je nach Unterkunftswahl.
            </p>
          </section>

          {/* H2: Ausrüstung und Vorbereitung */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Ausrüstung: Was man für das Trekking im Regenwald braucht
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Eine durchdachte Gorilla Trekking Vorbereitung beginnt bei der Ausrüstung. Der Bwindi-Regenwald ist kein
              Spazierweg — er ist einer der artenreichsten und dichtesten Wälder Afrikas, mit steilen Hängen, engen
              Pfaden, dichtem Unterholz und regelmäßigen Niederschlägen auf über 2.000 Metern Höhe. Auf unserer Tour im
              Januar 2026 waren die Wege nach vorherigen Regenfällen teils tief aufgeweicht; ohne feste Bergschuhe wäre das
              Trekking deutlich mühsamer geworden.
            </p>

            {/* Inline-Bild Ranger */}
            <figure className="my-6 rounded-xl overflow-hidden">
              <img
                src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1781268594821_bh8g.jpg"
                alt="Bewaffneter Ranger bahnt sich den Weg durch dichtes Unterholz während des Gorilla Trekking im Bwindi Nationalpark"
                className="w-full object-cover max-h-[400px]"
                loading="lazy"
              />
              <figcaption className="text-sm text-gray-500 text-center py-2 px-4 bg-gray-50">
                Ein Ranger öffnet den Weg durch das dichte Unterholz des Bwindi-Regenwalds — Foto: Mark Suer, Januar 2026
              </figcaption>
            </figure>

            <p className="text-gray-700 leading-relaxed mb-4">
              Das Wichtigste ist das Schuhwerk. Wanderstiefel mit hohem Schaft und gutem Profil sind kein optionales Extra,
              sondern Grundvoraussetzung. Sie schützen nicht nur vor Ausrutschen auf nassen Hängen, sondern auch vor kleinen
              Unannehmlichkeiten wie Ameisen, die sich ihren Weg in offene Schuhe suchen. Lange Socken, in die man die
              Hosenbeine stecken kann, helfen zusätzlich. Das klingt nach einer Kleinigkeit, macht aber einen erheblichen
              Unterschied, wenn man eine Stunde lang still bei einer Gorilla-Familie sitzt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Regenbekleidung ist ebenfalls unverzichtbar. Der Bwindi-Regenwald macht seinem Namen alle Ehre — auch in der
              Trockenzeit kann es plötzlich schütten. Eine leichte, wasserdichte Jacke lässt sich kompakt verstauen und ist
              im Ernstfall schnell griffbereit. Ebenso sollte der Tagesrucksack einen regendichten Überzug haben, um Kamera
              und Akku zu schützen. Auf unseren Touren haben wir beobachtet, dass Wanderer ohne Regenausrüstung nach einer
              Dusche schnell frieren, weil die Temperaturen im Bergwald morgens empfindlich sein können.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für die Kamera gilt: Blitz ausschalten, Puffertuch dabei haben. Die Gorillas reagieren empfindlich auf
              Blitzlicht, weshalb es verboten ist. Viele professionelle Wildlife-Fotografen setzen auf lichtstarke Objektive,
              da der Wald oft wenig Licht durchlässt. Wer kein Profi-Equipment hat, macht mit einem modernen Smartphone
              trotzdem gute Bilder — die Nähe zu den Tieren ist so groß, dass auch mit einfachen Mitteln eindrucksvolle
              Aufnahmen entstehen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zusätzlich zur Grundausrüstung empfehlen sich: ausreichend Wasser (mindestens zwei Liter), ein leichter
              Snack für die Wanderung zurück, Sonnenschutz für offene Abschnitte und insektenabwehrendes Mittel. Handschuhe
              sind bei der Nkuringo-Route hilfreich, wo man sich an Ästen und Wurzeln festhalten muss. Einen optionalen
              Gehstock bekommt man oft am Parkeingang ausgeliehen oder gekauft — er entlastet die Knie bei steilen
              Abstiegen erheblich.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für Träger, die schwere Rucksäcke tragen, fallen zusätzliche Gebühren an. Es lohnt sich, dieses Angebot zu
              nutzen: Die Träger sind ortskundig, helfen an schwierigen Stellen und sind eine direkte Einkommensquelle für
              die Dorfbewohner rund um den Park. Das schließt den Kreis zur nachhaltigen Logik des Gorilla-Tourismus — jeder
              ausgegebene Schilling stärkt die lokale Wirtschaft und damit das Interesse der Bevölkerung am Schutz des
              Waldes.
            </p>
          </section>

          {/* H2: Ablauf am Trekking-Tag */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Der Ablauf: Was am Trekking-Tag passiert
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die meisten Treks starten früh morgens — in der Regel zwischen sieben und acht Uhr am jeweiligen
              Sektor-Hauptquartier. Der frühe Start hat einen guten Grund: Die Gorillas sind morgens aktiv und fressen,
              was ihre Ortung für die Ranger erleichtert. Außerdem ist es in der Morgenkühle angenehmer zu wandern als in
              der Mittagshitze, die sich selbst im Bergwald bemerkbar macht.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Am Hauptquartier werden zunächst die Permits geprüft und die Gruppen eingeteilt. Dann folgt eine kurze
              Einführung durch die Ranger: Verhaltensregeln, Sicherheitshinweise, Erklärung des Tageswegs. Anschließend
              setzt sich die Gruppe in Bewegung. Die Ranger haben in der Regel bereits am Vortag den Schlafplatz der
              Gorillas markiert, sodass die Route am Morgen zügig geplant werden kann.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Wanderung selbst dauert je nach Position der Gorilla-Gruppe an diesem Tag zwischen einer und acht Stunden.
              Im Buhoma-Sektor haben wir im Januar 2026 Glück gehabt: Schon nach einer Stunde stießen wir auf die erste
              Familie. Der erste Gorilla saß oben im Baum und fraß Blätter — gelassen, als wäre eine Gruppe von acht
              Menschen mit Kameras das Normalste auf der Welt. Später, bei unserem zweiten Besuch im Juni 2026, brauchten
              wir drei Stunden, bis wir zu einer weiteren Familie vorgedrungen waren. In beiden Fällen war der Moment der
              Begegnung jede Anstrengung wert.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sobald die Gorillas gefunden sind, beginnt die einstündige Besuchszeit. Diese Stunde gilt strikt — das
              Uhrenläuten des Rangers ist das Signal zum Rückzug. Während der Stunde darf man sich im Kreis um die Gruppe
              bewegen, muss aber den Mindestabstand von sieben Metern einhalten. Kommt ein Gorilla von sich aus näher —
              was durchaus vorkommt — gibt der Ranger Anweisungen, wie man sich verhält. Die Regel lautet: nicht flüchten,
              ruhig bleiben, Blickkontakt vermeiden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nach der Stunde folgt der Rückweg. Der Abstieg ist oft anstrengender als der Aufstieg, weil die Spannung
              der Begegnung nachlässt und die Muskelermüdung sich bemerkbar macht. Für die Nkuringo-Route sollte man sich
              auf eine Ganztages-Tour einstellen — sie ist ausschließlich für konditionsstarke Wanderer geeignet, weil das
              Revier der Nkuringo-Gruppe groß ist und viele steile Berghänge umfasst. Die Wege sind nach Regenfällen
              häufig aufgeweicht und stellenweise verschlammt, gelegentlich müssen Bachläufe überquert werden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Am Ende des Trekking-Tages ist es üblich, den Rangern und dem Guide ein Trinkgeld zu geben. Die übliche
              Empfehlung liegt bei 10 bis 20 US-Dollar pro Ranger, mehr wenn die Tour besonders lang oder schwierig war.
              Die Ranger sind es, die die Gorilla-Gruppen täglich beobachten, habitusalisieren und schützen — ihre Arbeit
              ist der eigentliche Grund, warum diese Begegnungen überhaupt möglich sind.
            </p>
          </section>

          {/* H2: Bwindi und Berggorillas */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Bwindi und die Berggorillas: Zahlen, Kontext und Bedeutung
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Bwindi Impenetrable National Park gehört zum UNESCO-Weltnaturerbe und beherbergt einen der letzten
              bedeutenden Bestände von Berggorillas weltweit. Die Population der Berggorillas in Uganda umfasste im Zeitraum
              von 2018 bis 2020 rund 459 Individuen — eine Zahl, die das Ergebnis jahrzehntelanger Schutzarbeit ist.
              Berggorillas sind keine Tiere, die man in Zoos findet; sie leben ausschließlich in den Bergwäldern des
              Virunga-Massivs und im Bwindi-Wald. Eine Begegnung mit ihnen ist damit immer eine Begegnung mit einem
              der seltensten und am stärksten gefährdeten Primaten der Erde.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Was den Gorilla-Tourismus in Bwindi von anderen Wildtier-Erlebnissen unterscheidet, ist die Habitusalisierung
              der Tiere. Jahrelange Gewöhnungsarbeit durch Ranger und Wissenschaftler hat dazu geführt, dass bestimmte
              Gorilla-Familien die Anwesenheit kleiner Menschengruppen tolerieren, ohne ihr natürliches Verhalten zu ändern.
              Das ist keine Zähmung — die Gorillas bleiben Wildtiere, die in ihrem eigenen Rhythmus leben. Es ist eine Form
              der Anpassung, die durch tägliche, kontrollierte Kontakte über Monate und Jahre entsteht.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Park erstreckt sich über rund 331 Quadratkilometer im Südwesten Ugandas, an der Grenze zur Demokratischen
              Republik Kongo. Die Vegetation ist außergewöhnlich dicht — der Name "Impenetrable" ist kein poetisches Beiwerk,
              sondern eine Beschreibung. Im Vergleich zu anderen ugandischen Nationalparks wie dem Queen Elizabeth National Park
              oder dem Murchison Falls National Park ist Bwindi ein Wald, kein offenes Savannen-Ökosystem. Diese Dichte macht
              das Trekking anspruchsvoller, aber auch einzigartiger.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die wirtschaftliche Bedeutung des Gorilla-Tourismus für die Region ist erheblich. Laut historischen
              Tourismusdaten aus Uganda waren 65 Prozent der Besucher zwischen 25 und 44 Jahren alt — eine Altersgruppe, die
              reisefreudig und zahlungskräftig ist und Bwindi gezielt wegen der Gorillas besucht. 44 Prozent aller
              Uganda-Besucher blieben länger als einen Monat im Land — ein Hinweis darauf, dass viele Reisende Uganda nicht
              nur für einen schnellen Gorilla-Trip nutzen, sondern das Land tiefergehend erkunden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für die Dörfer rund um den Park sind Ranger-Jobs, Träger-Dienste, Lodge-Betrieb und Kunsthandwerk direkte
              wirtschaftliche Konsequenzen des Tourismus. Wer nach Bwindi reist, beteiligt sich damit an einem System, das
              lokalen Familien Einkommen sichert und ihnen einen konkreten Anreiz gibt, den Wald zu schützen statt ihn zu
              roden. Das ist die eigentliche Logik hinter dem hohen Permit-Preis.
            </p>
          </section>

          {/* H2: Unterkunft und Anreise */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Anreise, Unterkunft und Logistik rund um Buhoma
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Buhoma ist das am häufigsten besuchte Eingangstor zum Gorilla-Sektor im Nordwesten des Parks. Von Kampala aus
              dauert die Fahrt mit dem Auto rund sieben bis acht Stunden über gut ausgebaute, aber kurvenreiche Straßen.
              Die letzte Etappe ab Kabale oder Butogota führt über Schotterpisten — ein Allrad-Fahrzeug ist empfehlenswert,
              besonders in der Regenzeit. Alternativ bieten kleinere Fluggesellschaften tägliche Verbindungen auf
              kleineren Landepisten in der Nähe des Parks an, was die Reisezeit auf rund 45 Minuten verkürzt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Unterkunftssituation in Buhoma ist breiter aufgestellt als man auf den ersten Blick denken würde.
              Direkt am Parkeingang liegt das Buhoma Community Rest Camp, das neben Cottages auch Campingplätze ab
              15 US-Dollar sowie ein Restaurant mit einfacher, solider Küche anbietet. Für komfortablere Ansprüche gibt
              es mehrere Lodges in verschiedenen Preisklassen, von mittelklassigen Übernachtungsoptionen bis hin zu
              gehobenen Eco-Lodges, die teils spektakuläre Aussichten auf den Regenwald bieten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wer mehrere Tage plant, kann Bwindi mit einem Besuch im Queen Elizabeth National Park oder dem Ruhija-Sektor
              im Süden des Parks kombinieren. Die Strecke zwischen den Sektoren führt durch eindrucksvolle Berglandschaften
              und Teeplantagen. Für eine umfassendere Uganda-Rundreise bietet sich eine Verbindung nach Fort Portal an —
              dem Tor zu den Rwenzori Mountains und weiteren Naturhighlights im Westen des Landes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wichtig für die Logistik: Am Trekking-Tag sollte man ausgeschlafen und nüchtern im Sattel sein. Die meisten
              Lodges servieren Frühstück ab fünf oder sechs Uhr, damit die Gäste pünktlich zum Briefing am Parkeingang
              erscheinen. Nach dem Trekking ist eine warme Dusche und eine ordentliche Mahlzeit die beste Erholung —
              die meisten Unterkünfte richten sich auf dieses Bedürfnis ihrer Gäste ein.
            </p>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus dem Bwindi Regenwald" />

          {/* FAQ */}
          <section className="mt-12 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur Gorilla Trekking Vorbereitung
            </h2>
            <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white">
                  <button
                    className="w-full text-left px-5 py-4 flex justify-between items-start gap-4 focus:outline-none hover:bg-gray-50 transition-colors"
                    onClick={() => setOffenesFaq(offenesFaq === i ? null : i)}
                    aria-expanded={offenesFaq === i}
                  >
                    <span className="font-semibold text-gray-900 text-base leading-snug">{item.frage}</span>
                    <span className="text-jungle-600 text-xl flex-shrink-0 mt-0.5">
                      {offenesFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {offenesFaq === i && (
                    <div className="px-5 pb-5 text-gray-700 leading-relaxed text-sm">
                      {item.antwort}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-10 pt-8 border-t border-gray-200">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">Weiterlesen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/gorilla-trekking"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Gorilla Trekking in Uganda — Überblick
              </a>
              <a
                href="/nationalparks/bwindi"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Bwindi Impenetrable National Park
              </a>
              <a
                href="/tiere/berggorilla"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Berggorilla — Lebensweise und Schutzstatus
              </a>
              <a
                href="/gorilla-permit-verfuegbarkeit"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Gorilla Permit Verfügbarkeit und Buchung
              </a>
              <a
                href="/gorilla-trekking-erfahrungsbericht"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Erfahrungsbericht: Gorilla Trekking in Bwindi
              </a>
              <a
                href="/regionen/buhoma"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Buhoma — Tor zum Gorilla-Sektor im Norden
              </a>
              <a
                href="/beste-reisezeit-uganda"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Beste Reisezeit Uganda
              </a>
              <a
                href="/ranger-uganda"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Ranger in Uganda — Ausbildung und Alltag
              </a>
              <a
                href="/nachhaltiger-tourismus-uganda"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Nachhaltiger Tourismus in Uganda
              </a>
              <a
                href="/uganda-reisetipps"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors text-gray-800 text-sm font-medium"
              >
                Uganda Reisetipps — Praktische Hinweise
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
