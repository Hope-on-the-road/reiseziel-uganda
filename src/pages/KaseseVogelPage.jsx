import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'kasese-vogelbeobachtung'

export default function KaseseVogelPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Welche endemischen Vogelarten sind rund um Kasese zu sehen?',
      antwort: 'Die Region um Kasese und die Rwenzori-Ausläufer beherbergt mehrere Endemiten des Albertine Grabens. Der Rwenzori-Turako ist eine der auffälligsten Arten — ein großer, farbenprächtiger Turako, der ausschließlich in den Bergwäldern dieser Region vorkommt. Der Afrikanische Grünbreitschnabel ist auf die Rwenzori-Bergwälder spezialisiert und gilt als einer der begehrtesten Vögel für Spezialisten. Dazu kommen verschiedene Sunbird-Arten, die in den montanen Übergangs­zonen zwischen Tiefland und Bergwald anzutreffen sind. Die genaue Artenverteilung in den einzelnen Höhenzonen [RECHERCHE NOETIG].'
    },
    {
      frage: 'Was ist das Kasese Woods Monitoring-Gebiet und warum ist es für Vogelbeobachter relevant?',
      antwort: 'Kasese Woods ist ein systematisch erfasstes Monitoringgebiet innerhalb des Queen Elizabeth Nationalparks. Es liegt im Kasese-Sektor des Parks und wurde in Vogelzählungen als der Standort mit den meisten Arten von Schutzbedenken (Conservation Concern) dokumentiert — mehr als an jedem anderen vergleichbaren Monitoring-Punkt im Park. Diese Konzentration seltener und schutzbedürftiger Arten macht das Gebiet für gezielte Vogelbeobachtung besonders interessant. Für Besucher ist es sinnvoll, diesen Bereich explizit in die Routenplanung einzubeziehen, da er sich vom stärker besuchten Mweya-Bereich deutlich unterscheidet.'
    },
    {
      frage: 'Kann man Vogelbeobachtung im Mobuku-Tal mit Rwenzori-Trekking verbinden?',
      antwort: 'Ja — das Mobuku-Tal verläuft entlang der südlichen Flanke der Rwenzori Mountains in der Nähe von Kasese und ist sowohl als Trekkingzugang als auch als Vogelbeobachtungsgebiet nutzbar. Die Kombination lohnt sich: Wer das Tal zu Fuß erkundet, passiert verschiedene Höhenzonen und damit unterschiedliche Vogellebensräume. Montane Arten in den oberen Lagen, Übergangszonenvögel auf mittlerer Höhe und tieflandnahe Arten am Talausgang. Geführte Tagestouren mit ausdrücklichem Vogelbeobachtungsfokus sind über Trekking-Anbieter in Kasese buchbar — wer das Vogel­programm ernst nimmt, sollte frühzeitig kommunizieren, dass Ornithologie Priorität hat.'
    },
    {
      frage: 'Welche Vogelarten sind am Kazinga-Kanal zu sehen?',
      antwort: 'Der Kazinga-Kanal verbindet den Edward-See mit dem George-See und ist eines der bekanntesten Vogelbeobachtungsgebiete im Queen Elizabeth Nationalpark. Bootsfahrten auf dem Kanal ermöglichen Nahbeobachtungen von Pelikanen, verschiedenen Kormoranarten, Reiherarten und dem Afrikanischen Schreiseeadler. Am Ufer sind Flusspferde und Wasserbüffel häufig — und wo Großtiere ans Wasser kommen, folgen Vögel. Der Kazinga-Kanal-Monitoring-Punkt zählte in systematischen Erfassungen 18 Arten von Schutzbedenken, was ihn zu einem der artenreichsten Streckenabschnitte im Park macht.'
    },
    {
      frage: 'Wie weit ist Kasese von anderen wichtigen Vogelbeobachtungsgebieten in Uganda entfernt?',
      antwort: 'Kasese liegt verkehrsgünstig zwischen mehreren bedeutenden Vogelgebieten. Fort Portal — selbst ein guter Ausgangspunkt für Vogelbeobachtung an Kraterseen und mit Zugang zum Kibale Nationalpark — liegt rund 30 Kilometer entfernt. Von Kasese aus ist der Semuliki Nationalpark mit seinem tiefländischen Regenwald und über 400 dokumentierten Vogelarten erreichbar. In südlicher Richtung beginnt der Queen Elizabeth Nationalpark unmittelbar vor der Stadt. Diese Zentrallage macht Kasese zu einem effizienten Stützpunkt für mehrtägige Vogelbeobachtungstouren durch Südwestuganda, ohne täglich lange Transferstrecken zurücklegen zu müssen.'
    }
  ]

  return (
    <>
      <Head
        title="Vogelbeobachtung Kasese: Rwenzori, Queen Elizabeth NP und Semuliki"
        description="Vogelbeobachtung rund um Kasese: Rwenzori-Endemiten, Kasese Woods mit 21 Schutzarten, Kazinga-Kanal, Mobuku-Tal und Zugang zum Semuliki Nationalpark."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
            alt="Landschaft bei Kasese mit Blick auf die Rwenzori Mountains, Uganda — Foto: Mark Suer"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Südwestuganda bei Kasese — Übergangszone zwischen Tiefland und Rwenzori-Bergwald. Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Vogelbeobachtung rund um Kasese: Rwenzori-Endemiten, Queen Elizabeth Nationalpark und Mobuku-Tal
          </h1>

          {/* Eroeffnungs-Hook */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Kasese ist eine Marktstadt im Westen Ugandas, die die meisten Besucher als Durchgangsstation betrachten — auf dem Weg zu den Gorillas in Bwindi, zum Gorilla-Trekking in den Nationalparks oder als ersten Halt nach der Ankunft am kleinen Kasese-Flugplatz. Wer den Blick etwas länger auf die Landschaft rund um die Stadt richtet, erkennt, dass dieser Ort mehr ist als ein logistischer Knotenpunkt.
            </p>
            <p>
              Im Westen beginnen die Ausläufer der Rwenzori Mountains — das Gebirgsmassiv, das von den ersten arabischen Händlern als Mondberge beschrieben wurde und das noch heute zu den feuchtesten und artenreichsten Bergregionen Afrikas zählt. Im Süden liegt der Queen Elizabeth Nationalpark, einer der wenigen Orte auf dem Kontinent, wo Savanne, Feuchtgebiet und Bergwald auf engem Raum zusammentreffen. Und keine Tagesreise entfernt liegt der Semuliki Nationalpark mit seinem tiefländischen Kongolesischen Regenwald — einem Lebensraum, der in Uganda nur hier vorkommt und der Vogelarten beherbergt, die sonst nirgendwo im Land zu finden sind.
            </p>
            <p>
              Für Vogelbeobachter ist Kasese damit einer der interessantesten Ausgangspunkte in ganz Uganda. Die Kombination aus Hochgebirge, Tieflandwald und großem Savannen-Nationalpark erzeugt eine Artenvielfalt, die kaum ein anderer Ort in ähnlicher Dichte ermöglicht.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Vogelbeobachtung Kasese: Auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Lage:</span> Westuganda, Grenze zu DRC, Fuß der Rwenzoris</div>
                <div><span className="font-semibold">Kasese Woods:</span> 21 Arten mit Schutzbedenken — meiste im QE NP</div>
                <div><span className="font-semibold">Queen Elizabeth NP:</span> Kasese-Sektor, Kazinga-Kanal (18 CC-Arten)</div>
                <div><span className="font-semibold">Rwenzori-Endemiten:</span> Rwenzori-Turako, Afrikanischer Grünbreitschnabel</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Semuliki NP:</span> 400+ Arten, tiefländischer Regenwald</div>
                <div><span className="font-semibold">Mobuku-Tal:</span> Wanderrouten, montane Übergangszone</div>
                <div><span className="font-semibold">Fort Portal:</span> ca. 30 km, Kraterseen, Kibale-Zugang</div>
                <div><span className="font-semibold">Eigene Besuche:</span> 14 dokumentierte Uganda-Aufenthalte, 65 Tage</div>
              </div>
            </div>
          </div>

          {/* H2: Queen Elizabeth NP Kasese-Sektor */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Queen Elizabeth Nationalpark: Der Kasese-Sektor mit den meisten Schutzarten
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der <a href="/nationalparks/queen_elizabeth" className="text-jungle-700 hover:text-jungle-900 underline">Queen Elizabeth Nationalpark</a> erstreckt sich von der Kasese-Region im Norden bis hinunter zum Ishasha-Sektor an der kongolesischen Grenze. Der Park ist vor allem für Löwen bekannt, die in der Ishasha-Region gelegentlich in Bäumen sitzen, und für die Bootstouren auf dem Kazinga-Kanal. Was weniger bekannt ist: Im systematischen Vogelmonitoring schneidet der Kasese-Sektor des Parks besser ab als alle anderen untersuchten Bereiche.
              </p>
              <p>
                In einer umfassenden Vogelerfassung im Südwestuganda-Raum wurden verschiedene Monitoring-Punkte innerhalb des Queen Elizabeth Nationalparks miteinander verglichen. Das Ergebnis: Kasese Woods verzeichnete mit 21 Vogelarten, die als conservation concern — also mit ernsthaftem Schutzbedarf eingestuft sind — die höchste Dichte unter allen verglichenen Standorten. Der Channel Track entlang des Kazinga-Kanals folgte mit 18 solcher Arten, Kamulikwezi mit 12, die Mweya-Halbinsel mit 7.
              </p>
              <p>
                Diese Zahlen haben praktische Konsequenzen für Vogelbeobachter: Die Mweya-Halbinsel ist der touristisch am stärksten erschlossene Teil des Parks — mit Lodge-Komplex, Bootsanleger und dichtem Fahrzeugverkehr bei den Pirschfahrten. Wer ausschließlich Mweya besucht, sieht viele Tiere, aber nur einen Bruchteil der ornithologisch bedeutsamen Artenvielfalt. Kasese Woods und die Zugangswege im nördlichen Parksektor sind deutlich ruhiger und bieten andere, teils seltenere Arten.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kazinga-Kanal: Bootsfahrt als Beobachtungsformat</h3>
              <p>
                Der Kazinga-Kanal verbindet den Edward-See mit dem George-See und ist eines der produktivsten Vogelbeobachtungsgebiete im gesamten Park. Die zweistündige Bootsfahrt, die regelmäßig ab Mweya angeboten wird, ermöglicht Nahbeobachtungen, die zu Lande kaum möglich wären. Pelikane, Kormorane und verschiedene Reiherarten sitzen in großer Zahl an den flachen Uferbänken. Der Afrikanische Schreiseeadler ist an den Ufergehölzen eine verlässliche Erscheinung.
              </p>
              <p>
                Was die Bootsfahrt zusätzlich interessant macht: Flusspferde, Wasserbüffel und gelegentlich Krokodile kommen ans Wasser — und mit ihnen Vögel, die auf Parasiten oder Futterreste spezialisiert sind. Während meiner Besuche am Kazinga-Kanal habe ich mehrfach erlebt, wie ein Schreiseeadler einen Fisch direkt vor dem Bug des Bootes aus der Wasseroberfläche griff — eine der einprägsamsten Szenen, die Uganda zu bieten hat.
              </p>
              <p>
                Für einen vollständigen Eindruck des Kasese-Sektors empfiehlt sich die Kombination aus Pirschfahrt am frühen Morgen im Kasese-Woods-Bereich und anschließender Bootsfahrt auf dem Kanal. Diese Reihenfolge maximiert die Artenvielfalt und unterscheidet sich deutlich von einem reinen Mweya-Aufenthalt.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Großer Blautuko: Signalart des Waldes</h3>
              <p>
                Der Große Blauturako ist einer der spektakulärsten Vögel Ugandas — und er ist im Kasese-Bereich präsent. Mit über 70 Zentimetern Körperlänge, dem leuchtend blauen Gefieder und dem ausgeprägten Federbusch ist er unverkennbar. Er bewohnt Waldgebiete und dichte Baumbestände, bevorzugt Feigenfrüchte und andere Früchte und bewegt sich oft in kleinen Gruppen durch das Kronendach.
              </p>
              <p>
                In den Waldbeständen rund um Kasese und an den Waldrändern des Queen-Elizabeth-Sektors sind Sichtungen möglich, wenn man früh genug aufbricht und die richtigen Bereiche aufsucht. Der Vogel ist laut — sein tiefes, rollend-gurgelndes Rufen ist weithin zu hören — und damit oft zu lokalisieren, bevor man ihn sieht. Wer einen lokalen Vogelführer engagiert, verbessert die Chancen erheblich, da die Schlafbäume und Tagesreviere bekannter Gruppen oft ortskundig kartiert sind.
              </p>
            </div>
          </section>

          {/* H2: Rwenzori-Ausläufer und Mobuku-Tal */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Rwenzori-Ausläufer und Mobuku-Tal: Endemiten auf dem Weg ins Gebirge
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die Rwenzori Mountains ragen westlich von Kasese auf bis zu 5.109 Meter über dem Meeresspiegel — eine der höchsten Bergketten Afrikas und eine der feuchtesten. Diese Feuchtigkeit erzeugt eine außergewöhnliche Vielfalt an Waldlebensräumen, die von den Vorberghängen bis zur subalpinen Zone unterschiedlichste Vogelgemeinschaften beherbergen.
              </p>
              <p>
                Für das <a href="/rwenzori-trekking" className="text-jungle-700 hover:text-jungle-900 underline">Rwenzori-Trekking</a> ist das Mobuku-Tal der klassische Zugang. Das Tal verläuft entlang der südlichen Flanke des Massivs und bietet auf den ersten Stunden des Aufstiegs eine Lebensraumvielfalt, die für Vogelbeobachter außerordentlich lohnend ist: Montane Waldrandbereiche, Buschvegetation in den Übergangszonen und die feuchten Waldabschnitte der mittleren Höhenlagen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Rwenzori-Turako: Endemit der Bergwälder</h3>
              <p>
                Der Rwenzori-Turako ist einer der am stärksten auf dieses Massiv spezialisierten Vögel überhaupt — sein wissenschaftlicher Name Ruwenzorornis johnstoni verweist direkt auf das Rwenzori-Gebirge als Typusgebiet. Er bewohnt die montanen Waldgürtel zwischen etwa 1.800 und 3.000 Metern und ist damit in den Vorberghängen rund um Kasese und im unteren Mobuku-Tal präsent.
              </p>
              <p>
                Der Rwenzori-Turako ist deutlich kleiner als der Große Blauturako, aber nicht weniger auffällig. Sein Gefieder zeigt ein Muster aus Grün, Blau und Weiß mit charakteristischem rotem Flügelfleck. Er bewegt sich bevorzugt im dichten Unterwuchs und in mittleren Baumhöhen, was Sichtungen anspruchsvoll macht — aber auch die Arbeit mit einem erfahrenen Vogelführer besonders wertvoll.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Afrikanischer Grünbreitschnabel: Rarität des Albertine Grabens</h3>
              <p>
                Der Afrikanische Grünbreitschnabel gehört zu den begehrtesten Zielarten für spezialisierte Vogelbeobachter im Albertine Graben. Er ist auf die Bergwälder der Rwenzori-Region spezialisiert und hat ein sehr begrenztes Verbreitungsgebiet — was ihn zu einer Schlüsselart für Birding-Reisen macht, die die Rwenzori-Ausläufer einschließen.
              </p>
              <p>
                Beobachtungen gelingen am ehesten in den frühen Morgenstunden, wenn die Art am aktivsten ist. Sie bevorzugt dichte Waldabschnitte mit üppigem Unterwuchs. Genaue Höhenpräferenzen und Nachweise aus spezifischen Abschnitten des Mobuku-Tals [RECHERCHE NOETIG]. Lokale Vogelführer in Kasese kennen die besten Stellen aus eigener Feldarbeit.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Vogelbeobachtung im Mobuku-Tal: Eigenständige Touren</h3>
              <p>
                Wer kein vollständiges Rwenzori-Trekking plant, kann das Mobuku-Tal auch für gezielte Vogelbeobachtungs-Tagestouren nutzen. Die ersten Talabschnitte sind ohne umfangreiche Ausrüstung erreichbar und bieten bereits Zugang zu montanen Waldlebensräumen. Auf dem Weg begegnet man neben den Rwenzori-Endemiten auch verschiedenen Sunbird-Arten, Grünspechten der Gattung Campethera und einer Reihe weiterer montaner Waldvögel.
              </p>
              <p>
                Die Kombination aus einem Vogelbeobachtungstag im Mobuku-Tal und einem zweiten Tag im Queen Elizabeth Nationalpark ergibt in zwei Tagen ein Spektrum, das die Verschiedenheit dieser Lebensräume deutlich macht — und zeigt, warum Kasese als Basisort für Vogelbeobachter so interessant ist.
              </p>
            </div>
          </section>

          {/* Zwischenbild */}
          <figure className="my-10">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
              alt="Berglandschaft der Rwenzori-Ausläufer bei Kasese, Uganda — Foto: Mark Suer"
              className="w-full rounded-xl object-cover max-h-80"
            />
            <figcaption className="text-xs text-gray-500 mt-2">
              Übergangszone zwischen Tiefland und Rwenzori-Bergwald — bevorzugter Lebensraum von Rwenzori-Turako und Grünbreitschnabel. Foto: Mark Suer
            </figcaption>
          </figure>

          {/* H2: Semuliki */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Semuliki Nationalpark: Tieflandregenwald mit über 400 Vogelarten
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Nördlich von Kasese, am Fuß der Rwenzori Mountains und entlang der kongolesischen Grenze, liegt der <a href="/semuliki-tieflandregenwald" className="text-jungle-700 hover:text-jungle-900 underline">Semuliki Nationalpark</a>. Er ist der einzige Ort in Uganda, an dem echter tiefländischer Kongolesischer Regenwald erhalten ist — ein Lebensraumtyp, der sonst erst jenseits der ugandischen Grenze in der Demokratischen Republik Kongo beginnt.
              </p>
              <p>
                Für Vogelbeobachter hat dieser Umstand eine direkte Konsequenz: Semuliki beherbergt zahlreiche Arten, die in Uganda außerhalb dieses Parks nicht vorkommen. Mehr als 400 Vogelarten wurden hier dokumentiert, darunter viele westafrikanisch-kongolesische Arten, die am östlichen Rand ihres Verbreitungsgebiets in Uganda präsent sind. Wer von Kasese aus einen Abstecher nach Semuliki einplant, erschließt damit Vogelarten, die auf keiner anderen ugandischen Route zu sehen wären.
              </p>
              <p>
                Der Park ist über Bundibugyo erreichbar — eine Fahrt, die je nach Straßenzustand und Route mehrere Stunden in Anspruch nehmen kann. Die Semuliki Hot Springs, ein hydrothermales Phänomen im Parkinneren, sind ein beliebtes Ausflugsziel und liegen an einer Route, die auch für Vogelbeobachter ergiebig ist. Übernachtungsoptionen im und am Park sind begrenzt; eine Planung im Voraus ist unbedingt empfehlenswert.
              </p>
              <p>
                Konkrete Artenlisten und aktuelle Beobachtungsberichte aus Semuliki für die Saison [RECHERCHE NOETIG]. Die dokumentierten Gesamtzahlen beziehen sich auf langjährige Erfassungen; die tatsächlich an einem einzelnen Besuchstag sichtbaren Arten sind deutlich geringer.
              </p>
            </div>
          </section>

          {/* H2: Fort Portal als Ergänzung */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Fort Portal: Kraterseen und Kibale als Ergänzung
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Etwa 30 Kilometer von Kasese entfernt liegt Fort Portal — eine der angenehmsten Kleinstädte Ugandas, umgeben von einer Kraterlandschaft, die durch vulkanische Aktivität entstanden ist. Die Kraterseen rund um Fort Portal bieten eigene Vogelbeobachtungs­möglichkeiten: Reiher, Eisvögel und verschiedene Wasservögel sind an den ruhigen, von Wald umgebenen Seen anzutreffen.
              </p>
              <p>
                Von Fort Portal aus ist der Kibale Nationalpark — vor allem bekannt als bestes Schimpansen-Trekking-Gebiet in Uganda — in etwa einer Stunde erreichbar. Der Park hat eine dokumentierte Vogelliste von über 370 Arten und ist neben der Schimpansen-Erfahrung auch für Vogelbeobachter lohnend. Das Bigodi Wetland Sanctuary, ein Community-geführtes Schutzgebiet am Rand des Kibale-Waldes, hat sich als eigenständiges Vogelbeobachtungsziel einen Namen gemacht und ist mit geführten Morgen-Exkursionen ein guter Einstieg.
              </p>
              <p>
                Für eine mehrtägige Vogelbeobachtungsreise in Südwestuganda ergibt sich damit eine Route, die von Kasese aus sternförmig organisiert werden kann: Queen Elizabeth Nationalpark, Mobuku-Tal/Rwenzori-Ausläufer, Semuliki und Fort Portal/Kibale — ohne täglich lange Strecken zu fahren.
              </p>
            </div>
          </section>

          {/* H2: Kasese als Vogelbeobachtungs-Basisort */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Kasese als Basisort: Logistik, Unterkunft und praktische Hinweise
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Kasese hat als Marktstadt eine solide Infrastruktur, die für Vogelbeobachter praktisch ist. Unterkünfte verschiedener Preisklassen sind vorhanden, und die Stadt liegt an der Hauptverbindungsstraße zwischen Fort Portal und dem Queen Elizabeth Nationalpark — was sie zu einem natürlichen Stopover macht, ohne dass man Umwege in Kauf nehmen muss.
              </p>
              <p>
                Vogelführer mit spezifischer ornithologischer Ausbildung lassen sich in Kasese über lokale Tourismuskontakte oder über die Uganda Wildlife Authority organisieren. Es empfiehlt sich, das Vogelbeobachtungsprogramm — insbesondere Zielarten und gewünschte Lebensräume — vorab schriftlich zu kommunizieren, damit der Führer die Strecken entsprechend plant. Viele lokale Führer kennen die Monitoringgebiete im Queen Elizabeth Nationalpark aus eigener regelmäßiger Arbeit.
              </p>
              <p>
                Die beste Reisezeit für Vogelbeobachtung rund um Kasese sind die Trockenphasen von Dezember bis Februar und von Juni bis August. In dieser Zeit ist die Vegetation kürzer, Sichtlinien sind freier, und viele Arten befinden sich in oder nach der Brutsaison — was die Aktivität erhöht. Die Regenzeiten (März bis Mai, Oktober bis November) haben eigene Vorteile: Zugvögel sind präsent, und die Vegetation steht in vollem Laub — was Waldrandarten in anderen Bereichen des Parks konzentriert.
              </p>
              <p>
                Wer mehrere Jahrzehnte versucht hat, Uganda innerhalb weniger Tage zu verstehen, weiß: Die Region um Kasese braucht Zeit. Nicht weil die Tiere schwer zu finden wären, sondern weil die Schichtung der Lebensräume — Tiefland, Berghang, Hochgebirge, alles innerhalb weniger Kilometer — so dicht ist, dass jeder Höhenunterschied eine andere Artenwelt mit sich bringt. Ein einzelner langer Vorbergtag im Mobuku-Tal, kombiniert mit einem frühen Morgen in Kasese Woods, gibt einen guten ersten Eindruck dieser Dichte — und macht meistens Lust auf mehr.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Vogelbeobachtung Kasese und Queen Elizabeth NP" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur Vogelbeobachtung rund um Kasese
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
              Mehr zu Vogelbeobachtung und Nationalparks in Südwestuganda
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/regionen/kasese', label: 'Kasese: Region und Reiseinformationen' },
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark' },
                { href: '/rwenzori-trekking', label: 'Rwenzori-Trekking: Vorbereitung und Routen' },
                { href: '/semuliki-tieflandregenwald', label: 'Semuliki: Tieflandregenwald im Westen Ugandas' },
                { href: '/tiere/schuhschnabel', label: 'Schuhschnabel in Uganda beobachten' },
                { href: '/beste-reisezeit-uganda', label: 'Die beste Reisezeit für Uganda' },
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
