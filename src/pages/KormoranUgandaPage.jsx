import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'kormoran-uganda'

export default function KormoranUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Wo sieht man den Kormoran in Uganda am besten?',
      antwort: 'Die verlässlichsten Sichtungen gibt es entlang des Nil im Murchison Falls Nationalpark und am Kazinga Channel im Queen Elizabeth Nationalpark. Im Murchison Falls Gebiet sitzen Kormorane oft in großer Zahl auf Felsen und ragen aus dem Wasser. Eine Bootsfahrt auf dem Nil gibt die besten Blicke auf brütende und ruhende Gruppen. Der Viktoriasee bietet ebenfalls geeignete Lebensräume, ist aber weniger touristisch erschlossen.'
    },
    {
      frage: 'Ist der Kormoran in Uganda das ganze Jahr anzutreffen?',
      antwort: 'Der Großkormoran (Phalacrocorax carbo) ist in Uganda kein reiner Zugvogel — er ist an fischreichen Gewässern ganzjährig präsent. Allerdings variieren die lokalen Zahlen je nach Wasserstand, Fischangebot und saisonalen Wanderungsbewegungen innerhalb des Landes. Die Monitoringdaten aus dem Sommer 2019 belegen 827 erfasste Individuen — eine der höchsten Zählungen unter allen in diesem Zeitraum erfassten Arten.'
    },
    {
      frage: 'Warum breitet der Kormoran seine Flügel aus?',
      antwort: 'Kormorane haben kein wasserabweisendes Gefieder wie Enten oder Möwen. Ihre Federn saugen sich beim Tauchen mit Wasser voll, was das Abtauchen erleichtert, aber nach dem Fischfang bedeutet, dass die Flügel getrocknet werden müssen. Das charakteristische Flügelaufspreizen — oft minutenlang auf Felsen oder Ästen in der Sonne — ist keine Geste, sondern ein physiologisches Erfordernis. Dieses Verhalten macht Kormorane auf Safari sehr gut erkennbar.'
    },
    {
      frage: 'Welche Bedrohungen hat der Großkormoran in Uganda?',
      antwort: 'Der Großkormoran ist in Uganda und auf regionaler Ebene als gefährdet eingestuft. Hauptgründe sind der Rückgang von Fischbeständen durch Überfischung, der Einbruch der Fischvielfalt im Viktoriasee nach der Einführung des Nilbarsches, sowie direkte Verfolgung durch Fischer, die Kormorane als Konkurrenten betrachten. Lebensraumverlust durch Uferbebauung und Entwässerung von Feuchtgebieten verschärft die Lage zusätzlich.'
    },
    {
      frage: 'Lässt sich eine Kormoran-Beobachtung mit anderen Safari-Aktivitäten verbinden?',
      antwort: 'Sehr gut. Im Murchison Falls Nationalpark ist die Nilbootsfahrt zum Fuß der Wasserfälle eine der klassischen Aktivitäten — sie führt direkt durch die Kernlebensräume der Kormorane. Auf derselben Fahrt sind afrikanische Elefanten, Flusspferde, Nilkrokodile und ein breites Spektrum an Wasservögeln zu sehen. Wer zusätzlich im Queen Elizabeth Nationalpark eine Kazinga-Kanal-Fahrt unternimmt, kombiniert zwei der produktivsten Wasservogel-Standorte Ugandas.'
    }
  ]

  return (
    <>
      <Head
        title="Großkormoran Uganda: 827 Sichtungen — Fischjäger am Nil | Murchison Falls"
        description="Phalacrocorax carbo in Uganda: 827 erfasste Individuen, eine der höchsten Zählungen im Feuchtgebiets-Monitoring. Wo Kormorane zu beobachten sind — vom Nil im Murchison Falls Nationalpark bis zum Viktoriasee."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Nil im Murchison Falls Nationalpark, Uganda — Lebensraum des Großkormorans an Ugandas großem Fluss"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Murchison Falls Nationalpark, Uganda — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Großkormoran in Uganda: 827 Sichtungen und ein schwieriges Verhältnis zu Fischern
          </h1>

          {/* Einleitung */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              827 Individuen in einem einzigen Monitoring-Zeitraum. Der Großkormoran (Phalacrocorax carbo) gehört damit zu den am häufigsten erfassten Wasservögeln in Uganda — und gleichzeitig zu den umstrittensten. Wer entlang des Nils im Murchison Falls Nationalpark eine Bootsfahrt unternimmt, begegnet diesen Vögeln unweigerlich: schwarz, aufrecht, die Flügel ausgebreitet, auf Felsen über dem Strom.
            </p>
            <p>
              Wir haben Uganda in vierzehn dokumentierten Besuchen erkundet — insgesamt 65 Tage im Land. Im Oktober 2024 waren wir zuletzt im Murchison Falls Nationalpark. Die Nilbootsfahrt zum Fuß der Wasserfälle ist eine der Aktivitäten, die man auf dieser Route kaum auslässt — und auf jeder dieser Fahrten sind Kormorane ein fester Teil des Bildes. In Gruppen, auf Sandbänken, auf Baumstümpfen im Wasser, die Flügel in die Sonne gehalten.
            </p>
            <p>
              Dieser Artikel beschreibt, was die Daten über den Großkormoran in Uganda belegen, warum die Art trotz hoher Zahlen als gefährdet gilt und was Besucher bei einer Bootsfahrt auf dem Nil erwarten können.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Fakten: Großkormoran in Uganda</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Wissenschaftlicher Name:</span> Phalacrocorax carbo</div>
                <div><span className="font-semibold">Erfasste Individuen (2019):</span> 827</div>
                <div><span className="font-semibold">Schutzstatus:</span> Regional gefährdet, Uganda gefährdet (R-VU, U-VU)</div>
                <div><span className="font-semibold">Verwandte Art:</span> Afrikanischer Schlangenhalsvogel (Anhinga rufa)</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Hauptlebensräume:</span> Nil, Kazinga Channel, Viktoriasee</div>
                <div><span className="font-semibold">Bestes Beobachtungsgebiet:</span> Murchison Falls NP, Nilbootsfahrt</div>
                <div><span className="font-semibold">Charakteristisches Verhalten:</span> Flügelaufspreizen nach dem Tauchen</div>
                <div><span className="font-semibold">Nahrung:</span> Fische (Tauchfischer)</div>
              </div>
            </div>
          </div>

          {/* H2: Die Art */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Phalacrocorax carbo: Erkennungsmerkmale und Biologie
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Großkormoran ist der größte Kormoran der Welt. Er erreicht eine Körperlänge von 80 bis 100 Zentimetern und ein Gewicht von bis zu drei Kilogramm. Das Gefieder ist überwiegend schwarz mit einem metallischen Schimmer, der Hals ist lang und der Schnabel kräftig, mit einem charakteristischen Haken an der Spitze. Zur Brutzeit zeigt die Art weiße Flecken an Kopf und Flanken — außerhalb der Brutzeit ist das Gefieder einheitlicher dunkel.
              </p>
              <p>
                Das auffälligste Verhalten des Kormorans ist das Flügelaufspreizen nach dem Tauchen. Im Gegensatz zu Enten oder Möwen ist das Gefieder des Kormorans nicht wasserabweisend — die Federn saugen sich beim Tauchen mit Wasser voll, was das Abtauchen erleichtert, aber nach dem Fischfang bedeutet, dass die Flügel aktiv getrocknet werden müssen. Wer einen Kormoran auf einem Felsen oder Baumstumpf sieht, die Schwingen ausgebreitet in Richtung Sonne, beobachtet diesen physiologischen Vorgang. Das Verhalten dauert oft viele Minuten und macht den Vogel für Fotografen leicht erreichbar.
              </p>
              <p>
                Kormorane tauchen aktiv nach Fischen und können dabei mehrere Meter tief abtauchen. Sie treiben Fische in Richtung seichtere Gewässer und fangen sie mit einem schnellen Biss des Hakenrückens. In Uganda bedeutet das vor allem Nilbarsch, Tilapia und andere Fischarten, die in den großen Gewässern des Landes vorkommen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Verwandter mit gleichem Schutzstatus</h3>
              <p>
                Eng verwandt mit dem Großkormoran ist der Afrikanische Schlangenhalsvogel, auch Afrikanischer Darter genannt (Anhinga rufa). Er teilt den Schutzstatus — ebenfalls regional und in Uganda als gefährdet eingestuft — und bewohnt dieselben Lebensräume. Der Schlangenhalsvogel unterscheidet sich durch seinen schlanken, langen Hals, der beim Tauchen S-förmig eingezogen wird und beim Auftauchen gestreckt nach vorne schießt, um Fische zu erstechen statt zu fangen. Im Monitoring-Zeitraum 2019 wurde ein Individuum an einem der überwachten Feuchtgebiete erfasst. In der Praxis begegnet man beiden Arten oft an denselben Standorten — Schlangenhalsvögel sind etwas scheuer und etwas seltener als Kormorane, aber bei Nilbootsfahrten regelmäßig zu sehen.
              </p>
              <p>
                [RECHERCHE NOETIG: Genaue Brutstätten des Großkormorans in Uganda sowie aktuelle Bestandsschätzungen für die einzelnen Gewässer, insbesondere Murchison Falls und Kazinga Channel]
              </p>
            </div>
          </section>

          {/* H2: Murchison Falls */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Murchison Falls Nationalpark: Kormorane am ugandischen Nil
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Murchison Falls Nationalpark ist der größte Nationalpark Ugandas und liegt im Nordwesten des Landes, wo der Victoria-Nil seinen Weg durch eine offene Savannelandschaft nimmt. Kurz bevor der Fluss den gleichnamigen Wasserfall erreicht, zwängt er sich durch eine nur wenige Meter breite Felsschlucht — eine der bemerkenswertesten Engstellen eines afrikanischen Flusses. Unterhalb des Wasserfalls weitet sich der Nil wieder zu einem ruhigen, breiten Strom, der sich bis zum Albertsee erstreckt.
              </p>
              <p>
                Dieser untere Nil-Abschnitt ist Kernlebensraum des Großkormorans in Uganda. Die Felsen im und am Fluss bieten Rastplätze, die für Tauchfischer ideal sind: trocken genug, um die Flügel zu spreizen, nah genug am Wasser, um schnell wieder zu tauchen. Große Gruppen von Kormoranen sind auf den Felsformationen des Nils ein typisches Bild — besonders zahlreich auf den flachen, von der Strömung geformten Gesteinsplattformen, die sich stellenweise wie Inseln aus dem Wasser erheben.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Die Nilbootsfahrt: Bester Zugang zu den Kormoran-Kolonien</h3>
              <p>
                Die Bootsfahrt auf dem Nil — von Paraa am Südufer des Flusses stromaufwärts zum Fuß der Wasserfälle und zurück — ist die klassische Aktivität im Murchison Falls Nationalpark und zugleich die verlässlichste Möglichkeit, den Großkormoran aus nächster Nähe zu beobachten. Das Boot bewegt sich langsam durch die Kernzone des Lebensraums, vorbei an Nilkrokodilen auf Sandbänken, Flusspferden im Wasser und Elefanten, die an den Ufern trinken. Kormorane sind bei jeder Fahrt präsent.
              </p>
              <p>
                Im Oktober 2024 war genau das der Fall: Die Felsen oberhalb des Wasserfalls und die Ufervegetation entlang der Fahrtroute waren von Kormoranen besetzt. Das Flügelaufspreizen in der Sonne gehört zu den Bildern, die man von dieser Fahrt mitnimmt. Neben Kormoranen tauchen auf derselben Strecke regelmäßig Afrikanische Fischadler, Malachit-Eisvögel, Rieseneisvögel, Kuhreiher, Graureiher und verschiedene Arten von Geiern auf — die Artenvielfalt auf der Nilbootsfahrt ist außergewöhnlich.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                  alt="Wasservögel am Nil, Murchison Falls Nationalpark Uganda — typischer Lebensraum des Großkormorans"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Murchison Falls Nationalpark, Uganda — der untere Nil ist Kernlebensraum des Großkormorans. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Wasservögel im Kontext: Ein artenreiches Gewässer</h3>
              <p>
                Der Kormoran ist nicht der einzige Wasservogelspezialist im Murchison Falls Nationalpark. Afrikanische Fischadler (Haliaeetus vocifer) nutzen dieselben Fischbestände aus der Luft. Pink-backed Pelicans (Pelecanus rufescens) fischen in Gruppen auf dem Nil. Diese drei Arten — Kormoran, Fischadler und Pelikan — repräsentieren unterschiedliche Jagdstrategien auf denselben Fischbestand: Tauchen, Greiffang aus der Luft und Kesseltreihen mit dem Kehlsack. Das Nebeneinander dieser Spezialisten ist ein Hinweis auf die Produktivität des Nils in diesem Abschnitt.
              </p>
              <p>
                Im Feuchtgebiets-Monitoring wurden solche Begleitarten an Standorten mit Großkormoran regelmäßig gemeinsam erfasst. Dass Wasservögel unterschiedlicher Gilden dieselben Gewässer besiedeln, gilt als Indikator für intakte Fischbestände — der Kormoran fungiert in diesem Sinne als Messlatte für die Gesundheit eines Gewässers.
              </p>
            </div>
          </section>

          {/* H2: Fischkonkurrenz und Schutzstatus */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Indikator und Konkurrent: Die ökologische Doppelrolle des Kormorans
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Großkormoran ist ein Indikator für gesunde Fischbestände — seine Präsenz zeigt an, dass ein Gewässer ausreichend Nahrung für einen anspruchsvollen Tauchfischer bietet. Gleichzeitig ist er genau deshalb ein Konkurrent für Fischer. In Uganda, wo viele Gemeinden rund um den Viktoriasee, den Albertsee und den Nil von der Fischerei abhängig sind, hat dieses Spannungsverhältnis konkrete Auswirkungen auf die Wahrnehmung des Vogels.
              </p>
              <p>
                Die Einführung des Nilbarsches (Lates niloticus) in den Viktoriasee in den 1950er und 1960er Jahren hat die Fischvielfalt des Sees dramatisch verändert. Hunderte endemischer Buntbarscharten wurden durch die Konkurrenz und direkte Prädation des Nilbarsches ausgerottet oder massiv dezimiert. Was blieb, ist eine Fischfauna, die von wenigen dominanten Arten geprägt wird. Für Kormorane bedeutet das eine veränderte Nahrungsgrundlage — aber keine automatisch schlechtere. Phalacrocorax carbo hat sich an das neue Artenspektrum des Sees angepasst.
              </p>
              <p>
                Dass die Art trotz dieser Anpassungsfähigkeit als regional und national gefährdet eingestuft ist, liegt an anderen Faktoren: Verfolgung durch Fischer, die Kormorane an Netzen oder Brutplätzen töten, Rückgang geeigneter ungestörter Brutplätze an Küsten und Flussfelsen, sowie der allgemeine Druck auf Feuchtgebiete durch Urbanisierung und Landnutzungsänderungen. Die hohen Monitoringzahlen von 827 Individuen geben deshalb keinen vollständigen Entwarnung — Zählungen in einem einzigen Zeitraum spiegeln nicht den Langzeittrend.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Lutembe und die Feuchtgebietsperspektive</h3>
              <p>
                Das Lutembe-Feuchtgebiet am Nordufer des Viktoriasees — ein Ramsar-Feuchtgebiet nahe Entebbe — war im selben Monitoring-Zeitraum Standort für insgesamt 1.276 Individuen aus 28 Vogelarten. Die Gesamtheit dieser Zählungen zeigt, wie bedeutend die ugandischen Gewässer für Wasservögel sind: allein an diesem einen Standort wurden zehn paläarktische Zugvogelarten erfasst, darunter Weißflügel-Seeschwalben mit 81 Individuen, sowie zwei regional als potentiell gefährdet eingestufte Arten — der Africamarschhäher und der Mangrovenreiher. Kormorane waren in diesem Ensemble ebenfalls präsent.
              </p>
              <p>
                Für Besucher, die von Kampala oder Entebbe aus schnell ein Feuchtgebiet erreichen wollen, bietet Lutembe eine dichte Zusammenfassung dessen, was Ugandas Wasservogelwelt auszeichnet — auf kleinem Raum, gut erreichbar, ohne Safari-Aufwand. Der Großkormoran ist dort keine Garantie, aber ein realistischer Bestandteil jeder ernsthaften Beobachtungssession.
              </p>
            </div>
          </section>

          {/* H2: Begleitarten und Einordnung */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Einordnung in Ugandas Wasservogel-Monitoring: Zahlen im Vergleich
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                827 Kormorane sind viel — aber um zu verstehen, was diese Zahl bedeutet, hilft der Vergleich. In demselben Monitoring-Zeitraum wurden am Lutembe-Standort allein 912 Grauköpfige Möwen (Chroicocephalus cirrocephalus) erfasst — die höchste Einzelartenzählung des gesamten Monitoring-Programms an diesem Standort. Diese Relation zeigt: Uganda beherbergt bei bestimmten Wasservogelarten Zahlen, die auf kontinentaler Ebene relevant sind.
              </p>
              <p>
                Der Kormoran mit 827 Individuen liegt damit in einer Größenordnung, die ihn zu einem der quantitativ bedeutendsten Wasservögel im ugandischen Monitoring macht. Gleichzeitig ist die räumliche Verteilung dieser Individuen entscheidend: Wie beim Glanzibis am Kazinga Channel konzentrieren sich auch beim Kormoran vermutlich viele Tiere an wenigen Schlüsselstandorten. Werden diese Standorte beeinträchtigt — durch Fischerei, Störung an Brutplätzen oder Rückgang der Fischbestände — hat das überproportionale Auswirkungen auf die Gesamtpopulation.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Was der Schutzstatus bedeutet</h3>
              <p>
                R-VU (Regionally Vulnerable) und U-VU (Uganda Vulnerable) sind Einstufungen, die auf Basis von Bestandstrends, Verbreitungsveränderungen und Bedrohungsgrad vergeben werden. Für den Großkormoran bedeutet das: trotz Anpassungsfähigkeit und vergleichsweise hoher Zählwerte zeigen die Langzeitdaten einen negativen Trend. Die Zahl 827 aus dem Jahr 2019 ist kein Beweis für eine stabile Population — sie ist ein Momentbild.
              </p>
              <p>
                Für Besucher ist diese Einordnung weniger von praktischer Bedeutung als für Naturschützer. Wer Uganda bereist, sieht Kormorane an praktisch jedem fischreichen Gewässer. Wer Uganda versteht, weiß, dass selbst häufig sichtbare Arten unter Druck stehen können — und dass die Feuchtgebiete, in denen diese Begegnungen stattfinden, nicht selbstverständlich erhalten bleiben.
              </p>
            </div>
          </section>

          {/* H2: Praktische Hinweise */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Beobachtung in der Praxis: Nil, Kanal und Viktoriasee
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Wer den Großkormoran in Uganda gezielt sucht, sollte drei Standorte im Kopf haben: den unteren Nil im Murchison Falls Nationalpark, den Kazinga Channel im Queen Elizabeth Nationalpark und — als dritte, weniger touristische Option — die Ufer des Viktoriasees nahe Entebbe oder Jinja. An allen drei Standorten ist Phalacrocorax carbo ganzjährig präsent, wenngleich die lokalen Zahlen schwanken.
              </p>
              <p>
                Im Murchison Falls Nationalpark ist die Bootsfahrt auf dem Nil der Standardweg. Die Fahrt startet am Anleger in Paraa — mehrere Camps und Lodges liegen in unmittelbarer Nähe — und führt stromaufwärts zum Fuß der Wasserfälle. Dauer: etwa drei Stunden. Kormorane sind auf dieser Strecke auf Felsen, in Uferbäumen und im Flug regelmäßig zu sehen. Zusätzlich zur Bootsfahrt bietet der Abschnitt oberhalb der Wasserfälle vom Viewpoint aus Blicke auf die Schlucht und die angrenzende Vegetation — ein anderer Lebensraumtyp, mit anderen Vogelarten.
              </p>
              <p>
                Der Kazinga Channel im Queen Elizabeth Nationalpark ist ebenfalls per Boot zugänglich und funktioniert als Ergänzung zum Murchison Falls Besuch bei einer mehrstufigen Reiseroute durch Uganda. Wer beide Parks kombiniert — eine klassische Uganda-Safari-Route — erlebt Kormorane in zwei unterschiedlichen Landschaftskontexten: dem offenen Savannenfluss im Norden und dem breiteren, von Papyrus gesäumten Kanal im Süden.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125464168_l7rh.jpg"
                  alt="Bootsfahrt auf ugandischem Gewässer — optimale Perspektive für Wasservogel-Beobachtungen"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Nilbootsfahrt, Murchison Falls Nationalpark — Bootsfahrten bieten die beste Perspektive auf Kormorane und andere Wasservögel. Foto: Mark Suer
                </figcaption>
              </figure>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Ausrüstung und Timing</h3>
              <p>
                Ein Fernglas mit acht- bis zehnfacher Vergrößerung ist auf Nilbootsfahrten sinnvoll. Kormorane sitzen oft nah genug, um auch ohne optische Hilfsmittel erkannt zu werden — aber für Artbestimmungen und die Unterscheidung des Afrikanischen Schlangenhalsvogels vom Kormoran ist ein Fernglas empfehlenswert. Die Lichtbedingungen auf dem Nil sind früh morgens und am späten Nachmittag am günstigsten. In den Mittagsstunden ist das Licht hart und flach.
              </p>
              <p>
                Bootsfahrten im Murchison Falls Nationalpark starten in der Regel gegen 8 Uhr morgens und gegen 14 Uhr nachmittags. Die Morgentour ist für Vogelbeobachtung bevorzugt — die meisten Wasservögel sind in den frühen Stunden aktiver, und das Licht fällt günstiger für Sichtungen flussaufwärts. Buchung über das jeweilige Camp oder direkt an der Paraa-Anlegestelle.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke: Großkormoran und Wasservögel in Uganda" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zum Großkormoran in Uganda
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
              Mehr zu Ugandas Nationalparks und Wasservögeln
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/nationalparks/murchison_falls', label: 'Murchison Falls Nationalpark: Überblick' },
                { href: '/boot-safari-uganda', label: 'Bootsafari in Uganda: Nil und Kazinga Channel' },
                { href: '/murchison-falls-nationalpark-guide', label: 'Murchison Falls: Reiseführer und Tipps' },
                { href: '/tiere-uganda', label: 'Tiere in Uganda: Wildtiere und Vögel im Überblick' },
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
