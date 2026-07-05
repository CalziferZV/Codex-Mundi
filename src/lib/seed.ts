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
  ] as SeedSubsection[],
}
