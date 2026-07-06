import type { SeedEntry, SeedSubsection } from './seed'

const now = '2026-03-15T00:00:00Z'

export const newArtsEntries: SeedEntry[] = [
  // ===== MUSIC =====
  { id: 'entry-classical-music', title_es: 'Música Clásica', title_en: 'Classical Music', slug: 'musica-clasica',
    content_es: `La música clásica occidental es una tradición musical formal que abarca aproximadamente desde el siglo XI hasta la actualidad. Se caracteriza por su notación escrita, estructuras complejas y el desarrollo de formas como la sinfonía, la sonata y el concierto.

El período barroco (1600-1750) produjo genios como Johann Sebastian Bach, George Frideric Handel y Antonio Vivaldi. El clasicismo (1750-1820) trajo a Wolfgang Amadeus Mozart, Joseph Haydn y Ludwig van Beethoven, quienes establecieron la sinfonía y el cuarteto de cuerdas como formas centrales.

El romanticismo (1820-1900) enfatizó la expresión emocional con compositores como Franz Schubert, Frédéric Chopin, Richard Wagner y Pyotr Ilyich Tchaikovsky. El siglo XX vio la diversificación con el impresionismo de Debussy, el atonalismo de Schoenberg, el minimalismo de Philip Glass y la fusión con músicas del mundo. La música clásica sigue siendo una tradición viva, interpretada en salas de conciertos de todo el mundo.`,
    content_en: `Western classical music is a formal musical tradition spanning approximately from the 11th century to the present. It is characterized by written notation, complex structures, and the development of forms such as the symphony, sonata, and concerto.

The Baroque period (1600-1750) produced geniuses like Johann Sebastian Bach, George Frideric Handel, and Antonio Vivaldi. Classicism (1750-1820) brought Wolfgang Amadeus Mozart, Joseph Haydn, and Ludwig van Beethoven, who established the symphony and string quartet as central forms.

Romanticism (1820-1900) emphasized emotional expression with composers like Franz Schubert, Frédéric Chopin, Richard Wagner, and Pyotr Ilyich Tchaikovsky. The 20th century saw diversification with Debussy's impressionism, Schoenberg's atonality, Philip Glass's minimalism, and fusion with world musics. Classical music remains a living tradition, performed in concert halls worldwide.`,
    excerpt_es: 'La tradición musical formal de Occidente: de Bach a la vanguardia contemporánea.', excerpt_en: 'The formal musical tradition of the West: from Bach to the contemporary avant-garde.', categoryId: 'cat-music', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-jazz', title_es: 'Jazz', title_en: 'Jazz', slug: 'jazz',
    content_es: `El jazz es un género musical nacido a finales del siglo XIX en las comunidades afroamericanas de Nueva Orleans, Luisiana. Combina tradiciones musicales africanas (ritmos sincopados, llamada y respuesta) con armonías europeas y el blues.

Nueva Orleans fue la cuna del jazz temprano, con figuras como Buddy Bolden, Jelly Roll Morton y Louis Armstrong. Armstrong revolucionó el jazz con su virtuosismo en la trompeta y su innovadora improvisación solista. La Era del Swing (1930-1940) llevó el jazz al gran público con big bands de Duke Ellington, Count Basie y Benny Goodman.

El bebop de Charlie Parker y Dizzy Gillespie en los 40 transformó el jazz en música de arte intelectual. El cool jazz, hard bop, free jazz de John Coltrane y Ornette Coleman, jazz fusión de Miles Davis y el smooth jazz expandieron el género. El jazz ha influido profundamente en el rock, el hip-hop, la música electrónica y la música popular global.`,
    content_en: `Jazz is a musical genre born in the late 19th century in the African American communities of New Orleans, Louisiana. It combines African musical traditions (syncopated rhythms, call and response) with European harmonies and the blues.

New Orleans was the birthplace of early jazz, with figures like Buddy Bolden, Jelly Roll Morton, and Louis Armstrong. Armstrong revolutionized jazz with his trumpet virtuosity and innovative solo improvisation. The Swing Era (1930-1940) brought jazz to the general public with big bands led by Duke Ellington, Count Basie, and Benny Goodman.

The bebop of Charlie Parker and Dizzy Gillespie in the 40s transformed jazz into intellectual art music. Cool jazz, hard bop, John Coltrane's and Ornette Coleman's free jazz, Miles Davis's jazz fusion, and smooth jazz expanded the genre. Jazz has profoundly influenced rock, hip-hop, electronic music, and global popular music.`,
    excerpt_es: 'El género musical que nació en Nueva Orleans y se convirtió en lenguaje universal de libertad creativa.', excerpt_en: 'The musical genre born in New Orleans that became a universal language of creative freedom.', categoryId: 'cat-music', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-rock-history', title_es: 'Historia del Rock', title_en: 'History of Rock', slug: 'historia-rock',
    content_es: `El rock and roll surgió en Estados Unidos en la década de 1950 a partir de la fusión del rhythm and blues, country y gospel. Chuck Berry, Little Richard, Elvis Presley y Jerry Lee Lewis definieron el sonido y la actitud del rock temprano. La guitarra eléctrica se convirtió en el instrumento emblemático.

Los años 60 vieron la explosión creativa con The Beatles y The Rolling Stones liderando la invasión británica. El rock psicodélico (Jimi Hendrix, Pink Floyd), el folk rock (Bob Dylan), el blues rock (Led Zeppelin) y el soul ampliaron el espectro del género. Los 70 trajeron el hard rock (AC/DC), el heavy metal (Black Sabbath), el punk (Sex Pistols, Ramones) y el rock progresivo.

Los 80 vieron el auge del hair metal, new wave, post-punk y rock alternativo. Los 90 estuvieron dominados por el grunge (Nirvana, Pearl Jam), el britpop (Oasis, Blur) y el rock indie. En el siglo XXI, el rock se ha diversificado en innumerables subgéneros, fusionándose con electrónica, hip-hop y músicas del mundo, manteniéndose como una fuerza cultural global.`,
    content_en: `Rock and roll emerged in the United States in the 1950s from the fusion of rhythm and blues, country, and gospel. Chuck Berry, Little Richard, Elvis Presley, and Jerry Lee Lewis defined early rock's sound and attitude. The electric guitar became the emblematic instrument.

The 60s saw a creative explosion with The Beatles and The Rolling Stones leading the British invasion. Psychedelic rock (Jimi Hendrix, Pink Floyd), folk rock (Bob Dylan), blues rock (Led Zeppelin), and soul broadened the genre's spectrum. The 70s brought hard rock (AC/DC), heavy metal (Black Sabbath), punk (Sex Pistols, Ramones), and progressive rock.

The 80s saw the rise of hair metal, new wave, post-punk, and alternative rock. The 90s were dominated by grunge (Nirvana, Pearl Jam), Britpop (Oasis, Blur), and indie rock. In the 21st century, rock has diversified into countless subgenres, fusing with electronic, hip-hop, and world musics, remaining a global cultural force.`,
    excerpt_es: 'El género que definió la cultura juvenil del siglo XX: del rock and roll al indie.', excerpt_en: 'The genre that defined 20th century youth culture: from rock and roll to indie.', categoryId: 'cat-music', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-electronic-music', title_es: 'Música Electrónica', title_en: 'Electronic Music', slug: 'musica-electronica',
    content_es: `La música electrónica es aquella que utiliza instrumentos electrónicos y tecnología digital para su creación. Sus orígenes se remontan al theremin (1920) y las grabaciones de musique concrète de Pierre Schaeffer en los años 40. Los sintetizadores Moog y Buchla de los 60 revolucionaron la producción musical.

La música disco de los 70, con sus ritmos programados y producción electrónica, preparó el terreno. El house surgió en Chicago a principios de los 80, mientras el techno nacía en Detroit. El acid house y la escena rave del Reino Unido popularizaron la música dance electrónica a nivel global.

Subgéneros como trance, drum and bass, dubstep, ambient, IDM, EDM y techno minimalista han diversificado el panorama. La producción musical digital ha democratizado la creación: hoy cualquiera con un ordenador puede producir música de calidad profesional. Festivales como Tomorrowland, Ultra y Glastonbury atraen a millones de asistentes.`,
    content_en: `Electronic music is music that uses electronic instruments and digital technology for its creation. Its origins date back to the theremin (1920) and Pierre Schaeffer's musique concrète recordings in the 1940s. The Moog and Buchla synthesizers of the 60s revolutionized music production.

70s disco music, with its programmed rhythms and electronic production, prepared the ground. House emerged in Chicago in the early 80s, while techno was born in Detroit. Acid house and the UK rave scene popularized electronic dance music globally.

Subgenres like trance, drum and bass, dubstep, ambient, IDM, EDM, and minimalist techno have diversified the landscape. Digital music production has democratized creation: today anyone with a computer can produce professional-quality music. Festivals like Tomorrowland, Ultra, and Glastonbury attract millions of attendees.`,
    excerpt_es: 'Del theremin al EDM: la revolución de la música creada con tecnología.', excerpt_en: 'From the theremin to EDM: the revolution of technology-created music.', categoryId: 'cat-music', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== VISUAL ARTS =====
  { id: 'entry-renaissance-art', title_es: 'Renacimiento Artístico', title_en: 'Artistic Renaissance', slug: 'renacimiento-artistico',
    content_es: `El Renacimiento fue un movimiento cultural que transformó el arte europeo entre los siglos XIV y XVII. Nacido en Florencia, Italia, se caracterizó por el redescubrimiento de la estética clásica grecorromana, la perspectiva lineal, el realismo anatómico y el humanismo.

Leonardo da Vinci encarna el ideal renacentista del "hombre universal": pintor, escultor, arquitecto, ingeniero y científico. Obras como La Mona Lisa y La Última Cena muestran su dominio del sfumato y la composición. Miguel Ángel, genio de la escultura y la pintura, creó el David y los frescos de la Capilla Sixtina.

Rafael Sanzio destacó por sus Madonnas y los frescos del Vaticano. Sandro Botticelli, Tiziano y Caravaggio (ya en el Barroco) contribuyeron a la riqueza del período. El Renacimiento se extendió por toda Europa: Durero en Alemania, Van Eyck en Flandes, El Greco en España. Su legado perdura como uno de los momentos cumbre de la creatividad humana.`,
    content_en: `The Renaissance was a cultural movement that transformed European art between the 14th and 17th centuries. Born in Florence, Italy, it was characterized by the rediscovery of classical Greco-Roman aesthetics, linear perspective, anatomical realism, and humanism.

Leonardo da Vinci embodies the Renaissance ideal of the "universal man": painter, sculptor, architect, engineer, and scientist. Works like the Mona Lisa and The Last Supper show his mastery of sfumato and composition. Michelangelo, genius of sculpture and painting, created David and the Sistine Chapel frescoes.

Raphael Sanzio was noted for his Madonnas and Vatican frescoes. Sandro Botticelli, Titian, and Caravaggio (already in the Baroque) contributed to the period's richness. The Renaissance spread throughout Europe: Dürer in Germany, Van Eyck in Flanders, El Greco in Spain. Its legacy endures as one of the pinnacles of human creativity.`,
    excerpt_es: 'El florecimiento del arte, la ciencia y el humanismo en la Italia de los siglos XIV-XVII.', excerpt_en: 'The flowering of art, science, and humanism in 14th-17th century Italy.', categoryId: 'cat-visual-arts', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-impressionism', title_es: 'Impresionismo', title_en: 'Impressionism', slug: 'impresionismo',
    content_es: `El impresionismo fue un movimiento artístico que revolucionó la pintura en Francia a finales del siglo XIX. Los impresionistas buscaban capturar la impresión visual del momento, enfatizando la luz, el color y la atmósfera sobre el detalle preciso y la composición académica.

Claude Monet, con su serie de Nenúfares y la obra Impresión, sol naciente que dio nombre al movimiento, es el impresionista por excelencia. Edgar Degas capturó la vida parisina con sus bailarinas y carreras de caballos. Pierre-Auguste Renoir pintó escenas de felicidad y belleza en la vida cotidiana.

Otros impresionistas notables incluyen Camille Pissarro, Alfred Sisley y Berthe Morisot. El postimpresionismo, con Vincent van Gogh, Paul Cézanne y Georges Seurat, llevó las innovaciones impresionistas más allá, sentando las bases del arte moderno. El impresionismo transformó la percepción del arte y abrió el camino a las vanguardias del siglo XX.`,
    content_en: `Impressionism was an artistic movement that revolutionized painting in France in the late 19th century. Impressionists sought to capture the visual impression of the moment, emphasizing light, color, and atmosphere over precise detail and academic composition.

Claude Monet, with his Water Lilies series and the work Impression, Sunrise that gave the movement its name, is the quintessential impressionist. Edgar Degas captured Parisian life with his dancers and horse races. Pierre-Auguste Renoir painted scenes of happiness and beauty in everyday life.

Other notable impressionists include Camille Pissarro, Alfred Sisley, and Berthe Morisot. Post-impressionism, with Vincent van Gogh, Paul Cézanne, and Georges Seurat, took impressionist innovations further, laying the foundations of modern art. Impressionism transformed the perception of art and opened the way for 20th century avant-garde movements.`,
    excerpt_es: 'La revolución pictórica que capturó la luz y el color en la Francia del siglo XIX.', excerpt_en: 'The pictorial revolution that captured light and color in 19th century France.', categoryId: 'cat-visual-arts', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-modern-art', title_es: 'Arte Moderno', title_en: 'Modern Art', slug: 'arte-moderno',
    content_es: `El arte moderno abarca las obras producidas desde finales del siglo XIX hasta la década de 1970, caracterizadas por la ruptura con las tradiciones académicas y la experimentación con nuevas formas, técnicas y conceptos. Marcó un cambio radical en la comprensión de lo que el arte puede ser.

Las vanguardias del siglo XX incluyen el fauvismo (Matisse), el expresionismo (Munch, Kandinsky), el cubismo (Picasso, Braque), el futurismo (Boccioni), el dadaísmo (Duchamp), el surrealismo (Dalí, Magritte) y la abstracción geométrica (Mondrian, Malevich). Cada movimiento desafió convenciones establecidas.

El expresionismo abstracto estadounidense (Pollock, Rothko) trasladó el centro del arte mundial de París a Nueva York después de la Segunda Guerra Mundial. El pop art (Warhol, Lichtenstein) integró la cultura de masas. El minimalismo, el arte conceptual y el land art expandieron los límites. El arte moderno transformó nuestra relación con la imagen y estableció que el arte es ante todo una idea.`,
    content_en: `Modern art encompasses works produced from the late 19th century to the 1970s, characterized by the break with academic traditions and experimentation with new forms, techniques, and concepts. It marked a radical shift in the understanding of what art can be.

20th century avant-garde movements include Fauvism (Matisse), Expressionism (Munch, Kandinsky), Cubism (Picasso, Braque), Futurism (Boccioni), Dada (Duchamp), Surrealism (Dalí, Magritte), and geometric abstraction (Mondrian, Malevich). Each movement challenged established conventions.

American abstract expressionism (Pollock, Rothko) moved the center of the art world from Paris to New York after World War II. Pop art (Warhol, Lichtenstein) integrated mass culture. Minimalism, conceptual art, and land art expanded boundaries. Modern art transformed our relationship with images and established that art is above all an idea.`,
    excerpt_es: 'La ruptura con la tradición: vanguardias que redefinieron el arte en el siglo XX.', excerpt_en: 'The break with tradition: avant-garde movements that redefined art in the 20th century.', categoryId: 'cat-visual-arts', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-sculpture', title_es: 'Escultura Universal', title_en: 'Universal Sculpture', slug: 'escultura-universal',
    content_es: `La escultura es una de las formas artísticas más antiguas de la humanidad. Las primeras esculturas conocidas son las Venus paleolíticas, como la Venus de Willendorf (c. 25,000 a.C.). Las civilizaciones antiguas produjeron esculturas monumentales: las esfinges egipcias, los kuroi griegos, los toros alados asirios.

La escultura clásica griega alcanzó la perfección en la representación del cuerpo humano con obras como el Discóbolo de Mirón y la Venus de Milo. Miguel Ángel llevó la escultura renacentista a su cima con el David y la Piedad. Rodin revolucionó la escultura moderna con El Pensador y Las Puertas del Infierno.

La escultura contemporánea incluye obras abstractas de Henry Moore y Constantin Brâncuși, instalaciones de Anish Kapoor, esculturas cinéticas de Alexander Calder, y las figuras hiperrealistas de Ron Mueck. La escultura ha evolucionado desde la talla en piedra hasta incorporar luz, sonido, movimiento y materiales industriales.`,
    content_en: `Sculpture is one of humanity's oldest artistic forms. The earliest known sculptures are the Paleolithic Venuses, such as the Venus of Willendorf (c. 25,000 BC). Ancient civilizations produced monumental sculptures: Egyptian sphinxes, Greek kouroi, Assyrian winged bulls.

Classical Greek sculpture achieved perfection in representing the human body with works like Myron's Discobolus and the Venus de Milo. Michelangelo brought Renaissance sculpture to its peak with David and the Pietà. Rodin revolutionized modern sculpture with The Thinker and The Gates of Hell.

Contemporary sculpture includes abstract works by Henry Moore and Constantin Brâncuși, installations by Anish Kapoor, kinetic sculptures by Alexander Calder, and hyperrealistic figures by Ron Mueck. Sculpture has evolved from stone carving to incorporate light, sound, movement, and industrial materials.`,
    excerpt_es: 'Del tallado en piedra prehistórico a las instalaciones contemporáneas: el arte tridimensional.', excerpt_en: 'From prehistoric stone carving to contemporary installations: three-dimensional art.', categoryId: 'cat-visual-arts', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== ARCHITECTURE =====
  { id: 'entry-gothic-architecture', title_es: 'Arquitectura Gótica', title_en: 'Gothic Architecture', slug: 'arquitectura-gotica',
    content_es: `La arquitectura gótica floreció en Europa desde el siglo XII hasta el XVI, sucediendo al románico y precediendo al Renacimiento. Se originó en la región de Île-de-France con la construcción de la basílica de Saint-Denis (1140), considerada la primera obra gótica.

Las características distintivas del gótico incluyen el arco apuntado, la bóveda de crucería, los arbotantes que permiten muros más delgados y grandes ventanales, y los rosetones de vidrieras policromadas que llenan el interior de luz coloreada. Las catedrales góticas buscaban elevar el espíritu hacia lo divino a través de la luz y la verticalidad.

Catedrales emblemáticas incluyen Notre-Dame de París, Chartres, Reims, Amiens, Colonia, Milán y la Sagrada Familia de Barcelona (una reinterpretación modernista). El gótico también se aplicó a arquitectura civil: ayuntamientos, lonjas y universidades. Su influencia perdura en el neogótico del siglo XIX y en la arquitectura contemporánea.`,
    content_en: `Gothic architecture flourished in Europe from the 12th to the 16th century, succeeding Romanesque and preceding the Renaissance. It originated in the Île-de-France region with the construction of the Basilica of Saint-Denis (1140), considered the first Gothic work.

Distinctive Gothic features include the pointed arch, ribbed vault, flying buttresses allowing thinner walls and large windows, and rose windows of polychrome stained glass filling interiors with colored light. Gothic cathedrals sought to elevate the spirit toward the divine through light and verticality.

Iconic cathedrals include Notre-Dame de Paris, Chartres, Reims, Amiens, Cologne, Milan, and Barcelona's Sagrada Familia (a modernist reinterpretation). Gothic was also applied to civil architecture: town halls, market halls, and universities. Its influence endures in 19th century Gothic Revival and contemporary architecture.`,
    excerpt_es: 'Catedrales que alcanzan el cielo: el estilo arquitectónico que definió la Edad Media europea.', excerpt_en: 'Cathedrals reaching for the sky: the architectural style that defined the European Middle Ages.', categoryId: 'cat-architecture', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-modern-architecture', title_es: 'Arquitectura Moderna', title_en: 'Modern Architecture', slug: 'arquitectura-moderna',
    content_es: `La arquitectura moderna surgió a finales del siglo XIX como respuesta a los nuevos materiales industriales (acero, hormigón armado, vidrio) y las necesidades de una sociedad en transformación. Rechazó los estilos históricos en favor de formas funcionales, líneas limpias y honestidad estructural.

La Escuela de la Bauhaus (1919-1933), fundada por Walter Gropius, integró arte, artesanía y tecnología. Le Corbusier definió los "cinco puntos de la arquitectura moderna": pilotis, terraza jardín, planta libre, ventana corrida y fachada libre. Frank Lloyd Wright desarrolló la arquitectura orgánica, integrando edificios con el paisaje.

Ludwig Mies van der Rohe acuñó "menos es más" y creó obras maestras como el Pabellón de Barcelona. El estilo internacional dominó la posguerra. El postmodernismo (Robert Venturi, Frank Gehry) reaccionó contra el rigor modernista. Hoy, la arquitectura sostenible y el diseño paramétrico definen las tendencias contemporáneas.`,
    content_en: `Modern architecture emerged in the late 19th century as a response to new industrial materials (steel, reinforced concrete, glass) and the needs of a transforming society. It rejected historical styles in favor of functional forms, clean lines, and structural honesty.

The Bauhaus school (1919-1933), founded by Walter Gropius, integrated art, craft, and technology. Le Corbusier defined the "five points of modern architecture": pilotis, roof garden, free plan, ribbon windows, and free facade. Frank Lloyd Wright developed organic architecture, integrating buildings with the landscape.

Ludwig Mies van der Rohe coined "less is more" and created masterpieces like the Barcelona Pavilion. The International Style dominated the postwar period. Postmodernism (Robert Venturi, Frank Gehry) reacted against modernist rigor. Today, sustainable architecture and parametric design define contemporary trends.`,
    excerpt_es: 'La revolución arquitectónica que abrazó el acero, el hormigón y la pureza de las formas.', excerpt_en: 'The architectural revolution that embraced steel, concrete, and purity of form.', categoryId: 'cat-architecture', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== CINEMA =====
  { id: 'entry-cinema-history', title_es: 'Historia del Cine', title_en: 'History of Cinema', slug: 'historia-cine',
    content_es: `El cine, conocido como el séptimo arte, nació el 28 de diciembre de 1895 cuando los hermanos Lumière proyectaron públicamente sus primeras películas en París. El cine mudo (1895-1927) desarrolló el lenguaje cinematográfico con pioneros como Georges Méliès, D.W. Griffith y Buster Keaton.

El cine sonoro llegó con El Cantante de Jazz (1927). La Edad de Oro de Hollywood (1930-1960) produjo clásicos como Lo que el viento se llevó, Casablanca y Ciudadano Kane de Orson Welles, considerada una de las mejores películas de la historia. Los estudios MGM, Warner Bros y Paramount dominaron la industria.

El cine de autor europeo floreció con la Nouvelle Vague francesa (Godard, Truffaut), el neorrealismo italiano (Rossellini, De Sica) y el expresionismo alemán (Murnau, Lang). El Nuevo Hollywood de los 70 (Scorsese, Coppola, Spielberg) revitalizó el cine estadounidense. La era digital transformó la producción, distribución y exhibición, con plataformas de streaming como Netflix redefiniendo la experiencia cinematográfica.`,
    content_en: `Cinema, known as the seventh art, was born on December 28, 1895 when the Lumière brothers publicly projected their first films in Paris. Silent cinema (1895-1927) developed cinematic language with pioneers like Georges Méliès, D.W. Griffith, and Buster Keaton.

Sound cinema arrived with The Jazz Singer (1927). Hollywood's Golden Age (1930-1960) produced classics like Gone with the Wind, Casablanca, and Orson Welles's Citizen Kane, considered one of the greatest films ever. Studios MGM, Warner Bros, and Paramount dominated the industry.

European auteur cinema flourished with the French New Wave (Godard, Truffaut), Italian neorealism (Rossellini, De Sica), and German Expressionism (Murnau, Lang). The New Hollywood of the 70s (Scorsese, Coppola, Spielberg) revitalized American cinema. The digital era transformed production, distribution, and exhibition, with streaming platforms like Netflix redefining the cinematic experience.`,
    excerpt_es: 'Del cinematógrafo de los Lumière al streaming: la evolución del séptimo arte.', excerpt_en: 'From the Lumière cinematograph to streaming: the evolution of the seventh art.', categoryId: 'cat-cinema', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-animation-cinema', title_es: 'Cine de Animación', title_en: 'Animation Cinema', slug: 'cine-animacion',
    content_es: `El cine de animación crea la ilusión de movimiento mediante la sucesión rápida de imágenes generadas individualmente. Walt Disney revolucionó el género con Blancanieves y los siete enanitos (1937), el primer largometraje animado, estableciendo el estándar de la animación tradicional.

El Studio Ghibli, fundado por Hayao Miyazaki e Isao Takahata, elevó la animación a arte con obras maestras como Mi vecino Totoro, La princesa Mononoke y El viaje de Chihiro, que ganó el Óscar a mejor película de animación (2003). El estilo único de Ghibli combina belleza visual, narrativa profunda y sensibilidad ecológica.

Pixar revolucionó la animación digital con Toy Story (1995), el primer largometraje completamente generado por ordenador. Películas como Buscando a Nemo, Up e Inside Out demostraron que la animación puede abordar temas adultos con profundidad emocional. La animación contemporánea incluye stop-motion (Laika Studios), animación 3D (DreamWorks, Illumination) y técnicas experimentales independientes.`,
    content_en: `Animation cinema creates the illusion of movement through the rapid succession of individually generated images. Walt Disney revolutionized the genre with Snow White and the Seven Dwarfs (1937), the first animated feature film, establishing the standard for traditional animation.

Studio Ghibli, founded by Hayao Miyazaki and Isao Takahata, elevated animation to art with masterpieces like My Neighbor Totoro, Princess Mononoke, and Spirited Away, which won the Oscar for Best Animated Feature (2003). Ghibli's unique style combines visual beauty, deep narrative, and ecological sensibility.

Pixar revolutionized digital animation with Toy Story (1995), the first fully computer-generated feature film. Films like Finding Nemo, Up, and Inside Out demonstrated that animation can address adult themes with emotional depth. Contemporary animation includes stop-motion (Laika Studios), 3D animation (DreamWorks, Illumination), and independent experimental techniques.`,
    excerpt_es: 'De Disney a Ghibli y Pixar: el arte de dar vida a lo imposible.', excerpt_en: 'From Disney to Ghibli and Pixar: the art of bringing the impossible to life.', categoryId: 'cat-cinema', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== CULTURAL MOVEMENTS =====
  { id: 'entry-renaissance', title_es: 'Renacimiento Cultural', title_en: 'The Renaissance', slug: 'renacimiento-cultural',
    content_es: `El Renacimiento fue un movimiento cultural que marcó la transición de la Edad Media a la Edad Moderna. Comenzó en Italia en el siglo XIV y se extendió por Europa hasta el siglo XVII. Se caracterizó por el humanismo, la recuperación de los clásicos grecorromanos y la confianza en la razón y la observación.

El humanismo renacentista, impulsado por figuras como Petrarca, Erasmo de Rotterdam y Tomás Moro, colocó al ser humano en el centro del universo intelectual. La invención de la imprenta por Gutenberg (c. 1450) revolucionó la difusión del conocimiento. El mecenazgo de familias como los Médici en Florencia impulsó las artes.

Científicos como Copérnico, Galileo y Kepler desafiaron la cosmología ptolomeica. La Reforma Protestante de Lutero (1517) rompió la unidad religiosa de Europa. Los descubrimientos geográficos de Colón, Vasco da Gama y Magallanes expandieron el mundo conocido. El Renacimiento sentó las bases de la ciencia moderna, el estado-nación y la cultura occidental contemporánea.`,
    content_en: `The Renaissance was a cultural movement that marked the transition from the Middle Ages to the Modern Age. It began in Italy in the 14th century and spread across Europe until the 17th century. It was characterized by humanism, the recovery of Greco-Roman classics, and confidence in reason and observation.

Renaissance humanism, driven by figures like Petrarch, Erasmus of Rotterdam, and Thomas More, placed the human being at the center of the intellectual universe. Gutenberg's invention of the printing press (c. 1450) revolutionized the dissemination of knowledge. Patronage by families like the Medici in Florence drove the arts.

Scientists like Copernicus, Galileo, and Kepler challenged Ptolemaic cosmology. Luther's Protestant Reformation (1517) broke Europe's religious unity. The geographical discoveries of Columbus, Vasco da Gama, and Magellan expanded the known world. The Renaissance laid the foundations of modern science, the nation-state, and contemporary Western culture.`,
    excerpt_es: 'El movimiento que transformó Europa: humanismo, arte, ciencia y la invención de la imprenta.', excerpt_en: 'The movement that transformed Europe: humanism, art, science, and the printing press.', categoryId: 'cat-cultural-movements', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-counterculture', title_es: 'Contracultura', title_en: 'Counterculture', slug: 'contracultura',
    content_es: `La contracultura se refiere a movimientos sociales y culturales que rechazan o se oponen a los valores dominantes de la sociedad. El movimiento contracultural más conocido floreció en Estados Unidos durante la década de 1960, impulsado por el rechazo a la Guerra de Vietnam, el consumismo y las normas sociales tradicionales.

El movimiento hippie, con su lema "paz y amor", promovió la libertad sexual, el uso de drogas psicodélicas, la música rock, la vida comunal y la espiritualidad oriental. El Festival de Woodstock (1969) simbolizó esta época. La música de Bob Dylan, The Beatles, Jimi Hendrix y Jefferson Airplane fue su banda sonora.

La contracultura de los 60 dejó un legado duradero: el movimiento feminista, los derechos civiles, el ecologismo, la liberación LGBTQ+, y la crítica al consumismo. Generaciones posteriores han producido sus propias contraculturas: punk, grunge, hip-hop, y los movimientos okupa y antiglobalización. Cada contracultura refleja la tensión entre innovación y tradición que impulsa el cambio social.`,
    content_en: `Counterculture refers to social and cultural movements that reject or oppose dominant societal values. The best-known countercultural movement flourished in the United States during the 1960s, driven by rejection of the Vietnam War, consumerism, and traditional social norms.

The hippie movement, with its slogan "peace and love," promoted sexual freedom, psychedelic drug use, rock music, communal living, and Eastern spirituality. The Woodstock Festival (1969) symbolized this era. The music of Bob Dylan, The Beatles, Jimi Hendrix, and Jefferson Airplane was its soundtrack.

The 60s counterculture left a lasting legacy: the feminist movement, civil rights, environmentalism, LGBTQ+ liberation, and criticism of consumerism. Later generations have produced their own countercultures: punk, grunge, hip-hop, and squatting and anti-globalization movements. Each counterculture reflects the tension between innovation and tradition that drives social change.`,
    excerpt_es: 'La rebelión cultural de los 60 que cambió la sociedad: hippies, rock, derechos civiles y paz.', excerpt_en: 'The 60s cultural rebellion that changed society: hippies, rock, civil rights, and peace.', categoryId: 'cat-cultural-movements', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== GASTRONOMY =====
  { id: 'entry-world-cuisines', title_es: 'Gastronomía Mundial', title_en: 'World Cuisines', slug: 'gastronomia-mundial',
    content_es: `La gastronomía mundial refleja la diversidad cultural, geográfica e histórica de la humanidad. Cada civilización ha desarrollado técnicas culinarias, ingredientes y platos que definen su identidad cultural. La cocina es un lenguaje universal que cuenta la historia de los pueblos.

La cocina italiana, con sus pastas, pizzas y risottos, es una de las más populares del mundo. La cocina francesa estableció las bases de la alta cocina moderna con técnicas como la salsa madre y el soufflé. La cocina china, con más de 5,000 años de historia, combina sabores, texturas y técnicas de wok y vapor.

Otras grandes tradiciones incluyen la japonesa (sushi, ramen, kaiseki), la india (curris, especias, tandoori), la mexicana (tacos, mole, tamales), la tailandesa (equilibrio de dulce, ácido, salado y picante), la española (tapas, paella, jamón) y las cocinas de Oriente Medio (hummus, falafel, kebab). La gastronomía molecular de Ferran Adrià y el movimiento de cocina sostenible representan las tendencias contemporáneas.`,
    content_en: `World gastronomy reflects the cultural, geographical, and historical diversity of humanity. Each civilization has developed culinary techniques, ingredients, and dishes that define its cultural identity. Cooking is a universal language that tells the story of peoples.

Italian cuisine, with its pastas, pizzas, and risottos, is one of the most popular worldwide. French cuisine established the foundations of modern haute cuisine with techniques like mother sauces and soufflé. Chinese cuisine, with over 5,000 years of history, combines flavors, textures, and wok and steaming techniques.

Other great traditions include Japanese (sushi, ramen, kaiseki), Indian (curries, spices, tandoori), Mexican (tacos, mole, tamales), Thai (balance of sweet, sour, salty, and spicy), Spanish (tapas, paella, ham), and Middle Eastern cuisines (hummus, falafel, kebab). Ferran Adrià's molecular gastronomy and the sustainable food movement represent contemporary trends.`,
    excerpt_es: 'Un viaje por las cocinas del mundo: tradiciones, ingredientes y técnicas culinarias.', excerpt_en: 'A journey through global cuisines: traditions, ingredients, and culinary techniques.', categoryId: 'cat-gastronomy', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-gastronomy-history', title_es: 'Historia de la Gastronomía', title_en: 'History of Gastronomy', slug: 'historia-gastronomia',
    content_es: `La historia de la gastronomía se remonta al descubrimiento del fuego, que permitió cocinar los alimentos, haciéndolos más digestibles y seguros. La revolución neolítica (c. 10,000 a.C.) trajo la agricultura y la domesticación de animales, transformando radicalmente la alimentación humana.

Las civilizaciones clásicas desarrollaron tradiciones culinarias sofisticadas. Los antiguos egipcios elaboraban pan y cerveza. Los griegos establecieron el simposio como institución social. Los romanos crearon una cocina refinada con el garum (salsa de pescado fermentado) y banquetes opulentos descritos en De re coquinaria.

La Edad Media europea vio la introducción de especias de Oriente, que transformaron la cocina y motivaron la exploración. El intercambio colombino (1492) trajo productos americanos (tomate, patata, maíz, cacao, chile) que revolucionaron las cocinas del mundo. La cocina moderna nació con la Revolución Francesa y la profesionalización de la cocina. El siglo XX trajo la industria alimentaria, la globalización culinaria y la conciencia gastronómica como fenómeno cultural.`,
    content_en: `The history of gastronomy dates back to the discovery of fire, which allowed cooking food, making it more digestible and safe. The Neolithic revolution (c. 10,000 BC) brought agriculture and animal domestication, radically transforming human nutrition.

Classical civilizations developed sophisticated culinary traditions. Ancient Egyptians made bread and beer. Greeks established the symposium as a social institution. Romans created refined cuisine with garum (fermented fish sauce) and opulent banquets described in De re coquinaria.

The European Middle Ages saw the introduction of Eastern spices that transformed cuisine and motivated exploration. The Columbian exchange (1492) brought American products (tomato, potato, maize, cacao, chili) that revolutionized world cuisines. Modern cooking was born with the French Revolution and the professionalization of cuisine. The 20th century brought the food industry, culinary globalization, and gastronomic awareness as a cultural phenomenon.`,
    excerpt_es: 'Del fuego prehistórico a la cocina molecular: la evolución de la alimentación humana.', excerpt_en: 'From prehistoric fire to molecular cuisine: the evolution of human food.', categoryId: 'cat-gastronomy', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== DESIGN =====
  { id: 'entry-design-history', title_es: 'Historia del Diseño', title_en: 'History of Design', slug: 'historia-diseno',
    content_es: `El diseño es la disciplina que combina creatividad y funcionalidad para resolver problemas y mejorar la experiencia humana. El diseño industrial surgió con la Revolución Industrial, cuando la producción en masa requirió que ingenieros y artistas colaboraran en la forma de los objetos cotidianos.

La Bauhaus (1919-1933) fue la escuela más influyente en la historia del diseño. Bajo la dirección de Walter Gropius, integraba arte, artesanía y tecnología. Figuras como Marcel Breuer, Ludwig Mies van der Rohe y Wassily Kandinsky enseñaron allí. La máxima "la forma sigue a la función" del arquitecto Louis Sullivan se convirtió en el lema del diseño moderno.

El diseño escandinavo (Arne Jacobsen, Alvar Aalto) destacó por su funcionalismo humanizado. El diseño italiano (Gio Ponti, Joe Colombo) por su audacia y estilo. El diseño japonés (Kenji Ekuan, Naoto Fukasawa) por su minimalismo y atención al detalle. El diseño gráfico evolucionó con la tipografía, el cartelismo, la identidad corporativa y el diseño digital. Hoy el diseño abarca desde interfaces de usuario hasta diseño de servicios y pensamiento de diseño.`,
    content_en: `Design is the discipline that combines creativity and functionality to solve problems and improve human experience. Industrial design emerged with the Industrial Revolution, when mass production required engineers and artists to collaborate on the form of everyday objects.

The Bauhaus (1919-1933) was the most influential school in design history. Under Walter Gropius's direction, it integrated art, craft, and technology. Figures like Marcel Breuer, Ludwig Mies van der Rohe, and Wassily Kandinsky taught there. Architect Louis Sullivan's maxim "form follows function" became the motto of modern design.

Scandinavian design (Arne Jacobsen, Alvar Aalto) was noted for its humanized functionalism. Italian design (Gio Ponti, Joe Colombo) for its boldness and style. Japanese design (Kenji Ekuan, Naoto Fukasawa) for its minimalism and attention to detail. Graphic design evolved with typography, poster art, corporate identity, and digital design. Today design encompasses everything from user interfaces to service design and design thinking.`,
    excerpt_es: 'La disciplina que da forma a los objetos y experiencias: de la Bauhaus al diseño digital.', excerpt_en: 'The discipline that shapes objects and experiences: from the Bauhaus to digital design.', categoryId: 'cat-design', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== PERFORMING ARTS =====
  { id: 'entry-theatre-history', title_es: 'Historia del Teatro', title_en: 'History of Theatre', slug: 'historia-teatro',
    content_es: `El teatro es una de las formas artísticas más antiguas, nacida en la Antigua Grecia alrededor del siglo VI a.C. a partir de los rituales en honor a Dionisos. Los grandes trágicos griegos —Esquilo, Sófocles y Eurípides— establecieron las bases del drama occidental con obras que exploran el destino, la justicia y la condición humana.

El teatro romano continuó la tradición griega con Séneca y Plauto. La Edad Media desarrolló el teatro religioso (misterios, moralidades). El Renacimiento inglés produjo a William Shakespeare, el dramaturgo más importante de la historia, autor de Hamlet, Romeo y Julieta, Macbeth y El rey Lear. El Siglo de Oro español trajo a Lope de Vega, Calderón de la Barca y Cervantes.

El teatro moderno experimentó con el realismo (Ibsen, Chéjov), el teatro del absurdo (Beckett, Ionesco), el épico (Brecht) y el teatro político. El teatro contemporáneo explora nuevas formas, incluyendo teatro inmersivo, performance, teatro documental y la fusión con otras disciplinas como la danza, el circo y los medios digitales.`,
    content_en: `Theatre is one of the oldest art forms, born in Ancient Greece around the 6th century BC from rituals in honor of Dionysus. The great Greek tragedians —Aeschylus, Sophocles, and Euripides— established the foundations of Western drama with works exploring fate, justice, and the human condition.

Roman theatre continued the Greek tradition with Seneca and Plautus. The Middle Ages developed religious theatre (mysteries, moralities). The English Renaissance produced William Shakespeare, the most important playwright in history, author of Hamlet, Romeo and Juliet, Macbeth, and King Lear. The Spanish Golden Age brought Lope de Vega, Calderón de la Barca, and Cervantes.

Modern theatre experimented with realism (Ibsen, Chekhov), theatre of the absurd (Beckett, Ionesco), epic theatre (Brecht), and political theatre. Contemporary theatre explores new forms, including immersive theatre, performance, documentary theatre, and fusion with other disciplines such as dance, circus, and digital media.`,
    excerpt_es: 'De los rituales dionisíacos a Shakespeare y el teatro contemporáneo: la palabra hecha escena.', excerpt_en: 'From Dionysian rituals to Shakespeare and contemporary theatre: the word made scene.', categoryId: 'cat-performing-arts', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
  { id: 'entry-dance-history', title_es: 'Historia de la Danza', title_en: 'History of Dance', slug: 'historia-danza',
    content_es: `La danza es la madre de todas las artes, una expresión universal del ser humano que combina movimiento corporal, ritmo y emoción. Las pinturas rupestres prehistóricas ya representan figuras danzantes. Cada cultura ha desarrollado sus propias formas de danza para celebrar, ritualizar y comunicar.

El ballet clásico nació en las cortes del Renacimiento italiano y se desarrolló en la corte francesa de Luis XIV, quien fundó la Academia Real de Danza (1661). Obras como El lago de los cisnes, El cascanueces y La bella durmiente de Tchaikovsky son pilares del repertorio. Bailarinas como Anna Pavlova y Rudolf Nureyev elevaron el ballet a arte supremo.

La danza moderna (Isadora Duncan, Martha Graham) rompió con las convenciones del ballet. La danza contemporánea (Pina Bausch, Merce Cunningham) exploró nuevas formas de expresión. Las danzas urbanas (breakdance, hip-hop) surgieron de la cultura callejera. Danzas tradicionales como el flamenco, la salsa, el tango y el bharatanatyam mantienen viva la diversidad coreográfica mundial.`,
    content_en: `Dance is the mother of all arts, a universal human expression combining body movement, rhythm, and emotion. Prehistoric cave paintings already depict dancing figures. Every culture has developed its own dance forms to celebrate, ritualize, and communicate.

Classical ballet was born in Italian Renaissance courts and developed in the French court of Louis XIV, who founded the Royal Academy of Dance (1661). Works like Tchaikovsky's Swan Lake, The Nutcracker, and The Sleeping Beauty are repertoire mainstays. Dancers like Anna Pavlova and Rudolf Nureyev elevated ballet to supreme art.

Modern dance (Isadora Duncan, Martha Graham) broke with ballet conventions. Contemporary dance (Pina Bausch, Merce Cunningham) explored new forms of expression. Urban dances (breakdancing, hip-hop) emerged from street culture. Traditional dances like flamenco, salsa, tango, and bharatanatyam keep global choreographic diversity alive.`,
    excerpt_es: 'El lenguaje universal del cuerpo: del ballet clásico a la danza contemporánea y urbana.', excerpt_en: 'The universal language of the body: from classical ballet to contemporary and urban dance.', categoryId: 'cat-performing-arts', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },

  // ===== PHOTOGRAPHY =====
  { id: 'entry-photography-history', title_es: 'Historia de la Fotografía', title_en: 'History of Photography', slug: 'historia-fotografia',
    content_es: `La fotografía es el arte y la técnica de obtener imágenes duraderas mediante la acción de la luz. La primera fotografía permanente fue creada por Joseph Nicéphore Niépce en 1826 o 1827, utilizando una cámara oscura y una placa de peltre recubierta de betún. El daguerrotipo de Louis Daguerre (1839) popularizó la fotografía.

La fotografía evolucionó rápidamente: placas de vidrio, carretes de película (Eastman Kodak, 1888), fotografía en color (Autochrome, 1907), fotografía instantánea (Polaroid, 1948) y finalmente la fotografía digital (1990s). Cada avance democratizó el acceso a la captura de imágenes.

Grandes fotógrafos han documentado la historia y elevado la fotografía a arte: Henri Cartier-Bresson (fotografía callejera), Ansel Adams (paisajes), Robert Capa (fotografía de guerra), Dorothea Lange (documental social), Annie Leibovitz (retrato) y Sebastião Salgado (fotografía humanitaria). La fotografía digital y los smartphones han hecho de la fotografía el medio visual más democrático y ubicuo de la historia.`,
    content_en: `Photography is the art and technique of obtaining durable images through the action of light. The first permanent photograph was created by Joseph Nicéphore Niépce in 1826 or 1827, using a camera obscura and a pewter plate coated with bitumen. Louis Daguerre's daguerreotype (1839) popularized photography.

Photography evolved rapidly: glass plates, roll film (Eastman Kodak, 1888), color photography (Autochrome, 1907), instant photography (Polaroid, 1948), and finally digital photography (1990s). Each advance democratized access to image capture.

Great photographers have documented history and elevated photography to art: Henri Cartier-Bresson (street photography), Ansel Adams (landscapes), Robert Capa (war photography), Dorothea Lange (social documentary), Annie Leibovitz (portrait), and Sebastião Salgado (humanitarian photography). Digital photography and smartphones have made photography the most democratic and ubiquitous visual medium in history.`,
    excerpt_es: 'De Niépce al smartphone: la evolución de la captura de imágenes.', excerpt_en: 'From Niépce to the smartphone: the evolution of image capture.', categoryId: 'cat-photography', realityStatus: 'historical', imageUrl: '', createdAt: now, updatedAt: now },
]

export const newArtsSubsections: SeedSubsection[] = []
