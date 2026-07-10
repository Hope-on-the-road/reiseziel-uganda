import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'glossy-ibis-uganda'

export default function GlossyIbisUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Wo kann man den Glanzibis in Uganda am zuverlässigsten beobachten?',
      a: 'Die mit Abstand größte Konzentration wurde am Kazinga Channel im Queen Elizabeth Nationalpark nachgewiesen. Dieser natürliche Wasserweg zwischen Lake Edward und Lake George zieht in bestimmten Jahreszeiten Hunderte von Individuen an. Weitere Feuchtgebiete wie Lutembe am Nordufer des Viktoriasees kommen vor, beherbergen aber deutlich kleinere Gruppen. Eine Bootsfahrt auf dem Kazinga Channel erhöht die Sichtungschancen erheblich.'
    },
    {
      q: 'Zu welcher Jahreszeit ist der Glanzibis in Uganda anzutreffen?',
      a: 'Plegadis falcinellus ist ein paläarktischer Zugvogel, der Uganda saisonal besucht. Die Anwesenheitszahlen schwanken von Jahr zu Jahr stark — das ist ein charakteristisches Merkmal dieser Art. Eine feste Reisezeit, die Sichtungen garantiert, lässt sich deshalb nicht nennen. Monitoringdaten aus dem Zeitraum Juli bis August 2019 belegen starke Präsenz, die Lage in anderen Monaten erfordert aktuelle Beobachtungsberichte.'
    },
    {
      q: 'Wie unterscheidet sich der Glanzibis von anderen Ibis-Arten in Uganda?',
      a: 'In Uganda kommen neben dem Glanzibis auch der Heilige Ibis (Threskiornis aethiopicus) und der Afrikanische Löffler (Platalea alba) vor, der zwar kein Ibis ist, aber derselben Familie Threskiornithidae angehört. Der Glanzibis ist deutlich kleiner als der Heilige Ibis und trägt im guten Licht ein metallisch schillerndes Gefieder in Bronze-, Grün- und Rottönen. Sein langer, nach unten gebogener Schnabel ist ein sicheres Erkennungsmerkmal aller Ibis-Arten.'
    },
    {
      q: 'Lässt sich eine Vogelbeobachtung am Kazinga Channel mit anderen Safari-Aktivitäten kombinieren?',
      a: 'Ja, sehr gut. Der Queen Elizabeth Nationalpark ist ohnehin einer der artenreichsten Parks Ugandas. Pirschfahrten am frühen Morgen, Bootsfahrten auf dem Kazinga Channel und die Suche nach spezifischen Vogelarten lassen sich an mehreren Tagen kombinieren. Die Bootsfahrt selbst ist eine klassische Aktivität im Park und führt direkt durch die wassernahen Lebensräume, in denen auch der Glanzibis auftritt.'
    },
    {
      q: 'Welche weiteren seltenen Wasservögel gibt es in den ugandischen Feuchtgebieten?',
      a: 'Uganda zählt zu den artenreichsten Ländern Afrikas für Wasservögel. Der Schuhschnabel (Balaeniceps rex) ist die bekannteste Rarität und vor allem im Mabamba-Sumpf nahe Entebbe zu beobachten. Im selben Lebensraum wie der Glanzibis kommen Afrikanische Jacanas, Hamerkops, Seidenreiher, Afrikanische Löffler und Teichhühner vor. In denselben Feuchtgebietsmonitoring-Daten wurden auch Weißrücken-Enten und Rotbauch-Reiher als Arten mit besonderem Schutzstatus erfasst.'
    }
  ]

  return (
    <>
      <Head
        title="Glanzibis in Uganda: 684 Sichtungen und regionale Hotspots"
        description="Glossy Ibis (Plegadis falcinellus) in Uganda: 684 erfasste Individuen, 581 davon am Kazinga Channel im Queen Elizabeth Nationalpark. Wo und wann man den Glanzibis beobachten kann."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Kazinga Channel im Queen Elizabeth Nationalpark, Uganda — ein Lebensraum für Hunderte von Wasservogelarten"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Queen Elizabeth Nationalpark, Uganda — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Glanzibis in Uganda: 684 Sichtungen und die Bedeutung des Kazinga Channels
          </h1>

          {/* Einleitung */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Wer Ugandas Feuchtgebiete kennt, weiß, dass manche Zahlen überraschen. Im Sommer 2019 wurden bei systematischen Vogelzählungen in mehreren ugandischen Gewässern insgesamt 684 Individuen des Glanzibis (Plegadis falcinellus) erfasst. Das ist keine alltägliche Beobachtung — es ist das Ergebnis eines strukturierten Monitoring-Programms, das zeigt, wie außergewöhnlich konzentriert dieser paläarktische Zugvogel an bestimmten Orten in Uganda auftreten kann.
            </p>
            <p>
              Wir haben Uganda in den vergangenen Jahren bei vierzehn dokumentierten Besuchen erkundet — insgesamt 65 Tage im Land. Mark Suer war zuletzt im Juni 2026 vor Ort, davor im Mai 2026, April 2026, Januar 2026 und Oktober 2024. Susanne Suer begleitete im Januar 2026. Die Vogelwelt Ugandas ist bei jeder Reise ein fester Bestandteil — aber ein Glanzibis in solcher Konzentration bleibt etwas, das man nicht vergisst.
            </p>
            <p>
              Dieser Artikel beschreibt, was die Monitoringdaten über den Glanzibis in Uganda belegen, welche Gewässer besonders bedeutend sind, und was Besucher wissen sollten, wenn sie diesen metallisch schimmernden Zugvogel in seiner ugandischen Heimat beobachten wollen.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Fakten: Glanzibis in Uganda auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Wissenschaftlicher Name:</span> Plegadis falcinellus</div>
                <div><span className="font-semibold">Gesamtzahl (Monitoring 2019):</span> 684 Individuen</div>
                <div><span className="font-semibold">Hauptkonzentration:</span> Kazinga Channel — 581 Individuen</div>
                <div><span className="font-semibold">Lutembe Wetland:</span> 2 Individuen</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Status:</span> Paläarktischer Zugvogel (PM)</div>
                <div><span className="font-semibold">Saisonalität:</span> Starke jährliche Schwankungen</div>
                <div><span className="font-semibold">Hauptlebensraum:</span> Feuchtgebiete, Seeufer, Kanäle</div>
                <div><span className="font-semibold">Familie:</span> Threskiornithidae (Ibisse)</div>
              </div>
            </div>
          </div>

          {/* H2: Die Art */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Plegadis falcinellus: Erkennungsmerkmale und Status
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Glanzibis gehört zur Familie der Threskiornithidae, zu der auch Löffler und andere Ibis-Arten zählen. Sein Name leitet sich von dem metallischen Glanz seines Gefieders ab — je nach Lichteinfall schimmert das Federkleid in Bronze-, Kupfer-, Grün- und Rottönen. Dieser Schimmer macht ihn bei guten Lichtverhältnissen unverwechselbar, obwohl er in ungünstigem Licht fast schwarz wirken kann.
              </p>
              <p>
                Das wichtigste Kennzeichen aller Ibis-Arten ist der lange, nach unten gebogene Schnabel. Mit diesem Werkzeug sondieren die Vögel den weichen Schlamm von Flachwasserzonen, Reisfeldern und überfluteten Wiesen nach Würmern, kleinen Amphibien, Wasserkäfern und Krebstieren. Der Glanzibis ist dabei weniger wählerisch als viele andere Watvögel — er nutzt unterschiedlichste Feuchtgebiete, solange Flachwasserzonen mit schlammigen Ufern vorhanden sind.
              </p>
              <p>
                Als paläarktischer Zugvogel ist Plegadis falcinellus kein ganzjähriger Brutvogel in Uganda. Die Art brütet in Südeuropa, dem Nahen Osten und Zentralasien und überwintert in tropischen Feuchtgebieten südlich der Sahara. Uganda liegt an der südlichen Peripherie des Winterquartiers — deshalb sind die Zahlen von Jahr zu Jahr stark schwankend, abhängig davon, wie viele Individuen aus den Brutgebieten in den Süden ziehen und auf welchen Routen sie reisen. Dass 2019 fast 700 Individuen erfasst wurden, war offenbar ein besonders gutes Jahr.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Abgrenzung zu ähnlichen Arten</h3>
              <p>
                In Uganda kommen mehrere Ibis-nahe Arten vor, mit denen Verwechslungen möglich sind. Der Heilige Ibis (Threskiornis aethiopicus) ist deutlich größer und trägt einen schwarzen, nackten Kopf mit weißem Körpergefieder — eine Verwechslung mit dem dunkel gefärbten Glanzibis ist bei ausreichender Beobachtungszeit kaum möglich. Der Afrikanische Löffler (Platalea alba) gehört derselben Familie an, hat aber einen breiten, löffelförmigen Schnabel und weißes Gefieder. Alle drei Arten kommen an denselben Gewässern vor und ergänzen sich zu einer beeindruckenden Vielfalt an Feuchtgebietsvögeln.
              </p>
              <p>
                [RECHERCHE NOETIG: Aktuelle Bestandszahlen und Monitoringdaten aus den Jahren 2020 bis 2025, um zu prüfen, ob sich die Population am Kazinga Channel stabilisiert hat oder weitere Schwankungen zeigt]
              </p>
            </div>
          </section>

          {/* H2: Kazinga Channel */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Der Kazinga Channel: Hotspot mit 581 Individuen
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Von den 684 im Monitoring-Zeitraum erfassten Glanzibis-Individuen wurden 581 an einem einzigen Standort gezählt: dem Kazinga Channel. Dieser natürliche Wasserkanal verbindet Lake Edward im Westen mit Lake George im Osten und durchquert den Queen Elizabeth Nationalpark auf seiner gesamten Länge von etwa 32 Kilometern. Das Wasser ist flach, nährstoffreich und von einem breiten Band aus Schilf, Papyrus und überfluteten Uferzonen gesäumt — optimale Bedingungen für nahrungssuchende Wasservögel.
              </p>
              <p>
                Die Konzentration von 84 Prozent aller erfassten Glanzibis-Individuen an diesem einen Standort ist bemerkenswert. Sie zeigt, dass der Kazinga Channel nicht nur ein zufälliger Aufenthaltsort für diese Art ist, sondern ein strukturell wichtiger Lebensraum — offenbar gut geeignet für die spezifischen Nahrungsanforderungen von Plegadis falcinellus in Ugandas Feuchtgebietslandschaft.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                  alt="Feuchtgebietslandschaft im Queen Elizabeth Nationalpark, Uganda — Lebensraum des Glanzibis am Kazinga Channel"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Queen Elizabeth Nationalpark — flache Uferzonen am Kazinga Channel bieten ideale Bedingungen für Wasservögel. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Bootsfahrt als bester Beobachtungsweg</h3>
              <p>
                Die regulären Bootsfahrten auf dem Kazinga Channel, die täglich in Mweya starten, führen direkt durch die Kernzonen des Vogellebensraums. Wer diese Fahrt unternimmt, bewegt sich in der Mitte des Kanals — nah genug an den Uferzonen, um Vögel auf wenige Meter zu beobachten, ohne sie zu stören. Die Fahrten dauern in der Regel zwei bis drei Stunden und decken die produktivsten Abschnitte des Kanals ab.
              </p>
              <p>
                Der Glanzibis ist dabei nicht der einzige Anziehungspunkt. Am Kazinga Channel treten auch Afrikanische Jacanas, Gemeine Teichhühner, Seidenreiher, Hamerkops und Afrikanische Löffler auf — allesamt Arten, die bei derselben Monitoring-Kampagne erfasst wurden. Daneben sind Flusspferde, Nilkrokodile und Büffelherden an den Ufern ständige Begleiter jeder Kanal-Fahrt.
              </p>
              <p>
                Die Bootsfahrt ist seit Jahren eine der zuverlässigsten Aktivitäten im Queen Elizabeth Nationalpark. Sie ist zugänglich, vergleichsweise kostengünstig und liefert fast immer starke Sichtungen — unabhängig davon, ob Glanzibis gerade in großer Zahl präsent sind oder nicht.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Saisonalität und Unsicherheit</h3>
              <p>
                Die Zahl von 581 Individuen wurde im Juli und August 2019 erfasst. Ob diese Konzentration in jedem Jahr so hoch ist, lässt sich nicht mit Sicherheit sagen — die Art zeigt starke jährliche Schwankungen. Wer eine Uganda-Reise speziell wegen des Glanzibis plant, sollte aktuelle Beobachtungsberichte in internationalen Birding-Datenbanken einsehen, bevor er konkrete Erwartungen formuliert. Für Allgemein-Safari-Besucher ist der Kazinga Channel jedoch in jedem Fall besuchenswert — die Wasservogelwelt des Kanals ist auch ohne den Glanzibis außergewöhnlich reich.
              </p>
            </div>
          </section>

          {/* H2: Weitere Standorte */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Weitere ugandische Feuchtgebiete: Lutembe und Mabamba
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Neben dem Kazinga Channel wurden bei der Monitoring-Kampagne 2019 auch andere ugandische Feuchtgebiete erfasst. Am Lutembe-Feuchtgebiet am Nordostrand des Viktoriasees, nahe Entebbe, wurden lediglich zwei Glanzibis-Individuen gezählt. Diese Zahl illustriert die extreme räumliche Konzentration der Art in Uganda — der Kazinga Channel ist klar dominierend, während andere potenziell geeignete Standorte erheblich weniger frequentiert werden.
              </p>
              <p>
                Lutembe ist dennoch ein ornithologisch wertvolles Gebiet — für andere Arten. Es liegt nahe dem Entebbe International Airport und ist für Besucher, die mit wenig Zeit nur ein Feuchtgebiet besuchen können, gut erreichbar. Lutembe wird von der Uganda Wildlife Authority als Ramsar-Feuchtgebiet eingestuft und bietet einen anderen Lebensraumtyp als der Kazinga Channel: Es handelt sich um ein teilweise bewaldetes Feuchtgebiet am Seeufer, das vor allem als Überwinterungsgebiet für Zugvögel und als Rastplatz für Wasservögel auf dem Weg zwischen dem Viktoriasee-Becken und weiter entfernten Zielen dient.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Mabamba Swamp: Berühmt für den Schuhschnabel</h3>
              <p>
                Der Mabamba-Sumpf westlich von Entebbe ist das bekannteste Vogelbeobachtungsgebiet in der Umgebung der ugandischen Hauptstadt. Seine Berühmtheit verdankt er in erster Linie dem Schuhschnabel (Balaeniceps rex), einem der seltensten und ungewöhnlichsten Vögel Afrikas, der in den tiefen Papyrus-Sümpfen zuverlässig gesichtet werden kann. Der Mabamba-Sumpf ist kein primärer Glanzibis-Standort, aber er zeigt, wie verschiedenartig Ugandas Feuchtgebietslandschaft ist: Von offenen Kanalufern am Kazinga Channel über flache Seeufer-Feuchtgebiete in Lutembe bis zu dichten Papyrus-Sümpfen in Mabamba deckt das Land sehr unterschiedliche Feuchtgebietstypen ab.
              </p>
              <p>
                Wer Uganda mit einem Fokus auf Wasservögel bereist, sollte idealerweise mehrere dieser Standorte kombinieren. Mabamba und Lutembe lassen sich an einem verlängerten Tag rund um Entebbe besuchen; der Kazinga Channel erfordert eine mehrtägige Reise in den Queen Elizabeth Nationalpark.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Verwandte Arten mit Schutzstatus</h3>
              <p>
                In denselben Feuchtgebieten, in denen der Glanzibis erfasst wurde, kommen auch Arten vor, die besondere Aufmerksamkeit verdienen. Die Weißrücken-Ente (Thalassornis leuconotus) ist sowohl auf regionaler als auch auf nationaler Ebene als gefährdet eingestuft. Der Rotbauch-Reiher (Ardeola rufiventris) gilt regional als potentiell gefährdet. Beide Arten wurden bei denselben Monitoring-Aktivitäten erfasst — sie sind Indikatoren für die Qualität der jeweiligen Feuchtgebiete und zeigen, warum diese Standorte über den Einzelartennachweis hinaus bedeutend sind.
              </p>
              <p>
                Die Feuchtgebiete Ugandas stehen unter wachsendem Druck durch Landnutzungsänderungen, Entwässerungsprojekte und die Expansion landwirtschaftlicher Flächen. Die Zahlen aus dem Monitoring belegen, dass diese Lebensräume aktuell noch funktionsfähig sind — es ist jedoch keine Selbstverständlichkeit.
              </p>
            </div>
          </section>

          {/* H2: Begleitarten */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Begleitarten am Kazinga Channel: Ein vollständiges Feuchtgebiets-Ensemble
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Glanzibis tritt am Kazinga Channel nicht allein auf. Die Wasservogel-Gemeinschaft des Kanals umfasst eine Reihe von Arten, die gemeinsam ein vollständiges Bild der Feuchtgebiets-Ökologie dieses außergewöhnlichen Gewässers ergeben.
              </p>
              <p>
                Afrikanische Jacanas (Actophilornis africanus) sind eine der häufigsten Arten. Mit ihren extrem langen Zehen laufen sie auf schwimmenden Wasserpflanzenmatten und suchen dort nach Insekten und kleinen Wirbellosen. Ihr Revier-Verhalten ist auffällig: Weibchen verteidigen große Territorien gegen Rivalinnen, während Männchen die Eier brüten und die Küken unter den Flügeln tragen — eine der bemerkenswertesten Verhaltensumkehrungen im Vogelreich.
              </p>
              <p>
                Gemeine Teichhühner (Gallinula chloropus) sind in denselben Flachwasserzonen präsent. Seidenreiher (Egretta garzetta) stehen reglos in flachen Uferbereichen und stoßen blitzschnell nach kleinen Fischen. Hamerkops (Scopus umbretta) — ein in seiner Erscheinung vollkommen einzigartiger Vogel mit hammerförmigem Kopf — bauen am Kazinga Channel ihre riesigen, geschlossenen Nester in Uferbäumen. Der Afrikanische Löffler (Platalea alba) sweept mit seinem flachen Schnabel durch das Flachwasser, um kleine Krebstiere zu filtern.
              </p>
              <p>
                All diese Arten wurden bei derselben Monitoring-Kampagne erfasst, die auch den Glanzibis dokumentierte. Zusammen bilden sie das Bild eines intakten, artenreichen Feuchtgebiets — eines der wenigen in Ostafrika, die noch in dieser Qualität erhalten sind.
              </p>
            </div>
          </section>

          {/* H2: Praktische Hinweise */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Vogelbeobachtung am Kazinga Channel: Was Besucher wissen sollten
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Queen Elizabeth Nationalpark ist von Kampala aus über Mbarara oder direkt über Fort Portal erreichbar. Die Fahrzeit beträgt je nach Route und Straßenzustand zwischen vier und sechs Stunden. Die meisten Lodges und Camps im Park liegen in Mweya, wo auch die Bootsfahrten starten. Eine Übernachtung im Park ist keine Pflicht, aber deutlich empfehlenswerter als ein Tagesausflug — wer nur die Bootsfahrt und eine Pirschfahrt einplant, versteht den Park oberflächlich.
              </p>
              <p>
                Ferngläser sind für Vogelbeobachtungen am Kazinga Channel unverzichtbar. Viele Vögel sitzen auf dem gegenüberliegenden Ufer oder in mittlerer Entfernung auf Sandbänken — ohne optische Hilfsmittel ist eine Artbestimmung kaum möglich. Ein Spektiv erhöht die Beobachtungsqualität nochmals erheblich, ist aber für Reisende, die mehrere Aktivitäten kombinieren, oft unpraktisch.
              </p>
              <p>
                Kein Uganda-Besuch ohne Ranger und Guide. Im Queen Elizabeth Nationalpark gibt es erfahrene Guides, die auf Vogelbeobachtungen spezialisiert sind. Ein Bootsführer, der die Vogelarten des Kanals kennt und die Boot-Position so steuert, dass seltene Arten nahe genug für gute Beobachtungen kommen, macht den Unterschied zwischen einer generischen Bootsfahrt und einer ornithologisch ergiebigen.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125464168_l7rh.jpg"
                  alt="Ugandischer Guide auf Safari im Queen Elizabeth Nationalpark — lokale Expertise ist entscheidend für Vogelbeobachtungen"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Queen Elizabeth Nationalpark, Uganda — erfahrene Guides kennen die Vogelarten des Kazinga Channels. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Beste Bedingungen für die Beobachtung</h3>
              <p>
                Die Lichtverhältnisse sind früh morgens und am späten Nachmittag am günstigsten — sowohl für die Aktivität der Vögel als auch für die Fotografie. In den Mittagsstunden sind viele Wasservögel weniger aktiv. Die Bootsfahrten auf dem Kazinga Channel starten typischerweise am frühen Morgen und am frühen Nachmittag.
              </p>
              <p>
                Ob der Glanzibis bei einem bestimmten Besuch am Kazinga Channel anwesend ist, hängt von seiner Zugbewegung und den Bedingungen in seinen Brutgebieten nördlich des Äquators ab. Verlässliche Sichtungsberichte aus Birding-Communities wie eBird oder African Bird Club geben einen realistischen Eindruck der aktuellen Situation — deutlich verlässlicher als allgemeine Reisebeschreibungen.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Ugandas Feuchtgebieten" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zum Glanzibis in Uganda
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
              Mehr zu Ugandas Vogelwelt und Nationalparks
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark: Überblick' },
                { href: '/boot-safari-uganda', label: 'Bootsafari in Uganda: Kazinga Channel und Nil' },
                { href: '/schuhschnabel-mabamba', label: 'Schuhschnabel im Mabamba-Sumpf beobachten' },
                { href: '/vogelbeobachten-kibale-bigodi', label: 'Vogelbeobachtung in Kibale und Bigodi' },
                { href: '/beste-reisezeit-uganda', label: 'Die beste Reisezeit für Uganda' },
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
