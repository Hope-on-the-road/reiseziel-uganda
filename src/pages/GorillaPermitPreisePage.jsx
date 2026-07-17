import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'gorilla-permit-preise'

function FaqItem({ frage, antwort }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-base">{frage}</span>
        <span className="text-jungle-700 text-xl flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p className="mt-3 text-gray-700 leading-relaxed text-sm">{antwort}</p>
      )}
    </div>
  )
}

export default function GorillaPermitPreisePage() {
  return (
    <>
      <Head
        title="Gorilla Permit Uganda: Preise & Buchung 2026"
        description="Gorilla Permit Uganda: 800 USD Permitpreis, Buchungswege, Unterschiede zwischen Nationalparks und praktische Tipps zur Genehmigung."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero-Bild */}
        <figure className="w-full max-h-96 overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, Bwindi-Region, Uganda"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-1 bg-gray-50">
            Buhoma, Bwindi-Region — Foto: Mark Suer, 21. Juni 2026
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Gorilla Permit Uganda: Preise, Buchung und alles was Sie wissen müssen
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Ein gorilla permit uganda zu bekommen ist der erste und entscheidende Schritt jeder Reise zu den Berggorillas.
            Wer im Juni 2026 durch die Hügel rund um Buhoma reist, versteht schnell, warum diese Region für so viele
            Reisende ein besonderer Ort ist. Ich war an jenem Morgen auf dem Weg zu einem lokalen Hühnerzüchter, dessen
            Betrieb seit Jahren das nahe Waisenhaus mit frischen Eiern und gelegentlich Fleisch versorgt. Der Farmer
            präsentierte uns seinen Stall mit sichtlichem Stolz — er kennt jedes seiner Tiere und behandelt sie mit einer
            Sorgfalt, die ich so auf einem kleinen Bauernhof selten erlebt habe.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dieser Besuch — GPS-verifiziert auf den Koordinaten -0.9713° / 29.6142° — liegt keine fünfzehn Minuten
            Fußmarsch von dem Eingang entfernt, durch den täglich Trekking-Gruppen aufbrechen, um die Berggorillas im
            Bwindi Impenetrable Forest zu besuchen. Buhoma ist nicht nur ein Ausgangspunkt für Gorilla-Trekking; es ist
            eine lebendige Gemeinschaft, die direkt von diesem Tourismus abhängt. Der Hühnerzüchter ist ein Glied in
            dieser Kette: Touristen kaufen Permits, die Einnahmen fließen in die Region, lokale Unternehmer wie er
            können ihre Familien und das Waisenhaus versorgen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Wer ein gorilla permit uganda erwerben möchte, steht vor einer Reihe konkreter Fragen: Was kostet das
            Permit, wo kauft man es, wie weit im Voraus muss man buchen, und welche Nationalparks kommen überhaupt
            in Frage? Diese Seite beantwortet alle diese Fragen auf der Grundlage eigener Besuche und gesammelter
            Informationen — ohne Werbung, ohne Affiliate-Links, ohne aufgebauschte Versprechen.
          </p>

          {/* Inline-Bild: Hühnerzüchter */}
          <figure className="my-8 rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125464168_l7rh.jpg"
              alt="Lokaler Hühnerzüchter in Buhoma zeigt seine Hühnerzucht — Beitrag zur Gemeinschaftsversorgung in der Bwindi-Region"
              className="w-full object-cover max-h-72"
              loading="lazy"
            />
            <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
              Hühnerzüchter in Buhoma, der das nahegelegene Waisenhaus beliefert — Foto: Mark Suer, 21. Juni 2026
            </figcaption>
          </figure>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">Gorilla Permit Uganda — Fakten auf einen Blick</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="font-semibold text-jungle-800">Permitpreis Uganda</dt>
                <dd className="text-gray-700">800 USD pro Person und Trekking</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Hauptstandorte</dt>
                <dd className="text-gray-700">Bwindi Impenetrable Forest, Mgahinga Gorilla NP</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Trekking-Dauer</dt>
                <dd className="text-gray-700">1–8 Stunden (je nach Gruppe und Terrain)</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Aufenthalt bei Gorillas</dt>
                <dd className="text-gray-700">Maximal 1 Stunde pro Tag und Gruppe</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Mindestgröße Gruppe</dt>
                <dd className="text-gray-700">1 Person (Einzelbuchung möglich)</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Maximale Gruppengröße</dt>
                <dd className="text-gray-700">8 Personen pro Gorilla-Familie täglich</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Mindest­alter</dt>
                <dd className="text-gray-700">15 Jahre</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Buchung über</dt>
                <dd className="text-gray-700">Uganda Wildlife Authority (UWA), lizenzierte Veranstalter</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Buchung empfehlenswert</dt>
                <dd className="text-gray-700">3–6 Monate im Voraus (Hochsaison früher)</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Gorilla-Bestand Uganda</dt>
                <dd className="text-gray-700">459 Berggorillas (Zählung 2018–2020)</dd>
              </div>
            </dl>
          </div>

          {/* H2-1 */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Was kostet ein Gorilla Permit in Uganda?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der offizielle Preis für ein Gorilla Permit in Uganda beträgt 800 US-Dollar pro Person. Dieser Betrag
            wird von der Uganda Wildlife Authority festgelegt und gilt für alle habituierten Gorilla-Familien im
            Bwindi Impenetrable National Park sowie im Mgahinga Gorilla National Park. Im Vergleich mit den
            Nachbarländern Ruanda (1.500 USD) und der Demokratischen Republik Kongo (450 USD) positioniert sich
            Uganda damit im mittleren Preissegment — aber mit einem deutlich größeren Angebot an habituierten
            Familien und Sektoren als beide Alternativen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Permitpreis ist keine willkürliche Zahl. Er spiegelt Jahrzehnte Aufbauarbeit im Bereich
            Gorillaschutz, Habituation neuer Gruppen und Ranger-Infrastruktur wider. Ein erheblicher Anteil der
            Einnahmen fließt direkt in Naturschutzprogramme und in die lokale Bevölkerung — das Modell des
            community-based conservation, das Uganda seit den 1990er-Jahren konsequent verfolgt. Dörfer rund um
            Bwindi erhalten einen festen Prozentsatz der Permit-Einnahmen als Revenue Sharing. Der Hühnerzüchter
            in Buhoma, den ich im Juni 2026 besucht habe, profitiert mittelbar von diesem System: Touristen, die
            Permits kaufen, übernachten in Buhoma, kaufen lokale Produkte und engagieren sich in Gemeinschaftsprojekten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Für Bürger ostafrikanischer Länder (EAC-Gemeinschaft) gelten reduzierte Preise. Ugandische
            Staatsangehörige zahlen einen deutlich günstigeren Tarif. Diese Staffelung ist bewusst gewählt, um
            auch regionale Besucher nicht auszuschließen — fast zwei Drittel aller Besucher kamen in früheren
            Jahren aus den ostafrikanischen und südafrikanischen Nachbarstaaten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wichtig zu wissen: Das Permit ist personengebunden und gilt für genau eine Trekking-Session an einem
            bestimmten Datum. Es ist nicht übertragbar und kann in der Regel nicht kostenfrei storniert werden.
            Bei kurzfristiger Absage — etwa durch Krankheit — gibt es unter Umständen Möglichkeiten zur
            Umbuchung, die aber von der UWA oder dem buchenden Veranstalter einzeln geprüft werden müssen.
            Reisenden wird daher geraten, eine Reiseversicherung mit entsprechendem Deckungsumfang abzuschließen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hinzu kommen Kosten, die nicht im Permit enthalten sind: Unterkunft, Transport zur Parkgrenze,
            Trinkgeld für Ranger und Guides sowie das optionale, aber empfohlene Gepäcktragen durch lokale
            Porter. Diese zusätzlichen Ausgaben können je nach Unterkunftswahl und Anreiseroute zwischen 150
            und mehreren hundert Dollar pro Person betragen. Wer das Trekking über einen Veranstalter bucht,
            erhält oft ein Paketangebot, das Permit, Transfer, Unterkunft und Guide-Service bündelt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ein weiterer Kostenpunkt: Wer am selben Tag mehr als eine Aktivität plant — etwa Gorilla-Trekking
            am Morgen und eine Wanderung zu einem Wasserfall am Nachmittag — muss für die Zusatzaktivitäten
            separate Parkgebühren einplanen. Die Parkeintrittsgbeühr für Bwindi ist im Gorilla Permit
            bereits enthalten und muss nicht extra gezahlt werden.
          </p>

          {/* H2-2 */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Wo und wie bucht man ein Gorilla Permit in Uganda?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gorilla Permits in Uganda werden offiziell über die Uganda Wildlife Authority (UWA) ausgegeben.
            Die Buchung ist direkt über das UWA-Online-Portal möglich, in der Praxis erfolgt sie jedoch häufig
            über lizenzierte Reiseveranstalter, die als autorisierte Reseller fungieren und das Permit als Teil
            eines Gesamtpakets anbieten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer das Permit selbst bucht, benötigt eine gültige E-Mail-Adresse, Passdaten aller Teilnehmer
            sowie eine Kreditkarte für die Online-Zahlung. Nach bestätigter Zahlung erhält man ein
            Bestätigungs-E-Mail mit den Buchungsdetails. Das eigentliche Permit wird am Trekking-Tag im
            jeweiligen Park-Hauptquartier ausgehändigt — in Buhoma, Ruhija, Rushaga oder Nkuringo, je nach
            dem Sektor, für den das Permit ausgestellt ist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Wahl des Sektors ist nicht trivial. Bwindi erstreckt sich über ein weitläufiges Gebiet und
            ist in vier Trekking-Sektoren aufgeteilt: Buhoma im Norden, Ruhija im Osten, Rushaga und
            Nkuringo im Süden. Jeder Sektor beherbergt mehrere habituierte Gorilla-Familien, die verschiedenen
            Schwierigkeitsgrade und Landschaftscharakteren aufweisen. Buhoma gilt als der bekannteste und
            am leichtesten zugängliche Sektor — und ist entsprechend als erster ausgebucht. Rushaga im Süden
            hat die größte Zahl habituierter Familien und bietet somit die meisten täglichen Permit-Slots.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bei der Buchung über einen Veranstalter übernimmt dieser die Permit-Reservierung, koordiniert
            Transport und Unterkunft und stellt in der Regel einen erfahrenen Guide zur Verfügung, der die
            Gruppe vor und während des Trekkings begleitet. Das ist vor allem für Erstbesucher empfehlenswert,
            da Geländebedingungen, Wetterlage und die Position der Gorilla-Gruppen täglich variieren können.
            Ein Guide mit langjähriger Erfahrung weiß, wie man sich den Gorillas nähert, wie man sich verhält
            und was zu tun ist, wenn eine unerwartete Situation entsteht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wann sollte man buchen? Als Faustregel gilt: mindestens drei Monate im Voraus für die Hauptreisemonate
            Juli, August und Dezember. Wer in der Nebensaison (März bis Mai oder November) reist, findet
            gelegentlich auch kurzfristig noch Permits — aber verlässlich ist das nicht. Gerade für Gruppen
            ab vier Personen, die denselben Tag und denselben Sektor wünschen, ist eine frühzeitige Buchung
            unerlässlich. Einzelreisende haben etwas mehr Flexibilität, weil einzelne freie Slots in ohnehin
            gebuchten Gruppen leichter zu vergeben sind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ein praktischer Hinweis aus eigener Beobachtung vor Ort: Die Administration in Buhoma läuft
            professionell, aber papiergebunden. Wer sein Permit auf dem Smartphone vorzeigt, sollte sicherstellen,
            dass das Display hell genug und der Screenshot vollständig gespeichert ist — Mobilfunkempfang
            im Parkgebiet ist unzuverlässig. Eine ausgedruckte Kopie des Buchungsdokuments zu haben ist keine
            schlechte Idee.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zur Zahlungsabwicklung: Die UWA akzeptiert Kreditkarten und bestimmte Mobile-Payment-Methoden.
            Vor Ort in Uganda ist auch Barzahlung möglich, aber Permit-Buchungen über das UWA-Büro in
            Kampala oder direkt am Park-Hauptquartier setzen voraus, dass Slots noch verfügbar sind — was
            ohne Vorausplanung selten der Fall ist.
          </p>

          {/* H2-3 */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Trekking-Ablauf, Gruppen und praktische Vorbereitung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Am Tag des Trekkings versammeln sich alle Permit-Inhaber eines Sektors morgens im Park-Hauptquartier.
            Üblicherweise beginnt das Briefing zwischen 7:30 und 8:00 Uhr. Ranger teilen die Teilnehmer in
            Gruppen auf — pro habituierter Gorilla-Familie maximal acht Personen pro Tag. Diese Begrenzung ist
            kein bürokratisches Konstrukt; sie schützt die Tiere vor Stress und Übertragung von
            Krankheitserregern. Berggorillas sind genetisch dem Menschen sehr nah und daher für menschliche
            Infektionskrankheiten empfänglich.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nach dem Briefing beginnt das eigentliche Trekken. Die Dauer bis zur Gorilla-Gruppe variiert
            erheblich — von etwa einer Stunde in günstigen Fällen bis zu sechs oder acht Stunden in dichtem
            Regenwald. Ranger, die die Familien täglich verfolgen und ihre Position per Funk kommunizieren,
            informieren die Trekking-Guide-Teams vorab über den ungefähren Aufenthaltsort. Aber Gorillas
            bewegen sich nach eigener Logik, und das Gelände im Bwindi — von "undurchdringlich" ("impenetrable")
            kommt der Name — macht jeden Aufstieg zu einer physischen Herausforderung.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sobald die Gruppe die Gorillas findet, beginnt die sogenannte "Kontaktzeit": maximal 60 Minuten
            bei den Tieren. Diese Stunde wird von den meisten Besuchern als unvergesslich beschrieben — und
            es ist schwer, das nüchtern zu sagen, ohne in Marketingsprache zu verfallen. Was ich aus dem
            Gespräch mit Menschen höre, die dieses Erlebnis gemacht haben: Es ist die Stille, die am meisten
            überrascht. Die Gorillas ignorieren die Gruppe weitgehend, fressen, spielen, dösen — und der
            Mensch ist für einen Augenblick Teil der Landschaft, nicht ihr Mittelpunkt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zur körperlichen Vorbereitung: Gute Wanderschuhe mit Knöchelstabilisierung sind Pflicht, keine
            Empfehlung. Der Boden in Bwindi ist feucht, steil und rutschig. Stöcke — oft vor Ort ausleihbar
            oder von Porttern geliehen — helfen erheblich. Wer gesundheitliche Einschränkungen hat, sollte
            dies vorab mit dem buchenden Veranstalter besprechen; manche Familien sind leichter zu erreichen
            als andere, und die Ranger sind erfahren darin, Gruppen mit unterschiedlichem Fitnessniveau
            zu begleiten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Regenzeit (März bis Mai, Oktober bis November) macht das Trekken schwieriger — Wege werden
            schlammig, Überhänge nass — erhöht aber die Wahrscheinlichkeit dichter, grüner Vegetation und
            guter Lichtverhältnisse für Fotos in frühen Morgenstunden. Die Trockenmonate Juni bis September
            und Januar/Februar bieten stabilere Bedingungen und gelten gemeinhin als die bevorzugte Reisezeit.
            Bei meinem Besuch im Juni 2026 war das Wetter in der Buhoma-Region wechselhaft, aber die
            Infrastruktur — Wege, Hauptquartier, Unterkunft — war in gutem Zustand.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Porter können und sollten engagiert werden. Sie tragen schweres Gepäck, kennen den Weg, und ihre
            Vergütung fließt direkt in lokale Haushalte. Das ist kein karitatives Add-on, sondern eine
            strukturelle Einnahmequelle für Familien in der Pufferzone des Parks — ähnlich wie die
            Hühnerzucht, die ich besucht habe. Der Erlös aus einem einzigen Trekking-Tag versorgt
            mehrere Haushalte.
          </p>

          {/* H2-4 */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Der Berggorilla in Uganda: Bestand, Schutzstatus und Bedeutung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uganda beherbergt einen erheblichen Anteil der weltweiten Berggorilla-Population. Die jüngste
            umfassende Bestandserhebung aus den Jahren 2018 bis 2020 dokumentierte 459 Individuen in Uganda —
            ein beachtlicher Anteil der globalen Gesamtpopulation, die auf etwas über 1.000 Tiere geschätzt wird.
            Diese Zahlen sind das Ergebnis jahrzehntelanger Schutzarbeit, die in den frühen 1990er-Jahren mit
            dem Konzept des community-based tourism und der direkten Einbindung der lokalen Bevölkerung begann.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Berggorilla (Gorilla beringei beringei) lebt ausschließlich in den Bergregenwäldern des
            Albertinischen Grabens zwischen Uganda, Ruanda und der Demokratischen Republik Kongo. Das
            bedeutet: Es gibt keinen Zoo auf der Welt, der Berggorillas hält — wer sie sehen will, muss in
            dieses spezifische Gebiet reisen. Das macht das Gorilla-Trekking zu einem der wenigen echten
            Wildtiererlebnisse der Welt, das nicht replizierbar ist. Ein gorilla permit uganda ist buchstäblich
            der einzige Schlüssel zu dieser Begegnung.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Prozess der Habituation — das schrittweise Gewöhnen einer Wildtiergruppe an menschliche
            Präsenz — dauert mehrere Jahre und erfordert täglichen Kontakt durch spezialisierte
            Ranger-Teams. Nicht jede Gorilla-Familie ist habituiert; nur diejenigen, die diesen Prozess
            durchlaufen haben, sind für Trekking-Gruppen zugänglich. Im Bwindi Impenetrable National Park
            sind aktuell mehrere Dutzend Familien habituiert, verteilt über die vier Sektoren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Gorillas gelten offiziell als "gefährdet" (endangered), nicht mehr als "kritisch gefährdet"
            (critically endangered) — eine Verschiebung, die auf den Erfolg der Schutzprogramme zurückzuführen
            ist. Dennoch bleiben die Herausforderungen real: Habitatverlust durch illegale Landnutzung,
            Wildererei, Krankheitsübertragung und die Folgen des Klimawandels bedrohen langfristig den
            Lebensraum. Der Tourismus ist dabei kein Problem, sondern Teil der Lösung — vorausgesetzt, die
            Einnahmen bleiben in der Region und fließen in Schutzmaßnahmen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Uganda Wildlife Authority führt das Permit-System mit einem klaren Ziel: Die Gorillas sollen
            nicht für den Tourismus existieren, sondern der Tourismus soll die Gorillas erhalten. Das ist
            kein Slogan. Es ist die Logik hinter dem Preispunkt von 800 USD — und dahinter, warum die
            Einnahmen nicht im Verwaltungsapparat verschwinden, sondern zumindest anteilig in
            Ranger-Löhne, Habituation neuer Familien und Gemeinschaftsprojekte fließen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            [ZITAT: Guide über seinen ersten Eindruck von der Habituation einer neuen Gorilla-Familie]
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Neben dem klassischen Gorilla-Trekking gibt es in Bwindi auch das sogenannte
            "Gorilla Habituation Experience" (GHEX) — ein Permit für eine Gruppe von vier Personen, die
            bis zu vier Stunden bei einer noch in der Habituation befindlichen Familie verbringen darf.
            Dieses Permit ist deutlich teurer (1.500 USD, Stand 2026), aber für Menschen, die ein tieferes
            Erlebnis suchen, besonders reizvoll. Es ist auch deutlich seltener verfügbar.
          </p>

          {/* H2-5 */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Mgahinga als Alternative: Permit für den kleineren Gorilla-Park
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Neben Bwindi ist der Mgahinga Gorilla National Park der zweite Ort in Uganda, an dem
            Berggorillas getrekkt werden können. Mgahinga liegt im äußersten Südwesten Ugandas, direkt an
            der Grenze zu Ruanda und der DR Kongo, eingebettet in die Virunga-Vulkane. Der Park ist
            erheblich kleiner als Bwindi — etwa 33 Quadratkilometer — und beherbergt nur eine habituierte
            Gorilla-Gruppe: die Nyakagezi-Familie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Permitpreis ist identisch mit Bwindi: 800 USD. Die Anzahl der täglich verfügbaren Permits
            ist jedoch aufgrund der einzelnen Gorilla-Familie auf acht begrenzt — und da die Nyakagezi-Gruppe
            das gesamte Dreiländereck nutzt und gelegentlich nach Ruanda oder in die DR Kongo wechselt,
            ist das Trekking nicht an jedem Tag garantiert. Wer extra nach Mgahinga reist und die Gorillas
            nicht antrifft, weil die Familie gerade jenseits der Grenze ist, bekommt das Permit zurückerstattet
            — aber die Anreise war umsonst. Dieses Risiko ist bei der Planung zu berücksichtigen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mgahinga bietet dafür ein anderes landschaftliches Erlebnis: Das Trekking führt durch offene
            Bambuszone und später in den Bergnebelwald, umgeben von den Vulkangipfeln Muhabura, Gahinga
            und Sabinyo. Wer in Bwindi die dichte, undurchdringliche Regenwaldatmosphäre sucht, und wer in
            Mgahinga das weiträumigere Vulkanpanorama — beide Erfahrungen sind eigenständig und lohnenswert.
            Manche Reisende kombinieren beide Parks in einer Südwestschleife, die auch den
            Queen Elizabeth National Park einschließt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Erreichbarkeit ist ein weiterer Faktor. Mgahinga liegt näher an der ruandischen
            Grenzstadt Kisoro, ist aber von Kampala aus weiter entfernt als Bwindi-Buhoma. Wer über
            Kigali einreist, hat mit Mgahinga einen geografisch günstigeren Einstieg. Wer aus Kampala
            kommt und Zeit hat, fährt direkt nach Buhoma oder in einen der südlichen Bwindi-Sektoren.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus der Bwindi-Region" />

          {/* FAQ */}
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-14 mb-6">
            Häufige Fragen zum Gorilla Permit Uganda
          </h2>
          <div className="divide-y divide-gray-200">
            <FaqItem
              frage="Kann man ein Gorilla Permit Uganda kurzfristig buchen?"
              antwort="Kurzfristige Buchungen sind möglich, aber riskant. In der Hochsaison (Juli–August, Dezember) sind Permits oft Monate im Voraus ausgebucht. In der Nebensaison gibt es gelegentlich freie Slots für Buchungen wenige Wochen im Voraus — aber das ist nicht planbar. Wer den Termin flexibel halten kann, sollte trotzdem frühzeitig buchen und bei Bedarf umplanen. Veranstalter haben manchmal Zugang zu Last-Minute-Permits aus Stornierungen."
            />
            <FaqItem
              frage="Was passiert, wenn ich mein Permit nicht nutzen kann?"
              antwort="Die UWA hat eine eigene Stornierungsrichtlinie, die sich im Laufe der Zeit geändert hat. Grundsätzlich gilt: Stornierungen bis zu einer bestimmten Frist vor dem Trekking-Datum sind mit Teilerstattung möglich, kurzfristige Absagen werden meist nicht erstattet. Eine Reiseversicherung, die speziell Aktivitätsstornierungen abdeckt, ist dringend empfohlen. Umbuchungen auf ein anderes Datum sind manchmal gegen eine Umbuchungsgebühr möglich."
            />
            <FaqItem
              frage="Gibt es einen Unterschied zwischen Bwindi Buhoma und Rushaga?"
              antwort="Ja, erheblich. Buhoma (Norden) ist der bekannteste Sektor, mit gut ausgebauter Infrastruktur und etwas einfacherem Terrain. Rushaga (Süden) hat die meisten habituierten Familien — darunter auch die einzige Gruppe für das Gorilla Habituation Experience — und ist für Gruppen interessant, die flexibler disponieren wollen. Ruhija und Nkuringo bieten wildere, steilere Routen mit weniger Betrieb. Die Wahl hängt von Unterkunft, Fitnessniveau und Verfügbarkeit ab."
            />
            <FaqItem
              frage="Gilt das Permit nur für einen Tag oder kann man mehrfach trekken?"
              antwort="Ein Gorilla Permit gilt für genau eine Trekking-Session an einem bestimmten Tag und bei einer bestimmten Gorilla-Familie. Wer mehrfach trekken möchte — an verschiedenen Tagen oder in verschiedenen Sektoren — benötigt jeweils ein separates Permit. Das ist ausdrücklich erlaubt und von manchen Reisenden bewusst geplant, die verschiedene Familien und Landschaftstypen erleben wollen."
            />
            <FaqItem
              frage="Ist das Gorilla-Trekking körperlich anspruchsvoll?"
              antwort="Das variiert stark je nach Gorilla-Gruppe und deren Tagesposition. Im besten Fall ist es ein moderater Waldspaziergang von einer Stunde, im schlimmsten ein mehrstündiger, steiler Aufstieg durch dichtes Unterholz. Gute Wanderschuhe, ausreichend Wasser und eine gewisse Grundkondition sind Voraussetzung. Wer gesundheitliche Einschränkungen hat, sollte dies beim Buchenden angeben — Ranger und Guides sind erfahren und passen das Tempo an. Die meisten gesunden Erwachsenen bewältigen das Trekking ohne Probleme."
            />
          </div>

          {/* Interne Links */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
              Weiterführende Seiten zu Gorilla-Trekking und Uganda
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li>
                <a
                  href="/gorilla-trekking"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Gorilla Trekking Uganda</span>
                  <span className="block text-gray-500 mt-0.5">Ablauf, Vorbereitung, Erfahrungen</span>
                </a>
              </li>
              <li>
                <a
                  href="/nationalparks/bwindi"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Bwindi Impenetrable National Park</span>
                  <span className="block text-gray-500 mt-0.5">Sektoren, Fauna, Anreise</span>
                </a>
              </li>
              <li>
                <a
                  href="/tiere/berggorilla"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Der Berggorilla</span>
                  <span className="block text-gray-500 mt-0.5">Biologie, Verhalten, Schutzstatus</span>
                </a>
              </li>
              <li>
                <a
                  href="/gorilla-permit-verfuegbarkeit"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Gorilla Permit Verfügbarkeit</span>
                  <span className="block text-gray-500 mt-0.5">Wann sind Permits noch frei?</span>
                </a>
              </li>
              <li>
                <a
                  href="/gorilla-permit-kosten"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Permit Kosten und Buchung</span>
                  <span className="block text-gray-500 mt-0.5">Buchungswege, Vorlaufzeiten und Erfahrungsbericht</span>
                </a>
              </li>
              <li>
                <a
                  href="/beste-reisezeit-uganda"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Beste Reisezeit Uganda</span>
                  <span className="block text-gray-500 mt-0.5">Klima, Saisons, Monate im Vergleich</span>
                </a>
              </li>
              <li>
                <a
                  href="/regionen/buhoma"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Region Buhoma</span>
                  <span className="block text-gray-500 mt-0.5">Unterkünfte, Gemeinschaft, Lodges</span>
                </a>
              </li>
              <li>
                <a
                  href="/gorilla-trekking-erfahrungsbericht"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Gorilla Trekking Erfahrungsbericht</span>
                  <span className="block text-gray-500 mt-0.5">Persönliche Eindrücke vom Trekking</span>
                </a>
              </li>
              <li>
                <a
                  href="/nachhaltiger-tourismus-uganda"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Nachhaltiger Tourismus Uganda</span>
                  <span className="block text-gray-500 mt-0.5">Wie Reisen die Region stärkt</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </>
  )
}
