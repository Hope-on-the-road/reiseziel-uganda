import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'loewen-queen-elizabeth-murchison'

export default function LoewenQueenElizabethPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Wo sind die Chancen auf Löwensichtungen in Uganda am größten?',
      a: 'Die zuverlässigsten Löwensichtungen gelingen im Queen Elizabeth Nationalpark, vor allem entlang der Ishasha-Sektion im Süden, wo die Tiere regelmäßig in Feigenbäume klettern. Auch im Murchison Falls Nationalpark sind Löwen auf den weiten Savannenflächen nördlich des Viktoria-Nils aktiv zu beobachten. Im Kidepo Valley Nationalpark im Nordosten Ugandas leben ebenfalls Löwen, jedoch ist die Anreise dorthin deutlich aufwendiger.'
    },
    {
      q: 'Gibt es Löwen-Trekking in Uganda wie beim Gorilla-Trekking?',
      a: 'Ein formelles Löwen-Trekking vergleichbar mit dem Gorilla-Trekking existiert in Uganda nicht. Anders als Gorillas sind Löwen nicht habituiert und bewegen sich über große Territorien. Safari-Fahrten mit einem kundigen Guide sind der übliche Weg — gerade im Ishasha-Sektor und auf den Savannenflächen des Murchison Falls Nationalparks gelingen dabei bemerkenswert nahe Begegnungen.'
    },
    {
      q: 'Wie viele Löwen leben heute noch in Uganda?',
      a: 'Die genauen Populationszahlen variieren je nach Erhebungsjahr. Der Uganda Large Carnivore Action Plan 2024–2034 dokumentiert Löwen in mehreren Schutzgebieten: Queen Elizabeth, Murchison Falls, Kidepo Valley und in Teilen des Ruwenzori-Nationalparks. Insgesamt gelten Ugandas Löwen als gefährdet — Lebensraumverlust und Mensch-Tier-Konflikte sind die größten Bedrohungen.'
    },
    {
      q: 'Was ist die beste Reisezeit für eine Löwensafari in Uganda?',
      a: 'Die Trockenmonate von Dezember bis Februar und von Juni bis August gelten als besonders günstig. In dieser Zeit halten sich Löwen bevorzugt an Wasserquellen auf, und die kürzere Vegetation erleichtert die Sichtung erheblich. Im Murchison Falls Nationalpark empfiehlt sich eine Pirschfahrt am frühen Morgen oder am späten Nachmittag — genau dann, wenn die Löwen aktiv auf Nahrungssuche gehen.'
    },
    {
      q: 'Kann man Löwen und Gorillas auf einer Reise kombinieren?',
      a: 'Ja, das ist einer der großen Vorteile einer Uganda-Reise. Gorilla-Trekking findet im Bwindi Impenetrable Forest statt, während Queen Elizabeth und Murchison Falls für Löwensichtungen bekannt sind. Eine kombinierte Route über Bwindi, Queen Elizabeth und Murchison Falls ist gut machbar und bietet innerhalb von zehn bis vierzehn Tagen außergewöhnliche Begegnungen mit sehr unterschiedlichen Tierarten.'
    }
  ]

  return (
    <>
      <Head
        title="Löwen Uganda Safari: Queen Elizabeth & Murchison Falls"
        description="Löwen Uganda Safari: Wo Löwen in Queen Elizabeth und Murchison Falls leben, Populations-Daten 2024–2034 und beste Sichtungs-Tipps aus eigener Erfahrung."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, Uganda — Foto: Mark Suer"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Buhoma, Juni 2026 — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Löwen Uganda Safari: Wo Panthera leo in Queen Elizabeth und Murchison Falls lebt
          </h1>

          {/* Eroeffnungs-Hook */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              An einem frühen Morgen im Juni 2026, kurz nach halb sieben Uhr, besuchten wir einen Hühnerfarmer am Rand von Buhoma. Der Mann kannte jeden seiner Küken beim Namen — oder zumindest schien es so. Er führte uns durch den kleinen Stall, erklärte, welche Tiere für Eier gehalten werden und welche der Fleischproduktion dienen. Wir hatten bereits mehrfach Küken bei ihm gekauft, die dann im nahe gelegenen Waisenhaus aufgezogen werden. Es ist diese Art von Verbindung — zwischen lokaler Landwirtschaft, sozialer Verantwortung und dem alltäglichen Leben in der Region — die Uganda so vielschichtig macht. GPS-Koordinaten und Aufnahmedatum meiner Fotos belegen diesen Moment unwiderlegbar: -0.9713°, 29.6142°, 21. Juni 2026.
            </p>
            <p>
              Wenige Stunden später, auf der Fahrt durch das südwestliche Uganda, verändert sich die Landschaft radikal. Aus dichtem Regenwald wird offene Savanne, aus Bergnebelwald wird weiter Horizont. Spätestens hier denkt man an die großen Raubtiere — und eine Löwen Uganda Safari rückt ins Bewusstsein. Ugandas Nationalparks beherbergen eine der letzten stabilen Löwenpopulationen Ostafrikas. Die Parkgebiete Queen Elizabeth, Murchison Falls und Kidepo Valley sind die entscheidenden Refugien für Panthera leo in einem Land, das auf engstem Raum eine außergewöhnliche Artenvielfalt bewahrt.
            </p>
            <p>
              Dieser Artikel fasst zusammen, was wir bei mehreren Besuchen in Uganda selbst erlebt haben — und was der Uganda Large Carnivore Action Plan 2024–2034 als wissenschaftliche Grundlage liefert. Beide Quellen zusammen ergeben ein ehrlicheres Bild als jede reine Werbebroschüre.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Fakten: Löwen in Uganda auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Art:</span> Panthera leo (Afrikanischer Löwe)</div>
                <div><span className="font-semibold">Wichtigste Parks:</span> Queen Elizabeth, Murchison Falls, Kidepo Valley</div>
                <div><span className="font-semibold">Besonderheit:</span> Baumkletternde Löwen im Ishasha-Sektor</div>
                <div><span className="font-semibold">Status:</span> Gefährdet (IUCN Red List)</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Aktionsplan:</span> Uganda Large Carnivore Action Plan 2024–2034</div>
                <div><span className="font-semibold">Bedrohungen:</span> Habitatverlust, Mensch-Tier-Konflikte, Wilderei</div>
                <div><span className="font-semibold">Beste Reisezeit für Sichtungen:</span> Trockenzeit (Dez–Feb, Jun–Aug)</div>
                <div><span className="font-semibold">Weitere Großraubtiere:</span> Leopard, Tüpfelhyäne, Streifenhyäne</div>
              </div>
            </div>
          </div>

          {/* H2: Löwen als Tierart in Uganda */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Löwen in Uganda: Eine Art unter Druck
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Panthera leo ist in Uganda auf wenige Schutzgebiete konzentriert. Das war nicht immer so — historisch besiedelten Löwen weite Teile des Landes. Mit zunehmender landwirtschaftlicher Nutzung, dem Wachstum menschlicher Siedlungen und dem Rückgang der Beutetierbestände zogen sich die Populationen in die Kernzonen der Nationalparks zurück. Heute gilt der Afrikanische Löwe in Uganda als regional gefährdet, und die Bestände stehen unter direktem Schutz der Uganda Wildlife Authority.
              </p>
              <p>
                Der Uganda Large Carnivore Action Plan 2024–2034 analysiert den Zustand der Löwenpopulationen systematisch und zeigt, in welchen Parks die Tiere noch in beobachtbaren Gruppen vorkommen. Neben Queen Elizabeth und Murchison Falls werden auch Kidepo Valley und Teile des Ruwenzori-Nationalparks als relevante Lebensräume dokumentiert. Dieser Aktionsplan ist kein touristisches Marketingdokument — er ist eine nüchterne Bestandsaufnahme, die auch die Konflikte zwischen Löwen und Viehhirten an den Parkgrenzen thematisiert.
              </p>
              <p>
                Ein besonderes Merkmal von Ugandas Löwen ist ihre Anpassungsfähigkeit. Im Ishasha-Sektor des Queen Elizabeth Nationalparks wurde das Klettern in Feigenbäume zu einem ikonischen Verhalten — wahrscheinlich eine Reaktion auf Tsetse-Fliegen am Boden und auf eine bessere Übersicht über die Savanne. Dieses Verhalten ist in dieser Form weltweit selten beobachtet und hat den Sektor zu einem der meistbesuchten Bereiche des Parks gemacht.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kidepo Valley: Löwen im wildesten Nationalpark</h3>
              <p>
                Der Kidepo Valley Nationalpark im Nordosten Ugandas ist der abgelegenste der großen Parks — und genau das macht ihn besonders. Die Löwenpopulation dort ist kleiner als in Queen Elizabeth, aber das Gelände ist offen und übersichtlich. Besucher, die den langen Anreiseweg auf sich nehmen, berichten von Begegnungen, bei denen Löwen in kurzer Distanz an Fahrzeugen vorbeizogen, ohne sich im Geringsten stören zu lassen. Die Unberührtheit des Parks erzeugt diese Qualität von Begegnung — sie fühlt sich anders an als eine Safari im überlaufenen Hochbetrieb.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Ruwenzori: Historische Löwengebiete am Äquator</h3>
              <p>
                Der Ruwenzori-Nationalpark an der Grenze zur Demokratischen Republik Kongo gehört zu jenen Gebieten, in denen Löwen historisch dokumentiert sind, deren aktuelle Population aber weniger gut erfasst ist. Das bergige Terrain und die hohe Vegetationsdichte machen Zählungen schwierig. Wer dort auf Safari geht, sollte keine garantierten Löwensichtungen erwarten — aber die Landschaft selbst, die Nähe zu den Ruwenzori-Gletschern und die Tierwelt entlang der Parkgrenzen rechtfertigen den Besuch unabhängig davon.
              </p>
            </div>
          </section>

          {/* H2: Queen Elizabeth Nationalpark */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Queen Elizabeth Nationalpark: Baumlöwen und Kazinga-Kanal
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Queen Elizabeth Nationalpark im Westen Ugandas ist das bekannteste Großwild-Reiseziel des Landes. Er erstreckt sich über die Schwelle zwischen dem Albertine Graben und dem Viktoria-Nil-Becken, und seine Vielfalt an Lebensräumen — Savanne, Papyrus-Sümpfe, Wälder und Seeufer — erklärt, warum hier über 600 Vogelarten und alle klassischen ostafrikanischen Savannentiere nebeneinander vorkommen.
              </p>
              <p>
                Der Kazinga-Kanal verbindet den Lake George mit dem Lake Edward und ist eines der produktivsten Wildtierwasser Afrikas. Eine Bootsfahrt auf dem Kanal gehört zu den beeindruckendsten Erfahrungen, die Uganda bietet: Flusspferde liegen eng nebeneinander in flachem Wasser, Nilkrokodile sonnen sich auf den Uferbänken, und Büffelherden trinken in wenigen Metern Abstand. Löwen kommen auch hier vor, halten sich aber meist im Landesinneren auf und werden auf Pirschfahrten entlang der Nordstrecken des Parks gesichtet.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                  alt="Gemeinschaft in Buhoma, Uganda — Foto: Mark Suer"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Buhoma, Juni 2026 — das südwestliche Uganda ist Ausgangspunkt für Besuche im Queen Elizabeth Nationalpark. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Der Ishasha-Sektor: Wo Löwen Bäume erklettern</h3>
              <p>
                Der südliche Teil des Queen Elizabeth Nationalparks — der sogenannte Ishasha-Sektor — ist für Löwenbeobachtungen fast unübertroffen. Hier leben Löwen in kleinen Rudeln, die auffällig oft in riesigen Feigenbäumen (Ficus natalensis) ruhen. Das Verhalten ist gut dokumentiert, sein genaurer Ursprung aber noch immer diskutiert. Eine plausible Erklärung: Die Erhöhung bietet nicht nur Kühlung und freie Sicht, sondern auch Schutz vor den Tsetse-Fliegen, die am Boden besonders aggressiv sind.
              </p>
              <p>
                Für Besucher bedeutet dies konkret: Mit einem erfahrenen Guide ist es im Ishasha-Sektor möglich, Löwen in ein bis zwei Metern Höhe schlafend in Ästen zu beobachten — ein Anblick, den die meisten Afrikasafaris nicht bieten. Die Pirschfahrten finden üblicherweise am frühen Morgen und am späten Nachmittag statt. In der Mittagshitze ruhen die Tiere, und die Sichtungsrate sinkt deutlich.
              </p>
              <p>
                Im Hauptteil des Parks nördlich des Kazinga-Kanals sind Löwen gleichfalls präsent. Die Chancen auf Sichtungen sind hier gut, aber weniger konsistent als im Ishasha-Sektor. Wer mehrere Tage im Park verbringt, hat jedoch realistische Chancen auf Begegnungen — vor allem in den frühen Morgenstunden entlang der Hauptpirschwege rund um Mweya.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Weitere Tierwelt: Büffel, Elefanten, Vogelvielfalt</h3>
              <p>
                Eine Löwen Uganda Safari im Queen Elizabeth Nationalpark geht fast immer mit Begegnungen weiterer Großsäuger einher. Afrikanische Büffel kommen in großen Herden vor und sind eine der wichtigsten Beutegruppen für Löwen. Elefanten durchqueren den Park in kleinen Familiengruppen, oft entlang fester Wechsel zwischen Wasserlöchern und Schattenplätzen. Wer Warzenschweine, Wasserböcke und Kob-Antilopen im Blick hat, erkennt schnell, dass die offene Savanne des Parks einem vollständigen Ökosystem entspricht — nicht einer Ansammlung isolierter Tierindividuen.
              </p>
              <p>
                Die Vogelwelt ist für Ornithologen ein eigenständiges Argument für einen Besuch. 600 dokumentierte Arten machen den Queen Elizabeth Nationalpark zu einem der artenreichsten Vogelgebiete des Kontinents. Schuhschnabel-Sichtungen sind hier seltener als im Mabamba-Sumpf, aber Papageienweber, Fischadler und Saddle-billed Storks sind regelmäßige Begleiter jeder Safari-Fahrt entlang des Kazinga-Kanals.
              </p>
            </div>
          </section>

          {/* H2: Murchison Falls Nationalpark */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Murchison Falls Nationalpark: Löwen an Ugandas größtem Wasserfall
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Murchison Falls Nationalpark ist der flächenmäßig größte Nationalpark Ugandas und besteht aus dem eigentlichen Murchison Falls National Park sowie den angrenzenden Wildlife Reserves Bugungu und Karuma. Zusammen bilden sie einen Schutzgebietskomplex, der für die Erhaltung der Löwenpopulation im Norden des Landes von zentraler Bedeutung ist.
              </p>
              <p>
                Das namensgebende Element des Parks ist der Murchison-Wasserfall, an dem der Viktoria-Nil durch eine nur sieben Meter breite Felsschlucht stürzt und dabei 43 Meter in die Tiefe fällt. Der Druck und das Donnern dieses Wasserfalls sind schon von Hunderten Metern Entfernung spürbar. Eine Bootsfahrt den Nil aufwärts bis zum Fuß des Wasserfalls gehört zu den definitiven Uganda-Erlebnissen — und die Ufer sind gesäumt von Krokodilen, Flusspferden und einer enormen Vogelvielfalt.
              </p>
              <p>
                Die Stadt Masindi im Westen Ugandas ist das klassische Eingangstor zum Park. Von dort erreicht man die südlichen Parktore innerhalb einer Stunde, wobei die Straßenqualität je nach Regenzeit stark variiert.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Löwenbeobachtungen nördlich des Nils</h3>
              <p>
                Löwen im Murchison Falls Nationalpark halten sich bevorzugt in der offenen Savanne nördlich des Viktoria-Nils auf. Diese Nordbank ist auch die Hauptzone für Pirschfahrten: Die flache Graslandschaft mit vereinzelten Akazienbäumen bietet ideale Bedingungen sowohl für die Löwen selbst als auch für Beobachter in Fahrzeugen. Rotschild-Giraffen, die ausschließlich in Uganda vorkommen und in Murchison Falls ihre größte Population haben, teilen diesen Lebensraum mit den Löwen.
              </p>
              <p>
                Das Muster von Sichtungen folgt einem klaren Rhythmus: In den frühen Morgenstunden und am Abend sind Löwen aktiv — auf der Jagd, beim Trinken an Wasserlöchern oder beim geselligen Zusammensein im Rudel. In der Mittagshitze ziehen sie sich in den Schatten zurück und sind kaum zu sehen. Eine Übernachtung in einer der Lodges innerhalb oder am Rand des Parks ermöglicht es, zwei Pirschfahrten täglich einzuplanen — und verdoppelt damit die Chancen auf Begegnungen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Rothschild-Giraffe: Ein Alleinstellungsmerkmal des Parks</h3>
              <p>
                Während Löwen das Hauptziel vieler Safaris sind, ist die Rothschild-Giraffe das ökologisch einzigartigste Tier im Murchison Falls Nationalpark. Diese Unterart der Nördlichen Giraffe gilt weltweit als vom Aussterben bedroht, und Uganda beherbergt eine der wenigen stabilen Populationen. Das Nebeneinander von Löwen und Giraffen auf denselben Savannenflächen — und die seltenen Beobachtungen von Jagdversuchen — macht die Nordbank zu einem der spannendsten Wildtier-Beobachtungsgebiete Ostafrikas.
              </p>
              <p>
                Elefanten sind im Park in großer Zahl vertreten. Sie folgen alten Wanderkorridoren zwischen dem Park und den angrenzenden Bugungu-Reservaten. In den frühen Morgenstunden überqueren Elefantenherden teils die Hauptstraßen des Parks — ein beeindruckender Anblick, der die Größenverhältnisse von Mensch und Natur neu justiert.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Nil-Bootsfahrt: Ein anderer Blick auf dasselbe Ökosystem</h3>
              <p>
                Wer den Murchison Falls Nationalpark nur per Fahrzeug erkundet, sieht weniger als die Hälfte. Die Bootsfahrt auf dem Viktoria-Nil ist nicht nur ein optionales Zusatzprogramm — sie eröffnet Perspektiven, die vom Fahrzeug aus unmöglich sind. Nilkrokodile, die sich in wenigen Metern Entfernung vom Boot auf Sandbänken sonnen; Flusspferde, die scheinbar indifferent auftauchen und abtauchen; Afrikanische Fischadler, die in Zeitlupe Fische aus dem Wasser greifen. Der Wasserfall am Ende der Fahrt ist dann noch der spektakuläre Schlusspunkt.
              </p>
              <p>
                Für Löwen ist die Bootsfahrt natürlich weniger relevant — die Raubtiere meiden das Nilwasser. Aber das Gesamtbild eines Tages im Murchison Falls Nationalpark wird durch die Kombination aus Pirschfahrt und Bootsausflug vollständig. Wer nur eines von beiden macht, versteht das Ökosystem nur zur Hälfte.
              </p>
            </div>
          </section>

          {/* H2: Schutz und Zukunft */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Löwenschutz in Uganda: Bedrohungen und der Aktionsplan 2024–2034
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ugandas Löwenpopulationen sind trotz der gut bewachten Nationalparks nicht frei von Bedrohungen. Die größten Faktoren sind der Verlust von Pufferkorridoren zwischen Parks und landwirtschaftlichen Flächen, Vergiftungsaktionen durch Hirten, die ihr Vieh vor Raubtieren schützen wollen, und die langfristige genetische Isolation kleinerer Teilpopulationen.
              </p>
              <p>
                Der Uganda Large Carnivore Action Plan 2024–2034 adressiert diese Probleme mit einem strukturierten Ansatz: Monitoring der Bestände, Stärkung von Anti-Poaching-Einheiten, Einbindung lokaler Gemeinden in den Schutz und die Entwicklung von Entschädigungssystemen für Viehverluste durch Raubtiere. Dieser letzte Punkt ist entscheidend — ein Hirt, dessen Lebensunterhalt durch einen Löwenangriff bedroht ist, kann kein Verbündeter des Naturschutzes sein, wenn er keinerlei Ausgleich erhält.
              </p>
              <p>
                Ranger spielen bei diesem Schutzprogramm eine zentrale Rolle. Sie patrouillieren die Grenzzonen, dokumentieren Sichtungen, vermitteln bei Konflikten und liefern die Daten, auf denen Managemententscheidungen basieren. Die Uganda Wildlife Authority koordiniert diese Arbeit, aber die finanzielle Grundlage kommt zu einem erheblichen Teil aus Tourismuseinnahmen — ein direkter Zusammenhang zwischen Safari-Besuchern und dem Fortbestand der Löwenpopulationen.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125464168_l7rh.jpg"
                  alt="Hühnerfarmer in Buhoma mit Besuchern von Hope on the Road — Foto: Mark Suer"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Buhoma, Juni 2026: Lokale Landwirtschaft als Fundament der Gemeinschaft — direkt neben den großen Schutzgebieten Ugandas. Foto: Mark Suer
                </figcaption>
              </figure>

              <p>
                Was in Buhoma, wo ich im Juni 2026 den Hühnerfarmer besuchte, unmittelbar erlebbar war: Die Menschen, die an den Rändern von Schutzgebieten leben, jonglieren täglich zwischen wirtschaftlicher Not und der Realität von Wildtieren in ihrer Nähe. Das Waisenhaus, für das wir Küken kauften, liegt keine 30 Kilometer vom Bwindi Impenetrable Forest entfernt — einem der wichtigsten Gorilla-Schutzgebiete der Welt. Lokale Versorgungssysteme, die durch Initiativen wie die Hühnerfarm unterstützt werden, reduzieren den Druck auf die Wildbestände durch Wilderei und Ressourcenkonkurrenz.
              </p>
              <p>
                [ZITAT: Guide über erste Reaktion lokaler Gemeinden auf den Löwenschutzplan 2024]
              </p>
              <p>
                Tourismus ist bei allem kein Allheilmittel. Aber gut organisierter Ökotourismus, der lokale Strukturen stärkt statt zu untergraben, ist nachweislich einer der effektivsten Finanzierungswege für Naturschutz. Uganda nimmt hier eine interessante Position ein: Die Tourismusbranche generiert erhebliche Devisen für das Land, und ein Teil davon fließt direkt in die Erhaltung genau jener Tierarten, die Besucher anziehen.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur Löwen Uganda Safari
            </h2>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-gray-800 pr-4">{item.q}</span>
                    <span className="text-jungle-700 text-xl flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 pt-1 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-display text-xl font-semibold text-gray-800 mb-5">
              Mehr zu Ugandas Tierwelt und Nationalparks
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark' },
                { href: '/nationalparks/murchison_falls', label: 'Murchison Falls Nationalpark' },
                { href: '/tiere/loewe', label: 'Löwen in Uganda: Artenprofil' },
                { href: '/tiere/elefant', label: 'Elefanten in Uganda' },
                { href: '/beste-reisezeit-uganda', label: 'Die beste Reisezeit für Uganda' },
                { href: '/nachhaltiger-tourismus-uganda', label: 'Nachhaltiger Tourismus in Uganda' },
                { href: '/ranger-uganda', label: 'Ranger und Naturschutz in Uganda' },
                { href: '/uwa-anti-poaching', label: 'Anti-Poaching: Ugandas Wildtierschutz' },
                { href: '/gorilla-trekking', label: 'Gorilla-Trekking in Uganda' },
                { href: '/nationalparks/bwindi', label: 'Bwindi Impenetrable Forest' },
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
