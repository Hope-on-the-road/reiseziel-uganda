import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'grossraubtier-schutz-ziele-uganda'

export default function GrossraubtierSchutzZielePage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Welche Großraubtiere leben in Uganda?',
      antwort:
        'Uganda beheimatet Löwen, Leoparden, Geparden, gefleckte Hyänen und Wildhunde als klassische Großraubtiere. Hinzu kommen das Nilkrokodil, das an Gewässern wie dem Kazinga-Kanal und den Murchison Falls weit verbreitet ist, sowie Tüpfelhyänen und andere mittelgroße Prädatoren. Löwen findet man vor allem im Queen-Elizabeth-Nationalpark, im Murchison-Falls-Nationalpark und im Kidepo-Valley-Nationalpark.',
    },
    {
      frage: 'Was bedeutet das 30-Prozent-Ziel des Large Carnivore Action Plans konkret?',
      antwort:
        'Der Uganda Large Carnivore Action Plan 2024–2034 setzt als Kernziel eine Steigerung der Großraubtier-Populationen um 30 Prozent gegenüber dem Baseline-Wert von 2024. Das bedeutet nicht nur mehr Individuen, sondern auch eine gesündere Altersstruktur, eine breitere geografische Verteilung und weniger Inzucht in isolierten Populationen. Für Löwen im Queen-Elizabeth-Nationalpark heißt das in der Praxis: mehr Rudel, stabilere Territorien und weniger Verluste durch Vergeltungstötungen.',
    },
    {
      frage: 'Welche Nationalparks sind für den Großraubtierschutz am wichtigsten?',
      antwort:
        'Der Queen-Elizabeth-Nationalpark und der Murchison-Falls-Nationalpark sind die wichtigsten Rückzugsgebiete für Löwen und Leoparden. Der Kidepo-Valley-Nationalpark im Nordosten beherbergt die artenreichsten Raubtierpopulationen, ist aber touristisch weniger erschlossen. Bwindi Impenetrable Forest und der Mgahinga-Nationalpark spielen für Berggorillas und andere Primaten eine zentrale Rolle, werden aber im Aktionsplan getrennt behandelt.',
    },
    {
      frage: 'Wie können Reisende den Großraubtier-Naturschutz in Uganda unterstützen?',
      antwort:
        'Direkt durch die Wahl von Lodges und Guides, die Community-Benefit-Programme betreiben und einen Teil ihrer Einnahmen an lokale Schutzfonds abführen. Indirekt durch das Buchen offizieller Parkeintritte und Permit-gesteuerter Aktivitäten, denn jeder Schilling, der an die Uganda Wildlife Authority fließt, finanziert Ranger-Patrouillen und Anti-Wilderei-Einheiten. Reisende, die Konflikt-Zonen meiden und Verhaltensregeln einhalten, tragen außerdem dazu bei, dass Tiere ihr natürliches Verhalten behalten.',
    },
    {
      frage: 'Was passiert, wenn Großraubtiere Nutztiere reißen?',
      antwort:
        'Uganda hat ein staatliches Entschädigungssystem, das Bauern für nachgewiesene Verluste durch Großraubtiere entschädigt. In der Praxis dauern die Auszahlungen jedoch oft Monate, was Vergeltungstötungen begünstigt. Neuere Ansätze setzen auf präventive Maßnahmen: verstärkte Nachtpferche, Herdenschutzhunde und Community-Wildlife-Scouts, die als Puffer zwischen Parkökonom und Agrarbevölkerung wirken. Wo diese Programme greifen, sinkt die Konfliktrate nachweislich.',
    },
  ]

  return (
    <>
      <Head
        title="Großraubtier Naturschutz Uganda: 30% bis 2034"
        description="Uganda will bis 2034 seine Großraubtier-Populationen um 30 % steigern. Was der Action Plan bedeutet, welche Tiere betroffen sind und wie Tourismus hilft."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        {/* Hero-Bild */}
        <figure className="w-full max-h-[480px] overflow-hidden">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
            alt="Berggorilla frisst Blätter im Baumkronendach des Bwindi Impenetrable Forest, Juni 2026"
            className="w-full object-cover object-center"
          />
          <figcaption className="text-sm text-gray-500 text-center py-2 bg-gray-50">
            Ein Berggorilla in den Baumwipfeln des Bwindi Impenetrable Forest — Foto: Mark Suer, Juni 2026
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Großraubtier-Naturschutz in Uganda: Das 30-Prozent-Ziel bis 2034
          </h1>

          {/* Eröffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Es war ein unscheinbarer Morgen in Buhoma, als uns drei Kinder aus der Nachbarschaft des
            lokalen Waisenhauses auffanden. Sie standen ein Stück abseits, leicht verschüchtert, die
            Kleidung abgenutzt, die Körpersprache zurückhaltend. Wir haben sie ohne Zögern
            eingeladen, mit uns zu essen. Solche Begegnungen zeigen, warum Naturschutz in Uganda
            niemals losgelöst von der Frage betrachtet werden kann, wie es den Menschen in den
            Randzonen der Schutzgebiete geht. Wer Großraubtiere schützen will, muss auch die
            Gemeinschaften einbeziehen, die täglich mit diesen Tieren und den Risiken, die sie
            mitbringen, zusammenleben.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Während meines Besuchs im Juni 2026 in der Region Buhoma, GPS-verifiziert auf den
            Koordinaten -0.9617° N, 29.6109° E, wurde mir erneut bewusst, dass großraubtier
            naturschutz uganda kein abstraktes Verwaltungsthema ist, sondern gelebte Realität an
            Waldrändern, in Dörfern und auf Weideland. Die Frage, ob Uganda sein ehrgeiziges Ziel
            — eine Steigerung der Großraubtier-Populationen um 30 Prozent bis 2034 — tatsächlich
            erreichen kann, ist deshalb auch eine Frage danach, ob es gelingt, lokale Gemeinschaften
            zu Partnern statt zu Verlierern des Naturschutzes zu machen.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Der Uganda Large Carnivore Action Plan 2024–2034 formuliert dieses Ziel erstmals mit
            messbaren Kennzahlen. Er definiert Baseline-Daten, legt Monitoring-Protokolle fest und
            benennt konkrete Maßnahmen für jeden der betroffenen Nationalparks. Dieser Artikel
            erklärt, was das Dokument bedeutet, welche Tiere im Mittelpunkt stehen und warum das
            Ziel realistisch, aber keineswegs einfach zu erreichen ist.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">
              Fakten: Großraubtier-Naturschutz Uganda auf einen Blick
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
              <div>
                <span className="font-semibold text-jungle-800">Gültigkeitszeitraum:</span>{' '}
                2024–2034 (10 Jahre)
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Zielwert:</span> +30 % gegenüber
                Baseline 2024
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Hauptdokument:</span> Uganda Large
                Carnivore Action Plan 2024–2034
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Zuständige Behörde:</span> Uganda
                Wildlife Authority (UWA)
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Schwerpunkt-Nationalparks:</span>{' '}
                Queen Elizabeth, Murchison Falls, Kidepo Valley
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Wichtigste Tierarten:</span> Löwe,
                Leopard, Gepard, Tüpfelhyäne, Wildhund
              </div>
              <div>
                <span className="font-semibold text-jungle-800">
                  Tourismus-Beitrag zur Wirtschaft:
                </span>{' '}
                rund 979 Mio. USD jährlich (mehr als doppelt so viel wie Kaffeeexporte)
              </div>
              <div>
                <span className="font-semibold text-jungle-800">Autor vor Ort:</span> 14 Besuche,
                insgesamt rund 59 Tage, zuletzt Juni 2026
              </div>
            </div>
          </div>

          {/* H2: Action Plan */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Der Uganda Large Carnivore Action Plan: Ziele und Systematik
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Uganda hat eine lange Geschichte des formellen Naturschutzes, die weit ins 20. Jahrhundert
            zurückreicht. Doch erst der Large Carnivore Action Plan 2024–2034 schafft erstmals einen
            konsolidierten Rahmen, der alle relevanten Großraubtierarten unter einem einheitlichen
            Monitoring-System zusammenfasst. Frühere Schutzmaßnahmen waren oft art- oder
            parkspezifisch und ließen Querverbindungen — etwa die Wanderbewegungen von Leoparden
            zwischen benachbarten Schutzgebieten — weitgehend außer Acht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Das Kernziel des Plans ist quantifiziert: eine Steigerung der Populationsgrößen um
            mindestens 30 Prozent gegenüber dem Ausgangsstand von 2024. Dieses Ziel gilt nicht als
            arithmetisches Versprechen, sondern als Richtmarke, die regelmäßig überprüft werden soll.
            Alle drei Jahre sind systematische Zählungen geplant, deren Ergebnisse in öffentlich
            zugängliche Berichte einfließen. Die Herausforderung liegt bereits im ersten Schritt: Wer
            Populationsveränderungen zuverlässig messen will, braucht belastbare Ausgangsdaten. Für
            Löwen im Queen-Elizabeth-Nationalpark existieren solche Daten seit Jahren; für Leoparden
            und Geparden in abgelegenen Parkbereichen sind die Baseline-Werte erheblich unsicherer.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Plan unterscheidet zwischen direkten Schutzmaßnahmen — darunter Anti-Wilderei-
            Patrouillen, Fangverbote und Strafverfolgung — und indirekten Maßnahmen wie
            Gemeinschaftsprogrammen, die Konflikte zwischen Mensch und Tier reduzieren sollen.
            Letztere werden im Dokument als ebenso wichtig eingestuft wie die Strafverfolgung.
            Die Erfahrungen der vergangenen Jahre zeigen, dass reine Verbotspolitik ohne wirtschaftliche
            Alternativen für betroffene Gemeinden langfristig scheitert. Wo Bauern für gerissene
            Nutztiere keine oder nur verzögerte Entschädigung erhalten, greifen sie weiterhin zu Gift
            oder Fallen. Der Plan setzt deshalb auf Präventionsprogramme: verstärkte Nachtpferche,
            Herdenschutzhunde und ein Netz von Community-Wildlife-Scouts, die als erste Ansprechpartner
            bei Konflikten fungieren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Ein weiterer Baustein ist die Vernetzung isolierter Schutzgebiete. Viele ugandische
            Nationalparks sind von intensiv bewirtschaftetem Agrarland umgeben, was die natürliche
            Ausbreitung von Großraubtieren blockiert. Der Aktionsplan sieht sogenannte Wildlife
            Corridors vor — schmale Verbindungskorridore zwischen Schutzgebieten, die mit freiwilligen
            Landnutzungsvereinbarungen mit Privatgrundbesitzern gesichert werden sollen. Solche
            Korridore sind in anderen afrikanischen Ländern erprobt und haben die genetische Vielfalt
            isolierter Populationen nachweislich verbessert.
          </p>

          {/* H2: Welche Tiere */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Welche Großraubtiere schützt Uganda — und wo leben sie?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Uganda ist für viele Reisende vor allem das Land der Berggorillas. Das ist verständlich,
            denn eine Begegnung mit einer Gorillagruppe im Bwindi Impenetrable Forest gehört zu den
            intensivsten Naturerlebnissen, die der Kontinent bietet. Beim Gorilla-Trekking im Januar
            2026 stießen wir nach etwas mehr als einer Stunde Wanderung auf die erste Gruppe — der
            erste Gorilla saß hoch oben im Baum und fraß bedächtig Blätter. Ein Moment, der sich
            einprägt. Doch Berggorillas sind Primaten, keine Raubtiere im klassischen Sinne, und
            werden daher in einem eigenen Schutzrahmen gemanagt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die eigentlichen Großraubtiere, um die es im Large Carnivore Action Plan geht, sind der
            Afrikanische Löwe, der Leopard, der Gepard, die Tüpfelhyäne, der Afrikanische Wildhund
            und das Nilkrokodil. Jede dieser Arten steht vor spezifischen Herausforderungen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Afrikanische Löwe hat in Uganda in den vergangenen Jahrzehnten erhebliche
            Populationsrückgänge erlitten. Im Queen-Elizabeth-Nationalpark leben mehrere Rudel, die
            unter anderem durch ihr ungewöhnliches Verhalten bekannt sind: Sie klettern auf Bäume und
            ruhen dort oben — ein Phänomen, das weltweit nur an wenigen Standorten dokumentiert ist.
            Der Murchison-Falls-Nationalpark beherbergt eine zweite wichtige Löwenpopulation, während
            der Kidepo-Valley-Nationalpark im Nordosten die stabilsten Bestände aufweist, teilweise
            weil er am weitesten von menschlichen Siedlungen entfernt liegt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Leopard ist das anpassungsfähigste der ugandischen Großraubtiere. Er kommt in nahezu
            allen Nationalparks vor, ist aber wegen seiner nächtlichen Lebensweise und seiner Fähigkeit,
            in dichter Vegetation unsichtbar zu bleiben, schwer zu zählen. Zuverlässige
            Populationsschätzungen existieren nur für wenige Gebiete, was die Baseline-Erfassung
            besonders aufwendig macht. Kamerafallen — automatisch ausgelöste Wildkameras — gelten
            derzeit als genauestes Instrument für Leoparden-Zählungen und werden im Rahmen des
            Aktionsplans systematisch ausgebaut.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Das Nilkrokodil ist an vielen Gewässern Ugandas verbreitet, besonders entlang des
            Kazinga-Kanals im Queen-Elizabeth-Nationalpark und rund um die Murchison Falls. Am Kazinga-
            Kanal kann man bei Bootsfahrten Dutzende Krokodile auf Sandbänken beobachten, manchmal
            in unmittelbarer Nähe zu Flusspferden, die die gleichen Uferabschnitte bevorzugen. Beide
            Arten sind robust und ihre Bestände gelten als stabil, was sie als positive Ausnahme unter
            den ugandischen Großraubtieren ausweist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Rothschild-Giraffe ist streng genommen kein Raubtier, aber als Indikatorart für
            gesunde Savannenbiotope eng mit dem Großraubtier-Ökosystem verknüpft. Sie kommt fast
            ausschließlich im Murchison-Falls-Nationalpark vor und gilt als endemisch für Uganda. Wo
            Giraffenpopulationen stabil sind, deutet das auf eine intakte Beutepyramide hin — eine
            Voraussetzung, ohne die Löwen und Leoparden langfristig nicht überleben können.
          </p>

          {/* Inline-Bild Kinder Buhoma */}
          <figure className="my-10 rounded-xl overflow-hidden shadow-md">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
              alt="Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, Juni 2026"
              className="w-full object-cover"
            />
            <figcaption className="text-sm text-gray-500 px-4 py-3 bg-gray-50">
              Kinder aus der Nachbarschaft des Waisenhauses in Buhoma — Naturschutz und
              Gemeinschaftsentwicklung sind in Uganda untrennbar verbunden. Foto: Mark Suer, Juni 2026
            </figcaption>
          </figure>

          {/* H2: Erfolgsmessung und Monitoring */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Erfolgsmessung: Wie soll das 30-Prozent-Ziel überprüft werden?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Eines der schwierigsten Probleme im Naturschutz ist das Messen von Erfolg. Populationen
            wachsen und schrumpfen aus vielen Gründen — Klima, Beuteverfügbarkeit, Krankheiten,
            menschliche Eingriffe. Einen Anstieg oder Rückgang kausal auf eine bestimmte
            Schutzmaßnahme zurückzuführen, erfordert aufwendige Langzeitdaten, die für viele
            ugandische Nationalparks bislang nur lückenhaft vorliegen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Large Carnivore Action Plan setzt auf ein mehrschichtiges Monitoring-System. Die erste
            Ebene besteht aus regulären Ranger-Patrouillen, die Spuren, Sichtungen und Wilderei-
            Indikatoren erfassen. Diese Daten fließen in eine zentrale Datenbank der Uganda Wildlife
            Authority ein und erlauben eine grobe Einschätzung von Bestandsveränderungen. Die zweite
            Ebene sind periodische Fachzählungen durch Biologen, die mit standardisierten Methoden
            arbeiten: Transekt-Begehungen für Löwen, Kamerafallen für Leoparden, Luftzählungen für
            Elefanten und andere Großsäuger, deren Bestandsdichte als Proxy für die Qualität des
            Beutetierspektrums gilt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Entscheidend für die Glaubwürdigkeit des Aktionsplans ist die Unabhängigkeit der
            Erfolgsmessung. Wenn nur die Uganda Wildlife Authority selbst über Fortschritte berichtet,
            besteht die Gefahr, dass politischer Druck zu geschönten Zahlen führt. Der Plan sieht
            deshalb externe Überprüfungen durch internationale Partnerorganisationen vor, ohne dass
            diese im Dokument namentlich festgelegt werden. Beobachter aus dem Naturschutzsektor
            betrachten dies als schwachen Punkt des Rahmenwerks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Ein weiterer methodischer Knackpunkt ist die Definition des Zielzustands. 30 Prozent
            mehr Individuen als 2024 klingt konkret, aber was gilt als Individuum? Ein Löwe, der
            sporadisch in einem Korridor zwischen zwei Nationalparks gesichtet wird, wird anders
            gewertet als ein Tier, das dauerhaft in einem Rudel innerhalb eines Schutzgebiets lebt.
            Für wandernde Arten wie Wildhunde, deren Streifgebiete Hunderte von Quadratkilometern
            umfassen können, ist die Frage der Zuordnung besonders heikel. Der Plan gibt hierzu
            methodische Leitlinien vor, räumt aber ein, dass eine vollständige Standardisierung erst
            bis 2026 abgeschlossen sein soll. Das bedeutet, dass die ersten Monitoring-Jahre teilweise
            noch mit unterschiedlichen Erhebungsmethoden arbeiten werden — ein Umstand, der spätere
            Vergleiche erschwert.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Trotz dieser methodischen Einschränkungen ist das 30-Prozent-Ziel mehr als eine
            politische Geste. Es schafft einen Bezugspunkt, an dem Behörden, Geldgeber und
            Zivilgesellschaft gleichermaßen gemessen werden können. Und es setzt ein Signal, das über
            Uganda hinauswirkt: In einer Zeit, in der globale Biodiversitätsziele oft vage formuliert
            sind, ist ein messbares, zeitlich befristetes Ziel auf nationaler Ebene eine
            Ausnahmeerscheinung.
          </p>

          {/* H2: Tourismus und Naturschutz */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Tourismus als Finanzierungsgrundlage des Naturschutzes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Uganda ist wirtschaftlich in erheblichem Maße auf den Tourismus angewiesen. Die
            Tourismusbranche ist Ugandas größter Devisenbringer — mit Einnahmen, die mehr als doppelt
            so hoch sind wie die des Kaffeeexports. Diese Zahlen machen deutlich, welche wirtschaftliche
            Bedeutung intakte Wildtierpopulationen für das Land haben. Wer Löwen, Leoparden und
            Krokodile schützt, schützt also nicht nur Biodiversität, sondern auch die wirtschaftliche
            Grundlage vieler Regionen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Allerdings ist diese Abhängigkeit auch ein Risiko. Wenn Touristen ausbleiben — sei es
            durch politische Instabilität, Seuchen oder geopolitische Unsicherheiten — brechen die
            Einnahmen ein, die für Ranger-Gehälter und Schutzprogramme benötigt werden. Der Large
            Carnivore Action Plan benennt dieses strukturelle Problem und plädiert für eine
            Diversifizierung der Finanzierungsquellen: Internationale Klimaschutzfonds, Carbon-Credits
            für intakte Waldökosysteme und direkte Zahlungen für Ökosystemleistungen sollen mittelfristig
            einen Teil der Tourismusabhängigkeit abfedern.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Für Reisende, die Uganda besuchen, bedeutet das: Jede Parkeintrittsgebühr, jedes offiziell
            gebuchte Permit und jede Übernachtung in einer Community-Lodge fließt direkt in das System,
            das Großraubtiere am Leben hält. Das gilt für das Gorilla-Trekking in Bwindi genauso wie
            für eine Bootsfahrt am Kazinga-Kanal oder eine Löwen-Pirschfahrt im Murchison-Falls-
            Nationalpark. Nachhaltiger Tourismus in Uganda ist deshalb kein Nischenangebot für
            Idealisten, sondern strukturell notwendig für die Finanzierung des Artenschutzes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Das Uganda Wildlife Training Institute — das einzige spezialisierte Ausbildungszentrum
            für Wildlife-Fachkräfte im Land — bildet pro Jahrgang rund 120 Studenten aus. Im
            akademischen Jahr 2013/14 waren es 121 Eingeschriebene, ein Anstieg von fast 25 Prozent
            gegenüber dem Vorjahr. Für eine Volkswirtschaft, die ihren Naturschutz professionalisieren
            will, ist diese Ausbildungskapazität ein entscheidender Engpass — und ein Bereich, in dem
            internationale Partnerorganisationen gezielt investieren könnten.
          </p>

          {/* H2: Herausforderungen */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Herausforderungen: Warum das Ziel schwer zu erreichen ist
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Wer Uganda kennt, weiß, dass der Abstand zwischen offiziellen Zielen und deren Umsetzung
            erheblich sein kann. Das gilt nicht nur für den Naturschutz. Strukturelle Herausforderungen
            wie begrenzte staatliche Ressourcen, weiträumige und schwer kontrollierbare Grenzen sowie
            anhaltende Armut in Randzonen der Nationalparks machen jeden Schutzplan zu einem
            Langzeitprojekt mit ungewissem Ausgang.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Wilderei ist nach wie vor das akuteste Problem. Drahtschlingen-Fallen, die ursprünglich
            für Buschfleisch gelegt werden, töten Großraubtiere als unbeabsichtigten Beifang. Gezielte
            Wilderei auf Löwen — für Körperteile, die in traditionellen Märkten Abnehmer finden — ist
            in bestimmten Regionen dokumentiert. Der Aktionsplan sieht eine Stärkung der Anti-
            Wilderei-Einheiten vor, die eng mit dem Ranger-Korps der Uganda Wildlife Authority
            zusammenarbeiten. Aber auch hier gilt: Mehr Ranger brauchen mehr Budget, und das Budget
            hängt letztlich wieder vom Tourismusaufkommen ab.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Ein zweites strukturelles Problem ist der Mensch-Raubtier-Konflikt. Löwen, die aus dem
            Queen-Elizabeth-Nationalpark ausbrechen und Rinder reißen, sind für betroffene Bauern
            eine existenzielle Bedrohung, keine abstrakte Bedrohung der Biodiversität. Die
            Vergeltungstötungen, die darauf folgen, sind rational aus der Perspektive einzelner
            Haushalte — und irrational aus der Perspektive des Ökosystems. Diesen Widerspruch
            aufzulösen, erfordert mehr als guten Willen. Es braucht funktionierende
            Entschädigungssysteme, schnelle Auszahlungen und lokale Strukturen, die Konflikte frühzeitig
            auffangen. [ZITAT: Community-Wildlife-Scout über Reaktionszeiten bei Nutztierverlusten]
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Klimawandel fügt eine dritte Dimension hinzu. Veränderte Niederschlagsmuster
            beeinflussen das Wanderverhalten von Beutetieren wie Kob-Antilopen und Wasserbüffeln.
            Wo die Beute wandert, folgen Löwen und Leoparden — und verlassen dabei den Schutzbereich
            der Nationalparks. Klimaanpassung in der Naturschutzplanung ist in Uganda noch ein
            junges Feld, aber der Aktionsplan erkennt es erstmals explizit als Variable an.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Trotz all dieser Widrigkeiten gibt es Grund zu vorsichtigem Optimismus. Uganda hat in
            den vergangenen zehn Jahren bewiesen, dass entschlossener politischer Wille
            Wildtierpopulationen tatsächlich stabilisieren kann. Die Berggorilla-Population im Bwindi
            Impenetrable Forest ist eine der wenigen weltweit, die wächst. Das ist kein Zufall,
            sondern das Ergebnis jahrzehntelanger konsequenter Schutzarbeit, bei der Ranger,
            Gemeinschaftsprogramme und internationaler Tourismus zusammenwirken. Wenn dieses Modell
            auf Großraubtiere übertragen werden kann, ist das 30-Prozent-Ziel bis 2034 erreichbar —
            knapp, aber erreichbar.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-14 mb-6">
            Häufige Fragen zum Großraubtier-Naturschutz in Uganda
          </h2>
          <div className="space-y-3 mb-14">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full text-left px-5 py-4 font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.frage}</span>
                  <span className="text-jungle-700 text-xl leading-none flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 py-4 text-gray-700 leading-relaxed bg-white">
                    {item.antwort}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interne Links */}
          <div className="border-t border-gray-200 pt-10 mt-10">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
              Weiterführende Themen auf reiseziel-uganda.de
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/tiere/loewe', label: 'Löwen in Uganda: Wo und wie man sie beobachtet' },
                { href: '/tiere/elefant', label: 'Elefanten in Uganda: Lebensraum und Schutz' },
                { href: '/nationalparks/queen_elizabeth', label: 'Queen-Elizabeth-Nationalpark' },
                { href: '/nationalparks/murchison_falls', label: 'Murchison-Falls-Nationalpark' },
                { href: '/nachhaltiger-tourismus-uganda', label: 'Nachhaltiger Tourismus in Uganda' },
                { href: '/ranger-uganda', label: 'Ranger in Uganda: Schutz aus erster Hand' },
                { href: '/uwa-anti-poaching', label: 'Anti-Wilderei: Die Arbeit der UWA' },
                { href: '/wildlife-crime-terrorismus-uganda', label: 'Wildlife Crime in Uganda' },
                { href: '/tiere/berggorilla', label: 'Berggorilla: Portrait und Schutzstatus' },
                { href: '/gorilla-trekking', label: 'Gorilla-Trekking in Uganda buchen' },
              ]
                .slice(0, 6)
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg border border-jungle-200 bg-jungle-50 text-jungle-800 hover:bg-jungle-100 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
