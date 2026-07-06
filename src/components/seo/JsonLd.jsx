const SITE = 'https://www.reiseziel-uganda.de'
const PUBLISHER = {
  '@type': 'Organization',
  name: 'Reiseziel Uganda',
  url: SITE,
  logo: { '@type': 'ImageObject', url: `${SITE}/favicon.svg` },
  parentOrganization: { '@type': 'Organization', name: 'Hope on the Road gGmbH', url: 'https://hopeontheroad.de' },
}

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function ArticleJsonLd({ title, description, datePublished, dateModified, image, url, speakable = true }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: PUBLISHER,
    publisher: PUBLISHER,
    inLanguage: 'de',
    isAccessibleForFree: true,
    ...(image && { image: { '@type': 'ImageObject', url: image } }),
    ...(url && { mainEntityOfPage: { '@type': 'WebPage', '@id': url } }),
    ...(url && { url }),
    about: { '@type': 'Country', name: 'Uganda', alternateName: 'Die Perle Afrikas', sameAs: 'https://de.wikipedia.org/wiki/Uganda' },
    ...(speakable && {
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.kurzantwort', '.faktenbox'],
      },
    }),
  }
  return <JsonLd data={data} />
}

export function FaqJsonLd({ faqs }) {
  if (!faqs || faqs.length === 0) return null
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
    inLanguage: 'de',
  }
  return <JsonLd data={data} />
}

export function BreadcrumbJsonLd({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  }
  return <JsonLd data={data} />
}

export function TouristDestinationJsonLd({ name, description, url, image }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name,
    description,
    url,
    ...(image && { image }),
    containedInPlace: { '@type': 'Country', name: 'Uganda', sameAs: 'https://de.wikipedia.org/wiki/Uganda' },
    touristType: ['Naturreisende', 'Safari-Touristen', 'Abenteuerreisende'],
    inLanguage: 'de',
  }
  return <JsonLd data={data} />
}

export function HowToJsonLd({ name, description, steps, totalTime }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    inLanguage: 'de',
    ...(totalTime && { totalTime }),
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name || s,
      text: s.text || s,
    })),
  }
  return <JsonLd data={data} />
}

export function RecipeJsonLd({ name, description, ingredients, instructions, prepTime, cookTime, keywords }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name,
    description,
    inLanguage: 'de',
    recipeIngredient: ingredients,
    recipeInstructions: instructions.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: s,
    })),
    ...(prepTime && { prepTime }),
    ...(cookTime && { cookTime }),
    ...(keywords && { keywords }),
    recipeCuisine: 'Ugandisch',
    author: PUBLISHER,
  }
  return <JsonLd data={data} />
}

export function ComparisonJsonLd({ name, description, items, url }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    inLanguage: 'de',
    mainEntity: {
      '@type': 'ItemList',
      name,
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item,
      })),
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.kurzantwort', '.faktenbox'],
    },
  }
  return <JsonLd data={data} />
}
