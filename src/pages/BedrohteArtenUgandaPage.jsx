import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'bedrohte-tierarten-uganda'

const faqItems = [
  {
    frage: 'Wie viele Berggorillas leben noch in Uganda?',
    antwort:
      'Zwischen 2018 und 2020 wurden in Uganda etwa 459 Berggorillas gezählt. Das entspricht mehr als der Hälfte des gesamten weltweiten Bestands dieser Unterart. Die Tiere verteilen sich auf den Bwindi Impenetrable National Park und den Mgahinga Gorilla National Park im Südwesten des Landes.',
  },
  {
    frage: 'Warum sind Pangoline so stark vom Aussterben bedroht?',
    antwort:
      'Pangoline gelten als die am stärksten gehandelten Wildtiere der Welt. Ihre Schuppen werden auf asiatischen Schwarzmärkten zu hohen Preisen gehandelt, da ihnen fälschlicherweise Heilwirkungen zugeschrieben werden. Die Tiere sind nachtaktiv und scheu — das macht ihren Schutz besonders schwierig, weil sie kaum beobachtet und noch schwerer gezählt werden können.',
  },
  {
    frage: 'Wie kann ich als Reisender zum Schutz bedrohter Tierarten in Uganda beitragen?',
    antwort:
      'Das wirkungsvollste Instrument ist der Kauf eines offiziellen Gorilla-Trekking-Permits. Ein erheblicher Teil der Einnahmen fließt direkt in den Schutz der Parks und in Programme für die lokale Bevölkerung. Darüber hinaus sollte man ausschließlich lizenzierte Anbieter buchen, keine Wildtierprodukte kaufen und lokale Lodges bevorzugen, die nachweislich in Naturschutzprojekte investieren.',
  },
  {
    frage: 'Wie groß ist die Elefantenpopulation in Uganda?',
    antwort:
      'Uganda beherbergt rund 7.975 Afrikanische Elefanten. Die größten Bestände leben im Murchison Falls National Park und im Queen Elizabeth National Park. Beide Populationen haben sich nach massiver Wilderei in den 1970er und 1980er Jahren schrittweise erholt — ein Erfolg, der intensiver Schutzarbeit zu verdanken ist.',
  },
  {
    frage: 'Welche Nationalparks sind für den Schutz bedrohter Tierarten in Uganda am wichtigsten?',
    antwort:
      'Für Berggorillas sind Bwindi und Mgahinga unverzichtbar. Für Elefanten spielen Murchison Falls und Queen Elizabeth die zentrale Rolle. Der Kidepo Valley National Park im Norden schützt seltene Savannentiere, die anderswo im Land kaum vorkommen. Der Kibale National Park ist ein wichtiges Refugium für Schimpansen und andere Primaten.',
  },
]

export default function BedrohteArtenUgandaPage() {
  const [offenesFaq, setOffenesFaq] = useState(null)

  return (
    <>
      <Head
        title="Bedrohte Tierarten Uganda: Gorillas, Elefanten, Pangoline"
        description="Bedrohte Tierarten Uganda im Überblick: Berggorillas, Elefanten und Pangoline – Bestand, Gefährdung und was Reisende tun können."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero */}
        <figure className="w-full max-h-[520px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
            alt="Berggorilla frisst Blätter im Baumkronendach des Bwindi Impenetrable National Park"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <figcaption className="text-xs text-gray-500 text-right px-4 py-1">
            Foto: Mark Suer — Bwindi, Juni 2026
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Bedrohte Tierarten in Uganda: Berggorillas, Elefanten und Pangoline
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Im Juni 2026 besuchte ich gemeinsam mit unserem Team eine kleine Siedlung am Rand von Buhoma,
            dem Eingangsort zum Bwindi Impenetrable National Park. Vor einem einfachen Lehmgebäude mit
            Wellblechdach standen drei Kinder aus der Nachbarschaft des örtlichen Waisenhauses. Sie wirkten
            scheu, ihre Kleidung abgetragen, ihr Blick vorsichtig — der Ausdruck von Menschen, die Zuwendung
            nicht als selbstverständlich erfahren haben. Wir haben sie direkt eingeladen, mit uns zu essen.
            In solchen Momenten wird greifbar, wie eng die Realität der Menschen und die Zukunft der Tiere
            in dieser Region miteinander verknüpft sind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Buhoma liegt buchstäblich an der Grenze zwischen zwei Welten: dem Alltag einer armen
            Landbevölkerung und einem der letzten intakten Bergregenwälder der Erde. Genau hier beginnt
            die Geschichte der bedrohten Tierarten Ugandas — nicht als abstraktes Naturschutzproblem,
            sondern als unmittelbare Frage danach, wie Menschen und Wildtiere auf engstem Raum eine
            gemeinsame Zukunft gestalten können.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Uganda gehört zu den artenreichsten Ländern Afrikas. Es beheimatet mehr als die Hälfte aller
            noch lebenden Berggorillas, eine der größten Elefantenpopulationen Ostafrikas und eine Reihe
            von Tierarten, über deren Bestand kaum verlässliche Zahlen existieren — darunter die Pangoline,
            die als meistgehandelte Wildtiere der Welt gelten. Dieser Artikel erklärt, warum diese Tiere
            bedroht sind, was ihren Schutz so schwierig macht und was ein Besuch in Uganda konkret
            bewirken kann.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">
              Auf einen Blick: Bedrohte Tierarten in Uganda
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Berggorillas in Uganda</span>
                <span className="text-gray-800">ca. 459 Individuen (2018–2020) — über 50 % des Weltbestands</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Elefanten in Uganda</span>
                <span className="text-gray-800">ca. 7.975 Afrikanische Elefanten in freier Wildbahn</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Schutzstatus Berggorilla</span>
                <span className="text-gray-800">Kritisch gefährdet (IUCN Red List: Critically Endangered)</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Pangoline</span>
                <span className="text-gray-800">Meistgehandelte Wildtiere der Welt, alle 8 Arten bedroht</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Wichtigste Schutzgebiete</span>
                <span className="text-gray-800">Bwindi, Mgahinga, Queen Elizabeth, Murchison Falls, Kidepo</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">Hauptbedrohungen</span>
                <span className="text-gray-800">Wilderei, Lebensraumverlust, illegaler Wildtierhandel</span>
              </div>
            </div>
          </div>

          {/* H2: Berggorillas */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Berggorillas: Mehr als die Hälfte des Weltbestands lebt in Uganda
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wer verstehen will, warum Uganda für den globalen Naturschutz eine außergewöhnliche
              Rolle spielt, sollte mit den Berggorillas beginnen. Im Zeitraum 2018 bis 2020 wurden
              in Uganda rund 459 Berggorillas gezählt — und damit mehr als die Hälfte aller noch
              existierenden Tiere dieser Unterart. Sie verteilen sich auf zwei Schutzgebiete: den
              Bwindi Impenetrable National Park im Südwesten des Landes und den kleineren Mgahinga
              Gorilla National Park direkt an der Grenze zu Ruanda und der Demokratischen Republik Kongo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bei meinem Trekking im Januar 2026 traf ich nach etwa einer Stunde Wanderung durch
              dichten Bergwald auf die erste Gorillagruppe. Der erste Blick fiel auf einen Silberrücken,
              der in den Ästen eines großen Baums saß und ruhig Blätter fraß — eine Szene von
              vollkommener Stille und gleichzeitig unglaublicher Unmittelbarkeit. Berggorillas
              sind Pflanzenfresser, die täglich bis zu 30 Kilogramm Vegetation aufnehmen. Ihre
              Streifgebiete folgen dem Angebot des Waldes: Blätter, Rinde, Früchte, Wurzeln.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Berggorilla (<em>Gorilla beringei beringei</em>) ist die am stärksten bedrohte
              Unterart der Gorillas. Männliche Tiere können zwischen 140 und 275 Kilogramm wiegen,
              Weibchen zwischen 60 und 100 Kilogramm. Nach einer Tragzeit von rund 250 bis 290 Tagen
              wird in der Regel ein einzelnes Junges geboren. Die langsame Reproduktionsrate macht
              die Art besonders anfällig: Ein Weibchen bekommt im Laufe ihres Lebens nur wenige
              Nachkommen. Jeder Verlust durch Wilderei, Krankheit oder Habitatverlust wiegt
              deshalb unverhältnismäßig schwer.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die größte Bedrohung für die Gorillas im Bwindi ist nicht die direkte Jagd — die
              ist in Uganda strafrechtlich stark sanktioniert — sondern die schleichende Verkleinerung
              des Lebensraums. Der Wald grenzt unmittelbar an landwirtschaftliche Flächen. Bevölkerungswachstum
              und der Druck, mehr Anbaufläche zu gewinnen, erzeugen einen dauerhaften Konflikt.
              Hinzu kommen Drahtschlingen, die Wilderer für Buschfleisch-Jagd auf Duiker und andere
              kleine Tiere auslegen — und in denen sich gelegentlich auch Gorillas verletzen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Habituierung — also die schrittweise Gewöhnung einzelner Gorillagruppen an die
              Anwesenheit von Menschen — ist ein aufwändiger Prozess, der mehrere Jahre dauert.
              Erst wenn eine Gruppe zuverlässig auf menschliche Anwesenheit ohne Flucht oder
              Aggression reagiert, wird sie für den Tourismus geöffnet. Weltweit ist Uganda,
              neben Ruanda und der Demokratischen Republik Kongo, eines der wenigen Länder, in
              denen diese Art von Begegnung legal und unter streng kontrollierten Bedingungen
              möglich ist.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Gorilla-Trekking-Permit ist dabei mehr als ein Eintrittticket. Die Einnahmen
              fließen direkt in den Betrieb der Nationalparks, in die Ausrüstung der Ranger und
              in Gemeinschaftsprogramme für die Dörfer rund um Bwindi. Der Zusammenhang ist
              unmittelbar: Je mehr Menschen die Gorillas legal besuchen, desto mehr Mittel stehen
              für ihren Schutz zur Verfügung. Das erklärt, warum Naturschützer den Tourismus nicht
              als Bedrohung, sondern als Schutzinstrument betrachten — vorausgesetzt, er wird
              verantwortungsvoll gestaltet.
            </p>

            <div className="my-8 bg-jungle-50 border-l-4 border-jungle-400 pl-5 py-4 rounded-r-lg">
              <p className="text-jungle-900 italic text-sm">
                [ZITAT: Guide über ersten Eindruck beim Gorilla-Trekking in Bwindi]
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Für alle, die mehr über das Leben und Verhalten der Berggorillas erfahren möchten,
              lohnt sich ein Blick auf unser ausführliches{' '}
              <a href="/tiere/berggorilla" className="text-jungle-700 underline hover:text-jungle-900">
                Berggorilla-Portrait
              </a>
              . Informationen zur praktischen Planung eines Trekking-Erlebnisses finden sich
              auf der{' '}
              <a href="/gorilla-trekking" className="text-jungle-700 underline hover:text-jungle-900">
                Übersichtsseite zum Gorilla-Trekking
              </a>{' '}
              sowie im{' '}
              <a href="/nationalparks/bwindi" className="text-jungle-700 underline hover:text-jungle-900">
                Porträt des Bwindi Impenetrable National Park
              </a>.
            </p>
          </section>

          {/* H2: Elefanten */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Elefanten: Erholung nach jahrzehntelanger Verfolgung
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda beherbergt rund 7.975 Afrikanische Elefanten (<em>Loxodonta africana</em>).
              Diese Zahl klingt beeindruckend — doch sie wird erst verständlich, wenn man weiß,
              wie tief die Population in den 1970er und 1980er Jahren gesunken war. Während der
              politischen Wirren unter Idi Amin und Milton Obote erlebte Uganda eine unkontrollierte
              Wildereiwelle, die die Elefantenbestände in manchen Parks auf nahezu null reduzierte.
              Im Queen Elizabeth National Park überlebten zeitweise nur wenige Dutzend Tiere.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die heutige Population ist das Ergebnis jahrzehntelanger Schutzarbeit, politischer
              Stabilität und eines konsequenten Anti-Wilderei-Programms. Die größten Bestände
              leben heute im Murchison Falls National Park im Norden und im Queen Elizabeth
              National Park im Westen. Beide Parks bieten regelmäßige Sichtungen — auch für
              Besucher mit begrenztem Zeitbudget.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dennoch bleibt die Situation fragil. Der Afrikanische Elefant gilt als
              gefährdet. Die Hauptbedrohungen in Uganda sind heute weniger die traditionelle
              Elfenbeinwilderei als vielmehr der Verlust von Wanderkorridoren und
              Mensch-Tier-Konflikte. Elefanten folgen saisonalen Wanderwegen, die sich über
              Parkgrenzen hinweg erstrecken. Wenn landwirtschaftliche Flächen diese Korridore
              unterbrechen, kommt es zu Konflikten: Elefanten fressen Ernte, Dorfbewohner
              fühlen sich bedroht und reagieren mitunter mit Vergeltung.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Schutz der Elefanten ist deshalb nicht nur eine Frage von Parkmanagement,
              sondern auch von ländlicher Entwicklung. Programme, die Dorfgemeinschaften
              an den Erträgen des Tourismus beteiligen — sei es durch Arbeitsplätze als
              Ranger, Guides oder Lodge-Personal — schaffen wirtschaftliche Anreize für
              Koexistenz statt Konflikt. Wer tiefer in dieses Thema einsteigen möchte,
              findet auf unserer Seite zu{' '}
              <a href="/tiere/elefant" className="text-jungle-700 underline hover:text-jungle-900">
                Elefanten in Uganda
              </a>{' '}
              weitere Informationen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Ölexploration im Albertgraben stellt eine neue Dimension der Bedrohung dar.
              Teile des Murchison Falls National Park und umliegende Schutzgebiete könnten
              durch Bohrungen und die damit verbundene Infrastruktur unter Druck geraten.
              Naturschützer beobachten diese Entwicklung mit erheblicher Sorge — insbesondere,
              weil Elefanten weiträumige Habitate benötigen und selbst moderate Störungen
              ihre Wanderwege dauerhaft verändern können.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Eine Bootsfahrt auf dem Murchison Falls National Park — auf dem Victoria-Nil
              zwischen Paraa und den Wasserfällen — bietet regelmäßige Elefantensichtungen
              am Flussufer. Die Tiere kommen zum Trinken und Baden an den Fluss heran,
              oft in Familiengruppen mit Jungtieren. Das ist eine der eindrücklichsten
              Wildtierbegegnungen, die Uganda zu bieten hat.
            </p>
          </section>

          {/* Inline-Bild: Kinder in Buhoma */}
          <figure className="my-10 rounded-xl overflow-hidden">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
              alt="Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, Uganda – Juni 2026"
              className="w-full object-cover max-h-80"
              loading="lazy"
            />
            <figcaption className="text-xs text-gray-500 px-2 pt-2">
              Buhoma, Juni 2026 — die Nähe zwischen Naturschutzgebiet und menschlicher Realität ist in dieser
              Region besonders spürbar. Foto: Mark Suer.
            </figcaption>
          </figure>

          {/* H2: Pangoline */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Pangoline: Das meistgeschmuggelte Tier der Welt
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pangoline sind keine Tiere, auf die man in Uganda leicht trifft. Sie sind nachtaktiv,
              einzelgängerisch und äußerst scheu. Die meisten Uganda-Besucher verlassen das Land,
              ohne je eines dieser schuppentragenden Säugetiere gesehen zu haben. Doch genau das
              macht ihren Schutz so schwierig — und ihre Bedrohungslage so ernst.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Weltweit gelten alle acht Pangolinarten als bedroht oder stark bedroht. In Afrika
              kommen vier Arten vor, darunter der Weißbauchpangolin (<em>Phataginus tricuspis</em>)
              und der Riesenpangolin (<em>Smutsia gigantea</em>), die beide in Uganda nachgewiesen
              wurden. Sie sind die am häufigsten beschlagnahmte Gruppe im globalen Wildtierhandel —
              ein trauriger Spitzenplatz, der mit der enormen Nachfrage auf asiatischen Schwarzmärkten
              zusammenhängt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pangoline besitzen keine Zähne. Sie ernähren sich ausschließlich von Ameisen und
              Termiten, die sie mit ihrer langen, klebrigen Zunge aus Erdhöhlen und Baumstämmen
              ziehen. Ihre einzige Schutzstrategie gegen natürliche Feinde ist das Einrollen zu
              einer Kugel — wobei die hornartigen Schuppen aus Keratin eine schützende Außenhülle
              bilden. Genau diese Schuppen werden illegal gehandelt: Ihnen werden in der traditionellen
              Medizin einiger asiatischer Länder Heilwirkungen zugeschrieben, die wissenschaftlich
              nicht belegt sind.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Einrollen ist gegen menschliche Jäger keine wirksame Verteidigung — es macht
              das Tier im Gegenteil leicht aufzunehmen. Wilderer können Pangoline daher mit
              bloßen Händen fangen. Hinzu kommt, dass Pangoline in Gefangenschaft kaum überleben:
              Ihr hochspezialisiertes Nahrungsverhalten und ihr Stressniveau machen eine
              artgerechte Haltung fast unmöglich. Beschlagnahmte Tiere können daher selten
              erfolgreich rehabllitiert werden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uganda liegt auf einer der zentralen Schmuggelrouten für Wildtierprodukte zwischen
              Zentralafrika und Asien. Das macht das Land zu einem wichtigen Akteur in der
              Bekämpfung des Pangolinhandels — und erklärt, warum Anti-Wilderei-Einheiten
              und Zollbehörden in den letzten Jahren verstärkt Schulungen zu Pangolinen erhalten
              haben. Die Dunkelziffer nicht entdeckter Fälle bleibt jedoch hoch.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Forschung und Monitoring der Pangolinpopulationen in Uganda stehen noch am Anfang.
              Kamerafallen in Waldgebieten liefern gelegentlich Belege für ihr Vorkommen, doch
              systematische Bestandserhebungen fehlen weitgehend. Das macht es schwer, den
              Effekt von Schutzmaßnahmen zu messen — und ist einer der Gründe, warum die
              Situation von Naturschützern mit besonderer Sorge betrachtet wird.
            </p>
          </section>

          {/* H2: Wilderei und Schutz */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Wilderei, Handel und die Arbeit der Ranger
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hinter jedem illegalen Wildtierprodukt steht eine Kette von Akteuren: lokale
              Wilderer, regionale Händler, internationale Schmugglernetzwerke und Endabnehmer
              auf fernen Märkten. Uganda ist in dieser Kette sowohl Ursprungsland als auch
              Transitland. Elfenbein aus der Demokratischen Republik Kongo und Pangolin-Schuppen
              aus Zentralafrika finden ihren Weg durch ugandische Grenzen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Ranger der Nationalparkverwaltung bilden die erste Verteidigungslinie.
              Ihr Alltag besteht aus nächtlichen Patrouillen, dem Aufspüren und Entschärfen
              von Drahtschlingen sowie der Zusammenarbeit mit Dorfgemeinschaften, die als
              Informationsquelle dienen können. Die Arbeit ist physisch anspruchsvoll,
              zeitweise gefährlich und finanziell oft schlecht entlohnt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Technische Hilfsmittel wie Drohnen, GPS-Tracker für Elefanten und
              Kamerafallen haben die Effizienz von Anti-Wilderei-Einsätzen in den
              letzten Jahren verbessert. Dennoch bleiben personelle und finanzielle
              Ressourcen die entscheidende Einschränkung. Weiterführende Informationen
              zur Arbeit der Ranger und zum Anti-Wilderei-Einsatz in Uganda finden
              sich auf unserer Seite{' '}
              <a href="/ranger-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                Ranger in Uganda
              </a>{' '}
              sowie in unserem Artikel zu{' '}
              <a href="/uwa-anti-poaching" className="text-jungle-700 underline hover:text-jungle-900">
                Anti-Wilderei-Programmen der Uganda Wildlife Authority
              </a>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Neben der direkten Strafverfolgung setzt Uganda auf präventive Ansätze:
              Schulbildung in Grenzgemeinden, alternative Einkommensquellen für gefährdete
              Bevölkerungsgruppen und die Integration lokaler Gemeinschaften in
              Naturschutzprogramme. Der Grundgedanke ist überzeugend — Menschen, die
              von intakten Ökosystemen und Tourismus profitieren, haben einen konkreten
              wirtschaftlichen Anreiz, Wildtiere zu schützen statt zu jagen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Erfolg dieser Ansätze ist messbar: Die Gorilla-Population in Bwindi
              ist in den letzten Jahrzehnten trotz wachsendem Druck gewachsen. Die
              Elefantenbestände haben sich in mehreren Parks erholt. Das sind keine
              Zufälle, sondern das Ergebnis konsequenter, oft mühsamer Schutzarbeit.
              Mehr zu den strukturellen Ursachen des illegalen Wildtierhandels und
              seiner Verbindung zur organisierten Kriminalität findet sich in unserem
              Artikel zu{' '}
              <a href="/wildlife-crime-terrorismus-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                Wildlife Crime und Terrorismus in Uganda
              </a>.
            </p>
          </section>

          {/* H2: Tourismus als Schutzinstrument */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Warum Reisen zum Schutz bedrohter Tierarten beitragen kann
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tourismus wird in Naturschutzdebatten oft als Bedrohung dargestellt. In Uganda
              ist das Verhältnis komplexer. Das Gorilla-Trekking-Permit beispielsweise
              gehört zu den teuersten Wildtier-Erlebnissen Afrikas — und dieser Preis ist
              absichtlich. Er hält die Besucherzahlen niedrig, finanziert den Parkbetrieb
              und schafft wirtschaftliche Argumente für den Erhalt der Wälder. Ein zerstörtes
              Ökosystem lässt sich nicht mehr vermarkten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beim Besuch im Juni 2026 wurde mir einmal mehr klar, wie direkt diese
              Verbindung vor Ort spürbar ist. In Buhoma gibt es Lodges, Restaurants, Guides
              und Handwerker, deren Lebensunterhalt direkt oder indirekt am Gorilla-Tourismus
              hängt. Das schafft eine lokale Schutzlobby — Menschen, die ein persönliches
              Interesse daran haben, dass die Tiere überleben.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Entscheidung, welche Lodge man bucht und welchen Guide man engagiert,
              hat dabei durchaus Gewicht. Betriebe, die nachweislich in Naturschutzprojekte
              investieren, lokale Mitarbeiter ausbilden und auf nachhaltige Praktiken
              setzen, multiplizieren den positiven Effekt eines Besuchs. Unser Artikel zu{' '}
              <a href="/nachhaltiger-tourismus-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                nachhaltigem Tourismus in Uganda
              </a>{' '}
              gibt konkrete Hinweise, worauf man bei der Auswahl achten sollte.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Neben dem Gorilla-Trekking bietet Uganda weitere Möglichkeiten, Wildtiere
              in ihrem natürlichen Lebensraum zu erleben: Das{' '}
              <a href="/schimpansen-trekking" className="text-jungle-700 underline hover:text-jungle-900">
                Schimpansen-Trekking im Kibale Forest
              </a>{' '}
              ist ein weiteres Highlight, das gleichzeitig den Schutz eines der
              artenreichsten Primaten-Habitate Afrikas unterstützt. Für die Planung
              eines Besuchs lohnt sich auch ein Blick auf unsere Empfehlungen zur{' '}
              <a href="/beste-reisezeit-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                besten Reisezeit in Uganda
              </a>{' '}
              — die Trockenzeiten bieten in der Regel die besten Bedingungen für
              Trekking-Touren.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ein Besuch in Uganda ist kein Allheilmittel für die strukturellen Probleme
              des Wildtierschutzes. Armut, politische Instabilität in Nachbarländern und
              internationale Schmugglernetzwerke lassen sich nicht durch Tourismus allein
              lösen. Doch er ist ein Teil der Lösung — und zwar ein Teil, den jeder
              Reisende unmittelbar beeinflussen kann.
            </p>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <section className="mt-14 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu bedrohten Tierarten in Uganda
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
              Weiterführende Artikel zu Ugandas Wildtieren und Nationalparks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/gorilla-trekking"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Gorilla-Trekking in Uganda — Planung und Tipps
              </a>
              <a
                href="/nationalparks/bwindi"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Bwindi Impenetrable National Park
              </a>
              <a
                href="/tiere/berggorilla"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Berggorilla: Portrait und Lebensweise
              </a>
              <a
                href="/nationalparks/murchison_falls"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Murchison Falls National Park
              </a>
              <a
                href="/ranger-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Ranger in Uganda: Schutz aus erster Hand
              </a>
              <a
                href="/nachhaltiger-tourismus-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Nachhaltiger Tourismus in Uganda
              </a>
              <a
                href="/gorilla-permit-verfuegbarkeit"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Gorilla-Permit: Verfügbarkeit und Buchung
              </a>
              <a
                href="/wildlife-crime-terrorismus-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Wildlife Crime in Uganda
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
