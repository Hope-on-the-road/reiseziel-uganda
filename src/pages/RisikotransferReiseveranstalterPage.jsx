import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'risikotransfer-reiseveranstalter'

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

export default function RisikotransferReiseveranstalterPage() {
  return (
    <>
      <Head
        title="Risikotransfer bei Uganda-Pauschalreisen: Was Reiseveranstalter tragen"
        description="Wer trägt welches Risiko bei Uganda-Pauschalreisen? Gorilla-Permit, Force-majeure, Flugverspätungen, Gesundheitsrisiken — Verteilung zwischen Reisenden, Veranstalter und Anbieter."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">

        {/* Hero-Bild */}
        <figure className="w-full max-h-96 overflow-hidden bg-gray-100">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Blick auf den Bwindi Impenetrable Forest, Uganda"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <figcaption className="text-xs text-gray-500 px-4 py-1 bg-gray-50">
            Bwindi Impenetrable Forest, Uganda — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Risikotransfer bei Uganda-Pauschalreisen: Wer trägt was?
          </h1>

          {/* Einleitung */}
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Wer eine Reise nach Uganda als Pauschalreise bucht, schließt mehr als einen Reisevertrag ab. Er überträgt
            einen erheblichen Teil der Planungsrisiken auf den Veranstalter — bewusst oder nicht. Das betrifft
            Flugverspätungen, Ausfall von Unterkünften, politische Entwicklungen und, in Uganda besonders relevant,
            das Risiko eines nicht nutzbaren Gorilla-Permits. Ein Permit kostet 800 US-Dollar pro Person und ist
            datumsfixiert. Was passiert, wenn der Trekking-Tag ausfällt?
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Antwort hängt davon ab, ob man als Individualtourist gebucht hat oder über einen Reiseveranstalter,
            der rechtlich als Pauschalreise organisiert. Der Unterschied ist nicht akademisch: Bei einer Pauschalreise
            haftet der Veranstalter für das Gesamtpaket. Bei einer Eigenorganisation trägt der Reisende das Risiko
            selbst — und muss sich über Versicherungen absichern oder darauf vertrauen, dass die Anbieter kulant
            reagieren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Bei der Organisation von Uganda-Touren haben wir erlebt, wie vielfältig diese Risiken in der Praxis
            sind: ein Permit, das wegen starker Regenfälle nicht genutzt werden konnte; ein Gästehaus, das kurzfristig
            stornierte und keine Alternativen benannte; eine Flugverbindung via Nairobi, die eine gesamte Anreisekette
            zum Kippen brachte. Diese Seite ordnet diese Erfahrungen in einen rechtlichen und praktischen Rahmen ein.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">Risikotransfer auf einen Blick</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="font-semibold text-jungle-800">Rechtlicher Rahmen</dt>
                <dd className="text-gray-700">EU-Pauschalreiserichtlinie — Veranstalter trägt Gesamthaftung</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Größter Einzelkostenposten</dt>
                <dd className="text-gray-700">Gorilla Permit: 800 USD pro Person und Trekking</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Gesundheitsrisiken Uganda</dt>
                <dd className="text-gray-700">Malaria, Gelbfieber (Impfpflicht), Höhenkrankheit (Rwenzori)</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Force-majeure-Beispiele</dt>
                <dd className="text-gray-700">Ebola-Ausbruch 2022 (Mubende), COVID-19-Grenzschließungen</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Flugrisiko Uganda</dt>
                <dd className="text-gray-700">Entebbe meist über Nairobi, Dubai oder Amsterdam — Delay-Ketten möglich</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Unterkunftsrisiko</dt>
                <dd className="text-gray-700">Ugandische Lodges oft mit Vollvorauszahlung — kein Selbstkostenrisiko</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Empfohlene Absicherung</dt>
                <dd className="text-gray-700">Reiseversicherung mit Stornoschutz und Aktivitäts­abdeckung</dd>
              </div>
              <div>
                <dt className="font-semibold text-jungle-800">Permit-Umbuchung</dt>
                <dd className="text-gray-700">UWA erlaubt wetterbedingte Verschiebung — einzeln zu klären</dd>
              </div>
            </dl>
          </div>

          {/* H2-1: Rechtlicher Rahmen */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Was die Pauschalreiseregelung für Uganda-Buchungen bedeutet
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer in Deutschland eine Reise als Pauschalpaket bucht — also mindestens zwei Reiseleistungen wie Flug
            und Unterkunft kombiniert —, schließt einen Reisevertrag mit dem Veranstalter ab. Dieser haftet für die
            vollständige Erbringung aller gebuchten Leistungen. Fällt eine Leistung aus, muss der Veranstalter eine
            gleichwertige Ersatzleistung anbieten oder erstatten. Das gilt auch dann, wenn der Ausfall bei einem
            lokalen Partneranbieter liegt — einem Hotel, einem Transferservice oder dem Gorilla-Trekking-Operator
            vor Ort.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diese Haftungskonstruktion ist für den Reisenden komfortabel, aber für den Veranstalter mit erheblichem
            Risiko verbunden. Ein Uganda-Spezialist, der Gorilla-Permits im Paket verkauft, trägt das Ausfallrisiko
            dieser Permits — auch wenn die Uganda Wildlife Authority als staatliche Behörde die Konditionen für
            Umbuchungen und Erstattungen selbst festlegt und diese Konditionen nicht immer großzügig sind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In der Praxis bedeutet das: Seriöse Veranstalter kalkulieren dieses Risiko in ihren Preisen ein und
            arbeiten mit lokalen Anbietern zusammen, die eine nachgewiesene Zuverlässigkeit haben. Günstige
            Uganda-Pakete, die im Preisvergleich deutlich unterhalb des Marktüblichen liegen, sparen häufig an
            genau dieser Stelle — entweder durch Anbieter mit schlechtem Track Record oder durch unklare
            Stornobedingungen im Kleingedruckten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer als Individualtourist bucht — Flug, Hotel und Permit separat und eigenständig —, hat keinen
            Veranstalter als Haftungspartner. Jeder Vertrag wird einzeln mit dem jeweiligen Anbieter geschlossen.
            Das Risiko ist damit vollständig beim Reisenden. Für eine Uganda-Reise, die mehrere tausend Euro
            umfasst und ein 800-Dollar-Permit enthält, ist das eine relevante Abwägung.
          </p>

          {/* H2-2: Risikotypen */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Welche Risiken bei Uganda-Reisen besonders ins Gewicht fallen
          </h2>

          <h3 className="font-display text-xl font-semibold text-gray-800 mt-8 mb-3">
            Gorilla-Permit: das größte Einzelrisiko
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mit 800 US-Dollar pro Person ist das Gorilla-Trekking-Permit der teuerste Einzelposten einer
            Uganda-Reise. Das Permit ist auf ein spezifisches Datum und eine spezifische Gorilla-Gruppe ausgestellt —
            wer erkrankt, am Tag des Trekkings keine Genehmigung nutzen kann oder wegen Witterungsbedingungen
            umplanen muss, steht vor einer schwierigen Situation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Uganda Wildlife Authority erlaubt unter bestimmten Bedingungen eine wetterbedingte Verschiebung des
            Trekking-Datums. Ob und wie das im Einzelfall funktioniert, hängt von der Verfügbarkeit an einem
            Ausweichdatum und der Kommunikation mit dem buchenden Operator ab. Bei der direkten Buchung über UWA
            läuft diese Abstimmung über das UWA-Büro in Kampala; bei Buchung über einen Veranstalter übernimmt
            dieser die Koordination. Wer ein eigenes Permit eigenständig gebucht hat, muss selbst klären, welche
            Optionen bestehen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bei der Organisation von Touren haben wir erlebt, dass manche Permits nach Abstimmung mit lokalen
            Partnern auf ein anderes Datum verschoben werden konnten — in anderen Fällen war das nicht möglich,
            weil die gewünschte Gorilla-Gruppe an dem Alternativdatum bereits ausgebucht war. Das Permit-Risiko
            ist damit real und sollte durch eine Reiseversicherung mit expliziter Aktivitätsabdeckung abgesichert
            werden. Normale Reiserücktrittsversicherungen decken den Permit-Ausfall oft nicht automatisch ab.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gorilla-Permits sollten ausschließlich direkt über die Uganda Wildlife Authority oder über zertifizierte
            Operatoren mit UWA-Lizenz gebucht werden. Drittanbieter ohne offizielle Lizenz können keine gültigen
            Permits ausstellen — das Risiko eines ungültigen oder gefälschten Dokuments besteht bei nicht
            autorisierten Buchungsplattformen.
          </p>

          <h3 className="font-display text-xl font-semibold text-gray-800 mt-8 mb-3">
            Politisches Risiko und Sicherheitslage
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uganda selbst gilt im ostafrikanischen Vergleich als politisch stabil. Die Hauptreisegebiete —
            Kampala, Bwindi, Queen Elizabeth National Park, Murchison Falls — sind für internationale Touristen
            gut erschlossen und werden regelmäßig ohne besondere Sicherheitsvorfälle bereist. Dennoch grenzt Uganda
            an zwei der volatilsten Regionen des Kontinents: im Westen an die Demokratische Republik Kongo, im
            Norden an den Südsudan. Grenznahe Gebiete im Westen Ugandas können je nach aktueller Lage in den
            östlichen DRC-Provinzen als erhöht sensitiv eingestuft sein.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Reiseveranstalter sind verpflichtet, über bekannte Sicherheitsrisiken im Reisegebiet zu informieren.
            Die aktuellen Reisehinweise des Auswärtigen Amtes sind die maßgebliche Grundlage dafür. Ändert sich
            die Sicherheitslage während einer bereits angetretenen Reise erheblich, entstehen für Pauschalreisende
            Rechte auf Umbuchung oder Rückabwicklung — Individualreisende müssen eigenständig handeln.
          </p>

          <h3 className="font-display text-xl font-semibold text-gray-800 mt-8 mb-3">
            Gesundheitsrisiken: Malaria, Gelbfieber, Höhenkrankheit
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Malaria ist in Uganda ganzjährig ein Gesundheitsrisiko. Die Hauptübertragungsregionen sind
            Tieflandgebiete und Seeuferbereiche. Wer ausschließlich in höheren Lagen reist — etwa im Bwindi
            (1.800–2.600 m) oder im Rwenzori-Gebirge — hat ein deutlich niedrigeres Malaria-Risiko, aber kein
            Nullrisiko. Eine Malariaprophylaxe ist in Absprache mit einem Tropenmediziner zu empfehlen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Gelbfieber-Impfung ist für Uganda zwingend vorgeschrieben. Ohne gültigen Impfnachweis (Gelbes
            Heft / digitales Impfzertifikat) kann die Einreise verweigert werden. Wer über ein Transitland ohne
            Gelbfieber-Anforderung fliegt und direkt in Entebbe ankommt, sollte die Impfpflicht nicht unterschätzen —
            die ugandische Grenzkontrolle prüft den Nachweis aktiv.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Im Rwenzori-Gebirge, das in Uganda bis auf über 5.000 Meter ansteigt, besteht bei mehrtägigen
            Trekkingtouren ein Risiko für Höhenkrankheit. Das betrifft hauptsächlich Bergsteiger, die auf die
            höheren Gipfel zielen, weniger Kurzausflüge in die unteren Zonen. Veranstalter, die Rwenzori-Touren
            anbieten, sind gut beraten, Reisende vorab über Symptome und Verhaltensregeln zu informieren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle Gesundheitsrisiken gehören zu den Informationspflichten eines Pauschalreiseveranstalters. Wer
            als Individualtourist reist, sollte vor der Buchung eine reisemedizinische Beratung in Anspruch nehmen.
            Mehr zur Malariaprävention findet sich auf der <a href="/reiseplanung/malaria" className="text-jungle-700 underline hover:text-jungle-900">Uganda-Malaria-Seite</a>.
          </p>

          <h3 className="font-display text-xl font-semibold text-gray-800 mt-8 mb-3">
            Force majeure: Ebola, COVID und andere außerordentliche Ereignisse
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uganda hat in der jüngsten Vergangenheit erlebt, wie schnell außerordentliche Ereignisse den
            Tourismus unterbrechen können. Der Ebola-Ausbruch im Distrikt Mubende im Jahr 2022 führte zu
            vorübergehenden Einschränkungen und erhöhter internationaler Aufmerksamkeit, die Buchungen für
            mehrere Monate dämpfte. COVID-19 hatte in Uganda wie weltweit drastische Auswirkungen, mit
            Grenzschließungen und Einreisestopps.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bei anerkannten Force-majeure-Ereignissen können Pauschalreisende in der Regel kostenfrei vom Vertrag
            zurücktreten. Was als Force majeure anerkannt wird und wie schnell Erstattungen erfolgen, ist in der
            Praxis aber oft Gegenstand von Auseinandersetzungen zwischen Reisenden und Veranstaltern. Die
            COVID-Pandemie hat das deutlich gezeigt. Wer eine Uganda-Reise plant, sollte im Vertrag und in den
            Versicherungsbedingungen explizit prüfen, wie Force-majeure-Fälle behandelt werden.
          </p>

          <h3 className="font-display text-xl font-semibold text-gray-800 mt-8 mb-3">
            Flugrisiken und Verbindungsketten nach Entebbe
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Entebbe International Airport ist der einzige internationale Flughafen Ugandas. Direktverbindungen aus
            Deutschland gibt es nicht; der Weg führt über Nairobi, Dubai, Addis Abeba, Amsterdam oder Istanbul.
            Jede Umsteigeverbindung birgt das Risiko einer Delay-Kette: Verspätung auf dem Hinflug, verpasster
            Anschluss, Neubuchung, verspätete Ankunft — und damit möglicherweise ein verpasster Trekking-Tag.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bei Pauschalreisen mit Flug liegt das Risiko von Flugverspätungen grundsätzlich beim Veranstalter,
            wenn er die Flüge als Teil des Pakets gebucht hat. Bei eigenständig gebuchten Flügen greift das
            europäische Fluggastrechte-Regime: ab einer Verspätung von bestimmten Stunden entstehen
            Entschädigungsansprüche gegenüber der Airline, aber kein Anspruch auf Umbuchung von
            Fremdleistungen wie einem Gorilla-Permit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            [RECHERCHE NOETIG: durchschnittliche Verspätungsrate auf den Uganda-relevanten Umsteigeverbindungen
            via Nairobi und Dubai]
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eine Strategie, die professionelle Veranstalter verwenden, ist das Trip-Chaining: Puffertage werden
            bewusst in den Ablauf eingebaut, sodass eine Verzögerung an einem Tag nicht automatisch die gesamte
            Folgeplanung gefährdet. Wer ein Gorilla-Permit für den ersten Tag nach der Ankunft gebucht hat,
            trägt ein unnötig hohes Risiko — eine Nacht Puffer in Kampala oder Entebbe vor dem Beginn des
            eigentlichen Programms ist eine einfache und wirksame Absicherung.
          </p>

          <h3 className="font-display text-xl font-semibold text-gray-800 mt-8 mb-3">
            Unterkunftsrisiken und ugandische Lodges
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ugandische Lodges, insbesondere im Umfeld des Bwindi Impenetrable National Park, arbeiten häufig mit
            vollständiger Vorauszahlung. Wer direkt bucht, zahlt den gesamten Betrag vor der Reise — ohne die
            Absicherung eines Kreditkarten-Chargebacks oder eines Drittveranstalters. Stornierungen durch die
            Lodge sind selten, kommen aber vor. Bei Pauschalbuchungen liegt die Haftung für diesen Fall beim
            Veranstalter; er muss eine gleichwertige Unterkunft bereitstellen oder den Preisunterschied erstatten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Qualitätskontrolle bei lokalen Anbietern ist ein wichtiges Kriterium bei der Wahl eines
            Veranstalters. Organisationen wie NatureUganda, die Uganda Wildlife Authority und das International
            Gorilla Conservation Programme (IGCP) setzen Standards für Naturschutz-Operatoren. Veranstalter, die
            mit zertifizierten oder langfristig geprüften Partnern arbeiten, reduzieren das Ausfallrisiko bei
            Unterkünften und lokalen Diensten erheblich.
          </p>

          {/* Inline-Bild */}
          <figure className="my-8 rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125464168_l7rh.jpg"
              alt="Lokaler Transportweg in der Bwindi-Region, Uganda — Teil der Reiseinfrastruktur"
              className="w-full object-cover max-h-72"
              loading="lazy"
            />
            <figcaption className="text-xs text-gray-500 px-4 py-2 bg-gray-50">
              Infrastruktur in der Bwindi-Region — Foto: Mark Suer
            </figcaption>
          </figure>

          {/* H2-3: Risikoabsicherung */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Wie man sich als Reisender absichert
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eine Reiseversicherung ist für Uganda-Reisen keine optionale Ergänzung, sondern eine praktische
            Notwendigkeit. Dabei kommt es auf den genauen Leistungsumfang an. Standardpolicen decken oft
            Krankheitsbedingte Stornierungen und Reiseabbrüche ab, aber nicht den Ausfall von separat gebuchten
            Aktivitäten wie einem Gorilla-Permit. Wer ein 800-Dollar-Permit selbst gebucht hat, sollte
            explizit prüfen, ob die Versicherung diesen Posten bei krankheitsbedingtem Ausfall erstattet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Folgende Punkte sollten in der Police abgedeckt sein oder explizit mit dem Versicherer geklärt werden:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 text-sm">
            <li>Stornoschutz bei Krankheit — auch für bereits gezahlte Permit-Kosten</li>
            <li>Reiseabbruchschutz für den Fall, dass die Reise vorzeitig beendet werden muss</li>
            <li>Auslandskrankenversicherung mit Rücktransport (Uganda hat begrenzten medizinischen Hochleistungsbereich)</li>
            <li>Deckung bei Force-majeure-Ereignissen — inklusive Epidemien, wenn möglich</li>
            <li>Aktivitätsschutz für Gorilla-Trekking als Hochrisikoaktivität, sofern die Police das einschränkt</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer über einen Veranstalter bucht, hat durch die Pauschalreiseregelung bereits einen strukturellen
            Schutz. Dennoch bleibt eine private Reiseversicherung sinnvoll, weil Erstattungsprozesse gegenüber
            dem Veranstalter Zeit brauchen und Gesundheitskosten im Ausland sofort anfallen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trip-Chaining ist eine weitere praktische Methode zur Risikostreuung. Wer Uganda-Touren plant,
            kann die Reise so strukturieren, dass einzelne ausgefallene Elemente — ein verpasstes Permit,
            eine Verspätung, ein ausgefallener Transfer — durch eingebaute Flexibilitätspuffer aufgefangen
            werden. Das bedeutet konkret: Ankunfts-Puffertag vor dem ersten Permit-Termin, alternative
            Aktivitäten an Tagen mit hoher Wetterabhängigkeit, und mehrere Permit-Tage in verschiedenen
            Sektoren, wenn das Budget es zulässt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mehr zur Reisekostenplanung insgesamt findet sich auf der <a href="/reiseplanung/kosten" className="text-jungle-700 underline hover:text-jungle-900">Kostenseite für Uganda-Reisen</a>.
          </p>

          {/* H2-4: Wie Veranstalter kalkulieren */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">
            Wie seriöse Veranstalter mit Uganda-Risiken umgehen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer professionell Uganda-Touren anbietet, muss die beschriebenen Risiken in seine Kalkulation
            einpreisen. Das hat direkte Auswirkungen auf den Endpreis. Ein Uganda-Paket eines erfahrenen
            Anbieters ist teurer als eine Eigenorganisation mit denselben Einzelleistungen — weil der Anbieter
            Risikorücklagen hält, mit vertrauenswürdigen lokalen Partnern zusammenarbeitet und im Schadensfall
            handlungsfähig bleibt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Konkret bedeutet das: Ein guter Veranstalter hat Absprachen mit lokalen Lodges über Umbuchungsflexibilität,
            kennt die UWA-Prozesse für Permit-Verschiebungen, hat Nothilfekapazitäten für medizinische Fälle und
            ist mit der Sicherheitslage in den Bereichen vertraut, die seine Gäste bereisen. Diese Infrastruktur
            kostet Geld und schlägt sich im Preis nieder.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Frage, ob ein Veranstalter diese Standards erfüllt, lässt sich an konkreten Kriterien prüfen:
            Wie lange ist er spezialisiert auf Uganda? Hat er nachweisbare Partnerschaften mit zertifizierten
            lokalen Anbietern? Gibt es klare Vertragsbedingungen für Force-majeure-Fälle? Wird auf die
            Notwendigkeit einer Reiseversicherung hingewiesen? Diese Punkte sind keine Garantien, aber
            belastbare Indikatoren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            [RECHERCHE NOETIG: Statistik zu Stornoquoten bei Uganda-Pauschalreisen, Permit-Ausfallraten durch
            Wetterbedingte Absagen in Bwindi]
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer einen Veranstalter für eine Uganda-Pauschalreise wählt, findet auf der <a href="/pauschalreisen-uganda" className="text-jungle-700 underline hover:text-jungle-900">Übersichtsseite zu Pauschalreisen Uganda</a> weitere Hinweise.
            Zur Sicherheitslage gibt es eine gesonderte Seite im Bereich <a href="/reiseplanung/sicherheit" className="text-jungle-700 underline hover:text-jungle-900">Reiseplanung: Sicherheit</a>.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Uganda-Reise: Eindrücke aus der Planung" />

          {/* FAQ */}
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-14 mb-6">
            Häufige Fragen zum Risikotransfer bei Uganda-Pauschalreisen
          </h2>
          <div className="divide-y divide-gray-200">
            <FaqItem
              frage="Wer zahlt, wenn mein Gorilla-Permit durch schlechtes Wetter ausfällt?"
              antwort="Das hängt davon ab, wie das Permit gebucht wurde. Bei einer Pauschalreise über einen Veranstalter liegt die Verantwortung für eine Alternativlösung beim Veranstalter — er muss entweder eine Umbuchung auf ein anderes Datum organisieren oder Ersatz anbieten. Wer das Permit eigenständig über UWA gebucht hat, muss direkt mit UWA klären, ob eine Verschiebung möglich ist. Eine Reiseversicherung mit expliziter Aktivitätsabdeckung zahlt in der Regel nur bei krankheitsbedingtem Ausfall, nicht bei wetterbedingten Verschiebungen — das ist im Einzelfall zu prüfen."
            />
            <FaqItem
              frage="Bin ich als Pauschalreisender bei einem Ebola-Ausbruch in Uganda abgesichert?"
              antwort="Grundsätzlich ja: Wenn ein außerordentliches Ereignis wie ein Ebola-Ausbruch eine sichere Durchführung der Reise verhindert, haben Pauschalreisende das Recht, kostenfrei zurückzutreten. Voraussetzung ist, dass das Ereignis das konkrete Reisegebiet betrifft oder das Auswärtige Amt eine Reisewarnung ausspricht. Individualtouristen müssen eigenständig handeln — oft auf Basis von Airline- und Hotelstornokonditionen. Ob und in welchem Umfang die Reiseversicherung greift, ist von den genauen Vertragsbedingungen abhängig."
            />
            <FaqItem
              frage="Welche Versicherung deckt das Gorilla-Permit bei krankheitsbedingtem Ausfall ab?"
              antwort="Standardmäßige Reiserücktrittsversicherungen decken den Ausfall ab, wenn eine Krankschreibung durch einen Arzt vorliegt und die Reise vollständig oder teilweise nicht angetreten wird. Ob ein einzelnes Permit — das formal nicht Teil einer Pauschalreise ist — als erstattungsfähige Reiseleistung gilt, variiert nach Versicherer. Es empfiehlt sich, vor der Buchung explizit beim Versicherer anzufragen, ob Gorilla-Permits als abgedeckte Aktivitätskosten gelten. Manche Versicherer bieten spezielle Outdoor- oder Abenteuerreise-Pakete, die solche Positionen einschließen."
            />
            <FaqItem
              frage="Wie viel Pufferzeit sollte man bei der Anreise nach Entebbe einplanen?"
              antwort="Mindestens eine Nacht vor dem ersten zeitkritischen Programmpunkt — also vor dem ersten Gorilla-Permit-Termin oder einem gebuchten Transfer in entlegene Gebiete. Bei Verbindungen via Nairobi oder Dubai ist das Risiko eines Missed-Connection-Szenarios real genug, um diesen Puffer sinnvoll zu machen. Wer am Tag der Ankunft direkt in einen langen Transfer startet, lebt gefährlich, wenn der Zubringer-Flug auch nur eine Stunde Verspätung hat."
            />
            <FaqItem
              frage="Was bedeutet die Informationspflicht des Veranstalters für Malaria und Gelbfieber?"
              antwort="Reiseveranstalter, die Uganda-Touren verkaufen, sind verpflichtet, auf bekannte Gesundheitsrisiken im Reisegebiet hinzuweisen — dazu gehören Malaria, die Pflichtimpfung gegen Gelbfieber sowie das Höhenrisiko auf Touren ins Rwenzori-Gebirge. Diese Information muss vor Vertragsabschluss erfolgen. Fehlt sie und entsteht dem Reisenden dadurch ein Schaden, kann das haftungsrelevant sein. Als Reisender sollte man diese Hinweise aktiv einfordern und eine reisemedizinische Beratung durch einen Arzt einholen — unabhängig davon, ob der Veranstalter informiert hat."
            />
          </div>

          {/* Interne Links */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
              Weiterführende Seiten zur Uganda-Reiseplanung
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li>
                <a
                  href="/pauschalreisen-uganda"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Pauschalreisen Uganda</span>
                  <span className="block text-gray-500 mt-0.5">Veranstalter, Pakete, Leistungsvergleich</span>
                </a>
              </li>
              <li>
                <a
                  href="/reiseplanung/sicherheit"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Sicherheit in Uganda</span>
                  <span className="block text-gray-500 mt-0.5">Aktuelle Lage, Reisehinweise, Grenzregionen</span>
                </a>
              </li>
              <li>
                <a
                  href="/gorilla-permit-kosten"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Gorilla Permit Kosten</span>
                  <span className="block text-gray-500 mt-0.5">Preise, Buchung, Stornobedingungen</span>
                </a>
              </li>
              <li>
                <a
                  href="/reiseplanung/kosten"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Reisekosten Uganda</span>
                  <span className="block text-gray-500 mt-0.5">Budget, Kalkulation, Erfahrungswerte</span>
                </a>
              </li>
              <li>
                <a
                  href="/reiseplanung/malaria"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Malaria in Uganda</span>
                  <span className="block text-gray-500 mt-0.5">Prophylaxe, Risikozonen, Tipps vor Ort</span>
                </a>
              </li>
              <li>
                <a
                  href="/gorilla-permit-preise"
                  className="block p-3 rounded-lg border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
                >
                  <span className="font-semibold text-jungle-800">Gorilla Permit Preise</span>
                  <span className="block text-gray-500 mt-0.5">800 USD Permitpreis, Buchungswege, Vergleich</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </main>
    </>
  )
}
