import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'echuya-forest-reserve'

export default function EchuyaForestPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Was macht das Echuya Forest Reserve für Vogelbeobachter besonders?',
      antwort: 'Echuya beherbergt die einzige bekannte ugandische Population des Grauer-Sumpfrohrsängers, einer weltweit als gefährdet eingestuften Art. Darüber hinaus zählt der Wald zu den besten Standorten für Albertine-Rift-Endemiten in ganz Südwestuganda. Wer spezialisierte Bergwaldvögel sucht, findet in Echuya auf kleiner Fläche eine Dichte an Zielarten, die in dieser Form kaum ein anderes Gebiet der Region bietet.'
    },
    {
      frage: 'Wie kommt man zum Echuya Forest Reserve?',
      antwort: 'Das Reservat liegt zwischen Kabale und Kisoro in Südwestuganda, direkt an der Hauptstraße zwischen beiden Städten. Es ist als Tagesausflug von Kabale oder von Kisoro aus gut erreichbar. Die Fahrt von Kabale dauert in der Regel unter einer Stunde. Ein Fahrzeug mit Fahrer ist empfehlenswert, da die Zugangswege zum Waldinneren schlecht ausgebaut sind. Lokale Vogelführer aus Kabale kennen die besten Einstiegspunkte.'
    },
    {
      frage: 'Welche Vogelarten hat man gute Chancen zu sehen?',
      antwort: 'Rußboubou und Prachtsonnenkolibri zählen zu den häufigsten Arten im Echuya-Monitoring und sind meist innerhalb kurzer Zeit zu beobachten. Dohertys Buschschreck und der Ostafrika-Bergbülbül sind mit einiger Geduld regelmäßig zu sehen. Der Grauer-Sumpfrohrsänger erfordert gezieltes Aufsuchen der Papyrussumpfbereiche am Waldrand — ohne lokales Wissen und etwas Geduld bleibt er oft unsichtbar. Der Rwenzori-Batissangel kann in lichteren Waldzonen mit Glück aufgespürt werden.'
    },
    {
      frage: 'Welche Tiere gibt es in Echuya außer Vögeln?',
      antwort: 'Im Echuya Forest Reserve leben neben Vögeln auch Säugetiere wie das Riesenwaldschein, die Sitatunga-Sumpfantilope und der Südliche Baumschliefer. Besonders bekannt ist das Reservat für den Dreihorn-Chamäleon (Trioceros johnstoni), eine markante Chamäleonart, die im Bergwald des Albertine Grabens vorkommt. Das macht Echuya auch für Reptilieninteressierte und Naturfotografen attraktiv, die nicht ausschließlich Vögel suchen.'
    },
    {
      frage: 'Wann ist die beste Zeit für einen Besuch in Echuya?',
      antwort: 'Vogelbeobachtung in Echuya ist das ganze Jahr möglich, da viele Bergwaldarten Stand- und keine Zugvögel sind. Die Trockenmonate von Dezember bis Februar und von Juni bis August bieten die besten Bedingungen: Die Vegetation ist weniger dicht, Wege sind besser begehbar, und Licht dringt tiefer in den Wald. Frühe Morgenstunden — kurz nach Sonnenaufgang — sind auch in Echuya die ertragreichsten Beobachtungszeiten, wenn die meisten Waldvögel aktiv und rufend sind.'
    }
  ]

  return (
    <>
      <Head
        title="Echuya Forest Reserve: Bergwald-Vogelbeobachtung in Südwestuganda"
        description="Echuya Central Forest Reserve zwischen Kabale und Kisoro — Heimat des Grauer-Sumpfrohrsängers und zahlreicher Albertine-Rift-Endemiten. Vogelbeobachtung im Montanwald."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Bergwald in Südwestuganda, Albertine Rift — Foto: Mark Suer"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Montaner Bergwald im Albertine Graben, Südwestuganda. Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Echuya Forest Reserve: Bergwald-Vogelbeobachtung zwischen Kabale und Kisoro
          </h1>

          {/* Eroefffnungs-Hook */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Wer zwischen Kabale und Kisoro unterwegs ist, fährt durch eine Landschaft, die sich spürbar von der übrigen ugandischen Vegetation unterscheidet. Der Weg steigt an, die Luft wird kühler, und am Straßenrand wächst dichter Bergwald, der in den tiefer gelegenen Regionen des Landes nicht vorkommt. Irgendwo in diesem Streifen montaner Vegetation liegt das Echuya Central Forest Reserve — eines der bedeutsamsten Vogelbeobachtungsgebiete Südwestugandas, das international kaum bekannt ist und selbst von gezielten Birdingreisenden oft übergangen wird.
            </p>
            <p>
              Das hat einen einfachen Grund: Echuya liegt keinem der großen ugandischen Nationalparks direkt benachbart. Es gibt keine ausgebaute Infrastruktur, keine Lodge am Eingang, keine offizielle Führungsstruktur für Touristen. Was es gibt, ist einer der artenreichsten Bergwälder des Albertine Grabens auf ugandischer Seite — mit über 170 dokumentierten Vogelarten, einer ungewöhnlichen Konzentration von Albertine-Rift-Endemiten und der einzigen ugandischen Population einer weltweit gefährdeten Singvogelart.
            </p>
            <p>
              Während meiner Aufenthalte in Südwestuganda — insgesamt vierzehn Besuche mit über 65 Tagen in der Region, darunter elf Tage im Januar 2026 und dreizehn Tage im Mai 2026 — war Echuya mehrfach Teil der Route. Die Region zwischen Kabale und Kisoro gehört zu den am intensivsten bereisten Ecken des Landes, und Echuya liegt buchstäblich am Wegesrand — wer langsam fährt und weiß, wo man anhält, findet eine Vogelwelt, die in dieser Form kaum zu überbieten ist.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Echuya Forest Reserve: Auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Lage:</span> Zwischen Kabale und Kisoro, Südwestuganda</div>
                <div><span className="font-semibold">Höhenlage:</span> Hochmontaner Bergwald, Albertine Rift</div>
                <div><span className="font-semibold">Vogelarten:</span> 170+ dokumentierte Arten</div>
                <div><span className="font-semibold">Besonderheit:</span> Einzige Uganda-Population Grauer-Sumpfrohrsänger</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Waldtyp:</span> Montaner Regenwald mit Bambus- und Grasslandzonen</div>
                <div><span className="font-semibold">Schutzstatus:</span> Central Forest Reserve</div>
                <div><span className="font-semibold">Zugang:</span> Tagesausflug von Kabale oder Kisoro</div>
                <div><span className="font-semibold">Endemiten:</span> Mehrere Albertine-Rift-Arten</div>
              </div>
            </div>
          </div>

          {/* H2: Grauer Sumpfrohrsa nger */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Der Grauer-Sumpfrohrsänger: Eine Art, ein Standort in Uganda
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Bradypterus graueri ist kein Vogel, der auf den ersten Blick beeindruckt. Der Grauer-Sumpfrohrsänger ist klein, unauffällig braun, und lebt in dichter Vegetation am Rand von Papyrussümpfen innerhalb montaner Waldgebiete. Was diese Art zu einem der gefragtesten Ziele für spezialisierte Vogelbeobachter in Uganda macht, ist nicht ihr Erscheinungsbild, sondern ihre Seltenheit und die Einzigartigkeit ihres ugandischen Vorkommens.
              </p>
              <p>
                Das Echuya Forest Reserve ist der einzige bekannte Standort dieser Art in Uganda. Weltweit gilt der Grauer-Sumpfrohrsänger als gefährdet — auf nationaler Ebene wird er in Uganda als gefährdet eingestuft, regional als verletzlich. Das Verbreitungsgebiet ist eng auf hochgelegene Papyrussumpfbereiche innerhalb von Montanwäldern beschränkt, ein Lebensraum, der in der Albertine-Rift-Region selten und durch Entwaldung und landwirtschaftliche Erschließung unter Druck steht.
              </p>
              <p>
                Im systematischen Vogelmonitoring an der Echuya-Überwachungsstation wurden sechs Arten von besonderem Schutzinteresse dokumentiert, darunter der Grauer-Sumpfrohrsänger als einzige weltweit gefährdete Art. Das allein macht Echuya zu einem Ort, der über Uganda hinaus Bedeutung hat: Ein einzelnes Waldgebiet trägt die Verantwortung für den Erhalt einer ganzen nationalen Population.
              </p>
              <p>
                Für Vogelbeobachter bedeutet das: Ein gezielter Besuch von Echuya mit dem klaren Ziel, den Grauer-Sumpfrohrsänger zu sehen, setzt lokales Wissen voraus. Die Papyrussumpfbereiche am Waldrand müssen bekannt sein, die Suchstrategie muss dem versteckten Lebensweise der Art angepasst werden, und Geduld ist unverzichtbar. Ohne geführte Unterstützung durch jemanden, der die spezifischen Aufenthaltsorte kennt, bleibt die Art für die meisten Besucher unsichtbar.
              </p>
            </div>
          </section>

          {/* H2: Die sechs Schutzarten */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Sechs Arten von besonderem Schutzinteresse: Das Arteninventar von Echuya
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Das Monitoring im Echuya Forest Reserve hat sechs Vogelarten identifiziert, die aus Schutzperspektive besondere Bedeutung haben. Sie unterscheiden sich in Seltenheit, Gefährdungsstatus und Lebensraumanforderungen — zusammengenommen bilden sie ein Profil, das Echuya als eines der wichtigsten montanen Vogelschutzgebiete Ugandas ausweist.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Rwenzori-Batissangel (Batis diops): Regionale Verantwortungsart</h3>
              <p>
                Der Rwenzori-Batissangel ist eine kompakte, schwarz-weiße Schnäpperart, die auf das Albertine Rift als Lebensraum spezialisiert ist. In Uganda ist er auf die Bergwälder des Westens beschränkt; Echuya liegt am südlichen Ende seines Verbreitungsbereichs auf ugandischer Seite. Als Regional Responsibility species trägt Uganda eine besondere Verantwortung für den Erhalt dieser Art, da ein wesentlicher Teil der weltweiten Population in ugandischen Bergwäldern lebt.
              </p>
              <p>
                Im lichten Bergwald ist der Batissangel mit einiger Geduld zu beobachten. Er lebt in Paaren und durchsucht mittlere Baumschichten nach Insekten. Die charakteristischen Stimmäußerungen machen ihn leichter zu lokalisieren als rein optisch.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Dohertys Buschschreck: Endemit des Albertine Rift</h3>
              <p>
                Dohertys Buschschreck ist ein Albertine-Rift-Endemit — eine Art, deren Vorkommen vollständig auf die Bergwälder des ostafrikanischen Grabenbruchs beschränkt ist. In Echuya ist er einer der regelmäßiger dokumentierten Vertreter dieser endemischen Artengruppe. Er bewohnt dichte Waldunterstöcke und ist trotz seiner Größe — er gehört zu den größeren Buschschrecken — schwer zu Gesicht zu bekommen. Sein Ruf ist dagegen unverwechselbar und trägt wesentlich zur Identifizierung bei.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Prachtsonnenkolibri (Cinnyris regius): Endemit und Monitoring-Highlight</h3>
              <p>
                Der Prachtsonnenkolibri ist einer der häufigsten Vögel im Echuya-Monitoring — mit elf dokumentierten Individuen gehört er zu den dominierenden Arten des Überwachungsstandorts. Gleichzeitig ist er ein Albertine-Rift-Endemit, also auf das Bergwaldgebiet um den westafrikanischen Graben beschränkt. Das macht ihn zu einer Art, die einerseits gut zu beobachten ist und andererseits echten ornithologischen Wert hat.
              </p>
              <p>
                Das metallisch grün-violette Gefieder des Männchens ist im Sonnenlicht eines der eindrucksvollsten Bilder in Echuya. Er besucht blühende Sträucher und Bäume an Waldrändern und Lichtungen — dort ist er oft minutenlang aus kurzer Distanz zu beobachten, wenn er Blüten nach Nektar absucht.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Ostafrika-Bergbülbül: Albertine-Rift-Art</h3>
              <p>
                Der Ostafrika-Bergbülbül ist eine typische Waldrandart, die in mittleren und oberen Strauchschichten lebt. In Echuya ist er ein regelmäßiger Bewohner der Übergangszonen zwischen dichterem Wald und Bambus- oder Grasslandbereichen. Er ist vergleichsweise leicht zu beobachten und gehört zu den Arten, die auch für weniger erfahrene Vogelbeobachter gut im Feld bestimmbar sind.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Rotgesicht-Waldlaubsänger: Montaner Spezialist</h3>
              <p>
                Der Rotgesicht-Waldlaubsänger komplettiert das Sextett der Schutzarten in Echuya. Er ist ein Bewohner dichter Bergwälder und in seiner Verbreitung auf die höher gelegenen Waldgebiete des Albertine Rift beschränkt. Im Feld ist er durch sein orangerot gefärbtes Gesicht identifizierbar — ein Merkmal, das ihn unter ähnlich gefärbten Laubsängern hervorhebt. Er lebt in unteren Schichten des Waldbestands und ist geduldig an ruhigen Waldstellen aufzuspüren.
              </p>

              {/* Monitoring-Tabelle */}
              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-jungle-50 text-jungle-900">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold border-b border-gray-200">Art (Deutsch)</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-gray-200">Status</th>
                      <th className="text-left px-4 py-3 font-semibold border-b border-gray-200">Besonderheit</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3">Grauer-Sumpfrohrsänger</td>
                      <td className="px-4 py-3">Weltweit gefährdet (G-EN)</td>
                      <td className="px-4 py-3">Einziges ugandisches Vorkommen</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3">Rwenzori-Batissangel</td>
                      <td className="px-4 py-3">Regional Responsibility</td>
                      <td className="px-4 py-3">Albertine-Rift-Spezialist</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3">Dohertys Buschschreck</td>
                      <td className="px-4 py-3">Rift-Endemit</td>
                      <td className="px-4 py-3">Beschränkt auf Albertine Rift</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3">Prachtsonnenkolibri</td>
                      <td className="px-4 py-3">Rift-Endemit</td>
                      <td className="px-4 py-3">Häufigste Monitoring-Art (11 Ind.)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3">Ostafrika-Bergbülbül</td>
                      <td className="px-4 py-3">Albertine-Rift-Art</td>
                      <td className="px-4 py-3">Regelmäßig in Übergangszonen</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Rotgesicht-Waldlaubsänger</td>
                      <td className="px-4 py-3">Albertine-Rift-Art</td>
                      <td className="px-4 py-3">Untere Waldschichten</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* H2: Rußboubou und weitere häufige Arten */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Rußboubou und weitere Waldvögel: Das breitere Arteninventar
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Neben den sechs Schutzarten bietet Echuya ein breites Spektrum an Bergwaldvögeln, die für die Vogelbeobachtung im Alltag eines Besuchs ebenso wichtig sind wie die seltenen Zielarten. Der Rußboubou war im systematischen Monitoring die individuenreichste Art mit zwölf dokumentierten Exemplaren — damit die häufigste Vogelart am Standort. Er bewohnt dichtes Unterholz und zeigt sich oft als erstes, wenn man ruhig an einem Waldrand wartet.
              </p>
              <p>
                Das Echuya Forest Reserve ist insgesamt mit über 170 dokumentierten Vogelarten ausgestattet. Das entspricht einer Artendichte, die für den vergleichsweise kleinen Flächenanteil dieses Waldreservats bemerkenswert ist. Bambusbewohner, Fruchtesser, Waldinsektenfresser und Wasserbewohner der Sumpfzonen ergänzen das Bild. Wer mehrere Stunden in Echuya verbringt und verschiedene Habitatzonen aufsucht — Kernwald, Waldrand, Bambusstreifen und Papyrussumpf — kann in einem einzigen Morgen auf mehrere Dutzend Arten kommen.
              </p>
              <p>
                Für eine gezielte Tagesliste empfiehlt sich der frühe Morgen: kurz nach Sonnenaufgang sind die meisten Waldvögel am aktivsten, Rufaktivität ist am höchsten, und Licht fällt bereits in die Randschichten des Waldes. Die mittleren Tagesstunden sind in Bergwäldern oft ruhiger — eine gute Zeit, um spezifische Habitate wie Papyrussümpfe zu erkunden, in denen der Grauer-Sumpfrohrsänger selbst in der Mittagspause gelegentlich rufend zu hören ist.
              </p>
            </div>
          </section>

          {/* H2: Lebensraum und Lage */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Lebensraum: Montaner Regenwald im Albertine Rift
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Albertine Graben gehört zu den artenreichsten Gebieten des afrikanischen Kontinents. Der ostafrikanische Grabenbruch hat über Millionen von Jahre hinweg Tier- und Pflanzenarten isoliert, eigene Evolutionswege ermöglicht und eine Biodiversitätsdichte erzeugt, die weltweit ihresgleichen sucht. Das Echuya Forest Reserve liegt mitten in diesem Hotspot — auf der ugandischen Seite des Rifts, auf Höhenlagen, die einen anderen Vegetationstyp ermöglichen als die tiefer gelegenen Wälder von Kibale oder Budongo.
              </p>
              <p>
                Der Waldtyp in Echuya ist montaner Regenwald mit Bambusbereichen und Übergangszonen zu hochgelegenem Grasland. Diese Strukturvielfalt auf engem Raum erklärt die hohe Artenvielfalt: Jede Vegetationszone beherbergt eigene Spezialisten. Der Kernwald mit alten Bäumen ist Lebensraum für Waldvögel, die auf Baumhöhlen oder große Äste angewiesen sind. Die Bambusbereiche beherbergen Bambusspezialisierte Arten, die im Kernwald nicht vorkommen. Die Papyrussümpfe am Rand sind der entscheidende Lebensraum für den Grauer-Sumpfrohrsänger.
              </p>
              <p>
                Das Reservat grenzt an landwirtschaftlich genutztes Land — ein in Südwestuganda weit verbreitetes Muster, bei dem Schutzgebiete inmitten einer dicht besiedelten Kulturlandschaft existieren. Dieser Kontext macht den Erhalt des Waldkerns umso wichtiger: Der Echuya-Wald ist eine Insel in einem Meer aus Ackerland, und die in ihm lebenden Arten haben außerhalb keine Ausweichhabitate auf ugandischer Seite.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                  alt="Berglandschaft Südwestuganda zwischen Kabale und Kisoro — Foto: Mark Suer"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Die hügelige Landschaft Südwestugandas zwischen Kabale und Kisoro, in der das Echuya Forest Reserve liegt. Foto: Mark Suer
                </figcaption>
              </figure>

              <p>
                Die Höhenlage bringt auch klimatische Besonderheiten mit sich: Echuya ist oft wolkenverhangen, die Temperaturen sind kühler als im ugandischen Tiefland, und Regen kann auch in der Trockenzeit einsetzen. Warme Kleidung und wasserdichte Ausrüstung gehören bei jedem Besuch dazu, unabhängig von der Jahreszeit. Das Licht ist in bewölkten Verhältnissen weniger grell als in der Savanne — was für Naturfotografie gute Bedingungen schaffen kann, aber auch Bestimmungen erschwert, wenn Vögel in Gegenlicht sitzen.
              </p>
            </div>
          </section>

          {/* H2: Weitere Tierarten */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Über Vögel hinaus: Säugetiere, Reptilien und Bergwaldfauna
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Das Echuya Forest Reserve ist kein reines Vogelschutzgebiet — es beherbergt eine breitere Fauna, die Besuche auch für Nicht-Ornithologen lohnenswert macht. Das Riesenwaldschein, eines der größten Wildschweine Afrikas, lebt im Wald und ist mit etwas Glück an Waldrändern zu beobachten. Die Sitatunga-Sumpfantilope bewohnt die feuchten Bereiche am Waldrand und ist vor allem in den frühen Morgenstunden oder am Abend aktiv. Der Südliche Baumschliefer ist ein tagaktiver Bewohner von Astgabelungen und Felsspalten.
              </p>
              <p>
                Besonders bekannt in der Bergwaldregion ist der Dreihorn-Chamäleon — eine markante Reptilienart, die mit ihren drei charakteristischen Hörnern auf dem Kopf unverwechselbar ist und in den Bergwäldern des Albertine Rifts ihren Lebensraum hat. Chamäleons sitzen meist bewegungslos auf Ästen und sind selbst in bekannten Habitaten schwer zu entdecken. Ein erfahrener Führer kennt die Standorte, an denen diese Tiere regelmäßig angetroffen werden.
              </p>
              <p>
                Diese Vielfalt macht Echuya zu einem Ziel, das sich gut in eine breitere Südwestuganda-Route einbauen lässt — zusammen mit dem <a href="/nationalparks/mgahinga" className="text-jungle-700 hover:text-jungle-900 underline">Mgahinga Gorilla Nationalpark</a> wenige Kilometer entfernt, der Gorillabegegnung und Vogelbeobachtung in einem anbietet, und dem <a href="/virunga-conservation-area" className="text-jungle-700 hover:text-jungle-900 underline">Virunga Conservation Area</a>, das sich grenzübergreifend über Uganda, Ruanda und die DRC erstreckt.
              </p>
            </div>
          </section>

          {/* H2: Planung */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Besuch planen: Echuya als Teil einer Südwestuganda-Route
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Echuya lässt sich gut als Ergänzung zu anderen Zielen in Südwestuganda planen. Die Städte Kabale und Kisoro sind beide als Ausgangspunkt geeignet; Kabale ist etwas größer und bietet mehr Unterkunftsmöglichkeiten, liegt aber etwas weiter entfernt. Von Kisoro aus ist das Reservat besonders schnell zu erreichen.
              </p>
              <p>
                Ein halber Tag — vier bis fünf Stunden am Morgen — reicht für eine erste Erkundung und gibt guten Chancen, die häufigeren Schutzarten zu sehen. Wer gezielt den Grauer-Sumpfrohrsänger sucht oder eine umfangreichere Tagesliste anstrebt, sollte einen vollen Tag einplanen. Die Kombination aus frühem Morgen im Waldkern und später Vormittag in den Sumpfzonen ist erfahrungsgemäß ertragreich.
              </p>
              <p>
                Lokale Vogelführer aus Kabale kennen das Reservat gut und sind für einen gezielten Besuch unverzichtbar. Die spezifischen Eintrittspunkte, die besten Abschnitte für bestimmte Arten und das nötige Wissen über die Saisonabhängigkeit der Vogelaktivität sind ohne lokale Erfahrung kaum zu ersetzen. Voranmeldung und Absprache mit einem lokalen Birding-Operator empfiehlt sich besonders, wenn seltene Arten wie der Grauer-Sumpfrohrsänger gezielt gesucht werden.
              </p>
              <p>
                Für Reisende, die Echuya in eine größere Tour integrieren wollen, bietet sich eine Schleife durch Südwestuganda an: <a href="/regionen/kabale" className="text-jungle-700 hover:text-jungle-900 underline">Kabale</a> als Basis, Echuya für Bergwaldvögel, Mgahinga für Gorillas und Goldene Affen, und der Bwindi Impenetrable Forest für Gorilla-Trekking in einer der dichtesten Bergwaldregionen Afrikas. Diese Route verbindet die ornithologischen Highlights der Region mit den bekanntesten tierischen Attraktionen — und macht aus einem reinen Gorilla-Trip eine vollständigere Begegnung mit der Biodiversität des Albertine Rifts. Mehr zur Vogelbeobachtung im Gebiet gibt es auf der Seite zur <a href="/kabale-kisoro-vogelbeobachtung" className="text-jungle-700 hover:text-jungle-900 underline">Vogelbeobachtung zwischen Kabale und Kisoro</a>.
              </p>
              <p>
                Eintrittsgebühren und offizielle Besuchsregelungen für Echuya [RECHERCHE NOETIG]. Das Reservat wird von der National Forestry Authority verwaltet; aktuelle Informationen zu Genehmigungen und offiziellen Führungsangeboten sind über die Uganda Wildlife Authority oder direkt bei der NFA zu erfragen.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Echuya Forest Reserve — Bergwaldvögel und Natur" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zum Echuya Forest Reserve
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
              Mehr zu Südwestuganda und Vogelbeobachtung
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/kabale-kisoro-vogelbeobachtung', label: 'Vogelbeobachtung zwischen Kabale und Kisoro' },
                { href: '/regionen/kabale', label: 'Region Kabale: Reiseinformationen' },
                { href: '/nationalparks/mgahinga', label: 'Mgahinga Gorilla Nationalpark' },
                { href: '/virunga-conservation-area', label: 'Virunga Conservation Area' },
                { href: '/nationalparks/bwindi', label: 'Bwindi Impenetrable National Park' },
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
