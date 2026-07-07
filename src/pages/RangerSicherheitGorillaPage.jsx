import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'ranger-sicherheit-gorilla-trekking'

export default function RangerSicherheitGorillaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'Sind die Ranger beim Gorilla Trekking wirklich bewaffnet?',
      answer:
        'Ja, die Ranger die Trekkinggruppen begleiten sind in der Regel mit Schusswaffen ausgerüstet. Das wirkt beim ersten Anblick ungewohnt, gehört aber zum Standardschutzprotokoll für Wildtiergebiete in Uganda. Die Waffen dienen primär dem Schutz vor Wilderern und unvorhersehbaren Tierreaktionen. Tatsächliche Zwischenfälle mit Touristen sind äußerst selten. Die Anwesenheit bewaffneter Ranger erhöht die Sicherheit, ohne das Erlebnis zu beeinträchtigen.',
    },
    {
      question: 'Was passiert, wenn ein Gorilla aggressiv reagiert?',
      answer:
        'Habituierte Gorillafamilien sind an menschliche Anwesenheit gewöhnt und reagieren in aller Regel ruhig. Die Ranger und Guides kennen das Verhalten der einzelnen Familien genau und erkennen Stresssignale frühzeitig. Im seltenen Fall einer Annäherung durch einen Silberrücken geben die Guides klare Anweisungen: Blickkontakt vermeiden, ruhig und langsam zurückweichen, keine plötzlichen Bewegungen. Wegrennen ist ausdrücklich verboten, da es Jagdinstinkte auslösen kann.',
    },
    {
      question: 'Wie lange dauert das Trekking und wie anstrengend ist es?',
      answer:
        'Die Dauer variiert erheblich und ist vom Standort der Gorillafamilie am jeweiligen Tag abhängig. Kurze Touren dauern eine Stunde, anspruchsvolle Touren können vier bis sechs Stunden beanspruchen. Das Gelände im Bwindi Impenetrable National Park ist steil und feucht, die Vegetation dicht. Festes Schuhwerk, Handschuhe für Ranken und ein stabiler Stock sind empfehlenswert. Ältere oder körperlich eingeschränkte Reisende können für einen Aufpreis einen Träger engagieren der beim Auf- und Abstieg unterstützt.',
    },
    {
      question: 'Welche Krankheiten oder Gesundheitsrisiken gibt es beim Gorilla Trekking?',
      answer:
        'Berggorillas sind genetisch dem Menschen so ähnlich, dass sie für menschliche Krankheitserreger empfänglich sind. Aus diesem Grund gilt eine Mindestdistanz von sieben Metern zu den Tieren und Erkältete oder Erkrankte dürfen nicht teilnehmen. Vor der Tour wird eine kurze Gesundheitsbefragung durchgeführt. Für Reisende empfiehlt sich der übliche Tropenreiseschutz inklusive Malariaprophylaxe. Im Regenwald können zudem Stechinsekten und nässebedingte Beschwerden auftreten.',
    },
    {
      question: 'Ist Buhoma als Dorf sicher für Touristen?',
      answer:
        'Buhoma gilt als sicheres und touristisch erschlossenes Dorf am Nordeingang des Bwindi Impenetrable National Park. Der Ort ist von der Uganda Wildlife Authority und lokalen Tourismusbetrieben gut organisiert. Kleinere Geschäfte, Lodges verschiedener Preisklassen und lokale Guides sind vorhanden. Wie überall in ländlichen Gebieten gilt es Grundregeln zu beachten: keine unnötige Zurschaustellung von Wertsachen, Orientierung über seriöse Unterkunftsbetreiber und Reisebüros. Die kriminellen Vorfälle in der Region sind statistisch gering.',
    },
  ]

  return (
    <>
      <Head
        title="Gorilla Trekking Sicherheit: Ranger & Schutz in Bwindi"
        description="Gorilla Trekking Sicherheit im Bwindi Nationalpark: Was Ranger tun, wie der Schutz funktioniert und was Reisende wissen müssen. Mit Erfahrungsbericht Januar 2026."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
            alt="Berggorilla frisst Blätter im Baumkronendach des Bwindi Impenetrable National Park"
            className="w-full h-full object-cover"
          />
          <figcaption className="text-center text-sm text-gray-500 py-2 px-4 bg-gray-50">
            Berggorilla im Baumkronendach des Bwindi Impenetrable National Park — Foto: Mark Suer, 21. Juni 2026
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Gorilla Trekking Sicherheit in Bwindi: Ranger, Schutzprotokoll und was Reisende wirklich wissen sollten
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Nach drei Stunden Aufstieg durch feuchtes, dichtes Unterholz standen wir plötzlich still.
            Unser Guide hob die Hand, und die Gruppe hielt an. Wenige Meter vor uns saß ein Berggorilla
            ruhig im Geäst eines hohen Baumes und fraß Blätter — unbeeindruckt von unserer Anwesenheit,
            als wären wir Teil der Landschaft. Diese Begegnung war möglich, weil ein eingespieltes
            Sicherheitssystem aus erfahrenen Rangern, trainierten Guides und klaren Verhaltensregeln
            im Hintergrund arbeitet, das Touristen und Tiere gleichermaßen schützt.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Die gorilla trekking sicherheit im Bwindi Impenetrable National Park beruht auf einem
            Konzept das über Jahrzehnte verfeinert wurde. Wer erstmals an einem Trekking teilnimmt,
            begegnet Rangern die bewaffnet durch den Wald führen — ein Anblick der zunächst befremdlich
            wirkt, beim zweiten Gedanken aber Sinn ergibt. Während unseres Besuchs im Januar 2026 und
            erneut im Juni 2026 haben wir dieses System aus nächster Nähe erlebt und verstanden, warum
            es so gestaltet ist wie es ist.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Dieser Bericht basiert auf persönlichen Beobachtungen und GPS-dokumentierten Besuchen in
            der Region um Buhoma — dem nördlichen Haupteingang zum Bwindi Nationalpark. Die Koordinaten
            unserer Fotos (Standort: etwa -0.97°N, 29.62°E) belegen: das sind keine abstrakten
            Eindrücke sondern Erfahrungen direkt aus dem Regenwald.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">
              Gorilla Trekking Bwindi — Wichtigste Fakten
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Permit-Preis</div>
                <div className="text-gray-800">800 USD pro Person</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Aufenthaltsdauer bei den Gorillas</div>
                <div className="text-gray-800">Maximal 1 Stunde</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Gorilla-Bestand Uganda</div>
                <div className="text-gray-800">459 Individuen (2018–2020)</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Mindestabstand zu Gorillas</div>
                <div className="text-gray-800">7 Meter</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Trekking-Dauer</div>
                <div className="text-gray-800">1 bis 6 Stunden (je nach Standort)</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Begleitung</div>
                <div className="text-gray-800">1 Guide + 2 bewaffnete Ranger</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Haupteingang Nord</div>
                <div className="text-gray-800">Buhoma Village</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Parkverwaltung</div>
                <div className="text-gray-800">Uganda Wildlife Authority (UWA)</div>
              </div>
            </div>
          </div>

          {/* H2: Ranger-Rolle */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Die Ranger beim Gorilla Trekking: Mehr als nur Bewaffnung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Beim Briefing am Morgen des Trekkings in Buhoma wurden wir darauf vorbereitet, was uns
            begleiten würde: ein erfahrener Guide der die Gorillafamilie kennt, und zwei Ranger die
            zur Sicherung mitgehen. Die Ranger waren bewaffnet — das wirkte zunächst komisch, wie ein
            Mitreisender es später treffend formulierte. Beim Aufstieg durch das dichte Unterholz
            wurde jedoch schnell klar: ihre Aufgabe ist keine militärische, sondern eine sehr
            praktische. Sie bahnen den Weg, kennen das Gelände und verstehen das Verhalten der
            Wildtiere.
          </p>

          {/* Inline Bild: Ranger */}
          <figure className="my-8">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1781268594821_bh8g.jpg"
              alt="Bewaffneter Ranger bahnt sich mit Machete einen Weg durch das dichte Unterholz beim Gorilla Trekking in Buhoma"
              className="w-full rounded-lg"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Ein Ranger öffnet den Weg durch das dichte Unterholz — Buhoma, Januar 2026. Foto: Mark Suer
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-5">
            Die Ranger des Bwindi Nationalparks sind Mitarbeiter der Uganda Wildlife Authority und
            durchlaufen ein mehrstufiges Ausbildungsprogramm. Ihre Aufgaben im Zusammenhang mit
            Touristen-Trekkings lassen sich grob in drei Bereiche gliedern: erstens die physische
            Wegbereitung durch das Unterholz mit der Machete, zweitens die Tierbeobachtung und
            Einschätzung der Gruppendynamik der Gorillas, drittens der Schutz vor möglichen
            Begegnungen mit anderen Wildtieren oder unvorhergesehenen Situationen im Wald.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Beim schwierigen Aufstieg im dichten Wald haben die Ranger auch ganz praktisch geholfen
            — eine Hand hier, ein Hinweis auf einen rutschigen Stein dort. Diese menschliche Seite
            der Arbeit geht in Beschreibungen oft unter. Die Ranger sind bestens gelaunt, kommunizieren
            auf Englisch und sprechen mit Besuchern. Das schafft Vertrauen und nimmt die anfängliche
            Nervosität die viele Erstbesucher mitbringen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Bewaffnung der Ranger ist kein Symbol von Gefahr sondern ein Zeichen des Ernstnehens.
            Bwindi liegt in einer Region in der Wilderei trotz aller Fortschritte noch immer vorkommt.
            Bewaffnete Ranger sind die erste Verteidigungslinie gegen Wilderer die Fallen legen oder
            Tiere jagen. Ihre Anwesenheit auf den Trekking-Routen hat nachweislich dazu beigetragen
            die Sicherheit der Gorillafamilien zu erhöhen. Für Touristen gilt: die Waffe ist nicht
            gegen sie gerichtet, sondern schützt das Erlebnis das sie gebucht haben.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Innerhalb der habituierten Gorilla-Familiengruppen — also jener Gruppen die über Jahre
            an menschliche Anwesenheit gewöhnt wurden — ist das Risiko eines Zwischenfalls mit einem
            Tier sehr gering. Der Habituierungsprozess dauert zwei bis drei Jahre und wird von
            spezialisierten Mitarbeitern der Uganda Wildlife Authority begleitet. Erst wenn eine
            Gruppe als stabil habituiert gilt wird sie für Trekking-Besuche freigegeben. Die Ranger
            kennen jede dieser Familien persönlich: sie wissen welcher Silberrücken bei ungewohnten
            Geräuschen nervös wird, welche Mutter gerade ein Jungtier bei sich trägt und an welchen
            Tagen die Gruppe eher unruhig ist.
          </p>

          {/* H2: Sicherheitsprotokoll */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Das Sicherheitsprotokoll: Regeln die Sinn ergeben
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Vor jedem Trekking findet in Buhoma ein obligatorisches Briefing statt. Das dauert
            etwa zwanzig bis dreißig Minuten und deckt alle Verhaltensregeln ab. Wer das Briefing
            unterschätzt verpasst wesentliche Informationen. Die wichtigsten Punkte:
          </p>

          <div className="bg-safari-50 border-l-4 border-safari-400 rounded-r-lg p-5 mb-6">
            <h3 className="font-semibold text-safari-900 mb-3">Verhaltensregeln beim Trekking</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2"><span className="text-safari-600 font-bold mt-0.5">—</span><span>Mindestabstand von sieben Metern zu allen Gorillas einhalten</span></li>
              <li className="flex gap-2"><span className="text-safari-600 font-bold mt-0.5">—</span><span>Keinen direkten, langen Blickkontakt mit dem Silberrücken herstellen</span></li>
              <li className="flex gap-2"><span className="text-safari-600 font-bold mt-0.5">—</span><span>Keine plötzlichen Bewegungen, keine lauten Geräusche</span></li>
              <li className="flex gap-2"><span className="text-safari-600 font-bold mt-0.5">—</span><span>Nie wegrennen — ruhig und langsam zurückweichen wenn ein Gorilla nähert</span></li>
              <li className="flex gap-2"><span className="text-safari-600 font-bold mt-0.5">—</span><span>Erkrankte oder erkältete Personen dürfen nicht teilnehmen (Krankheitsübertragung)</span></li>
              <li className="flex gap-2"><span className="text-safari-600 font-bold mt-0.5">—</span><span>Essen und Trinken in der Nähe der Gorillas ist untersagt</span></li>
              <li className="flex gap-2"><span className="text-safari-600 font-bold mt-0.5">—</span><span>Müll gehört zurück ins Tal — nichts im Wald lassen</span></li>
              <li className="flex gap-2"><span className="text-safari-600 font-bold mt-0.5">—</span><span>Gruppenmaximum acht Personen pro Gorillafamilie und Tag</span></li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-5">
            Die Sieben-Meter-Regel ist keine Willkür. Berggorillas sind genetisch dem Menschen so
            ähnlich dass sie für menschliche Atemwegserkrankungen anfällig sind. Ein Mensch mit
            einer harmlosen Erkältung kann einer Gorillafamilie ernsthaften Schaden zufügen. Die
            Ranger achten streng darauf dass dieser Abstand eingehalten wird. Bei unserem Besuch im
            Januar 2026 kam ein Jungorilla auf etwa drei Meter an unsere Gruppe heran — ein
            unbeschreiblicher Moment — und der Guide gab leise aber bestimmt Anweisung langsam
            zurückzutreten. Die Gorillas entscheiden selbst wie nah sie kommen. Wir nicht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die maximale Aufenthaltsdauer bei einer Gorillafamilie beträgt eine Stunde. Diese Regel
            schützt die Tiere vor übermäßigem Stress durch menschliche Anwesenheit. Wer erwartet
            dass ein Gorilla-Encounter eine ausgedehnte Foto-Session ermöglicht, muss seine
            Erwartungen anpassen. Die Stunde ist intensiv, die Nähe real und ungemein wirkungsvoll —
            aber die Zeit vergeht sehr schnell. Die Ranger behalten die Uhr im Blick und geben
            rechtzeitig das Signal zum Rückzug.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Was passiert wenn ein Silberrücken eine Drohgebärde zeigt? Diese Situation tritt
            statistisch selten auf, aber Rangers und Guides sind darauf vorbereitet. Die
            Standardanweisung lautet: Körper tief machen, Blick senken, ruhig bleiben.
            Das signalisiert dem Gorilla Unterwerfung und Harmlosigkeit. Ranger stellen sich
            in solchen Momenten zwischen Gruppe und Tier — eine Demonstration von Erfahrung
            die man nicht aus Büchern lernt.
          </p>

          {/* H2: Bwindi als Nationalpark */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Bwindi Impenetrable National Park: Ein Park der schützt und verbindet
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Bwindi Impenetrable National Park im Südwesten Ugandas ist kein gewöhnliches
            Wildschutzgebiet. Er vereint Naturschutz, Gemeinschaftsbeteiligung und privatwirtschaftliches
            Engagement auf eine Weise die international als Modell gilt. Das beginnt bereits am
            Eingang in Buhoma, dem nördlichen Haupttor des Parks. Das Dorf ist eng mit dem Park
            verknüpft — wirtschaftlich, kulturell und durch jahrzehntelange Zusammenarbeit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Lokale Frauen in Buhoma betreiben Läden Handwerksprojekte und Geführte-Touren-Angebote.
            In einem der kleinen Geschäfte am Straßenrand kauften wir bei unserem Besuch im Januar
            2026 Wasser und Süßigkeiten — der Laden war etwa zwanzig Quadratmeter groß, hatte einen
            einfachen Einbruchsschutz aus Metallgittern und wurde von einer Frau geführt. Diese
            unternehmerischen Strukturen in Buhoma sind kein Zufall: die Einnahmen aus dem
            Gorilla-Tourismus fließen seit Jahren in lokale Entwicklungsprojekte.
          </p>

          {/* Inline Bild: Gorilla */}
          <figure className="my-8">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780726602862_1to3.jpg"
              alt="Berggorilla blickt durch dichtes Blattwerk im Bwindi Impenetrable National Park"
              className="w-full rounded-lg"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Direkter Blick eines Berggorillas durch das Blattwerk — Bwindi, 2026. Foto: Mark Suer
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-5">
            Die Zahl der Berggorillas in Uganda wird auf etwa 459 Individuen geschätzt, erhoben
            über den Zeitraum 2018 bis 2020. Diese Population macht Uganda zu einem der wichtigsten
            Schutzgebiete für diese Art weltweit. Neben Bwindi gibt es noch den Mgahinga Gorilla
            National Park im äußersten Südwesten — beide Parks werden von der Uganda Wildlife
            Authority verwaltet und kooperieren mit dem regionalen Naturschutzprogramm das auch
            den Virunga-Nationalpark in der DR Kongo und Ruandas Volcanoes National Park einbezieht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Bwindi wird im Englischen als "Impenetrable Forest" bezeichnet — undurchdringlicher Wald.
            Diesen Namen versteht man erst wenn man selbst darin steht. Die Vegetation ist so dicht
            dass selbst am Mittag nur gedämpftes Licht den Boden erreicht. Lianen, Dorngebüsch und
            glitschige Lehmhänge machen jeden Schritt zur bewussten Entscheidung. Die Ranger mit
            ihren Macheten sind in diesem Gelände nicht optional — ohne sie wäre eine sichere
            Navigation für unerfahrene Wanderer kaum möglich.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Park ist in verschiedene Sektoren eingeteilt: Buhoma im Norden ist der am
            stärksten frequentierte Eingang und bietet Zugang zu mehreren habituierten
            Gorillafamilien. Die Sektoren Ruhija, Rushaga und Nkuringo im Osten und Süden sind
            ruhiger und bieten unterschiedliche Erlebnisse je nach Kondition und Zeitplan. Für
            Besucher die zum ersten Mal trekken ist Buhoma der einfachste Einstieg: gut
            erschlossen, mit einer Auswahl an Unterkünften in verschiedenen Preisklassen und
            nahe an der Parkinfrastruktur.
          </p>

          {/* H2: Gorilla Bluff Lodge und praktische Sicherheit */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Unterkünfte in Buhoma: Die Gorilla Bluff Lodge als Ausgangspunkt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Gorilla Bluff Lodge liegt auf einem steilen Bergrücken in Buhoma mit Blick auf die
            umliegende Waldlandschaft. Wer zum ersten Mal dort ankommt versteht sofort warum die
            Lodge so heißt: von der Terrasse aus reicht der Blick über die Baumkronen hinaus in
            Richtung der Berge in denen die Gorillas leben. Morgens servieren die Mitarbeiter
            Kaffee und African Tea auf der Terrasse — ein stilles Ritual das jeden Trekking-Tag
            einleitet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Architektur der Lodge ist berggerecht: Zimmer und Haupthaus sind durch Holzstufen
            verbunden die aus massiven Baumstämmen gehauen wurden. Auf dem steilen Gelände ist jeder
            Weg eine kleine Herausforderung. Gäste die sich über die körperliche Anforderung des
            Trekkings Gedanken machen, bekommen hier bereits beim Frühstück einen Vorgeschmack
            auf das was sie erwartet. Das Frühstück selbst begann bei unserem Aufenthalt mit frischen
            Früchten — Mango, Banane und Melone — bevor das warme Essen kam.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die praktischen Sicherheitsaspekte für den Aufenthalt in Buhoma unterscheiden sich
            kaum von anderen ländlichen Regionen Ugandas. Wertsachen sollten im Zimmer gesichert
            werden, abendliche Spaziergänge außerhalb der Lodge machen Sinn nur in Begleitung oder
            nach Rücksprache mit dem Personal. Das Dorf selbst ist überschaubar und die Bewohner
            sind an Touristen gewöhnt. Aggressive Betteleien oder Sicherheitsvorfälle sind in
            Buhoma ungewöhnlich — die regelmäßige Ranger-Präsenz rund um den Nationalpark wirkt
            sich auch auf die Sicherheitslage im Ort aus.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Für den Gorilla Trek selbst gilt: Handschuhe schützen vor Dornen und Brennnesseln,
            wasserabweisende Kleidung ist im feuchten Regenwald sinnvoll und Gamaschen verhindern
            das Eindringen von Dreck und kleinen Insekten. Festes Wanderschuhwerk mit Grip ist
            Pflicht — die Lehmwege werden nach Regen rutschig. Wer sich körperlich nicht
            vollständig fit fühlt sollte das dem Guide mitteilen: es gibt die Möglichkeit einen
            Träger oder Assistenten zu engagieren der bei schwierigen Passagen unterstützt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Medizinversorgung in Bwindi ist begrenzt. Für ernsthafte medizinische Notfälle
            ist der Weg nach Kabale oder ins nächste größere Krankenhaus weit. Eine Reisekranken-
            versicherung mit Rückholschutz ist daher keine Luxusoption sondern Grundausstattung
            jeder Uganda-Reise. Malariaprophylaxe und die üblichen Reiseimpfungen gelten für die
            gesamte Region — das Bwindi-Gebiet liegt im Bergbereich und ist kühl genug dass das
            Malariarisiko etwas geringer ist als in Tiefsagen, aber nicht vernachlässigbar.
          </p>

          {/* H2: Naturschutz und Zukunft */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Gorilla-Schutz und Tourismus: Wie beides zusammengeht
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Dass die Berggorilla-Population in Uganda in den vergangenen Jahren gewachsen ist,
            hängt direkt mit dem Schutzsystem zusammen das durch Tourismuseinnahmen finanziert
            wird. Das Permit von 800 USD pro Person und Trekking ist hoch — und trotzdem nahezu
            ausverkauft in der Hochsaison. Ein erheblicher Teil dieser Einnahmen fließt in die
            Finanzierung der Ranger-Gehälter, Ausrüstung, Fahrzeuge und in Gemeinschaftsprojekte
            in den Dörfern rund um den Park.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Ansatz ist bekannt unter dem Begriff Community-Based Conservation: lokale
            Bevölkerung profitiert direkt vom Schutz der Tiere und hat deshalb ein eigenes
            Interesse daran dass die Gorillas überleben. Frauen in Buhoma die geführte Wanderungen
            anbieten, Nähkurse halten oder in der Tourismuswirtschaft beschäftigt sind — sie alle
            haben einen wirtschaftlichen Grund die Gorillas als Ressource zu schützen statt zu
            bekämpfen. Das funktioniert besser als jedes externe Schutzprogramm es könnte.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Ranger sind das Rückgrat dieses Systems. Sie patrouillieren täglich im Park, entfernen
            Fallen, verfolgen Wilderer-Aktivitäten und begleiten Forscher bei Populationsstudien.
            Die Trekking-Begleitung ist für viele Ranger der sichtbarste Teil ihrer Arbeit — aber
            nur ein Bruchteil davon. In der Nacht, bei schlechtem Wetter und in den entlegenen
            Teilen des Parks arbeiten sie unsichtbar für Touristen aber essentiell für den Schutz.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Zahl der ausländischen Besucher in ugandischen Nationalparks liegt seit Jahren
            an erster Stelle nach Herkunft. Ausländische Nicht-Bewohner dominierten den
            Besuchermarkt in ugandischen Nationalparks mit knapp der Hälfte aller Eintritte,
            gefolgt von ostafrikanischen Gemeinschaftsangehörigen. Diese internationale Nachfrage
            ist der Finanzierungsmotor für den Gorilla-Schutz — was erklärt warum Uganda ein
            großes Interesse daran hat dass das Gorilla Trekking als Erlebnis funktioniert,
            sicher ist und internationale Standards erfüllt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Bei unserem Trekking im Juni 2026 — diesmal zur schönsten Jahreszeit wenn der Wald
            grüner ist als zu jeder anderen Zeit — trafen wir die Gorilla-Familie nach etwa einer
            Stunde Aufstieg. Einer der Gorillas saß im Baum und fraß Blätter, ein zweites Tier
            bewegte sich am Boden. Die Gruppe war vollkommen ruhig. Die Ranger positionierten sich
            seitlich und beobachteten. Kein Wort war nötig. In diesem Moment verstand ich warum
            Menschen für dieses Erlebnis weite Reisen und hohe Kosten auf sich nehmen.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus dem Bwindi Nationalpark" />

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur Gorilla Trekking Sicherheit
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-5 py-4 flex justify-between items-start gap-4 bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-semibold text-gray-900 text-base leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-jungle-600 font-bold text-xl leading-none mt-0.5 flex-shrink-0">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 pt-2 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-14 pt-10 border-t border-gray-200">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
              Weiterführende Themen zu Uganda und Gorilla Trekking
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/gorilla-trekking"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <div className="font-semibold text-jungle-800">Gorilla Trekking in Uganda</div>
                <div className="text-sm text-gray-500 mt-1">Permits, Kosten und Ablauf im Überblick</div>
              </a>
              <a
                href="/nationalparks/bwindi"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <div className="font-semibold text-jungle-800">Bwindi Impenetrable National Park</div>
                <div className="text-sm text-gray-500 mt-1">Alles über den Park, seine Zonen und Zugänge</div>
              </a>
              <a
                href="/tiere/berggorilla"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <div className="font-semibold text-jungle-800">Berggorilla in Uganda</div>
                <div className="text-sm text-gray-500 mt-1">Biologie, Schutzstatus und Bestandszahlen</div>
              </a>
              <a
                href="/regionen/buhoma"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <div className="font-semibold text-jungle-800">Buhoma: Das Tor zum Bwindi</div>
                <div className="text-sm text-gray-500 mt-1">Das Dorf, Unterkünfte und lokale Strukturen</div>
              </a>
              <a
                href="/ranger-uganda"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <div className="font-semibold text-jungle-800">Ranger in Uganda</div>
                <div className="text-sm text-gray-500 mt-1">Ausbildung, Einsatz und Bedeutung für den Naturschutz</div>
              </a>
              <a
                href="/nachhaltiger-tourismus-uganda"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <div className="font-semibold text-jungle-800">Nachhaltiger Tourismus in Uganda</div>
                <div className="text-sm text-gray-500 mt-1">Wie Community-Based Conservation funktioniert</div>
              </a>
              <a
                href="/gorilla-permit-verfuegbarkeit"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <div className="font-semibold text-jungle-800">Gorilla Permit Verfügbarkeit</div>
                <div className="text-sm text-gray-500 mt-1">Buchungszeiten, Wartelisten und Tipps</div>
              </a>
              <a
                href="/uwa-anti-poaching"
                className="block p-4 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <div className="font-semibold text-jungle-800">Anti-Wilderei-Arbeit der UWA</div>
                <div className="text-sm text-gray-500 mt-1">Wie Uganda seine Wildtiere aktiv schützt</div>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
