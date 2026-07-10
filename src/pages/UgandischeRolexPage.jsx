import { useState } from 'react'
import Head from '../components/seo/Head.jsx'
import { FaqJsonLd } from '../components/seo/JsonLd.jsx'
import PagePhotos from '../components/PagePhotos.jsx'

const SLUG = 'ugandische-rolex'

const faqs = [
  {
    q: 'Was ist eine ugandische Rolex genau?',
    a: 'Eine ugandische Rolex ist ein gerolltes Chapati – ein dünnes, in der Pfanne gebratenes Fladenbrot – mit einem gebratenen Ei, das direkt auf dem Chapati aufgeschlagen und zusammen mit Gemüse wie Zwiebeln, Tomaten und Kohl gebraten wird. Anschließend wird alles zu einer Rolle geformt und warm serviert. Die Rolex ist das bekannteste Streetfood Ugandas und an nahezu jedem Marktplatz und jeder Straßenkreuzung erhältlich.'
  },
  {
    q: 'Woher kommt der Name „Rolex"?',
    a: 'Der Name Rolex hat nichts mit der Schweizer Uhrenmarke zu tun. Er leitet sich von den englischen Wörtern „Rolled Eggs" ab – also „gerollte Eier". Im ugandischen Alltag wurde dieser Ausdruck zu „Rolex" verkürzt. Der Name ist heute in ganz Uganda geläufig und bezeichnet eindeutig dieses Straßengericht, nicht die Luxusuhr.'
  },
  {
    q: 'Was kostet eine Rolex in Uganda?',
    a: 'Eine einfache Rolex kostet an einem Straßenstand in der Regel zwischen 2.000 und 4.000 ugandischen Schilling – umgerechnet etwa 0,50 bis 1,00 Euro. Varianten mit zusätzlichem Gemüse, Käse oder Fleisch können etwas teurer sein. An touristisch frequentierten Orten wie in Jinja oder Kampala liegen die Preise teilweise etwas höher.'
  },
  {
    q: 'Ist die ugandische Rolex vegetarisch?',
    a: 'Die klassische Rolex ist vegetarisch, da sie aus Chapati, Ei und Gemüse besteht. Viele Stands bieten jedoch auch Varianten mit Fleisch oder Käse an. Wer rein vegetarisch oder vegan essen möchte, sollte beim Kauf explizit nachfragen. Eifreie Chapati gibt es ebenfalls, diese gelten dann aber nicht mehr als echte Rolex.'
  },
  {
    q: 'Wo in Uganda findet man die beste Rolex?',
    a: 'Die beste Rolex findet man oft nicht an bekannten Touristenorten, sondern an gut besuchten Morgen- und Abendmärkten in Kampala, Jinja, Fort Portal oder Mbarara. Ein bekannter Standort für Rucksackreisende ist die Bujagali Chapati Company nahe Jinja am östlichen Nilufer des Nils. Generell gilt: Je mehr Einheimische an einem Stand stehen, desto frischer und authentischer ist die Rolex.'
  }
]

export default function UgandischeRolexPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Head
        title="Ugandische Rolex: Ugandas bekanntestes Streetfood"
        description="Die ugandische Rolex ist Ugandas bekanntestes Streetfood – Chapati mit Ei, frisch gerollt. Herkunft, Zubereitung und die besten Orte erklärt."
        canonical={`https://www.reiseziel-uganda.de/${SLUG}`}
      />
      <FaqJsonLd faqs={faqs} />
      <main className="bg-white">

        {/* Hero-Bild */}
        <figure className="w-full max-h-[480px] overflow-hidden">
          <img
            src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782126942082_jlwe.jpg"
            alt="Kinder aus der Nachbarschaft des Waisenhauses in Buhoma, Uganda – Juni 2026"
            className="w-full object-cover object-center"
            loading="eager"
          />
          <figcaption className="text-xs text-gray-500 text-center py-2 px-4">
            Buhoma, Uganda – Juni 2026. Foto: Mark Suer
          </figcaption>
        </figure>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Die ugandische Rolex: Alles über Ugandas bekanntestes Streetfood
          </h1>

          {/* Eröffnungs-Hook */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            An einem frühen Morgen im Juni 2026 besuchten wir in Buhoma, nahe dem Bwindi
            Impenetrable Forest, einen lokalen Hühnerfarmer. Der Mann betreibt seine kleine
            Zucht mit einer Sorgfalt, die man in dieser Region nicht selbstverständlich findet:
            jedes Küken einzeln beobachtet, die Haltungsbedingungen mit echter Überzeugung
            gestaltet. Wir hatten bereits mehrfach Küken für das nahegelegene Waisenhaus bei ihm
            gekauft – sowohl für die Eierproduktion als auch zur Fleischversorgung. Was dieser
            Besuch deutlich vor Augen führte: Eier sind in Uganda keine Nebensache. Sie sind
            Grundlage der Ernährung, wirtschaftliche Ressource und – in der Hand eines
            Straßenkoches – Hauptzutat des beliebtesten Gerichts des Landes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Dieses Gericht heißt ugandische Rolex. Nicht nach der Schweizer Uhr. Der Name
            kommt von „Rolled Eggs" – also gerollten Eiern – einem Begriff, den Ugander im
            Alltag zu „Rolex" verkürzt haben. Wer zum ersten Mal von einer Rolex hört und dann
            an einem Straßenstand in Kampala oder Jinja steht und zuschaut, wie der Koch das
            Chapati in der heißen Pfanne dreht, das Ei darauf aufschlägt und alles mit Gemüse
            zu einer festen Rolle wickelt, versteht sofort, warum dieser Name geblieben ist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Während meiner insgesamt vierzehn Besuche in Uganda – darunter mehrere längere
            Aufenthalte von zehn bis dreizehn Tagen – habe ich die Rolex in vielen Variationen
            gegessen: morgens vor dem Gorilla-Trekking in Buhoma, mittags am Nil in Jinja und
            abends auf den belebten Märkten Kampalas. Kein anderes Gericht erklärt so viel über
            den ugandischen Alltag wie dieses schlichte, sättigende Straßengericht.
          </p>

          {/* Fakten-Box */}
          <div className="bg-jungle-50 border border-jungle-200 rounded-2xl p-6 mb-10">
            <h2 className="font-display text-xl font-bold text-jungle-900 mb-4">
              Ugandische Rolex auf einen Blick
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex flex-col">
                <dt className="font-semibold text-jungle-800">Was es ist</dt>
                <dd className="text-gray-700">Gerolltes Chapati mit gebratenem Ei und Gemüse</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-semibold text-jungle-800">Namensherkunft</dt>
                <dd className="text-gray-700">„Rolled Eggs" → „Rolex" (kein Bezug zur Uhrmarke)</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-semibold text-jungle-800">Preis</dt>
                <dd className="text-gray-700">Ca. 2.000–4.000 UGX (etwa 0,50–1,00 EUR)</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-semibold text-jungle-800">Basiskomponenten</dt>
                <dd className="text-gray-700">Chapati, Ei, Zwiebeln, Tomaten, Kohl</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-semibold text-jungle-800">Varianten</dt>
                <dd className="text-gray-700">Mit Käse, Fleisch, Avocado oder süß (Nutella, Banane)</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-semibold text-jungle-800">Verfügbarkeit</dt>
                <dd className="text-gray-700">Landesweit, ganztägig – besonders morgens und abends</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-semibold text-jungle-800">Ernährungsform</dt>
                <dd className="text-gray-700">Klassisch vegetarisch, Fleischvarianten auf Nachfrage</dd>
              </div>
              <div className="flex flex-col">
                <dt className="font-semibold text-jungle-800">Besondere Stände</dt>
                <dd className="text-gray-700">Bujagali Chapati Company bei Jinja (täglich 5–24 Uhr)</dd>
              </div>
            </dl>
          </div>

          {/* H2: Geschichte */}
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-12 mb-4">
            Chapati in Ostafrika: Wie ein indisches Brot ugandisch wurde
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Um die Rolex zu verstehen, muss man das Chapati verstehen. Und um das Chapati zu
            verstehen, muss man ein Stück weiter in der Geschichte zurückgehen. Das dünne
            Fladenbrot kam nicht mit der ugandischen Küche auf die Welt. Es gelangte im späten
            19. und frühen 20. Jahrhundert mit indischen Arbeitern nach Ostafrika, die damals
            beim Bau der Uganda-Eisenbahn eingesetzt wurden – der berühmten Strecke von
            Mombasa an der kenianischen Küste bis nach Kampala. Diese Arbeiter brachten ihre
            Küche mit, und das Chapati hinterließ bleibende Spuren in den Kochgewohnheiten
            der Region.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Uganda fand das Chapati einen besonders fruchtbaren Boden. Es ließ sich einfach
            und günstig zubereiten, sättigte zuverlässig und ließ sich mit allem kombinieren,
            was auf Ugandas Märkten vorhanden war. Weizen, Öl, Salz und Wasser – mehr braucht
            es nicht für den Teig. Wer eine Pfanne und ein Feuer hatte, konnte Chapati herstellen.
            Dieser Umstand machte es zum idealen Straßengericht in einem Land, in dem Millionen
            Menschen täglich frühmorgens auf dem Weg zur Arbeit etwas Warmes und Billiges
            essen müssen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Irgendwann – vermutlich in Kampala, in den 1990er Jahren, auch wenn sich das
            genaue Datum nicht mehr rekonstruieren lässt – kam jemand auf die Idee, das fertig
            gebratene Chapati nicht einfach zur Seite zu legen, sondern das Ei direkt auf der
            noch heißen Oberfläche aufzuschlagen. Das Ergebnis: Das Ei verband sich mit dem
            Teig, ließ sich mit fein gehackten Zwiebeln, Tomaten und Kohl kombinieren und wurde
            dann zu einer kompakten, handlichen Rolle geformt. Schnell, warm, sättigend,
            günstig – die Rolex war geboren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Name folgte der Logik des Alltags. Auf Englisch heißt es „Rolled Eggs", und
            wer das schnell spricht, landet bei „Rolex". Ob der erste Namensgeber bewusst
            an die Luxusuhr gedacht hat oder ob das rein phonetisch passierte, lässt sich
            heute nicht mehr klären. Tatsache ist: Der Name sitzt. Jeder in Uganda weiß, was
            gemeint ist, wenn jemand sagt „I want a Rolex" – und kein Uhrmacher fühlt sich
            damit angesprochen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Heute ist die ugandische Rolex weit über die Grenzen Kampala bekannt. Sie wurde
            von Reisenden in aller Welt entdeckt, in internationalen Medien beschrieben und
            hat sogar ein eigenes Festival in Kampala, das sogenannte Rolex Festival, das
            jährlich Hunderttausende Besucher anzieht. Doch geblieben ist sie, was sie immer
            war: ein Gericht der einfachen Leute, bezahlbar für jeden und an jeder
            Straßenecke erhältlich.
          </p>

          {/* Inline-Bild: Hühnerfarmer */}
          <figure className="my-8 rounded-2xl overflow-hidden">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125464168_l7rh.jpg"
              alt="Hühnerfarmer in Buhoma mit Besuchern von Hope on the Road – Juni 2026"
              className="w-full object-cover max-h-80"
              loading="lazy"
            />
            <figcaption className="text-xs text-gray-500 text-center py-2 px-4">
              Lokaler Hühnerfarmer in Buhoma – seine Eier finden den Weg in die Küche und auf den Markt. Foto: Mark Suer, Juni 2026
            </figcaption>
          </figure>

          {/* H2: Zubereitung */}
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-12 mb-4">
            Zubereitung: Was eine gute Rolex ausmacht
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer einer ugandischen Köchin oder einem ugandischen Koch bei der Arbeit zusieht,
            versteht schnell, warum die Rolex trotz ihrer Einfachheit handwerkliches Geschick
            verlangt. Der Prozess beginnt mit dem Chapati. Der Teig wird aus Weizenmehl, etwas
            Öl, Salz und Wasser gemischt und dann in kleine Portionen aufgeteilt. Jede Portion
            wird dünn ausgerollt – die besten Chapati sind so gleichmäßig und fast durchsichtig
            dünn, dass man die Hand dahinter sehen könnte – und dann in einer trockenen oder
            leicht geölten Pfanne über hoher Hitze von beiden Seiten gebraten. Ein gutes Chapati
            hat kleine braune Flecken auf der Oberfläche, ist innen noch leicht weich und
            hat außen eine dünne, knusprige Schicht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sobald das Chapati fertig ist, kommt es entscheidend auf das Timing an. Das Ei –
            in der Regel ein Hühnerei, wie es auf Ugandas Märkten allgegenwärtig ist –
            wird direkt auf dem noch heißen Chapati aufgeschlagen und mit einer Gabel oder
            einem Stäbchen leicht verteilt. Gleichzeitig kommen die Gemüsezutaten dazu:
            fein gehackte Zwiebeln, kleingeschnittene Tomaten, geriebener Kohl, manchmal
            auch etwas Koriander. Manche Stands bieten auf Wunsch auch Avocado, Käse oder
            gekochte Hühnerfleischstreifen an.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Das Ei gart in der Restwärme des Chapati und verbindet sich mit dem Fladenbrot zu
            einer kompakten Schicht. Ist es durch, wird das Chapati von der Seite aufgerollt
            oder in ein Stück Papier oder Zeitungspapier gewickelt – fertig ist die Rolex.
            Das Ganze dauert keine drei Minuten. Der Koch – auf Englisch oft „chapati man" oder
            „chapati lady" genannt – arbeitet routiniert, mehrere Pfannen gleichzeitig, oft
            mit einer langen Warteschlange hungriger Kunden dahinter.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Was eine außergewöhnliche Rolex von einer mittelmäßigen unterscheidet, lässt sich
            schwer in Zahlen fassen, aber mit Erfahrung erkennt man es sofort. Das Chapati
            muss frisch sein, nicht von gestern aufgewärmt. Das Ei darf nicht übergaren,
            sonst verliert die Füllung ihre weiche Konsistenz. Das Gemüse sollte knackig
            und frisch sein, nicht matschig. Und das Verhältnis zwischen Chapati, Ei und
            Gemüse muss stimmen: zu viel Chapati, und die Füllung fehlt; zu viel Gemüse,
            und das Ganze lässt sich nicht mehr ordentlich rollen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Eine Besonderheit, die in ugandischen Tourismusstädten zunehmend angeboten wird:
            die süße Rolex-Variante. Statt Ei und Gemüse kommen Nutella und frische
            Bananenscheiben auf das Chapati. Diese Kombination klingt zunächst ungewöhnlich,
            schmeckt aber erstaunlich gut – vor allem als süßes Frühstück oder Snack am
            Nachmittag. An der Bujagali Chapati Company nahe Jinja, einem Stand, der
            besonders bei Rucksackreisenden beliebt ist, wird diese Variante für etwa
            3.500 ugandische Schilling angeboten.
          </p>

          {/* H2: Wo in Uganda */}
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-12 mb-4">
            Von Kampala bis Buhoma: Wo man die Rolex findet
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die ugandische Rolex ist kein regionales Phänomen. Sie existiert im ganzen Land,
            von der Hauptstadt bis in entlegene Marktflecken im Westen. Wer aber nach den
            besten Rolex-Ständen sucht, landet früher oder später in Kampala.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Kampala, Ugandas pulsierender Hauptstadt, gibt es kaum eine Straßenkreuzung,
            an der kein Chapati-Stand steht. Die Stände öffnen oft schon vor Sonnenaufgang
            und bedienen Arbeiter, Schüler und Händler auf dem Weg zu den Märkten und
            Büros. Die geschäftigsten Stunden sind der frühe Morgen und der Abend nach
            Feierabend. Wer in Kampala eine authentische Rolex sucht, sollte sich von den
            Touristen-Restaurants fernhalten und einfach durch die Wohnviertel schlendern –
            dort, wo Einheimische in kleinen Gruppen am Stand stehen, stimmt in der Regel
            die Qualität.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Jinja, der Stadt am Victoriasee-Ausfluss und Ausgangspunkt für Nilrafting-Touren,
            hat sich die Rolex ebenfalls fest etabliert. Besonders bekannt ist die bereits
            erwähnte Bujagali Chapati Company, die gegenüber dem Eingang zum Explorers
            River Camp liegt. Dieser Stand hat sich über Jahre einen Namen gemacht und ist
            heute so populär, dass er von mehreren ähnlichen Konzepten in unmittelbarer
            Nähe umgeben wird. Das ist das schönste Kompliment, das ein Straßenstand
            bekommen kann.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Buhoma, dem kleinen Ort am westlichen Eingang zum Bwindi Impenetrable
            National Park, ist das Angebot bescheidener, aber nicht weniger authentisch.
            Samstags ist in Buhoma Markttag – dann öffnen auch kleine Stände, die Chapati
            und Rolex anbieten. An den anderen Tagen findet man Rolex hauptsächlich in
            den einfachen Restaurants und Guesthouses entlang der Hauptstraße. Wer
            mehrere Tage in Buhoma verbringt, um Gorillas zu tracken, wird das morgendliche
            Chapati-Frühstück schnell zu schätzen wissen – es hält warm und satt, bevor
            man stundenlange Touren durch dichten Regenwald antritt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Fort Portal, dem Ausgangspunkt für die Crater Lakes Region und den Kibale
            National Park, sowie in Mbarara im Südwesten des Landes gibt es ebenfalls
            aktive Streetfood-Szenen. Auch in diesen Städten ist die Rolex allgegenwärtig.
            Ein praktischer Hinweis aus eigener Erfahrung: Wer früh am Markt ist –
            zwischen 6 und 8 Uhr morgens – bekommt die frischeste Ware.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Weniger bekannt, aber ebenso real: Auf langen Busfahrten quer durch Uganda
            halten die Fahrzeuge regelmäßig an kleinen Ortschaften, wo Händlerinnen
            und Händler an die Busfenster treten und Rolex, Matooke (gekochte Kochbanane)
            und gebratene Erdnüsse verkaufen. Diese kurzen Stopps gehören zum ugandischen
            Reisealltag und bieten oft die echtesten kulinarischen Begegnungen – aus dem
            Fenster gekauft, auf dem Schoß gegessen, während das Land vorbeizieht.
          </p>

          {/* H2: Gesellschaft und Bedeutung */}
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-12 mb-4">
            Mehr als Essen: Was die Rolex über Uganda erzählt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Es gibt Gerichte, die ein Land beschreiben wie kein Reiseführer es könnte.
            Die ugandische Rolex gehört dazu. Sie entstand nicht in einer Profiküche und
            wurde nicht von Ernährungswissenschaftlern entwickelt. Sie entstand aus der
            täglichen Not heraus: billig, schnell, sättigend, verfügbar. Und genau deshalb
            erzählt sie von Uganda auf eine Art, die kein Hochglanzprospekt kann.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer in Uganda Rolex kauft, unterstützt direkt kleine Einzelunternehmer – oft
            junge Frauen und Männer, die sich mit einem Gasherd, einer Pfanne und ein paar
            Kilogramm Mehl einen Lebensunterhalt aufgebaut haben. Der wirtschaftliche
            Hintergrund dieser Straßenhändler ist selten komfortabel, aber ihre
            Eigenständigkeit ist beeindruckend. Uganda gehört zu den Ländern mit einer
            der höchsten Unternehmerdichten Afrikas, und die Chapati-Stände sind
            Ausdruck genau dieser Mentalität: Initiative, Anpassungsfähigkeit,
            lokale Ressourcen nutzen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Der Besuch beim Hühnerfarmer in Buhoma im Juni 2026 hat das auf persönliche
            Weise verdeutlicht. Dieser Mann züchtet Hühner nicht für den Export oder
            für den Supermarkt. Er beliefert das Waisenhaus in der Nachbarschaft und
            die Köchinnen auf dem lokalen Markt. Seine Eier landen auf den Chapati-Pfannen
            der Region. Die Kette ist kurz, die Wertschöpfung bleibt vor Ort.
            [ZITAT: Lokaler Hühnerfarmer Buhoma – über die Nachfrage nach Eiern vom Markt]
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Das jährliche Rolex Festival in Kampala, das von der Kochkunstszene der Stadt
            organisiert wird, zeigt, wie aus einem Straßengericht ein nationales Symbol
            werden kann. Das Festival versammelt Hunderte von Köchinnen und Köchen, die
            gegeneinander antreten, um die beste, kreativste oder traditionellste Rolex
            zu produzieren. Es gibt Preisgelder, Medienpräsenz und – im besten Fall –
            neue Kunden für die Gewinner. Das Festival ist nicht eitel. Es ist ein echter
            Wirtschaftsimpuls für die Menschen, die hinter diesen Ständen stehen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Für Reisende ist die Rolex der einfachste Einstieg in die ugandische Esskultur.
            Sie ist ohne Vorkenntnisse bestellbar, erschwinglich für jeden Budget, sicher
            zubereitet wenn man heiß gegarte Stände wählt, und sie schafft Momente echten
            Kontakts. Der kurze Austausch mit dem Koch über die gewünschten Zutaten, das
            Warten in der kleinen Schlange neben den Einheimischen, das erste Abbeißen
            von der noch dampfenden Rolle – das sind keine touristischen Inszenierungen.
            Das ist der ugandische Alltag, und man wird darin für einen Moment eingeladen.
          </p>

          {/* Inline-Bild: Kinder Buhoma */}
          <figure className="my-8 rounded-2xl overflow-hidden">
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1782125542350_50o7.jpg"
              alt="Gemeinschaft in Buhoma – Menschen unterschiedlichen Alters vor einem Gebäude mit Wellblechdach, Juni 2026"
              className="w-full object-cover max-h-80"
              loading="lazy"
            />
            <figcaption className="text-xs text-gray-500 text-center py-2 px-4">
              Gemeinschaft in Buhoma – gemeinsames Essen gehört zum täglichen Miteinander. Foto: Mark Suer, Juni 2026
            </figcaption>
          </figure>

          {/* H2: Für Reisende */}
          <h2 className="font-display text-2xl font-bold text-gray-900 mt-12 mb-4">
            Praktische Hinweise für Reisende: Rolex kaufen, essen, genießen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wer zum ersten Mal eine ugandische Rolex kauft, steht oft etwas ratlos vor dem
            Stand, weil man nicht genau weiß, wie die Bestellung funktioniert. Das Prinzip
            ist einfach: Man sagt, wie viele Rolex man möchte, und ergänzt auf Wunsch die
            Extras. „One rolex, add cheese" oder „one rolex, add avocado" – das reicht in
            den meisten Fällen. Vegetarier und Veganer können nach einer Variante ohne Ei
            fragen, die es manchmal gibt (dann ist es schlicht ein Gemüse-Chapati, aber der
            Begriff Rolex bleibt trotzdem oft im Umlauf).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zur Frage der Lebensmittelsicherheit: Rolex von gut besuchten Ständen mit
            sichtbar frischer Zubereitung ist in der Regel unproblematisch. Das Ei gart
            bei hoher Temperatur durch, das Chapati wird komplett durchgebraten. Kritischer
            sind Stände, die vorgefertigte Rolex anbieten, die bereits abgekühlt sind und
            nur aufgewärmt werden – hier ist Vorsicht geboten. Ein frisch vor den Augen
            zubereitetes Gericht ist immer die sicherere Wahl.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die beste Reisezeit für Uganda generell – also die Monate mit angenehmen
            Temperaturen und regenfreien Perioden – deckt sich mit den Zeiten, in denen
            auch Ugandas Märkte und Straßenleben am aktivsten sind. In den Trockenzeiten
            (Dezember bis Februar sowie Juni bis August) sind die Märkte gut versorgt,
            das Gemüse ist frisch, und der Kauf einer Rolex am Morgen lässt sich bequem
            mit einem Spaziergang durch den lokalen Markt verbinden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Für Kinder und Familien ist die Rolex ein unkompliziertes Gericht. Die milde
            Würzung – kein scharfes Chili, kein intensives Gewürz – macht sie auch für
            jüngere Gaumen geeignet. In der Nähe von Buhoma hatten wir beobachtet, dass
            selbst die jüngsten Kinder aus der Nachbarschaft – von denen manche
            sichtlich wenig zu essen hatten – mit großem Appetit dabei waren, als wir
            sie zum Essen einluden. Das gemeinsame Chapati-Essen hatte an diesem
            Morgen etwas Selbstverständliches, das keine Erklärungen brauchte.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Ein letzter Hinweis: Wer nach Uganda reist und dort für längere Zeit ist,
            wird feststellen, dass die Rolex nicht nur ein Gericht ist, sondern ein
            Taktgeber des Tages. Morgens vor dem Aufbruch, mittags zwischen zwei
            Programmpunkten, abends nach einer langen Safaritour – die Rolex ist immer
            da. Sie ist das, was in Uganda „schnell noch etwas essen" bedeutet, und
            sie schmeckt nach zehn Mal immer noch genauso gut wie nach dem ersten.
          </p>

          {/* PagePhotos */}
          <PagePhotos slug={SLUG} title="Eindrücke aus Uganda" />

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Häufige Fragen zur ugandischen Rolex
            </h2>
            <div className="space-y-3">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                    <span className="text-jungle-600 text-xl flex-shrink-0">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-5 py-4 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-200">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interne Links */}
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
              Weiter entdecken: Uganda als Reiseziel
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/regionen/kampala"
                className="block p-4 rounded-xl border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 block mb-1">Kampala entdecken</span>
                <span className="text-sm text-gray-600">Ugandas pulsierende Hauptstadt: Märkte, Streetfood und urbanes Leben</span>
              </a>
              <a
                href="/regionen/jinja"
                className="block p-4 rounded-xl border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 block mb-1">Jinja – Quelle des Nils</span>
                <span className="text-sm text-gray-600">Nilrafting, entspannte Atmosphäre und die besten Chapati-Stände der Region</span>
              </a>
              <a
                href="/regionen/buhoma"
                className="block p-4 rounded-xl border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 block mb-1">Buhoma: Tor zum Bwindi-Wald</span>
                <span className="text-sm text-gray-600">Das kleine Dorf am Eingang zum Bwindi Impenetrable National Park</span>
              </a>
              <a
                href="/regionen/fort-portal"
                className="block p-4 rounded-xl border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 block mb-1">Fort Portal und die Crater Lakes</span>
                <span className="text-sm text-gray-600">Westuganda: Vulkankrater-Seen, Teeplantagen und lokale Küche</span>
              </a>
              <a
                href="/beste-reisezeit-uganda"
                className="block p-4 rounded-xl border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 block mb-1">Beste Reisezeit für Uganda</span>
                <span className="text-sm text-gray-600">Wann die Märkte und Straßenstände am besten versorgt sind</span>
              </a>
              <a
                href="/nachhaltiger-tourismus-uganda"
                className="block p-4 rounded-xl border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 block mb-1">Nachhaltiger Tourismus in Uganda</span>
                <span className="text-sm text-gray-600">Wie Reisende lokale Wirtschaft direkt unterstützen – auch beim Essen</span>
              </a>
              <a
                href="/uganda-reisetipps"
                className="block p-4 rounded-xl border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 block mb-1">Uganda Reisetipps</span>
                <span className="text-sm text-gray-600">Praktische Hinweise für die Reisevorbereitung und den Alltag vor Ort</span>
              </a>
              <a
                href="/reiseplanung"
                className="block p-4 rounded-xl border border-gray-200 hover:border-jungle-400 hover:bg-jungle-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 block mb-1">Reiseplanung Uganda</span>
                <span className="text-sm text-gray-600">Von der Route bis zum Permit: Alles für eine gut geplante Uganda-Reise</span>
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
