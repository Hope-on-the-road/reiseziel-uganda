import { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from '../components/seo/Head.jsx'
import { FaqJsonLd } from '../components/seo/JsonLd.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'unternehmertum-tourismusziele-buhoma'

export default function UnternehmertumTourismusPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Warum ist Unternehmertum in ländlichen Tourismusorten besonders schwierig?',
      a: 'Ländliche Tourismusdörfer wie Buhoma kämpfen mit strukturellen Problemen: fehlender Zugang zu Kleinkrediten, fehlende Bankinfrastruktur, saisonale Einnahmen und ein schmales lokales Netzwerk. Wer ein Geschäft eröffnen möchte, braucht Startkapital – doch Mikrofinanzinstitutionen sind oft nicht vor Ort, und die Anforderungen übersteigen die Möglichkeiten der meisten Bewerber.',
    },
    {
      q: 'Welche Tourismusjobs entstehen lokal in Buhoma?',
      a: 'Die wichtigsten Beschäftigungsfelder sind Ranger und Tracker (UWA), Porter für Gorilla-Treks, Guides für Naturführungen, Lodgepersonal (Kochen, Reinigung, Garten), Handwerk und Souvenirverkauf sowie Transport. Hinzu kommen indirekte Jobs in der Versorgungskette: Lebensmittellieferanten für Lodges, Wäscheservice und lokale Baufirmen bei Infrastrukturprojekten.',
    },
    {
      q: 'Wie profitieren lokale Unternehmer vom Gorilla-Tourismus?',
      a: 'Gorilla-Permits ziehen kaufkräftige Besucher an, die bereit sind, auch für Unterkunft, Verpflegung und Zusatztouren zu zahlen. Für lokale Unternehmer bedeutet das ein stabiles Grundrauschen an Nachfrage – allerdings stark saisonal geprägt. Die Trockenzeiten (Juni–September und Dezember–Februar) sind Hochsaison; in den Regenmonaten gehen Besucher und Einnahmen zurück. Stabile Jahreseinkommen aufzubauen erfordert deshalb Diversifikation.',
    },
    {
      q: 'Gibt es Förderprogramme für lokale Unternehmer in Bwindi-Dörfern?',
      a: 'Ja, mehrere Organisationen sind aktiv: Das Bwindi Mgahinga Conservation Trust (BMCT) fördert Kleinstunternehmen in den Gemeinden rund um den Park. Das International Gorilla Conservation Programme (IGCP) unterstützt community enterprises direkt. Die ugandische Regierung hat über die Uganda Development Bank Kleinkreditprogramme für Tourismusunternehmen aufgelegt, deren Zugang jedoch außerhalb Kampalas schwierig bleibt.',
    },
    {
      q: 'Was können Reisende tun, um lokales Unternehmertum direkt zu fördern?',
      a: 'Der effektivste Beitrag ist die direkte Buchung bei lokalen Anbietern statt über internationale Plattformen, die einen erheblichen Provisionsanteil einbehalten. Essen in lokalen Restaurants statt ausschließlich in der Lodgeküche, der Kauf von Souvenirs direkt bei den Produzenten und die Nutzung lokaler Guides für Naturwanderungen halten Wertschöpfung im Ort.',
    },
  ]

  return (
    <>
      <Head
        title="Unternehmertum in Buhoma: Tourismus und lokale Wirtschaft"
        description="Wie lokale Unternehmer in Buhoma vom Gorilla-Tourismus profitieren – Herausforderungen, Chancen und was Reisende direkt beitragen können."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <FaqJsonLd faqs={faqs} />
      <main className="bg-white">

        <div className="bg-jungle-900 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-jungle-300 text-sm font-medium uppercase tracking-widest mb-3">Buhoma &amp; Wirtschaft</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Unternehmertum in ländlichen Tourismuszielen: Buhoma als Beispiel
            </h1>
            <p className="text-jungle-200 text-lg leading-relaxed max-w-2xl">
              Buhoma ist der Haupteingang zum Bwindi National Park – und ein Ort, an dem Tourismus lokales Unternehmertum formt und begrenzt. Ein Blick auf die wirtschaftliche Realität jenseits der Lodge-Terrasse.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <div className="bg-jungle-50 border-l-4 border-jungle-600 rounded-r-xl px-5 py-4 mb-10">
            <p className="text-gray-800 font-medium leading-relaxed">
              Wer in Buhoma ankommt, sieht das Dorf zuerst durch die Windschutzscheibe: rote Lehmwege, Bananenstauden, ein Schild am Parkeingang. Bei meinen Besuchen im Oktober 2024 und Januar 2026 habe ich gelernt, dass hinter dieser Oberfläche eine Ökonomie funktioniert, die eng mit dem Tourismus verwoben ist – und die gleichzeitig vor Hürden steht, die von außen kaum sichtbar sind. [ZITAT: lokaler Unternehmer über die größten Herausforderungen im Alltag]
            </p>
          </div>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Buhoma: Tourismusdorf am Parkeingang</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Buhoma liegt im Norden des Bwindi Impenetrable National Park, rund 52 Kilometer von Kabale entfernt auf einer Höhe von etwa 1.600 Metern. Das Dorf ist der älteste und bekannteste der vier Trekking-Sektoren im Bwindi – hier begannen die ersten habituierten Gorillagruppen Ugandas, Besucher zu empfangen. Diese historische Rolle prägt bis heute die wirtschaftliche Dynamik des Ortes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Samstags ist Markttag in Buhoma: Gemüse, Fleisch, Haushaltsartikel, Holzkohle. Das ist kein Touristenmarkt – es ist der Versorgungsmarkt für ein Dorf, das neben dem Parkbetrieb existiert. Lodges kaufen hier lokal ein; Porter und Ranger sind Stammkunden. Die Verbindung zwischen Parkeinnahmen und Dorfwirtschaft ist nicht abstrakt, sondern im Wochenrhythmus spürbar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Gleichzeitig ist Buhoma kein wohlhabendes Dorf. Infrastrukturelle Lücken – Stromversorgung, Bankzugang, Mobilnetz – sind im Alltag präsent. Diese Rahmenbedingungen definieren, was lokales Unternehmertum hier leisten kann und was es strukturell begrenzt.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Herausforderungen für lokale Unternehmer</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kapitalaufbringung ist das zentrale Problem. Wer in Buhoma ein kleines Gästehaus, ein Restaurant oder einen Souvenirstand eröffnen möchte, braucht Startkapital – doch formelle Kredite sind für die meisten unerreichbar. Mikrofinanzinstitutionen haben in ländlichen Tourismusorten häufig keine Präsenz, und informelle Spargruppen (VSLAs – Village Savings and Loan Associations) können nur begrenzte Summen mobilisieren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Saisonalität ist das zweite strukturelle Problem. Die Hochsaison (Trockenzeit) bringt verlässlich zahlende Gäste; die Regenzeiten können schwierig werden. Ein Unternehmen, das nur auf Tourismus aufgebaut ist, muss Überschüsse aus guten Monaten durch schlechte tragen – ohne die Rücklagen, die dafür nötig wären.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Netzwerkaufbau ist das dritte Hemmnis. Große Lodges haben direkte Verbindungen zu Reiseveranstaltern in Kampala und internationale Buchungsplattformen. Lokale Kleinbetriebe fehlen diese Kanäle. Wer keine Website hat, kein Englisch auf Geschäftsniveau spricht und keine Kreditkartenakzeptanz anbieten kann, wird von vielen Reisenden systematisch übersehen – nicht aus böser Absicht, sondern wegen Informationsasymmetrie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            [ZITAT: Norman über seine konkrete Erfahrung mit Netzwerkproblemen und wie er sie teilweise gelöst hat]
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Was Tourismus für Buhoma bedeutet – und was nicht</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tourismus schafft in Buhoma direkte Jobs: Ranger, Tracker, Porter, Guides, Lodgepersonal. Diese Positionen sind häufig besser bezahlt als landwirtschaftliche Arbeit und bieten ein gewisses Maß an Kontinuität. Daneben entstehen indirekte Wertschöpfungsketten: Lodges kaufen Gemüse von lokalen Bauern, beauftragen lokale Handwerker für Reparaturen, nutzen lokale Wäscheservices.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Was Tourismus nicht automatisch schafft, ist breit verteilter Wohlstand. Wenn die meisten Touristen in einer hand voll Lodges übernachten, die jeweils Dutzende von Zimmern haben, konzentrieren sich die Einnahmen. Der community-based Rest Camp am Parkeingang ist ein bewusster Versuch, diesem Muster entgegenzuwirken: Gewinne fließen in lokale Projekte. Diese Struktur ist nicht selbstverständlich – sie ist das Ergebnis von Jahrzehnten zivilgesellschaftlicher Arbeit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Die ehrlichste Aussage, die ich über Unternehmertum in Buhoma treffen kann: Es funktioniert, wenn die Rahmenbedingungen stimmen. Und es braucht Reisende, die bewusst wählen, wo ihr Geld landet.
          </p>

          <PagePhotos slug={SLUG} title="Buhoma: Alltag und Wirtschaft" />

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Häufige Fragen</h2>
            <div className="divide-y divide-gray-200">
              {faqs.map((item, i) => (
                <div key={i} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-start text-left gap-4"
                  >
                    <span className="font-semibold text-gray-800 text-base leading-snug">{item.q}</span>
                    <span className="text-jungle-600 text-xl flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <p className="mt-3 text-gray-600 leading-relaxed text-sm">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-jungle-900 rounded-2xl px-6 py-8 text-center">
            <p className="text-jungle-100 text-sm uppercase tracking-widest font-semibold mb-2">Uganda-Reise planen</p>
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Gorilla-Trekking mit lokaler Wertschöpfung
            </h2>
            <p className="text-jungle-200 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Misty Gorilla Expeditions ist ein lokal geführtes Unternehmen aus Buhoma. Wir beraten zu Permits, community-Unterkünften und nachhaltigen Touren. Kostenlose Erstberatung.
            </p>
            <a
              href="https://www.mistygorillaexpeditions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-safari-500 hover:bg-safari-600 text-white font-semibold px-7 py-3 rounded-xl transition-colors text-sm"
            >
              Tour anfragen
            </a>
          </div>

          {/* Interne Links */}
          <nav className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Weiterführende Themen</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link to="/community-benefit-sharing-bwindi" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Community Benefit Sharing im Bwindi
              </Link>
              <Link to="/nachhaltiger-tourismus-uganda-tipps" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Nachhaltiger Tourismus in Uganda
              </Link>
              <Link to="/nationalparks/bwindi" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Bwindi Impenetrable National Park
              </Link>
              <Link to="/gorilla-permit-preise" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Gorilla-Permit: Preise und Buchung
              </Link>
              <Link to="/stimmen-buhoma" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Stimmen aus Buhoma: Lokale Perspektiven
              </Link>
            </div>
          </nav>

        </div>
      </main>
    </>
  )
}
