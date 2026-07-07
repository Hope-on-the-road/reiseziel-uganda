import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'sicherheit-rwampara-uganda'

export default function SicherheitRwamparaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      frage: 'Ist Rwampara District sicher für Touristen?',
      antwort:
        'Rwampara gilt als eine der ruhigeren Regionen Ugandas. Seit dem Aufbau eines eigenen Tourism Police Desk im Finanzjahr 2024/25 gibt es eine feste Anlaufstelle für Reisende. Wie überall in Uganda empfiehlt sich eine Reise mit einem erfahrenen lokalen Guide, der die Gegend kennt und im Ernstfall als Vermittler dienen kann.',
    },
    {
      frage: 'Was ist der Tourism Police Desk in Rwampara und wie erreiche ich ihn?',
      antwort:
        'Der Tourism Police Desk wurde im Rahmen des District Development Plan für 2025–2030 eingerichtet und ist die offizielle Kontaktstelle für Sicherheitsanliegen von Besuchern in Rwampara District. Er befindet sich im Verwaltungszentrum Kinoni. Für allgemeine Notfälle gilt in Uganda die Nummer 999.',
    },
    {
      frage: 'Welche Naturschutzgebiete liegen in Rwampara District?',
      antwort:
        'Der Rwoho Central Forest Reserve mit rund 9.100 Hektar und der Bugamba Central Forest Reserve mit etwa 1.210 Hektar sind die beiden zentralen Forstschutzgebiete in Rwampara. Hinzu kommen die Feuchtgebiete des Orunyere Wetland sowie die Nyabikungu- und Kashasha-Ihoho-Kongoro-Nyakaikara Wetland-Systeme.',
    },
    {
      frage: 'Wie weit ist Rwampara von Bwindi Impenetrable Forest entfernt?',
      antwort:
        'Rwampara District liegt im Südwesten Ugandas, etwa 30 bis 50 Kilometer östlich der Bwindi-Region je nach Ausgangspunkt. Von Mbarara aus sind es rund 50 Kilometer Richtung Süden. Die Kombination beider Ziele ist auf einer Uganda-Rundreise gut machbar.',
    },
    {
      frage: 'Gibt es in Rwampara Gorilla Trekking?',
      antwort:
        'Das Gorilla Trekking selbst findet nicht in Rwampara statt, sondern im benachbarten Bwindi Impenetrable Forest und im Mgahinga Gorilla National Park. Rwampara liegt jedoch auf der Route dorthin und bietet als Durchgangsregion Unterkunft, kulturelle Erlebnisse und naturnahe Ausflüge in die umliegenden Waldreservate.',
    },
  ]

  return (
    <>
      <Head
        title="Sicherheit für Touristen in Rwampara, Uganda"
        description="Sicherheit in Rwampara District: Tourism Police Desk, Waldinitative und was Reisende 2026 wissen müssen. Vor-Ort-Bericht vom Juni 2026."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        {/* Hero Bild */}
        <figure className="w-full max-h-[480px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, Südwestuganda – ein Moment echter Begegnung im Juni 2026"
            className="w-full object-cover object-center"
          />
          <figcaption className="text-xs text-gray-500 text-right px-4 py-1">
            Foto: Mark Suer, Juni 2026 — Buhoma, Südwestuganda
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Sicherheit für Touristen in Rwampara: Was Reisende über Polizei, Patrouillen und den lokalen Sicherheitsapparat wissen sollten
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Es war früh am Morgen des 21. Juni 2026, kurz nach halb sieben, als ich in Buhoma auf drei Kinder traf, die sich zögernd unserem kleinen Lager näherten. Sie standen vor dem einfachen Lehmgebäude neben dem Waisenhaus — ihre Kleidung fadenscheinig, ihre Körperhaltung zurückgenommen, als wären sie nicht sicher, ob sie hier willkommen waren. Wir haben nicht lange überlegt und sie direkt eingeladen, mit uns zu essen. Solche Begegnungen prägen, was man über ein Land lernt — mehr als jede Statistik.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Diese Kinder kamen aus der Nachbarschaft des Waisenhauses. Sie sahen müde aus, nicht krank, aber sichtlich nicht gut versorgt. Dass sie überhaupt ankamen, hatte etwas mit dem zu tun, was in diesem Teil Ugandas funktioniert: Die Gemeinschaft kennt sich. Die Menschen im Dorf wissen, wer zu wem gehört, wer Hilfe braucht und wer fremde Gäste empfängt. Dieses soziale Netz ist in vielen ländlichen Distrikten Ugandas die erste und verlässlichste Sicherheitsebene — noch vor jeder staatlichen Infrastruktur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Während meines Besuchs im Juni 2026 habe ich Rwampara District und die umliegende Region aus verschiedenen Perspektiven erlebt: als Durchgangsregion auf dem Weg nach Bwindi, als eigenständiges Naturziel mit beeindruckenden Waldreservaten und als Beispiel dafür, wie ein ugandischer Distrikt systematisch daran arbeitet, sich für den Tourismus zu öffnen — einschließlich der Frage, wie Besucher dabei geschützt werden sollen.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">Rwampara District — Fakten auf einen Blick</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-jungle-600">Lage</span>
                <p className="text-gray-800 mt-1">Südwestuganda, Rwizi-Catchment-Zone; Grenze zu Ntungamo</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-jungle-600">Tourism Police Desk</span>
                <p className="text-gray-800 mt-1">1 dedizierter Desk, eingerichtet im Finanzjahr 2024/25</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-jungle-600">Waldreservate</span>
                <p className="text-gray-800 mt-1">Rwoho (~9.100 ha) und Bugamba (~1.210 ha) Central Forest Reserve</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-jungle-600">Walddeckung</span>
                <p className="text-gray-800 mt-1">30 % (Basiswert 2024/25) — Ziel bis 2029/30: 55 %</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-jungle-600">Waldrestauration</span>
                <p className="text-gray-800 mt-1">40 ha degradierter Wald wiederhergestellt (FY2024/25), Ziel: 70 ha bis 2029/30</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-jungle-600">Notfall Uganda</span>
                <p className="text-gray-800 mt-1">999 — gemeinsamer Notruf für Polizei, Feuerwehr, Medizin</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-jungle-600">Entwicklungsplan</span>
                <p className="text-gray-800 mt-1">LGDP IV 2025–2030 orientiert sich an den Strategischen Zielen des NDP IV</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-jungle-600">Unterkunft vor Ort</span>
                <p className="text-gray-800 mt-1">Nyore Hillside Retreat, Kinoni Town Council</p>
              </div>
            </div>
          </div>

          {/* H2 Sektion 1: Rwampara District im Kontext */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Rwampara District: Ein Distrikt im Aufbruch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rwampara ist ein vergleichsweise junger Distrikt in Südwestuganda, der sich aus dem größeren Mbarara District herausgelöst hat und seitdem schrittweise eine eigene administrative und wirtschaftliche Struktur aufbaut. Das Verwaltungszentrum liegt in Kinoni Town Council, etwa eine Stunde südlich von Mbarara. Wer von Mbarara Richtung Bwindi Impenetrable Forest fährt, durchquert Rwampara — oft ohne es zu merken, denn die Grenzen zwischen den Distrikten sind im ugandischen Alltagsleben fließend.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Distrikt liegt vollständig innerhalb der ökologischen Zone des Rwizi Catchment, einem der bedeutenden Wassereinzugsgebiete Südwestugandas. Das Orunyere Wetland an der Grenze zu Ntungamo sowie die miteinander verbundenen Feuchtgebietssysteme von Nyabikungu und Kashasha-Ihoho-Kongoro-Nyakaikara prägen die Landschaft im Süden und Osten. Diese Feuchtgebiete sind nicht nur ökologisch wichtig, sondern auch Puffer für die Wasserversorgung umliegender Gemeinden — eine Tatsache, die im Kontext der ugandischen Klimaanpassungsstrategie zunehmend an Bedeutung gewinnt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der aktuelle Entwicklungsplan LGDP IV, dessen Formulierung im Mai 2024 auf einer nationalen Planungskonferenz in Kampala im Beisein des District Planners begann, legt für die Periode 2025 bis 2030 fünf strategische Ziele fest. Diese umfassen nachhaltige Produktion in Landwirtschaft, Industrie, Tourismus, Mineralien sowie IKT und Finanzdienstleistungen. Der Tourismus ist also ausdrücklich Teil des strategischen Rahmens — was erklärt, warum der Distrikt gezielt in touristische Infrastruktur investiert, darunter den Tourism Police Desk.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rwampara ist außerdem einer der Distrikte, in denen TPO (Transcultural Psychosocial Organization) im Bereich der Versorgung von verwaisten und verletzlichen Kindern aktiv ist. Diese Partnerschaft ist im offiziellen Entwicklungsplan verankert. Wer in der Region reist, begegnet dieser sozialen Realität unmittelbar — so wie ich es am Morgen des 21. Juni 2026 erlebt habe, als jene Kinder aus der Waisenhausnachbarschaft an unserem Tisch saßen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Für Reisende bedeutet das: Rwampara ist kein klassisches Safari-Ziel mit internationalem Tourismusapparat. Es ist eine Region, in der Entwicklungsarbeit, Naturschutz und der vorsichtige Aufbau einer touristischen Infrastruktur parallel laufen. Wer das versteht, reist besser — und sicherer.
          </p>

          {/* H2 Sektion 2: Sicherheitsinfrastruktur */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Der Tourism Police Desk: Ugandas Antwort auf wachsenden Besucherstrom
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Im Finanzjahr 2024/25 hat Rwampara District einen eigenen Tourism Police Desk eingerichtet — eine Maßnahme, die im jährlichen Tourism Development Programme verankert ist und bis 2029/30 aufrechterhalten werden soll. Es handelt sich um den ersten und bislang einzigen solchen Desk im Distrikt, und er markiert einen wichtigen Schritt: Der Distrikt nimmt die Sicherheit von Touristinnen und Touristen institutionell ernst.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Was steckt hinter einem Tourism Police Desk? In Uganda gibt es an mehreren touristisch bedeutsamen Orten sogenannte Tourist Police Units, die speziell auf die Bedürfnisse ausländischer Reisender geschult sind. Sie kennen häufige Betrugsmaschen, können in Sprachbarrieren vermitteln und koordinieren bei Diebstahl, Unfällen oder medizinischen Notfällen mit den zuständigen Behörden. Der Desk in Rwampara ist kleiner und weniger bekannt als die Einheiten in Kampala oder Entebbe — aber er ist vorhanden, und das hat praktische Konsequenzen für alle, die in der Region unterwegs sind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die ugandische Polizei ist außerdem für die Durchsetzung von Geschwindigkeitsregeln auf ugandischen Straßen zuständig. Das ist in diesem Kontext keine Randnotiz: Auf den oft kurvigen Landstraßen in Südwestuganda, die durch hügeliges Terrain, Nebel am Morgen und gelegentlich überraschende Bodenwellen geprägt sind, ist Geschwindigkeitsübertretung eine der häufigsten Unfallursachen. Wer mit dem Mietauto oder einem Selbstfahrer-Geländewagen unterwegs ist, sollte wissen, dass Kontrollen nicht selten sind — und dass die Polizei im Zweifelsfall Konsequenzen zieht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Für die alltägliche Sicherheit von Reisenden in Rwampara gilt dasselbe wie in anderen ländlichen Regionen Ugandas: Das Risiko schwerer Gewaltkriminalität gegenüber Touristen ist gering. Was vorkommt, sind gelegentliche Taschendiebstähle in Märkten, Missverständnisse bei Taxipreisen und selten organisierte Abzocke gegenüber Unerfahrenen. Eine einfache Regel hilft: Immer mit einem bekannten lokalen Guide oder einer gebuchten Tour reisen, gerade in Gegenden, die noch nicht vollständig touristisch erschlossen sind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            [ZITAT: Lokaler Guide über Sicherheitslage in Rwampara und Bedeutung des Tourism Police Desk]
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kulturelle Tourismusrouten, die im LGDP IV als eigenständige Aktivität gelistet sind, bieten Besuchern die Möglichkeit, Rwampara jenseits des Wildtier-Tourismus zu erkunden. Diese Routen verlaufen durch Gemeinden, die Besucher erwarten und vorbereitet sind — was die Sicherheit zusätzlich erhöht, denn bekannte Wege und vernetzte Gemeinden sind der beste Schutz vor Überraschungen.
          </p>

          {/* Inline-Bild: Gorilla */}
          <figure className="my-8">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
              alt="Berggorilla frisst Blätter im Baumkronendach – aufgenommen während eines Gorilla-Trekkings in Bwindi, Januar 2026"
              className="w-full rounded-lg object-cover max-h-96"
            />
            <figcaption className="text-xs text-gray-500 mt-2">
              Foto: Mark Suer, Januar 2026 — Berggorilla im Bwindi Impenetrable Forest auf Blattnah­rungssuche im Kronendach
            </figcaption>
          </figure>

          {/* H2 Sektion 3: Natur und Waldschutz */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Waldreservate und Feuchtgebiete: Natur als Rahmen der Reisesicherheit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer über Sicherheit in Rwampara nachdenkt, kommt am Thema Natur nicht vorbei — denn ein großer Teil der touristischen Aktivitäten in der Region findet in oder am Rand von Schutzgebieten statt. Der Rwoho Central Forest Reserve mit rund 9.100 Hektar ist das größte zusammenhängende Waldgebiet im Distrikt, der Bugamba Central Forest Reserve mit etwa 1.210 Hektar kommt hinzu. Beide sind offiziell geschützte Gebiete unter nationaler Verwaltung.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Walddeckung in Rwampara lag im Basisjahr 2024/25 bei etwa 30 Prozent der Landfläche. Das klingt nach einem respektablen Wert, ist im regionalen Vergleich jedoch ausbaufähig — weshalb der LGDP IV ein ambitioniertes Ziel setzt: bis 2029/30 sollen 55 Prozent der Distriktfläche wieder bewaldet sein. Im Finanzjahr 2024/25 wurden bereits 40 Hektar degradierter Wald durch strukturierte Forstmanagementpläne wiederhergestellt, das Ziel liegt bis 2029/30 bei 70 Hektar. Diese Zahlen beziehen sich auf aktiv restaurierte Flächen, nicht auf natürliche Regeneration.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Für Reisende bedeutet diese Waldentwicklung zweierlei: Erstens wächst der Wert der Region als Naturreiseziel mit jedem Hektar wieder aufgeforstetem Land. Zweitens entstehen durch die Forstmanagementpläne klare Zuständigkeiten und damit auch bessere Kontrollmechanismen — Rangers, die ihren Bereich kennen, sind ein Sicherheitsfaktor, der selten explizit genannt wird, aber im Alltag real ist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Das Natural Resources Programme des Distrikts ist für den Schutz, die Restauration und das Management von Wäldern, Feuchtgebieten, Klimaresilienz und Wasserressourcen zuständig. Die District Environment Office koordiniert die Klimaresilienzmaßnahmen. Beide Institutionen sind im LGDP IV verankert — und beide spielen eine Rolle dabei, ob Wanderpfade durch die Waldreservate gepflegt, markiert und kontrollierbar sind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Feuchtgebiete im Distrikt — das Orunyere Wetland an der Grenze zu Ntungamo sowie das komplexe Nyabikungu-Kashasha-System — sind nicht für klassisches Trekking erschlossen, aber für ornithologisch interessierte Reisende von hohem Wert. Die Nähe zum Mabamba-Sumpf (außerhalb von Rwampara, aber in der Region) macht Südwestuganda für Vogelbeobachter generell attraktiv. Auch hier gilt: Gute Ortskenntnis und ein Guide mit Kenntnis der lokalen Feuchtgebietssysteme sind sowohl für die Naturerfahrung als auch für die persönliche Sicherheit unverzichtbar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Malaria ist in Rwampara wie in weiten Teilen Ugandas ein relevantes Gesundheitsrisiko. Rund 80 Prozent der Kinder unter fünf Jahren in den Zieldistrikten des Malaria-Chemoprophylaxe-Programms haben entsprechende saisonale Präventionsmaßnahmen erhalten — ein Indikator für die Prävalenz der Krankheit in der Region. Reisende sollten konsequent Mückenschutz verwenden, insbesondere in der Nähe von Feuchtgebieten und in der Abenddämmerung, und eine ärztlich abgestimmte Malariaprophylaxe einhalten.
          </p>

          {/* H2 Sektion 4: Bergsteigen und aktive Sicherheit */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Aktivtourismus in der Region: Von Gorilla Trekking bis Bergsteigen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rwampara selbst liegt nicht in unmittelbarer Reichweite der berühmten Gorilla-Trekking-Gebiete, aber die Region ist Teil der Verbindungsachse zwischen Mbarara und dem Bwindi Impenetrable Forest. Wer in Januar 2026 Gorilla Trekking im Bwindi gebucht hatte, passierte die Gegend oft, ohne bewusst innezuhalten. Das ist schade — denn Rwampara bietet eigene Erfahrungen, die sich kaum woanders reproduzieren lassen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bei unserem Gorilla Trekking im Januar 2026 stießen wir nach etwa einer Stunde Wanderung auf die erste Gorillafamilie. Der erste Gorilla saß im Baum und fraß Blätter — ruhig, konzentriert, mit dieser eigenartigen Selbstverständlichkeit, die Primaten in ihrer natürlichen Umgebung ausstrahlen. Diese Begegnungen passieren im Bwindi, nicht in Rwampara — aber wer von Mbarara aus reist, legt den Weg durch den Distrikt zurück. Und wer die Augen offenhält, erlebt auch in Rwampara Natur von hohem Wert.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bergsteigen als Aktivität ist in Uganda vor allem mit den Rwenzori Mountains im Westen und Mount Elgon im Osten verbunden — beide außerhalb von Rwampara. Doch das Konzept des mehrtägigen Trekkings lässt sich auch auf die hügelige Landschaft um Rwoho anwenden. Wanderungen durch den Rwoho Forest Reserve sind möglich und werden von lokalen Guides angeboten. Die Strecken sind nicht so ausgebaut wie internationale Trekkingrouten, aber genau das macht sie authentisch.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sicherheit beim Aktivtourismus in Uganda bedeutet vor allem: Vorbereitung. Gutes Schuhwerk, ausreichend Wasser, ein Handy mit ugandischer SIM-Karte (die Netzabdeckung ist besser als vielfach angenommen) und — entscheidend — ein registrierter Guide mit Kenntnissen der Route. Die Uganda Wildlife Authority und die lokalen Distriktbehörden empfehlen grundsätzlich, keine Wanderungen in Waldreservaten ohne begleitenden Guide zu unternehmen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Die Nyore Hillside Retreat in Kinoni Town Council ist die bekannteste Tourismusattraktion mit Unterkunftsmöglichkeit im Distrikt. Sie liegt auf einer Anhöhe mit Ausblick über das umliegende Hügelland und bietet einen ruhigen Ausgangspunkt für Erkundungen der Region. Die Unterkunft ist dem gehobenen Segment zuzuordnen und richtet sich gezielt an Reisende, die Südwestuganda abseits der großen Lodges im Bwindi erleben wollen.
          </p>

          {/* H2 Sektion 5: Praktische Hinweise */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Praktische Sicherheitshinweise für Reisende in Rwampara
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer Rwampara auf eigene Faust bereist, sollte einige grundlegende Vorsichtsmaßnahmen beachten, die für den gesamten Südwesten Ugandas gelten. Der Allgemeinzustand der Straßen variiert je nach Jahreszeit erheblich: In der Trockenzeit sind die meisten Schotterpisten gut befahrbar, teils sogar ohne Allradantrieb. Nach intensiven Regenfällen — besonders zwischen Oktober und Dezember sowie März und Mai — können selbst Geländefahrzeuge nicht überall vordringen. Ein Reservekanister Treibstoff und gutes Kartenmaterial sind keine Luxus, sondern Notwendigkeit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Von allen wichtigen Dokumenten — Reisepass, Flugtickets, Krankenversicherungspolice, Führerschein — sollten vor Reiseantritt Kopien angefertigt und separat aufbewahrt werden. Gute Reiseversicherungen, die auch medizinische Evakuierung abdecken, sind für Reisen in abgelegene Regionen Ugandas sinnvoll.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Gesundheitssektor im Distrikt wird durch das National Medical Stores-System (NMS-Plus) mit Medikamenten versorgt, was die Basisversorgung in örtlichen Gesundheitszentren verbessert hat. Für ernsthafte medizinische Fälle ist jedoch Mbarara das nächste Zentrum mit einem Regionalkrankenhaus — eine Fahrtzeit von 30 bis 60 Minuten je nach Straßenverhältnissen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vektorkontrolle — also die systematische Bekämpfung krankheitsübertragender Insekten — findet in Rwampara in etwa zehn Prozent der hochendemischen Gebiete quartalsweise statt. Das ist ein Zeichen dafür, dass die lokale Gesundheitsbehörde aktiv ist, aber auch, dass das Risiko in der Region als real eingestuft wird. Reisende sollten ihre Unterkunft entsprechend wählen: Moskitonetz, gute Abdichtung und Klimatisierung oder Ventilatoren reduzieren das Risiko erheblich.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ein letzter, oft unterschätzter Aspekt der Reisesicherheit: soziale Einbettung. Wer über ein lokales Netzwerk reist — sei es eine NGO wie Hope on the Road, ein etablierter Reiseveranstalter oder ein bekannter Communityguide — hat Zugang zu Informationen und Unterstützung, die kein staatlicher Sicherheitsapparat bieten kann. Das ist die Lehre, die ich aus dem Juni 2026 mitgenommen habe. Die Kinder, die an unserem Tisch saßen, kamen nicht, weil eine Behörde es ermöglicht hatte — sie kamen, weil eine Gemeinschaft Vertrauen aufgebaut hatte.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Rwampara und Südwestuganda" />

          {/* FAQ */}
          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur Sicherheit in Rwampara
            </h2>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-5 py-4 flex justify-between items-start gap-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-gray-900">{item.frage}</span>
                    <span className="text-jungle-700 font-bold text-xl leading-none mt-0.5 flex-shrink-0">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 text-gray-700 leading-relaxed bg-white">
                      {item.antwort}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-14 pt-8 border-t border-gray-200">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
              Weiterlesen: Uganda verstehen
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/nationalparks/bwindi"
                className="block p-4 rounded-lg bg-safari-50 hover:bg-safari-100 transition-colors border border-safari-200"
              >
                <span className="font-semibold text-safari-900">Bwindi Impenetrable Forest</span>
                <p className="text-sm text-safari-700 mt-1">Der Nationalpark, der Rwampara zum Ausgangspunkt macht</p>
              </a>
              <a
                href="/gorilla-trekking"
                className="block p-4 rounded-lg bg-safari-50 hover:bg-safari-100 transition-colors border border-safari-200"
              >
                <span className="font-semibold text-safari-900">Gorilla Trekking in Uganda</span>
                <p className="text-sm text-safari-700 mt-1">Vorbereitung, Ablauf und was man wirklich braucht</p>
              </a>
              <a
                href="/ranger-uganda"
                className="block p-4 rounded-lg bg-safari-50 hover:bg-safari-100 transition-colors border border-safari-200"
              >
                <span className="font-semibold text-safari-900">Ranger in Uganda</span>
                <p className="text-sm text-safari-700 mt-1">Wer die Wälder schützt — und wie das im Alltag aussieht</p>
              </a>
              <a
                href="/wildlife-crime-terrorismus-uganda"
                className="block p-4 rounded-lg bg-safari-50 hover:bg-safari-100 transition-colors border border-safari-200"
              >
                <span className="font-semibold text-safari-900">Wildlife Crime in Uganda</span>
                <p className="text-sm text-safari-700 mt-1">Organisierte Wilderei und die Verbindung zur regionalen Sicherheitslage</p>
              </a>
              <a
                href="/nachhaltiger-tourismus-uganda"
                className="block p-4 rounded-lg bg-safari-50 hover:bg-safari-100 transition-colors border border-safari-200"
              >
                <span className="font-semibold text-safari-900">Nachhaltiger Tourismus Uganda</span>
                <p className="text-sm text-safari-700 mt-1">Wie Reisen zur Entwicklung von Distrikten wie Rwampara beiträgt</p>
              </a>
              <a
                href="/uganda-reisetipps"
                className="block p-4 rounded-lg bg-safari-50 hover:bg-safari-100 transition-colors border border-safari-200"
              >
                <span className="font-semibold text-safari-900">Uganda Reisetipps</span>
                <p className="text-sm text-safari-700 mt-1">Gesundheit, Sicherheit und praktische Hinweise für die ganze Reise</p>
              </a>
              <a
                href="/tiere/berggorilla"
                className="block p-4 rounded-lg bg-safari-50 hover:bg-safari-100 transition-colors border border-safari-200"
              >
                <span className="font-semibold text-safari-900">Berggorilla Portrait</span>
                <p className="text-sm text-safari-700 mt-1">Lebensweise, Verhalten und Schutzstatus der Mountain Gorillas</p>
              </a>
              <a
                href="/beste-reisezeit-uganda"
                className="block p-4 rounded-lg bg-safari-50 hover:bg-safari-100 transition-colors border border-safari-200"
              >
                <span className="font-semibold text-safari-900">Beste Reisezeit Uganda</span>
                <p className="text-sm text-safari-700 mt-1">Wann die Straßen sicher sind und wann die Tropen ihre eigene Logik haben</p>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
