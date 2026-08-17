import { photoAlt, istTechnischerName } from '../src/utils/photoAlt.js'
const F = []
const t = (name, ist, soll) => { const ok = ist === soll; F.push(ok); console.log(`${ok?'✔':'✖'} ${name}\n    ist=${JSON.stringify(ist)}\n    soll=${JSON.stringify(soll)}`) }

// 1. guter redaktioneller Titel → unveraendert
t('guter Titel bleibt zeichengleich',
  photoAlt({ title: 'Berggorilla im Bwindi-Regenwald', description: 'egal' }),
  'Berggorilla im Bwindi-Regenwald')

// 2. IMG_3793 + gute Description → Description (echte Produktionsdaten)
const MURCHISON = 'Die donnernden Murchison Falls offenbaren die gewaltige Kraft des Nils. Aus einer schmalen Schlucht stuerzt das Wasser hinab.'
t('technischer Titel weicht der Description',
  photoAlt({ title: 'IMG_3793', description: MURCHISON }), MURCHISON)
t('lange Description wird bei 125 gekuerzt',
  photoAlt({ title: 'IMG_1', description: ('Blick auf den Victoriasee bei Entebbe. ').repeat(6) }).length, 125)

// 3. technischer Titel ohne Semantik → leerer Alt
t('kein Beleg → leer', photoAlt({ title: 'IMG_7528', file_name: '533_IMG7528.jpg' }), '')
t('Kategorie ist kein Beleg', photoAlt({ title: 'IMG_1', category: 'Landscapes' }), '')
t('Dateiname ist kein Beleg', photoAlt({ title: 'DSC_0042', file_name: 'murchison-falls.jpg' }), '')
t('Seitenkontext ist kein Beleg', photoAlt({ title: 'IMG_9' }, 'Gorilla Trekking Uganda'), '')

// 4. dekoratives / fehlendes Foto → ''
t('kein Foto → leer', photoAlt(null), '')
t('kein Foto trotz Kontext → leer', photoAlt(null, 'Entebbe'), '')

// 5. belegte Semantik aus sichtbaren Tieren
t('sichtbare Tiere zaehlen', photoAlt({ title: 'IMG_5', animals_visible: ['Berggorilla','Jungtier'] }), 'Berggorilla, Jungtier')
t('animals_visible=false bricht nicht', photoAlt({ title: 'IMG_6', animals_visible: false }), '')

// Erkennung
for (const [v, soll] of [['IMG_3793',true],['DSC_0042',true],['PXL_20240817',true],['533_IMG7528.jpg',true],
                         ['image',true],['photo',true],['0'.repeat(20),true],['Berggorilla im Nebel',false],
                         ['Murchison Falls',false],['Frau mit Kind in Buhoma',false]])
  t(`istTechnischerName(${JSON.stringify(v)})`, istTechnischerName(v), soll)

console.log(`\n${F.filter(Boolean).length}/${F.length} bestanden`)
process.exit(F.every(Boolean) ? 0 : 1)
