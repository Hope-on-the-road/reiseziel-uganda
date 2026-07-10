import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'natureuganda-mission'

const faqItems = [
  {
    frage: 'Was ist NatureUganda und womit beschäftigt sich die Organisation?',
    antwort:
      'NatureUganda ist eine ugandische Naturschutzorganisation, die sich auf die Erforschung, Wertschätzung und den Schutz der heimischen Natur spezialisiert hat. Ein Schwerpunkt liegt auf systematischem Vogelmonitoring: Seit 2006 werden unter anderem die Ssele-Inseln regelmäßig erfasst. Die Organisation arbeitet dabei eng mit der Uganda Wildlife Authority zusammen und hat unter anderem den Uganda Bird Monitoring Report 2019 mitverfasst.',
  },
  {
    frage: 'Wie viele Vogelarten gibt es in Uganda?',
    antwort:
      'Uganda beherbergt mehr als 1.000 Vogelarten — eine außergewöhnliche Dichte für die Größe des Landes. Dieser Artenreichtum erklärt sich aus der Lage Ugandas an der Schnittstelle mehrerer Ökozonen: Savannen, Bergwälder, Feuchtgebiete und tropische Tieflandregenwälder existieren hier auf engem Raum nebeneinander. Monitoring-Organisationen wie NatureUganda dokumentieren diesen Bestand systematisch.',
  },
  {
    frage: 'Welche Schutzgebiete überwacht NatureUganda?',
    antwort:
      'NatureUganda ist an mehreren Monitoringstandorten aktiv, darunter die Ssele-Inseln, der Kazinga-Kanal im Queen-Elizabeth-Nationalpark sowie verschiedene andere Nationalparks und Waldschutzgebiete Ugandas. Das Netzwerk aus überwachten Standorten ermöglicht es, Bestandsveränderungen über Zeit und Standort hinweg zu verfolgen.',
  },
  {
    frage: 'Welche anderen Naturschutzorganisationen sind in Uganda aktiv?',
    antwort:
      'Neben NatureUganda sind mehrere internationale Organisationen in Uganda tätig. Die Zoologische Gesellschaft Frankfurt (ZGF) engagiert sich seit mehr als 30 Jahren in afrikanischen Nationalparks, unter anderem in Uganda. Das Jane-Goodall-Institut, das 1994 in München gegründet wurde, konzentriert sich vor allem auf den Schutz der Menschenaffen. Die Uganda Wildlife Authority (UWA) ist als staatliche Behörde für das Management aller ugandischen Nationalparks und Wildschutzgebiete zuständig.',
  },
  {
    frage: 'Was hat Uganda im Naturschutz in den letzten Jahrzehnten erreicht?',
    antwort:
      'Uganda kann auf mehrere nachweisbare Naturschutzerfolge verweisen. Die Population der Berggorillas ist trotz anhaltenden Drucks durch Habitatverlust und Wilderei gewachsen. Im Ziwa Rhino Sanctuary wurden Breitmaulnashörner erfolgreich wieder angesiedelt, nachdem die Art in Uganda als ausgestorben galt. Der Bestand afrikanischer Elefanten hat sich nach der weitgehenden Dezimierung in den 1970er und 1980er Jahren in mehreren Parks erholt.',
  },
]

export default function NatureUgandaMissionPage() {
  const [offenesFaq, setOffenesFaq] = useState(null)

  return (
    <>
      <Head
        title="NatureUganda: Mission, Vogelmonitoring und Naturschutz in Uganda"
        description="NatureUganda fördert Wissen, Wertschätzung und Schutz der Natur Ugandas. Vogelmonitoring, Partnerschaft mit der UWA und über 1.000 Vogelarten im Fokus."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero */}
        <figure className="w-full max-h-[520px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
            alt="Vogelbeobachtung am Kazinga-Kanal im Queen Elizabeth National Park, Uganda"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <figcaption className="text-xs text-gray-500 text-right px-4 py-1">
            Foto: Mark Suer — Queen Elizabeth National Park, Oktober 2024
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            NatureUganda: Verstehen, Wertschätzen, Schützen
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Im Oktober 2024 verbrachte ich meinen ersten längeren Aufenthalt in Uganda — zwölf Tage,
            verteilt auf mehrere Nationalparks. An einem frühen Morgen am Kazinga-Kanal beobachtete
            ich, wie ein lokaler Ranger mit einem abgegriffenen Feldführer in der Hand auf eine
            Gruppe Vögel am Ufer zeigte und deren Arten zu einem Mitarbeiter der Uganda Wildlife
            Authority erklärte. Ich wusste damals noch nicht, dass dieses Bild — die systematische
            Beobachtung und Benennung der heimischen Tierwelt — den Kern der Arbeit von Organisationen
            wie NatureUganda beschreibt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            NatureUganda versteht sich als Bindeglied zwischen Forschung, lokaler Bevölkerung und
            institutionellem Naturschutz. Die Mission der Organisation lässt sich in drei Begriffe
            fassen: Verstehen, Wertschätzen, Schützen. Dahinter steht eine klare Überzeugung —
            dass dauerhafter Naturschutz dort am wirkungsvollsten ist, wo Menschen die Natur kennen
            und einen persönlichen Bezug zu ihr entwickelt haben.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Uganda ist eines der artenreichsten Länder Afrikas. Mehr als 1.000 Vogelarten, eine
            der größten Berggorilla-Populationen der Welt, ausgedehnte Feuchtgebiete und tropische
            Bergwälder — all das konzentriert sich auf einem Land, das kaum größer ist als
            Deutschland. Diese Vielfalt zu dokumentieren und zu schützen ist die Aufgabe, der sich
            NatureUganda seit Jahren widmet.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">
              NatureUganda: Auf einen Blick
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Mission</span>
                <span className="text-gray-800">Verstehen, Wertschätzen und Schützen der Natur Ugandas</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Schwerpunkt</span>
                <span className="text-gray-800">Vogelmonitoring, Schutzgebietsmanagement, Umweltbildung</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Monitoring seit</span>
                <span className="text-gray-800">Ssele-Inseln: systematisches Vogelmonitoring ab 2006</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Vogelarten Uganda</span>
                <span className="text-gray-800">Mehr als 1.000 nachgewiesene Arten</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Partnerorganisation</span>
                <span className="text-gray-800">Uganda Wildlife Authority (UWA)</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Monitoringstandorte</span>
                <span className="text-gray-800">Ssele-Inseln, Kazinga-Kanal, mehrere Nationalparks</span>
              </div>
            </div>
          </div>

          {/* H2: Die Mission */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Die drei Säulen: Verstehen, Wertschätzen, Schützen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wer die Arbeit von NatureUganda verstehen möchte, muss zunächst die Logik hinter den
              drei Begriffen ihrer Mission begreifen. Sie sind keine leere Programmatik, sondern
              beschreiben eine Abfolge: Schutz ohne Wertschätzung ist unbeständig — und Wertschätzung
              ohne Wissen bleibt oberflächlich.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Verstehen beginnt mit der Beobachtung. NatureUganda führt systematisches Vogelmonitoring
              durch — an festen Standorten, über lange Zeiträume, nach wissenschaftlichen Methoden.
              Diese Daten sind nicht Selbstzweck. Sie bilden die Grundlage für Entscheidungen im
              Schutzgebietsmanagement: Welche Arten sind stabil, welche rückläufig? Welche Lebensräume
              verdienen besondere Aufmerksamkeit? Ohne verlässliche Bestandsdaten sind solche Fragen
              kaum seriös zu beantworten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Wertschätzung entsteht durch Begegnung und Bildung. NatureUganda richtet sich nicht
              nur an Wissenschaftler und Behörden, sondern auch an lokale Gemeinschaften, Schülerinnen
              und Schüler sowie an Besucherinnen und Besucher des Landes. Die Überzeugung dahinter:
              Wer einmal einen Storch durch ein Fernglas beobachtet oder den Gesang eines Sunbird
              einem Namen zuordnen kann, entwickelt eine andere Haltung zur Natur als jemand, dem
              sie vollkommen fremd geblieben ist.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Schutz schließlich ist das Ergebnis dieser ersten beiden Schritte. Er meint nicht
              allein das Bewachen von Schutzgebieten — das ist die Aufgabe von Rangern und der
              Uganda Wildlife Authority. Er meint die breitere gesellschaftliche Bereitschaft,
              natürliche Ressourcen nicht zu verbrauchen, sondern zu erhalten. In einem Land, in
              dem ein erheblicher Teil der Bevölkerung direkt von Landwirtschaft und natürlichen
              Ressourcen abhängt, ist das keine triviale Forderung.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bei meinen Aufenthalten in Uganda — zuletzt im April und Mai 2026, insgesamt dreizehn
              Tage — fiel mir wiederholt auf, wie sehr lokale Guides und Community-Mitarbeiter diese
              Haltung verinnerlicht haben. Die Fähigkeit, Vogelarten zu benennen, Verhaltensweisen
              zu erklären und den Wert intakter Ökosysteme zu vermitteln, ist für viele von ihnen
              mehr als ein Beruf — es ist eine Überzeugung.
            </p>
          </section>

          {/* H2: Vogelmonitoring */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Vogelmonitoring: Mehr als 1.000 Arten systematisch erfasst
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda gilt unter Ornithologen als eines der besten Vogelbeobachtungsländer des
              afrikanischen Kontinents. Die Zahl von mehr als 1.000 nachgewiesenen Vogelarten ist
              beeindruckend — noch bemerkenswerter ist die Dichte, denn Uganda umfasst ein
              vergleichsweise kleines Territorium. Wer innerhalb weniger Tage zwischen dem Kibale
              Forest, dem Bwindi und dem Queen-Elizabeth-Nationalpark reist, kann Arten aus völlig
              unterschiedlichen Lebensraumtypen beobachten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              NatureUganda führt dieses Monitoring nicht als isoliertes Forschungsprojekt durch,
              sondern in enger Abstimmung mit der Uganda Wildlife Authority. Die Zusammenarbeit
              sichert, dass die erhobenen Daten in das Management der Nationalparks einfließen
              können. Der Uganda Bird Monitoring Report 2019, an dem NatureUganda maßgeblich
              beteiligt war, ist ein Beispiel für diese enge Verbindung zwischen Feldforschung
              und institutioneller Nutzung.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Ssele-Inseln sind einer der ältesten kontinuierlich überwachten Standorte.
              Seit 2006 werden dort regelmäßig Vogelzählungen durchgeführt, die langfristige
              Trendaussagen ermöglichen. Solche Zeitreihen sind für die Naturschutzforschung
              von besonderem Wert: Kurzfristige Schwankungen lassen sich von strukturellen
              Veränderungen unterscheiden, und Schutzmaßnahmen können auf ihre Wirksamkeit
              hin überprüft werden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Weitere regelmäßig erfasste Standorte umfassen den Kazinga-Kanal — ein natürlicher
              Wasserweg, der Lake Edward und Lake George verbindet und eine außergewöhnliche
              Konzentration von Wasservögeln beherbergt — sowie verschiedene Waldgebiete in
              Nationalparks und Community-Schutzgebieten. Wer Uganda als Vogelbeobachter besucht,
              profitiert direkt von dieser Datengrundlage: Aussagen zur Häufigkeit und Verteilung
              der Arten basieren auf jahrelangen Zählungen, nicht auf Schätzungen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für Reisende, die Vogelbeobachtung als Teil ihres Uganda-Besuchs planen, bietet der{' '}
              <a href="/vogelbeobachten-kibale-bigodi" className="text-jungle-700 underline hover:text-jungle-900">
                Kibale Forest mit dem Bigodi-Feuchtgebiet
              </a>{' '}
              einen besonders zugänglichen Einstieg: Das Feuchtgebiet ist gemeinsam bewirtschaftet,
              die Einnahmen fließen in die lokale Gemeinschaft, und die Artenvielfalt ist außergewöhnlich.
            </p>

            <div className="my-8 bg-jungle-50 border-l-4 border-jungle-400 pl-5 py-4 rounded-r-lg">
              <p className="text-jungle-900 italic text-sm">
                [RECHERCHE NOETIG: Aktuelle Gesamtzahl der durch NatureUganda erfassten Vogelarten an Monitoringstandorten]
              </p>
            </div>
          </section>

          {/* H2: Schutzgebiete und Partner */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Schutzgebiete, Partner und das Netzwerk des Naturschutzes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NatureUganda ist keine isoliert arbeitende Organisation. Sie ist Teil eines breiteren
              Netzwerks aus staatlichen Behörden, internationalen Partnerorganisationen und lokalen
              Akteuren, das gemeinsam an der Erhaltung ugandischer Ökosysteme arbeitet. Diese
              Vernetzung ist kein Luxus, sondern eine Notwendigkeit: Die Herausforderungen des
              Naturschutzes in Uganda — Lebensraumverlust, Wilderei, Mensch-Tier-Konflikte —
              lassen sich nicht von einer einzigen Organisation lösen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Uganda Wildlife Authority ist als staatliche Behörde für das Management aller
              Nationalparks zuständig. NatureUganda ergänzt diese Arbeit durch wissenschaftliche
              Datenerhebung und Umweltbildung. Das Kibale Protected Area, das Maramagambo-Waldreservat
              (Maramagambo CFR) und das Mount-Elgon-Schutzgebiet sind Beispiele für Ökosysteme,
              in denen dieser koordinierte Ansatz praktisch wirksam wird.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Internationale Organisationen wie die Zoologische Gesellschaft Frankfurt (ZGF) bringen
              dabei langfristige Erfahrung mit. Die ZGF ist seit mehr als dreißig Jahren in Afrika
              aktiv, unter anderem in ugandischen Nationalparks, und versteht sich als Partner
              lokaler Behörden — nicht als Ersatz für sie. Das Jane-Goodall-Institut, gegründet 1994
              in München, arbeitet mit dem Schutz der Menschenaffen auf einem benachbarten
              Themenfeld, das sich mit dem Monitoring-Ansatz von NatureUganda an mehreren
              Standorten berührt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bei meinem Besuch im Januar 2026, den ich gemeinsam mit Susanne Suer unternommen habe,
              wurde mir deutlich, wie viele verschiedene Akteure in den ugandischen Nationalparks
              gleichzeitig tätig sind: Ranger der UWA, Forschungsteams lokaler Universitäten,
              Mitarbeiter internationaler Organisationen und Community-Guide-Programme, die von
              Vereinen wie NatureUganda unterstützt werden. Das System wirkt manchmal unübersichtlich
              — ist es in vielerlei Hinsicht auch. Aber es ist lebendig, und es produziert Ergebnisse.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Schutz der Berggorillas ist das bekannteste Beispiel für diese Art koordinierter
              Naturschutzarbeit. Mehr dazu findet sich in unserem Artikel zu{' '}
              <a href="/berggorilla-naturschutz" className="text-jungle-700 underline hover:text-jungle-900">
                Berggorilla-Naturschutz in Uganda
              </a>.
            </p>
          </section>

          {/* H2: Naturschutzerfolge Ugandas */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Was Uganda im Naturschutz erreicht hat — und was bleibt
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda hat in den vergangenen Jahrzehnten nachweisbare Naturschutzerfolge erzielt.
              Die wachsende Berggorilla-Population in Bwindi und Mgahinga gilt international als
              Musterbeispiel dafür, was intensiver Schutz, regulierter Tourismus und die Einbindung
              lokaler Gemeinschaften gemeinsam bewirken können. In den 1980er Jahren zählte man
              weniger als 300 Berggorillas weltweit — heute liegt der Gesamtbestand deutlich darüber.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Ziwa-Nashornschutzgebiet ist ein weiterer Erfolg: Breitmaul-Nashörner wurden
              in Uganda als ausgestorben betrachtet, bevor ein Wiederansiedlungsprogramm eine neue
              Population aufbaute. Heute können Besucher die Tiere in ihrem natürlichen Lebensraum
              beobachten — für ein Land, das diese Tierart Jahrzehnte zuvor verloren hatte, ist
              das kein kleines Ergebnis.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Elefantenbestände in mehreren Nationalparks haben sich nach dem weitgehenden
              Zusammenbruch der Populationen während der politischen Unruhen der 1970er und 1980er
              Jahre schrittweise erholt. Im Queen-Elizabeth-Nationalpark gab es Phasen, in denen
              nur wenige Dutzend Tiere überlebten. Heute sind Elefanten dort wieder regelmäßig
              zu beobachten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dennoch wäre es unehrlich, ein ausschließlich positives Bild zu zeichnen. Der Druck
              auf ugandische Ökosysteme ist hoch und wächst. Uganda verzeichnet eines der höchsten
              Bevölkerungswachstums weltweit. Landwirtschaftliche Expansion drückt auf
              Waldgrenzen. Illegale Holzentnahme und Wilderei sind in vielen Gebieten nach wie vor
              ein Problem. Die Finanzierung von Schutzprogrammen bleibt abhängig von internationalem
              Engagement und Tourismus-Einnahmen — beides ist volatil.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Organisations wie NatureUganda leisten in diesem Kontext Arbeit, die oft nicht im
              Rampenlicht steht: das Zählen von Vögeln, das Schulen von Community-Guides, das
              Dokumentieren von Bestandsveränderungen. Es ist keine Arbeit, die schnelle Erfolge
              verspricht. Aber ohne diese Grundlagenarbeit fehlt jeder Naturschutzmaßnahme die
              Orientierung.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wie Wilderei die Arbeit aller Naturschutzorganisationen in Uganda beeinflusst,
              beschreibt unser Artikel zu{' '}
              <a href="/wilderei-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                Wilderei in Uganda
              </a>.
              Die konkreten Bedingungen der Ranger, die täglich für den Schutz dieser Ökosysteme
              im Einsatz sind, beleuchtet der Artikel zu{' '}
              <a href="/ranger-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                Rangern in Uganda
              </a>.
            </p>
          </section>

          {/* H2: Oekotourismus und Naturschutz */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Tourismus als Teil des Naturschutzsystems
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Naturschutz ohne wirtschaftliche Grundlage ist in einem Land wie Uganda kaum
              dauerhaft zu etablieren. Das ist keine zynische Aussage — es ist eine praktische
              Erkenntnis. Die Einnahmen aus dem Gorilla-Trekking, aus Vogel-Guides, aus
              Community-Tourism-Projekten fließen in Programmbudgets, Rangergehälter und
              lokale Entwicklungsinitiativen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              NatureUganda ist in diesen Zusammenhang eingebunden. Community-Guides, die durch
              Bildungsprogramme der Organisation ausgebildet wurden, führen Besucher zu Vogelstandorten
              und erklären Ökosysteme. Wer als Reisender einen Birding-Guide engagiert, der sein
              Handwerk versteht, stärkt direkt diese Kapazität. Ausführlichere Überlegungen dazu,
              wie Tourismus in Uganda wirksam zu Naturschutz beitragen kann, finden sich in unserem
              Artikel zu{' '}
              <a href="/oekotourismus-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                Ökotourismus in Uganda
              </a>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bei meinen Besuchen — insgesamt vierzehn dokumentierte Reisen mit zusammen über
              65 Tagen in Uganda — habe ich immer wieder erlebt, wie sehr der informierte Besucher
              einen Unterschied macht. Wer weiß, worauf er schaut, stellt andere Fragen und
              schätzt andere Erfahrungen. Das ist kein Zufall: Es ist das Ergebnis der Bildungsarbeit,
              die Organisationen wie NatureUganda leisten — und die auch Reisenden zugute kommt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Bigodi Wetland Sanctuary, unmittelbar angrenzend an den Kibale Forest, ist
              ein konkretes Beispiel für ein gelungenes Verbundmodell: Das Feuchtgebiet wird
              von einer lokalen Community-Organisation verwaltet, die Einnahmen bleiben vor Ort,
              und die ornithologische Vielfalt — mehrere hundert Vogelarten in erreichbarer
              Distanz — zieht Vogel-Touristen aus aller Welt an. Mehr zur Vogelbeobachtung in
              dieser Region auf unserer Seite zu{' '}
              <a href="/vogelbeobachten-kibale-bigodi" className="text-jungle-700 underline hover:text-jungle-900">
                Vogelbeobachten in Kibale und Bigodi
              </a>.
            </p>

            <div className="my-8 bg-jungle-50 border-l-4 border-jungle-400 pl-5 py-4 rounded-r-lg">
              <p className="text-jungle-900 italic text-sm">
                [RECHERCHE NOETIG: Aktuelle Projektpartnerschaften von NatureUganda mit Community-Tourismusprogrammen]
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Impressionen aus ugandischen Schutzgebieten" />

          {/* FAQ */}
          <section className="mt-14 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu NatureUganda und Naturschutz in Uganda
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOffenesFaq(offenesFaq === index ? null : index)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    aria-expanded={offenesFaq === index}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{item.frage}</span>
                    <span className="text-jungle-700 text-xl flex-shrink-0">
                      {offenesFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {offenesFaq === index && (
                    <div className="px-5 pb-5 pt-1 bg-white border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{item.antwort}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="border-t border-gray-200 pt-10 mt-10">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
              Weiterführende Artikel zu Naturschutz und Wildtieren in Uganda
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/vogelbeobachten-kibale-bigodi"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Vogelbeobachten in Kibale und Bigodi
              </a>
              <a
                href="/berggorilla-naturschutz"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Berggorilla-Naturschutz in Uganda
              </a>
              <a
                href="/oekotourismus-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Ökotourismus in Uganda
              </a>
              <a
                href="/wilderei-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Wilderei in Uganda: Ursachen und Bekämpfung
              </a>
              <a
                href="/ranger-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Ranger in Uganda: Schutz aus erster Hand
              </a>
              <a
                href="/gorilla-trekking"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Gorilla-Trekking in Uganda
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
