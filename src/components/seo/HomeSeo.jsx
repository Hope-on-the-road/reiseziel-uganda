import { useEffect } from 'react'

const SITE = 'https://reiseziel-uganda.de'
const TITLE = 'Reiseziel Uganda 2026 | Gorilla Trekking & Safaris'
const DESC = 'Uganda Reisefuehrer 2026: 10 Nationalparks, Gorilla Trekking ab 800 USD, Safari-Tipps, Visa, Kosten, beste Reisezeit. Dein kompletter Guide.'

function WebsiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Reiseziel Uganda',
    alternateName: 'Reiseziel-Uganda.de',
    url: SITE,
    description: DESC,
    inLanguage: 'de',
    publisher: {
      '@type': 'Organization',
      name: 'Hope on the Road gGmbH',
      url: 'https://hopeontheroad.de',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/suche?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Reiseziel Uganda',
    url: SITE,
    logo: `${SITE}/logo.svg`,
    description: 'Die umfassendste deutschsprachige Wissensplattform zu Uganda.',
    sameAs: [],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Hope on the Road gGmbH',
      url: 'https://hopeontheroad.de',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function CollectionPageSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: TITLE,
    description: DESC,
    url: SITE,
    inLanguage: 'de',
    isPartOf: { '@type': 'WebSite', url: SITE },
    about: {
      '@type': 'Country',
      name: 'Uganda',
      alternateName: 'Die Perle Afrikas',
      containedInPlace: { '@type': 'Continent', name: 'Afrika' },
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Uganda Reise-Themen',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ugandas Nationalparks', url: `${SITE}/#nationalparks` },
        { '@type': 'ListItem', position: 2, name: 'Gorilla Trekking', url: `${SITE}/gorilla-trekking` },
        { '@type': 'ListItem', position: 3, name: 'Ugandas Tierwelt', url: `${SITE}/#tiere` },
        { '@type': 'ListItem', position: 4, name: 'Reiseplanung Uganda', url: `${SITE}/#planung` },
        { '@type': 'ListItem', position: 5, name: 'Regionen in Uganda', url: `${SITE}/#regionen` },
      ],
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function SpeakableSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: TITLE,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.kurzantwort', '.faktenbox'],
    },
    url: SITE,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function HomeSeo() {
  useEffect(() => {
    document.title = TITLE

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', DESC)
    setMeta('name', 'keywords', 'Uganda, Reiseziel Uganda, Gorilla Trekking, Nationalparks Uganda, Safari Uganda, Berggorilla, Bwindi, Queen Elizabeth, Murchison Falls, Reiseplanung Uganda, Perle Afrikas')
    setMeta('name', 'author', 'Reiseziel Uganda')
    setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large')
    setMeta('property', 'og:title', TITLE)
    setMeta('property', 'og:description', DESC)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', SITE)
    setMeta('property', 'og:site_name', 'Reiseziel Uganda')
    setMeta('property', 'og:locale', 'de_DE')
    setMeta('property', 'og:image', `${SITE}/og-image.jpg`)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:alt', 'Reiseziel Uganda -- Gorilla Trekking, Nationalparks und Safari')
    setMeta('property', 'article:published_time', '2025-01-15T00:00:00+00:00')
    setMeta('property', 'article:modified_time', '2026-06-08T00:00:00+00:00')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', TITLE)
    setMeta('name', 'twitter:description', DESC)
    setMeta('name', 'twitter:image', `${SITE}/og-image.jpg`)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', SITE)

    let hreflang = document.querySelector('link[rel="alternate"][hreflang="de"]')
    if (!hreflang) {
      hreflang = document.createElement('link')
      hreflang.setAttribute('rel', 'alternate')
      hreflang.setAttribute('hreflang', 'de')
      document.head.appendChild(hreflang)
    }
    hreflang.setAttribute('href', SITE)
  }, [])

  return (
    <>
      <WebsiteSchema />
      <OrganizationSchema />
      <CollectionPageSchema />
      <SpeakableSchema />
    </>
  )
}
