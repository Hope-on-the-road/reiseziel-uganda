import { Routes, Route, Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { usePhotos, usePhotosByCluster } from './usePhotos.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import EntdeckenSection from './components/EntdeckenSection.jsx'
import NationalparksSection from './components/NationalparksSection.jsx'
import GorillaSection from './components/GorillaSection.jsx'
import TiereSection from './components/TiereSection.jsx'
import PlanungSection from './components/PlanungSection.jsx'
import RegionenSection from './components/RegionenSection.jsx'
import GalerieSection from './components/GalerieSection.jsx'
import Footer from './components/Footer.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import HomeSeo from './components/seo/HomeSeo.jsx'

// Lazy-loaded page components for code splitting
const NationalparkPage = lazy(() => import('./pages/NationalparkPage.jsx'))
const GorillaPage = lazy(() => import('./pages/GorillaPage.jsx'))
const ReiseplanungPage = lazy(() => import('./pages/ReiseplanungPage.jsx'))
const TierePage = lazy(() => import('./pages/TierePage.jsx'))
const RegionPage = lazy(() => import('./pages/RegionPage.jsx'))
const RundreisenPage = lazy(() => import('./pages/RundreisenPage.jsx'))
const VergleichPage = lazy(() => import('./pages/VergleichPage.jsx'))
const HubPage = lazy(() => import('./pages/HubPage.jsx'))
const RezeptePage = lazy(() => import('./pages/RezeptePage.jsx'))
const FlughafenPage = lazy(() => import('./pages/FlughafenPage.jsx'))
const NachbarlaenderPage = lazy(() => import('./pages/NachbarlaenderPage.jsx'))
const WirtschaftPage = lazy(() => import('./pages/WirtschaftPage.jsx'))
const StandalonePage = lazy(() => import('./pages/StandalonePage.jsx'))

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-gold-400/30 border-t-gold-400 rounded-full animate-spin" />
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-display font-bold text-safari-300 mb-4">404</p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Seite nicht gefunden</h1>
        <p className="text-gray-500 text-sm mb-8">Diese Seite existiert leider nicht. Vielleicht findest du auf der Startseite, was du suchst.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-jungle-600 text-white rounded-xl text-sm font-medium hover:bg-jungle-700 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Zur Startseite
        </Link>
      </div>
    </div>
  )
}

function HomePage({ photos, clusters }) {
  return (
    <>
      <HomeSeo />
      <Hero photos={photos} />
      <EntdeckenSection photos={photos} clusters={clusters} />
      <NationalparksSection clusters={clusters} />
      <GorillaSection photos={clusters.gorilla || []} />
      <TiereSection clusters={clusters} />
      <PlanungSection photos={photos} />
      <RegionenSection clusters={clusters} />
      <GalerieSection photos={photos} />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function RouteErrorBoundary({ children }) {
  const { pathname } = useLocation()
  return <ErrorBoundary key={pathname}>{children}</ErrorBoundary>
}

function RuandaPage({ photos, clusters }) {
  const { pageId } = useParams()
  return <StandalonePage photos={photos} clusters={clusters} pageId={pageId} />
}

export default function App() {
  const { photos, loaded } = usePhotos()
  const clusters = usePhotosByCluster(photos)

  if (!loaded) {
    return (
      <div className="min-h-screen bg-jungle-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold-400/30 border-t-gold-400 rounded-full animate-spin mx-auto mb-6" />
          <p className="text-white/60 text-lg font-display">Die Perle Afrikas laedt...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <RouteErrorBoundary>
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage photos={photos} clusters={clusters} />} />
          <Route path="/nationalparks/:parkId" element={<NationalparkPage photos={photos} clusters={clusters} />} />
          <Route path="/gorilla-trekking" element={<GorillaPage photos={photos} clusters={clusters} />} />
          <Route path="/reiseplanung" element={<StandalonePage photos={photos} clusters={clusters} pageId="reiseplanung" />} />
          <Route path="/reiseplanung/:topicId" element={<ReiseplanungPage />} />
          <Route path="/tiere/:tierId" element={<TierePage photos={photos} clusters={clusters} />} />
          <Route path="/regionen/:regionId" element={<RegionPage photos={photos} clusters={clusters} />} />
          <Route path="/rundreisen/:reiseId" element={<RundreisenPage photos={photos} />} />
          <Route path="/vergleiche/:vergleichId" element={<VergleichPage photos={photos} />} />
          <Route path="/nationalparks-uganda" element={<HubPage photos={photos} clusters={clusters} hubId="nationalparks-uganda" />} />
          <Route path="/tiere-uganda" element={<HubPage photos={photos} clusters={clusters} hubId="tiere-uganda" />} />
          <Route path="/ugandische-kueche" element={<RezeptePage photos={photos} clusters={clusters} rezeptId="ugandische-kueche" />} />
          <Route path="/flughaefen-uganda" element={<FlughafenPage photos={photos} clusters={clusters} />} />
          <Route path="/nachbarlaender-uganda" element={<NachbarlaenderPage photos={photos} clusters={clusters} />} />
          <Route path="/wirtschaft-uganda" element={<WirtschaftPage photos={photos} clusters={clusters} />} />
          <Route path="/staedte" element={<StandalonePage photos={photos} clusters={clusters} pageId="staedte" />} />
          <Route path="/staedte-in-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="staedte-in-uganda" />} />
          <Route path="/der-nil-in-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="der-nil-in-uganda" />} />
          <Route path="/welche-tiere-leben-im-viktoriasee" element={<StandalonePage photos={photos} clusters={clusters} pageId="welche-tiere-leben-im-viktoriasee" />} />
          <Route path="/sehenswuerdigkeiten" element={<StandalonePage photos={photos} clusters={clusters} pageId="sehenswuerdigkeiten" />} />
          <Route path="/sipi-falls" element={<StandalonePage photos={photos} clusters={clusters} pageId="sipi-falls" />} />
          <Route path="/wanderung-zu-den-sipi-falls" element={<Navigate to="/sipi-falls" replace />} />
          <Route path="/spenden" element={<StandalonePage photos={photos} clusters={clusters} pageId="spenden" />} />
          <Route path="/butiru-freundeskreis" element={<StandalonePage photos={photos} clusters={clusters} pageId="butiru-freundeskreis" />} />
          <Route path="/hopekitchen-buhoma" element={<StandalonePage photos={photos} clusters={clusters} pageId="hopekitchen-buhoma" />} />
          <Route path="/rolex-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="rolex-uganda" />} />
          <Route path="/ugandische-mahlzeit" element={<StandalonePage photos={photos} clusters={clusters} pageId="ugandische-mahlzeit" />} />
          <Route path="/katogo-fruehstueck" element={<StandalonePage photos={photos} clusters={clusters} pageId="katogo-fruehstueck" />} />
          <Route path="/uganda-ostafrika-vergleich" element={<StandalonePage photos={photos} clusters={clusters} pageId="uganda-ostafrika-vergleich" />} />
          <Route path="/beste-reisezeit-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="beste-reisezeit-uganda" />} />
          <Route path="/primaten-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="primaten-uganda" />} />
          <Route path="/schimpansen-trekking" element={<StandalonePage photos={photos} clusters={clusters} pageId="schimpansen-trekking" />} />
          <Route path="/uganda-als-frau-allein-reisen" element={<StandalonePage photos={photos} clusters={clusters} pageId="uganda-als-frau-allein-reisen" />} />
          <Route path="/uganda-mit-kindern" element={<StandalonePage photos={photos} clusters={clusters} pageId="uganda-mit-kindern" />} />
          <Route path="/sprachen-in-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="sprachen-in-uganda" />} />
          <Route path="/gorilla-trekking-erfahrungsbericht" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-trekking-erfahrungsbericht" />} />
          <Route path="/ueber-uns" element={<StandalonePage photos={photos} clusters={clusters} pageId="ueber-uns" />} />
          <Route path="/impressum" element={<StandalonePage photos={photos} clusters={clusters} pageId="impressum" />} />
          <Route path="/datenschutz" element={<StandalonePage photos={photos} clusters={clusters} pageId="datenschutz" />} />
          <Route path="/erlebnisse/vogelbeobachten-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="vogelbeobachten-uganda" />} />
          <Route path="/erlebnisse/rwenzori-marathon" element={<StandalonePage photos={photos} clusters={clusters} pageId="rwenzori-marathon" />} />
          <Route path="/rwenzori-vs-kilimanjaro" element={<StandalonePage photos={photos} clusters={clusters} pageId="rwenzori-vs-kilimanjaro" />} />
          <Route path="/rwenzori-trekking" element={<StandalonePage photos={photos} clusters={clusters} pageId="rwenzori-trekking" />} />
          <Route path="/fort-portal-reisefuehrer" element={<StandalonePage photos={photos} clusters={clusters} pageId="fort-portal-reisefuehrer" />} />
          <Route path="/sempaya-hot-springs" element={<StandalonePage photos={photos} clusters={clusters} pageId="sempaya-hot-springs" />} />
          <Route path="/kiwa-hot-springs" element={<StandalonePage photos={photos} clusters={clusters} pageId="kiwa-hot-springs" />} />
          <Route path="/karamoja-vs-rwenzori" element={<StandalonePage photos={photos} clusters={clusters} pageId="karamoja-vs-rwenzori" />} />
          <Route path="/tooro-koenigspalast" element={<StandalonePage photos={photos} clusters={clusters} pageId="tooro-koenigspalast" />} />
          <Route path="/uganda-tourismus-2030" element={<StandalonePage photos={photos} clusters={clusters} pageId="uganda-tourismus-2030" />} />
          <Route path="/kultur/bakonzo-volk" element={<StandalonePage photos={photos} clusters={clusters} pageId="bakonzo-volk" />} />
          <Route path="/kultur/tooro-koenigreich" element={<StandalonePage photos={photos} clusters={clusters} pageId="tooro-koenigreich" />} />
          <Route path="/gorilla-permit-verfuegbarkeit" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-permit-verfuegbarkeit" />} />
          <Route path="/schimpansen-habituation-chex" element={<StandalonePage photos={photos} clusters={clusters} pageId="schimpansen-habituation-chex" />} />
          <Route path="/uganda-nebensaison" element={<StandalonePage photos={photos} clusters={clusters} pageId="uganda-nebensaison" />} />
          <Route path="/uganda-fuer-deutsche" element={<StandalonePage photos={photos} clusters={clusters} pageId="uganda-fuer-deutsche" />} />
          <Route path="/uganda-tourismus-statistik" element={<StandalonePage photos={photos} clusters={clusters} pageId="uganda-tourismus-statistik" />} />
          <Route path="/pangolin-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="pangolin-uganda" />} />
          <Route path="/berggorilla-naturschutz" element={<StandalonePage photos={photos} clusters={clusters} pageId="berggorilla-naturschutz" />} />
          <Route path="/unterkunft-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="unterkunft-uganda" />} />
          <Route path="/lodges-bwindi-lake-bunyonyi" element={<StandalonePage photos={photos} clusters={clusters} pageId="lodges-bwindi-lake-bunyonyi" />} />
          <Route path="/hotels-uganda-regionen" element={<StandalonePage photos={photos} clusters={clusters} pageId="hotels-uganda-regionen" />} />
          <Route path="/oekotourismus-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="oekotourismus-uganda" />} />
          <Route path="/gorilla-arten-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-arten-uganda" />} />
          <Route path="/gorilla-trekking-buhoma" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-trekking-buhoma" />} />
          <Route path="/gorilla-population-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-population-uganda" />} />
          <Route path="/bodaboda-buhoma" element={<StandalonePage photos={photos} clusters={clusters} pageId="bodaboda-buhoma" />} />
          <Route path="/inseln-lake-bunyonyi" element={<StandalonePage photos={photos} clusters={clusters} pageId="inseln-lake-bunyonyi" />} />
          <Route path="/kabale-bwindi" element={<StandalonePage photos={photos} clusters={clusters} pageId="kabale-bwindi" />} />
          <Route path="/gorilla-familien-bwindi" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-familien-bwindi" />} />
          <Route path="/gorilla-trekking-sicherheit" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-trekking-sicherheit" />} />
          <Route path="/lake-bunyonyi-community" element={<StandalonePage photos={photos} clusters={clusters} pageId="lake-bunyonyi-community" />} />
          <Route path="/vulkane-mgahinga" element={<StandalonePage photos={photos} clusters={clusters} pageId="vulkane-mgahinga" />} />
          <Route path="/kisoro" element={<StandalonePage photos={photos} clusters={clusters} pageId="kisoro" />} />
          <Route path="/leonard-sharp-bwama-island" element={<StandalonePage photos={photos} clusters={clusters} pageId="leonard-sharp-bwama-island" />} />
          <Route path="/community-tourismus-bwindi" element={<StandalonePage photos={photos} clusters={clusters} pageId="community-tourismus-bwindi" />} />
          <Route path="/anreise-bwindi" element={<StandalonePage photos={photos} clusters={clusters} pageId="anreise-bwindi" />} />
          <Route path="/bwindi-wellness" element={<StandalonePage photos={photos} clusters={clusters} pageId="bwindi-wellness" />} />
          <Route path="/lake-mutanda-mulehe" element={<StandalonePage photos={photos} clusters={clusters} pageId="lake-mutanda-mulehe" />} />
          <Route path="/batwa-trail-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="batwa-trail-uganda" />} />
          <Route path="/virunga-conservation-area" element={<StandalonePage photos={photos} clusters={clusters} pageId="virunga-conservation-area" />} />
          <Route path="/vogelbeobachten-kibale-bigodi" element={<StandalonePage photos={photos} clusters={clusters} pageId="vogelbeobachten-kibale-bigodi" />} />
          <Route path="/mabira-forest-voegel" element={<StandalonePage photos={photos} clusters={clusters} pageId="mabira-forest-voegel" />} />
          <Route path="/baumkletternde-loewen" element={<StandalonePage photos={photos} clusters={clusters} pageId="baumkletternde-loewen" />} />
          <Route path="/nashorn-rueckkehr-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="nashorn-rueckkehr-uganda" />} />
          <Route path="/goldene-affen-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="goldene-affen-uganda" />} />
          <Route path="/grauer-papagei-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="grauer-papagei-uganda" />} />
          <Route path="/derby-eland-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="derby-eland-uganda" />} />
          <Route path="/colobus-affe-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="colobus-affe-uganda" />} />
          <Route path="/uganda-kob-antilope" element={<StandalonePage photos={photos} clusters={clusters} pageId="uganda-kob-antilope" />} />
          <Route path="/elefanten-safari-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="elefanten-safari-uganda" />} />
          <Route path="/nilpferd-safari-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="nilpferd-safari-uganda" />} />
          <Route path="/nilkrokodil-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="nilkrokodil-uganda" />} />
          <Route path="/nubische-giraffe-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="nubische-giraffe-uganda" />} />
          <Route path="/leoparden-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="leoparden-uganda" />} />
          <Route path="/chamaelaeon-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="chamaelaeon-uganda" />} />
          <Route path="/python-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="python-uganda" />} />
          <Route path="/schuhschnabel-mabamba" element={<StandalonePage photos={photos} clusters={clusters} pageId="schuhschnabel-mabamba" />} />
          <Route path="/strauss-kidepo" element={<StandalonePage photos={photos} clusters={clusters} pageId="strauss-kidepo" />} />
          <Route path="/walking-safari-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="walking-safari-uganda" />} />
          <Route path="/nachtsafari-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="nachtsafari-uganda" />} />
          <Route path="/boot-safari-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="boot-safari-uganda" />} />
          <Route path="/elefanten-tracking-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="elefanten-tracking-uganda" />} />
          <Route path="/reptilien-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="reptilien-uganda" />} />
          <Route path="/primate-tracking-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="primate-tracking-uganda" />} />
          <Route path="/kidepo-safari-guide" element={<StandalonePage photos={photos} clusters={clusters} pageId="kidepo-safari-guide" />} />
          <Route path="/vogelbeobachten-queen-elizabeth" element={<StandalonePage photos={photos} clusters={clusters} pageId="vogelbeobachten-queen-elizabeth" />} />
          <Route path="/wilderei-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="wilderei-uganda" />} />
          <Route path="/gorilla-trekking-ethik" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-trekking-ethik" />} />
          <Route path="/bushmeat-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="bushmeat-uganda" />} />
          <Route path="/human-wildlife-conflict-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="human-wildlife-conflict-uganda" />} />
          <Route path="/cites-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="cites-uganda" />} />
          <Route path="/elfenbein-schmuggel-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="elfenbein-schmuggel-uganda" />} />
          <Route path="/greater-virunga-collaboration" element={<StandalonePage photos={photos} clusters={clusters} pageId="greater-virunga-collaboration" />} />
          <Route path="/uwa-anti-poaching" element={<StandalonePage photos={photos} clusters={clusters} pageId="uwa-anti-poaching" />} />
          <Route path="/revenue-sharing-nationalparks-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="revenue-sharing-nationalparks-uganda" />} />
          <Route path="/klimawandel-wildlife-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="klimawandel-wildlife-uganda" />} />
          <Route path="/ranger-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="ranger-uganda" />} />
          <Route path="/wildtier-zahlen-2025" element={<StandalonePage photos={photos} clusters={clusters} pageId="wildtier-zahlen-2025" />} />
          <Route path="/kidepo-nashorn-2025" element={<StandalonePage photos={photos} clusters={clusters} pageId="kidepo-nashorn-2025" />} />
          <Route path="/ziwa-rhino-sanctuary" element={<StandalonePage photos={photos} clusters={clusters} pageId="ziwa-rhino-sanctuary" />} />
          <Route path="/mt-elgon-trekking-guide" element={<StandalonePage photos={photos} clusters={clusters} pageId="mt-elgon-trekking-guide" />} />
          <Route path="/semuliki-tieflandregenwald" element={<StandalonePage photos={photos} clusters={clusters} pageId="semuliki-tieflandregenwald" />} />
          <Route path="/lake-mburo-zebra-safari" element={<StandalonePage photos={photos} clusters={clusters} pageId="lake-mburo-zebra-safari" />} />
          <Route path="/mgahinga-vs-bwindi" element={<StandalonePage photos={photos} clusters={clusters} pageId="mgahinga-vs-bwindi" />} />
          <Route path="/pian-upe-wildlife-reserve" element={<StandalonePage photos={photos} clusters={clusters} pageId="pian-upe-wildlife-reserve" />} />
          <Route path="/tiere-ugandische-kultur" element={<StandalonePage photos={photos} clusters={clusters} pageId="tiere-ugandische-kultur" />} />
          <Route path="/bamasaba-colobus-tradition" element={<StandalonePage photos={photos} clusters={clusters} pageId="bamasaba-colobus-tradition" />} />
          <Route path="/wildtier-wirtschaft-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="wildtier-wirtschaft-uganda" />} />
          <Route path="/problem-animal-management-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="problem-animal-management-uganda" />} />
          <Route path="/zoonosen-wildlife-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="zoonosen-wildlife-uganda" />} />
          <Route path="/illegaler-holzeinschlag-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="illegaler-holzeinschlag-uganda" />} />
          <Route path="/wildlife-crime-terrorismus-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="wildlife-crime-terrorismus-uganda" />} />
          <Route path="/bushara-island-camp" element={<StandalonePage photos={photos} clusters={clusters} pageId="bushara-island-camp" />} />
          <Route path="/grenzen-uganda-ruanda-kongo" element={<StandalonePage photos={photos} clusters={clusters} pageId="grenzen-uganda-ruanda-kongo" />} />
          <Route path="/packliste-gorilla-tracking-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="packliste-gorilla-tracking-uganda" />} />
          <Route path="/hotel-ruanda-geschichte-kigalis" element={<StandalonePage photos={photos} clusters={clusters} pageId="hotel-ruanda-geschichte-kigalis" />} />
          <Route path="/lodges-murchison-falls" element={<StandalonePage photos={photos} clusters={clusters} pageId="lodges-murchison-falls" />} />
          <Route path="/gorilla-trekking-budget-bwindi" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-trekking-budget-bwindi" />} />
          <Route path="/nachhaltiger-tourismus-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="nachhaltiger-tourismus-uganda" />} />
          <Route path="/duerre-armut-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="duerre-armut-uganda" />} />
          <Route path="/bwindi-artenvielfalt" element={<StandalonePage photos={photos} clusters={clusters} pageId="bwindi-artenvielfalt" />} />
          <Route path="/umweltaudit-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="umweltaudit-uganda" />} />
          <Route path="/schimpansen-tracking-kyambura-gorge" element={<StandalonePage photos={photos} clusters={clusters} pageId="schimpansen-tracking-kyambura-gorge" />} />
          <Route path="/nema-umweltschutz-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="nema-umweltschutz-uganda" />} />
          <Route path="/route-ost-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="route-ost-uganda" />} />
          <Route path="/jinja-sehenswuerdigkeiten" element={<StandalonePage photos={photos} clusters={clusters} pageId="jinja-sehenswuerdigkeiten" />} />
          <Route path="/murchison-falls-nationalpark" element={<StandalonePage photos={photos} clusters={clusters} pageId="murchison-falls-nationalpark" />} />
          <Route path="/ruanda/:pageId" element={<RuandaPage photos={photos} clusters={clusters} />} />
          <Route path="/akagera-nationalpark" element={<Navigate to="/ruanda/akagera-nationalpark" replace />} />
          <Route path="/murchison-nationalpark" element={<Navigate to="/murchison-falls-nationalpark" replace />} />
          <Route path="/jinja" element={<Navigate to="/regionen/jinja" replace />} />
          <Route path="/hauptstadt-ugandas" element={<StandalonePage photos={photos} clusters={clusters} pageId="hauptstadt-ugandas" />} />
          <Route path="/gesundheitsversorgung-uganda" element={<StandalonePage photos={photos} clusters={clusters} pageId="gesundheitsversorgung-uganda" />} />
          <Route path="/gorilla-permit-kosten" element={<StandalonePage photos={photos} clusters={clusters} pageId="gorilla-permit-kosten" />} />
          <Route path="/kigali-nach-kampala" element={<StandalonePage photos={photos} clusters={clusters} pageId="kigali-nach-kampala" />} />
          <Route path="/bwindi-gorilla-reisefuehrer" element={<StandalonePage photos={photos} clusters={clusters} pageId="bwindi-gorilla-reisefuehrer" />} />
          <Route path="/checkliste-abfallwirtschaft-lodges-tourismusunternehmen" element={<StandalonePage photos={photos} clusters={clusters} pageId="checkliste-abfallwirtschaft-lodges-tourismusunternehmen" />} />
          <Route path="/kampala-gesundheit-infrastruktur" element={<StandalonePage photos={photos} clusters={clusters} pageId="kampala-gesundheit-infrastruktur" />} />
          <Route path="/tiere" element={<HubPage photos={photos} clusters={clusters} hubId="tiere" />} />
          <Route path="/nationalparks" element={<HubPage photos={photos} clusters={clusters} hubId="nationalparks" />} />
          <Route path="/regionen" element={<HubPage photos={photos} clusters={clusters} hubId="regionen" />} />
          <Route path="/rundreisen" element={<HubPage photos={photos} clusters={clusters} hubId="rundreisen" />} />
          <Route path="/land-und-leute" element={<HubPage photos={photos} clusters={clusters} hubId="land-und-leute" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </RouteErrorBoundary>
      <Footer />
    </div>
  )
}
