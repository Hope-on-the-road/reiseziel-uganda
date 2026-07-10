import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'greifvoegel-uganda'

export default function GreifvoegelUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Welche Falken kommen in Uganda vor?',
      antwort: 'Uganda beherbergt mehrere Falkenarten, darunter den Turmfalken (Falco tinnunculus), den Graufalken (Falco ardosiaceus) und den Afrikanischen Baumfalken (Falco cuvierii). Der Turmfalke ist die am häufigsten beobachtete Art in offenen Graslandschaften und Savannen. Der Graufalke bevorzugt Waldränder und ist deutlich seltener anzutreffen. Der Afrikanische Baumfalke jagt bevorzugt in Wäldern und an Waldrändern und gilt als schneller Luftjäger.'
    },
    {
      frage: 'Wo in Uganda sieht man am häufigsten Greifvögel?',
      antwort: 'Greifvögel sind in Uganda nahezu überall anzutreffen — die Vielfalt der Lebensräume begünstigt unterschiedliche Arten. Der Murchison Falls Nationalpark mit seinen offenen Savannenflächen ist hervorragend für Turmfalken und Adler. Der Kidepo Valley Nationalpark im Nordosten bietet ebenfalls ausgedehnte offene Gebiete, die viele Greifvogelarten anziehen. Waldränder rund um Kibale und Bwindi sind dagegen besser für waldbewohnende Falken wie den Afrikanischen Baumfalken.'
    },
    {
      frage: 'Ist Uganda ein gutes Ziel für Vogelbeobachter, die Greifvögel suchen?',
      antwort: 'Uganda gilt mit über 1.000 dokumentierten Vogelarten als eines der bedeutendsten Vogelbeobachtungsziele auf dem afrikanischen Kontinent. Greifvögel profitieren dabei besonders von der großen Lebensraumvielfalt: Savanne, tropischer Regenwald, Feuchtgebiete und Bergregionen bieten unterschiedlichsten Arten geeignete Reviere. Raubadler, Bussarde, Falken und Weihen kommen alle vor — die genaue Liste dokumentierter Arten wächst mit jeder Monitoringkampagne.'
    },
    {
      frage: 'Was ist der Unterschied zwischen Turmfalke und Graufalke in Uganda?',
      antwort: 'Der Turmfalke ist die weitverbreitetere Art und besiedelt vor allem offene Graslandschaften, Ackerflächen und Savannen. Er ist für sein charakteristisches Rütteln bekannt — das stationäre Schweben in der Luft beim Aufspüren von Beute am Boden. Der Graufalke ist in seiner Habitatwahl anspruchsvoller und bevorzugt Waldränder und gemischte Gehölzlandschaften. Er ist insgesamt seltener und wird deutlich weniger häufig gemeldet als der Turmfalke.'
    },
    {
      frage: 'Welche anderen Greifvögel gehören zu den Highlights in Uganda?',
      antwort: 'Neben den Falken zählen mehrere spektakuläre Greifvogelarten zu den Highlights Ugandas. Der Afrikanische Schreiseeadler gilt als Nationalsymbol und ist an vielen Gewässern präsent. Der Bateleur fällt durch sein unverwechselbares Flugbild auf. In bergigen Regionen kommt der Bergbussard vor, und der Kampfadler gehört zu den mächtigsten Greifvögeln des Kontinents. Wer gezielt Greifvögel sucht, sollte Pirschfahrten im Murchison Falls Nationalpark einplanen — die offene Savanne macht Sichtungen deutlich einfacher als dichtes Waldgelände.'
    }
  ]

  return (
    <>
      <Head
        title="Greifvögel Uganda: Falken, Turmfalken und Adler beobachten"
        description="Greifvögel Uganda: Turmfalke, Graufalke und Afrikanischer Baumfalke im Überblick — Lebensräume, Beobachtungstipps und beste Nationalparks für Vogelbeobachter."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Offene Savanne im Murchison Falls Nationalpark, Uganda — Foto: Mark Suer"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Murchison Falls Nationalpark — ideales Greifvogelgebiet in Uganda. Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Greifvögel in Uganda: Falken, Turmfalken und Adler in einem der artenreichsten Vogelländer Afrikas
          </h1>

          {/* Eroeffnungs-Hook */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Wer in Uganda zum ersten Mal aus dem Fahrzeug schaut und einen Vogel an einem Telegrafenmast sitzen sieht — ruhig, aufrecht, den Blick nach unten gerichtet — erkennt einen Turmfalken oft erst auf den zweiten Blick. In Europa ist das Rütteln in der Luft das unverwechselbare Erkennungsmerkmal. In Uganda, wo die offene Savanne weite Horizonte bietet, sitzen Turmfalken oft lange auf erhöhten Ansitzpunkten und warten auf Bewegung im Gras. Dieses Jagdmuster, das ich während meiner Besuche im Murchison Falls Nationalpark mehrfach beobachtet habe, zeigt wie anpassungsfähig diese Falkenart ist.
            </p>
            <p>
              Uganda ist kein Land, das man sofort mit Falken verbindet. Der erste Gedanke sind Gorillas im Bwindi-Regenwald, dann vielleicht Schuhschnabel und Flamingo. Aber die Greifvogelwelt dieses Landes ist außergewöhnlich: Über 1.000 Vogelarten insgesamt, eine Lebensraumvielfalt von tropischem Regenwald über Feuchtgebiete bis zu offener Savanne und Bergregionen — und inmitten davon eine reiche Falken- und Greifvogelfauna, die von spezialisierten Beobachtern bisher zu selten systematisch erkundet wird.
            </p>
            <p>
              Dieser Artikel konzentriert sich auf drei Falkenarten, die in Uganda dokumentiert sind und je nach Lebensraum unterschiedlich gut zu beobachten sind: den Turmfalken (Falco tinnunculus), den Graufalken (Falco ardosiaceus) und den Afrikanischen Baumfalken (Falco cuvierii). Dazu kommen einige der bemerkenswertesten Greifvögel des Landes, die das Bild einer außergewöhnlichen Avifauna vervollständigen.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Greifvögel Uganda: Auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Falkenarten:</span> Turmfalke, Graufalke, Afrikanischer Baumfalke</div>
                <div><span className="font-semibold">Beste Parks:</span> Murchison Falls, Kidepo Valley, Queen Elizabeth</div>
                <div><span className="font-semibold">Vogelarten gesamt:</span> über 1.000 in Uganda</div>
                <div><span className="font-semibold">Nationalsymbol:</span> Afrikanischer Schreiseeadler</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Bergbussard:</span> Buteo augur, LC-Status</div>
                <div><span className="font-semibold">Lebensräume:</span> Savanne, Waldrand, Feuchtgebiet, Bergregion</div>
                <div><span className="font-semibold">Beste Reisezeit:</span> Trockenzeit (Dez–Feb, Jun–Aug)</div>
                <div><span className="font-semibold">Beobachtungsform:</span> Pirschfahrt, Bootsfahrt, Vogelwanderung</div>
              </div>
            </div>
          </div>

          {/* H2: Die drei Falkenarten */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Turmfalke, Graufalke, Baumfalke: Drei Arten, drei Lebensräume
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die Ordnung der Falken ist in Uganda mit einer Reihe von Arten vertreten, die sehr unterschiedliche Lebensräume besiedeln. Das macht eine gezielte Beobachtung interessant, aber auch anspruchsvoll: Wer alle drei dokumentierten Falkenarten einer einzigen Vogelreise sehen möchte, muss verschiedene Habitate aufsuchen und bereit sein, auch in der Dämmerung aktiv zu sein.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Turmfalke (Falco tinnunculus): Der häufigste der drei</h3>
              <p>
                Der Turmfalke ist in Uganda die am weitesten verbreitete und am häufigsten dokumentierte der drei Falkenarten. Er besiedelt vor allem offene Landschaften: Savannen, Graslandschaften, landwirtschaftliche Flächen und Parkanlagen rund um Städte. In Siedlungsnähe nutzt er Gebäude und Masten als Ansitz; in Nationalparks sitzt er auf Akazienzweigen oder Termitenhügeln.
              </p>
              <p>
                Das charakteristische Jagdverhalten — das Rütteln in der Luft, bei dem der Vogel den Kopf trotz Windeinfluss stabil hält und die Beute am Boden fixiert — ist in Uganda genauso zu beobachten wie in Europa. Was sich unterscheidet, ist die Häufigkeit: In Uganda teilt der Turmfalke seinen Lebensraum mit wesentlich mehr Konkurrenten und Feinden. Während meiner Besuche im Murchison Falls Nationalpark fiel auf, wie selbstverständlich er neben deutlich größeren Greifvögeln existiert — scheinbar unbeeindruckt von Bussarden und Adlern in direkter Nachbarschaft.
              </p>
              <p>
                Genaue Bestandszahlen für Uganda [RECHERCHE NOETIG]. Die Art gilt weltweit als nicht gefährdet, und in Uganda gibt es keine Hinweise auf besonderen Populationsdruck.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Graufalke (Falco ardosiaceus): Selten, aber unverkennbar</h3>
              <p>
                Der Graufalke ist in Uganda deutlich seltener als der Turmfalke und in seiner Habitatwahl anspruchsvoller. Er bevorzugt Waldränder, offene Wälder und die Übergangszonen zwischen dichterem Gehölz und offener Landschaft. Diese Habitatspräferenz macht ihn schwerer auffindbar: An einem Waldrand in Uganda lauern schlicht viele mehr Vögel und Sichtlinien sind kürzer als in offener Savanne.
              </p>
              <p>
                Äußerlich ist der Graufalke kaum zu verwechseln: Das einheitlich graue Gefieder, der orangegelbe Schnabelansatz und die Wachshaut um das Auge geben ihm ein unverwechselbares Erscheinungsbild. Im Flug wirkt er kompakter als der Turmfalke, mit relativ breiten Flügeln für einen Falken.
              </p>
              <p>
                Verbreitung und Häufigkeit in spezifischen ugandischen Schutzgebieten [RECHERCHE NOETIG]. Die Art ist in Westafrika verbreiteter als in Ostafrika; Uganda liegt am östlichen Rand des Verbreitungsgebiets.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Afrikanischer Baumfalke (Falco cuvierii): Schneller Jäger am Waldrand</h3>
              <p>
                Der Afrikanische Baumfalke ist der speziellste der drei in Uganda dokumentierten Falken. Er bewohnt Wälder, Waldränder und baumreiche Savannen und jagt im Tiefflug entlang von Waldrändern. Seine Hauptbeute sind Insekten und kleinere Vögel, die er im Flug greift. Die Jagdstrategie erinnert an europäische Baumfalken — schnell, wendig, aus kurzer Distanz.
              </p>
              <p>
                Beobachtungsmöglichkeiten für den Afrikanischen Baumfalken ergeben sich am ehesten in der Dämmerung, wenn er aktiv auf Beutezug geht. Ruhende Exemplare am Tag sind schwer zu entdecken, da sie tief in Baumkronen sitzen. Waldrandhabitate rund um <a href="/nationalparks/murchison_falls" className="text-jungle-700 hover:text-jungle-900 underline">Murchison Falls</a> und im Bereich des <a href="/nationalparks/kidepo" className="text-jungle-700 hover:text-jungle-900 underline">Kidepo Valley Nationalparks</a> kommen als Beobachtungsstandorte in Frage, ebenso die Übergangszonen um Kibale.
              </p>
              <p>
                Detaillierte Verbreitungskarten und Häufigkeitsdaten für Uganda [RECHERCHE NOETIG].
              </p>
            </div>
          </section>

          {/* H2: Weitere Greifvögel */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Die großen Greifvögel Ugandas: Adler, Bussarde, Weihen
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Falken sind nur ein Teil der Greifvogelwelt Ugandas. Das Land beherbergt eine Reihe weiterer Arten, die allein durch ihre Größe und ihr Auftreten beeindrucken. Wer bei Pirschfahrten oder Bootsausflügen den Himmel im Blick behält, wird regelmäßig auf Arten treffen, die in Europa nicht vorkommen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Afrikanischer Schreiseeadler: Das Nationalsymbol</h3>
              <p>
                Der Afrikanische Schreiseeadler ist einer der bekanntesten Vögel Afrikas — sein Ruf, ein vielstimmiges Juchzen aus großer Höhe, ist für viele Menschen der Inbegriff von Wildnis. In Uganda ist er an nahezu jedem größeren Gewässer anzutreffen: am Viktoriasee, an den Nilufern des Murchison Falls Nationalparks, am Kazinga-Kanal im Queen Elizabeth Nationalpark und an den Feuchtgebieten des Albertine Grabens. Er ist Ugandas Nationalsymbol — und tatsächlich einer der verlässlichsten Greifvögel für Beobachter.
              </p>
              <p>
                Der Schreiseeadler ist ein Fischjäger, der seine Beute aus dem Wasser greift. Auf Bootstouren auf dem Viktoria-Nil erlebt man diese Jagdstrategie gelegentlich aus kurzer Distanz — wie der Vogel in einem langen Gleitflug sinkt, im letzten Moment die Klauen vorstreckt und einen Fisch aus der Wasseroberfläche hebt.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Bateleur: Unverwechselbares Flugsymbol der Savanne</h3>
              <p>
                Der Bateleur ist einer der auffälligsten Greifvögel Afrikas. Sein extrem kurzer Schwanz, die weit ausgebreiteten, langen Flügel und das kontrastreiche Schwarz-Weiß-Rot-Muster machen ihn unverwechselbar. In Uganda ist er ein typischer Bewohner der Nationalparks mit weiter Savanne — Murchison Falls und Queen Elizabeth sind die wahrscheinlichsten Beobachtungsorte.
              </p>
              <p>
                Der Bateleur verbringt einen Großteil des Tages im Flug und legt täglich mehrere hundert Kilometer zurück. Er ist ein Aasfresser, aber auch gelegentlich ein aktiver Jäger kleiner Wirbeltiere. Sein charakteristischer Gleitflug — die Flügel leicht nach oben angewinkelt, der Körper dabei leicht schwankend — ist ein untrügliches Erkennungsmerkmal.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Bergbussard (Buteo augur): Dokumentiert in Uganda</h3>
              <p>
                Der Bergbussard ist ein großer, auffälliger Bussard, der in Uganda nachgewiesen ist. Er ist ein Bewohner offener Hochlagen, bergiger Regionen und der Ränder des Albertine Grabens. Mit seinem kontrastreich gemusterten Gefieder — weißem Bauch und dunkelbraunem Rücken — ist er am Himmel gut erkennbar. Der IUCN-Status lautet LC (Least Concern), der Bestand gilt also als stabil.
              </p>
              <p>
                Sichtungsorte für den Bergbussard in Uganda konzentrieren sich auf die südwestlichen Hochlagen des Landes sowie auf den Bereich rund um den Albertine Graben. Genaue Häufigkeitsdaten aus ugandischen Monitoringprogrammen [RECHERCHE NOETIG].
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kampfadler und Verreaux-Adler: Seltene Highlights</h3>
              <p>
                Der Kampfadler gilt als einer der mächtigsten Greifvögel Afrikas. Er brütet in großen, alten Bäumen und benötigt weite Reviere. In Uganda ist er selten, aber in den großen Nationalparks belegt. Der Verreaux-Adler — spezialisiert auf Klippschliefer als Hauptbeute — tritt in Uganda vor allem in felsigen Bergregionen auf. Wer gezielt nach diesen beiden Arten sucht, braucht Zeit, lokale Kenntnisse und — im Fall des Verreaux-Adlers — eine Reiseroute, die bergige Gebiete einschließt.
              </p>
            </div>
          </section>

          {/* H2: Lebensraeume und Beobachtungstipps */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Lebensräume und Beobachtungstipps: Wo man Greifvögel in Uganda findet
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Uganda bietet eine Dichte und Vielfalt an Vogellebensräumen, die ihresgleichen sucht. Das erklärt die außergewöhnlich hohe Artenzahl von über 1.000 — und es erklärt, warum Greifvögel in fast jedem Landschaftstyp vertreten sind.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Murchison Falls Nationalpark: Offene Savanne für Falken und Adler</h3>
              <p>
                Der <a href="/nationalparks/murchison_falls" className="text-jungle-700 hover:text-jungle-900 underline">Murchison Falls Nationalpark</a> ist für Greifvogelbeobachter einer der attraktivsten Orte in Uganda. Die weite, offene Savanne nördlich des Viktoria-Nils bietet ideale Bedingungen: Turmfalken sitzen auf Akazienzweigen, Bussarde ziehen über den Horizont, und gelegentlich lässt sich ein Kampfadler auf einem toten Baum nieder. Die Pirschfahrten in diesem Bereich dauern normalerweise drei bis fünf Stunden — genug Zeit, um den Himmel systematisch abzusuchen.
              </p>
              <p>
                Die Bootsfahrt auf dem Viktoria-Nil ist für Greifvogelbeobachter ein Pflichtprogramm. Schreiseeadler sind an den Ufern eine verlässliche Erscheinung, und gelegentlich sieht man Fischadler über dem Fluss. Die Kombination aus Pirschfahrt am Morgen und Bootstour am Nachmittag — oder umgekehrt — maximiert die Artenanzahl pro Tag.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kidepo Valley Nationalpark: Wildnis im Norden</h3>
              <p>
                Der <a href="/nationalparks/kidepo" className="text-jungle-700 hover:text-jungle-900 underline">Kidepo Valley Nationalpark</a> im äußersten Nordosten Ugandas ist der abgelegenste der großen Parks — und bietet gerade deshalb ungestörte Beobachtungsmöglichkeiten. Das offene, teils felsige Gelände begünstigt Greifvögel, die Erhöhungen als Ansitz oder zum Segeln nutzen. Während meiner Besuche in Norduganda fiel auf, wie still dieser Park im Vergleich zu Queen Elizabeth ist — weniger Fahrzeuge bedeutet ruhigeres Verhalten bei den Tieren.
              </p>
              <p>
                Für Greifvögel, die felsiges Terrain bevorzugen — wie bestimmte Falken und Adler — ist Kidepo möglicherweise das interessanteste Beobachtungsgebiet in Uganda. Eine systematische Auswertung von Greifvogeldaten aus diesem Park [RECHERCHE NOETIG].
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Waldränder: Kibale und Bigodi</h3>
              <p>
                Waldgebundene Falken wie der Afrikanische Baumfalke sind in offener Savanne nicht zu finden. Für sie lohnen sich Waldrandgebiete rund um Kibale — der Nationalpark ist vor allem für Schimpansen bekannt, bietet aber auch außergewöhnliche Vogelbeobachtung. Das <a href="/vogelbeobachten-kibale-bigodi" className="text-jungle-700 hover:text-jungle-900 underline">Bigodi Wetland Sanctuary</a> in der Nähe ist ein anerkanntes Vogelbeobachtungsgebiet mit geführten Exkursionen. Die Übergangszonen zwischen Sumpf und Wald sind für viele Arten attraktiv — auch für Greifvögel, die in der Vegetation auf Beute warten.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Zeitpunkt: Wann Greifvögel am besten zu beobachten sind</h3>
              <p>
                Die allgemeine Regel für Vogelbeobachtung gilt auch für Greifvögel: Die frühen Morgenstunden und der späte Nachmittag sind die aktivsten Zeiten. Zur Mittagshitze ruhen die meisten Arten und sind kaum zu finden. In der Trockenzeit — von Dezember bis Februar und von Juni bis August — ist die Vegetation kürzer, die Sichtlinien sind besser, und Wasserquellen konzentrieren Tiere und damit auch Greifvögel.
              </p>
              <p>
                Für Falken gilt zusätzlich: Windige Bedingungen begünstigen das Rütteln und machen Turmfalken leichter aufzufinden. An ruhigen, heißen Tagen sitzen sie mehr, als dass sie fliegen — was Beobachtungen vom Boden oder Fahrzeug aus dennoch möglich macht, wenn man Ansitzpunkte systematisch absucht.
              </p>
            </div>
          </section>

          {/* H2: Uganda als Vogelreiseziel */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Uganda als Vogelreiseziel: Greifvögel im Kontext von 1.000 Arten
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Es ist eine Zahl, die zunächst abstrakt klingt: über 1.000 Vogelarten in einem Land, das flächenmäßig kleiner ist als Deutschland. Das entspricht mehr als einem Zehntel aller weltweit bekannten Vogelarten auf einem Gebiet, das mit dem Auto in zwei Tagen zu durchqueren ist. Für Vogelbeobachter ist Uganda deshalb kein Nischenziel — es ist eines der dichtesten Vogelbeobachtungsgebiete der Welt.
              </p>
              <p>
                Greifvögel sind in diesem Gesamtkontext nur eine Gruppe unter vielen. Wer nach Uganda reist und ausschließlich Falken sucht, wird zufrieden zurückkehren — aber viel verpasst haben. Die Kombination aus Greifvogelbeobachtung, Schuhschnabel-Suche in den Feuchtgebieten (der <a href="/tiere/schuhschnabel" className="text-jungle-700 hover:text-jungle-900 underline">Schuhschnabel</a> ist einer der begehrtesten Vögel Afrikas), Schimpansen-Trekking in Kibale und Gorilla-Trekking in Bwindi ergibt eine Reiseroute, die kaum zu überbieten ist.
              </p>
              <p>
                Während meiner insgesamt neun Besuche in Uganda mit über 18 Tagen in der Region habe ich gelernt, dass die eindrücklichsten Vogelbeobachtungen oft nicht geplant waren. Ein Schreiseeadler, der keine zehn Meter über dem Nilboot kreist. Ein Turmfalke, der auf dem Eingangstor eines Camps sitzt und sich nicht stört. Ein Bateleur, der lautlos über eine Grasebene gleitet, bevor er hinter einem Akazienhain verschwindet. Diese Momente entstehen, wenn man verlangsamt — wenn eine Safari nicht von Aktivität zu Aktivität hetzt, sondern bewusst Zeit für Beobachtung lässt.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                  alt="Savannelandschaft in Uganda — Foto: Mark Suer"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Offene Landschaft in Uganda — bevorzugter Lebensraum von Turmfalke und anderen Greifvögeln. Foto: Mark Suer
                </figcaption>
              </figure>

              <p>
                Für spezialisierte Birding-Reisen empfiehlt sich die Zusammenarbeit mit einem lokalen Vogelführer. Die Artenkenntnis ugandischer Guides in diesem Bereich ist oft bemerkenswert — viele haben jahrelange Felderfahrung und kennen die spezifischen Habitatpräferenzen selbst seltener Arten. Wer gezielt Greifvögel sucht, sollte das dem Guide vor Reisebeginn klar kommunizieren, damit Routen und Zeiten entsprechend geplant werden.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Greifvögel und Vogelwelt Uganda" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu Greifvögeln in Uganda
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
                { href: '/tiere/schuhschnabel', label: 'Schuhschnabel in Uganda beobachten' },
                { href: '/nationalparks/murchison_falls', label: 'Murchison Falls Nationalpark' },
                { href: '/nationalparks/kidepo', label: 'Kidepo Valley Nationalpark' },
                { href: '/vogelbeobachten-kibale-bigodi', label: 'Vogelbeobachten in Kibale und Bigodi' },
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark' },
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
