import type { SeedEntry, SeedSubsection } from './seed'

const now = '2026-03-15T00:00:00Z'

export const newReligionEntries: SeedEntry[] = [
  // ===== CHRISTIANITY =====
  { id: 'entry-christianity-origins', title_es: 'Orígenes del Cristianismo', title_en: 'Origins of Christianity', slug: 'origenes-cristianismo',
    content_es: `El cristianismo nació en el siglo I d.C. en la provincia romana de Judea como un movimiento dentro del judaísmo. Su figura central es Jesús de Nazaret, un predicador judío cuyas enseñanzas y resurrección, según la fe cristiana, lo identifican como el Mesías (Cristo) y el Hijo de Dios.

Los evangelios del Nuevo Testamento (Mateo, Marcos, Lucas y Juan) narran la vida, enseñanzas, muerte y resurrección de Jesús. El apóstol Pablo de Tarso fue fundamental en la expansión del cristianismo más allá de las comunidades judías, estableciendo iglesias en todo el Mediterráneo oriental y formulando la teología cristiana.

El cristianismo creció a pesar de la persecución romana hasta que el emperador Constantino legalizó la religión con el Edicto de Milán (313 d.C.). Teodosio I la convirtió en religión oficial del Imperio Romano (380 d.C.). Los concilios ecuménicos (Nicea 325, Calcedonia 451) definieron la doctrina trinitaria y cristológica. El cristianismo se dividió en 1054 entre la Iglesia Católica Romana y la Ortodoxa Oriental. Hoy es la religión más grande del mundo con aproximadamente 2.4 mil millones de seguidores.`,
    content_en: `Christianity was born in the 1st century AD in the Roman province of Judea as a movement within Judaism. Its central figure is Jesus of Nazareth, a Jewish preacher whose teachings and resurrection, according to Christian faith, identify him as the Messiah (Christ) and Son of God.

The New Testament gospels (Matthew, Mark, Luke, and John) narrate the life, teachings, death, and resurrection of Jesus. The apostle Paul of Tarsus was instrumental in spreading Christianity beyond Jewish communities, establishing churches throughout the eastern Mediterranean and formulating Christian theology.

Christianity grew despite Roman persecution until Emperor Constantine legalized the religion with the Edict of Milan (313 AD). Theodosius I made it the official religion of the Roman Empire (380 AD). Ecumenical councils (Nicaea 325, Chalcedon 451) defined Trinitarian and Christological doctrine. Christianity split in 1054 between the Roman Catholic and Eastern Orthodox churches. Today it is the world's largest religion with approximately 2.4 billion followers.`,
    excerpt_es: 'De una secta judía a la religión más grande del mundo: historia del cristianismo.', excerpt_en: 'From a Jewish sect to the global faith: history of Christianity.', categoryId: 'cat-christianity', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-catholic-church', title_es: 'Iglesia Católica', title_en: 'Catholic Church', slug: 'iglesia-catolica',
    content_es: `La Iglesia Católica Romana es la institución cristiana más grande del mundo, con más de 1.3 mil millones de miembros. Su sede es la Ciudad del Vaticano, un estado independiente dentro de Roma, liderado por el Papa, obispo de Roma y sucesor de San Pedro según la tradición católica.

La estructura jerárquica incluye al Papa, cardenales, arzobispos, obispos y sacerdotes. Los sacramentos (bautismo, eucaristía, confirmación, penitencia, etc.) son centrales en la vida católica. La doctrina se basa en la Biblia y la Tradición, interpretadas por el Magisterio de la Iglesia.

La Iglesia Católica ha desempeñado un papel central en la historia de Occidente: preservó el conocimiento clásico durante la Edad Media, fundó las primeras universidades, inspiró el arte renacentista y barroco, y participó en la colonización de América. Concilios como el Vaticano II (1962-1965) modernizaron la Iglesia. Figuras como Francisco de Asís, Teresa de Ávila, Juan Pablo II y el Papa Francisco han marcado su historia. La Iglesia enfrenta desafíos contemporáneos como la secularización, los escándalos de abusos y el diálogo interreligioso.`,
    content_en: `The Roman Catholic Church is the world's largest Christian institution, with over 1.3 billion members. Its seat is Vatican City, an independent state within Rome, led by the Pope, bishop of Rome and successor of Saint Peter according to Catholic tradition.

The hierarchical structure includes the Pope, cardinals, archbishops, bishops, and priests. The sacraments (baptism, Eucharist, confirmation, penance, etc.) are central to Catholic life. Doctrine is based on Scripture and Tradition, interpreted by the Church's Magisterium.

The Catholic Church has played a central role in Western history: it preserved classical knowledge during the Middle Ages, founded the first universities, inspired Renaissance and Baroque art, and participated in the colonization of the Americas. Councils like Vatican II (1962-1965) modernized the Church. Figures like Francis of Assisi, Teresa of Ávila, John Paul II, and Pope Francis have marked its history. The Church faces contemporary challenges such as secularization, abuse scandals, and interreligious dialogue.`,
    excerpt_es: 'La institución religiosa más grande de la historia: doctrina, estructura y legado cultural.', excerpt_en: "The largest religious institution in history: doctrine, structure, and cultural legacy.", categoryId: 'cat-christianity', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-orthodox-church', title_es: 'Iglesia Ortodoxa', title_en: 'Orthodox Church', slug: 'iglesia-ortodoxa',
    content_es: `La Iglesia Ortodoxa, oficialmente la Iglesia Católica Ortodoxa, es una comunión de iglesias cristianas autocéfalas (autogobernadas) que comparten la misma fe, liturgia y tradición. Se separó de la Iglesia Católica Romana en el Cisma de Oriente (1054), principalmente por diferencias teológicas sobre el Filioque y la autoridad papal.

Las iglesias ortodoxas más importantes incluyen el Patriarcado Ecuménico de Constantinopla, el Patriarcado de Moscú, el Patriarcado de Alejandría, el Patriarcado de Antioquía y las iglesias nacionales de Grecia, Serbia, Bulgaria, Rumania y Georgia. El Patriarca de Constantinopla tiene primacía de honor pero no autoridad sobre las demás.

La tradición ortodoxa se caracteriza por una rica liturgia bizantina, iconografía sacra, el uso del griego y las lenguas eslavas en el culto, la importancia del monacato (Monte Athos), y un énfasis en la teología mística y la deificación (theosis). La Pascua ortodoxa, calculada según el calendario juliano, es la celebración central. La ortodoxia tiene aproximadamente 260 millones de fieles, principalmente en Europa Oriental y Rusia.`,
    content_en: `The Orthodox Church, officially the Orthodox Catholic Church, is a communion of autocephalous (self-governing) Christian churches sharing the same faith, liturgy, and tradition. It separated from the Roman Catholic Church in the Great Schism (1054), mainly due to theological differences over the Filioque and papal authority.

The most important Orthodox churches include the Ecumenical Patriarchate of Constantinople, the Patriarchate of Moscow, the Patriarchate of Alexandria, the Patriarchate of Antioch, and the national churches of Greece, Serbia, Bulgaria, Romania, and Georgia. The Patriarch of Constantinople has primacy of honor but no authority over the others.

Orthodox tradition is characterized by rich Byzantine liturgy, sacred iconography, use of Greek and Slavic languages in worship, importance of monasticism (Mount Athos), and emphasis on mystical theology and deification (theosis). Orthodox Easter, calculated according to the Julian calendar, is the central celebration. Orthodoxy has approximately 260 million adherents, mainly in Eastern Europe and Russia.`,
    excerpt_es: 'La tradición cristiana oriental: liturgia bizantina, iconos y la herencia de la cristiandad ortodoxa.', excerpt_en: 'The Eastern Christian tradition: Byzantine liturgy, icons, and Orthodox Christian heritage.', categoryId: 'cat-christianity', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== ISLAM =====
  { id: 'entry-islam-origins', title_es: 'Orígenes del Islam', title_en: 'Origins of Islam', slug: 'origenes-islam',
    content_es: `El Islam surgió en el siglo VII en la Península Arábiga. Su fundador, Mahoma (Muhammad), nació en La Meca alrededor del 570 d.C. A los 40 años, según la tradición islámica, recibió la primera revelación del Arcángel Gabriel, que continuó durante 23 años y fue recopilada en el Corán, el libro sagrado del Islam.

Mahoma predicó el monoteísmo absoluto (tawhid) y la sumisión a Alá (Dios). Enfrentó persecución en La Meca y emigró a Medina en el 622 (la Hégira, que marca el inicio del calendario islámico). En Medina estableció la primera comunidad islámica (ummah). En el 630 regresó a La Meca, purificando la Kaaba de ídolos y estableciendo el Islam como religión dominante en Arabia.

Los Cinco Pilares del Islam son: la declaración de fe (shahada), la oración cinco veces al día (salat), el ayuno durante Ramadán (sawm), la limosna obligatoria (zakat) y la peregrinación a La Meca (hach). El Islam se divide en dos ramas principales: suní (85%) y chií (15%), surgidas del debate sobre la sucesión de Mahoma. Es la segunda religión más grande del mundo con aproximadamente 1.9 mil millones de seguidores.`,
    content_en: `Islam emerged in the 7th century in the Arabian Peninsula. Its founder, Muhammad, was born in Mecca around 570 AD. At age 40, according to Islamic tradition, he received the first revelation from the Archangel Gabriel, which continued for 23 years and was compiled in the Quran, Islam's holy book.

Muhammad preached absolute monotheism (tawhid) and submission to Allah (God). He faced persecution in Mecca and migrated to Medina in 622 (the Hijra, marking the beginning of the Islamic calendar). In Medina he established the first Muslim community (ummah). In 630 he returned to Mecca, purifying the Kaaba of idols and establishing Islam as the dominant religion in Arabia.

The Five Pillars of Islam are: the declaration of faith (shahada), prayer five times daily (salat), fasting during Ramadan (sawm), obligatory almsgiving (zakat), and pilgrimage to Mecca (hajj). Islam divides into two main branches: Sunni (85%) and Shia (15%), arising from the debate over Muhammad's succession. It is the world's second-largest religion with approximately 1.9 billion followers.`,
    excerpt_es: 'El monoteísmo absoluto: Mahoma, el Corán y el nacimiento de la civilización islámica.', excerpt_en: 'Absolute monotheism: Muhammad, the Quran, and the birth of Islamic civilization.', categoryId: 'cat-islam', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-islamic-golden-age', title_es: 'Edad de Oro del Islam', title_en: 'Islamic Golden Age', slug: 'edad-oro-islam',
    content_es: `La Edad de Oro del Islam (siglos VIII-XIII) fue un período de florecimiento cultural, científico y económico en el mundo islámico. Bagdad, capital del califato abasí, se convirtió en el centro intelectual del mundo con la Casa de la Sabiduría (Bayt al-Hikma), donde eruditos de diferentes culturas traducían y desarrollaban el conocimiento clásico.

Científicos como Al-Juarismi desarrollaron el álgebra (cuyo nombre deriva de su libro Al-Kitab al-Mukhtasar). Alhacén realizó contribuciones fundamentales a la óptica. Avicena (Ibn Sina) escribió el Canon de la Medicina, texto médico de referencia en Europa hasta el siglo XVII. Averroes (Ibn Rushd) comentó a Aristóteles, influyendo en la escolástica europea.

Los árabes preservaron y expandieron el conocimiento griego, persa e indio en matemáticas, astronomía, medicina, química y filosofía. Avances en agricultura, comercio y navegación transformaron la economía global. La poesía de Rumi, las Mil y Una Noches, la arquitectura de la Alhambra y la mezquita de Córdoba reflejan la riqueza cultural de esta civilización que unió Oriente y Occidente.`,
    content_en: `The Islamic Golden Age (8th-13th centuries) was a period of cultural, scientific, and economic flourishing in the Islamic world. Baghdad, capital of the Abbasid caliphate, became the world's intellectual center with the House of Wisdom (Bayt al-Hikma), where scholars from different cultures translated and developed classical knowledge.

Scientists like Al-Khwarizmi developed algebra (whose name derives from his book Al-Kitab al-Mukhtasar). Alhazen made fundamental contributions to optics. Avicenna (Ibn Sina) wrote the Canon of Medicine, a medical reference in Europe until the 17th century. Averroes (Ibn Rushd) commented on Aristotle, influencing European scholasticism.

Arabs preserved and expanded Greek, Persian, and Indian knowledge in mathematics, astronomy, medicine, chemistry, and philosophy. Advances in agriculture, trade, and navigation transformed the global economy. Rumi's poetry, One Thousand and One Nights, the Alhambra architecture, and the Córdoba mosque reflect the cultural richness of this civilization that bridged East and West.`,
    excerpt_es: 'El florecimiento cultural y científico del mundo islámico: de Bagdad a la Alhambra.', excerpt_en: 'The cultural and scientific flowering of the Islamic world: from Baghdad to the Alhambra.', categoryId: 'cat-islam', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== JUDAISM =====
  { id: 'entry-judaism-history', title_es: 'Historia del Judaísmo', title_en: 'History of Judaism', slug: 'historia-judaismo',
    content_es: `El judaísmo es la religión monoteísta más antigua de las tres grandes religiones abrahámicas. Sus orígenes se remontan a Abraham (c. 1800 a.C.), considerado el patriarca del pueblo judío. La Torá (los cinco libros de Moisés) contiene las leyes, enseñanzas e historia fundacional del judaísmo.

Moisés lideró a los israelitas fuera de Egipto (el Éxodo) y recibió los Diez Mandamientos en el Monte Sinaí, estableciendo la alianza (berit) entre Dios y su pueblo. El Templo de Jerusalén, construido por Salomón, fue el centro del culto judío hasta su destrucción por los romanos en el 70 d.C., que llevó a la diáspora judía.

A pesar de la dispersión, el judaísmo mantuvo su identidad a través de la ley oral (Mishná, Talmud), las tradiciones comunitarias y la resistencia a la asimilación. El judaísmo rabínico desarrolló la halajá (ley judía) y la liturgia. El sionismo, surgido en el siglo XIX, impulsó el retorno a la Tierra de Israel, culminando en la fundación del Estado de Israel en 1948. El Holocausto (Shoá) exterminó a seis millones de judíos. Hoy hay aproximadamente 15 millones de judíos en el mundo.`,
    content_en: `Judaism is the oldest monotheistic religion among the three great Abrahamic faiths. Its origins trace back to Abraham (c. 1800 BC), considered the patriarch of the Jewish people. The Torah (the five books of Moses) contains the laws, teachings, and foundational history of Judaism.

Moses led the Israelites out of Egypt (the Exodus) and received the Ten Commandments at Mount Sinai, establishing the covenant (berit) between God and his people. Solomon's Temple in Jerusalem was the center of Jewish worship until its destruction by the Romans in 70 AD, which led to the Jewish diaspora.

Despite dispersion, Judaism maintained its identity through oral law (Mishnah, Talmud), community traditions, and resistance to assimilation. Rabbinic Judaism developed halakha (Jewish law) and liturgy. Zionism, emerging in the 19th century, promoted return to the Land of Israel, culminating in the founding of the State of Israel in 1948. The Holocaust (Shoah) exterminated six million Jews. Today there are approximately 15 million Jews worldwide.`,
    excerpt_es: 'La religión monoteísta más antigua: Abraham, Moisés, la Torá y la diáspora judía.', excerpt_en: 'The oldest monotheistic religion: Abraham, Moses, the Torah, and the Jewish diaspora.', categoryId: 'cat-judaism', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== BUDDHISM =====
  { id: 'entry-buddhism-teachings', title_es: 'Enseñanzas de Buda', title_en: 'Teachings of the Buddha', slug: 'ensenanzas-buda',
    content_es: `El budismo es una religión y filosofía espiritual fundada por Siddhartha Gautama (Buda) en el noreste de la India en el siglo V a.C. Buda, que significa "el despierto" o "el iluminado", alcanzó la iluminación (nirvana) tras años de búsqueda espiritual bajo el árbol Bodhi en Bodh Gaya.

Las Cuatro Nobles Verdades son la base del budismo: 1) la vida es sufrimiento (dukkha), 2) el sufrimiento surge del deseo y el apego (tanha), 3) es posible cesar el sufrimiento alcanzando el nirvana, 4) el camino hacia el cese es el Óctuple Sendero: visión correcta, intención correcta, habla correcta, acción correcta, medio de vida correcto, esfuerzo correcto, atención plena correcta y concentración correcta.

El budismo se divide en tres ramas principales: Theravada (la tradición de los ancianos, predominante en Sri Lanka y el sudeste asiático), Mahayana (Gran Vehículo, en China, Japón y Corea) y Vajrayana (budismo tántrico o tibetano). El budismo enseña la no violencia, la compasión (karuna), la atención plena (mindfulness) y la impermanencia de todas las cosas. Tiene aproximadamente 500 millones de seguidores en todo el mundo.`,
    content_en: `Buddhism is a religion and spiritual philosophy founded by Siddhartha Gautama (the Buddha) in northeastern India in the 5th century BC. Buddha, meaning "the awakened one" or "the enlightened one," attained enlightenment (nirvana) after years of spiritual seeking under the Bodhi tree in Bodh Gaya.

The Four Noble Truths are the foundation of Buddhism: 1) life is suffering (dukkha), 2) suffering arises from desire and attachment (tanha), 3) it is possible to cease suffering by attaining nirvana, 4) the path to cessation is the Noble Eightfold Path: right view, right intention, right speech, right action, right livelihood, right effort, right mindfulness, and right concentration.

Buddhism divides into three main branches: Theravada (the tradition of the elders, predominant in Sri Lanka and Southeast Asia), Mahayana (Great Vehicle, in China, Japan, and Korea), and Vajrayana (Tantric or Tibetan Buddhism). Buddhism teaches non-violence, compassion (karuna), mindfulness, and the impermanence of all things. It has approximately 500 million followers worldwide.`,
    excerpt_es: 'El camino del despertar: las enseñanzas de Buda, las Cuatro Nobles Verdades y el Óctuple Sendero.', excerpt_en: 'The path of awakening: Buddhist teachings, the Four Noble Truths, and the Eightfold Path.', categoryId: 'cat-buddhism', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-zen-buddhism', title_es: 'Budismo Zen', title_en: 'Zen Buddhism', slug: 'budismo-zen',
    content_es: `El Zen es una escuela del budismo Mahayana que se originó en China durante el siglo VI como Chan (de dhyana, meditación en sánscrito) y se desarrolló en Japón a partir del siglo XII. Enfatiza la meditación directa (zazen), la experiencia intuitiva de la iluminación (satori) sobre el estudio de textos.

Bodhidharma, un monje indio, es considerado el fundador del Chan/Zen. El Zen se divide en las escuelas Rinzai (que usa koans, acertijos paradójicos como "¿cuál es el sonido de una mano aplaudiendo?") y Soto (que enfatiza el zazen sentado sin objeto de meditación). Dogen Zenji, fundador de la escuela Soto japonesa, escribió el Shobogenzo, obra maestra de la literatura zen.

El Zen ha influido profundamente en la cultura japonesa: la ceremonia del té (chanoyu), los jardines de rocas (karesansui), la caligrafía (shodo), la pintura sumi-e, el haiku (Basho), el kendo y el tiro con arco zen (kyudo). En Occidente, el Zen fue popularizado por D.T. Suzuki y ha influido en el arte, la psicología (Erich Fromm), la literatura (Jack Kerouac) y la atención plena contemporánea.`,
    content_en: `Zen is a school of Mahayana Buddhism that originated in China during the 6th century as Chan (from dhyana, meditation in Sanskrit) and developed in Japan from the 12th century. It emphasizes direct meditation (zazen), intuitive experience of enlightenment (satori) over textual study.

Bodhidharma, an Indian monk, is considered the founder of Chan/Zen. Zen divides into the Rinzai school (using koans, paradoxical riddles like "what is the sound of one hand clapping?") and Soto (emphasizing sitting zazen without meditation object). Dogen Zenji, founder of the Japanese Soto school, wrote the Shobogenzo, a masterpiece of Zen literature.

Zen has profoundly influenced Japanese culture: the tea ceremony (chanoyu), rock gardens (karesansui), calligraphy (shodo), sumi-e painting, haiku (Basho), kendo, and Zen archery (kyudo). In the West, Zen was popularized by D.T. Suzuki and has influenced art, psychology (Erich Fromm), literature (Jack Kerouac), and contemporary mindfulness.`,
    excerpt_es: 'La escuela de la meditación directa: zazen, koans y la búsqueda de la iluminación intuitiva.', excerpt_en: 'The school of direct meditation: zazen, koans, and the pursuit of intuitive enlightenment.', categoryId: 'cat-buddhism', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== HINDUISM =====
  { id: 'entry-hinduism-overview', title_es: 'Visión General del Hinduismo', title_en: 'Overview of Hinduism', slug: 'vision-general-hinduismo',
    content_es: `El hinduismo es la religión más antigua del mundo aún practicada, con orígenes que se remontan a más de 4,000 años en el valle del Indo. No tiene un fundador único, sino que es una síntesis de diversas tradiciones, creencias y prácticas desarrolladas en el subcontinente indio.

Los textos sagrados del hinduismo incluyen los Vedas (los más antiguos), los Upanishads (textos filosóficos), el Ramayana y el Mahabharata (épicas que incluyen el Bhagavad Gita), y los Puranas. El sistema de castas (varna) y las cuatro etapas de la vida (ashramas) han estructurado tradicionalmente la sociedad hindú.

El hinduismo concibe la realidad última como Brahman (la conciencia cósmica universal) y el alma individual como Atman. La liberación (moksha) del ciclo de reencarnaciones (samsara) se alcanza mediante el karma (acción), el bhakti (devoción), el jnana (conocimiento) y el yoga (disciplina espiritual). La Trimurti (Brahma creador, Vishnu preservador, Shiva destructor) representa los aspectos divinos. El hinduismo tiene aproximadamente 1.2 mil millones de seguidores, principalmente en India, Nepal y Bali.`,
    content_en: `Hinduism is the oldest religion in the world still practiced, with origins dating back over 4,000 years in the Indus Valley. It has no single founder but is a synthesis of diverse traditions, beliefs, and practices developed in the Indian subcontinent.

Sacred texts of Hinduism include the Vedas (oldest), the Upanishads (philosophical texts), the Ramayana and Mahabharata (epics including the Bhagavad Gita), and the Puranas. The caste system (varna) and four stages of life (ashramas) have traditionally structured Hindu society.

Hinduism conceives ultimate reality as Brahman (universal cosmic consciousness) and the individual soul as Atman. Liberation (moksha) from the cycle of reincarnation (samsara) is attained through karma (action), bhakti (devotion), jnana (knowledge), and yoga (spiritual discipline). The Trimurti (Brahma creator, Vishnu preserver, Shiva destroyer) represents divine aspects. Hinduism has approximately 1.2 billion followers, mainly in India, Nepal, and Bali.`,
    excerpt_es: 'La religión más antigua del mundo: Vedas, dioses, karma y el ciclo de reencarnaciones.', excerpt_en: "The world's oldest religion: Vedas, gods, karma, and the cycle of reincarnation.", categoryId: 'cat-hinduism', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== TAOISM =====
  { id: 'entry-taoism-philosophy', title_es: 'Filosofía Taoísta', title_en: 'Taoist Philosophy', slug: 'filosofia-taoista',
    content_es: `El taoísmo es una tradición filosófica y religiosa china que enfatiza vivir en armonía con el Tao (el Camino), la fuerza fundamental que fluye a través de toda la existencia. Sus textos fundacionales son el Tao Te Ching de Lao Tse (siglo VI a.C.) y el Zhuangzi de Zhuang Zhou.

El Tao Te Ching, con solo 5,000 caracteres, es uno de los libros más traducidos de la literatura universal. Enseña el wu wei (no-acción o acción sin esfuerzo), la simplicidad, la espontaneidad y la humildad. El agua, que fluye alrededor de los obstáculos sin resistencia pero termina erosionando la piedra, es la metáfora central del Tao.

El yin y el yang representan la dualidad complementaria de todas las cosas: luz/oscuridad, activo/pasivo, masculino/femenino. El taoísmo religioso desarrolló prácticas de alquimia interna, meditación, tai chi, feng shui y búsqueda de la inmortalidad. Junto con el confucianismo y el budismo, el taoísmo ha moldeado profundamente la cultura china. Su influencia se extiende a la ecología profunda, la psicología humanista y la filosofía occidental contemporánea.`,
    content_en: `Taoism is a Chinese philosophical and religious tradition emphasizing living in harmony with the Tao (the Way), the fundamental force flowing through all existence. Its foundational texts are Lao Tzu's Tao Te Ching (6th century BC) and Zhuang Zhou's Zhuangzi.

The Tao Te Ching, with only 5,000 characters, is one of the most translated books in world literature. It teaches wu wei (non-action or effortless action), simplicity, spontaneity, and humility. Water, which flows around obstacles without resistance but eventually erodes stone, is the central metaphor of the Tao.

Yin and yang represent the complementary duality of all things: light/dark, active/passive, masculine/feminine. Religious Taoism developed practices of internal alchemy, meditation, tai chi, feng shui, and the quest for immortality. Along with Confucianism and Buddhism, Taoism has profoundly shaped Chinese culture. Its influence extends to deep ecology, humanistic psychology, and contemporary Western philosophy.`,
    excerpt_es: 'El camino de la armonía: Lao Tse, el Tao Te Ching y el arte del wu wei.', excerpt_en: 'The path of harmony: Lao Tzu, the Tao Te Ching, and the art of wu wei.', categoryId: 'cat-taoism', realityStatus: 'philosophical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-confucianism', title_es: 'Confucianismo', title_en: 'Confucianism', slug: 'confucianismo',
    content_es: `El confucianismo es una filosofía ética y política china desarrollada por Confucio (Kong Fuzi, 551-479 a.C.) que ha influido profundamente en Asia Oriental durante más de dos milenios. No es una religión en sentido estricto, sino un sistema de pensamiento centrado en la moral, la familia, la educación y el gobierno.

Las Analectas (Lunyu) recopilan las enseñanzas de Confucio. Conceptos clave incluyen el ren (benevolencia o humanidad), el li (ritual o cortesía), el xiao (piedad filial), el yi (rectitud) y el zhi (sabiduría). Confucio enseñó que la armonía social comienza con la cultivación personal: "Si quieres gobernar el reino, primero ordena tu familia; si quieres ordenar tu familia, primero cultívate a ti mismo".

El confucianismo enfatiza las cinco relaciones fundamentales: gobernante-súbdito, padre-hijo, marido-mujer, hermano mayor-hermano menor y amigo-amigo. Mencio y Xun Zi desarrollaron la tradición. El confucianismo fue la ideología del estado imperial chino durante más de 2,000 años y sigue influyendo en la educación, la ética laboral y las estructuras familiares en China, Japón, Corea y Vietnam.`,
    content_en: `Confucianism is a Chinese ethical and political philosophy developed by Confucius (Kong Fuzi, 551-479 BC) that has profoundly influenced East Asia for over two millennia. It is not a religion in the strict sense but a system of thought centered on morality, family, education, and government.

The Analects (Lunyu) compile Confucius's teachings. Key concepts include ren (benevolence or humanity), li (ritual or propriety), xiao (filial piety), yi (righteousness), and zhi (wisdom). Confucius taught that social harmony begins with personal cultivation: "If you want to govern the kingdom, first order your family; if you want to order your family, first cultivate yourself."

Confucianism emphasizes five fundamental relationships: ruler-subject, father-son, husband-wife, elder brother-younger brother, and friend-friend. Mencius and Xun Zi developed the tradition. Confucianism was the ideology of the Chinese imperial state for over 2,000 years and continues to influence education, work ethics, and family structures in China, Japan, Korea, and Vietnam.`,
    excerpt_es: 'La filosofía que moldeó Asia Oriental: Confucio, las Analectas y la armonía social.', excerpt_en: 'The philosophy that shaped East Asia: Confucius, the Analects, and social harmony.', categoryId: 'cat-taoism', realityStatus: 'philosophical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== NEW RELIGIOUS MOVEMENTS =====
  { id: 'entry-mormonism', title_es: 'Mormonismo', title_en: 'Mormonism', slug: 'mormonismo',
    content_es: `El mormonismo, oficialmente La Iglesia de Jesucristo de los Santos de los Últimos Días (SUD), fue fundado por Joseph Smith en el estado de Nueva York en 1830. Smith afirmó haber recibido visitas de Dios, Jesucristo y el ángel Moroni, quien le reveló el Libro de Mormón, un texto sagrado que complementa la Biblia.

Smith tradujo el Libro de Mormón, que narra la historia de antiguos pueblos en América y la visita de Jesús resucitado al continente americano. La nueva religión enfrentó persecución, lo que llevó a los mormones a migrar hacia el oeste bajo el liderazgo de Brigham Young, estableciéndose en Utah (1847).

La Iglesia SUD se caracteriza por la creencia en la revelación continua, la práctica del bautismo por los muertos, el matrimonio eterno, la Palabra de Sabiduría (código de salud que prohíbe alcohol y cafeína), y el trabajo misionero. Con sede en Salt Lake City, Utah, tiene aproximadamente 17 millones de miembros. El mormonismo es uno de los nuevos movimientos religiosos de mayor éxito y crecimiento.`,
    content_en: `Mormonism, officially The Church of Jesus Christ of Latter-day Saints (LDS), was founded by Joseph Smith in upstate New York in 1830. Smith claimed to have received visits from God, Jesus Christ, and the angel Moroni, who revealed the Book of Mormon, a sacred text that complements the Bible.

Smith translated the Book of Mormon, which narrates the history of ancient peoples in the Americas and the visit of the resurrected Jesus to the American continent. The new religion faced persecution, leading Mormons to migrate westward under Brigham Young's leadership, settling in Utah (1847).

The LDS Church is characterized by belief in ongoing revelation, practice of baptism for the dead, eternal marriage, the Word of Wisdom (health code prohibiting alcohol and caffeine), and missionary work. Headquartered in Salt Lake City, Utah, it has approximately 17 million members. Mormonism is one of the most successful and fastest-growing new religious movements.`,
    excerpt_es: 'La Iglesia de Jesucristo de los Santos de los Últimos Días: Joseph Smith, el Libro de Mormón y Utah.', excerpt_en: 'The Church of Jesus Christ of Latter-day Saints: Joseph Smith, the Book of Mormon, and Utah.', categoryId: 'cat-new-religions', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-bahai', title_es: 'Fe Bahai', title_en: 'Bahai Faith', slug: 'fe-bahai',
    content_es: `La Fe Bahai es una religión monoteísta fundada por Bahaullah (1817-1892) en la Persia del siglo XIX. Enseña la unidad espiritual de toda la humanidad, la unidad de las religiones y la unidad de la humanidad como un solo pueblo. Surgió del babismo, un movimiento religioso persa fundado por el Bab (1819-1850).
    
Los principios bahais incluyen la creencia en un solo Dios, la unidad fundamental de todas las religiones (cada tradición revela una parte de la verdad divina), la igualdad de hombres y mujeres, la eliminación de los prejuicios raciales y religiosos, la armonía entre ciencia y religión, la educación universal y el establecimiento de una comunidad mundial basada en la paz.

Bahaullah escribió extensamente, incluyendo el Kitab-i-Aqdas (el libro más sagrado). El centro administrativo mundial bahai está en Haifa, Israel, en el Monte Carmelo. No tiene clero; la comunidad se organiza a través de asambleas espirituales elegidas. La Fe Bahai tiene aproximadamente 8 millones de seguidores en todo el mundo, distribuidos en más de 200 países, lo que la convierte en una de las religiones más diversas geográficamente.`,
    content_en: `The Bahai Faith is a monotheistic religion founded by Bahaullah (1817-1892) in 19th-century Persia. It teaches the spiritual unity of all humanity, the unity of religions, and the unity of humankind as one people. It emerged from Babism, a Persian religious movement founded by the Bab (1819-1850).

Bahai principles include belief in one God, the fundamental unity of all religions (each tradition reveals a part of divine truth), equality of women and men, elimination of racial and religious prejudice, harmony of science and religion, universal education, and establishment of a world community based on peace.

Bahaullah wrote extensively, including the Kitab-i-Aqdas (the most holy book). The Bahai world administrative center is in Haifa, Israel, on Mount Carmel. It has no clergy; the community is organized through elected spiritual assemblies. The Bahai Faith has approximately 8 million followers worldwide, spread across more than 200 countries, making it one of the most geographically diverse religions.`,
    excerpt_es: 'La religion de la unidad: Bahaullah, la paz mundial y la armonia entre ciencia y fe.', excerpt_en: 'The religion of unity: Bahaullah, world peace, and harmony between science and faith.', categoryId: 'cat-new-religions', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
]

export const newReligionSubsections: SeedSubsection[] = []
