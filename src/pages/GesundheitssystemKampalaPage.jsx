import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'gesundheitssystem-kampala'

const faqs = [
  {
    frage: 'Welche Krankenhäuser sind für Touristen in Kampala empfehlenswert?',
    antwort:
      'Für international Reisende gelten Einrichtungen wie das Aga Khan University Hospital und das International Hospital Kampala als gut ausgestattet. Beide verfügen über englischsprachiges Personal, moderne Diagnostik und Erfahrung mit Tropenkrankheiten. Eine Reisekrankenversicherung mit Rückholklausel ist dennoch dringend anzuraten, da Behandlungskosten im Privatsektor erheblich sein können.',
  },
  {
    frage: 'Wie ist die medizinische Versorgung außerhalb Kampalas?',
    antwort:
      'In ländlichen Gebieten wie Buhoma im Bwindi-Impenetrable-Forest-Nationalpark sind die Gesundheitseinrichtungen deutlich einfacher. Health Center II und III bieten Basisversorgung, schwere Fälle werden in die nächste Kreisstadt oder nach Kampala weitergeleitet. Reisende, die abgelegene Regionen besuchen, sollten eine gut ausgestattete Reiseapotheke mitführen.',
  },
  {
    frage: 'Was plant die KCCA für das Kampala Gesundheitssystem bis 2030?',
    antwort:
      'Der KCCA Strategic Plan FY2025/26–FY2029/30 sieht vor, fünf kommunale Gesundheitseinrichtungen auf den Status eines Stadtkrankenhauses anzuheben: Kisenyi HCIV in Central, Komamboga HCIII in Kawempe, Kawala HCIV in Lubaga, Kisugu HCIII in Makindye und Kiswa HCIII in Nakawa. Parallel sollen Notfallmedizin und das Überweisungssystem ausgebaut werden.',
  },
  {
    frage: 'Welche Impfungen brauche ich für eine Uganda-Reise?',
    antwort:
      'Eine Gelbfieberimpfung ist bei der Einreise Pflicht und muss im Impfpass dokumentiert sein. Empfohlen werden außerdem Typhus, Hepatitis A und B sowie ein aktueller Tetanusschutz. Für Reisen in Malaria-Endemiegebiete ist eine Chemoprophylaxe sinnvoll. Die Beratung durch einen Tropenmediziner vor Reisebeginn ist in jedem Fall empfehlenswert.',
  },
  {
    frage: 'Ist Kampala für Reisende mit chronischen Erkrankungen geeignet?',
    antwort:
      'Mit guter Vorbereitung ja. In Kampala lassen sich viele Medikamente in gut sortierten Apotheken kaufen, und der Privatsektor bietet solide Diagnostik. Wichtig ist, ausreichend Medikamente für die gesamte Reisedauer mitzunehmen und ärztliche Unterlagen in englischer Sprache dabei zu haben. Für sehr komplexe medizinische Bedürfnisse sollte vorab ein Arzt konsultiert werden.',
  },
]

export default function GesundheitssystemKampalaPage() {
  const [offeneFaq, setOffeneFaq] = useState(null)

  function toggleFaq(index) {
    setOffeneFaq(offeneFaq === index ? null : index)
  }

  return (
    <>
      <Head
        title="Kampala Gesundheit: System, Kliniken & Planung 2025"
        description="Kampala Gesundheit im Überblick: KCCA-Investitionen, Krankenhäuser, Impfpflicht und was Reisende wissen müssen. Aktuell für 2025–2030."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <main className="bg-white">
        {/* Hero-Bild */}
        <figure className="w-full max-h-[480px] overflow-hidden">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Kinder aus der Nachbarschaft eines Waisenhauses in Buhoma, Uganda, vor einem Lehmgebäude mit Wellblechdach"
            className="w-full object-cover max-h-[480px]"
          />
          <figcaption className="text-xs text-gray-500 text-center py-2 px-4">
            Buhoma, Juni 2026 — Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Kampala Gesundheit: Was Reisende über das ugandische Gesundheitssystem wissen sollten
          </h1>

          {/* Eroeffnungs-Hook */}
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            Es war ein früher Morgen in Buhoma, im Juni 2026, als ich drei Kinder aus der Nachbarschaft
            des lokalen Waisenhauses bemerkte. Sie standen etwas abseits, in abgetragener Kleidung, die
            Blicke unsicher. Ihre Körperhaltung und der Zustand ihrer Kleider erzählten mehr, als Worte
            je hätten vermitteln können. Wir haben sie ohne langes Überlegen zum Essen eingeladen —
            ein schlichter Moment, der sich aber tief eingeprägt hat. Kinder, die in solcher Nähe zu
            einem Waisenhaus aufwachsen, sind in Uganda häufig von grundlegenden Diensten abgeschnitten:
            sauberem Wasser, ausgewogener Ernährung und medizinischer Versorgung.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Diese GPS-verifizierten Aufnahmen vom 21. Juni 2026 aus Buhoma — rund 280 Kilometer von
            Kampala entfernt über die Kampala-Mbarara-Ntungamo-Straße — zeigen, dass die Kluft zwischen
            der Hauptstadt und den ländlichen Gebieten im Bereich kampala gesundheit und landesweiter
            medizinischer Infrastruktur nach wie vor besteht. Was sich in Kampala in den kommenden
            Jahren verändern wird, hat jedoch das Potenzial, diese Kluft schrittweise zu schließen.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Wer Uganda bereist, denkt zunächst an Gorillas, Nationalparks und Nilquellen. Die Frage,
            wie es um Gesundheitsversorgung und medizinische Infrastruktur bestellt ist, tritt oft in
            den Hintergrund — dabei ist sie für Reisende wie für das Verständnis des Landes gleichermaßen
            relevant. Kampala, als Herzstück des ugandischen Gesundheitssystems, befindet sich inmitten
            eines der ehrgeizigsten Reformprozesse seit Jahrzehnten.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">
              Kampala Gesundheit — Schlüsselfakten auf einen Blick
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-jungle-700 uppercase tracking-wide">Zuständige Behörde</span>
                <span className="text-gray-800">Kampala Capital City Authority (KCCA)</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-jungle-700 uppercase tracking-wide">Strategischer Plan</span>
                <span className="text-gray-800">FY2025/26 – FY2029/30</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-jungle-700 uppercase tracking-wide">Einrichtungen im Upgrade</span>
                <span className="text-gray-800">5 KCCA-Gesundheitszentren zu Stadtkrankenhäusern</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-jungle-700 uppercase tracking-wide">OPD-Ernährungsscreening U5</span>
                <span className="text-gray-800">Ziel: 100 % (Stand 2023/24: 60 %)</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-jungle-700 uppercase tracking-wide">Vitamin-A-Abdeckung U5</span>
                <span className="text-gray-800">93 % (Ziel: 100 %)</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-jungle-700 uppercase tracking-wide">Impfpflicht Einreise</span>
                <span className="text-gray-800">Gelbfieber (Nachweis erforderlich)</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-jungle-700 uppercase tracking-wide">Entfernung Buhoma–Kampala</span>
                <span className="text-gray-800">ca. 280 km über Mbarara</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-jungle-700 uppercase tracking-wide">Autor vor Ort</span>
                <span className="text-gray-800">Mark Suer, Juni 2026 (GPS-verifiziert)</span>
              </div>
            </div>
          </div>

          {/* H2: KCCA Strategic Plan */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Der KCCA Strategic Plan: Wie Kampala sein Gesundheitssystem bis 2030 umbaut
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Wer Kampala heute besucht, sieht eine Stadt im Wandel. Baustellen, neue Straßen, wachsende
            Gewerbeviertel in Lugogo und entlang der Entebbe Road — und mittendrin eine staatliche
            Behörde, die versucht, mit dem rasanten Wachstum Schritt zu halten. Die Kampala Capital
            City Authority hat mit dem Strategic Plan für die Haushaltsjahre 2025/26 bis 2029/30 ein
            ehrgeiziges Programm aufgelegt, das Gesundheit, Bildung und digitale Governance als
            gleichrangige Prioritäten behandelt.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Im Mittelpunkt der Gesundheitsagenda steht die strukturelle Aufwertung von fünf
            kommunalen Einrichtungen. Kisenyi HCIV im Bezirk Central, Komamboga HCIII in Kawempe,
            Kawala HCIV in Lubaga, Kisugu HCIII in Makindye und Kiswa HCIII in Nakawa sollen zu
            vollwertigen Stadtkrankenhäusern ausgebaut werden. Diese Aufwertung bedeutet in der Praxis
            mehr als nur neue Gebäude: Es geht um erweiterte diagnostische Kapazitäten, einen
            rund um die Uhr besetzten Notfalldienst und die Fähigkeit, komplexere Erkrankungen vor
            Ort behandeln zu können, ohne Patienten sofort in überfüllte Referenzkrankenhäuser
            weiterleiten zu müssen.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Parallel dazu sollen alle KCCA-eigenen Gesundheitseinrichtungen auf ein jeweils höheres
            Level angehoben werden — ein Prozess, der im ugandischen System von Health Center II über
            III und IV bis hin zum Krankenhaus reicht und mit jeder Stufe erweiterte Personalanforderungen,
            Ausstattung und Leistungsangebote verbindet. Das ist keine bloße Verwaltungsübung. Für
            Menschen in einem dicht besiedelten Stadtbezirk wie Kawempe bedeutet ein ausgebautes
            Komamboga HCIII potenziell, dass sie bei einem medizinischen Notfall nicht mehr Stunden
            durch den Kampala-Verkehr fahren müssen.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Der strategische Plan benennt auch konkrete Kennzahlen, an denen sich die KCCA messen
            lassen will. Der Anteil der Kinder unter fünf Jahren, die beim Ambulanzbesuch auf
            Mangelernährung untersucht werden, soll von 60 Prozent im Basisjahr 2023/24 auf 100
            Prozent steigen. Die Abdeckung mit der zweiten Vitamin-A-Dosis für Kleinkinder, die
            bereits bei 93 Prozent liegt, soll ebenfalls auf 100 Prozent angehoben werden. Diese
            Ziele klingen technisch, haben aber für Familien in ärmeren Stadtvierteln unmittelbare
            Konsequenzen — ein Kind, das rechtzeitig auf Unterernährung gescreent und behandelt
            wird, entwickelt sich grundlegend anders als eines, das erst in akuter Notlage in eine
            Klinik kommt.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Für Reisende ist dieser Kontext relevant, weil er zeigt, auf welchem Entwicklungsstand
            das städtische Gesundheitssystem aktuell steht — und warum Eigenvorsorge durch eine
            gute Reisekrankenversicherung und eine mitgebrachte Apotheke nach wie vor unerlässlich
            ist. Die Reformen sind real und vielversprechend, aber Kampala 2025 ist nicht Nairobi
            oder Johannesburg.
          </p>

          {/* Inline-Foto Gorilla */}
          <figure className="my-8 rounded-xl overflow-hidden">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126875589_agqq.jpg"
              alt="Berggorilla frisst Blätter im Baumkronendach des Bwindi Impenetrable Forest"
              className="w-full object-cover max-h-[420px]"
            />
            <figcaption className="text-xs text-gray-500 text-center py-2 px-4">
              Bwindi, Juni 2026 — Foto: Mark Suer
            </figcaption>
          </figure>

          {/* H2: Notfall und Alltag */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Medizinische Versorgung in Kampala: Privatkliniken, Notfallmedizin und was Touristen wirklich brauchen
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Kampala verfügt über eine gespaltene Gesundheitslandschaft. Auf der einen Seite stehen
            die öffentlichen Einrichtungen der KCCA sowie das Mulago National Referral Hospital —
            das größte Krankenhaus des Landes, das jedoch chronisch überlastet ist und mit
            Ressourcenknappheit kämpft. Auf der anderen Seite hat sich ein gut entwickelter
            Privatsektor etabliert, der für zahlungsfähige Patienten und Reisende eine solide
            Alternative bietet.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Einrichtungen wie das Aga Khan University Hospital in Kampala und das International
            Hospital Kampala (IHK) sind auf Patienten aus dem Ausland eingestellt, haben
            englischsprachiges Personal und sind mit moderner Diagnosetechnik ausgestattet. Für
            häufige Reisebeschwerden wie Magen-Darm-Infektionen, Malaria-Verdacht oder Verletzungen
            sind diese Kliniken gut geeignet. Auch eine Vorabdiagnose bei einer der vielen gut
            sortierten Apotheken Kampalas ist für leichtere Erkrankungen eine realistische Option.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Das Notfallsystem steht vor eigenen Herausforderungen. Der KCCA Strategic Plan sieht den
            Ausbau der Emergency Medical Services und des Überweisungssystems explizit als strategischen
            Output vor. Im Alltag bedeutet das, dass Rettungswagenkapazitäten und Reaktionszeiten
            noch nicht mit europäischen Standards vergleichbar sind. Im Notfall ist es sinnvoll, die
            Nummer der nächsten privaten Klinik parat zu haben und nicht auf einen staatlichen
            Rettungswagen zu warten.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Ein weiterer wichtiger Aspekt ist die Abfallwirtschaft als Teil der städtischen
            Gesundheitsinfrastruktur. Die KCCA plant, die Deponiesituation durch die Stilllegung
            der alten Kiteezi-Deponie und den Bau einer neuen Deponie in Buyala zu verbessern
            sowie fünf neue Müllwagen anzuschaffen. Auch die Wasserversorgung, Abwasserentsorgung
            und Sanitärinfrastruktur fallen in den Verantwortungsbereich der KCCA und sind
            unmittelbar mit Gesundheitsrisiken verbunden. Wer in Kampala isst — vor allem an
            Straßenständen — sollte wissen, dass die hygienischen Standards stark variieren.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Für Reisende aus Deutschland gilt: Wasser aus dem Hahn sollte nicht getrunken werden,
            Eiswürfel in unbekannten Lokalen sind mit Vorsicht zu genießen, und rohes Gemüse von
            Straßenmärkten birgt ein gewisses Risiko. Das gilt nicht nur für Kampala, sondern für
            ganz Uganda — und ist kein Grund zur Panik, sondern zur bewussten Entscheidung.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Mary Edward, eine aus dem Südsudan geflüchtete Unternehmerin, betreibt in Kampala die
            Muhaba Pastries Store — ein kleines Backwarengeschäft, das zeigt, wie Flüchtlinge
            im städtischen Kontext wirtschaftlich Fuß fassen. Ihr Alltag ist auch von
            Gesundheitsfragen geprägt: Die KCCA hat gemeinsam mit der internationalen Organisation
            IRC Möglichkeiten erarbeitet, wie städtische Flüchtlinge besser in kommunale
            Gesundheitsangebote eingebunden werden können. Für viele dieser Menschen ist der
            Zugang zu einem KCCA-Gesundheitszentrum die einzige erschwingliche Option — und damit
            sind die geplanten Ausbaumaßnahmen direkt lebensrelevant.
          </p>

          {/* H2: STEM und Bildung im Gesundheitskontext */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            STEM, Humankapital und die Zukunft der medizinischen Fachkräfte in Kampala
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Ein Gesundheitssystem ist nur so stark wie die Menschen, die es tragen. Die KCCA hat
            diesen Zusammenhang erkannt und investiert neben der baulichen Infrastruktur auch in
            das Humankapital der Stadt. Das STEM-Programm — Science, Technology, Engineering and
            Mathematics — richtet sich an Schülerinnen und Schüler in Kampala und soll sie dazu
            befähigen, innovative Projekte in den Naturwissenschaften zu entwickeln.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Auf den ersten Blick wirkt der Zusammenhang zwischen einem Schüler-MINT-Programm und
            dem Gesundheitssystem einer afrikanischen Millionenstadt abstrakt. Tatsächlich ist er
            aber unmittelbar: Uganda braucht Ärzte, Krankenpfleger, Labortechniker, Public-Health-
            Spezialisten und Biomedizintechniker. Die meisten dieser Berufe setzen eine solide
            naturwissenschaftliche Grundbildung voraus. Wenn das STEM-Programm in Kampalas Schulen
            dazu beiträgt, dass mehr junge Menschen den Weg in medizinische Berufe finden, ist das
            ein mittel- bis langfristiger Gewinn für das gesamte Versorgungssystem.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Uganda hat laut dem National Human Resource Survey 2023 nach wie vor erheblichen
            Nachholbedarf beim Fachkräfteangebot im Gesundheitssektor. Die Dichte an Ärzten und
            qualifiziertem Pflegepersonal liegt weit unter den Richtwerten der
            Weltgesundheitsorganisation, und viele ausgebildete Fachkräfte wandern in besser
            bezahlende Länder oder Privateinrichtungen ab. Kampala als städtisches Zentrum zieht
            einen Großteil der vorhandenen Fachkräfte an, was die Versorgungslage in ländlichen
            Gebieten wie dem Bwindi-Nationalpark-Umfeld entsprechend verschlechtert.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Der KCCA Strategic Plan adressiert dieses Problem unter dem Oberbegriff
            "Humankapitalentwicklung" und bündelt Maßnahmen in den Bereichen Bildung,
            digitale Governance und Gesundheit zu einem integrierten Ansatz. Digitale
            Governance meint dabei auch die Einführung moderner Datenmanagementsysteme in
            Gesundheitseinrichtungen — also elektronische Patientenakten, koordinierte
            Überweisungsdokumentation und evidenzbasierte Ressourcensteuerung. Diese
            Modernisierungsschritte sind für Reisende nicht unmittelbar sichtbar, machen
            aber den Unterschied zwischen einem Krankenhaus, das weiß, welche Medikamente
            vorrätig sind, und einem, das es nicht weiß.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Kampala ist der Sitz der National Planning Authority Ugandas, die im Rwenzori
            House residiert. Diese Zentralisierung von Planungskompetenz in der Hauptstadt
            hat eine Kehrseite: Entscheidungen über Ressourcenzuteilungen werden an einem
            Ort gefällt, der von der Realität in Buhoma, Arua oder Kotido weit entfernt
            ist. Der Refugee Engagement Forum (REF) ist ein Ansatz, dieser Distanz
            entgegenzuwirken — er stellt sicher, dass auch Flüchtlinge systematisch in
            Planungsprozesse einbezogen werden, was für die gesundheitliche Versorgung
            einer wachsenden Stadtbevölkerung keine Kleinigkeit ist.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Für Reisende, die in Kampala länger bleiben oder wiederholt nach Uganda reisen,
            ergibt sich aus diesem Bild ein praktischer Hinweis: Die Stadt wandelt sich
            schnell. Was vor zwei Jahren noch nicht möglich war — eine bestimmte Diagnostik,
            eine bestimmte Behandlung, eine bestimmte Apotheke — ist heute oft verfügbar.
            Der Schlüssel ist Vorabrecherche und, wo immer möglich, der Kontakt zur eigenen
            Botschaft oder einem vor Ort ansässigen Arzt.
          </p>

          {/* H2: Reisende und Gesundheitsvorsorge */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Praktische Gesundheitsvorsorge für Uganda-Reisende: Von der Impfung bis zur Malaria-Prophylaxe
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Wer Uganda bereist, muss sich auf eine andere Krankheitslast einstellen als in
            Mitteleuropa. Malaria ist in weiten Teilen des Landes endemisch, wobei das Risiko
            in höheren Lagen wie rund um den Bwindi Impenetrable Forest geringer ist als im
            Flachland. Dennoch gilt für alle Gebiete unter 2000 Metern Höhe eine klare Empfehlung
            zur Chemoprophylaxe — welches Präparat geeignet ist, hängt von individuellen Faktoren
            ab und sollte mit einem Tropenmediziner abgestimmt werden.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Die Gelbfieberimpfung ist bei der Einreise nach Uganda Pflicht und muss im
            internationalen Impfpass dokumentiert sein. Reisende ohne gültigen Nachweis werden
            an der Grenze oder am Flughafen Entebbe geimpft — aber besser ist es, das
            rechtzeitig vor der Reise zu erledigen. Zusätzlich empfohlen werden Typhus,
            Hepatitis A und B sowie ein aktueller Tetanus- und Diphtheriesschutz. Bei einem
            Aufenthalt in ländlichen Gebieten, wo Hundekontakte möglich sind, sollte auch
            die Tollwutimpfung thematisiert werden.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Denguefieber und andere durch Mücken übertragene Erkrankungen gewinnen in
            städtischen Gebieten Ostafrikas an Bedeutung. In Kampala empfiehlt sich
            konsequenter Mückenschutz durch repellentienhaltige Mittel und langärmelige
            Kleidung in den Abendstunden. Klimatisierte Unterkünfte im Privatsektor bieten
            in der Regel Schutz vor Stechmücken, was in der Budgetunterkunft oder in
            ländlichen Gegenden nicht immer der Fall ist.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Das ugandische Uganda Tourism Board, erreichbar über die Adresse 42 Windsor Crescent,
            Rwenzori Towers in Kampala, kann bei Bedarf Kontakte zu lokalen Ärzten und
            medizinischen Einrichtungen vermitteln. Praktischer für Reisende ist oft jedoch
            der direkte Weg zur deutschen oder österreichischen Botschaft in Kampala, die
            eine Liste empfohlener Ärzte führt.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Eine gut ausgestattete Reiseapotheke ist für Uganda unerlässlich. Neben den
            verschreibungspflichtigen Malaria-Medikamenten sollten Durchfallmittel,
            Antibiotika auf Rezept des Hausarztes, Schmerzmittel, Pflaster und Desinfektionsmittel
            mitgeführt werden. In Kampala lassen sich viele Medikamente in Apothekenketten
            wie CiplaQCIL kaufen, aber außerhalb der Hauptstadt wird das Angebot rasch
            lückenhafter.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Wer — wie ich im Juni 2026 in Buhoma — spontan in Kontakt mit Kindern oder
            verletzlichen Bevölkerungsgruppen kommt, sollte auch an Händedesinfektion und
            grundlegende Hygienemaßnahmen denken. Nicht wegen Panik, sondern aus Respekt
            vor der eigenen Gesundheit und der der Menschen vor Ort. Diese kleinen
            Gesten der Vorsicht sind keine Barriere, sondern ein Teil verantwortungsvollen
            Reisens.
          </p>

          {/* H2: Urbane Flüchtlinge und Gesundheitszugang */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5">
            Urbane Flüchtlinge in Kampala: Gesundheitszugang als Teil der Stadtplanung
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Kampala beherbergt eine der größten urbanen Flüchtlingspopulationen Afrikas. Menschen
            aus dem Südsudan, der Demokratischen Republik Kongo, Ruanda, Somalia und anderen
            Krisenregionen leben oft über die ganze Stadt verteilt, integriert in Mietwohnungen
            und informelle Siedlungen — nicht in abgegrenzten Lagern wie in manchen anderen
            Ländern. Dieses Modell hat Vorteile für Eigenständigkeit und wirtschaftliche
            Teilhabe, stellt das Gesundheitssystem aber vor eigene Herausforderungen.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Die KCCA hat in Kooperation mit der Internationalen Rettungsorganisation IRC ein
            Programm entwickelt, das urbane Flüchtlinge systematisch in kommunale
            Gesundheitsangebote einbindet. Das ReBUiLD-Programm und lokale Partnerorganisationen
            wie die Platform for Vendors (PLAVU) spielen dabei eine wichtige Rolle bei der
            wirtschaftlichen Integration — denn wer wirtschaftlich abgesichert ist, kann
            sich auch medizinische Grundversorgung leisten.
          </p>
          {/* Inline-Foto Community Buhoma */}
          <figure className="my-8 rounded-xl overflow-hidden">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
              alt="Gemeinschaftsgruppe in Buhoma vor einem Gebäude mit Wellblechdach — Menschen unterschiedlichen Alters stehen zusammen"
              className="w-full object-cover max-h-[420px]"
            />
            <figcaption className="text-xs text-gray-500 text-center py-2 px-4">
              Buhoma, Juni 2026 — Foto: Mark Suer
            </figcaption>
          </figure>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Mary Edward, die mit ihrem Muhaba Pastries Store in Kampala als Unternehmerin tätig
            ist, steht für diesen Weg. Ihr Laden ist ein Beispiel dafür, dass Integration
            möglich ist — und dass Gesundheit dabei keine Frage von Herkunft, sondern von
            Zugang sein sollte. Der Refugee Engagement Forum (REF) stellt sicher, dass
            Stimmen wie die von Mary Edward in die Planung kommunaler Dienste einfließen,
            also auch in die Frage, wo neue Gesundheitszentren gebaut werden und welche
            Sprachen das Personal spricht.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Für Reisende ist dieser Kontext ein Reminder: Kampala ist keine homogene Stadt.
            Sie ist komplex, vielschichtig und voller Menschen mit sehr unterschiedlichen
            Lebensrealitäten. Wer Kampala versteht, versteht Uganda besser — und wer weiß,
            wie das Gesundheitssystem funktioniert, reist informierter, sicherer und mit
            mehr Respekt für das Land.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Kampala und Uganda" />

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur Gesundheitsversorgung in Kampala
            </h2>
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {faqs.map((item, index) => (
                <div key={index} className="py-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-start justify-between text-left gap-4 focus:outline-none"
                    aria-expanded={offeneFaq === index}
                  >
                    <span className="font-semibold text-gray-800 text-base leading-snug">
                      {item.frage}
                    </span>
                    <span
                      className={`mt-1 flex-shrink-0 text-jungle-700 transition-transform duration-200 ${
                        offeneFaq === index ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  {offeneFaq === index && (
                    <p className="mt-3 text-gray-600 leading-relaxed text-sm">{item.antwort}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interne Links */}
          <div className="mt-14 bg-safari-50 rounded-xl p-6">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-4">
              Weiterführende Seiten zu Uganda
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              <li>
                <a
                  href="/regionen/kampala"
                  className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm"
                >
                  Kampala: Alles zur Hauptstadt Ugandas
                </a>
              </li>
              <li>
                <a
                  href="/uganda-reisetipps"
                  className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm"
                >
                  Uganda Reisetipps: Praktisches für die Vorbereitung
                </a>
              </li>
              <li>
                <a
                  href="/reiseplanung"
                  className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm"
                >
                  Uganda Reiseplanung: Schritt für Schritt
                </a>
              </li>
              <li>
                <a
                  href="/beste-reisezeit-uganda"
                  className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm"
                >
                  Beste Reisezeit Uganda: Wann lohnt sich ein Besuch?
                </a>
              </li>
              <li>
                <a
                  href="/nachhaltiger-tourismus-uganda"
                  className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm"
                >
                  Nachhaltiger Tourismus in Uganda
                </a>
              </li>
              <li>
                <a
                  href="/gorilla-trekking"
                  className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm"
                >
                  Gorilla Trekking in Uganda: Ablauf und Kosten
                </a>
              </li>
              <li>
                <a
                  href="/nationalparks/bwindi"
                  className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm"
                >
                  Bwindi Impenetrable Forest Nationalpark
                </a>
              </li>
              <li>
                <a
                  href="/regionen/buhoma"
                  className="text-jungle-800 hover:text-jungle-600 underline underline-offset-2 text-sm"
                >
                  Buhoma: Das Tor zum Bwindi-Nationalpark
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
