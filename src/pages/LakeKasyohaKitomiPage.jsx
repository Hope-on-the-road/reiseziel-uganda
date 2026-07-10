import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'lake-kasyoha-kitomi-voegel'

export default function LakeKasyohaKitomiPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Was ist Lake Kasyoha-Kitomi und warum ist er für Vogelbeobachter interessant?',
      antwort: 'Lake Kasyoha-Kitomi liegt im gleichnamigen Central Forest Reserve in Westuganda, in unmittelbarer Nähe zum Queen Elizabeth Nationalpark. Das Schutzgebiet fungiert als Pufferzone zwischen den offenen Savannengebieten im Süden und dem geschlossenen Maramagambo-Wald im Norden. Für Vogelbeobachter ist dieser Übergangsbereich besonders wertvoll: Hier begegnen sich Feuchtgebietsbewohner, Waldbewohner und Savannenarten auf engem Raum. Die assoziierten Feuchtgebiete beherbergen typische Wasservogelarten wie Jacanas, Reiher, Eisvögel und Enten; angrenzende Waldbereiche liefern Vertreter der westafrikanischen Waldzone.'
    },
    {
      frage: 'Welche Vogelarten wurden in der unmittelbaren Umgebung des Lake Kasyoha-Kitomi dokumentiert?',
      antwort: 'In den Monitoring-Gebieten rund um den Lake Kasyoha-Kitomi wurden in zwei benachbarten Habitattypen insgesamt über 100 Arten nachgewiesen. In der Savanna-Zone nahe Maramagambo traten 46 Arten mit 401 Individuen auf, darunter sechs Arten mit besonderem Schutzstatus. Am degradierten Graslandstandort am Lake Birinzi wurden 54 Arten und 384 Individuen gezählt, wobei der Weißköpfige Sägeschwalbe mit 54 Individuen die häufigste Art darstellte. Feuchtgebietstypische Arten wie Afrikanische Jacana, Seidenreiher und verschiedene Eisvogelarten sind an den Seeufern des Reservates regelmäßig vertreten.'
    },
    {
      frage: 'Was bedroht die Vogelwelt rund um Lake Kasyoha-Kitomi?',
      antwort: 'Die größte dokumentierte Bedrohung in der Region ist die Umwandlung von natürlichem Grasland in Eukalyptus-Plantagen. Am Lake-Birinzi-Gebiet an der Kampala-Bukakata-Straße wird traditionelles Grasland schrittweise durch Eukalyptus-Monokulturen ersetzt — ein Prozess, der für Bodenbrüter und graslandbewohnende Arten wie Weber, Prachtfinken und bestimmte Spurfowl-Arten direkt lebensraumbedrohend ist. Da der Lebensraum fehlt, verschwinden die Arten — auch wenn sie formal unter Schutz stehen. Das Savannengebiet nahe Maramagambo ist bisher weitgehend intakt; dort ist Viehbeweidung die einzige menschliche Nutzung.'
    },
    {
      frage: 'Wie lässt sich ein Besuch am Lake Kasyoha-Kitomi mit anderen Aktivitäten in der Region kombinieren?',
      antwort: 'Das Kasyoha-Kitomi-Reservat liegt unmittelbar neben dem Queen Elizabeth Nationalpark, was eine Kombination mit den dort üblichen Aktivitäten nahelegt: Bootsfahrten auf dem Kazinga Channel, Pirschfahrten in der Ishasha-Zone und Schimpansen-Trekking im Kyambura Gorge. Der benachbarte Maramagambo Forest ist für die Python-Höhle bekannt, in der eine große Fledermauspopulation lebt und regelmäßig Pythons beobachtet werden. Eine mehrtägige Basis im Queen-Elizabeth-Bereich erlaubt es, alle diese Standorte ohne übermäßige Transferzeiten zu verbinden.'
    },
    {
      frage: 'Wann ist die beste Zeit für Vogelbeobachtungen im Lake-Kasyoha-Kitomi-Gebiet?',
      antwort: 'Die Monitoring-Daten, auf denen dieser Artikel basiert, stammen aus dem Zeitraum Juli bis August — der Trockenzeit in Westuganda. In dieser Phase sind viele Arten gut sichtbar, da die Vegetation weniger dicht ist und Tiere sich näher an verbliebenen Wasserstellen aufhalten. Zugvögel aus der Paläarktis sind zwischen Oktober und April präsent und erhöhen die Gesamtartenzahl erheblich. [RECHERCHE NOETIG: Detaillierte Monatsdaten zur Artenzusammensetzung am Lake Kasyoha-Kitomi über mehrere Jahre, um saisonale Muster besser abbilden zu können]'
    }
  ]

  return (
    <>
      <Head
        title="Lake Kasyoha-Kitomi: Vogelvielfalt im Feuchtgebiet Westugandas"
        description="Lake Kasyoha-Kitomi Central Forest Reserve in Westuganda: Feuchtgebietsvögel, Grasland-Arten und Waldrand-Vogelwelt zwischen Queen Elizabeth NP und Maramagambo. Monitoring-Daten und Reisehinweise."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Feuchtgebiet in Westuganda nahe dem Queen Elizabeth Nationalpark — Lebensraum für Wasservögel, Reiher und Jacanas"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Westuganda, Queen-Elizabeth-Gebiet — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Lake Kasyoha-Kitomi: Vogelvielfalt im Feuchtgebiet zwischen Savanne und Wald
          </h1>

          {/* Einleitung */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Zwischen dem offenen Grasgürtel der Queen-Elizabeth-Savanne und dem dichten Kronendach des Maramagambo Forest liegt ein Schutzgebiet, das selten im Mittelpunkt von Reiseführern steht, für Ornithologen aber außerordentlich interessant ist: das Lake-Kasyoha-Kitomi Central Forest Reserve in Westuganda. Der See und seine assoziierten Feuchtgebiete bilden den Kern eines Lebensraum-Mosaiks, das Wasser-, Grasland- und Waldrandarten auf engem Raum zusammenführt.
            </p>
            <p>
              Wir sind Uganda inzwischen gut vertraut. Vierzehn dokumentierte Besuche, 65 Tage im Land — davon mehrere in der Westregion rund um Queen Elizabeth. Die Vogelwelt dieser Zone ist bei jeder Reise ein Teil des Programms, und der Übergangsbereich zwischen Reservat, Savanne und Feuchtgebiet zeigt sich dabei von einer anderen Seite als der spektakuläre Kazinga Channel oder der Kyambura Gorge.
            </p>
            <p>
              Dieser Artikel beschreibt, was das Vogelmonitoring in den Habitaten rund um Lake Kasyoha-Kitomi ergeben hat, welche Arten dort vorkommen, welche Gefährdungen dokumentiert sind und was Besucher in der Region erwarten können.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">
              Fakten: Lake Kasyoha-Kitomi und seine Vogelwelt
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Schutzgebietstatus:</span> Central Forest Reserve</div>
                <div><span className="font-semibold">Lage:</span> Westuganda, nahe Queen Elizabeth NP</div>
                <div><span className="font-semibold">Funktion:</span> Pufferzone Savanne–Maramagambo-Wald</div>
                <div><span className="font-semibold">Nachbar-CFR:</span> Maramagambo Forest (Python Cave)</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Savanna-Site Artenzahl:</span> 46 Arten, 401 Individuen</div>
                <div><span className="font-semibold">Birinzi-Site Artenzahl:</span> 54 Arten, 384 Individuen</div>
                <div><span className="font-semibold">Schutzstatus-Arten (Savanna):</span> 6 Arten</div>
                <div><span className="font-semibold">Hauptgefährdung:</span> Eukalyptus-Plantagen, Habitatverlust</div>
              </div>
            </div>
          </div>

          {/* H2: Schutzgebiet und Lage */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Das Central Forest Reserve: Puffer zwischen zwei Welten
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Das Lake-Kasyoha-Kitomi Central Forest Reserve gehört zum System der ugandischen Zentralwaldreservate, die von der National Forestry Authority verwaltet werden und formal Schutzstatus genießen. Seine Lage macht es ökologisch bedeutsam: Es liegt im Übergangsbereich zwischen den offenen Grasland- und Savannengebieten des Queen Elizabeth Nationalparks im Süden und dem Maramagambo-Waldkomplex im Norden — einem der größten zusammenhängenden Waldgebiete Westugandas.
              </p>
              <p>
                Diese Pufferfunktion ist nicht nur auf dem Papier relevant. In der Praxis bedeutet sie, dass Arten beider Lebensräume das Reservat nutzen: Waldvögel aus dem Maramagambo streifen in die Waldrandbereiche des Kasyoha-Kitomi-Reservates; Savannen- und Graslandarten aus dem Queen-Elizabeth-Gebiet nutzen die Offenlandzonen und die Feuchtgebietsränder des Sees. Das erzeugt eine Artenvielfalt, die in einem homogenen Lebensraum nicht zu erwarten wäre.
              </p>
              <p>
                Der Maramagambo Forest unmittelbar nördlich ist vor allem für die sogenannte Python Cave bekannt — ein unterirdisches Höhlensystem, in dem eine große Kolonie kleiner Fledermäuse lebt und in dem sich regelmäßig afrikanische Pythons aufhalten, die sich von Fledermäusen ernähren. Diese Attraktion bringt Besucher in die Region, die sonst möglicherweise am Kasyoha-Kitomi-Gebiet vorbeigefahren wären — und die dabei unbemerkt an einem der ornithologisch interessantesten Übergangsbereiche Westugandas vorbeiziehen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">
                Lebensräume im Mosaik: Feuchtgebiet, Savanne und Waldrand
              </h3>
              <p>
                Das Schutzgebiet und seine unmittelbare Umgebung umfassen mehrere klar unterschiedliche Lebensraumtypen. Das eigentliche Seeufer und die angrenzenden Feuchtgebiete bieten Habitatstrukturen, die für Wasservögel und Watvögel geeignet sind: flache Uferzonen, Schilfgürtel, überflutete Graslandinseln und nährstoffreiche Flachwasserbereiche. Weiter vom Ufer entfernt gehen die Feuchtgebiete in Grasland über; in höheren Lagen folgen Waldrandbereiche und schließlich der geschlossene Waldkomplex des Maramagambo.
              </p>
              <p>
                Für Vogelbeobachter bedeutet dieses Mosaik: Wer einen halben Tag in der Region verbringt, hat prinzipiell Zugang zu Arten aus drei vollständig verschiedenen Gilden — Feuchtgebietsbewohner, Graslandspezialisten und Waldrandvögel. Das ist in Ugandas Vogelbeobachtungslandschaft keine Selbstverständlichkeit, aber auch keine Ausnahme. Westuganda gehört zu den artenreichsten Birding-Regionen des Landes, und das Kasyoha-Kitomi-Gebiet ist ein Teil dieser Vielfalt.
              </p>
            </div>
          </section>

          {/* H2: Savanna-Site */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Phoenix Savanna: 46 Arten und sechs Schutzstatus-Vögel
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Eines der systematisch untersuchten Monitoring-Gebiete in der Kasyoha-Kitomi-Region ist eine Savannenzone nahe dem Maramagambo Forest, die entlang der Straße zwischen Minziro und dem Kyebe-Sub-County liegt. Die Vegetation ist charakteristisch für feuchtes ostafrikanisches Grasland mit Einstreuung: Hauptsächlich offenes Grassland, durchsetzt mit Akazien und Phoenix-Palmen, die dem Gebiet seinen Charakter geben.
              </p>
              <p>
                Menschliche Aktivität beschränkt sich auf extensive Viehbeweidung durch Rinder. Das ist für Vogelbeobachtungen kein schlechter Ausgangspunkt: Grasland mit moderatem Weidevieh ist in vielen Teilen Afrikas ein produktiver Vogellebensraum — viele Arten folgen dem Vieh, um aufgescheuchte Insekten zu erbeuten oder den freigeschabten Boden auf Wirbellose abzusuchen.
              </p>
              <p>
                Systematische Zählungen ergaben 46 Vogelarten mit insgesamt 401 erfassten Individuen in diesem Habitat. Bemerkenswert ist weniger die schiere Gesamtzahl als die Qualität: Sechs Arten weisen einen besonderen Schutzstatus auf, darunter der Rothalsspornvogel (Pternistis afer), der regional als gefährdet eingestuft ist und auf nationaler Ebene als verletzlich gilt. Diese Art bevorzugt genau diesen Lebensraum: offenes Grasland mit Gebüschelementen, gemäßigte Beweidung, keine dichte Waldstruktur.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                  alt="Graslandzone nahe Maramagambo in Westuganda — Lebensraum für Savannen- und Graslandvögel"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Westuganda — offenes Grasland mit Akazien bietet Lebensraum für gefährdete Savannenarten. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">
                Kuhreiher als häufigste Art — und was dahintersteht
              </h3>
              <p>
                Der Kuhreiher (Bubulcus ibis) war in der Savannenzone die individuenreichste Art. Das ist keine Überraschung: Der Kuhreiher ist in ganz Subsahara-Afrika die auffälligste Begleitart von Weidevieh und zeigt sich überall dort in großer Zahl, wo Rinder grasen. Er ist ein opportunistischer Insektenfresser, der aufgescheuchte Grashüpfer, Heuschrecken und kleine Wirbeltiere konsumiert, ohne selbst nach Nahrung suchen zu müssen — er folgt einfach den Rindern.
              </p>
              <p>
                Für die Bewertung des Lebensraums ist der Kuhreiher als Indikator wenig aussagekräftig — er ist nahezu ubiquitär. Die sechs Arten mit besonderem Schutzstatus sind dagegen ein echter Indikator: Sie zeigen an, dass die Habitatqualität noch ausreicht, um spezialisierte Graslandvögel zu halten, die empfindlicher auf Landnutzungsänderungen reagieren als Generalisten.
              </p>
              <p>
                [RECHERCHE NOETIG: Vollständige Liste aller sechs Schutzstatus-Arten im Savannen-Monitoring-Gebiet, neben dem Rothalsspornvogel]
              </p>
            </div>
          </section>

          {/* H2: Lake Birinzi / Habitatverlust */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Lake Birinzi: 54 Arten — und die Bedrohung durch Eukalyptus
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ein zweiter dokumentierter Monitoring-Standort in der weiteren Kasyoha-Kitomi-Region liegt am Lake Birinzi, entlang der Kampala-Bukakata-Straße. Dieser Standort hat eine andere Geschichte als die weitgehend intakte Savannenzone nahe Maramagambo. Am Lake Birinzi findet aktiv eine Habitatumwandlung statt: Natürliches Grasland wird schrittweise in Eukalyptus-Plantagen umgewandelt.
              </p>
              <p>
                Die Monitoring-Ergebnisse zeigen gleichwohl noch eine beachtliche Artenvielfalt: 54 Vogelarten wurden erfasst, 384 Individuen gezählt. Häufigste Art war der Weißköpfige Sägeschwalbe mit 54 Individuen, gefolgt von Vieillots Schwarzwebervogel und der Bronzemannikin mit je 35 Individuen. Diese Artenzusammensetzung ist charakteristisch für degradiertes oder strukturell vereinfachtes Grasland an Seeufern — Arten, die mit Gebüschelementen, Waldrändern und gemischtem Habitat zurechtkommen, dominieren gegenüber echten Graslandspezialisten.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">
                Eukalyptus-Plantagen: Warum das problematisch ist
              </h3>
              <p>
                Eukalyptus ist in Uganda weit verbreitet als schnell wachsende Holzplantage. Das Holz wird lokal als Bauholz und Brennholz genutzt; die Plantagen versprechen schnelle wirtschaftliche Erträge. Für Vogelpopulationen, die auf offenes Grasland angewiesen sind, bedeutet die Umwandlung jedoch einen direkten Lebensraumverlust ohne funktionale Kompensation.
              </p>
              <p>
                Eukalyptus-Plantagen sind arme Vogelhabitate. Die Baumreihen bieten weder die Nahrungsgrundlage noch die Neststrukturen, die einheimische Grasland-Vogelarten benötigen. Arten wie bestimmte Lerchenarten, Pieper, Grassänger und bodenbrütende Spornvögel, die auf offenes, kurzrasiges oder mittellanges Grasland angewiesen sind, können in Eukalyptus-Monokulturen nicht überleben — sie verschwinden schlicht aus dem Gebiet.
              </p>
              <p>
                Die Monitoring-Daten aus dem Lake-Birinzi-Gebiet spiegeln das wider: Die verbleibenden Arten sind Generalisten oder Waldrand-Anpasser. Die tatsächlichen Graslandspezialisten, die dort potenziell vorhanden wären, wenn das Habitat erhalten geblieben wäre, tauchen in den Zählungen nicht mehr auf oder sind stark unterrepräsentiert.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">
                Ein größeres Muster
              </h3>
              <p>
                Was am Lake Birinzi dokumentiert ist, ist kein Einzelfall. In weiten Teilen Ugandas wird Grasland — sowohl innerhalb als auch außerhalb von Schutzgebietsgrenzen — durch Plantagen, Landwirtschaft und Siedlungsentwicklung ersetzt. Die ugandischen Savannen und feuchten Grasländer gehören zu den am stärksten bedrohten Lebensräumen des Landes, obwohl sie keine international bekannte Schlagzeilen produzieren wie Waldrodungen oder Wildtierschmuggel.
              </p>
              <p>
                Die Vogelarten dieser Lebensräume sind entsprechend unter Druck. Monitoring-Programme wie das, aus dem diese Daten stammen, sind deshalb nicht nur wissenschaftlich relevant — sie sind notwendig, um überhaupt zu wissen, ob und wie schnell sich die Bestände verändern.
              </p>
            </div>
          </section>

          {/* H2: Feuchtgebietsvögel am See */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Feuchtgebietsvögel am Lake Kasyoha-Kitomi
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der See selbst und seine unmittelbaren Uferbereiche sind Lebensraum für die klassischen ugandischen Feuchtgebietsarten. Afrikanische Jacanas (Actophilornis africanus) sind an flachen Uferzonen mit schwimmender Vegetation vertreten — ihre langen Zehen ermöglichen das Laufen auf Seerosenblättern und Wasserhyazinthen. Verschiedene Reiherarten, darunter Seiden-, Grau- und Kuhreih, nutzen die Uferbereiche als Jagdgrundlage. Eisvögel — von der kleinen, kobaltblauen Malachiteisvögelart bis zum großen Rieseneisvogel — stehen bewegungslos über dem Wasser oder auf tiefen Ästen und stoßen auf Fische herab.
              </p>
              <p>
                Diese Artenzusammensetzung ist charakteristisch für ugandische Flachseen in Waldnähe. Sie unterscheidet sich von der Artenzusammensetzung des Kazinga Channels, der ein offeneres, großräumigeres Gewässer mit stärkerem Wassertierbestand ist. Am Lake Kasyoha-Kitomi ist die Atmosphäre stiller, abgelegener, weniger frequentiert — was für Vogelbeobachter, die konzentriertes Beobachten ohne Touristenandrang schätzen, ein klarer Vorteil sein kann.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">
                Waldrandvögel an der Grenze zu Maramagambo
              </h3>
              <p>
                An der Grenze zwischen dem Kasyoha-Kitomi-Reservat und dem Maramagambo Forest treten Vogelarten auf, die zwischen den beiden Lebensräumen pendeln. Waldgeneralisten — Arten, die weder streng auf geschlossenen Wald noch auf offene Flächen beschränkt sind — nutzen diese Übergänge intensiv. Dazu gehören verschiedene Spintenvögel, Nektarvögel und Bartvögel, die morgens in den Waldrand ausweichen und bei Störungen in die dichteren Bereiche des Maramagambo zurückkehren.
              </p>
              <p>
                Der Waldrand ist für Vogelbeobachtungen besonders produktiv in den frühen Morgenstunden, wenn die Aktivität am höchsten ist. Wer sich in den ersten ein bis zwei Stunden nach Sonnenaufgang an den Waldrand des Maramagambo begibt, hat gute Chancen auf Sichtungen, die in der Hitze des Mittags kaum mehr möglich sind.
              </p>
              <p>
                [RECHERCHE NOETIG: Dokumentierte Waldrandvogelarten speziell an der Grenze Kasyoha-Kitomi/Maramagambo — welche Arten wurden systematisch erfasst, welche gelten als charakteristisch für diesen Übergangsbereich]
              </p>
            </div>
          </section>

          {/* H2: Praktische Hinweise */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Besuch in der Region: Was Vogelbeobachter wissen sollten
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Das Lake-Kasyoha-Kitomi-Gebiet liegt in Westuganda und ist von Kampala aus über Mbarara erreichbar. Die Straßenanbindung ist deutlich besser als noch vor einigen Jahren, und wer den Queen Elizabeth Nationalpark als Ausgangsbasis nutzt, kann die Region ohne lange Transferzeiten einschließen. Von Mweya — dem zentralen Knotenpunkt im Queen-Elizabeth-Gebiet — sind die relevanten Standorte innerhalb weniger Stunden erreichbar.
              </p>
              <p>
                Da es sich um ein weniger frequentiertes Gebiet handelt, ist lokale Ortskenntnis entscheidend. Ein Guide, der die Wege rund um den See und in den angrenzenden Waldrandbereich kennt, erhöht die Beobachtungsqualität erheblich. Ranger der National Forestry Authority sind im Reservat präsent; eine Anmeldung vor dem Besuch ist sinnvoll.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125464168_l7rh.jpg"
                  alt="Ugandischer Guide bei der Vogelbeobachtung in Westuganda — lokale Expertise macht den Unterschied"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Westuganda — ohne lokalen Guide bleiben viele Sichtungen aus. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">
                Optimale Beobachtungsbedingungen
              </h3>
              <p>
                Die Trockenzeit von Juni bis August bietet in Westuganda die besten Bedingungen für Vogelbeobachtungen im offenen Grasland. Die Vegetation ist kürzer, Vögel sind gut sichtbar, und die Wege sind ohne Schlamm befahrbar. In der Regenzeit von März bis Mai und Oktober bis November ist die Vegetation dichter, und manche Wege werden unpassierbar — dafür sind jedoch mehr Zugvögel präsent und viele einheimische Arten in vollem Brutkleid.
              </p>
              <p>
                Für Feuchtgebietsvögel am Seeufer ist die frühe Morgenstunde die produktivste Zeit. Reiher, Eisvögel und Jacanas sind in den ersten zwei bis drei Stunden nach Sonnenaufgang am aktivsten. Für die Savannenzone nahe Maramagambo gilt dasselbe — der Rothalsspornvogel und andere Bodenbrüter sind am frühen Morgen am leichtesten zu entdecken, wenn sie sich offen im Grasland bewegen.
              </p>
              <p>
                Ein Fernglas mit guter Dämmerungsleistung ist unverzichtbar. Für Waldrandvögel empfiehlt sich zusätzlich ein Spektiv, das in offenem Gelände den Ausblick auf weiter entfernte Arten erheblich verbessert. Spiegelreflexkameras oder Bridgekameras mit langen Brennweiten sind für Fotografen sinnvoll — viele der dokumentierten Arten halten Abstand und lassen sich am besten von einem festen Beobachtungspunkt aus fotografieren.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">
                Einbettung in eine Westuganda-Reise
              </h3>
              <p>
                Das Kasyoha-Kitomi-Gebiet eignet sich nicht als einziges Ziel einer Uganda-Reise, aber sehr gut als Teil eines zusammenhängenden Westuganda-Programms. Wer den Queen Elizabeth Nationalpark bereits plant — Bootsfahrt auf dem Kazinga Channel, Pirschfahrt in den Kanal-Gebieten, vielleicht Schimpansen-Trekking im Kyambura Gorge —, kann die Kasyoha-Kitomi-Region als halbtägigen Ausflug ergänzen, ohne das Gesamtprogramm zu überlasten.
              </p>
              <p>
                Die Python Cave im Maramagambo wird ohnehin von vielen Besuchern als Aktivität eingebucht; der Weg dorthin führt durch die Waldrandbereiche, die ökologisch mit dem Kasyoha-Kitomi-Reservat verbunden sind. Eine bewusste Verlängerung dieses Ausflugs um ein bis zwei Stunden — mit Fokus auf Vogelbeobachtung entlang des Waldrands und an den Seeufern — lässt sich ohne großen Mehraufwand in ein bestehendes Programm einbauen.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Impressionen: Lake Kasyoha-Kitomi und Umgebung" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu Lake Kasyoha-Kitomi und seiner Vogelwelt
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
              Weitere Themen rund um Westuganda und Vogelbeobachtung
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark: Überblick' },
                { href: '/boot-safari-uganda', label: 'Bootsafari in Uganda: Kazinga Channel' },
                { href: '/vogelbeobachten-queen-elizabeth', label: 'Vogelbeobachtung im Queen Elizabeth Nationalpark' },
                { href: '/oekotourismus-uganda', label: 'Okotourismus in Uganda: Schutz und Reise' },
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
