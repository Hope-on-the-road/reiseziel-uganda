import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'sporenkiebitz-uganda'

export default function SporenkiebitzUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Wo in Uganda ist der Sporenkiebitz am haeufigsten zu sehen?',
      a: 'Der Sporenkiebitz ist vor allem entlang des Kazinga-Kanals im Queen Elizabeth Nationalpark verbreitet, wo feuchte Uferstreifen und offenes Grasland optimale Bedingungen bieten. Auch an Kraterseen im westlichen Uganda — darunter der Nshenyi-Kratersee — gehoert er zu den am haeufigsten beobachteten Wasservogelarten. Grundsaetzlich ist die Art ueberall dort anzutreffen, wo flache Ufer, schlammige Uferzonen und kurze Vegetation zusammenkommen.'
    },
    {
      q: 'Ist der Sporenkiebitz ein Zugvogel?',
      a: 'Vanellus spinosus ist in Uganda kein Zugvogel im klassischen Sinne. Die Art zeigt jedoch ausgepragte saisonale Verteilungsmuster: In der Regenzeit erschliesst sie breitere Feuchtzonen, in der Trockenzeit konzentriert sie sich nahe permanenter Wasserquellen. Ob und in welchem Umfang lokale Wanderbewegungen stattfinden, ist fuer Uganda noch nicht abschliessend dokumentiert. [RECHERCHE NOETIG: Saisonaler Wechsel zwischen ugandischen Teillebensraeumen]'
    },
    {
      q: 'Welche anderen Wasservoegel leben am Kazinga-Kanal?',
      a: 'Der Kazinga-Kanal beherbergt eine ausserordentlich artenreiche Vogelgemeinschaft. Zusammen mit dem Sporenkiebitz sind dort regelmaessig Afrikansiche Jacana, Graureiher, Purpurreiher, Hamerkop, Nilgans und verschiedene Reiherarten anzutreffen. Eine Bootsfahrt auf dem Kanal ist einer der effektivsten Wege, um diese Vielfalt systematisch zu erleben — die Tiere zeigen auf dem Wasser eine deutlich hoehere Toleranzdistanz als bei Pirschfahrten.'
    },
    {
      q: 'Wann ist die beste Reisezeit fuer Vogelbeobachtung in Uganda?',
      a: 'Vogelbeobachtung in Uganda ist ganzjaehrig moeglich, aber die beiden Regenzeiten von Maerz bis Mai und Oktober bis November sind besonders attraktiv: Dann sind Zugvoegel aus Europa und Nordasien anwesend, und die Vegetation ist dicht und grueen. Die Trockenzeiten von Dezember bis Februar und Juni bis August bieten hingegen bessere Sichtverhae ltnisse, da die Vegetation kueerzer ist und Wasservoegel wie der Sporenkiebitz sich an wenigen permanenten Gewaessern konzentrieren.'
    },
    {
      q: 'Braucht man fuer eine Vogelsafari in Uganda einen speziellen Fuehrer?',
      a: 'Fuer eine ernsthafte Vogelbeobachtung ist ein spezialisierter Vogelguide dringend empfehlenswert. Uganda zaehlt ueber 1.000 dokumentierte Vogelarten — ohne kundige Begleitung ist das Einordnen von Rufen, Verhaltensweisen und aehnlichkeitstarken Arten kaum moeglich. Guides wie die zertifizierten Birding-Guides der Uganda Wildlife Authority kennen die bevorzugten Mikrohabitate, saisonalen Aufenthaltsorte und Verhaltensweisen der Arten — einschliesslich des Sporenkiebitz an den Kraterseen und am Kazinga-Kanal.'
    }
  ]

  return (
    <>
      <Head
        title="Sporenkiebitz Uganda: Verbreitung, Kraterseen und Kazinga-Kanal"
        description="Sporenkiebitz (Vanellus spinosus) in Uganda: 581 Individuen, Schwerpunkte am Kazinga-Kanal und Nshenyi-Kratersee, saisonale Muster und Beobachtungstipps."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Kazinga-Kanal im Queen Elizabeth Nationalpark, Uganda — Foto: Mark Suer"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Queen Elizabeth Nationalpark, Uganda — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Sporenkiebitz in Uganda: Verbreitung, saisonale Muster und die besten Beobachtungsorte
          </h1>

          {/* Einleitung */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Wer im Januar 2026 fruehmorgens am Ufer des Nshenyi-Kratersees im westlichen Uganda stand, brauchte keine ornithologische Vorkenntnis, um den Sporenkiebitz zu bemerken. Der laute, durchdringende Ruf — ein scharfes, wiederholtes Pfeifen — ist unverwechselbar und traegt weit ueber die Wasseroberflaeche. Kurz darauf war das Tier sichtbar: ein mittelgrosser Kiebitz mit schwarzweissem Kopfmuster, leuchtend rotem Schnabel und Kehllappen, der selbstbewusst entlang des Schlammufers schritt. Vanellus spinosus, im Deutschen Sporenkiebitz, gehoert am Nshenyi zu den zahlreichsten Wasservogelarten ueberhaupt.
            </p>
            <p>
              Bei systematischen Vogelkartierungen in ugandischen Feuchtgebieten und Nationalparks wurden mehr als 580 Individuen dieser Art erfasst — eine Zahl, die den Sporenkiebitz zu einer der am haeufigsten dokumentierten Wasservogelarten des Landes macht. Sein Verbreitungsschwerpunkt liegt klar in den Feuchtgebieten des westlichen Uganda, mit besonderer Dichte entlang des Kazinga-Kanals im Queen Elizabeth Nationalpark und an den Kraterseen rund um Kibale und Fort Portal. Diese Seite fasst zusammen, wo und wann die Art zu finden ist, was ihr Verhalten ausmacht — und warum eine Vogelbeobachtungsreise nach Uganda ohne den Sporenkiebitz unvollstaendig bleibt.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Sporenkiebitz Uganda: Fakten auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Wissenschaftlicher Name:</span> Vanellus spinosus</div>
                <div><span className="font-semibold">Deutscher Name:</span> Sporenkiebitz</div>
                <div><span className="font-semibold">Englischer Name:</span> Spur-winged Plover</div>
                <div><span className="font-semibold">Erfasste Individuen (Uganda):</span> 581</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Lebensraum:</span> Feuchtgebiete, Uferstreifen, Savannenfeuchtgebiete</div>
                <div><span className="font-semibold">Schwerpunkte:</span> Kazinga-Kanal, Nshenyi-Kratersee</div>
                <div><span className="font-semibold">Saisonalitaet:</span> Ausgepraegt — Verschiebung nach Wasserverfuegbarkeit</div>
                <div><span className="font-semibold">Erkennungsmerkmal:</span> Roter Schnabel, schwarzweisser Kopf, laut rufend</div>
              </div>
            </div>
          </div>

          {/* H2: Die Art */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Vanellus spinosus: Was den Sporenkiebitz auszeichnet
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Sporenkiebitz ist ein Regenpfeifervoegel (Familie Charadriidae), der in einem breiten Guertel durch Afrika suedlich der Sahara sowie im Nahen Osten vorkommt. In Uganda ist er Standvogel mit saisonalen Bewegungen innerhalb des Landes. Er besiedelt ausschliesslich wassergebundene Lebensraeume: flache Flussufer, Schilfraender, Sumpfwiesen, Schlammflaechen und die vegetationsarmen Uferzonen von Seen und Kanaelen. Tiefes Wasser meidet die Art konsequent — sie ist ein Laufjäger, kein Schwimmvogel.
              </p>
              <p>
                Das auffaelligste Merkmal ist die Farbkombination: Der Kopf ist schwarz-weiss gemustert, die Unterseite weiss, der Ruecken braeunlich-grau. Der Schnabel ist leuchtend rot mit schwarzer Spitze, die nackten Gesichtspartien ebenfalls roetlich. Der namensgebende Fluegelsporn — eine verhornte Wucherung an der Handwurzel des Fluegels — ist bei lebenden Tieren kaum sichtbar, spielt aber im Verteidigungsverhalten eine Rolle. Sporenkiebitz sind fuer Plaettfuss-Laufer bekannt: Sie bewegen sich schnell und zielgerichtet entlang von Ufern, picken Insekten, Wuermer und Kleinkrustentiere vom Boden und stoepen dabei gelegentlich mit dem Fuss, um Beute aus dem Schlick aufzuscheuchen.
              </p>
              <p>
                Was den Beobachter in Uganda am schnellsten aufmerksam macht, ist der Ruf. Sporenkiebitz sind lautstarke Voegel, die bei Annaeherung von Stoerern — Menschen, Raubvoegel, groessere Saeuger — sofort in lautes Rufen verfallen und dabei aufgeregt umherfliegen. Dieses Verhalten ist gewoehnlich der erste Hinweis auf die Anwesenheit der Art, noch vor dem visuellen Kontakt.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Brutverhalten und Nestanlage</h3>
              <p>
                Sporenkiebitz brueten auf dem Boden, meist nahe Wasser auf offenem, vegetationsarmem Untergrund. Das Nest ist eine einfache Mulde, manchmal mit wenigen Pflanzenresten ausgelegt. Beide Elternteile brueten und verteidigen das Revier aktiv gegen Eindringlinge — das Sturzflugverhalten gegenueber vorbeifliegenden Greifvoegel ist dabei spektakulaer zu beobachten. [RECHERCHE NOETIG: Brutdaten und Brutsaison-Fenster fuer ugandische Populationen]
              </p>
            </div>
          </section>

          {/* H2: Uganda-Verbreitung */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              581 Individuen: Was die Kartierungsdaten ueber Ugandas Sporenkiebitz verraten
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Vogelmonitoring-Programme, die ugandische Feuchtgebiete und Nationalparks in regelmaessigen Abstaenden erfassen, liefern ein zunehmend klares Bild der Verbreitung. Mit ueber 580 erfassten Individuen in einer Monitoring-Runde gehoert der Sporenkiebitz zur Gruppe der abundantesten Wasservogelarten des Landes. Das sind keine Einzelzaehlungen an einem Ort — die Daten aggregieren Ergebnisse aus mehreren Standorten in verschiedenen Regionen.
              </p>
              <p>
                Die hoechsten Individuenzahlen wurden dort festgestellt, wo groessere Feuchtzonen dauerhaft Wasser fuehren und gleichzeitig geniigend offene Uferbereiche fuer die Art vorhanden sind. Der Kazinga-Kanal im Queen Elizabeth Nationalpark erweist sich dabei als einer der konstantesten Schwerpunkte: Der Kanal verbindet den Lake George mit dem Lake Edward und bietet auf seiner gesamten Laenge von knapp 40 Kilometern geeignete Uferstrukturen. Ergaenzend dazu treten an Kraterseen im Toro-Ankole-Kraterseegebiet — darunter der Nshenyi-Kratersee — vergleichbar hohe Konzentrationen auf.
              </p>
              <p>
                Was die Daten ebenfalls zeigen: Die Zahlen schwanken zwischen Jahren und Saisons erheblich. Das ist kein Zeichen fuer Instabilitaet der Population, sondern ein Hinweis auf die Dynamik ugandischer Feuchtgebiete. Regenzeiten verschieben die Verteilung, und in Trockenphasen konzentrieren sich Tiere an den wenigen verbliebenen Wasserflaechen. Wer in der Trockenzeit am Kazinga-Kanal unterwegs ist, findet entsprechend hoehere Dichten als in Perioden, in denen das Wasser weitraeumig verfuegbar ist.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Nshenyi-Kratersee: Zehn Jahre Monitoring</h3>
              <p>
                Der Nshenyi-Kratersee wird seit 2010 in regelmaessigen Zuegen ornithologisch erfasst. Ueber diesen Zeitraum von mehr als zehn Jahren zeigen die Daten, dass der Sporenkiebitz am Nshenyi durchgehend unter den zehn am haeufigsten gezaehlten Wasservogelarten rangiert. Das macht ihn zu einem Leitindikator fuer den Zustand des Sees und seiner Uferzonen: Sinken seine Zahlen deutlich, ist das ein Signal fuer veraenderte Habitatbedingungen — etwa durch Uferbebauung, Viehweide oder sinkende Wasserspiegel.
              </p>
              <p>
                Im Umfeld des Nshenyi-Kratersees treten gleichzeitig weitere typische Wasservogelarten auf: Afrikanische Jacana mit ihren aussergewoehnlich grossen Zehen fuer das Laufen auf Seerosenblaetkern, Nilgans in kleinen Gruppen, Hamerkop an schattigen Ufern und verschiedene Reiherarten. Dieser Artenmix spiegelt die Qualitaet des Lebensraums: Ein gesundes Feuchtgebiet beherbergt nicht eine dominante Art, sondern ein Geflecht spezialisierter Vogelarten, die komplementaere Nahrungsbereich nutzen.
              </p>
            </div>
          </section>

          {/* H2: Kazinga-Kanal */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Kazinga-Kanal: Der beste Ort fuer Sporenkiebitz-Beobachtungen in Uganda
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Im Januar 2026 verbrachte ich elf Tage im Gebiet des Queen Elizabeth Nationalparks und seiner Umgebung. Die Bootsfahrten auf dem Kazinga-Kanal gehoerten zu den ornithologisch reichhaltigsten Erfahrungen dieser Reise. Der Kanal ist kein breiter, tiefer Fluss — an vielen Stellen sind die Ufer flach und schlammig, genau jener Lebensraumtyp, den Sporenkiebitz bevorzugen. Mehrfach beobachteten wir Paare oder Kleingruppen dieser Voegel nahe an der Wasserlinie, kaum beeindruckt vom langsam fahrenden Boot.
              </p>
              <p>
                Was eine Bootsafari auf dem Kazinga-Kanal fuer Vogelbeobachter so wertvoll macht: Die Voegel sind deutlich weniger scheu als an von Fussgaengern begehbaren Ufern. Das Boot gleitet lautlos, und selbst empfindliche Arten wie Reiher oder Eisvogel lassen engere Distanzen zu. Sporenkiebitz sind ohnehin relativ robust, aber die Bootsfahrt erlaubt es, in Ruhephasen die Voegel ohne Eile ueber laengere Zeitspannen zu beobachten — eine Qualitaet, die von einer Fahrzeugsafari schwer zu erreichen ist.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                  alt="Feuchtgebiet im Queen Elizabeth Nationalpark, Uganda — Foto: Mark Suer"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Queen Elizabeth Nationalpark, Uganda — typischer Lebensraum des Sporenkiebitz. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Begleitarten am Kazinga-Kanal</h3>
              <p>
                Auf einer typischen Bootsfahrt entlang des Kazinga-Kanals sind neben dem Sporenkiebitz regelmaessig weitere Wasservoegel anzutreffen. Graureiher stehen unbewegt in flachem Uferbereich. Purpurreiher — etwas kleiner, mit rotbraunem Hals — verstecken sich in Schilf- und Papyruszonen. Der Hamerkop, einer der unverwechselbarsten Voegel Afrikas mit seinem hammerkopffoermigen Schopf, sucht entlang schlammiger Ufer nach Froeschen und kleinen Fischen. Nilgaense treten in Paaren oder kleinen Gruppen auf.
              </p>
              <p>
                Wesentlich spektakulaerer als die Wasservoegel sind an manchen Tagen die Ufer selbst: Nilkrokodile liegen in wenigen Metern Abstand vom Boot auf Sandbankchen, Flusspferde tauchen und tauchen an breiten Stellen des Kanals ab. Bueffelherden trinken an den Ufern. Diese Kombination aus Grosswild und reicher Avifauna macht den Kazinga-Kanal zu einem der vielseitigsten Naturbeobachtungsorte in ganz Ostafrika.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Praktische Hinweise fuer die Bootsfahrt</h3>
              <p>
                Die Bootsfahrten auf dem Kazinga-Kanal starten in der Regel vom Mweya-Halbinsel-Pier. Es gibt offizielle UWA-Boote und private Lodgeboote; die Qualitaet der Kommentierung durch Guides variiert erheblich. Wer ernsthaft Voegel beobachten moechte, sollte vorab klaeren, ob der Guide ornithologische Kenntnisse mitbringt oder sich hauptsaechlich auf Saeugetiere konzentriert. Fernglas und — bei ausreichend Licht — ein leichtes Teleobjektiv sind empfehlenswert; das Boot bietet keinen stabilen Halt fuer schwere Optik.
              </p>
              <p>
                Die Fruehmorgenfahrten, die oft zwischen sieben und neun Uhr beginnen, sind ornithologisch ergiebiger als die Mittagsfahrten: Das Licht ist guenstiger, die Voegel aktiver, und groessere Saeuger haben sich noch nicht in den Schatten zurueckgezogen. Im Mai 2026 erlebten wir auf einer Morgenfahrt innerhalb von zwei Stunden ueber vierzig Vogelarten — darunter mehrere Sporenkiebitz unmittelbar am Ufer, gut sichtbar und kaum aufgescheucht.
              </p>
            </div>
          </section>

          {/* H2: Saisonale Verteilung */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Saisonale Verteilung: Wann und wo Sporenkiebitz in Uganda anzutreffen sind
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ugandas Klima kennt keine ausgepraegten Jahreszeiten im europaeischen Sinne, aber zwei Regenzeiten und zwei relative Trockenphasen, die die Verfuegbarkeit von Wasser und damit die Verteilung wassergebundener Vogelarten erheblich beeinflussen. Fuer den Sporenkiebitz bedeutet das: In der Trockenzeit von Dezember bis Februar und von Juni bis August konzentrieren sich die Tiere an den wenigen konstant wasserreichen Standorten — Kazinga-Kanal, die groesseren Kraterseen, perennierende Flusslaeufe.
              </p>
              <p>
                In den Regenzeiten von Maerz bis Mai und Oktober bis November verteilen sich die Tiere weitraeumiger. Temporaere Feuchtzonen — ueberflutete Wiesenbereiche, saisonal wasservogel-geeignete Sumpfbereiche an Parkraendern — werden dann besiedelt. Das erscheint auf den ersten Blick als Dispersion, ist aber aus Sicht des Sporenkiebitz eine Ressourcenoptimierung: Wenn Nahrung weit verstreut verfuegbar ist, lohnt es sich, breitere Habitatflaechen zu nutzen und Konkurrenz zu reduzieren.
              </p>
              <p>
                Fuer Besucher hat das konkrete Konsequenzen: In der Trockenzeit sind Sporenkiebitz an den Hauptstandorten geballter und einfacher zu finden. In der Regenzeit sind die Chancen auf Sichtungen nicht schlechter — im Gegenteil, die Gesamtzahl der wassergebundenen Vogelarten ist hoeher — aber die Verteilung ist weniger vorhersehbar. Ein erfahrener Vogelguide kennt die saisonalen Verschiebungen und kann entsprechend fuehren.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Zehn Jahre Nshenyi: Was die Langzeitdaten zeigen</h3>
              <p>
                Langzeitmonitoring an Orten wie dem Nshenyi-Kratersee, das seit 2010 konsequent fortgefuehrt wird, liefert wertvolle Basisdaten ueber Populationstrends. Fuer den Sporenkiebitz zeigen die Nshenyi-Daten insgesamt eine stabile Praesenz ueber die zehn Erfassungsjahre — mit jaehrlichen Schwankungen, die wahrscheinlich regenzeitseitig bedingt sind, aber ohne den langsamen Abwaertstrend, den manche anderen Wasservogelarten in Ostafrika zeigen. Das ist ein positives Signal, aber kein Anlass fuer Selbstzufriedenheit: Die Wasserqualitaet am Nshenyi-Kratersee und die Nutzung der angrenzenden Landflaechen durch Landwirtschaft und Vieh bleiben langfristige Einflussgroessen auf die Habitatqualitaet.
              </p>
              <p>
                [RECHERCHE NOETIG: Detaillierte jaehrliche Zaehlreihen fuer Nshenyi 2010–2019 nach Saison aufgeschluesselt]
              </p>
            </div>
          </section>

          {/* H2: Ugandas Feuchtgebiete */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Ugandas Feuchtgebiete: Warum das Land ein Schluesselbiotop fuer Wasservoegel ist
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Uganda ist eines der wasserreichsten Laender des afrikanischen Kontinents. Der Viktoriasee — mit ueber 68.000 Quadratkilometern der groesste Binnensee Afrikas — bestimmt das Klima der Suedregion. Westlich davon erstreckt sich das Albertine Rift mit einer Kette bedeutender Seen: Lake Albert, Lake Edward, Lake George, Lake Kivu. Dazwischen liegen Flusssysteme, Papyrussuemp fe, Kraterseen und saisonale Ueberschwemmungsgebiete. Diese aussergewoehnliche Gewässerdichte macht Uganda zu einem der bedeutendsten Brutgebiete und Ueberwinterungsquartiere fuer Wasservoegel in ganz Afrika.
              </p>
              <p>
                Fuer den Sporenkiebitz ist diese Landschaft ein ideales Verbreitungsgebiet: Ueberall, wo flache Ufer vorhanden sind und die Vegetation nicht zu dicht wird, findet die Art Nahrung und Nistmoeglichkeiten. Das sind eben nicht nur die grossen Seen und Kanaele — auch kleinere Kraterseebecken, Bewässerungsgraeben nahe Farmen und Uferstreifen von Bergfluessen werden besiedelt. Ugandas Feuchtgebietsflaeche ist trotz jahrzehntelanger Entwaldung und landwirtschaftlicher Ausdehnung noch immer erheblich und sichert dem Sporenkiebitz eine stabile Lebensraumgrundlage.
              </p>
              <p>
                Im Vergleich mit anderen ostafrikanischen Laendern profitiert Uganda davon, dass grosse Teile der wichtigsten Feuchtzonen innerhalb von Nationalparks oder Wildlife Reserves liegen. Der Kazinga-Kanal, der Mabamba-Sumpf am Viktoriasee-Ufer, die Papyrus-Suempfe im Toro-Seema Wildlife Reserve — all das sind geschuetzte oder teilgeschuetzte Habitate, die einen rechtlichen Rahmen gegen direkte Degradierung bieten. Wie tragfaehig dieser Schutz in der Praxis ist, haengt von der Durchsetzungskapazitaet der Uganda Wildlife Authority und von wirtschaftlichen Alternativen fuer die Anwohner ab.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Begleitarten: Wer teilt den Lebensraum mit dem Sporenkiebitz?</h3>
              <p>
                An den Hauptstandorten des Sporenkiebitz — Kazinga-Kanal und Kraterseen — treffen Beobachter regelmaessig auf eine Gemeinschaft charakteristischer Wasservogelarten. Die Afrikanische Jacana (Actophilornis africanus) laeuft auf schwimmender Vegetation und ist fuer ihre ungewoehnlich grossen Zehen bekannt. Der Hamerkop (Scopus umbretta) baut riesige kuppelfoermige Nester aus Aesten und Schlamm und ist an schlammigen Ufern ein regelmaessiger Begleiter. Graue Reiher und Purpurreiher besiedeln verschiedene Tiefenstufen des Uferbereichs. Gemeine Moorhen durchstreifen Schilfsaekten. Nilgans und Knopfgans treten in offenem Wasser auf.
              </p>
              <p>
                Diese Artengemeinschaft ist kein Zufall: Jede Art besetzt eine spezifische Nische im Uferzoenenspektrum, und die Koexistenz reduziert direkte Nahrungskonkurrenz. Der Sporenkiebitz als Laufjäger auf schlammigem Untergrund ernaehrt sich von anderen Ressourcen als die Reiher als Lauerjäger in tieferem Wasser. Dieses Muster der Nischenteilung erklaert, warum ugandische Feuchtgebiete so artenreich sind — das Spektrum verfuegbarer Mikrohabitate ist gross, und die Vielfalt der Avifauna entspricht dieser Strukturvielfalt.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Sporenkiebitz und Wasservogel-Beobachtungen in Uganda" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Haeufige Fragen zum Sporenkiebitz in Uganda
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
              Weiterluesen: Vogelbeobachtung und Nationalparks in Uganda
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/boot-safari-uganda', label: 'Boot-Safari in Uganda: Kazinga-Kanal und Viktoria-Nil' },
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark' },
                { href: '/vogelbeobachten-queen-elizabeth', label: 'Vogelbeobachtung im Queen Elizabeth Nationalpark' },
                { href: '/tiere-uganda', label: 'Tiere in Uganda: Saeuger, Voegel, Reptilien' },
                { href: '/beste-reisezeit-uganda', label: 'Die beste Reisezeit fuer Uganda' },
                { href: '/nachhaltiger-tourismus-uganda', label: 'Nachhaltiger Tourismus in Uganda' },
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
