import type { SeedEntry, SeedSubsection } from './seed'

const t = (s: string) => s

const now = '2026-03-15T00:00:00Z'

export const newTechEntries: SeedEntry[] = [
  // ===== COMPUTING =====
  { id: 'entry-eniac', title_es: 'ENIAC', title_en: 'ENIAC', slug: 'eniac',
    content_es: `ENIAC (Electronic Numerical Integrator and Computer) fue el primer computador electrónico de propósito general de la historia. Construido entre 1943 y 1945 en la Universidad de Pensilvania por John Presper Eckert y John Mauchly, ocupaba una superficie de 167 m² y pesaba 27 toneladas.

Estaba compuesto por 17,468 tubos de vacío, 7,200 diodos de cristal, 1,500 relés, 70,000 resistencias y 10,000 condensadores. Consumía 150 kW de electricidad y realizaba aproximadamente 5,000 operaciones por segundo, una velocidad revolucionaria para su época.

ENIAC fue originalmente diseñado para calcular tablas de artillería durante la Segunda Guerra Mundial, pero no estuvo listo hasta 1945, cuando la guerra ya había terminado. Posteriormente se utilizó para cálculos científicos, incluyendo el diseño de la bomba de hidrógeno. Fue desmantelado en 1955.`, content_en: `ENIAC (Electronic Numerical Integrator and Computer) was the first electronic general-purpose computer in history. Built between 1943 and 1945 at the University of Pennsylvania by John Presper Eckert and John Mauchly, it occupied 167 m² and weighed 27 tons.

It consisted of 17,468 vacuum tubes, 7,200 crystal diodes, 1,500 relays, 70,000 resistors, and 10,000 capacitors. It consumed 150 kW of electricity and performed approximately 5,000 operations per second, a revolutionary speed for its time.

ENIAC was originally designed to calculate artillery tables during World War II, but was not completed until 1945, when the war had already ended. It was later used for scientific calculations, including the design of the hydrogen bomb. It was dismantled in 1955.`,
    excerpt_es: 'El primer computador electrónico de propósito general, pionero de la era digital.', excerpt_en: 'The first electronic general-purpose computer, pioneer of the digital age.', categoryId: 'cat-computing', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-alan-turing', title_es: 'Alan Turing', title_en: 'Alan Turing', slug: 'alan-turing',
    content_es: `Alan Mathison Turing (1912-1954) fue un matemático, lógico, criptógrafo y pionero de la computación británico. Es considerado el padre de la inteligencia artificial y la ciencia de la computación teórica. Durante la Segunda Guerra Mundial trabajó en Bletchley Park descifrando los códigos de la máquina Enigma alemana.

Turing formuló el concepto de la Máquina de Turing (1936), un modelo abstracto que define los límites de la computación y sentó las bases de la teoría de la computabilidad. También propuso el Test de Turing (1950) como criterio para determinar si una máquina puede considerarse inteligente.

Fue procesado por su homosexualidad en 1952, sometido a castración química y falleció en 1954 envenenado con cianuro, en un caso considerado suicidio. En 2009 recibió una disculpa pública del gobierno británico. Su vida inspiró la película "The Imitation Game" (2014).`, content_en: `Alan Mathison Turing (1912-1954) was a British mathematician, logician, cryptographer, and computing pioneer. He is considered the father of artificial intelligence and theoretical computer science. During World War II he worked at Bletchley Park deciphering the codes of the German Enigma machine.

Turing formulated the concept of the Turing Machine (1936), an abstract model that defines the limits of computation and laid the foundations of computability theory. He also proposed the Turing Test (1950) as a criterion for determining whether a machine can be considered intelligent.

He was prosecuted for his homosexuality in 1952, subjected to chemical castration, and died in 1954 from cyanide poisoning, in a case considered suicide. In 2009 he received a public apology from the British government. His life inspired the film "The Imitation Game" (2014).`,
    excerpt_es: 'Pionero de la computación y la inteligencia artificial, descifrador de la máquina Enigma.', excerpt_en: 'Pioneer of computing and artificial intelligence, codebreaker of the Enigma machine.', categoryId: 'cat-computing', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-internet-origins', title_es: 'Origen de Internet', title_en: 'Origins of the Internet', slug: 'origen-internet',
    content_es: `El origen de internet se remonta a la década de 1960, cuando el Departamento de Defensa de Estados Unidos creó ARPANET, una red de ordenadores diseñada para resistir un ataque nuclear. El primer mensaje se envió el 29 de octubre de 1969 entre la UCLA y el SRI.

En 1983, ARPANET adoptó el protocolo TCP/IP, desarrollado por Vint Cerf y Robert Kahn, que permitió la interconexión de redes diferentes. Este protocolo se convirtió en el estándar para la comunicación en red y es la base de internet actual.

Tim Berners-Lee inventó la World Wide Web en 1989 en el CERN, creando el primer navegador web y el protocolo HTTP. La web transformó internet de una herramienta académica y militar en un fenómeno global que revolucionó la comunicación, el comercio y el acceso a la información.`, content_en: `The origin of the internet dates back to the 1960s, when the US Department of Defense created ARPANET, a computer network designed to withstand a nuclear attack. The first message was sent on October 29, 1969 between UCLA and SRI.

In 1983, ARPANET adopted the TCP/IP protocol, developed by Vint Cerf and Robert Kahn, which allowed different networks to interconnect. This protocol became the standard for network communication and is the foundation of today's internet.

Tim Berners-Lee invented the World Wide Web in 1989 at CERN, creating the first web browser and the HTTP protocol. The web transformed the internet from an academic and military tool into a global phenomenon that revolutionized communication, commerce, and access to information.`,
    excerpt_es: 'De ARPANET a la World Wide Web: la historia de la red que conecta al mundo.', excerpt_en: 'From ARPANET to the World Wide Web: the history of the network that connects the world.', categoryId: 'cat-internet', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-web-evolution', title_es: 'Evolución de la Web', title_en: 'Evolution of the Web', slug: 'evolucion-web',
    content_es: `La World Wide Web ha evolucionado a través de varias fases desde su creación en 1989. La Web 1.0 (1990-2005) era estática y de solo lectura: los usuarios consumían contenido publicado por empresas y creadores sin posibilidad de interacción significativa.

La Web 2.0 (2005-presente) trajo la participación del usuario: redes sociales, wikis, blogs y plataformas de contenido generado por el usuario. Empresas como Facebook, YouTube y Wikipedia definieron esta era, donde los usuarios pasaron de consumidores a creadores de contenido.

La Web 3.0, aún en desarrollo, propone una web descentralizada basada en blockchain, donde los usuarios controlan sus propios datos. Incluye conceptos como criptomonedas, NFTs, organizaciones autónomas descentralizadas (DAOs) y el metaverso. La inteligencia artificial también está transformando la web con asistentes virtuales, búsqueda semántica y personalización avanzada.`, content_en: `The World Wide Web has evolved through several phases since its creation in 1989. Web 1.0 (1990-2005) was static and read-only: users consumed content published by companies and creators without meaningful interaction.

Web 2.0 (2005-present) brought user participation: social networks, wikis, blogs, and user-generated content platforms. Companies like Facebook, YouTube, and Wikipedia defined this era, where users went from consumers to content creators.

Web 3.0, still under development, proposes a decentralized web based on blockchain, where users control their own data. It includes concepts like cryptocurrencies, NFTs, decentralized autonomous organizations (DAOs), and the metaverse. Artificial intelligence is also transforming the web with virtual assistants, semantic search, and advanced personalization.`,
    excerpt_es: 'De la web estática a la web descentralizada: la transformación de internet.', excerpt_en: 'From static web to decentralized web: the transformation of the internet.', categoryId: 'cat-internet', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-operating-systems', title_es: 'Sistemas Operativos', title_en: 'Operating Systems', slug: 'sistemas-operativos',
    content_es: `Un sistema operativo es el software fundamental que gestiona los recursos del hardware y proporciona servicios a los programas de aplicación. Los primeros sistemas operativos surgieron en la década de 1950 para mainframes de IBM, y desde entonces han evolucionado enormemente.

MS-DOS, lanzado por Microsoft en 1981, fue el sistema operativo dominante en la era de los PC. La interfaz gráfica de usuario, popularizada por el Macintosh de Apple en 1984 y posteriormente por Windows de Microsoft, transformó la computación personal al hacerla accesible a millones de personas.

Linux, creado por Linus Torvalds en 1991 como un núcleo de sistema operativo de código abierto, se convirtió en la base de internet, los servidores y los dispositivos Android. Otros sistemas importantes incluyen macOS, iOS, y las diversas distribuciones de Unix. Los sistemas operativos modernos gestionan procesos, memoria, almacenamiento, redes y seguridad.`, content_en: `An operating system is the fundamental software that manages hardware resources and provides services to application programs. The first operating systems emerged in the 1950s for IBM mainframes, and have evolved enormously since then.

MS-DOS, released by Microsoft in 1981, was the dominant operating system in the PC era. The graphical user interface, popularized by Apple's Macintosh in 1984 and later by Microsoft Windows, transformed personal computing by making it accessible to millions.

Linux, created by Linus Torvalds in 1991 as an open-source operating system kernel, became the foundation of the internet, servers, and Android devices. Other important systems include macOS, iOS, and various Unix distributions. Modern operating systems manage processes, memory, storage, networks, and security.`,
    excerpt_es: 'El software fundamental que gestiona los recursos del ordenador y permite ejecutar aplicaciones.', excerpt_en: 'The fundamental software that manages computer resources and enables running applications.', categoryId: 'cat-computing', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== AI =====
  { id: 'entry-ai-history', title_es: 'Historia de la Inteligencia Artificial', title_en: 'History of Artificial Intelligence', slug: 'historia-ia',
    content_es: `La inteligencia artificial (IA) como campo académico nació en 1956 durante la Conferencia de Dartmouth, donde John McCarthy, Marvin Minsky, Allen Newell y Herbert Simon propusieron que "cada aspecto del aprendizaje o cualquier otra característica de la inteligencia puede, en principio, describirse con tanta precisión que se puede hacer que una máquina lo simule".

Las primeras décadas vieron avances en programas de ajedrez, demostración de teoremas y procesamiento del lenguaje natural. Sin embargo, dos "inviernos de la IA" (1974-1980 y 1987-1993) frenaron la investigación debido a expectativas no cumplidas y recortes de financiación.

El resurgimiento comenzó en los años 2000 con el aprendizaje automático y el big data. Hitos clave incluyen la victoria de Deep Blue sobre Kasparov (1997), el sistema Watson de IBM (2011), y AlphaGo de DeepMind (2016). Los modelos de lenguaje como GPT y los sistemas de visión por ordenador han llevado la IA a aplicaciones cotidianas.`, content_en: `Artificial intelligence (AI) as an academic field was born in 1956 at the Dartmouth Conference, where John McCarthy, Marvin Minsky, Allen Newell, and Herbert Simon proposed that "every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."

The early decades saw advances in chess programs, theorem proving, and natural language processing. However, two "AI winters" (1974-1980 and 1987-1993) slowed research due to unmet expectations and funding cuts.

The resurgence began in the 2000s with machine learning and big data. Key milestones include Deep Blue's victory over Kasparov (1997), IBM's Watson system (2011), and DeepMind's AlphaGo (2016). Language models like GPT and computer vision systems have brought AI to everyday applications.`,
    excerpt_es: 'Desde la Conferencia de Dartmouth hasta GPT: la evolución de la inteligencia artificial.', excerpt_en: 'From the Dartmouth Conference to GPT: the evolution of artificial intelligence.', categoryId: 'cat-artificial-intelligence', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-machine-learning', title_es: 'Aprendizaje Automático', title_en: 'Machine Learning', slug: 'aprendizaje-automatico',
    content_es: `El aprendizaje automático (machine learning) es una rama de la inteligencia artificial que permite a los sistemas aprender y mejorar a partir de la experiencia sin ser programados explícitamente. Se basa en algoritmos que identifican patrones en grandes volúmenes de datos.

Existen tres tipos principales: aprendizaje supervisado, donde el modelo se entrena con datos etiquetados; aprendizaje no supervisado, donde encuentra patrones en datos sin etiquetar; y aprendizaje por refuerzo, donde un agente aprende mediante prueba y error interactuando con un entorno.

Las aplicaciones del machine learning incluyen sistemas de recomendación (Netflix, Amazon), reconocimiento facial, diagnóstico médico, vehículos autónomos, detección de fraudes, procesamiento del lenguaje natural y predicción del clima. El deep learning, basado en redes neuronales profundas, ha revolucionado campos como la visión por computadora y la traducción automática.`, content_en: `Machine learning is a branch of artificial intelligence that allows systems to learn and improve from experience without being explicitly programmed. It is based on algorithms that identify patterns in large volumes of data.

There are three main types: supervised learning, where the model is trained with labeled data; unsupervised learning, where it finds patterns in unlabeled data; and reinforcement learning, where an agent learns through trial and error interacting with an environment.

Applications of machine learning include recommendation systems (Netflix, Amazon), facial recognition, medical diagnosis, autonomous vehicles, fraud detection, natural language processing, and weather prediction. Deep learning, based on deep neural networks, has revolutionized fields such as computer vision and machine translation.`,
    excerpt_es: 'Algoritmos que aprenden de los datos: el motor de la IA moderna.', excerpt_en: 'Algorithms that learn from data: the engine of modern AI.', categoryId: 'cat-artificial-intelligence', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-neural-networks', title_es: 'Redes Neuronales', title_en: 'Neural Networks', slug: 'redes-neuronales',
    content_es: `Las redes neuronales artificiales son modelos computacionales inspirados en la estructura del cerebro humano. Consisten en capas de nodos (neuronas) interconectados que procesan información de manera similar a las sinapsis biológicas. El perceptrón, desarrollado por Frank Rosenblatt en 1958, fue el primer modelo de red neuronal.

Las redes neuronales profundas (deep learning) contienen múltiples capas ocultas entre la entrada y la salida, permitiendo aprender representaciones jerárquicas cada vez más abstractas. Las redes convolucionales (CNN) destacan en visión artificial, mientras que las redes recurrentes (RNN) y los transformers dominan el procesamiento del lenguaje.

El entrenamiento de estas redes requiere grandes cantidades de datos y potencia computacional, generalmente proporcionada por GPUs o TPUs. Avances como las redes generativas adversarias (GANs) han permitido generar imágenes, música y texto realistas, planteando cuestiones éticas sobre la autenticidad del contenido generado por IA.`, content_en: `Artificial neural networks are computational models inspired by the structure of the human brain. They consist of layers of interconnected nodes (neurons) that process information similarly to biological synapses. The perceptron, developed by Frank Rosenblatt in 1958, was the first neural network model.

Deep neural networks (deep learning) contain multiple hidden layers between input and output, enabling learning of increasingly abstract hierarchical representations. Convolutional networks (CNNs) excel in computer vision, while recurrent networks (RNNs) and transformers dominate language processing.

Training these networks requires large amounts of data and computational power, typically provided by GPUs or TPUs. Advances such as generative adversarial networks (GANs) have enabled the generation of realistic images, music, and text, raising ethical questions about the authenticity of AI-generated content.`,
    excerpt_es: 'Modelos computacionales inspirados en el cerebro que aprenden representaciones jerárquicas.', excerpt_en: 'Computational models inspired by the brain that learn hierarchical representations.', categoryId: 'cat-artificial-intelligence', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-gpt', title_es: 'GPT y Modelos de Lenguaje', title_en: 'GPT and Language Models', slug: 'gpt-modelos-lenguaje',
    content_es: `GPT (Generative Pre-trained Transformer) es una serie de modelos de lenguaje desarrollados por OpenAI que han revolucionado el campo del procesamiento del lenguaje natural. El primer GPT se lanzó en 2018 con 117 millones de parámetros, demostrando que el pre-entrenamiento no supervisado en grandes corpus de texto podía transferirse eficazmente a múltiples tareas.

GPT-2 (2019) causó controversia por su capacidad para generar texto coherente, lo que llevó a OpenAI a retrasar su publicación por temor a usos malintencionados. GPT-3 (2020) con 175 mil millones de parámetros demostró habilidades emergentes como la traducción, la respuesta a preguntas y la generación de código sin entrenamiento específico.

ChatGPT, lanzado en noviembre de 2022, llevó la IA conversacional al público general, alcanzando 100 millones de usuarios en dos meses. GPT-4 (2023) añadió capacidades multimodales, procesando texto e imágenes. La competencia con modelos como Gemini de Google, Claude de Anthropic y Llama de Meta ha acelerado el desarrollo de la IA generativa.`, content_en: `GPT (Generative Pre-trained Transformer) is a series of language models developed by OpenAI that have revolutionized the field of natural language processing. The first GPT was released in 2018 with 117 million parameters, demonstrating that unsupervised pre-training on large text corpora could transfer effectively to multiple tasks.

GPT-2 (2019) caused controversy for its ability to generate coherent text, leading OpenAI to delay its release over fears of malicious use. GPT-3 (2020) with 175 billion parameters demonstrated emergent abilities such as translation, question answering, and code generation without specific training.

ChatGPT, launched in November 2022, brought conversational AI to the general public, reaching 100 million users in two months. GPT-4 (2023) added multimodal capabilities, processing text and images. Competition with models like Google's Gemini, Anthropic's Claude, and Meta's Llama has accelerated the development of generative AI.`,
    excerpt_es: 'Modelos de lenguaje que transformaron la IA conversacional y la generación de contenido.', excerpt_en: 'Language models that transformed conversational AI and content generation.', categoryId: 'cat-artificial-intelligence', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== ENGINEERING =====
  { id: 'entry-industrial-revolution', title_es: 'Revolución Industrial', title_en: 'Industrial Revolution', slug: 'revolucion-industrial',
    content_es: `La Revolución Industrial fue un período de transformación económica, tecnológica y social que comenzó en Gran Bretaña a mediados del siglo XVIII y se extendió por todo el mundo. Marcó la transición de una economía agraria y artesanal a una dominada por la industria y la fabricación mecanizada.

La máquina de vapor, perfeccionada por James Watt en 1765, fue el motor de esta transformación. Proporcionó energía para fábricas, locomotoras y barcos, revolucionando el transporte y la producción. Otras innovaciones clave incluyen la hiladora mecánica (Spinning Jenny), el telar mecánico y el alto horno para la producción de acero.

La Revolución Industrial tuvo profundos efectos sociales: urbanización masiva, crecimiento de la clase trabajadora, mejora del nivel de vida a largo plazo pero también condiciones laborales duras, trabajo infantil y contaminación. La Segunda Revolución Industrial (1870-1914) trajo el motor de combustión interna, la electricidad y la producción en cadena.`, content_en: `The Industrial Revolution was a period of economic, technological, and social transformation that began in Britain in the mid-18th century and spread worldwide. It marked the transition from an agrarian and craft economy to one dominated by industry and mechanized manufacturing.

The steam engine, perfected by James Watt in 1765, was the engine of this transformation. It provided power for factories, locomotives, and ships, revolutionizing transportation and production. Other key innovations include the spinning jenny, the power loom, and the blast furnace for steel production.

The Industrial Revolution had profound social effects: massive urbanization, growth of the working class, long-term improvement in living standards but also harsh working conditions, child labor, and pollution. The Second Industrial Revolution (1870-1914) brought the internal combustion engine, electricity, and assembly line production.`,
    excerpt_es: 'La transformación que cambió el mundo: de la producción artesanal a la industria mecanizada.', excerpt_en: 'The transformation that changed the world: from craft production to mechanized industry.', categoryId: 'cat-engineering', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-bridge-engineering', title_es: 'Ingeniería de Puentes', title_en: 'Bridge Engineering', slug: 'ingenieria-puentes',
    content_es: `La construcción de puentes es una de las disciplinas más antiguas y fascinantes de la ingeniería civil. Desde los puentes de troncos de la prehistoria hasta los gigantes de acero y hormigón modernos, los puentes han sido esenciales para el desarrollo de las civilizaciones al conectar territorios separados por ríos, valles y mares.

Los romanos fueron maestros constructores de puentes, utilizando el arco de medio punto para crear estructuras duraderas como el Puente de Alcántara (106 d.C.) que aún se mantiene en pie. El Puente de Brooklyn (1883), diseñado por John Roebling, fue el primer puente colgante de cables de acero y marcó un hito en la ingeniería moderna.

Los puentes modernos se clasifican en varios tipos: vigas, arco, colgantes, atirantados y en ménsula. Cada tipo tiene ventajas específicas según la luz a salvar, las cargas y las condiciones del terreno. El Puente Akashi Kaikyo (Japón) con 1,991 metros de luz es el puente colgante más largo del mundo.`, content_en: `Bridge construction is one of the oldest and most fascinating disciplines of civil engineering. From prehistoric log bridges to modern steel and concrete giants, bridges have been essential for the development of civilizations by connecting territories separated by rivers, valleys, and seas.

The Romans were master bridge builders, using the semicircular arch to create durable structures like the Alcántara Bridge (106 AD) which still stands. The Brooklyn Bridge (1883), designed by John Roebling, was the first steel-wire suspension bridge and marked a milestone in modern engineering.

Modern bridges are classified into several types: beam, arch, suspension, cable-stayed, and cantilever. Each type has specific advantages depending on the span, loads, and terrain conditions. The Akashi Kaikyo Bridge (Japan) with a span of 1,991 meters is the longest suspension bridge in the world.`,
    excerpt_es: 'Estructuras que conectan civilizaciones: la evolución de la ingeniería de puentes.', excerpt_en: 'Structures that connect civilizations: the evolution of bridge engineering.', categoryId: 'cat-engineering', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== TRANSPORTATION =====
  { id: 'entry-railway-history', title_es: 'Historia del Ferrocarril', title_en: 'History of Railways', slug: 'historia-ferrocarril',
    content_es: `El ferrocarril fue una de las innovaciones más transformadoras de la Revolución Industrial. La primera locomotora de vapor práctica fue construida por George Stephenson en 1814. En 1825, el Ferrocarril de Stockton y Darlington se convirtió en la primera línea pública de vapor del mundo.

La expansión ferroviaria en el siglo XIX fue extraordinaria. En Estados Unidos, el Primer Ferrocarril Transcontinental (1869) conectó la costa este con la oeste, transformando la economía y la demografía del país. En Europa, las redes ferroviarias conectaron naciones y aceleraron la industrialización.

El ferrocarril evolucionó desde el vapor hasta la tracción eléctrica y diésel. El tren de alta velocidad, inaugurado por el Shinkansen japonés en 1964, alcanza velocidades superiores a 300 km/h. Los trenes de levitación magnética (maglev) como el Shanghái Maglev (431 km/h) representan la frontera tecnológica del transporte ferroviario.`, content_en: `The railway was one of the most transformative innovations of the Industrial Revolution. The first practical steam locomotive was built by George Stephenson in 1814. In 1825, the Stockton and Darlington Railway became the world's first public steam railway.

Railway expansion in the 19th century was extraordinary. In the United States, the First Transcontinental Railroad (1869) connected the east coast with the west, transforming the country's economy and demographics. In Europe, railway networks connected nations and accelerated industrialization.

Railways evolved from steam to electric and diesel traction. High-speed rail, inaugurated by Japan's Shinkansen in 1964, reaches speeds exceeding 300 km/h. Maglev trains like the Shanghai Maglev (431 km/h) represent the technological frontier of railway transportation.`,
    excerpt_es: 'El tren que cambió el mundo: del vapor al maglev de alta velocidad.', excerpt_en: 'The train that changed the world: from steam to high-speed maglev.', categoryId: 'cat-transportation', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-aviation-history', title_es: 'Historia de la Aviación', title_en: 'History of Aviation', slug: 'historia-aviacion',
    content_es: `La historia de la aviación comenzó con el sueño milenario de volar. Los hermanos Wright realizaron el primer vuelo controlado, motorizado y sostenido el 17 de diciembre de 1903 en Kitty Hawk, Carolina del Norte. Su Flyer recorrió 36 metros en 12 segundos, cambiando para siempre la historia del transporte.

La aviación progresó rápidamente: en 1914 se inauguró el primer servicio aéreo comercial regular. Charles Lindbergh cruzó el Atlántico en solitario en 1927. La Segunda Guerra Mundial aceleró el desarrollo de aeronaves, introduciendo aviones a reacción y el radar.

La era del jet comercial comenzó con el De Havilland Comet (1952) y fue revolucionada por el Boeing 747 (1970), que democratizó los viajes intercontinentales. Hoy, la aviación transporta más de 4 mil millones de pasajeros anuales. Los drones y la movilidad aérea urbana representan la próxima frontera, con empresas desarrollando taxis aéreos eléctricos de despegue vertical (eVTOL).`, content_en: `The history of aviation began with the age-old dream of flying. The Wright brothers made the first controlled, powered, and sustained flight on December 17, 1903 at Kitty Hawk, North Carolina. Their Flyer traveled 36 meters in 12 seconds, changing the history of transportation forever.

Aviation progressed rapidly: the first regular commercial air service began in 1914. Charles Lindbergh crossed the Atlantic solo in 1927. World War II accelerated aircraft development, introducing jet engines and radar.

The commercial jet era began with the De Havilland Comet (1952) and was revolutionized by the Boeing 747 (1970), which democratized intercontinental travel. Today, aviation carries over 4 billion passengers annually. Drones and urban air mobility represent the next frontier, with companies developing electric vertical takeoff and landing (eVTOL) air taxis.`,
    excerpt_es: 'Del vuelo de los hermanos Wright a los aviones comerciales y taxis aéreos eléctricos.', excerpt_en: 'From the Wright brothers flight to commercial jets and electric air taxis.', categoryId: 'cat-transportation', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-automobile-history', title_es: 'Historia del Automóvil', title_en: 'History of the Automobile', slug: 'historia-automovil',
    content_es: `El automóvil transformó radicalmente la movilidad humana y el paisaje urbano. Karl Benz patentó el primer automóvil con motor de combustión interna en 1886 en Alemania. Henry Ford revolucionó la producción con la línea de montaje en 1913, reduciendo drásticamente el costo del Ford Modelo T.

El automóvil se convirtió en símbolo de libertad y progreso durante el siglo XX. Las plantas de producción en masa de General Motors, Chrysler y Ford impulsaron la economía estadounidense. En Europa, marcas como Mercedes-Benz, BMW, Volkswagen, Ferrari y Rolls-Royce definieron la excelencia automotriz.

Hoy la industria atraviesa una transformación hacia vehículos eléctricos, liderada por Tesla, y la conducción autónoma. Las preocupaciones ambientales están impulsando regulaciones más estrictas de emisiones y la prohibición de motores de combustión en varios países para 2035. El automóvil del futuro será eléctrico, autónomo, conectado y compartido.`, content_en: `The automobile radically transformed human mobility and the urban landscape. Karl Benz patented the first automobile with an internal combustion engine in 1886 in Germany. Henry Ford revolutionized production with the assembly line in 1913, drastically reducing the cost of the Model T.

The automobile became a symbol of freedom and progress during the 20th century. The mass production plants of General Motors, Chrysler, and Ford drove the US economy. In Europe, brands like Mercedes-Benz, BMW, Volkswagen, Ferrari, and Rolls-Royce defined automotive excellence.

Today the industry is undergoing a transformation toward electric vehicles, led by Tesla, and autonomous driving. Environmental concerns are driving stricter emission regulations and bans on combustion engines in several countries by 2035. The future car will be electric, autonomous, connected, and shared.`,
    excerpt_es: 'De Karl Benz a Tesla: la evolución del automóvil y su impacto en la sociedad.', excerpt_en: 'From Karl Benz to Tesla: the evolution of the automobile and its impact on society.', categoryId: 'cat-transportation', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== ENERGY =====
  { id: 'entry-nuclear-energy', title_es: 'Energía Nuclear', title_en: 'Nuclear Energy', slug: 'energia-nuclear',
    content_es: `La energía nuclear se obtiene mediante reacciones de fisión o fusión de núcleos atómicos. La fisión nuclear, descubierta por Otto Hahn y Fritz Strassmann en 1938, libera enormes cantidades de energía al dividir núcleos pesados como el uranio-235. La primera reacción nuclear controlada fue lograda por Enrico Fermi en 1942.

Las centrales nucleares comerciales comenzaron a operar en la década de 1950. Hoy proporcionan aproximadamente el 10% de la electricidad mundial. Francia obtiene alrededor del 70% de su electricidad de la energía nuclear. Los reactores nucleares no emiten CO2 durante su operación, lo que los convierte en una fuente de energía baja en carbono.

El debate nuclear incluye preocupaciones sobre seguridad (Chernóbil 1986, Fukushima 2011), gestión de residuos radiactivos y proliferación nuclear. Los reactores de cuarta generación y los reactores modulares pequeños (SMRs) prometen mayor seguridad y eficiencia. La fusión nuclear, aún en desarrollo experimental, podría proporcionar energía limpia e ilimitada si se logra comercializar.`, content_en: `Nuclear energy is obtained through fission or fusion reactions of atomic nuclei. Nuclear fission, discovered by Otto Hahn and Fritz Strassmann in 1938, releases enormous amounts of energy by splitting heavy nuclei like uranium-235. The first controlled nuclear reaction was achieved by Enrico Fermi in 1942.

Commercial nuclear power plants began operating in the 1950s. Today they provide approximately 10% of the world's electricity. France obtains around 70% of its electricity from nuclear power. Nuclear reactors emit no CO2 during operation, making them a low-carbon energy source.

The nuclear debate includes concerns about safety (Chernobyl 1986, Fukushima 2011), radioactive waste management, and nuclear proliferation. Fourth-generation reactors and small modular reactors (SMRs) promise greater safety and efficiency. Nuclear fusion, still under experimental development, could provide clean and unlimited energy if commercialized.`,
    excerpt_es: 'La energía del átomo: fisión nuclear, centrales eléctricas y el futuro de la fusión.', excerpt_en: 'The energy of the atom: nuclear fission, power plants, and the future of fusion.', categoryId: 'cat-energy', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-solar-energy', title_es: 'Energía Solar', title_en: 'Solar Energy', slug: 'energia-solar',
    content_es: `La energía solar es la fuente de energía renovable más abundante de la Tierra. La tecnología fotovoltaica, que convierte la luz solar directamente en electricidad, fue descubierta por Alexandre Becquerel en 1839. La primera célula solar práctica fue desarrollada en Bell Labs en 1954 con una eficiencia del 6%.

Los paneles solares han experimentado una reducción drástica de costos: desde $100 por vatio en 1975 hasta menos de $0.30 en la actualidad. La eficiencia de las células comerciales ha superado el 22%, y las células de laboratorio alcanzan el 47%. China, Estados Unidos y Japón lideran la capacidad instalada.

La energía solar de concentración (CSP) utiliza espejos para concentrar la luz solar y generar calor que impulsa turbinas. Los parques solares flotantes y la integración fotovoltaica en edificios (BIPV) expanden las aplicaciones. El principal desafío es el almacenamiento: las baterías de ion-litio y las tecnologías de hidrógeno verde permiten gestionar la intermitencia de la generación solar.`, content_en: `Solar energy is the most abundant renewable energy source on Earth. Photovoltaic technology, which converts sunlight directly into electricity, was discovered by Alexandre Becquerel in 1839. The first practical solar cell was developed at Bell Labs in 1954 with 6% efficiency.

Solar panels have experienced a drastic cost reduction: from $100 per watt in 1975 to less than $0.30 today. Commercial cell efficiency has exceeded 22%, and laboratory cells reach 47%. China, the United States, and Japan lead installed capacity.

Concentrated solar power (CSP) uses mirrors to concentrate sunlight and generate heat that drives turbines. Floating solar farms and building-integrated photovoltaics (BIPV) expand applications. The main challenge is storage: lithium-ion batteries and green hydrogen technologies help manage the intermittency of solar generation.`,
    excerpt_es: 'La energía del sol: de las primeras células fotovoltaicas a los parques solares del futuro.', excerpt_en: 'The power of the sun: from early photovoltaic cells to the solar farms of the future.', categoryId: 'cat-energy', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== TELECOMUNICACIONES =====
  { id: 'entry-telegraph', title_es: 'Telégrafo', title_en: 'Telegraph', slug: 'telegrafo',
    content_es: `El telégrafo fue el primer sistema de comunicación eléctrica a distancia. Samuel Morse desarrolló el telégrafo electromagnético y el código Morse en la década de 1830. En 1844 envió el primer mensaje telegráfico: "What hath God wrought" entre Washington D.C. y Baltimore.

El telégrafo revolucionó las comunicaciones al reducir el tiempo de transmisión de información de días u horas a minutos. Las líneas telegráficas se extendieron por todo el mundo, incluyendo el primer cable telegráfico transatlántico (1866), que conectó América y Europa.

La invención del teléfono por Alexander Graham Bell en 1876 complementó y eventualmente superó al telégrafo para comunicaciones de voz. Sin embargo, la transmisión de datos digitales, el fax y los modernos sistemas de datos en paquetes tienen sus raíces en el concepto de codificación y transmisión eléctrica de información que estableció el telégrafo.`, content_en: `The telegraph was the first electrical long-distance communication system. Samuel Morse developed the electromagnetic telegraph and Morse code in the 1830s. In 1844 he sent the first telegraphic message: "What hath God wrought" between Washington D.C. and Baltimore.

The telegraph revolutionized communications by reducing information transmission time from days or hours to minutes. Telegraph lines spread worldwide, including the first transatlantic telegraph cable (1866), which connected America and Europe.

The invention of the telephone by Alexander Graham Bell in 1876 complemented and eventually surpassed the telegraph for voice communications. However, digital data transmission, fax, and modern packet-switched data systems have their roots in the concept of electrical encoding and transmission of information established by the telegraph.`,
    excerpt_es: 'El primer sistema de comunicación eléctrica que acortó las distancias en el siglo XIX.', excerpt_en: 'The first electrical communication system that shortened distances in the 19th century.', categoryId: 'cat-telecom', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-radio', title_es: 'Radio', title_en: 'Radio', slug: 'radio',
    content_es: `La radio es una tecnología de comunicación que utiliza ondas electromagnéticas para transmitir información. Heinrich Hertz demostró la existencia de las ondas de radio en 1887. Guglielmo Marconi realizó la primera transmisión transatlántica en 1901, sentando las bases de las comunicaciones inalámbricas.

La radio se convirtió en el primer medio de comunicación de masas electrónico. Durante la Gran Depresión y la Segunda Guerra Mundial, la radio fue la principal fuente de noticias y entretenimiento. Presidentes como Franklin D. Roosevelt utilizaron la radio para dirigirse directamente a la nación.

La evolución de la radio incluye la radio FM (frecuencia modulada), la radio digital, la radio por internet y los podcasts. La tecnología de radiofrecuencia también es fundamental para la telefonía móvil, WiFi, Bluetooth, RFID y sistemas GPS. Las ondas de radio, invisibles y omnipresentes, constituyen la columna vertebral de las comunicaciones modernas.`, content_en: `Radio is a communication technology that uses electromagnetic waves to transmit information. Heinrich Hertz demonstrated the existence of radio waves in 1887. Guglielmo Marconi made the first transatlantic transmission in 1901, laying the foundations of wireless communications.

Radio became the first electronic mass communication medium. During the Great Depression and World War II, radio was the primary source of news and entertainment. Presidents like Franklin D. Roosevelt used radio to speak directly to the nation.

The evolution of radio includes FM (frequency modulation), digital radio, internet radio, and podcasts. Radio frequency technology is also fundamental for mobile telephony, WiFi, Bluetooth, RFID, and GPS systems. Radio waves, invisible and omnipresent, form the backbone of modern communications.`,
    excerpt_es: 'Ondas electromagnéticas que conectan el mundo: de Hertz al WiFi y los podcasts.', excerpt_en: 'Electromagnetic waves connecting the world: from Hertz to WiFi and podcasts.', categoryId: 'cat-telecom', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== SPACE TECH =====
  { id: 'entry-space-race', title_es: 'Carrera Espacial', title_en: 'Space Race', slug: 'carrera-espacial',
    content_es: `La Carrera Espacial fue la competencia entre Estados Unidos y la Unión Soviética por la conquista del espacio durante la Guerra Fría (1957-1975). Comenzó con el lanzamiento del Sputnik 1 soviético en octubre de 1957, el primer satélite artificial, que causó conmoción en Occidente.

La URSS logró muchos hitos iniciales: primer ser vivo en el espacio (Laika, 1957), primer humano (Yuri Gagarin, 1961) y primera mujer (Valentina Tereshkova, 1963). Estados Unidos respondió con el programa Mercury y las misiones Gemini, desarrollando las capacidades necesarias para llegar a la Luna.

El 20 de julio de 1969, la misión Apolo 11 de la NASA alunizó con Neil Armstrong y Buzz Aldrin. Armstrong pronunció su famosa frase: "Un pequeño paso para un hombre, un gran salto para la humanidad". Se realizaron seis alunizajes exitosos entre 1969 y 1972. La carrera espacial impulsó avances tecnológicos en computación, comunicaciones y ciencia de materiales que benefician a la sociedad actual.`, content_en: `The Space Race was the competition between the United States and the Soviet Union for the conquest of space during the Cold War (1957-1975). It began with the launch of the Soviet Sputnik 1 in October 1957, the first artificial satellite, which caused shock in the West.

The USSR achieved many early milestones: first living being in space (Laika, 1957), first human (Yuri Gagarin, 1961), and first woman (Valentina Tereshkova, 1963). The United States responded with the Mercury program and Gemini missions, developing the capabilities needed to reach the Moon.

On July 20, 1969, NASA's Apollo 11 mission landed on the Moon with Neil Armstrong and Buzz Aldrin. Armstrong spoke his famous words: "That's one small step for man, one giant leap for mankind." Six successful lunar landings were made between 1969 and 1972. The space race drove technological advances in computing, communications, and materials science that benefit society today.`,
    excerpt_es: 'La competencia entre superpotencias que llevó al hombre a la Luna.', excerpt_en: 'The superpower competition that took humanity to the Moon.', categoryId: 'cat-space-tech', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-iss', title_es: 'Estación Espacial Internacional', title_en: 'International Space Station', slug: 'estacion-espacial-internacional',
    content_es: `La Estación Espacial Internacional (ISS) es el proyecto de colaboración internacional más complejo de la historia. Orbita la Tierra a unos 400 km de altitud a 28,000 km/h, completando una vuelta cada 90 minutos. Su construcción comenzó en 1998 y ha estado habitada continuamente desde noviembre de 2000.

La ISS es un laboratorio de microgravedad donde se realizan experimentos en biología, física, ciencia de materiales y medicina. Ha albergado a astronautas de 19 países y ha sido fundamental para entender los efectos de los viajes espaciales en el cuerpo humano.

Cinco agencias espaciales colaboran en la ISS: NASA (EE.UU.), Roscosmos (Rusia), JAXA (Japón), ESA (Europa) y CSA (Canadá). La estación tiene el tamaño de un campo de fútbol y pesa 420 toneladas. Su futuro está previsto hasta 2030, después de lo cual será desorbitada de manera controlada. Las estaciones espaciales comerciales de Axiom Space y otras empresas tomarán el relevo.`, content_en: `The International Space Station (ISS) is the most complex international collaboration project in history. It orbits Earth at about 400 km altitude at 28,000 km/h, completing a lap every 90 minutes. Construction began in 1998 and it has been continuously inhabited since November 2000.

The ISS is a microgravity laboratory where experiments are conducted in biology, physics, materials science, and medicine. It has hosted astronauts from 19 countries and has been essential for understanding the effects of space travel on the human body.

Five space agencies collaborate on the ISS: NASA (USA), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada). The station is the size of a football field and weighs 420 tons. Its future is planned until 2030, after which it will be deorbited in a controlled manner. Commercial space stations from Axiom Space and other companies will take over.`,
    excerpt_es: 'El laboratorio espacial más grande jamás construido, símbolo de cooperación internacional.', excerpt_en: 'The largest space laboratory ever built, a symbol of international cooperation.', categoryId: 'cat-space-tech', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-spacex', title_es: 'SpaceX y la Nueva Era Espacial', title_en: 'SpaceX and the New Space Age', slug: 'spacex-nueva-era',
    content_es: `SpaceX (Space Exploration Technologies Corp.) fue fundada por Elon Musk en 2002 con el objetivo de reducir los costos del transporte espacial y permitir la colonización de Marte. La empresa revolucionó la industria aeroespacial con el desarrollo de cohetes reutilizables.

El Falcon 9, primer cohete orbital reutilizable, realizó su primer aterrizaje exitoso en 2015. La nave Dragon fue el primer vehículo privado en acoplarse a la ISS (2012). El Falcon Heavy, el cohete operativo más potente del mundo, debutó en 2018 enviando un Tesla Roadster al espacio.

Starship, el cohete más grande jamás construido (120 metros de altura), está diseñado para misiones a Marte. Starlink, la constelación de satélites de internet de SpaceX, ya cuenta con miles de satélites en órbita baja proporcionando internet de banda ancha global. SpaceX ha reducido el costo de lanzamiento orbital en más del 90%, inaugurando una nueva era de exploración espacial comercial.`, content_en: `SpaceX (Space Exploration Technologies Corp.) was founded by Elon Musk in 2002 with the goal of reducing space transportation costs and enabling the colonization of Mars. The company revolutionized the aerospace industry with the development of reusable rockets.

The Falcon 9, the first reusable orbital rocket, made its first successful landing in 2015. The Dragon spacecraft was the first private vehicle to dock with the ISS (2012). The Falcon Heavy, the most powerful operational rocket in the world, debuted in 2018 by sending a Tesla Roadster into space.

Starship, the largest rocket ever built (120 meters tall), is designed for missions to Mars. Starlink, SpaceX's internet satellite constellation, already has thousands of satellites in low Earth orbit providing global broadband internet. SpaceX has reduced orbital launch costs by more than 90%, ushering in a new era of commercial space exploration.`,
    excerpt_es: 'La empresa que democratizó el espacio con cohetes reutilizables y sueños marcianos.', excerpt_en: 'The company that democratized space with reusable rockets and Martian dreams.', categoryId: 'cat-space-tech', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== ROBOTICS =====
  { id: 'entry-robotics-history', title_es: 'Historia de la Robótica', title_en: 'History of Robotics', slug: 'historia-robotica',
    content_es: `La robótica es la rama de la tecnología que diseña, construye y opera robots. El término "robot" fue acuñado por el escritor checo Karel Čapek en su obra R.U.R. (1920). La palabra deriva de "robota", que significa trabajo forzado en checo.

El primer robot industrial fue Unimate, instalado en una planta de General Motors en 1961 para tareas de soldadura y manipulación de piezas fundidas. Desde entonces, los robots industriales han transformado la fabricación, especialmente en la industria automotriz. Empresas como FANUC, ABB y KUKA lideran el mercado.

La robótica moderna abarca robots humanoides como ASIMO de Honda y Atlas de Boston Dynamics, robots quirúrgicos como el Da Vinci, robots de servicio como las aspiradoras Roomba, y robots educativos. La integración con inteligencia artificial está permitiendo robots autónomos capaces de navegar entornos complejos, reconocer objetos y tomar decisiones en tiempo real.`, content_en: `Robotics is the branch of technology that designs, builds, and operates robots. The term "robot" was coined by Czech writer Karel Čapek in his play R.U.R. (1920). The word derives from "robota," meaning forced labor in Czech.

The first industrial robot was Unimate, installed at a General Motors plant in 1961 for welding and handling castings. Since then, industrial robots have transformed manufacturing, especially in the automotive industry. Companies like FANUC, ABB, and KUKA lead the market.

Modern robotics encompasses humanoid robots like Honda's ASIMO and Boston Dynamics' Atlas, surgical robots like the Da Vinci, service robots like Roomba vacuums, and educational robots. Integration with artificial intelligence is enabling autonomous robots capable of navigating complex environments, recognizing objects, and making real-time decisions.`,
    excerpt_es: 'De Unimate a los humanoides autónomos: la evolución de los robots.', excerpt_en: 'From Unimate to autonomous humanoids: the evolution of robots.', categoryId: 'cat-robotics', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== BIOTECH =====
  { id: 'entry-genetic-engineering', title_es: 'Ingeniería Genética', title_en: 'Genetic Engineering', slug: 'ingenieria-genetica',
    content_es: `La ingeniería genética es la manipulación directa del ADN de un organismo para modificar sus características. Comenzó en la década de 1970 con el desarrollo de la tecnología de ADN recombinante por Stanley Cohen y Herbert Boyer, que permitió cortar y pegar genes de diferentes organismos.

El primer organismo transgénico se creó en 1973. Desde entonces, la ingeniería genética ha producido cultivos resistentes a plagas (maíz Bt), bacterias que producen insulina humana, y animales modificados para investigación. La técnica CRISPR-Cas9, descubierta por Jennifer Doudna y Emmanuelle Charpentier en 2012, revolucionó el campo al permitir edición genética precisa, barata y sencilla.

Las aplicaciones de CRISPR incluyen terapia génica para enfermedades hereditarias, mejora de cultivos, eliminación de parásitos y posible resurrección de especies extintas. La edición del genoma humano plantea profundas cuestiones éticas sobre los límites de la intervención genética, incluyendo la modificación de la línea germinal y el diseño de bebés.`, content_en: `Genetic engineering is the direct manipulation of an organism's DNA to modify its characteristics. It began in the 1970s with the development of recombinant DNA technology by Stanley Cohen and Herbert Boyer, which enabled cutting and pasting genes from different organisms.

The first transgenic organism was created in 1973. Since then, genetic engineering has produced pest-resistant crops (Bt corn), bacteria that produce human insulin, and modified animals for research. The CRISPR-Cas9 technique, discovered by Jennifer Doudna and Emmanuelle Charpentier in 2012, revolutionized the field by enabling precise, cheap, and simple genetic editing.

CRISPR applications include gene therapy for hereditary diseases, crop improvement, parasite elimination, and possible resurrection of extinct species. Human genome editing raises profound ethical questions about the limits of genetic intervention, including germline modification and designer babies.`,
    excerpt_es: 'La tecnología que permite editar el ADN con precisión, abriendo puertas a la medicina del futuro.', excerpt_en: 'The technology that enables precise DNA editing, opening doors to future medicine.', categoryId: 'cat-biotech', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== NANOTECH =====
  { id: 'entry-nanotech-intro', title_es: 'Introducción a la Nanotecnología', title_en: 'Introduction to Nanotechnology', slug: 'introduccion-nanotecnologia',
    content_es: `La nanotecnología es la manipulación de la materia a escala nanométrica (1-100 nanómetros). Richard Feynman anticipó este campo en su famosa charla de 1959 "There's Plenty of Room at the Bottom". El término "nanotecnología" fue popularizado por Eric Drexler en la década de 1980.

A escala nanométrica, los materiales exhiben propiedades únicas debido a efectos cuánticos y de superficie. Por ejemplo, el oro en nanopartículas puede ser rojo o azul en lugar de dorado, y el carbono en nanotubos es más resistente que el acero pero más ligero que el aluminio.

Las aplicaciones actuales incluyen nanopartículas en protectores solares, recubrimientos antibacterianos, sensores ultraprecisos, sistemas de administración de fármacos dirigidos, y catalizadores más eficientes. En el futuro, la nanotecnología podría permitir la construcción molecular, ordenadores cuánticos y nanorobots médicos que reparan células desde el interior.`, content_en: `Nanotechnology is the manipulation of matter at the nanometer scale (1-100 nanometers). Richard Feynman anticipated this field in his famous 1959 lecture "There's Plenty of Room at the Bottom." The term "nanotechnology" was popularized by Eric Drexler in the 1980s.

At the nanometer scale, materials exhibit unique properties due to quantum and surface effects. For example, gold nanoparticles can be red or blue instead of golden, and carbon nanotubes are stronger than steel but lighter than aluminum.

Current applications include nanoparticles in sunscreens, antibacterial coatings, ultra-precise sensors, targeted drug delivery systems, and more efficient catalysts. In the future, nanotechnology could enable molecular construction, quantum computers, and medical nanorobots that repair cells from within.`,
    excerpt_es: 'La ciencia de lo minúsculo: manipulando la materia a escala atómica y molecular.', excerpt_en: 'The science of the minuscule: manipulating matter at the atomic and molecular scale.', categoryId: 'cat-nanotech', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
]

export const newTechSubsections: SeedSubsection[] = []

// We'll add subsections for key entries later as needed
