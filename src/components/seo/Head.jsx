import { useEffect } from 'react'

const SITE = 'https://www.reiseziel-uganda.de'
const SITE_NAME = 'Reiseziel Uganda'

export default function Head({ title, description, canonical, ogImage, ogType = 'article', noindex = false, publishedTime = '2025-01-15T00:00:00+00:00', modifiedTime = '2026-06-08T00:00:00+00:00' }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} -- Die Perle Afrikas`

    const set = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel, extra, href) => {
      const selector = extra ? `link[rel="${rel}"][${extra}]` : `link[rel="${rel}"]`
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        if (extra) {
          const [k, v] = extra.split('=')
          el.setAttribute(k, v.replace(/"/g, ''))
        }
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    if (description) {
      set('name', 'description', description)
      set('property', 'og:description', description)
      set('name', 'twitter:description', description)
    }

    const pageTitle = title || SITE_NAME
    set('property', 'og:title', pageTitle)
    set('property', 'og:type', ogType)
    set('property', 'og:site_name', SITE_NAME)
    set('property', 'og:locale', 'de_DE')
    if (canonical) set('property', 'og:url', canonical)
    if (ogImage) {
      set('property', 'og:image', ogImage)
      set('property', 'og:image:width', '1200')
      set('property', 'og:image:height', '630')
      set('name', 'twitter:image', ogImage)
    }

    set('name', 'twitter:card', 'summary_large_image')
    set('name', 'twitter:title', pageTitle)
    set('name', 'twitter:site', '@ReisezielUganda')

    if (publishedTime) set('property', 'article:published_time', publishedTime)
    if (modifiedTime) set('property', 'article:modified_time', modifiedTime)
    set('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    set('name', 'author', SITE_NAME)
    set('name', 'publisher', 'Hope on the Road gGmbH')
    set('name', 'geo.region', 'UG')
    set('name', 'geo.placename', 'Uganda')
    set('name', 'content-language', 'de')

    if (canonical) {
      setLink('canonical', null, canonical)
      setLink('alternate', 'hreflang="de"', canonical)
      setLink('alternate', 'hreflang="x-default"', canonical)
    }
  }, [title, description, canonical, ogImage, ogType, noindex, publishedTime, modifiedTime])

  return null
}
