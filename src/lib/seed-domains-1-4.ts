import type { SeedCategory, SeedEntry, SeedSubsection } from './seed'

export const newCategories: SeedCategory[] = [
  { id: `cat-classical`, name_es: `Civilizaciones Clásicas`, name_en: `Classical Civilizations`, slug: `civilizaciones-clasicas`, description_es: `Las grandes civilizaciones del Mediterráneo clásico: Grecia, Roma, Persia y sus legados culturales.`, description_en: `The great civilizations of the classical Mediterranean: Greece, Rome, Persia, and their cultural legacies.`, icon: `⚱`, parentId: `cat-history` },
  { id: `cat-medieval-civs`, name_es: `Civilizaciones Medievales`, name_en: `Medieval Civilizations`, slug: `civilizaciones-medievales`, description_es: `Imperios, reinos y culturas de la Edad Media: Bizancio, el Islam, el Sacro Imperio y más.`, description_en: `Empires, kingdoms, and cultures of the Middle Ages: Byzantium, Islam, the Holy Empire, and more.`, icon: `🏰`, parentId: `cat-history` },
  { id: `cat-americas`, name_es: `Civilizaciones de América`, name_en: `Civilizations of the Americas`, slug: `civilizaciones-de-america`, description_es: `Culturas precolombinas: incas, mayas, aztecas y otras civilizaciones originarias de América.`, description_en: `Pre-Columbian cultures: Inca, Maya, Aztec, and other indigenous civilizations of the Americas.`, icon: `🗿`, parentId: `cat-history` },
  { id: `cat-events`, name_es: `Eventos Históricos Clave`, name_en: `Key Historical Events`, slug: `eventos-historicos-clave`, description_es: `Los acontecimientos que marcaron un antes y un después en el curso de la historia humana.`, description_en: `The events that marked a before and after in the course of human history.`, icon: `⏳`, parentId: `cat-history` },
  { id: `cat-hindu-myth`, name_es: `Mitología Hindú`, name_en: `Hindu Mythology`, slug: `mitologia-hindu`, description_es: `Dioses, épicas y tradiciones del vasto panteón hindú: Trimurti, avatares y escrituras sagradas.`, description_en: `Gods, epics, and traditions of the vast Hindu pantheon: Trimurti, avatars, and sacred scriptures.`, icon: `🕉`, parentId: `cat-religion` },
  { id: `cat-other-myth`, name_es: `Otras Mitologías`, name_en: `Other Mythologies`, slug: `otras-mitologias`, description_es: `Tradiciones mitológicas de Mesopotamia, Japón, China, África y otras culturas.`, description_en: `Mythological traditions of Mesopotamia, Japan, China, Africa, and other cultures.`, icon: `🌍`, parentId: `cat-religion` },
  { id: `cat-sacred-texts`, name_es: `Textos Sagrados y Apócrifos`, name_en: `Sacred Texts and Apocrypha`, slug: `textos-sagrados-y-apocrifos`, description_es: `Escrituras canónicas y apócrifas que han guiado la fe.`, description_en: `Canonical and apocryphal scriptures that have guided faith.`, icon: `📜`, parentId: `cat-religion` },
  { id: `cat-religious-figures`, name_es: `Figuras Religiosas`, name_en: `Religious Figures`, slug: `figuras-religiosas`, description_es: `Profetas, mesías, santos y líderes espirituales que transformaron tradiciones religiosas.`, description_en: `Prophets, messiahs, saints, and spiritual leaders who transformed religious traditions.`, icon: `🙏`, parentId: `cat-religion` },
  { id: `cat-ancient-philosophers`, name_es: `Filósofos Antiguos`, name_en: `Ancient Philosophers`, slug: `filosofos-antiguos`, description_es: `Pensadores de Grecia y Roma que sentaron las bases de la filosofía occidental.`, description_en: `Thinkers of Greece and Rome who laid the foundations of Western philosophy.`, icon: `🏛`, parentId: `cat-philosophy` },
  { id: `cat-medieval-philosophers`, name_es: `Filósofos Medievales`, name_en: `Medieval Philosophers`, slug: `filosofos-medievales`, description_es: `Filósofos de la Edad Media que integraron fe, razón y la tradición clásica.`, description_en: `Philosophers of the Middle Ages who integrated faith, reason, and classical tradition.`, icon: `⛪`, parentId: `cat-philosophy` },
  { id: `cat-modern-philosophers`, name_es: `Filósofos Modernos`, name_en: `Modern Philosophers`, slug: `filosofos-modernos`, description_es: `Pensadores de los siglos XVII-XVIII que redefinieron el conocimiento, la mente y la ética.`, description_en: `Thinkers from the 17th-18th centuries who redefined knowledge, mind, and ethics.`, icon: `💡`, parentId: `cat-philosophy` },
  { id: `cat-contemporary-philosophers`, name_es: `Filósofos Contemporáneos`, name_en: `Contemporary Philosophers`, slug: `filosofos-contemporaneos`, description_es: `Filósofos de los siglos XIX-XXI que abordan los dilemas del mundo moderno.`, description_en: `Philosophers from the 19th-21st centuries addressing modern dilemmas.`, icon: `🌐`, parentId: `cat-philosophy` },
  { id: `cat-philosophical-schools`, name_es: `Corrientes Filosóficas`, name_en: `Philosophical Schools`, slug: `corrientes-filosoficas`, description_es: `Movimientos, escuelas y tradiciones de pensamiento a lo largo de la historia de la filosofía.`, description_en: `Movements, schools, and traditions throughout the history of philosophy.`, icon: `🌀`, parentId: `cat-philosophy` },
  { id: `cat-philosophical-concepts`, name_es: `Conceptos Clave`, name_en: `Key Concepts`, slug: `conceptos-clave`, description_es: `Ideas fundamentales que atraviesan toda la tradición filosófica.`, description_en: `Fundamental ideas running through the philosophical tradition.`, icon: `⚡`, parentId: `cat-philosophy` },
  { id: `cat-physics`, name_es: `Física`, name_en: `Physics`, slug: `fisica`, description_es: `Estudio de la materia, la energía, el espacio, el tiempo y sus interacciones fundamentales.`, description_en: `Study of matter, energy, space, time, and fundamental interactions.`, icon: `⚛`, parentId: `cat-science` },
  { id: `cat-biology`, name_es: `Biología`, name_en: `Biology`, slug: `biologia`, description_es: `Ciencia que estudia la vida, los organismos vivos y sus procesos vitales fundamentales.`, description_en: `Science that studies life, living organisms, and fundamental vital processes.`, icon: `🧬`, parentId: `cat-science` },
  { id: `cat-chemistry`, name_es: `Química`, name_en: `Chemistry`, slug: `quimica`, description_es: `Ciencia que estudia la composición, estructura, propiedades y transformaciones de la materia.`, description_en: `Science of composition, structure, properties, and transformations of matter.`, icon: `🧪`, parentId: `cat-science` },
  { id: `cat-mathematics`, name_es: `Matemáticas`, name_en: `Mathematics`, slug: `matematicas`, description_es: `Ciencia de los números, formas, estructuras y relaciones abstractas fundamentales.`, description_en: `Science of numbers, shapes, structures, and fundamental abstract relationships.`, icon: `📐`, parentId: `cat-science` },
  { id: `cat-scientists`, name_es: `Científicos Destacados`, name_en: `Notable Scientists`, slug: `cientificos-destacados`, description_es: `Hombres y mujeres cuyos descubrimientos transformaron nuestra comprensión del mundo.`, description_en: `Men and women whose discoveries transformed our understanding of the world.`, icon: `🏆`, parentId: `cat-science` },
]

export const newEntries: SeedEntry[] = [
  {
    id: `entry-grecia-antigua`, title_es: `Antigua Grecia`, title_en: `Ancient Greece`, slug: `antigua-grecia`,
    content_es: `La Antigua Grecia es considerada la cuna de la civilización occidental, un período que abarca desde la Edad Oscura (c. 1200 a.C.) hasta la conquista romana en el 146 a.C. Su legado en filosofía, democracia, arte, ciencia y literatura ha influido profundamente en el pensamiento y la cultura de Occidente durante más de dos milenios.

El territorio de la Hélade estaba organizado en ciudades-estado independientes llamadas polis, entre las que destacaban Atenas, Esparta, Tebas y Corinto. Cada polis tenía su propio gobierno, leyes y ejército, pero compartían una lengua, una religión y una identidad cultural comunes que se manifestaban en festivales como los Juegos Olímpicos.

Atenas desarrolló la democracia directa, donde los ciudadanos varones participaban en la asamblea y los tribunales populares. Esparta, por el contrario, era una sociedad militarista gobernada por una diarquía y un consejo de ancianos. Esta diversidad política refleja la riqueza del pensamiento griego sobre el gobierno y la sociedad.

La Grecia clásica (siglos V-IV a.C.) fue testigo de las Guerras Médicas contra el Imperio Persa, la Edad de Oro de Pericles en Atenas, y las obras de dramaturgos como Sófocles, Eurípides y Esquilo. Filósofos como Sócrates, Platón y Aristóteles sentaron las bases de la filosofía occidental, mientras que Heródoto y Tucídides fundaron la historiografía.

Alejandro Magno, rey de Macedonia, unificó Grecia y conquistó un vasto imperio que se extendió hasta la India, difundiendo la cultura griega por todo el Mediterráneo oriental y dando inicio al período helenístico. Tras su muerte, los reinos helenísticos preservaron y desarrollaron la herencia griega hasta la llegada de Roma.`,
    content_en: `Ancient Greece is considered the cradle of Western civilization, a period spanning from the Dark Ages (c. 1200 BC) to the Roman conquest in 146 BC. Its legacy in philosophy, democracy, art, science, and literature has profoundly influenced Western thought and culture for over two millennia.

The territory of Hellas was organized into independent city-states called poleis, the most prominent being Athens, Sparta, Thebes, and Corinth. Each polis had its own government, laws, and army, but they shared a common language, religion, and cultural identity that manifested in festivals such as the Olympic Games.

Athens developed direct democracy, where male citizens participated in the assembly and popular courts. Sparta, in contrast, was a militaristic society governed by a diarchy and a council of elders. This political diversity reflects the richness of Greek thought on government and society.

Classical Greece (5th-4th centuries BC) witnessed the Persian Wars against the Persian Empire, Pericles' Golden Age in Athens, and the works of playwrights such as Sophocles, Euripides, and Aeschylus. Philosophers like Socrates, Plato, and Aristotle laid the foundations of Western philosophy, while Herodotus and Thucydides founded historiography.

Alexander the Great, king of Macedon, unified Greece and conquered a vast empire stretching to India, spreading Greek culture throughout the eastern Mediterranean and ushering in the Hellenistic period. After his death, the Hellenistic kingdoms preserved and developed the Greek heritage until the arrival of Rome.`,
    excerpt_es: `Cuna de la civilización occidental, origen de la democracia, la filosofía y las artes clásicas.`, excerpt_en: `Cradle of Western civilization, origin of democracy, philosophy, and the classical arts.`, categoryId: `cat-classical`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-02-01T00:00:00Z`, updatedAt: `2026-02-02T00:00:00Z`,
  },
  {
    id: `entry-imperio-persa`, title_es: `Imperio Persa`, title_en: `Persian Empire`, slug: `imperio-persa`,
    content_es: `El Imperio Persa Aqueménida (c. 550-330 a.C.) fue el imperio más extenso del mundo antiguo en su época, abarcando desde la India hasta los Balcanes y desde el Cáucaso hasta Egipto. Fundado por Ciro el Grande, unificó a numerosos pueblos bajo un sistema de gobierno tolerante y eficiente que sería admirado durante siglos.

Ciro el Grande conquistó Media, Lidia y Babilonia con una estrategia de clemencia hacia los pueblos vencidos. Su famoso Cilindro de Ciro, considerado por algunos como la primera declaración de derechos humanos, proclamaba la libertad de culto y la restauración de templos. Permitió a los judíos exiliados regresar a Jerusalén, un acto registrado en la Biblia.

Darío I reorganizó el imperio en satrapías (provincias), cada una gobernada por un sátrapa, y estableció el sistema de caminos reales que conectaba Susa con Sardes, facilitando el comercio y la comunicación. Creó una moneda unificada, el dárico, y promovió la construcción de Persépolis, la capital ceremonial del imperio.

El Imperio Persa practicaba una política de respeto hacia las culturas y religiones locales, permitiendo a cada región mantener sus tradiciones mientras pagaba tributo y lealtad al rey. Esta tolerancia, combinada con una administración eficiente, permitió la estabilidad de un imperio multiétnico durante más de dos siglos.

Alejandro Magno conquistó el imperio en el 330 a.C., pero la cultura persa sobrevivió e influyó en los reinos helenísticos. El legado persa perdura en el idioma, la literatura, la arquitectura y las tradiciones del Irán moderno.`,
    content_en: `The Achaemenid Persian Empire (c. 550-330 BC) was the largest empire of the ancient world in its time, stretching from India to the Balkans and from the Caucasus to Egypt. Founded by Cyrus the Great, it united numerous peoples under a tolerant and efficient system of government that would be admired for centuries.

Cyrus the Great conquered Media, Lydia, and Babylon with a strategy of clemency toward conquered peoples. His famous Cyrus Cylinder, considered by some as the first declaration of human rights, proclaimed freedom of worship and the restoration of temples. He allowed exiled Jews to return to Jerusalem, an act recorded in the Bible.

Darius I reorganized the empire into satrapies (provinces), each governed by a satrap, and established the royal road system connecting Susa with Sardis, facilitating trade and communication. He created a unified currency, the daric, and promoted the construction of Persepolis, the ceremonial capital of the empire.

The Persian Empire practiced a policy of respect toward local cultures and religions, allowing each region to maintain its traditions while paying tribute and loyalty to the king. This tolerance, combined with efficient administration, enabled the stability of a multi-ethnic empire for over two centuries.

Alexander the Great conquered the empire in 330 BC, but Persian culture survived and influenced the Hellenistic kingdoms. The Persian legacy endures in the language, literature, architecture, and traditions of modern Iran.`,
    excerpt_es: `El imperio más extenso del mundo antiguo, famoso por su tolerancia cultural y eficiente administración.`, excerpt_en: `The largest empire of the ancient world, famed for its cultural tolerance and efficient administration.`, categoryId: `cat-classical`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-02-04T00:00:00Z`, updatedAt: `2026-02-05T00:00:00Z`,
  },
  {
    id: `entry-imperio-bizantino`, title_es: `Imperio Bizantino`, title_en: `Byzantine Empire`, slug: `imperio-bizantino`,
    content_es: `El Imperio Bizantino, también conocido como Imperio Romano de Oriente, fue la continuación del Imperio Romano en las provincias orientales durante la Edad Media. Su capital, Constantinopla (actual Estambul), fue fundada por Constantino el Grande en el 330 d.C. El imperio perduró hasta la caída de Constantinopla en 1453, casi mil años después de la caída de Roma Occidental.

Bizancio preservó y transmitió la herencia clásica grecorromana mientras Europa Occidental atravesaba la Edad Oscura. Los monasterios bizantinos copiaron y conservaron innumerables manuscritos de autores griegos y romanos que de otro modo se habrían perdido. El idioma griego reemplazó al latín como lengua oficial, y la cultura bizantina desarrolló un arte y una arquitectura distintivos, culminando en la basílica de Santa Sofía.

El emperador Justiniano I (527-565) fue uno de los gobernantes más ambiciosos de Bizancio. Recodificó el derecho romano en el Corpus Juris Civilis, que se convertiría en la base del sistema legal europeo. Sus generales Belisario y Narsés reconquistaron gran parte del Mediterráneo occidental, incluyendo Italia, el norte de África y el sur de Hispania.

La Iglesia Ortodoxa fue el centro de la vida bizantina. El Gran Cisma de 1054 dividió a la cristiandad entre la Iglesia católica romana (Occidente) y la Iglesia ortodoxa (Oriente). Bizancio desarrolló una teología, una liturgia y un arte sacro profundamente influyentes, especialmente el icono y el mosaico.

El imperio enfrentó siglos de amenazas: persas sasánidas, árabes musulmanes, búlgaros, cruzados y finalmente los turcos otomanos. La Cuarta Cruzada (1204) saqueó Constantinopla, debilitando irreversiblemente al imperio. Su legado perdura en la Iglesia Ortodoxa, el derecho civil europeo y la transmisión del conocimiento clásico al Renacimiento.`,
    content_en: `The Byzantine Empire, also known as the Eastern Roman Empire, was the continuation of the Roman Empire in the eastern provinces during the Middle Ages. Its capital, Constantinople (modern Istanbul), was founded by Constantine the Great in 330 AD. The empire endured until the fall of Constantinople in 1453, nearly a thousand years after the fall of the Western Roman Empire.

Byzantium preserved and transmitted the classical Greco-Roman heritage while Western Europe passed through the Dark Ages. Byzantine monasteries copied and preserved countless manuscripts of Greek and Roman authors that would otherwise have been lost. The Greek language replaced Latin as the official language, and Byzantine culture developed distinctive art and architecture, culminating in the Hagia Sophia basilica.

Emperor Justinian I (527-565) was one of Byzantium's most ambitious rulers. He codified Roman law in the Corpus Juris Civilis, which would become the basis of European legal systems. His generals Belisarius and Narses reconquered much of the western Mediterranean, including Italy, North Africa, and southern Hispania.

The Orthodox Church was the center of Byzantine life. The Great Schism of 1054 divided Christendom between the Roman Catholic Church (West) and the Orthodox Church (East). Byzantium developed a profoundly influential theology, liturgy, and sacred art, especially the icon and mosaic.

The empire faced centuries of threats: Sassanid Persians, Muslim Arabs, Bulgars, Crusaders, and finally the Ottoman Turks. The Fourth Crusade (1204) sacked Constantinople, irreversibly weakening the empire. Its legacy endures in the Orthodox Church, European civil law, and the transmission of classical knowledge to the Renaissance.`,
    excerpt_es: `El Imperio Romano de Oriente que preservó la herencia clásica durante mil años hasta la caída de Constantinopla.`, excerpt_en: `The Eastern Roman Empire that preserved classical heritage for a thousand years until the fall of Constantinople.`, categoryId: `cat-medieval-civs`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-02-07T00:00:00Z`, updatedAt: `2026-02-08T00:00:00Z`,
  },
  {
    id: `entry-califato-islamico`, title_es: `Califato Islámico`, title_en: `Islamic Caliphate`, slug: `califato-islamico`,
    content_es: `El Califato Islámico fue el sistema político y religioso que gobernó el mundo musulmán tras la muerte del profeta Mahoma en el 632 d.C. Durante la Edad de Oro del Islam (siglos VIII-XIII), los califatos abasí y omeya presidieron una civilización que superó a Europa en ciencia, medicina, filosofía, matemáticas, arquitectura y comercio.

Los primeros cuatro califas (Abu Bakr, Umar, Uthman y Ali) gobernaron desde Medina y expandieron el islam por Arabia, Persia, el Levante y Egipto. La dinastía Omeya (661-750) trasladó la capital a Damasco y extendió el imperio desde España hasta la India. Los Abasíes (750-1258) establecieron Bagdad como capital y fundaron la Casa de la Sabiduría.

Durante la Edad de Oro, eruditos como Al-Juarizmi (álgebra), Ibn Sina (medicina), Alhacén (óptica) y Al-Razi (química) realizaron avances fundamentales. Tradujeron y expandieron las obras de Aristóteles, Platón, Euclides, Galeno y Ptolomeo, transmitiendo este conocimiento a Europa.

El mundo islámico desarrolló una rica cultura que abarcaba desde la poesía de Rumi y la filosofía de Averroes hasta la arquitectura de la Alhambra y la Mezquita de Córdoba. El comercio islámico conectaba China, India, África y Europa.

La fragmentación del califato unificado y la invasión mongola de Bagdad en 1258 marcaron el declive político, pero la civilización islámica continuó floreciendo en imperios regionales como el Otomano, el Safávida y el Mogol.`,
    content_en: `The Islamic Caliphate was the political and religious system that governed the Muslim world after the death of Prophet Muhammad in 632 AD. During the Islamic Golden Age (8th-13th centuries), the Abbasid and Umayyad caliphates presided over a civilization that surpassed Europe in science, medicine, philosophy, mathematics, architecture, and trade.

The first four caliphs (Abu Bakr, Umar, Uthman, and Ali) ruled from Medina and expanded Islam across Arabia, Persia, the Levant, and Egypt. The Umayyad dynasty (661-750) moved the capital to Damascus and extended the empire from Spain to India. The Abbasids (750-1258) established Baghdad as capital and founded the House of Wisdom.

During the Golden Age, scholars such as Al-Khwarizmi (algebra), Ibn Sina (medicine), Alhazen (optics), and Al-Razi (chemistry) made fundamental advances. They translated and expanded upon the works of Aristotle, Plato, Euclid, Galen, and Ptolemy, transmitting this knowledge to Europe.

The Islamic world developed a rich culture spanning from the poetry of Rumi and the philosophy of Averroes to the architecture of the Alhambra and the Great Mosque of Cordoba. Islamic trade connected China, India, Africa, and Europe.

The fragmentation of the unified caliphate and the Mongol invasion of Baghdad in 1258 marked political decline, but Islamic civilization continued to flourish in regional empires such as the Ottoman, Safavid, and Mughal.`,
    excerpt_es: `El sistema político y religioso que guió la Edad de Oro del Islam y preservó el conocimiento clásico.`, excerpt_en: `The political and religious system that guided the Islamic Golden Age and preserved classical knowledge.`, categoryId: `cat-medieval-civs`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-02-10T00:00:00Z`, updatedAt: `2026-02-11T00:00:00Z`,
  },
  {
    id: `entry-imperio-inca`, title_es: `Imperio Inca`, title_en: `Inca Empire`, slug: `imperio-inca`,
    content_es: `El Imperio Inca, conocido como Tawantinsuyu, fue el imperio más grande de la América precolombina, extendiéndose por los actuales Perú, Ecuador, Bolivia, Colombia, Chile y Argentina. Su capital era Cusco, y en su apogeo (siglo XV) gobernaba a más de 12 millones de personas.

Los incas construyeron una civilización extraordinaria sin utilizar la rueda, la escritura (usaban quipus, cuerdas anudadas para registro) ni animales de carga grandes. Su ingeniería era excepcional: construyeron más de 40,000 kilómetros de caminos (el Qhapaq Ñan) que atravesaban los Andes, con puentes colgantes, túneles y escaleras talladas en la roca.

La sociedad inca estaba organizada en un sistema jerárquico encabezado por el Sapa Inca, considerado hijo del dios Sol (Inti). Bajo él, la nobleza, los sacerdotes y los administradores gobernaban un sistema de comunidades agrícolas que trabajaban la tierra colectivamente.

Machu Picchu, la ciudadela sagrada construida alrededor de 1450, es el ejemplo más emblemático de la arquitectura inca. Sus muros de piedra perfectamente ensamblados sin mortero han resistido siglos de terremotos.

El imperio cayó tras la conquista española liderada por Francisco Pizarro (1532-1572). La combinación de guerras civiles incas, enfermedades europeas y superioridad tecnológica militar facilitó la conquista.`,
    content_en: `The Inca Empire, known as Tawantinsuyu, was the largest empire in pre-Columbian America, stretching across present-day Peru, Ecuador, Bolivia, Colombia, Chile, and Argentina. Its capital was Cusco, and at its peak (15th century) it ruled over 12 million people.

The Incas built an extraordinary civilization without using the wheel, writing (they used quipus, knotted cords for record-keeping), or large pack animals. Their engineering was exceptional: they built over 40,000 kilometers of roads (the Qhapaq Ñan) crossing the Andes, with suspension bridges, tunnels, and stairways carved into rock.

Inca society was organized in a hierarchical system headed by the Sapa Inca, considered son of the sun god (Inti). Below him, the nobility, priests, and administrators governed a system of agricultural communities that worked the land collectively.

Machu Picchu, the sacred citadel built around 1450, is the most emblematic example of Inca architecture. Its perfectly fitted stone walls without mortar have withstood centuries of earthquakes.

The empire fell after the Spanish conquest led by Francisco Pizarro (1532-1572). The combination of Inca civil wars, European diseases, and military technological superiority facilitated the conquest.`,
    excerpt_es: `El imperio más grande de la América precolombina, maestro de la ingeniería y la organización social.`, excerpt_en: `The largest empire in pre-Columbian America, master of engineering and social organization.`, categoryId: `cat-americas`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-02-13T00:00:00Z`, updatedAt: `2026-02-14T00:00:00Z`,
  },
  {
    id: `entry-civilizacion-maya`, title_es: `Civilización Maya`, title_en: `Maya Civilization`, slug: `civilizacion-maya`,
    content_es: `La civilización maya floreció en Mesoamérica desde aproximadamente el 2000 a.C. hasta la llegada de los españoles en el siglo XVI. Ocupó la península de Yucatán, Guatemala, Belice, Honduras y El Salvador, desarrollando una de las culturas más sofisticadas del mundo precolombino, famosa por su escritura jeroglífica, su matemática y su astronomía.

Los mayas crearon el único sistema de escritura completamente desarrollado de la América precolombina, compuesto por más de 800 glifos. Escribían en códices hechos de corteza de árbol (de los que solo sobreviven cuatro) y en monumentos de piedra (estelas).

El calendario maya era extraordinariamente preciso. Combinaban el Tzolk'in (calendario sagrado de 260 días) con el Haab' (calendario solar de 365 días) en un ciclo de 52 años llamado Rueda Calendárica. También desarrollaron la Cuenta Larga, un sistema lineal que permitía fechar eventos con precisión a lo largo de miles de años.

La arquitectura maya produjo impresionantes pirámides escalonadas, templos, palacios y observatorios astronómicos. Ciudades como Tikal, Palenque, Copán, Uxmal y Chichén Itzá muestran la sofisticación de su ingeniería y su arte.

El llamado "colapso maya" del período Clásico (siglos VIII-IX) sigue siendo objeto de debate académico. Las causas probables incluyen la sobreexplotación de recursos, la deforestación, la sequía y las guerras internas.`,
    content_en: `The Maya civilization flourished in Mesoamerica from approximately 2000 BC until the arrival of the Spanish in the 16th century. It occupied the Yucatan peninsula, Guatemala, Belize, Honduras, and El Salvador, developing one of the most sophisticated cultures of the pre-Columbian world, famous for its hieroglyphic writing, mathematics, and astronomy.

The Maya created the only fully developed writing system of the pre-Columbian Americas, composed of over 800 glyphs. They wrote on bark-paper codices (of which only four survive) and on stone monuments (stelae).

The Maya calendar was extraordinarily precise. They combined the Tzolkin (sacred 260-day calendar) with the Haab (solar 365-day calendar) in a 52-year cycle called the Calendar Round. They also developed the Long Count, a linear system for precise dating over thousands of years.

Maya architecture produced impressive stepped pyramids, temples, palaces, and astronomical observatories. Cities such as Tikal, Palenque, Copan, Uxmal, and Chichen Itza demonstrate their engineering sophistication.

The so-called "Maya collapse" of the Classic period (8th-9th centuries) remains debated. Likely causes include resource overexploitation, deforestation, drought, and internal warfare.`,
    excerpt_es: `La civilización mesoamericana que desarrolló la escritura, el calendario y la astronomía más avanzados de su época.`, excerpt_en: `The Mesoamerican civilization that developed the most advanced writing, calendar, and astronomy of its time.`, categoryId: `cat-americas`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-02-16T00:00:00Z`, updatedAt: `2026-02-17T00:00:00Z`,
  },
  {
    id: `entry-revolucion-francesa`, title_es: `Revolución Francesa`, title_en: `French Revolution`, slug: `revolucion-francesa`,
    content_es: `La Revolución Francesa (1789-1799) fue un período de transformación política y social radical en Francia que derrocó la monarquía absoluta, estableció una república y sentó las bases de la democracia moderna. Sus ideales de "libertad, igualdad y fraternidad" resonaron en todo el mundo.

Las causas fueron múltiples: el Antiguo Régimen con su desigualdad estructural, la crisis financiera, las malas cosechas que provocaron hambrunas, y la difusión de las ideas ilustradas de Rousseau, Voltaire y Montesquieu.

El 14 de julio de 1789, el pueblo de París tomó la Bastilla. La Asamblea Nacional abolió el feudalismo y proclamó la Declaración de los Derechos del Hombre y del Ciudadano. En 1792, Francia fue declarada república y Luis XVI fue ejecutado en 1793.

El período del Terror (1793-1794), bajo Robespierre, resultó en la ejecución de miles de "enemigos de la revolución". Napoleón Bonaparte tomó el poder en 1799.

El legado revolucionario —los derechos humanos, el nacionalismo, la democracia— perdura hasta nuestros días.`,
    content_en: `The French Revolution (1789-1799) was a period of radical political and social transformation in France that overthrew the absolute monarchy, established a republic, and laid the foundations of modern democracy. Its ideals of "liberty, equality, and fraternity" resonated around the world.

The causes were multiple: the Ancien Regime with its structural inequality, the financial crisis, poor harvests causing famines, and the spread of Enlightenment ideas from Rousseau, Voltaire, and Montesquieu.

On July 14, 1789, the people of Paris stormed the Bastille. The National Assembly abolished feudalism and proclaimed the Declaration of the Rights of Man and of the Citizen. In 1792, France was declared a republic and Louis XVI was executed in 1793.

The Reign of Terror (1793-1794), under Robespierre, resulted in the execution of thousands of "enemies of the revolution." Napoleon Bonaparte seized power in 1799.

The revolutionary legacy — human rights, nationalism, democracy — endures to this day.`,
    excerpt_es: `El levantamiento popular que abolió la monarquía absoluta y proclamó los ideales de libertad, igualdad y fraternidad.`, excerpt_en: `The popular uprising that abolished absolute monarchy and proclaimed the ideals of liberty, equality, and fraternity.`, categoryId: `cat-events`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-02-19T00:00:00Z`, updatedAt: `2026-02-20T00:00:00Z`,
  },
  {
    id: `entry-caida-muro-berlin`, title_es: `Caída del Muro de Berlín`, title_en: `Fall of the Berlin Wall`, slug: `caida-del-muro-de-berlin`,
    content_es: `La caída del Muro de Berlín el 9 de noviembre de 1989 fue el acontecimiento que simbolizó el fin de la Guerra Fría y la reunificación de Alemania y Europa. El Muro, construido en 1961 por la República Democrática Alemana, dividió Berlín en dos sectores.

El Muro no era una simple pared, sino un complejo sistema defensivo de 155 km que incluía muros de hormigón, alambre de púas, zanjas antivehículos, torres de vigilancia y campos minados. Más de 140 personas murieron intentando cruzarlo.

Durante la década de 1980, las reformas de Gorbachov (perestroika y glásnost) y el desgaste económico del bloque soviético generaron protestas en Europa del Este.

El 9 de noviembre de 1989, tras un malentendido en una conferencia de prensa, el portavoz Günter Schabowski anunció que las restricciones de viaje se levantaban "inmediatamente". Miles de berlineses acudieron a los puestos fronterizos y los guardias abrieron las puertas.

La caída del Muro aceleró el colapso de los regímenes comunistas y llevó a la reunificación alemana el 3 de octubre de 1990.`,
    content_en: `The fall of the Berlin Wall on November 9, 1989, was the event that symbolized the end of the Cold War and the reunification of Germany and Europe. The Wall, built in 1961 by the German Democratic Republic, divided Berlin into two sectors.

The Wall was not a simple wall but a complex defensive system of 155 km including concrete walls, barbed wire, anti-vehicle trenches, watchtowers, and minefields. Over 140 people died attempting to cross it.

During the 1980s, Gorbachev's reforms (perestroika and glasnost) and the economic strain of the Soviet bloc generated protests in Eastern Europe.

On November 9, 1989, following a misunderstanding at a press conference, spokesman Gunter Schabowski announced that travel restrictions were lifted "immediately." Thousands of Berliners rushed to border crossings and guards opened the gates.

The fall of the Wall accelerated the collapse of communist regimes and led to German reunification on October 3, 1990.`,
    excerpt_es: `El momento que simbolizó el fin de la Guerra Fría y la reunificación de Alemania y Europa.`, excerpt_en: `The moment that symbolized the end of the Cold War and the reunification of Germany and Europe.`, categoryId: `cat-events`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-02-22T00:00:00Z`, updatedAt: `2026-02-23T00:00:00Z`,
  },
  {
    id: `entry-shiva`, title_es: `Shiva`, title_en: `Shiva`, slug: `shiva`,
    content_es: `Shiva es una de las deidades principales del hinduismo, conocido como "el Destructor" dentro de la Trimurti junto con Brahma y Vishnu. Sin embargo, Shiva trasciende la mera destrucción: es también el dios de la meditación, las artes, la danza y el yoga, representando el ciclo de creación, preservación y disolución del universo.

Shiva es frecuentemente representado como Nataraja, el Señor de la Danza, realizando la danza cósmica del Tandava. También se le representa en meditación en el monte Kailash, con la luna creciente en su cabeza, el río Ganges fluyendo de su cabello y tres ojos que representan el sol, la luna y el fuego.

Su consorte es Parvati y sus hijos son Ganesha y Kartikeya. Su vehículo es Nandi, el toro sagrado, y su arma principal es el tridente (trishula).

El culto a Shiva es una de las tradiciones más antiguas del hinduismo, con raíces en la civilización del Valle del Indo (c. 2500 a.C.). El Shiva Lingam es adorado en templos de toda la India.

Maha Shivaratri ("la Gran Noche de Shiva") es celebrada por millones de hindúes. Shiva representa tanto la severidad del asceta como la dicha del bailarín cósmico.`,
    content_en: `Shiva is one of the principal deities of Hinduism, known as "the Destroyer" within the Trimurti alongside Brahma and Vishnu. However, Shiva transcends mere destruction: he is also the god of meditation, arts, dance, and yoga, representing the cycle of creation, preservation, and dissolution of the universe.

Shiva is often depicted as Nataraja, the Lord of Dance, performing the cosmic Tandava dance. He is also shown in meditation on Mount Kailash, with the crescent moon on his head, the Ganges flowing from his hair, and three eyes representing the sun, moon, and fire.

His consort is Parvati and his sons are Ganesha and Kartikeya. His vehicle is Nandi, the sacred bull, and his main weapon is the trident (trishula).

The worship of Shiva is one of the oldest traditions in Hinduism, with roots in the Indus Valley civilization (c. 2500 BC). The Shiva Lingam is worshipped in temples throughout India.

Maha Shivaratri ("the Great Night of Shiva") is celebrated by millions of Hindus. Shiva represents both the austerity of the ascetic and the bliss of the cosmic dancer.`,
    excerpt_es: `El dios destructor y transformador del hinduismo, Señor de la Danza y maestro de la meditación.`, excerpt_en: `The destroyer and transformer god of Hinduism, Lord of the Dance and master of meditation.`, categoryId: `cat-hindu-myth`, realityStatus: `mythological`, imageUrl: '', createdAt: `2026-02-25T00:00:00Z`, updatedAt: `2026-02-26T00:00:00Z`,
  },
  {
    id: `entry-vishnu`, title_es: `Vishnu`, title_en: `Vishnu`, slug: `vishnu`,
    content_es: `Vishnu es una de las deidades supremas del hinduismo, conocido como "el Preservador" dentro de la Trimurti. Mantiene el orden cósmico (dharma) y desciende a la Tierra en diversas encarnaciones (avatares). Las diez encarnaciones principales (Dashavatara) incluyen a Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buda y Kalki.

Vishnu es representado con piel azul oscuro y cuatro brazos que sostienen una concha, un disco, una maza y un loto. Su consorte es Lakshmi. Descansa sobre la serpiente cósmica Shesha en el océano primordial.

Sus avatares más famosos son Rama (héroe del Ramayana) y Krishna (figura central del Bhagavad Gita).

El visnuismo es una de las principales tradiciones del hinduismo. El Bhagavad Gita presenta las enseñanzas de Krishna.

Vishnu representa la misericordia y el mantenimiento del orden universal, equilibrando las fuerzas de creación y destrucción.`,
    content_en: `Vishnu is one of the supreme deities of Hinduism, known as "the Preserver" within the Trimurti. He maintains cosmic order (dharma) and descends to Earth in various incarnations (avatars). The ten principal incarnations (Dashavatara) include Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, and Kalki.

Vishnu is depicted with dark blue skin and four arms holding a conch, a discus, a mace, and a lotus. His consort is Lakshmi. He rests on the cosmic serpent Shesha in the primordial ocean.

His most famous avatars are Rama (hero of the Ramayana) and Krishna (central figure of the Bhagavad Gita).

Vaishnavism is one of the major traditions of Hinduism. The Bhagavad Gita presents Krishna's teachings.

Vishnu represents mercy and the maintenance of universal order, balancing the forces of creation and destruction.`,
    excerpt_es: `El dios preservador del hinduismo que desciende en avatares para restaurar el orden cósmico.`, excerpt_en: `The preserver god of Hinduism who descends in avatars to restore cosmic order.`, categoryId: `cat-hindu-myth`, realityStatus: `mythological`, imageUrl: '', createdAt: `2026-02-28T00:00:00Z`, updatedAt: `2026-03-01T00:00:00Z`,
  },
  {
    id: `entry-mitologia-mesopotamica`, title_es: `Mitología Mesopotámica`, title_en: `Mesopotamian Mythology`, slug: `mitologia-mesopotamica`,
    content_es: `La mitología mesopotámica es el conjunto de creencias de las civilizaciones de Mesopotamia (Sumer, Acad, Babilonia, Asiria) desde el IV milenio a.C. Es la mitología más antigua registrada, y sus relatos influyeron en las tradiciones posteriores del Mediterráneo.

El panteón estaba encabezado por Anu (cielo), Enlil (aire y autoridad) y Enki (sabiduría, agua). Otras deidades importantes incluían a Inanna/Ishtar (amor y guerra), Utu/Shamash (sol y justicia) y Nanna/Sin (luna).

El mito más importante es la Epopeya de Gilgamesh, la obra literaria más antigua conservada, que narra las aventuras del rey Gilgamesh de Uruk y su amigo Enkidu, explorando la amistad, la mortalidad y la búsqueda de la inmortalidad.

El Enuma Elish describe cómo Marduk derrotó a la diosa del caos Tiamat y creó el mundo.

La cosmovisión mesopotámica sentó las bases para narrativas bíblicas y la mitología griega.`,
    content_en: `Mesopotamian mythology is the collection of beliefs of the civilizations of Mesopotamia (Sumer, Akkad, Babylonia, Assyria) from the 4th millennium BC. It is the oldest recorded mythology, and its stories influenced later Mediterranean traditions.

The pantheon was headed by Anu (sky), Enlil (air and authority), and Enki (wisdom, water). Other important deities included Inanna/Ishtar (love and war), Utu/Shamash (sun and justice), and Nanna/Sin (moon).

The most important myth is the Epic of Gilgamesh, the oldest surviving literary work, narrating the adventures of King Gilgamesh and his friend Enkidu, exploring friendship, mortality, and the quest for immortality.

The Enuma Elish describes how Marduk defeated the chaos goddess Tiamat and created the world.

The Mesopotamian worldview laid foundations for biblical narratives and Greek mythology.`,
    excerpt_es: `La mitología más antigua registrada, cuna de la Epopeya de Gilgamesh.`, excerpt_en: `The oldest recorded mythology, birthplace of the Epic of Gilgamesh.`, categoryId: `cat-other-myth`, realityStatus: `mythological`, imageUrl: '', createdAt: `2026-03-03T00:00:00Z`, updatedAt: `2026-03-04T00:00:00Z`,
  },
  {
    id: `entry-mitologia-japonesa`, title_es: `Mitología Japonesa`, title_en: `Japanese Mythology`, slug: `mitologia-japonesa`,
    content_es: `La mitología japonesa es un rico conjunto de tradiciones, leyendas y creencias influenciadas por el sintoísmo, el budismo y el folclore local. Sus principales fuentes son el Kojiki (712 d.C.) y el Nihon Shoki (720 d.C.).

Según el Kojiki, el universo comenzó con la aparición de los primeros kami. Izanagi e Izanami crearon las islas de Japón, y de Izanagi nacieron Amaterasu (diosa del sol), Tsukuyomi (dios de la luna) y Susanoo (dios de las tormentas).

Amaterasu, la diosa del sol, es considerada la antepasada de la familia imperial japonesa. El mito de su ocultamiento en una cueva explica el ciclo solar.

La mitología japonesa también incluye criaturas como tengu, kitsune y oni.

Amaterasu sigue siendo central en el sintoísmo, con el santuario de Ise dedicado a su culto.`,
    content_en: `Japanese mythology is a rich collection of traditions influenced by Shinto, Buddhism, and local folklore. Its main sources are the Kojiki (712 AD) and Nihon Shoki (720 AD).

According to the Kojiki, the universe began with the first kami. Izanagi and Izanami created the islands of Japan, and from Izanagi were born Amaterasu (sun goddess), Tsukuyomi (moon god), and Susanoo (storm god).

Amaterasu, the sun goddess, is considered the ancestor of the Japanese imperial family. The myth of her hiding in a cave explains the solar cycle.

Japanese mythology also includes creatures like tengu, kitsune, and oni.

Amaterasu remains central to Shinto, with the Ise Grand Shrine dedicated to her worship.`,
    excerpt_es: `Las tradiciones divinas del Japón antiguo, desde la creación hasta la diosa del sol Amaterasu.`, excerpt_en: `The divine traditions of ancient Japan, from creation to the sun goddess Amaterasu.`, categoryId: `cat-other-myth`, realityStatus: `mythological`, imageUrl: '', createdAt: `2026-03-06T00:00:00Z`, updatedAt: `2026-03-07T00:00:00Z`,
  },
  {
    id: `entry-la-biblia`, title_es: `La Biblia`, title_en: `The Bible`, slug: `la-biblia`,
    content_es: `La Biblia es el libro sagrado del cristianismo y una de las obras fundamentales de la civilización occidental. Es una colección de escritos compuestos a lo largo de aproximadamente mil años por numerosos autores. Se divide en Antiguo Testamento y Nuevo Testamento.

El Antiguo Testamento contiene 39-46 libros según el canon, incluyendo el Pentateuco, los libros históricos, poéticos y proféticos. Narra desde la creación del mundo hasta la historia del pueblo de Israel.

El Nuevo Testamento contiene 27 libros centrados en Jesucristo y los primeros años del cristianismo: los cuatro evangelios, Hechos, las epístolas y el Apocalipsis.

La Biblia ha sido traducida a más de 3,000 idiomas. La Vulgata latina, la traducción de Lutero y la King James marcaron hitos en la traducción.

Su influencia en la literatura, el arte y la moral occidental es incalculable.`,
    content_en: `The Bible is the sacred book of Christianity and one of the fundamental works of Western civilization. It is a collection of writings composed over approximately a thousand years by numerous authors. It is divided into the Old Testament and New Testament.

The Old Testament contains 39-46 books depending on the canon, including the Pentateuch, historical books, poetic and prophetic books. It narrates from creation to the history of Israel.

The New Testament contains 27 books centered on Jesus Christ and early Christianity: the four gospels, Acts, the epistles, and Revelation.

The Bible has been translated into over 3,000 languages. The Latin Vulgate, Luther's translation, and the King James Version marked milestones.

Its influence on Western literature, art, and morality is incalculable.`,
    excerpt_es: `El libro sagrado del cristianismo, el texto más traducido e influyente de la historia.`, excerpt_en: `The sacred book of Christianity, the most translated and influential text in history.`, categoryId: `cat-sacred-texts`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-03-09T00:00:00Z`, updatedAt: `2026-03-10T00:00:00Z`,
  },
  {
    id: `entry-el-coran`, title_es: `El Corán`, title_en: `The Quran`, slug: `el-coran`,
    content_es: `El Corán es el libro sagrado del islam, considerado por los musulmanes como la palabra literal de Dios revelada al profeta Mahoma a través del arcángel Gabriel. La revelación ocurrió durante aproximadamente 23 años en La Meca y Medina.

El Corán contiene 114 capítulos (suras) con aproximadamente 6,236 versículos. Las suras se organizan de mayor a menor longitud. La primera sura, Al-Fatiha, es una oración fundamental en las cinco oraciones diarias.

Los temas centrales incluyen la unicidad de Dios (tawhid), la profecía, el más allá, la guía ética y las historias de profetas anteriores.

El Corán fue compilado durante el califato de Abu Bakr y estandarizado bajo Uthman.

La recitación del Corán (tajwid) es un arte altamente desarrollado en el mundo islámico.`,
    content_en: `The Quran is the sacred book of Islam, considered by Muslims to be the literal word of God revealed to the Prophet Muhammad through the archangel Gabriel. The revelation occurred over approximately 23 years in Mecca and Medina.

The Quran contains 114 chapters (surahs) with approximately 6,236 verses. The surahs are arranged from longest to shortest. The first surah, Al-Fatiha, is a fundamental prayer in the five daily prayers.

Central themes include the oneness of God (tawhid), prophethood, the afterlife, ethical guidance, and stories of previous prophets.

The Quran was compiled during the caliphate of Abu Bakr and standardized under Uthman.

Quranic recitation (tajwid) is a highly developed art in the Islamic world.`,
    excerpt_es: `El libro sagrado del islam, palabra de Dios revelada al profeta Mahoma.`, excerpt_en: `The sacred book of Islam, word of God revealed to the Prophet Muhammad.`, categoryId: `cat-sacred-texts`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-03-12T00:00:00Z`, updatedAt: `2026-03-13T00:00:00Z`,
  },
  {
    id: `entry-mahoma`, title_es: `Mahoma`, title_en: `Muhammad`, slug: `mahoma`,
    content_es: `Mahoma (c. 570-632 d.C.) es el fundador del islam, considerado el último y más importante profeta de Dios, el "Sello de los Profetas". Nació en La Meca en la tribu Quraysh.

Huérfano desde temprana edad, trabajó como comerciante, ganándose el apodo de "Al-Amin" (el Confiable). A los 25 años se casó con Jadiya.

A los 40 años recibió su primera revelación en la cueva de Hira. Predicó en La Meca, pero la persecución lo obligó a emigrar a Medina en el 622 (Hégira).

En Medina estableció la primera comunidad musulmana, actuando como líder religioso, político y militar. Conquistó La Meca pacíficamente en el 630.

Murió en el 632, dejando un legado que transformó radicalmente el mundo. Su ejemplo (Sunna) y dichos (Hadiz) son la segunda fuente de la ley islámica.`,
    content_en: `Muhammad (c. 570-632 AD) is the founder of Islam, considered the last and most important prophet of God, the "Seal of the Prophets." He was born in Mecca in the Quraysh tribe.

Orphaned early, he worked as a merchant, earning the nickname "Al-Amin" (the Trustworthy). At 25 he married Khadija.

At 40 he received his first revelation in the Cave of Hira. He preached in Mecca but persecution forced him to emigrate to Medina in 622 (Hijra).

In Medina he established the first Muslim community, acting as religious, political, and military leader. He conquered Mecca peacefully in 630.

He died in 632, leaving a legacy that radically transformed the world. His example (Sunna) and sayings (Hadith) are the second source of Islamic law.`,
    excerpt_es: `El profeta del islam, considerado el último mensajero de Dios.`, excerpt_en: `The prophet of Islam, considered the last messenger of God.`, categoryId: `cat-religious-figures`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-03-15T00:00:00Z`, updatedAt: `2026-03-16T00:00:00Z`,
  },
  {
    id: `entry-moises`, title_es: `Moisés`, title_en: `Moses`, slug: `moises`,
    content_es: `Moisés es una de las figuras más importantes de la tradición judeocristiana, considerado el principal profeta del judaísmo y figura venerada en el cristianismo y el islam. Según la Biblia, liberó al pueblo hebreo de la esclavitud en Egipto y recibió la Ley en el Monte Sinaí.

Su historia comienza cuando fue colocado en una cesta en el Nilo y adoptado por la hija del faraón. Criado en la corte egipcia, mató a un capataz y huyó a Madián.

Dios se le reveló en la zarza ardiente, comisionándolo para liberar a Israel. Enfrentó al faraón con diez plagas y condujo el Éxodo.

En el Sinaí recibió los Diez Mandamientos. Guió a Israel durante 40 años en el desierto.

Murió en el Monte Nebo, desde donde vio la Tierra Prometida. Su figura ha influido fundamentalmente en la ética, el derecho y la religión occidental.`,
    content_en: `Moses is one of the most important figures in the Judeo-Christian tradition, considered the chief prophet of Judaism and a venerated figure in Christianity and Islam. According to the Bible, he liberated the Hebrew people from slavery in Egypt and received the Law on Mount Sinai.

His story begins when he was placed in a basket on the Nile and adopted by the pharaoh's daughter. Raised in the Egyptian court, he killed an overseer and fled to Midian.

God revealed himself at the burning bush, commissioning Moses to free Israel. He confronted the pharaoh with ten plagues and led the Exodus.

On Sinai he received the Ten Commandments. He guided Israel for 40 years in the wilderness.

He died on Mount Nebo, from where he saw the Promised Land. His figure has fundamentally influenced Western ethics, law, and religion.`,
    excerpt_es: `El gran profeta del judaísmo, libertador de Israel y receptor de los Diez Mandamientos.`, excerpt_en: `The great prophet of Judaism, liberator of Israel and receiver of the Ten Commandments.`, categoryId: `cat-religious-figures`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-03-18T00:00:00Z`, updatedAt: `2026-03-19T00:00:00Z`,
  },
  {
    id: `entry-socrates`, title_es: `Sócrates`, title_en: `Socrates`, slug: `socrates`,
    content_es: `Sócrates (470-399 a.C.) fue un filósofo ateniense y una de las figuras más importantes de la filosofía occidental. No dejó escritos; todo lo que sabemos proviene de los diálogos de Platón. Su método de indagación (mayéutica) y su muerte lo convirtieron en símbolo de la búsqueda de la verdad.

Sócrates revolucionó la filosofía al desplazar el interés hacia las cuestiones éticas. Su máxima "Conócete a ti mismo" y "Solo sé que no sé nada" expresan la humildad intelectual.

Su método consistía en dialogar en las plazas de Atenas, haciendo preguntas que exponían contradicciones. Mediante la ironía socrática, llevaba al interlocutor a reconocer sus errores.

Fue juzgado en el 399 a.C. acusado de impiedad y corromper a la juventud. Fue condenado a muerte y ejecutado bebiendo cicuta.

Su muerte simboliza el conflicto entre el pensamiento libre y el poder establecido. "Una vida sin examen no merece ser vivida" resume su legado.`,
    content_en: `Socrates (470-399 BC) was an Athenian philosopher and one of the most important figures in Western philosophy. He left no writings; everything we know comes from Plato's dialogues. His method of inquiry (maieutics) and his death made him a symbol of the search for truth.

Socrates revolutionized philosophy by shifting focus toward ethical questions. His maxim "Know thyself" and "I know only that I know nothing" express intellectual humility.

His method involved dialoguing in Athens' squares, asking questions that exposed contradictions. Through Socratic irony, he led interlocutors to recognize their errors.

He was tried in 399 BC on charges of impiety and corrupting youth. He was condemned to death and executed by drinking hemlock.

His death symbolizes the conflict between free thought and established power. "The unexamined life is not worth living" summarizes his legacy.`,
    excerpt_es: `El padre de la filosofía occidental, maestro de Platón, ejecutado por sus ideales.`, excerpt_en: `The father of Western philosophy, teacher of Plato, executed for his ideals.`, categoryId: `cat-ancient-philosophers`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-03-21T00:00:00Z`, updatedAt: `2026-03-22T00:00:00Z`,
  },
  {
    id: `entry-platon`, title_es: `Platón`, title_en: `Plato`, slug: `platon`,
    content_es: `Platón (c. 427-347 a.C.) fue un filósofo griego, discípulo de Sócrates y maestro de Aristóteles. Fundó la Academia de Atenas, la primera institución de educación superior occidental. Su obra, escrita en diálogos, aborda metafísica, epistemología, ética, política y estética.

La teoría de las Ideas es el núcleo de su filosofía. El mundo sensible es una copia imperfecta de un mundo inteligible de Ideas perfectas. Solo la razón puede comprender las Ideas.

El mito de la caverna (La República) ilustra esta teoría: prisioneros confunden sombras con realidad hasta que uno escapa y ve la luz del sol (el Bien).

En política, propuso un Estado ideal gobernado por filósofos-reyes. Criticó la democracia que condenó a Sócrates.

La Academia funcionó 900 años. Su influencia, a través del neoplatonismo, moldeó el pensamiento cristiano medieval.`,
    content_en: `Plato (c. 427-347 BC) was a Greek philosopher, disciple of Socrates and teacher of Aristotle. He founded the Academy of Athens, the first institution of higher education in the Western world. His work, written as dialogues, addresses metaphysics, epistemology, ethics, politics, and aesthetics.

The Theory of Ideas is the core of his philosophy. The sensible world is an imperfect copy of an intelligible world of perfect Ideas. Only reason can comprehend the Ideas.

The Allegory of the Cave (The Republic) illustrates this: prisoners mistake shadows for reality until one escapes and sees the light of the sun (the Good).

In politics, he proposed an ideal state ruled by philosopher-kings. He criticized the democracy that condemned Socrates.

The Academy functioned for 900 years. His influence, through Neoplatonism, shaped medieval Christian thought.`,
    excerpt_es: `Discípulo de Sócrates, fundador de la Academia y creador de la teoría de las Ideas.`, excerpt_en: `Disciple of Socrates, founder of the Academy and creator of the Theory of Ideas.`, categoryId: `cat-ancient-philosophers`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-03-24T00:00:00Z`, updatedAt: `2026-03-25T00:00:00Z`,
  },
  {
    id: `entry-tomas-de-aquino`, title_es: `Tomás de Aquino`, title_en: `Thomas Aquinas`, slug: `tomas-de-aquino`,
    content_es: `Tomás de Aquino (1225-1274) fue un teólogo y filósofo italiano de la Orden Dominicana, la figura más importante de la escolástica medieval. Su Suma Teológica es uno de los textos más influyentes de la filosofía cristiana.

Su proyecto fue integrar la filosofía aristotélica con la teología cristiana. Distinguió entre razón y fe: ambas provienen de Dios y no pueden contradecirse.

Sus cinco vías para demostrar la existencia de Dios son famosas: movimiento, causalidad, contingencia, grados de perfección y orden teleológico.

Desarrolló una teoría ética basada en la ley natural: el bien perfecciona la naturaleza humana, y la moral consiste en actuar según la razón.

Su síntesis de fe y razón ha sido adoptada como filosofía oficial de la Iglesia Católica (neotomismo).`,
    content_en: `Thomas Aquinas (1225-1274) was an Italian theologian and philosopher of the Dominican Order, the most important figure of medieval Scholasticism. His Summa Theologica is one of the most influential texts of Christian philosophy.

His project was to integrate Aristotelian philosophy with Christian theology. He distinguished between reason and faith: both come from God and cannot contradict each other.

His five ways to demonstrate God's existence are famous: motion, causality, contingency, degrees of perfection, and teleological order.

He developed an ethical theory based on natural law: the good perfects human nature, and morality consists of acting according to reason.

His synthesis of faith and reason has been adopted as the official philosophy of the Catholic Church (Neo-Thomism).`,
    excerpt_es: `El teólogo medieval que integró el pensamiento aristotélico con la teología cristiana.`, excerpt_en: `The medieval theologian who integrated Aristotelian thought with Christian theology.`, categoryId: `cat-medieval-philosophers`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-03-27T00:00:00Z`, updatedAt: `2026-03-28T00:00:00Z`,
  },
  {
    id: `entry-averroes`, title_es: `Averroes`, title_en: `Averroes`, slug: `averroes`,
    content_es: `Averroes (Ibn Rushd, 1126-1198) fue un filósofo, médico y jurista andalusí, el más importante comentarista de Aristóteles en el mundo islámico. Nació en Córdoba en el apogeo almohade.

Dedicó su vida a comentar las obras de Aristóteles, demostrando que la filosofía aristotélica era compatible con el islam.

Su doctrina de la unidad del intelecto (el intelecto es único para toda la humanidad) fue controvertida. Defendía que la verdad filosófica y la religiosa son dos formas de acceder a la misma realidad.

Como médico, escribió el Kitab al-Kulliyat, una enciclopedia médica usada en Europa hasta el siglo XVII.

El averroísmo floreció en las universidades de París y Padua. Averroes representa la cúspide de la filosofía islámica en al-Ándalus.`,
    content_en: `Averroes (Ibn Rushd, 1126-1198) was an Andalusian philosopher, physician, and jurist, the most important commentator of Aristotle in the Islamic world. He was born in Cordoba at the height of Almohad rule.

He dedicated his life to commenting on Aristotle's works, demonstrating that Aristotelian philosophy was compatible with Islam.

His doctrine of the unity of the intellect (the intellect is single for all humanity) was controversial. He argued that philosophical and religious truth are two ways of accessing the same reality.

As a physician, he wrote the Kitab al-Kulliyat, a medical encyclopedia used in Europe until the 17th century.

Averroism flourished at the universities of Paris and Padua. Averroes represents the pinnacle of Islamic philosophy in al-Andalus.`,
    excerpt_es: `El gran filósofo andalusí, comentarista de Aristóteles, puente entre Oriente y Occidente.`, excerpt_en: `The great Andalusian philosopher, commentator of Aristotle, bridge between East and West.`, categoryId: `cat-medieval-philosophers`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-03-30T00:00:00Z`, updatedAt: `2026-03-31T00:00:00Z`,
  },
  {
    id: `entry-app`, title_es: `René Descartes`, title_en: `René Descartes`, slug: `rene-descartes`,
    content_es: `René Descartes (1596-1650) fue un filósofo, matemático y científico francés, padre de la filosofía moderna. Su "Cogito, ergo sum" ("Pienso, luego existo") se convirtió en el fundamento de la epistemología occidental.

Nació en La Haye y fue educado en el colegio jesuita de La Flèche. Insatisfecho con el estado del conocimiento, desarrolló un método basado en la duda metódica.

Su método tiene cuatro reglas: evidencia, análisis, síntesis y enumeración. Aplicó la duda a todo: los sentidos, el sueño y el mundo exterior, encontrando certeza solo en el acto de dudar (cogito).

Argumentó la existencia de Dios y la distinción entre alma y cuerpo (dualismo cartesiano).

En matemáticas, creó la geometría analítica, uniendo álgebra y geometría. Murió en Estocolmo.`,
    content_en: `René Descartes (1596-1650) was a French philosopher, mathematician, and scientist, father of modern philosophy. His "Cogito, ergo sum" ("I think, therefore I am") became the foundation of Western epistemology.

He was born in La Haye and educated at the Jesuit college of La Flèche. Dissatisfied with the state of knowledge, he developed a method based on systematic doubt.

His method has four rules: evidence, analysis, synthesis, and enumeration. He applied doubt to everything: the senses, dreaming, and the external world, finding certainty only in the act of doubting (cogito).

He argued for God's existence and the distinction between mind and body (Cartesian dualism).

In mathematics, he created analytic geometry, uniting algebra and geometry. He died in Stockholm.`,
    excerpt_es: `El padre de la filosofía moderna, creador del "Cogito, ergo sum".`, excerpt_en: `The father of modern philosophy, creator of "Cogito, ergo sum."`, categoryId: `cat-modern-philosophers`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-04-02T00:00:00Z`, updatedAt: `2026-04-03T00:00:00Z`,
  },
  {
    id: `entry-kant`, title_es: `Immanuel Kant`, title_en: `Immanuel Kant`, slug: `immanuel-kant`,
    content_es: `Immanuel Kant (1724-1804) fue un filósofo alemán, figura central de la filosofía moderna. Su "filosofía crítica" o "idealismo trascendental" sintetiza el racionalismo y el empirismo. Sus tres Críticas redefinieron la metafísica, la ética y la estética.

En la Crítica de la Razón Pura propuso su "revolución copernicana": los objetos deben adaptarse a nuestras formas de conocer. Distinguió fenómeno (realidad percibida) de noúmeno (realidad en sí, incognoscible).

Su ética se basa en el imperativo categórico: "Obra según una máxima que puedas querer que sea ley universal". La moral depende de la razón, no de las consecuencias.

Su influencia abarca el idealismo alemán, la fenomenología, la ética del discurso y la teoría política.

Su pregunta "¿Qué es la Ilustración?" sigue siendo un referente para entender la modernidad.`,
    content_en: `Immanuel Kant (1724-1804) was a German philosopher, a central figure of modern philosophy. His "critical philosophy" or "transcendental idealism" synthesizes rationalism and empiricism. His three Critiques redefined metaphysics, ethics, and aesthetics.

In the Critique of Pure Reason he proposed a "Copernican revolution": objects must conform to our forms of knowing. He distinguished phenomenon (perceived reality) from noumenon (reality in itself, unknowable).

His ethics is based on the categorical imperative: "Act according to a maxim you can will to be universal law." Morality depends on reason, not consequences.

His influence spans German idealism, phenomenology, discourse ethics, and political theory.

His question "What is Enlightenment?" remains a reference for understanding modernity.`,
    excerpt_es: `El filósofo alemán que revolucionó la metafísica y la ética con su filosofía crítica.`, excerpt_en: `The German philosopher who revolutionized metaphysics and ethics with his critical philosophy.`, categoryId: `cat-modern-philosophers`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-04-05T00:00:00Z`, updatedAt: `2026-04-06T00:00:00Z`,
  },
  {
    id: `entry-nietzsche`, title_es: `Friedrich Nietzsche`, title_en: `Friedrich Nietzsche`, slug: `friedrich-nietzsche`,
    content_es: `Friedrich Nietzsche (1844-1900) fue un filósofo alemán, uno de los pensadores más influyentes y controvertidos. Su obra critica radicalmente la moral, la religión y la cultura occidentales.

Nietzsche estudió filología clásica y fue profesor en Basilea. Su salud frágil lo obligó a retirarse para escribir sus obras principales.

Su declaración "Dios ha muerto" es un diagnóstico de la crisis de valores modernos. Criticó la moral judeocristiana como una "moral de esclavos" que reprime los instintos vitales.

El Übermensch (superhombre) es su ideal de ser humano que crea sus propios valores. La voluntad de poder es la fuerza fundamental que impulsa la vida hacia la superación.

Sufrió un colapso mental en 1889. Su obra fue distorsionada por su hermana para asociarla con el nazismo, algo que estudiosos han corregido.`,
    content_en: `Friedrich Nietzsche (1844-1900) was a German philosopher, one of the most influential and controversial thinkers. His work radically criticizes Western morality, religion, and culture.

Nietzsche studied classical philology and was a professor in Basel. His fragile health forced him to retire to write his major works.

His declaration "God is dead" diagnoses the modern crisis of values. He criticized Judeo-Christian morality as a "slave morality" that represses vital instincts.

The Übermensch (Overman) is his ideal of a human who creates their own values. The will to power is the fundamental force driving life toward overcoming.

He suffered a mental collapse in 1889. His work was distorted by his sister to associate it with Nazism, which scholars have corrected.`,
    excerpt_es: `El filósofo alemán que proclamó la muerte de Dios y creó el concepto del superhombre.`, excerpt_en: `The German philosopher who proclaimed the death of God and created the concept of the Overman.`, categoryId: `cat-contemporary-philosophers`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-04-08T00:00:00Z`, updatedAt: `2026-04-09T00:00:00Z`,
  },
  {
    id: `entry-sartre`, title_es: `Jean-Paul Sartre`, title_en: `Jean-Paul Sartre`, slug: `jean-paul-sartre`,
    content_es: `Jean-Paul Sartre (1905-1980) fue un filósofo, dramaturgo y novelista francés, figura central del existencialismo. Su obra abarca la filosofía, la literatura y la política, siempre con compromiso con la libertad humana.

Estudió en la École Normale Supérieure donde conoció a Simone de Beauvoir. Fue prisionero de guerra y participó en la Resistencia.

Su obra principal, El ser y la nada, distingue entre el "ser en sí" (cosas) y el "ser para sí" (conciencia). La conciencia es libre: "la existencia precede a la esencia".

"El hombre está condenado a ser libre" expresa que no podemos dejar de elegir. La "mala fe" es negar esta libertad.

Rechazó el Premio Nobel de Literatura en 1964. Su influencia alcanza el existencialismo, el teatro del absurdo y el feminismo.`,
    content_en: `Jean-Paul Sartre (1905-1980) was a French philosopher, playwright, and novelist, a central figure of existentialism. His work spans philosophy, literature, and politics, always committed to human freedom.

He studied at the École Normale Supérieure where he met Simone de Beauvoir. He was a prisoner of war and participated in the Resistance.

His main work, Being and Nothingness, distinguishes "being-in-itself" (things) from "being-for-itself" (consciousness). Consciousness is free: "existence precedes essence."

"Man is condemned to be free" expresses that we cannot stop choosing. "Bad faith" is denying this freedom.

He declined the Nobel Prize in Literature in 1964. His influence extends to existentialism, theater of the absurd, and feminism.`,
    excerpt_es: `El filósofo francés del existencialismo, defensor de la libertad radical.`, excerpt_en: `The French existentialist philosopher, champion of radical freedom.`, categoryId: `cat-contemporary-philosophers`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-04-11T00:00:00Z`, updatedAt: `2026-04-12T00:00:00Z`,
  },
  {
    id: `entry-estoicismo`, title_es: `Estoicismo`, title_en: `Stoicism`, slug: `estoicismo`,
    content_es: `El estoicismo es una escuela filosófica fundada por Zenón de Citio en Atenas alrededor del 300 a.C. Floreció durante los períodos helenístico y romano. Su nombre proviene del pórtico pintado (stoa poikilé) donde Zenón enseñaba.

Se divide en lógica, física y ética. Los estoicos concebían el universo gobernado por el Logos, una razón divina. La felicidad consiste en vivir de acuerdo con la naturaleza y la razón.

El núcleo ético es la distinción entre lo que depende de nosotros (juicios, deseos) y lo que no (salud, riqueza, fama). La virtud es el único bien verdadero.

Los principales estoicos romanos fueron Séneca, Epicteto y Marco Aurelio. Sus escritos prácticos ofrecen consejos sobre la adversidad y las emociones.

Ha experimentado un renacimiento en el siglo XXI, influyendo en la terapia cognitivo-conductual.`,
    content_en: `Stoicism is a philosophical school founded by Zeno of Citium in Athens around 300 BC. It flourished during the Hellenistic and Roman periods. Its name comes from the painted porch (stoa poikilé) where Zeno taught.

It is divided into logic, physics, and ethics. The Stoics conceived the universe governed by the Logos, a divine reason. Happiness consists of living according to nature and reason.

The ethical core is the distinction between what depends on us (judgments, desires) and what does not (health, wealth, fame). Virtue is the only true good.

The main Roman Stoics were Seneca, Epictetus, and Marcus Aurelius. Their practical writings offer advice on adversity and emotions.

It has experienced a renaissance in the 21st century, influencing cognitive-behavioral therapy.`,
    excerpt_es: `Escuela filosófica que enseña el dominio de las emociones mediante la razón.`, excerpt_en: `Philosophical school teaching mastery of emotions through reason.`, categoryId: `cat-philosophical-schools`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-04-14T00:00:00Z`, updatedAt: `2026-04-15T00:00:00Z`,
  },
  {
    id: `entry-existencialismo`, title_es: `Existencialismo`, title_en: `Existentialism`, slug: `existencialismo`,
    content_es: `El existencialismo es una corriente filosófica de los siglos XIX-XX que se enfoca en la existencia individual, la libertad, la elección y la responsabilidad. Sostiene que el ser humano se define a través de sus acciones, no por una esencia predeterminada.

Sus antecedentes son Kierkegaard (fe absurda) y Nietzsche. Martin Heidegger analizó el "ser ahí" (Dasein) en Ser y Tiempo.

Sartre popularizó el movimiento con "El existencialismo es un humanismo" y la frase "la existencia precede a la esencia".

Temas centrales: angustia (conciencia de la libertad), absurdidad, autenticidad y la muerte como horizonte.

Camus exploró temas afines en El mito de Sísifo. Beauvoir aplicó el existencialismo al feminismo. Ha influido en la psicoterapia, la literatura y el teatro.`,
    content_en: `Existentialism is a philosophical movement of the 19th-20th centuries focusing on individual existence, freedom, choice, and responsibility. It holds that human beings define themselves through their actions, not by a predetermined essence.

Its antecedents are Kierkegaard (absurd faith) and Nietzsche. Martin Heidegger analyzed "being-there" (Dasein) in Being and Time.

Sartre popularized the movement with "Existentialism Is a Humanism" and the phrase "existence precedes essence."

Central themes: anguish (awareness of freedom), absurdity, authenticity, and death as horizon.

Camus explored related themes in The Myth of Sisyphus. Beauvoir applied existentialism to feminism. It has influenced psychotherapy, literature, and theater.`,
    excerpt_es: `Corriente filosófica que enfatiza la libertad individual y la creación de significado.`, excerpt_en: `Philosophical movement emphasizing individual freedom and the creation of meaning.`, categoryId: `cat-philosophical-schools`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-04-17T00:00:00Z`, updatedAt: `2026-04-18T00:00:00Z`,
  },
  {
    id: `entry-bien-y-mal`, title_es: `El Bien y el Mal`, title_en: `Good and Evil`, slug: `bien-y-mal`,
    content_es: `La distinción entre el bien y el mal es una cuestión fundamental de la filosofía, la ética y la religión. Diferentes tradiciones han propuesto criterios diversos sobre qué acciones son moralmente correctas.

Para Platón, el bien es la Idea suprema. Para Aristóteles, el bien consiste en vivir según la razón y cultivar virtudes. El mal es una privación del bien.

Las religiones abrahámicas presentan el bien como la voluntad de Dios. La teodicea intenta reconciliar el mal con la bondad divina.

Kant fundamentó la moral en el imperativo categórico. Nietzsche criticó la moral tradicional como una construcción de los débiles.

Hannah Arendt acuñó "banalidad del mal" al analizar a Eichmann: los grandes males pueden cometerse por falta de pensamiento crítico.`,
    content_en: `The distinction between good and evil is a fundamental question of philosophy, ethics, and religion. Different traditions have proposed various criteria for morally right actions.

For Plato, the good is the supreme Idea. For Aristotle, the good consists of living according to reason and cultivating virtues. Evil is a privation of good.

The Abrahamic religions present the good as God's will. Theodicy attempts to reconcile evil with divine goodness.

Kant grounded morality in the categorical imperative. Nietzsche criticized traditional morality as a construction of the weak.

Hannah Arendt coined "the banality of evil" analyzing Eichmann: great evils can be committed through lack of critical thinking.`,
    excerpt_es: `Una de las cuestiones fundamentales de la ética y la filosofía.`, excerpt_en: `One of the fundamental questions of ethics and philosophy.`, categoryId: `cat-philosophical-concepts`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-04-20T00:00:00Z`, updatedAt: `2026-04-21T00:00:00Z`,
  },
  {
    id: `entry-verdad`, title_es: `La Verdad`, title_en: `Truth`, slug: `la-verdad`,
    content_es: `La verdad es un concepto central de la filosofía, la epistemología y la lógica. Diversas teorías han propuesto qué significa que una proposición sea verdadera.

La teoría de la correspondencia (Aristóteles): una proposición es verdadera cuando se corresponde con los hechos. "La nieve es blanca" es verdadero si la nieve es blanca.

La teoría de la coherencia (Hegel): una proposición es verdadera si es coherente con el sistema de creencias aceptado.

La teoría pragmatista (James, Peirce): una creencia es verdadera si resulta útil en la experiencia.

Heidegger exploró la verdad como "desocultamiento" (aletheia). Foucault analizó la verdad como producto de relaciones de poder. La posverdad plantea nuevos desafíos.`,
    content_en: `Truth is a central concept of philosophy, epistemology, and logic. Various theories have proposed what it means for a proposition to be true.

The correspondence theory (Aristotle): a proposition is true when it corresponds to facts. "Snow is white" is true if snow is white.

The coherence theory (Hegel): a proposition is true if it coheres with the accepted system of beliefs.

The pragmatist theory (James, Peirce): a belief is true if it proves useful in experience.

Heidegger explored truth as "unconcealment" (aletheia). Foucault analyzed truth as a product of power relations. Post-truth poses new challenges.`,
    excerpt_es: `Concepto filosófico fundamental sobre la correspondencia entre pensamiento y realidad.`, excerpt_en: `Fundamental philosophical concept about the correspondence between thought and reality.`, categoryId: `cat-philosophical-concepts`, realityStatus: `philosophical`, imageUrl: '', createdAt: `2026-04-23T00:00:00Z`, updatedAt: `2026-04-24T00:00:00Z`,
  },
  {
    id: `entry-mecanica-cuantica`, title_es: `Mecánica Cuántica`, title_en: `Quantum Mechanics`, slug: `mecanica-cuantica`,
    content_es: `La mecánica cuántica es la rama de la física que estudia la materia a escalas atómicas y subatómicas. Desarrollada entre 1900 y 1930 por Planck, Einstein, Bohr, Heisenberg, Schrödinger y Dirac, revolucionó nuestra comprensión de la realidad.

Max Planck propuso en 1900 que la energía se emite en paquetes discretos (cuantos). Einstein aplicó esto al efecto fotoeléctrico (1905). Bohr desarrolló el modelo atómico cuántico (1913).

Principios clave: superposición (un sistema puede estar en múltiples estados simultáneamente), incertidumbre de Heisenberg (no se puede conocer posición y momento con precisión arbitraria) y dualidad onda-partícula.

El experimento de la doble rendija muestra que las partículas se comportan como ondas y partículas según cómo se observen.

La mecánica cuántica es la teoría más exitosa de la historia. Aplicaciones: semiconductores, resonancia magnética, criptografía cuántica y ordenadores cuánticos.`,
    content_en: `Quantum mechanics is the branch of physics studying matter at atomic and subatomic scales. Developed between 1900 and 1930 by Planck, Einstein, Bohr, Heisenberg, Schrödinger, and Dirac, it revolutionized our understanding of reality.

Max Planck proposed in 1900 that energy is emitted in discrete packets (quanta). Einstein applied this to the photoelectric effect (1905). Bohr developed the quantum atomic model (1913).

Key principles: superposition (a system can be in multiple states simultaneously), Heisenberg uncertainty (position and momentum cannot both be known precisely), and wave-particle duality.

The double-slit experiment shows particles behave as both waves and particles depending on observation.

Quantum mechanics is the most successful theory in history. Applications: semiconductors, MRI, quantum cryptography, and quantum computers.`,
    excerpt_es: `La teoría que describe el comportamiento de la materia a escala atómica.`, excerpt_en: `The theory describing matter behavior at the atomic scale.`, categoryId: `cat-physics`, realityStatus: `scientific`, imageUrl: '', createdAt: `2026-04-26T00:00:00Z`, updatedAt: `2026-04-27T00:00:00Z`,
  },
  {
    id: `entry-termodinamica`, title_es: `Termodinámica`, title_en: `Thermodynamics`, slug: `termodinamica`,
    content_es: `La termodinámica estudia el calor, la temperatura y las transformaciones de energía. Sus leyes rigen desde los motores hasta la evolución del universo. Es esencial para la química, la biología y la ingeniería.

Se desarrolló durante la Revolución Industrial. Carnot sentó sus bases, Joule demostró la equivalencia calor-trabajo, y Clausius y Kelvin formularon las leyes.

Primera ley: la energía no se crea ni se destruye, solo se transforma (conservación de la energía).

Segunda ley: la entropía del universo tiende a aumentar. El calor fluye de lo caliente a lo frío. Las máquinas perfectas son imposibles.

Tercera ley: es imposible alcanzar el cero absoluto. La termodinámica explica la "flecha del tiempo".`,
    content_en: `Thermodynamics studies heat, temperature, and energy transformations. Its laws govern everything from engines to the evolution of the universe. It is essential for chemistry, biology, and engineering.

It developed during the Industrial Revolution. Carnot laid its foundations, Joule demonstrated the heat-work equivalence, and Clausius and Kelvin formulated the laws.

First law: energy is neither created nor destroyed, only transformed (conservation of energy).

Second law: the entropy of the universe tends to increase. Heat flows from hot to cold. Perfect machines are impossible.

Third law: absolute zero is unattainable. Thermodynamics explains the "arrow of time."`,
    excerpt_es: `Las leyes que rigen la energía, el calor y la entropía del universo.`, excerpt_en: `The laws governing energy, heat, and the entropy of the universe.`, categoryId: `cat-physics`, realityStatus: `scientific`, imageUrl: '', createdAt: `2026-04-29T00:00:00Z`, updatedAt: `2026-04-30T00:00:00Z`,
  },
  {
    id: `entry-genetica`, title_es: `Genética`, title_en: `Genetics`, slug: `genetica`,
    content_es: `La genética es la rama de la biología que estudia los genes, la herencia y la variación en los organismos vivos. Comienza con Mendel (1865) y sus experimentos con guisantes, donde descubrió las leyes de la herencia. Mendel identificó que los caracteres se transmiten mediante "factores" (hoy genes) en pares, con patrones dominantes y recesivos.

En 1953, Watson y Crick descubrieron la estructura de doble hélice del ADN, basándose en los rayos X de Rosalind Franklin. El ADN contiene el código genético que determina las características de cada organismo.

El código genético está formado por cuatro bases (A, T, G, C) que se combinan en tripletes (codones). Cada codón especifica un aminoácido, y la secuencia de aminoácidos determina las proteínas.

El Proyecto Genoma Humano (1990-2003) secuenció los aproximadamente 20,000 genes humanos. La edición genética con CRISPR-Cas9 permite modificar genes con precisión.

La genética tiene aplicaciones en medicina (diagnóstico, terapia génica), agricultura (cultivos transgénicos) y biotecnología. También plantea dilemas éticos sobre la manipulación genética.`,
    content_en: `Genetics is the branch of biology studying genes, heredity, and variation in living organisms. It begins with Mendel (1865) and his pea experiments, where he discovered the laws of inheritance. Mendel identified that traits are transmitted through "factors" (now genes) in pairs, with dominant and recessive patterns.

In 1953, Watson and Crick discovered the double helix structure of DNA, based on Rosalind Franklin's X-ray data. DNA contains the genetic code that determines each organism's characteristics.

The genetic code consists of four bases (A, T, G, C) combined in triplets (codons). Each codon specifies an amino acid, and the amino acid sequence determines proteins.

The Human Genome Project (1990-2003) sequenced the approximately 20,000 human genes. CRISPR-Cas9 gene editing allows precise gene modification.

Genetics has applications in medicine (diagnosis, gene therapy), agriculture (transgenic crops), and biotechnology. It also raises ethical dilemmas about genetic manipulation.`,
    excerpt_es: `La ciencia de los genes, la herencia y el ADN que revoluciona la medicina y la biotecnología.`, excerpt_en: `The science of genes, heredity, and DNA revolutionizing medicine and biotechnology.`, categoryId: `cat-biology`, realityStatus: `scientific`, imageUrl: '', createdAt: `2026-05-02T00:00:00Z`, updatedAt: `2026-05-03T00:00:00Z`,
  },
  {
    id: `entry-ecologia`, title_es: `Ecología`, title_en: `Ecology`, slug: `ecologia`,
    content_es: `La ecología es la ciencia que estudia las relaciones entre los organismos vivos y su entorno. El término fue acuñado por Ernst Haeckel en 1866. Examina cómo los organismos interactúan entre sí y con factores abióticos (clima, suelo, agua).

Los niveles de organización ecológica son: individuo, población (individuos de la misma especie), comunidad (poblaciones de diferentes especies), ecosistema (comunidad + entorno físico) y biosfera (todos los ecosistemas).

Los ecosistemas funcionan mediante flujos de energía (cadena trófica: productores, consumidores, descomponedores) y ciclos de nutrientes (carbono, nitrógeno, fósforo).

La biodiversidad es la variedad de vida en la Tierra, esencial para la estabilidad de los ecosistemas. La teoría de la evolución explica cómo surge la biodiversidad.

La ecología es fundamental para enfrentar desafíos como el cambio climático, la deforestación, la pérdida de biodiversidad y la contaminación.`,
    content_en: `Ecology is the science studying relationships between living organisms and their environment. The term was coined by Ernst Haeckel in 1866. It examines how organisms interact with each other and abiotic factors (climate, soil, water).

Ecological levels of organization: individual, population (same species individuals), community (different species populations), ecosystem (community + physical environment), and biosphere (all ecosystems).

Ecosystems function through energy flows (food chain: producers, consumers, decomposers) and nutrient cycles (carbon, nitrogen, phosphorus).

Biodiversity is the variety of life on Earth, essential for ecosystem stability. Evolution theory explains how biodiversity arises.

Ecology is fundamental for addressing challenges like climate change, deforestation, biodiversity loss, and pollution.`,
    excerpt_es: `La ciencia que estudia las relaciones entre los seres vivos y su entorno.`, excerpt_en: `The science studying relationships between living beings and their environment.`, categoryId: `cat-biology`, realityStatus: `scientific`, imageUrl: '', createdAt: `2026-05-05T00:00:00Z`, updatedAt: `2026-05-06T00:00:00Z`,
  },
  {
    id: `entry-tabla-periodica`, title_es: `Tabla Periódica`, title_en: `Periodic Table`, slug: `tabla-periodica`,
    content_es: `La tabla periódica es una disposición sistemática de los elementos químicos, organizados por su número atómico, configuración electrónica y propiedades químicas recurrentes. Es una de las herramientas más importantes de la química.

Dmitri Mendeléyev publicó la primera versión en 1869, ordenando los 63 elementos conocidos por peso atómico. Su genio fue predecir la existencia y propiedades de elementos aún no descubiertos (galio, escandio, germanio).

La tabla actual organiza 118 elementos en 7 períodos (filas) y 18 grupos (columnas). Los elementos del mismo grupo tienen propiedades químicas similares.

Grandes categorías: metales (izquierda), no metales (derecha) y metaloides (entre ambos). Los gases nobles (grupo 18) son inertes. Los halógenos (grupo 17) son muy reactivos.

La tabla periódica refleja la estructura electrónica de los átomos y es fundamental para predecir reacciones químicas y diseñar nuevos materiales.`,
    content_en: `The periodic table is a systematic arrangement of chemical elements, organized by atomic number, electron configuration, and recurring chemical properties. It is one of chemistry's most important tools.

Dmitri Mendeleev published the first version in 1869, ordering the 63 known elements by atomic weight. His genius was predicting the existence and properties of yet undiscovered elements (gallium, scandium, germanium).

The current table organizes 118 elements into 7 periods (rows) and 18 groups (columns). Elements in the same group have similar chemical properties.

Major categories: metals (left), nonmetals (right), and metalloids (between). Noble gases (group 18) are inert. Halogens (group 17) are highly reactive.

The periodic table reflects the electronic structure of atoms and is fundamental for predicting chemical reactions and designing new materials.`,
    excerpt_es: `La disposición sistemática de los elementos químicos, herramienta fundamental de la química.`, excerpt_en: `The systematic arrangement of chemical elements, a fundamental tool of chemistry.`, categoryId: `cat-chemistry`, realityStatus: `scientific`, imageUrl: '', createdAt: `2026-05-08T00:00:00Z`, updatedAt: `2026-05-09T00:00:00Z`,
  },
  {
    id: `entry-enlace-quimico`, title_es: `Enlace Químico`, title_en: `Chemical Bonding`, slug: `enlace-quimico`,
    content_es: `El enlace químico es la fuerza que mantiene unidos a los átomos en las moléculas y los cristales. Es fundamental para entender la estructura y propiedades de la materia. Hay tres tipos principales: iónico, covalente y metálico.

El enlace iónico se forma por transferencia de electrones entre átomos de electronegatividad muy diferente, como en el NaCl (sal). Los iones positivos y negativos se atraen electrostáticamente.

El enlace covalente se forma por compartición de electrones entre átomos, como en el H2O (agua) o el CH4 (metano). Puede ser simple, doble o triple según los pares de electrones compartidos.

El enlace metálico se da entre átomos del mismo metal, donde los electrones se deslocalizan formando un "mar de electrones" que explica la conductividad eléctrica y el brillo metálico.

Enlaces intermoleculares (puentes de hidrógeno, fuerzas de Van der Waals) son más débiles pero determinan propiedades como el punto de ebullición del agua.`,
    content_en: `Chemical bonding is the force holding atoms together in molecules and crystals. It is fundamental for understanding the structure and properties of matter. There are three main types: ionic, covalent, and metallic.

Ionic bonding forms by electron transfer between atoms of very different electronegativity, as in NaCl (salt). Positive and negative ions attract electrostatically.

Covalent bonding forms by electron sharing between atoms, as in H2O (water) or CH4 (methane). It can be single, double, or triple depending on shared electron pairs.

Metallic bonding occurs between atoms of the same metal, where electrons delocalize forming an "electron sea" explaining electrical conductivity and metallic luster.

Intermolecular bonds (hydrogen bonds, Van der Waals forces) are weaker but determine properties like water's boiling point.`,
    excerpt_es: `La fuerza que mantiene unidos a los átomos, determinando la estructura de toda la materia.`, excerpt_en: `The force holding atoms together, determining the structure of all matter.`, categoryId: `cat-chemistry`, realityStatus: `scientific`, imageUrl: '', createdAt: `2026-05-11T00:00:00Z`, updatedAt: `2026-05-12T00:00:00Z`,
  },
  {
    id: `entry-calculo`, title_es: `Cálculo`, title_en: `Calculus`, slug: `calculo`,
    content_es: `El cálculo es una rama fundamental de las matemáticas que estudia el cambio continuo. Fue desarrollado independientemente por Isaac Newton y Gottfried Wilhelm Leibniz en el siglo XVII. Es esencial para la física, la ingeniería, la economía y casi todas las ciencias.

El cálculo se divide en cálculo diferencial (que estudia tasas de cambio y pendientes) y cálculo integral (que estudia acumulación y áreas). El Teorema Fundamental del Cálculo conecta ambas ramas.

La derivada mide cómo cambia una función en un punto. Es la pendiente de la recta tangente. Aplicaciones: velocidades, aceleraciones, optimización de funciones.

La integral mide el área bajo una curva. Es la suma de infinitos infinitesimales. Aplicaciones: áreas, volúmenes, trabajo físico, probabilidades.

El cálculo ha evolucionado hacia el análisis matemático, las ecuaciones diferenciales y el cálculo multivariable.`,
    content_en: `Calculus is a fundamental branch of mathematics studying continuous change. It was independently developed by Isaac Newton and Gottfried Wilhelm Leibniz in the 17th century. It is essential for physics, engineering, economics, and almost all sciences.

Calculus is divided into differential calculus (studying rates of change and slopes) and integral calculus (studying accumulation and areas). The Fundamental Theorem of Calculus connects both branches.

The derivative measures how a function changes at a point. It is the slope of the tangent line. Applications: velocities, accelerations, function optimization.

The integral measures the area under a curve. It is the sum of infinitely many infinitesimals. Applications: areas, volumes, physical work, probabilities.

Calculus has evolved into mathematical analysis, differential equations, and multivariable calculus.`,
    excerpt_es: `La rama de las matemáticas que estudia el cambio continuo, fundamental para la ciencia moderna.`, excerpt_en: `The branch of mathematics studying continuous change, fundamental to modern science.`, categoryId: `cat-mathematics`, realityStatus: `scientific`, imageUrl: '', createdAt: `2026-05-14T00:00:00Z`, updatedAt: `2026-05-15T00:00:00Z`,
  },
  {
    id: `entry-teoria-numeros`, title_es: `Teoría de Números`, title_en: `Number Theory`, slug: `teoria-de-numeros`,
    content_es: `La teoría de números es la rama de las matemáticas que estudia las propiedades de los números enteros. Es una de las áreas más antiguas de las matemáticas, con orígenes en la Antigua Grecia, pero sigue siendo un campo activo de investigación.

Los números primos (divisibles solo por 1 y sí mismos) son los "átomos" de la aritmética. Euclides demostró que hay infinitos primos alrededor del 300 a.C. El Teorema Fundamental de la Aritmética establece que todo entero se factoriza de manera única en primos.

La conjetura de Goldbach (todo número par mayor que 2 es suma de dos primos) y la hipótesis de Riemann (sobre la distribución de los primos) son problemas abiertos famosos.

El Último Teorema de Fermat, conjeturado en 1637 y demostrado por Andrew Wiles en 1994, establece que xⁿ + yⁿ = zⁿ no tiene soluciones enteras para n > 2.

La teoría de números tiene aplicaciones en criptografía (RSA se basa en la dificultad de factorizar números grandes) y computación.`,
    content_en: `Number theory is the branch of mathematics studying properties of integers. It is one of the oldest areas of mathematics, originating in Ancient Greece, yet remains an active research field.

Prime numbers (divisible only by 1 and themselves) are the "atoms" of arithmetic. Euclid proved there are infinitely many primes around 300 BC. The Fundamental Theorem of Arithmetic states that every integer has a unique prime factorization.

Goldbach's conjecture (every even integer greater than 2 is the sum of two primes) and the Riemann hypothesis (about prime distribution) are famous open problems.

Fermat's Last Theorem, conjectured in 1637 and proved by Andrew Wiles in 1994, states that xⁿ + yⁿ = zⁿ has no integer solutions for n > 2.

Number theory has applications in cryptography (RSA relies on the difficulty of factoring large numbers) and computing.`,
    excerpt_es: `La rama de las matemáticas que estudia los números enteros y sus propiedades.`, excerpt_en: `The branch of mathematics studying integers and their properties.`, categoryId: `cat-mathematics`, realityStatus: `scientific`, imageUrl: '', createdAt: `2026-05-17T00:00:00Z`, updatedAt: `2026-05-18T00:00:00Z`,
  },
  {
    id: `entry-ada-lovelace`, title_es: `Ada Lovelace`, title_en: `Ada Lovelace`, slug: `ada-lovelace`,
    content_es: `Ada Lovelace (1815-1852) fue una matemática y escritora británica, considerada la primera programadora de la historia. Hija del poeta Lord Byron, fue educada en matemáticas por su madre, Anne Isabella Milbanke, quien quería alejarla de la "locura poética" de su padre.

Trabajó con Charles Babbage, inventor de la Máquina Analítica, un prototipo de computador mecánico. Ada tradujo un artículo del matemático italiano Luigi Menabrea sobre la máquina y añadió sus propias notas, que resultaron ser más extensas que el artículo original.

En sus notas, Ada describió un algoritmo para calcular los números de Bernoulli en la Máquina Analítica. Este algoritmo es considerado el primer programa de computadora de la historia. Comprendió que las máquinas podían manipular símbolos, no solo números.

Ada también previó aplicaciones de los computadores más allá del cálculo puro, sugiriendo que podrían componer música y crear gráficos.

El lenguaje de programación Ada, desarrollado por el Departamento de Defensa de EE.UU. en la década de 1980, fue nombrado en su honor.`,
    content_en: `Ada Lovelace (1815-1852) was a British mathematician and writer, considered the first programmer in history. Daughter of poet Lord Byron, she was educated in mathematics by her mother, Anne Isabella Milbanke, who wanted to steer her away from her father's "poetic madness."

She worked with Charles Babbage, inventor of the Analytical Engine, a mechanical computer prototype. Ada translated an article by Italian mathematician Luigi Menabrea about the machine and added her own notes, which proved longer than the original article.

In her notes, Ada described an algorithm for calculating Bernoulli numbers on the Analytical Engine. This algorithm is considered the first computer program in history. She understood that machines could manipulate symbols, not just numbers.

Ada also foresaw computer applications beyond pure calculation, suggesting they could compose music and create graphics.

The Ada programming language, developed by the US Department of Defense in the 1980s, was named in her honor.`,
    excerpt_es: `Matemática británica, considerada la primera programadora de la historia.`, excerpt_en: `British mathematician, considered the first programmer in history.`, categoryId: `cat-scientists`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-05-20T00:00:00Z`, updatedAt: `2026-05-21T00:00:00Z`,
  },
  {
    id: `entry-marie-curie`, title_es: `Marie Curie`, title_en: `Marie Curie`, slug: `marie-curie`,
    content_es: `Marie Curie (1867-1934) fue una física y química polaco-francesa, pionera en el estudio de la radiactividad. Es la única persona que ha ganado Premios Nobel en dos disciplinas científicas diferentes (Física 1903, Química 1911).

Nacida en Varsovia como Maria Skłodowska, se mudó a París para estudiar en la Sorbona. Allí conoció a Pierre Curie, con quien se casó y colaboró científicamente.

Descubrió dos elementos radiactivos: el polonio (nombrado en honor a su Polonia natal) y el radio. Acuñó el término "radiactividad" y desarrolló métodos para aislar isótopos radiactivos.

Durante la Primera Guerra Mundial, organizó unidades móviles de rayos X (las "petites Curies") para ayudar a los médicos en el frente de batalla.

Murió de anemia aplásica causada por su exposición prolongada a la radiación. Su legado incluye el desarrollo de la radioterapia contra el cáncer y la fundación del Instituto Curie en París.`,
    content_en: `Marie Curie (1867-1934) was a Polish-French physicist and chemist, pioneer in the study of radioactivity. She is the only person to have won Nobel Prizes in two different scientific disciplines (Physics 1903, Chemistry 1911).

Born in Warsaw as Maria Skłodowska, she moved to Paris to study at the Sorbonne. There she met Pierre Curie, whom she married and collaborated with scientifically.

She discovered two radioactive elements: polonium (named after her native Poland) and radium. She coined the term "radioactivity" and developed methods to isolate radioactive isotopes.

During World War I, she organized mobile X-ray units (the "petites Curies") to help doctors at the battlefront.

She died of aplastic anemia caused by prolonged radiation exposure. Her legacy includes the development of cancer radiotherapy and the founding of the Curie Institute in Paris.`,
    excerpt_es: `Pionera de la radiactividad, única persona en ganar Nobel en dos ciencias distintas.`, excerpt_en: `Pioneer of radioactivity, the only person to win Nobels in two different sciences.`, categoryId: `cat-scientists`, realityStatus: `historical`, imageUrl: '', createdAt: `2026-05-23T00:00:00Z`, updatedAt: `2026-05-24T00:00:00Z`,
  },
]

export const newSubsections: SeedSubsection[] = [
  {
    id: `sub-grecia-01`, entryId: `entry-grecia-antigua`, title_es: `Polis y democracia`, title_en: `Polis and democracy`,
    content_es: `La polis era la unidad política fundamental de la Antigua Grecia. Cada ciudad-estado funcionaba como una comunidad independiente con sus propias leyes, moneda y ejército. Atenas desarrolló la democracia directa en el siglo V a.C., donde los ciudadanos participaban en la Ekklesía (asamblea popular) y eran seleccionados por sorteo para cargos públicos. Sin embargo, la democracia ateniense excluía a mujeres, esclavos y metecos (extranjeros), que constituían la mayoría de la población.`,
    content_en: `The polis was the fundamental political unit of Ancient Greece. Each city-state functioned as an independent community with its own laws, currency, and army. Athens developed direct democracy in the 5th century BC, where citizens participated in the Ekklesia (popular assembly) and were selected by lottery for public office. However, Athenian democracy excluded women, slaves, and metics (foreigners), who constituted the majority of the population.`,
    order: 0,
  },
  {
    id: `sub-grecia-02`, entryId: `entry-grecia-antigua`, title_es: `Legado cultural`, title_en: `Cultural legacy`,
    content_es: `La Antigua Grecia nos legó la filosofía, el teatro, la historiografía, la geometría, la medicina hipocrática y los Juegos Olímpicos. Los templos griegos, especialmente el Partenón, establecieron los cánones arquitectónicos clásicos. La escultura griega alcanzó una perfección anatómica que no se superó hasta el Renacimiento. Autores como Homero, Sófocles y Aristóteles siguen siendo leídos y estudiados más de dos milenios después.`,
    content_en: `Ancient Greece bequeathed us philosophy, theater, historiography, geometry, Hippocratic medicine, and the Olympic Games. Greek temples, especially the Parthenon, established classical architectural canons. Greek sculpture achieved anatomical perfection not surpassed until the Renaissance. Authors such as Homer, Sophocles, and Aristotle continue to be read and studied over two millennia later.`,
    order: 1,
  },
  {
    id: `sub-persa-01`, entryId: `entry-imperio-persa`, title_es: `Organización administrativa`, title_en: `Administrative organization`,
    content_es: `Darío I dividió el imperio en aproximadamente 20 satrapías, cada una con un sátrapa (gobernador), un comandante militar y un inspector real. El sistema de caminos reales, con estaciones de relevo, permitía que los mensajes viajaran de Susa a Sardes (2.700 km) en siete días. El correo persa era tan eficiente que Herodoto escribió: "Ni la nieve, ni la lluvia, ni el calor, ni la oscuridad les impide cumplir su cometido".`,
    content_en: `Darius I divided the empire into approximately 20 satrapies, each with a satrap (governor), a military commander, and a royal inspector. The royal road system, with relay stations, allowed messages to travel from Susa to Sardis (2,700 km) in seven days. The Persian postal service was so efficient that Herodotus wrote: "Neither snow, nor rain, nor heat, nor darkness prevents them from fulfilling their duty."`,
    order: 0,
  },
  {
    id: `sub-persa-02`, entryId: `entry-imperio-persa`, title_es: `Legado cultural`, title_en: `Cultural legacy`,
    content_es: `El Imperio Persa dejó un legado duradero en la administración de imperios, la arquitectura monumental (Persépolis, Pasargada, Naqsh-e Rostam) y el arte. El zoroastrismo, religión fundada por Zoroastro, influyó en conceptos judíos y cristianos como el Mesías, el juicio final y el paraíso. El idioma persa y la literatura (Ferdousí, Hafez, Rumi) han enriquecido la cultura universal.`,
    content_en: `The Persian Empire left a lasting legacy in imperial administration, monumental architecture (Persepolis, Pasargadae, Naqsh-e Rostam), and art. Zoroastrianism, the religion founded by Zoroaster, influenced Jewish and Christian concepts such as the Messiah, final judgment, and paradise. The Persian language and literature (Ferdowsi, Hafez, Rumi) have enriched universal culture.`,
    order: 1,
  },
  {
    id: `sub-bizan-01`, entryId: `entry-imperio-bizantino`, title_es: `Arte y arquitectura`, title_en: `Art and architecture`,
    content_es: `Santa Sofía, construida por Justiniano en 537 d.C., es la obra maestra de la arquitectura bizantina. Su cúpula de 31 metros de diámetro parecía "suspendida del cielo por una cadena de oro" según Procopio. Los mosaicos bizantinos, con fondos dorados y figuras estilizadas, crearon un estilo que influyó en el arte islámico, ruso y renacentista. Los iconos religiosos eran considerados ventanas a lo divino.`,
    content_en: `Hagia Sophia, built by Justinian in 537 AD, is the masterpiece of Byzantine architecture. Its 31-meter diameter dome seemed "suspended from heaven by a golden chain" according to Procopius. Byzantine mosaics, with gold backgrounds and stylized figures, created a style influencing Islamic, Russian, and Renaissance art. Religious icons were considered windows to the divine.`,
    order: 0,
  },
  {
    id: `sub-bizan-02`, entryId: `entry-imperio-bizantino`, title_es: `El derecho romano`, title_en: `Roman law`,
    content_es: `El Corpus Juris Civilis de Justiniano recopiló y sistematizó siglos de jurisprudencia romana. Dividido en el Codex (constituciones imperiales), el Digesto (opiniones de juristas), las Institutas (manual para estudiantes) y las Novelas (leyes posteriores), esta obra se convirtió en la base del derecho civil en la mayoría de los países europeos. Su influencia perdura en los sistemas legales de Europa continental y América Latina.`,
    content_en: `Justinian's Corpus Juris Civilis compiled and systematized centuries of Roman jurisprudence. Divided into the Codex (imperial constitutions), the Digest (opinions of jurists), the Institutes (textbook for students), and the Novels (later laws), this work became the basis of civil law in most European countries. Its influence endures in the legal systems of continental Europe and Latin America.`,
    order: 1,
  },
  {
    id: `sub-islam-01`, entryId: `entry-califato-islamico`, title_es: `La Casa de la Sabiduría`, title_en: `The House of Wisdom`,
    content_es: `La Casa de la Sabiduría (Bayt al-Hikma) en Bagdad fue el centro intelectual más importante del mundo islámico. Fundada por el califa Al-Mamún en el siglo IX, albergaba una biblioteca, un observatorio y un centro de traducción donde eruditos de diferentes religiones traducían obras del griego, sánscrito, persa y siríaco al árabe. Preservaron y expandieron el conocimiento clásico que más tarde llegaría a Europa.`,
    content_en: `The House of Wisdom (Bayt al-Hikma) in Baghdad was the most important intellectual center of the Islamic world. Founded by Caliph Al-Mamun in the 9th century, it housed a library, an observatory, and a translation center where scholars of different religions translated works from Greek, Sanskrit, Persian, and Syriac into Arabic. They preserved and expanded classical knowledge that later reached Europe.`,
    order: 0,
  },
  {
    id: `sub-islam-02`, entryId: `entry-califato-islamico`, title_es: `Contribuciones científicas`, title_en: `Scientific contributions`,
    content_es: `Los científicos islámicos realizaron contribuciones fundamentales: Al-Juarizmi desarrolló el álgebra y los algoritmos; Ibn Sina (Avicena) escribió el Canon de Medicina, texto estándar en Europa hasta el siglo XVII; Alhacén revolucionó la óptica; Al-Razi identificó la viruela y el sarampión; Jabir ibn Hayyan sentó las bases de la química experimental. También avanzaron en astronomía, geografía y botánica.`,
    content_en: `Islamic scientists made fundamental contributions: Al-Khwarizmi developed algebra and algorithms; Ibn Sina (Avicenna) wrote the Canon of Medicine, a standard text in Europe until the 17th century; Alhazen revolutionized optics; Al-Razi identified smallpox and measles; Jabir ibn Hayyan laid the foundations of experimental chemistry. They also advanced astronomy, geography, and botany.`,
    order: 1,
  },
  {
    id: `sub-inca-01`, entryId: `entry-imperio-inca`, title_es: `Ingeniería y caminos`, title_en: `Engineering and roads`,
    content_es: `El Qhapaq Ñan o Camino Inca era una red de más de 40,000 km que conectaba todo el imperio. Incluía puentes colgantes de fibra vegetal, túneles tallados en la roca y escaleras que ascendían montañas. Los chasquis (corredores mensajeros) recorrían el sistema en relevos, llevando mensajes a una velocidad de hasta 240 km por día.`,
    content_en: `The Qhapaq Ñan or Inca Road was a network of over 40,000 km connecting the entire empire. It included suspension bridges of plant fiber, tunnels carved into rock, and stairways ascending mountains. The chasquis (runner messengers) traversed the system in relays, carrying messages at speeds up to 240 km per day.`,
    order: 0,
  },
  {
    id: `sub-inca-02`, entryId: `entry-imperio-inca`, title_es: `Agricultura y organización`, title_en: `Agriculture and organization`,
    content_es: `Los incas desarrollaron técnicas agrícolas avanzadas como terrazas de cultivo (andenes) en las laderas de los Andes, sistemas de irrigación con canales de piedra y la construcción de waru waru (camellones) para drenar suelos inundados. Cultivaban papas, maíz, quinoa y coca, y almacenaban excedentes en graneros estatales para distribuirlos en tiempos de necesidad.`,
    content_en: `The Incas developed advanced agricultural techniques such as cultivation terraces (andenes) on Andean slopes, irrigation systems with stone channels, and waru waru (raised fields) to drain flooded soils. They cultivated potatoes, maize, quinoa, and coca, and stored surpluses in state granaries for distribution in times of need.`,
    order: 1,
  },
  {
    id: `sub-maya-01`, entryId: `entry-civilizacion-maya`, title_es: `Calendario y astronomía`, title_en: `Calendar and astronomy`,
    content_es: `Los mayas desarrollaron un sistema calendárico de extraordinaria precisión. El Tzolk'in (260 días) se usaba para rituales, el Haab' (365 días) para agricultura, y la Cuenta Larga para la historia lineal. Su comprensión de los ciclos astronómicos era asombrosa: calcularon el año solar en 365.2420 días (cifra casi idéntica a la actual de 365.2422) y predijeron eclipses con precisión.`,
    content_en: `The Maya developed a calendrical system of extraordinary precision. The Tzolkin (260 days) was used for rituals, the Haab (365 days) for agriculture, and the Long Count for linear history. Their understanding of astronomical cycles was stunning: they calculated the solar year at 365.2420 days (nearly identical to today's 365.2422) and predicted eclipses with accuracy.`,
    order: 0,
  },
  {
    id: `sub-maya-02`, entryId: `entry-civilizacion-maya`, title_es: `Escritura y conocimiento`, title_en: `Writing and knowledge`,
    content_es: `El sistema de escritura maya combinaba logogramas (símbolos que representan palabras) y signos silábicos, permitiendo registrar cualquier concepto. Los mayas escribían libros plegables (códices) hechos de corteza de árbol recubierta de estuco. Solo sobreviven cuatro: el Códice de Dresde, Madrid, París y el Grolier. Los mayas también desarrollaron el concepto del cero en matemáticas, independientemente de otras culturas.`,
    content_en: `The Maya writing system combined logograms (symbols representing words) and syllabic signs, allowing any concept to be recorded. The Maya wrote folding books (codices) made of tree bark coated with stucco. Only four survive: the Dresden, Madrid, Paris, and Grolier codices. The Maya also developed the concept of zero in mathematics, independently of other cultures.`,
    order: 1,
  },
  {
    id: `sub-revfr-01`, entryId: `entry-revolucion-francesa`, title_es: `Causas y estallido`, title_en: `Causes and outbreak`,
    content_es: `Francia en 1789 estaba en bancarrota por su apoyo a la Revolución Americana y el lujo de la corte de Versalles. El sistema de Estados Generales, que no se reunía desde 1614, dio voz al Tercer Estado (98% de la población) que exigía reformas. El Juramento del Juego de Pelota (20 de junio de 1789) marcó el nacimiento de la soberanía nacional frente al absolutismo real.`,
    content_en: `France in 1789 was bankrupt from supporting the American Revolution and the luxury of the Versailles court. The Estates-General system, not convened since 1614, gave voice to the Third Estate (98% of the population) demanding reforms. The Tennis Court Oath (June 20, 1789) marked the birth of national sovereignty against royal absolutism.`,
    order: 0,
  },
  {
    id: `sub-revfr-02`, entryId: `entry-revolucion-francesa`, title_es: `El Terror y Napoleón`, title_en: `The Terror and Napoleon`,
    content_es: `El Comité de Salvación Pública, liderado por Robespierre, ejecutó a más de 16,000 "enemigos de la revolución" en la guillotina, incluyendo a María Antonieta, Danton y Lavoisier. El golpe de Estado de Napoleón en 1799 puso fin a la revolución, pero su código civil y las reformas administrativas consolidaron muchos logros revolucionarios. Los ideales de 1789 se extendieron por toda Europa.`,
    content_en: `The Committee of Public Safety, led by Robespierre, executed over 16,000 "enemies of the revolution" by guillotine, including Marie Antoinette, Danton, and Lavoisier. Napoleon's coup d'etat in 1799 ended the revolution, but his civil code and administrative reforms consolidated many revolutionary achievements. The ideals of 1789 spread throughout Europe.`,
    order: 1,
  },
  {
    id: `sub-muro-01`, entryId: `entry-caida-muro-berlin`, title_es: `Construcción y división`, title_en: `Construction and division`,
    content_es: `El Muro de Berlín fue construido en la noche del 12 al 13 de agosto de 1961 por el gobierno de la RDA para detener la emigración masiva hacia el oeste. Dividió familias, calles e incluso edificios. La Puerta de Brandeburgo quedó en tierra de nadie. Durante 28 años, el Muro fue el símbolo más potente de la división entre el bloque capitalista y el comunista.`,
    content_en: `The Berlin Wall was built on the night of August 12-13, 1961, by the GDR government to stop mass emigration to the west. It divided families, streets, and even buildings. The Brandenburg Gate became no-man's land. For 28 years, the Wall was the most powerful symbol of the division between the capitalist and communist blocs.`,
    order: 0,
  },
  {
    id: `sub-muro-02`, entryId: `entry-caida-muro-berlin`, title_es: `Legado y reunificación`, title_en: `Legacy and reunification`,
    content_es: `Tras la caída del Muro, Alemania se reunificó oficialmente el 3 de octubre de 1990. El proceso de integración fue costoso y complejo: la economía de la antigua RDA necesitaba una reconstrucción masiva. La caída del Muro aceleró la desintegración de la Unión Soviética (1991) y transformó el mapa político de Europa. Hoy, el Muro es recordado como una lección sobre la libertad y los peligros de la división ideológica.`,
    content_en: `After the Wall fell, Germany was officially reunified on October 3, 1990. The integration process was costly and complex: the former GDR economy needed massive reconstruction. The Wall's fall accelerated the disintegration of the Soviet Union (1991) and transformed Europe's political map. Today, the Wall is remembered as a lesson about freedom and the dangers of ideological division.`,
    order: 1,
  },
  {
    id: `sub-shiva-01`, entryId: `entry-shiva`, title_es: `Nataraja, el Señor de la Danza`, title_en: `Nataraja, Lord of the Dance`,
    content_es: `La representación de Shiva como Nataraja es una de las imágenes más icónicas del arte hindú. Baila dentro de un círculo de fuego que representa el cosmos, con una pierna levantada y la otra aplastando al demonio de la ignorancia. En sus manos lleva un tambor (que simboliza la creación), el fuego (destrucción), y hace gestos de bendición y protección. Su danza es el ciclo eterno de creación y destrucción.`,
    content_en: `The depiction of Shiva as Nataraja is one of the most iconic images of Hindu art. He dances within a circle of fire representing the cosmos, with one leg raised and the other crushing the demon of ignorance. His hands hold a drum (symbolizing creation), fire (destruction), and make gestures of blessing and protection. His dance is the eternal cycle of creation and destruction.`,
    order: 0,
  },
  {
    id: `sub-shiva-02`, entryId: `entry-shiva`, title_es: `El monte Kailash`, title_en: `Mount Kailash`,
    content_es: `El monte Kailash en el Tíbet es considerado la morada de Shiva. Millones de peregrinos hindúes, budistas, jainistas y bon hacen peregrinaciones a esta montaña sagrada. Según la tradición, Shiva medita en la cima del Kailash, y desde allí fluye el Ganges sagrado a través de su cabello enmarañado. La montaña es también el centro espiritual del universo en la cosmología hindú.`,
    content_en: `Mount Kailash in Tibet is considered the abode of Shiva. Millions of Hindu, Buddhist, Jain, and Bon pilgrims make pilgrimages to this sacred mountain. According to tradition, Shiva meditates atop Kailash, and from there the sacred Ganges flows through his matted hair. The mountain is also the spiritual center of the universe in Hindu cosmology.`,
    order: 1,
  },
  {
    id: `sub-vishnu-01`, entryId: `entry-vishnu`, title_es: `Los diez avatares`, title_en: `The ten avatars`,
    content_es: `Los Dashavatara son las diez encarnaciones principales de Vishnu, que descienden en diferentes eras (yugas) para restaurar el dharma. Desde Matsya (el pez que salvó a Manu del diluvio) hasta Kalki (el avatar futuro que vendrá al final de la era actual). Cada avatar responde a una necesidad específica del cosmos, mostrando la adaptabilidad de lo divino a las circunstancias humanas.`,
    content_en: `The Dashavatara are the ten principal incarnations of Vishnu, descending in different ages (yugas) to restore dharma. From Matsya (the fish that saved Manu from the flood) to Kalki (the future avatar who will come at the end of the current age). Each avatar responds to a specific cosmic need, showing the adaptability of the divine to human circumstances.`,
    order: 0,
  },
  {
    id: `sub-vishnu-02`, entryId: `entry-vishnu`, title_es: `El Bhagavad Gita`, title_en: `The Bhagavad Gita`,
    content_es: `El Bhagavad Gita es un diálogo filosófico entre Krishna y el guerrero Arjuna en el campo de batalla de Kurukshetra, parte del Mahabharata. Krishna enseña a Arjuna sobre el deber (dharma), el desapego, la devoción (bhakti) y el conocimiento (jnana). Es uno de los textos más importantes de la filosofía hindú, abordando la naturaleza del ser, la acción desinteresada y el camino hacia la liberación.`,
    content_en: `The Bhagavad Gita is a philosophical dialogue between Krishna and the warrior Arjuna on the battlefield of Kurukshetra, part of the Mahabharata. Krishna teaches Arjuna about duty (dharma), detachment, devotion (bhakti), and knowledge (jnana). It is one of the most important texts of Hindu philosophy, addressing the nature of being, selfless action, and the path to liberation.`,
    order: 1,
  },
  {
    id: `sub-meso-01`, entryId: `entry-mitologia-mesopotamica`, title_es: `La Epopeya de Gilgamesh`, title_en: `The Epic of Gilgamesh`,
    content_es: `La Epopeya de Gilgamesh, escrita en acadio sobre tablillas de arcilla en el siglo XVIII a.C., es la obra literaria más antigua conocida. Gilgamesh, rey semidivino de Uruk, y su amigo salvaje Enkidu emprenden aventuras que incluyen la derrota del gigante Humbaba y el toro celestial. Tras la muerte de Enkidu, Gilgamesh busca la inmortalidad, encontrando a Utnapishtim, quien sobrevivió al diluvio universal. La epopeya explora la amistad, la mortalidad y el significado de la vida.`,
    content_en: `The Epic of Gilgamesh, written in Akkadian on clay tablets in the 18th century BC, is the oldest known literary work. Gilgamesh, the semidivine king of Uruk, and his wild friend Enkidu embark on adventures including defeating the giant Humbaba and the celestial bull. After Enkidu's death, Gilgamesh seeks immortality, finding Utnapishtim, who survived the universal flood. The epic explores friendship, mortality, and the meaning of life.`,
    order: 0,
  },
  {
    id: `sub-meso-02`, entryId: `entry-mitologia-mesopotamica`, title_es: `Dioses y cosmología`, title_en: `Gods and cosmology`,
    content_es: `Los mesopotámicos concebían el universo como un disco plano rodeado por un océano, cubierto por una bóveda celeste. El inframundo era un lugar sombrío gobernado por Ereshkigal. Los dioses eran antropomórficos y a menudo impredecibles, y los humanos fueron creados para servirles. Cada ciudad tenía un dios patrono, y el rey era su representante en la tierra. La adivinación y la astrología eran prácticas religiosas centrales.`,
    content_en: `The Mesopotamians conceived the universe as a flat disk surrounded by an ocean, covered by a celestial vault. The underworld was a gloomy place ruled by Ereshkigal. The gods were anthropomorphic and often unpredictable, and humans were created to serve them. Each city had a patron god, and the king was their representative on earth. Divination and astrology were central religious practices.`,
    order: 1,
  },
  {
    id: `sub-japon-01`, entryId: `entry-mitologia-japonesa`, title_es: `Izanagi e Izanami`, title_en: `Izanagi and Izanami`,
    content_es: `Según el mito de creación, Izanagi e Izanami fueron la pareja divina que creó las islas de Japón removiendo las aguas primordiales con una lanza enjoyada. Izanami murió dando a luz al dios del fuego y descendió al Yomi (inframundo). Izanagi la siguió pero al ver su cuerpo putrefacto huyó. Al purificarse, de su ojo izquierdo nació Amaterasu, del derecho Tsukuyomi, y de su nariz Susanoo. Este mito establece el origen del sol, la luna y las tormentas.`,
    content_en: `According to the creation myth, Izanagi and Izanami were the divine couple who created the islands of Japan by stirring the primordial waters with a jeweled spear. Izanami died giving birth to the fire god and descended to Yomi (underworld). Izanagi followed but fled upon seeing her rotting body. While purifying himself, from his left eye was born Amaterasu, from his right Tsukuyomi, and from his nose Susanoo. This myth establishes the origin of sun, moon, and storms.`,
    order: 0,
  },
  {
    id: `sub-japon-02`, entryId: `entry-mitologia-japonesa`, title_es: `Amaterasu y el sintoísmo`, title_en: `Amaterasu and Shinto`,
    content_es: `Amaterasu Omikami es la deidad principal del sintoísmo. El mito de su ocultamiento en la cueva celestial, tras una disputa con Susanoo, sumió al mundo en la oscuridad. Los kami la atrajeron con una danza y un espejo, restaurando la luz. El santuario de Ise, dedicado a Amaterasu, es el más sagrado del Japón. El espejo sagrada (Yata no Kagami) es uno de los tres tesoros imperiales que simbolizan la legitimidad del emperador.`,
    content_en: `Amaterasu Omikami is the principal deity of Shinto. The myth of her hiding in the heavenly cave, after a quarrel with Susanoo, plunged the world into darkness. The kami lured her out with a dance and a mirror, restoring light. The Ise Grand Shrine, dedicated to Amaterasu, is the most sacred in Japan. The sacred mirror (Yata no Kagami) is one of the three imperial treasures symbolizing the emperor's legitimacy.`,
    order: 1,
  },
  {
    id: `sub-biblia-01`, entryId: `entry-la-biblia`, title_es: `Composición y estructura`, title_en: `Composition and structure`,
    content_es: `La Biblia fue escrita por decenas de autores en hebreo, arameo y griego. El canon bíblico fue definido gradualmente: el canon hebreo se fijó hacia el siglo I d.C., mientras que el canon cristiano se estableció entre los siglos II y IV d.C. La Septuaginta (traducción griega del Antiguo Testamento) fue utilizada por los primeros cristianos. El concilio de Hipona (393 d.C.) fijó el canon católico, que incluye los deuterocanónicos.`,
    content_en: `The Bible was written by dozens of authors in Hebrew, Aramaic, and Greek. The biblical canon was defined gradually: the Hebrew canon was fixed around the 1st century AD, while the Christian canon was established between the 2nd and 4th centuries AD. The Septuagint (Greek translation of the Old Testament) was used by early Christians. The Council of Hippo (393 AD) fixed the Catholic canon, including the deuterocanonical books.`,
    order: 0,
  },
  {
    id: `sub-biblia-02`, entryId: `entry-la-biblia`, title_es: `Influencia cultural`, title_en: `Cultural influence`,
    content_es: `La Biblia ha influido en innumerables obras de arte, desde la Capilla Sixtina de Miguel Ángel hasta las esculturas de Donatello. En literatura, ha inspirado a Dante, Milton (El Paraíso Perdido), Dostoyevski y Tolstói. Las citas bíblicas están presentes en discursos políticos (MLK, Lincoln). Las expresiones "paraíso terrenal", "buen samaritano", "hijo pródigo" y "lágrimas de cocodrilo" provienen de la Biblia.`,
    content_en: `The Bible has influenced countless works of art, from Michelangelo's Sistine Chapel to Donatello's sculptures. In literature, it has inspired Dante, Milton (Paradise Lost), Dostoevsky, and Tolstoy. Biblical quotations appear in political speeches (MLK, Lincoln). Expressions like "earthly paradise," "good Samaritan," "prodigal son," and "crocodile tears" come from the Bible.`,
    order: 1,
  },
  {
    id: `sub-coran-01`, entryId: `entry-el-coran`, title_es: `Revelación y compilación`, title_en: `Revelation and compilation`,
    content_es: `La primera revelación ocurrió en la cueva de Hira en el 610 d.C., cuando el ángel Gabriel ordenó a Mahoma "Recita" (Iqra). Las revelaciones continuaron hasta la muerte del profeta. Los compañeros de Mahoma memorizaban y escribían los versículos en cualquier material disponible: huesos, piedras, hojas de palmera. Tras la batalla de Yamama (633 d.C.), donde murieron muchos memorizadores, se decidió compilar el Corán en forma de libro.`,
    content_en: `The first revelation occurred in the Cave of Hira in 610 AD, when the angel Gabriel commanded Muhammad "Recite" (Iqra). Revelations continued until the prophet's death. Muhammad's companions memorized and wrote verses on any available material: bones, stones, palm leaves. After the Battle of Yamama (633 AD), where many memorizers died, it was decided to compile the Quran into book form.`,
    order: 0,
  },
  {
    id: `sub-coran-02`, entryId: `entry-el-coran`, title_es: `Estructura y contenido`, title_en: `Structure and content`,
    content_es: `Las suras del Corán se dividen en dos períodos: las reveladas en La Meca (suras mequíes), generalmente más cortas y centradas en la fe, el monoteísmo y el juicio final; y las reveladas en Medina (suras mediníes), más largas y centradas en la legislación, la organización social y las relaciones con otras comunidades. El Corán es también la fuente principal de la ley islámica (sharia).`,
    content_en: `The Quran's surahs are divided into two periods: those revealed in Mecca (Meccan surahs), generally shorter and focused on faith, monotheism, and final judgment; and those revealed in Medina (Medinan surahs), longer and focused on legislation, social organization, and relations with other communities. The Quran is also the primary source of Islamic law (sharia).`,
    order: 1,
  },
  {
    id: `sub-mahoma-01`, entryId: `entry-mahoma`, title_es: `Primera revelación`, title_en: `First revelation`,
    content_es: `En el año 610 d.C., durante un retiro espiritual en la cueva de Hira en el Monte Nur, el arcángel Gabriel se apareció a Mahoma y le ordenó "¡Recita!" (Iqra). Mahoma, que era analfabeto, respondió "No sé recitar". Gabriel lo abrazó fuerte y repitió la orden tres veces, hasta que Mahoma recitó los primeros versículos del Corán: "Recita en el nombre de tu Señor que creó, creó al hombre de un coágulo..." Esta experiencia lo aterrorizó, pero su esposa Jadiya lo consoló y creyó en su profecía.`,
    content_en: `In 610 AD, during a spiritual retreat in the Cave of Hira on Mount Nur, the archangel Gabriel appeared to Muhammad and commanded "Recite!" (Iqra). Muhammad, who was illiterate, replied "I cannot recite." Gabriel embraced him tightly and repeated the command three times, until Muhammad recited the first verses of the Quran: "Recite in the name of your Lord who created, created man from a clot..." The experience terrified him, but his wife Khadija comforted him and believed in his prophethood.`,
    order: 0,
  },
  {
    id: `sub-mahoma-02`, entryId: `entry-mahoma`, title_es: `La Hégira y Medina`, title_en: `The Hijra and Medina`,
    content_es: `La Hégira (emigración) de Mahoma de La Meca a Medina en el 622 d.C. marca el inicio del calendario islámico. En Medina, Mahoma estableció la primera mezquita, redactó la Constitución de Medina (que regulaba las relaciones entre musulmanes, judíos y paganos), y organizó la comunidad. Las batallas de Badr, Uhud y la Trinchera defendieron a los musulmanes. En el 630, Mahoma entró triunfante en La Meca sin derramamiento de sangre.`,
    content_en: `The Hijra (emigration) of Muhammad from Mecca to Medina in 622 AD marks the beginning of the Islamic calendar. In Medina, Muhammad established the first mosque, drafted the Constitution of Medina (regulating relations between Muslims, Jews, and pagans), and organized the community. The battles of Badr, Uhud, and the Trench defended the Muslims. In 630, Muhammad entered Mecca triumphantly without bloodshed.`,
    order: 1,
  },
  {
    id: `sub-moises-01`, entryId: `entry-moises`, title_es: `El Éxodo`, title_en: `The Exodus`,
    content_es: `El Éxodo es el evento fundacional del pueblo de Israel. Dios envió diez plagas sobre Egipto para convencer al faraón de liberar a los hebreos. Tras la décima plaga (muerte de los primogénitos), los israelitas salieron de Egipto. La Pascua judía (Pésaj) conmemora este evento. La travesía del Mar Rojo, donde las aguas se dividieron milagrosamente, es el momento central del Éxodo, simbolizando la liberación divina.`,
    content_en: `The Exodus is the foundational event of the people of Israel. God sent ten plagues upon Egypt to convince the pharaoh to free the Hebrews. After the tenth plague (death of the firstborn), the Israelites left Egypt. The Jewish Passover (Pesach) commemorates this event. The crossing of the Red Sea, where the waters miraculously parted, is the central moment of the Exodus, symbolizing divine liberation.`,
    order: 0,
  },
  {
    id: `sub-moises-02`, entryId: `entry-moises`, title_es: `Los Diez Mandamientos`, title_en: `The Ten Commandments`,
    content_es: `Los Diez Mandamientos fueron entregados a Moisés en el Monte Sinaí y son la base de la ley moral en el judaísmo y el cristianismo. Incluyen la prohibición de la idolatría, el asesinato, el adulterio, el robo y la falsedad, junto con el mandamiento de honrar a los padres y guardar el sábado. Han influido profundamente en los sistemas legales y éticos de Occidente. Moisés también recibió el resto de la Torá, los primeros cinco libros de la Biblia.`,
    content_en: `The Ten Commandments were given to Moses on Mount Sinai and are the foundation of moral law in Judaism and Christianity. They include prohibitions against idolatry, murder, adultery, theft, and falsehood, along with commands to honor parents and keep the Sabbath. They have profoundly influenced Western legal and ethical systems. Moses also received the rest of the Torah, the first five books of the Bible.`,
    order: 1,
  },
  {
    id: `sub-socr-01`, entryId: `entry-socrates`, title_es: `El método socrático`, title_en: `The Socratic method`,
    content_es: `El método socrático o mayéutica (del griego "dar a luz") consiste en el diálogo basado en preguntas y respuestas. Sócrates afirmaba que no enseñaba nada, sino que ayudaba a sus interlocutores a "parir" la verdad que ya llevaban dentro. Mediante preguntas hábiles, exponía las contradicciones en las creencias del otro, llevándolo a reconocer su ignorancia y luego a construir definiciones más sólidas de conceptos como la justicia, la virtud o el bien.`,
    content_en: `The Socratic method or maieutics (from Greek "to give birth") consists of dialogue based on questions and answers. Socrates claimed he taught nothing, but helped his interlocutors "give birth" to the truth already within them. Through skillful questioning, he exposed contradictions in the other's beliefs, leading them to recognize their ignorance and then build more solid definitions of concepts like justice, virtue, or the good.`,
    order: 0,
  },
  {
    id: `sub-socr-02`, entryId: `entry-socrates`, title_es: `Juicio y muerte`, title_en: `Trial and death`,
    content_es: `En el 399 a.C., Sócrates fue juzgado por un tribunal de 501 ciudadanos atenienses. Las acusaciones eran impiedad (no reconocer a los dioses de la ciudad) y corromper a la juventud. En su defensa (Apología de Platón), no pidió clemencia sino que afirmó ser un "tábano" enviado por los dioses para despertar a la ciudad. Fue condenado por 280 votos contra 221. Rechazó las oportunidades de huir y bebió cicuta serenamente, discutiendo sobre la inmortalidad del alma hasta el final.`,
    content_en: `In 399 BC, Socrates was tried by a court of 501 Athenian citizens. The charges were impiety (not recognizing the city's gods) and corrupting youth. In his defense (Plato's Apology), he did not plead for mercy but affirmed he was a "gadfly" sent by the gods to awaken the city. He was condemned by 280 votes against 221. He rejected opportunities to escape and drank hemlock serenely, discussing the immortality of the soul until the end.`,
    order: 1,
  },
  {
    id: `sub-plat-01`, entryId: `entry-platon`, title_es: `La teoría de las Ideas`, title_en: `The Theory of Ideas`,
    content_es: `Para Platón, el mundo que percibimos con los sentidos es cambiante e imperfecto. Detrás de él existe un mundo inteligible, eterno e inmutable poblado por las Ideas o Formas, que son los arquetipos perfectos de todo lo que existe. Por ejemplo, todos los caballos concretos participan de la Idea de Caballo. El conocimiento verdadero solo es posible de las Ideas, no de las apariencias sensibles. La Idea suprema es la del Bien, que ilumina todo lo demás como el sol.`,
    content_en: `For Plato, the world we perceive with our senses is changing and imperfect. Behind it exists an intelligible, eternal, and immutable world populated by Ideas or Forms, which are the perfect archetypes of everything that exists. For example, all concrete horses participate in the Idea of Horse. True knowledge is only possible of Ideas, not of sensible appearances. The supreme Idea is the Good, which illuminates everything else like the sun.`,
    order: 0,
  },
  {
    id: `sub-plat-02`, entryId: `entry-platon`, title_es: `La República`, title_en: `The Republic`,
    content_es: `La República es la obra política más importante de Platón. En ella describe una ciudad ideal gobernada por filósofos-reyes, aquellos que han contemplado el Bien y están capacitados para gobernar con sabiduría. La justicia consiste en que cada clase social —gobernantes, guardianes y productores— cumpla su función adecuada, sin interferir en las demás. Platón criticó la democracia ateniense por permitir que personas ignorantes tomaran decisiones políticas.`,
    content_en: `The Republic is Plato's most important political work. It describes an ideal city ruled by philosopher-kings, those who have contemplated the Good and are qualified to govern with wisdom. Justice consists of each social class — rulers, guardians, and producers — fulfilling its proper function without interfering in others. Plato criticized Athenian democracy for allowing ignorant people to make political decisions.`,
    order: 1,
  },
  {
    id: `sub-aqui-01`, entryId: `entry-tomas-de-aquino`, title_es: `Las cinco vías`, title_en: `The five ways`,
    content_es: `Las cinco vías de Tomás de Aquino son argumentos para demostrar la existencia de Dios partiendo de la experiencia sensible. La primera vía: todo lo que se mueve es movido por otro, por lo que debe haber un primer motor inmóvil. La segunda: las causas eficientes no pueden remontarse al infinito, debe haber una primera causa. La tercera: los seres contingentes requieren un ser necesario. La cuarta: los grados de perfección implican un ser perfectísimo. La quinta: el orden teleológico del universo implica una inteligencia ordenadora.`,
    content_en: `Aquinas' five ways are arguments to demonstrate God's existence based on sensory experience. First: everything that moves is moved by another, so there must be an unmoved mover. Second: efficient causes cannot regress infinitely, there must be a first cause. Third: contingent beings require a necessary being. Fourth: degrees of perfection imply a most perfect being. Fifth: the teleological order of the universe implies an ordering intelligence.`,
    order: 0,
  },
  {
    id: `sub-aqui-02`, entryId: `entry-tomas-de-aquino`, title_es: `Ley natural`, title_en: `Natural law`,
    content_es: `La teoría de la ley natural de Tomás de Aquino sostiene que existe una ley moral universal inscrita en la naturaleza humana, accesible a la razón y anterior a cualquier ley positiva. El primer principio de la ley natural es "hacer el bien y evitar el mal". De este principio derivan preceptos como preservar la vida, procrear y educar a los hijos, buscar la verdad y vivir en sociedad. Esta teoría ha influido enormemente en la ética y el derecho occidental.`,
    content_en: `Aquinas' natural law theory holds that there is a universal moral law inscribed in human nature, accessible to reason and prior to any positive law. The first principle of natural law is "do good and avoid evil." From this principle derive precepts such as preserving life, procreating and educating children, seeking truth, and living in society. This theory has enormously influenced Western ethics and law.`,
    order: 1,
  },
  {
    id: `sub-avrr-01`, entryId: `entry-averroes`, title_es: `Comentarios a Aristóteles`, title_en: `Commentaries on Aristotle`,
    content_es: `Averroes escribió tres tipos de comentarios a Aristóteles: menores (yawami), medios (taljis) y mayores (tafsir). Los comentarios mayores reproducían el texto completo de Aristóteles seguido de un análisis detallado. Su objetivo era restaurar la pureza del pensamiento aristotélico, que consideraba había sido distorsionado por filósofos anteriores como Avicena. En la Europa medieval, Averroes era conocido simplemente como "el Comentador", y Dante lo colocó en el Limbo junto a otros grandes filósofos.`,
    content_en: `Averroes wrote three types of commentaries on Aristotle: short (jawami), middle (taljis), and long (tafsir). The long commentaries reproduced Aristotle's complete text followed by detailed analysis. His goal was to restore the purity of Aristotelian thought, which he considered had been distorted by previous philosophers like Avicenna. In medieval Europe, Averroes was known simply as "the Commentator," and Dante placed him in Limbo alongside other great philosophers.`,
    order: 0,
  },
  {
    id: `sub-avrr-02`, entryId: `entry-averroes`, title_es: `La doble verdad`, title_en: `Double truth`,
    content_es: `Aunque a menudo se atribuye a Averroes la doctrina de la "doble verdad" (que una proposición puede ser verdadera en filosofía pero falsa en religión y viceversa), su posición real era más matizada: sostenía que la verdad es una, pero puede expresarse de diferentes maneras según la capacidad del público. La filosofía y la religión son caminos paralelos hacia la misma verdad, aunque la filosofía es superior porque alcanza la verdad mediante la demostración racional.`,
    content_en: `Although Averroes is often attributed with the doctrine of "double truth" (that a proposition can be true in philosophy but false in religion and vice versa), his actual position was more nuanced: he held that truth is one, but can be expressed in different ways according to the audience's capacity. Philosophy and religion are parallel paths to the same truth, though philosophy is superior because it reaches truth through rational demonstration.`,
    order: 1,
  },
  {
    id: `sub-desc-01`, entryId: `entry-app`, title_es: `La duda metódica`, title_en: `Methodical doubt`,
    content_es: `Descartes decidió dudar de todo lo que pudiera ser puesto en duda para encontrar una certeza indudable sobre la cual edificar el conocimiento. Dudo de los sentidos (a veces nos engañan), del sueño (no podemos distinguir con certeza la vigilia del sueño), y hasta de la realidad exterior (podría ser una ilusión creada por un genio maligno). Pero el acto mismo de dudar prueba la existencia de un sujeto que duda: "Cogito, ergo sum".`,
    content_en: `Descartes decided to doubt everything that could be doubted to find an indubitable certainty on which to build knowledge. He doubted the senses (they sometimes deceive us), dreaming (we cannot distinguish wakefulness from sleep with certainty), and even external reality (it could be an illusion created by an evil genius). But the very act of doubting proves the existence of a subject that doubts: "Cogito, ergo sum."`,
    order: 0,
  },
  {
    id: `sub-desc-02`, entryId: `entry-app`, title_es: `Dualismo cartesiano`, title_en: `Cartesian dualism`,
    content_es: `Descartes estableció una distinción radical entre la mente (res cogitans, cosa pensante) y el cuerpo (res extensa, cosa extensa). La mente es inmaterial, indivisible y consciente; el cuerpo es material, divisible y sigue las leyes de la física. Esta separación, conocida como dualismo cartesiano, resolvía problemas teológicos (inmortalidad del alma) pero creó el "problema mente-cuerpo": ¿cómo interactúan dos sustancias tan diferentes? Este problema sigue siendo central en la filosofía de la mente.`,
    content_en: `Descartes established a radical distinction between the mind (res cogitans, thinking thing) and the body (res extensa, extended thing). The mind is immaterial, indivisible, and conscious; the body is material, divisible, and follows physical laws. This separation, known as Cartesian dualism, resolved theological problems (immortality of the soul) but created the "mind-body problem": how do two such different substances interact? This problem remains central in philosophy of mind.`,
    order: 1,
  },
  {
    id: `sub-kant-01`, entryId: `entry-kant`, title_es: `La revolución copernicana`, title_en: `The Copernican revolution`,
    content_es: `Kant invirtió la relación tradicional entre sujeto y objeto en el conocimiento. Hasta él, se suponía que el conocimiento debía adaptarse a los objetos. Kant propuso que son los objetos los que deben adaptarse a las estructuras a priori de nuestra sensibilidad (espacio y tiempo) y nuestro entendimiento (categorías). Así, conocemos los fenómenos, no las cosas en sí mismas (noúmenos). El espacio y el tiempo no son propiedades del mundo, sino formas de nuestra intuición.`,
    content_en: `Kant inverted the traditional relationship between subject and object in knowledge. Until him, knowledge was assumed to conform to objects. Kant proposed that objects must conform to the a priori structures of our sensibility (space and time) and understanding (categories). Thus, we know phenomena, not things in themselves (noumena). Space and time are not properties of the world but forms of our intuition.`,
    order: 0,
  },
  {
    id: `sub-kant-02`, entryId: `entry-kant`, title_es: `El imperativo categórico`, title_en: `The categorical imperative`,
    content_es: `El imperativo categórico es el principio supremo de la moralidad según Kant. Tiene varias formulaciones: "Obra solo según aquella máxima que puedas querer que se convierta en ley universal" y "Obra de tal modo que uses la humanidad, tanto en tu persona como en la de cualquier otro, siempre como un fin al mismo tiempo, y nunca solamente como un medio". La moral no depende de las consecuencias ni de la autoridad divina, sino de la razón práctica y la buena voluntad.`,
    content_en: `The categorical imperative is the supreme principle of morality according to Kant. It has several formulations: "Act only according to that maxim whereby you can at the same time will that it should become a universal law" and "Act in such a way that you treat humanity, whether in your own person or in the person of any other, always at the same time as an end and never merely as a means." Morality depends neither on consequences nor divine authority, but on practical reason and good will.`,
    order: 1,
  },
  {
    id: `sub-niet-01`, entryId: `entry-nietzsche`, title_es: `La muerte de Dios`, title_en: `The death of God`,
    content_es: `La famosa frase "Dios ha muerto" aparece en Así habló Zaratustra y La gaya ciencia. No es una declaración de ateísmo triunfante, sino un diagnóstico: la creencia en el Dios cristiano se ha vuelto increíble para el hombre moderno. Esto no es motivo de celebración sino de crisis, porque con Dios muere también el fundamento de la moral y el sentido de la vida occidentales. El hombre moderno debe enfrentar el nihilismo y crear nuevos valores.`,
    content_en: `The famous phrase "God is dead" appears in Thus Spoke Zarathustra and The Gay Science. It is not a triumphant declaration of atheism but a diagnosis: belief in the Christian God has become unbelievable for modern man. This is not cause for celebration but crisis, because with God dies the foundation of Western morality and meaning. Modern man must confront nihilism and create new values.`,
    order: 0,
  },
  {
    id: `sub-niet-02`, entryId: `entry-nietzsche`, title_es: `El superhombre y el eterno retorno`, title_en: `The Overman and eternal recurrence`,
    content_es: `El Übermensch es aquel que ha superado la moral tradicional y creado sus propios valores, afirmando la vida en todas sus facetas. El eterno retorno es un experimento mental: si vivieras tu vida una y otra vez eternamente, ¿cambiarías algo? La afirmación del eterno retorno es la máxima expresión del amor fati (amor al destino): aceptar y querer la vida tal como es, con todo su sufrimiento y alegría. Esta idea Nietzsche la consideraba su pensamiento más profundo.`,
    content_en: `The Übermensch is one who has overcome traditional morality and created their own values, affirming life in all its facets. Eternal recurrence is a thought experiment: if you were to live your life over and over eternally, would you change anything? Affirming eternal recurrence is the highest expression of amor fati (love of fate): accepting and wanting life as it is, with all its suffering and joy. Nietzsche considered this his most profound thought.`,
    order: 1,
  },
  {
    id: `sub-sart-01`, entryId: `entry-sartre`, title_es: `La existencia precede a la esencia`, title_en: `Existence precedes essence`,
    content_es: `Para Sartre, a diferencia de los objetos fabricados (que primero existen en la mente del diseñador y luego se producen), el ser humano no tiene una esencia predefinida. Primero existe, nace en el mundo, y luego se define a través de sus acciones y elecciones. No hay naturaleza humana predeterminada, Dios ni destino. Cada persona es responsable de lo que es. Este es el punto de partida del existencialismo sartreano y la base de su ética de la responsabilidad radical.`,
    content_en: `For Sartre, unlike manufactured objects (which first exist in the designer's mind and are then produced), human beings have no predefined essence. First they exist, are born into the world, and then define themselves through their actions and choices. There is no predetermined human nature, God, or destiny. Each person is responsible for what they are. This is the starting point of Sartrean existentialism and the basis of his ethics of radical responsibility.`,
    order: 0,
  },
  {
    id: `sub-sart-02`, entryId: `entry-sartre`, title_es: `El compromiso político`, title_en: `Political commitment`,
    content_es: `Sartre fue un intelectual comprometido que aplicó su filosofía a la política. Criticó el colonialismo francés en Argelia, apoyó la Revolución Cubana y el Mayo del 68, y mantuvo una relación compleja con el marxismo. Fundó la revista Les Temps Modernes y participó en tribunales Russell contra los crímenes de guerra en Vietnam. Su concepto de "intelectual comprometido" ha sido un modelo para pensadores posteriores, aunque también recibió críticas por su apoyo a regímenes autoritarios.`,
    content_en: `Sartre was a committed intellectual who applied his philosophy to politics. He criticized French colonialism in Algeria, supported the Cuban Revolution and May 1968, and maintained a complex relationship with Marxism. He founded Les Temps Modernes magazine and participated in the Russell Tribunal against war crimes in Vietnam. His concept of the "committed intellectual" has been a model for later thinkers, though he also received criticism for supporting authoritarian regimes.`,
    order: 1,
  },
  {
    id: `sub-esto-01`, entryId: `entry-estoicismo`, title_es: `El dominio de las emociones`, title_en: `Mastery of emotions`,
    content_es: `Los estoicos distinguían entre emociones saludables (eupatheiai) y pasiones destructivas (pathē). La felicidad (eudaimonia) se alcanza mediante la apatheia, no como insensibilidad sino como liberación de las pasiones irracionales. La famosa frase de Epicteto resume su enfoque: "No son las cosas mismas las que nos perturban, sino las opiniones que tenemos de ellas". Esta idea ha influido directamente en la terapia cognitivo-conductual moderna.`,
    content_en: `The Stoics distinguished between healthy emotions (eupatheiai) and destructive passions (pathē). Happiness (eudaimonia) is achieved through apatheia, not as insensitivity but as freedom from irrational passions. Epictetus' famous phrase summarizes their approach: "It is not things themselves that disturb us, but our opinions about them." This idea has directly influenced modern cognitive-behavioral therapy.`,
    order: 0,
  },
  {
    id: `sub-esto-02`, entryId: `entry-estoicismo`, title_es: `Estoicismo moderno`, title_en: `Modern Stoicism`,
    content_es: `El estoicismo ha experimentado un notable resurgimiento en el siglo XXI. Autores como Ryan Holiday (El obstáculo es el camino, La quietud es la clave) han popularizado sus principios. La terapia cognitivo-conductual (TCC), desarrollada por Aaron Beck y Albert Ellis, comparte con el estoicismo la idea de que nuestros pensamientos, no los eventos externos, determinan nuestro bienestar emocional. El énfasis estoico en la resiliencia y el autocontrol resuena en tiempos de incertidumbre.`,
    content_en: `Stoicism has experienced a remarkable resurgence in the 21st century. Authors like Ryan Holiday (The Obstacle Is the Way, Stillness Is the Key) have popularized its principles. Cognitive-behavioral therapy (CBT), developed by Aaron Beck and Albert Ellis, shares with Stoicism the idea that our thoughts, not external events, determine our emotional well-being. The Stoic emphasis on resilience and self-control resonates in times of uncertainty.`,
    order: 1,
  },
  {
    id: `sub-exis-01`, entryId: `entry-existencialismo`, title_es: `Angustia y libertad`, title_en: `Anguish and freedom`,
    content_es: `Para los existencialistas, la libertad es tanto una bendición como una carga. La angustia surge de la conciencia de que somos radicalmente libres y responsables: no hay excusas, no podemos culpar a Dios, la naturaleza o la sociedad por nuestras elecciones. Cada decisión nos define y, en cierto sentido, define a la humanidad entera. Esta responsabilidad es tan abrumadora que muchos caen en la "mala fe": pretender que no somos libres, que estamos determinados por circunstancias externas.`,
    content_en: `For existentialists, freedom is both a blessing and a burden. Anguish arises from the awareness that we are radically free and responsible: there are no excuses, we cannot blame God, nature, or society for our choices. Each decision defines us and, in a sense, defines all of humanity. This responsibility is so overwhelming that many fall into "bad faith": pretending we are not free, that we are determined by external circumstances.`,
    order: 0,
  },
  {
    id: `sub-exis-02`, entryId: `entry-existencialismo`, title_es: `El absurdo y la autenticidad`, title_en: `The absurd and authenticity`,
    content_es: `Camus definió el absurdo como la contradicción entre la necesidad humana de sentido y la indiferencia del universo. Ante el absurdo, propuso tres respuestas: el suicidio (rechazo), el salto de fe (religión) o la rebelión (aceptación sin resignación). Sísifo, condenado a empujar una piedra eternamente, es el héroe absurdo que encuentra significado en su lucha. La autenticidad consiste en vivir según los propios valores, no según expectativas sociales.`,
    content_en: `Camus defined the absurd as the contradiction between the human need for meaning and the universe's indifference. Facing the absurd, he proposed three responses: suicide (rejection), the leap of faith (religion), or rebellion (acceptance without resignation). Sisyphus, condemned to push a stone eternally, is the absurd hero who finds meaning in his struggle. Authenticity consists of living according to one's own values, not social expectations.`,
    order: 1,
  },
  {
    id: `sub-bien-01`, entryId: `entry-bien-y-mal`, title_es: `Perspectivas clásicas`, title_en: `Classical perspectives`,
    content_es: `En la tradición occidental, Platón identificó el Bien con la Idea suprema, fuente de toda realidad y conocimiento, más allá del ser mismo. Aristóteles desarrolló una ética de la virtud (areté): el bien humano consiste en la eudaimonia (florecimiento) alcanzada mediante la práctica de virtudes intelectuales y morales. Para Tomás de Aquino, el bien es lo que perfecciona la naturaleza humana según la ley natural. El mal, en esta tradición, no tiene existencia positiva sino que es ausencia o privación del bien debido.`,
    content_en: `In the Western tradition, Plato identified the Good with the supreme Idea, source of all reality and knowledge, beyond being itself. Aristotle developed an ethics of virtue (areté): human good consists of eudaimonia (flourishing) achieved through practicing intellectual and moral virtues. For Aquinas, the good is what perfects human nature according to natural law. Evil, in this tradition, has no positive existence but is absence or privation of due good.`,
    order: 0,
  },
  {
    id: `sub-bien-02`, entryId: `entry-bien-y-mal`, title_es: `La banalidad del mal`, title_en: `The banality of evil`,
    content_es: `Hannah Arendt cubrió el juicio de Adolf Eichmann en Jerusalén (1961) para The New Yorker. Lejos del monstruo que esperaba, encontró a un burócrata mediocre que cumplía órdenes sin reflexionar. Acuñó el término "banalidad del mal" para describir cómo personas ordinarias pueden cometer atrocidades simplemente por no pensar, por obedecer sin cuestionar. Esta idea desafía la concepción tradicional del mal como algo monstruoso y nos recuerda la importancia del pensamiento crítico y la responsabilidad individual.`,
    content_en: `Hannah Arendt covered the trial of Adolf Eichmann in Jerusalem (1961) for The New Yorker. Far from the monster she expected, she found a mediocre bureaucrat who followed orders without reflection. She coined "the banality of evil" to describe how ordinary people can commit atrocities simply by not thinking, by obeying without questioning. This idea challenges the traditional conception of evil as monstrous and reminds us of the importance of critical thinking and individual responsibility.`,
    order: 1,
  },
  {
    id: `sub-verd-01`, entryId: `entry-verdad`, title_es: `Teorías de la verdad`, title_en: `Theories of truth`,
    content_es: `Las tres teorías clásicas son: la correspondencia (verdad como adecuación entre mente y realidad), la coherencia (verdad como consistencia dentro de un sistema de proposiciones) y el pragmatismo (verdad como utilidad práctica). Cada una enfrenta problemas: la correspondencia lucha con verdades abstractas y proposiciones sobre el futuro; la coherencia puede admitir sistemas internamente consistentes pero falsos; el pragmatismo puede confundir verdad con conveniencia. Las teorías deflacionarias sostienen que "verdad" no nombra una propiedad real sino que es un recurso lingüístico.`,
    content_en: `The three classical theories are: correspondence (truth as adequacy between mind and reality), coherence (truth as consistency within a system of propositions), and pragmatism (truth as practical usefulness). Each faces problems: correspondence struggles with abstract truths and future propositions; coherence can admit internally consistent but false systems; pragmatism can confuse truth with convenience. Deflationary theories hold that "truth" does not name a real property but is a linguistic device.`,
    order: 0,
  },
  {
    id: `sub-verd-02`, entryId: `entry-verdad`, title_es: `Verdad y poder`, title_en: `Truth and power`,
    content_es: `Michel Foucault argumentó que la verdad no es independiente del poder, sino que está intrínsecamente ligada a los sistemas de poder que la producen y mantienen. Cada sociedad tiene su "régimen de verdad": los tipos de discurso que acepta como verdaderos, los mecanismos que permiten distinguir lo verdadero de lo falso, y el estatus de quienes están encargados de decir la verdad. Esta perspectiva ha sido influyente en estudios culturales, sociología y teoría política.`,
    content_en: `Michel Foucault argued that truth is not independent of power but is intrinsically linked to the power systems that produce and maintain it. Each society has its "regime of truth": the types of discourse it accepts as true, the mechanisms for distinguishing true from false, and the status of those who are charged with speaking truth. This perspective has been influential in cultural studies, sociology, and political theory.`,
    order: 1,
  },
  {
    id: `sub-cuant-01`, entryId: `entry-mecanica-cuantica`, title_es: `Principios fundamentales`, title_en: `Fundamental principles`,
    content_es: `La superposición cuántica permite que una partícula exista en múltiples estados a la vez, como el famoso gato de Schrödinger (vivo y muerto simultáneamente). El principio de incertidumbre de Heisenberg establece un límite fundamental a la precisión con que podemos conocer pares de propiedades complementarias, como posición y momento. La dualidad onda-partícula, demostrada por el experimento de Young, muestra que la luz y la materia tienen naturaleza dual.`,
    content_en: `Quantum superposition allows a particle to exist in multiple states simultaneously, like Schrödinger's famous cat (alive and dead at the same time). Heisenberg's uncertainty principle sets a fundamental limit to the precision with which we can know pairs of complementary properties, like position and momentum. Wave-particle duality, demonstrated by Young's experiment, shows that light and matter have a dual nature.`,
    order: 0,
  },
  {
    id: `sub-cuant-02`, entryId: `entry-mecanica-cuantica`, title_es: `Aplicaciones tecnológicas`, title_en: `Technological applications`,
    content_es: `Los transistores, base de toda la electrónica moderna, funcionan gracias a la mecánica cuántica. Los láseres emiten luz coherente mediante emisión estimulada de fotones. La resonancia magnética nuclear (RMN) aprovecha el spin cuántico para obtener imágenes del interior del cuerpo. La criptografía cuántica promete comunicaciones imposibles de interceptar. La computación cuántica, aún en desarrollo, podría resolver problemas intratables para ordenadores clásicos.`,
    content_en: `Transistors, the basis of all modern electronics, function thanks to quantum mechanics. Lasers emit coherent light through stimulated emission of photons. Magnetic resonance imaging (MRI) uses quantum spin to image the body's interior. Quantum cryptography promises unbreakable communications. Quantum computing, still in development, could solve problems intractable for classical computers.`,
    order: 1,
  },
  {
    id: `sub-termo-01`, entryId: `entry-termodinamica`, title_es: `Las leyes de la termodinámica`, title_en: `The laws of thermodynamics`,
    content_es: `La primera ley afirma que la energía total de un sistema aislado es constante. La segunda ley, quizás la más profunda, introduce la entropía: en cualquier proceso natural, el desorden del universo aumenta. Esto explica por qué el tiempo tiene dirección (flecha del tiempo). La tercera ley establece que es imposible alcanzar el cero absoluto (-273.15°C o 0 K) mediante un número finito de procesos. La ley cero (establecida después) define el equilibrio térmico.`,
    content_en: `The first law states that the total energy of an isolated system is constant. The second law, perhaps the most profound, introduces entropy: in any natural process, the universe's disorder increases. This explains why time has direction (arrow of time). The third law establishes that absolute zero (-273.15°C or 0 K) is unattainable through a finite number of processes. The zeroth law (established later) defines thermal equilibrium.`,
    order: 0,
  },
  {
    id: `sub-termo-02`, entryId: `entry-termodinamica`, title_es: `Motores y entropía`, title_en: `Engines and entropy`,
    content_es: `La máquina de vapor de Watt impulsó la Revolución Industrial, y su estudio llevó a la termodinámica. El ciclo de Carnot define el rendimiento máximo teórico de cualquier máquina térmica. Los refrigeradores y bombas de calor aplican la termodinámica en sentido inverso. La entropía tiene implicaciones cosmológicas: la "muerte térmica del universo" sería el estado final donde todo alcanza la misma temperatura y no es posible ningún trabajo útil.`,
    content_en: `Watt's steam engine drove the Industrial Revolution, and its study led to thermodynamics. The Carnot cycle defines the maximum theoretical efficiency of any heat engine. Refrigerators and heat pumps apply thermodynamics in reverse. Entropy has cosmological implications: the "heat death of the universe" would be the final state where everything reaches the same temperature and no useful work is possible.`,
    order: 1,
  },
  {
    id: `sub-gen-01`, entryId: `entry-genetica`, title_es: `Mendel y el ADN`, title_en: `Mendel and DNA`,
    content_es: `Gregor Mendel, un monje agustino, realizó experimentos con 29,000 plantas de guisante en el monasterio de Brno. Sus leyes de la segregación y la distribución independiente de los caracteres fueron ignoradas durante 35 años hasta que fueron redescubiertas por De Vries, Correns y Von Tschermak en 1900. El ADN fue descubierto por Friedrich Miescher en 1869, pero su función genética no se comprendió hasta los experimentos de Avery (1944) y Hershey-Chase (1952).`,
    content_en: `Gregor Mendel, an Augustinian monk, conducted experiments with 29,000 pea plants at the Brno monastery. His laws of segregation and independent assortment were ignored for 35 years until rediscovered by De Vries, Correns, and Von Tschermak in 1900. DNA was discovered by Friedrich Miescher in 1869, but its genetic function was not understood until Avery's (1944) and Hershey-Chase's (1952) experiments.`,
    order: 0,
  },
  {
    id: `sub-gen-02`, entryId: `entry-genetica`, title_es: `Revolución genómica`, title_en: `Genomic revolution`,
    content_es: `El Proyecto Genoma Humano, completado en 2003, fue una colaboración internacional que mapeó todo el genoma humano. Descubrimos que tenemos menos genes de lo esperado (20,000 frente a 100,000). La tecnología CRISPR-Cas9, descubierta en 2012 por Jennifer Doudna y Emmanuelle Charpentier, permite editar genes con precisión quirúrgica, abriendo posibilidades para curar enfermedades genéticas pero también planteando preocupaciones éticas sobre su uso en humanos.`,
    content_en: `The Human Genome Project, completed in 2003, was an international collaboration that mapped the entire human genome. We discovered we have fewer genes than expected (20,000 vs 100,000). CRISPR-Cas9 technology, discovered in 2012 by Jennifer Doudna and Emmanuelle Charpentier, allows gene editing with surgical precision, opening possibilities for curing genetic diseases but also raising ethical concerns about use in humans.`,
    order: 1,
  },
  {
    id: `sub-eco-01`, entryId: `entry-ecologia`, title_es: `Ecosistemas y biodiversidad`, title_en: `Ecosystems and biodiversity`,
    content_es: `Un ecosistema incluye todos los organismos vivos en un área y su entorno físico. La energía solar es capturada por los productores (plantas, algas) mediante fotosíntesis y fluye a través de la cadena trófica. Los descomponedores (bacterias, hongos) reciclan nutrientes. La biodiversidad es crucial: ecosistemas diversos son más resilientes a perturbaciones. Los "servicios ecosistémicos" (polinización, purificación del agua, regulación climática) tienen un valor económico incalculable.`,
    content_en: `An ecosystem includes all living organisms in an area and their physical environment. Solar energy is captured by producers (plants, algae) through photosynthesis and flows through the food chain. Decomposers (bacteria, fungi) recycle nutrients. Biodiversity is crucial: diverse ecosystems are more resilient to disturbances. "Ecosystem services" (pollination, water purification, climate regulation) have incalculable economic value.`,
    order: 0,
  },
  {
    id: `sub-eco-02`, entryId: `entry-ecologia`, title_es: `Crisis ecológica global`, title_en: `Global ecological crisis`,
    content_es: `La actividad humana ha alterado los ecosistemas a escala global. El cambio climático, causado por emisiones de gases de efecto invernadero, está elevando la temperatura media del planeta. La deforestación, especialmente en la Amazonía, destruye hábitats y libera carbono. La pérdida de biodiversidad es la sexta extinción masiva. La contaminación por plásticos afecta los océanos. La ecología proporciona las bases científicas para la conservación y la sostenibilidad.`,
    content_en: `Human activity has altered ecosystems on a global scale. Climate change, caused by greenhouse gas emissions, is raising the planet's average temperature. Deforestation, especially in the Amazon, destroys habitats and releases carbon. Biodiversity loss represents the sixth mass extinction. Plastic pollution affects oceans. Ecology provides the scientific basis for conservation and sustainability.`,
    order: 1,
  },
  {
    id: `sub-tabla-01`, entryId: `entry-tabla-periodica`, title_es: `Mendeléyev y la tabla periódica`, title_en: `Mendeleev and the periodic table`,
    content_es: `Dmitri Mendeléyev, químico ruso, presentó su tabla periódica en 1869. A diferencia de sus predecesores, dejó espacios vacíos para elementos aún no descubiertos y predijo sus propiedades basándose en las tendencias observadas. Predijo el eka-aluminio (galio), eka-boro (escandio) y eka-silicio (germanio), descubiertos años después con propiedades notablemente cercanas a sus predicciones. La tabla fue perfeccionada por Henry Moseley, quien la reorganizó por número atómico en 1913.`,
    content_en: `Dmitri Mendeleev, a Russian chemist, presented his periodic table in 1869. Unlike his predecessors, he left empty spaces for yet undiscovered elements and predicted their properties based on observed trends. He predicted eka-aluminum (gallium), eka-boron (scandium), and eka-silicon (germanium), discovered years later with properties remarkably close to his predictions. The table was refined by Henry Moseley, who reorganized it by atomic number in 1913.`,
    order: 0,
  },
  {
    id: `sub-tabla-02`, entryId: `entry-tabla-periodica`, title_es: `Estructura y organización`, title_en: `Structure and organization`,
    content_es: `Los elementos se organizan en grupos (columnas) que comparten configuraciones electrónicas similares y por tanto propiedades químicas análogas. Los períodos (filas) corresponden al número de capas electrónicas. Las propiedades periódicas como la electronegatividad, la afinidad electrónica y el radio atómico muestran tendencias predecibles a lo largo de la tabla. La tabla permite predecir compuestos, estados de oxidación y tipos de enlace que formará cada elemento.`,
    content_en: `Elements are organized into groups (columns) sharing similar electron configurations and thus analogous chemical properties. Periods (rows) correspond to the number of electron shells. Periodic properties such as electronegativity, electron affinity, and atomic radius show predictable trends across the table. The table allows predicting compounds, oxidation states, and bond types each element will form.`,
    order: 1,
  },
  {
    id: `sub-enlace-01`, entryId: `entry-enlace-quimico`, title_es: `Tipos de enlace`, title_en: `Types of bonding`,
    content_es: `El enlace iónico se da entre metales y no metales (ej: NaCl, CaO). Los compuestos iónicos forman cristales, tienen altos puntos de fusión y conducen electricidad cuando están disueltos. El enlace covalente se da entre no metales (ej: O2, CO2, H2O). Los compuestos covalentes pueden ser moléculas discretas o redes cristalinas (diamante, silicio). El enlace metálico se da en metales puros y aleaciones, proporcionando conductividad, maleabilidad y ductilidad.`,
    content_en: `Ionic bonding occurs between metals and nonmetals (e.g., NaCl, CaO). Ionic compounds form crystals, have high melting points, and conduct electricity when dissolved. Covalent bonding occurs between nonmetals (e.g., O2, CO2, H2O). Covalent compounds can be discrete molecules or crystal networks (diamond, silicon). Metallic bonding occurs in pure metals and alloys, providing conductivity, malleability, and ductility.`,
    order: 0,
  },
  {
    id: `sub-enlace-02`, entryId: `entry-enlace-quimico`, title_es: `Enlaces intermoleculares`, title_en: `Intermolecular bonds`,
    content_es: `Los enlaces intermoleculares son fuerzas entre moléculas, más débiles que los enlaces químicos pero cruciales. El puente de hidrógeno (entre H y O, N o F) explica que el agua hierva a 100°C en lugar de -80°C como sería esperable. Las fuerzas de Van der Waals (dispersión de London, dipolo-dipolo) son responsables de que los geckos puedan trepar paredes y determinan el estado físico de las sustancias a temperatura ambiente.`,
    content_en: `Intermolecular bonds are forces between molecules, weaker than chemical bonds but crucial. Hydrogen bonding (between H and O, N, or F) explains why water boils at 100°C rather than -80°C as would be expected. Van der Waals forces (London dispersion, dipole-dipole) are responsible for geckos climbing walls and determine substances' physical state at room temperature.`,
    order: 1,
  },
  {
    id: `sub-calcu-01`, entryId: `entry-calculo`, title_es: `Newton vs Leibniz`, title_en: `Newton vs Leibniz`,
    content_es: `Newton desarrolló su "método de fluxiones" en la década de 1660 pero no lo publicó hasta 1704. Leibniz publicó su cálculo en 1684, antes que Newton. Esto desencadenó una amarga disputa sobre la prioridad del descubrimiento que dividió a los matemáticos europeos durante décadas. La notación de Leibniz (dy/dx para derivadas, el símbolo de integral) resultó más práctica y es la que usamos hoy. Newton usaba puntos sobre variables (x, ẍ).`,
    content_en: `Newton developed his "method of fluxions" in the 1660s but did not publish until 1704. Leibniz published his calculus in 1684, before Newton. This triggered a bitter priority dispute that divided European mathematicians for decades. Leibniz's notation (dy/dx for derivatives, the integral symbol) proved more practical and is what we use today. Newton used dots over variables (ẋ, ẍ).`,
    order: 0,
  },
  {
    id: `sub-calcu-02`, entryId: `entry-calculo`, title_es: `Aplicaciones del cálculo`, title_en: `Applications of calculus`,
    content_es: `El cálculo es indispensable en física (ecuaciones de movimiento, electromagnetismo, mecánica cuántica), ingeniería (diseño de estructuras, procesamiento de señales), economía (optimización de costos, modelos de crecimiento), biología (dinámica de poblaciones) y medicina (modelado de propagación de enfermedades). Las ecuaciones diferenciales, que describen cómo cambian las cosas en el tiempo, son la base de la modelización matemática de casi todos los fenómenos naturales.`,
    content_en: `Calculus is indispensable in physics (equations of motion, electromagnetism, quantum mechanics), engineering (structural design, signal processing), economics (cost optimization, growth models), biology (population dynamics), and medicine (disease spread modeling). Differential equations, describing how things change over time, are the basis for mathematical modeling of almost all natural phenomena.`,
    order: 1,
  },
  {
    id: `sub-num-01`, entryId: `entry-teoria-numeros`, title_es: `Números primos`, title_en: `Prime numbers`,
    content_es: `Los números primos han fascinado a los matemáticos durante milenios. La demostración de Euclides de su infinitud es un modelo de elegancia matemática: supón que hay un número finito de primos, multiplícalos todos y suma 1; el resultado no es divisible por ninguno de ellos, así que debe haber un primo no listado. La distribución de los primos (el número de primos menores que x se aproxima a x/ln(x)) fue descubierta por Gauss y Legendre y demostrada por Hadamard y de la Vallée-Poussin en 1896.`,
    content_en: `Prime numbers have fascinated mathematicians for millennia. Euclid's proof of their infinitude is a model of mathematical elegance: assume finitely many primes, multiply them all and add 1; the result is divisible by none of them, so there must be an unlisted prime. The distribution of primes (the number of primes less than x approximates x/ln(x)) was discovered by Gauss and Legendre and proved by Hadamard and de la Vallée-Poussin in 1896.`,
    order: 0,
  },
  {
    id: `sub-num-02`, entryId: `entry-teoria-numeros`, title_es: `Fermat y Wiles`, title_en: `Fermat and Wiles`,
    content_es: `Pierre de Fermat escribió en 1637 en el margen de una página: "He descubierto una demostración verdaderamente maravillosa de que xⁿ + yⁿ = zⁿ no tiene soluciones enteras para n > 2, pero este margen es demasiado estrecho para contenerla." Esta nota desafió a los matemáticos durante 357 años. Andrew Wiles demostró el teorema en 1994, usando técnicas que Fermat no podría haber imaginado (curvas elípticas, formas modulares). Su demostración de 130 páginas es uno de los logros intelectuales más grandes del siglo XX.`,
    content_en: `Pierre de Fermat wrote in 1637 in a page margin: "I have discovered a truly marvelous proof that xⁿ + yⁿ = zⁿ has no integer solutions for n > 2, but this margin is too narrow to contain it." This note challenged mathematicians for 357 years. Andrew Wiles proved the theorem in 1994, using techniques Fermat could not have imagined (elliptic curves, modular forms). His 130-page proof is one of the greatest intellectual achievements of the 20th century.`,
    order: 1,
  },
  {
    id: `sub-ada-01`, entryId: `entry-ada-lovelace`, title_es: `La Máquina Analítica`, title_en: `The Analytical Engine`,
    content_es: `Charles Babbage diseñó la Máquina Analítica en la década de 1830, un computador mecánico de propósito general con unidad de control, memoria (almacén), unidad aritmética (molino) y dispositivos de entrada/salida (tarjetas perforadas inspiradas en el telar de Jacquard). Aunque nunca se construyó completamente por falta de financiación, su diseño incluía todos los componentes esenciales de un computador moderno. Ada Lovelace comprendió su potencial mejor que el propio Babbage.`,
    content_en: `Charles Babbage designed the Analytical Engine in the 1830s, a general-purpose mechanical computer with a control unit, memory (store), arithmetic unit (mill), and input/output devices (punched cards inspired by Jacquard's loom). Though never fully built due to lack of funding, its design included all essential components of a modern computer. Ada Lovelace understood its potential better than Babbage himself.`,
    order: 0,
  },
  {
    id: `sub-ada-02`, entryId: `entry-ada-lovelace`, title_es: `Visión de la computación`, title_en: `Vision of computing`,
    content_es: `Ada Lovelace escribió: "La Máquina Analítica no tiene pretensiones de originar nada. Puede hacer cualquier cosa que sepamos ordenarle que ejecute." Pero también vislumbró un futuro donde la máquina manipularía símbolos abstractos, no solo números: "Suponiendo que se descubrieran las relaciones fundamentales entre las notas musicales y la sensación que producen, la máquina podría componer piezas musicales." Su visión anticipó la inteligencia artificial y el arte generativo por computadora.`,
    content_en: `Ada Lovelace wrote: "The Analytical Engine has no pretensions to originate anything. It can do whatever we know how to order it to perform." But she also glimpsed a future where the machine would manipulate abstract symbols, not just numbers: "Supposing that the fundamental relations between pitched sounds and the sensation they produce were discovered, the engine might compose elaborate and scientific pieces of music." Her vision anticipated artificial intelligence and generative computer art.`,
    order: 1,
  },
  {
    id: `sub-curie-01`, entryId: `entry-marie-curie`, title_es: `Descubrimiento del radio`, title_en: `Discovery of radium`,
    content_es: `Marie Curie trabajó en condiciones extremadamente precarias en un cobertizo sin ventilación adecuada. Procesó toneladas de pechblenda (mineral de uranio) para aislar una décima de gramo de radio puro. El radio emitía una luz azulada y su calor podía fundir hielo. Curie nunca patentó sus descubrimientos, considerando que la ciencia debía ser libre y accesible para todos. Su laboratorio se convirtió en un centro mundial de investigación nuclear.`,
    content_en: `Marie Curie worked in extremely precarious conditions in a shed without adequate ventilation. She processed tons of pitchblende (uranium ore) to isolate a tenth of a gram of pure radium. Radium emitted a bluish light and its heat could melt ice. Curie never patented her discoveries, believing science should be free and accessible to all. Her laboratory became a world center for nuclear research.`,
    order: 0,
  },
  {
    id: `sub-curie-02`, entryId: `entry-marie-curie`, title_es: `Legado científico`, title_en: `Scientific legacy`,
    content_es: `Marie Curie abrió el camino para las mujeres en la ciencia. Su hija Irène Joliot-Curie también ganó el Premio Nobel de Química (1935). El Instituto Curie en París sigue siendo un centro de investigación oncológica de primer nivel. El desarrollo de la radioterapia, basada en el descubrimiento del radio, ha salvado millones de vidas. Sus cuadernos de laboratorio siguen siendo radiactivos y se conservan en cajas forradas de plomo en la Biblioteca Nacional de Francia.`,
    content_en: `Marie Curie paved the way for women in science. Her daughter Irène Joliot-Curie also won the Nobel Prize in Chemistry (1935). The Curie Institute in Paris remains a leading cancer research center. The development of radiotherapy, based on the discovery of radium, has saved millions of lives. Her laboratory notebooks remain radioactive and are kept in lead-lined boxes at the National Library of France.`,
    order: 1,
  },
]
