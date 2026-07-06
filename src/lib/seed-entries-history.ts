import type { SeedEntry, SeedSubsection } from './seed'

const now = '2026-03-15T00:00:00Z'

export const newHistoryEntries: SeedEntry[] = [
  // ===== MODERN HISTORY =====
  { id: 'entry-age-discovery', title_es: 'Era de los Descubrimientos', title_en: 'Age of Discovery', slug: 'era-descubrimientos',
    content_es: `La Era de los Descubrimientos (siglos XV-XVII) fue un período en el que las potencias europeas exploraron, colonizaron y cartografiaron el mundo. Impulsada por la búsqueda de rutas comerciales a Asia, el avance de la navegación y el espíritu de cruzada religiosa, transformó la comprensión global.

Portugal lideró con Enrique el Navegante, explorando la costa africana hasta que Vasco da Gama alcanzó la India en 1498. Cristóbal Colón, patrocinado por los Reyes Católicos, llegó a América en 1492. Fernando de Magallanes y Juan Sebastián Elcano completaron la primera circunnavegación del globo (1519-1522).

El descubrimiento de América tuvo consecuencias profundas: el intercambio colombino de plantas, animales, enfermedades y culturas; la explotación de recursos y pueblos indígenas; la creación de los primeros imperios globales (español, portugués, británico, francés). La Era de los Descubrimientos marcó el inicio de la globalización y del dominio europeo del mundo que duraría hasta el siglo XX.`,
    content_en: `The Age of Discovery (15th-17th centuries) was a period when European powers explored, colonized, and mapped the world. Driven by the search for trade routes to Asia, advances in navigation, and the spirit of religious crusade, it transformed global understanding.

Portugal led with Henry the Navigator, exploring the African coast until Vasco da Gama reached India in 1498. Christopher Columbus, sponsored by the Catholic Monarchs, reached America in 1492. Ferdinand Magellan and Juan Sebastián Elcano completed the first circumnavigation of the globe (1519-1522).

The discovery of America had profound consequences: the Columbian exchange of plants, animals, diseases, and cultures; the exploitation of resources and indigenous peoples; the creation of the first global empires (Spanish, Portuguese, British, French). The Age of Discovery marked the beginning of globalization and European world dominance that would last until the 20th century.`,
    excerpt_es: 'La expansión europea que transformó el mundo: Colón, Magallanes y el encuentro de continentes.', excerpt_en: 'The European expansion that transformed the world: Columbus, Magellan, and the meeting of continents.', categoryId: 'cat-modern-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-reformation', title_es: 'Reforma Protestante', title_en: 'Protestant Reformation', slug: 'reforma-protestante',
    content_es: `La Reforma Protestante fue un movimiento religioso y político del siglo XVI que dividió a la Iglesia Católica y dio origen a las iglesias protestantes. Comenzó cuando Martín Lutero publicó sus 95 Tesis en Wittenberg en 1517, criticando la venta de indulgencias y la autoridad papal.

Las ideas de Lutero se difundieron gracias a la imprenta de Gutenberg. Enseñaba la justificación por la fe sola (sola fide), la autoridad de la Biblia sola (sola scriptura) y el sacerdocio universal de todos los creyentes. La Reforma se extendió rápidamente por el norte de Europa: Suiza (Ulrico Zuinglio, Juan Calvino), Inglaterra (Iglesia Anglicana), Escocia (John Knox).

La Contrarreforma católica, impulsada por el Concilio de Trento (1545-1563), reafirmó la doctrina católica y reformó la disciplina eclesiástica. La Compañía de Jesús (Jesuitas) lideró la renovación espiritual y educativa. Las guerras de religión asolaron Europa durante más de un siglo, incluyendo la Guerra de los Treinta Años (1618-1648). La Reforma sentó las bases del pluralismo religioso y del individualismo moderno.`,
    content_en: `The Protestant Reformation was a 16th century religious and political movement that divided the Catholic Church and gave rise to Protestant churches. It began when Martin Luther published his 95 Theses in Wittenberg in 1517, criticizing the sale of indulgences and papal authority.

Luther's ideas spread thanks to Gutenberg's printing press. He taught justification by faith alone (sola fide), authority of the Bible alone (sola scriptura), and the universal priesthood of all believers. The Reformation spread rapidly across northern Europe: Switzerland (Ulrich Zwingli, John Calvin), England (Anglican Church), Scotland (John Knox).

The Catholic Counter-Reformation, driven by the Council of Trent (1545-1563), reaffirmed Catholic doctrine and reformed ecclesiastical discipline. The Society of Jesus (Jesuits) led spiritual and educational renewal. Wars of religion ravaged Europe for over a century, including the Thirty Years' War (1618-1648). The Reformation laid the foundations of religious pluralism and modern individualism.`,
    excerpt_es: 'La ruptura de la cristiandad occidental: Lutero, Calvino y el nacimiento del protestantismo.', excerpt_en: 'The rupture of Western Christendom: Luther, Calvin, and the birth of Protestantism.', categoryId: 'cat-modern-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-enlightenment', title_es: 'La Ilustración', title_en: 'The Enlightenment', slug: 'ilustracion',
    content_es: `La Ilustración fue un movimiento intelectual y cultural del siglo XVIII que defendió la razón como la principal fuente de autoridad y legitimidad. Conocido como el Siglo de las Luces, promovió ideales como la libertad, el progreso, la tolerancia, la separación de poderes y el gobierno constitucional.

Filósofos como Voltaire, Montesquieu, Rousseau y Diderot en Francia; Locke, Hume y Smith en Escocia; Kant en Alemania; y Franklin y Jefferson en Estados Unidos, desarrollaron las ideas que transformaron la política y la sociedad. La Enciclopedia de Diderot (1751-1772) pretendía reunir todo el conocimiento humano.

La Ilustración influyó directamente en la Independencia de Estados Unidos (1776) y la Revolución Francesa (1789). Las declaraciones de derechos, la democracia representativa, los derechos humanos, la tolerancia religiosa y la economía de mercado tienen sus raíces en el pensamiento ilustrado. Kant resumió su lema: "Sapere aude" (atrévete a saber), invitando a la humanidad a pensar por sí misma y salir de la minoría de edad autoimpuesta.`,
    content_en: `The Enlightenment was an 18th century intellectual and cultural movement that championed reason as the primary source of authority and legitimacy. Known as the Age of Reason, it promoted ideals such as liberty, progress, tolerance, separation of powers, and constitutional government.

Philosophers like Voltaire, Montesquieu, Rousseau, and Diderot in France; Locke, Hume, and Smith in Scotland; Kant in Germany; and Franklin and Jefferson in America, developed the ideas that transformed politics and society. Diderot's Encyclopedia (1751-1772) aimed to gather all human knowledge.

The Enlightenment directly influenced the American Declaration of Independence (1776) and the French Revolution (1789). Declarations of rights, representative democracy, human rights, religious tolerance, and market economy have their roots in Enlightenment thought. Kant summarized its motto: "Sapere aude" (dare to know), inviting humanity to think for itself and emerge from self-imposed immaturity.`,
    excerpt_es: 'La era de la razón: filósofos, revoluciones y el nacimiento de los derechos humanos.', excerpt_en: 'The age of reason: philosophers, revolutions, and the birth of human rights.', categoryId: 'cat-modern-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-napoleonic-era', title_es: 'Era Napoleónica', title_en: 'Napoleonic Era', slug: 'era-napoleonica',
    content_es: `La Era Napoleónica (1799-1815) fue un período de dominio francés en Europa bajo el liderazgo de Napoleón Bonaparte. General brillante y administrador excepcional, Napoleón conquistó gran parte de Europa, estableciendo un imperio que transformó las estructuras políticas y legales del continente.

Napoleón implementó reformas duraderas: el Código Napoleónico (1804) estableció principios legales modernos como la igualdad ante la ley, la libertad individual y la protección de la propiedad. También creó el sistema educativo nacional francés, el Banco de Francia y modernizó la administración pública.

La Campaña de Rusia (1812) fue un desastre que costó la vida a más de 400,000 soldados franceses. Napoleón fue exiliado a Elba en 1814, regresó brevemente durante los Cien Días, y fue finalmente derrotado en Waterloo (1815) por el Duque de Wellington. El Congreso de Viena reordenó Europa tras su caída. El legado napoleónico perdura en los códigos legales, la administración moderna y la concepción del estado-nación en Europa.`,
    content_en: `The Napoleonic Era (1799-1815) was a period of French dominance in Europe under the leadership of Napoleon Bonaparte. A brilliant general and exceptional administrator, Napoleon conquered much of Europe, establishing an empire that transformed the continent's political and legal structures.

Napoleon implemented lasting reforms: the Napoleonic Code (1804) established modern legal principles such as equality before the law, individual liberty, and property protection. He also created the French national education system, the Bank of France, and modernized public administration.

The Russian Campaign (1812) was a disaster that cost over 400,000 French soldiers their lives. Napoleon was exiled to Elba in 1814, briefly returned during the Hundred Days, and was finally defeated at Waterloo (1815) by the Duke of Wellington. The Congress of Vienna reordered Europe after his fall. Napoleon's legacy endures in legal codes, modern administration, and the conception of the nation-state in Europe.`,
    excerpt_es: 'El ascenso y caída de Napoleón: guerras, reformas y el reordenamiento de Europa.', excerpt_en: 'The rise and fall of Napoleon: wars, reforms, and the reordering of Europe.', categoryId: 'cat-modern-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== CONTEMPORARY HISTORY =====
  { id: 'entry-world-war-i', title_es: 'Primera Guerra Mundial', title_en: 'World War I', slug: 'primera-guerra-mundial',
    content_es: `La Primera Guerra Mundial (1914-1918) fue un conflicto global que enfrentó a las potencias aliadas (Francia, Reino Unido, Rusia, Estados Unidos) contra las Potencias Centrales (Alemania, Austria-Hungría, Imperio Otomano). Fue desencadenada por el asesinato del archiduque Francisco Fernando en Sarajevo.

La guerra de trincheras en el frente occidental se convirtió en un símbolo de la brutalidad del conflicto. Batallas como Verdún y el Somme causaron millones de muertos por pocos metros de avance. Nuevas tecnologías bélicas como ametralladoras, gas venenoso, tanques y aviones transformaron la guerra.

El conflicto causó más de 16 millones de muertos y colapsó cuatro imperios: alemán, austrohúngaro, otomano y ruso. El Tratado de Versalles (1919) impuso duras condiciones a Alemania, sembrando las semillas de la Segunda Guerra Mundial. La guerra redefinió el mapa político mundial, impulsó el surgimiento de Estados Unidos como potencia global y estableció la Sociedad de Naciones.`,
    content_en: `World War I (1914-1918) was a global conflict that pitted the Allied powers (France, UK, Russia, United States) against the Central Powers (Germany, Austria-Hungary, Ottoman Empire). It was triggered by the assassination of Archduke Franz Ferdinand in Sarajevo.

Trench warfare on the Western Front became a symbol of the conflict's brutality. Battles like Verdun and the Somme caused millions of deaths for mere meters of advance. New military technologies such as machine guns, poison gas, tanks, and aircraft transformed warfare.

The conflict caused over 16 million deaths and collapsed four empires: German, Austro-Hungarian, Ottoman, and Russian. The Treaty of Versailles (1919) imposed harsh conditions on Germany, sowing the seeds of World War II. The war redefined the world political map, drove the emergence of the United States as a global power, and established the League of Nations.`,
    excerpt_es: 'La Gran Guerra que devastó Europa y redefinió el orden mundial del siglo XX.', excerpt_en: 'The Great War that devastated Europe and redefined the 20th century world order.', categoryId: 'cat-contemporary-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-world-war-ii', title_es: 'Segunda Guerra Mundial', title_en: 'World War II', slug: 'segunda-guerra-mundial',
    content_es: `La Segunda Guerra Mundial (1939-1945) fue el conflicto más devastador de la historia humana. Affrontó a los Aliados (liderados por Estados Unidos, Reino Unido, Unión Soviética) contra las Potencias del Eje (Alemania nazi, Italia fascista, Japón imperial). Causó entre 70 y 85 millones de muertos, la mayoría civiles.

La guerra comenzó con la invasión alemana de Polonia en septiembre de 1939. Alemania conquistó gran parte de Europa mediante la guerra relámpago (Blitzkrieg). El Holocausto, el genocidio sistemático de seis millones de judíos por parte del régimen nazi, representa uno de los capítulos más oscuros de la humanidad.

El conflicto se extendió por todo el mundo: el Frente Oriental, el Norte de África, el Pacífico, el Sudeste Asiático. Los bombardeos atómicos de Hiroshima y Nagasaki (agosto 1945) por Estados Unidos forzaron la rendición de Japón. La guerra terminó con la derrota total del Eje, la creación de la ONU, el inicio de la Guerra Fría, y la descolonización de Asia y África.`,
    content_en: `World War II (1939-1945) was the most devastating conflict in human history. It pitted the Allies (led by the United States, UK, Soviet Union) against the Axis Powers (Nazi Germany, Fascist Italy, Imperial Japan). It caused between 70 and 85 million deaths, mostly civilians.

The war began with the German invasion of Poland in September 1939. Germany conquered much of Europe through Blitzkrieg (lightning war). The Holocaust, the systematic genocide of six million Jews by the Nazi regime, represents one of humanity's darkest chapters.

The conflict spread worldwide: the Eastern Front, North Africa, the Pacific, Southeast Asia. The atomic bombings of Hiroshima and Nagasaki (August 1945) by the United States forced Japan's surrender. The war ended with the total defeat of the Axis, the creation of the UN, the beginning of the Cold War, and the decolonization of Asia and Africa.`,
    excerpt_es: 'El conflicto más devastador de la historia: guerra global, Holocausto y la era atómica.', excerpt_en: 'The most devastating conflict in history: global war, the Holocaust, and the atomic age.', categoryId: 'cat-contemporary-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-cold-war', title_es: 'Guerra Fría', title_en: 'Cold War', slug: 'guerra-fria',
    content_es: `La Guerra Fría (1947-1991) fue la confrontación geopolítica, ideológica y militar entre Estados Unidos y la Unión Soviética, las dos superpotencias surgidas de la Segunda Guerra Mundial. Aunque nunca se enfrentaron directamente en combate, la tensión definió la política global durante casi medio siglo.

Europa quedó dividida por el Telón de Acero, con la OTAN al oeste y el Pacto de Varsovia al este. La Guerra de Corea (1950-1953) y la Guerra de Vietnam (1955-1975) fueron conflictos por poder en los que las superpotencias apoyaron bandos opuestos. La crisis de los misiles en Cuba (1962) llevó al mundo al borde de la guerra nuclear.

La carrera armamentista nuclear creó el equilibrio del terror (MAD). La carrera espacial llevó al hombre a la Luna. Las guerras de descolonización, los movimientos de liberación nacional y las revoluciones en el Tercer Mundo fueron escenarios de la competición. La URSS colapsó en 1991 bajo el peso de su estancamiento económico y las reformas de Gorbachov. La Guerra Fría terminó sin un disparo directo entre las superpotencias, pero dejó un mundo multipolar y conflictos regionales persistentes.`,
    content_en: `The Cold War (1947-1991) was the geopolitical, ideological, and military confrontation between the United States and the Soviet Union, the two superpowers emerging from World War II. Although they never directly faced each other in combat, the tension defined global politics for nearly half a century.

Europe was divided by the Iron Curtain, with NATO in the west and the Warsaw Pact in the east. The Korean War (1950-1953) and the Vietnam War (1955-1975) were proxy conflicts in which the superpowers supported opposing sides. The Cuban Missile Crisis (1962) brought the world to the brink of nuclear war.

The nuclear arms race created the balance of terror (MAD). The space race took humanity to the Moon. Decolonization wars, national liberation movements, and Third World revolutions were arenas of competition. The USSR collapsed in 1991 under the weight of its economic stagnation and Gorbachev's reforms. The Cold War ended without a direct shot between the superpowers, but left a multipolar world and persistent regional conflicts.`,
    excerpt_es: 'Medio siglo de tensión nuclear entre Estados Unidos y la URSS que definió la política global.', excerpt_en: 'Half a century of nuclear tension between the US and USSR that defined global politics.', categoryId: 'cat-contemporary-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-digital-age', title_es: 'Era Digital', title_en: 'Digital Age', slug: 'era-digital',
    content_es: `La Era Digital, también llamada Tercera Revolución Industrial, comenzó en la segunda mitad del siglo XX con la transición de la tecnología analógica y mecánica a la digital. El transistor (1947) y el microchip (1958) hicieron posible la miniaturización y el abaratamiento de los ordenadores.

La revolución digital transformó todos los aspectos de la vida: el trabajo con la automatización, la comunicación con internet y los smartphones, el entretenimiento con streaming y videojuegos, el comercio con e-commerce, la educación con plataformas online, y las relaciones humanas con redes sociales.

El siglo XXI ha visto la consolidación de gigantes tecnológicos (Google, Apple, Facebook, Amazon, Microsoft), la inteligencia artificial, el big data, la computación en la nube, el internet de las cosas y la ciberseguridad como campos críticos. La Era Digital plantea desafíos: privacidad, desinformación, brecha digital, monopolios tecnológicos y el impacto de la automatización en el empleo. Es una transformación comparable a la Revolución Industrial en su alcance y velocidad.`,
    content_en: `The Digital Age, also called the Third Industrial Revolution, began in the second half of the 20th century with the transition from analog and mechanical technology to digital. The transistor (1947) and the microchip (1958) made possible the miniaturization and cost reduction of computers.

The digital revolution transformed every aspect of life: work through automation, communication through the internet and smartphones, entertainment through streaming and video games, commerce through e-commerce, education through online platforms, and human relationships through social networks.

The 21st century has seen the consolidation of tech giants (Google, Apple, Facebook, Amazon, Microsoft), artificial intelligence, big data, cloud computing, the internet of things, and cybersecurity as critical fields. The Digital Age poses challenges: privacy, disinformation, digital divide, tech monopolies, and the impact of automation on employment. It is a transformation comparable to the Industrial Revolution in its scope and speed.`,
    excerpt_es: 'La revolución tecnológica que transformó la humanidad: del transistor a la inteligencia artificial.', excerpt_en: 'The technological revolution that transformed humanity: from the transistor to artificial intelligence.', categoryId: 'cat-contemporary-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-postwar-reconstruction', title_es: 'Reconstrucción de Posguerra', title_en: 'Postwar Reconstruction', slug: 'reconstruccion-posguerra',
    content_es: `La reconstrucción de posguerra en Europa y Asia después de 1945 fue uno de los mayores esfuerzos de recuperación económica de la historia. El Plan Marshall (1948-1951), impulsado por Estados Unidos, inyectó $13 mil millones en la reconstrucción europea, modernizando industrias y reactivando economías.

Japón experimentó una transformación radical bajo la ocupación estadounidense liderada por el general MacArthur. La nueva constitución japonesa (1947) estableció un sistema democrático y renunció a la guerra. El "milagro económico japonés" convirtió a Japón en la segunda economía mundial para los años 70.

Europa occidental experimentó un crecimiento sin precedentes durante los Treinta Gloriosos (1945-1973). La Comunidad Europea del Carbón y del Acero (1951) evolucionó hasta la Unión Europea. Alemania Occidental disfrutó del Wirtschaftswunder (milagro económico) bajo Ludwig Erhard. Estos esfuerzos crearon las bases del estado de bienestar, la cooperación internacional y la globalización económica.`,
    content_en: `Postwar reconstruction in Europe and Asia after 1945 was one of the greatest economic recovery efforts in history. The Marshall Plan (1948-1951), driven by the United States, injected $13 billion into European reconstruction, modernizing industries and reactivating economies.

Japan underwent a radical transformation under US occupation led by General MacArthur. The new Japanese constitution (1947) established a democratic system and renounced war. The "Japanese economic miracle" made Japan the world's second-largest economy by the 1970s.

Western Europe experienced unprecedented growth during the Thirty Glorious Years (1945-1973). The European Coal and Steel Community (1951) evolved into the European Union. West Germany enjoyed the Wirtschaftswunder (economic miracle) under Ludwig Erhard. These efforts created the foundations of the welfare state, international cooperation, and economic globalization.`,
    excerpt_es: 'La recuperación de Europa y Asia tras la guerra: Plan Marshall, milagro japonés y unidad europea.', excerpt_en: 'Europe and Asia's recovery after the war: Marshall Plan, Japanese miracle, and European unity.', categoryId: 'cat-contemporary-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== ASIAN HISTORY =====
  { id: 'entry-imperial-china', title_es: 'China Imperial', title_en: 'Imperial China', slug: 'china-imperial',
    content_es: `La historia imperial de China abarca más de dos milenios, desde la unificación por Qin Shi Huang en el 221 a.C. hasta la caída de la dinastía Qing en 1912. Es una de las civilizaciones continuas más antiguas del mundo, con una rica tradición de filosofía, arte, ciencia y gobierno.

Las primeras dinastías (Xia, Shang, Zhou) establecieron los fundamentos de la cultura china. La dinastía Qin unificó China, estandarizó la escritura y las medidas, y comenzó la Gran Muralla. La dinastía Han (206 a.C.-220 d.C.) expandió el territorio y estableció la Ruta de la Seda. Las dinastías Tang y Song fueron edades de oro de la cultura, la poesía y la innovación tecnológica.

La dinastía Ming (1368-1644) construyó la Ciudad Prohibida y envió las flotas de Zheng He a través del Océano Índico. La dinastía Qing (1644-1912), de origen manchú, expandió el imperio a su máxima extensión pero sufrió la presión colonial occidental. Las Guerras del Opio, la Rebelión de Taiping y la Rebelión de los Bóxers llevaron al colapso imperial. La caída de los Qing en 1912 puso fin a más de 2,000 años de gobierno imperial.`,
    content_en: `Imperial China's history spans over two millennia, from unification by Qin Shi Huang in 221 BC to the fall of the Qing dynasty in 1912. It is one of the oldest continuous civilizations in the world, with a rich tradition of philosophy, art, science, and government.

The early dynasties (Xia, Shang, Zhou) established the foundations of Chinese culture. The Qin dynasty unified China, standardized writing and measurements, and began the Great Wall. The Han dynasty (206 BC-220 AD) expanded territory and established the Silk Road. The Tang and Song dynasties were golden ages of culture, poetry, and technological innovation.

The Ming dynasty (1368-1644) built the Forbidden City and sent Zheng He's fleets across the Indian Ocean. The Qing dynasty (1644-1912), of Manchu origin, expanded the empire to its greatest extent but suffered Western colonial pressure. The Opium Wars, the Taiping Rebellion, and the Boxer Rebellion led to imperial collapse. The fall of the Qing in 1912 ended over 2,000 years of imperial rule.`,
    excerpt_es: 'La civilización continua más antigua del mundo: dos milenios de dinastías, cultura y poder imperial.', excerpt_en: 'The oldest continuous civilization in the world: two millennia of dynasties, culture, and imperial power.', categoryId: 'cat-asian-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-feudal-japan', title_es: 'Japón Feudal', title_en: 'Feudal Japan', slug: 'japon-feudal',
    content_es: `El Japón feudal fue un período de la historia japonesa que se extendió desde el siglo XII hasta la Restauración Meiji (1868), caracterizado por el gobierno de los shogunes, la clase guerrera samurái y un sistema feudal descentralizado.

El período Kamakura (1185-1333) estableció el primer shogunato bajo Minamoto no Yoritomo. El período Muromachi (1336-1573) vio el florecimiento de la cultura zen, el teatro Noh y los jardines japoneses. El período Sengoku ("Estados Combatientes", 1467-1615) fue una era de caos y guerra civil donde los daimyō (señores feudales) luchaban por el poder.

La unificación de Japón fue lograda por tres grandes señores: Oda Nobunaga, Toyotomi Hideyoshi y Tokugawa Ieyasu. Este último estableció el shogunato Tokugawa (1603-1868), que trajo más de 250 años de paz y aislamiento (sakoku). La sociedad feudal japonesa desarrolló un código de honor samurái (bushidō), artes marciales, la ceremonia del té y el haiku. La Restauración Meiji acabó con el feudalismo y transformó Japón en una potencia moderna.`,
    content_en: `Feudal Japan was a period of Japanese history spanning from the 12th century to the Meiji Restoration (1868), characterized by rule of shoguns, the samurai warrior class, and a decentralized feudal system.

The Kamakura period (1185-1333) established the first shogunate under Minamoto no Yoritomo. The Muromachi period (1336-1573) saw the flourishing of Zen culture, Noh theatre, and Japanese gardens. The Sengoku period ("Warring States", 1467-1615) was an era of chaos and civil war where daimyō (feudal lords) fought for power.

Japan's unification was achieved by three great lords: Oda Nobunaga, Toyotomi Hideyoshi, and Tokugawa Ieyasu. The latter established the Tokugawa shogunate (1603-1868), which brought over 250 years of peace and isolation (sakoku). Feudal Japanese society developed the samurai code of honor (bushidō), martial arts, the tea ceremony, and haiku. The Meiji Restoration ended feudalism and transformed Japan into a modern power.`,
    excerpt_es: 'Samuráis, shogunes y señores feudales: la era de los guerreros que forjó el Japón moderno.', excerpt_en: 'Samurai, shoguns, and feudal lords: the warrior era that forged modern Japan.', categoryId: 'cat-asian-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-mughal-india', title_es: 'India Mogol', title_en: 'Mughal India', slug: 'india-mogol',
    content_es: `El Imperio Mogol (1526-1857) fue uno de los imperios más poderosos y culturalmente ricos de la historia de la India. Fundado por Babur, un príncipe de origen turco-mongol que derrotó al sultanato de Delhi en la batalla de Panipat (1526), el imperio se extendió por la mayor parte del subcontinente indio.

El apogeo del imperio llegó bajo Akbar el Grande (1556-1605), quien estableció una administración eficiente, promovió la tolerancia religiosa y cultivó las artes. La corte mogol fue un centro de cultura persa, hindú e islámica. Shah Jahan construyó el Taj Mahal (1653), la obra maestra de la arquitectura mogol y uno de los monumentos más famosos del mundo.

El imperio declinó en el siglo XVIII debido a la presión de los marathas, los sikhs y la creciente influencia británica. La rebelión de 1857 (conocida como el Motín Indio) llevó a la abolición del imperio y al establecimiento del Raj británico. El legado mogol perdura en la arquitectura, la cocina, la lengua urdu y la fusión cultural que define la India contemporánea.`,
    content_en: `The Mughal Empire (1526-1857) was one of the most powerful and culturally rich empires in Indian history. Founded by Babur, a prince of Turco-Mongol origin who defeated the Delhi Sultanate at the Battle of Panipat (1526), the empire extended over most of the Indian subcontinent.

The empire's zenith came under Akbar the Great (1556-1605), who established efficient administration, promoted religious tolerance, and cultivated the arts. The Mughal court was a center of Persian, Hindu, and Islamic culture. Shah Jahan built the Taj Mahal (1653), the masterpiece of Mughal architecture and one of the world's most famous monuments.

The empire declined in the 18th century due to pressure from the Marathas, Sikhs, and growing British influence. The rebellion of 1857 (known as the Indian Mutiny) led to the abolition of the empire and the establishment of the British Raj. The Mughal legacy endures in architecture, cuisine, the Urdu language, and the cultural fusion that defines contemporary India.`,
    excerpt_es: 'El imperio que unió la India: del Taj Mahal a la fusión cultural hindú-persa.', excerpt_en: 'The empire that united India: from the Taj Mahal to Hindu-Persian cultural fusion.', categoryId: 'cat-asian-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== AFRICAN HISTORY =====
  { id: 'entry-ancient-egypt', title_es: 'Egipto Antiguo', title_en: 'Ancient Egypt', slug: 'egipto-antiguo',
    content_es: `El Antiguo Egipto fue una de las civilizaciones más avanzadas de la antigüedad, desarrollada a lo largo del valle del Nilo desde aproximadamente el 3100 a.C. hasta la conquista romana en el 30 a.C. Su extraordinaria longevidad, cultura y monumentos la convierten en una de las civilizaciones más fascinantes de la historia.

La unificación del Alto y Bajo Egipto por el faraón Narmer (Menes) dio inicio al período dinástico. El Imperio Antiguo (c. 2686-2181 a.C.) fue la era de las grandes pirámides de Guiza, construidas por Keops, Kefrén y Micerino. El Imperio Nuevo (c. 1550-1069 a.C.) fue el apogeo del poder egipcio, con faraones como Ramsés II, Hatshepsut y Akhenatón.

La religión egipcia, con su complejo panteón de dioses (Ra, Osiris, Isis, Horus), la creencia en la vida después de la muerte y la práctica de la momificación, impregnaba todos los aspectos de la vida. Los jeroglíficos, descifrados gracias a la Piedra de Rosetta por Champollion en 1822, han revelado la riqueza cultural y literaria de esta civilización única.`,
    content_en: `Ancient Egypt was one of the most advanced civilizations of antiquity, developed along the Nile Valley from approximately 3100 BC until the Roman conquest in 30 BC. Its extraordinary longevity, culture, and monuments make it one of the most fascinating civilizations in history.

The unification of Upper and Lower Egypt by Pharaoh Narmer (Menes) began the dynastic period. The Old Kingdom (c. 2686-2181 BC) was the era of the great pyramids of Giza, built by Khufu, Khafre, and Menkaure. The New Kingdom (c. 1550-1069 BC) was the zenith of Egyptian power, with pharaohs like Ramesses II, Hatshepsut, and Akhenaten.

Egyptian religion, with its complex pantheon of gods (Ra, Osiris, Isis, Horus), the belief in an afterlife, and the practice of mummification, permeated every aspect of life. Hieroglyphs, deciphered thanks to the Rosetta Stone by Champollion in 1822, have revealed the cultural and literary richness of this unique civilization.`,
    excerpt_es: 'La civilización del Nilo: pirámides, faraones, dioses y jeroglíficos milenarios.', excerpt_en: 'The Nile civilization: pyramids, pharaohs, gods, and ancient hieroglyphs.', categoryId: 'cat-african-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-west-african-kingdoms', title_es: 'Reinos Africanos', title_en: 'African Kingdoms', slug: 'reinos-africanos',
    content_es: `África albergó grandes reinos e imperios antes de la colonización europea. El Imperio de Ghana (c. 300-1200), en África Occidental, controló las rutas comerciales de oro y sal. El Imperio de Malí (c. 1235-1600) fue famoso por la riqueza de Mansa Musa, considerado el hombre más rico de la historia, cuya peregrinación a La Meca en 1324 deslumbró al mundo islámico.

El Imperio Songhai (c. 1464-1591) fue el más grande de África Occidental, con Tombuctú como centro intelectual y comercial. En Etiopía, el Reino de Aksum (siglo I-VII) fue una potencia comercial que adoptó el cristianismo. El Gran Zimbabue (siglos XI-XV) construyó impresionantes estructuras de piedra sin argamasa.

El Reino del Congo (1390-1914), los reinos Yoruba y Benin, y el Imperio Ashanti fueron civilizaciones con sofisticados sistemas políticos, artísticos y comerciales. La llegada de los europeos primero estableció rutas comerciales, pero el comercio de esclavos y la posterior colonización europea (Conferencia de Berlín, 1885) destruyeron o transformaron profundamente estas civilizaciones.`,
    content_en: `Africa housed great kingdoms and empires before European colonization. The Ghana Empire (c. 300-1200), in West Africa, controlled gold and salt trade routes. The Mali Empire (c. 1235-1600) was famous for the wealth of Mansa Musa, considered the richest man in history, whose pilgrimage to Mecca in 1324 dazzled the Islamic world.

The Songhai Empire (c. 1464-1591) was the largest in West Africa, with Timbuktu as an intellectual and commercial center. In Ethiopia, the Kingdom of Aksum (1st-7th century) was a trading power that adopted Christianity. Great Zimbabwe (11th-15th centuries) built impressive stone structures without mortar.

The Kingdom of Kongo (1390-1914), the Yoruba and Benin kingdoms, and the Ashanti Empire were civilizations with sophisticated political, artistic, and commercial systems. The arrival of Europeans first established trade routes, but the slave trade and subsequent European colonization (Berlin Conference, 1885) destroyed or profoundly transformed these civilizations.`,
    excerpt_es: 'Los grandes imperios africanos antes de la colonización: oro, comercio y culturas sofisticadas.', excerpt_en: 'The great African empires before colonization: gold, trade, and sophisticated cultures.', categoryId: 'cat-african-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-scramble-for-africa', title_es: 'Colonización de África', title_en: 'Scramble for Africa', slug: 'colonizacion-africa',
    content_es: `La colonización de África, conocida como el "Reparto de África", fue la invasión, ocupación y partición del continente africano por las potencias europeas durante el período del Nuevo Imperialismo (1881-1914). La Conferencia de Berlín (1884-1885) reguló esta partición sin representación africana.

En 1870, solo el 10% de África estaba bajo control europeo. Para 1914, solo Etiopía y Liberia permanecían independientes. Las fronteras trazadas arbitrariamente por los colonizadores dividieron grupos étnicos y unieron enemigos históricos, creando conflictos que persisten hasta hoy. Bélgica bajo Leopoldo II cometió atrocidades en el Congo.

El legado colonial incluye la explotación de recursos, la imposición de lenguas y culturas europeas, la introducción de infraestructuras pero también sistemas económicos extractivos. Los movimientos de independencia africana (1957-1975) lograron la descolonización, pero las nuevas naciones enfrentaron el desafío de construir estados viables sobre las fracturas dejadas por el colonialismo.`,
    content_en: `The colonization of Africa, known as the "Scramble for Africa," was the invasion, occupation, and partition of the African continent by European powers during the period of New Imperialism (1881-1914). The Berlin Conference (1884-1885) regulated this partition without African representation.

In 1870, only 10% of Africa was under European control. By 1914, only Ethiopia and Liberia remained independent. Arbitrarily drawn borders divided ethnic groups and united historical enemies, creating conflicts that persist today. Belgium under Leopold II committed atrocities in the Congo.

The colonial legacy includes resource exploitation, imposition of European languages and cultures, introduction of infrastructure but also extractive economic systems. African independence movements (1957-1975) achieved decolonization, but new nations faced the challenge of building viable states upon the fractures left by colonialism.`,
    excerpt_es: 'El reparto europeo de África: colonización, explotación y el legado de fronteras artificiales.', excerpt_en: 'The European partition of Africa: colonization, exploitation, and the legacy of artificial borders.', categoryId: 'cat-african-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== MIDDLE EAST HISTORY =====
  { id: 'entry-ottoman-empire', title_es: 'Imperio Otomano', title_en: 'Ottoman Empire', slug: 'imperio-otomano',
    content_es: `El Imperio Otomano fue uno de los imperios más duraderos de la historia, existiendo desde aproximadamente 1299 hasta 1922. Fundado por Osman I en Anatolia, se expandió hasta controlar el sudeste de Europa, Oriente Medio y el norte de África. La caída de Constantinopla en 1453 bajo Mehmed II marcó su consolidación como potencia.

El apogeo otomano bajo Solimán el Magnífico (1520-1566) extendió el imperio desde Budapest hasta La Meca. La organización militar de los jenízaros, la administración eficiente y la tolerancia relativa hacia las comunidades religiosas (sistema de millets) caracterizaron su gobierno.

El imperio entró en un largo declive a partir del siglo XVII. Conocido como "el enfermo de Europa", perdió territorios gradualmente. La derrota en la Primera Guerra Mundial, donde luchó del lado de las Potencias Centrales, llevó a su desmembramiento. Mustafa Kemal Atatürk fundó la República de Turquía en 1923, aboliendo el sultanato y transformando la sociedad turca en un estado laico y moderno.`,
    content_en: `The Ottoman Empire was one of the longest-lasting empires in history, existing from approximately 1299 to 1922. Founded by Osman I in Anatolia, it expanded to control Southeast Europe, the Middle East, and North Africa. The fall of Constantinople in 1453 under Mehmed II marked its consolidation as a power.

The Ottoman zenith under Suleiman the Magnificent (1520-1566) extended the empire from Budapest to Mecca. The Janissary military organization, efficient administration, and relative tolerance toward religious communities (millet system) characterized its rule.

The empire entered a long decline from the 17th century. Known as "the sick man of Europe," it gradually lost territories. Defeat in World War I, where it fought on the side of the Central Powers, led to its dismemberment. Mustafa Kemal Atatürk founded the Republic of Turkey in 1923, abolishing the sultanate and transforming Turkish society into a secular, modern state.`,
    excerpt_es: 'El imperio que dominó el Mediterráneo oriental durante seis siglos: de Osman a Atatürk.', excerpt_en: 'The empire that dominated the eastern Mediterranean for six centuries: from Osman to Atatürk.', categoryId: 'cat-middle-east-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-mesopotamia', title_es: 'Mesopotamia', title_en: 'Mesopotamia', slug: 'mesopotamia',
    content_es: `Mesopotamia, "tierra entre ríos" en griego (entre el Tigris y el Éufrates), es considerada la cuna de la civilización. En esta región del actual Irak surgieron las primeras ciudades, la escritura, los códigos legales y las primeras formas de estado organizado.

Los sumerios (c. 4500-1900 a.C.) inventaron la escritura cuneiforme, construyeron ciudades-estado como Ur y Uruk, y desarrollaron la rueda, el arado y los sistemas de irrigación. El Código de Hammurabi (c. 1754 a.C.), del rey babilonio, es uno de los primeros conjuntos de leyes escritas de la historia.

Los imperios asirio y babilónico dominaron la región con capitales como Nínive y Babilonia. Los Jardines Colgantes de Babilonia fueron una de las Siete Maravillas del Mundo Antiguo. Los persas aqueménidas conquistaron Mesopotamia en el 539 a.C. La región fue luego helenizada por Alejandro Magno y gobernada por los seléucidas, partos y sasánidas antes de la conquista islámica en el siglo VII.`,
    content_en: `Mesopotamia, "land between rivers" in Greek (between the Tigris and Euphrates), is considered the cradle of civilization. In this region of modern-day Iraq, the first cities, writing, legal codes, and forms of organized state emerged.

The Sumerians (c. 4500-1900 BC) invented cuneiform writing, built city-states like Ur and Uruk, and developed the wheel, the plow, and irrigation systems. The Code of Hammurabi (c. 1754 BC), from the Babylonian king, is one of the earliest written law collections in history.

The Assyrian and Babylonian empires dominated the region with capitals like Nineveh and Babylon. The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World. The Achaemenid Persians conquered Mesopotamia in 539 BC. The region was later Hellenized by Alexander the Great and ruled by the Seleucids, Parthians, and Sassanids before the Islamic conquest in the 7th century.`,
    excerpt_es: 'La cuna de la civilización: primeras ciudades, escritura, códigos legales y el Génesis de la historia.', excerpt_en: 'The cradle of civilization: first cities, writing, legal codes, and the Genesis of history.', categoryId: 'cat-middle-east-history', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
]

export const newHistorySubsections: SeedSubsection[] = []
