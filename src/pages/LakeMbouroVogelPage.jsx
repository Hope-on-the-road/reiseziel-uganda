import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'lake-mburo-vogelbeobachtung'

export default function LakeMbouroVogelPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Wie viele Vogelarten gibt es im Lake Mburo Nationalpark?',
      antwort: 'Im Lake Mburo Nationalpark sind über 350 Vogelarten dokumentiert. Damit zählt der Park zwar nicht zu den artenreichsten Vogelgebieten Ugandas, bietet aber eine konzentrierte Mischung aus See-, Sumpf- und Savannenvögeln, die auf engstem Raum zusammentreffen. Für Vogelbeobachter, die einen Zwischenstopp auf dem Weg zwischen Kampala und dem Südwesten einlegen, ist der Park außergewöhnlich ergiebig.'
    },
    {
      frage: 'Kann man im Lake Mburo Nationalpark einen Schuhschnabel sehen?',
      antwort: 'Schuhschnabel-Sichtungen sind im Lake Mburo Nationalpark selten und unregelmäßig. Das Monitoring der Uganda Wildlife Authority hat an Feuchtgebietsstandorten in der Nähe des Sees einen Einzelvogel dokumentiert. Wer gezielt nach dem Schuhschnabel sucht, hat im Mabamba-Sumpf westlich von Entebbe deutlich bessere Chancen. Im Lake Mburo Nationalpark sind Sichtungen eher ein Zufallsgeschenk als eine planbare Erfahrung.'
    },
    {
      frage: 'Was unterscheidet eine Wandersafari in Lake Mburo von einer Pirschfahrt?',
      antwort: 'Der Lake Mburo Nationalpark ist einer der wenigen Nationalparks Ugandas, in denen Wandersafaris im Parkinneren erlaubt sind. Im Unterschied zu einer Pirschfahrt vom Fahrzeug aus bewegt man sich zu Fuß durch Akazienwald und Weideland — in Begleitung eines bewaffneten Rangers. Vögel wie Webervögel, Nektarvögel und Eisvögel sind aus kurzer Distanz zu beobachten. Auch Zebras und Impalas lassen sich zu Fuß oft näher anpirschen als vom Auto.'
    },
    {
      frage: 'Welche Vögel sind bei einer Bootsfahrt auf dem Lake Mburo zu erwarten?',
      antwort: 'Eine Abendbootsfahrt auf dem Lake Mburo ist für Wasservögel besonders lohnend. Afrikanische Fischadler rufen von den Uferbäumen, Afrikanische Schlangenhalsvögel trocknen auf überhängenden Ästen ihre Flügel, und verschiedene Reiher- sowie Störcharten stehen im flachen Wasser. Fulvous Whistling-Ducks wurden am frühen Morgen in kleinen Gruppen dokumentiert. Mit etwas Glück zeigen sich auch Weißflügel-Seeschwalben, die in größeren Trupps über der Wasseroberfläche jagen.'
    },
    {
      frage: 'Wie weit ist Lake Mburo Nationalpark von Kampala entfernt?',
      antwort: 'Der Lake Mburo Nationalpark liegt rund 230 Kilometer westlich von Kampala und ist über die gut ausgebaute Mbarara Highway erreichbar. Die Fahrzeit beträgt je nach Verkehrslage etwa vier bis fünf Stunden. Damit ist Lake Mburo der am schnellsten erreichbare Savannennationalpark Ugandas — und eine praktische Möglichkeit für Vogelbeobachter, die auf dem Weg nach Bwindi oder Queen Elizabeth einen Zwischenstopp einlegen.'
    }
  ]

  return (
    <>
      <Head
        title="Vogelbeobachtung Lake Mburo Nationalpark: 350+ Arten"
        description="Vogelbeobachtung im Lake Mburo Nationalpark: über 350 Arten, Schuhschnabel, Afrikanischer Fischadler, Papyrus-Sumpfvögel — Tipps aus eigener Erfahrung im Südwesten Ugandas."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Uferzone am Lake Mburo im Südwesten Ugandas — Foto: Mark Suer"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Südwestliches Uganda — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Vogelbeobachtung im Lake Mburo Nationalpark: Mehr als 350 Arten zwischen Savanne und Schilfgürtel
          </h1>

          {/* Eroeffnung */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Auf den ersten Blick wirkt der Lake Mburo Nationalpark unscheinbar. Kein Bergpanorama, keine Schlucht, kein donnernder Wasserfall. Was man stattdessen bekommt: offene Akazienlandschaft, mehrere ineinander übergehende Seen, ausgedehnte Papyrussümpfe an den Uferzonen und ein Vogelarteninventar, das jeden Morgen mit neuem Inhalt gefüllt wird. Ich habe diesen Park auf mehreren Reisen durch das südwestliche Uganda als Zwischenstopp genutzt — auf dem Weg nach Bwindi, einmal auch auf dem Rückweg von Mbarara nach Norden. Jedes Mal gab es Arten, die ich so nicht erwartet hatte.
            </p>
            <p>
              Der Lake Mburo Nationalpark liegt rund vier bis fünf Fahrstunden von Kampala entfernt und ist damit der am einfachsten erreichbare Savannennationalpark des Landes. Mit einer Fläche von 370 Quadratkilometern ist er auch Ugandas kleinster Savannennationalpark — aber Kleinheit täuscht. Das Mosaik aus offenem Grasland, Dornengebüsch, Laubwald und Feuchtgebiet erzeugt auf engem Raum eine Lebensraumdichte, die für eine erstaunliche Artenvielfalt sorgt. Mehr als 350 Vogelarten wurden hier dokumentiert.
            </p>
            <p>
              Was den Park außerdem auszeichnet, ist seine Verbindungsfunktion im westlichen Korridor Ugandas. Er liegt auf der Route zwischen dem Bwindi Impenetrable Forest im Südwesten und den großen Parkgebieten im Norden — Murchison Falls, Queen Elizabeth. Wer Ugandas Nationalparks konsequent bereist, kommt am Lake Mburo kaum vorbei. Und wer Vögel beobachtet, sollte das nicht als lästigen Zwischenstop betrachten, sondern als eigenständige Gelegenheit.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Lake Mburo Nationalpark: Eckdaten</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Flaeche:</span> 370 km²</div>
                <div><span className="font-semibold">Entfernung von Kampala:</span> ca. 230 km (4–5 Std.)</div>
                <div><span className="font-semibold">Vogelarten:</span> über 350 dokumentierte Arten</div>
                <div><span className="font-semibold">Lage:</span> Westliches Uganda, Region Kiruhura</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Zentrales Element:</span> Lake Mburo (See)</div>
                <div><span className="font-semibold">Besonderheit:</span> Wandersafari im Park erlaubt</div>
                <div><span className="font-semibold">Saeuger:</span> Zebra, Impala, Büffel, Flusspferd</div>
                <div><span className="font-semibold">Korridor:</span> Bwindi – Queen Elizabeth – Murchison</div>
              </div>
            </div>
          </div>

          {/* H2: Lebensräume und was sie bringen */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Lebensräume im Lake Mburo Nationalpark: Warum die Artenvielfalt so hoch ist
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Schlüssel zur Vogelvielfalt im Lake Mburo Nationalpark liegt in der Überlagerung verschiedener Lebensräume auf kleiner Fläche. Der See selbst bildet das Zentrum, umgeben von Papyrussümpfen, die direkt in Akazienwälder übergehen. Offenes Grasland, Dornengebüsch und gelegentliche Feigenbäume ergänzen das Bild. Für Vögel bedeutet das: Art für Art findet genau die Bedingungen, die sie braucht, in unmittelbarer Nähe zu anderen Lebensräumen.
              </p>
              <p>
                Der Papyrussaum ist dabei ein ökologischer Sonderfall. Papyrus-Schilf bildet an tropischen Seen oft dichte, schwimmende Matten, die für eine Reihe hochspezialisierter Vogelarten der einzig mögliche Lebensraum sind. Der Papyrus-Gelbsänger — eine endemische Art, die ausschließlich in Papyrussümpfen Ostafrikas vorkommt — ist im Lake Mburo Nationalpark heimisch. Wer ihn beobachten will, braucht Zeit, ein geübtes Auge und Geduld: Die Tiere bewegen sich tief im Schilfgestrüpp und lassen sich eher hören als sehen. Ihr charakteristischer, etwas rauchiger Gesang verrät die Anwesenheit, noch bevor man auch nur einen Halm auseinandergebogen hat.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Akazienwald: Lebensraum für Savannenvögel</h3>
              <p>
                Der Akazienwald, der weite Teile des Parkinneren bedeckt, ist für eine völlig andere Vogelgemeinschaft entscheidend. Webervögel bauen hier ihre hängenden Nestkugeln in dichten Kolonien, Spechte bearbeiten trockenes Totholz, und verschiedene Greifvogelarten nutzen die kahlen Kronen als Ausguck. Zu den bemerkenswerten Erscheinungen des Akazienwaldes gehören die Fliederbrust-Rollervögel, deren türkis-blaues Gefieder in der afrikanischen Morgenbeleuchtung an Buntglas erinnert.
              </p>
              <p>
                Am Übergang zwischen Wald und offenem Grasland findet man häufig Rötelfalken, Bienenfresser und verschiedene Würgerarten — Vögel, die die Kante zwischen zwei Lebensräumen gezielt nutzen. Diese Ökotone, wie Biologen sie nennen, sind immer die produktivsten Zonen für Beobachter. Im Lake Mburo Nationalpark gibt es davon mehrere, weil die Landschaft auf kleinem Raum stark wechselt.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Offenes Grasland: Wo die Zebras und die Störche gehen</h3>
              <p>
                Das offene Grasland des Parks ist nicht nur Weidegebiet für Zebras und Impalas — es ist auch Jagdgebiet für Bodenvögel und Storcharten. Sattelstoerche, Marabustörche und verschiedene Reiherarten stehen im kurzen Gras und warten auf Beute. Kronenkraniche, das Wappentier Ugandas, sind im Lake Mburo Nationalpark regelmäßig zu sehen — in Paaren oder kleinen Gruppen, die über die Grasflächen schreiten. Ihre roten Wangenlappen und die goldene Federkrone machen sie unverwechselbar.
              </p>
            </div>
          </section>

          {/* H2: Schlüsselarten */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Schluessel-Vogelarten im Lake Mburo Nationalpark
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Von den über 350 dokumentierten Arten im Lake Mburo Nationalpark gibt es eine Handvoll, die entweder ökologisch bedeutsam, ornithologisch selten oder schlicht besonders eindrucksvoll sind. Die folgenden Arten sollte kennen, wer den Park gezielt für Vogelbeobachtungen besucht.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Afrikanischer Fischadler</h3>
              <p>
                Der Afrikanische Fischadler ist am Lake Mburo in hoher Dichte vertreten. An den Ufern des Sees sitzt er auf überhängenden Ästen oder Baumkronen und ruft sein charakteristisches, weittragendes Schreien in die Morgenluft — für viele Ostafrika-Reisende einer der einprägsamsten Klangerlebnisse überhaupt. Die Jagd ist oft zu beobachten: Der Vogel steigt, peilt ein Ziel unter der Wasseroberfläche an und schlägt mit ausgestreckten Klauen ins Wasser. Die Erfolgsquote ist dabei erstaunlich hoch.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Schuhschnabel</h3>
              <p>
                Der <a href="/tiere/schuhschnabel" className="text-jungle-700 hover:text-jungle-900 underline">Schuhschnabel</a> ist im Lake Mburo Nationalpark eine seltene Erscheinung — aber eine dokumentierte. Das Monitoring der Uganda Wildlife Authority hat an Feuchtgebietsstandorten in der Parkregion einen Einzelvogel erfasst. Der Schuhschnabel bevorzugt dichte Papyrussümpfe mit flachem, sauerstoffarmem Wasser, in dem er auf Lungenfische und andere Fische wartet, die an die Oberfläche kommen. Wer ihn im Lake Mburo sehen will, muss Geduld mitbringen und früh morgens in den Feuchtgebietsbereichen suchen. Eine Garantie gibt es nicht — zuverlässigere Standorte sind der Mabamba-Sumpf bei Entebbe oder der Murchison Falls Nationalpark.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Papyrus-Gelbsaenger</h3>
              <p>
                Der Papyrus-Gelbsänger ist eine Endemit-Art der Papyrussümpfe des Viktoria-Nil-Beckens und des Albertine-Grabens. Im Lake Mburo Nationalpark ist er in den Schilfzonen rund um den See zu finden — aber nicht leicht zu entdecken. Die Tiere leben tief im dichten Papyrusgestrüpp, klettern von Halm zu Halm und zeigen sich nur kurz an den Rändern. Morgens, wenn die Sonne noch niedrig steht und die Vögel singen, sind die Chancen am besten. Mit einem guten Guide, der die Standorte kennt, gelingt eine Sichtung in der Regel.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Weissflügel-Seeschwalbe und Wasservögel</h3>
              <p>
                Das Monitoring der Uganda Wildlife Authority hat an Seenstandorten in der Parkregion bemerkenswerte Zahlen erfasst: Weissflügel-Seeschwalben wurden in einer Gruppe von 81 Individuen dokumentiert — ein Hinweis darauf, dass der See als Raststätte oder Nahrungsgebiet erhebliche Bedeutung hat. Fulvous Whistling-Ducks wurden in kleinen Gruppen am frühen Morgen beobachtet. Afrikanischer Schlangenhalsvogel und Afrikanischer Flussadler ergänzen das Bild der Wasservogelgemeinschaft. Die Zahlen stammen aus dem UWA-Monitoring und spiegeln Momentaufnahmen wider — tatsächliche Anwesenheit und Individuenzahl schwanken je nach Jahreszeit.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kleinere Jacana und Afrikanischer Schlangenhalsvogel</h3>
              <p>
                Jacanas sind Spezialisten für schwimmende Vegetation — ihre auffällig langen Zehen verteilen ihr Körpergewicht so, dass sie über Seerosen und schwimmende Blätter laufen können, ohne einzusinken. Die Kleinere Jacana ist im Lake Mburo Nationalpark an den Uferzonen mit flacher Wasservegetation zu finden, wenn auch in geringer Dichte. Der Afrikanische Schlangenhalsvogel, mit seinem langen, S-förmig gebogenen Hals und den schimmernden Schwingen, trocknet an überhängenden Ästen über dem Wasser seine Flügel aus — ein unverwechselbares Bild, das sich in die Erinnerung einprägt.
              </p>
            </div>
          </section>

          {/* H2: Bootsfahrt und Wandersafari */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Bootssafari und Wandersafari: Zwei Wege, den Park zu erleben
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Was den Lake Mburo Nationalpark für Vogelbeobachter besonders interessant macht, sind zwei Optionen, die in den meisten anderen ugandischen Parks so nicht existieren: eine Abendbootsfahrt auf dem See und eine Wandersafari im Parkinneren. Beide eröffnen Perspektiven, die eine Pirschfahrt vom Fahrzeug aus nicht bieten kann.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Bootssafari auf dem Lake Mburo</h3>
              <p>
                Die <a href="/boot-safari-uganda" className="text-jungle-700 hover:text-jungle-900 underline">Bootssafari</a> auf dem Lake Mburo dauert in der Regel ein bis zwei Stunden und findet am späten Nachmittag oder am frühen Morgen statt. Das Boot gleitet nah an den Uferzonen entlang, wo die Vogelaktivität am höchsten ist. Afrikanische Fischadler sind fast immer präsent, Reiher und Störche stehen im flachen Wasser, Webervögel bauen oder besuchen ihre Nestkugeln in den Ufergebüschen.
              </p>
              <p>
                Besonders in der Abenddämmerung — wenn das Licht weich wird und die Tiere aktiv auf Nahrungssuche gehen — verwandelt sich der See in eine lebendige Vogelszene. Flusspferde tauchen auf, Krokodile gleiten durch das dunkler werdende Wasser, und im Hintergrund ertönen die Rufe von Türkistauben und Nachtschwalben. Es ist keine spektakuläre Safari im Sinne von Großwild in Nahaufnahme — aber eine stimmungsvolle, ruhige Begegnung mit einem funktionierenden Ökosystem.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125464168_l7rh.jpg"
                  alt="Ufervegetation im westlichen Uganda — Foto: Mark Suer"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Westliches Uganda: die Übergangszonen zwischen Wasserflächen und Akazienwald sind die produktivsten Vogelbeobachtungsgebiete. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Wandersafari: zu Fuss durch den Park</h3>
              <p>
                Die <a href="/walking-safari-uganda" className="text-jungle-700 hover:text-jungle-900 underline">Wandersafari</a> im Lake Mburo Nationalpark ist in Uganda eine Seltenheit. Die meisten Nationalparks des Landes erlauben Besuchern keine freie Bewegung zu Fuß im Parkinneren — aus naheliegenden Sicherheitsgründen. Im Lake Mburo ist das anders: In Begleitung eines bewaffneten Rangers können Besucher Strecken von ein bis mehreren Stunden zu Fuß zurücklegen. Das verändert die Qualität der Tierbeobachtung grundlegend.
              </p>
              <p>
                Zu Fuß nimmt man Geräusche wahr, die ein Fahrzeugmotor überlagert. Man bemerkt den Ruf eines Honiganzeiger-Vogels, den gedämpften Hufschlag einer Impala-Herde, das Knacken von trockenem Ast unter dem Gewicht eines Wasserbocks. Vögel, die Fahrzeuge meiden, nähern sich Menschen zu Fuß manchmal deutlich näher. Nektarvögel an blühenden Büschen, Wachteln und Frankoline im kurzen Gras, Hornvögel in den Akazienkronen — all das wird bei einer Wandersafari zugänglicher als vom Fahrzeugsitz aus.
              </p>
              <p>
                Zebras und Impalas — die Lake Mburo Nationalpark ist der einzige Park Ugandas, in dem beide Arten gleichzeitig vorkommen — lassen sich zu Fuß oft auf bemerkenswert kurze Distanz anpirschen, wenn man sich langsam und ohne abrupte Bewegungen bewegt. Der bewaffnete Ranger legt die Route fest und entscheidet, welche Situationen als sicher gelten. Das erfordert Vertrauen — und rechtfertigt es in der Regel vollständig.
              </p>
            </div>
          </section>

          {/* H2: Park als Korridor */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Lake Mburo als Korridor: Stellung im westlichen Uganda
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Wer die Nationalparks Ugandas auf einer Karte betrachtet, erkennt, dass der <a href="/nationalparks/lake_mburo" className="text-jungle-700 hover:text-jungle-900 underline">Lake Mburo Nationalpark</a> eine Brückenfunktion einnimmt. Er liegt zwischen dem Bwindi Impenetrable Forest im Süden, dem Queen Elizabeth Nationalpark im Westen und den nördlicheren Gebieten rund um Murchison Falls. Diese geografische Position macht ihn zu einem praktischen Etappenziel — aber auch zu einem ökologisch wichtigen Verbindungspunkt.
              </p>
              <p>
                Migratorische Vogelarten, die entlang des ostafrikanischen Zugsystems reisen, nutzen Feuchtgebiete wie den Lake Mburo als Raststätte. Die Zahlen im UWA-Monitoring — wie die 81 Weissflügel-Seeschwalben an einem einzelnen Standort — spiegeln diesen Aspekt wider. Solche Konzentrationen sind nicht dauerhaft; sie treten zu bestimmten Jahreszeiten auf, wenn die Zugbewegungen ihren Höhepunkt erreichen. Für Vogelbeobachter, die zum richtigen Zeitpunkt vor Ort sind, können diese Ereignisse außergewöhnlich produktiv sein.
              </p>
              <p>
                Die umliegende Landschaft außerhalb des Parks — Weideland, kleinbäuerliche Felder, gelegentliche Wälder — beeinflusst, welche Arten im Park vorkommen. Arten, die Waldränder und Agrarland nutzen, treten an den Parkgrenzen in Kombination mit echten Savannenvögeln auf. Diese Überlagerung erhöht die Gesamtartenzahl und macht den Park auch für Zähler interessant, die systematisch vorgehen.
              </p>
              <p>
                Bei meinen eigenen Durchreisen durch die Region war der Lake Mburo Nationalpark immer ein Ort, an dem ein kurzer Halt sich lohnte — auch wenn keine gezielte Vogelbeobachtungs-Session geplant war. Die Dichte der Begegnungen in kurzer Zeit ist bemerkenswert. Selbst bei einer zweistündigen Fahrt durch den Park auf dem Weg zu einem anderen Ziel zählt man ohne Anstrengung zwanzig bis dreißig Arten.
              </p>
            </div>
          </section>

          {/* H2: Praktische Tipps */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Praktische Hinweise fuer Vogelbeobachter
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Wer den Lake Mburo Nationalpark gezielt für Vogelbeobachtungen besucht, sollte ein paar grundlegende Punkte im Blick behalten. Die besten Zeiten für aktive Vögel sind früher Morgen — die erste bis zweite Stunde nach Sonnenaufgang — und der späte Nachmittag ab etwa 16 Uhr. In der Mittagshitze sind viele Arten inaktiv und schwer zu finden.
              </p>
              <p>
                Ein lokaler Guide, der mit den Sichtungsstandorten im Park vertraut ist, erhöht die Ausbeute erheblich. Das gilt besonders für Zielarten wie den Papyrus-Gelbsänger, der ohne ortskundige Führung kaum aufzustöbern ist. Die Uganda Wildlife Authority vermittelt zertifizierte Guides über die Parkgates. Ein guter Fernglas-Typ mit 8x42 oder 10x42 Optik ist Standardausrüstung; für Fotos reicht im Morgenlicht oft eine mittlere Teleobjektivlänge.
              </p>
              <p>
                Für die Bootssafari empfiehlt sich eine Buchung direkt bei Ankunft am Park, da die Abfahrtszeiten festgelegt sind und Plätze begrenzt sein können. Wer die Wandersafari machen möchte, sollte das ebenfalls frühzeitig klären — der bewaffnete Ranger muss verfügbar sein, und bestimmte Routen sind von der Tageszeit und den aktuellen Wildtierbewegungen abhängig.
              </p>
              <p>
                Zur Reisezeit: Der Lake Mburo Nationalpark ist das ganze Jahr zugänglich. In den Regenmonaten von März bis Mai und Oktober bis November kann das Gelände stellenweise unpassierbar werden, und einige Pirschpisten werden gesperrt. Für Wasservögel sind die Regenzeiten allerdings oft besonders ergiebig, weil das Wasserstand steigt und neue Feuchtgebiete erschlossen werden. [RECHERCHE NOETIG: Genaue Sperrung einzelner Strecken nach Starkregen, aktuelle Stand der Parkinfrastruktur]
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus dem Lake Mburo Nationalpark" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Haeufige Fragen zur Vogelbeobachtung im Lake Mburo Nationalpark
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
              Mehr zu Ugandas Vogelwelt und Nationalparks
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/nationalparks/lake_mburo', label: 'Lake Mburo Nationalpark: Überblick' },
                { href: '/walking-safari-uganda', label: 'Wandersafari in Uganda' },
                { href: '/boot-safari-uganda', label: 'Bootssafari in Uganda' },
                { href: '/tiere/schuhschnabel', label: 'Schuhschnabel in Uganda' },
                { href: '/vogelbeobachtung-uganda', label: 'Vogelbeobachtung in Uganda' },
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark' },
                { href: '/nationalparks/bwindi', label: 'Bwindi Impenetrable Forest' },
                { href: '/beste-reisezeit-uganda', label: 'Beste Reisezeit fuer Uganda' },
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
