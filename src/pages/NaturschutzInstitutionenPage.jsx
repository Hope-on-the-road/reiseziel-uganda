import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'naturschutz-institutionen-uganda'

const faqItems = [
  {
    frage: 'Welche staatlichen Behörden sind in Uganda für den Naturschutz zuständig?',
    antwort:
      'Der staatliche Naturschutz in Uganda verteilt sich auf mehrere Institutionen. Die National Environment Management Authority überwacht die Einhaltung von Umweltgesetzen landesweit und genehmigt Umweltverträglichkeitsprüfungen für Bauprojekte und Infrastrukturvorhaben. Die National Forestry Authority verwaltet die Zentralen Waldreservate und ist für nachhaltige Forstwirtschaft zuständig. Das Wildlife Management Department befasst sich mit Wildtieren außerhalb der Schutzgebiete, insbesondere dort, wo Mensch-Tier-Konflikte entstehen. Die Uganda Wildlife Authority verwaltet daneben direkt die Nationalparks und Wildlife Reserves.',
  },
  {
    frage: 'Was macht die National Forestry Authority (NFA) in Uganda?',
    antwort:
      'Die National Forestry Authority ist für die mehr als 700 Zentralen Waldreservate Ugandas verantwortlich. Dazu gehören bekannte Waldgebiete wie Echuya, Budongo und Mabira. Die NFA überwacht die nachhaltige Nutzung dieser Wälder, erteilt Genehmigungen für die legale Holzentnahme und kämpft gegen illegalen Einschlag. Aufforstungsprogramme gehören ebenfalls zu ihren Aufgaben. In der Praxis bleibt illegaler Holzeinschlag ein ernstes Problem, das die Kapazitäten der Behörde erheblich beansprucht.',
  },
  {
    frage: 'Was ist das Wildlife Management Department und warum ist es wichtig?',
    antwort:
      'Das Wildlife Management Department ist innerhalb der Uganda Wildlife Authority für Wildtiere außerhalb der formal geschützten Gebiete zuständig. Ein zentrales Aufgabenfeld ist das Problemtiermanagement: Wenn Elefanten Felder zerstören, Nilpferde Gemeinden gefährden oder Paviane Ernten plündern, ist das WMD gefordert. Diese Konflikte zwischen Menschen und Wildtieren gehören zu den größten Herausforderungen des ugandischen Naturschutzes — und ohne das WMD fehlte eine koordinierende Stelle, um darauf zu reagieren.',
  },
  {
    frage: 'Wie unterscheidet sich NEMA von der Uganda Wildlife Authority?',
    antwort:
      'NEMA und die Uganda Wildlife Authority haben unterschiedliche Zuständigkeiten, die sich ergänzen. NEMA ist eine behördenübergreifende Umweltaufsichtsbehörde: Sie kontrolliert die Einhaltung von Umweltrecht, prüft Umweltverträglichkeiten und koordiniert die Umweltpolitik auf nationaler Ebene — unabhängig von Tierarten oder Schutzgebietsgrenzen. Die Uganda Wildlife Authority hingegen verwaltet konkret die Nationalparks und Wildlife Reserves, beschäftigt Ranger, verkauft Permits und ist für den Schutz der Wildtierbestände in ihrem Gebiet verantwortlich. Für NEMA gibt es eine eigene Seite auf dieser Website.',
  },
  {
    frage: 'Wie arbeiten NEMA, NFA, WMD und UWA zusammen — und wo liegen die Probleme?',
    antwort:
      'Die vier Institutionen teilen sich die Verantwortung für Ugandas Natur, arbeiten aber nicht immer reibungslos zusammen. Überschneidende Zuständigkeiten, begrenzte Mittel und unterschiedliche institutionelle Prioritäten machen Koordination schwierig. So können Waldränder gleichzeitig in den Zuständigkeitsbereich von NFA und UWA fallen, wenn ein Central Forest Reserve an einen Nationalpark grenzt. In der Praxis hängt vieles davon ab, ob lokale Behördenvertreter kommunizieren und kooperieren. Internationale Naturschutzorganisationen versuchen, solche Lücken durch Capacity Building und gemeinsame Programme zu schließen.',
  },
]

export default function NaturschutzInstitutionenPage() {
  const [offenesFaq, setOffenesFaq] = useState(null)

  return (
    <>
      <Head
        title="Naturschutz Uganda: NEMA, NFA und WMD erklärt"
        description="NEMA, NFA und Wildlife Management Department: Welche Behörden steuern den Naturschutz in Uganda? Zuständigkeiten, Aufgaben und Koordination im Überblick."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero */}
        <figure className="w-full max-h-[520px] overflow-hidden m-0">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
            alt="Waldgrenze im Bwindi Impenetrable Forest, Uganda"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <figcaption className="text-xs text-gray-500 text-right px-4 py-1">
            Foto: Mark Suer — Bwindi Impenetrable Forest, Uganda
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Naturschutz in Uganda: NEMA, NFA und Wildlife Management Department
          </h1>

          {/* Eröffnung */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Wer den Naturschutz in Uganda verstehen möchte, kommt schnell auf Abkürzungen:
            NEMA, NFA, WMD, UWA. Hinter jedem Kürzel steckt eine Behörde mit eigenem Mandat,
            eigenem Budget und eigener Geschichte. Bei vierzehn Reisen nach Uganda — insgesamt
            mehr als 65 Tage im Land — bin ich diesen Institutionen immer wieder begegnet: auf
            Schildern in Waldgebieten, in Gesprächen mit Rangern, in der Berichterstattung über
            Konflikte an Nationalparkgrenzen. Keiner dieser Namen ist glamourös, aber jeder steht
            für einen Teil des Systems, das Uganda vor dem Verlust seiner außergewöhnlichen
            Natur bewahren soll.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Uganda beherbergt einen der artenreichsten Lebensräume Afrikas. Berggorillas in Bwindi,
            Schimpansen in Kibale, mehr als tausend Vogelarten, ausgedehnte Feuchtgebiete, tropische
            Bergwälder — diese Vielfalt konzentriert sich auf ein verhältnismäßig kleines Land.
            Sie zu erhalten, ist Aufgabe einer Reihe staatlicher Institutionen, die unterschiedliche
            Ausschnitte dieser Verantwortung tragen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Dieser Artikel erklärt die drei zentralen Naturschutzbehörden jenseits der Uganda
            Wildlife Authority: die National Environment Management Authority (NEMA), die National
            Forestry Authority (NFA) und das Wildlife Management Department (WMD). Ihre Zuständigkeiten
            überschneiden sich, ergänzen sich — und erzeugen gelegentlich Reibung.
          </p>

          {/* Faktenbox */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">
              Die drei Institutionen: Auf einen Blick
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">NEMA</span>
                <span className="text-gray-800 text-sm">Umweltrecht, Umweltverträglichkeitsprüfungen, landesweite Umweltaufsicht</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">NFA</span>
                <span className="text-gray-800 text-sm">Über 700 Zentrale Waldreservate, Forstwirtschaft, Wiederaufforstung</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-jungle-700 uppercase tracking-wide mb-1">WMD</span>
                <span className="text-gray-800 text-sm">Wildtiere außerhalb Schutzgebiete, Mensch-Tier-Konflikte, Problemtiermanagement</span>
              </div>
            </div>
          </div>

          {/* H2: NEMA */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              NEMA: Ugandas Umweltaufsichtsbehörde
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die National Environment Management Authority ist die übergeordnete Umweltbehörde
              Ugandas. Ihr Mandat ist breiter als das jeder anderen Naturschutzinstitution im Land:
              NEMA überwacht die Einhaltung von Umweltrecht auf nationaler Ebene, koordiniert die
              Arbeit anderer Umweltbehörden und ist zuständig für Umweltverträglichkeitsprüfungen
              bei Bauprojekten, Straßen, Bergbauvorhaben und industriellen Anlagen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das bedeutet: Bevor in Uganda ein größeres Infrastrukturprojekt genehmigt werden kann,
              muss NEMA prüfen, welche Auswirkungen es auf die Umwelt hat. Diese Prüfungen sind
              rechtlich vorgeschrieben und gelten auch dann, wenn das Projekt andere Behörden als
              Auftraggeber hat. In der Praxis ist NEMA damit eine Querschnittsbehörde — sie hat
              kein eigenes Schutzgebiet, aber Einfluss auf Entscheidungen, die alle Schutzgebiete
              betreffen können.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              NEMA hat seinen Sitz in Kampala, agiert aber landesweit. Lokale Umweltbehörden
              auf Distriktebene sind an die nationalen Standards gebunden, die NEMA setzt.
              Zu den praktischen Aufgaben gehören auch Abfallmanagement-Vorschriften und
              Umweltaudits für Unternehmen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Da NEMA eine eigene Seite auf dieser Website hat, behandelt dieser Artikel die
              Behörde im Überblick. Ausführlicheres zu Aufgaben, Geschichte und aktuellen
              Herausforderungen findet sich im Artikel zu{' '}
              <a href="/nema-umweltschutz-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                NEMA und Umweltschutz in Uganda
              </a>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Im Zusammenhang mit CITES — dem internationalen Abkommen zum Schutz bedrohter
              Tier- und Pflanzenarten — ist NEMA eine der koordinierenden Stellen auf ugandischer
              Seite. Wie CITES in Uganda umgesetzt wird, erklärt unser Artikel zur{' '}
              <a href="/cites-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                CITES-Umsetzung in Uganda
              </a>.
            </p>

            <div className="my-8 bg-jungle-50 border-l-4 border-jungle-400 pl-5 py-4 rounded-r-lg">
              <p className="text-jungle-900 italic text-sm">
                [RECHERCHE NOETIG: Aktuelle Zahl der durch NEMA bearbeiteten Umweltverträglichkeitsprüfungen pro Jahr]
              </p>
            </div>
          </section>

          {/* H2: NFA */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              NFA: Hüterin von mehr als 700 Waldreservaten
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die National Forestry Authority verwaltet die Zentralen Waldreservate Ugandas —
              mehr als 700 an der Zahl. Zu den bekanntesten gehören der Echuya-Wald im Südwesten,
              der Budongo-Wald im Norden von Queen Elizabeth und der Mabira-Wald östlich von Kampala.
              Diese Reservate sind keine Nationalparks: Sie stehen unter einer anderen Rechtsgrundlage
              und werden von der NFA statt von der Uganda Wildlife Authority verwaltet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Mandat der NFA umfasst nachhaltige Forstwirtschaft, Wiederaufforstung und den
              Schutz vor illegaler Holzentnahme. In Waldreservaten ist eine begrenzte kommerzielle
              Nutzung unter bestimmten Voraussetzungen gestattet — die NFA erteilt dafür Genehmigungen
              und überwacht deren Einhaltung. Der Unterschied zu einem Nationalpark liegt darin,
              dass keine vollständige Sperrzone gilt: Nutzung ja, aber geregelte Nutzung.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In der Praxis ist illegaler Holzeinschlag eines der drängendsten Probleme, mit denen
              die NFA kämpft. Uganda verliert nach wie vor bedeutende Waldflächen durch unkontrollierte
              Rodung und illegale Entnahme von Holzkohlevorprodukten. Die NFA hat zwar Durchsetzungskompetenzen,
              aber begrenzte Ressourcen. Lokale Ranger können nicht jeden Winkel ihrer Reservate
              überwachen, und die wirtschaftliche Not in angrenzenden Gemeinden macht illegale Holzentnahme
              für viele Menschen attraktiv.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bei meinen Aufenthalten in Uganda — besonders auf Fahrten zwischen Nationalparks —
              habe ich wiederholt gesehen, wie schmal der Saum zwischen bewirtschaftetem Land und
              Waldreservat oft ist. Die Abholzungsfront liegt nicht in unerreichbarer Ferne:
              Sie ist manchmal wenige Hundert Meter von einer Reservatsgrenze entfernt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Den Hintergrund zu illegalen Holzeinschlag in ugandischen Wäldern behandelt unser
              Artikel zu{' '}
              <a href="/illegaler-holzeinschlag-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                illegalem Holzeinschlag in Uganda
              </a>{' '}
              ausführlicher.
            </p>

            <div className="my-8 bg-jungle-50 border-l-4 border-jungle-400 pl-5 py-4 rounded-r-lg">
              <p className="text-jungle-900 italic text-sm">
                [RECHERCHE NOETIG: Aktueller Stand der Waldfläche in Ugandas Central Forest Reserves — Nettoverlust oder -gewinn in den letzten zehn Jahren]
              </p>
            </div>
          </section>

          {/* H2: WMD */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Wildlife Management Department: Wildtiere außerhalb der Parks
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Wildlife Management Department — kurz WMD — befasst sich mit einem der
              schwierigsten Felder des ugandischen Naturschutzes: Wildtieren außerhalb der
              formal geschützten Gebiete. Wer an Ugandas Nationalparks denkt, denkt an klar
              umrissene Grenzen. Die Realität ist komplexer: Elefanten halten sich nicht an
              Parkgrenzen. Büffel wandern auf Felder. Nilpferde verlassen nachts die Flussufer
              und beschädigen Ernten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das WMD koordiniert das sogenannte Problemtiermanagement — Problem Animal Control
              in der ugandischen Verwaltungssprache. Wenn Wildtiere Menschen gefährden oder
              Existenzgrundlagen zerstören, ist das WMD die zuständige Stelle. Die Reaktionen
              reichen von Vergrämungsmaßnahmen über Kompensationsverfahren bis hin, in extremen
              Fällen, zur Tötung gefährlicher Tiere.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das WMD ist strukturell in die Uganda Wildlife Authority eingebettet, hat aber
              ein eigenständiges Aufgabenprofil. Während die UWA primär auf Parks und Reserves
              ausgerichtet ist, agiert das WMD an der Schnittstelle zwischen Schutzgebieten
              und besiedeltem Land. Diese Schnittstelle ist in Uganda besonders konfliktreich:
              Das Land verzeichnet eines der höchsten Bevölkerungswachstums der Welt, und
              die Grenzen zwischen Schutzgebieten und landwirtschaftlich genutzter Fläche
              geraten unter wachsenden Druck.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bei meinen Besuchen in Gemeinden rund um den Bwindi und den Queen-Elizabeth-Nationalpark
              war der Mensch-Tier-Konflikt regelmäßig Gesprächsthema. Landwirte, deren Ernte
              von Elefanten zerstört wurde, stehen der Naturschutzidee verständlicherweise
              skeptisch gegenüber — unabhängig davon, wie spektakulär die Wildtiere für Besucher
              von außen erscheinen. Das WMD ist die Institution, die in diesen Fällen vermitteln
              und handeln muss.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Arbeit des WMD berührt sich auch mit der Bekämpfung von Wilderei, denn viele
              Wildtierangriffe auf Mensch und Eigentum schaffen einen Nährboden, in dem
              Toleranz für Wilderei entsteht. Mehr zum Thema Wilderei in Uganda findet sich
              in unserem Artikel zu{' '}
              <a href="/wilderei-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                Wilderei in Uganda
              </a>.
            </p>

            <div className="my-8 bg-jungle-50 border-l-4 border-jungle-400 pl-5 py-4 rounded-r-lg">
              <p className="text-jungle-900 italic text-sm">
                [RECHERCHE NOETIG: Aktuelle Fallzahlen für Mensch-Tier-Konflikte in Uganda — WMD-Berichte oder UWA-Statistiken]
              </p>
            </div>
          </section>

          {/* H2: UWA und das Gesamtsystem */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Die Uganda Wildlife Authority: Das vierte Standbein
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Neben NEMA, NFA und WMD ist die Uganda Wildlife Authority die bekannteste
              Naturschutzbehörde des Landes — und diejenige, mit der Reisende am häufigsten
              direkt in Berührung kommen. Die UWA verwaltet alle ugandischen Nationalparks
              und Wildlife Reserves: Bwindi, Kibale, Queen Elizabeth, Murchison Falls, Kidepo
              Valley und weitere. Sie betreibt die Ranger-Stationen, stellt Gorilla-Permit
              aus und ist verantwortlich für die Sicherheit von Besuchern und Wildtieren
              im Parkgebiet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die UWA ist keine dritte Kraft neben NEMA und NFA — sie ist das operative Zentrum
              des ugandischen Naturschutzes für alles, was Nationalparks betrifft. Aber sie
              kann nur innerhalb ihrer Grenzen agieren. Was außerhalb passiert — in Waldreservaten,
              auf landwirtschaftlichen Flächen, in städtischen Umgebungen — liegt im Mandat
              der anderen Institutionen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das Zusammenspiel von UWA, NFA, WMD und NEMA ist theoretisch durchdacht:
              Jede Behörde hat ein klares Zuständigkeitsfeld, und gemeinsam sollen sie
              das gesamte Territorium Ugandas abdecken. In der Praxis entstehen Koordinationslücken,
              wenn Projekte Behördengrenzen überschreiten, Budgets knapp sind oder lokale
              Behördenvertreter unterschiedliche Prioritäten setzen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Internationale Naturschutzorganisationen und Entwicklungshilfeagenturen versuchen,
              durch Capacity-Building-Programme und gemeinsame Monitoring-Projekte solche Lücken
              zu schließen. Wie das im Bereich des Artenschutzes international funktioniert,
              zeigt der Rahmen der CITES-Konvention. Mehr dazu in unserem Artikel zur{' '}
              <a href="/cites-uganda" className="text-jungle-700 underline hover:text-jungle-900">
                CITES-Umsetzung in Uganda
              </a>.
            </p>
          </section>

          {/* H2: Herausforderungen der Koordination */}
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Was Koordination im Naturschutz erschwert
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ugandas staatliche Naturschutzarchitektur ist auf dem Papier schlüssig. Aber
              staatliche Institutionen sind keine Maschinen — sie arbeiten mit begrenzten
              Budgets, unzureichend ausgebildetem Personal, manchmal widersprüchlichen
              politischen Vorgaben und unter dem ständigen Druck wirtschaftlicher Interessen,
              die mit Naturschutzzielen konkurrieren.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ein konkretes Beispiel: Ein Central Forest Reserve der NFA grenzt direkt an einen
              Nationalpark der UWA. Was in der Grenzzone gilt, wer für Übergriffe verantwortlich
              ist, welche Behörde bei einem Wildtiervorfall handelt — das ist nicht immer eindeutig
              geregelt. In der Praxis kommt es auf die Qualität lokaler Kooperation an, die
              von Fall zu Fall variiert.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hinzu kommt das Problem der wirtschaftlichen Anreize. Für viele Menschen, die
              in unmittelbarer Nähe von Waldreservaten oder Nationalparks leben, ist die
              Entnahme von Holz, Wildtieren oder anderen Ressourcen eine Überlebensstrategie —
              keine Gleichgültigkeit gegenüber der Natur, sondern eine Reaktion auf Armut.
              Naturschutz ohne Entwicklungsperspektive bleibt in solchen Kontexten instabil.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wie das konkret bei der Berggorilla-Erhaltung funktioniert — und warum es dort
              besser als anderswo gelingt — erklärt unser Artikel zu{' '}
              <a href="/berggorilla-naturschutz" className="text-jungle-700 underline hover:text-jungle-900">
                Berggorilla-Naturschutz in Uganda
              </a>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Auf meinen Reisen durch Uganda habe ich immer wieder die Kluft zwischen dem
              gesetzlichen Rahmen und der Realität vor Ort wahrgenommen. Schutzgebiete sind
              gut ausgeschildert; Verbote sind bekannt. Aber ob sie eingehalten werden, hängt
              von Dingen ab, die auf keiner Karte stehen: lokale Wirtschaftslage, Qualität des
              Gemeindemanagements, Glaubwürdigkeit der Behörden, persönliches Engagement
              einzelner Ranger und Verwaltungsbeamter.
            </p>
          </section>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Impressionen aus ugandischen Naturschutzgebieten" />

          {/* FAQ */}
          <section className="mt-14 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu Naturschutz-Institutionen in Uganda
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
              Weiterführende Artikel zu Naturschutz und Umwelt in Uganda
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/nema-umweltschutz-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                NEMA: Umweltschutz in Uganda
              </a>
              <a
                href="/berggorilla-naturschutz"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Berggorilla-Naturschutz in Uganda
              </a>
              <a
                href="/wilderei-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Wilderei in Uganda: Ursachen und Bekämpfung
              </a>
              <a
                href="/illegaler-holzeinschlag-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Illegaler Holzeinschlag in Uganda
              </a>
              <a
                href="/cites-uganda"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                CITES-Umsetzung in Uganda
              </a>
              <a
                href="/gorilla-trekking"
                className="block bg-jungle-50 hover:bg-jungle-100 border border-jungle-200 rounded-lg px-4 py-3 text-jungle-800 font-medium transition-colors"
              >
                Gorilla-Trekking in Uganda
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
