import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'nachhaltiger-tourismus-uganda-tipps'

export default function NachhaltigerTourismusUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Was bedeutet nachhaltiger Tourismus in Uganda konkret?',
      a: 'Nachhaltiger Tourismus in Uganda bedeutet, dass Einnahmen direkt in lokale Gemeinden fließen, Nationalparks und Wildtierbestände geschützt werden und Reisende bewusst mit ihrer Umgebung umgehen. Das beginnt beim Kauf von Permits über die Uganda Wildlife Authority, setzt sich bei der Wahl lokaler Unterkünfte fort und endet bei einem respektvollen Verhalten gegenüber Menschen und Tieren.',
    },
    {
      q: 'Wie viel kostet ein Gorilla-Trekking-Permit und wohin fließt das Geld?',
      a: 'Ein Gorilla-Trekking-Permit kostet für ausländische Reisende 800 US-Dollar. Ein erheblicher Teil dieser Einnahmen fließt direkt in die Gemeinden rund um den Bwindi Impenetrable National Park sowie in den Schutz des Lebensraums der Berggorillas. Dieser Mechanismus macht das Permit zu einem der direktesten nachhaltigen Reisebeiträge, die ein Tourist leisten kann.',
    },
    {
      q: 'Welche ugandischen Nationalparks eignen sich besonders für ökologisch bewusste Reisende?',
      a: 'Der Bwindi Impenetrable National Park im Südwesten, der Murchison Falls National Park im Norden und der Queen Elizabeth National Park im Westen bieten alle ausgeprägte Schutzkonzepte mit Community-Beteiligung. Wer abseits ausgetretener Pfade reisen möchte, sollte auch den Lake Mburo National Park oder den Kidepo Valley National Park in Betracht ziehen — beide sind weniger stark besucht und bieten ein authentisches Wildtiererlebnis.',
    },
    {
      q: 'Sollte ich als Tourist Geld direkt an Kinder oder Bettelnde geben?',
      a: 'Direkte Geldgaben an Kinder oder Bettelnde werden von Entwicklungsorganisationen und erfahrenen Reisenden einhellig abgelehnt. Sie fördern wirtschaftliche Abhängigkeit, unterbrechen Schulbesuche und können langfristig Schaden anrichten. Wer helfen möchte, wählt stattdessen Spenden an nachgewiesene lokale Organisationen oder kauft Produkte und Dienstleistungen direkt von Einheimischen.',
    },
    {
      q: 'Welche Reisezeit ist für eine nachhaltige Uganda-Reise sinnvoll?',
      a: 'Die Trockenmonate Juni bis August sowie Januar und Februar gelten als beste Reisezeiten. In diesen Monaten sind die Wege in die Nationalparks befahrbar, Gorilla-Trekking ist unter angenehmeren Bedingungen möglich und Wildtiere sammeln sich an Wasserquellen. Mein eigener Besuch im Juni 2026 bestätigte: Die Wanderwege in Buhoma waren gut begehbar, und das frühe Morgenlicht ab 06:30 Uhr bot ideale Bedingungen für Wildtierbeobachtungen.',
    },
  ]

  return (
    <>
      <Head
        title="Nachhaltiger Tourismus Uganda: Tipps für Reisende"
        description="Nachhaltiger Tourismus Uganda: Wie Reisende aktiv zum Schutz von Natur und Gemeinden beitragen. Konkrete Tipps, Fakten und Erfahrungen aus Buhoma."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        {/* Hero Image */}
        <figure className="w-full max-h-[480px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Drei Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, Uganda – ein Moment unmittelbarer Gemeinschaft"
            className="w-full object-cover object-center"
            style={{ maxHeight: '480px' }}
          />
          <figcaption className="text-sm text-gray-500 text-center py-2 px-4">
            Buhoma, Juni 2026 — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Nachhaltiger Tourismus in Uganda: Was Reisende wirklich bewirken können
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Es war kurz nach sechs Uhr morgens an einem Junitag 2026 in Buhoma. Wir standen vor einem einfachen Lehmgebäude mit Wellblechdach, als drei Kinder aus der Nachbarschaft des örtlichen Waisenhauses auftauchten. Ihre Kleidung war ausgefranst, ihr Blick zögernd — weder ängstlich noch zutraulich, sondern irgendwo dazwischen. Ihre Körperhaltung und ihr gesamtes Auftreten machten unmittelbar deutlich, unter welchen Bedingungen sie aufwachsen. Wir haben nicht lange gezögert und die Kinder eingeladen, mit uns zu essen. In diesem Moment wurde klar, was nachhaltiger Tourismus in Uganda jenseits aller Prospektsprache bedeutet: die unmittelbare Begegnung zwischen Reisenden und dem Alltag eines Landes, das sich verändert — und in dem jede Entscheidung eines Besuchers Konsequenzen hat.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            GPS-verifizierte Koordinaten belegen, wo dieses Foto entstand: -0.9617° N, 29.6109° E, mitten im Dorf Buhoma, am Rand des Bwindi Impenetrable National Park. Wer als Reisender in diese Region kommt, bewegt sich nicht durch eine touristische Kulisse, sondern durch gelebten Alltag. Die Frage, wie man sich dabei verhält — was man konsumiert, bei wem man übernachtet, was man kauft und was man weglässt — ist keine abstrakte ethische Überlegung, sondern eine praktische Entscheidung mit konkreten Folgen für die Menschen, die hier leben.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Nachhaltiger Tourismus in Uganda ist kein Trend und kein Marketingversprechen. Er ist eine strukturelle Notwendigkeit in einem Land, dessen Wirtschaft zu erheblichen Teilen von Besuchereinnahmen abhängt und dessen außergewöhnliche Natur — Berggorillas, Shoebills, Nilkrokodile, Rothschild-Giraffen — nur dann erhalten bleibt, wenn der Tourismus selbst als Schutzinstrument funktioniert. Dieser Artikel erklärt, wie das gelingt und was Reisende konkret tun können.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border-l-4 border-jungle-600 rounded-r-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-800 mb-4">Tourismus in Uganda — Fakten im Überblick</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-jungle-700">200.000</span>
                <span className="text-sm text-gray-600">direkt im Tourismus Beschäftigte</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-jungle-700">+284.000</span>
                <span className="text-sm text-gray-600">indirekt und induziert Beschäftigte</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-jungle-700">~979 Mio. USD</span>
                <span className="text-sm text-gray-600">Tourismuseinnahmen (historischer Referenzwert), mehr als Kaffee-Exporte</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-jungle-700">64 %</span>
                <span className="text-sm text-gray-600">der Besucher kamen aus Ost- und Südafrika</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-jungle-700">65 %</span>
                <span className="text-sm text-gray-600">der Touristen waren zwischen 25 und 44 Jahre alt</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-jungle-700">44 %</span>
                <span className="text-sm text-gray-600">der Besucher blieben länger als einen Monat im Land</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-jungle-700">35 %</span>
                <span className="text-sm text-gray-600">der Überseetouristen reisten über Entebbe International Airport ein</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-jungle-700">10.679</span>
                <span className="text-sm text-gray-600">Absolventen tourismusbezogener Kurse (2009–2013)</span>
              </div>
            </div>
          </div>

          {/* H2 Section 1 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Tourismus als Entwicklungsmotor: Die wirtschaftliche Realität Ugandas
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wer Uganda als Reiseziel wählt, tritt in eine Wirtschaft ein, in der der Tourismus eine gewichtigere Rolle spielt als in vielen anderen Ländern des Kontinents. Der Sektor beschäftigt direkt rund 200.000 Menschen und schafft durch Zulieferketten und konsumbedingte Effekte weitere rund 284.000 Arbeitsplätze. Die Deviseneinnahmen durch Tourismus übersteigen historisch gesehen die Erlöse aus Kaffee — jenem Exportgut, das gemeinhin als das wirtschaftliche Rückgrat Ugandas gilt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das verdeutlicht die Dimension: Jeder Reisende, der nach Uganda kommt, nimmt an einem System teil, das direkt mit dem Alltag von Hunderttausenden Menschen verknüpft ist. Die ugandische Bevölkerung spürt Besucherzahlen nicht abstrakt in Statistiken, sondern in Form von Einkommen für Guides, Fahrer, Lodges, Handwerker, Marktverkäufer und Kulturvermittler. Umgekehrt spürt sie Einbrüche — wie in der Pandemiezeit — als realen Einkommensverlust.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gleichzeitig zeigt ein Blick auf die Herkunft der Reisenden, dass Uganda touristisch noch immer primär ein afrikanisches Reiseziel ist: Kenia und Ruanda stellten in den beobachteten Zeiträumen zusammen mehr als die Hälfte aller Ankünfte — Kenia mit rund 32 Prozent, Ruanda mit rund 23 Prozent. Europäische und nordamerikanische Reisende sind in der Minderheit, bringen aber deutlich höhere Pro-Kopf-Ausgaben mit. Das verschafft westlichen Touristen eine überproportionale wirtschaftliche Hebelwirkung, die Verantwortung mit sich bringt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Tourismusausbildung in Uganda wurde in den vergangenen Jahren systematisch ausgebaut. Zwischen 2009 und 2013 wurden über 10.000 Absolventen tourismusrelevanter Kurse ausgebildet, allein am Hotel and Tourism Training Institute (HTTI) schlossen 2013 rund 308 Studierende ab. Das Uganda Wildlife Training Institute bildete im gleichen Zeitraum 62 Absolventen in wildlife-bezogenen Fächern aus. Diese Investitionen in Humankapital zeigen: Uganda nimmt Tourismus als strategischen Sektor ernst, nicht als Nebenprodukt seiner Nationalparks.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wer als nachhaltiger Reisender in Uganda unterwegs ist, sollte diese Hintergrundfolie kennen. Die Entscheidung, bei einem lokalen Anbieter statt bei einer internationalen Kette zu buchen, oder die Wahl einer gemeindenahen Lodge statt eines Resorts, das seine Gewinne ins Ausland abführt — das sind keine symbolischen Gesten, sondern wirtschaftlich relevante Weichenstellungen.
            </p>
          </section>

          {/* H2 Section 2 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Was nachhaltiger Tourismus in der ugandischen Praxis bedeutet
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Begriff "Ökotourismus" wird in Uganda — wie anderswo — häufig als Marketinginstrument eingesetzt. Eine Lodge nennt sich "eco-friendly", weil sie Solarpaneele auf dem Dach hat, obwohl die Speisekarte keine einzige lokale Zutat enthält und das Personal aus der Hauptstadt importiert wird. Nachhaltiger Tourismus im eigentlichen Sinne geht tiefer: Er fragt, wer von den Einnahmen profitiert, was mit den natürlichen Ressourcen geschieht und ob die betroffenen Gemeinden eine Stimme in der Gestaltung des Angebots haben.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda hat in den vergangenen Jahren verschiedene strukturelle Instrumente entwickelt, um Tourismus direkt mit Naturschutz zu verknüpfen. Das bekannteste Beispiel ist das Community Revenue Sharing Scheme rund um den Bwindi Impenetrable National Park: Ein Teil der Permit-Einnahmen aus dem Gorilla-Trekking fließt direkt in Gemeinschaftsprojekte der umliegenden Dörfer — Schulen, Gesundheitsstationen, Wasserleitungen. Dieses Modell macht Gorillas für die lokale Bevölkerung zu einer ökonomischen Ressource, die es zu schützen gilt, nicht zu bekämpfen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Mabamba-Sumpf nahe Entebbe ist ein weiteres Beispiel: Lokale Fischer wurden zu Bootsführern für Schuhschnabel-Sichtungen ausgebildet. Wo früher ein seltener Vogel allenfalls als Kuriosum galt, sorgt er heute für ein verlässliches Einkommen. Der Shoebill hat damit einen konkreten Schutzwert erhalten, den die Gemeinde selbst verteidigt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ähnliche Mechanismen funktionieren rund um den Murchison Falls National Park, wo Bootsfahrten auf dem Nil und Pirschfahrten Nilkrokodile, Flusspferde und Rothschild-Giraffen als lebendige Argumente für den Erhalt intakter Ökosysteme etablieren. Die Giraffe, eine in Uganda endemische Unterart, existiert noch überhaupt nur, weil lokale und internationale Schutzprogramme greifen — und weil der Tourismus ihren Schutz ökonomisch plausibel macht.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nachhaltiger Tourismus bedeutet in diesem Kontext nicht Verzicht, sondern informierte Wahl: Welcher Anbieter ist transparent über seine Preisgestaltung? Wer beschäftigt lokales Personal und zahlt faire Löhne? Welche Lodge bezieht Lebensmittel von umliegenden Farmen? Diese Fragen lassen sich vor der Reise recherchieren — und sie machen einen messbaren Unterschied.
            </p>

            {/* Inline image */}
            <figure className="my-8 rounded-xl overflow-hidden">
              <img
                src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
                alt="Berggorilla frisst Blätter im Baumkronendach des Bwindi Impenetrable National Park – Januar 2026"
                className="w-full object-cover rounded-xl"
                style={{ maxHeight: '420px' }}
              />
              <figcaption className="text-sm text-gray-500 text-center py-2">
                Gorilla-Trekking im Bwindi, Januar 2026 — Foto: Mark Suer
              </figcaption>
            </figure>

            <p className="text-gray-700 leading-relaxed mb-4">
              Bei unserem Gorilla-Trekking im Januar 2026 stießen wir nach etwa einer Stunde Wanderung auf die erste Gorilla-Familie. Der erste Gorilla saß hoch oben in einem Baum und fraß ruhig Blätter — völlig unbeeindruckt von unserer Anwesenheit. Diese Szene, für die es kein Drehbuch gibt und die kein Zoobesuch ersetzen kann, ist das Ergebnis jahrzehntelanger Schutzarbeit. Sie ist der lebendige Beweis dafür, dass Tourismus und Naturschutz keine Gegensätze sind — wenn die Strukturen stimmen.
            </p>
          </section>

          {/* H2 Section 3 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Konkrete Tipps: So reist du nachhaltig in Uganda
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nachhaltig reisen in Uganda bedeutet nicht, auf Komfort zu verzichten oder sich in Selbstkasteiung zu üben. Es bedeutet, bewusste Entscheidungen zu treffen, die lokale Strukturen stärken statt untergraben. Die folgenden Punkte sind keine ideologischen Forderungen, sondern praktische Empfehlungen aus direkter Erfahrung.
            </p>

            <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Permits und Gebühren über offizielle Kanäle kaufen</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gorilla-Trekking-Permits, Parkgebühren und Ranger-Führungen sollten immer über offizielle Stellen gebucht werden. Inoffizielle Zwischenhändler umgehen den Mechanismus, der Einnahmen in Schutz und Gemeinden fließen lässt. Ein echtes Permit kostet seinen offiziellen Preis — Angebote weit darunter sind ein Warnsignal.
            </p>

            <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Lokale Guides beauftragen und fair entlohnen</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda hat ein gewachsenes Netz zertifizierter Guides, die über das Uganda Wildlife Training Institute oder lokale Community Tourism-Programme ausgebildet wurden. Ein lokaler Guide kennt nicht nur Tierpfade und Vogelrufe, sondern auch die Geschichte, Kultur und aktuellen Herausforderungen seiner Region. Ein angemessenes Trinkgeld — üblicherweise 10 bis 20 US-Dollar pro Tag — bleibt vollständig im lokalen Kreislauf.
            </p>

            <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Unterkunft und Verpflegung lokal wählen</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gemeinschaftsnahe Lodges und Guesthouses, die Personal aus den umliegenden Dörfern beschäftigen und Lebensmittel regional einkaufen, haben einen direkten positiven Effekt auf die lokale Wirtschaft. Große internationale Hotelketten hingegen führen einen erheblichen Teil ihrer Einnahmen ins Ausland ab. Die Frage "Wer kocht hier und woher kommt das Gemüse?" ist kein Luxusproblem, sondern eine ökonomisch relevante Weichenstellung.
            </p>

            <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kein direktes Geld an Kinder oder Bettelnde</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dieser Punkt ist wichtig und wird von unerfahrenen Reisenden oft falsch eingeschätzt. In Buhoma begegneten wir im Juni 2026 Kindern in erkennbar schwieriger Lage. Die richtige Reaktion war nicht, Geldscheine zu verteilen, sondern sie zum gemeinsamen Essen einzuladen — ein Moment echter Begegnung auf Augenhöhe, ohne ökonomische Abhängigkeit zu verstärken. Wer längerfristig helfen möchte, wendet sich an vertrauenswürdige lokale Organisationen, die transparent über ihre Arbeit berichten.
            </p>

            <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Plastikmüll vermeiden und Naturregeln respektieren</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda hat Plastiktüten offiziell verboten — ein Schritt, den viele Länder noch vor sich haben. Wiederverwendbare Behälter, das Vermeiden von Einwegplastik und das strikte Einhalten der Distanzregeln zu Wildtieren (mindestens sieben Meter bei Gorillas) sind keine symbolischen Gesten, sondern praktische Beiträge zum Schutz eines fragilen Ökosystems. Wer erkrankt ist, sollte Trekking-Aktivitäten verschieben — Krankheitserreger, die auf Gorillas übertragen werden, können für diese tödlich sein.
            </p>

            <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Handgemachte Produkte und lokale Kunst kaufen</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In den Dörfern rund um Bwindi, am Markt in Masindi oder in den Kunsthandwerkszentren in Kampala finden sich handgefertigte Korbwaren, Textilien und Skulpturen, deren Kauf direkt den Produzenten zugute kommt. Wer gezielt bei den Herstellern kauft statt bei touristischen Mittelsmännern, erhöht die Wertschöpfung für Kunsthandwerker erheblich. [ZITAT: Lokale Handwerkerin über den Unterschied zwischen direktem Verkauf und Marktmittler]
            </p>
          </section>

          {/* H2 Section 4 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Wildtierbeobachtung und Naturschutz: Zwei Seiten derselben Medaille
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda zählt zu den artenreichsten Ländern Afrikas und beheimatet eine außergewöhnliche Bandbreite an Tieren: neben den Berggorillas im Bwindi auch Schimpansen im Kibale Forest, Nilkrokodile und Flusspferde am Kazinga-Kanal im Queen Elizabeth National Park, Zebras im Lake Mburo und Kidepo Valley sowie die seltene Rothschild-Giraffe im Murchison Falls National Park. Hinzu kommt der Schuhschnabel, einer der absonderlichsten und begehrtesten Vögel Afrikas, der im Mabamba-Sumpf nahe Entebbe beobachtet werden kann.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              All diese Tiere existieren in einem Spannungsfeld zwischen Schutz und menschlichem Druck. Ugandas Bevölkerung wächst schnell, landwirtschaftliche Flächen dehnen sich aus, und die Grenzen der Nationalparks sind in manchen Regionen umstritten. Tourismus schafft in diesem Kontext einen ökonomischen Gegenpol zur Waldrodung: Wer von einem intakten Park lebt, hat ein Eigeninteresse daran, ihn zu erhalten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ranger spielen dabei eine Schlüsselrolle. Sie patroullieren Schutzzonen, dokumentieren Wildtierbewegungen und stellen Wilderer. Ihr Einsatz ist körperlich gefährlich und wirtschaftlich oft prekär entlohnt. Programme, die Ranger-Ausbildung und faire Bezahlung unterstützen, sind direkte Beiträge zum Naturschutz — oft wirksamer als symbolische CO2-Kompensationszahlungen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Schimpansen-Trekking im Kibale Forest oder eine Bootsfahrt auf dem Nil im Murchison Falls National Park sind nicht nur eindrucksvolle Erlebnisse — sie sind auch Refinanzierungsinstrumente für Schutzsysteme. Je mehr Touristen für diese Erfahrungen zahlen, desto mehr Mittel stehen für Schutzmaßnahmen zur Verfügung. Diese Logik gilt nur, wenn die Einnahmen auch tatsächlich im ugandischen System verbleiben und nicht über Offshore-Strukturen abgeführt werden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bergsteigen in den Rwenzori Mountains oder am Mount Elgon ist eine weitere Form nachhaltigen Tourismus, die bisher weniger stark erschlossen ist. Mehrtägige Trekkingtouren generieren Einnahmen für Trägerdienste, lokale Lodges entlang der Routen und zertifizierte Bergführer — ohne die ökologische Belastung, die massentouristischere Aktivitäten mit sich bringen.
            </p>
          </section>

          {/* H2 Section 5 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Kampala und urbaner Tourismus: Stadtentwicklung trifft Reiseplanung
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nachhaltig reisen in Uganda beginnt oft schon in Kampala. Die Hauptstadt ist nicht nur Transitpunkt, sondern ein eigenständiges Reiseziel mit einer lebendigen Kulturszene, Geschichte und einem wachsenden Angebot an stadtbezogenen Erlebnissen. Die Kampala Capital City Authority (KCCA) hat mit ihrem strategischen Plan für die Jahre 2025 bis 2030 einen umfassenden Rahmen für Stadtentwicklung, digitale Governance, Bildung und Infrastruktur gesetzt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für Reisende bedeutet das in der Praxis: Kampala entwickelt sich. Neue Verkehrsinfrastruktur, verbesserte Abwassersysteme und digitale Dienste verändern das Stadtbild spürbar. Wer Kampala auf einer Uganda-Reise nur als unvermeidlichen Zwischenstopp behandelt, verpasst eine Stadt im Wandel — mit Märkten, Galerien, Historischen Stätten und einer Gastronomie, die ugandische Küche und internationale Einflüsse verbindet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Uganda Museum in Kampala verzeichnete allein im Jahr 2013 über 112.000 Besucher — rund 95.000 davon waren Schulkinder. Das zeigt: Das Museum ist ein ernstes Bildungsinstitut, kein touristisches Beiwerk. Ein Besuch dort gibt Kontext für alles, was man danach in den Nationalparks und Gemeinden erlebt. Die Sammlungen zur ugandischen Geschichte, Ethnologie und Naturkunde verdienen mehr Aufmerksamkeit, als sie von internationalen Reiseführern typischerweise erhalten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nachhaltiger Städtetourismus in Kampala heißt außerdem: öffentliche Verkehrsmittel nutzen wo möglich, lokale Restaurants und Kaffeehäuser gegenüber Franchise-Ketten bevorzugen, und Stadtführungen bei lokalen Guides buchen, nicht bei internationalen Plattformen, die ihre Margen außer Landes halten. Die Region Kampala ist, wie Jinja und Fort Portal, Teil eines Netzwerks ugandischer Städte, die touristisch erschlossen werden können, ohne die Schäden des Massentourismus zu replizieren.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Energie- und Wasserversorgung spielen ebenfalls eine Rolle für umweltbewusste Reisende. Uganda hat erhebliche Investitionen in Wasserkraft getätigt — die Anlagen Kiira und Nalubaale versorgen erhebliche Teile des Landes mit Strom. Neue Gasprojekte in Bulisa und Kikuube sollen die Kapazität weiter ausbauen. Lodges und Hotels, die auf erneuerbare Energien setzen und Wasser sparsam einsetzen, leisten einen messbaren Beitrag zur Schonung lokaler Ressourcen.
            </p>

            {/* Inline image */}
            <figure className="my-8 rounded-xl overflow-hidden">
              <img
                src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                alt="Gemeinschaft in Buhoma – Menschen unterschiedlichen Alters vor einem Gebäude mit Wellblechdach, Juni 2026"
                className="w-full object-cover rounded-xl"
                style={{ maxHeight: '420px' }}
              />
              <figcaption className="text-sm text-gray-500 text-center py-2">
                Buhoma, Juni 2026 — Foto: Mark Suer
              </figcaption>
            </figure>

            <p className="text-gray-700 leading-relaxed mb-4">
              Der Blick auf das Bild aus Buhoma — aufgenommen am frühen Morgen des 21. Juni 2026 — zeigt Menschen unterschiedlichen Alters, die gemeinsam in die Kamera schauen. Ihre Blicke sind weder bittend noch distanziert. Sie zeigen etwas, das sich nicht inszenieren lässt: die Würde von Menschen, die in schwierigen Verhältnissen trotzdem Kraft und Gemeinschaft finden. Nachhaltiger Tourismus, der diesen Menschen nützt, schaut nicht weg und kauft keine Fassaden — er findet Wege, in echten Austausch zu treten.
            </p>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <section className="mt-14 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Häufige Fragen: Nachhaltiger Tourismus in Uganda
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-5 py-4 flex justify-between items-center bg-gray-50 hover:bg-jungle-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-gray-800 pr-4">{faq.q}</span>
                    <span className="text-jungle-600 text-xl flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 text-gray-700 leading-relaxed bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
              Weiterführende Informationen zu Uganda
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/gorilla-trekking"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                Gorilla-Trekking in Uganda: Alles was du wissen musst
              </a>
              <a
                href="/nachhaltiger-tourismus-uganda"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                Nachhaltiger Tourismus: Überblick und Grundlagen
              </a>
              <a
                href="/nationalparks/bwindi"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                Bwindi Impenetrable National Park
              </a>
              <a
                href="/ranger-uganda"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                Ranger in Uganda: Naturschutz vor Ort
              </a>
              <a
                href="/murchison-falls-nationalpark"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                Murchison Falls Nationalpark: Nilkrokodile und Giraffen
              </a>
              <a
                href="/schimpansen-trekking"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                Schimpansen-Trekking im Kibale Forest
              </a>
              <a
                href="/beste-reisezeit-uganda"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                Beste Reisezeit Uganda
              </a>
              <a
                href="/regionen/buhoma"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                Buhoma: Dorf am Rand des Bwindi
              </a>
              <a
                href="/uwa-anti-poaching"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                UWA Anti-Poaching: Wie Uganda seine Wildtiere schützt
              </a>
              <a
                href="/reiseplanung"
                className="block px-4 py-3 bg-jungle-50 hover:bg-jungle-100 rounded-lg text-jungle-800 font-medium transition-colors"
              >
                Uganda-Reise planen: Schritt für Schritt
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
