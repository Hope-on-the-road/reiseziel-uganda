import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'beste-reisezeit-gorilla-trekking'

const HERO_IMG = 'https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780726602862_1to3.jpg'

export default function BesteReisezeitGorillaTrekkingPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Was ist die beste Reisezeit für Gorilla Trekking in Uganda?',
      antwort: 'Die beste Reisezeit für Gorilla Trekking in Uganda sind die beiden Trockenzeiten: Juni bis September (lange Trockenzeit) und Dezember bis Februar (kurze Trockenzeit). Feste Wege, übersichtlicheres Unterholz und angenehmere Temperaturen machen das Trekking in dieser Zeit einfacher. Wer in der Regenzeit (März bis Mai, Oktober bis November) reist, findet dafür günstigere Lodgepreise, weniger Mitreisende und einen besonders sattgrünen Wald. Gorilla-Permits gelten ganzjährig — Gorillas verlassen Bwindi zu keiner Jahreszeit.'
    },
    {
      frage: 'Wie viele Berggorillas gibt es in Uganda?',
      antwort: 'Laut dem Zensus 2018-2020 leben in Uganda 459 Berggorillas. Uganda beherbergt damit etwa die Hälfte der weltweiten Berggorilla-Population. Die Tiere verteilen sich auf zwei Parks: Bwindi Impenetrable National Park (der deutlich größere Teil) und Mgahinga Gorilla National Park im Südwesten. Weltweite Gesamtpopulation: rund 1.063 Individuen (Stand: Hochrechnung 2025 basierend auf den letzten offiziellen Zensusdaten).'
    },
    {
      frage: 'Welche zwei Parks gibt es für Gorilla Trekking in Uganda?',
      antwort: 'Uganda hat zwei Parks mit habitualisierten Gorilla-Familien: Bwindi Impenetrable National Park mit vier Zugangspunkten (Buhoma, Ruhija, Rushaga, Nkuringo) und Mgahinga Gorilla National Park nahe der Grenze zu Ruanda und DR Kongo. Bwindi bietet mehr Familien und mehr Permit-Verfügbarkeit, Mgahinga ist kleiner, ruhiger und liegt in einer Vulkanlandschaft mit Bambuswald. Die 16 Kilometer lange Steinmauer um Teile von Mgahinga schützt umliegende Felder vor Gorilla-Besuchen.'
    },
    {
      frage: 'Wie teuer ist ein Gorilla-Permit in Uganda?',
      antwort: 'Ein Gorilla-Tracking-Permit der Uganda Wildlife Authority (UWA) kostet 800 US-Dollar pro Person. Darin enthalten ist die einstündige Zeit bei der Gorilla-Familie. Für die Hochsaison (Juni bis September, Dezember bis Januar) sollten Permits mindestens sechs bis neun Monate im Voraus gebucht werden. Buchungen sind direkt über die UWA oder über zugelassene Reiseveranstalter möglich.'
    },
    {
      frage: 'Wie lange dauert Gorilla Trekking in Bwindi?',
      antwort: 'Die Treckingdauer hängt stark davon ab, wo sich die Gorilla-Familie am jeweiligen Tag aufhält. In günstigen Fällen erreicht man die Gruppe nach 30 bis 60 Minuten Fußmarsch. Es können aber auch drei, vier oder in Ausnahmefällen bis zu sechs Stunden werden. Bei der Familie angekommen, verbringt man exakt eine Stunde mit den Gorillas — das ist die UWA-Regelung für alle Besucher. Das Terrain in Bwindi ist steil und oft schlammig; feste Wanderschuhe und ein guter Fitnesszustand helfen.'
    },
    {
      frage: 'Ist Gorilla Trekking in der Regenzeit möglich?',
      antwort: 'Ja, Gorilla Trekking findet in Uganda das ganze Jahr statt — auch in der Regenzeit. Die Trails werden dann schlammiger und der Wald dichter, was das Wandern anstrengender macht. Dafür sind die Wälder in der Regenzeit besonders grün, Permit-Verfügbarkeit ist besser und Lodgepreise oft günstiger. Wer körperlich fit ist und kein Problem mit Schlamm hat, kann in der Regenzeit ein intensiveres, weniger touristisches Erlebnis machen.'
    }
  ]

  return (
    <>
      <Head
        title="Beste Reisezeit Gorilla Trekking Uganda 2026"
        description="Beste Reisezeit Gorilla Trekking in Uganda: Trockenzeit Juni-September und Dez-Feb ideal. Bwindi vs Mgahinga, 800 USD Permit, 459 Berggorillas. Alle Infos."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Beste Reisezeit Gorilla Trekking Uganda: Wann und wo Berggorillas erleben
          </h1>

          {/* Hero-Bild */}
          <figure className="mb-10 rounded-2xl overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Berggorilla im Bwindi Impenetrable National Park, Uganda"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
              loading="eager"
            />
            <figcaption className="text-xs text-gray-400 mt-2 px-1">
              Berggorilla in seinem natuerlichen Habitat -- Bwindi Impenetrable National Park. Foto: Mark Suer
            </figcaption>
          </figure>

          {/* Eröffnungsabsatz mit Hook */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Nach drei Stunden Wanderung durch den Bwindi Impenetrable Forest -- ueber steile Haenge, durch dichtes Unterholz, entlang von Pfaden, die manchmal mehr Ahnung als Weg sind -- hoert man es vor dem Sehen: ein tiefes, sattes Knacken im Blattwerk, dann Bewegung. Eine Gorilla-Familie taucht auf. Sie ignorieren einen vollstaendig, fressen weiter, bewegen sich langsam, schauen gelegentlich herueberr -- ruhig und ohne Scheu. Diese Begegnung, von der man sich fragt ob man sie wirklich erlebt, dauert eine Stunde. Danach weiss man: Es gibt kein Reiseerlebnis, das man dafuer eintauschen wuerde.
            </p>
            <p>
              Fuer die beste Reisezeit Gorilla Trekking in Uganda gibt es klare Empfehlungen -- aber auch gute Gruende, die vermeintlich schlechtere Zeit zu waehlen. Dieser Artikel erklaert, wann das Trekking leichter ist, wann Permits einfacher zu bekommen sind, und was die Unterschiede zwischen Bwindi und Mgahinga fuer die Planung bedeuten.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Gorilla Trekking Uganda auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Beste Reisezeit:</span> Juni-September und Dezember-Februar</div>
                <div><span className="font-semibold">Ganzjaehrig moeglich:</span> Ja -- Gorillas verlassen Bwindi nicht</div>
                <div><span className="font-semibold">Permit-Preis:</span> 800 USD pro Person (UWA)</div>
                <div><span className="font-semibold">Zeit bei der Familie:</span> Genau 1 Stunde (UWA-Regelung)</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Berggorillas in Uganda:</span> 459 Individuen (Zensus 2018-2020)</div>
                <div><span className="font-semibold">Parks:</span> Bwindi Impenetrable NP + Mgahinga Gorilla NP</div>
                <div><span className="font-semibold">Bwindi-Zugaenge:</span> Buhoma, Ruhija, Rushaga, Nkuringo</div>
                <div><span className="font-semibold">Buchung im Voraus:</span> 6-9 Monate (Hochsaison)</div>
              </div>
            </div>
          </div>

          {/* H2: Beste Reisezeit */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Beste Reisezeit Gorilla Trekking: Die zwei Trockenzeiten
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Uganda hat zwei Trockenzeiten, und beide eignen sich gut fuer das Gorilla Trekking. Die laengere Trockenzeit dauert von Juni bis September -- das sind die Monate mit den festesten Pfaden, der besten Sicht ins Unterholz und den angenehmsten Temperaturen. Bwindi liegt auf ueber 1.600 Metern Hoehe, was selbst in der Trockenzeit fuer kuehle Morgende und frische Nachmittage sorgt. Die kuerzere Trockenzeit von Dezember bis Februar ist ebenfalls verlasslich, mit weniger Regen und gut begehbaren Wegen.
              </p>
              <p>
                Der praktische Vorteil der Trockenzeit ist eindeutig: Wege trocknen schneller ab, Schlamm ist seltener ein Problem, und die Wanderung ist weniger kraefte­zehrend. Wer gesundheitliche Einschraenkungen hat oder sich nicht sicher ist wie gut sein Fitnesslevel fuer mehrere Stunden steiles Bergterrain ist, sollte die Trockenzeit bevorzugen. Gleichzeitig ist in dieser Zeit die Nachfrage am hoechsten -- Permits sind begehrter, Lodges schneller ausgebucht, und man trifft unterwegs mehr andere Trekkinggruppen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Regenzeit: Weniger Besucher, mehr Wildnis</h3>
              <p>
                Die lange Regenzeit dauert von Maerz bis Mai, die kurze von Oktober bis November. Diese Monate gelten in vielen Reisefuehrern als "schlechtere Zeit" -- was nicht bedeutet, dass Gorilla Trekking dann schlechter ist. Es bedeutet: Die Wege sind schlammiger, das Unterholz dichter, die Anmarschwege koerperlich anspruchsvoller. Dafuer sind die Waelder in voller Gruenpracht, die Fauna und Flora ist aktiver, und man trifft deutlich weniger andere Besucher.
              </p>
              <p>
                Wer im Oktober oder April nach Uganda reist und ein Gorilla-Permit bucht, hat realistisch gesehen deutlich bessere Chancen auf spontane Verfuegbarkeit. Lodges reduzieren in dieser Zeit ihre Preise. Und das eigentliche Erlebnis -- die eine Stunde mit der Gorilla-Familie -- ist identisch mit dem in der Trockenzeit. Gorillas scheren sich nicht um Monate oder Kalender. Sie sind das ganze Jahr dort.
              </p>
            </div>
          </section>

          {/* H2: Bwindi vs Mgahinga */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Bwindi oder Mgahinga: Wo Gorillas in Uganda sehen?
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ugandas Berggorillas leben in zwei Parks. Der groessere, bekanntere und am haeufigsten besuchte ist Bwindi Impenetrable National Park im Suedwesten des Landes. Bwindi hat vier Zugangspunkte: Buhoma im Norden, Ruhija im Osten sowie Rushaga und Nkuringo im Sueden. Jeder dieser Zugaenge hat eigene habitualisierte Gorilla-Familien, eigene Lodges und eigene Permit-Kontingente. In Summe erlaubt Bwindi die groesste Zahl an Trekking-Permits in Uganda taeglich.
              </p>
              <p>
                Das zweite Gorilla-Trekking-Ziel in Uganda ist Mgahinga Gorilla National Park, der kleinste Nationalpark des Landes. Mgahinga liegt unmittelbar an der Dreilaendergrenze zu Ruanda und der Demokratischen Republik Kongo, inmitten der Virunga-Vulkane. Der Park ist kompakter und ruhiger als Bwindi, die Landschaft offener: Bambuswald, Vulkankegel, Alpenmatten. Die Uganda Wildlife Authority unterhielt bis Dezember 2025 insgesamt 221,76 Kilometer Elektrozaun ueber die wichtigsten Schutzgebiete des Landes -- darunter die 16 Kilometer lange Steinmauer in Mgahinga, die verhindert, dass Gorillas auf umliegende Felder ausweichen und Ernteschaeden anrichten.
              </p>
              <p>
                Wer zwischen beiden Parks waehlen kann: Bwindi bietet mehr Flexibilitaet bei Terminen und Familien, Mgahinga ein intimeres Erlebnis mit weniger Besucherverkehr. Da in Mgahinga nur eine Gorilla-Familie habitualisiert ist, kann es vorkommen, dass die Familie sich voruebergehend nach Ruanda oder in den Kongo bewegt -- in diesem Fall werden Permits verschoben. Bwindi hat dieses Risiko nicht in demselben Ausmass.
              </p>
            </div>
          </section>

          {/* H2: Population und Naturschutz */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Berggorilla-Population in Uganda: Stand 2025
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die letzte offizielle Vollerhebung der Berggorilla-Population in Uganda wurde im Zeitraum 2018 bis 2020 durchgefuehrt und ergab 459 Individuen. Uganda beherbergt damit knapp die Haelfte aller Berggorillas weltweit -- die andere Haelfte lebt im Virunga-Massiv, das sich ueber die Grenzen von Ruanda, der DR Kongo und Uganda erstreckt. Der ugandische Anteil konzentriert sich fast vollstaendig auf Bwindi.
              </p>
              <p>
                Berggorillas sind die einzige Menschenaffenart, deren Bestand in den vergangenen drei Jahrzehnten trotz aller Bedrohungen zugenommen hat. In den fruehen 1980er-Jahren wurde die Weltpopulation auf unter 300 geschaetzt. Der Anstieg auf ueber 1.000 ist das Ergebnis intensiver Schutzprogramme: Habituierungsprogramme, Anti-Wilderei-Massnahmen, Community-Revenue-Sharing-Modelle und -- nicht zuletzt -- der Tourismus selbst, der wirtschaftliche Anreize schafft, Gorilla-Lebensraum zu schuetzen. Jedes verkaufte Gorilla-Permit finanziert anteilig die Uganda Wildlife Authority und den Naturschutz in den Pufferzonengemeinschaften rund um Bwindi.
              </p>
              <p>
                Waehrend unserer Besuche in Bwindi -- zuletzt im Mai 2026 -- war die Praesenz der UWA-Ranger in und um den Park deutlich sichtbar. Regelmassige Patrouillen, Fallenfallen und das Monitoring der habitualierten Familien gehoeren zum Tagesgeschaeft. Die Gorilla-Familien, die fuer das Trekking zugaenglich sind, werden taeglich von Trackern lokalisiert, damit die Besucher am Morgen ohne langes Suchen eine zielgenaue Route gehen koennen.
              </p>
            </div>
          </section>

          {/* H2: Permit, Planung, Praktisches */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Gorilla-Permit 2026: Buchung, Kosten und praktische Vorbereitung
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ein Gorilla-Tracking-Permit kostet 800 US-Dollar pro Person. Das Permit gilt fuer genau eine Stunde bei einer habitualierten Gorilla-Familie und schliesst den Transfer zum Parkeingang nicht ein. Buchungen erfolgen ueber die Uganda Wildlife Authority (UWA) direkt oder ueber zugelassene Reiseveranstalter. Fuer die Hochsaison -- Juni bis September und Dezember bis Februar -- sollte man sechs bis neun Monate im Voraus buchen. In der Nebensaison sind oft auch kurzfristige Buchungen moeglich.
              </p>
              <p>
                Koerperliche Vorbereitung zahlt sich aus. Das Trekking-Terrain in Bwindi ist steil, das Unterholz dicht, und der Weg zu den Gorillas dauert manchmal nur dreissig Minuten, manchmal drei Stunden -- je nachdem wo die Familie am betreffenden Tag lagert. Feste Wanderschuhe mit gutem Profil, Regen­jacke, Handschuhe fuer das Unterholz und genuegend Wasser sind Pflicht. Gaiters -- Gamaschen die den Schuh-Hosen-Uebergang abdichten -- sind in der Regenzeit sehr empfehlenswert.
              </p>
              <p>
                Jede Trekkinggruppe besteht aus maximal acht Besuchern, wird von einem erfahrenen Guide geleitet und von bewaffneten UWA-Rangern begleitet. Das Briefing am Morgen erklaert die Verhaltensregeln: kein direkter Augenkontakt mit den Gorillas, kein Blitz beim Fotografieren, Mindestabstand von sieben Metern, und -- falls sich ein Gorilla naehert -- ruhig stehen bleiben und den Blick senken. [ZITAT: Guide ueber Verhalten wenn ein Silberruecken auf einen zukommt]
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Beste Reisezeit Gorilla Trekking Kongo: Kurzer Vergleich</h3>
              <p>
                Wer erwaegt, Gorilla Trekking in der Demokratischen Republik Kongo (Virunga National Park) zu kombinieren oder als Alternative zu betrachten: Der Kongo hatte zuletzt unterschiedliche Sicherheitsphasen und Betriebszeiten fuer Touristen. In Uganda ist die Situation verlasslich stabil. Die beste Reisezeit Gorilla Trekking Kongo folgt aehnlichen Mustern wie Uganda -- Trockenzeiten sind praktikabler -- aber die logistische Komplexitaet und die Sicherheitslage sind andere Variablen. Uganda bleibt fuer deutschsprachige Reisende die zuverlaessigere Option.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Gorilla Trekking Uganda" />

          {/* FAQ */}
          <section className="mb-12 mt-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Haeufige Fragen zur besten Reisezeit Gorilla Trekking Uganda
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
              Mehr zum Gorilla Trekking in Uganda
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/gorilla-trekking', label: 'Gorilla Trekking Uganda: Der komplette Guide' },
                { href: '/nationalparks/bwindi', label: 'Bwindi Impenetrable National Park' },
                { href: '/gorilla-permit-kosten', label: 'Gorilla Permit Kosten 2026' },
                { href: '/beste-reisezeit-uganda', label: 'Beste Reisezeit Uganda gesamt' },
                { href: '/gorilla-trekking-vorbereitung', label: 'Vorbereitung fuer das Gorilla Trekking' },
                { href: '/gorilla-familien-bwindi', label: 'Gorilla-Familien in Bwindi' },
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
