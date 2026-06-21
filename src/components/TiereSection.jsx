import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader.jsx'

const ANIMALS = [
  { key: 'gorilla', name: 'Berggorilla', latin: 'Gorilla beringei beringei', parks: 'Bwindi, Mgahinga', slug: '/tiere/berggorilla', highlight: '~1.063 weltweit' },
  { key: 'elefant', name: 'Afrikanischer Elefant', latin: 'Loxodonta africana', parks: 'Queen Elizabeth, Murchison Falls', slug: '/tiere/elefant', highlight: 'Big Five' },
  { key: 'loewe', name: 'Loewe', latin: 'Panthera leo', parks: 'Queen Elizabeth (Ishasha), Kidepo', slug: '/tiere/loewe', highlight: 'Baumkletternd' },
  { key: 'leopard', name: 'Leopard', latin: 'Panthera pardus', parks: 'Queen Elizabeth, Lake Mburo', slug: '/tiere/leopard', highlight: 'Nachtjaeger' },
  { key: 'giraffe', name: 'Rothschild-Giraffe', latin: 'Giraffa camelopardalis rothschildi', parks: 'Murchison Falls, Kidepo', slug: null, highlight: 'Stark gefaehrdet' },
  { key: 'schimpanse', name: 'Schimpanse', latin: 'Pan troglodytes', parks: 'Kibale Forest, Budongo', slug: '/tiere/schimpanse', highlight: '~5.000 in Uganda' },
  { key: 'schuhschnabel', name: 'Schuhschnabel', latin: 'Balaeniceps rex', parks: 'Mabamba, Murchison Falls', slug: '/tiere/schuhschnabel', highlight: 'Einer der seltensten' },
  { key: 'bueffel', name: 'Kapbueffel', latin: 'Syncerus caffer', parks: 'Kidepo, Queen Elizabeth', slug: '/tiere/bueffel', highlight: 'Big Five' },
  { key: 'nashorn', name: 'Breitmaulnashorn', latin: 'Ceratotherium simum', parks: 'Ziwa Rhino Sanctuary', slug: '/tiere/nashorn', highlight: 'Big Five' },
  { key: 'nilpferd', name: 'Flusspferd', latin: 'Hippopotamus amphibius', parks: 'Murchison Falls, Queen Elizabeth', slug: null, highlight: 'Kazinga-Kanal' },
  { key: 'zebra', name: 'Steppenzebra', latin: 'Equus quagga', parks: 'Lake Mburo, Kidepo', slug: null, highlight: 'Lake Mburo' },
]

export default function TiereSection({ clusters }) {
  const getPhoto = (key) => clusters[key]?.[0] || null

  return (
    <section id="tiere" className="py-20 sm:py-28 bg-gradient-to-b from-white to-earth-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Wildlife"
          title="Ugandas Tierwelt"
          subtitle="Von Berggorillas bis zum seltenen Schuhschnabel -- Uganda beherbergt eine der vielfaeltigsten Faunen Afrikas."
        />

        {/* Featured: Gorilla large */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 mb-5 sm:mb-6">
          <Link to="/tiere/berggorilla" className="group block lg:col-span-3">
            <div className="relative h-72 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden">
              {getPhoto('gorilla')?.thumbnail_url ? (
                <img src={getPhoto('gorilla').thumbnail_url} alt="Berggorilla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-jungle-700 to-jungle-900" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-gold-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2">Ugandas Kronjuwel</p>
                <h3 className="text-white text-2xl sm:text-3xl font-display font-bold leading-tight mb-1">Berggorilla</h3>
                <p className="text-white/50 text-sm italic mb-3">Gorilla beringei beringei</p>
                <p className="text-white/60 text-sm max-w-md">Nur noch rund 1.063 Berggorillas leben auf der Erde. Knapp die Haelfte davon in Ugandas Bwindi Impenetrable Forest.</p>
              </div>
            </div>
          </Link>

          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
            {ANIMALS.filter(a => a.key === 'schimpanse' || a.key === 'schuhschnabel').map(animal => {
              const Wrapper = animal.slug ? Link : 'div'
              const wrapperProps = animal.slug ? { to: animal.slug } : {}
              const photo = getPhoto(animal.key)
              return (
                <Wrapper key={animal.key} {...wrapperProps} className="group block">
                  <div className="relative h-44 sm:h-44 lg:h-[calc(50%-12px)] min-h-[11rem] rounded-2xl sm:rounded-3xl overflow-hidden">
                    {photo?.thumbnail_url ? (
                      <img src={photo.thumbnail_url} alt={animal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-earth-600 to-earth-800" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h3 className="text-white text-base sm:text-lg font-bold leading-tight">{animal.name}</h3>
                      <p className="text-white/50 text-xs mt-0.5">{animal.highlight}</p>
                    </div>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>

        {/* Remaining animals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {ANIMALS.filter(a => !['gorilla', 'schimpanse', 'schuhschnabel'].includes(a.key)).map(animal => {
            const Wrapper = animal.slug ? Link : 'div'
            const wrapperProps = animal.slug ? { to: animal.slug } : {}
            const photo = getPhoto(animal.key)
            return (
              <Wrapper key={animal.key} {...wrapperProps} className="group block">
                <div className="relative h-48 sm:h-56 rounded-2xl sm:rounded-3xl overflow-hidden">
                  {photo?.thumbnail_url ? (
                    <img src={photo.thumbnail_url} alt={animal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-earth-200 to-earth-300" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-sm sm:text-base font-bold leading-tight">{animal.name}</h3>
                    <p className="text-white/50 text-[10px] sm:text-xs mt-0.5">{animal.parks}</p>
                  </div>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
