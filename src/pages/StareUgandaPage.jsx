import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'stare-uganda-arten'

export default function StareUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Welche Glanzstare kommen in Uganda vor?',
      a: 'Uganda beherbergt mehrere Vertreter der Familie Sturnidae. Zu den häufigsten Arten zählen der Dreifarbenglanzstar (Lamprotornis superbus), der Prachtstarhäher (Lamprotornis splendidus), der Blauohr-Glanzstar (Lamprotornis chloropterus) und der Rüppell-Glanzstar (Lamprotornis purpuroptera). Dazu kommt der Lappenstar (Creatophora cinerea) als unregelmäßiger Durchzügler. Jede Art besetzt einen eigenen Lebensraum — von der offenen Savanne bis in den dichten Regenwald.'
    },
    {
      q: 'Warum sind Ugandas Stare so farbenfroh?',
      a: 'Die intensive Irisierung im Gefieder afrikanischer Glanzstare entsteht nicht durch Pigmente, sondern durch Lichtbrechung in mehrschichtigen Federstrukturen — ein Phänomen, das als Strukturfarbe bezeichnet wird. Je nach Lichteinfall wechseln die Farben von Türkis über Smaragdgrün bis hin zu tiefem Violett. In Uganda ist diese Wirkung besonders gut zu beobachten, weil das Licht in der Savanne und an Waldrändern oft aus flachem Winkel einfällt und die Federmikrostruktur optimal trifft.'
    },
    {
      q: 'Wo sind Glanzstare in Uganda am leichtesten zu beobachten?',
      a: 'Superb Starlings sind in der Savanne des Queen Elizabeth Nationalparks und im Murchison Falls Nationalpark regelmäßig zu sehen. Im Bereich Bigodi Wetland Sanctuary und an den Rändern des Kibale Forest National Park findet man Waldarten wie den Splendid Starling. Monitoring-Stationen wie Nakitoma dokumentieren den Blauohr-Glanzstar als besonders häufig — an einem einzigen Beobachtungspunkt wurden dort 18 Individuen erfasst. Wer gezielt Stare beobachten möchte, kombiniert am besten einen Park-Aufenthalt mit einem geführten Vogelbeobachtungsgang.'
    },
    {
      q: 'Lohnen sich Glanzstare als Fotomotiv?',
      a: 'Ja — für Fotografen gehören afrikanische Glanzstare zu den dankbarsten Motiven überhaupt. Das irisierendes Gefieder reagiert auf jede Veränderung des Lichteinfalls und erzeugt in der Gegenlichtaufnahme völlig andere Farbwirkungen als im direkten Sonnenlicht. Außerdem sind viele Arten wenig scheu und halten sich gerne in der Nähe von Lodges und Camps auf, was Aufnahmen in ruhiger Atmosphäre erleichtert. Der ideale Zeitpunkt ist kurz nach Sonnenaufgang, wenn das warme Licht die Farbpalette der Federn am stärksten betont.'
    },
    {
      q: 'Kann man Glanzstare in Uganda gut mit anderen Tierbeobachtungen verbinden?',
      a: 'Sehr gut. Viele Gebiete, in denen Glanzstare häufig sind, bieten gleichzeitig andere Vogelarten und Großsäuger. Im Queen Elizabeth Nationalpark teilen Superb Starlings ihren Lebensraum mit Büffeln, Elefanten und Warzenschweinen. An Waldrändern nahe Kibale begegnet man neben Glanzstaren auch dem Großen Blauen Turako. Eine Walking Safari im Bigodi-Gebiet verbindet Glanzstar-Beobachtungen mit Primaten und Papageienwerbern ohne langen Anreiseweg.'
    }
  ]

  return (
    <>
      <Head
        title="Glanzstare Uganda: Stare-Arten und ihre Lebensräume"
        description="Welche Stare in Uganda vorkommen, wo Glanzstare am besten zu beobachten sind und was ihre Irisierung auszeichnet — aus eigener Erfahrung nach 14 Besuchen."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Waldrand in Uganda — Lebensraum vieler Glanzstar-Arten. Foto: Mark Suer"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Buhoma, Juni 2026 — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Stare Uganda: Glanzstare und ihre Lebensräume im Überblick
          </h1>

          {/* Eroeffnungs-Hook */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Beim Gorilla-Trekking in Buhoma im Mai 2026 fiel mir eine Beobachtung auf, die ich zunächst für selbstverständlich gehalten hätte: An jedem Waldrand, auf jedem freistehendem Ast in Hüfthöhe, saßen Vögel mit Gefieder, das im Morgenlicht wie poliertes Metall wirkte. Nicht ein einzelner Vogel — Dutzende, die sich kaum von der Stelle bewegten und das Licht regelrecht einfingen. Es waren Glanzstare, und sie waren in Uganda allgegenwärtig. In 14 Besuchen und insgesamt 65 Tagen im Land sind sie mir in der Savanne, an Waldrändern und rund um Lodges immer wieder begegnet — in Varianten, deren Farben kaum zu beschreiben sind, wenn man sie nicht selbst gesehen hat.
            </p>
            <p>
              Stare in Uganda sind keine Randnotiz für Vogelbeobachter. Sie sind ein eigenständiges Argument für eine Reise — gerade weil sie so unterschiedliche Lebensräume besiedeln und weil jede Art ihre eigene Farbpalette mitbringt. Dieser Artikel beschreibt die wichtigsten Glanzstar-Arten des Landes, ihre bevorzugten Habitate und was Beobachter und Fotografen konkret erwarten können.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Glanzstare Uganda: Kurzübersicht</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Familie:</span> Sturnidae (Stare)</div>
                <div><span className="font-semibold">Gattung:</span> Lamprotornis (Glanzstare)</div>
                <div><span className="font-semibold">Merkmal:</span> Irisierendes Gefieder durch Lichtbrechung</div>
                <div><span className="font-semibold">Häufigste Art (Nakitoma):</span> Blauohr-Glanzstar (18 Individuen)</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Lebensräume:</span> Savanne, Waldrand, Feuchtgebiet</div>
                <div><span className="font-semibold">Beste Beobachtungszeit:</span> Früh morgens, flaches Licht</div>
                <div><span className="font-semibold">Regelmäßige Arten:</span> 5–6 Glanzstar-Arten dokumentiert</div>
                <div><span className="font-semibold">Eigene Besuche:</span> 14 Uganda-Reisen, 65 Tage gesamt</div>
              </div>
            </div>
          </div>

          {/* H2: Artenvielfalt */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Glanzstare in Uganda: Die wichtigsten Arten
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die Sturnidae sind in Uganda mit mehreren Arten vertreten, die sich in Lebensraum, Verbreitung und Erscheinungsbild deutlich voneinander unterscheiden. Was sie verbindet, ist das charakteristische Strukturgefieder: Die Farben entstehen nicht durch Pigmente, sondern durch die Mikrostruktur der Federn, die Licht bricht und in ein Spektrum von Blau, Grün, Kupfer und Violett verwandelt. Je nach Einfallswinkel und Betrachtungsperspektive wechseln die Farben — ein Effekt, der fotografisch kaum je vollständig einzufangen ist.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Dreifarbenglanzstar (Lamprotornis superbus)</h3>
              <p>
                Der Dreifarbenglanzstar gehört zu den auffälligsten Vertretern der Gattung. Sein Gefieder kombiniert ein leuchtendes Blau-Grün auf der Oberseite mit einem markanten Kastanienbraun auf der Flanke und einem weißen Bauchstreifen — daher der Name. Er ist ein Bewohner offener Savannenlandschaften und trockener Buschgebiete und kommt in Uganda vor allem in den tieferen Lagen des Landes vor, wo die Vegetation lichter ist und Termitenhügel sowie niedrige Akazien das Landschaftsbild prägen.
              </p>
              <p>
                Beim ersten Besuch im Queen Elizabeth Nationalpark im Oktober 2024 waren es genau diese Vögel, die am Rande der Pirschwege auf Steinen und niedrigen Ästen saßen und sich kaum stören ließen. Ihre Vertrautheit mit Menschen ist auffällig — sie weichen nicht weg, sondern beobachten ihrerseits. Das macht sie zu idealen Fotomotiven, gerade in den frühen Morgenstunden, wenn das Licht noch weich ist.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Prachtstarhäher (Lamprotornis splendidus)</h3>
              <p>
                Der Prachtstarhäher ist eine Waldart und in Uganda deutlich schwieriger zu beobachten als der Dreifarbenglanzstar. Er bevorzugt dichten Wald mit hohem Kronendach und hält sich meist im mittleren und oberen Stockwerk auf. Sein Gefieder ist überwiegend Blau und Grün, der Schwanz wirkt bei bestimmten Lichtverhältnissen fast violett schimmernd. An den Rändern des Kibale Forest National Park und im Bereich Bwindi ist er mit etwas Geduld nachweisbar — er verrät sich oft durch sein lautes, hartes Rufen, bevor er sichtbar wird.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Blauohr-Glanzstar (Lamprotornis chloropterus)</h3>
              <p>
                Der Blauohr-Glanzstar ist in Ugandas Monitoring-Daten ein häufig dokumentierter Vertreter der Familie. An der Vogelbeobachtungsstation Nakitoma wurden in einem einzigen Erfassungsdurchgang 18 Individuen dieser Art gezählt — mehr als von jeder anderen Art am selben Standort. Damit lag er noch vor dem Graurücken-Cistensänger (15 Individuen) und dem Afrikanischen Palmensegler (10 Individuen). Diese Zahl ist kein Zufall, sondern ein Hinweis auf die Bindung der Art an halboffene Wald-Savanne-Übergangszonen, wie sie Nakitoma typischerweise bietet.
              </p>
              <p>
                Das Erscheinungsbild des Blauohr-Glanzstars ist etwas dezenter als beim Dreifarbenglanzstar — er zeigt ein gleichmäßigeres Grün-Blau ohne den starken Farbkontrast im Bauchbereich. Die namensgebenden blauen Ohrflecken sind im richtigen Licht jedoch unverkennbar.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Rüppell-Glanzstar (Lamprotornis purpuroptera)</h3>
              <p>
                Der Rüppell-Glanzstar ist in Uganda weniger dicht besiedelt als die beiden zuvor genannten Arten, aber in bestimmten Regionen regelmäßig anzutreffen. Sein Gefieder zeigt eine deutlich purpurne bis rotviolette Tönung, die ihn von anderen Glanzstaren gut unterscheidbar macht. Er bevorzugt Trockenwälder und Buschland und ist in Uganda vor allem in den nördlicheren und trockeneren Bereichen des Landes nachgewiesen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Lappenstar (Creatophora cinerea)</h3>
              <p>
                Der Lappenstar unterscheidet sich von den Glanzstaren der Gattung Lamprotornis erheblich: Sein Gefieder ist überwiegend graubraun, und der Farbglanz fehlt fast vollständig. Charakteristisch sind die fleischigen Lappen an Schnabel und Kopf, die nur beim Männchen in der Brutzeit vollständig ausgeprägt sind. In Uganda tritt er unregelmäßig auf, oft in größeren Schwärmen, die Wanderheuschrecken-Vorkommen folgen. Ein Massenaufkommen ist selten vorherzusagen, gehört aber zu den eindrucksvolleren ornithologischen Ereignissen, wenn es eintritt.
              </p>
            </div>
          </section>

          {/* H2: Habitate */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Lebensräume: Wo Ugandas Stare vorkommen
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Uganda bietet auf engstem Raum eine außergewöhnliche Vielfalt an Lebensräumen — vom tropischen Regenwald über montane Grasländer bis hin zur trockenen Savanne im Norden und Westen. Diese Diversität spiegelt sich direkt in der Zusammensetzung der Glanzstar-Fauna wider: Verschiedene Arten besetzen verschiedene Nischen, und selten konkurrieren mehrere Glanzstare in identischen Lebensräumen miteinander.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Offene Savanne: Habitat des Dreifarbenglanzstars</h3>
              <p>
                Die offenen Savannengebiete im Queen Elizabeth Nationalpark und im Murchison Falls Nationalpark sind klassisches Habitat für den Dreifarbenglanzstar. Hier ist das Nahrungsangebot an Insekten, Beeren und gelegentlichen Eidechsen gut, und die offene Vegetation erlaubt eine weite Sichtbarkeit — sowohl für den Vogel als auch für den Beobachter. Auf Pirschfahrten in diesen Parks begegnet man dem Dreifarbenglanzstar oft an Termitenhügeln, auf Zaunpfählen oder auf niedrigen Ästen am Wegesrand.
              </p>
              <p>
                Die Savannenbereiche sind gleichzeitig gut zugänglich: Pirschfahrten und Walking Safaris erschließen diese Zonen direkt, ohne spezielle Genehmigungen oder aufwendige Vorbereitung. Im Januar 2026 war der Dreifarbenglanzstar an mehreren Stellen im Queen Elizabeth Nationalpark der häufigste Vogel auf den Morgenpirschfahrten — zahlreicher als Webervögel und Tauben.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Waldrand und Feuchtgebiet: Übergangszone mit hoher Artendichte</h3>
              <p>
                Die produktivsten Zonen für Vogelbeobachtung sind oft die Übergangsbereiche zwischen Wald und offener Landschaft. Genau dort, an Waldrändern, entlang von Flüssen und an Feuchtgebieten wie dem Bigodi Wetland Sanctuary nördlich von Kibale, ist die Artendichte am höchsten. Hier treffen Waldarten wie der Prachtstarhäher auf halboffene Bereiche, die dem Blauohr-Glanzstar zusagen.
              </p>
              <p>
                Das Bigodi Wetland Sanctuary ist eines der zugänglichsten Vogelbeobachtungsgebiete Ugandas — zu Fuß begehbar, mit lokalen Guides, die sowohl mit der Avifauna als auch mit den Primaten des Gebiets vertraut sind. Neben Glanzstaren begegnet man hier dem Großen Blauen Turako, verschiedenen Eisvogel-Arten und dem Schuhschnabel in wenigen Stunden Gehzeit.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                  alt="Waldrand bei Buhoma, Uganda — Lebensraum für Glanzstare und weitere Vogelarten. Foto: Mark Suer"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Buhoma, Juni 2026 — an Waldrändern wie diesem sind mehrere Glanzstar-Arten gleichzeitig zu beobachten. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Dichter Regenwald: Eher seltener</h3>
              <p>
                Im geschlossenen Kronendach des Bwindi Impenetrable Forest oder des Kibale Forest treten Glanzstare weniger regelmäßig auf. Das hohe Kronendach und das geringe Lichtangebot im Unterwuchs sind keine idealen Bedingungen für die meisten Lamprotornis-Arten. Waldarten wie der Prachtstarhäher bewegen sich bevorzugt im mittleren Stockwerk, sind aber auch hier eher an Lücken und Rändern zu finden. Wer im Kibale-Schimpansen-Trekking unterwegs ist, sollte vor und nach der Waldtour Zeit an den Waldrändern einplanen — dort ist die Begegnungsdichte mit Glanzstaren deutlich höher als im Inneren des Waldes.
              </p>
            </div>
          </section>

          {/* H2: Beobachten und Fotografieren */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Stare beobachten und fotografieren: Praktische Hinweise
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Für gezielte Glanzstar-Beobachtungen in Uganda ist keine aufwendige Vorbereitung notwendig — aber einige Faktoren machen den Unterschied zwischen zufälligen Sichtungen und gezielten Beobachtungen aus.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Licht und Tageszeit</h3>
              <p>
                Das irisierendes Gefieder der Glanzstare entfaltet seine Wirkung am stärksten in flachem, warmem Licht — also in den ersten und letzten Stunden des Tages. Zu den Mittagsstunden flacht das Licht in Uganda ab und die Farbwirkung verliert an Intensität. Wer Fotos machen möchte, sollte die ersten zwei Stunden nach Sonnenaufgang priorisieren. In dieser Zeit sind die Vögel außerdem aktiver und bewegen sich mehr.
              </p>
              <p>
                In der Gegenlichtaufnahme verhalten sich die Strukturfarben der Federn anders als im direkten Licht — manche Fotografen bevorzugen genau diese Situation, weil sie das metallische Schimmern besonders deutlich macht. Beide Herangehensweisen sind in Uganda im Feld gut umsetzbar.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Geführte Vogelbeobachtung vs. eigenständige Safari</h3>
              <p>
                Wer gezielt Glanzstare sucht, profitiert von einem erfahrenen lokalen Guide. In Uganda gibt es ausgebildete Vogelführer, die nicht nur die Arten kennen, sondern auch wissen, wo sich welche Vögel zu welchen Tageszeiten aufhalten. Gerade für weniger häufige Arten wie den Rüppell-Glanzstar oder den Prachtstarhäher macht dieser Ortskundige-Vorteil einen erheblichen Unterschied. Auf einer normalen Pirschfahrt ohne Vogelführer werden Glanzstare zwar regelmäßig gesehen, aber nicht systematisch dokumentiert.
              </p>
              <p>
                Für die gezielte Vogelbeobachtung ist das Bigodi Wetland Sanctuary ein guter Ausgangspunkt: günstig, zu Fuß begehbar, mit engagierten lokalen Guides und einer gut dokumentierten Artenliste. Eine Walking Safari in der Umgebung des Queen Elizabeth Nationalparks ergänzt dies um die typischen Savannen-Glanzstare.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Monitoring-Daten als Orientierung</h3>
              <p>
                Uganda verfügt über eine aktive Vogelbeobachtungsgemeinschaft, die Zähldaten aus verschiedenen Standorten zusammenführt. Die Nakitoma-Monitoring-Station ist ein Beispiel dafür: Dort wurden der Blauohr-Glanzstar (18 Individuen), der Graurücken-Cistensänger (15 Individuen) und der Afrikanische Palmensegler (10 Individuen) als drei häufigste Arten in einem Erfassungszeitraum dokumentiert. Solche Daten helfen, realistische Erwartungen zu bilden — und zeigen, dass Glanzstare nicht einfach Beifang sind, sondern eigenständige Beobachtungsziele.
              </p>
              <p>
                [RECHERCHE NOETIG: Vollständige Artenliste des Nakitoma-Monitoring-Standorts und weitere Jahresdaten für Uganda-weite Glanzstar-Vorkommen.]
              </p>
            </div>
          </section>

          {/* H2: Glanzstare im Kontext der ugandischen Vogelwelt */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Glanzstare im Kontext: Uganda als Vogelbeobachtungsziel
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Uganda gilt als eines der artenreichsten Vogelländer Afrikas und verzeichnet über 1.000 dokumentierte Vogelarten auf vergleichsweise kleiner Landesfläche. Diese Dichte ist möglich, weil das Land am Schnittpunkt verschiedener biogeografischer Zonen liegt: der ostafrikanischen Savanne, dem Kongobecken-Regenwald und den afro-montanen Grasländern der Albertinen Rift-Region. Glanzstare sind in dieser Vielfalt nur ein Element — aber ein sehr sichtbares.
              </p>
              <p>
                Im Juni 2026 verbrachte ich mehrere Tage in Bwindi und den umliegenden Gemeinden. Zwischen Gorilla-Trekking-Vorbereitungen und Besuchen beim lokalen Waisenhaus blieb Zeit für Beobachtungen am Waldrand — und es waren die Glanzstare, die immer zuerst auffielen. Nicht wegen ihrer Häufigkeit allein, sondern wegen ihrer Präsenz: Sie saßen offen, bewegten sich langsam, und ihr Gefieder reagierte auf jede Wolke, die vor der Sonne vorbeizog. In der Nähe von Bwindi sind laut Feldbeobachtungen auch Arten zu finden, die sonst eher in tieferen Lagen vorkommen — ein Effekt der Höhengradient-Übergänge in dieser Region.
              </p>
              <p>
                Für Vogelbeobachter, die Uganda zum ersten Mal besuchen, ist eine klare Empfehlung möglich: Wer Glanzstare sehen möchte, braucht keinen langen Umweg. Savannenbereiche wie der Queen Elizabeth Nationalpark liefern bereits auf der ersten Morgenpirschfahrt Sichtungen. Wer tiefer einsteigen will, ergänzt dies um einen geführten Gang im Bigodi Wetland Sanctuary und eine oder zwei Stunden an Waldrändern rund um Kibale — und hat damit die häufigsten Arten Ugandas in einem überschaubaren Rahmen kennengelernt.
              </p>
              <p>
                Der Große Blaue Turako, der in denselben Habitatzonen vorkommt, ist oft das erste Highlight für Neuankömmlinge — groß, laut, unübersehbar. Glanzstare dagegen erschließen sich langsamer: Je mehr Zeit man mit ihnen verbringt, desto mehr Details werden sichtbar. Das Blau im Flügelgefieder des Blauohr-Glanzstars, die Kastanienmaserung des Dreifarbenglanzstars im Seitenlicht, der Farbwechsel des Prachtstarhähers zwischen Schatten und Sonne — es ist eine Aufmerksamkeitsfrage, und Uganda bietet dafür ausreichend Gelegenheit.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Glanzstare und Vogelwelt Uganda" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu Staren und Glanzstaren in Uganda
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
              Mehr zur Vogelwelt und Tierwelt Ugandas
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/vogelbeobachten-kibale-bigodi', label: 'Vogelbeobachten in Kibale und Bigodi' },
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark' },
                { href: '/tiere-uganda', label: 'Tiere in Uganda: Artenübersicht' },
                { href: '/walking-safari-uganda', label: 'Walking Safari in Uganda' },
                { href: '/gorilla-trekking', label: 'Gorilla-Trekking in Bwindi' },
                { href: '/beste-reisezeit-uganda', label: 'Beste Reisezeit für Uganda' },
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
