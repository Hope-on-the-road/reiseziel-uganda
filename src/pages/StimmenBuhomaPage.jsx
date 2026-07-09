import { useState } from 'react'
import { Link } from 'react-router-dom'
import Head from '../components/seo/Head.jsx'
import { FaqJsonLd } from '../components/seo/JsonLd.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'stimmen-buhoma'

export default function StimmenBuhomaPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Was macht Buhoma als Reiseziel besonders?',
      a: 'Buhoma ist der nördliche Eingang zum Bwindi Impenetrable National Park und damit der älteste Ausgangspunkt für Gorilla-Trekking in Uganda. Die Besonderheit liegt in der unmittelbaren Nähe von Gorillafamilien, Bergwaldlandschaft und einer echten Dorfgemeinschaft. Anders als rein touristisch erschlossene Orte ist Buhoma ein lebendiges Dorf mit eigenem Alltagsrhythmus.',
    },
    {
      q: 'Welche Projekte verbinden Reisende mit der lokalen Gemeinschaft in Buhoma?',
      a: 'Das Buhoma Community Rest Camp ist das bekannteste community-basierte Projekt: Übernachtungseinnahmen fließen in lokale Schulen und Gesundheitsversorgung. Hope on the Road betreibt die HopeKitchen als Gemeinschaftsinfrastruktur. Der samstägliche Markt, Führungen durch lokale Guides und der direkte Kontakt mit Handwerkern sind weitere Berührungspunkte zwischen Touristen und Dorfgemeinschaft.',
    },
    {
      q: 'Was ist die HopeKitchen in Buhoma?',
      a: 'Die HopeKitchen ist ein Gemeinschaftsprojekt von Hope on the Road, das in Buhoma eine Küchen- und Versorgungsinfrastruktur aufbaut. Beim Besuch im Januar 2026 waren Maurerarbeiten im Gange – rote Ziegelsteine, verbunden mit Zement auf roten Lehmböden, wie in ganz Uganda üblich. Das Projekt zielt darauf ab, nachhaltige Ernährungsgrundlagen für vulnerable Bevölkerungsgruppen zu schaffen.',
    },
    {
      q: 'Wann ist die beste Reisezeit für Buhoma?',
      a: 'Die Trockenzeit von Juni bis September und Dezember bis Februar ist die empfohlene Reisezeit. Wanderwege sind trockener und Gorilla-Sichtungen verlässlicher. Bei meinem Besuch im Januar 2026 war das Wetter überwiegend klar mit kühlen Morgen auf 1.600 Metern Höhe. Die Regenzeit (März–Mai und Oktober–November) macht Wege schlammig, bietet aber grünere Landschaft und weniger Menschenmassen.',
    },
    {
      q: 'Wie komme ich von Kampala nach Buhoma?',
      a: 'Buhoma liegt rund 475 Kilometer von Kampala entfernt, die Fahrt dauert 8 bis 10 Stunden über Mbarara und Kabale. Mit einem 4WD-Fahrzeug und erfahrenem Fahrer ist die Strecke auf befestigter Straße bis Kanungu gut machbar; die letzten Kilometer nach Buhoma sind geschottert. Alternativ gibt es Kleinflugzeug-Transfers nach Kihihi (nächster Airstrip, ca. 30 km entfernt).',
    },
  ]

  return (
    <>
      <Head
        title="Stimmen aus Buhoma: Leben im Gorilla-Tourismusdorf"
        description="Buhoma aus lokaler Perspektive: Alltag, Projekte und Menschen im Dorf am Eingang zum Bwindi-Nationalpark – berichtet nach mehreren Vor-Ort-Besuchen."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <FaqJsonLd faqs={faqs} />
      <main className="bg-white">

        {/* Hero-Bild */}
        <figure className="w-full max-h-[520px] overflow-hidden">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780739326828_wup3.jpg"
            alt="Besucher im Gespräch mit Kindern in Schuluniformen in Buhoma – Gemeinschaftsarbeit im Bergdorf"
            className="w-full object-cover object-center"
            fetchpriority="high"
            loading="eager"
          />
          <figcaption className="text-sm text-gray-500 px-4 py-2 text-center">
            Buhoma, Januar 2026 – Foto: Susanne Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Stimmen aus Buhoma: Lokale Perspektiven auf Tourismus und Entwicklung
          </h1>

          <div className="bg-jungle-50 border-l-4 border-jungle-600 rounded-r-xl px-5 py-4 mb-10">
            <p className="text-gray-800 font-medium leading-relaxed">
              Buhoma liegt auf 1.600 Metern Höhe am Rand des Bwindi-Regenwalds. Das Dorf ist Ausgangspunkt für Gorilla-Trekking — und gleichzeitig ein Ort, an dem Menschen leben, bauen, wirtschaften und hoffen. Im Januar 2026 dokumentierte Susanne Suer Maurerarbeiten an der HopeKitchen: Zementsäcke auf rotem Lehmboden, rote Ziegelsteine — dieselbe Bautechnik wie überall auf der Welt, nur hier unter ugandischer Sonne.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Die Zementsäcke lagen aufgestapelt auf dem roten Boden von Buhoma. Susanne Suer fotografierte sie im Januar 2026, als die Maurerarbeiten an der HopeKitchen im Gange waren — einem Gemeinschaftsprojekt, das an diesem Hang aufgebaut wird wie Häuser überall: Ziegel, Zement, Arbeit, Zeit. Dieser Moment steht für etwas, das im Gorilla-Tourismus leicht übersehen wird: Buhoma ist kein Kulissendorf. Hier wird gebaut, gekocht, unterrichtet, gestritten und gelacht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Ich war bei mehreren Gelegenheiten in Buhoma — zuerst im Oktober 2024, dann im Januar 2026. Jedesmal fiel mir auf, wie wenig der Tourismus und das Dorfleben sich berühren, wenn man es nicht aktiv sucht. Reisende kommen, trekken, übernachten, fahren wieder. Die Lodges sind gut; die Gorillas sind nah. Was dazwischen liegt — die Ökonomie des Alltags, die Schule auf dem Hügel, die Händlerin am Marktstand — das bleibt unsichtbar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Diese Seite ist ein Versuch, einige dieser Stimmen sichtbar zu machen. Nicht als Folklore. Nicht als Mitleid. Sondern als das, was sie sind: Perspektiven von Menschen, die in einem der schönsten und strukturell herausforderndsten Orte Ugandas leben.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Das Dorf hinter dem Parkeingang</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Buhoma hat keine Hauptstraße im üblichen Sinne. Es gibt die geschotterte Zufahrt, einige Lodges und Gästehäuser, das Bwindi Community Rest Camp direkt am Parkeingang, eine Gesundheitsstation, Schulen und eine Reihe kleiner Geschäfte. Samstags ist Markt: Gemüse, Fleisch, Haushaltswaren, Holzkohle. Es ist ein Markt für das Dorf — nicht für Touristen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Nähe zum Park schafft eine wirtschaftliche Grundlage, die in den meisten ugandischen Dörfern dieser Abgeschiedenheit nicht existiert. Ranger, Tracker, Porter, Guides — das sind Berufe, die regelmäßiges Einkommen bieten. Lodgepersonal verdient verlässlich. Für viele Familien macht ein einziges Mitglied im Parkbetrieb den Unterschied zwischen Mangel und Stabilität.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            [ZITAT: lokale Person über was sich in den letzten Jahren im Dorf verändert hat]
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">HopeKitchen: Bauen mit Zement und Ziegelsteinen</h2>

          <figure className="my-8 rounded-xl overflow-hidden">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1781880248303_5w6t.jpg"
              alt="Zementsäcke auf rotem Lehmboden in Buhoma – Material für die Maurerarbeiten an der HopeKitchen"
              className="w-full object-cover max-h-[400px]"
            />
            <figcaption className="text-sm text-gray-500 px-4 py-2">
              Zementsäcke für die HopeKitchen, Januar 2026 — Foto: Mark Suer
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-4">
            Die HopeKitchen in Buhoma ist ein Projekt von Hope on the Road — einer Initiative, die in der Region im Bereich Ernährungssicherheit und Gemeinschaftsinfrastruktur arbeitet. Im Januar 2026 waren die Maurerarbeiten in vollem Gange: Rote Ziegelsteine, lokal gebrannt, wurden mit Portland-Zement verbunden. Dieselbe Bautechnik, die man aus Europa kennt — nur dass hier der rote Lehmboden Ugandas das Fundament bildet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Solche Projekte entstehen nicht in Isolation. Sie brauchen lokale Handwerker, lokale Materialien und lokales Wissen darüber, wie man in dieser Klimazone und auf diesem Untergrund baut. Wer an der HopeKitchen arbeitet, erwirbt Fähigkeiten, die über dieses Projekt hinaus nutzbar sind. Das ist nicht der größte Effekt eines Bauprojekts — aber er ist real.
          </p>

          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Was Besucher in Buhoma bewirken können</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tourismus in Buhoma ist nicht neutral. Jede Buchungsentscheidung, jeder Einkauf, jedes Gespräch hat Konsequenzen. Wer im Buhoma Community Rest Camp übernachtet statt in einer international verwalteten Lodge, leitet Einnahmen direkt in Gemeinschaftsprojekte. Wer samstags auf dem Markt kauft statt im Supermarkt in Kabale, hält Wertschöpfung im Ort.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Das ist keine Ideologie. Es ist Arithmetik: Jeder Schilling, der lokal ausgegeben wird, dreht sich mehrfach durch die lokale Wirtschaft. Jeder Schilling, der an externe Anbieter geht, dreht er sich einmal und verlässt das Dorf.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            [ZITAT: Dorfbewohner oder Unternehmer über was Besucher konkret verändern können]
          </p>

          <PagePhotos slug={SLUG} title="Buhoma: Menschen und Projekte" />

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
            <p className="text-jungle-100 text-sm uppercase tracking-widest font-semibold mb-2">Bwindi erleben</p>
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Gorilla-Trekking ab Buhoma — mit lokalen Guides
            </h2>
            <p className="text-jungle-200 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Misty Gorilla Expeditions ist in Buhoma verwurzelt. Wir kennen die Gorillafamilien, die Guides und die community-basierten Lodges. Kostenlose Beratung für Ihre Uganda-Reise.
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
                Bwindi Impenetrable National Park
              </Link>
              <Link to="/community-benefit-sharing-bwindi" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Community Benefit Sharing im Bwindi
              </Link>
              <Link to="/unternehmertum-tourismusziele-buhoma" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Unternehmertum in Buhoma
              </Link>
              <Link to="/gorilla-permit-preise" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Gorilla-Permit: Preise und Buchung
              </Link>
              <Link to="/nachhaltiger-tourismus-uganda-tipps" className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm">
                Nachhaltiger Tourismus in Uganda
              </Link>
            </div>
          </nav>

        </div>
      </main>
    </>
  )
}
