import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'papageien-uganda-arten'

const faqItems = [
  {
    frage: 'Wie viele Papageienarten gibt es in Uganda?',
    antwort:
      'In Uganda sind drei Papageienarten heimisch: der Afrikanische Grauepapagei, der Braune Papagei und der Rotköpfchen-Unzertrennliche. Alle drei bewohnen unterschiedliche Lebensräume – von Waldinnenräumen bis hin zu Waldrändern und landwirtschaftlichen Flächen. Damit ist Uganda kein klassisches Papageienzentrum wie Zentralafrika, bietet aber durch die Kombination der drei Arten interessante Beobachtungsmöglichkeiten in verschiedenen Habitaten.',
  },
  {
    frage: 'Wo in Uganda kann man den Grauen Papagei beobachten?',
    antwort:
      'Der Graue Papagei ist in Uganda auf Waldgebiete beschränkt, besonders auf zusammenhängende Regenwaldbereiche rund um den Viktoriasee sowie in Reservaten wie dem Mabira Forest östlich von Kampala. Er gilt als Waldspezialist und meidet offenes Gelände. Trotz dokumentierter Vorkommen an mehreren Waldstandorten ist er selten zu sehen – seine Tarnung im Kronendach und sein vorsichtiges Verhalten machen ihn zu einer der anspruchsvolleren Zielarten für Vogelbeobachter.',
  },
  {
    frage: 'Warum ist der Graue Papagei in Uganda bedroht?',
    antwort:
      'Der wichtigste Bedrohungsfaktor für den Grauen Papagei ist der illegale Fang für den Heimtierhandel. Die Art ist CITES-gelistet und international geschützt, doch der Handelsdruck ist – insbesondere in West- und Zentralafrika – weiterhin erheblich. In Uganda kommt der Verlust von Waldflächen hinzu: Als Waldspezialist ist er direkt von der Fragmentierung und dem Rückgang zusammenhängender Waldgebiete betroffen. Beide Faktoren zusammen machen ihn zu einer der schutzbedürftigsten Vogelarten des Landes.',
  },
  {
    frage: 'Was sind Rotköpfchen-Unzertrennliche und wo leben sie in Uganda?',
    antwort:
      'Rotköpfchen-Unzertrennliche sind kleine, gesellige Papageien, die häufig in Schwärmen auftreten. Ihr markantes Erscheinungsbild – leuchtend rotes Gefieder an Kopf und Brust, grüner Körper – macht sie auch für Nicht-Spezialisten erkennbar. In Uganda leben sie vor allem an Waldrändern, in aufgeforsteten Bereichen und auf landwirtschaftlichen Flächen. Sie sind deutlich anpassungsfähiger als der Graue Papagei und kommen auch in der Nähe von Siedlungen vor.',
  },
  {
    frage: 'Welche Waldgebiete in Uganda sind für Papageibeobachtungen besonders geeignet?',
    antwort:
      'Der Mabira Forest östlich von Kampala ist eines der zugänglichsten Waldgebiete mit dokumentierten Vorkommen des Grauen Papageis. Der Kibale National Park im Westen und der Budongo Forest im Norden bieten weitere Beobachtungsmöglichkeiten für verschiedene Papageienarten. Der Echuya Forest Reserve im Südwesten ist zwar kleiner, aber ökologisch wertvoll und wenig besucht. Für eine gezielte Suche empfiehlt sich die Kombination aus frühem Aufbruch, einem erfahrenen Vogelguide und ausreichend Zeit in einem Gebiet – Papageien lassen sich nicht unter Zeitdruck finden.',
  },
]

export default function PapageienUgandaPage() {
  const [offenesFaq, setOffenesFaq] = useState(null)

  return (
    <>
      <Head
        title="Papageien in Uganda: Grauer Papagei, Brauner Papagei und Unzertrennliche"
        description="Drei Papageienarten leben in Uganda: Grauer Papagei, Brauner Papagei und Rotköpfchen-Unzertrennliche. Verbreitung, Lebensraum und Beobachtungstipps."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero */}
        <figure className="w-full max-h-[520px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
            alt="Dichter Regenwald im Mabira Forest Reserve, Uganda – Lebensraum des Grauen Papageis"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <figcaption className="text-xs text-gray-500 text-right px-4 py-1">
            Waldhabitat in Uganda — Lebensraum der hier heimischen Papageienarten. Foto: Mark Suer.
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Papageien in Uganda: Grauer Papagei, Brauner Papagei und Unzertrennliche
          </h1>

          {/* Einleitung */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Uganda gilt zu Recht als eines der bedeutendsten Vogelbeobachtungsländer Afrikas — über 1.000
            Vogelarten sind für das Land dokumentiert. Papageien spielen in dieser Artenvielfalt eine
            besondere, wenn auch zahlenmäßig bescheidene Rolle: Drei Arten sind in Uganda heimisch, jede
            mit eigenen Habitatansprüchen und einem eigenen Gefährdungsprofil. Sie fügen sich in die
            komplexe Ökologie der ugandischen Waldgebiete ein und lassen sich an bestimmten Standorten
            mit etwas Geduld beobachten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Wer Uganda in erster Linie wegen der Gorillas oder Schimpansen besucht, begegnet Papageien
            oft beiläufig — ein lautes Rufen im Kronendach, eine grüne Silhouette im Gegenlicht. Wer
            gezielt nach ihnen sucht, braucht andere Bedingungen: frühen Aufbruch, Kenntnisse der
            Waldstruktur und idealerweise einen erfahrenen Vogelguide. Bei meinen Besuchen in Uganda —
            zuletzt im Januar 2026 — war der Wald am frühen Morgen stets der ergiebigste Zeitpunkt für
            Vogelbeobachtungen aller Art.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Diese Seite gibt einen Überblick über alle drei in Uganda vorkommenden Papageienarten.
            Für eine vertiefte Darstellung des Grauen Papageis — der aus Naturschutzsicht bedeutendsten
            Art — gibt es eine{' '}
            <a href="/grauer-papagei-uganda" className="text-jungle-700 underline hover:text-jungle-900">
              eigene Seite zum Grauen Papagei in Uganda
            </a>
            .
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">
              Papageien in Uganda: Auf einen Blick
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Anzahl Arten</span>
                <span className="text-gray-800">3 heimische Papageienarten</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Arten</span>
                <span className="text-gray-800">Grauer Papagei, Brauner Papagei, Rotköpfchen-Unzertrennlicher</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Schutzstatus (Grauer Papagei)</span>
                <span className="text-gray-800">CITES-gelistet, global bedroht durch Heimtierhandel</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Wichtige Habitate</span>
                <span className="text-gray-800">Mabira, Budongo, Kibale, Echuya, Wälder am Viktoriasee</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Braune Papageien (Monitoring)</span>
                <span className="text-gray-800">21 Individuen in systematischer Erfassung dokumentiert</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Unzertrennliche (Monitoring)</span>
                <span className="text-gray-800">27 Individuen in systematischer Erfassung dokumentiert</span>
              </div>
            </div>
          </div>

          {/* H2: Grauer Papagei */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Der Graue Papagei: Waldspezialist unter Druck
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Afrikanische Graupapagei (<em>Psittacus erithacus</em>) ist die bekannteste und
              gleichzeitig schutzbedürftigste der drei in Uganda heimischen Papageienarten. Er ist
              strikt auf Waldlebensräume angewiesen — auf zusammenhängende, strukturreiche Kronendächer,
              wie sie in gut erhaltenen Regenwäldern vorkommen. In Uganda sind seine Vorkommen auf
              wenige Waldstandorte konzentriert, hauptsächlich in der Umgebung des Viktoriasees und
              in Waldreservaten in Zentraluganda.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Systematische Vogelerfassungen haben den Grauen Papagei an Waldstandorten nahe Kampala
              dokumentiert — unter anderem im Bereich des sogenannten Nakitoma-Standorts, wo er als
              einziger ausgewiesener Waldspezialist unter insgesamt 35 erfassten Vogelarten verzeichnet
              wurde. Das unterstreicht seine ökologische Nischenspezialisierung: Während andere Arten
              auch in Übergangszonen und degradierten Lebensräumen vorkommen, ist der Graue Papagei
              auf intakten Wald angewiesen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die internationale CITES-Listung des Grauen Papageis spiegelt das Ausmaß des Handelsdrucks
              wider, dem die Art in ihrem gesamten Verbreitungsgebiet ausgesetzt ist. In West- und
              Zentralafrika — dem Kern des Verbreitungsgebiets — ist der illegale Fang für den
              Heimtiermarkt eine der Hauptursachen für den Rückgang der Art. Uganda liegt am östlichen
              Rand dieses Verbreitungsgebiets; die Populationen sind entsprechend kleiner und isolierter
              als in den Kernregionen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hinzu kommt der fortschreitende Waldverlust. Uganda hat in den vergangenen Jahrzehnten
              erhebliche Anteile seiner ursprünglichen Waldfläche verloren — durch Abholzung für
              Landwirtschaft, Holzkohleproduktion und Siedlungsentwicklung. Für eine Art, die keine
              Offenlandbereiche besiedelt, bedeutet jeder Hektar verlorenem Wald eine Verkleinerung
              des nutzbaren Lebensraums. Der Mabira Forest östlich von Kampala ist eines der am besten
              zugänglichen und bekannten Gebiete für Vogelbeobachter, die den Grauen Papagei gezielt
              suchen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Eine ausführlichere Darstellung der Biologie, Verbreitung und Schutzsituation des Grauen
              Papageis in Uganda findet sich auf der{' '}
              <a href="/grauer-papagei-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                Seite zum Grauen Papagei
              </a>
              .
            </p>
          </section>

          {/* H2: Brauner Papagei */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Der Braune Papagei: Unauffällig und wenig erforscht
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Braune Papagei — in der wissenschaftlichen Literatur häufig unter <em>Poicephalus meyeri</em>
              oder verwandten Arten dieser Gattung geführt — ist die unscheinbarste der drei ugandischen
              Papageienarten. Sein Gefieder ist überwiegend braun-grau, ohne die auffälligen Farbelemente,
              die den Grauen Papagei oder die Unzertrennlichen kennzeichnen. Gerade diese Unauffälligkeit
              macht ihn im Freiland leicht zu übersehen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In systematischen Vogelerfassungen wurden 21 Individuen dieser Art erfasst — eine Zahl,
              die zwar den Nachweis des regelmäßigen Vorkommens sichert, aber keine Rückschlüsse auf
              die Gesamtpopulation zulässt. Punkt- und Transektzählungen erfassen immer nur einen
              Ausschnitt des tatsächlichen Bestands; die reale Populationsgröße in Uganda ist nicht
              bekannt. [RECHERCHE NOETIG: Aktuelle Bestandsschätzung und genaue Verbreitungskarten
              für Uganda]
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Braune Papagei ist weniger strikt auf Waldinnenräume angewiesen als der Graue Papagei.
              Er kommt auch in Buschland, aufgelockerter Baum-Savanne und landwirtschaftlichen Mosaiken
              vor, was ihm eine breitere ökologische Valenz verleiht. In Uganda sind seine Vorkommen
              weniger gut dokumentiert als die der anderen beiden Arten — systematische Untersuchungen
              speziell zu dieser Art fehlen weitgehend.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für Vogelbeobachter, die den Braunen Papagei gezielt suchen, empfiehlt sich die Kombination
              aus ausgedehnten Waldrandstrukturen und ruhigen Morgen- oder Abendstunden, wenn die Tiere
              aktiver sind. Gezielte Hinweise zu bekannten Beobachtungsstandorten — auch für weniger
              verbreitete Arten — bietet unsere Seite zur{' '}
              <a href="/vogelbeobachten-kibale-bigodi" className="text-jungle-700 underline hover:text-jungle-900">
                Vogelbeobachtung im Kibale National Park und im Bigodi Wetland
              </a>
              .
            </p>
          </section>

          {/* Inline-Zitat / Highlight */}
          <div className="my-8 bg-jungle-50 border-l-4 border-jungle-400 pl-5 py-4 rounded-r-lg">
            <p className="text-jungle-900 text-sm leading-relaxed">
              Papageien lassen sich im ugandischen Wald am verlässlichsten in den ersten Stunden nach
              Sonnenaufgang hören — ihr Ruf ist oft das erste Zeichen ihres Vorhandenseins, lange bevor
              man sie im Kronendach zu Gesicht bekommt.
            </p>
          </div>

          {/* H2: Unzertrennliche */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Rotköpfchen-Unzertrennliche: Die gesellige Art
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Rotköpfchen-Unzertrennlichen (<em>Agapornis pullarius</em>) sind die kleinste und
              sozialste der drei ugandischen Papageienarten. Ihr Name leitet sich von dem für diese
              Gattung charakteristischen Paarverhalten ab: Unzertrennliche leben in engen Paarbindungen
              und halten auch außerhalb der Brutzeit engen körperlichen Kontakt zueinander. In Uganda
              treten sie häufig in kleinen Schwärmen auf — eine Eigenschaft, die ihre Beobachtung
              erleichtert, wenn man einmal eine Gruppe gefunden hat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mit 27 in systematischen Erfassungen dokumentierten Individuen weisen die
              Rotköpfchen-Unzertrennlichen die höchste Monitoring-Zahl der drei ugandischen
              Papageienarten auf. Auch hier gilt: Die erfassten Zahlen sind ein Ausschnitt,
              keine Gesamtschätzung. Die Art gilt insgesamt als weniger bedroht als der Graue Papagei,
              weil sie anpassungsfähiger ist und ein breiteres Spektrum an Lebensräumen nutzt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Rotköpfchen-Unzertrennliche besiedelt Waldränder, Galeriewälder entlang von
              Flüssen und aufgelockerte Gehölzstrukturen in landwirtschaftlich genutzten Gebieten.
              Er kommt auch in der Nähe von Siedlungen vor, sofern ausreichend Baumbestand und
              Nistmöglichkeiten vorhanden sind. Diese Flexibilität macht ihn zur am häufigsten
              im Alltag zu beobachtenden Papageienart Ugandas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das auffällige Erscheinungsbild — leuchtend orangerot an Gesicht und Kehle, grüner
              Körper, bei Männchen mit gelbem Band am Hinterkopf — macht eine Verwechslung mit
              anderen Arten unwahrscheinlich. Im Flug sind die Tiere durch ihre kompakte Körperform
              und die schnellen, flatternden Flügelschläge erkennbar, die für kleine Papageien
              charakteristisch sind.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brutbiologie und genaue Verbreitung innerhalb Ugandas sind für diese Art weniger
              systematisch dokumentiert als für den Grauen Papagei. Bekannt ist, dass
              Rotköpfchen-Unzertrennliche in Termitenhügeln nisten — ein ungewöhnliches Verhalten
              innerhalb der Papageienfamilie, das ihnen Nistplätze an Standorten sichert, wo
              geeignete Baumhöhlen fehlen. [RECHERCHE NOETIG: Aktuelle Brutstandorte und
              Verbreitungsdaten für Uganda]
            </p>
          </section>

          {/* H2: Lebensräume und Beobachtung */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Lebensräume und Beobachtungsmöglichkeiten in Uganda
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die drei ugandischen Papageienarten besiedeln unterschiedliche Habitattypen, was
              gleichzeitig bedeutet, dass kein einzelner Standort alle drei garantiert. Wer alle
              Arten auf einer Reise beobachten möchte, braucht ein durchdachtes Programm, das
              verschiedene Waldgebiete und Übergangszonen einschließt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der <strong className="font-semibold text-gray-900">Mabira Forest</strong> östlich
              von Kampala ist eines der wichtigsten Gebiete für den Grauen Papagei. Der Wald ist
              verhältnismäßig gut erhalten und bietet geführte Vogelbeobachtungstouren an. Bei
              meinen Fahrten durch Zentraluganda habe ich den Mabira mehrfach passiert — der Wald
              wirkt auf den ersten Blick kompakt und dicht, gibt aber bei gezieltem Suchen entlang
              der Waldrandwege eine überraschende Artenvielfalt preis. Unsere Seite zu den{' '}
              <a href="/mabira-forest-voegel" className="text-jungle-700 underline hover:text-jungle-900">
                Vögeln im Mabira Forest
              </a>{' '}
              liefert weitere Informationen zu Beobachtungsstandorten und häufigen Arten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der <strong className="font-semibold text-gray-900">Kibale National Park</strong> und
              das angrenzende <strong className="font-semibold text-gray-900">Bigodi Wetland Sanctuary</strong>
              im Westen sind für Vogelbeobachter aus zwei Gründen attraktiv: Die Artenvielfalt ist
              außergewöhnlich hoch, und das Bigodi Wetland bietet auch ohne Parkgebühr gut zugängliche
              Beobachtungsmöglichkeiten. Papageien sind hier keine Garantie, aber bei günstigen
              Bedingungen — besonders früh morgens — möglich. Details zu Arten, Wegen und Guides
              finden sich auf unserer Seite zur{' '}
              <a href="/vogelbeobachten-kibale-bigodi" className="text-jungle-700 underline hover:text-jungle-900">
                Vogelbeobachtung in Kibale und Bigodi
              </a>
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der <strong className="font-semibold text-gray-900">Budongo Forest</strong> im Norden,
              bekannt als Schimpansen-Habitat und Teil des Murchison Falls Conservation Area, bietet
              ebenfalls geeignete Strukturen für waldgebundene Papageienarten. Er wird von
              Vogelbeobachtern bisher seltener gezielt aufgesucht als Mabira oder Kibale, was ihn
              für ruhige Beobachtungen interessant macht.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der <strong className="font-semibold text-gray-900">Echuya Forest Reserve</strong>
              im äußersten Südwesten Ugandas, nahe der Grenze zu Ruanda und der Demokratischen
              Republik Kongo, ist ein floristisch und faunistisch wertvolles Gebiet auf über
              2.000 Metern Höhe. Er beherbergt eine spezifische Montanwaldavifauna; ob Papageien
              hier regelmäßig vorkommen, ist weniger gut dokumentiert. [RECHERCHE NOETIG:
              Vogelarten im Echuya spezifisch für Papageien]
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für einen Überblick über Ugandas Tierwelt insgesamt — von Primaten bis zu Vögeln —
              empfiehlt sich ein Blick auf unsere{' '}
              <a href="/tiere-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                Übersichtsseite zu Tieren in Uganda
              </a>
              .
            </p>
          </section>

          {/* H2: Naturschutz und Bedeutung */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Naturschutz: Warum Papageien als Indikatorarten zählen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Papageien sind ökologisch anspruchsvolle Tiere. Ihr Vorkommen oder Fehlen an einem
              Standort gibt Aufschluss über die Qualität des Habitats — sie gelten deshalb als
              Indikatorarten für den Zustand von Waldökosystemen. Ein Standort, an dem Graue
              Papageien vorkommen, verfügt in der Regel über strukturell intakten Altwald mit
              ausreichend Hohlbäumen für Nestplätze und einem stabilen Nahrungsangebot aus
              Früchten, Nüssen und Samen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Systematisches Vogelmonitoring — wie die Erfassung in Uganda, in der alle drei
              Papageienarten dokumentiert wurden — dient deshalb mehreren Zwecken gleichzeitig:
              Es liefert Grundlagendaten für den Artenschutz, informiert das Management von
              Schutzgebieten und erlaubt Rückschlüsse auf die ökologische Integrität der
              untersuchten Gebiete.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für den Grauen Papagei kommt der internationale Handelsdruck als besonderer
              Belastungsfaktor hinzu. Ugandas Waldgebiete liegen zwar nicht im Kern des
              Verbreitungsgebiets der Art, doch auch kleine, isolierte Populationen am
              Verbreitungsrand können durch Entnahme von Individuen stark geschwächt werden.
              CITES-Listing allein schützt nicht — entscheidend ist die Durchsetzung des
              Schutzes im Feld: bei Grenzkontrollen, in der Strafverfolgung und durch die
              Sensibilisierung lokaler Gemeinschaften.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda hat in den letzten Jahren erheblich in das Management seiner Waldschutzgebiete
              investiert. Die Nationalforstverwaltung und die Uganda Wildlife Authority arbeiten
              an verschiedenen Standorten an Programmen, die Walderhalt mit den wirtschaftlichen
              Interessen der Anrainergemeinden verbinden. Ob diese Programme ausreichen, um
              den Druck auf Waldbewohner wie den Grauen Papagei dauerhaft zu reduzieren, bleibt
              eine offene Frage, die nur durch konsequentes Monitoring beantwortet werden kann.
            </p>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Ugandas Wäldern" />

          {/* FAQ */}
          <section className="mt-14 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu Papageien in Uganda
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
              Weiterführende Seiten zu Vögeln und Tierwelt in Uganda
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/grauer-papagei-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Grauer Papagei in Uganda: Verbreitung und Schutz
              </a>
              <a
                href="/mabira-forest-voegel"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Vögel im Mabira Forest
              </a>
              <a
                href="/vogelbeobachten-kibale-bigodi"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Vogelbeobachtung im Kibale National Park und Bigodi
              </a>
              <a
                href="/tiere-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Tiere in Uganda: Überblick
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
