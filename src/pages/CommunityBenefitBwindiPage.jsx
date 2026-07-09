import { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from '../components/seo/Head.jsx'
import { FaqJsonLd } from '../components/seo/JsonLd.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'community-benefit-sharing-bwindi'

export default function CommunityBenefitBwindiPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Was ist Community Benefit Sharing im Kontext des Bwindi-Nationalparks?',
      a: 'Community Benefit Sharing bezeichnet Mechanismen, durch die lokale Gemeinschaften einen direkten wirtschaftlichen Anteil am Tourismus und an den Einnahmen des Bwindi Impenetrable National Park erhalten. Dazu zählen Revenue-Sharing-Programme der Uganda Wildlife Authority, Beschäftigung als Ranger, Guides und Porter sowie die Förderung gemeindebasierter Tourismusprodukte wie der Batwa Forest Trail.',
    },
    {
      q: 'Wer sind die Batwa und welche Rolle spielen sie im Bwindi?',
      a: 'Die Batwa sind die indigene Bevölkerung des Bwindi-Regenwalds. Nach der Ausweisung des Parks als Schutzgebiet in den 1990er Jahren wurden sie umgesiedelt. Heute arbeiten Organisationen wie das Bwindi Mgahinga Conservation Trust (BMCT), das International Gorilla Conservation Programme (IGCP) und die Batwa Development Association daran, den Batwa-Gemeinschaften Zugang zu Land, Einkommen und kulturellen Aktivitäten zu ermöglichen.',
    },
    {
      q: 'Wie viel vom Gorilla-Permit-Erlös fließt in lokale Gemeinschaften?',
      a: 'Nach ugandischem Recht fließen 20 Prozent der UWA-Einnahmen aus Nationalparks in Gemeinschaftsprojekte in den angrenzenden Bezirken. Für den Bwindi-Bereich bedeutet dies, dass Teile der Gorilla-Permit-Einnahmen (800 USD in der Hauptsaison, 450 USD in der Nebensaison) in Schulen, Gesundheitsstationen und Infrastrukturprojekte in Buhoma, Rushaga, Nkuringo und Ruhija investiert werden.',
    },
    {
      q: 'Welche Organisationen koordinieren den Batwa-Schutz rund um Bwindi?',
      a: 'Mehrere Organisationen sind aktiv: das International Gorilla Conservation Programme (IGCP), das Bwindi Mgahinga Conservation Trust (BMCT), das Nkuringo Cultural Center, die Batwa Development Association und Pro-biodiversity Conservationists in Uganda (PROBICOU). Das ugandische Ministerium für Wasser und Umwelt koordiniert im Rahmen des IFPA-CD-Projekts (Investing in Forests and Protected Areas for Climate Smart Development) übergeordnete Maßnahmen.',
    },
    {
      q: 'Kann ich als Tourist direkt zur lokalen Gemeinschaft beitragen?',
      a: 'Ja. Der direkteste Weg ist die Buchung von Unterkünften in community-betriebenen Lodges, der Besuch des Batwa Forest Trail am Nkuringo-Sektor und die Nutzung lokaler Guides und Porter. Der Kauf von Kunsthandwerk aus Batwa-Projekten fördert ebenfalls Einkommensquellen, die unabhängig vom Permit-System sind. Wählen Sie Veranstalter, die explizit community revenue sharing kommunizieren.',
    },
  ]

  return (
    <>
      <Head
        title="Community Benefit Sharing im Bwindi: Batwa und Tourismus"
        description="Wie Bwindi-Nationalpark-Einnahmen lokale Gemeinschaften und die Batwa stärken – Revenue Sharing, Organisationen und was Reisende tun können."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <FaqJsonLd faqs={faqs} />
      <main className="bg-white">

        <div className="bg-jungle-900 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-jungle-300 text-sm font-medium uppercase tracking-widest mb-3">Bwindi &amp; Gemeinschaft</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Community Benefit Sharing im Bwindi: Wie Tourismus lokale Gemeinschaften stärkt
            </h1>
            <p className="text-jungle-200 text-lg leading-relaxed max-w-2xl">
              Wer ein Gorilla-Permit kauft, trägt mehr bei als einen Nationalpark-Besuch. Wie das Revenue-Sharing-System funktioniert, wer davon profitiert und welche Rolle die Batwa dabei spielen.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <div className="bg-jungle-50 border-l-4 border-jungle-600 rounded-r-xl px-5 py-4 mb-10">
            <p className="text-gray-800 font-medium leading-relaxed">
              20 Prozent der Einnahmen des Bwindi Impenetrable National Park fließen per Gesetz in lokale Gemeinschaftsprojekte. Für die Batwa – die indigenen Waldbewohner, die mit der Parkgründung ihr angestammtes Territorium verloren – sind spezialisierte Programme und zivilgesellschaftliche Organisationen entstanden. Während meiner Besuche in Buhoma im Oktober 2024 und Januar 2026 habe ich gesehen, wie fragil und gleichzeitig wie real diese Verbindung zwischen Tourismus und lokaler Entwicklung ist.
            </p>
          </div>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Das Revenue-Sharing-System der Uganda Wildlife Authority</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uganda hat eines der strukturiertesten Revenue-Sharing-Programme in Ostafrika. Die Uganda Wildlife Authority (UWA) ist gesetzlich verpflichtet, einen Anteil der Parkeinnahmen an die Distriktbehörden der angrenzenden Gebiete weiterzuleiten. Im Bwindi-Bereich betrifft das vor allem die Bezirke Kanungu, Kabale und Kisoro. Die Mittel werden theoretisch für Schulbauten, Gesundheitsversorgung und Infrastruktur eingesetzt – in der Praxis hängt die Wirkung stark von lokaler Verwaltungskapazität ab.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Gorilla-Permits sind der wichtigste Einnahmekanal: 800 USD in der Hauptsaison (Juni–September, Dezember–Februar) und 450 USD in der Nebensaison. Da der Bwindi-Park mit seinen vier Trekking-Sektoren Buhoma, Ruhija, Rushaga und Nkuringo täglich eine begrenzte Anzahl von Permits ausgibt, ist die Nachfrage konsistent. Über das Jahr kumuliert sich daraus eine beträchtliche Summe, die in das Revenue-Sharing-System einfließt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Daneben gibt es direkte Beschäftigung: Lokale Männer und Frauen arbeiten als Ranger, Ranger-Tracker, Porter und Guides. Für viele Familien in Buhoma ist ein einziger Familienmitglied in Parkdiensten der entscheidende Unterschied zwischen subsistenzbasierter Landwirtschaft und gesichertem Einkommen. [ZITAT: Ranger über seine Arbeit und was sie für seine Familie bedeutet]
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Die Batwa: Indigene Rechte und Tourismusintegration</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Batwa sind die am stärksten marginalisierten Gemeinschaften im Bwindi-Umfeld. Als der Park 1991 offiziell geschützt wurde, lebten die Batwa seit Generationen im Wald – als Jäger und Sammler, mit tiefem Wissen über Pflanzen, Tiere und Waldpfade. Ihre Umsiedlung in die angrenzenden Gebiete ohne ausreichende Entschädigung oder alternative Lebensgrundlagen hat eine anhaltende soziale Verwundbarkeit hinterlassen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Im Rahmen des Vulnerable and Marginalized Groups Plan (VMGP), der im Dezember 2025 vom ugandischen Ministerium für Wasser und Umwelt und der Uganda Wildlife Authority aktualisiert wurde, wurden Maßnahmen zur verbesserten Einbindung der Batwa in Parkmanagement und Tourismus konkretisiert. Gemeinschaftskonsultationen fanden im Juni 2022 in Rubuguri, Rushaga, Sanaliro und am Buhoma Visitor Centre statt – 167 Batwa-Vertreter nahmen teil und priorisierten Maßnahmen zu Landnutzung, Einkommen und kultureller Anerkennung.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Das IFPA-CD-Projekt (Investing in Forests and Protected Areas for Climate Smart Development, Weltbank-Projekt P170466) finanziert in diesem Rahmen konkrete Investitionen: die Stärkung des Batwa Forest Trail in Nkuringo, Schulungen in Korbflechterei und Imkerei, Zugangssicherung zu Kleinparzellen für Subsistenzanbau sowie die Förderung von Batwa-Kulturperformances im Nkuringo Cultural Center.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Eine wichtige Errungenschaft ist die Inklusion von Frauen in der Batwa-Gemeinschaft: Patrouillen, Tourismus-Jobs und Ausbildungsprogramme richten sich explizit an beide Geschlechter. Das Bwindi Mgahinga Conservation Trust (BMCT) koordiniert den Zugang zu Land und fördert Batwa-geführte Betriebe.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Akteure und Organisationen im Überblick</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Das Netzwerk aus staatlichen Stellen, internationalen NGOs und lokalen Organisationen, das rund um Bwindi Community-Arbeit leistet, ist komplex. Folgende Akteure sind zentral:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed mb-6">
            <li><strong>International Gorilla Conservation Programme (IGCP):</strong> Unterstützt Community-Entwicklungsprojekte rund um den Park, koordiniert Problemtierkontrolle und fördert Tourismusentwicklung im Bwindi-Bereich.</li>
            <li><strong>Bwindi Mgahinga Conservation Trust (BMCT):</strong> Ermöglicht Batwa-Gemeinschaften Zugang zu Land und fördert Livelihoods-Programme.</li>
            <li><strong>Nkuringo Cultural Center (NCC):</strong> Koordiniert Batwa-Kulturperformances, Musik, Tanz und traditionelle Kenntnisse für Touristen.</li>
            <li><strong>Batwa Development Association / BIDO / BDO:</strong> Batwa-geführte Organisationen zur Interessenvertretung und Kapazitätsaufbau.</li>
            <li><strong>PROBICOU (Pro-biodiversity Conservationists in Uganda):</strong> Arbeitet an der Schnittstelle von Naturschutz und Gemeinschaftsrechten.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            Bei meinem Besuch in Buhoma im Oktober 2024 habe ich erlebt, wie präsent diese Strukturen im Alltag des Dorfes sind: Der Community Rest Camp am Parkeingang ist samstags Marktort und Treffpunkt; die Lodges beschäftigen lokales Personal und kaufen lokale Lebensmittel. Das ist kein Zufall, sondern Ergebnis jahrelanger Strukturarbeit.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Was Reisende tun können</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Touristen sind keine passiven Beobachter in diesem System. Jede Buchungsentscheidung hat direkte Konsequenzen für die Verteilung von Einnahmen. Community-betriebene Lodges und Camps – wie das Buhoma Community Rest Camp – reinvestieren Gewinne direkt in lokale Projekte. Eine Nacht dort ist kein Qualitätskompromiss, sondern eine bewusste Wahl.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Batwa Forest Trail am Nkuringo-Sektor bietet eine der seltenen Möglichkeiten, Batwa-geführtes Wissen über den Wald direkt zu erleben – Pflanzenkunde, Jagdgeschichte, traditionelle Medizin. Der Eintritt fließt vollständig in Batwa-Projekte. Wer diesen Besuch kombiniert mit einem Gorilla-Trekking im Rushaga- oder Nkuringo-Sektor, macht beide Erfahrungen an einem Ort.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Der Kauf von handgefertigten Produkten – Körbe, Tonarbeiten, Imker-Honig – aus Batwa-Projekten direkt vor Ort ist eine weitere Möglichkeit. Vermeiden Sie Zwischenhändler, die in Kampala oder Entebbe-Souvenirläden die gleichen Produkte zu Touristenpreisen verkaufen, ohne dass ein signifikanter Anteil zurück zu den Produzenten fließt.
          </p>

          <PagePhotos slug={SLUG} title="Bwindi und Buhoma: Eindrücke vor Ort" />

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
              Gorilla-Trekking mit echtem Community-Impact
            </h2>
            <p className="text-jungle-200 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Misty Gorilla Expeditions berät kostenlos zu Gorilla-Permits, community-basierten Lodges und Bwindi-Touren mit nachhaltigem Beitrag. 10+ Jahre Erfahrung, 100 % lokal geführt.
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
              <Link to="/nationalparks/bwindi" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Bwindi Impenetrable National Park: Alles zum Trekking
              </Link>
              <Link to="/gorilla-permit-preise" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Gorilla-Permit: Preise, Verfügbarkeit und Buchung
              </Link>
              <Link to="/bwindi-trekking-anfaenger" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Trekking in Bwindi für Anfänger: Was du wissen musst
              </Link>
              <Link to="/drahtschlingen-wilderei-uganda" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Wilderei in Uganda: Drahtschlingen und Schutzmaßnahmen
              </Link>
              <Link to="/nachhaltiger-tourismus-uganda-tipps" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Nachhaltiger Tourismus in Uganda
              </Link>
              <Link to="/regionen/buhoma" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Buhoma: Das Dorf am Parkeingang
              </Link>
            </div>
          </nav>

        </div>
      </main>
    </>
  )
}
