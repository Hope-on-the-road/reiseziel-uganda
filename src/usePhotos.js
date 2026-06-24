import { useState, useEffect, useMemo } from 'react'
import { loadPhotos } from './supabase.js'

const CACHE_KEY = 'rzu_photos_v2'
const CACHE_TTL = 60 * 60 * 1000 // 1 Stunde

function getCached() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { ts, data } = JSON.parse(raw)
    if (Date.now() - ts < CACHE_TTL) return data
    return null
  } catch {
    return null
  }
}

function setCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }))
  } catch {}
}

export function usePhotos() {
  const cached = getCached()
  const [photos, setPhotos] = useState(cached || [])
  const [loaded, setLoaded] = useState(!!cached)

  useEffect(() => {
    // Cache noch gültig — kein Supabase-Aufruf nötig
    if (getCached()) return
    loadPhotos().then(data => {
      setPhotos(data)
      setCache(data)
      setLoaded(true)
    }).catch(err => {
      console.error('Photo load error:', err)
      setLoaded(true)
    })
  }, [])

  return { photos, loaded }
}

export function usePhotosByCluster(photos) {
  return useMemo(() => {
    const all = (item) => [
      (item.keywords || []).join(' '),
      item.description || '',
      item.title || '',
      item.file_name || '',
      item.category || '',
    ].join(' ').toLowerCase()

    const match = (fn) => photos.filter(fn)

    return {
      queen_elizabeth: match(i => all(i).includes('queen elizabeth')),
      murchison_falls: match(i => all(i).includes('murchison') || all(i).includes('murchinson')),
      bwindi: match(i => all(i).includes('bwindi') || all(i).includes('bwini')),
      mt_elgon: match(i => all(i).includes('mount elgon') || all(i).includes('sipi')),
      gorilla: match(i => {
        const isWildlifeOrPark = i.category === 'Wildlife' || i.category === 'National Parks'
        const textMatch = all(i).includes('gorilla') || all(i).includes('berggorilla') || all(i).includes('silverback')
        return textMatch && isWildlifeOrPark
      }),
      elefant: match(i => all(i).includes('elefant') || all(i).includes('elephant')),
      giraffe: match(i => all(i).includes('giraffe')),
      zebra: match(i => all(i).includes('zebra')),
      nilpferd: match(i => all(i).includes('nilpferd') || all(i).includes('hippo') || all(i).includes('flusspferd')),
      voegel: match(i => all(i).includes('vogel') || all(i).includes('bird') || all(i).includes('reiher') || all(i).includes('crane')),
      pavian: match(i => all(i).includes('pavian') || all(i).includes('baboon')),
      schimpanse: match(i => all(i).includes('schimpanse') || all(i).includes('chimpanzee') || all(i).includes('chimp')),
      schuhschnabel: match(i => all(i).includes('schuhschnabel') || all(i).includes('shoebill')),
      kibale: match(i => all(i).includes('kibale')),
      kidepo: match(i => all(i).includes('kidepo')),
      lake_mburo: match(i => all(i).includes('lake mburo') || all(i).includes('mburo')),
      mgahinga: match(i => all(i).includes('mgahinga')),
      semuliki: match(i => all(i).includes('semuliki')),
      buhoma: match(i => all(i).includes('buhoma') || all(i).includes('buhuma')),
      strassen: match(i => i.category === 'Roads & Transport'),
      maerkte: match(i => i.category === 'Markets & Local Business'),
      landschaft: match(i => i.category === 'Landscapes'),
      lodges: match(i => all(i).includes('lodge')),
      dorfleben: match(i => i.category === 'Villages' || i.category === 'Community Life'),
      essen: match(i => i.category === 'Food & Cooking' || i.category === 'HopeKitchen' || all(i).includes('banana')),
      wildlife: match(i => i.category === 'Wildlife' || i.category === 'National Parks'),
      tiere: match(i => i.category === 'Wildlife' || i.category === 'National Parks'),
      butiru: match(i => all(i).includes('butiru')),
    }
  }, [photos])
}
