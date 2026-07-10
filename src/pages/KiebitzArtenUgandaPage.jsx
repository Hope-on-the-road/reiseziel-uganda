import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'kiebitz-arten-uganda'

export default function KiebitzArtenUgandaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Wie viele Kiebitz-Arten gibt es in Uganda?',
      a: 'In Uganda sind fünf Kiebitz-Arten dokumentiert: der Sporenkiebitz, der Schmiedekiebitz, der Langzehenkiebitz, der Braunbrustkiebitz und der Senegalkiebitz. Der Sporenkiebitz ist dabei mit Abstand die häufigste und verbreitetste Art, die in fast allen geeigneten Lebensräumen des Landes anzutreffen ist.'
    },
    {
      q: 'Wo in Uganda sind Kiebitze am besten zu beobachten?',
      a: 'Besonders gute Beobachtungsmöglichkeiten bieten der Kazinga-Kanal im Queen Elizabeth Nationalpark, die Ufer des Nshenyi-Kratersees sowie landwirtschaftliche Flächen am Rand von Schutzgebieten. Kiebitze bevorzugen offene Kurzgraslandschaften, Feuchtgebietsränder und Seeufer — Lebensräume, die in Uganda weit verbreitet sind und auf Bootsfahrten oder Pirschfahrten gut zugänglich sind.'
    },
    {
      q: 'Sind Kiebitze in Uganda tag- oder nachtaktiv?',
      a: 'Kiebitze sind in erster Linie dämmerungsaktiv — sie sind am intensivsten in den frühen Morgenstunden und in den Abendstunden aktiv. Nachts rufen viele Arten laut und anhaltend, was auffällig ist, wenn man in der Nähe ihrer Brutgebiete übernachtet. Diese Eigenschaft macht Kiebitze zu einem charakteristischen Klangelement der ostafrikanischen Nacht.'
    },
    {
      q: 'Was unterscheidet den Sporenkiebitz von anderen Kiebitz-Arten in Uganda?',
      a: 'Der Sporenkiebitz ist die häufigste und am weitesten verbreitete Kiebitz-Art Ugandas. Er ist an dem ausgeprägten schwarz-weißen Muster auf Kopf und Brust erkennbar sowie an dem namensgebenden Hornsporn am Flügelhandgelenk. Im Vergleich ist der Schmiedekiebitz größer und durch sein auffälliges Schwarz-Weiß-Grau-Muster unverwechselbar, während der Langzehenkiebitz als Spezialist auf schwimmender Wasservegetation lebt — eine Eigenheit, die ihn von allen anderen Arten trennt.'
    },
    {
      q: 'Wann ist die beste Reisezeit, um Kiebitze in Uganda zu beobachten?',
      a: 'Kiebitze sind in Uganda das ganze Jahr über präsent. Die Brutsaison fällt oft mit der Trockenzeit zusammen, wenn Wasserränder und Kurzgraslandschaften besonders günstige Bedingungen bieten. In dieser Zeit zeigen die Vögel besonders lebhaftes Verhalten: Balzflüge, Nestverteidigung und lautstarke Alarmrufe gegenüber Störern sind dann regelmäßig zu beobachten.'
    }
  ]

  return (
    <>
      <Head
        title="Kiebitz-Arten Uganda: 5 Arten und ihr Vorkommen im Überblick"
        description="Sporenkiebitz, Schmiedekiebitz, Langzehenkiebitz und mehr — alle 5 Kiebitz-Arten Ugandas mit Lebensräumen, Erkennungsmerkmalen und Beobachtungstipps aus eigener Erfahrung."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Offene Graslandschaft am Kazinga-Kanal, Queen Elizabeth Nationalpark Uganda — Foto: Mark Suer"
            className="w-full h-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
            Queen Elizabeth Nationalpark, Januar 2026 — Lebensraum mehrerer Kiebitz-Arten. Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Kiebitz-Arten in Uganda: 5 Arten der Familie Charadriidae und ihre Verbreitung
          </h1>

          {/* Eroeffnungs-Absatz */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Wer in Uganda an einem Seeufer oder entlang eines Feuchtgebietsrandes steht, hört sie meist noch bevor er sie sieht: laute, metallisch klingende Rufe, die das umliegende Gelände durchschneiden und Eindringlinge unmissverständlich zur Kenntnis nehmen. Kiebitze gehören zu jenen Vogelarten, die sich ohne große Rücksicht auf ihre Größe behaupten — sie verteidigen ihr Brutrevier gegen Störer jeder Dimension, einschließlich Menschen. Im Januar 2026 erlebten wir das am Rand eines Feuchtgebiets nahe dem Kazinga-Kanal: Ein Sporenkiebitz flog in raschen Überflügen knapp über unsere Köpfe, seine Rufe unüberhörbar, sein Angriffswille unzweifelhaft.
            </p>
            <p>
              Uganda beherbergt fünf dokumentierte Kiebitz-Arten der Familie Charadriidae. Sie sind über unterschiedliche Lebensräume verteilt — von offenen Kurzgraslandschaften über Feuchtgebietsränder bis hin zu schwimmender Wasservegetation. Der Sporenkiebitz ist die häufigste Art und in einem breiten Spektrum von Habitaten zu finden. Die anderen vier Arten sind stärker auf bestimmte Bedingungen spezialisiert und dementsprechend gezielter zu suchen. Für Vogelbeobachter, die Uganda bereisen, sind Kiebitze verlässliche Begleiter fast jeder Safari — auffällig, laut und meist gut zu sehen.
            </p>
            <p>
              Bei mehreren Besuchen in Uganda — insgesamt vierzehn dokumentierte Aufenthalte mit zusammen 65 Tagen im Land, zuletzt im Mai und Juni 2026 — hatten wir regelmäßig Begegnungen mit Kiebitzen. Dieser Artikel fasst zusammen, welche Arten es gibt, wie man sie unterscheidet, in welchen Lebensräumen sie vorkommen und wo in Uganda die besten Beobachtungsmöglichkeiten bestehen.
            </p>
          </div>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-jungle-900 mb-4">Kiebitz-Arten in Uganda: Auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-jungle-800">
              <div className="space-y-2">
                <div><span className="font-semibold">Familie:</span> Charadriidae (Regenpfeifer und Kiebitze)</div>
                <div><span className="font-semibold">Arten in Uganda:</span> 5 dokumentierte Kiebitz-Arten</div>
                <div><span className="font-semibold">Häufigste Art:</span> Sporenkiebitz (Vanellus spinosus)</div>
                <div><span className="font-semibold">Brutweise:</span> Bodenbrüter, aggressive Nestverteidigung</div>
              </div>
              <div className="space-y-2">
                <div><span className="font-semibold">Aktivität:</span> Hauptsächlich dämmerungs- und nachtaktiv</div>
                <div><span className="font-semibold">Lebensräume:</span> Kurzgrasland, Feuchtgebietsränder, Seeufer</div>
                <div><span className="font-semibold">Beste Standorte:</span> Kazinga-Kanal, Nshenyi-Kratersee</div>
                <div><span className="font-semibold">Ökologische Rolle:</span> Insektenkontrolle in Grasflächen</div>
              </div>
            </div>
          </div>

          {/* H2: Die fuenf Arten */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Die fünf Kiebitz-Arten Ugandas im Überblick
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Die Kiebitz-Arten Ugandas gehören zur Gattung Vanellus, die weltweit rund 24 Arten umfasst und in Afrika besonders artenreich vertreten ist. In Uganda wurden fünf Arten systematisch erfasst, die sich in Lebensraum, Verbreitung und Häufigkeit deutlich unterscheiden.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Sporenkiebitz — Vanellus spinosus</h3>
              <p>
                Der Sporenkiebitz ist die mit Abstand häufigste Kiebitz-Art Ugandas. Vogelmonitoringdaten aus verschiedenen Schutzgebieten des Landes belegen seine weite Verbreitung: Er tritt in nahezu allen geeigneten Habitaten auf und ist sowohl in Nationalparks als auch im Umland regelmäßig anzutreffen. Der Name bezieht sich auf den Hornsporn am Handgelenk des Flügels, den die Vögel bei Auseinandersetzungen und zur Verteidigung ihres Brutreviers einsetzen.
              </p>
              <p>
                Das Gefieder des Sporenkiebitz ist durch ein kontrastreiches Muster aus Schwarz, Weiß und Braun geprägt. Kopf und Kehle sind schwarz, die Brust trägt einen breiten schwarzen Querband, und die Flanken zeigen ein warmbraunes Tönung. Im Flug sind die schwarz-weißen Flügel gut erkennbar. Der Ruf — ein scharfes, metallisch klingendes Alarm-Kit-Kit — ist eines der charakteristischsten Vogelgeräusche ostafrikanischer Gewässerränder.
              </p>
              <p>
                Als Bodenbrüter legt der Sporenkiebitz seine Eier in flache Mulden auf kurzem Gras, oft in unmittelbarer Nähe von Wasser. Die Brutpaare verteidigen ihr Revier mit ausdauernder Aggression — auch gegen weit größere Tiere. Bei einem unserer Besuche am Kazinga-Kanal im January 2026 beobachteten wir, wie ein einzelner Sporenkiebitz wiederholt einen Marabu-Storch attackierte, der sich seinem Nest genähert hatte.
              </p>
              <p>
                Der Sporenkiebitz ist auch am Nshenyi-Kratersee dokumentiert, wo er zu den regelmäßig registrierten Arten zählt. Diese Beobachtungsdaten aus verschiedenen Gebieten Ugandas belegen eine stabile, weit verbreitete Population.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Schmiedekiebitz — Vanellus armatus</h3>
              <p>
                Der Schmiedekiebitz ist die größte Kiebitz-Art Ugandas und durch sein auffälliges Gefieder unverwechselbar: Kopf, Kehle und Brust sind schwarz, der Rücken glänzend grün-grau, der Bauch und die äußeren Flügelpartien rein weiß. Im Flug zeigt er ein klares Schwarz-Weiß-Grau-Muster, das ihn von anderen Arten sofort unterscheidbar macht.
              </p>
              <p>
                Der deutsche Name nimmt Bezug auf den metallischen Klang seines Rufs, der an das Hämmern eines Schmieds erinnert. Der Schmiedekiebitz bevorzugt feuchte Graslandschaften und Feuchtgebietsränder, meidet aber dichte Vegetation. Er ist in Uganda weniger weit verbreitet als der Sporenkiebitz, tritt aber in geeigneten Habitaten, besonders in der Nähe großer Seen und Flüsse, regelmäßig auf.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Langzehenkiebitz — Vanellus crassirostris</h3>
              <p>
                Der Langzehenkiebitz ist unter den fünf ugandischen Kiebitz-Arten der ausgesprochene Spezialist. Er hat extrem verlängerte Zehen entwickelt, die es ihm ermöglichen, auf schwimmenden Wasserpflanzen zu laufen — eine Eigenschaft, die sonst eher an Blatthühnchen erinnert. Diese Anpassung erschließt ihm einen Lebensraum, den keine andere Kiebitz-Art in Uganda nutzt: die Oberfläche von Schwimmblattpflanzen und Papyrusrändern.
              </p>
              <p>
                Das Gefieder ist weniger kontrastreich als bei anderen Arten: dunkelbraun an Rücken und Flügeln, weiß an Bauch und Brust, mit einem charakteristischen weißen Streifen über den Augen. Der Langzehenkiebitz ist in Uganda selten und auf intakte Feuchtgebiete mit dichter Schwimmvegetation angewiesen — Lebensräume, die durch Entwässerung und Landnutzungsveränderungen unter Druck stehen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Braunbrustkiebitz — Vanellus superciliosus</h3>
              <p>
                Der Braunbrustkiebitz ist die am wenigsten häufige der fünf ugandischen Kiebitz-Arten. Er bevorzugt offene Graslandschaften, besonders kurzgrasige Flächen in mittleren Höhenlagen. Das namensgebende Merkmal ist der warmbraune Brustfleck, der das weiße Bauchgefieder abgrenzt. Der Kopf zeigt einen deutlichen weißen Überaugenstreifen auf dunklem Grund.
              </p>
              <p>
                In Uganda ist der Braunbrustkiebitz hauptsächlich in Graslandschaften der westlichen und zentralen Landesteile dokumentiert. Seine Seltenheit macht Beobachtungen zu einem besonderen Erlebnis für Vogelbeobachter, die Uganda gezielt für ornithologische Reisen aufsuchen. [RECHERCHE NOETIG: genaue Verbreitungsschwerpunkte und aktuelle Bestandssituation in Uganda]
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Senegalkiebitz — Vanellus senegallus</h3>
              <p>
                Der Senegalkiebitz ist die auffälligste Art unter Ugandas Kiebitzen — nicht nur wegen seiner Größe, sondern auch wegen der gelben, fleischigen Hautlappen (Lappen) an den Seiten des Schnabelansatzes, die ihm ein unverkennbares Gesichtsmerkmal verleihen. Dazu kommen ein roter Schnabelring und, bei manchen Individuen, ein kleiner roter Fleck über dem Auge. Das Gefieder ist weniger kontrastreich als bei anderen Kiebitzen — braun-grau mit weißem Bauch und einem schwarzen Brustfleck.
              </p>
              <p>
                Der Senegalkiebitz ist in feuchten Graslandschaften und am Rand von Feuchtgebieten verbreitet. Sein Ruf ist lauter und rauer als der des Sporenkiebitz. In Uganda tritt er in verschiedenen Gebieten auf, ohne jedoch die Häufigkeit des Sporenkiebitz zu erreichen. Die auffälligen Gesichtslappen machen ihn zu einem der am leichtesten zu identifizierenden Kiebitze überhaupt.
              </p>
            </div>
          </section>

          {/* H2: Lebensraeume */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Lebensräume: Wo Kiebitze in Uganda vorkommen
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Kiebitze sind in Uganda an eine Vielzahl von Lebensräumen angepasst. Gemeinsam ist den meisten Arten die Bevorzugung offener, übersichtlicher Flächen mit kurzem Bewuchs — ob als Grasland, Seeufer oder Ackerland. Die Übersichtlichkeit des Geländes ist für Bodenbrüter entscheidend: Gefahr muss aus ausreichender Entfernung erkannt werden können, um Zeit zur Nestverteidigung oder zur Ablenkung von Fressfeinden zu gewinnen.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Feuchtgebietsränder und Seeufer</h3>
              <p>
                Der Rand von Feuchtgebieten gehört zu den produktivsten Kiebitz-Habitaten Ugandas. Hier treffen Wasserverfügbarkeit und offenes Kurzgrasland aufeinander — ideale Bedingungen für Sporenkiebitz und Schmiedekiebitz. Entlang des Kazinga-Kanals, der Lake George und Lake Edward im Queen Elizabeth Nationalpark verbindet, wurden bei unseren Besuchen regelmäßig Sporenkiebitze beobachtet. Die Bootsfahrt auf dem Kanal bietet die Möglichkeit, die Ufervegetation aus nächster Nähe zu überblicken — und dabei Kiebitze zusammen mit Nilkrokodilen, Flusspferden und einer artenreichen Wasservogelfauna zu erleben.
              </p>
              <p>
                Am Nshenyi-Kratersee in der Region Ankole im Westen Ugandas wurden ebenfalls mehrere Kiebitz-Arten dokumentiert, darunter der Sporenkiebitz unter den häufigsten registrierten Arten. Der See liegt eingebettet in eine hügelige Graslandschaft, und seine Ufer bieten ideale Bedingungen für Bodenbrüter. Wir haben diesen Standort bei mehreren Besuchen aufgesucht — das ruhige, übersichtliche Gelände macht Beobachtungen vergleichsweise einfach.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kurzgraslandschaften</h3>
              <p>
                Offene Graslandschaften, die durch Beweidung oder saisonale Trockenheit kurz gehalten werden, sind der bevorzugte Lebensraum mehrerer ugandischer Kiebitz-Arten. Besonders der Braunbrustkiebitz und der Senegalkiebitz nutzen diese Flächen intensiv. In der ugandischen Agrarlandschaft, wo Weidevieh weite Gebiete kurzrasig hält, finden Kiebitze deshalb auch außerhalb von Schutzgebieten geeignete Brutplätze.
              </p>
              <p>
                Landwirtschaftliche Flächen am Rand von Nationalparks sind daher keine wertlosen Pufferzonen für Kiebitze — sie sind aktive Lebensräume, in denen die Vögel brüten, Nahrung suchen und ihren Beitrag zur Insektenkontrolle leisten. Diese ökologische Dienstleistung ist in landwirtschaftlichen Regionen unmittelbar relevant: Kiebitze fressen große Mengen an Insekten, Würmern und Kleintieren, die andernfalls als Schädlinge in Kulturflächen auftreten könnten.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Schwimmvegetation: Sonderfall Langzehenkiebitz</h3>
              <p>
                Der Langzehenkiebitz nimmt unter den ugandischen Kiebitzen eine Sonderstellung ein, weil er ausschließlich auf schwimmenden Wasserpflanzen und an Papyrusrändern lebt. Dieser Lebensraum ist in Uganda durch Papyrussümpfe entlang von Seen und Flüssen vertreten, steht aber durch Entwässerung und Landnutzungsveränderungen unter Druck. Die Population des Langzehenkiebitz in Uganda ist deshalb sensibler gegenüber Habitatveränderungen als die der häufigeren Arten.
              </p>

              <figure className="my-8">
                <img
                  src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
                  alt="Feuchtgebiet am Kazinga-Kanal, Queen Elizabeth Nationalpark Uganda — Foto: Mark Suer"
                  className="w-full rounded-xl object-cover max-h-80"
                />
                <figcaption className="text-xs text-gray-500 mt-2">
                  Kazinga-Kanal, Januar 2026 — Feuchtgebietsränder gehören zu den artenreichsten Vogelstandorten Ugandas. Foto: Mark Suer
                </figcaption>
              </figure>
            </div>
          </section>

          {/* H2: Verhalten */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Verhalten: Bodenbrüter mit ausgeprägtem Revierinstinkt
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Alle fünf in Uganda vorkommenden Kiebitz-Arten sind Bodenbrüter. Das Nest ist eine einfache Mulde im Boden, oft auf kurzem Gras oder sandigem Untergrund, gelegentlich kaum von der Umgebung zu unterscheiden. Die Eier sind meist braun gefleckt und gut getarnt — ihre Schutzfärbung ist der erste Verteidigungsmechanismus gegen Fressfeinde.
              </p>
              <p>
                Der zweite Mechanismus ist das Verhalten der Elterntiere: Kiebitze gehören zu den aggressivsten Nestverteidigern der Vogelwelt. Sie greifen Störer aktiv an — mit lauten Rufen, täuschenden Flugmanövern und, bei Arten wie dem Sporenkiebitz, mit dem Einsatz des Flügelhornsporns. Bei einem Besuch am Rand eines Sumpfgebiets in der Nähe von Kampala im Oktober 2024 beobachteten wir, wie ein Sporenkiebitz-Paar abwechselnd Scheinangriffe auf eine Gruppe Störche flog, während die Küken zwischen den Gräsern verborgen blieben.
              </p>
              <p>
                Kiebitze sind darüber hinaus für ihre Rufaktivität bei Nacht bekannt. Wer in der Nähe von Brutgebieten übernachtet — sei es in einer Lodge am Seeufer oder in einem Zelt in der Savanne — wird in der Regel von Kiebitz-Rufen geweckt. Diese nächtliche Vokalität ist keine Besonderheit einzelner Arten, sondern ein gemeinsames Merkmal der Gattung Vanellus und Teil des komplexen Kommunikationsverhaltens dieser Vögel.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Dämmerungsaktivität und Jagdverhalten</h3>
              <p>
                Die intensivste Aktivitätsphase der meisten Kiebitz-Arten liegt in den frühen Morgenstunden und in den Abendstunden. In dieser Zeit suchen sie aktiv Nahrung — überwiegend Insekten, Würmer, Kleinkrebse und andere Wirbellose, die sie auf kurzem Gras oder an Wasserrändern aufnehmen. Die Jagdtechnik ist einfach aber effektiv: rasches Laufen, kurzes Innehalten, aufmerksames Beobachten des Bodens, dann gezieltes Aufpicken.
              </p>
              <p>
                In der Mittagshitze ruhen Kiebitze meist im Schatten oder an schattigen Uferzonen und sind dann deutlich weniger aktiv. Wer Kiebitze beobachten möchte, sollte deshalb die frühen Morgenstunden oder die letzten Sonnenstunden des Tages für gezielte Sichtungen nutzen — das gilt für Uganda genauso wie für andere tropische Vogelbeobachtungsstandorte.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Ökologische Rolle in Ugandas Grasland-Ökosystemen</h3>
              <p>
                Kiebitze spielen als Insektenfresser eine messbare Rolle in den Grasland-Ökosystemen Ugandas. In Gebieten mit hoher Kiebitz-Dichte wird eine erhebliche Menge an Insekten und wirbellosen Kleintieren konsumiert — eine Dienstleistung, die in Agrarlandschaften den Schädlingsdruck reduziert. Gleichzeitig sind Kiebitze und ihre Eier selbst Teil der Nahrungskette: Greifvögel, Schakale, Warane und andere Prädatoren nutzen Nester und Küken als Nahrungsquelle.
              </p>
              <p>
                In gut funktionierenden Feuchtgebiets- und Graslandökosystemen wie denen im Queen Elizabeth Nationalpark sind Kiebitze ein verlässlicher Indikator für die ökologische Qualität des Habitats: Ihre Präsenz zeigt an, dass kurzgrasige, offene Flächen mit ausreichenden Insektenbeständen vorhanden sind. Ihr Verschwinden aus einem Gebiet kann ein Frühwarnzeichen für Habitatverschlechterung sein.
              </p>
            </div>
          </section>

          {/* H2: Beobachtungsstandorte */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Beobachtungsstandorte: Wo Kiebitze in Uganda gezielt zu finden sind
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Uganda bietet zahlreiche Standorte, an denen Kiebitze regelmäßig und gut zu beobachten sind. Die folgenden Gebiete gehören zu den verlässlichsten Standorten, die wir aus eigener Erfahrung kennen oder die durch Vogelmonitoring-Daten gut dokumentiert sind.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Kazinga-Kanal, Queen Elizabeth Nationalpark</h3>
              <p>
                Der Kazinga-Kanal ist einer der produktivsten Vogelbeobachtungsstandorte Ugandas — und für Kiebitze besonders geeignet. Die flachen Ufer des Kanals bieten ideale Bedingungen für Sporenkiebitze und Schmiedekiebitze. Eine Bootsfahrt auf dem Kanal ermöglicht es, die Ufervegetation aus kurzer Distanz zu überblicken, ohne die Vögel durch Annäherung zu stören. Wir haben den Kazinga-Kanal im Januar 2026 und zuvor im Oktober 2024 auf Bootsfahrten erkundet — der Sporenkiebitz war bei beiden Gelegenheiten präsent und gut zu beobachten.
              </p>
              <p>
                Die Kombination aus Bootsfahrt auf dem Kazinga-Kanal, Pirschfahrt durch die Savanne und Aufenthalt in einer der Unterkünfte am Seeufer macht den Queen Elizabeth Nationalpark zu einem der vollständigsten Vogel- und Wildtier-Erlebnisse in Ostafrika.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Nshenyi-Kratersee, Ankole-Region</h3>
              <p>
                Der Nshenyi-Kratersee liegt in einer malerischen Kraterlandschaft im Westen Ugandas und ist ein weniger bekannter, aber ornithologisch wertvoller Standort. Die offenen Grasflächen rund um den See und die ruhigen Uferzonen bieten Bedingungen, unter denen Kiebitze gut zu beobachten sind. Vogelmonitoringdaten zeigen, dass der Sporenkiebitz hier zu den am häufigsten registrierten Arten gehört.
              </p>
              <p>
                Der Kratersee ist auch insofern interessant, als er in eine traditional genutzte Landschaft eingebettet ist — Ankole-Rinder werden auf den umliegenden Flächen gehalten, und die durch Beweidung kurzgehaltenen Graslandschaften bieten optimale Kiebitz-Habitate. Diese Verbindung zwischen traditioneller Landnutzung und Vogelvorkommen ist ein wiederkehrendes Muster in Uganda, das zeigt, wie Vogelvielfalt auch außerhalb von Schutzgebieten erhalten bleiben kann.
              </p>

              <h3 className="font-display text-xl font-semibold text-gray-800 mt-6 mb-3">Weitere Standorte</h3>
              <p>
                Neben diesen beiden Hauptstandorten sind Kiebitze in Uganda an vielen weiteren Stellen anzutreffen: an den Ufern des Viktoriasees, entlang des Albertine Grabens, in feuchten Graslandschaften der Bushenyi-Region und an Feuchtgebieten im Umland von Kampala. Wer Uganda mit offenen Augen bereist, wird Kiebitze an kaum einem Feuchtgebietsrand oder einer kurzgrasigen Freifläche vermissen — sie gehören zum Klangteppich und Erscheinungsbild des Landes wie kaum eine andere Vogelgruppe.
              </p>
            </div>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke: Kiebitz-Habitate in Uganda" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu Kiebitz-Arten in Uganda
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
                { href: '/sporenkiebitz-uganda', label: 'Sporenkiebitz in Uganda: Artenprofil' },
                { href: '/boot-safari-uganda', label: 'Boot-Safari Uganda: Kazinga-Kanal und Nil' },
                { href: '/nationalparks/queen_elizabeth', label: 'Queen Elizabeth Nationalpark' },
                { href: '/tiere-uganda', label: 'Tierwelt Uganda: Alle Arten im Überblick' },
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
