import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'drahtschlingen-wilderei-uganda'

export default function DrahtschlingenWildereiPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Was ist eine Drahtschlinge und warum wird sie in Uganda eingesetzt?',
      antwort:
        'Eine Drahtschlinge ist eine einfache Falle aus Stahldraht, die um einen Pfad oder eine Tierspur gespannt wird. Wenn ein Tier hindurchläuft, zieht sich die Schlinge zu und schneidet sich ins Fleisch. Wilderer verwenden sie, weil das Material billig und leicht zu beschaffen ist, die Fallen kaum Aufwand erfordern und tagelang unbeaufsichtigt bleiben können. Im Vergleich zu Schusswaffen hinterlässt diese Methode zunächst keine hörbaren Spuren und ist daher schwerer zu entdecken.',
    },
    {
      frage: 'Welche Tiere werden durch Drahtschlingen am häufigsten getötet?',
      antwort:
        'Drahtschlingen richten sich in erster Linie gegen Buschfleisch-Tiere wie Buschböcke, Warzenschweine und Wasserböcke. Da sie wahllos jedes Tier fangen, das durch eine Spur läuft, werden jedoch regelmäßig auch Berggorillas, Schimpansen und Löwen als Beifang getötet oder schwer verletzt. Im Queen Elizabeth National Park wurden in der Vergangenheit Löwen durch vergiftetes Fleisch dezimiert – eine verwandte Methode, die ebenfalls dem illegalen Buschfleischhandel dient.',
    },
    {
      frage: 'Wie bekämpft die Uganda Wildlife Authority Drahtschlingen-Wilderei?',
      antwort:
        'Die Uganda Wildlife Authority (UWA) setzt auf regelmäßige Patrouillen, bei denen Ranger Fallen suchen und entfernen. Speziell ausgebildete Hundeeinheiten können versteckte Schlingen erschnüffeln. Daneben gibt es gemeindenahe Programme, die lokalen Bevölkerungen alternative Einkommensquellen bieten, damit der wirtschaftliche Anreiz zum Wilderei sinkt. Der Uganda Large Carnivore Action Plan 2024–2034 enthält konkrete Maßnahmenpakete für den Schutz bedrohter Großtiere.',
    },
    {
      frage: 'Ist Wilderei in Uganda ein wachsendes Problem oder wird es besser?',
      antwort:
        'Das Bild ist gemischt. Intensivierte Ranger-Patrouillen und internationale Kooperationen haben in einigen Schutzgebieten zu einem Rückgang der Fallenzahlen geführt. Gleichzeitig übt Bevölkerungswachstum an Parkgrenzen dauerhaften Druck auf Wildtierbestände aus. Der Hippopotamus-Bestand im benachbarten kongolesischen Virunga-Nationalpark kollabierte durch Wilderei von rund 30.000 auf etwa 800 Tiere – ein mahnendes Beispiel dafür, wie schnell Bestände zusammenbrechen können, wenn Schutzmaßnahmen versagen.',
    },
    {
      frage: 'Können Reisende aktiv zum Schutz vor Wilderei beitragen?',
      antwort:
        'Ja. Der direkteste Beitrag ist die Buchung von Gorilla-Permits und Safari-Aktivitäten über lizenzierte Anbieter, denn ein Teil der Einnahmen fließt in den Schutzgebietsfonds der UWA. Wer community-basierte Lodges wählt, stärkt außerdem lokale Wertschöpfungsketten und macht Wildtiere für Anwohnende wirtschaftlich wertvoller als Buschfleisch. Das Melden verdächtiger Aktivitäten an Ranger-Stationen ist ebenfalls möglich und wird von der Behörde ausdrücklich erbeten.',
    },
  ]

  return (
    <>
      <Head
        title="Wilderei Uganda: Drahtschlingen – Methoden & Schutz"
        description="Wie Drahtschlingen Ugandas Tierwelt bedrohen – Methoden, Auswirkungen und Gegenmaßnahmen erklärt von einem Autor mit 14 Vor-Ort-Besuchen."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero-Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Kinder aus der Buhoma-Nachbarschaft vor einem einfachen Lehmgebäude – ein Moment echter Gemeinschaft in der Nähe des Bwindi-Waldes"
            className="w-full object-cover object-center"
          />
          <figcaption className="text-sm text-gray-500 px-4 py-2 text-center">
            Buhoma, Juni 2026 – Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Drahtschlingen-Wilderei in Uganda: Methoden, Auswirkungen und Gegenmaßnahmen
          </h1>

          {/* Eröffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            An einem Morgen im Juni 2026 standen vor dem Waisenhaus in Buhoma drei Kinder aus der Nachbarschaft. Sie wirkten scheu, ihre Kleidung war zerschlissen, ihr Blick unsicher. Das GPS meiner Kamera zeigte Koordinaten wenige Hundert Meter vom Rand des Bwindi Impenetrable National Park – jenem Urwald, in dem Berggorillas leben und in dem gleichzeitig ein stiller Krieg geführt wird, der kaum Schlagzeilen macht. Wir luden die Kinder sofort ein, mit uns zu essen. Dieser Moment blieb mir nicht wegen seiner Symbolik im Gedächtnis, sondern wegen seiner Nüchternheit: Hunger und Armut sind hier keine Abstraktionen. Sie sind Grund und Folge vieler Dinge – auch der Wilderei.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Wilderei in Uganda ist kein randständiges Problem. Sie ist die größte anhaltende Bedrohung für Tierpopulationen in den Nationalparks des Landes, und das einfachste Werkzeug dabei ist ein Stück Stahldraht: die Drahtschlinge. Wer Uganda bereist und die Schönheit seiner Wälder und Savannen erlebt, begegnet einer Realität, in der dieser unsichtbare Konflikt Tag für Tag ausgetragen wird. Diesen Artikel schreibe ich nach insgesamt 14 dokumentierten Besuchen in Uganda – mit GPS-verifizierten Fotos, persönlichen Gesprächen und einem Verständnis, das sich nicht am Schreibtisch erwerben lässt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Das Phänomen der Drahtschlingen-Wilderei lässt sich nicht verstehen, ohne die Lebensrealität der Menschen an Parkgrenzen zu kennen. Es lässt sich aber auch nicht rechtfertigen. Dieser Artikel erklärt, wie Drahtschlingen funktionieren, welche Tiere sie töten, welche Netzwerke dahinterstecken – und was Uganda dagegen tut.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border-l-4 border-jungle-600 rounded-lg p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">Fakten auf einen Blick</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide">Hauptmethode</span>
                <span className="text-gray-800">Stahldrahtschlingen (Snares)</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide">Primäres Ziel</span>
                <span className="text-gray-800">Buschfleisch-Tiere, Großkatzen, Primaten als Beifang</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide">Betroffene Schutzgebiete</span>
                <span className="text-gray-800">Bwindi, Queen Elizabeth NP, Murchison Falls NP</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide">Rechtslage</span>
                <span className="text-gray-800">Uganda Wildlife Regulations 2022 – strenge Strafen</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide">Koordinierender Plan</span>
                <span className="text-gray-800">Uganda Large Carnivore Action Plan 2024–2034</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide">Zuständige Behörde</span>
                <span className="text-gray-800">Uganda Wildlife Authority (UWA)</span>
              </div>
            </div>
          </div>

          {/* H2: Methoden */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Wie Drahtschlingen funktionieren: Die Mechanik einer stillen Waffe
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Eine Drahtschlinge ist in ihrer Herstellung denkbar einfach. Ein Stück Stahldraht, wie er auf Baustellen oder in Autowerkstätten überall in Uganda erhältlich ist, wird zu einer Öse geformt und an einem festen Punkt verankert – einem Baumstamm, einer Wurzel, einem eingeschlagenen Pfahl. Die Schlinge wird in Kniehöhe des Zieltiers in eine Wildtierpfade gespannt. Wenn das Tier hindurchläuft, zieht sich die Schlinge um Hals, Bein oder Körper, und die natürliche Bewegungsreaktion des Tiers – das Zurückschrecken und Wegreißen – verschlimmert die Verletzung mit jeder Sekunde.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Das Tückische an dieser Methode ist ihre Passivität. Ein Wilderer muss nicht vor Ort sein. Die Falle kann über Tage, Wochen oder Monate aktiv bleiben, ohne dass jemand nachschaut. Tiere, die sich nicht befreien können, sterben langsam an Erschöpfung, Dehydrierung oder durch die Wunden, die der Draht hinterlässt. Tiere, die sich losreißen, tragen häufig tiefe Schnittmarken davon, die sich infizieren. Veterinärteams im Bwindi-Gebiet haben wiederholt Berggorillas behandelt, deren Hände oder Füße in solchen Schlingen verstümmelt wurden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Es gibt Variationen: Fußschlingen, Halsfallen und sogenannte Spring-Snares, bei denen ein gebogener Ast als Auslösemechanismus dient und das Tier hochschleudert. Letztere sind aufwendiger zu konstruieren, töten aber schneller – was für den Wilderer von Vorteil ist, da das Tier nicht an einem anderen Ort stirbt und einfacher zu finden ist. Für den Naturschutz macht dieser Unterschied wenig aus: Beide Varianten richten massiven Schaden an.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Warum Drahtschlingen und nicht Schusswaffen? Die Antwort liegt im Risiko-Kalkül. Eine Schusswaffe ist teuer, schwer zu beschaffen und ihr Gebrauch hörbar. Wer mit einer Waffe im Schutzgebiet angetroffen wird, kann sich kaum herausreden. Eine Schlingenanlage dagegen erfordert keine spezifische Ausrüstung, hinterlässt keinen unmittelbaren Beweis auf dem Körper des Wildereres und kann in wenigen Minuten aufgestellt werden. Die einzige Sprache, die eine Drahtschlinge spricht, ist die des Bodens – und Böden haben keine Zeugen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Ein weiterer Faktor ist die Massenproduktion. Professionelle Wilderer-Netzwerke, die nicht nur für den Eigenbedarf, sondern für den Buschfleischhandel arbeiten, können Dutzende bis Hunderte von Schlingen gleichzeitig in einem Gebiet auslegen. Die Kapazität übersteigt dabei regelmäßig die Kontrollkapazität der Ranger – ein strukturelles Problem, auf das der Uganda Large Carnivore Action Plan 2024–2034 explizit eingeht.
          </p>

          {/* H2: Auswirkungen */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Auswirkungen auf Ugandas Tierwelt: Vom Beifang zum Bestand
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die unmittelbare Zielspezies der Drahtschlingen-Wilderei in Uganda sind Buschfleisch-Tiere: Buschböcke (Tragelaphus scriptus), Warzenschweine (Phacochoerus africanus) und verschiedene Antilopenarten. Diese Tiere bilden die Basis des illegalen Buschfleischhandels, der in großen Teilen Zentralafrikas eine parallele Ernährungswirtschaft darstellt. Das Problem für den Naturschutz: Schlingen unterscheiden nicht nach Art oder Schutzstatus.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Berggorillas – ohnehin eine der am stärksten bedrohten Primatenarten der Welt – werden regelmäßig als Beifang in Schlingen gefangen. Während meiner Besuche in der Bwindi-Region zwischen Oktober 2024 und Juni 2026 habe ich mit Rangern gesprochen, die von saisonalen Spitzen im Schlingenaufkommen berichteten: besonders nach Ernteausfällen, wenn die Bevölkerung entlang der Parkgrenzen auf alternative Nahrungsquellen angewiesen ist. [ZITAT: Ranger über die Hochsaison der Schlingenfunde]
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Besonders dramatisch ist die Situation für Großkatzen im Queen Elizabeth National Park. Der Park ist eines der wenigen verbliebenen Löwen-Refugien Ugandas – doch er ist auch ein Brennpunkt des Konflikts zwischen Mensch und Tier. Viele Menschen leben innerhalb der Parkgrenzen oder direkt angrenzend daran, Rinderherden weiden auf Schutzgebietsflächen. Vergiftetes Fleisch, das ausgelegt wird, um Löwen zu töten, die Nutzvieh gerissen haben, gefährdet nicht nur die Löwenpopulation selbst, sondern auch Aasfresser wie Hyänen, Schakale und Geier, die vergiftete Kadaver fressen. Büffel meiden abgegraste Flächen, da die Vegetation qualitativ schlechter ist – die Kettenreaktion eines schlecht regulierten Grenzbereichs.
          </p>

          {/* Gorilla-Foto inline */}
          <figure className="my-8 rounded-xl overflow-hidden shadow-md">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
              alt="Berggorilla frisst Blätter im Baumkronendach des Bwindi Impenetrable National Park"
              className="w-full object-cover max-h-[420px]"
            />
            <figcaption className="text-sm text-gray-500 px-4 py-2 text-center">
              Berggorilla beim Fressen im Baumkronendach – Bwindi, Januar 2026. Foto: Mark Suer
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-5">
            Im Januar 2026 war ich beim Gorilla-Trekking in Bwindi dabei, als wir nach etwa einer Stunde Wanderung auf die erste Gorilla-Familie trafen. Das erste Tier saß hoch oben in einem Baum und fraß ruhig Blätter. Diese Nähe und Gelassenheit, mit der die Gorillas Menschen inzwischen akzeptieren, ist das Ergebnis jahrzehntelanger Habituation – eines aufwendigen, kostspieligen Prozesses. Eine einzige Drahtschlinge kann dieses Erbe zerstören: durch den Tod des Tieres, durch traumatisierende Verletzungen oder durch die Störung des Familiengefüges.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Ein Blick auf das benachbarte Ausland zeigt, wie schnell Bestände kollabieren können: Die Nilkrokodile (Crocodylus niloticus) entlang des Kazinga-Kanals und im Murchison Falls Nationalpark gelten heute als relativ stabil – aber der Hippopotamus-Bestand im kongolesischen Virunga-Nationalpark, direkt an der ugandischen Grenze, brach durch intensive Wilderei von rund 30.000 auf etwa 800 Tiere ein. Dieser Zusammenbruch vollzog sich innerhalb weniger Jahrzehnte. In Uganda laufen bei Flusspferden am Kazinga-Kanal derzeit keine vergleichbaren Krisen ab, aber das Muster bleibt eine Warnung.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Langfristig betreffen die Auswirkungen der Wilderei auch die Struktur der Ökosysteme selbst. Wenn Großherbivoren dezimiert werden, verändert sich die Vegetation. Wenn Großraubtiere fehlen, explodieren Beutepopulationen unkontrolliert. In Uganda sind diese Zusammenhänge auf engem Raum sichtbar: Der Queen Elizabeth National Park demonstriert in Echtzeit, was passiert, wenn Schutzmaßnahmen unzureichend finanziert und personell unterbesetzt sind.
          </p>

          {/* H2: Gegenmaßnahmen */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Gegenmaßnahmen: Ranger, Recht und gemeindenahe Strategien
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die Uganda Wildlife Authority (UWA) ist die zentrale Behörde im Kampf gegen Wilderei. Ihre Ranger führen regelmäßige Patrouillen durch Schutzgebietszonen durch, mit dem expliziten Auftrag, Schlingen zu suchen, zu entfernen und Wilderer zu verfolgen. Die Arbeit ist physisch und logistisch anspruchsvoll: Bwindi allein umfasst mehr als 330 Quadratkilometer dichten Regenwaldes, der kaum erschlossenes Wegenetz bietet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Uganda Large Carnivore Action Plan 2024–2034 ist das aktuelle strategische Rahmenwerk für den Schutz von Löwen, Leoparden, Geparden und Afrikanischen Wildhunden. Er enthält konkrete Zielvorgaben zur Reduzierung von Snaring-Aktivitäten, zur Verbesserung der Ranger-Ausrüstung und zur Stärkung gemeindenaher Konfliktmanagementsysteme. Dass ein solcher Plan existiert und öffentlich verfügbar ist, ist ein Zeichen institutioneller Reife – und ein Signal, dass die ugandische Regierung das Problem anerkennt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Technologisch hat sich in den letzten Jahren einiges bewegt. Kamerafafallen (Camera Traps) ermöglichen es Rangern, Tierbewegungen und menschliche Aktivitäten im Schutzgebiet zu überwachen. Einige Einheiten setzen speziell ausgebildete Spürhunde ein, die vergrabene Schlingen und Wildererrouten erschnüffeln können. Drohnen werden erprobt, um große Flächen schneller zu überwachen. Diese Technologien sind kein Allheilmittel – sie erfordern Training, Wartung und stabile Stromversorgung, alles Dinge, die in abgelegenen ugandischen Parks nicht selbstverständlich sind – aber sie verändern die Dynamik der Patrouillen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Die rechtliche Grundlage wurde in den letzten Jahren verschärft. Die Uganda Wildlife Regulations 2022 sehen erhebliche Strafen für Wilderei vor, darunter Gefängnisstrafen und Geldbußen, die auf internationale Standards ausgerichtet wurden. Die Durchsetzung bleibt jedoch das schwächste Glied in der Kette: Gerichte sind überlastet, Beweise schwer zu sichern, und der soziale Druck in ländlichen Gemeinden, Wilderer nicht zu verraten, ist real.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Deshalb ist der gemeindenahe Ansatz – Community-based Conservation – inzwischen integraler Bestandteil jeder ernsthaften Anti-Wilderei-Strategie. Das Grundprinzip ist einfach: Wenn eine Gemeinschaft wirtschaftlich vom Schutz der Wildtiere profitiert, sinkt der Anreiz zur Wilderei. In der Praxis umfasst das Programme, die Teile der Tourismus-Einnahmen direkt in lokale Schulen, Gesundheitsposten oder Kleingewerbe-Fonds umleiten. Die UWA führt seit Jahren Revenue-Sharing-Programme durch, bei denen Parkgemeinden einen prozentualen Anteil der Gate-Einnahmen erhalten. Die Nachhaltigkeit dieser Programme hängt jedoch direkt von der Besucherzahl ab – und damit von der Qualität des touristischen Angebots.
          </p>

          {/* H2: Sozialer Kontext */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Armut, Buschfleisch und die Grenzen des Verbots
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Es wäre zu einfach, Wilderei in Uganda allein als kriminelles Problem darzustellen. Der soziale Kontext ist untrennbar mit dem Problem verbunden – auch wenn er keine Rechtfertigung liefert. Die Kinder, die wir in Buhoma trafen, lebten in einer Realität, in der Nahrungsmittelknappheit kein abstraktes Konzept ist. Buhoma liegt am Rande des Bwindi Impenetrable National Park. Die Lebensrealität dort und die Frage, wie Menschen in dieser Nachbarschaft ihren Unterhalt sichern, ist die tägliche Herausforderung, mit der Naturschützer in Uganda konfrontiert sind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Buschfleisch – wild gefangenes und illegal geschlachtetes Tierfleisch – erfüllt in Teilen der ugandischen Landbevölkerung eine doppelte Funktion: als Nahrungsquelle und als Einkommensquelle. Der Marktpreis für gutes Buschfleisch übersteigt den für legal erhältliches Hühnerfleisch in ländlichen Gebieten. Wilderer, die mehrere Schlingen betreiben, können damit in einer Saison mehr verdienen als mit einem halben Jahr Subsistenzlandwirtschaft. Die ökonomische Rationalität dieser Entscheidung ist verständlich, auch wenn ihre ökologischen Konsequenzen verheerend sind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Zusammenhang zwischen Armut und Wilderei wird durch die Bevölkerungsdynamik in Parkgrenzgebieten verstärkt. Uganda hat eines der höchsten Bevölkerungswachstumsraten Afrikas, und der Druck auf landwirtschaftliche Flächen ist erheblich. Gemeinden, die seit Generationen in oder nahe Wäldern lebten, verloren durch die Ausweisung von Schutzgebieten Zugang zu Ressourcen, ohne dass ein gleichwertiger wirtschaftlicher Ausgleich geschaffen wurde. Diese Geschichte sitzt tief.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Einige NGOs – darunter international tätige Organisationen wie auch lokale Gruppen – arbeiten an Ansätzen, die den wirtschaftlichen Druck reduzieren. Graduierungsprogramme, die einen Vier-Komponenten-Ansatz aus Sozialschutz, wirtschaftlicher Stärkung, finanzieller Eingliederung und sozialer Unterstützung verfolgen, haben in anderen ugandischen Kontexten nachweisbare Ergebnisse erzielt. Ob und wie solche Programme in Wilderei-Brennpunkten skaliert werden können, bleibt eine offene Frage – aber sie zeigt die Richtung an, in die ein nachhaltiger Ansatz gehen muss.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Der Tourismus spielt in dieser Gleichung eine ambivalente Rolle. Einerseits schafft er direkte Arbeitsplätze: als Ranger, Guide, Lodge-Personal, Transporteur, Handwerker. Das Uganda Wildlife Education Centre empfing im Jahr 2013 allein 257.098 Besucher – darunter viele Schulkinder, für die ein solcher Besuch den ersten Kontakt mit Wildtieren darstellt und langfristig Bewusstsein schafft. Andererseits konzentrieren sich Tourismus-Einnahmen in bestimmten Gebieten stark, während andere Gemeinden am Parkrand wenig davon sehen. Diese Ungleichverteilung erzeugt Ressentiments und schwächt den gesellschaftlichen Konsens für Naturschutz.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Ein nachhaltiges Anti-Wilderei-Regime in Uganda muss daher auf mindestens drei Ebenen gleichzeitig operieren: Durchsetzung (Ranger, Recht), Alternativen (Einkommen, Ernährung) und Teilhabe (Revenue-Sharing, Mitentscheidung). Der Uganda Large Carnivore Action Plan 2024–2034 adressiert alle drei – die Frage ist, ob die Ressourcen und der politische Wille ausreichen, ihn umzusetzen.
          </p>

          {/* H2: Was Reisende tun können */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Was Reisende wissen und tun können
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Wer Uganda besucht, wird mit der Wilderei-Thematik nicht zwingend direkt konfrontiert – aber wer die Augen offenhält, wird Spuren sehen: die Armstümpfe von Gorillas, die in Schlingen verletzt wurden und von Veterinärteams behandelt werden mussten, die Schilder vor Ranger-Stationen, die über aktuelle Bedrohungen informieren, die Gesprächsfetzen zwischen Guides über nächtliche Vorfälle.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Das Gorilla-Permit – derzeit einer der teuersten Einzeltickets im afrikanischen Tourismus – ist kein reiner Luxusposten. Ein erheblicher Teil der Einnahmen fließt in den UWA-Fond, aus dem Ranger-Gehälter, Ausrüstung und Community-Programme finanziert werden. Jedes gebuchte Permit ist ein direkter Beitrag zur Anti-Wilderei-Arbeit. Das gilt auch für Schimpansen-Trekking und Safari-Aktivitäten in den großen Nationalparks.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Gleichzeitig sind informierte Reisende ein wichtiges Element im Informationssystem. Ranger bitten Besucher aktiv, verdächtige Aktivitäten zu melden: unbekannte Personen ohne Ranger-Begleitung im Parkinneren, Feuerrauch an ungewöhnlichen Stellen, Spuren, die auf Wilderer-Lager hindeuten. Diese Meldungen ergänzen das Patrouillennetz und haben in der Vergangenheit zur Aufdeckung von Wilderer-Netzwerken beigetragen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Wer tiefer einsteigen möchte: Organisationen wie die Berggorilla und Regenwald Direkthilfe (berggorilla.org) und das International Gorilla Conservation Programme (IGCP) bieten Hintergrundinformationen und konkrete Unterstützungsmöglichkeiten. Für Uganda spezifisch ist die UWA die zentrale Anlaufstelle für Informationen zu Anti-Poaching-Aktivitäten und zur Meldung von Wilderei-Verdacht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Was dieser Artikel zeigen will: Wilderei in Uganda ist kein fernes Problem aus einer Naturdokumentation. Sie ist der Hintergrund, vor dem jedes Gorilla-Trekking, jede Safari, jeder Besuch in einem ugandischen Nationalpark stattfindet. Das Wissen darum macht die Erfahrung nicht schlechter – es macht sie echter.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <section className="mt-14 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur Drahtschlingen-Wilderei in Uganda
            </h2>
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {faqs.map((item, idx) => (
                <div key={idx} className="py-4">
                  <button
                    className="w-full flex justify-between items-start text-left gap-4 focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-semibold text-gray-900 text-base leading-snug">{item.frage}</span>
                    <span className="mt-0.5 shrink-0 text-jungle-700 font-bold text-xl leading-none">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <p className="mt-3 text-gray-700 leading-relaxed text-sm pr-8">{item.antwort}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-10 pt-8 border-t border-gray-200">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">Weiterführende Artikel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/ranger-uganda"
                className="block px-4 py-3 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 text-jungle-900 font-medium text-sm transition-colors"
              >
                Ranger in Uganda: Arbeit an der Front des Naturschutzes
              </a>
              <a
                href="/uwa-anti-poaching"
                className="block px-4 py-3 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 text-jungle-900 font-medium text-sm transition-colors"
              >
                UWA Anti-Poaching: Wie Uganda Wildtiere schützt
              </a>
              <a
                href="/wildlife-crime-terrorismus-uganda"
                className="block px-4 py-3 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 text-jungle-900 font-medium text-sm transition-colors"
              >
                Wildlife Crime in Uganda: Hintergründe und Netzwerke
              </a>
              <a
                href="/tiere/berggorilla"
                className="block px-4 py-3 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 text-jungle-900 font-medium text-sm transition-colors"
              >
                Der Berggorilla: Portrait einer bedrohten Art
              </a>
              <a
                href="/nationalparks/queen_elizabeth"
                className="block px-4 py-3 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 text-jungle-900 font-medium text-sm transition-colors"
              >
                Queen Elizabeth National Park: Löwen, Büffel, Konflikte
              </a>
              <a
                href="/nachhaltiger-tourismus-uganda"
                className="block px-4 py-3 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 text-jungle-900 font-medium text-sm transition-colors"
              >
                Nachhaltiger Tourismus in Uganda
              </a>
              <a
                href="/nationalparks/bwindi"
                className="block px-4 py-3 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 text-jungle-900 font-medium text-sm transition-colors"
              >
                Bwindi Impenetrable National Park: Der Gorilla-Wald
              </a>
              <a
                href="/tiere/loewe"
                className="block px-4 py-3 rounded-lg border border-jungle-200 bg-jungle-50 hover:bg-jungle-100 text-jungle-900 font-medium text-sm transition-colors"
              >
                Löwen in Uganda: Bestand, Schutz und Konflikte
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
