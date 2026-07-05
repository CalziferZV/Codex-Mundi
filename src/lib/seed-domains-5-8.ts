import type { SeedCategory, SeedEntry, SeedSubsection } from './seed'

export const newCategories: SeedCategory[] = [
  {
    id: 'cat-lost-places',
    name_es: 'Lugares Perdidos y Misterios Geográficos',
    name_en: 'Lost Places & Geographic Mysteries',
    slug: 'lost-places',
    description_es: 'Lugares legendarios, ciudades perdidas, sitios arqueológicos enigmáticos y anomalías geográficas que desafían la explicación convencional.',
    description_en: 'Legendary places, lost cities, enigmatic archaeological sites, and geographical anomalies that defy conventional explanation.',
    icon: '🌍',
    parentId: null,
  },
  {
    id: 'cat-lost-cities',
    name_es: 'Ciudades Perdidas',
    name_en: 'Lost Cities',
    slug: 'lost-cities',
    description_es: 'Ciudades legendarias cuya existencia real o pasada sigue siendo objeto de debate e investigación.',
    description_en: 'Legendary cities whose real or past existence remains a subject of debate and investigation.',
    icon: '🏚️',
    parentId: 'cat-lost-places',
  },
  {
    id: 'cat-mythical-places',
    name_es: 'Lugares Míticos',
    name_en: 'Mythical Places',
    slug: 'mythical-places',
    description_es: 'Parajes que habitan en el imaginario colectivo, mencionados en mitos y leyendas de todas las culturas.',
    description_en: 'Places that inhabit the collective imagination, mentioned in myths and legends of all cultures.',
    icon: '🗺️',
    parentId: 'cat-lost-places',
  },
  {
    id: 'cat-mysterious-sites',
    name_es: 'Sitios Arqueológicos Misteriosos',
    name_en: 'Mysterious Archaeological Sites',
    slug: 'mysterious-archaeological-sites',
    description_es: 'Yacimientos y construcciones antiguas cuya edificación, propósito o tecnología desafían la arqueología convencional.',
    description_en: 'Ancient sites and constructions whose building, purpose, or technology challenge conventional archaeology.',
    icon: '🏛️',
    parentId: 'cat-lost-places',
  },
  {
    id: 'cat-geo-anomalies',
    name_es: 'Puntos Geográficos Singulares',
    name_en: 'Geographical Singular Points',
    slug: 'geographical-anomalies',
    description_es: 'Lugares del planeta con características geográficas, magnéticas o atmosféricas inusuales que escapan a una explicación simple.',
    description_en: 'Places on the planet with unusual geographical, magnetic, or atmospheric characteristics that defy simple explanation.',
    icon: '🌀',
    parentId: 'cat-lost-places',
  },
  {
    id: 'cat-cryptozoology',
    name_es: 'Criptozoología y Criaturas Míticas',
    name_en: 'Cryptozoology & Mythical Creatures',
    slug: 'cryptozoology',
    description_es: 'El estudio de criaturas legendarias, animales no confirmados por la ciencia y seres del folclore mundial.',
    description_en: 'The study of legendary creatures, animals unconfirmed by science, and beings from world folklore.',
    icon: '🐾',
    parentId: null,
  },
  {
    id: 'cat-cryptids-land',
    name_es: 'Críptidos Terrestres',
    name_en: 'Land Cryptids',
    slug: 'land-cryptids',
    description_es: 'Criaturas terrestres cuya existencia no ha sido probada por la ciencia, descritas en testimonios y tradiciones de todo el mundo.',
    description_en: 'Land creatures whose existence has not been proven by science, described in testimonies and traditions from around the world.',
    icon: '🦶',
    parentId: 'cat-cryptozoology',
  },
  {
    id: 'cat-cryptids-water',
    name_es: 'Críptidos Acuáticos',
    name_en: 'Aquatic Cryptids',
    slug: 'aquatic-cryptids',
    description_es: 'Supuestas criaturas que habitan lagos, ríos y océanos, desde monstruos lacustres hasta serpientes marinas gigantes.',
    description_en: 'Alleged creatures inhabiting lakes, rivers, and oceans, from lake monsters to giant sea serpents.',
    icon: '🐙',
    parentId: 'cat-cryptozoology',
  },
  {
    id: 'cat-mythical-creatures',
    name_es: 'Criaturas Mitológicas Clásicas',
    name_en: 'Classical Mythological Creatures',
    slug: 'mythological-creatures',
    description_es: 'Bestias y seres fantásticos de las mitologías grecorromana, egipcia, nórdica y de otras civilizaciones antiguas.',
    description_en: 'Beasts and fantastic beings from Greco-Roman, Egyptian, Norse, and other ancient civilizations mythologies.',
    icon: '🐉',
    parentId: 'cat-cryptozoology',
  },
  {
    id: 'cat-folklore-creatures',
    name_es: 'Criaturas del Folclore',
    name_en: 'Folklore Creatures',
    slug: 'folklore-creatures',
    description_es: 'Seres pertenecientes a las tradiciones populares y el folclore rural de distintas regiones del mundo.',
    description_en: 'Beings belonging to popular traditions and rural folklore from different regions of the world.',
    icon: '🧌',
    parentId: 'cat-cryptozoology',
  },
  {
    id: 'cat-artifacts',
    name_es: 'Artefactos y Objetos Misteriosos',
    name_en: 'Artifacts & Mysterious Objects',
    slug: 'artifacts',
    description_es: 'Objetos antiguos, artefactos tecnológicamente avanzados para su época y reliquias de poder envueltas en misterio.',
    description_en: 'Ancient objects, technologically advanced artifacts for their time, and relics of power shrouded in mystery.',
    icon: '🔶',
    parentId: null,
  },
  {
    id: 'cat-ooparts',
    name_es: 'Artefactos Fuera de Lugar',
    name_en: 'Out-of-Place Artifacts',
    slug: 'ooparts',
    description_es: 'Objetos cuyo nivel tecnológico o contexto histórico parece incompatible con la época en que fueron creados.',
    description_en: 'Objects whose technological level or historical context seems incompatible with the era in which they were created.',
    icon: '⚙️',
    parentId: 'cat-artifacts',
  },
  {
    id: 'cat-sacred-objects',
    name_es: 'Objetos Sagrados y Legendarios',
    name_en: 'Sacred & Legendary Objects',
    slug: 'sacred-objects',
    description_es: 'Reliquias y objetos imbuidos de significado religioso o poder sobrenatural en las tradiciones del mundo.',
    description_en: 'Relics and objects imbued with religious significance or supernatural power in world traditions.',
    icon: '💎',
    parentId: 'cat-artifacts',
  },
  {
    id: 'cat-mysterious-manuscripts',
    name_es: 'Manuscritos y Libros',
    name_en: 'Manuscripts & Books',
    slug: 'mysterious-manuscripts',
    description_es: 'Textos antiguos, códices cifrados y libros prohibidos cuyo contenido o significado sigue siendo un enigma.',
    description_en: 'Ancient texts, encrypted codices, and forbidden books whose content or meaning remains an enigma.',
    icon: '📜',
    parentId: 'cat-artifacts',
  },
  {
    id: 'cat-paranormal',
    name_es: 'Fenómenos Paranormales y Ocultismo',
    name_en: 'Paranormal Phenomena & Occultism',
    slug: 'paranormal',
    description_es: 'Fenómenos que desafían las leyes conocidas de la física y la naturaleza, incluyendo lo psíquico, fantasmal, ovni y esotérico.',
    description_en: 'Phenomena that defy known laws of physics and nature, including psychic, ghostly, UFO, and esoteric phenomena.',
    icon: '👻',
    parentId: null,
  },
  {
    id: 'cat-psychic-phenomena',
    name_es: 'Fenómenos Psíquicos',
    name_en: 'Psychic Phenomena',
    slug: 'psychic-phenomena',
    description_es: 'Capacidades mentales que trascienden los sentidos conocidos, incluyendo telepatía, clarividencia y psicoquinesis.',
    description_en: 'Mental abilities that transcend known senses, including telepathy, clairvoyance, and psychokinesis.',
    icon: '🧠',
    parentId: 'cat-paranormal',
  },
  {
    id: 'cat-ghosts',
    name_es: 'Fantasmas y Apariciones',
    name_en: 'Ghosts & Apparitions',
    slug: 'ghosts',
    description_es: 'Supuestas manifestaciones de espíritus o entidades fallecidas que permanecen en el mundo de los vivos.',
    description_en: 'Alleged manifestations of spirits or deceased entities that remain in the world of the living.',
    icon: '👻',
    parentId: 'cat-paranormal',
  },
  {
    id: 'cat-ufology',
    name_es: 'Ovnis y Ufología',
    name_en: 'UFOs & Ufology',
    slug: 'ufology',
    description_es: 'Estudio de objetos voladores no identificados, encuentros extraterrestres y fenómenos aéreos inexplicables.',
    description_en: 'Study of unidentified flying objects, extraterrestrial encounters, and unexplained aerial phenomena.',
    icon: '🛸',
    parentId: 'cat-paranormal',
  },
  {
    id: 'cat-esotericism',
    name_es: 'Esoterismo y Ocultismo',
    name_en: 'Esotericism & Occultism',
    slug: 'esotericism',
    description_es: 'Conocimientos secretos, tradiciones ocultas y enseñanzas espirituales reservadas a iniciados.',
    description_en: 'Secret knowledge, occult traditions, and spiritual teachings reserved for initiates.',
    icon: '🔮',
    parentId: 'cat-paranormal',
  },
  {
    id: 'cat-divination',
    name_es: 'Adivinación',
    name_en: 'Divination',
    slug: 'divination',
    description_es: 'Prácticas y métodos para conocer el futuro o acceder a información oculta mediante medios sobrenaturales.',
    description_en: 'Practices and methods for knowing the future or accessing hidden information through supernatural means.',
    icon: '🔮',
    parentId: 'cat-paranormal',
  },
]

export const newEntries: SeedEntry[] = [
  // ════════════════════════════════════════
  // Domain 5 — cat-lost-cities
  // ════════════════════════════════════════
  {
    id: 'entry-eldorado',
    title_es: 'El Dorado',
    title_en: 'El Dorado',
    slug: 'el-dorado',
    content_es: `El Dorado es una legendaria ciudad de oro que ha cautivado la imaginación de exploradores y conquistadores durante más de cinco siglos. El mito nació en Colombia, donde la tradición muisca hablaba de un cacique que se cubría de polvo de oro y se sumergía en la laguna de Guatavita. Los españoles interpretaron que existía una ciudad de oro, desencadenando expediciones.\n\nAunque nunca se encontró, la leyenda impulsó la exploración de Sudamérica. La laguna de Guatavita fue drenada, encontrándose objetos de oro muiscas. El mito se convirtió en arquetipo universal de la búsqueda de riquezas imposibles.\n\nHoy se entiende como un malentendido cultural magnificado por la codicia europea. El Dorado ha aparecido en innumerables películas, libros y videojuegos.`,
    content_en: `El Dorado is a legendary city of gold that has captivated explorers for over five centuries. The myth was born in Colombia, where the Muisca tradition spoke of a chief who covered himself in gold dust and submerged in Lake Guatavita. The Spaniards interpreted this as evidence of a city of gold, triggering expeditions.\n\nAlthough never found, the legend drove South American exploration. Lake Guatavita was drained, yielding Muisca gold objects. The myth became a universal archetype of the search for impossible riches.\n\nToday it is understood as a cultural misunderstanding magnified by European greed. El Dorado has appeared in countless films, books, and video games.`,
    excerpt_es: 'La legendaria ciudad de oro que impulsó la exploración de Sudamérica.',
    excerpt_en: 'The legendary city of gold that drove the exploration of South America.',
    categoryId: 'cat-lost-cities',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-01T00:00:00Z',
    updatedAt: '2026-03-01T00:00:00Z',
  },
  {
    id: 'entry-atlantis',
    title_es: 'La Atlántida',
    title_en: 'Atlantis',
    slug: 'atlantida',
    content_es: `La Atlántida es una legendaria isla-continente mencionada por Platón en Timeo y Critias (360 a.C.). Era una civilización poderosa de extraordinaria riqueza, con una capital de anillos concéntricos, que existió 9.000 años antes de Platón más allá de las Columnas de Hércules.\n\nSegún el relato, su corrupción moral los llevó a atacar Atenas, y un cataclismo hundió la isla en un día. Innumerables teorías ubican la Atlántida en el Mediterráneo, Atlántico, Caribe o Antártida.\n\nEl mito perdura por sus temas universales: auge y caída de civilizaciones, arrogancia humana y pérdida del paraíso. Para muchos, es una alegoría filosófica más que un relato histórico.`,
    content_en: `Atlantis is a legendary island-continent mentioned by Plato in Timaeus and Critias (360 BC). It was a powerful civilization of extraordinary wealth, with a capital of concentric rings, existing 9,000 years before Plato beyond the Pillars of Hercules.\n\nAccording to the account, moral corruption led them to attack Athens, and a cataclysm sank the island in a day. Countless theories place Atlantis in the Mediterranean, Atlantic, Caribbean, or Antarctica.\n\nThe myth endures for its universal themes: rise and fall of civilizations, human arrogance, and loss of paradise. For many, it is a philosophical allegory rather than historical account.`,
    excerpt_es: 'La legendaria isla-continente descrita por Platón que se hundió en el océano.',
    excerpt_en: 'The legendary island-continent described by Plato that sank into the ocean.',
    categoryId: 'cat-lost-cities',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-02T00:00:00Z',
    updatedAt: '2026-03-02T00:00:00Z',
  },
  {
    id: 'entry-shambhala',
    title_es: 'Shambhala',
    title_en: 'Shambhala',
    slug: 'shambhala',
    content_es: `Shambhala es un reino legendario oculto en el Himalaya, mencionado en textos budistas tántricos. Su nombre significa "lugar de paz". Es un reino puro de sabiduría e iluminación. Las primeras referencias están en el Kalachakra Tantra (siglo X).\n\nSegún la profecía, cuando el mundo esté en oscuridad, el rey de Shambhala emergerá para derrotar el mal. La tradición tibetana lo sitúa al norte del Tíbet, oculto mágicamente. En Occidente, fue popularizado por Blavatsky y la Teosofía.\n\nShambhala simboliza la paz interior y la evolución espiritual, trascendiendo sus orígenes como arquetipo del paraíso terrenal.`,
    content_en: `Shambhala is a legendary hidden kingdom in the Himalayas, mentioned in Tantric Buddhist texts. Its name means "place of peace." It is a pure realm of wisdom and enlightenment. Earliest references are in the Kalachakra Tantra (10th century).\n\nAccording to prophecy, when the world is in darkness, the king of Shambhala will emerge to defeat evil. Tibetan tradition places it north of Tibet, magically hidden. In the West, it was popularized by Blavatsky and Theosophy.\n\nShambhala symbolizes inner peace and spiritual evolution, transcending its origins as an earthly paradise archetype.`,
    excerpt_es: 'Reino oculto en el Himalaya descrito en textos budistas, símbolo de paz y sabiduría.',
    excerpt_en: 'Hidden kingdom in the Himalayas described in Buddhist texts, a symbol of peace and wisdom.',
    categoryId: 'cat-lost-cities',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-03T00:00:00Z',
    updatedAt: '2026-03-03T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 5 — cat-mythical-places
  // ════════════════════════════════════════
  {
    id: 'entry-avalon',
    title_es: 'Ávalon',
    title_en: 'Avalon',
    slug: 'avalon',
    content_es: `Ávalon es la legendaria isla de la mitología artúrica, lugar de paz y belleza sobrenatural donde Excalibur fue forjada y donde Arturo fue llevado tras su última batalla. Mencionada por Geoffrey de Monmouth (c. 1136), su figura central es la Dama del Lago.\n\nTradicionalmente identificada con Glastonbury, Inglaterra, donde en 1191 se descubrió la supuesta tumba de Arturo. Glastonbury Tor encaja con la descripción de una isla mística.\n\nÁvalon representa el arquetipo de la tierra sagrada, el paraíso perdido y el encuentro entre magia y realidad.`,
    content_en: `Avalon is the legendary island of Arthurian mythology, a place of peace and supernatural beauty where Excalibur was forged and Arthur was taken after his final battle. Mentioned by Geoffrey of Monmouth (c. 1136), its central figure is the Lady of the Lake.\n\nTraditionally identified with Glastonbury, England, where in 1191 Arthur's supposed tomb was discovered. Glastonbury Tor fits the description of a mystical island.\n\nAvalon represents the archetype of the sacred land, the lost paradise, and the meeting of magic and reality.`,
    excerpt_es: 'Isla mítica de la leyenda artúrica, lugar de paz y magia.',
    excerpt_en: 'Mythical island of Arthurian legend, a place of peace and magic.',
    categoryId: 'cat-mythical-places',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-04T00:00:00Z',
    updatedAt: '2026-03-04T00:00:00Z',
  },
  {
    id: 'entry-agartha',
    title_es: 'Agartha',
    title_en: 'Agartha',
    slug: 'agartha',
    content_es: `Agartha es una legendaria ciudad subterránea en el interior hueco de la Tierra, descrita como un reino de belleza y avanzada civilización. La idea de Tierra hueca existe en múltiples culturas: el budismo tibetano menciona Agharti; el hinduismo, Patala.\n\nPopularizada por la Teosofía y escritores como Ossendowski. Supuestas entradas bajo la Pirámide de Keops, el Monte Shasta y cuevas tibetanas.\n\nLa ciencia refutó la Tierra hueca mediante sismología, pero Agartha sigue siendo un poderoso mito de conocimiento oculto.`,
    content_en: `Agartha is a legendary underground city in the hollow Earth, described as a realm of beauty and advanced civilization. The hollow Earth idea exists in multiple cultures: Tibetan Buddhism mentions Agharti; Hinduism, Patala.\n\nPopularized by Theosophy and writers like Ossendowski. Supposed entrances under the Great Pyramid, Mount Shasta, and Tibetan caves.\n\nScience refuted the hollow Earth via seismology, but Agartha remains a powerful myth of hidden knowledge.`,
    excerpt_es: 'Legendaria ciudad subterránea en el interior hueco de la Tierra.',
    excerpt_en: 'Legendary underground city in the hollow interior of the Earth.',
    categoryId: 'cat-mythical-places',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-05T00:00:00Z',
    updatedAt: '2026-03-05T00:00:00Z',
  },
  {
    id: 'entry-fountain-youth',
    title_es: 'Fuente de la Eterna Juventud',
    title_en: 'Fountain of Youth',
    slug: 'fuente-de-la-eterna-juventud',
    content_es: `Fuente legendaria que restaura la juventud. Mencionada por Heródoto y buscada por Alejandro Magno. La versión más famosa es caribeña: los taínos hablaban de una fuente en Bimini. Ponce de León organizó una expedición en 1513, descubriendo Florida.\n\nAunque nunca la encontró, la leyenda persistió. Hoy es atracción turística en San Agustín, Florida.\n\nEl mito simboliza el deseo humano de inmortalidad y la búsqueda de salud perfecta.`,
    content_en: `Legendary spring that restores youth. Mentioned by Herodotus and sought by Alexander the Great. The most famous version is Caribbean: the Taíno spoke of a spring in Bimini. Ponce de León organized a 1513 expedition, discovering Florida.\n\nThough never found, the legend persisted. Today it is a tourist attraction in St. Augustine, Florida.\n\nThe myth symbolizes the human desire for immortality and the search for perfect health.`,
    excerpt_es: 'Legendaria fuente que restaura la juventud, buscada por Ponce de León.',
    excerpt_en: 'Legendary spring that restores youth, sought by Ponce de León.',
    categoryId: 'cat-mythical-places',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-06T00:00:00Z',
    updatedAt: '2026-03-06T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 5 — cat-mysterious-sites
  // ════════════════════════════════════════
  {
    id: 'entry-gobekli-tepe',
    title_es: 'Göbekli Tepe',
    title_en: 'Göbekli Tepe',
    slug: 'gobekli-tepe',
    content_es: `Göbekli Tepe (Turquía, 9600-8800 a.C.) es el templo más antiguo del mundo, construido por cazadores-recolectores antes de la agricultura. Sus pilares de 20 toneladas con relieves de animales desafían la narrativa tradicional.\n\nEl arqueólogo Klaus Schmidt propuso que era un centro ceremonial. Fue enterrado deliberadamente, conservándose excelentemente.\n\nHa reabierto debates sobre las capacidades preagrícolas y el origen de la civilización. Solo una fracción ha sido excavada.`,
    content_en: `Göbekli Tepe (Turkey, 9600-8800 BC) is the world's oldest temple, built by hunter-gatherers before agriculture. Its 20-ton pillars with animal reliefs challenge traditional narratives.\n\nArchaeologist Klaus Schmidt proposed it was a ceremonial center. It was deliberately buried, preserving it excellently.\n\nIt has reopened debates about pre-agricultural capabilities and civilization's origins. Only a fraction has been excavated.`,
    excerpt_es: 'El templo más antiguo del mundo (9600 a.C.), construido por cazadores-recolectores.',
    excerpt_en: "The world's oldest temple (9600 BC), built by hunter-gatherers.",
    categoryId: 'cat-mysterious-sites',
    realityStatus: 'historical',
    imageUrl: '',
    createdAt: '2026-03-07T00:00:00Z',
    updatedAt: '2026-03-07T00:00:00Z',
  },
  {
    id: 'entry-nazca',
    title_es: 'Líneas de Nazca',
    title_en: 'Nazca Lines',
    slug: 'lineas-de-nazca',
    content_es: `Geoglifos en el desierto de Nazca, Perú (500 a.C.-500 d.C.), visibles solo desde el aire. Representan animales y formas geométricas creadas removiendo piedras oscuras para revelar suelo claro.\n\nSu propósito es un misterio: calendario astronómico, ritual de agua, o pistas extraterrestres. La hipótesis más aceptada es ceremonial, relacionado con el culto al agua.\n\nPatrimonio de la Humanidad (UNESCO 1994), siguen siendo uno de los mayores enigmas arqueológicos.`,
    content_en: `Geoglyphs in the Nazca Desert, Peru (500 BC-500 AD), only fully visible from the air. They represent animals and geometric shapes created by removing dark stones to reveal lighter soil.\n\nTheir purpose is a mystery: astronomical calendar, water ritual, or extraterrestrial runways. The most accepted hypothesis is ceremonial, related to water worship.\n\nUNESCO World Heritage (1994), they remain one of the greatest archaeological enigmas.`,
    excerpt_es: 'Gigantescos geoglifos peruanos visibles solo desde el aire.',
    excerpt_en: 'Gigantic Peruvian geoglyphs visible only from the air.',
    categoryId: 'cat-mysterious-sites',
    realityStatus: 'historical',
    imageUrl: '',
    createdAt: '2026-03-08T00:00:00Z',
    updatedAt: '2026-03-08T00:00:00Z',
  },
  {
    id: 'entry-great-pyramid',
    title_es: 'Misterios de la Gran Pirámide',
    title_en: 'Mysteries of the Great Pyramid',
    slug: 'misterios-gran-piramide',
    content_es: `La Gran Pirámide de Keops (2560 a.C.) es la única Maravilla del Mundo Antiguo que perdura. 2.3 millones de bloques de hasta 80 toneladas, alineada cardinalmente con 0.067° de error.\n\nContiene la Cámara del Rey, la Cámara de la Reina y la Gran Galería. Muones revelaron un gran vacío oculto sin explorar. Las teorías de construcción no son completamente satisfactorias.\n\nCada nuevo descubrimiento genera más preguntas, consolidando su estatus como el monumento más enigmático.`,
    content_en: `The Great Pyramid of Khufu (2560 BC) is the only surviving Ancient Wonder. 2.3 million blocks up to 80 tons, cardinally aligned with 0.067° error.\n\nIt contains the King's Chamber, Queen's Chamber, and Grand Gallery. Muons revealed a large unexplored hidden void. Construction theories are not fully satisfactory.\n\nEach new discovery generates more questions, solidifying its status as the most enigmatic monument.`,
    excerpt_es: 'La única maravilla del mundo antiguo que perdura, con precisiones y cámaras ocultas.',
    excerpt_en: 'The only surviving wonder of the ancient world, with hidden chambers and precision.',
    categoryId: 'cat-mysterious-sites',
    realityStatus: 'historical',
    imageUrl: '',
    createdAt: '2026-03-09T00:00:00Z',
    updatedAt: '2026-03-09T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 5 — cat-geo-anomalies
  // ════════════════════════════════════════
  {
    id: 'entry-bermuda-triangle',
    title_es: 'Triángulo de las Bermudas',
    title_en: 'Bermuda Triangle',
    slug: 'triangulo-de-las-bermudas',
    content_es: `Región del Atlántico (Miami, Bermudas, Puerto Rico) famosa por desapariciones. La leyenda comenzó con el Vuelo 19 (1945), cinco aviones que desaparecieron durante entrenamiento.\n\nTeorías: anomalías magnéticas, burbujas de metano, portales interdimensionales. La NOAA afirma que no hay más accidentes que en otras regiones.\n\nSigue siendo uno de los mitos modernos más perdurables.`,
    content_en: `Atlantic region (Miami, Bermuda, Puerto Rico) famous for disappearances. The legend began with Flight 19 (1945), five aircraft that vanished during training.\n\nTheories: magnetic anomalies, methane bubbles, interdimensional portals. NOAA states no more accidents occur here than elsewhere.\n\nIt remains one of the most enduring modern myths.`,
    excerpt_es: 'Región del Atlántico famosa por desapariciones misteriosas.',
    excerpt_en: 'Atlantic region famous for mysterious disappearances.',
    categoryId: 'cat-geo-anomalies',
    realityStatus: 'conspiratorial',
    imageUrl: '',
    createdAt: '2026-03-10T00:00:00Z',
    updatedAt: '2026-03-10T00:00:00Z',
  },
  {
    id: 'entry-richat-structure',
    title_es: 'Ojo del Sahara (Estructura de Richat)',
    title_en: 'Eye of the Sahara (Richat Structure)',
    slug: 'ojo-del-sahara',
    content_es: `Formación geológica circular de 40 km en Mauritania, visible desde el espacio. Es un domo anticlinal erosionado con capas concéntricas de rocas. Sirvió como referencia para astronautas del Apolo.\n\nAlgunos investigadores sugieren que podría ser la Atlántida, por similitud con los anillos concéntricos platónicos. Teoría minoritaria pero popular.\n\nCientíficamente, sigue siendo estudiada, con debates sobre su formación y minerales inusuales.`,
    content_en: `Circular geological formation 40 km in Mauritania, visible from space. It is an eroded anticlinal dome with concentric rock layers. Served as reference for Apollo astronauts.\n\nSome researchers suggest it could be Atlantis, due to similarity with Platonic concentric rings. Marginal but popular theory.\n\nScientifically, it remains studied, with debates about its formation and unusual minerals.`,
    excerpt_es: 'Colosal formación geológica circular de 40 km visible desde el espacio.',
    excerpt_en: 'Colossal 40 km circular geological formation visible from space.',
    categoryId: 'cat-geo-anomalies',
    realityStatus: 'hypothesis',
    imageUrl: '',
    createdAt: '2026-03-11T00:00:00Z',
    updatedAt: '2026-03-11T00:00:00Z',
  },
  {
    id: 'entry-zone-silence',
    title_es: 'Zona del Silencio (México)',
    title_en: 'Zone of Silence (Mexico)',
    slug: 'zona-del-silencio',
    content_es: `Región desértica en el Bolsón de Mapimí, México, famosa por bloquear ondas de radio. La fama comenzó en 1970 cuando un cohete Athena de la NASA cayó allí.\n\nSe reportan luces, mutaciones en flora y brújulas anómalas. La ciencia confirma depósitos de magnetita que interfieren con señales de radio.\n\nDestino popular para turismo de misterio en México.`,
    content_en: `Desert region in Bolsón de Mapimí, Mexico, famous for blocking radio waves. Fame began in 1970 when a NASA Athena rocket crashed there.\n\nLights, flora mutations, and anomalous compasses are reported. Science confirms magnetite deposits interfering with radio signals.\n\nPopular destination for mystery tourism in Mexico.`,
    excerpt_es: 'Región desértica en México donde las ondas de radio no funcionan.',
    excerpt_en: 'Desert region in Mexico where radio waves do not work.',
    categoryId: 'cat-geo-anomalies',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-03-12T00:00:00Z',
    updatedAt: '2026-03-12T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 6 — cat-cryptids-land
  // ════════════════════════════════════════
  {
    id: 'entry-chupacabras',
    title_es: 'Chupacabras',
    title_en: 'Chupacabras',
    slug: 'chupacabras',
    content_es: `Críptido que ataca animales domésticos para chupar su sangre. El fenómeno comenzó en Puerto Rico (1995), extendiéndose por América Latina. Criatura de 1.2 m, piel escamosa, ojos rojos.\n\nExplicación científica: perros salvajes o coyotes con sarna. La falta de sangre se debe a coagulación post mortem o insectos.\n\nCaso clásico de críptido moderno generado por histeria colectiva y amplificación mediática.`,
    content_en: `Cryptid attacking domestic animals to suck their blood. Phenomenon began in Puerto Rico (1995), spreading through Latin America. 1.2 m creature, scaly skin, red eyes.\n\nScientific explanation: wild dogs or coyotes with mange. Blood absence due to post-mortem coagulation or insects.\n\nClassic case of modern cryptid generated by mass hysteria and media amplification.`,
    excerpt_es: 'Críptido latinoamericano que ataca animales para chupar su sangre.',
    excerpt_en: 'Latin American cryptid that attacks animals to suck their blood.',
    categoryId: 'cat-cryptids-land',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-03-13T00:00:00Z',
    updatedAt: '2026-03-13T00:00:00Z',
  },
  {
    id: 'entry-bigfoot',
    title_es: 'Pie Grande',
    title_en: 'Bigfoot',
    slug: 'pie-grande',
    content_es: `Simio bípedo de 2-3 m que habita bosques norteamericanos. Leyendas indígenas preexistentes. El término "Bigfoot" se popularizó en 1958 tras huellas en California.\n\nEl video Patterson-Gimlin (1967) es la evidencia más famosa. La ciencia lo considera leyenda, identificación errónea de osos o fraude.\n\nLos investigadores aficionados continúan buscando evidencia del Sasquatch.`,
    content_en: `Bipedal ape 2-3 m inhabiting North American forests. Pre-existing indigenous legends. "Bigfoot" popularized in 1958 after California footprints.\n\nThe Patterson-Gimlin film (1967) is the most famous evidence. Science considers it legend, bear misidentification, or hoax.\n\nAmateur researchers continue seeking evidence of Sasquatch.`,
    excerpt_es: 'Legendario simio bípedo de los bosques norteamericanos.',
    excerpt_en: 'Legendary bipedal ape of North American forests.',
    categoryId: 'cat-cryptids-land',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-03-14T00:00:00Z',
    updatedAt: '2026-03-14T00:00:00Z',
  },
  {
    id: 'entry-yeti',
    title_es: 'Yeti (El Abominable Hombre de las Nieves)',
    title_en: 'Yeti (The Abominable Snowman)',
    slug: 'yeti',
    content_es: `Críptido del Himalaya, primate bípedo de pelo blanco, 1.5-2.5 m. Leyendas sherpas ancestrales. En 1921, una expedición británica al Everest encontró huellas identificadas como del Yeti.\n\nLa foto de Eric Shipton (1951) muestra una huella de 33 cm. Análisis genéticos de muestras resultaron ser de osos, cabras y perros.\n\nLa mayoría de avistamientos se explican por osos pardos del Himalaya. Sigue siendo símbolo del misterio del Himalaya.`,
    content_en: `Himalayan cryptid, bipedal primate with white hair, 1.5-2.5 m. Ancient Sherpa legends. In 1921, a British Everest expedition found tracks identified as Yeti.\n\nEric Shipton's photo (1951) shows a 33 cm footprint. Genetic analyses of samples turned out to be bear, goat, and dog.\n\nMost sightings explained by Himalayan brown bears. Remains a symbol of Himalayan mystery.`,
    excerpt_es: 'El legendario habitante del Himalaya, el Abominable Hombre de las Nieves.',
    excerpt_en: 'The legendary Himalayan inhabitant, the Abominable Snowman.',
    categoryId: 'cat-cryptids-land',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-03-15T00:00:00Z',
    updatedAt: '2026-03-15T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 6 — cat-cryptids-water
  // ════════════════════════════════════════
  {
    id: 'entry-nessie',
    title_es: 'Monstruo del Lago Ness',
    title_en: 'Loch Ness Monster',
    slug: 'monstruo-lago-ness',
    content_es: `Nessie habita el Lago Ness (Escocia, 230 m de profundidad). Primera mención en 565 d.C. con San Columba. La obsesión moderna comenzó en 1933.\n\nLa foto del cirujano (1934) fue la mejor evidencia hasta revelarse como montaje en 1994. Estudios de ADN ambiental en 2018 sugieren anguilas gigantes.\n\nEs el críptido acuático más famoso del mundo.`,
    content_en: `Nessie inhabits Loch Ness (Scotland, 230 m deep). First mentioned in 565 AD with St. Columba. Modern obsession began in 1933.\n\nThe surgeon's photo (1934) was the best evidence until revealed as hoax in 1994. Environmental DNA studies in 2018 suggest giant eels.\n\nIt is the world's most famous aquatic cryptid.`,
    excerpt_es: 'La legendaria criatura del lago escocés Ness.',
    excerpt_en: "The legendary creature of Scottish Loch Ness.",
    categoryId: 'cat-cryptids-water',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-03-16T00:00:00Z',
    updatedAt: '2026-03-16T00:00:00Z',
  },
  {
    id: 'entry-kraken',
    title_es: 'Kraken',
    title_en: 'Kraken',
    slug: 'kraken',
    content_es: `Monstruo marino escandinavo del tamaño de una isla que creaba remolinos. Descrito por el obispo Pontoppidan en el siglo XVIII.\n\nSu identidad real es el calamar gigante (Architeuthis dux, hasta 13 m) y el calamar colosal antártico (14 m con ganchos).\n\nInmortalizado en "Veinte mil leguas de viaje submarino" y Piratas del Caribe.`,
    content_en: `Scandinavian sea monster the size of an island creating whirlpools. Described by Bishop Pontoppidan in the 18th century.\n\nIts true identity is the giant squid (Architeuthis dux, up to 13 m) and the Antarctic colossal squid (14 m with hooks).\n\nImmortalized in "Twenty Thousand Leagues Under the Sea" and Pirates of the Caribbean.`,
    excerpt_es: 'Monstruo marino escandinavo, probablemente el calamar gigante.',
    excerpt_en: 'Scandinavian sea monster, likely the giant squid.',
    categoryId: 'cat-cryptids-water',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-17T00:00:00Z',
    updatedAt: '2026-03-17T00:00:00Z',
  },
  {
    id: 'entry-mokele-mbembe',
    title_es: 'Mokèlé-mbèmbé',
    title_en: 'Mokèlé-mbèmbé',
    slug: 'mokele-mbembe',
    content_es: `"El que detiene los ríos" en lingala. Críptido acuático de la cuenca del Congo, descrito como un saurópodo. Tradiciones pigmeas bayaka.\n\nInterés occidental desde 1913 con el capitán Ludwig von Stein. Expediciones en los 80 sin éxito concluyente.\n\nEscépticos: falta de evidencia física. Avistamientos explicados como elefantes, hipopótamos o cocodrilos.`,
    content_en: `"One who stops rivers" in Lingala. Aquatic cryptid of the Congo Basin, described as a sauropod. Bayaka pygmy traditions.\n\nWestern interest since 1913 with Captain Ludwig von Stein. Expeditions in the 80s without conclusive success.\n\nSkeptics: lack of physical evidence. Sightings explained as elephants, hippos, or crocodiles.`,
    excerpt_es: 'Críptido acuático del Congo descrito como dinosaurio viviente.',
    excerpt_en: 'Aquatic cryptid from the Congo described as a living dinosaur.',
    categoryId: 'cat-cryptids-water',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-03-18T00:00:00Z',
    updatedAt: '2026-03-18T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 6 — cat-mythical-creatures
  // ════════════════════════════════════════
  {
    id: 'entry-dragon',
    title_es: 'Dragón',
    title_en: 'Dragon',
    slug: 'dragon',
    content_es: `Criatura mitológica universal, reptil gigante a menudo alado que escupe fuego. En Europa es malévolo; en China (long) es benévolo, símbolo de sabiduría.\n\nOrigen probable: descubrimiento de fósiles de dinosaurios. Combina características de serpientes, aves rapaces y felinos.\n\nFigura central en fantasía contemporánea: Tolkien, Martin, videojuegos. Arquetipo del monstruo supremo y el aliado poderoso.`,
    content_en: `Universal mythological creature, giant reptile often winged and fire-breathing. In Europe malevolent; in China (long) benevolent, wisdom symbol.\n\nProbable origin: dinosaur fossil discoveries. Combines traits of snakes, birds of prey, and felines.\n\nCentral figure in contemporary fantasy: Tolkien, Martin, video games. Archetype of supreme monster and powerful ally.`,
    excerpt_es: 'Criatura mitológica universal, símbolo de destrucción y poder.',
    excerpt_en: 'Universal mythological creature, symbol of destruction and power.',
    categoryId: 'cat-mythical-creatures',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-19T00:00:00Z',
    updatedAt: '2026-03-19T00:00:00Z',
  },
  {
    id: 'entry-unicorn',
    title_es: 'Unicornio',
    title_en: 'Unicorn',
    slug: 'unicornio',
    content_es: `Caballo blanco con cuerno en la frente, símbolo de pureza. Mencionado por Ctesias (siglo V a.C.). En la Edad Media, los "cuernos de unicornio" (colmillos de narval) se vendían como antídotos.\n\nAnimales con un cuerno son raros. Explicación: rinocerontes, antílopes o narvales.\n\nHa resurgido como icono pop de individualidad y magia.`,
    content_en: `White horse with forehead horn, purity symbol. Mentioned by Ctesias (5th century BC). In Middle Ages, "unicorn horns" (narwhal tusks) sold as antidotes.\n\nSingle-horned animals are rare. Explanation: rhinos, antelopes, or narwhals.\n\nHas resurged as pop icon of individuality and magic.`,
    excerpt_es: 'Caballo blanco con un cuerno, símbolo de pureza y magia.',
    excerpt_en: 'White horse with a horn, symbol of purity and magic.',
    categoryId: 'cat-mythical-creatures',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-20T00:00:00Z',
    updatedAt: '2026-03-20T00:00:00Z',
  },
  {
    id: 'entry-phoenix',
    title_es: 'Ave Fénix',
    title_en: 'Phoenix',
    slug: 'ave-fenix',
    content_es: `Ave que renace de sus cenizas, símbolo de renovación e inmortalidad. Origen en el Bennu egipcio asociado a Ra. En Grecia, vivía 500 años, ardía y renacía.\n\nEl cristianismo lo adoptó como símbolo de resurrección. Ha inspirado desde Ovidio hasta Harry Potter.\n\nSimboliza superar la adversidad y renacer más fuerte.`,
    content_en: `Bird reborn from ashes, symbol of renewal and immortality. Origin in Egyptian Bennu associated with Ra. In Greece, lived 500 years, burned, reborn.\n\nChristianity adopted it as resurrection symbol. Has inspired from Ovid to Harry Potter.\n\nSymbolizes overcoming adversity and being reborn stronger.`,
    excerpt_es: 'Ave mítica que renace de sus cenizas, símbolo de renovación.',
    excerpt_en: 'Mythical bird reborn from ashes, symbol of renewal.',
    categoryId: 'cat-mythical-creatures',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-21T00:00:00Z',
    updatedAt: '2026-03-21T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 6 — cat-folklore-creatures
  // ════════════════════════════════════════
  {
    id: 'entry-werewolf',
    title_es: 'Hombre Lobo',
    title_en: 'Werewolf',
    slug: 'hombre-lobo',
    content_es: `Humano que se transforma en lobo durante luna llena. Mito universal. El rey Licaón fue transformado por Zeus. Juicios medievales por licantropía.\n\nExplicaciones médicas: porfiria, hipertricosis, licantropía clínica.\n\nFigura recurrente en cine de terror, explorando la dualidad humana.`,
    content_en: `Human transforming into wolf during full moon. Universal myth. King Lycaon transformed by Zeus. Medieval lycanthropy trials.\n\nMedical explanations: porphyria, hypertrichosis, clinical lycanthropy.\n\nRecurring horror cinema figure, exploring human duality.`,
    excerpt_es: 'Criatura que se transforma en lobo durante la luna llena.',
    excerpt_en: 'Creature that transforms into a wolf during the full moon.',
    categoryId: 'cat-folklore-creatures',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-22T00:00:00Z',
    updatedAt: '2026-03-22T00:00:00Z',
  },
  {
    id: 'entry-llorona',
    title_es: 'La Llorona',
    title_en: 'La Llorona (The Weeping Woman)',
    slug: 'la-llorona',
    content_es: `Espíritu de una mujer que llora por sus hijos perdidos, apareciendo de noche. Leyenda hispanoamericana que combina elementos prehispánicos (Cihuacóatl) y católicos.\n\nFunciona como advertencia infantil y alegoría de los peligros del amor no correspondido.\n\nHa trascendido a películas, series y libros. Uno de los mitos más perdurables de Latinoamérica.`,
    content_en: `Spirit of a woman weeping for lost children, appearing at night. Hispanic American legend combining pre-Hispanic (Cihuacóatl) and Catholic elements.\n\nServes as childhood warning and allegory of unrequited love dangers.\n\nHas transcended to films, series, and books. One of Latin America's most enduring myths.`,
    excerpt_es: 'Figura del folclore hispanoamericano, espíritu que llora por sus hijos.',
    excerpt_en: 'Hispanic American folklore figure, spirit weeping for her children.',
    categoryId: 'cat-folklore-creatures',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-23T00:00:00Z',
    updatedAt: '2026-03-23T00:00:00Z',
  },
  {
    id: 'entry-goblins',
    title_es: 'Duendes y Leprechauns',
    title_en: 'Goblins and Leprechauns',
    slug: 'duendes-leprechauns',
    content_es: `Pequeñas criaturas traviesas del folclore europeo. Leprechauns irlandeses (60 cm, barbudos, fabrican zapatos, guardan oro). Goblins más malvados y grotescos.\n\nKobolds germánicos (domésticos), tomtar nórdicos (protectores de granjas), duendes hispanos (espíritus del hogar).\n\nRepresentan la personificación de fuerzas naturales y la creencia en un mundo paralelo.`,
    content_en: `Small mischievous European folklore creatures. Irish leprechauns (60 cm, bearded, make shoes, guard gold). Goblins more evil and grotesque.\n\nGermanic kobolds (domestic), Norse tomtar (farm protectors), Hispanic duendes (house spirits).\n\nRepresent personification of natural forces and belief in a parallel world.`,
    excerpt_es: 'Pequeñas criaturas traviesas del folclore europeo.',
    excerpt_en: 'Small mischievous creatures of European folklore.',
    categoryId: 'cat-folklore-creatures',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-24T00:00:00Z',
    updatedAt: '2026-03-24T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 7 — cat-ooparts
  // ════════════════════════════════════════
  {
    id: 'entry-antikythera',
    title_es: 'Mecanismo de Antikythera',
    title_en: 'Antikythera Mechanism',
    slug: 'mecanismo-antikythera',
    content_es: `Computadora analógica más antigua (150-100 a.C.), descubierta en 1901 en un naufragio griego. Engranajes de bronce que predecían posiciones astronómicas, eclipses y Juegos Olímpicos.\n\nSu tecnología no se repitió hasta los relojes astronómicos del siglo XIV, 1.400 años después.\n\nRepresenta conocimiento tecnológico helenístico perdido. Continúa revelando detalles de su funcionamiento.`,
    content_en: `Oldest analog computer (150-100 BC), discovered in 1901 in a Greek shipwreck. Bronze gears predicting astronomical positions, eclipses, and Olympic Games.\n\nIts technology was not replicated until 14th-century astronomical clocks, 1,400 years later.\n\nRepresents lost Hellenistic technological knowledge. Continues revealing operational details.`,
    excerpt_es: 'La computadora analógica más antigua, engranajes de bronce griegos.',
    excerpt_en: 'The oldest analog computer, Greek bronze gears.',
    categoryId: 'cat-ooparts',
    realityStatus: 'historical',
    imageUrl: '',
    createdAt: '2026-03-25T00:00:00Z',
    updatedAt: '2026-03-25T00:00:00Z',
  },
  {
    id: 'entry-baghdad-battery',
    title_es: 'Pila de Bagdad',
    title_en: 'Baghdad Battery',
    slug: 'pila-de-bagdad',
    content_es: `Artefactos partos (250 a.C.-224 d.C.) descubiertos en 1936: vasija de barro con cilindro de cobre y barra de hierro, posiblemente celdas voltaicas.\n\nSi generaban electricidad, implicaría galvanoplastia 1.800 años antes de Volta. Experimentos muestran voltajes muy bajos. Uso alternativo: almacenar pergaminos sagrados.\n\nOopart paradigmático citado por quienes cuestionan la narrativa lineal del progreso tecnológico.`,
    content_en: `Parthian artifacts (250 BC-224 AD) discovered in 1936: clay jar with copper cylinder and iron bar, possibly voltaic cells.\n\nIf generating electricity, would imply electroplating 1,800 years before Volta. Experiments show very low voltages. Alternative use: storing sacred scrolls.\n\nParadigmatic oopart cited by those questioning linear technological progress narrative.`,
    excerpt_es: 'Artefacto parto que pudo generar electricidad antes de Volta.',
    excerpt_en: 'Parthian artifact that may have generated electricity before Volta.',
    categoryId: 'cat-ooparts',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-03-26T00:00:00Z',
    updatedAt: '2026-03-26T00:00:00Z',
  },
  {
    id: 'entry-ica-stones',
    title_es: 'Piedras de Ica',
    title_en: 'Ica Stones',
    slug: 'piedras-de-ica',
    content_es: `Piedras de andesita grabadas de Ica, Perú, mostrando dinosaurios con humanos y cirugías complejas. Promovidas por el Dr. Javier Cabrera en los 60.\n\nConsenso científico: fraude moderno. Agricultores locales admitieron haberlas fabricado para turistas. Muestran dinosaurios con detalles anatómicos del siglo XX.\n\nCaso paradigmático de controversia en torno a ooparts.`,
    content_en: `Engraved andesite stones from Ica, Peru, showing dinosaurs with humans and complex surgeries. Promoted by Dr. Javier Cabrera in the 60s.\n\nScientific consensus: modern hoax. Local farmers admitted making them for tourists. Show dinosaurs with 20th-century anatomical details.\n\nParadigmatic case of oopart controversy.`,
    excerpt_es: 'Piedras grabadas con dinosaurios y humanos, consideradas fraude.',
    excerpt_en: 'Engraved stones with dinosaurs and humans, considered a hoax.',
    categoryId: 'cat-ooparts',
    realityStatus: 'conspiratorial',
    imageUrl: '',
    createdAt: '2026-03-27T00:00:00Z',
    updatedAt: '2026-03-27T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 7 — cat-sacred-objects
  // ════════════════════════════════════════
  {
    id: 'entry-ark-covenant',
    title_es: 'Arca de la Alianza',
    title_en: 'Ark of the Covenant',
    slug: 'arca-de-la-alianza',
    content_es: `Cofre de madera recubierto de oro con las Tablas de la Ley. Objeto más sagrado del judaísmo, morada terrenal de Dios. Derribó las murallas de Jericó.\n\nResidió en el Templo de Salomón hasta 587 a.C. (invasión babilónica). Paradero desconocido.\n\nTeorías: Etiopía (Iglesia Ortodoxa Etíope afirma tenerla), Monte Nebo, bajo el Monte del Templo. Inmortalizada en "En busca del arca perdida".`,
    content_en: `Gold-covered wooden chest containing the Tablets of the Law. Most sacred object of Judaism, earthly dwelling of God. Brought down Jericho's walls.\n\nResided in Solomon's Temple until 587 BC (Babylonian invasion). Whereabouts unknown.\n\nTheories: Ethiopia (Ethiopian Orthodox Church claims it), Mount Nebo, under Temple Mount. Immortalized in "Raiders of the Lost Ark."`,
    excerpt_es: 'El objeto más sagrado del judaísmo, cuyo paradero es un misterio.',
    excerpt_en: "Judaism's most sacred object, whose whereabouts are a mystery.",
    categoryId: 'cat-sacred-objects',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-28T00:00:00Z',
    updatedAt: '2026-03-28T00:00:00Z',
  },
  {
    id: 'entry-holy-grail',
    title_es: 'Santo Grial',
    title_en: 'Holy Grail',
    slug: 'santo-grial',
    content_es: `Cáliz de la Última Cena, usado para recoger la sangre de Cristo. Objeto de búsqueda de loscaballeros artúricos. Leyenda desarrollada por Chrétien de Troyes y Wolfram von Eschenbach.\n\nSupuestos Griales históricos: Catedral de Valencia (copa de ágata del siglo I a.C.), Génova.\n\nSimboliza la búsqueda espiritual y la perfección imposible.`,
    content_en: `Cup of the Last Supper, used to collect Christ's blood. Object of Arthurian knights' quest. Legend developed by Chrétien de Troyes and Wolfram von Eschenbach.\n\nAlleged historical Grails: Valencia Cathedral (1st-century BC agate cup), Genoa.\n\nSymbolizes spiritual quest and impossible perfection.`,
    excerpt_es: 'El legendario cáliz de la Última Cena, símbolo de búsqueda espiritual.',
    excerpt_en: 'The legendary cup of the Last Supper, symbol of spiritual quest.',
    categoryId: 'cat-sacred-objects',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-29T00:00:00Z',
    updatedAt: '2026-03-29T00:00:00Z',
  },
  {
    id: 'entry-excalibur',
    title_es: 'Excalibur',
    title_en: 'Excalibur',
    slug: 'excalibur',
    content_es: `Espada del rey Arturo, símbolo del derecho divino a gobernar. Extraída de una piedra o recibida de la Dama del Lago. Forjada en Ávalon.\n\nSu vaina protegía de cualquier herida. Tras la muerte de Arturo, devuelta al lago.\n\nArquetipo de la espada mágica y el poder legítimo. Inspiración en Malory, "Excalibur" y "Merlín".`,
    content_en: `Sword of King Arthur, symbol of divine right to rule. Pulled from stone or received from the Lady of the Lake. Forged in Avalon.\n\nIts scabbard protected from any wound. After Arthur's death, returned to the lake.\n\nArchetype of magic sword and legitimate power. Inspiration in Malory, "Excalibur" and "Merlin."`,
    excerpt_es: 'La legendaria espada del rey Arturo, símbolo del poder legítimo.',
    excerpt_en: 'The legendary sword of King Arthur, symbol of legitimate power.',
    categoryId: 'cat-sacred-objects',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-03-30T00:00:00Z',
    updatedAt: '2026-03-30T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 7 — cat-mysterious-manuscripts
  // ════════════════════════════════════════
  {
    id: 'entry-voynich',
    title_es: 'Manuscrito Voynich',
    title_en: 'Voynich Manuscript',
    slug: 'manuscrito-voynich',
    content_es: `Libro ilustrado del siglo XV (1404-1438) en escritura desconocida, nunca descifrado. 240 páginas con plantas irreconocibles, diagramas astronómicos y figuras femeninas.\n\nCriptógrafos de la NSA y Bletchley Park han fracasado. Teorías: código real, lengua construida, o broma medieval elaborada.\n\nSigue siendo el manuscrito más misterioso del mundo.`,
    content_en: `15th-century illustrated book (1404-1438) in unknown script, never deciphered. 240 pages with unrecognizable plants, astronomical diagrams, and female figures.\n\nCryptographers from NSA and Bletchley Park have failed. Theories: real code, constructed language, or elaborate medieval hoax.\n\nRemains the world's most mysterious manuscript.`,
    excerpt_es: 'El manuscrito más enigmático, en código indescifrable del siglo XV.',
    excerpt_en: "The most enigmatic manuscript, in an undeciphered 15th-century code.",
    categoryId: 'cat-mysterious-manuscripts',
    realityStatus: 'unclassified',
    imageUrl: '',
    createdAt: '2026-03-31T00:00:00Z',
    updatedAt: '2026-03-31T00:00:00Z',
  },
  {
    id: 'entry-codex-gigas',
    title_es: 'Codex Gigas (La Biblia del Diablo)',
    title_en: 'Codex Gigas (The Devil\'s Bible)',
    slug: 'codex-gigas',
    content_es: `Manuscrito medieval más grande (92 cm, 75 kg, 310 hojas). Creado en Bohemia, siglo XIII. Famoso por su ilustración del diablo.\n\nLeyenda: un monje condenado a muerte hizo un pacto con el diablo para crearlo en una noche. Contiene Biblias, textos de Josefo e Isidoro, y textos médicos.\n\nConservado en la Biblioteca Nacional de Suecia.`,
    content_en: `Largest medieval manuscript (92 cm, 75 kg, 310 leaves). Created in Bohemia, 13th century. Famous for its devil illustration.\n\nLegend: a condemned monk made a pact with the devil to create it in one night. Contains Bibles, Josephus, Isidore, and medical texts.\n\nPreserved in the National Library of Sweden.`,
    excerpt_es: 'El manuscrito medieval más grande, famoso por su ilustración del diablo.',
    excerpt_en: 'The largest medieval manuscript, famous for its devil illustration.',
    categoryId: 'cat-mysterious-manuscripts',
    realityStatus: 'historical',
    imageUrl: '',
    createdAt: '2026-04-01T00:00:00Z',
    updatedAt: '2026-04-01T00:00:00Z',
  },
  {
    id: 'entry-dead-sea-scrolls',
    title_es: 'Manuscritos del Mar Muerto',
    title_en: 'Dead Sea Scrolls',
    slug: 'manuscritos-mar-muerto',
    content_es: `~900 textos descubiertos en Qumrán (1946-1956), los manuscritos bíblicos más antiguos (siglo III a.C. - siglo I d.C.). Revolucionaron los estudios bíblicos.\n\nIncluyen copias de todos los libros del Tanaj excepto Ester, más textos sectarios como la Regla de la Comunidad. Mencionan un "Maestro de Justicia".\n\nContinúan revelando información sobre el judaísmo del Segundo Templo.`,
    content_en: `~900 texts discovered at Qumran (1946-1956), the oldest biblical manuscripts (3rd century BC - 1st century AD). Revolutionized biblical studies.\n\nInclude copies of all Tanakh books except Esther, plus sectarian texts like the Community Rule. Mention a "Teacher of Righteousness."\n\nContinue revealing information about Second Temple Judaism.`,
    excerpt_es: 'Los manuscritos bíblicos más antiguos, descubiertos en Qumrán.',
    excerpt_en: 'The oldest biblical manuscripts, discovered at Qumran.',
    categoryId: 'cat-mysterious-manuscripts',
    realityStatus: 'historical',
    imageUrl: '',
    createdAt: '2026-04-02T00:00:00Z',
    updatedAt: '2026-04-02T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 8 — cat-psychic-phenomena
  // ════════════════════════════════════════
  {
    id: 'entry-telepathy',
    title_es: 'Telepatía',
    title_en: 'Telepathy',
    slug: 'telepatia',
    content_es: `Transmisión de pensamientos entre mentes sin usar los sentidos. Término acuñado por Myers en 1882. Fenómeno psíquico más investigado.\n\nEstudios Ganzfeld: receptor en aislamiento sensorial intenta recibir imágenes enviadas mentalmente. Metaanálisis sugieren resultados débiles pero significativos.\n\nLa ciencia no ha aceptado su existencia por falta de mecanismo físico y resultados inconsistentes.`,
    content_en: `Mind-to-mind thought transmission without senses. Term coined by Myers in 1882. Most investigated psychic phenomenon.\n\nGanzfeld studies: receiver in sensory isolation tries to receive mentally sent images. Meta-analyses suggest weak but significant results.\n\nScience has not accepted its existence due to lack of physical mechanism and inconsistent results.`,
    excerpt_es: 'Transmisión de pensamientos entre mentes, el fenómeno psíquico más investigado.',
    excerpt_en: 'Mind-to-mind thought transmission, the most investigated psychic phenomenon.',
    categoryId: 'cat-psychic-phenomena',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-04-03T00:00:00Z',
    updatedAt: '2026-04-03T00:00:00Z',
  },
  {
    id: 'entry-precognition',
    title_es: 'Precognición',
    title_en: 'Precognition',
    slug: 'precognicion',
    content_es: `Percepción de eventos futuros. Estudios del Dr. Rhine en Duke (1930s) investigaron predicción de dados. Sueños premonitorios: casos del Titanic y Aberfan.\n\nLa ciencia lo explica como sesgo de retrospectiva, coincidencias estadísticas o procesamiento inconsciente.\n\nLa física cuántica se invoca ocasionalmente para justificarla, sin consenso científico.`,
    content_en: `Perception of future events. Dr. Rhine's Duke studies (1930s) investigated dice prediction. Precognitive dreams: Titanic and Aberfan cases.\n\nScience explains it as hindsight bias, statistical coincidences, or unconscious processing.\n\nQuantum physics occasionally invoked to justify it, without scientific consensus.`,
    excerpt_es: 'Percepción de eventos futuros, desde sueños premonitorios hasta预感.',
    excerpt_en: 'Perception of future events, from precognitive dreams to foreknowledge.',
    categoryId: 'cat-psychic-phenomena',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-04-04T00:00:00Z',
    updatedAt: '2026-04-04T00:00:00Z',
  },
  {
    id: 'entry-nde',
    title_es: 'Experiencias Cercanas a la Muerte',
    title_en: 'Near-Death Experiences (NDEs)',
    slug: 'experiencias-cercanas-a-la-muerte',
    content_es: `Fenómenos reportados por personas clínicamente muertas: paz, flotar fuera del cuerpo, túnel oscuro, luz brillante, reunión con fallecidos, revisión de vida. Popularizado por Raymond Moody (1975).\n\nEstudio AWARE del Dr. Parnia documentó ECM durante paros cardíacos. Explicaciones: anoxia cerebral, endorfinas, estimulación del lóbulo temporal.\n\nAlgunos aspectos (eventos confirmados vistos fuera del cuerpo) siguen sin explicación.`,
    content_en: `Phenomena reported by clinically dead people: peace, floating outside body, dark tunnel, bright light, meeting deceased, life review. Popularized by Raymond Moody (1975).\n\nDr. Parnia's AWARE study documented NDEs during cardiac arrest. Explanations: cerebral anoxia, endorphins, temporal lobe stimulation.\n\nSome aspects (confirmed events seen outside body) remain unexplained.`,
    excerpt_es: 'Experiencias extracorporales reportadas por personas cercanas a la muerte.',
    excerpt_en: 'Out-of-body experiences reported by people near death.',
    categoryId: 'cat-psychic-phenomena',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-04-05T00:00:00Z',
    updatedAt: '2026-04-05T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 8 — cat-ghosts
  // ════════════════════════════════════════
  {
    id: 'entry-enfield-poltergeist',
    title_es: 'Poltergeist de Enfield',
    title_en: 'Enfield Poltergeist',
    slug: 'poltergeist-enfield',
    content_es: `Uno de los casos paranormales más documentados (Londres, 1977-79). Familia Hodgson: muebles moviéndose, golpes, objetos volando, voces. Janet (11) fue grabada con voz ronca de un tal Bill Wilkins.\n\nInvestigado por Maurice Grosse y Guy Lyon Playfair (SPR), quienes lo consideraron genuino. Escépticos (James Randi) señalaron que Janet fue sorprendida moviendo objetos.\n\nEl caso sigue siendo controvertido y debatido.`,
    content_en: `One of the most documented paranormal cases (London, 1977-79). Hodgson family: furniture moving, knocking, flying objects, voices. Janet (11) recorded with hoarse voice of Bill Wilkins.\n\nInvestigated by Maurice Grosse and Guy Lyon Playfair (SPR), who considered it genuine. Skeptics (James Randi) noted Janet was caught moving objects.\n\nThe case remains controversial and debated.`,
    excerpt_es: 'Uno de los casos de poltergeist más documentados (Londres, 1977-79).',
    excerpt_en: 'One of the most documented poltergeist cases (London, 1977-79).',
    categoryId: 'cat-ghosts',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-04-06T00:00:00Z',
    updatedAt: '2026-04-06T00:00:00Z',
  },
  {
    id: 'entry-white-lady',
    title_es: 'La Dama de Blanco',
    title_en: 'The White Lady',
    slug: 'dama-de-blanco',
    content_es: `Tipo de fantasma más reportado: figura femenina de blanco en caminos y castillos. Presente en casi todas las culturas con variantes.\n\nEspaña: Castillo de Butrón. México: Llorona (variante). Japón: Yuki-onna. Inglaterra: castillos de Dover y Hampton Court.\n\nOrigen en tradiciones celtas de hadas y banshees, adaptadas por el cristianismo como almas en pena.`,
    content_en: `Most reported ghost type: female figure in white on roads and castles. Present in almost all cultures with variants.\n\nSpain: Butrón Castle. Mexico: Llorona (variant). Japan: Yuki-onna. England: Dover and Hampton Court castles.\n\nOrigin in Celtic fairy and banshee traditions, adapted by Christianity as souls in purgatory.`,
    excerpt_es: 'El fantasma más reportado: figura femenina de blanco en todo el mundo.',
    excerpt_en: 'The most reported ghost: female figure in white worldwide.',
    categoryId: 'cat-ghosts',
    realityStatus: 'mythological',
    imageUrl: '',
    createdAt: '2026-04-07T00:00:00Z',
    updatedAt: '2026-04-07T00:00:00Z',
  },
  {
    id: 'entry-borley-rectory',
    title_es: 'La Rectoría de Borley',
    title_en: 'Borley Rectory',
    slug: 'rectoria-borley',
    content_es: `"La casa más embrujada de Inglaterra" (Essex, construida 1863). Pisadas, campanas, monja fantasmal. Investigada por Harry Price (1920s-30s).\n\nPrice escribió "The Most Haunted House in England" (1940). Destruida por incendio en 1939. Price fue acusado de fraude en otras investigaciones.\n\nHoy se cree que muchos fenómenos fueron exagerados o fabricados. Sigue siendo un caso famoso de la historia paranormal británica.`,
    content_en: `"The most haunted house in England" (Essex, built 1863). Footsteps, bells, ghostly nun. Investigated by Harry Price (1920s-30s).\n\nPrice wrote "The Most Haunted House in England" (1940). Destroyed by fire in 1939. Price was accused of fraud in other investigations.\n\nToday many phenomena are believed exaggerated or fabricated. Remains a famous British paranormal case.`,
    excerpt_es: '"La casa más embrujada de Inglaterra", una rectoría victoriana.',
    excerpt_en: '"The most haunted house in England," a Victorian rectory.',
    categoryId: 'cat-ghosts',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-04-08T00:00:00Z',
    updatedAt: '2026-04-08T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 8 — cat-ufology
  // ════════════════════════════════════════
  {
    id: 'entry-roswell',
    title_es: 'Incidente Roswell',
    title_en: 'Roswell Incident',
    slug: 'incidente-roswell',
    content_es: `El caso OVNI más famoso. Julio 1947: algo se estrelló cerca de Roswell, Nuevo México. El ejército dijo "disco volador" y luego "globo meteorológico".\n\nDécadas después, testigos afirmaron cuerpos extraterrestres. En los 90, el ejército explicó que era el Proyecto Mogul (detección de pruebas nucleares soviéticas).\n\nEpicentro de la ufología moderna. Para creyentes, evidencia de encubrimiento. Para escépticos, mito generado por un malentendido militar.`,
    content_en: `The most famous UFO case. July 1947: something crashed near Roswell, New Mexico. Army said "flying disc" then "weather balloon."\n\nDecades later, witnesses claimed extraterrestrial bodies. In the 90s, army explained it as Project Mogul (Soviet nuclear test detection).\n\nEpicenter of modern ufology. For believers, evidence of cover-up. For skeptics, myth from military misunderstanding.`,
    excerpt_es: 'El caso OVNI más famoso, en el centro del debate sobre encubrimiento gubernamental.',
    excerpt_en: 'The most famous UFO case, at the center of government cover-up debate.',
    categoryId: 'cat-ufology',
    realityStatus: 'conspiratorial',
    imageUrl: '',
    createdAt: '2026-04-09T00:00:00Z',
    updatedAt: '2026-04-09T00:00:00Z',
  },
  {
    id: 'entry-phoenix-lights',
    title_es: 'Luces de Phoenix',
    title_en: 'Phoenix Lights',
    slug: 'luces-phoenix',
    content_es: `Avistamiento OVNI masivo el 13 de marzo de 1997 en Arizona. Miles de personas vieron una formación en V de seis luces moviéndose silenciosamente.\n\nEl gobernador Symington inicialmente bromeó, pero luego reveló que él mismo lo vio y cree que no era terrestre.\n\nExplicación oficial: bengalas de aviones A-10. Testigos insisten en que era demasiado grande y silencioso. Uno de los avistamientos masivos mejor documentados.`,
    content_en: `Mass UFO sighting on March 13, 1997 in Arizona. Thousands saw a V-shaped formation of six lights moving silently.\n\nGovernor Symington initially joked, but later revealed he himself saw it and believes it was not terrestrial.\n\nOfficial explanation: A-10 aircraft flares. Witnesses insist it was too large and silent. One of the best-documented mass sightings.`,
    excerpt_es: 'Avistamiento OVNI masivo sobre Arizona en 1997, presenciado por miles.',
    excerpt_en: 'Mass UFO sighting over Arizona in 1997, witnessed by thousands.',
    categoryId: 'cat-ufology',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-04-10T00:00:00Z',
    updatedAt: '2026-04-10T00:00:00Z',
  },
  {
    id: 'entry-travis-walton',
    title_es: 'Caso Travis Walton',
    title_en: 'Travis Walton Case',
    slug: 'caso-travis-walton',
    content_es: `Secuestro extraterrestre famoso. 5 de noviembre de 1975: Walton, leñador de 22 años, desapareció 5 días en Arizona. Compañeros vieron un OVNI y un rayo de luz.\n\nWalton describió seres humanoides de 1.5 m y una nave. Sus compañeros y él pasaron polígrafos sugiriendo verdad.\n\nEscépticos (Randi) señalaron inconsistencias y posible engaño. Adaptado en "Fire in the Sky" (1993).`,
    content_en: `Famous alien abduction. November 5, 1975: Walton, 22-year-old logger, disappeared 5 days in Arizona. Coworkers saw a UFO and light beam.\n\nWalton described 1.5 m humanoid beings and a spacecraft. He and coworkers passed polygraphs suggesting truth.\n\nSkeptics (Randi) noted inconsistencies and possible hoax. Adapted in "Fire in the Sky" (1993).`,
    excerpt_es: 'Uno de los casos de secuestro extraterrestre más famosos y debatidos.',
    excerpt_en: 'One of the most famous and debated alien abduction cases.',
    categoryId: 'cat-ufology',
    realityStatus: 'speculative',
    imageUrl: '',
    createdAt: '2026-04-11T00:00:00Z',
    updatedAt: '2026-04-11T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 8 — cat-esotericism
  // ════════════════════════════════════════
  {
    id: 'entry-kabbalah',
    title_es: 'La Cábala',
    title_en: 'Kabbalah',
    slug: 'cabala',
    content_es: `Tradición esotérica judía que explora la naturaleza divina. Texto fundamental: el Zohar (siglo XIII). El Árbol de la Vida con diez sefirot (Keter, Jojmá, Biná, Jesed, Guevurá, Tiféret, Netzaj, Hod, Yesod, Maljut).\n\nInfluencia renacentista (Pico della Mirandola) y ocultista (Golden Dawn). Incluye meditación sobre sefirot e interpretación de nombres divinos.\n\nEstudiada hoy en círculos judíos y tradiciones esotéricas occidentales.`,
    content_en: `Jewish esoteric tradition exploring divine nature. Fundamental text: the Zohar (13th century). Tree of Life with ten sefirot (Keter, Chokhmah, Binah, Chesed, Gevurah, Tiferet, Netzach, Hod, Yesod, Malkuth).\n\nRenaissance influence (Pico della Mirandola) and occultist (Golden Dawn). Includes meditation on sefirot and divine name interpretation.\n\nStudied today in Jewish circles and Western esoteric traditions.`,
    excerpt_es: 'Tradición esotérica judía basada en el Árbol de la Vida y las diez sefirot.',
    excerpt_en: 'Jewish esoteric tradition based on the Tree of Life and the ten sefirot.',
    categoryId: 'cat-esotericism',
    realityStatus: 'philosophical',
    imageUrl: '',
    createdAt: '2026-04-12T00:00:00Z',
    updatedAt: '2026-04-12T00:00:00Z',
  },
  {
    id: 'entry-hermeticism',
    title_es: 'Hermetismo',
    title_en: 'Hermeticism',
    slug: 'hermetismo',
    content_es: `Tradición basada en escritos de Hermes Trismegisto (Thot + Hermes). Corpus Hermeticum y Tabla Esmeralda. Principio: "Como arriba, es abajo".\n\nInfluyó alquimia, astrología y magia renacentista. Traducido por Ficino, influyó en Bruno y Pico della Mirandola.\n\nContinúa siendo influencia importante en la espiritualidad occidental contemporánea.`,
    content_en: `Tradition based on writings of Hermes Trismegistus (Thoth + Hermes). Corpus Hermeticum and Emerald Tablet. Principle: "As above, so below."\n\nInfluenced alchemy, astrology, and Renaissance magic. Translated by Ficino, influenced Bruno and Pico della Mirandola.\n\nRemains an important influence in contemporary Western spirituality.`,
    excerpt_es: 'Tradición esotérica basada en Hermes Trismegisto y el principio de correspondencia universal.',
    excerpt_en: 'Esoteric tradition based on Hermes Trismegistus and the principle of universal correspondence.',
    categoryId: 'cat-esotericism',
    realityStatus: 'philosophical',
    imageUrl: '',
    createdAt: '2026-04-13T00:00:00Z',
    updatedAt: '2026-04-13T00:00:00Z',
  },
  {
    id: 'entry-freemasonry',
    title_es: 'Francmasonería',
    title_en: 'Freemasonry',
    slug: 'francmasoneria',
    content_es: `Organización fraternal con orígenes en gremios medievales. Masonería especulativa moderna surgió en el siglo XVII. Gran Logia de Londres fundada en 1717.\n\nUsa símbolos arquitectónicos (escuadra y compás). Grados: Aprendiz, Compañero, Maestro. Miembros: Washington, Voltaire, Mozart, Bolívar.\n\nObjeto de teorías conspirativas. En realidad promueve filantropía y tolerancia. Millones de masones en logias independientes.`,
    content_en: `Fraternal organization with origins in medieval guilds. Modern speculative masonry emerged in the 17th century. Grand Lodge of London founded in 1717.\n\nUses architectural symbols (square and compasses). Degrees: Entered Apprentice, Fellow Craft, Master Mason. Members: Washington, Voltaire, Mozart, Bolívar.\n\nSubject of conspiracy theories. Actually promotes philanthropy and tolerance. Millions of Masons in independent lodges.`,
    excerpt_es: 'Organización fraternal con orígenes medievales, objeto de teorías conspirativas.',
    excerpt_en: 'Fraternal organization with medieval origins, subject of conspiracy theories.',
    categoryId: 'cat-esotericism',
    realityStatus: 'historical',
    imageUrl: '',
    createdAt: '2026-04-14T00:00:00Z',
    updatedAt: '2026-04-14T00:00:00Z',
  },

  // ════════════════════════════════════════
  // Domain 8 — cat-divination
  // ════════════════════════════════════════
  {
    id: 'entry-tarot',
    title_es: 'Tarot',
    title_en: 'Tarot',
    slug: 'tarot',
    content_es: `78 naipes: 22 Arcanos Mayores (El Loco al Mundo) y 56 Arcanos Menores (Copas, Bastos, Espadas, Oros). Uso adivinatorio popularizado en el siglo XVIII.\n\nMazo Rider-Waite-Smith (1909) es el más usado. Simbolismo astrológico, numerológico, alquímico y cabalístico.\n\nHerramienta de introspección y autoconocimiento. La ciencia lo considera pseudociencia.`,
    content_en: `78 cards: 22 Major Arcana (Fool to World) and 56 Minor Arcana (Cups, Wands, Swords, Pentacles). Divinatory use popularized in 18th century.\n\nRider-Waite-Smith deck (1909) is most used. Astrological, numerological, alchemical, and kabbalistic symbolism.\n\nTool for introspection and self-knowledge. Science considers it pseudoscience.`,
    excerpt_es: 'Conjunto de 78 naipes usado para adivinación e introspección.',
    excerpt_en: 'Set of 78 cards used for divination and introspection.',
    categoryId: 'cat-divination',
    realityStatus: 'philosophical',
    imageUrl: '',
    createdAt: '2026-04-15T00:00:00Z',
    updatedAt: '2026-04-15T00:00:00Z',
  },
  {
    id: 'entry-i-ching',
    title_es: 'I Ching (Libro de las Mutaciones)',
    title_en: 'I Ching (Book of Changes)',
    slug: 'i-ching',
    content_es: `Antiguo texto chino de adivinación (3.000+ años). 64 hexagramas de líneas yin/yang. Consulta tradicional con varillas o monedas.\n\nNo predice el futuro deterministamente, ofrece consejos sobre cómo actuar. Influyó en Jung y Bohr.\n\nEstudiado como texto filosófico y herramienta de reflexión personal.`,
    content_en: `Ancient Chinese divination text (3,000+ years). 64 hexagrams of yin/yang lines. Traditional consultation with stalks or coins.\n\nDoes not deterministically predict the future, offers advice on how to act. Influenced Jung and Bohr.\n\nStudied as philosophical text and personal reflection tool.`,
    excerpt_es: 'Antiguo texto chino de 64 hexagramas usado como guía filosófica.',
    excerpt_en: 'Ancient Chinese text of 64 hexagrams used as philosophical guide.',
    categoryId: 'cat-divination',
    realityStatus: 'philosophical',
    imageUrl: '',
    createdAt: '2026-04-16T00:00:00Z',
    updatedAt: '2026-04-16T00:00:00Z',
  },
  {
    id: 'entry-astrology',
    title_es: 'Astrología',
    title_en: 'Astrology',
    slug: 'astrologia',
    content_es: `Sistema que relaciona la posición de los astros con la personalidad y el destino. Origen en Babilonia (II milenio a.C.). Doce signos zodiacales y carta astral.\n\nConsiderada ciencia hasta el siglo XVII. Hoy clasificada como pseudociencia. El efecto Forer explica su percepción de precisión.\n\nEnormemente popular: millones leen su horóscopo. En India, la astrología védica (Jyotisha) es respetada. Satisface la necesidad humana de encontrar significado.`,
    content_en: `System relating celestial positions to personality and destiny. Origin in Babylon (2nd millennium BC). Twelve zodiac signs and birth chart.\n\nConsidered science until the 17th century. Today classified as pseudoscience. The Forer effect explains its perceived accuracy.\n\nEnormously popular: millions read their horoscope. In India, Vedic astrology (Jyotisha) is respected. Satisfies human need to find meaning.`,
    excerpt_es: 'Sistema que relaciona los astros con la personalidad y el destino.',
    excerpt_en: 'System relating celestial bodies to personality and destiny.',
    categoryId: 'cat-divination',
    realityStatus: 'philosophical',
    imageUrl: '',
    createdAt: '2026-04-17T00:00:00Z',
    updatedAt: '2026-04-17T00:00:00Z',
  },
]

export const newSubsections: SeedSubsection[] = [
  // ── entry-eldorado ──
  { id: 'sub-eldorado-01', entryId: 'entry-eldorado', title_es: 'Origen muisca del mito', title_en: 'Muisca origin of the myth', content_es: 'El mito de El Dorado se originó en la tradición del pueblo muisca, que habitaba el altiplano cundiboyacense en la actual Colombia. El ritual del "dorado" involucraba al zipa (cacique) cubriéndose de polvo de oro y ofreciendo tesoros a los dioses en la laguna de Guatavita. Los españoles, al escuchar este relato, lo malinterpretaron como la existencia de una ciudad entera de oro.', content_en: 'The El Dorado myth originated in the Muisca tradition of the Colombian highlands. The "gilded one" ritual involved the zipa (chief) covering himself in gold dust and offering treasures to the gods at Lake Guatavita. The Spaniards, upon hearing this account, misinterpreted it as an entire city of gold.', order: 0 },
  { id: 'sub-eldorado-02', entryId: 'entry-eldorado', title_es: 'Expediciones y legado cultural', title_en: 'Expeditions and cultural legacy', content_es: 'La búsqueda de El Dorado impulsó expediciones por gran parte de Sudamérica, incluyendo las de Gonzalo Jiménez de Quesada, Sebastián de Belalcázar y Lope de Aguirre. Aunque nunca encontraron oro, estos viajes resultaron en la exploración y cartografía de vastas regiones desconocidas. El mito ha perdurado en la cultura popular como símbolo de la ambición humana y la búsqueda de riquezas imposibles.', content_en: 'The search for El Dorado drove expeditions across much of South America, including those of Gonzalo Jiménez de Quesada, Sebastián de Belalcázar, and Lope de Aguirre. Though they never found gold, these journeys resulted in the exploration and mapping of vast unknown regions. The myth endures in popular culture as a symbol of human ambition and the search for impossible riches.', order: 1 },

  // ── entry-atlantis ──
  { id: 'sub-atlantis-01', entryId: 'entry-atlantis', title_es: 'Descripción platónica', title_en: "Plato's description", content_es: 'Platón describe la Atlántida en sus diálogos Timeo y Critias como una isla más grande que Libia y Asia juntas, situada más allá de las Columnas de Hércules. Su civilización poseía una tecnología avanzada y una capital con anillos concéntricos de tierra y agua. Los gobernantes, descendientes de Poseidón, mantuvieron la virtud durante generaciones hasta que la corrupción moral los llevó a su perdición.', content_en: "Plato describes Atlantis in his dialogues Timaeus and Critias as an island larger than Libya and Asia combined, beyond the Pillars of Hercules. Its civilization possessed advanced technology and a capital with concentric rings of land and water. The rulers, descendants of Poseidon, maintained virtue for generations until moral corruption led to their downfall.", order: 0 },
  { id: 'sub-atlantis-02', entryId: 'entry-atlantis', title_es: 'Teorías de ubicación', title_en: 'Location theories', content_es: 'Se han propuesto docenas de ubicaciones para la Atlántida: la isla de Santorini (Thera), cuya erupción volcánica en el siglo XVII a.C. destruyó la civilización minoica; las Azores, como posibles picos montañosos de una tierra hundida; y la Antártida, basada en interpretaciones de mapas antiguos. Ninguna teoría ha sido aceptada por la arqueología convencional.', content_en: 'Dozens of locations have been proposed for Atlantis: Santorini (Thera), whose 17th-century BC volcanic eruption destroyed Minoan civilization; the Azores, as possible mountain peaks of a sunken land; and Antarctica, based on interpretations of ancient maps. No theory has been accepted by mainstream archaeology.', order: 1 },

  // ── entry-shambhala ──
  { id: 'sub-shambhala-01', entryId: 'entry-shambhala', title_es: 'Profecías budistas', title_en: 'Buddhist prophecies', content_es: 'En el Kalachakra Tantra, Shambhala es un reino donde se preservan las enseñanzas más elevadas del budismo. La profecía del Rigden (rey de Shambhala) anuncia que emergerá con un ejército cuando el mundo esté sumido en la oscuridad para derrotar a las fuerzas del mal e inaugurar una era dorada. Esta profecía ha sido interpretada tanto literal como alegóricamente.', content_en: 'In the Kalachakra Tantra, Shambhala is a realm where the highest Buddhist teachings are preserved. The prophecy of the Rigden (king of Shambhala) foretells he will emerge with an army when the world is plunged into darkness to defeat evil forces and usher in a golden age. This prophecy has been interpreted both literally and allegorically.', order: 0 },
  { id: 'sub-shambhala-02', entryId: 'entry-shambhala', title_es: 'Influencia en Occidente', title_en: 'Western influence', content_es: 'Helena Blavatsky y la Sociedad Teosófica introdujeron Shambhala en el esoterismo occidental, identificándola con un centro espiritual subterráneo. Nicholas Roerich lideró expediciones en busca del reino oculto. El concepto influyó en la literatura new age y en la cultura popular, apareciendo en obras desde "La historia secreta" hasta la serie "Lost".', content_en: 'Helena Blavatsky and the Theosophical Society introduced Shambhala to Western esotericism, identifying it with an underground spiritual center. Nicholas Roerich led expeditions searching for the hidden kingdom. The concept influenced new age literature and popular culture, appearing in works from "The Secret History" to the series "Lost."', order: 1 },

  // ── entry-avalon ──
  { id: 'sub-avalon-01', entryId: 'entry-avalon', title_es: 'Conexión con Glastonbury', title_en: 'Connection to Glastonbury', content_es: 'La identificación de Ávalon con Glastonbury se consolidó en 1191 cuando los monjes de la abadía afirmaron haber descubierto la tumba de Arturo y Ginebra. Glastonbury Tor, una colina que se eleva sobre los humedales, era una isla en la antigüedad. Estudios arqueológicos han revelado una antigua comunidad monástica en el sitio.', content_en: "The identification of Avalon with Glastonbury was consolidated in 1191 when abbey monks claimed to have discovered the tomb of Arthur and Guinevere. Glastonbury Tor, a hill rising above wetlands, was an island in antiquity. Archaeological studies have revealed an ancient monastic community on the site.", order: 0 },
  { id: 'sub-avalon-02', entryId: 'entry-avalon', title_es: 'La Dama del Lago', title_en: 'The Lady of the Lake', content_es: 'La Dama del Lago es la figura central de Ávalon, una poderosa sacerdotisa que custodiaba la isla y sus secretos. En las leyendas artúricas, ella entregó Excalibur a Arturo y acogió al rey moribundo tras Camlann. En obras como "Las nieblas de Ávalon", se la retrata como líder de un culto matriarcal de la diosa.', content_en: 'The Lady of the Lake is the central figure of Avalon, a powerful priestess who guarded the island and its secrets. In Arthurian legends, she gave Excalibur to Arthur and welcomed the dying king after Camlann. In works like "The Mists of Avalon," she is portrayed as the leader of a matriarchal goddess cult.', order: 1 },

  // ── entry-agartha ──
  { id: 'sub-agartha-01', entryId: 'entry-agartha', title_es: 'Tradiciones de Tierra Hueca', title_en: 'Hollow Earth traditions', content_es: 'La idea de que la Tierra es hueca y contiene civilizaciones internas aparece en múltiples culturas. El budismo tibetano menciona Agharti, un reino subterráneo gobernado por el Rey del Mundo. En el siglo XIX, John Symmes propuso que la Tierra tenía aberturas en los polos que conducían a un mundo interior habitable.', content_en: 'The idea that the Earth is hollow and contains inner civilizations appears in multiple cultures. Tibetan Buddhism mentions Agharti, an underground kingdom ruled by the King of the World. In the 19th century, John Symmes proposed that the Earth had polar openings leading to a habitable inner world.', order: 0 },
  { id: 'sub-agartha-02', entryId: 'entry-agartha', title_es: 'Evidencia científica en contra', title_en: 'Scientific evidence against', content_es: 'La sismología moderna ha demostrado que la Tierra tiene una estructura de capas: corteza sólida, manto de roca viscosa, núcleo externo líquido y núcleo interno sólido. Las ondas sísmicas viajan a través del planeta y revelan esta estructura interna. No existen cavidades habitables significativas en el interior terrestre.', content_en: 'Modern seismology has demonstrated that the Earth has a layered structure: solid crust, viscous rock mantle, liquid outer core, and solid inner core. Seismic waves travel through the planet and reveal this internal structure. No significant habitable cavities exist within the Earth.', order: 1 },

  // ── entry-fountain-youth ──
  { id: 'sub-fountain-01', entryId: 'entry-fountain-youth', title_es: 'Ponce de León y Florida', title_en: 'Ponce de León and Florida', content_es: 'Juan Ponce de León, conquistador español y primer gobernador de Puerto Rico, organizó una expedición en 1513 autorizada por la corona española para explorar y colonizar la isla de Bimini, donde se creía que estaba la fuente. En su viaje descubrió la península de Florida, a la que llamó así por su vegetación frondosa y porque la descubrió cerca de la Pascua Florida.', content_en: 'Juan Ponce de León, Spanish conquistador and first governor of Puerto Rico, organized an expedition in 1513 authorized by the Spanish crown to explore and colonize the island of Bimini, where the fountain was believed to be. On his voyage he discovered the Florida peninsula, naming it for its lush vegetation and because he discovered it near Easter (Pascua Florida).', order: 0 },
  { id: 'sub-fountain-02', entryId: 'entry-fountain-youth', title_es: 'Simbolismo del mito', title_en: 'Symbolism of the myth', content_es: 'La Fuente de la Eterna Juventud representa el deseo humano más profundo: la superación de la muerte y el envejecimiento. Desde las epopeyas de Gilgamesh hasta la biotecnología moderna, la humanidad ha buscado incansablemente la inmortalidad. El mito refleja tanto nuestra esperanza como nuestra incapacidad para aceptar la finitud de la vida.', content_en: 'The Fountain of Youth represents humanity\'s deepest desire: overcoming death and aging. From the Epic of Gilgamesh to modern biotechnology, humanity has tirelessly sought immortality. The myth reflects both our hope and our inability to accept the finitude of life.', order: 1 },

  // ── entry-gobekli-tepe ──
  { id: 'sub-gobekli-01', entryId: 'entry-gobekli-tepe', title_es: 'Impacto arqueológico', title_en: 'Archaeological impact', content_es: 'El descubrimiento de Göbekli Tepe revolucionó la arqueología al demostrar que cazadores-recolectores podían construir estructuras monumentales. Klaus Schmidt, el arqueólogo principal, sugirió que la necesidad de alimentar a los trabajadores pudo haber impulsado el desarrollo de la agricultura, invirtiendo la narrativa tradicional de que la agricultura precedió a la civilización.', content_en: 'The discovery of Göbekli Tepe revolutionized archaeology by demonstrating that hunter-gatherers could build monumental structures. Klaus Schmidt, the lead archaeologist, suggested that the need to feed workers may have driven agricultural development, reversing the traditional narrative that agriculture preceded civilization.', order: 0 },
  { id: 'sub-gobekli-02', entryId: 'entry-gobekli-tepe', title_es: 'Simbolismo de los relieves', title_en: 'Symbolism of the reliefs', content_es: 'Los pilares de Göbekli Tepe contienen relieves detallados de animales: zorros, leones, jabalíes, serpientes, escorpiones, grullas y arañas. Algunos investigadores interpretan estos relieves como representaciones del cosmos o figuras mitológicas. La ausencia de figuras humanas y la presencia de animales peligrosos sugieren un propósito ritual o chamánico.', content_en: "The pillars of Göbekli Tepe contain detailed animal reliefs: foxes, lions, boars, snakes, scorpions, cranes, and spiders. Some researchers interpret these as representations of the cosmos or mythological figures. The absence of human figures and the presence of dangerous animals suggest a ritual or shamanic purpose.", order: 1 },

  // ── entry-nazca ──
  { id: 'sub-nazca-01', entryId: 'entry-nazca', title_es: 'Técnica de construcción', title_en: 'Construction technique', content_es: 'Las Líneas de Nazca fueron creadas removiendo las piedras superficiales de color oscuro (óxido de hierro) para exponer el suelo claro subyacente rico en calcio. La extrema aridez de la región, con menos de 4 mm de lluvia anual, ha permitido su conservación. Los geoglifos más grandes miden hasta 300 metros de longitud y requirieron una planificación meticulosa.', content_en: 'The Nazca Lines were created by removing dark surface stones (iron oxide) to expose the underlying calcium-rich light soil. The extreme aridity of the region, with less than 4 mm of annual rainfall, has allowed their preservation. The largest geoglyphs measure up to 300 meters and required meticulous planning.', order: 0 },
  { id: 'sub-nazca-02', entryId: 'entry-nazca', title_es: 'Teorías sobre su propósito', title_en: 'Theories about their purpose', content_es: 'La teoría más aceptada, propuesta por Johan Reinhard, sugiere que las líneas tenían un propósito ceremonial relacionado con el culto al agua en una región extremadamente árida. Otras teorías incluyen: calendario astronómico para marcar solsticios, caminos rituales para peregrinaciones, o dibujos para ser vistos por los dioses del cielo. La teoría extraterrestre de Erich von Däniken carece de respaldo científico.', content_en: "The most accepted theory, proposed by Johan Reinhard, suggests the lines had a ceremonial purpose related to water worship in an extremely arid region. Other theories include: astronomical calendar marking solstices, ritual pathways for pilgrimages, or drawings for sky gods to see. Erich von Däniken's extraterrestrial theory lacks scientific support.", order: 1 },

  // ── entry-great-pyramid ──
  { id: 'sub-pyramid-01', entryId: 'entry-great-pyramid', title_es: 'Precisión constructiva', title_en: 'Construction precision', content_es: 'La Gran Pirámide está alineada con los puntos cardinales con un error de solo 0.067 grados, equivalente a 2.5 minutos de arco. Los bloques de la cámara del rey están tallados con tal precisión que no se puede insertar una hoja de cuchillo entre ellos. La base es casi perfectamente plana, con una variación de solo 2.1 cm en sus 230 metros de lado.', content_en: 'The Great Pyramid is aligned to the cardinal points with an error of only 0.067 degrees, equivalent to 2.5 arc minutes. The blocks in the King\'s Chamber are carved with such precision that a knife blade cannot be inserted between them. The base is nearly perfectly level, with a variation of only 2.1 cm over its 230-meter sides.', order: 0 },
  { id: 'sub-pyramid-02', entryId: 'entry-great-pyramid', title_es: 'Cámaras ocultas', title_en: 'Hidden chambers', content_es: 'En 2017, el proyecto ScanPyramids utilizó muones (partículas subatómicas) para revelar un gran vacío de al menos 30 metros de longitud sobre la Gran Galería, aún sin explorar. También se han detectado anomalías cerca de la cámara de la reina. Estos espacios podrían contener cámaras funerarias adicionales, tesoros o simplemente servir como alivio de peso estructural.', content_en: 'In 2017, the ScanPyramids project used muons (subatomic particles) to reveal a large void at least 30 meters long above the Grand Gallery, still unexplored. Anomalies have also been detected near the Queen\'s Chamber. These spaces could contain additional burial chambers, treasures, or simply serve as structural weight relief.', order: 1 },

  // ── entry-bermuda-triangle ──
  { id: 'sub-bermuda-01', entryId: 'entry-bermuda-triangle', title_es: 'El Vuelo 19', title_en: 'Flight 19', content_es: 'El 5 de diciembre de 1945, cinco bombarderos Torpedo Avenger despegaron de Fort Lauderdale para un ejercicio de entrenamiento. El líder del vuelo reportó que sus brújulas no funcionaban y que todo parecía extraño. Las transmisiones de radio se volvieron erráticas y finalmente cesaron. Un hidroavión Martin Mariner enviado en su rescate también desapareció, supuestamente explotando en el aire.', content_en: 'On December 5, 1945, five Torpedo Avenger bombers took off from Fort Lauderdale for a training exercise. The flight leader reported that their compasses were not working and everything seemed strange. Radio transmissions became erratic and eventually ceased. A Martin Mariner seaplane sent for rescue also disappeared, supposedly exploding in mid-air.', order: 0 },
  { id: 'sub-bermuda-02', entryId: 'entry-bermuda-triangle', title_es: 'Explicaciones científicas', title_en: 'Scientific explanations', content_es: 'Investigaciones de la NOAA y la Guardia Costera de EE.UU. concluyen que el número de accidentes en el Triángulo de las Bermudas es proporcional a su tráfico marítimo y aéreo. Las causas más probables incluyen: errores humanos de navegación, tormentas repentinas, la corriente del Golfo que puede desplazar embarcaciones, y la emisión de gas metano del fondo marino que podría reducir la densidad del agua.', content_en: 'Investigations by NOAA and the US Coast Guard conclude that the number of accidents in the Bermuda Triangle is proportional to its maritime and air traffic. The most likely causes include: human navigation errors, sudden storms, the Gulf Stream which can displace vessels, and methane gas emissions from the seabed that could reduce water density.', order: 1 },

  // ── entry-richat-structure ──
  { id: 'sub-richat-01', entryId: 'entry-richat-structure', title_es: 'Geología de la estructura', title_en: 'Geology of the structure', content_es: 'La Estructura de Richat es un domo anticlinal de 40 km de diámetro cuya erosión diferencial ha expuesto capas concéntricas de rocas sedimentarias e ígneas. Las rocas más antiguas datan del Precámbrico (600 millones de años) y las más recientes del Cretácico. Originalmente se creyó que era un cráter de impacto, pero estudios geológicos detallados confirmaron su origen tectónico.', content_en: 'The Richat Structure is a 40 km anticlinal dome whose differential erosion has exposed concentric layers of sedimentary and igneous rocks. The oldest rocks date to the Precambrian (600 million years) and the most recent to the Cretaceous. It was originally thought to be an impact crater, but detailed geological studies confirmed its tectonic origin.', order: 0 },
  { id: 'sub-richat-02', entryId: 'entry-richat-structure', title_es: 'Teoría de la Atlántida', title_en: 'Atlantis theory', content_es: 'Algunos investigadores independientes han señalado que los anillos concéntricos de Richat se asemejan a la descripción platónica de la capital de la Atlántida. La estructura está cerca de la costa atlántica de Mauritania, y su antigüedad geológica es anterior a la presencia humana. Sin embargo, no hay evidencia arqueológica que respalde esta conexión, y la mayoría de los académicos la rechazan.', content_en: 'Some independent researchers have noted that Richat\'s concentric rings resemble Plato\'s description of the Atlantean capital. The structure is near Mauritania\'s Atlantic coast, and its geological age predates human presence. However, no archaeological evidence supports this connection, and most scholars reject it.', order: 1 },

  // ── entry-zone-silence ──
  { id: 'sub-zone-01', entryId: 'entry-zone-silence', title_es: 'El cohete Athena', title_en: 'The Athena rocket', content_es: 'En 1970, un cohete Athena de la NASA que transportaba una carga útil de medición atmosférica se desvió de su trayectoria y cayó en la Zona del Silencio. El equipo de recuperación encontró el cohete pero experimentó anomalías en las comunicaciones por radio. Este incidente atrajo la atención de los medios y dio origen a la leyenda de la zona como un lugar de fenómenos inexplicables.', content_en: 'In 1970, a NASA Athena rocket carrying an atmospheric measurement payload veered off course and crashed in the Zone of Silence. The recovery team found the rocket but experienced anomalies in radio communications. This incident attracted media attention and gave rise to the legend of the zone as a place of inexplicable phenomena.', order: 0 },
  { id: 'sub-zone-02', entryId: 'entry-zone-silence', title_es: 'Investigación científica', title_en: 'Scientific investigation', content_es: 'Estudios geológicos han confirmado que la Zona del Silencio contiene depósitos significativos de magnetita y otros minerales ferromagnéticos que pueden interferir con las señales de radio. La región también recibe una alta concentración de radiación electromagnética debido a su ubicación geográfica. A pesar de las leyendas, la ciencia explica la mayoría de los fenómenos reportados.', content_en: 'Geological studies have confirmed that the Zone of Silence contains significant magnetite deposits and other ferromagnetic minerals that can interfere with radio signals. The region also receives high electromagnetic radiation due to its geographical location. Despite the legends, science explains most reported phenomena.', order: 1 },

  // ── entry-chupacabras ──
  { id: 'sub-chupa-01', entryId: 'entry-chupacabras', title_es: 'Origen del fenómeno', title_en: 'Origin of the phenomenon', content_es: 'El primer reporte de Chupacabras ocurrió en agosto de 1995 en el pueblo de Moca, Puerto Rico, donde ocho ovejas fueron encontradas muertas con heridas punzantes en el cuello. La historia se difundió rápidamente a través de la televisión y los periódicos, generando avistamientos en toda la isla y posteriormente en América Latina y el sur de Estados Unidos.', content_en: 'The first Chupacabras report occurred in August 1995 in Moca, Puerto Rico, where eight sheep were found dead with puncture wounds on the neck. The story spread quickly through television and newspapers, generating sightings across the island and subsequently through Latin America and the southern United States.', order: 0 },
  { id: 'sub-chupa-02', entryId: 'entry-chupacabras', title_es: 'Explicación biológica', title_en: 'Biological explanation', content_es: 'La explicación más aceptada es que los animales atacados fueron víctimas de perros salvajes o coyotes con sarna sarcóptica. La sarna causa pérdida de pelo y lesiones cutáneas que hacen que los animales parezcan extraños. Las heridas punzantes son características de perros y coyotes. La aparente falta de sangre se debe a la coagulación post mortem y a la acción de insectos carroñeros.', content_en: "The most accepted explanation is that attacked animals were victims of wild dogs or coyotes with sarcoptic mange. Mange causes hair loss and skin lesions making animals appear strange. Puncture wounds are characteristic of dogs and coyotes. The apparent lack of blood is due to post-mortem coagulation and scavenging insect activity.", order: 1 },

  // ── entry-bigfoot ──
  { id: 'sub-bigfoot-01', entryId: 'entry-bigfoot', title_es: 'El video Patterson-Gimlin', title_en: 'The Patterson-Gimlin film', content_es: 'Filmado el 20 de octubre de 1967 en Bluff Creek, California, el video de 59 segundos muestra una figura grande y peluda caminando a lo largo de un arroyo. Roger Patterson y Bob Gimlin grabaron el footage en 16 mm. Ha sido analizado por expertos en biomecánica, efectos especiales y antropología. Algunos estudios consideran la anatomía del sujeto imposible de falsificar con la tecnología de 1967.', content_en: 'Filmed on October 20, 1967 at Bluff Creek, California, the 59-second video shows a large hairy figure walking along a creek. Roger Patterson and Bob Gimlin shot the 16 mm footage. It has been analyzed by experts in biomechanics, special effects, and anthropology. Some studies consider the subject\'s anatomy impossible to fake with 1967 technology.', order: 0 },
  { id: 'sub-bigfoot-02', entryId: 'entry-bigfoot', title_es: 'Evidencia y escepticismo', title_en: 'Evidence and skepticism', content_es: 'La comunidad científica no ha aceptado la existencia de Bigfoot por falta de evidencia concluyente: no hay cadáveres, huesos, dientes, ADN verificable ni fotografías de alta calidad. Los análisis de ADN de presuntas muestras de pelo de Bigfoot han resultado ser de osos, ciervos y otros animales conocidos. La mayoría de los biólogos consideran que el Sasquatch es una leyenda moderna.', content_en: "The scientific community has not accepted Bigfoot's existence due to lack of conclusive evidence: no carcasses, bones, teeth, verifiable DNA, or high-quality photographs. DNA analyses of alleged Bigfoot hair samples have turned out to be from bears, deer, and other known animals. Most biologists consider Sasquatch a modern legend.", order: 1 },

  // ── entry-yeti ──
  { id: 'sub-yeti-01', entryId: 'entry-yeti', title_es: 'Expediciones al Himalaya', title_en: 'Himalayan expeditions', content_es: 'El interés occidental en el Yeti creció tras la expedición al Everest de 1921 liderada por Charles Howard-Bury. En 1951, Eric Shipton fotografió una huella de 33 cm en el glaciar Menlung. El gobierno nepalí emitió permisos oficiales de caza del Yeti en la década de 1950. Sir Edmund Hillary lideró una expedición en 1960 que encontró un "cráneo de Yeti" que resultó ser de un serow (cabra montesa).', content_en: "Western interest in the Yeti grew after Charles Howard-Bury's 1921 Everest expedition. In 1951, Eric Shipton photographed a 33 cm footprint on the Menlung Glacier. The Nepali government issued official Yeti hunting permits in the 1950s. Sir Edmund Hillary led a 1960 expedition that found a \"Yeti skull\" which turned out to be from a serow (mountain goat).", order: 0 },
  { id: 'sub-yeti-02', entryId: 'entry-yeti', title_es: 'Análisis genético', title_en: 'Genetic analysis', content_es: 'En 2013, el genetista Bryan Sykes analizó muestras de pelo atribuidas al Yeti de toda la región del Himalaya. Los resultados mostraron que la mayoría eran de osos pardos del Himalaya (Ursus arctos isabellinus) y osos negros asiáticos. Un estudio de 2017 secuenció 24 muestras y confirmó que todas correspondían a osos, lobos, perros y cabras.', content_en: 'In 2013, geneticist Bryan Sykes analyzed hair samples attributed to the Yeti from across the Himalayan region. Results showed most were from Himalayan brown bears (Ursus arctos isabellinus) and Asian black bears. A 2017 study sequenced 24 samples and confirmed all corresponded to bears, wolves, dogs, and goats.', order: 1 },

  // ── entry-nessie ──
  { id: 'sub-nessie-01', entryId: 'entry-nessie', title_es: 'Historia de avistamientos', title_en: 'History of sightings', content_es: 'Desde 1933, se han registrado más de 1,000 avistamientos reportados del Monstruo del Lago Ness. La foto más famosa, tomada por el cirujano Robert Kenneth Wilson en 1934, mostraba una cabeza y cuello emergiendo del agua. Se reveló como un montaje en 1994: el hijastro del fotógrafo confesó que era un modelo de plástico unido a un submarino de juguete.', content_en: "Since 1933, over 1,000 reported sightings of the Loch Ness Monster have been recorded. The most famous photo, taken by surgeon Robert Kenneth Wilson in 1934, showed a head and neck emerging from the water. It was revealed as a hoax in 1994: the photographer's stepson confessed it was a plastic model attached to a toy submarine.", order: 0 },
  { id: 'sub-nessie-02', entryId: 'entry-nessie', title_es: 'Investigación científica', title_en: 'Scientific research', content_es: 'En 2018, un equipo liderado por Neil Gemmell de la Universidad de Otago realizó un estudio de ADN ambiental del Lago Ness, recolectando muestras de agua para identificar todas las especies presentes. El estudio descartó la presencia de animales grandes como tiburones o bagres gigantes, pero encontró altos niveles de ADN de anguila europea, sugiriendo que algunos avistamientos podrían ser anguilas de gran tamaño.', content_en: 'In 2018, a team led by Neil Gemmell from the University of Otago conducted an environmental DNA study of Loch Ness, collecting water samples to identify all species present. The study ruled out large animals like sharks or giant catfish but found high levels of European eel DNA, suggesting some sightings could be large eels.', order: 1 },

  // ── entry-kraken ──
  { id: 'sub-kraken-01', entryId: 'entry-kraken', title_es: 'El calamar gigante', title_en: 'The giant squid', content_es: 'El calamar gigante (Architeuthis dux) habita en aguas profundas de todos los océanos y puede alcanzar 13 metros de longitud. Tiene los ojos más grandes del reino animal, del tamaño de un balón de baloncesto. Durante siglos solo se conocía por los tentáculos encontrados en estómagos de cachalotes. El primer espécimen completo fue filmado en su hábitat natural en 2012 por un equipo japonés.', content_en: 'The giant squid (Architeuthis dux) inhabits the deep waters of all oceans and can reach 13 meters in length. It has the largest eyes in the animal kingdom, the size of a basketball. For centuries it was only known from tentacles found in sperm whale stomachs. The first complete specimen was filmed in its natural habitat in 2012 by a Japanese team.', order: 0 },
  { id: 'sub-kraken-02', entryId: 'entry-kraken', title_es: 'El calamar colosal', title_en: 'The colossal squid', content_es: 'El calamar colosal (Mesonychoteuthis hamiltoni) es aún más grande que el calamar gigante, alcanzando hasta 14 metros. Habita en las aguas antárticas y tiene características únicas: picos afilados y tentáculos con ganchos rotatorios. Se han encontrado especímenes en estómagos de cachalotes y en redes de pesca. Es el invertebrado más grande conocido.', content_en: 'The colossal squid (Mesonychoteuthis hamiltoni) is even larger than the giant squid, reaching up to 14 meters. It inhabits Antarctic waters and has unique features: sharp beaks and tentacles with rotating hooks. Specimens have been found in sperm whale stomachs and fishing nets. It is the largest known invertebrate.', order: 1 },

  // ── entry-mokele-mbembe ──
  { id: 'sub-mokele-01', entryId: 'entry-mokele-mbembe', title_es: 'Expediciones al Congo', title_en: 'Congo expeditions', content_es: 'Desde la década de 1980, varias expediciones han buscado a Mokèlé-mbèmbé en la cuenca del Congo. El Dr. Roy Mackal, biólogo de la Universidad de Chicago, lideró dos expediciones en 1980 y 1981. Aunque no encontraron evidencia concluyente, recolectaron testimonios de testigos locales que describían consistentemente a la criatura. Expediciones posteriores con equipos modernos tampoco han tenido éxito.', content_en: 'Since the 1980s, several expeditions have searched for Mokèlé-mbèmbé in the Congo Basin. Dr. Roy Mackal, a biologist from the University of Chicago, led two expeditions in 1980 and 1981. Though no conclusive evidence was found, they collected testimonies from local witnesses who consistently described the creature. Later expeditions with modern equipment have also been unsuccessful.', order: 0 },
  { id: 'sub-mokele-02', entryId: 'entry-mokele-mbembe', title_es: 'Análisis escéptico', title_en: 'Skeptical analysis', content_es: 'Los escépticos señalan que la cuenca del Congo, aunque remota, es regularmente sobrevolada por aviones y monitoreada por satélites. No hay evidencia fotográfica, fósil ni genética de una población de grandes reptiles. El ecosistema actual no podría sostener dinosaurios saurópodos debido a la disponibilidad limitada de vegetación. Las descripciones de Mokèlé-mbèmbé coinciden con las de elefantes, hipopótamos y cocodrilos.', content_en: 'Skeptics note that the Congo Basin, though remote, is regularly overflown by aircraft and monitored by satellites. There is no photographic, fossil, or genetic evidence of a population of large reptiles. The current ecosystem could not sustain sauropod dinosaurs due to limited vegetation availability. Descriptions of Mokèlé-mbèmbé match those of elephants, hippopotamuses, and crocodiles.', order: 1 },

  // ── entry-dragon ──
  { id: 'sub-dragon-01', entryId: 'entry-dragon', title_es: 'El dragón en diferentes culturas', title_en: 'The dragon in different cultures', content_es: 'En Europa, el dragón es una criatura malévola que custodia tesoros y debe ser vencida por un héroe: San Jorge, Sigfrido, Beowulf. En China, el dragón (long) es benévolo, controla la lluvia y simboliza el poder imperial. En Mesoamérica, Quetzalcóatl es una serpiente emplumada creadora de la humanidad. Cada cultura desarrolló su propio arquetipo de dragón.', content_en: 'In Europe, the dragon is a malevolent creature guarding treasures that must be defeated by a hero: Saint George, Siegfried, Beowulf. In China, the dragon (long) is benevolent, controls rain, and symbolizes imperial power. In Mesoamerica, Quetzalcóatl is a feathered serpent creator of humanity. Each culture developed its own dragon archetype.', order: 0 },
  { id: 'sub-dragon-02', entryId: 'entry-dragon', title_es: 'Origen del mito del dragón', title_en: 'Origin of the dragon myth', content_es: 'Una teoría propone que el descubrimiento de fósiles de dinosaurios por culturas antiguas pudo haber inspirado las leyendas de dragones. Los esqueletos de grandes reptiles, especialmente cráneos con cuernos, podrían haber sido interpretados como restos de bestias míticas. Otra teoría sugiere que los dragones son un miedo innato a los depredadores, combinando características de serpientes, grandes felinos y aves rapaces.', content_en: 'One theory proposes that the discovery of dinosaur fossils by ancient cultures may have inspired dragon legends. Skeletons of large reptiles, especially horned skulls, could have been interpreted as remains of mythical beasts. Another theory suggests that dragons are an innate fear of predators, combining characteristics of snakes, big cats, and birds of prey.', order: 1 },

  // ── entry-unicorn ──
  { id: 'sub-unicorn-01', entryId: 'entry-unicorn', title_es: 'Cuernos de narval', title_en: 'Narwhal tusks', content_es: 'Los "cuernos de unicornio" que se vendían en la Edad Media eran en realidad colmillos de narval (Monodon monoceros), un cetáceo del Ártico cuyo colmillo en espiral puede alcanzar hasta 3 metros. Se vendían a precios equivalentes a diez veces su peso en oro, creyendo que podían detectar venenos y curar enfermedades. La reina Isabel I poseía uno valorado en 10,000 libras.', content_en: 'The "unicorn horns" sold in the Middle Ages were actually narwhal tusks (Monodon monoceros), an Arctic cetacean whose spiral tusk can reach up to 3 meters. They sold for prices equivalent to ten times their weight in gold, believed to detect poisons and cure diseases. Queen Elizabeth I owned one valued at 10,000 pounds.', order: 0 },
  { id: 'sub-unicorn-02', entryId: 'entry-unicorn', title_es: 'Simbolismo contemporáneo', title_en: 'Contemporary symbolism', content_es: 'En las últimas décadas, el unicornio ha experimentado un resurgimiento masivo como símbolo de individualidad, magia y positividad. Aparece en todo tipo de productos, desde ropa hasta tazas, y es particularmente popular entre los jóvenes. También se ha convertido en un símbolo del movimiento LGBTQ+ y de la cultura startup (unicornio empresarial como startup valorada en más de mil millones de dólares).', content_en: 'In recent decades, the unicorn has experienced a massive resurgence as a symbol of individuality, magic, and positivity. It appears on all kinds of products from clothing to mugs, and is particularly popular among young people. It has also become a symbol of the LGBTQ+ movement and startup culture (business unicorn as a startup valued at over one billion dollars).', order: 1 },

  // ── entry-phoenix ──
  { id: 'sub-phoenix-01', entryId: 'entry-phoenix', title_es: 'El Bennu egipcio', title_en: 'The Egyptian Bennu', content_es: 'El Bennu era un ave sagrada en la mitología egipcia, asociada con el dios solar Ra y el ciclo del sol. Se representaba como una garza real con dos plumas largas en la cabeza. Era el símbolo de la ciudad de Heliópolis y se creía que su llegada marcaba el inicio de una nueva era. El mito griego del Fénix probablemente deriva del Bennu egipcio, adaptado y transformado por los escritores clásicos.', content_en: 'The Bennu was a sacred bird in Egyptian mythology, associated with the sun god Ra and the solar cycle. It was depicted as a grey heron with two long feathers on its head. It was the symbol of the city of Heliopolis and its arrival was believed to mark the beginning of a new era. The Greek myth of the Phoenix likely derives from the Egyptian Bennu, adapted and transformed by classical writers.', order: 0 },
  { id: 'sub-phoenix-02', entryId: 'entry-phoenix', title_es: 'El Fénix en la literatura', title_en: 'The Phoenix in literature', content_es: 'Ovidio describió al Fénix en sus Metamorfosis como un ave que vivía 500 años. En la literatura medieval, el Fénix aparece en el bestiario como símbolo de Cristo. Shakespeare lo menciona en "La tempestad". J.K. Rowling lo inmortalizó como Fawkes, el fénix de Dumbledore en Harry Potter. En la cultura moderna, el Fénix es emblema de la ciudad de Atlanta y de organizaciones que resurgen tras la adversidad.', content_en: 'Ovid described the Phoenix in his Metamorphoses as a bird living 500 years. In medieval literature, the Phoenix appears in the bestiary as a symbol of Christ. Shakespeare mentions it in "The Tempest." J.K. Rowling immortalized it as Fawkes, Dumbledore\'s phoenix in Harry Potter. In modern culture, the Phoenix is the emblem of Atlanta and organizations that rise after adversity.', order: 1 },

  // ── entry-werewolf ──
  { id: 'sub-werewolf-01', entryId: 'entry-werewolf', title_es: 'Licantropía clínica', title_en: 'Clinical lycanthropy', content_es: 'La licantropía clínica es un trastorno psiquiátrico raro en el que el paciente cree que se está transformando en un animal, generalmente un lobo. Se ha documentado en la literatura médica desde el siglo XIX. Los síntomas incluyen alucinaciones, cambios en el comportamiento y la creencia de tener pelo creciendo o dientes afilados. Se asocia con esquizofrenia, trastorno bipolar y depresión psicótica.', content_en: 'Clinical lycanthropy is a rare psychiatric disorder in which the patient believes they are transforming into an animal, usually a wolf. It has been documented in medical literature since the 19th century. Symptoms include hallucinations, behavioral changes, and the belief of having hair growth or sharp teeth. It is associated with schizophrenia, bipolar disorder, and psychotic depression.', order: 0 },
  { id: 'sub-werewolf-02', entryId: 'entry-werewolf', title_es: 'El hombre lobo en el cine', title_en: 'The werewolf in film', content_es: 'El cine de hombres lobo comenzó con "El hombre lobo" (1941) de Universal, protagonizada por Lon Chaney Jr., que estableció el canon moderno del mito: transformación bajo luna llena, vulnerabilidad a la plata y transmisión por mordedura. Películas posteriores como "Un hombre lobo americano en Londres" (1981) introdujeron efectos de transformación revolucionarios. La saga "Crepúsculo" ofreció una versión romantizada del mito.', content_en: 'Werewolf cinema began with Universal\'s "The Wolf Man" (1941), starring Lon Chaney Jr., which established the modern canon: transformation under full moon, vulnerability to silver, and transmission through bites. Later films like "An American Werewolf in London" (1981) introduced revolutionary transformation effects. The "Twilight" saga offered a romanticized version of the myth.', order: 1 },

  // ── entry-llorona ──
  { id: 'sub-llorona-01', entryId: 'entry-llorona', title_es: 'Raíces prehispánicas', title_en: 'Pre-Hispanic roots', content_es: 'La diosa azteca Cihuacóatl ("Mujer Serpiente") era representada como una mujer que vagaba por la noche llorando, emitiendo gemidos que presagiaban desgracias. Según el Códice Florentino, su aparición antes de la llegada de los españoles fue interpretada como un presagio de la caída del Imperio Mexica. Esta figura prehispánica se fusionó con elementos católicos tras la conquista para dar origen a la leyenda de La Llorona.', content_en: 'The Aztec goddess Cihuacóatl ("Serpent Woman") was depicted as a woman wandering at night weeping, emitting moans that foretold misfortunes. According to the Florentine Codex, her appearance before the Spanish arrival was interpreted as an omen of the Mexica Empire\'s fall. This pre-Hispanic figure merged with Catholic elements after the conquest to give rise to the La Llorona legend.', order: 0 },
  { id: 'sub-llorona-02', entryId: 'entry-llorona', title_es: 'La Llorona en el cine moderno', title_en: 'La Llorona in modern cinema', content_es: 'La leyenda ha sido adaptada al cine en múltiples ocasiones. La película mexicana "La Llorona" (1933) fue una de las primeras. En 2019, el director guatemalteco Jayro Bustamante estrenó "La Llorona", una reinterpretación política sobre el genocidio maya. Ese mismo año, Warner Bros. lanzó "The Curse of La Llorona", expandiendo el universo cinematográfico de El Conjuro.', content_en: 'The legend has been adapted to film multiple times. The Mexican film "La Llorona" (1933) was one of the first. In 2019, Guatemalan director Jayro Bustamante released "La Llorona," a political reinterpretation about the Maya genocide. That same year, Warner Bros. released "The Curse of La Llorona," expanding The Conjuring cinematic universe.', order: 1 },

  // ── entry-goblins ──
  { id: 'sub-goblins-01', entryId: 'entry-goblins', title_es: 'Duendes en la tradición hispana', title_en: 'Duendes in Hispanic tradition', content_es: 'En España y América Latina, los duendes son criaturas pequeñas y traviesas que habitan en bosques, montañas y casas. Se les atribuyen travesuras como esconder objetos, hacer ruidos y molestar a los animales. En algunas tradiciones, los duendes pueden ser benévolos si se les respeta, pero malévolos si se les ofende. La palabra "duende" también se usa para describir un encanto misterioso en el arte y la música.', content_en: 'In Spain and Latin America, duendes are small mischievous creatures inhabiting forests, mountains, and houses. They are blamed for pranks like hiding objects, making noises, and bothering animals. In some traditions, duendes can be benevolent if respected but malevolent if offended. The word "duende" is also used to describe a mysterious charm in art and music.', order: 0 },
  { id: 'sub-goblins-02', entryId: 'entry-goblins', title_es: 'El oro de los leprechauns', title_en: 'Leprechaun gold', content_es: 'Según la leyenda irlandesa, los leprechauns son fabricantes de zapatos que acumulan grandes tesoros de oro. Si capturas a uno, debe concederte tres deseos o revelar la ubicación de su tesoro. Sin embargo, son famosos por engañar a sus captores. La olla de oro al final del arcoíris es su imagen más icónica. La tradición de los leprechauns se ha comercializado globalmente como símbolo de Irlanda y la buena suerte.', content_en: "According to Irish legend, leprechauns are shoemakers who accumulate great treasures of gold. If you catch one, he must grant three wishes or reveal his treasure's location. However, they are famous for deceiving their captors. The pot of gold at the end of the rainbow is their most iconic image. The leprechaun tradition has been commercialized globally as a symbol of Ireland and good luck.", order: 1 },

  // ── entry-antikythera ──
  { id: 'sub-antikythera-01', entryId: 'entry-antikythera', title_es: 'Descubrimiento y recuperación', title_en: 'Discovery and recovery', content_es: 'El mecanismo fue descubierto en abril de 1901 por buzos de esponjas griegos en un naufragio a 45 metros de profundidad cerca de la isla de Antikythera. El barco, que data del 70-60 a.C., transportaba un cargamento de lujo. El mecanismo fue inicialmente ignorado como un trozo de bronce corroído hasta que el arqueólogo Valerios Stais notó los engranajes visibles en 1902.', content_en: 'The mechanism was discovered in April 1901 by Greek sponge divers in a shipwreck at 45 meters depth near Antikythera island. The ship, dating from 70-60 BC, carried a luxury cargo. The mechanism was initially dismissed as a corroded piece of bronze until archaeologist Valerios Stais noticed the visible gears in 1902.', order: 0 },
  { id: 'sub-antikythera-02', entryId: 'entry-antikythera', title_es: 'Funcionamiento revelado', title_en: 'Operation revealed', content_es: 'Investigaciones con rayos X y tomografía computarizada han revelado la complejidad del mecanismo: contiene al menos 30 engranajes de bronce en una intrincada disposición que simulaba los movimientos del Sol, la Luna y los planetas conocidos. Podía predecir eclipses solares y lunares usando el ciclo de Saros de 18 años. Inscripciones en las superficies explican los ciclos astronómicos representados.', content_en: 'X-ray and CT scan research has revealed the mechanism\'s complexity: it contains at least 30 bronze gears in an intricate arrangement that simulated the movements of the Sun, Moon, and known planets. It could predict solar and lunar eclipses using the 18-year Saros cycle. Inscriptions on the surfaces explain the astronomical cycles represented.', order: 1 },

  // ── entry-baghdad-battery ──
  { id: 'sub-baghdad-01', entryId: 'entry-baghdad-battery', title_es: 'Descubrimiento y contexto', title_en: 'Discovery and context', content_es: 'Los artefactos fueron descubiertos en 1936 durante excavaciones ferroviarias en Khuyut Rabboua, cerca de Bagdad. Fueron identificados por el arqueólogo alemán Wilhelm König, quien sugirió que podrían ser celdas voltaicas. Los artefactos datan del período parto-sasánida (250 a.C. - 224 d.C.) y consisten en vasijas de barro de 13 cm de altura con tapones de asfalto.', content_en: 'The artifacts were discovered in 1936 during railway excavations at Khuyut Rabboua, near Baghdad. They were identified by German archaeologist Wilhelm König, who suggested they could be voltaic cells. The artifacts date to the Parthian-Sasanian period (250 BC - 224 AD) and consist of 13 cm clay jars with asphalt seals.', order: 0 },
  { id: 'sub-baghdad-02', entryId: 'entry-baghdad-battery', title_es: 'Experimentos modernos', title_en: 'Modern experiments', content_es: 'En la década de 1970, el egiptólogo Arne Eggebrecht recreó la pila de Bagdad usando jugo de uva como electrolito y demostró que podía generar electricidad suficiente para galvanizar una pequeña figura de metal. Sin embargo, experimentos posteriores han cuestionado estos resultados, mostrando voltajes muy bajos. La teoría alternativa más aceptada es que los artefactos se usaban para almacenar rollos sagrados de papiro o pergamino.', content_en: 'In the 1970s, Egyptologist Arne Eggebrecht recreated the Baghdad battery using grape juice as electrolyte and demonstrated it could generate enough electricity to electroplate a small metal figure. However, later experiments have questioned these results, showing very low voltages. The most accepted alternative theory is that the artifacts were used to store sacred papyrus or parchment scrolls.', order: 1 },

  // ── entry-ica-stones ──
  { id: 'sub-ica-01', entryId: 'entry-ica-stones', title_es: 'El Dr. Cabrera y el Museo', title_en: 'Dr. Cabrera and the Museum', content_es: 'El Dr. Javier Cabrera Darquea, médico peruano, comenzó a coleccionar las Piedras de Ica en la década de 1960. Llegó a acumular más de 11,000 piedras y abrió un museo privado en Ica. Cabrera sostenía que las piedras eran evidencia de una civilización extraterrestre o de una humanidad anterior. Rechazó la autenticación científica y se negó a permitir estudios independientes de las piedras.', content_en: 'Dr. Javier Cabrera Darquea, a Peruvian physician, began collecting Ica Stones in the 1960s. He amassed over 11,000 stones and opened a private museum in Ica. Cabrera maintained that the stones were evidence of an extraterrestrial civilization or an earlier humanity. He rejected scientific authentication and refused to allow independent studies of the stones.', order: 0 },
  { id: 'sub-ica-02', entryId: 'entry-ica-stones', title_es: 'Confesión de los fabricantes', title_en: 'Confession of the makers', content_es: 'En la década de 1970, varios campesinos locales confesaron haber fabricado las piedras para venderlas a los turistas. Basilio Uschuya, uno de los principales fabricantes, demostró cómo grababa las piedras usando herramientas modernas y luego las envejecía artificialmente. En una entrevista de 1977, Uschuya afirmó que él y otros campesinos habían fabricado miles de piedras para ganarse la vida.', content_en: 'In the 1970s, several local peasants confessed to making the stones to sell to tourists. Basilio Uschuya, one of the main makers, demonstrated how he engraved the stones using modern tools and then artificially aged them. In a 1977 interview, Uschuya stated that he and other peasants had made thousands of stones to earn a living.', order: 1 },

  // ── entry-ark-covenant ──
  { id: 'sub-ark-01', entryId: 'entry-ark-covenant', title_es: 'Descripción bíblica', title_en: 'Biblical description', content_es: 'Según el Éxodo, el Arca medía 2.5 codos de largo por 1.5 de ancho y alto (aproximadamente 130 x 80 x 80 cm). Estaba construida de madera de acacia recubierta de oro puro, con cuatro anillos de oro por los que se insertaban varas para transportarla. La tapa, llamada "propiciatorio", estaba flanqueada por dos querubines de oro. Se creía que la presencia divina se manifestaba entre los querubines.', content_en: 'According to Exodus, the Ark measured 2.5 cubits long by 1.5 cubits wide and high (approximately 130 x 80 x 80 cm). It was built of acacia wood overlaid with pure gold, with four gold rings through which poles were inserted for carrying. The lid, called the "mercy seat," was flanked by two golden cherubim. Divine presence was believed to manifest between the cherubim.', order: 0 },
  { id: 'sub-ark-02', entryId: 'entry-ark-covenant', title_es: 'La teoría etíope', title_en: 'The Ethiopian theory', content_es: 'La Iglesia Ortodoxa Etíope afirma que el Arca se encuentra en la ciudad de Aksum, en la Iglesia de Santa María de Sion. Según la tradición etíope, fue llevada allí por Menelik I, hijo del rey Salomón y la reina de Saba. Solo una persona, el "guardián del Arca", puede verla. El resto de los fieles venera una réplica. La teoría ha sido difundida por el escritor Graham Hancock.', content_en: "The Ethiopian Orthodox Church claims the Ark is in Aksum, at the Church of St. Mary of Zion. According to Ethiopian tradition, it was brought there by Menelik I, son of King Solomon and the Queen of Sheba. Only one person, the \"guardian of the Ark,\" may see it. The rest of the faithful venerate a replica. The theory has been popularized by writer Graham Hancock.", order: 1 },

  // ── entry-holy-grail ──
  { id: 'sub-grail-01', entryId: 'entry-holy-grail', title_es: 'El Grial en la literatura medieval', title_en: 'The Grail in medieval literature', content_es: 'La leyenda del Grial fue desarrollada por Chrétien de Troyes en "Perceval o el cuento del Grial" (c. 1190), donde aparece como una bandeja o plato. Wolfram von Eschenbach, en "Parzival" (c. 1210), lo describe como una piedra preciosa que proveía alimento y juventud. Sir Thomas Malory en "Le Morte d\'Arthur" consolidó la imagen del cáliz y la búsqueda artúrica. El Grial simboliza la gracia divina y la perfección espiritual.', content_en: "The Grail legend was developed by Chrétien de Troyes in \"Perceval, the Story of the Grail\" (c. 1190), where it appears as a platter or dish. Wolfram von Eschenbach, in \"Parzival\" (c. 1210), describes it as a precious stone providing food and youth. Sir Thomas Malory in \"Le Morte d'Arthur\" consolidated the image of the chalice and the Arthurian quest. The Grail symbolizes divine grace and spiritual perfection.", order: 0 },
  { id: 'sub-grail-02', entryId: 'entry-holy-grail', title_es: 'El Santo Cáliz de Valencia', title_en: 'The Holy Chalice of Valencia', content_es: 'La Catedral de Valencia custodia una copa de ágata que la tradición identifica como el Santo Grial. La copa data del siglo I a.C. y fue donada al papa Sixto II en el siglo III. Llegó a Valencia en 1437 como regalo del rey Alfonso el Magnánimo. Estudios arqueológicos e históricos confirman su antigüedad, pero no pueden probar su uso por Jesús. El Vaticano nunca ha emitido una declaración oficial sobre su autenticidad.', content_en: 'Valencia Cathedral guards an agate cup that tradition identifies as the Holy Grail. The cup dates from the 1st century BC and was given to Pope Sixtus II in the 3rd century. It arrived in Valencia in 1437 as a gift from King Alfonso the Magnanimous. Archaeological and historical studies confirm its antiquity but cannot prove its use by Jesus. The Vatican has never issued an official statement about its authenticity.', order: 1 },

  // ── entry-excalibur ──
  { id: 'sub-excalibur-01', entryId: 'entry-excalibur', title_es: 'La espada en la piedra', title_en: 'The sword in the stone', content_es: 'La leyenda de la espada en la piedra aparece en la literatura artúrica temprana como la prueba del verdadero rey. Según Robert de Boron y Malory, la espada estaba incrustada en una piedra o un yunque con una inscripción que decía que quien la extrajera sería el legítimo rey de Inglaterra. Arturo, siendo un joven escudero, logró extraerla cuando su hermano mayor no pudo, demostrando su destino real.', content_en: "The sword in the stone legend appears in early Arthurian literature as the test of the true king. According to Robert de Boron and Malory, the sword was embedded in a stone or an anvil with an inscription stating that whoever pulled it out would be the rightful king of England. Arthur, as a young squire, succeeded in pulling it out when his older brother could not, proving his royal destiny.", order: 0 },
  { id: 'sub-excalibur-02', entryId: 'entry-excalibur', title_es: 'La Dama del Lago', title_en: 'The Lady of the Lake', content_es: 'En versiones posteriores del mito, Excalibur fue forjada en Ávalon y entregada a Arturo por la misteriosa Dama del Lago. Se decía que su vaina protegía a Arturo de cualquier herida. Cuando Arturo yacía moribundo tras la batalla de Camlann, ordenó a Sir Bedivere devolver la espada al lago. Una mano emergió del agua, atrapó la espada y la sumergió, desapareciendo para siempre.', content_en: 'In later versions of the myth, Excalibur was forged in Avalon and given to Arthur by the mysterious Lady of the Lake. Its scabbard was said to protect Arthur from any wound. When Arthur lay dying after the Battle of Camlann, he ordered Sir Bedivere to return the sword to the lake. A hand emerged from the water, caught the sword, and submerged it, disappearing forever.', order: 1 },

  // ── entry-voynich ──
  { id: 'sub-voynich-01', entryId: 'entry-voynich', title_es: 'Características del manuscrito', title_en: 'Manuscript characteristics', content_es: 'El manuscrito tiene 240 páginas de pergamino escritas en un sistema de escritura que combina alrededor de 25-30 caracteres distintos, algunos similares a letras latinas, números y símbolos abstractos. El texto está escrito de izquierda a derecha con una caligrafía fluida. Las ilustraciones incluyen plantas no identificables, diagramas cosmológicos, figuras femeninas desnudas y recipientes de vidrio que sugieren contenido alquímico o farmacéutico.', content_en: "The manuscript has 240 parchment pages written in a writing system combining about 25-30 distinct characters, some similar to Latin letters, numbers, and abstract symbols. The text is written left to right in fluid handwriting. Illustrations include unidentifiable plants, cosmological diagrams, naked female figures, and glass containers suggesting alchemical or pharmaceutical content.", order: 0 },
  { id: 'sub-voynich-02', entryId: 'entry-voynich', title_es: 'Intentos de descifrado', title_en: 'Decipherment attempts', content_es: 'Los mejores criptógrafos del mundo han intentado descifrar el Voynich, incluyendo expertos de la NSA y Bletchley Park. William Friedman, pionero de la criptografía moderna que descifró el código PURPLE japonés, dedicó años al Voynich sin éxito. En 2019, un investigador afirmó haberlo descifrado como una transcripción del idioma hebreo, pero la comunidad académica rechazó su afirmación. Sigue siendo el Santo Grial de la criptografía.', content_en: 'The world\'s best cryptographers have attempted to decipher the Voynich, including experts from the NSA and Bletchley Park. William Friedman, pioneer of modern cryptography who cracked the Japanese PURPLE code, spent years on the Voynich without success. In 2019, a researcher claimed to have deciphered it as a Hebrew transcription, but the academic community rejected his claim. It remains the Holy Grail of cryptography.', order: 1 },

  // ── entry-codex-gigas ──
  { id: 'sub-codex-01', entryId: 'entry-codex-gigas', title_es: 'Contenido del manuscrito', title_en: 'Manuscript content', content_es: 'El Codex Gigas contiene el Antiguo y Nuevo Testamento en latín, las etimologías de Isidoro de Sevilla, las antigüedades judías de Flavio Josefo, el tratado de medicina "Ars medicinae" de Constantino el Africano, y varios textos históricos. La famosa ilustración del diablo ocupa una página completa y mide 50 cm de altura. Se cree que requirió 160 pieles de animal para su pergamino.', content_en: 'The Codex Gigas contains the Old and New Testaments in Latin, Isidore of Seville\'s Etymologies, Flavius Josephus\'s Jewish Antiquities, the medical treatise "Ars medicinae" by Constantine the African, and various historical texts. The famous devil illustration occupies a full page and measures 50 cm in height. It is believed to have required 160 animal skins for its parchment.', order: 0 },
  { id: 'sub-codex-02', entryId: 'entry-codex-gigas', title_es: 'Historia del manuscrito', title_en: 'Manuscript history', content_es: 'El manuscrito fue creado a principios del siglo XIII en el monasterio benedictino de Podlažice, Bohemia. Durante la Guerra de los Treinta Años (1618-1648), fue saqueado por el ejército sueco y llevado a Estocolmo como botín de guerra. Permaneció en la Biblioteca Real de Suecia hasta 1970, cuando fue devuelto a la Biblioteca Nacional de Suecia. En 2007, una copia digital completa fue publicada en línea.', content_en: 'The manuscript was created in the early 13th century at the Benedictine monastery of Podlažice, Bohemia. During the Thirty Years\' War (1618-1648), it was looted by the Swedish army and taken to Stockholm as war booty. It remained in the Swedish Royal Library until 1970, when it was transferred to the National Library of Sweden. In 2007, a complete digital copy was published online.', order: 1 },

  // ── entry-dead-sea-scrolls ──
  { id: 'sub-deadsea-01', entryId: 'entry-dead-sea-scrolls', title_es: 'Descubrimiento en Qumrán', title_en: 'Discovery at Qumran', content_es: 'El primer descubrimiento fue realizado por un pastor beduino llamado Muhammad edh-Dhib en 1946 en una cueva cerca del Mar Muerto. Encontró siete rollos en vasijas de barro. Las once cuevas de Qumrán han producido aproximadamente 900 manuscritos, incluyendo copias de todos los libros del Antiguo Testamento excepto Ester. El Rollo de Isaías es uno de los más completos y mejor conservados.', content_en: 'The first discovery was made by a Bedouin shepherd named Muhammad edh-Dhib in 1946 in a cave near the Dead Sea. He found seven scrolls in clay jars. The eleven Qumran caves have yielded approximately 900 manuscripts, including copies of all Old Testament books except Esther. The Isaiah Scroll is one of the most complete and best preserved.', order: 0 },
  { id: 'sub-deadsea-02', entryId: 'entry-dead-sea-scrolls', title_es: 'Importancia para los estudios bíblicos', title_en: 'Importance for biblical studies', content_es: 'Antes del descubrimiento, los manuscritos hebreos más antiguos del Antiguo Testamento databan del siglo X d.C. Los Rollos del Mar Muerto son mil años más antiguos y demostraron la notable precisión de la transmisión textual a lo largo de los siglos. También revelaron la diversidad del judaísmo del Segundo Templo, con textos de comunidades como los esenios, que no se mencionan en la Biblia.', content_en: 'Before the discovery, the oldest Hebrew manuscripts of the Old Testament dated to the 10th century AD. The Dead Sea Scrolls are a thousand years older and demonstrated the remarkable accuracy of textual transmission over centuries. They also revealed the diversity of Second Temple Judaism, with texts from communities like the Essenes, not mentioned in the Bible.', order: 1 },

  // ── entry-telepathy ──
  { id: 'sub-telepathy-01', entryId: 'entry-telepathy', title_es: 'Investigación parapsicológica', title_en: 'Parapsychological research', content_es: 'La Society for Psychical Research (SPR), fundada en Londres en 1882, fue la primera organización en investigar sistemáticamente la telepatía. J.B. Rhine estableció el laboratorio de parapsicología en Duke University en la década de 1930, usando cartas Zener para pruebas de telepatía. Los experimentos Ganzfeld, desarrollados en la década de 1970, introdujeron condiciones más controladas con aislamiento sensorial.', content_en: 'The Society for Psychical Research (SPR), founded in London in 1882, was the first organization to systematically investigate telepathy. J.B. Rhine established the parapsychology laboratory at Duke University in the 1930s, using Zener cards for telepathy tests. Ganzfeld experiments, developed in the 1970s, introduced more controlled conditions with sensory isolation.', order: 0 },
  { id: 'sub-telepathy-02', entryId: 'entry-telepathy', title_es: 'Crítica científica', title_en: 'Scientific criticism', content_es: 'La comunidad científica rechaza la telepatía por varias razones: la falta de un mecanismo físico plausible (las ondas electromagnéticas se atenúan con la distancia y el cerebro no es un emisor potente), los resultados inconsistentes entre laboratorios, la imposibilidad de replicar los estudios más famosos, y el problema del "efecto del experimentador" donde variables no controladas influyen en los resultados.', content_en: "The scientific community rejects telepathy for several reasons: lack of a plausible physical mechanism (electromagnetic waves attenuate with distance and the brain is not a powerful emitter), inconsistent results across laboratories, inability to replicate the most famous studies, and the \"experimenter effect\" problem where uncontrolled variables influence results.", order: 1 },

  // ── entry-precognition ──
  { id: 'sub-precog-01', entryId: 'entry-precognition', title_es: 'El sueño del Titanic', title_en: 'The Titanic dream', content_es: 'Uno de los casos más famosos de precognición es el relato de J. Conn Middleton, quien soñó con el hundimiento del Titanic la noche antes de la tragedia y canceló su viaje. Tras el desastre, numerosas personas afirmaron haber tenido sueños o presentimientos similares. El caso más documentado es el del periodista W.T. Stead, quien había escrito sobre un naufragio similar años antes y viajaba en el Titanic cuando se hundió.', content_en: "One of the most famous precognition cases is J. Conn Middleton's story, who dreamed of the Titanic sinking the night before the tragedy and canceled his trip. After the disaster, numerous people claimed to have had similar dreams or premonitions. The most documented case is journalist W.T. Stead, who had written about a similar shipwreck years before and was traveling on the Titanic when it sank.", order: 0 },
  { id: 'sub-precog-02', entryId: 'entry-precognition', title_es: 'Explicación estadística', title_en: 'Statistical explanation', content_es: 'La teoría de la probabilidad ofrece una explicación simple para la precognición: con millones de personas teniendo sueños cada noche, estadísticamente es inevitable que algunos sueños coincidan con eventos futuros. El sesgo de retrospectiva hace que recordemos y destaquemos las coincidencias mientras olvidamos los innumerables sueños que no se cumplieron. Estudios con grandes bases de datos han demostrado que las premoniciones no superan la probabilidad aleatoria.', content_en: 'Probability theory offers a simple explanation for precognition: with millions of people having dreams each night, it is statistically inevitable that some dreams will coincide with future events. Hindsight bias causes us to remember and highlight coincidences while forgetting countless unfulfilled dreams. Studies with large databases have shown that premonitions do not exceed random probability.', order: 1 },

  // ── entry-nde ──
  { id: 'sub-nde-01', entryId: 'entry-nde', title_es: 'Elementos comunes de las ECM', title_en: 'Common elements of NDEs', content_es: 'Raymond Moody identificó nueve elementos comunes en las ECM: sensación de paz y bienestar, experiencia extracorporal, viaje por un túnel oscuro, encuentro con una luz brillante, revisión panorámica de la vida, encuentro con familiares fallecidos, encuentro con un ser de luz, frontera o límite, y regreso al cuerpo. No todas las ECM incluyen todos los elementos, pero la mayoría comparte varios de ellos.', content_en: 'Raymond Moody identified nine common elements in NDEs: peace and well-being sensation, out-of-body experience, travel through a dark tunnel, encounter with a bright light, panoramic life review, meeting deceased relatives, encounter with a being of light, border or limit, and return to the body. Not all NDEs include all elements, but most share several of them.', order: 0 },
  { id: 'sub-nde-02', entryId: 'entry-nde', title_es: 'Perspectiva neurocientífica', title_en: 'Neuroscientific perspective', content_es: 'La neurociencia ofrece explicaciones basadas en la fisiología cerebral: la anoxia cerebral (falta de oxígeno) puede producir alucinaciones visuales como el túnel de luz debido a la activación del córtex visual. La liberación de endorfinas explica la sensación de paz. La estimulación del lóbulo temporal puede inducir sensaciones extracorporales. El estudio AWARE del Dr. Parnia sugiere que la actividad cerebral puede continuar brevemente después del paro cardíaco, lo que podría explicar algunos aspectos de las ECM.', content_en: 'Neuroscience offers explanations based on brain physiology: cerebral anoxia (oxygen lack) can produce visual hallucinations like the light tunnel due to visual cortex activation. Endorphin release explains the peace sensation. Temporal lobe stimulation can induce out-of-body sensations. Dr. Parnia\'s AWARE study suggests that brain activity may continue briefly after cardiac arrest, which could explain some aspects of NDEs.', order: 1 },

  // ── entry-enfield-poltergeist ──
  { id: 'sub-enfield-01', entryId: 'entry-enfield-poltergeist', title_es: 'Investigación de la SPR', title_en: 'SPR investigation', content_es: 'Maurice Grosse y Guy Lyon Playfair, investigadores de la Society for Psychical Research, documentaron el caso de Enfield durante más de dos años. Playfair escribió el libro "This House Is Haunted" (1980) detallando la investigación. Reportaron 2,000 incidentes incluyendo muebles moviéndose, objetos volando, escritura automática y voces. La voz de Janet fue grabada en cinta y analizada por expertos en fonética que no pudieron explicar su origen.', content_en: 'Maurice Grosse and Guy Lyon Playfair, researchers from the Society for Psychical Research, documented the Enfield case for over two years. Playfair wrote "This House Is Haunted" (1980) detailing the investigation. They reported 2,000 incidents including furniture moving, objects flying, automatic writing, and voices. Janet\'s voice was recorded on tape and analyzed by phonetics experts who could not explain its origin.', order: 0 },
  { id: 'sub-enfield-02', entryId: 'entry-enfield-poltergeist', title_es: 'Evidencia de fraude', title_en: 'Evidence of fraud', content_es: 'En 1978, el Daily Mirror publicó fotografías que mostraban a Janet doblando cucharas y moviendo objetos mientras Grosse no miraba. Janet admitió haber fingido algunos fenómenos, aunque insistió en que la mayoría eran genuinos. Los escépticos señalan que las niñas podrían haber fabricado toda la actividad. Los investigadores de la SPR argumentaron que el fraude ocasional no invalida los cientos de incidentes que ocurrieron bajo observación directa.', content_en: "In 1978, the Daily Mirror published photographs showing Janet bending spoons and moving objects while Grosse wasn't looking. Janet admitted to faking some phenomena though insisted most were genuine. Skeptics point out that the girls could have fabricated all the activity. SPR researchers argued that occasional fraud does not invalidate hundreds of incidents that occurred under direct observation.", order: 1 },

  // ── entry-white-lady ──
  { id: 'sub-white-01', entryId: 'entry-white-lady', title_es: 'La Dama de Blanco en España', title_en: 'The White Lady in Spain', content_es: 'En España, las leyendas de Damas de Blanco son comunes en castillos y casas señoriales. La más famosa es la del Castillo de Butrón en Vizcaya, donde el espíritu de una mujer vestida de blanco supuestamente aparece en las torres esperando el regreso de su amado caballero. En el Palacio de la Magdalena de Santander, también se reporta la aparición de una dama blanca. Estas leyendas suelen tener un trasfondo histórico de tragedia amorosa.', content_en: 'In Spain, White Lady legends are common in castles and manor houses. The most famous is at Butrón Castle in Biscay, where the spirit of a woman in white supposedly appears in the towers awaiting her beloved knight\'s return. At the Magdalena Palace in Santander, a white lady apparition is also reported. These legends usually have a historical background of tragic love.', order: 0 },
  { id: 'sub-white-02', entryId: 'entry-white-lady', title_es: 'Interpretación psicológica', title_en: 'Psychological interpretation', content_es: 'El psicólogo Carl Jung interpretaría la Dama de Blanco como una manifestación del arquetipo del ánima, la imagen inconsciente de lo femenino en la psique masculina. La vestimenta blanca simboliza pureza pero también luto y muerte. La repetición del mismo patrón en culturas sin contacto entre sí sugiere una base psicológica universal, posiblemente relacionada con el duelo no resuelto y la proyección de la figura materna.', content_en: 'Psychologist Carl Jung would interpret the White Lady as a manifestation of the anima archetype, the unconscious image of the feminine in the male psyche. White clothing symbolizes purity but also mourning and death. The repetition of the same pattern in cultures without contact suggests a universal psychological basis, possibly related to unresolved grief and projection of the maternal figure.', order: 1 },

  // ── entry-borley-rectory ──
  { id: 'sub-borley-01', entryId: 'entry-borley-rectory', title_es: 'Harry Price y la controversia', title_en: 'Harry Price and controversy', content_es: 'Harry Price (1881-1948) fue el investigador paranormal más famoso de su época. Su investigación de la Rectoría de Borley duró desde 1929 hasta su muerte. Price afirmó haber presenciado fenómenos como escritura automática, mensajes de espíritus, y una monja fantasmal. Sin embargo, después de su muerte, la Society for Psychical Research publicó un informe crítico sugiriendo que Price había exagerado o fabricado evidencia.', content_en: "Harry Price (1881-1948) was the most famous paranormal investigator of his era. His investigation of Borley Rectory lasted from 1929 until his death. Price claimed to have witnessed phenomena including automatic writing, spirit messages, and a ghostly nun. However, after his death, the Society for Psychical Research published a critical report suggesting Price had exaggerated or fabricated evidence.", order: 0 },
  { id: 'sub-borley-02', entryId: 'entry-borley-rectory', title_es: 'Legado del caso', title_en: 'Legacy of the case', content_es: 'A pesar de las controversias, la Rectoría de Borley sigue siendo uno de los casos más famosos de la historia paranormal británica. El sitio ha inspirado numerosos libros, documentales y programas de televisión. Las ruinas de la rectoría fueron un destino popular para cazadores de fantasmas hasta que el terreno fue vendido a propietarios privados. El caso ilustra cómo la fama mediática puede amplificar un fenómeno paranormal más allá de su sustancia real.', content_en: 'Despite controversies, Borley Rectory remains one of the most famous cases in British paranormal history. The site has inspired numerous books, documentaries, and television programs. The rectory ruins were a popular destination for ghost hunters until the land was sold to private owners. The case illustrates how media fame can amplify a paranormal phenomenon beyond its actual substance.', order: 1 },

  // ── entry-roswell ──
  { id: 'sub-roswell-01', entryId: 'entry-roswell', title_es: 'Los testimonios de testigos', title_en: 'Witness testimonies', content_es: 'A lo largo de las décadas, varios testigos del incidente Roswell han dado testimonio público. El mayor Jesse Marcel, oficial de inteligencia de la base de Roswell, afirmó que los restos que recuperó eran de origen extraterrestre. El funeral Glenn Dennis declaró que le pidieron preparar ataúdes pequeños para cuerpos extraterrestres. La enfermera que lo acompañaba desapareció misteriosamente. Estos testimonios, recogidos en la década de 1980, reavivaron el interés en el caso.', content_en: 'Over the decades, several Roswell incident witnesses have given public testimony. Major Jesse Marcel, intelligence officer at Roswell base, stated that the debris he recovered was of extraterrestrial origin. Mortician Glenn Dennis claimed he was asked to prepare small coffins for extraterrestrial bodies. The nurse who accompanied him mysteriously disappeared. These testimonies, collected in the 1980s, rekindled interest in the case.', order: 0 },
  { id: 'sub-roswell-02', entryId: 'entry-roswell', title_es: 'El Proyecto Mogul', title_en: 'Project Mogul', content_es: 'En 1994, la Fuerza Aérea de EE.UU. publicó un informe explicando que los restos de Roswell pertenecían al Proyecto Mogul, un programa secreto que utilizaba globos equipados con micrófonos para detectar ondas de presión de pruebas nucleares soviéticas. Los globos estaban hechos de materiales reflectantes de radar y caucho, consistentes con las descripciones de los testigos. Los "cuerpos extraterrestres" podrían haber sido maniquíes de prueba usados en experimentos de eyección.', content_en: 'In 1994, the US Air Force published a report explaining that the Roswell debris belonged to Project Mogul, a secret program using balloon-borne microphones to detect pressure waves from Soviet nuclear tests. The balloons were made of radar-reflective and rubber materials, consistent with witness descriptions. The "extraterrestrial bodies" could have been test dummies used in ejection experiments.', order: 1 },

  // ── entry-phoenix-lights ──
  { id: 'sub-phoenix-01', entryId: 'entry-phoenix-lights', title_es: 'Avistamiento y reacciones', title_en: 'Sighting and reactions', content_es: 'El 13 de marzo de 1997, miles de personas en Phoenix y otras ciudades de Arizona observaron una formación de seis luces en forma de V que se movía lentamente y en silencio sobre la ciudad. El evento duró varias horas y fue reportado por estaciones de radio y televisión. El gobernador Fife Symington inicialmente hizo bromas sobre el incidente, pero en 2007 declaró que él mismo había presenciado el objeto y que era "extraordinario".', content_en: 'On March 13, 1997, thousands of people in Phoenix and other Arizona cities observed a V-shaped formation of six lights moving slowly and silently over the city. The event lasted several hours and was reported by radio and television stations. Governor Fife Symington initially joked about the incident, but in 2007 stated that he himself had witnessed the object and it was "extraordinary."', order: 0 },
  { id: 'sub-phoenix-02', entryId: 'entry-phoenix-lights', title_es: 'Explicación militar', title_en: 'Military explanation', content_es: 'La Fuerza Aérea de EE.UU. explicó que las luces eran bengalas de iluminación lanzadas por aviones A-10 Warthog de la Guardia Nacional Aérea de Maryland durante un ejercicio en el campo de tiro de Barry Goldwater. Sin embargo, muchos testigos señalaron que las bengalas no explican la formación en V perfecta, el movimiento silencioso y la duración del evento. La controversia continúa, y las Luces de Phoenix siguen siendo uno de los avistamientos OVNI masivos más documentados.', content_en: "The US Air Force explained that the lights were illumination flares dropped by A-10 Warthog aircraft from the Maryland Air National Guard during an exercise at the Barry Goldwater Range. However, many witnesses noted that flares do not explain the perfect V formation, silent movement, and event duration. The controversy continues, and the Phoenix Lights remain one of the most documented mass UFO sightings.", order: 1 },

  // ── entry-travis-walton ──
  { id: 'sub-travis-01', entryId: 'entry-travis-walton', title_es: 'La desaparición', title_en: 'The disappearance', content_es: 'El 5 de noviembre de 1975, Travis Walton y seis compañeros regresaban de trabajar en el bosque cuando vieron una luz brillante. Walton se acercó y fue golpeado por un rayo de luz, desapareciendo. Sus compañeros huyeron aterrorizados. Inicialmente acusados de asesinato, pasaron pruebas de polígrafo que sugirieron que decían la verdad. Walton reapareció cinco días después en una gasolinera, desorientado y con signos de deshidratación.', content_en: "On November 5, 1975, Travis Walton and six coworkers were returning from work in the forest when they saw a bright light. Walton approached and was struck by a light beam, disappearing. His coworkers fled in terror. Initially accused of murder, they passed polygraph tests suggesting they were telling the truth. Walton reappeared five days later at a gas station, disoriented and showing signs of dehydration.", order: 0 },
  { id: 'sub-travis-02', entryId: 'entry-travis-walton', title_es: 'El relato de Walton', title_en: "Walton's account", content_es: 'Walton describió haber despertado dentro de una nave espacial, rodeado por tres seres humanoides de aproximadamente 1.5 metros de altura, con grandes cabezas calvas, ojos negros almendrados y pequeñas bocas. También recordó haber visto a tres seres humanos altos y rubios que parecían ser los líderes. Fue sometido a exámenes mediante un dispositivo similar a una aguja. Posteriormente, fue llevado a una habitación donde se colocó una máscara sobre su rostro, perdiendo el conocimiento hasta despertar en la carretera.', content_en: 'Walton described waking up inside a spacecraft, surrounded by three humanoid beings about 1.5 meters tall, with large bald heads, almond-shaped black eyes, and small mouths. He also recalled seeing three tall blond humans who seemed to be leaders. He was subjected to examinations using a needle-like device. Later, he was taken to a room where a mask was placed over his face, losing consciousness until waking up on the road.', order: 1 },

  // ── entry-kabbalah ──
  { id: 'sub-kabbalah-01', entryId: 'entry-kabbalah', title_es: 'El Árbol de la Vida', title_en: 'The Tree of Life', content_es: 'El Árbol de la Vida es el símbolo central de la Cábala, compuesto por diez sefirot (emanaciones divinas) conectadas por 22 senderos que corresponden a las 22 letras del alfabeto hebreo. Las sefirot se organizan en tres pilares: el pilar de la misericordia (derecha), el pilar de la severidad (izquierda) y el pilar del equilibrio (centro). La sefirá inferior, Maljut, representa el mundo material donde vivimos.', content_en: 'The Tree of Life is the central symbol of Kabbalah, composed of ten sefirot (divine emanations) connected by 22 paths corresponding to the 22 Hebrew alphabet letters. The sefirot are organized in three pillars: mercy (right), severity (left), and balance (center). The lowest sefirah, Malkuth, represents the material world where we live.', order: 0 },
  { id: 'sub-kabbalah-02', entryId: 'entry-kabbalah', title_es: 'La Cábala en la cultura popular', title_en: 'Kabbalah in popular culture', content_es: 'En las últimas décadas, la Cábala ha ganado popularidad en Occidente, especialmente a través del Kabbalah Centre fundado por Philip Berg en Los Ángeles. Celebridades como Madonna, Demi Moore y Britney Spears han estudiado Cábala, generando controversia entre los judíos ortodoxos que consideran que la enseñanza esotérica debe reservarse para judíos varones casados mayores de 40 años. El interés popular ha llevado a la publicación de numerosos libros de introducción a la Cábala.', content_en: 'In recent decades, Kabbalah has gained popularity in the West, especially through the Kabbalah Centre founded by Philip Berg in Los Angeles. Celebrities like Madonna, Demi Moore, and Britney Spears have studied Kabbalah, generating controversy among Orthodox Jews who consider esoteric teaching should be reserved for married Jewish men over 40. Popular interest has led to numerous introductory Kabbalah books.', order: 1 },

  // ── entry-hermeticism ──
  { id: 'sub-hermetic-01', entryId: 'entry-hermeticism', title_es: 'La Tabla Esmeralda', title_en: 'The Emerald Tablet', content_es: 'La Tabla Esmeralda es un texto breve pero fundamental del hermetismo, atribuido a Hermes Trismegisto. Su enseñanza central se resume en el famoso principio "Como arriba, es abajo; como abajo, es arriba", que expresa la correspondencia entre el macrocosmos (universo) y el microcosmos (ser humano). El texto describe la creación del mundo y la transmutación alquímica en un lenguaje críptico que ha sido interpretado de múltiples formas durante siglos.', content_en: 'The Emerald Tablet is a short but fundamental text of Hermeticism, attributed to Hermes Trismegistus. Its central teaching is summarized in the famous principle "As above, so below; as below, so above," expressing the correspondence between macrocosm (universe) and microcosm (human being). The text describes world creation and alchemical transmutation in cryptic language interpreted in multiple ways over centuries.', order: 0 },
  { id: 'sub-hermetic-02', entryId: 'entry-hermeticism', title_es: 'Influencia en el Renacimiento', title_en: 'Renaissance influence', content_es: 'El hermetismo experimentó un gran resurgimiento durante el Renacimiento italiano. En 1463, Marsilio Ficino tradujo el Corpus Hermeticum del griego al latín por encargo de Cosme de Médici. Giordano Bruno encontró en la filosofía hermética una alternativa al aristotelismo escolástico. Pico della Mirandola integró elementos herméticos en su filosofía. Esta influencia contribuyó al desarrollo del pensamiento científico moderno y la magia renacentista.', content_en: 'Hermeticism experienced a great resurgence during the Italian Renaissance. In 1463, Marsilio Ficino translated the Corpus Hermeticum from Greek to Latin for Cosimo de\' Medici. Giordano Bruno found in Hermetic philosophy an alternative to Scholastic Aristotelianism. Pico della Mirandola integrated Hermetic elements into his philosophy. This influence contributed to the development of modern scientific thought and Renaissance magic.', order: 1 },

  // ── entry-freemasonry ──
  { id: 'sub-mason-01', entryId: 'entry-freemasonry', title_es: 'Símbolos y rituales', title_en: 'Symbols and rituals', content_es: 'La masonería utiliza símbolos de la arquitectura medieval: la escuadra (rectitud moral), el compás (moderación), el nivel (igualdad), la plomada (rectitud) y el delantal (pureza). Los rituales de iniciación incluyen representaciones alegóricas del viaje desde la oscuridad a la luz. Cada grado masónico tiene su propio conjunto de símbolos y enseñanzas morales. La Biblia, el Corán o el libro sagrado de cada cultura está presente en la logia como símbolo de la ley divina.', content_en: 'Freemasonry uses symbols from medieval architecture: the square (moral rectitude), compasses (moderation), level (equality), plumb (uprightness), and apron (purity). Initiation rituals include allegorical representations of the journey from darkness to light. Each Masonic degree has its own set of symbols and moral teachings. The Bible, Quran, or sacred book of each culture is present in the lodge as a symbol of divine law.', order: 0 },
  { id: 'sub-mason-02', entryId: 'entry-freemasonry', title_es: 'Teorías conspirativas', title_en: 'Conspiracy theories', content_es: 'La masonería ha sido objeto de numerosas teorías conspirativas desde su fundación. Grupos religiosos la han acusado de satanismo. Durante la Revolución Francesa, se la culpó de conspirar contra la monarquía. El mito de los "Illuminati" a menudo se confunde con la masonería. En el siglo XX, las teorías de Nesta Webster y William Guy Carr popularizaron la idea de una conspiración masónica mundial. A pesar de la falta de evidencia, estas teorías persisten en la cultura popular.', content_en: 'Freemasonry has been subject to numerous conspiracy theories since its founding. Religious groups have accused it of Satanism. During the French Revolution, it was blamed for conspiring against the monarchy. The "Illuminati" myth is often confused with Freemasonry. In the 20th century, theories by Nesta Webster and William Guy Carr popularized the idea of a worldwide Masonic conspiracy. Despite lack of evidence, these theories persist in popular culture.', order: 1 },

  // ── entry-tarot ──
  { id: 'sub-tarot-01', entryId: 'entry-tarot', title_es: 'Historia del tarot', title_en: 'History of tarot', content_es: 'El tarot más antiguo conocido data del siglo XV en el norte de Italia, usado para jugar al "tarocchi". El mazo Visconti-Sforza (c. 1450) es uno de los más antiguos conservados. El uso adivinatorio comenzó en el siglo XVIII cuando Antoine Court de Gébelin publicó "Le Monde Primitif" (1781), afirmando que el tarot contenía la sabiduría secreta del antiguo Egipto. Eliphas Lévi vinculó el tarot con la Cábala y la astrología, sentando las bases de la interpretación moderna.', content_en: 'The earliest known tarot dates from 15th-century northern Italy, used to play "tarocchi." The Visconti-Sforza deck (c. 1450) is one of the oldest preserved. Divinatory use began in the 18th century when Antoine Court de Gébelin published "Le Monde Primitif" (1781), claiming tarot contained ancient Egyptian secret wisdom. Eliphas Lévi linked tarot to Kabbalah and astrology, laying foundations for modern interpretation.', order: 0 },
  { id: 'sub-tarot-02', entryId: 'entry-tarot', title_es: 'Interpretación y significado', title_en: 'Interpretation and meaning', content_es: 'En una lectura de tarot, el tarotista dispone las cartas en una "tirada" con posiciones específicas que representan diferentes aspectos de la vida del consultante. La tirada más común es la "Cruz Celta" de diez cartas. Cada carta tiene un significado general que se modifica según su posición y las cartas circundantes. El tarot se interpreta como una herramienta de introspección: las cartas reflejan el subconsciente del consultante y le ayudan a ver su situación desde nuevas perspectivas.', content_en: 'In a tarot reading, the reader arranges cards in a "spread" with specific positions representing different aspects of the querent\'s life. The most common spread is the ten-card "Celtic Cross." Each card has a general meaning that is modified by its position and surrounding cards. Tarot is interpreted as a tool for introspection: the cards reflect the querent\'s subconscious and help them see their situation from new perspectives.', order: 1 },

  // ── entry-i-ching ──
  { id: 'sub-iching-01', entryId: 'entry-i-ching', title_es: 'Estructura del I Ching', title_en: 'Structure of the I Ching', content_es: 'El I Ching se basa en 64 hexagramas, cada uno compuesto por seis líneas que pueden ser yin (quebrada: --) o yang (sólida: ---). Cada hexagrama tiene un nombre, un juicio, un comentario sobre la imagen y textos para cada línea. El primer hexagrama es Qian (Lo Creativo), compuesto solo por líneas yang. Los hexagramas se agrupan en pares donde el segundo es la inversión del primero. El texto se atribuye al rey Wen y al duque de Zhou de la dinastía Zhou.', content_en: 'The I Ching is based on 64 hexagrams, each composed of six lines that can be yin (broken: --) or yang (solid: ---). Each hexagram has a name, a judgment, a commentary on the image, and texts for each line. The first hexagram is Qian (The Creative), composed entirely of yang lines. Hexagrams are grouped in pairs where the second is the inversion of the first. The text is attributed to King Wen and the Duke of Zhou of the Zhou dynasty.', order: 0 },
  { id: 'sub-iching-02', entryId: 'entry-i-ching', title_es: 'Influencia en Occidente', title_en: 'Western influence', content_es: 'La traducción alemana de Richard Wilhelm (1924) con prólogo de Carl Jung introdujo el I Ching en Occidente. Jung vio en el I Ching un ejemplo de su principio de sincronicidad: la coincidencia significativa entre el estado mental del consultante y el hexagrama obtenido. El físico Niels Bohr encontró paralelismos entre el principio de complementariedad cuántica y el concepto de yin-yang. El músico John Cage usó el I Ching para componer música aleatoria.', content_en: "Richard Wilhelm's German translation (1924) with Carl Jung's preface introduced the I Ching to the West. Jung saw in the I Ching an example of his synchronicity principle: meaningful coincidence between the querent's mental state and the obtained hexagram. Physicist Niels Bohr found parallels between quantum complementarity and yin-yang. Musician John Cage used the I Ching to compose aleatory music.", order: 1 },

  // ── entry-astrology ──
  { id: 'sub-astrology-01', entryId: 'entry-astrology', title_es: 'Historia de la astrología', title_en: 'History of astrology', content_es: 'La astrología occidental se originó en Babilonia alrededor del 2000 a.C., donde los sacerdotes observaban los movimientos planetarios y los asociaban con eventos terrestres. Los griegos desarrollaron el sistema zodiacal de doce signos y los aspectos planetarios. Claudio Ptolomeo escribió el "Tetrabiblos" en el siglo II d.C., que se convirtió en el texto astrológico de referencia durante 1,500 años. La astrología floreció en el mundo islámico y en la Europa medieval y renacentista.', content_en: 'Western astrology originated in Babylon around 2000 BC, where priests observed planetary movements and associated them with earthly events. The Greeks developed the twelve-sign zodiac system and planetary aspects. Claudius Ptolemy wrote the "Tetrabiblos" in the 2nd century AD, which became the reference astrological text for 1,500 years. Astrology flourished in the Islamic world and medieval and Renaissance Europe.', order: 0 },
  { id: 'sub-astrology-02', entryId: 'entry-astrology', title_es: 'El efecto Forer', title_en: 'The Forer effect', content_es: 'En 1948, el psicólogo Bertram Forer demostró el fenómeno psicológico que explica por qué las personas encuentran precisas las descripciones astrológicas. Forer administró un test de personalidad a sus estudiantes y luego les dio un "análisis personalizado" que en realidad era idéntico para todos, extraído de un libro de astrología. Los estudiantes calificaron la precisión promedio en 4.26 sobre 5. El efecto Forer muestra que las personas tienden a aceptar descripciones vagas y generales como aplicables a sí mismas.', content_en: 'In 1948, psychologist Bertram Forer demonstrated the psychological phenomenon explaining why people find astrological descriptions accurate. Forer administered a personality test to his students and then gave them a "personalized analysis" that was actually identical for all, taken from an astrology book. Students rated average accuracy at 4.26 out of 5. The Forer effect shows that people tend to accept vague, general descriptions as applying to themselves.', order: 1 },
]


