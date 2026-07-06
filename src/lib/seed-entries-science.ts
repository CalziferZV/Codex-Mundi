import type { SeedEntry, SeedSubsection } from './seed'

const now = '2026-03-15T00:00:00Z'

export const newScienceEntries: SeedEntry[] = [
  // ===== GEOLOGY =====
  { id: 'entry-plate-tectonics', title_es: 'Tectónica de Placas', title_en: 'Plate Tectonics', slug: 'tectonica-placas',
    content_es: `La tectónica de placas es la teoría científica que explica la estructura y dinámica de la superficie terrestre. Desarrollada en las décadas de 1950 y 1960, integra ideas anteriores como la deriva continental de Alfred Wegener (1912) con nuevos datos del fondo oceánico.

La litosfera terrestre está dividida en placas tectónicas que se mueven sobre la astenosfera, una capa semifundida del manto. Las placas pueden ser oceánicas o continentales. En los límites divergentes (dorsales oceánicas), se crea nueva corteza. En los convergentes (zonas de subducción), una placa se hunde bajo otra, formando volcanes y montañas.

La tectónica de placas explica terremotos, volcanes, formación de montañas (Himalaya, Andes), apertura de océanos (Atlántico), y el ciclo de Wilson (apertura y cierre de océanos). El movimiento de las placas, impulsado por corrientes de convección en el manto, es responsable de la deriva continental que ha moldeado la superficie terrestre durante millones de años.`,
    content_en: `Plate tectonics is the scientific theory that explains the structure and dynamics of the Earth's surface. Developed in the 1950s and 1960s, it integrates earlier ideas like Alfred Wegener's continental drift (1912) with new data from the ocean floor.

The Earth's lithosphere is divided into tectonic plates that move on the asthenosphere, a semi-molten layer of the mantle. Plates can be oceanic or continental. At divergent boundaries (oceanic ridges), new crust is created. At convergent boundaries (subduction zones), one plate sinks beneath another, forming volcanoes and mountains.

Plate tectonics explains earthquakes, volcanoes, mountain formation (Himalayas, Andes), ocean opening (Atlantic), and the Wilson cycle (ocean opening and closing). Plate movement, driven by mantle convection currents, is responsible for continental drift that has shaped the Earth's surface over millions of years.`,
    excerpt_es: 'La teoría que explica terremotos, volcanes y la deriva de los continentes.', excerpt_en: 'The theory that explains earthquakes, volcanoes, and continental drift.', categoryId: 'cat-geology', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-volcanoes', title_es: 'Volcanes', title_en: 'Volcanoes', slug: 'volcanes',
    content_es: `Los volcanes son aberturas en la corteza terrestre por las que emerge magma, gases y cenizas del interior del planeta. Se forman principalmente en los límites de placas tectónicas, aunque existen volcanes de punto caliente (hotspot) como los de Hawái.

Existen varios tipos de volcanes según su erupción: hawaianos (efusivos, lava fluida), estrombolianos (explosivos moderados), vulcanianos (explosivos), peleanos (nubes ardientes) y plinianos (erupciones catastróficas como la del Vesubio en el 79 d.C.). La erupción del Krakatoa (1883) fue una de las más violentas de la historia.

La actividad volcánica también tiene beneficios: crea nuevas tierras (Islandia, Hawái), enriquece los suelos con nutrientes (suelos fértiles de Nápoles, Java), forma depósitos minerales y genera energía geotérmica. Los supervolcanes como Yellowstone representan riesgos de extinción masiva. El monitoreo volcánico moderno utiliza sismógrafos, GPS y satélites para predecir erupciones.`,
    content_en: `Volcanoes are openings in the Earth's crust through which magma, gases, and ash emerge from the planet's interior. They form mainly at tectonic plate boundaries, although hotspot volcanoes exist, like those in Hawaii.

There are several types of volcanoes according to their eruption: Hawaiian (effusive, fluid lava), Strombolian (moderately explosive), Vulcanian (explosive), Peléan (glowing clouds), and Plinian (catastrophic eruptions like Vesuvius in 79 AD). The Krakatoa eruption (1883) was one of the most violent in history.

Volcanic activity also brings benefits: creates new lands (Iceland, Hawaii), enriches soils with nutrients (fertile soils of Naples, Java), forms mineral deposits, and generates geothermal energy. Supervolcanoes like Yellowstone represent mass extinction risks. Modern volcanic monitoring uses seismographs, GPS, and satellites to predict eruptions.`,
    excerpt_es: 'Las ventanas al interior de la Tierra: tipos de volcanes, erupciones y beneficios geológicos.', excerpt_en: 'Windows into the Earth's interior: volcano types, eruptions, and geological benefits.', categoryId: 'cat-geology', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-earthquakes', title_es: 'Terremotos', title_en: 'Earthquakes', slug: 'terremotos',
    content_es: `Los terremotos son vibraciones de la corteza terrestre causadas por la liberación repentina de energía acumulada en fallas geológicas. La sismología estudia estos fenómenos. La escala de Richter mide la magnitud (energía liberada), mientras que la escala de Mercalli mide la intensidad (efectos en personas y estructuras).

Las zonas más sísmicas del mundo coinciden con los límites de placas tectónicas: el Cinturón de Fuego del Pacífico (Japón, California, Chile, Indonesia) concentra el 90% de los terremotos. Grandes terremotos históricos incluyen San Francisco (1906), Valdivia (1960, el mayor registrado, 9.5), Tangshan (1976), y el tsunami del Océano Índico (2004).

La predicción de terremotos sigue siendo un desafío científico. Las construcciones sismorresistentes, los sistemas de alerta temprana y la educación pública reducen el riesgo. Los terremotos también ocurren en otros cuerpos celestes: la NASA ha detectado "marsquakes" (terremotos en Marte) y la Luna experimenta "moonquakes" causados por la gravedad terrestre.`,
    content_en: `Earthquakes are vibrations of the Earth's crust caused by the sudden release of energy accumulated in geological faults. Seismology studies these phenomena. The Richter scale measures magnitude (energy released), while the Mercalli scale measures intensity (effects on people and structures).

The most seismic zones coincide with tectonic plate boundaries: the Pacific Ring of Fire (Japan, California, Chile, Indonesia) concentrates 90% of earthquakes. Major historical earthquakes include San Francisco (1906), Valdivia (1960, largest recorded, 9.5), Tangshan (1976), and the Indian Ocean tsunami (2004).

Earthquake prediction remains a scientific challenge. Earthquake-resistant construction, early warning systems, and public education reduce risk. Earthquakes also occur on other celestial bodies: NASA has detected "marsquakes" on Mars, and the Moon experiences "moonquakes" caused by Earth's gravity.`,
    excerpt_es: 'La Tierra en movimiento: causas, escalas de medición y las zonas más sísmicas del planeta.', excerpt_en: 'The Earth in motion: causes, measurement scales, and the most seismic zones of the planet.', categoryId: 'cat-geology', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== OCEANOGRAPHY =====
  { id: 'entry-ocean-exploration', title_es: 'Exploración Oceánica', title_en: 'Ocean Exploration', slug: 'exploracion-oceanica',
    content_es: `Los océanos cubren el 71% de la superficie terrestre y contienen el 97% del agua del planeta. Sin embargo, más del 80% de los océanos permanece inexplorado y sin cartografiar. La oceanografía estudia los océanos en todos sus aspectos: físicos, químicos, biológicos y geológicos.

La exploración oceánica moderna comenzó con la expedición del HMS Challenger (1872-1876), que sentó las bases de la oceanografía. El batiscafo Trieste descendió a la Fosa de las Marianas en 1960 (10,916 metros). James Cameron repitió la hazaña en 2012. Los vehículos operados remotamente (ROV) y los sumergibles autónomos (AUV) permiten explorar las profundidades.

Los océanos regulan el clima global, absorben CO2, generan la mitad del oxígeno del planeta y albergan ecosistemas diversos. Las dorsales oceánicas albergan fuentes hidrotermales con ecosistemas únicos basados en quimiosíntesis. Los cañones submarinos, las llanuras abisales y las fosas oceánicas son paisajes apenas conocidos. La contaminación plástica, la acidificación y la sobrepesca amenazan la salud oceánica.`,
    content_en: `Oceans cover 71% of the Earth's surface and contain 97% of the planet's water. Yet over 80% of the oceans remain unexplored and unmapped. Oceanography studies the oceans in all aspects: physical, chemical, biological, and geological.

Modern ocean exploration began with the HMS Challenger expedition (1872-1876), which laid the foundations of oceanography. The bathyscaphe Trieste descended to the Mariana Trench in 1960 (10,916 meters). James Cameron repeated the feat in 2012. Remotely operated vehicles (ROVs) and autonomous underwater vehicles (AUVs) enable deep-sea exploration.

Oceans regulate the global climate, absorb CO2, generate half the planet's oxygen, and host diverse ecosystems. Oceanic ridges harbor hydrothermal vents with unique ecosystems based on chemosynthesis. Submarine canyons, abyssal plains, and ocean trenches are barely known landscapes. Plastic pollution, acidification, and overfishing threaten ocean health.`,
    excerpt_es: 'El último gran misterio de la Tierra: explorando los océanos y sus ecosistemas ocultos.', excerpt_en: "Earth's last great mystery: exploring the oceans and their hidden ecosystems.", categoryId: 'cat-oceanography', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== NEUROSCIENCE =====
  { id: 'entry-brain-structure', title_es: 'Estructura del Cerebro', title_en: 'Brain Structure', slug: 'estructura-cerebro',
    content_es: `El cerebro humano es el órgano más complejo conocido, con aproximadamente 86 mil millones de neuronas y un número similar de células gliales. Pesa alrededor de 1.4 kg y consume el 20% de la energía del cuerpo. La neurociencia estudia su estructura y función a nivel molecular, celular, sistémico y cognitivo.

El cerebro se divide en varias regiones principales: el cerebelo (coordinación motora), el tronco encefálico (funciones vitales), el sistema límbico (emociones y memoria) y la corteza cerebral (pensamiento consciente). La corteza se divide en lóbulos: frontal (planificación, personalidad), parietal (sensación), temporal (audición, lenguaje) y occipital (visión).

La plasticidad neuronal es la capacidad del cerebro para reorganizarse formando nuevas conexiones sinápticas a lo largo de la vida. Técnicas de neuroimagen como la resonancia magnética funcional (fMRI), la tomografía por emisión de positrones (PET) y la electroencefalografía (EEG) permiten observar la actividad cerebral. Enfermedades como Alzheimer, Parkinson, depresión y esquizofrenia son objeto de intensa investigación neurocientífica.`,
    content_en: `The human brain is the most complex known organ, with approximately 86 billion neurons and a similar number of glial cells. It weighs about 1.4 kg and consumes 20% of the body's energy. Neuroscience studies its structure and function at molecular, cellular, systemic, and cognitive levels.

The brain divides into several main regions: the cerebellum (motor coordination), brainstem (vital functions), limbic system (emotions and memory), and cerebral cortex (conscious thought). The cortex is divided into lobes: frontal (planning, personality), parietal (sensation), temporal (hearing, language), and occipital (vision).

Neuronal plasticity is the brain's ability to reorganize itself by forming new synaptic connections throughout life. Neuroimaging techniques such as functional magnetic resonance imaging (fMRI), positron emission tomography (PET), and electroencephalography (EEG) allow observation of brain activity. Diseases like Alzheimer's, Parkinson's, depression, and schizophrenia are subjects of intense neuroscientific research.`,
    excerpt_es: 'El órgano más complejo del universo conocido: 86 mil millones de neuronas y una plasticidad asombrosa.', excerpt_en: 'The most complex organ in the known universe: 86 billion neurons and astonishing plasticity.', categoryId: 'cat-neuroscience', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-consciousness', title_es: 'Consciencia', title_en: 'Consciousness', slug: 'consciencia',
    content_es: `La consciencia es uno de los mayores misterios de la ciencia y la filosofía. Se refiere a la experiencia subjetiva del ser, la cualidad de "sentir" o "ser" que acompaña a ciertos procesos mentales. David Chalmers la llamó "el problema difícil de la consciencia".

Las teorías neurocientíficas incluyen la Teoría del Espacio de Trabajo Global (Bernard Baars), que propone que la consciencia es el contenido de una "pizarra mental" accesible a múltiples procesos cerebrales. La Teoría de la Información Integrada (Giulio Tononi) cuantifica la consciencia mediante el phi (Φ), una medida de integración informacional.

El estudio de la consciencia abarca estados alterados (meditación, sueños, drogas psicodélicas), trastornos de la consciencia (coma, estado vegetativo), y la consciencia animal. La inteligencia artificial plantea la pregunta de si las máquinas pueden ser conscientes. Filósofos como Daniel Dennett (materialismo), David Chalmers (naturalismo dualista) y Thomas Nagel (experiencia subjetiva) continúan el debate iniciado por Descartes sobre la relación entre mente y cuerpo.`,
    content_en: `Consciousness is one of the greatest mysteries of science and philosophy. It refers to the subjective experience of being, the quality of "feeling" or "being" that accompanies certain mental processes. David Chalmers called it "the hard problem of consciousness."

Neuroscientific theories include the Global Workspace Theory (Bernard Baars), proposing that consciousness is the content of a "mental blackboard" accessible to multiple brain processes. Integrated Information Theory (Giulio Tononi) quantifies consciousness through phi (Φ), a measure of informational integration.

The study of consciousness encompasses altered states (meditation, dreams, psychedelic drugs), disorders of consciousness (coma, vegetative state), and animal consciousness. Artificial intelligence raises the question of whether machines can be conscious. Philosophers like Daniel Dennett (materialism), David Chalmers (dualist naturalism), and Thomas Nagel (subjective experience) continue the debate initiated by Descartes on the mind-body relationship.`,
    excerpt_es: 'El problema más difícil de la ciencia: ¿qué es la consciencia y cómo surge del cerebro?', excerpt_en: "The hardest problem in science: what is consciousness and how does it arise from the brain?", categoryId: 'cat-neuroscience', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-sleep-dreams', title_es: 'Sueño y Sueños', title_en: 'Sleep and Dreams', slug: 'sueno-suenos',
    content_es: `El sueño es un estado fisiológico universal en los animales, caracterizado por la reducción de la consciencia y la actividad sensorial. Los humanos pasamos aproximadamente un tercio de nuestras vidas durmiendo. La privación de sueño tiene graves consecuencias para la salud física y mental.

El sueño se divide en ciclos de aproximadamente 90 minutos que alternan entre sueño NREM (movimiento ocular no rápido) y REM (movimiento ocular rápido). El sueño REM, descubierto por Nathaniel Kleitman y Eugene Aserinsky en 1953, es cuando ocurren la mayoría de los sueños vívidos. Durante el sueño, el cerebro consolida recuerdos, procesa emociones y elimina toxinas metabólicas.

Los sueños han fascinado a la humanidad desde la antigüedad. Sigmund Freud interpretó los sueños como "el camino real al inconsciente". La neurociencia moderna sugiere que los sueños son subproductos de la consolidación de la memoria y la simulación de amenazas. Los trastornos del sueño incluyen insomnio, apnea del sueño, narcolepsia y sonambulismo. La higiene del sueño (regularidad, ambiente oscuro, evitar pantallas) mejora la calidad del descanso.`,
    content_en: `Sleep is a universal physiological state in animals, characterized by reduced consciousness and sensory activity. Humans spend approximately one-third of their lives sleeping. Sleep deprivation has serious consequences for physical and mental health.

Sleep is divided into approximately 90-minute cycles alternating between NREM (non-rapid eye movement) and REM (rapid eye movement) sleep. REM sleep, discovered by Nathaniel Kleitman and Eugene Aserinsky in 1953, is when most vivid dreams occur. During sleep, the brain consolidates memories, processes emotions, and eliminates metabolic toxins.

Dreams have fascinated humanity since antiquity. Sigmund Freud interpreted dreams as "the royal road to the unconscious." Modern neuroscience suggests dreams are byproducts of memory consolidation and threat simulation. Sleep disorders include insomnia, sleep apnea, narcolepsy, and sleepwalking. Sleep hygiene (regularity, dark environment, avoiding screens) improves rest quality.`,
    excerpt_es: 'El universo nocturno del cerebro: sueño REM, sueños y la ciencia del descanso.', excerpt_en: "The brain's nightly universe: REM sleep, dreams, and the science of rest.", categoryId: 'cat-neuroscience', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== ENVIRONMENT =====
  { id: 'entry-climate-change', title_es: 'Cambio Climático', title_en: 'Climate Change', slug: 'cambio-climatico',
    content_es: `El cambio climático es la alteración a largo plazo de los patrones climáticos globales, causada principalmente por las actividades humanas que emiten gases de efecto invernadero (CO2, metano, óxido nitroso). La quema de combustibles fósiles, la deforestación y la agricultura intensiva son las principales fuentes.

La temperatura global ha aumentado aproximadamente 1.2°C desde la era preindustrial. El Panel Intergubernamental sobre Cambio Climático (IPCC) de la ONU advierte que superar los 1.5°C desencadenaría impactos catastróficos: fusión de glaciares, aumento del nivel del mar, eventos climáticos extremos, pérdida de biodiversidad y amenazas a la seguridad alimentaria.

El Acuerdo de París (2015) estableció el objetivo de limitar el calentamiento a 1.5°C. Las soluciones incluyen la transición a energías renovables, la electrificación del transporte, la eficiencia energética, la reforestación, la captura de carbono y cambios en el estilo de vida. El movimiento climático juvenil (Greta Thunberg) y los acuerdos internacionales buscan acelerar la acción climática ante la urgencia de la crisis.`,
    content_en: `Climate change is the long-term alteration of global climate patterns, primarily caused by human activities that emit greenhouse gases (CO2, methane, nitrous oxide). Burning fossil fuels, deforestation, and intensive agriculture are the main sources.

Global temperature has risen approximately 1.2°C since pre-industrial times. The UN Intergovernmental Panel on Climate Change (IPCC) warns that exceeding 1.5°C would trigger catastrophic impacts: glacier melting, sea-level rise, extreme weather events, biodiversity loss, and threats to food security.

The Paris Agreement (2015) established the goal of limiting warming to 1.5°C. Solutions include the transition to renewable energy, transport electrification, energy efficiency, reforestation, carbon capture, and lifestyle changes. The youth climate movement (Greta Thunberg) and international agreements seek to accelerate climate action in response to the urgency of the crisis.`,
    excerpt_es: 'El desafío global más urgente: causas, impactos y soluciones al calentamiento planetario.', excerpt_en: 'The most urgent global challenge: causes, impacts, and solutions to planetary warming.', categoryId: 'cat-environment', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-biodiversity', title_es: 'Biodiversidad', title_en: 'Biodiversity', slug: 'biodiversidad',
    content_es: `La biodiversidad se refiere a la variedad de vida en la Tierra en todos sus niveles: genes, especies, ecosistemas y paisajes. Se estima que existen entre 5 y 30 millones de especies en el planeta, de las cuales solo se han descrito aproximadamente 1.8 millones. La mayoría se encuentra en los trópicos.

La biodiversidad proporciona servicios ecosistémicos esenciales: polinización de cultivos, purificación del agua, regulación del clima, formación del suelo, control de plagas y recursos medicinales. Se estima que más del 40% de la economía global depende directa o indirectamente de la biodiversidad.

La sexta extinción masiva, causada por la actividad humana, está eliminando especies a un ritmo 1,000 veces superior al natural. Las principales amenazas son la destrucción de hábitats, la sobreexplotación, la contaminación, las especies invasoras y el cambio climático. Las áreas protegidas, los corredores biológicos, la restauración de ecosistemas y la conservación ex situ (bancos de semillas, zoológicos) son estrategias para preservar la biodiversidad para las generaciones futuras.`,
    content_en: `Biodiversity refers to the variety of life on Earth at all levels: genes, species, ecosystems, and landscapes. It is estimated that between 5 and 30 million species exist on the planet, of which only approximately 1.8 million have been described. Most are found in the tropics.

Biodiversity provides essential ecosystem services: crop pollination, water purification, climate regulation, soil formation, pest control, and medicinal resources. It is estimated that over 40% of the global economy depends directly or indirectly on biodiversity.

The sixth mass extinction, caused by human activity, is eliminating species at a rate 1,000 times higher than natural. Main threats are habitat destruction, overexploitation, pollution, invasive species, and climate change. Protected areas, biological corridors, ecosystem restoration, and ex situ conservation (seed banks, zoos) are strategies to preserve biodiversity for future generations.`,
    excerpt_es: 'La red de vida en la Tierra: especies, ecosistemas y la sexta extinción masiva.', excerpt_en: "The web of life on Earth: species, ecosystems, and the sixth mass extinction.", categoryId: 'cat-environment', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== METEOROLOGY =====
  { id: 'entry-weather-science', title_es: 'Ciencia del Clima', title_en: 'Weather Science', slug: 'ciencia-clima',
    content_es: `La meteorología es la ciencia que estudia la atmósfera y los fenómenos atmosféricos. Se distingue de la climatología, que estudia los patrones climáticos a largo plazo. Las observaciones meteorológicas sistemáticas comenzaron en el siglo XVII con la invención del termómetro (Galileo) y el barómetro (Torricelli).

Los fenómenos meteorológicos incluyen precipitación (lluvia, nieve, granizo), viento, tormentas, huracanes, tornados, frentes atmosféricos y fenómenos ópticos (arcoíris, halos). La atmósfera se divide en capas: troposfera (donde ocurre el clima), estratosfera (capa de ozono), mesosfera, termosfera y exosfera.

La predicción meteorológica moderna utiliza modelos numéricos ejecutados en superordenadores, datos de satélites meteorológicos, radares, globos atmosféricos y estaciones terrestres. Los satélites geoestacionarios (GOES, Meteosat) proporcionan imágenes continuas de la cobertura nubosa. La precisión de los pronósticos a 5 días hoy es comparable a la de los pronósticos a 1 día de hace 40 años. El cambio climático está alterando los patrones meteorológicos, aumentando la frecuencia de eventos extremos.`,
    content_en: `Meteorology is the science that studies the atmosphere and atmospheric phenomena. It is distinguished from climatology, which studies long-term climate patterns. Systematic weather observations began in the 17th century with the invention of the thermometer (Galileo) and barometer (Torricelli).

Weather phenomena include precipitation (rain, snow, hail), wind, storms, hurricanes, tornadoes, atmospheric fronts, and optical phenomena (rainbows, halos). The atmosphere is divided into layers: troposphere (where weather occurs), stratosphere (ozone layer), mesosphere, thermosphere, and exosphere.

Modern weather forecasting uses numerical models run on supercomputers, data from weather satellites, radars, weather balloons, and ground stations. Geostationary satellites (GOES, Meteosat) provide continuous cloud cover images. The accuracy of 5-day forecasts today is comparable to 1-day forecasts 40 years ago. Climate change is altering weather patterns, increasing the frequency of extreme events.`,
    excerpt_es: 'La ciencia de la atmósfera: predicción del tiempo, fenómenos meteorológicos y cambio climático.', excerpt_en: 'The science of the atmosphere: weather prediction, meteorological phenomena, and climate change.', categoryId: 'cat-meteorology', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-hurricanes', title_es: 'Huracanes', title_en: 'Hurricanes', slug: 'huracanes',
    content_es: `Los huracanes (ciclones tropicales o tifones según la región) son los fenómenos atmosféricos más destructivos de la Tierra. Son sistemas de tormentas organizadas que se forman sobre océanos cálidos (temperatura superior a 26.5°C) y obtienen su energía de la evaporación del agua marina.

Un huracán típico tiene una estructura en espiral con nubes de tormenta alrededor del ojo, un centro de calma y baja presión. Los vientos pueden superar los 250 km/h. La escala Saffir-Simpson clasifica los huracanes en categorías del 1 al 5 según la velocidad del viento. El huracán Katrina (2005, categoría 5) devastó Nueva Orleans causando 1,800 muertos.

El calentamiento global está intensificando los huracanes al aumentar la temperatura del mar. La predicción de trayectorias ha mejorado significativamente, reduciendo las falsas alarmas y permitiendo evacuaciones más efectivas. Los daños económicos de los huracanes más destructivos (Katrina, Harvey, Maria, Ian) superan los $100 mil millones cada uno. La construcción resistente, los sistemas de alerta y la planificación urbana reducen la vulnerabilidad.`,
    content_en: `Hurricanes (tropical cyclones or typhoons depending on the region) are the most destructive atmospheric phenomena on Earth. They are organized storm systems that form over warm oceans (temperature above 26.5°C) and draw energy from the evaporation of seawater.

A typical hurricane has a spiral structure with storm clouds around the eye, a center of calm and low pressure. Winds can exceed 250 km/h. The Saffir-Simpson scale classifies hurricanes into categories 1 to 5 by wind speed. Hurricane Katrina (2005, category 5) devastated New Orleans, causing 1,800 deaths.

Global warming is intensifying hurricanes by increasing sea temperature. Track prediction has significantly improved, reducing false alarms and enabling more effective evacuations. Economic damages from the most destructive hurricanes (Katrina, Harvey, Maria, Ian) exceed $100 billion each. Resistant construction, warning systems, and urban planning reduce vulnerability.`,
    excerpt_es: 'Los gigantes atmosféricos más destructivos: formación, categorías y el impacto del cambio climático.', excerpt_en: 'The most destructive atmospheric giants: formation, categories, and the impact of climate change.', categoryId: 'cat-meteorology', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== ASTRONOMY (additional) =====
  { id: 'entry-solar-system', title_es: 'Sistema Solar', title_en: 'Solar System', slug: 'sistema-solar',
    content_es: `El Sistema Solar es el sistema planetario que contiene a la Tierra. Está formado por el Sol, ocho planetas, cinco planetas enanos (Plutón, Ceres, Eris, Makemake, Haumea), cientos de lunas, asteroides, cometas y meteoroides.

Los planetas se dividen en interiores rocosos (Mercurio, Venus, Tierra, Marte) y exteriores gaseosos (Júpiter, Saturno, Urano, Neptuno). Júpiter es el planeta más grande con una masa 318 veces la terrestre. Saturno destaca por su sistema de anillos. Más allá de Neptuno se encuentra el Cinturón de Kuiper y la Nube de Oort, fuente de los cometas de largo período.

La exploración del Sistema Solar ha sido una de las mayores aventuras científicas. Misiones como Voyager (1977), que ya han salido del Sistema Solar, Cassini (Saturno), New Horizons (Plutón), las misiones a Marte (Perseverance, Curiosity) y las futuras misiones a la luna Europa de Júpiter han revelado la diversidad y belleza de nuestros vecinos cósmicos. La búsqueda de vida se centra en Marte, Europa y Encélado.`,
    content_en: `The Solar System is the planetary system containing Earth. It consists of the Sun, eight planets, five dwarf planets (Pluto, Ceres, Eris, Makemake, Haumea), hundreds of moons, asteroids, comets, and meteoroids.

Planets are divided into inner rocky (Mercury, Venus, Earth, Mars) and outer gas giants (Jupiter, Saturn, Uranus, Neptune). Jupiter is the largest planet with 318 times Earth's mass. Saturn is noted for its ring system. Beyond Neptune lies the Kuiper Belt and the Oort Cloud, source of long-period comets.

Solar System exploration has been one of the greatest scientific adventures. Missions like Voyager (1977), which have already left the Solar System, Cassini (Saturn), New Horizons (Pluto), Mars missions (Perseverance, Curiosity), and future missions to Jupiter's moon Europa have revealed the diversity and beauty of our cosmic neighbors. The search for life focuses on Mars, Europa, and Enceladus.`,
    excerpt_es: 'Nuestro vecindario cósmico: planetas, lunas y la exploración del Sistema Solar.', excerpt_en: 'Our cosmic neighborhood: planets, moons, and Solar System exploration.', categoryId: 'cat-astronomy', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-stars', title_es: 'Estrellas', title_en: 'Stars', slug: 'estrellas',
    content_es: `Las estrellas son esferas de plasma que generan energía mediante fusión nuclear en sus núcleos. El Sol es nuestra estrella más cercana, una enana amarilla de tipo G2V. Las estrellas varían enormemente en tamaño, temperatura y color: desde enanas rojas frías hasta supergigantes azules calientes.

Las estrellas nacen en nebulosas, nubes de gas y polvo que colapsan gravitacionalmente. Viven millones o miles de millones de años fusionando hidrógeno en helio. Cuando agotan su combustible, evolucionan según su masa: las estrellas como el Sol se convierten en gigantes rojas y luego en enanas blancas; las masivas explotan como supernovas, dejando estrellas de neutrones o agujeros negros.

Las supernovas son explosiones estelares que pueden brillar más que galaxias enteras. La supernova SN 1054 creó la Nebulosa del Cangrejo. En 1987, la supernova SN 1987A en la Gran Nube de Magallanes fue visible a simple vista. Los elementos pesados (carbono, oxígeno, hierro) se forjan en el interior de las estrellas y se dispersan en las supernovas —como dijo Carl Sagan, "somos polvo de estrellas".`,
    content_en: `Stars are spheres of plasma that generate energy through nuclear fusion in their cores. The Sun is our closest star, a G2V yellow dwarf. Stars vary enormously in size, temperature, and color: from cool red dwarfs to hot blue supergiants.

Stars are born in nebulae, clouds of gas and dust that gravitationally collapse. They live millions or billions of years fusing hydrogen into helium. When they exhaust their fuel, they evolve according to their mass: Sun-like stars become red giants then white dwarfs; massive stars explode as supernovae, leaving neutron stars or black holes.

Supernovae are stellar explosions that can outshine entire galaxies. Supernova SN 1054 created the Crab Nebula. In 1987, supernova SN 1987A in the Large Magellanic Cloud was visible to the naked eye. Heavy elements (carbon, oxygen, iron) are forged inside stars and scattered in supernovae — as Carl Sagan said, "we are star stuff."`,
    excerpt_es: 'Los hornos nucleares del cosmos: nacimiento, vida y muerte de las estrellas.', excerpt_en: 'The nuclear furnaces of the cosmos: birth, life, and death of stars.', categoryId: 'cat-astronomy', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-black-holes', title_es: 'Agujeros Negros', title_en: 'Black Holes', slug: 'agujeros-negros',
    content_es: `Los agujeros negros son regiones del espacio-tiempo con una gravedad tan intensa que nada, ni siquiera la luz, puede escapar. Fueron predichos por la teoría de la relatividad general de Einstein (1915). El término fue acuñado por John Wheeler en 1967.

Se forman cuando estrellas masivas colapsan al final de sus vidas. Existen agujeros negros estelares (masas de 5 a 100 soles), supermasivos (millones o miles de millones de masas solares en centros de galaxias) e intermedios. El horizonte de sucesos es el punto de no retorno. La singularidad en el centro es donde las leyes de la física se rompen.

En 2019, el Telescopio Event Horizon capturó la primera imagen directa de un agujero negro, en el centro de la galaxia M87. El agujero negro supermasivo de nuestra Vía Láctea, Sagitario A*, fue fotografiado en 2022. La detección de ondas gravitacionales por LIGO (2015) provenientes de la fusión de agujeros negros confirmó predicciones de Einstein y abrió una nueva ventana para observar el universo. Stephen Hawking mostró que los agujeros negros emiten radiación (radiación Hawking).`,
    content_en: `Black holes are regions of spacetime with gravity so intense that nothing, not even light, can escape. They were predicted by Einstein's general theory of relativity (1915). The term was coined by John Wheeler in 1967.

They form when massive stars collapse at the end of their lives. There are stellar-mass black holes (5 to 100 solar masses), supermassive (millions to billions of solar masses at galaxy centers), and intermediate ones. The event horizon is the point of no return. The singularity at the center is where physics laws break down.

In 2019, the Event Horizon Telescope captured the first direct image of a black hole, at the center of galaxy M87. The supermassive black hole of our Milky Way, Sagittarius A*, was photographed in 2022. Gravitational wave detection by LIGO (2015) from black hole mergers confirmed Einstein's predictions and opened a new window to observe the universe. Stephen Hawking showed that black holes emit radiation (Hawking radiation).`,
    excerpt_es: 'Los objetos más extremos del universo: gravedad que atrapa la luz y ondas en el espacio-tiempo.', excerpt_en: 'The most extreme objects in the universe: gravity that traps light and waves in spacetime.', categoryId: 'cat-astronomy', realityStatus: 'scientific', imageUrl: '', createdAt: now, updatedAt: now },
]

export const newScienceSubsections: SeedSubsection[] = []
