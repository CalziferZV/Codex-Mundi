import type { SeedEntry, SeedSubsection } from './seed'

const now = '2026-03-15T00:00:00Z'

export const newSupplementEntries: SeedEntry[] = [
  // ===== PSYCHOLOGY =====
  { id: 'entry-freud-psychoanalysis', title_es: 'Psicoanálisis de Freud', title_en: 'Freudian Psychoanalysis', slug: 'psicoanalisis-freud',
    content_es: `El psicoanálisis es una teoría psicológica y método terapéutico desarrollado por Sigmund Freud a finales del siglo XIX en Viena. Freud propuso que gran parte de la vida mental es inconsciente y que las experiencias infantiles, especialmente las de naturaleza sexual, moldean la personalidad adulta.

Freud estructuró la mente en tres instancias: el ello (impulsos instintivos), el yo (mediador racional) y el superyó (conciencia moral internalizada). Desarrolló técnicas como la asociación libre, la interpretación de los sueños y el análisis de la transferencia para acceder al inconsciente. Obras como La interpretación de los sueños (1900) y Tres ensayos sobre teoría sexual (1905) son fundacionales.

El psicoanálisis influyó profundamente en la psicología, la psiquiatría, la literatura, el arte y la cultura popular. Discípulos como Carl Jung (psicología analítica) y Alfred Adler (psicología individual) desarrollaron sus propias escuelas. El psicoanálisis ha sido criticado por su falta de base empírica pero sigue siendo una herramienta terapéutica y un marco interpretativo influyente.`,
    content_en: `Psychoanalysis is a psychological theory and therapeutic method developed by Sigmund Freud in late 19th century Vienna. Freud proposed that much of mental life is unconscious and that childhood experiences, especially those of a sexual nature, shape adult personality.

Freud structured the mind into three instances: the id (instinctual drives), the ego (rational mediator), and the superego (internalized moral conscience). He developed techniques such as free association, dream interpretation, and transference analysis to access the unconscious. Works like The Interpretation of Dreams (1900) and Three Essays on the Theory of Sexuality (1905) are foundational.

Psychoanalysis profoundly influenced psychology, psychiatry, literature, art, and popular culture. Disciples like Carl Jung (analytical psychology) and Alfred Adler (individual psychology) developed their own schools. Psychoanalysis has been criticized for its lack of empirical basis but remains an influential therapeutic tool and interpretive framework.`,
    excerpt_es: 'La teoría del inconsciente: Freud, los sueños y la revolución de la psicología profunda.', excerpt_en: 'The theory of the unconscious: Freud, dreams, and the revolution of depth psychology.', categoryId: 'cat-psychology', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-behaviorism', title_es: 'Conductismo', title_en: 'Behaviorism', slug: 'conductismo',
    content_es: `El conductismo es una corriente psicológica que se centra en el estudio de la conducta observable, rechazando el estudio de la mente y la consciencia por considerarlos no científicos. John B. Watson fundó el conductismo en 1913 con su artículo "La psicología como la ve el conductista".

B.F. Skinner desarrolló el condicionamiento operante, donde la conducta se moldea mediante refuerzos (positivos o negativos) y castigos. La caja de Skinner y sus estudios con palomas y ratas demostraron cómo los organismos aprenden por las consecuencias de sus acciones. Ivan Pavlov descubrió el condicionamiento clásico con sus experimentos de perros que salivaban al oír una campana.

El conductismo dominó la psicología académica durante gran parte del siglo XX y tuvo aplicaciones en educación (máquinas de enseñanza, instrucción programada), terapia (modificación de conducta, desensibilización sistemática) y entrenamiento animal. El conductismo radical de Skinner fue criticado por reducir la complejidad humana a mecanismos de estímulo-respuesta. El cognitivismo y la neurociencia han desplazado al conductismo, pero sus técnicas conductuales siguen siendo efectivas en terapia.`,
    content_en: `Behaviorism is a psychological school focusing on the study of observable behavior, rejecting the study of mind and consciousness as unscientific. John B. Watson founded behaviorism in 1913 with his article "Psychology as the Behaviorist Views It."

B.F. Skinner developed operant conditioning, where behavior is shaped through reinforcements (positive or negative) and punishments. Skinner's box and his studies with pigeons and rats demonstrated how organisms learn through consequences of their actions. Ivan Pavlov discovered classical conditioning with his experiments on dogs salivating at the sound of a bell.

Behaviorism dominated academic psychology for much of the 20th century and had applications in education (teaching machines, programmed instruction), therapy (behavior modification, systematic desensitization), and animal training. Skinner's radical behaviorism was criticized for reducing human complexity to stimulus-response mechanisms. Cognitivism and neuroscience have displaced behaviorism, but its behavioral techniques remain effective in therapy.`,
    excerpt_es: 'La psicología de la conducta observable: Watson, Skinner y el condicionamiento.', excerpt_en: 'The psychology of observable behavior: Watson, Skinner, and conditioning.', categoryId: 'cat-psychology', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-cognitive-psychology', title_es: 'Psicología Cognitiva', title_en: 'Cognitive Psychology', slug: 'psicologia-cognitiva',
    content_es: `La psicología cognitiva estudia los procesos mentales internos: atención, memoria, percepción, lenguaje, resolución de problemas y toma de decisiones. Surgió en la década de 1950 como reacción al conductismo, en lo que se conoció como la "revolución cognitiva".

Jean Piaget estudió el desarrollo cognitivo infantil, identificando etapas (sensoriomotora, preoperacional, operaciones concretas, operaciones formales). Jerome Bruner y George Miller fundaron el Centro de Estudios Cognitivos en Harvard. Ulric Neisser acuñó el término "psicología cognitiva" en su libro de 1967. La metáfora del ordenador (mente como procesador de información) guió la investigación temprana.

La psicología cognitiva ha producido conocimientos fundamentales sobre la memoria (memoria a corto y largo plazo, memoria de trabajo), los sesgos cognitivos (Kahneman, Tversky), la heurística, el lenguaje (Chomsky), la percepción visual (Gestalt) y la inteligencia. La terapia cognitivo-conductual (TCC), desarrollada por Aaron Beck, aplica principios cognitivos al tratamiento de la depresión y la ansiedad. Hoy la psicología cognitiva se integra con la neurociencia en la neurociencia cognitiva.`,
    content_en: `Cognitive psychology studies internal mental processes: attention, memory, perception, language, problem-solving, and decision-making. It emerged in the 1950s as a reaction to behaviorism, in what became known as the "cognitive revolution."

Jean Piaget studied children's cognitive development, identifying stages (sensorimotor, preoperational, concrete operations, formal operations). Jerome Bruner and George Miller founded the Center for Cognitive Studies at Harvard. Ulric Neisser coined the term "cognitive psychology" in his 1967 book. The computer metaphor (mind as information processor) guided early research.

Cognitive psychology has produced fundamental insights into memory (short-term and long-term memory, working memory), cognitive biases (Kahneman, Tversky), heuristics, language (Chomsky), visual perception (Gestalt), and intelligence. Cognitive-behavioral therapy (CBT), developed by Aaron Beck, applies cognitive principles to treating depression and anxiety. Today cognitive psychology integrates with neuroscience in cognitive neuroscience.`,
    excerpt_es: 'La revolución cognitiva: mente, memoria, atención y los procesos del pensamiento.', excerpt_en: 'The cognitive revolution: mind, memory, attention, and the processes of thought.', categoryId: 'cat-psychology', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-social-psychology', title_es: 'Psicología Social', title_en: 'Social Psychology', slug: 'psicologia-social',
    content_es: `La psicología social estudia cómo los pensamientos, sentimientos y comportamientos de las personas son influidos por la presencia real, imaginada o implícita de otros. Experimentos clásicos como el de Stanley Milgram (1963) sobre la obediencia a la autoridad mostraron que personas comunes podían administrar descargas eléctricas letales por orden de un científico.

Experimentos de conformidad de Solomon Asch (1951) demostraron que las personas se conforman con la opinión del grupo incluso cuando es claramente errónea. El experimento de la cárcel de Stanford de Philip Zimbardo (1971) reveló cómo los roles sociales pueden llevar al abuso de poder. La teoría de la disonancia cognitiva de Leon Festinger explica cómo la inconsistencia entre creencias y comportamientos genera malestar.

La psicología social explica fenómenos como el pensamiento grupal, la polarización, la deindividuación, el efecto espectador, el prejuicio, la atracción interpersonal, el altruismo y la agresión. Tiene aplicaciones en marketing, política, salud pública y resolución de conflictos. La crisis de replicación en psicología social ha llevado a reformas metodológicas para aumentar la fiabilidad de la investigación.`,
    content_en: `Social psychology studies how people's thoughts, feelings, and behaviors are influenced by the actual, imagined, or implied presence of others. Classic experiments like Stanley Milgram's (1963) on obedience to authority showed that ordinary people would administer lethal electric shocks on a scientist's orders.

Solomon Asch's conformity experiments (1951) demonstrated that people conform to group opinion even when it is clearly wrong. Philip Zimbardo's Stanford prison experiment (1971) revealed how social roles can lead to power abuse. Leon Festinger's cognitive dissonance theory explains how inconsistency between beliefs and behaviors creates discomfort.

Social psychology explains phenomena like groupthink, polarization, deindividuation, the bystander effect, prejudice, interpersonal attraction, altruism, and aggression. It has applications in marketing, politics, public health, and conflict resolution. The replication crisis in social psychology has led to methodological reforms to increase research reliability.`,
    excerpt_es: 'Cómo nos influyen los demás: obediencia, conformidad, prejuicios y dinámicas de grupo.', excerpt_en: 'How others influence us: obedience, conformity, prejudice, and group dynamics.', categoryId: 'cat-psychology', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== MEDICINE =====
  { id: 'entry-history-medicine', title_es: 'Historia de la Medicina', title_en: 'History of Medicine', slug: 'historia-medicina',
    content_es: `La historia de la medicina es la historia de la lucha humana contra la enfermedad. Hipócrates (c. 460-370 a.C.), considerado el padre de la medicina, introdujo la observación clínica y la teoría de los cuatro humores. Galeno (siglo II d.C.) dominó la medicina occidental hasta el Renacimiento.

Andreas Vesalio revolucionó la anatomía con su obra De humani corporis fabrica (1543). William Harvey descubrió la circulación sanguínea (1628). Ignaz Semmelweis demostró la importancia de la higiene (1847). Louis Pasteur y Robert Koch establecieron la teoría germinal de las enfermedades. Joseph Lister introdujo la antisepsia quirúrgica.

El siglo XX trajo avances revolucionarios: antibióticos (penicilina de Fleming, 1928), vacunas (polio, sarampión), cirugía moderna, trasplantes (primer trasplante de corazón, Barnard, 1967), técnicas de imagen (rayos X, TAC, resonancia), y la secuenciación del genoma humano (2003). La medicina contemporánea enfrenta desafíos como las resistencias antimicrobianas, las enfermedades crónicas y la necesidad de sistemas de salud universales. La medicina personalizada y la edición genética representan el futuro.`,
    content_en: `The history of medicine is the history of the human struggle against disease. Hippocrates (c. 460-370 BC), considered the father of medicine, introduced clinical observation and the theory of the four humors. Galen (2nd century AD) dominated Western medicine until the Renaissance.

Andreas Vesalius revolutionized anatomy with his work De humani corporis fabrica (1543). William Harvey discovered blood circulation (1628). Ignaz Semmelweis demonstrated the importance of hygiene (1847). Louis Pasteur and Robert Koch established germ theory of disease. Joseph Lister introduced surgical antisepsis.

The 20th century brought revolutionary advances: antibiotics (Fleming's penicillin, 1928), vaccines (polio, measles), modern surgery, transplants (first heart transplant, Barnard, 1967), imaging techniques (X-ray, CT, MRI), and the sequencing of the human genome (2003). Contemporary medicine faces challenges like antimicrobial resistance, chronic diseases, and the need for universal health systems. Personalized medicine and genetic editing represent the future.`,
    excerpt_es: 'De Hipócrates al genoma humano: la evolución del arte de curar.', excerpt_en: 'From Hippocrates to the human genome: the evolution of the healing art.', categoryId: 'cat-medicine', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-vaccines', title_es: 'Vacunas', title_en: 'Vaccines', slug: 'vacunas',
    content_es: `Las vacunas son una de las intervenciones de salud pública más efectivas de la historia. Edward Jenner desarrolló la primera vacuna contra la viruela en 1796, utilizando el virus de la vaccinia (viruela bovina). La viruela fue erradicada globalmente en 1980, uno de los mayores logros de la medicina.

Louis Pasteur desarrolló vacunas contra la rabia y el ántrax. El siglo XX vio la creación de vacunas contra la tuberculosis (BCG), difteria, tétanos, tos ferina, polio (Salk, Sabin), sarampión, paperas, rubéola y hepatitis B. La vacuna contra la polio ha reducido los casos en un 99.9%.

Las vacunas funcionan estimulando el sistema inmunitario para producir anticuerpos sin causar la enfermedad. Pueden contener virus atenuados, inactivados, fragmentos virales o ARN mensajero (tecnología usada en las vacunas contra COVID-19). La vacunación colectiva (inmunidad de rebaño) protege a quienes no pueden vacunarse. El movimiento antivacunas, basado en información errónea, amenaza la salud pública al reducir las tasas de vacunación y permitir el resurgimiento de enfermedades erradicadas.`,
    content_en: `Vaccines are one of the most effective public health interventions in history. Edward Jenner developed the first vaccine against smallpox in 1796, using the vaccinia virus (cowpox). Smallpox was globally eradicated in 1980, one of medicine's greatest achievements.

Louis Pasteur developed vaccines against rabies and anthrax. The 20th century saw the creation of vaccines against tuberculosis (BCG), diphtheria, tetanus, whooping cough, polio (Salk, Sabin), measles, mumps, rubella, and hepatitis B. The polio vaccine has reduced cases by 99.9%.

Vaccines work by stimulating the immune system to produce antibodies without causing disease. They may contain attenuated viruses, inactivated viruses, viral fragments, or messenger RNA (technology used in COVID-19 vaccines). Herd immunity protects those who cannot be vaccinated. The anti-vaccine movement, based on misinformation, threatens public health by reducing vaccination rates and allowing eradicated diseases to resurface.`,
    excerpt_es: 'El arma más efectiva contra las enfermedades: Jenner, Pasteur y la ciencia de la inmunización.', excerpt_en: "The most effective weapon against disease: Jenner, Pasteur, and the science of immunization.", categoryId: 'cat-medicine', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== BIOLOGY =====
  { id: 'entry-cell-biology', title_es: 'Biología Celular', title_en: 'Cell Biology', slug: 'biologia-celular',
    content_es: `La biología celular estudia la unidad fundamental de la vida: la célula. Robert Hooke observó células por primera vez en 1665 en una lámina de corcho. Anton van Leeuwenhoek descubrió microorganismos vivos. La teoría celular, formulada por Schleiden y Schwann (1838-1839), establece que todos los seres vivos están compuestos por células y que toda célula procede de otra preexistente.

Las células se dividen en procariotas (sin núcleo: bacterias) y eucariotas (con núcleo: animales, plantas, hongos, protistas). Los orgánulos celulares incluyen el núcleo (ADN), mitocondrias (producción de energía), retículo endoplasmático (síntesis de proteínas y lípidos), aparato de Golgi (empaquetamiento), lisosomas (digestión) y cloroplastos (fotosíntesis en plantas).

El ciclo celular incluye la interfase (crecimiento y replicación del ADN) y la mitosis (división celular). La apoptosis (muerte celular programada) es esencial para el desarrollo y la homeostasis. Las células madre tienen la capacidad de diferenciarse en varios tipos celulares. La investigación en biología celular es fundamental para entender el cáncer, el desarrollo embrionario, las enfermedades degenerativas y la medicina regenerativa.`,
    content_en: `Cell biology studies the fundamental unit of life: the cell. Robert Hooke first observed cells in 1665 in a slice of cork. Anton van Leeuwenhoek discovered living microorganisms. Cell theory, formulated by Schleiden and Schwann (1838-1839), establishes that all living beings are composed of cells and that every cell comes from a pre-existing cell.

Cells divide into prokaryotes (without nucleus: bacteria) and eukaryotes (with nucleus: animals, plants, fungi, protists). Cell organelles include the nucleus (DNA), mitochondria (energy production), endoplasmic reticulum (protein and lipid synthesis), Golgi apparatus (packaging), lysosomes (digestion), and chloroplasts (photosynthesis in plants).

The cell cycle includes interphase (growth and DNA replication) and mitosis (cell division). Apoptosis (programmed cell death) is essential for development and homeostasis. Stem cells have the ability to differentiate into various cell types. Cell biology research is fundamental for understanding cancer, embryonic development, degenerative diseases, and regenerative medicine.`,
    excerpt_es: 'La unidad fundamental de la vida: células, orgánulos y el ciclo de la división celular.', excerpt_en: 'The fundamental unit of life: cells, organelles, and the cell division cycle.', categoryId: 'cat-biology', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-evolution-theory', title_es: 'Teoría de la Evolución', title_en: 'Theory of Evolution', slug: 'teoria-evolucion',
    content_es: `La teoría de la evolución por selección natural, formulada por Charles Darwin y Alfred Russel Wallace en 1858, es el fundamento de la biología moderna. Darwin presentó su teoría en El origen de las especies (1859), aportando evidencia de la evolución y un mecanismo: la selección natural.

La selección natural actúa sobre la variación genética dentro de las poblaciones. Los organismos con características ventajosas para su entorno tienen más probabilidades de sobrevivir y reproducirse, transmitiendo esas características a la descendencia. Con el tiempo, este proceso conduce a la adaptación y, eventualmente, a la formación de nuevas especies.

La genética moderna, la genómica y el registro fósil han confirmado y refinado la teoría darwiniana. La síntesis evolutiva moderna integra la genética de poblaciones, la mutación, la deriva genética y la selección natural. La evolución explica la diversidad de la vida, las relaciones entre especies, la resistencia a antibióticos, y el desarrollo de vacunas. A pesar del consenso científico abrumador, el creacionismo y el diseño inteligente promueven concepciones no científicas que rechazan la evolución.`,
    content_en: `The theory of evolution by natural selection, formulated by Charles Darwin and Alfred Russel Wallace in 1858, is the foundation of modern biology. Darwin presented his theory in On the Origin of Species (1859), providing evidence of evolution and a mechanism: natural selection.

Natural selection acts on genetic variation within populations. Organisms with characteristics advantageous for their environment are more likely to survive and reproduce, passing those characteristics to offspring. Over time, this process leads to adaptation and eventually to the formation of new species.

Modern genetics, genomics, and the fossil record have confirmed and refined Darwinian theory. The modern evolutionary synthesis integrates population genetics, mutation, genetic drift, and natural selection. Evolution explains the diversity of life, relationships between species, antibiotic resistance, and vaccine development. Despite overwhelming scientific consensus, creationism and intelligent design promote unscientific conceptions that reject evolution.`,
    excerpt_es: 'El motor de la biodiversidad: Darwin, selección natural y el origen de las especies.', excerpt_en: 'The engine of biodiversity: Darwin, natural selection, and the origin of species.', categoryId: 'cat-biology', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== LITERATURE =====
  { id: 'entry-world-literature', title_es: 'Literatura Universal', title_en: 'World Literature', slug: 'literatura-universal',
    content_es: `La literatura universal abarca las obras escritas más importantes de todas las culturas y épocas. La epopeya de Gilgamesh (c. 2100 a.C.) es la obra literaria más antigua conocida. Homero compuso la Ilíada y la Odisea (siglo VIII a.C.), fundamentos de la literatura occidental.

La literatura clásica incluye las tragedias griegas, la poesía de Virgilio y Ovidio, la prosa de Cicerón. La literatura medieval europea produjo la Divina Comedia de Dante, los Cantares de gesta (Cantar de Mio Cid, Beowulf, Cantar de Roldán), y el Decamerón de Boccaccio. El Quijote de Cervantes (1605) es considerada la primera novela moderna.

La literatura moderna incluye a Shakespeare, Goethe, Dostoyevski, Tolstói, Flaubert, Kafka, Joyce, Proust, Borges, García Márquez y cien más que han explorado la condición humana a través de la palabra. La literatura no entretiene: preserva la memoria colectiva, cuestiona la realidad, y nos permite vivir mil vidas. Los premios Nobel de Literatura reconocen contribuciones excepcionales a este diálogo universal que trasciende fronteras y generaciones.`,
    content_en: `World literature encompasses the most important written works of all cultures and ages. The Epic of Gilgamesh (c. 2100 BC) is the oldest known literary work. Homer composed the Iliad and the Odyssey (8th century BC), foundations of Western literature.

Classical literature includes Greek tragedies, the poetry of Virgil and Ovid, the prose of Cicero. European medieval literature produced Dante's Divine Comedy, epic poems (Song of My Cid, Beowulf, Song of Roland), and Boccaccio's Decameron. Cervantes's Don Quixote (1605) is considered the first modern novel.

Modern literature includes Shakespeare, Goethe, Dostoevsky, Tolstoy, Flaubert, Kafka, Joyce, Proust, Borges, García Márquez, and hundreds more who have explored the human condition through words. Literature does not only entertain: it preserves collective memory, questions reality, and allows us to live a thousand lives. The Nobel Prizes in Literature recognize exceptional contributions to this universal dialogue that transcends borders and generations.`,
    excerpt_es: 'El diálogo universal a través de los siglos: de Gilgamesh a García Márquez.', excerpt_en: 'The universal dialogue across centuries: from Gilgamesh to García Márquez.', categoryId: 'cat-literature', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-poetry', title_es: 'Poesía', title_en: 'Poetry', slug: 'poesia',
    content_es: `La poesía es la forma más antigua y concentrada de expresión literaria. Utiliza el lenguaje en su máxima potencia: ritmo, métrica, rima, metáfora e imagen para transmitir emociones, ideas y experiencias. La poesía existe en todas las culturas desde tiempos inmemoriales.

La poesía griega (Safo, Píndaro) estableció formas líricas. La poesía china clásica (Li Bai, Du Fu, Wang Wei) alcanzó una belleza y profundidad extraordinarias. La poesía persa (Rumi, Hafiz, Omar Khayyam) exploró el amor divino y humano. La poesía japonesa (haiku de Basho, tanka) encontró la eternidad en lo mínimo.

En Occidente, Dante, Petrarca, Shakespeare, William Blake, Wordsworth, Keats, Baudelaire, Rimbaud, Emily Dickinson, Walt Whitman, Rilke, Lorca, Neruda, Octavio Paz, Alejandra Pizarnik y Wislawa Szymborska representan cimas poéticas. La poesía contemporánea ha roto con las formas tradicionales pero mantiene su esencia: nombrar lo innombrable, decir lo indecible, y recordarnos que el lenguaje puede ser puente hacia lo sagrado.`,
    content_en: `Poetry is the oldest and most concentrated form of literary expression. It uses language at its maximum power: rhythm, meter, rhyme, metaphor, and image to convey emotions, ideas, and experiences. Poetry exists in all cultures since time immemorial.

Greek poetry (Sappho, Pindar) established lyric forms. Classical Chinese poetry (Li Bai, Du Fu, Wang Wei) achieved extraordinary beauty and depth. Persian poetry (Rumi, Hafiz, Omar Khayyam) explored divine and human love. Japanese poetry (Basho's haiku, tanka) found eternity in the minimal.

In the West, Dante, Petrarch, Shakespeare, William Blake, Wordsworth, Keats, Baudelaire, Rimbaud, Emily Dickinson, Walt Whitman, Rilke, Lorca, Neruda, Octavio Paz, Alejandra Pizarnik, and Wislawa Szymborska represent poetic peaks. Contemporary poetry has broken with traditional forms but maintains its essence: naming the unnamable, saying the unsayable, and reminding us that language can be a bridge to the sacred.`,
    excerpt_es: 'La palabra en su máxima potencia: ritmo, metáfora y verdad en la poesía universal.', excerpt_en: 'The word at its maximum power: rhythm, metaphor, and truth in universal poetry.', categoryId: 'cat-literature', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== PHILOSOPHY - Additional =====
  { id: 'entry-eastern-philosophy', title_es: 'Filosofía Oriental', title_en: 'Eastern Philosophy', slug: 'filosofia-oriental',
    content_es: `La filosofía oriental abarca las tradiciones filosóficas de Asia, principalmente de India, China y Japón. A diferencia de la filosofía occidental, tiende a enfatizar la práctica, la transformación interior y la armonía con el cosmos sobre la argumentación lógica abstracta.

Las escuelas ortodoxas hindúes (Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta) desarrollaron sistemas filosóficos sofisticados sobre la naturaleza de la realidad, el conocimiento y la liberación. Shankara (Advaita Vedanta) propuso que la realidad última es Brahman, sin atributos, y el mundo fenoménico es ilusorio (maya). Ramanuja (Vishishtadvaita) defendió un no-dualismo cualificado.

La filosofía china incluye el confucianismo (ética social y política), el taoísmo (armonía con la naturaleza), el mohismo (amor universal) y la escuela de los nombres (lógica). El budismo, originado en India, desarrolló tradiciones filosóficas como Madhyamaka (Nagaryuna) y Yogacara (Vasubandhu). La Escuela de Kioto (Nishida, Tanabe) integró el pensamiento zen con la filosofía occidental. La filosofía oriental ofrece una perspectiva complementaria que enriquece el pensamiento global.`,
    content_en: `Eastern philosophy encompasses the philosophical traditions of Asia, mainly India, China, and Japan. Unlike Western philosophy, it tends to emphasize practice, inner transformation, and harmony with the cosmos over abstract logical argumentation.

Orthodox Hindu schools (Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta) developed sophisticated philosophical systems on the nature of reality, knowledge, and liberation. Shankara (Advaita Vedanta) proposed that ultimate reality is Brahman, without attributes, and the phenomenal world is illusory (maya). Ramanuja (Vishishtadvaita) defended a qualified non-dualism.

Chinese philosophy includes Confucianism (social and political ethics), Taoism (harmony with nature), Mohism (universal love), and the School of Names (logic). Buddhism, originating in India, developed philosophical traditions like Madhyamaka (Nagarjuna) and Yogacara (Vasubandhu). The Kyoto School (Nishida, Tanabe) integrated Zen thought with Western philosophy. Eastern philosophy offers a complementary perspective that enriches global thought.`,
    excerpt_es: 'Sabiduría de Asia: tradiciones filosóficas de India, China y Japón.', excerpt_en: 'Wisdom of Asia: philosophical traditions of India, China, and Japan.', categoryId: 'cat-eastern-philosophy', realityStatus: 'philosophical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-political-philosophy', title_es: 'Filosofía Política', title_en: 'Political Philosophy', slug: 'filosofia-politica',
    content_es: `La filosofía política examina las bases del gobierno, la justicia, los derechos y la organización social. Platón escribió La República, donde propuso una sociedad gobernada por reyes-filósofos. Aristóteles en La Política analizó las constituciones y defendió el término medio.

Maquiavelo en El Príncipe (1513) separó la política de la moral, analizando el poder como realmente se ejerce. Hobbes en Leviatán (1651) justificó el estado absoluto como necesario para evitar la guerra de todos contra todos. Locke defendió los derechos naturales y el gobierno limitado. Rousseau en El Contrato Social (1762) propuso la soberanía popular.

Marx analizó el capitalismo como sistema de explotación y predijo la revolución comunista. Mill defendió la libertad individual y el utilitarismo. Rawls en Teoría de la Justicia (1971) propuso la justicia como equidad. Nozick defendió el estado mínimo libertario. Arendt, Foucault y Habermas han analizado el poder, la biopolítica y la esfera pública. La filosofía política sigue siendo esencial para entender y evaluar los sistemas políticos contemporáneos.`,
    content_en: `Political philosophy examines the foundations of government, justice, rights, and social organization. Plato wrote The Republic, proposing a society governed by philosopher-kings. Aristotle in The Politics analyzed constitutions and defended the golden mean.

Machiavelli in The Prince (1513) separated politics from morality, analyzing power as it is actually exercised. Hobbes in Leviathan (1651) justified absolute government as necessary to avoid the war of all against all. Locke defended natural rights and limited government. Rousseau in The Social Contract (1762) proposed popular sovereignty.

Marx analyzed capitalism as a system of exploitation and predicted communist revolution. Mill defended individual liberty and utilitarianism. Rawls in A Theory of Justice (1971) proposed justice as fairness. Nozick defended the minimal libertarian state. Arendt, Foucault, and Habermas have analyzed power, biopolitics, and the public sphere. Political philosophy remains essential for understanding and evaluating contemporary political systems.`,
    excerpt_es: 'Las ideas que gobiernan: Platón, Maquiavelo, Marx y la justicia social.', excerpt_en: 'The ideas that govern: Plato, Machiavelli, Marx, and social justice.', categoryId: 'cat-philosophical-concepts', realityStatus: 'philosophical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== NATURE =====
  { id: 'entry-rainforests', title_es: 'Selvas Tropicales', title_en: 'Tropical Rainforests', slug: 'selvas-tropicales',
    content_es: `Las selvas tropicales son los ecosistemas con mayor biodiversidad de la Tierra. Cubren solo el 6% de la superficie terrestre pero albergan más de la mitad de las especies del planeta. La selva amazónica, la más grande del mundo, se extiende por nueve países sudamericanos.

Estos ecosistemas se caracterizan por altas precipitaciones (más de 2,000 mm anuales), temperaturas cálidas constantes y una estructura de vegetación estratificada: dosel superior (árboles de hasta 60 metros), dosel medio, sotobosque y suelo del bosque. Albergan innumerables especies de plantas, insectos, aves, mamíferos, reptiles y anfibios.

Las selvas proporcionan servicios ecosistémicos globales: producen oxígeno, almacenan carbono, regulan el clima, y son fuente de medicinas (el 25% de los fármacos modernos provienen de plantas tropicales). La deforestación, impulsada por la agricultura (soja, aceite de palma), la ganadería y la minería, destruye millones de hectáreas anualmente. La protección de las selvas es crucial para la biodiversidad global y la lucha contra el cambio climático.`,
    content_en: `Tropical rainforests are the most biodiverse ecosystems on Earth. They cover only 6% of the Earth's surface but host more than half of the planet's species. The Amazon rainforest, the largest in the world, extends across nine South American countries.

These ecosystems are characterized by high rainfall (over 2,000 mm annually), constant warm temperatures, and a layered vegetation structure: upper canopy (trees up to 60 meters), mid-canopy, understory, and forest floor. They host countless species of plants, insects, birds, mammals, reptiles, and amphibians.

Rainforests provide global ecosystem services: they produce oxygen, store carbon, regulate climate, and are a source of medicines (25% of modern drugs come from tropical plants). Deforestation, driven by agriculture (soy, palm oil), cattle ranching, and mining, destroys millions of hectares annually. Protecting rainforests is crucial for global biodiversity and fighting climate change.`,
    excerpt_es: 'Los pulmones del planeta: la biodiversidad de las selvas tropicales y su importancia global.', excerpt_en: "The planet's lungs: the biodiversity of tropical rainforests and their global importance.", categoryId: 'cat-nature', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
]

export const newSupplementSubsections: SeedSubsection[] = []
