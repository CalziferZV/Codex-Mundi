export interface SeedCategory {
  id: string
  name_es: string
  name_en: string
  slug: string
  description_es: string
  description_en: string
  icon: string
  parentId: string | null
}

export interface SeedEntry {
  id: string
  title_es: string
  title_en: string
  slug: string
  content_es: string
  content_en: string
  excerpt_es: string
  excerpt_en: string
  categoryId: string
  realityStatus: string
  imageUrl: string
  createdAt: string
  updatedAt: string
}

export interface SeedSubsection {
  id: string
  entryId: string
  title_es: string
  title_en: string
  content_es: string
  content_en: string
  order: number
}

export const seedData = {
  categories: [
    {
      id: 'cat-history',
      name_es: 'Historia',
      name_en: 'History',
      slug: 'history',
      description_es: 'Registros históricos, civilizaciones antiguas y eventos documentados del pasado.',
      description_en: 'Historical records, ancient civilizations, and documented events of the past.',
      icon: '📜',
      parentId: null,
    },
    {
      id: 'cat-religion',
      name_es: 'Religión y Mitología',
      name_en: 'Religion & Mythology',
      slug: 'religion-mythology',
      description_es: 'Creencias, deidades, textos sagrados y tradiciones espirituales de todas las culturas.',
      description_en: 'Beliefs, deities, sacred texts, and spiritual traditions of all cultures.',
      icon: '📖',
      parentId: null,
    },
    {
      id: 'cat-angels',
      name_es: 'Ángeles',
      name_en: 'Angels',
      slug: 'angels',
      description_es: 'Seres celestiales, jerarquías angelicales y entidades de luz en las tradiciones religiosas.',
      description_en: 'Celestial beings, angelic hierarchies, and entities of light in religious traditions.',
      icon: '👼',
      parentId: 'cat-religion',
    },
    {
      id: 'cat-demons',
      name_es: 'Demonios',
      name_en: 'Demons',
      slug: 'demons',
      description_es: 'Entidades infernales, demonología y seres de las sombras en distintas culturas.',
      description_en: 'Infernal entities, demonology, and shadow beings across different cultures.',
      icon: '😈',
      parentId: 'cat-religion',
    },
    {
      id: 'cat-philosophy',
      name_es: 'Filosofía',
      name_en: 'Philosophy',
      slug: 'philosophy',
      description_es: 'Corrientes de pensamiento, filósofos y cuestiones fundamentales sobre la existencia.',
      description_en: 'Schools of thought, philosophers, and fundamental questions about existence.',
      icon: '🧠',
      parentId: null,
    },
    {
      id: 'cat-science',
      name_es: 'Ciencia',
      name_en: 'Science',
      slug: 'science',
      description_es: 'Conocimiento sistemático basado en la observación, experimentación y método científico.',
      description_en: 'Systematic knowledge based on observation, experimentation, and the scientific method.',
      icon: '🔬',
      parentId: null,
    },
    {
      id: 'cat-astronomy',
      name_es: 'Astronomía',
      name_en: 'Astronomy',
      slug: 'astronomy',
      description_es: 'Estudio científico del universo, los cuerpos celestes y los fenómenos cósmicos.',
      description_en: 'Scientific study of the universe, celestial bodies, and cosmic phenomena.',
      icon: '🌌',
      parentId: null,
    },
    {
      id: 'cat-medicine',
      name_es: 'Medicina',
      name_en: 'Medicine',
      slug: 'medicine',
      description_es: 'Ciencia y práctica del diagnóstico, tratamiento y prevención de enfermedades.',
      description_en: 'Science and practice of diagnosing, treating, and preventing diseases.',
      icon: '💊',
      parentId: null,
    },
    {
      id: 'cat-nature',
      name_es: 'Naturaleza',
      name_en: 'Nature',
      slug: 'nature',
      description_es: 'Mundo natural, ecosistemas, biodiversidad y fenómenos del medio ambiente.',
      description_en: 'Natural world, ecosystems, biodiversity, and environmental phenomena.',
      icon: '🌿',
      parentId: null,
    },
    {
      id: 'cat-technology',
      name_es: 'Tecnología',
      name_en: 'Technology',
      slug: 'technology',
      description_es: 'Herramientas, máquinas, sistemas e innovaciones creadas por la humanidad.',
      description_en: 'Tools, machines, systems, and innovations created by humanity.',
      icon: '💻',
      parentId: null,
    },
    {
      id: 'cat-mysticism',
      name_es: 'Misticismo y Esoterismo',
      name_en: 'Mysticism & Esotericism',
      slug: 'mysticism-esotericism',
      description_es: 'Conocimiento oculto, prácticas espirituales secretas y tradiciones herméticas.',
      description_en: 'Hidden knowledge, secret spiritual practices, and hermetic traditions.',
      icon: '🔮',
      parentId: null,
    },
    {
      id: 'cat-literature',
      name_es: 'Literatura',
      name_en: 'Literature',
      slug: 'literature',
      description_es: 'Obras escritas, movimientos literarios y autores que han marcado la cultura universal.',
      description_en: 'Written works, literary movements, and authors who have shaped universal culture.',
      icon: '📚',
      parentId: null,
    },
    {
      id: 'cat-greek-myth',
      name_es: 'Mitología Griega',
      name_en: 'Greek Mythology',
      slug: 'greek-mythology',
      description_es: 'Dioses, héroes y leyendas de la antigua Grecia, cuna de la civilización occidental.',
      description_en: 'Gods, heroes, and legends of ancient Greece, cradle of Western civilization.',
      icon: '🏛️',
      parentId: 'cat-religion',
    },
    {
      id: 'cat-egyptian-myth',
      name_es: 'Mitología Egipcia',
      name_en: 'Egyptian Mythology',
      slug: 'egyptian-mythology',
      description_es: 'Deidades, creencias y rituales del antiguo Egipto, la civilización del Nilo.',
      description_en: 'Deities, beliefs, and rituals of ancient Egypt, the civilization of the Nile.',
      icon: '🐍',
      parentId: 'cat-religion',
    },
    {
      id: 'cat-norse-myth',
      name_es: 'Mitología Nórdica',
      name_en: 'Norse Mythology',
      slug: 'norse-mythology',
      description_es: 'Mitos y sagas de los pueblos escandinavos: dioses, gigantes y el fin del mundo.',
      description_en: 'Myths and sagas of the Scandinavian peoples: gods, giants, and the end of the world.',
      icon: '⚔️',
      parentId: 'cat-religion',
    },
    {
      id: 'cat-ancient-civs',
      name_es: 'Civilizaciones Antiguas',
      name_en: 'Ancient Civilizations',
      slug: 'ancient-civilizations',
      description_es: 'Grandes imperios y culturas que sentaron las bases de la historia humana.',
      description_en: 'Great empires and cultures that laid the foundations of human history.',
      icon: '🏛️',
      parentId: 'cat-history',
    },
    {
      id: 'cat-eastern-philosophy',
      name_es: 'Filosofía Oriental',
      name_en: 'Eastern Philosophy',
      slug: 'eastern-philosophy',
      description_es: 'Corrientes de pensamiento de Asia: budismo, taoísmo, confucianismo y más.',
      description_en: 'Schools of thought from Asia: Buddhism, Taoism, Confucianism, and more.',
      icon: '☯️',
      parentId: 'cat-philosophy',
    },
    {
      id: 'cat-arts',
      name_es: 'Arte y Cultura',
      name_en: 'Arts & Culture',
      slug: 'arts-culture',
      description_es: 'Expresiones artísticas, movimientos culturales y obras maestras de la humanidad.',
      description_en: 'Artistic expressions, cultural movements, and masterpieces of humanity.',
      icon: '🎨',
      parentId: null,
    },
    {
      id: 'cat-psychology',
      name_es: 'Psicología',
      name_en: 'Psychology',
      slug: 'psychology',
      description_es: 'Estudio de la mente, el comportamiento humano y los procesos mentales.',
      description_en: 'Study of the mind, human behavior, and mental processes.',
      icon: '🧠',
      parentId: null,
    },
  ] as SeedCategory[],

  entries: [
    {
      id: 'entry-alexandria',
      title_es: 'Biblioteca de Alejandría',
      title_en: 'Library of Alexandria',
      slug: 'biblioteca-de-alejandria',
      content_es: `La Biblioteca de Alejandría fue una de las bibliotecas más grandes y prestigiosas del mundo antiguo. Fundada en el siglo III a.C. en la ciudad de Alejandría, Egipto, durante el reinado de Ptolomeo II Filadelfo, formaba parte de una institución de investigación más grande llamada el Museo de Alejandría.

Se estima que llegó a albergar entre 40,000 y 400,000 rollos de papiro en su apogeo, convirtiéndose en el epicentro del conocimiento mundial. Eruditos de todo el Mediterráneo viajaban a Alejandría para estudiar, traducir y debatir.

La biblioteca fue un símbolo del poder y la ambición intelectual de la dinastía ptolemaica. Su destrucción, ocurrida gradualmente a lo largo de varios siglos debido a incendios, guerras y conflictos religiosos, representó una pérdida incalculable para la humanidad.

Hoy en día, la Biblioteca de Alejandría simboliza tanto la cúspide del conocimiento humano como la fragilidad de la memoria colectiva. Codex Mundi se inspira en su espíritu: reunir, preservar y compartir todo el conocimiento del mundo.`,
      content_en: `The Library of Alexandria was one of the largest and most prestigious libraries of the ancient world. Founded in the 3rd century BC in the city of Alexandria, Egypt, during the reign of Ptolemy II Philadelphus, it was part of a larger research institution called the Museum of Alexandria.

It is estimated to have housed between 40,000 and 400,000 papyrus rolls at its peak, becoming the epicenter of world knowledge. Scholars from all over the Mediterranean traveled to Alexandria to study, translate, and debate.

The library was a symbol of the power and intellectual ambition of the Ptolemaic dynasty. Its destruction, which occurred gradually over several centuries due to fires, wars, and religious conflicts, represented an incalculable loss for humanity.

Today, the Library of Alexandria symbolizes both the pinnacle of human knowledge and the fragility of collective memory. Codex Mundi is inspired by its spirit: to gather, preserve, and share all the world's knowledge.`,
      excerpt_es: 'La biblioteca más grande del mundo antiguo y símbolo del conocimiento universal. Inspiración directa de Codex Mundi.',
      excerpt_en: 'The largest library of the ancient world and symbol of universal knowledge. Direct inspiration for Codex Mundi.',
      categoryId: 'cat-history',
      realityStatus: 'historical',
      imageUrl: '',
      createdAt: '2026-01-01T00:00:00Z',
      updatedAt: '2026-01-01T00:00:00Z',
    },
    {
      id: 'entry-god',
      title_es: 'Dios (concepto universal)',
      title_en: 'God (universal concept)',
      slug: 'dios-concepto-universal',
      content_es: `El concepto de Dios es una de las ideas más fundamentales y universales de la humanidad. A lo largo de la historia, todas las civilizaciones han desarrollado nociones de una o múltiples deidades que explican el origen del universo, el propósito de la existencia y los fundamentos de la moral.

Las interpretaciones de Dios varían enormemente entre culturas: desde un ser personal e intervencionista hasta una fuerza impersonal que sustenta toda la realidad. Las principales tradiciones religiosas —cristianismo, islam, judaísmo, hinduismo— ofrecen visiones distintas, aunque a menudo comparten raíces comunes.

Filósofos como Aristóteles, Tomás de Aquino y Spinoza han debatido la naturaleza divina a través de argumentos cosmológicos, teleológicos y ontológicos. En el siglo XX, teólogos como Paul Tillich describieron a Dios como el "fundamento del ser" más que como un ser entre otros.

El debate entre teísmo, ateísmo y agnosticismo continúa siendo central en la filosofía contemporánea.`,
      content_en: `The concept of God is one of the most fundamental and universal ideas of humanity. Throughout history, all civilizations have developed notions of one or multiple deities that explain the origin of the universe, the purpose of existence, and the foundations of morality.

Interpretations of God vary enormously across cultures: from a personal, interventionist being to an impersonal force that underpins all reality. The major religious traditions — Christianity, Islam, Judaism, Hinduism — offer different visions, though they often share common roots.

Philosophers such as Aristotle, Thomas Aquinas, and Spinoza have debated the divine nature through cosmological, teleological, and ontological arguments. In the 20th century, theologians like Paul Tillich described God as the "ground of being" rather than a being among others.

The debate between theism, atheism, and agnosticism continues to be central in contemporary philosophy.`,
      excerpt_es: 'El concepto universal de lo divino a través de culturas, religiones y filosofías.',
      excerpt_en: 'The universal concept of the divine across cultures, religions, and philosophies.',
      categoryId: 'cat-religion',
      realityStatus: 'philosophical',
      imageUrl: '',
      createdAt: '2026-01-02T00:00:00Z',
      updatedAt: '2026-01-02T00:00:00Z',
    },
    {
      id: 'entry-jesus',
      title_es: 'Jesucristo',
      title_en: 'Jesus Christ',
      slug: 'jesucristo',
      content_es: `Jesús de Nazaret (c. 4 a.C. – 30/33 d.C.) es la figura central del cristianismo, la religión más grande del mundo por número de seguidores. Los cristianos creen que es el Hijo de Dios y el Mesías profetizado en el Antiguo Testamento.

Su vida y enseñanzas están registradas en los cuatro evangelios canónicos del Nuevo Testamento: Mateo, Marcos, Lucas y Juan. Nació en Belén, creció en Nazaret y comenzó su ministerio público alrededor de los 30 años, predicando el amor, el perdón y la llegada del Reino de Dios.

Jesús realizó numerosos milagros según los textos bíblicos: sanó enfermos, multiplicó panes y peces, caminó sobre el agua y resucitó muertos. Sus enseñanzas, incluyendo el Sermón del Monte y las parábolas, han influido profundamente en la ética y la cultura occidental.

Fue crucificado bajo el gobierno de Poncio Pilato y, según la fe cristiana, resucitó al tercer día, ascendiendo al cielo. Su muerte y resurrección son el fundamento de la teología cristiana.

Desde una perspectiva histórica, la mayoría de los académicos coinciden en que Jesús fue un predicador judío real, aunque los detalles de su vida son motivo de debate.`,
      content_en: `Jesus of Nazareth (c. 4 BC – 30/33 AD) is the central figure of Christianity, the world's largest religion by number of followers. Christians believe he is the Son of God and the Messiah prophesied in the Old Testament.

His life and teachings are recorded in the four canonical gospels of the New Testament: Matthew, Mark, Luke, and John. He was born in Bethlehem, grew up in Nazareth, and began his public ministry around age 30, preaching love, forgiveness, and the coming of the Kingdom of God.

Jesus performed numerous miracles according to biblical texts: he healed the sick, multiplied loaves and fish, walked on water, and raised the dead. His teachings, including the Sermon on the Mount and the parables, have profoundly influenced Western ethics and culture.

He was crucified under Pontius Pilate and, according to Christian faith, rose on the third day, ascending to heaven. His death and resurrection are the foundation of Christian theology.

From a historical perspective, most scholars agree that Jesus was a real Jewish preacher, though details of his life are subject to debate.`,
      excerpt_es: 'Figura central del cristianismo, considerado el Hijo de Dios y Mesías por sus seguidores.',
      excerpt_en: 'Central figure of Christianity, considered the Son of God and Messiah by his followers.',
      categoryId: 'cat-religion',
      realityStatus: 'historical',
      imageUrl: '',
      createdAt: '2026-01-03T00:00:00Z',
      updatedAt: '2026-01-03T00:00:00Z',
    },
    {
      id: 'entry-archangel-michael',
      title_es: 'Arcángel Miguel',
      title_en: 'Archangel Michael',
      slug: 'arcangel-miguel',
      content_es: `El Arcángel Miguel es una de las figuras angelicales más importantes en las tradiciones judía, cristiana e islámica. Su nombre significa "¿Quién como Dios?" en hebreo.

En la tradición cristiana, Miguel es el líder de los ejércitos celestiales y quien derrotó a Lucifer y a los ángeles rebeldes, expulsándolos del cielo. Es representado frecuentemente con una espada de fuego y una armadura, venciendo al dragón (Satanás).

En el judaísmo, Miguel es considerado el protector de Israel y uno de los pocos arcángeles nombrados en las escrituras. En el islam, es conocido como Mikail, encargado de proveer sustento a las criaturas.

La Iglesia católica reconoce a Miguel como santo patrón de los policías, soldados, paramédicos y enfermos. Su festividad se celebra el 29 de septiembre (junto con los arcángeles Gabriel y Rafael).

Aparece en el Libro de Daniel, el Apocalipsis y la tradición apócrifa. Es invocado como protector contra el mal y guía de las almas hacia el más allá.`,
      content_en: `The Archangel Michael is one of the most important angelic figures in Jewish, Christian, and Islamic traditions. His name means "Who is like God?" in Hebrew.

In Christian tradition, Michael is the leader of the heavenly armies who defeated Lucifer and the rebel angels, casting them out of heaven. He is frequently depicted with a fiery sword and armor, overcoming the dragon (Satan).

In Judaism, Michael is considered the protector of Israel and one of the few archangels named in scripture. In Islam, he is known as Mikail, responsible for providing sustenance to creatures.

The Catholic Church recognizes Michael as the patron saint of police officers, soldiers, paramedics, and the sick. His feast day is celebrated on September 29 (alongside archangels Gabriel and Raphael).

He appears in the Book of Daniel, Revelation, and apocryphal tradition. He is invoked as a protector against evil and a guide of souls to the afterlife.`,
      excerpt_es: 'Líder de los ejércitos celestiales, vencedor de Lucifer y protector divino en las tres religiones abrahámicas.',
      excerpt_en: 'Leader of the heavenly armies, vanquisher of Lucifer, and divine protector in the three Abrahamic religions.',
      categoryId: 'cat-angels',
      realityStatus: 'mythological',
      imageUrl: '',
      createdAt: '2026-01-04T00:00:00Z',
      updatedAt: '2026-01-04T00:00:00Z',
    },
    {
      id: 'entry-lucifer',
      title_es: 'Lucifer',
      title_en: 'Lucifer',
      slug: 'lucifer',
      content_es: `Lucifer es una figura compleja que aparece en diversas tradiciones religiosas y literarias. Su nombre proviene del latín lux (luz) y ferre (llevar), significando "portador de luz" o "estrella de la mañana".

En la tradición cristiana, Lucifer era originalmente un ángel de gran belleza y poder, el más brillante de todos. Según la interpretación de Isaías 14:12-15 y Ezequiel 28, su pecado fue el orgullo: deseó ser igual a Dios y lideró una rebelión celestial. Por ello fue derrotado por el Arcángel Miguel y arrojado al infierno, convirtiéndose en Satanás.

Milton retrata a Lucifer como un trágico héroe caído en El Paraíso Perdido. En la tradición gnóstica, a veces es visto como un liberador que trajo conocimiento a la humanidad.

En la demonología, Lucifer es considerado el emperador del infierno, gobernante de los demonios y adversario de la humanidad. Su historia ha sido interpretada como una alegoría del orgullo, la rebelión y la caída.

Más allá de la teología, Lucifer ha inspirado innumerables obras de arte, literatura y música, convirtiéndose en un arquetipo cultural del rebelde caído.`,
      content_en: `Lucifer is a complex figure appearing in various religious and literary traditions. His name comes from Latin lux (light) and ferre (to bear), meaning "light-bearer" or "morning star."

In Christian tradition, Lucifer was originally an angel of great beauty and power, the brightest of all. According to the interpretation of Isaiah 14:12-15 and Ezekiel 28, his sin was pride: he desired to be like God and led a heavenly rebellion. For this he was defeated by Archangel Michael and cast into hell, becoming Satan.

Milton portrays Lucifer as a tragic fallen hero in Paradise Lost. In Gnostic tradition, he is sometimes seen as a liberator who brought knowledge to humanity.

In demonology, Lucifer is considered the emperor of hell, ruler of demons, and adversary of humanity. His story has been interpreted as an allegory of pride, rebellion, and the fall.

Beyond theology, Lucifer has inspired countless works of art, literature, and music, becoming a cultural archetype of the fallen rebel.`,
      excerpt_es: 'El ángel caído, portador de luz, cuyo orgullo lo llevó a rebelarse contra Dios y convertirse en Satanás.',
      excerpt_en: 'The fallen angel, light-bearer, whose pride led him to rebel against God and become Satan.',
      categoryId: 'cat-demons',
      realityStatus: 'mythological',
      imageUrl: '',
      createdAt: '2026-01-05T00:00:00Z',
      updatedAt: '2026-01-05T00:00:00Z',
    },
    {
      id: 'entry-beelzebub',
      title_es: 'Belcebú',
      title_en: 'Beelzebub',
      slug: 'belcebu',
      content_es: `Belcebú es uno de los demonios más conocidos en la tradición judeocristiana. Su nombre deriva del filisteo Ba'al Zəvuv (Baal el Señor de las Moscas), deidad adorada en la ciudad de Ecrón.

En el Nuevo Testamento, los fariseos acusan a Jesús de expulsar demonios "por el poder de Belcebú, príncipe de los demonios". Jesús responde argumentando que un reino dividido no puede sostenerse.

En la demonología medieval, Belcebú es considerado uno de los siete príncipes del infierno, asociado con el pecado capital de la gula. Se le describe como un ser monstruoso, con forma de mosca gigante o con cabeza de toro.

Según la clasificación de los demonios de Johann Weyer, Belcebú era antes un arcángel del cielo. Su nombre, distorsionado del original Baal, llegó a simbolizar la idolatría y la corrupción.

En obras literarias como El Paraíso Perdido de Milton y Los Miserables de Hugo, Belcebú aparece como un demonio de alto rango. En la cultura popular, su nombre es sinónimo del diablo mismo.`,
      content_en: `Beelzebub is one of the best-known demons in Judeo-Christian tradition. His name derives from the Philistine Ba'al Zəvuv (Baal the Lord of the Flies), a deity worshipped in the city of Ekron.

In the New Testament, the Pharisees accuse Jesus of casting out demons "by the power of Beelzebub, prince of demons." Jesus responds by arguing that a divided kingdom cannot stand.

In medieval demonology, Beelzebub is considered one of the seven princes of hell, associated with the deadly sin of gluttony. He is described as a monstrous being, with the form of a giant fly or a bull's head.

According to Johann Weyer's classification of demons, Beelzebub was formerly an archangel in heaven. His name, distorted from the original Baal, came to symbolize idolatry and corruption.

In literary works such as Milton's Paradise Lost and Hugo's Les Misérables, Beelzebub appears as a high-ranking demon. In popular culture, his name is synonymous with the devil himself.`,
      excerpt_es: 'Príncipe de los demonios, cuyo nombre significa "Señor de las Moscas". Originalmente una deidad filistea.',
      excerpt_en: 'Prince of demons, whose name means "Lord of the Flies." Originally a Philistine deity.',
      categoryId: 'cat-demons',
      realityStatus: 'mythological',
      imageUrl: '',
      createdAt: '2026-01-06T00:00:00Z',
      updatedAt: '2026-01-06T00:00:00Z',
    },
    {
      id: 'entry-evolution',
      title_es: 'Evolución',
      title_en: 'Evolution',
      slug: 'evolucion',
      content_es: `La teoría de la evolución constituye uno de los pilares fundamentales de la biología moderna. Explica cómo las especies cambian a lo largo del tiempo mediante procesos como la selección natural, la deriva genética y la mutación, dando origen a la increíble diversidad de vida que observamos en la Tierra.

El concepto de evolución no es nuevo; filósofos griegos como Anaximandro ya sugerían ideas evolutivas rudimentarias. Sin embargo, fue Charles Darwin quien, en su obra cumbre "El origen de las especies" (1859), presentó un mecanismo convincente —la selección natural— respaldado por décadas de observación y evidencia.

La selección natural postula que los organismos con características ventajosas para su entorno tienen mayor probabilidad de sobrevivir y reproducirse, transmitiendo esas características a sus descendientes. Con el tiempo, este proceso acumulativo genera adaptaciones complejas y, eventualmente, nuevas especies.

La evidencia a favor de la evolución es abrumadora e incluye el registro fósil, la anatomía comparada, la embriología, la biogeografía y, más recientemente, la genética molecular. El ADN ha revelado parentescos insospechados entre organismos aparentemente dispares.

La síntesis evolutiva moderna, desarrollada en el siglo XX, integra la genética mendeliana con la selección darwiniana, proporcionando un marco teórico robusto que sigue refinándose con los avances en genómica y biología del desarrollo.`,
      content_en: `The theory of evolution is one of the fundamental pillars of modern biology. It explains how species change over time through processes such as natural selection, genetic drift, and mutation, giving rise to the incredible diversity of life we observe on Earth.

The concept of evolution is not new; Greek philosophers like Anaximander already suggested rudimentary evolutionary ideas. However, it was Charles Darwin who, in his masterwork "On the Origin of Species" (1859), presented a compelling mechanism — natural selection — backed by decades of observation and evidence.

Natural selection posits that organisms with advantageous traits for their environment are more likely to survive and reproduce, passing those traits to their offspring. Over time, this cumulative process generates complex adaptations and, eventually, new species.

The evidence for evolution is overwhelming and includes the fossil record, comparative anatomy, embryology, biogeography, and, more recently, molecular genetics. DNA has revealed unexpected relationships between seemingly disparate organisms.

The modern evolutionary synthesis, developed in the 20th century, integrates Mendelian genetics with Darwinian selection, providing a robust theoretical framework that continues to be refined with advances in genomics and developmental biology.`,
      excerpt_es: 'La teoría que explica la diversidad de la vida mediante la selección natural y la descendencia con modificación.',
      excerpt_en: 'The theory explaining the diversity of life through natural selection and descent with modification.',
      categoryId: 'cat-science',
      realityStatus: 'scientific',
      imageUrl: '',
      createdAt: '2026-01-08T00:00:00Z',
      updatedAt: '2026-01-08T00:00:00Z',
    },
    {
      id: 'entry-relativity',
      title_es: 'Teoría de la Relatividad',
      title_en: 'Theory of Relativity',
      slug: 'teoria-de-la-relatividad',
      content_es: `La teoría de la relatividad, desarrollada por Albert Einstein entre 1905 y 1915, revolucionó nuestra comprensión del espacio, el tiempo y la gravedad. Se compone de dos teorías distintas pero relacionadas: la relatividad especial (1905) y la relatividad general (1915).

La relatividad especial establece que las leyes de la física son las mismas en todos los sistemas de referencia inerciales y que la velocidad de la luz en el vacío es constante para todos los observadores. De estos postulados se derivan consecuencias sorprendentes: la dilatación del tiempo, la contracción de la longitud y la equivalencia entre masa y energía (E=mc²).

La relatividad general extiende estos principios a sistemas acelerados y describe la gravedad no como una fuerza, sino como una curvatura del espacio-tiempo causada por la presencia de masa y energía. Los objetos masivos deforman el tejido del espacio-tiempo, y esa deformación determina la trayectoria de otros cuerpos.

La teoría ha sido confirmada por numerosas observaciones y experimentos: la precesión del perihelio de Mercurio, la desviación de la luz estelar por el Sol (observada por Eddington en 1919), la dilatación temporal gravitacional y la detección de ondas gravitacionales en 2015.

Sin la relatividad, tecnologías como el GPS no funcionarían, ya que los satélites deben corregir los efectos relativistas tanto de la velocidad como de la gravedad para proporcionar ubicaciones precisas.`,
      content_en: `The theory of relativity, developed by Albert Einstein between 1905 and 1915, revolutionized our understanding of space, time, and gravity. It consists of two distinct but related theories: special relativity (1905) and general relativity (1915).

Special relativity establishes that the laws of physics are the same in all inertial reference frames and that the speed of light in a vacuum is constant for all observers. From these postulates follow surprising consequences: time dilation, length contraction, and the equivalence of mass and energy (E=mc²).

General relativity extends these principles to accelerated systems and describes gravity not as a force, but as a curvature of spacetime caused by the presence of mass and energy. Massive objects deform the fabric of spacetime, and this deformation determines the trajectory of other bodies.

The theory has been confirmed by numerous observations and experiments: the precession of Mercury's perihelion, the bending of starlight by the Sun (observed by Eddington in 1919), gravitational time dilation, and the detection of gravitational waves in 2015.

Without relativity, technologies like GPS would not function, as satellites must correct for both velocity-related and gravitational relativistic effects to provide accurate locations.`,
      excerpt_es: 'La teoría de Einstein que transformó nuestra comprensión del espacio, el tiempo y la gravedad.',
      excerpt_en: "Einstein's theory that transformed our understanding of space, time, and gravity.",
      categoryId: 'cat-science',
      realityStatus: 'scientific',
      imageUrl: '',
      createdAt: '2026-01-09T00:00:00Z',
      updatedAt: '2026-01-09T00:00:00Z',
    },
    {
      id: 'entry-big-bang',
      title_es: 'Teoría del Big Bang',
      title_en: 'Big Bang Theory',
      slug: 'teoria-del-big-bang',
      content_es: `La teoría del Big Bang es el modelo cosmológico predominante que describe el origen y la evolución del universo. Según esta teoría, el universo comenzó hace aproximadamente 13.800 millones de años a partir de un estado extremadamente denso y caliente, expandiéndose y enfriándose hasta formar la estructura cósmica que observamos hoy.

La idea de un universo en expansión surgió de las observaciones de Edwin Hubble en 1929, quien descubrió que las galaxias se alejan unas de otras, lo que sugiere que el universo se expande desde un punto común. El término "Big Bang" fue acuñado por Fred Hoyle en 1949, irónicamente como un término despectivo, pues él defendía la teoría del estado estacionario.

En los primeros instantes después del Big Bang, el universo era una sopa de partículas elementales a temperaturas inimaginables. En los primeros tres minutos se formaron los núcleos de hidrógeno y helio. Después de 380.000 años, el universo se enfrió lo suficiente para que los electrones y protones formaran átomos neutros, liberando la radiación de fondo de microondas que aún podemos detectar.

La evidencia principal incluye: el corrimiento al rojo de las galaxias (expansión universal), la radiación cósmica de fondo de microondas (descubierta en 1965), la abundancia de elementos ligeros (nucleosíntesis primordial) y la estructura a gran escala del universo.

Aunque el Big Bang describe la evolución del universo desde sus primeros instantes, no puede explicar qué ocurrió en el momento exacto de la singularidad inicial, donde las leyes de la física tal como las conocemos se rompen.`,
      content_en: `The Big Bang theory is the predominant cosmological model describing the origin and evolution of the universe. According to this theory, the universe began approximately 13.8 billion years ago from an extremely dense and hot state, expanding and cooling to form the cosmic structure we observe today.

The idea of an expanding universe emerged from Edwin Hubble's observations in 1929, when he discovered that galaxies are moving away from each other, suggesting the universe is expanding from a common point. The term "Big Bang" was coined by Fred Hoyle in 1949, ironically as a dismissive term, as he advocated for the steady-state theory.

In the first instants after the Big Bang, the universe was a soup of elementary particles at unimaginable temperatures. Within the first three minutes, hydrogen and helium nuclei formed. After 380,000 years, the universe cooled enough for electrons and protons to form neutral atoms, releasing the cosmic microwave background radiation that we can still detect today.

The main evidence includes: the redshift of galaxies (universal expansion), the cosmic microwave background radiation (discovered in 1965), the abundance of light elements (primordial nucleosynthesis), and the large-scale structure of the universe.

Although the Big Bang describes the evolution of the universe from its earliest instants, it cannot explain what happened at the exact moment of the initial singularity, where the laws of physics as we know them break down.`,
      excerpt_es: 'El modelo cosmológico que explica el origen del universo a partir de una expansión hace 13.800 millones de años.',
      excerpt_en: 'The cosmological model explaining the origin of the universe from an expansion 13.8 billion years ago.',
      categoryId: 'cat-astronomy',
      realityStatus: 'theoretical',
      imageUrl: '',
      createdAt: '2026-01-10T00:00:00Z',
      updatedAt: '2026-01-10T00:00:00Z',
    },
    {
      id: 'entry-penicillin',
      title_es: 'Penicilina',
      title_en: 'Penicillin',
      slug: 'penicilina',
      content_es: `La penicilina es el primer antibiótico descubierto y uno de los medicamentos más importantes de la historia de la medicina. Su descubrimiento accidental por Alexander Fleming en 1928 marcó el inicio de la era de los antibióticos, salvando innumerables vidas al combatir infecciones bacterianas que antes eran mortales.

Fleming, bacteriólogo escocés, observó que un moho del género Penicillium notatum había contaminado una de sus placas de cultivo y había inhibido el crecimiento de bacterias Staphylococcus. Intrigado, identificó la sustancia activa y la llamó penicilina, aunque no logró purificarla ni producirla en cantidades suficientes para uso médico.

El verdadero avance llegó en la década de 1940, cuando los científicos Howard Florey y Ernst Boris Chain, en la Universidad de Oxford, desarrollaron métodos para purificar y producir penicilina a gran escala. Su trabajo, impulsado por la Segunda Guerra Mundial, permitió tratar infecciones en soldados heridos.

La penicilina actúa interfiriendo con la síntesis de la pared celular bacteriana, lo que provoca la lisis y muerte de las bacterias. Es efectiva contra una amplia variedad de bacterias grampositivas y ha sido fundamental en el tratamiento de neumonía, sífilis, meningitis y otras infecciones graves.

El descubrimiento de la penicilina valió a Fleming, Florey y Chain el Premio Nobel de Medicina en 1945. Su legado perdura, aunque el uso excesivo ha generado resistencia bacteriana, un desafío crítico para la medicina contemporánea.`,
      content_en: `Penicillin is the first discovered antibiotic and one of the most important medicines in the history of medicine. Its accidental discovery by Alexander Fleming in 1928 marked the beginning of the antibiotic era, saving countless lives by combating bacterial infections that were once deadly.

Fleming, a Scottish bacteriologist, observed that a mold of the genus Penicillium notatum had contaminated one of his culture plates and inhibited the growth of Staphylococcus bacteria. Intrigued, he identified the active substance and called it penicillin, though he could not purify it or produce sufficient quantities for medical use.

The real breakthrough came in the 1940s, when scientists Howard Florey and Ernst Boris Chain at Oxford University developed methods to purify and mass-produce penicillin. Their work, driven by World War II, made it possible to treat infections in wounded soldiers.

Penicillin works by interfering with the synthesis of the bacterial cell wall, causing lysis and death of the bacteria. It is effective against a wide range of gram-positive bacteria and has been fundamental in treating pneumonia, syphilis, meningitis, and other serious infections.

The discovery of penicillin earned Fleming, Florey, and Chain the Nobel Prize in Medicine in 1945. Its legacy endures, though overuse has led to bacterial resistance, a critical challenge for contemporary medicine.`,
      excerpt_es: 'El primer antibiótico descubierto por Alexander Fleming que revolucionó el tratamiento de las infecciones bacterianas.',
      excerpt_en: 'The first antibiotic discovered by Alexander Fleming that revolutionized the treatment of bacterial infections.',
      categoryId: 'cat-medicine',
      realityStatus: 'historical',
      imageUrl: '',
      createdAt: '2026-01-11T00:00:00Z',
      updatedAt: '2026-01-11T00:00:00Z',
    },
    {
      id: 'entry-amazon',
      title_es: 'Amazonía',
      title_en: 'Amazon Rainforest',
      slug: 'amazonia',
      content_es: `La Amazonía es la selva tropical más grande del mundo, abarcando aproximadamente 7 millones de kilómetros cuadrados y extendiéndose por nueve países de América del Sur: Brasil, Perú, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Surinam y Guayana Francesa. Alberga alrededor del 10% de todas las especies conocidas del planeta.

Su biodiversidad es sencillamente asombrosa. Se estima que la Amazonía contiene más de 40.000 especies de plantas, 1.300 especies de aves, 3.000 especies de peces, 430 especies de mamíferos y 2.5 millones de especies de insectos. Una sola hectárea puede albergar más especies de árboles que todo Estados Unidos.

El río Amazonas, con más de 6.400 kilómetros de longitud, es el río más caudaloso del mundo, descargando aproximadamente el 20% del agua dulce que llega a los océanos. Su cuenca contiene la mayor extensión de bosque tropical continuo del planeta.

La Amazonía desempeña un papel crucial en la regulación del clima global. Sus árboles absorben enormes cantidades de dióxido de carbono, actuando como un sumidero de carbono vital. También genera su propio clima mediante la evapotranspiración, creando "ríos voladores" que transportan humedad a otras regiones.

Sin embargo, la Amazonía enfrenta amenazas graves: la deforestación para la agricultura y la ganadería, la minería ilegal, la explotación petrolera y el cambio climático. Su preservación es esencial no solo para las comunidades indígenas que la habitan, sino para el equilibrio ecológico del planeta entero.`,
      content_en: `The Amazon Rainforest is the largest tropical forest in the world, covering approximately 7 million square kilometers and spanning nine South American countries: Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname, and French Guiana. It harbors about 10% of all known species on the planet.

Its biodiversity is simply staggering. The Amazon is estimated to contain over 40,000 plant species, 1,300 bird species, 3,000 fish species, 430 mammal species, and 2.5 million insect species. A single hectare can host more tree species than all of the United States.

The Amazon River, over 6,400 kilometers in length, is the most voluminous river in the world, discharging approximately 20% of the fresh water that reaches the oceans. Its basin contains the largest continuous stretch of tropical forest on the planet.

The Amazon plays a crucial role in regulating the global climate. Its trees absorb enormous amounts of carbon dioxide, acting as a vital carbon sink. It also generates its own climate through evapotranspiration, creating "flying rivers" that carry moisture to other regions.

However, the Amazon faces serious threats: deforestation for agriculture and cattle ranching, illegal mining, oil exploitation, and climate change. Its preservation is essential not only for the indigenous communities that inhabit it, but for the ecological balance of the entire planet.`,
      excerpt_es: 'La selva tropical más grande del mundo, vital para la biodiversidad global y la regulación del clima.',
      excerpt_en: 'The world\'s largest tropical rainforest, vital for global biodiversity and climate regulation.',
      categoryId: 'cat-nature',
      realityStatus: 'scientific',
      imageUrl: '',
      createdAt: '2026-01-12T00:00:00Z',
      updatedAt: '2026-01-12T00:00:00Z',
    },
    {
      id: 'entry-internet',
      title_es: 'Internet',
      title_en: 'Internet',
      slug: 'internet',
      content_es: `Internet es una red global de redes interconectadas que utiliza el protocolo TCP/IP para comunicar dispositivos en todo el mundo. Es, probablemente, la tecnología más transformadora de la historia humana, cambiando radicalmente la forma en que nos comunicamos, trabajamos, aprendemos y nos entretenemos.

Los orígenes de Internet se remontan a la década de 1960, cuando el Departamento de Defensa de Estados Unidos creó ARPANET (Advanced Research Projects Agency Network). El objetivo era desarrollar una red de comunicaciones descentralizada que pudiera sobrevivir a un ataque nuclear, permitiendo que la información encontrara rutas alternativas si partes de la red eran destruidas.

En 1989, Tim Berners-Lee, un científico británico del CERN, inventó la World Wide Web (WWW), un sistema de hipertexto que permitía navegar por documentos enlazados a través de Internet. Este invento democratizó el acceso a la información y catalizó la expansión masiva de la red.

Desde entonces, Internet ha evolucionado vertiginosamente: la banda ancha, la web 2.0, las redes sociales, la computación en la nube, el Internet de las Cosas (IoT) y, más recientemente, la inteligencia artificial y el blockchain. Hoy, más de 5.000 millones de personas están conectadas.

Internet ha transformado prácticamente todos los sectores: educación, salud, comercio, gobierno, entretenimiento y relaciones personales. Sin embargo, también plantea desafíos significativos como la privacidad, la desinformación, la brecha digital y la ciberseguridad.`,
      content_en: `The Internet is a global network of interconnected networks that uses the TCP/IP protocol to communicate devices around the world. It is arguably the most transformative technology in human history, radically changing how we communicate, work, learn, and entertain ourselves.

The origins of the Internet date back to the 1960s, when the United States Department of Defense created ARPANET (Advanced Research Projects Agency Network). The goal was to develop a decentralized communications network that could survive a nuclear attack, allowing information to find alternative routes if parts of the network were destroyed.

In 1989, Tim Berners-Lee, a British scientist at CERN, invented the World Wide Web (WWW), a hypertext system that allowed navigation through linked documents over the Internet. This invention democratized access to information and catalyzed the massive expansion of the network.

Since then, the Internet has evolved rapidly: broadband, Web 2.0, social media, cloud computing, the Internet of Things (IoT), and more recently, artificial intelligence and blockchain. Today, over 5 billion people are connected.

The Internet has transformed virtually every sector: education, healthcare, commerce, government, entertainment, and personal relationships. However, it also poses significant challenges such as privacy, misinformation, the digital divide, and cybersecurity.`,
      excerpt_es: 'La red global que conecta a miles de millones de dispositivos y ha transformado radicalmente la sociedad humana.',
      excerpt_en: 'The global network connecting billions of devices that has radically transformed human society.',
      categoryId: 'cat-technology',
      realityStatus: 'historical',
      imageUrl: '',
      createdAt: '2026-01-13T00:00:00Z',
      updatedAt: '2026-01-13T00:00:00Z',
    },
    {
      id: 'entry-alchemy',
      title_es: 'Alquimia',
      title_en: 'Alchemy',
      slug: 'alquimia',
      content_es: `La alquimia es una disciplina ancestral que combina elementos de ciencia, filosofía, misticismo y arte. Practicada desde la antigüedad hasta el siglo XVIII, buscaba principalmente la transmutación de metales comunes en oro, la creación de la piedra filosofal y el elixir de la vida eterna.

Los orígenes de la alquimia se encuentran en el Egipto helenístico, donde la metalurgia y la química práctica se fusionaron con la filosofía hermética y las tradiciones religiosas egipcias. El legendario Hermes Trismegisto, figura sincrética entre el dios egipcio Thot y el dios griego Hermes, era considerado el fundador de la tradición alquímica.

La alquimia floreció en el mundo islámico medieval, donde figuras como Jabir ibn Hayyan (Geber) desarrollaron técnicas de destilación, cristalización y sublimación, y clasificaron sustancias en metales, no metales y "espíritus". Sus conocimientos llegaron a Europa a través de la península ibérica.

Durante la Edad Media y el Renacimiento, alquimistas europeos como Alberto Magno, Roger Bacon, Nicolás Flamel y Paracelso persiguieron incansablemente la piedra filosofal. Aunque nunca lograron la transmutación, descubrieron importantes procesos y compuestos químicos, incluyendo ácidos minerales y el fósforo.

La alquimia sentó las bases de la química moderna. Robert Boyle y Antoine Lavoisier, considerados padres de la química, comenzaron como alquimistas. La búsqueda alquímica de la transformación también influyó profundamente en la literatura, el arte y la psicología junguiana, que vio en la alquimia una metáfora del proceso de individuación.`,
      content_en: `Alchemy is an ancient discipline combining elements of science, philosophy, mysticism, and art. Practiced from antiquity until the 18th century, it primarily sought the transmutation of base metals into gold, the creation of the philosopher's stone, and the elixir of eternal life.

The origins of alchemy lie in Hellenistic Egypt, where practical metallurgy and chemistry merged with hermetic philosophy and Egyptian religious traditions. The legendary Hermes Trismegistus, a syncretic figure between the Egyptian god Thoth and the Greek god Hermes, was considered the founder of the alchemical tradition.

Alchemy flourished in the medieval Islamic world, where figures like Jabir ibn Hayyan (Geber) developed techniques of distillation, crystallization, and sublimation, and classified substances into metals, non-metals, and "spirits." Their knowledge reached Europe through the Iberian peninsula.

During the Middle Ages and the Renaissance, European alchemists like Albertus Magnus, Roger Bacon, Nicolas Flamel, and Paracelsus tirelessly pursued the philosopher's stone. Though they never achieved transmutation, they discovered important chemical processes and compounds, including mineral acids and phosphorus.

Alchemy laid the foundations for modern chemistry. Robert Boyle and Antoine Lavoisier, considered fathers of chemistry, began as alchemists. The alchemical quest for transformation also profoundly influenced literature, art, and Jungian psychology, which saw in alchemy a metaphor for the process of individuation.`,
      excerpt_es: 'Disciplina ancestral que combinaba ciencia y misticismo en la búsqueda de la piedra filosofal y la transmutación.',
      excerpt_en: 'Ancient discipline combining science and mysticism in the search for the philosopher\'s stone and transmutation.',
      categoryId: 'cat-mysticism',
      realityStatus: 'philosophical',
      imageUrl: '',
      createdAt: '2026-01-14T00:00:00Z',
      updatedAt: '2026-01-14T00:00:00Z',
    },
    {
      id: 'entry-don-quixote',
      title_es: 'Don Quijote de la Mancha',
      title_en: 'Don Quixote',
      slug: 'don-quijote-de-la-mancha',
      content_es: `Don Quijote de la Mancha es una novela escrita por el español Miguel de Cervantes Saavedra, publicada en dos partes: la primera en 1605 y la segunda en 1615. Considerada la primera novela moderna y una de las obras cumbre de la literatura universal, narra las aventuras de Alonso Quijano, un hidalgo que enloquece tras leer demasiados libros de caballerías.
      
Convencido de que es un caballero andante, adopta el nombre de Don Quijote de la Mancha, elige a una campesina llamada Aldonza Lorenzo (a quien él llama Dulcinea del Toboso) como su dama, y sale en busca de aventuras acompañado por su fiel escudero Sancho Panza, un labrador práctico y de habla popular.

La obra es una parodia de los libros de caballerías, pero también una profunda reflexión sobre la realidad, la locura, la identidad y el poder de la ficción. Cervantes explora la tensión entre el idealismo y el realismo a través de los famosos diálogos entre el idealista Don Quijote y el pragmático Sancho Panza.

Las aventuras más célebres incluyen la lucha contra los molinos de viento que Don Quijote cree gigantes, el ataque a los odres de vino tinto, la liberación de los galeotes y el descenso a la Cueva de Montesinos. Cada episodio combina humor, tragedia y sabiduría popular.

Don Quijote ha influido en innumerables escritores, artistas y pensadores. Su frase "Ladran, Sancho, señal que cabalgamos" y el gesto de arremeter contra molinos de viento se han convertido en símbolos universales de la lucha por los ideales frente a la adversidad.`,
      content_en: `Don Quixote de la Mancha is a novel written by the Spanish author Miguel de Cervantes Saavedra, published in two parts: the first in 1605 and the second in 1615. Considered the first modern novel and one of the greatest works of world literature, it tells the adventures of Alonso Quijano, a gentleman who goes mad after reading too many chivalric romances.
      
Convinced he is a knight-errant, he adopts the name Don Quixote of La Mancha, chooses a peasant woman named Aldonza Lorenzo (whom he calls Dulcinea del Toboso) as his lady, and sets out in search of adventures accompanied by his loyal squire Sancho Panza, a practical peasant with earthy speech.

The work is a parody of chivalric romances, but also a profound reflection on reality, madness, identity, and the power of fiction. Cervantes explores the tension between idealism and realism through the famous dialogues between the idealistic Don Quixote and the pragmatic Sancho Panza.

The most famous adventures include the attack on windmills that Don Quixote believes are giants, the assault on wineskins, the freeing of galley slaves, and the descent into the Cave of Montesinos. Each episode combines humor, tragedy, and folk wisdom.

Don Quixote has influenced countless writers, artists, and thinkers. His phrase "They bark, Sancho, sign that we ride" and the gesture of charging at windmills have become universal symbols of the struggle for ideals in the face of adversity.`,
      excerpt_es: 'La obra cumbre de la literatura en español, considerada la primera novela moderna y una sátira de los libros de caballerías.',
      excerpt_en: 'The masterpiece of Spanish literature, considered the first modern novel and a satire of chivalric romances.',
      categoryId: 'cat-literature',
      realityStatus: 'historical',
      imageUrl: '',
      createdAt: '2026-01-15T00:00:00Z',
      updatedAt: '2026-01-15T00:00:00Z',
    },
    {
      id: 'entry-zeus',
      title_es: 'Zeus',
      title_en: 'Zeus',
      slug: 'zeus',
      content_es: `Zeus es el rey del Olimpo, la máxima deidad del panteón griego, dios del trueno, el rayo y el cielo. Gobernaba desde el monte Olimpo, la morada de los dioses, y ejercía autoridad sobre todos los demás dioses y sobre los mortales. Su nombre, de origen indoeuropeo, significa "brillante" o "cielo luminoso".
    
Hijo del titán Cronos y de Rea, Zeus fue el único de sus hermanos que no fue devorado por su padre al nacer. Rea lo ocultó en una cueva del monte Ida en Creta, donde fue criado por la ninfa Amaltea y los curetes. Cuando creció, obligó a Cronos a regurgitar a sus hermanos y lideró la guerra contra los Titanes, conocida como la Titanomaquia, que duró diez años y resultó en la victoria de los olímpicos.

Zeus repartió el universo con sus hermanos Poseidón y Hades: a Poseidón le correspondió el mar, a Hades el inframundo, y a Zeus el cielo y la tierra. Su esposa era Hera, diosa del matrimonio, aunque tuvo numerosas relaciones con diosas y mortales, de las que nacieron héroes como Heracles, Perseo y Helena de Troya.

Entre sus atributos más característicos se encuentran el rayo, forjado por los cíclopes, el cetro real y el águila. Era conocido por su sabiduría y justicia, pero también por su ira y sus venganzas contra quienes desafiaban su autoridad. Los Juegos Olímpicos se celebraban en su honor cada cuatro años en Olimpia.

Como padre de dioses y hombres, Zeus representaba el orden y la ley en el cosmos. Su culto se extendió por todo el mundo griego y su figura fue asimilada por los romanos como Júpiter. Su mito ha perdurado como símbolo del poder supremo y la soberanía divina.`,
      content_en: `Zeus is the king of Olympus, the supreme deity of the Greek pantheon, god of thunder, lightning, and the sky. He ruled from Mount Olympus, the dwelling place of the gods, and exercised authority over all other gods and mortals. His name, of Indo-European origin, means "bright" or "luminous sky."
    
Son of the Titan Cronus and Rhea, Zeus was the only one of his siblings not devoured by his father at birth. Rhea hid him in a cave on Mount Ida in Crete, where he was raised by the nymph Amalthea and the Curetes. When he grew up, he forced Cronus to regurgitate his siblings and led the war against the Titans, known as the Titanomachy, which lasted ten years and resulted in the victory of the Olympians.

Zeus divided the universe with his brothers Poseidon and Hades: Poseidon received the sea, Hades the underworld, and Zeus the sky and earth. His wife was Hera, goddess of marriage, though he had numerous affairs with goddesses and mortals, from whom heroes like Heracles, Perseus, and Helen of Troy were born.

Among his most characteristic attributes are the thunderbolt, forged by the Cyclopes, the royal scepter, and the eagle. He was known for his wisdom and justice, but also for his wrath and vengeance against those who challenged his authority. The Olympic Games were celebrated in his honor every four years at Olympia.

As father of gods and men, Zeus represented order and law in the cosmos. His cult spread throughout the Greek world and his figure was assimilated by the Romans as Jupiter. His myth has endured as a symbol of supreme power and divine sovereignty.`,
      excerpt_es: 'Rey del Olimpo, dios del trueno y padre de dioses y hombres en la mitología griega.',
      excerpt_en: 'King of Olympus, god of thunder, and father of gods and men in Greek mythology.',
      categoryId: 'cat-greek-myth',
      realityStatus: 'mythological',
      imageUrl: '',
      createdAt: '2026-01-16T00:00:00Z',
      updatedAt: '2026-01-16T00:00:00Z',
    },
    {
      id: 'entry-ra',
      title_es: 'Ra',
      title_en: 'Ra',
      slug: 'ra',
      content_es: `Ra es el dios del sol en la mitología egipcia, una de las deidades más importantes y veneradas del panteón del Nilo. Considerado el creador del universo y señor de todos los dioses, Ra era representado con cabeza de halcón coronada por un disco solar rodeado por el uraeus, la serpiente sagrada.
    
Según la cosmogonía heliopolitana, Ra surgió de las aguas primordiales del Nun, el caos infinito, y creó el mundo mediante su palabra. Dio origen a Shu (el aire) y Tefnut (la humedad), quienes a su vez engendraron a Geb (la tierra) y Nut (el cielo). Desde entonces, Ra recorría el cielo en su barca solar, llamada la Barca de los Millones de Años.

Cada día, Ra navegaba por el cielo en su barca Matet durante el día, pasando por el mundo de los vivos. Al anochecer, se transformaba en Atum y descendía al inframundo (Duat) en su barca Semektet, donde cada noche debía luchar contra la serpiente Apofis, el caos primordial. Su victoria garantizaba el amanecer del nuevo día.

El centro principal de su culto fue la ciudad de Heliópolis (Iunu en egipcio), donde se erigió un gran templo dedicado a Ra. Los faraones se consideraban hijos de Ra, y su título real incluía el nombre del dios. Durante el Imperio Nuevo, Ra fue sincretizado con Amón, dando origen a Amón-Ra, la deidad suprema del panteón egipcio.

La importancia de Ra trascendió la religión para influir en la cultura, el arte y la cosmovisión del antiguo Egipto. Su ciclo diario de muerte y renacimiento simbolizaba la eternidad y el orden cósmico (Maat) que los egipcios consideraban fundamental para la existencia.`,
      content_en: `Ra is the sun god in Egyptian mythology, one of the most important and venerated deities of the Nile pantheon. Considered the creator of the universe and lord of all gods, Ra was depicted with a falcon head crowned by a solar disk surrounded by the uraeus, the sacred cobra.
    
According to Heliopolitan cosmogony, Ra emerged from the primordial waters of Nun, the infinite chaos, and created the world through his word. He gave rise to Shu (air) and Tefnut (moisture), who in turn engendered Geb (earth) and Nut (sky). From then on, Ra traveled across the sky in his solar barque, called the Barque of Millions of Years.

Each day, Ra sailed across the sky in his morning barque Matet, passing through the world of the living. At dusk, he transformed into Atum and descended into the underworld (Duat) in his evening barque Semektet, where each night he had to fight the serpent Apophis, primordial chaos. His victory guaranteed the dawn of a new day.

The main center of his cult was the city of Heliopolis (Iunu in Egyptian), where a great temple dedicated to Ra was erected. The pharaohs considered themselves sons of Ra, and their royal title included the god's name. During the New Kingdom, Ra was syncretized with Amun, giving rise to Amun-Ra, the supreme deity of the Egyptian pantheon.

Ra's importance transcended religion to influence the culture, art, and worldview of ancient Egypt. His daily cycle of death and rebirth symbolized eternity and the cosmic order (Maat) that Egyptians considered fundamental to existence.`,
      excerpt_es: 'Dios del sol egipcio, creador del universo y una de las deidades más importantes del panteón del Nilo.',
      excerpt_en: 'Egyptian sun god, creator of the universe, and one of the most important deities of the Nile pantheon.',
      categoryId: 'cat-egyptian-myth',
      realityStatus: 'mythological',
      imageUrl: '',
      createdAt: '2026-01-17T00:00:00Z',
      updatedAt: '2026-01-17T00:00:00Z',
    },
    {
      id: 'entry-odin',
      title_es: 'Odín',
      title_en: 'Odin',
      slug: 'odin',
      content_es: `Odín es el dios principal de la mitología nórdica, padre de todos los dioses y gobernante de Asgard. Es el dios de la sabiduría, la guerra, la muerte, la magia y la poesía. Su nombre en nórdico antiguo, Óðinn, significa "furia" o "inspiración". Es representado como un hombre de edad avanzada, con un solo ojo, barba larga y un amplio sombrero.
    
Odín sacrificó uno de sus ojos en el pozo de Mimir a cambio de la sabiduría infinita. También se colgó del Yggdrasil, el árbol del mundo, durante nueve días y nueve noches, atravesado por su propia lanza, para obtener el conocimiento de las runas. Estos sacrificios demuestran su incansable búsqueda del conocimiento a cualquier precio.

Es el líder de los Einherjer, los guerreros caídos en batalla que residen en el Valhalla, el gran salón de Asgard. Desde su trono Hlidskjalf, Odín observa los nueve mundos a través de sus dos cuervos, Huginn (Pensamiento) y Muninn (Memoria), que viajan por el universo y le traen noticias cada día.

Monta su corcel de ocho patas Sleipnir y empuña la lanza Gungnir, forjada por los enanos hijos de Ivaldi. En el Ragnarök, la batalla del fin del mundo, Odín luchará contra el lobo Fenrir, que lo devorará, siendo vengado por su hijo Vidar.

Odín es una figura compleja: sabio pero engañoso, guerrero pero poeta, generoso con sus seguidores pero temible con sus enemigos. Su culto fue central en la cultura vikinga y su legado perdura en la literatura, la ópera y la cultura popular contemporánea.`,
      content_en: `Odin is the chief god of Norse mythology, father of all gods and ruler of Asgard. He is the god of wisdom, war, death, magic, and poetry. His Old Norse name, Óðinn, means "fury" or "inspiration." He is depicted as an elderly man, with one eye, a long beard, and a wide-brimmed hat.
    
Odin sacrificed one of his eyes at Mimir's well in exchange for infinite wisdom. He also hung himself from Yggdrasil, the world tree, for nine days and nine nights, pierced by his own spear, to gain knowledge of the runes. These sacrifices demonstrate his relentless pursuit of knowledge at any cost.

He is the leader of the Einherjar, the warriors fallen in battle who reside in Valhalla, the great hall of Asgard. From his throne Hlidskjalf, Odin observes the nine worlds through his two ravens, Huginn (Thought) and Muninn (Memory), who travel the universe and bring him news each day.

He rides his eight-legged steed Sleipnir and wields the spear Gungnir, forged by the dwarf sons of Ivaldi. At Ragnarök, the battle of the end of the world, Odin will fight the wolf Fenrir, who will devour him, and he will be avenged by his son Vidar.

Odin is a complex figure: wise yet deceitful, warrior yet poet, generous to his followers yet fearsome to his enemies. His cult was central to Viking culture and his legacy endures in literature, opera, and contemporary popular culture.`,
      excerpt_es: 'Padre de todos los dioses nórdicos, dios de la sabiduría, la guerra y la magia, que sacrificó un ojo por el conocimiento.',
      excerpt_en: 'Father of all Norse gods, god of wisdom, war, and magic, who sacrificed an eye for knowledge.',
      categoryId: 'cat-norse-myth',
      realityStatus: 'mythological',
      imageUrl: '',
      createdAt: '2026-01-18T00:00:00Z',
      updatedAt: '2026-01-18T00:00:00Z',
    },
    {
      id: 'entry-imperio-romano',
      title_es: 'Imperio Romano',
      title_en: 'Roman Empire',
      slug: 'imperio-romano',
      content_es: `El Imperio Romano fue la civilización más influyente del mundo antiguo, cuyo legado en derecho, lengua, arquitectura, ingeniería y cultura perdura hasta nuestros días. En su máxima extensión, durante el reinado del emperador Trajano (117 d.C.), abarcaba desde Britania hasta el norte de África, y desde la península ibérica hasta Mesopotamia.
    
La historia de Roma comienza con su fundación legendaria en el 753 a.C. por Rómulo y Remo. Durante la Monarquía (753-509 a.C.), Roma fue gobernada por siete reyes. Le siguió la República (509-27 a.C.), un período de expansión continua que transformó a Roma de una ciudad-estado a la potencia dominante del Mediterráneo, culminando con la conquista de Grecia, Cartago y gran parte del mundo helenístico.

La transición al Imperio se produjo con el ascenso de Julio César, su asesinato en el 44 a.C., y la consolidación del poder por su hijo adoptivo Octavio Augusto en el 27 a.C. El Imperio alcanzó su apogeo durante la Pax Romana (27 a.C. - 180 d.C.), un período de paz y prosperidad relativa que permitió el florecimiento de la cultura, la literatura y la arquitectura.

Roma realizó contribuciones fundamentales a la civilización occidental: el derecho romano, base de los sistemas legales de Europa y América Latina; el latín, origen de las lenguas romances; las técnicas de construcción con arcos, bóvedas y hormigón; y la organización política y administrativa que inspiró a imperios posteriores.

La decadencia del Imperio fue un proceso gradual que duró siglos. Factores como la corrupción política, las crisis económicas, las invasiones bárbaras y la división del imperio llevaron a la caída de Roma Occidental en el 476 d.C. El Imperio Bizantino, su heredero oriental, perduró hasta 1453.`,
      content_en: `The Roman Empire was the most influential civilization of the ancient world, whose legacy in law, language, architecture, engineering, and culture endures to this day. At its greatest extent, during the reign of Emperor Trajan (117 AD), it stretched from Britain to North Africa, and from the Iberian peninsula to Mesopotamia.
    
Roman history begins with its legendary foundation in 753 BC by Romulus and Remus. During the Monarchy (753-509 BC), Rome was ruled by seven kings. It was followed by the Republic (509-27 BC), a period of continuous expansion that transformed Rome from a city-state into the dominant Mediterranean power, culminating in the conquest of Greece, Carthage, and much of the Hellenistic world.

The transition to Empire came with the rise of Julius Caesar, his assassination in 44 BC, and the consolidation of power by his adoptive son Octavian Augustus in 27 BC. The Empire reached its peak during the Pax Romana (27 BC - 180 AD), a period of relative peace and prosperity that allowed the flourishing of culture, literature, and architecture.

Rome made fundamental contributions to Western civilization: Roman law, the basis of legal systems in Europe and Latin America; Latin, the origin of Romance languages; construction techniques using arches, vaults, and concrete; and the political and administrative organization that inspired later empires.

The decline of the Empire was a gradual process lasting centuries. Factors such as political corruption, economic crises, barbarian invasions, and the division of the empire led to the fall of the Western Roman Empire in 476 AD. The Byzantine Empire, its eastern heir, lasted until 1453.`,
      excerpt_es: 'La civilización más influyente del mundo antiguo, cuyo legado en derecho, lengua y cultura perdura hasta hoy.',
      excerpt_en: 'The most influential civilization of the ancient world, whose legacy in law, language, and culture endures today.',
      categoryId: 'cat-ancient-civs',
      realityStatus: 'historical',
      imageUrl: '',
      createdAt: '2026-01-19T00:00:00Z',
      updatedAt: '2026-01-19T00:00:00Z',
    },
    {
      id: 'entry-budismo',
      title_es: 'Budismo',
      title_en: 'Buddhism',
      slug: 'budismo',
      content_es: `El budismo es una tradición espiritual y filosófica fundada por Siddhartha Gautama, el Buda, en el noreste de la India en el siglo V a.C. Con más de 500 millones de seguidores en todo el mundo, el budismo es la cuarta religión más grande del planeta. Se basa en las enseñanzas del Buda sobre la naturaleza del sufrimiento y el camino hacia la liberación.
    
Siddhartha Gautama nació como príncipe en Lumbini (actual Nepal) y vivió una vida de lujo y privilegio. Sin embargo, al salir de su palacio y encontrarse con un anciano, un enfermo, un cadáver y un asceta, tomó conciencia del sufrimiento universal. Abandonó su vida principesca y emprendió una búsqueda espiritual que culminó con su iluminación bajo el árbol Bodhi en Bodh Gaya.

El núcleo de las enseñanzas budistas se resume en las Cuatro Nobles Verdades: la verdad del sufrimiento (dukkha), la verdad del origen del sufrimiento (el deseo y el apego), la verdad del cese del sufrimiento (nirvana) y la verdad del camino que conduce al cese del sufrimiento (el Noble Óctuple Sendero). Este sendero incluye la comprensión correcta, el pensamiento correcto, la palabra correcta, la acción correcta, el medio de vida correcto, el esfuerzo correcto, la atención correcta y la concentración correcta.

El budismo se divide en tres grandes tradiciones: Theravada ("Escuela de los Ancianos"), predominante en Sri Lanka y el sudeste asiático; Mahayana ("Gran Vehículo"), extendido por el este de Asia, que incluye el budismo zen y la Tierra Pura; y Vajrayana ("Vehículo del Diamante"), presente en el Tíbet y la región del Himalaya.

El budismo ha influido profundamente en las culturas de Asia, desde el arte y la arquitectura hasta la ética y la filosofía. Su énfasis en la compasión, la no violencia y la meditación ha ganado una creciente aceptación en Occidente, donde se valora como una práctica espiritual compatible con la ciencia y el humanismo secular.`,
      content_en: `Buddhism is a spiritual and philosophical tradition founded by Siddhartha Gautama, the Buddha, in northeastern India in the 5th century BC. With over 500 million followers worldwide, Buddhism is the fourth largest religion on the planet. It is based on the Buddha's teachings on the nature of suffering and the path to liberation.
    
Siddhartha Gautama was born as a prince in Lumbini (present-day Nepal) and lived a life of luxury and privilege. However, upon leaving his palace and encountering an old man, a sick man, a corpse, and an ascetic, he became aware of universal suffering. He abandoned his princely life and embarked on a spiritual quest that culminated in his enlightenment under the Bodhi tree in Bodh Gaya.

The core of Buddhist teachings is summarized in the Four Noble Truths: the truth of suffering (dukkha), the truth of the origin of suffering (desire and attachment), the truth of the cessation of suffering (nirvana), and the truth of the path leading to the cessation of suffering (the Noble Eightfold Path). This path includes right understanding, right thought, right speech, right action, right livelihood, right effort, right mindfulness, and right concentration.

Buddhism is divided into three major traditions: Theravada ("School of the Elders"), predominant in Sri Lanka and Southeast Asia; Mahayana ("Great Vehicle"), widespread in East Asia, which includes Zen Buddhism and Pure Land; and Vajrayana ("Diamond Vehicle"), present in Tibet and the Himalayan region.

Buddhism has profoundly influenced Asian cultures, from art and architecture to ethics and philosophy. Its emphasis on compassion, non-violence, and meditation has gained increasing acceptance in the West, where it is valued as a spiritual practice compatible with science and secular humanism.`,
      excerpt_es: 'Tradición espiritual fundada por Buda, basada en las Cuatro Nobles Verdades y el Noble Óctuple Sendero hacia la iluminación.',
      excerpt_en: 'Spiritual tradition founded by the Buddha, based on the Four Noble Truths and the Noble Eightfold Path to enlightenment.',
      categoryId: 'cat-eastern-philosophy',
      realityStatus: 'philosophical',
      imageUrl: '',
      createdAt: '2026-01-20T00:00:00Z',
      updatedAt: '2026-01-20T00:00:00Z',
    },
    {
      id: 'entry-mona-lisa',
      title_es: 'Mona Lisa',
      title_en: 'Mona Lisa',
      slug: 'mona-lisa',
      content_es: `La Mona Lisa, también conocida como La Gioconda, es el retrato más famoso del mundo, pintado por Leonardo da Vinci entre 1503 y 1519. La obra representa a Lisa Gherardini, esposa de Francesco del Giocondo, un comerciante de seda florentino. Actualmente se exhibe en el Museo del Louvre en París, donde atrae a millones de visitantes cada año.
    
La pintura destaca por la enigmática sonrisa de la modelo, que ha fascinado a espectadores durante siglos. Leonardo utilizó la técnica del sfumato, un sutil difuminado de los contornos que crea una transición suave entre luces y sombras, dando a la sonrisa un carácter esquivo que parece cambiar según el ángulo de observación.

El cuadro marca un hito en la evolución del retrato renacentista. A diferencia de los retratos formales de la época, que mostraban a los sujetos de perfil y con una expresión rígida, la Mona Lisa presenta a su modelo en posición de tres cuartos, con una pose natural y un paisaje fantástico al fondo. Este enfoque innovador influyó profundamente en la pintura occidental.

La historia del cuadro añade a su leyenda. Leonardo lo llevó consigo a Francia cuando se mudó allí bajo el patrocinio del rey Francisco I. Fue robado del Louvre en 1911 por Vincenzo Peruggia, un empleado del museo, y recuperado dos años después en Florencia. El robo contribuyó paradójicamente a su fama mundial.

La Mona Lisa ha sido objeto de innumerables análisis, interpretaciones y homenajes. Desde las teorías que especulan sobre la identidad de la modelo hasta las parodias contemporáneas, el cuadro trasciende su condición de obra de arte para convertirse en un icono cultural universal, símbolo del arte y el misterio.`,
      content_en: `The Mona Lisa, also known as La Gioconda, is the most famous portrait in the world, painted by Leonardo da Vinci between 1503 and 1519. The work depicts Lisa Gherardini, wife of Francesco del Giocondo, a Florentine silk merchant. It is currently exhibited at the Louvre Museum in Paris, where it attracts millions of visitors each year.
    
The painting is renowned for the enigmatic smile of the sitter, which has fascinated viewers for centuries. Leonardo used the sfumato technique, a subtle blurring of contours that creates a smooth transition between light and shadow, giving the smile an elusive quality that seems to change depending on the viewing angle.

The painting marks a milestone in the evolution of Renaissance portraiture. Unlike the formal portraits of the time, which showed subjects in profile with rigid expressions, the Mona Lisa presents her in a three-quarter pose with a natural posture and a fantastical landscape in the background. This innovative approach profoundly influenced Western painting.

The painting's history adds to its legend. Leonardo brought it with him to France when he moved there under the patronage of King Francis I. It was stolen from the Louvre in 1911 by Vincenzo Peruggia, a museum employee, and recovered two years later in Florence. The theft paradoxically contributed to its worldwide fame.

The Mona Lisa has been the subject of countless analyses, interpretations, and homages. From theories speculating about the sitter's identity to contemporary parodies, the painting transcends its status as a work of art to become a universal cultural icon, a symbol of art and mystery.`,
      excerpt_es: 'El retrato más famoso del mundo, pintado por Leonardo da Vinci, conocido por la enigmática sonrisa de su modelo.',
      excerpt_en: 'The most famous portrait in the world, painted by Leonardo da Vinci, known for the enigmatic smile of its model.',
      categoryId: 'cat-arts',
      realityStatus: 'historical',
      imageUrl: '',
      createdAt: '2026-01-21T00:00:00Z',
      updatedAt: '2026-01-21T00:00:00Z',
    },
    {
      id: 'entry-inconsciente-colectivo',
      title_es: 'Inconsciente Colectivo',
      title_en: 'Collective Unconscious',
      slug: 'inconsciente-colectivo',
      content_es: `El inconsciente colectivo es un concepto central en la psicología analítica de Carl Gustav Jung. Se refiere a una capa profunda de la psique humana que es innata, universal y compartida por todas las personas, independientemente de su cultura o época. Este concepto revolucionó la comprensión de la mente humana y sus símbolos.
    
Jung propuso que la psique se compone de tres niveles: el consciente (nuestra percepción consciente del mundo), el inconsciente personal (contenidos reprimidos o olvidados de la experiencia individual) y el inconsciente colectivo, que contiene los arquetipos: patrones universales de pensamiento, imágenes y comportamientos heredados de nuestros antepasados.

Los arquetipos son las estructuras fundamentales del inconsciente colectivo. Incluyen figuras como el Yo (Self), la Sombra (los aspectos ocultos de la personalidad), el Anima/Animus (la imagen del género opuesto dentro de cada persona), el Héroe, el Viejo Sabio, la Gran Madre y el Trickster. Estos patrones se manifiestan en mitos, sueños, religiones y obras de arte de todas las culturas.

Jung encontró evidencia de su teoría en el estudio comparativo de mitologías, religiones, sueños y trastornos mentales. Observó que símbolos como el círculo (mandala), el árbol de la vida, la cruz y el laberinto aparecen de forma recurrente en tradiciones que no tuvieron contacto entre sí, sugiriendo una base psíquica común.

El concepto de inconsciente colectivo ha influido en psicología, antropología, estudios de religión, crítica literaria y teoría del arte. Aunque ha sido criticado por su carácter especulativo y difícil de probar empíricamente, sigue siendo una de las ideas más sugerentes y perdurables de la psicología del siglo XX.`,
      content_en: `The collective unconscious is a central concept in Carl Gustav Jung's analytical psychology. It refers to a deep layer of the psyche that is innate, universal, and shared by all people, regardless of their culture or era. This concept revolutionized the understanding of the human mind and its symbols.
    
Jung proposed that the psyche consists of three levels: the conscious (our conscious perception of the world), the personal unconscious (repressed or forgotten contents of individual experience), and the collective unconscious, which contains archetypes: universal patterns of thought, images, and behaviors inherited from our ancestors.

Archetypes are the fundamental structures of the collective unconscious. They include figures such as the Self, the Shadow (the hidden aspects of personality), the Anima/Animus (the image of the opposite gender within each person), the Hero, the Wise Old Man, the Great Mother, and the Trickster. These patterns manifest in myths, dreams, religions, and works of art across all cultures.

Jung found evidence for his theory in the comparative study of mythologies, religions, dreams, and mental disorders. He observed that symbols such as the circle (mandala), the tree of life, the cross, and the labyrinth appear recurrently in traditions that had no contact with each other, suggesting a common psychic foundation.

The concept of the collective unconscious has influenced psychology, anthropology, religious studies, literary criticism, and art theory. Although it has been criticized for its speculative nature and difficulty to prove empirically, it remains one of the most thought-provoking and enduring ideas in 20th century psychology.`,
      excerpt_es: 'Concepto de Carl Jung sobre una capa psíquica compartida por toda la humanidad, habitada por arquetipos universales.',
      excerpt_en: "Carl Jung's concept of a psychic layer shared by all humanity, inhabited by universal archetypes.",
      categoryId: 'cat-psychology',
      realityStatus: 'theoretical',
      imageUrl: '',
      createdAt: '2026-01-22T00:00:00Z',
      updatedAt: '2026-01-22T00:00:00Z',
    },
  ] as SeedEntry[],

  subsections: [
    {
      id: 'sub-alex-01',
      entryId: 'entry-alexandria',
      title_es: 'Fundación y propósito',
      title_en: 'Foundation and purpose',
      content_es: 'La biblioteca fue fundada por Ptolomeo I Sóter o su hijo Ptolomeo II Filadelfo. Su propósito era reunir todo el conocimiento del mundo conocido. Los Ptolomeos enviaban agentes a comprar rollos por todo el Mediterráneo e incluso confiscaban libros de los barcos que atracaban en Alejandría, haciendo copias para los dueños originales y quedándose con los originales.',
      content_en: 'The library was founded by Ptolemy I Soter or his son Ptolemy II Philadelphus. Its purpose was to gather all knowledge of the known world. The Ptolemies sent agents to purchase scrolls throughout the Mediterranean and even confiscated books from ships docking in Alexandria, making copies for the original owners and keeping the originals.',
      order: 0,
    },
    {
      id: 'sub-alex-02',
      entryId: 'entry-alexandria',
      title_es: 'Contenido y eruditos',
      title_en: 'Content and scholars',
      content_es: 'La biblioteca contenía obras de Homero, Platón, Aristóteles, Sófocles, Eurípides y muchos otros. Entre los eruditos más famosos que trabajaron allí se encuentran Euclides (geometría), Eratóstenes (geografía y cálculo de la circunferencia terrestre), Arquímedes (matemáticas e ingeniería) e Hiparco (astronomía). La traducción de la Septuaginta (el Antiguo Testamento al griego) se realizó aquí.',
      content_en: 'The library contained works of Homer, Plato, Aristotle, Sophocles, Euripides, and many others. Among the most famous scholars who worked there are Euclid (geometry), Eratosthenes (geography and calculation of the Earth\'s circumference), Archimedes (mathematics and engineering), and Hipparchus (astronomy). The translation of the Septuagint (the Old Testament into Greek) was carried out here.',
      order: 1,
    },
    {
      id: 'sub-alex-03',
      entryId: 'entry-alexandria',
      title_es: 'Destrucción y legado',
      title_en: 'Destruction and legacy',
      content_es: 'La destrucción de la Biblioteca de Alejandría no ocurrió en un solo evento, sino en múltiples episodios a lo largo de los siglos: Julio César incendió parte de la biblioteca accidentalmente en el 48 a.C., la destrucción del Serapeum en el 391 d.C. bajo el Imperio Romano cristiano, y finalmente la conquista árabe en el 642 d.C. Se dice que el califa Omar ordenó quemar los libros que contradecían el Corán, aunque los historiadores debaten este relato.',
      content_en: 'The destruction of the Library of Alexandria did not occur in a single event, but in multiple episodes over the centuries: Julius Caesar accidentally burned part of the library in 48 BC, the destruction of the Serapeum in 391 AD under the Christian Roman Empire, and finally the Arab conquest in 642 AD. It is said that Caliph Omar ordered the burning of books that contradicted the Quran, though historians debate this account.',
      order: 2,
    },
    {
      id: 'sub-alex-04',
      entryId: 'entry-alexandria',
      title_es: 'Conexión con Codex Mundi',
      title_en: 'Connection to Codex Mundi',
      content_es: 'Codex Mundi se concibe como una reencarnación digital del espíritu de la Biblioteca de Alejandría. Así como aquella biblioteca buscaba reunir todo el conocimiento del mundo antiguo, Codex Mundi aspira a compilar el conocimiento humano en todas sus formas: desde hechos históricos comprobados hasta mitos, leyendas, hipótesis y teorías especulativas. Todo tiene cabida aquí, clasificado por su estado de realidad, para que cada lector pueda formar su propio juicio.',
      content_en: 'Codex Mundi is conceived as a digital reincarnation of the spirit of the Library of Alexandria. Just as that library sought to gather all knowledge of the ancient world, Codex Mundi aspires to compile human knowledge in all its forms: from verified historical facts to myths, legends, hypotheses, and speculative theories. Everything has a place here, classified by its reality status, so that each reader can form their own judgment.',
      order: 3,
    },
    {
      id: 'sub-god-01',
      entryId: 'entry-god',
      title_es: 'Perspectiva monoteísta',
      title_en: 'Monotheistic perspective',
      content_es: 'En las religiones abrahámicas (judaísmo, cristianismo, islam), Dios es un ser único, todopoderoso, omnisciente y eterno, creador del universo. Se le atribuyen atributos como la misericordia, la justicia y el amor. En el islam, Alá es el mismo Dios de Abraham, enfatizando su unidad absoluta (tawhid).',
      content_en: 'In the Abrahamic religions (Judaism, Christianity, Islam), God is a single, omnipotent, omniscient, and eternal being, creator of the universe. Attributes such as mercy, justice, and love are ascribed to Him. In Islam, Allah is the same God of Abraham, emphasizing His absolute unity (tawhid).',
      order: 0,
    },
    {
      id: 'sub-god-02',
      entryId: 'entry-god',
      title_es: 'Perspectiva politeísta',
      title_en: 'Polytheistic perspective',
      content_es: 'En religiones como el hinduismo, existen múltiples deidades que representan diferentes aspectos de lo divino. Trimurti hindú: Brahma (creador), Vishnu (preservador) y Shiva (destructor). En las religiones nórdicas, griegas y egipcias, los panteones de dioses gobernaban diferentes dominios de la naturaleza y la vida humana.',
      content_en: 'In religions like Hinduism, there are multiple deities representing different aspects of the divine. Hindu Trimurti: Brahma (creator), Vishnu (preserver), and Shiva (destroyer). In Norse, Greek, and Egyptian religions, pantheons of gods governed different domains of nature and human life.',
      order: 1,
    },
    {
      id: 'sub-god-03',
      entryId: 'entry-god',
      title_es: 'Argumentos filosóficos',
      title_en: 'Philosophical arguments',
      content_es: 'Los principales argumentos a favor de la existencia de Dios incluyen: el argumento cosmológico (todo tiene una causa), el argumento teleológico (el diseño del universo implica un diseñador), el argumento ontológico (la idea de un ser perfecto implica su existencia) y el argumento moral (la existencia de la moral objetiva requiere un fundamento divino). Críticos como Hume, Kant y Nietzsche han presentado refutaciones a estos argumentos.',
      content_en: 'The main arguments for the existence of God include: the cosmological argument (everything has a cause), the teleological argument (the design of the universe implies a designer), the ontological argument (the idea of a perfect being implies its existence), and the moral argument (the existence of objective morality requires a divine foundation). Critics such as Hume, Kant, and Nietzsche have presented refutations to these arguments.',
      order: 2,
    },
    {
      id: 'sub-jesus-01',
      entryId: 'entry-jesus',
      title_es: 'Nacimiento e infancia',
      title_en: 'Birth and childhood',
      content_es: 'Según los evangelios de Mateo y Lucas, Jesús nació de María por obra del Espíritu Santo en Belén. Pastores y magos de Oriente vinieron a adorarlo. La familia huyó a Egipto para escapar de la masacre de niños ordenada por Herodes. Creció en Nazaret y a los 12 años apareció en el Templo de Jerusalén discutiendo con los sabios.',
      content_en: 'According to the gospels of Matthew and Luke, Jesus was born of Mary by the work of the Holy Spirit in Bethlehem. Shepherds and wise men from the East came to worship him. The family fled to Egypt to escape Herod\'s massacre of children. He grew up in Nazareth and at age 12 appeared in the Temple of Jerusalem discussing with the sages.',
      order: 0,
    },
    {
      id: 'sub-jesus-02',
      entryId: 'entry-jesus',
      title_es: 'Ministerio y enseñanzas',
      title_en: 'Ministry and teachings',
      content_es: 'Su ministerio duró aproximadamente tres años. Predicó el amor al prójimo, el perdón de los enemigos y la humildad. Sus enseñanzas más conocidas incluyen el Sermón del Monte (Bienaventuranzas), el Padre Nuestro y parábolas como la del Buen Samaritano y el Hijo Pródigo. Enfatizó la llegada del Reino de Dios y llamó a doce apóstoles para difundir su mensaje.',
      content_en: 'His ministry lasted approximately three years. He preached love of neighbor, forgiveness of enemies, and humility. His best-known teachings include the Sermon on the Mount (Beatitudes), the Lord\'s Prayer, and parables such as the Good Samaritan and the Prodigal Son. He emphasized the coming of the Kingdom of God and called twelve apostles to spread his message.',
      order: 1,
    },
    {
      id: 'sub-michael-01',
      entryId: 'entry-archangel-michael',
      title_es: 'En la tradición cristiana',
      title_en: 'In Christian tradition',
      content_es: 'En el cristianismo, Miguel es el príncipe de los ángeles, comandante del ejército celestial. El Apocalipsis (12:7-9) narra: "Entonces hubo una guerra en el cielo: Miguel y sus ángeles lucharon contra el dragón. El dragón y sus ángeles lucharon, pero no prevalecieron, ni se encontró ya lugar para ellos en el cielo. Y fue lanzado fuera el gran dragón, la serpiente antigua, que se llama Diablo y Satanás."',
      content_en: 'In Christianity, Michael is the prince of angels, commander of the heavenly army. Revelation (12:7-9) narrates: "Then war broke out in heaven: Michael and his angels fought against the dragon. The dragon and his angels fought, but they did not prevail, nor was their place found anymore in heaven. And the great dragon was cast out, that serpent of old, called the Devil and Satan."',
      order: 0,
    },
    {
      id: 'sub-lucifer-01',
      entryId: 'entry-lucifer',
      title_es: 'Origen del nombre',
      title_en: 'Origin of the name',
      content_es: 'El término "Lucifer" aparece solo una vez en la Vulgata (traducción latina de la Biblia), en Isaías 14:12, refiriéndose al rey de Babilonia como "Lucifer, hijo de la aurora". La interpretación que identifica a Lucifer con Satanás se desarrolló en la patrística cristiana, especialmente con Tertuliano, Orígenes y Gregorio Magno.',
      content_en: 'The term "Lucifer" appears only once in the Vulgate (Latin translation of the Bible), in Isaiah 14:12, referring to the king of Babylon as "Lucifer, son of the dawn." The interpretation identifying Lucifer with Satan developed in Christian patristics, especially with Tertullian, Origen, and Gregory the Great.',
      order: 0,
    },
    {
      id: 'sub-evol-01',
      entryId: 'entry-evolution',
      title_es: 'Origen de la teoría',
      title_en: 'Origin of the theory',
      content_es: 'Charles Darwin embarcó en el HMS Beagle en 1831 para un viaje de cinco años alrededor del mundo. Durante su travesía, especialmente en las Islas Galápagos, observó variaciones en pinzones y tortugas que sugerían que las especies no eran fijas sino que cambian con el tiempo. A su regreso, pasó décadas analizando sus datos y desarrollando su teoría, publicada finalmente en "El origen de las especies" en 1859. Alfred Russel Wallace llegó de forma independiente a conclusiones similares, lo que motivó la presentación conjunta de sus trabajos ante la Sociedad Linneana de Londres.',
      content_en: 'Charles Darwin embarked on the HMS Beagle in 1831 for a five-year voyage around the world. During his journey, especially in the Galápagos Islands, he observed variations in finches and tortoises that suggested species were not fixed but changed over time. Upon returning, he spent decades analyzing his data and developing his theory, finally published in "On the Origin of Species" in 1859. Alfred Russel Wallace independently arrived at similar conclusions, prompting the joint presentation of their works to the Linnean Society of London.',
      order: 0,
    },
    {
      id: 'sub-evol-02',
      entryId: 'entry-evolution',
      title_es: 'Darwin y Wallace',
      title_en: 'Darwin and Wallace',
      content_es: 'Alfred Russel Wallace, un naturalista británico, desarrolló simultáneamente la teoría de la evolución por selección natural mientras trabajaba en el archipiélago malayo. En 1858, envió un ensayo a Darwin exponiendo sus ideas. Sorprendido por la coincidencia, Darwin organizó una presentación conjunta. Aunque Darwin recibe la mayor parte del crédito, Wallace fue un científico excepcional que también realizó importantes contribuciones a la biogeografía y la zoología. La relación entre ambos fue siempre respetuosa y cordial.',
      content_en: 'Alfred Russel Wallace, a British naturalist, simultaneously developed the theory of evolution by natural selection while working in the Malay Archipelago. In 1858, he sent an essay to Darwin outlining his ideas. Startled by the coincidence, Darwin arranged a joint presentation. Although Darwin receives most of the credit, Wallace was an exceptional scientist who also made important contributions to biogeography and zoology. The relationship between the two was always respectful and cordial.',
      order: 1,
    },
    {
      id: 'sub-rela-01',
      entryId: 'entry-relativity',
      title_es: 'Relatividad especial',
      title_en: 'Special relativity',
      content_es: 'Einstein publicó la relatividad especial en 1905, en su "año milagroso" (annus mirabilis). La teoría se basa en dos postulados: las leyes de la física son invariantes en todos los sistemas inerciales, y la velocidad de la luz en el vacío es constante e independiente del movimiento de la fuente. De aquí se derivan consecuencias como la dilatación temporal (el tiempo se ralentiza a altas velocidades) y la contracción de Lorentz. La ecuación E=mc², que expresa la equivalencia entre masa y energía, es quizás la fórmula más famosa de la física.',
      content_en: 'Einstein published special relativity in 1905, his "miracle year" (annus mirabilis). The theory is based on two postulates: the laws of physics are invariant in all inertial frames, and the speed of light in a vacuum is constant and independent of the source\'s motion. This leads to consequences such as time dilation (time slows down at high speeds) and Lorentz contraction. The equation E=mc², expressing the equivalence of mass and energy, is perhaps the most famous formula in physics.',
      order: 0,
    },
    {
      id: 'sub-rela-02',
      entryId: 'entry-relativity',
      title_es: 'Relatividad general',
      title_en: 'General relativity',
      content_es: 'Einstein completó la relatividad general en 1915, una teoría que describe la gravedad como la curvatura del espacio-tiempo causada por la distribución de masa y energía. La teoría predice fenómenos como los agujeros negros, la expansión del universo y las ondas gravitacionales. Una de sus predicciones más espectaculares —las ondas gravitacionales— fue confirmada directamente por el experimento LIGO en 2015, cien años después de su formulación.',
      content_en: 'Einstein completed general relativity in 1915, a theory describing gravity as the curvature of spacetime caused by the distribution of mass and energy. The theory predicts phenomena such as black holes, the expansion of the universe, and gravitational waves. One of its most spectacular predictions — gravitational waves — was directly confirmed by the LIGO experiment in 2015, one hundred years after its formulation.',
      order: 1,
    },
    {
      id: 'sub-bigb-01',
      entryId: 'entry-big-bang',
      title_es: 'Origen del universo',
      title_en: 'Origin of the universe',
      content_es: 'Según el modelo del Big Bang, el universo surgió de una singularidad infinitamente densa y caliente hace aproximadamente 13.800 millones de años. En el primer segundo después del Big Bang, las cuatro fuerzas fundamentales (gravedad, electromagnetismo, fuerza nuclear fuerte y débil) se separaron. La inflación cósmica, una expansión exponencial en los primeros 10⁻³² segundos, explica la uniformidad del universo observable. A medida que el universo se expandió y enfrió, las partículas subatómicas se formaron y eventualmente se combinaron para crear los primeros átomos.',
      content_en: 'According to the Big Bang model, the universe emerged from an infinitely dense and hot singularity approximately 13.8 billion years ago. In the first second after the Big Bang, the four fundamental forces (gravity, electromagnetism, strong and weak nuclear forces) separated. Cosmic inflation, an exponential expansion in the first 10⁻³² seconds, explains the uniformity of the observable universe. As the universe expanded and cooled, subatomic particles formed and eventually combined to create the first atoms.',
      order: 0,
    },
    {
      id: 'sub-bigb-02',
      entryId: 'entry-big-bang',
      title_es: 'Evidencia cosmológica',
      title_en: 'Cosmological evidence',
      content_es: 'Tres evidencias principales respaldan el Big Bang. Primero, el corrimiento al rojo de las galaxias, descubierto por Hubble, indica que el universo se expande. Segundo, la radiación cósmica de fondo de microondas (CMB), descubierta accidentalmente por Penzias y Wilson en 1965, es el "eco" del Big Bang: una radiación uniforme que llena todo el universo con una temperatura de 2.7 K. Tercero, la abundancia de elementos ligeros (hidrógeno, helio y litio) coincide con las predicciones de la nucleosíntesis primordial.',
      content_en: 'Three main pieces of evidence support the Big Bang. First, the redshift of galaxies, discovered by Hubble, indicates the universe is expanding. Second, the cosmic microwave background radiation (CMB), accidentally discovered by Penzias and Wilson in 1965, is the "echo" of the Big Bang: a uniform radiation filling the entire universe at 2.7 K. Third, the abundance of light elements (hydrogen, helium, and lithium) matches the predictions of primordial nucleosynthesis.',
      order: 1,
    },
    {
      id: 'sub-peni-01',
      entryId: 'entry-penicillin',
      title_es: 'Descubrimiento de Fleming',
      title_en: "Fleming's discovery",
      content_es: 'En septiembre de 1928, Alexander Fleming regresó de unas vacaciones a su laboratorio del Hospital St. Mary en Londres y encontró que un moho había contaminado una de sus placas de cultivo de Staphylococcus. Alrededor del moho, las bacterias habían sido destruidas. Fleming identificó el moho como Penicillium notatum y demostró que producía una sustancia capaz de matar bacterias. Sin embargo, le resultó difícil purificar el compuesto y mantenerlo estable, por lo que su descubrimiento quedó en gran parte olvidado durante una década.',
      content_en: 'In September 1928, Alexander Fleming returned from vacation to his laboratory at St. Mary\'s Hospital in London and found that a mold had contaminated one of his Staphylococcus culture plates. Around the mold, the bacteria had been destroyed. Fleming identified the mold as Penicillium notatum and demonstrated it produced a substance capable of killing bacteria. However, he found it difficult to purify the compound and keep it stable, so his discovery was largely forgotten for a decade.',
      order: 0,
    },
    {
      id: 'sub-peni-02',
      entryId: 'entry-penicillin',
      title_es: 'Impacto médico',
      title_en: 'Medical impact',
      content_es: 'La producción masiva de penicilina durante la Segunda Guerra Mundial redujo drásticamente las muertes por infecciones en heridas de combate. Tras la guerra, la penicilina se convirtió en el primer antibiótico disponible comercialmente, transformando la medicina. Enfermedades como la neumonía, la sífilis, la gonorrea y la meningitis pasaron de ser sentencias de muerte a condiciones tratables. Se estima que la penicilina ha salvado entre 80 y 200 millones de vidas desde su introducción.',
      content_en: 'The mass production of penicillin during World War II dramatically reduced deaths from wound infections in combat. After the war, penicillin became the first commercially available antibiotic, transforming medicine. Diseases such as pneumonia, syphilis, gonorrhea, and meningitis went from death sentences to treatable conditions. It is estimated that penicillin has saved between 80 and 200 million lives since its introduction.',
      order: 1,
    },
    {
      id: 'sub-amaz-01',
      entryId: 'entry-amazon',
      title_es: 'Biodiversidad',
      title_en: 'Biodiversity',
      content_es: 'La Amazonía alberga una de las concentraciones de biodiversidad más altas del planeta. Se estima que contiene 1 de cada 10 especies conocidas en la Tierra. Alberga 2.5 millones de especies de insectos, decenas de miles de plantas, y más de 2.000 especies de aves y mamíferos. Muchas especies son endémicas, es decir, no se encuentran en ningún otro lugar del mundo. Los pueblos indígenas de la Amazonía poseen un conocimiento tradicional invaluable sobre las propiedades medicinales de innumerables plantas.',
      content_en: 'The Amazon harbors one of the highest concentrations of biodiversity on the planet. It is estimated to contain 1 in every 10 known species on Earth. It hosts 2.5 million insect species, tens of thousands of plants, and over 2,000 bird and mammal species. Many species are endemic, meaning they are found nowhere else in the world. The indigenous peoples of the Amazon possess invaluable traditional knowledge about the medicinal properties of countless plants.',
      order: 0,
    },
    {
      id: 'sub-amaz-02',
      entryId: 'entry-amazon',
      title_es: 'Importancia global',
      title_en: 'Global importance',
      content_es: 'La Amazonía es esencial para la regulación del clima global. Genera entre el 50% y el 80% de su propia lluvia a través de la evapotranspiración, y sus "ríos voladores" transportan humedad a gran parte de América del Sur. Sus bosques almacenan entre 150 y 200 mil millones de toneladas de carbono. La deforestación, que ha alcanzado niveles críticos, amenaza con convertir la Amazonía de sumidero de carbono en fuente de emisiones, acelerando el cambio climático.',
      content_en: 'The Amazon is essential for global climate regulation. It generates between 50% and 80% of its own rain through evapotranspiration, and its "flying rivers" carry moisture across much of South America. Its forests store between 150 and 200 billion tons of carbon. Deforestation, which has reached critical levels, threatens to turn the Amazon from a carbon sink into a source of emissions, accelerating climate change.',
      order: 1,
    },
    {
      id: 'sub-inte-01',
      entryId: 'entry-internet',
      title_es: 'Orígenes (ARPANET)',
      title_en: 'Origins (ARPANET)',
      content_es: 'ARPANET, creada en 1969 por la agencia ARPA del Departamento de Defensa de Estados Unidos, fue la precursora de Internet. Su diseño descentralizado, basado en la conmutación de paquetes, permitía que los datos encontraran rutas alternativas si partes de la red fallaban. El primer mensaje enviado fue "LOGIN" entre UCLA y el Instituto de Investigación de Stanford, aunque solo se transmitieron las dos primeras letras ("LO") antes de que el sistema colapsara. Para 1973, ARPANET ya conectaba 30 instituciones académicas y militares.',
      content_en: 'ARPANET, created in 1969 by ARPA (Advanced Research Projects Agency) of the US Department of Defense, was the precursor to the Internet. Its decentralized design, based on packet switching, allowed data to find alternative routes if parts of the network failed. The first message sent was "LOGIN" between UCLA and the Stanford Research Institute, though only the first two letters ("LO") were transmitted before the system crashed. By 1973, ARPANET connected 30 academic and military institutions.',
      order: 0,
    },
    {
      id: 'sub-inte-02',
      entryId: 'entry-internet',
      title_es: 'Evolución y globalización',
      title_en: 'Evolution and globalization',
      content_es: 'La World Wide Web, inventada por Tim Berners-Lee en 1989, transformó Internet de una red académico-militar a un fenómeno global accesible para el público general. La década de 1990 vio la aparición de navegadores como Mosaic y Netscape, la fundación de Google (1998), y el estallido del auge de las punto com. El siglo XXI trajo las redes sociales (Facebook, Twitter, Instagram), la banda ancha móvil, la computación en la nube y la inteligencia artificial. Internet ha pasado de conectar computadoras a conectar personas, objetos y sistemas en una red global omnipresente.',
      content_en: 'The World Wide Web, invented by Tim Berners-Lee in 1989, transformed the Internet from an academic-military network into a global phenomenon accessible to the general public. The 1990s saw the emergence of browsers like Mosaic and Netscape, the founding of Google (1998), and the dot-com boom. The 21st century brought social media (Facebook, Twitter, Instagram), mobile broadband, cloud computing, and artificial intelligence. The Internet has evolved from connecting computers to connecting people, objects, and systems in an omnipresent global network.',
      order: 1,
    },
    {
      id: 'sub-alch-01',
      entryId: 'entry-alchemy',
      title_es: 'Orígenes antiguos',
      title_en: 'Ancient origins',
      content_es: 'La alquimia tiene sus raíces en el Egipto helenístico (siglos IV a.C. a III d.C.), donde la metalurgia egipcia se fusionó con la filosofía griega y el misticismo hermético. La Tabla Esmeralda, atribuida a Hermes Trismegisto, contiene el famoso principio "Como arriba, es abajo; como abajo, es arriba". En China, la alquimia se desarrolló de forma independiente, centrada en la búsqueda de la inmortalidad mediante elixires y prácticas taoístas. La alquimia india (rasayana) se enfocaba en la transmutación de metales y la prolongación de la vida.',
      content_en: 'Alchemy has its roots in Hellenistic Egypt (4th century BC to 3rd century AD), where Egyptian metallurgy merged with Greek philosophy and hermetic mysticism. The Emerald Tablet, attributed to Hermes Trismegistus, contains the famous principle "As above, so below; as below, so above." In China, alchemy developed independently, focused on the search for immortality through elixirs and Taoist practices. Indian alchemy (rasayana) focused on the transmutation of metals and the extension of life.',
      order: 0,
    },
    {
      id: 'sub-alch-02',
      entryId: 'entry-alchemy',
      title_es: 'La piedra filosofal',
      title_en: 'The philosopher\'s stone',
      content_es: 'La piedra filosofal era la sustancia legendaria que, según los alquimistas, podía transmutar metales comunes en oro y servir como elixir de la vida eterna. Descrita como una piedra roja o un polvo blanco, se creía que debía crearse a través de un proceso llamado "opus magnum" (gran obra), que implicaba varias etapas de purificación y transformación simbolizadas por colores: nigredo (negro), albedo (blanco), citrinitas (amarillo) y rubedo (rojo). Aunque nunca se encontró, la búsqueda de la piedra filosofal impulsó innumerables descubrimientos químicos.',
      content_en: 'The philosopher\'s stone was the legendary substance that, according to alchemists, could transmute common metals into gold and serve as the elixir of eternal life. Described as a red stone or white powder, it was believed to be created through a process called the "opus magnum" (great work), involving several stages of purification and transformation symbolized by colors: nigredo (black), albedo (white), citrinitas (yellow), and rubedo (red). Though never found, the search for the philosopher\'s stone drove countless chemical discoveries.',
      order: 1,
    },
    {
      id: 'sub-donq-01',
      entryId: 'entry-don-quixote',
      title_es: 'Contexto histórico',
      title_en: 'Historical context',
      content_es: 'Cervantes escribió Don Quijote durante el Siglo de Oro español, un período de florecimiento cultural y artístico en España. La primera parte se publicó en 1605, en una época en que los libros de caballerías gozaban de enorme popularidad. Cervantes, que había participado en la Batalla de Lepanto (1571) y pasado cinco años cautivo en Argel, conocía tanto la realidad de la guerra como la ficción caballeresca. La novela refleja las tensiones sociales de una España en transición entre el imperio y la decadencia.',
      content_en: 'Cervantes wrote Don Quixote during the Spanish Golden Age, a period of cultural and artistic flourishing in Spain. The first part was published in 1605, at a time when chivalric romances enjoyed enormous popularity. Cervantes, who had participated in the Battle of Lepanto (1571) and spent five years as a captive in Algiers, knew both the reality of war and chivalric fiction. The novel reflects the social tensions of a Spain in transition between empire and decline.',
      order: 0,
    },
    {
      id: 'sub-donq-02',
      entryId: 'entry-don-quixote',
      title_es: 'Personajes principales',
      title_en: 'Main characters',
      content_es: 'Don Quijote (Alonso Quijano) es un hidalgo de unos cincuenta años que, tras leer cientos de libros de caballerías, pierde el juicio y decide convertirse en caballero andante para defender a los oprimidos y restaurar la justicia en el mundo. Sancho Panza es su escudero, un campesino analfabeto pero de gran sabiduría popular, pragmático y leal. Dulcinea del Toboso, la dama imaginaria de Don Quijote, es en realidad Aldonza Lorenzo, una campesina real. La relación entre Don Quijote y Sancho, basada en el contraste entre idealismo y realismo, es el corazón de la novela.',
      content_en: 'Don Quixote (Alonso Quijano) is a gentleman in his fifties who, after reading hundreds of chivalric books, loses his mind and decides to become a knight-errant to defend the oppressed and restore justice to the world. Sancho Panza is his squire, an illiterate peasant of great folk wisdom, pragmatic and loyal. Dulcinea del Toboso, Don Quixote\'s imaginary lady, is actually Aldonza Lorenzo, a real peasant woman. The relationship between Don Quixote and Sancho, based on the contrast between idealism and realism, is the heart of the novel.',
      order: 1,
    },
    {
      id: 'sub-zeus-01',
      entryId: 'entry-zeus',
      title_es: 'Rey del Olimpo',
      title_en: 'King of Olympus',
      content_es: 'Zeus gobernaba el monte Olimpo con autoridad absoluta, presidiendo el consejo de los doce dioses olímpicos. Su poder era tan vasto que ningún dios se atrevía a desafiarlo abiertamente. Sin embargo, su autoridad no era tiránica: respetaba el destino (Moira) y las leyes no escritas del cosmos. Desde su trono observaba las acciones de los mortales y dispensaba justicia, castigando la arrogancia (hybris) y recompensando la piedad.',
      content_en: 'Zeus ruled Mount Olympus with absolute authority, presiding over the council of the twelve Olympian gods. His power was so vast that no god dared to openly challenge him. However, his authority was not tyrannical: he respected fate (Moira) and the unwritten laws of the cosmos. From his throne he observed the actions of mortals and dispensed justice, punishing arrogance (hubris) and rewarding piety.',
      order: 0,
    },
    {
      id: 'sub-zeus-02',
      entryId: 'entry-zeus',
      title_es: 'Principales mitos',
      title_en: 'Principal myths',
      content_es: 'Entre los mitos más destacados de Zeus se encuentran su enfrentamiento con Tifón, el monstruo de cien cabezas que amenazó el Olimpo; el castigo de Prometeo por robar el fuego para los humanos; el rapto de Europa transformado en toro blanco; su metamorfosis en lluvia de oro para visitar a Dánae; y el juicio de Paris, donde debió elegir a la diosa más bella, desencadenando la guerra de Troya. Cada mito revela diferentes aspectos de su carácter complejo.',
      content_en: 'Among the most notable myths of Zeus are his confrontation with Typhon, the hundred-headed monster that threatened Olympus; the punishment of Prometheus for stealing fire for humans; the abduction of Europa transformed into a white bull; his metamorphosis into a shower of gold to visit Danaë; and the Judgment of Paris, where he had to choose the most beautiful goddess, triggering the Trojan War. Each myth reveals different aspects of his complex character.',
      order: 1,
    },
    {
      id: 'sub-ra-01',
      entryId: 'entry-ra',
      title_es: 'Dios del Sol',
      title_en: 'Sun God',
      content_es: 'Ra era el dios solar por excelencia, representado con cabeza de halcón y el disco solar sobre su cabeza. Cada día realizaba el viaje celestial en su barca, iluminando y dando vida al mundo. Al atardecer, descendía al inframundo donde rejuvenecía para renacer al amanecer. Se le atribuía la creación de todos los seres vivos y el mantenimiento del orden cósmico (Maat). Su ojo, el ojo de Ra, era un símbolo de poder destructivo y protector a la vez.',
      content_en: 'Ra was the sun god par excellence, depicted with a falcon head and the solar disk above his head. Each day he made the celestial journey in his barque, illuminating and giving life to the world. At dusk, he descended into the underworld where he rejuvenated to be reborn at dawn. He was credited with the creation of all living beings and the maintenance of cosmic order (Maat). His eye, the Eye of Ra, was a symbol of both destructive and protective power.',
      order: 0,
    },
    {
      id: 'sub-ra-02',
      entryId: 'entry-ra',
      title_es: 'Culto y templos',
      title_en: 'Cult and temples',
      content_es: 'El principal centro de culto a Ra fue Heliópolis, donde los sacerdotes desarrollaron una compleja teología solar. El templo de Ra en Heliópolis, conocido como el "Castillo del Fénix", era uno de los más ricos e influyentes de Egipto. Los faraones de la V dinastía (2494-2345 a.C.) construyeron templos solares dedicados a Ra, y más tarde, durante el Imperio Nuevo, el culto a Amón-Ra en Tebas se convirtió en el centro religioso y político del país.',
      content_en: "The main cult center of Ra was Heliopolis, where priests developed a complex solar theology. The temple of Ra in Heliopolis, known as the 'Castle of the Phoenix,' was one of the richest and most influential in Egypt. The pharaohs of the 5th Dynasty (2494-2345 BC) built solar temples dedicated to Ra, and later, during the New Kingdom, the cult of Amun-Ra in Thebes became the religious and political center of the country.",
      order: 1,
    },
    {
      id: 'sub-odin-01',
      entryId: 'entry-odin',
      title_es: 'Padre de todos',
      title_en: 'Father of all',
      content_es: 'Odín es el padre de todos los dioses nórdicos y el creador de los primeros humanos, Ask y Embla, junto con sus hermanos Vili y Vé. Es el dios principal de los Æsir, una de las dos familias divinas de la mitología nórdica (junto con los Vanir). Su palacio en Asgard se llama Valaskjálf, donde se encuentra su trono Hlidskjalf. Desde allí puede ver todo lo que ocurre en los nueve mundos.',
      content_en: 'Odin is the father of all Norse gods and the creator of the first humans, Ask and Embla, together with his brothers Vili and Vé. He is the chief god of the Æsir, one of the two divine families of Norse mythology (alongside the Vanir). His palace in Asgard is called Valaskjálf, where his throne Hlidskjalf is located. From there he can see everything that happens in the nine worlds.',
      order: 0,
    },
    {
      id: 'sub-odin-02',
      entryId: 'entry-odin',
      title_es: 'La búsqueda de sabiduría',
      title_en: 'The quest for wisdom',
      content_es: 'La búsqueda incansable de conocimiento define a Odín. Sacrificó su ojo derecho en el pozo de Mimir para beber de sus aguas y obtener sabiduría universal. También se colgó del Yggdrasil durante nueve noches, herido por su propia lanza, para descubrir el secreto de las runas. Aprendió la magia seiðr de la diosa Freyja, una práctica asociada con la adivinación y el cambio del destino. Sus cuervos Huginn (Pensamiento) y Muninn (Memoria) volaban diariamente por el mundo para contarle todo lo que veían.',
      content_en: "Odin's relentless quest for knowledge defines him. He sacrificed his right eye at Mimir's well to drink from its waters and obtain universal wisdom. He also hung himself from Yggdrasil for nine nights, wounded by his own spear, to discover the secret of the runes. He learned seiðr magic from the goddess Freyja, a practice associated with divination and changing fate. His ravens Huginn (Thought) and Muninn (Memory) flew daily through the world to tell him everything they saw.",
      order: 1,
    },
    {
      id: 'sub-imperio-01',
      entryId: 'entry-imperio-romano',
      title_es: 'Fundación y expansión',
      title_en: 'Foundation and expansion',
      content_es: 'Desde su fundación mítica en el 753 a.C., Roma pasó de ser una pequeña aldea en el Lacio a dominar toda la península itálica. Durante la República, Roma derrotó a Cartago en las Guerras Púnicas (264-146 a.C.), conquistó Grecia, Hispania, la Galia y el norte de África. Julio César expandió el territorio hasta Britania y la Galia. Con Augusto comenzó el Imperio y la Pax Romana, un período de paz que facilitó la romanización de Europa, el norte de África y Oriente Medio.',
      content_en: 'From its mythical foundation in 753 BC, Rome went from a small village in Latium to dominating the entire Italian peninsula. During the Republic, Rome defeated Carthage in the Punic Wars (264-146 BC), conquered Greece, Hispania, Gaul, and North Africa. Julius Caesar expanded the territory to Britain and Gaul. With Augustus began the Empire and the Pax Romana, a period of peace that facilitated the Romanization of Europe, North Africa, and the Middle East.',
      order: 0,
    },
    {
      id: 'sub-imperio-02',
      entryId: 'entry-imperio-romano',
      title_es: 'Caída y legado',
      title_en: 'Fall and legacy',
      content_es: 'La caída del Imperio Romano Occidental en el 476 d.C. fue el resultado de siglos de crisis internas y presiones externas. La división del imperio por Teodosio, las invasiones bárbaras (visigodos, vándalos, hunos), la crisis económica y la corrupción política contribuyeron a su colapso. Sin embargo, el legado romano perdura: el latín dio origen a las lenguas romances, el derecho romano es base de los sistemas legales occidentales, y las ciudades, calzadas y acueductos romanos sentaron las bases de la infraestructura europea.',
      content_en: 'The fall of the Western Roman Empire in 476 AD was the result of centuries of internal crises and external pressures. The division of the empire by Theodosius, barbarian invasions (Visigoths, Vandals, Huns), economic crisis, and political corruption contributed to its collapse. However, the Roman legacy endures: Latin gave rise to the Romance languages, Roman law is the basis of Western legal systems, and Roman cities, roads, and aqueducts laid the foundations of European infrastructure.',
      order: 1,
    },
    {
      id: 'sub-budismo-01',
      entryId: 'entry-budismo',
      title_es: 'Las Cuatro Nobles Verdades',
      title_en: 'The Four Noble Truths',
      content_es: 'Las Cuatro Nobles Verdades constituyen el fundamento de las enseñanzas budistas. La Primera Verdad reconoce la existencia del sufrimiento (dukkha) en todas sus formas: físico, emocional y existencial. La Segunda Verdad identifica su origen: el deseo, el apego y la ignorancia. La Tercera Verdad afirma que es posible alcanzar el cese del sufrimiento (nirvana). La Cuarta Verdad describe el Noble Óctuple Sendero como el camino práctico hacia la liberación.',
      content_en: 'The Four Noble Truths constitute the foundation of Buddhist teachings. The First Truth recognizes the existence of suffering (dukkha) in all its forms: physical, emotional, and existential. The Second Truth identifies its origin: desire, attachment, and ignorance. The Third Truth affirms that it is possible to attain the cessation of suffering (nirvana). The Fourth Truth describes the Noble Eightfold Path as the practical path to liberation.',
      order: 0,
    },
    {
      id: 'sub-budismo-02',
      entryId: 'entry-budismo',
      title_es: 'Expansión del budismo',
      title_en: 'Expansion of Buddhism',
      content_es: 'El budismo se expandió desde la India por toda Asia a través de dos rutas principales: la ruta terrestre de la Seda, que lo llevó a Asia Central, China, Corea y Japón; y la ruta marítima, que lo difundió por el sudeste asiático. El emperador Ashoka (siglo III a.C.) fue fundamental en su expansión al enviar misioneros a Sri Lanka, Birmania y otros territorios. En cada cultura, el budismo se adaptó combinándose con tradiciones locales, dando origen a formas diversas como el budismo zen, la Tierra Pura y el budismo tibetano.',
      content_en: 'Buddhism spread from India across Asia through two main routes: the overland Silk Road, which took it to Central Asia, China, Korea, and Japan; and the maritime route, which spread it throughout Southeast Asia. Emperor Ashoka (3rd century BC) was instrumental in its expansion by sending missionaries to Sri Lanka, Burma, and other territories. In each culture, Buddhism adapted by combining with local traditions, giving rise to diverse forms such as Zen Buddhism, Pure Land, and Tibetan Buddhism.',
      order: 1,
    },
    {
      id: 'sub-mona-01',
      entryId: 'entry-mona-lisa',
      title_es: 'Enigma de la sonrisa',
      title_en: 'Enigma of the smile',
      content_es: 'La sonrisa de la Mona Lisa es el elemento más fascinante y debatido del cuadro. Leonardo empleó la técnica del sfumato, difuminando los bordes de los labios y los ojos para crear una expresión ambigua que cambia según la iluminación y el ángulo de visión. Estudios científicos han demostrado que al mirar directamente la boca, la sonrisa parece desvanecerse, mientras que al mirar los ojos o el resto del rostro, la sonrisa se percibe más claramente, un fenómeno relacionado con la visión periférica.',
      content_en: "The smile of the Mona Lisa is the most fascinating and debated element of the painting. Leonardo employed the sfumato technique, blurring the edges of the lips and eyes to create an ambiguous expression that changes depending on lighting and viewing angle. Scientific studies have shown that when looking directly at the mouth, the smile seems to fade, while when looking at the eyes or the rest of the face, the smile is perceived more clearly, a phenomenon related to peripheral vision.",
      order: 0,
    },
    {
      id: 'sub-mona-02',
      entryId: 'entry-mona-lisa',
      title_es: 'Historia del cuadro',
      title_en: 'History of the painting',
      content_es: 'Leonardo da Vinci comenzó la Mona Lisa en 1503 y continuó trabajando en ella hasta 1519, el año de su muerte. Nunca entregó el cuadro a su cliente, Francesco del Giocondo, sino que lo conservó consigo, llevándolo a Francia cuando Francisco I lo invitó. Tras la muerte de Leonardo, el rey adquirió la obra. Durante la Revolución Francesa, el cuadro fue trasladado al Louvre. En 1911 fue robado por Vincenzo Peruggia, un exempleado del museo, que lo mantuvo oculto en su piso en París durante dos años antes de intentar venderlo en Florencia.',
      content_en: 'Leonardo da Vinci began the Mona Lisa in 1503 and continued working on it until 1519, the year of his death. He never delivered the painting to his client, Francesco del Giocondo, but kept it with him, taking it to France when Francis I invited him. After Leonardo\'s death, the king acquired the work. During the French Revolution, the painting was moved to the Louvre. In 1911 it was stolen by Vincenzo Peruggia, a former museum employee, who kept it hidden in his Paris apartment for two years before attempting to sell it in Florence.',
      order: 1,
    },
    {
      id: 'sub-inconsciente-01',
      entryId: 'entry-inconsciente-colectivo',
      title_es: 'Arquetipos universales',
      title_en: 'Universal archetypes',
      content_es: 'Los arquetipos son patrones universales de pensamiento y comportamiento que residen en el inconsciente colectivo. Jung identificó varios arquetipos fundamentales: el Yo (Self), que representa la totalidad de la psique; la Sombra, los aspectos reprimidos de nuestra personalidad; el Anima/Animus, las cualidades del género opuesto en cada persona; el Héroe, que enfrenta desafíos y se transforma; el Viejo Sabio, fuente de guía espiritual; y la Gran Madre, símbolo de nutrición y protección. Estos arquetipos se manifiestan en sueños, mitos y obras de arte de todas las épocas y culturas.',
      content_en: 'Archetypes are universal patterns of thought and behavior that reside in the collective unconscious. Jung identified several fundamental archetypes: the Self, representing the totality of the psyche; the Shadow, the repressed aspects of our personality; the Anima/Animus, the qualities of the opposite gender in each person; the Hero, who faces challenges and transforms; the Wise Old Man, a source of spiritual guidance; and the Great Mother, a symbol of nourishment and protection. These archetypes manifest in dreams, myths, and works of art from all eras and cultures.',
      order: 0,
    },
    {
      id: 'sub-inconsciente-02',
      entryId: 'entry-inconsciente-colectivo',
      title_es: 'Crítica e influencia',
      title_en: 'Criticism and influence',
      content_es: 'El concepto de inconsciente colectivo ha sido ampliamente criticado por su falta de base empírica y su carácter especulativo. Los psicólogos conductistas y cognitivos cuestionan la existencia de contenidos psíquicos heredados, prefiriendo explicaciones basadas en la transmisión cultural y el aprendizaje. No obstante, la idea ha tenido una enorme influencia en campos como la antropología (Campbell, Eliade), la crítica literaria (Northrop Frye), los estudios de religión comparada y la psicoterapia. El trabajo de Jung inspiró la creación del Inventario de Arquetipos de Pearson y el estudio de los arquetipos en el marketing y la narrativa contemporánea.',
      content_en: 'The concept of the collective unconscious has been widely criticized for its lack of empirical basis and speculative nature. Behavioral and cognitive psychologists question the existence of inherited psychic contents, preferring explanations based on cultural transmission and learning. Nonetheless, the idea has had enormous influence in fields such as anthropology (Campbell, Eliade), literary criticism (Northrop Frye), comparative religion studies, and psychotherapy. Jung\'s work inspired the creation of the Pearson-Marr Archetype Indicator and the study of archetypes in marketing and contemporary narrative.',
      order: 1,
    },
  ] as SeedSubsection[],
}
