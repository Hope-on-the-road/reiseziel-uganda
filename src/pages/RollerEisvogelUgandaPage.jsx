import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'roller-eisvoegel-uganda'

export default function RollerEisvogelUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Wo sehe ich Eisvögel in Uganda am zuverlässigsten?',
      a: 'Alle drei häufigen Eisvogelarten — Graurücken-Eisvogel, Rieseneisvogel und Malachiteisvogel — kommen entlang des Kazinga-Kanals im Queen Elizabeth Nationalpark sowie am Nil im Murchison Falls Nationalpark vor. Der Malachiteisvogel ist auch an kleineren Fließgewässern, an Papyrus-gesäumten Seen und in feuchten Waldbereichen anzutreffen. Eine Bootsfahrt auf dem Kazinga-Kanal oder dem Viktoria-Nil erhöht die Beobachtungschancen deutlich, weil man auf Augenhöhe mit dem Ufer treibt.'
    },
    {
      q: 'Was unterscheidet den Fliederbrust-Roller von anderen Racken?',
      a: 'Der Fliederbrust-Roller (Coracias caudatus) fällt durch seine ausgeprägte Farbkombination auf: türkisblaue Flügel und Brust, lila-fliederfarben an Kehle und Brust, bräunlicher Rücken. In Uganda ist er in der offenen Savanne von Murchison Falls und Queen Elizabeth verbreitet. Sein auffälligstes Merkmal im Flug sind die verlängerten äußeren Steuerfedern, die dem Vogel einen charakteristischen Schwanzspiess verleihen. Zur Balz vollführt er akrobatische Rollflüge — daher der Familienname.'
    },
    {
      q: 'Wie groß ist die Bienenfresser-Population im Murchison Falls Nationalpark?',
      a: 'Für den Rotkehl-Bienenfresser (Merops bulocki) wurden im Murchison Falls Nationalpark bei Bestandserfassungen über 100 Individuen gezählt — er gilt damit als häufige Art im Park. Andere Arten wie der Zwergspint (Merops pusillus) und der Karminspint kommen ebenfalls vor, sind aber weniger zahlreich. Bienenfresser brüten oft in Kolonien an Erdböschungen; wer solche Brutplätze im Murchison Falls Nationalpark findet, kann Dutzende Tiere auf einmal beobachten.'
    },
    {
      q: 'Welche Nashornvögel leben in Uganda, und wo begegne ich ihnen?',
      a: 'Uganda hat mehrere Hornbill-Arten in unterschiedlichen Lebensräumen. Der Rotschnabeltoko ist in trockenen Buschlandschaften verbreitet, zum Beispiel in den trockeneren Zonen des Murchison Falls Nationalparks. Der Gelbschnabeltoko und der Trompeterhornrabe bevorzugen Waldgebiete. Der Kaffernhornrabe ist die auffälligste Art — er läuft am Boden durch die Savanne, ist bis zu 110 cm groß und hat ein rotblaues nacktes Gesicht. Im Queen Elizabeth und Murchison Falls Nationalpark sind Kaffernhornraben auf offenen Flächen gelegentlich zu sehen.'
    },
    {
      q: 'Kann man Roller, Eisvögel und andere bunte Vögel gut mit einer Standard-Safari kombinieren?',
      a: 'Ja, ohne Mehraufwand. Wer Pirschfahrten im Queen Elizabeth oder Murchison Falls Nationalpark unternimmt, begegnet diesen Arten automatisch. Bienenfresser sitzen oft auf Zaunpfählen oder trockenen Ästen am Wegesrand. Der Fliederbrust-Roller ist kaum zu übersehen. Eisvögel sind auf jeder Bootsfahrt entlang von Flüssen präsent. Eine gesonderte Birding-Tour ist für diese Arten nicht notwendig — obwohl spezialisierte Vogelguides natürlich weitere Arten und Verhaltensweisen erschließen, die Gelegenheitsbeobachter übersehen würden.'
    }
  ]

  return (
    <>
      <Head
        title="Eisvögel und Roller Uganda: Bunte Vögel auf Safari"
        description="Eisvögel, Roller und Bienenfresser in Uganda: Welche Arten vorkommen, wo man sie findet und was die Beobachtungen im Murchison Falls und Queen Elizabeth Nationalpark zeigen."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
            alt="Savanne im Murchison Falls Nationalpark, Uganda — Foto: Mark Suer"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Murchison Falls Nationalpark, Uganda — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Eisvögel und Roller in Uganda: Farbintensität in der Savanne
          </h1>

          {/* Eroeffnungs-Hook */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Es gibt Momente auf einer Uganda-Safari, in denen ein einziger Vogel die gesamte Aufmerksamkeit bündelt. Der Fliederbrust-Roller sitzt auf einem trockenen Ast am Rand der Savanne, dreht den Kopf, und das Licht trifft sein Gefieder so, dass sich türkis, lilafarbene und braune Töne gleichzeitig entfalten. Kein Filter, kein Bildschirm, kein Druckbild kommt der tatsächlichen Farbintensität nahe. Wer das einmal gesehen hat, versteht, warum Vogelbeobachter Uganda gezielt bereisen.
            </p>
            <p>
              In 14 dokumentierten Besuchen und insgesamt 65 Tagen in Uganda haben wir diese Erfahrung immer wieder gemacht — nicht nur mit Rollern, sondern mit Eisvögeln entlang der Flüsse, mit Bienenfressern auf Böschungen im Murchison Falls Nationalpark, mit Nashornvögeln in Busch und Waldrand. Uganda ist für Ornithologen längst ein ernsthaftes Ziel; für alle anderen Reisenden sind diese Begegnungen ein Gewinn, der keine gesonderte Planung erfordert. Sie geschehen einfach, wenn man sich in den richtigen Lebensräumen bewegt.
            </p>
            <p>
              Dieser Artikel konzentriert sich auf die auffälligsten bunten Vogelgruppen Ugandas: Eisvögel (Alcedinidae), Racken (Coraciidae), Bienenfresser (Meropidae) und Nashornvögel (Bucerotidae). Diese Familien sind in Uganda mit mehreren Arten vertreten und in den großen Nationalparks des Landes ohne größeren Aufwand zu beobachten.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Bunte Vögel Uganda: Arten auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Roller:</span> Fliederbrust-Roller (Coracias caudatus) — ikonische Savannenart</div>
                <div><span className="font-semibold">Eisvögel:</span> Graurücken-, Riesen- und Malachiteisvogel</div>
                <div><span className="font-semibold">Bienenfresser:</span> Rotkehl-, Zwerg- und Karminspint</div>
                <div><span className="font-semibold">Nashornvögel:</span> 4 Arten in unterschiedlichen Habitaten</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Beste Standorte:</span> Murchison Falls NP, Queen Elizabeth NP</div>
                <div><span className="font-semibold">Rotkehl-Bienenfresser MFNP:</span> 103 Individuen dokumentiert</div>
                <div><span className="font-semibold">Zwergspint:</span> kleinster Bienenfresser, 15 cm</div>
                <div><span className="font-semibold">Kaffernhornrabe:</span> bis 110 cm, läuft auf dem Boden</div>
              </div>
            </div>
          </div>

          {/* H2: Roller */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Roller in Uganda: Coracias caudatus und die Kunst des Rollenflugs
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Der Fliederbrust-Roller ist in Uganda einer der bekanntesten Savannenvögel — nicht wegen seiner Seltenheit, sondern wegen seiner Sichtbarkeit. Er sitzt exponiert: auf Zaunpfählen, trockenen Ästen, Telegrafendrähten, auf dem obersten Zweig eines Akazienbaums. Von dort aus beobachtet er den Boden und stürzt sich auf Insekten, Eidechsen oder kleine Nagetiere. Der Sturzflug ist schnell, die Rückkehr auf den Sitzplatz präzise.
              </p>
              <p>
                Die Farbgebung des Fliederbrust-Rollers ist aufwendig. Das türkisblaue Gefieder an Flügeln und Unterseite schimmert je nach Lichteinfall grün oder azurblau. Kehle und Brust zeigen ein sattes Lilarosé, das in der afrikanischen Mittagssonne fast leuchtet. Der Rücken ist rotbraun, der Schwanz hat zwei verlängerte äußere Federn, die ihm im Flug ein charakteristisches Erscheinungsbild geben. Diese Steuerfedern — sogenannte Schwanzspieße — sind eines der sichersten Bestimmungsmerkmale, selbst auf Distanz.
              </p>
              <p>
                Seinen Namen trägt die Familie (Coraciidae) vom auffälligen Balzverhalten: Männchen vollführen akrobatische Rollflüge, bei denen sie sich seitlich überschlagen und in Spiralen abstürzen, bevor sie abfangen. Wer diesen Flug beobachtet, versteht sofort, woher der Familienname kommt.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Wo Roller in Uganda am häufigsten sind</h3>
              <p>
                Im Murchison Falls Nationalpark und im Queen Elizabeth Nationalpark ist der Fliederbrust-Roller auf offenen Savannenflächen verbreitet. Auf der Nordbank des Murchison Falls Nationalparks, wo Pirschfahrten auf weite Grasflächen mit vereinzelten Akazien führen, sind Roller regelmäßige Begleiter — oft mehrere Individuen auf kurzer Strecke. Im Queen Elizabeth Nationalpark ist er im nördlichen Sektor rund um Mweya und auf den offenen Flächen südlich des Kazinga-Kanals präsent.
              </p>
              <p>
                Abseits dieser bekannten Nationalparks kommen Roller auch an den Rändern landwirtschaftlicher Flächen vor, wo Bäume stehen und das Umfeld offen genug für Jagdflüge ist. In dichten Wäldern oder in höheren Berglagen fehlen sie weitgehend. Der Übergang von Busch zu offener Savanne ist ihr Optimum.
              </p>
              <p>
                [RECHERCHE NOETIG: Weitere Rackenarten in Uganda, etwa Violett-Racke oder Gabelschwanz-Racke — Vorkommen und Verbreitung im Vergleich zu Coracias caudatus]
              </p>
            </div>
          </section>

          {/* H2: Eisvögel */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Eisvögel in Uganda: Drei Arten an Ugandas Gewässern
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Ugandas Flüsse, Seen und Feuchtgebiete sind reich an Eisvögeln. Wer eine Bootsfahrt auf dem Kazinga-Kanal im Queen Elizabeth Nationalpark oder den Viktoria-Nil im Murchison Falls Nationalpark unternimmt, begegnet ihnen fast zwangsläufig. Die drei häufigsten Arten unterscheiden sich erheblich in Größe, Färbung und Jagdstrategie.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Graurücken-Eisvogel: Der schwebende Jäger</h3>
              <p>
                Der Graurücken-Eisvogel (Ceryle rudis, englisch: Pied Kingfisher) ist der in Uganda am leichtesten zu erkennende Eisvogel — nicht wegen seiner Farbigkeit, sondern wegen seines Jagdverhaltens. Er ist eine der wenigen Eisvogelarten weltweit, die über dem Wasser rütteln können. Das Tier steht im Schwebflug, oft mehrere Sekunden lang, bevor es senkrecht ins Wasser schießt. Diese Technik macht ihn unabhängig von Sitzwarten und erlaubt die Jagd auch über tiefem, freiem Wasser.
              </p>
              <p>
                Die Zeichnung ist schwarzweiß gemustert, ohne intensive Farbtöne. Männchen tragen eine doppelte schwarze Brustbinde, Weibchen nur eine unterbrochene einfache Binde — ein verlässliches Unterscheidungsmerkmal im Feld. An den Ufern des Kazinga-Kanals und des Nils sind Graurücken-Eisvögel häufig anzutreffen; manchmal sitzen mehrere Individuen in kurzen Abständen auf denselben Ästen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Rieseneisvogel: Größte Eisvogelart Afrikas</h3>
              <p>
                Der Rieseneisvogel (Megaceryle maxima) ist mit über 40 Zentimetern Länge der größte Eisvogel Afrikas und entsprechend imposant. Das Männchen zeigt eine kastanienbraune Brust und blau-schwarz gesprenkeltes Gefieder an Kopf und Oberseite. Der Schnabel ist massiv und wirkt im Vergleich zum Körper überdimensional. Er sitzt bevorzugt auf niedrigen, dem Wasser nahen Ästen und wartet geduldig auf Fische, die groß genug sind, um den Aufwand zu rechtfertigen.
              </p>
              <p>
                Im Vergleich zum Graurücken-Eisvogel ist er seltener zu sehen, aber gut erkennbar: Schon die Größe allein schließt Verwechslungen aus. An beschatteten Flussbereichen und entlang waldreicher Uferabschnitte ist er in Uganda regelmäßig, wenn auch nicht häufig.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Malachiteisvogel: Kleiner und intensiv gefärbt</h3>
              <p>
                Der Malachiteisvogel (Corythornis cristatus) ist der kleinste der drei Arten und zeigt die intensivste Farbgebung: tiefes Smaragdgrün am Rücken und Kopf, leuchtendes Orange an Brust und Unterseite, mit einem langen, spitzen roten Schnabel. Er bevorzugt langsam fließende oder stehende Gewässer mit dichter Ufervegetation — Papyrussümpfe, überhängende Äste über stillen Buchten, kleinere Zuflüsse.
              </p>
              <p>
                Wer den Malachiteisvogel sucht, muss langsamer werden als bei den anderen Arten. Er sitzt tief und nah am Wasser, oft halb verborgen unter Blättern. Sein Jagdstoß ist kurz und präzise. In der Nähe von Bwindi, entlang kleinerer Bäche im südwestlichen Uganda, ist er auf Wanderungen regelmäßig anzutreffen — ein Argument mehr für geführte <a href="/walking-safari-uganda" className="text-jungle-700 hover:underline">Walking Safaris</a> abseits der Hauptfahrwege.
              </p>
            </div>
          </section>

          {/* H2: Bienenfresser */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Bienenfresser in Uganda: Von Zwergspint bis Karminspint
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die Bienenfresser (Meropidae) sind in Uganda mit mehreren Arten vertreten und gehören zu den farbenprächtigsten Vögeln überhaupt. Alle Arten jagen Fluginsekten — vor allem Bienen, Wespen und Libellen — und werfen ihre Beute nach dem Fang gegen einen Ast, bevor sie sie verschlucken, um den Giftstachel zu entfernen. Dieses Verhalten ist gut beobachtbar, wenn man an einem Sitzplatz wartet.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Rotkehl-Bienenfresser: Häufigste Art im Murchison Falls Nationalpark</h3>
              <p>
                Der Rotkehl-Bienenfresser (Merops bulocki) ist im Murchison Falls Nationalpark gut dokumentiert: Bei Bestandserfassungen wurden über 100 Individuen gezählt, was ihn zur häufigsten Bienenfresserart in diesem Park macht. Er zeigt grünes Gefieder an Oberseite und Flügeln, eine leuchtend rote Kehle und gelblich-orangene Töne an Brust und Gesicht. In Kolonien an Erdböschungen brütend, ist er teils in Gruppen von mehreren Dutzend Tieren zu sehen.
              </p>
              <p>
                Wer eine Bootsfahrt auf dem Nil unternimmt, begegnet dieser Art oft entlang der steilen Uferwände, wo Kolonien ihre Niströhren in das weiche Erdreich graben. Der Lärm einer aktiven Kolonie ist schon von Weitem zu hören — ein charakteristisches mehrstimmiges Schnarren und Schirpen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Zwergspint: Kleinster Bienenfresser der Welt</h3>
              <p>
                Der Zwergspint (Merops pusillus) ist mit etwa 15 Zentimetern die kleinste Bienenfresserart weltweit. Im Gegensatz zu anderen Meropiden hat er einen geraden Schwanz ohne verlängerte Mittelfedern. Die Oberseite ist grün, der Bauch bräunlich, die Kehle auffällig goldgelb. Wer die Art kennt, erkennt sie schnell; wer sie zum ersten Mal sieht, nimmt sie leicht für einen Weberfinken oder eine andere kleine Art.
              </p>
              <p>
                Der Zwergspint ist in Uganda in offenen Lebensräumen mit einzelnen Büschen und Bäumen verbreitet, teils auch in der Nähe von Siedlungen. Er ist weniger ortsgebunden als einige größere Verwandte und kann auf Pirschfahrten durch die Savanne unvermittelt auf einem niedrigen Ast auftauchen. Seine geringe Größe macht ihn auf Fotos schwierig einzufangen — mit dem Fernglas hingegen ist er eine der lohnendsten Bekanntschaften.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Karminspint: Spektakulär in Farbe und Größe</h3>
              <p>
                Der Karminspint (Merops nubicus) ist die auffälligste Bienenfresserart Ugandas. Er ist groß — deutlich größer als Zwergspint oder Rotkehlspint — und zeigt eine intensive kaminrote Körperfärbung mit türkisblauem Kopf, Kehle und Schwanz. Im Flug ist er unverwechselbar. Er brütet in großen Kolonien und kommt bevorzugt in Flussnähe und in halboffenen Savannenbereichen vor.
              </p>
              <p>
                In Uganda ist der Karminspint im Murchison Falls Nationalpark und in Teilen des Karamoja-Gebiets im Nordosten dokumentiert. Wer ihn auf einer <a href="/boot-safari-uganda" className="text-jungle-700 hover:underline">Bootsafari auf dem Nil</a> sieht, erlebt eine der stärksten Farbbegegnungen, die Uganda im Vogelbereich zu bieten hat.
              </p>
            </div>
          </section>

          {/* H2: Nashornvögel */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Nashornvögel in Uganda: Vier Arten in sehr unterschiedlichen Lebensräumen
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Nashornvögel (Bucerotidae) sind wegen ihres markanten Schnabels mit dem aufgesetzten Hornfortsatz (dem sogenannten Casque) leicht erkennbar. In Uganda kommen vier Arten vor, die sich in Körpergröße, Farbe und Lebensraum deutlich unterscheiden. Sie teilen sich oft dieselben Parkgebiete mit Rollern und Bienenfressern, sind aber teilweise auf spezifischere Habitate angewiesen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Rotschnabeltoko: Trockener Busch und offene Savanne</h3>
              <p>
                Der Rotschnabeltoko (Tockus erythrorhynchus) ist mit 42 bis 50 Zentimetern Länge die kleinste in Uganda vorkommende Hornbill-Art. Sein namensgebender roter Schnabel ist leicht gebogen und relativ schlank. Das Gefieder ist überwiegend schwarzweiß gefleckt, der Bauch weiss. Er ist eine typische Art der trockenen Buschlandschaft und kommt bevorzugt in den trockeneren Zonen des Murchison Falls Nationalparks vor, wo er auf dem Boden nach Insekten und kleinen Eidechsen sucht.
              </p>
              <p>
                Für Besucher ist der Rotschnabeltoko eine der zugänglichsten Nashornvogelarten — er hält sich oft in mittlerer Höhe auf und lässt sich gut beobachten. Sein Ruf ist ein rhythmisches, hohes Keckern, das in trockenen Buschgebieten weithin zu hören ist.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Gelbschnabeltoko: Waldgebundene Parallelart</h3>
              <p>
                Der Gelbschnabeltoko (Tockus flavirostris) hat mit 45 bis 55 Zentimetern eine ähnliche Körpergröße wie sein Verwandter, aber einen deutlich kräftigeren, gebogenen gelben Schnabel. Er ist eine Waldart und kommt in Uganda in Galeriewäldern und feuchteren Waldbereichen vor — also in anderen Habitaten als der Rotschnabeltoko. In Waldgebieten nahe dem <a href="/nationalparks/queen_elizabeth" className="text-jungle-700 hover:underline">Queen Elizabeth Nationalpark</a> ist er gelegentlich an Waldrändern zu sehen.
              </p>
              <p>
                [RECHERCHE NOETIG: Genauere Verbreitungsangaben Gelbschnabeltoko innerhalb der ugandischen Nationalparks]
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Trompeterhornrabe: Lautstark im Waldkronendach</h3>
              <p>
                Der Trompeterhornrabe (Bycanistes bucinator) ist mit 60 bis 70 Zentimetern eine deutlich größere Art. Das schwarz-weiß gemusterte Gefieder und der kräftige schwarz-weiße Schnabel mit kleinem Casque machen ihn im Wald gut erkennbar — vor allem sein Ruf, ein lautes, nasales Trompeten, das im Waldkronendach weithin zu hören ist. Er ist eine typische Forstbewohnerart und bevorzugt dichte Waldlebensräume.
              </p>
              <p>
                Im westlichen Uganda, in der Nähe der Regenwaldgebiete um Bwindi und Kibale, ist der Trompeterhornrabe ein gelegentlicher Begleiter auf Waldsafaris. Er lebt vorwiegend in den oberen Schichten des Waldkronendachs und sucht dort nach Früchten und Insekten.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kaffernhornrabe: Ugandas größter Nashornvogel</h3>
              <p>
                Der Kaffernhornrabe (Bucorvus abyssinicus) ist mit 105 bis 110 Zentimetern nicht nur die größte Nashornvogelart Ugandas, sondern eine der eindrucksvollsten Erscheinungen der afrikanischen Savanne überhaupt. Das Gefieder ist vollständig schwarz, das nackte Gesicht und die Kehlwamme zeigen ein auffälliges Rot-Blau-Muster. Er ist kein Klettervogel — er läuft auf dem Boden und durchsucht die Savanne in kleinen Gruppen nach großen Insekten, Fröschen, Schlangen und Kleinsäugern.
              </p>
              <p>
                Im Murchison Falls Nationalpark und im Queen Elizabeth Nationalpark ist er auf offenen Savannenflächen gelegentlich zu sehen. Gruppen von zwei bis sechs Tieren durchschreiten langsam das hohe Gras, und ihre Körpergröße macht sie auch auf größere Distanz unverwechselbar. Der Ruf — ein tiefes, weittragendes Bummern — ist eines der charakteristischen Geräusche der afrikanischen Savanne im frühen Morgengrauen.
              </p>
            </div>
          </section>

          {/* H2: Beobachtungstipps */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Beobachtungstipps: Wo und wann diese Vogelarten in Uganda zu sehen sind
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die bunten Vogelarten Ugandas folgen klaren Habitatpräferenzen, und wer diese kennt, verbessert seine Beobachtungschancen erheblich. Roller und Kaffernhornrabe bevorzugen offene Savanne — Pirschfahrten im Murchison Falls und Queen Elizabeth Nationalpark sind der effizienteste Zugang. Eisvögel sind an Gewässern zu finden: Bootsfahrten auf dem Kazinga-Kanal oder dem Viktoria-Nil sind die direkteste Möglichkeit, mehrere Arten auf einmal zu sehen.
              </p>
              <p>
                Bienenfresser sind flexibler. Der Rotkehlbienenfresser ist im Murchison Falls Nationalpark zahlreich, der Zwergspint in offenen Buschgebieten überall verbreitet, der Karminspint eher saisonal und lokaler konzentriert. Alle drei sind am aktivsten in den frühen Morgenstunden und am späten Nachmittag, wenn die Temperatur sinkt und die Insektenaktivität zunimmt.
              </p>
              <p>
                Nashornvögel sind tagaktiv und wenig scheu. Der Rotschnabeltoko und der Kaffernhornrabe sind auf Safariwegen gut zu beobachten, ohne dass man das Fahrzeug verlassen müsste. Waldarten wie Trompeterhornrabe und Gelbschnabeltoko erfordern etwas mehr Geduld — ein ruhiger Stopp am Waldrand mit Blick ins Kronendach ist oft die beste Methode.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Klunker-Kranich: Seltene Begegnung auf denselben Flächen</h3>
              <p>
                Auf denselben offenen Flächen, auf denen Roller und Bienenfresser zu sehen sind, taucht gelegentlich der Klunker-Kranich (Bugeranus carunculatus) auf. Mit 125 Zentimetern Körperhöhe ist er unübersehbar — ein hell- bis aschgrauer Vogel mit roter und gelber Kehle, weißen Kopfseiten und einem charakteristischen roten Kehlwammen-Gebilde. Er gilt in Uganda als selten und steht auf der Roten Liste gefährdeter Arten. Wer ihn auf einer Savannenpirschfahrt trifft, erlebt eine Begegnung, die selbst erfahrene Birder als besonders werten.
              </p>
              <p>
                Tiere beobachten in Uganda bedeutet selten, eine einzige Art zu suchen. Die Savanne ist kein Museum, das einzelne Exponate ausstellt — sie ist ein zusammenhängendes Ökosystem, das sich bei jedem Besuch neu zusammensetzt. Mehr zu Ugandas <a href="/tiere-uganda" className="text-jungle-700 hover:underline">Tierwelt im Überblick</a> oder zu Möglichkeiten, Tiere zu Fuss zu begegnen, auf einer <a href="/walking-safari-uganda" className="text-jungle-700 hover:underline">Walking Safari</a>.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Bunte Vögel Uganda: Eindrücke aus dem Feld" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen: Eisvögel und Roller in Uganda
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
              Mehr zu Ugandas Tierwelt und Nationalparks
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: '/boot-safari-uganda', label: 'Bootsafari Uganda: Nil und Kazinga-Kanal' },
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark' },
                { href: '/walking-safari-uganda', label: 'Walking Safari Uganda' },
                { href: '/tiere-uganda', label: 'Tierwelt Uganda: Übersicht' },
                { href: '/voegel-uganda', label: 'Vogelbeobachtung Uganda' },
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
