import { useState } from 'react';
import { Hero } from '../components/Hero';
import { ParallaxSection } from '../components/ParallaxSection';
import { WaveSection } from '../components/WaveSection';
import { SpeciesCard } from '../components/SpeciesCard';
import { PhotoBlock } from '../components/PhotoBlock';
import { Utensils, Trees, Bike, AlertTriangle, Phone, ShieldAlert} from 'lucide-react';
export function LagoDique() {

  const wildlife = [
  // 🐦 AVES ACUÁTICAS
  {
    name: 'Gallereta',
    scientificName: 'Fulica armillata',
    description:
      'Ave acuática de plumaje negro, con pico y patas amarillas. Se alimenta de plantas y pequeños animales acuáticos. Común en lagos y ríos de la región.',
    image: '/images/animales/gallareta.jpg',
    category: 'Aves acuáticas'
  },
  {
    name: 'Pato barcino',
    scientificName: 'Anas flavirostris',
    description:
      'Pato pequeño de plumaje marrón y pico amarillo. Se alimenta de plantas y pequeños invertebrados. Es una especie migratoria.',
    image: '/images/animales/patoBarcino.jpg',
    category: 'Aves acuáticas'
  },
  {
    name: 'Pato maicero',
    scientificName: 'Anas georgica',
    description:
      'Pato de plumaje marrón y cuello largo. Se alimenta de plantas y granos. Es común en la región.',
    image: '/images/animales/patoMaicero.jpg',
    category: 'Aves acuáticas'
  },
  {
    name: 'Pato sirirí pampa',
    scientificName: 'Dendrocygna viduata',
    description:
      'Pato de plumaje castaño con la cabeza parcialmente blanca. Se alimenta de plantas y granos.',
    image: '/images/animales/patoSiririPampa.jpg',
    category: 'Aves acuáticas'
  },
  {
    name: 'Macá grande',
    scientificName: 'Podiceps major',
    description:
      'Ave acuática de cuello largo y plumaje marrón. Se alimenta de peces y pequeños animales acuáticos.',
    image: '/images/animales/macaGrande.jpg',
    category: 'Aves acuáticas'
  },
  {
    name: 'Garzita blanca',
    scientificName: 'Egretta thula',
    description:
      'Ave acuática de plumaje blanco y patas largas. Se alimenta de peces y pequeños animales acuáticos.',
    image: '/images/animales/garzitaBlanca.jpg',
    category: 'Aves acuáticas'
  },
  {
    name: 'Chiflón',
    scientificName: 'Syrigma sibilatrix',
    description:
      'Ave semiacuática de plumaje gris, pecho amarillento y patas largas. Se alimenta de peces y pequeños animales.',
    image: '/images/animales/chiflon.jpg',
    category: 'Aves acuáticas'
  },
  {
    name: 'Biguá',
    scientificName: 'Phalacrocorax brasilianus',
    description:
      'Ave acuática de plumaje negro y cuello largo. Se alimenta de peces y pequeños animales acuáticos.',
    image: '/images/animales/cormoran.jpg',
    category: 'Aves acuáticas'
  },
  {
    name: 'Cuervillo cara pelada',
    scientificName: 'Phimosus infuscatus',
    description:
      'Ave acuática de plumaje negro y pico largo. Se alimenta de invertebrados e insectos acuáticos.',
    image: '/images/animales/cuervilloCaraPelada.jpg',
    category: 'Aves acuáticas'
  },

  // 🐦 AVES TERRESTRES / DE ORILLA
  {
    name: 'Tero',
    scientificName: 'Vanellus chilensis',
    description:
      'Ave de plumaje blanco y negro, conocida por su canto característico. Se alimenta de insectos.',
    image: '/images/animales/tero.jpg',
    category: 'Aves'
  },
  {
    name: 'Benteveo',
    scientificName: 'Pitangus sulphuratus',
    description:
      'Ave de colores marrón, amarillo y blanco. Se alimenta de insectos y pequeños invertebrados.',
    image: '/images/animales/benteveo.jpg',
    category: 'Aves'
  },
  {
    name: 'Calandria',
    scientificName: 'Mimus saturninus',
    description:
      'Ave de plumaje gris y blanco, famosa por su canto melodioso. Se alimenta de insectos y frutas.',
    image: '/images/animales/calandria.jpg',
    category: 'Aves'
  },
  {
    name: 'Hornero',
    scientificName: 'Furnarius rufus',
    description:
      'Ave de plumaje marrón, conocida por sus nidos de barro. Se alimenta de insectos.',
    image: '/images/animales/hornero.jpg',
    category: 'Aves'
  },
  {
    name: 'Cata común',
    scientificName: 'Myiopsitta monachus',
    description:
      'Ave de plumaje verde y gris, muy inteligente y sociable. Se alimenta de frutas, semillas y granos.',
    image: '/images/animales/cataComun.jpg',
    category: 'Aves'
  },
  {
    name: 'Chimango',
    scientificName: 'Milvago chimango',
    description:
      'Ave rapaz de plumaje marrón y blanco. Se alimenta de carroña y pequeños animales.',
    image: '/images/animales/chimango.jpg',
    category: 'Aves'
  },
  {
    name: 'Carancho',
    scientificName: 'Caracara plancus',
    description:
      'Ave de rapiña robusta y oportunista. Se alimenta de carroña y pequeños animales.',
    image: '/images/animales/carancho.jpg',
    category: 'Aves'
  },

  // 🦊 MAMÍFEROS
  {
    name: 'Zarigüeya (Comadreja overa)',
    scientificName: 'Didelphis albiventris',
    description:
      'Marsupial de pelaje gris y blanco. Se alimenta de frutas, insectos y pequeños animales.',
    image: '/images/animales/zarigueya.jpg',
    category: 'Mamíferos'
  },
  {
    name: 'Zorro gris',
    scientificName: 'Lycalopex gymnocercus',
    description:
      'Cánido de pelaje gris. Se alimenta de pequeños mamíferos, frutas e insectos.',
    image: '/images/animales/zorroGris.jpeg',
    category: 'Mamíferos'
  },
  {
    name: 'Coipo',
    scientificName: 'Myocastor coypus',
    description:
      'Roedor semiacuático de pelaje marrón. Se alimenta de plantas acuáticas y raíces.',
    image: '/images/animales/coipo.jpg',
    category: 'Mamíferos'
  },
  {
    name: 'Carpincho',
    scientificName: 'Hydrochoerus hydrochaeris',
    description:
      'El roedor más grande del mundo. Semiacuático, se alimenta de pastos y plantas acuáticas.',
    image: '/images/animales/carpincho.jpg',
    category: 'Mamíferos'
  },

  // 🐟 PECES
  {
    name: 'Pejerrey',
    scientificName: 'Odontesthes bonariensis',
    description:
      'Pez de cuerpo alargado y escamas plateadas. Se alimenta de zooplancton y pequeños crustáceos.',
    image: '/images/animales/pejerrey.jpg',
    category: 'Peces'
  },
  {
    name: 'Chata',
    scientificName: 'Pseudocorynopoma doriae',
    description:
      'Pez pequeño de cuerpo aplanado. Se alimenta de insectos y pequeños crustáceos.',
    image: '/images/animales/chata.jpg',
    category: 'Peces'
  },
  {
    name: 'Mojarra',
    scientificName: 'Cheirodon interruptus',
    description:
      'Pez pequeño de escamas plateadas. Se alimenta de algas y pequeños invertebrados.',
    image: '/images/animales/mojarra.jpg',
    category: 'Peces'
  },
  {
    name: 'Bagre',
    scientificName: 'Rhamdia quelen',
    description:
      'Pez de cuerpo robusto y barbillas largas. Se alimenta de peces, insectos y crustáceos.',
    image: '/images/animales/bagre.jpg',
    category: 'Peces'
  },

  // 🐸 ANFIBIOS
  {
    name: 'Sapo común',
    scientificName: 'Rhinella arenarum',
    description:
      'Anfibio de cuerpo robusto y piel verrugosa. Se alimenta de insectos y pequeños invertebrados.',
    image: '/images/animales/sapo.jpg',
    category: 'Anfibios'
  },
  {
    name: 'Rana del zarzal',
    scientificName: 'Boana pulchella',
    description:
      'Rana de cuerpo delgado y piel lisa. Se alimenta de insectos y pequeños invertebrados.',
    image: '/images/animales/zarzal.jpg',
    category: 'Anfibios'
  },

  // 🦎 REPTILES
  {
    name: 'Lagarto overo',
    scientificName: 'Salvator merianae',
    description:
      'Lagarto grande de color negro y blanco. Se alimenta de pequeños vertebrados e insectos.',
    image: '/images/animales/lagarto.jpg',
    category: 'Reptiles'
  },
  {
    name: 'Culebra verde y negra',
    scientificName: 'Erythrolamprus poecilogyrus',
    description:
      'Serpiente no venenosa de color verde y negro. Se alimenta de pequeños vertebrados.',
    image: '/images/animales/culebra.jpg',
    category: 'Reptiles'
  },
  {
    name: 'Culebra del pastizal',
    scientificName: 'Philodryas patagoniensis',
    description:
      'Serpiente de color verdoso. Es venenosa, pero no representa riesgo médico significativo.',
    image: '/images/animales/culebraPastizal.jpg',
    category: 'Reptiles'
  },
  {
    name: 'Yarará Grande',
    scientificName: 'Bothrops alternatus',
    description:
      'Serpiente de gran tamaño y venenosa, de cuerpo marrón con manchas oscuras. Se alimenta principalmente de pequeños mamíferos y aves.',
    image: '/images/animales/yarara.jpg',
    category: 'Reptiles'
  }
];

const categories = [
    'Todas',
    'Aves acuáticas',
    'Aves',
    'Mamíferos',
    'Peces',
    'Anfibios',
    'Reptiles'
  ];

  const [activeCategory, setActiveCategory] = useState('Todas');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredWildlife =
    activeCategory === 'Todas'
      ? wildlife
      : wildlife.filter(
          (species) => species.category === activeCategory
        );

  const visibleWildlife =
    activeCategory === 'Todas'
      ? filteredWildlife.slice(0, visibleCount)
      : filteredWildlife;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  return (
    <div className="min-h-screen bg-[var(--color-beach)]/20 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section - Parallax */}
      <div id="about" className="relative">
        <WaveSection
          position="top"
          color="#ffffff"
          variant="gentle"
          className="-mt-1 z-20" />


        <ParallaxSection
          backgroundImage="/images/dique.jpg"
          height="min-h-[80vh]">

          <div className="container mx-auto px-4 py-24">
            <div className="max-w-2xl bg-white/90 backdrop-blur-md p-10 rounded-lg shadow-2xl ml-auto border-l-8 border-[var(--color-lake-green)]">
              
              <h2 className="text-4xl font-serif font-bold text-[var(--color-depth-blue)] mb-6">
                Historia y naturaleza del Lago
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                El Lago del Fuerte de Tandil es un embalse artificial, su construccion comenzo en 1957 
                bajo la direccion del ingenireo <strong>Pedro
                Picanet Dubost</strong>. Se inaguro el 19 de enero de 1962
                con el objetivo de abastecer de agua a la ciudad y controlar las
                inundaciones. Con el paso del tiempo, este espacio se transformó en
                un lugar emblemático, donde la historia y la naturaleza conviven en
                equilibrio.
              </p>

              {/* Imagen SOLO para mobile */}
              <img
                src="/images/dique.jpg"
                alt="Lago del Fuerte de Tandil"
                className="block md:hidden w-full h-3/4 rounded-lg mb-6"
              />

              <p className="text-lg text-gray-700 leading-relaxed">
                Hoy, el lago es un refugio para una gran diversidad de fauna y flora
                local. Aves acuáticas, mamíferos, peces, anfibios y reptiles encuentran
                aquí un ambiente propicio para desarrollarse, recordándonos la
                importancia de disfrutar este entorno con respeto y protegerlo entre
                todos.
              </p>

            </div>
          </div>

        </ParallaxSection>

        <WaveSection position="bottom" color="#FAFAF9" variant="deep" />
      </div>

      {/* Wildlife Section */}
      <section className="py-24 bg-[#FAFAF9] relative">
        <div className="container mx-auto px-4">

          {/* Title */}
          <div className="text-center mb-16">
            <span className="text-[var(--color-lake-green)] font-medium tracking-widest uppercase">
              Biodiversidad
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-depth-blue)] mt-2">
              Vida silvestre del lago
            </h2>
            <div className="w-24 h-1 bg-[var(--color-sunset)] mx-auto mt-6 rounded-full" />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    activeCategory === category
                      ? 'bg-[var(--color-lake-green)] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleWildlife.map((species, idx) => (
              <SpeciesCard
                key={`${species.name}-${idx}`}
                index={idx}
                {...species}
              />
            ))}
          </div>

          {/* Ver más */}
          {activeCategory === 'Todas' &&
            visibleCount < filteredWildlife.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="px-6 py-3 rounded-xl bg-[var(--color-lake-green)] text-white font-medium hover:opacity-90 transition"
                >
                  Ver más
                </button>
              </div>
            )}

        </div>
      </section>

       
      <section className="py-24 bg-[var(--color-depth-blue)] text-white relative">
        <div className="container mx-auto px-4 max-w-5xl">

          <div className="text-center mb-5">
            <span className="uppercase tracking-widest text-sm text-[var(--color-sunset)] font-medium">
              Información importante
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3">
              Yarará Grande
            </h2>
            <p className="mt-4 text-lg text-white/80 italic">
              <span className="font-medium">Bothrops alternatus</span>
            </p>
          </div>
      
          <div className="w-24 h-1 bg-[var(--color-sunset)] mx-auto mb-2 rounded-full" />

          <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
            <img
              src="/images/yarara.jpg"
              alt="Yarará Grande"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg leading-relaxed mb-8 text-white/90">
              La <strong>Yarará Grande</strong> es una serpiente de gran tamaño 
              , de cuerpo marrón con manchas oscuras.
              Se alimenta de pequeños mamíferos, principalmente ratones<strong> (controladora de plagas)</strong>, por eso su presencia es fundamental en el ambiente.
      
              <br/><br />
              Es la <strong>única especie venenosa de importancia médica </strong>
              presente en la región, por lo que conocerla y respetarla es 
              fundamental para la convivencia con la fauna local.
            </p>
 
            <div className="h-px bg-white/20 my-10" />

            <h3 className="flex items-center gap-3 text-2xl font-serif font-bold mb-6">
              <ShieldAlert className="w-12 h-12 text-[var(--color-lake-green)]" />
              ¿Qué hacer en caso de mordedura?
            </h3>


            <ol className="space-y-4 text-white/90 text-base leading-relaxed">
              <li>
                <strong>1. Mantener la calma:</strong> el pánico acelera el ritmo
                cardíaco y favorece la diseminación del veneno.
              </li>
              <li>
                <strong>2. Identificar la serpiente:</strong> si es posible,
                describirla al personal médico.
              </li>
              <li>
                <strong>3. Llamar a emergencias</strong> o solicitar ayuda inmediata.
              </li>
            </ol>

            <div className="mt-10">
              <h4 className="flex items-center gap-2 text-xl font-serif font-bold mb-4 text-[var(--color-sunset)]">
                <AlertTriangle className="w-10 h-10 text-[var(--color-sunset)] shrink-0" />
                Lo que NO hay que hacer ante una mordedura
              </h4>
              <ul className="list-disc list-inside space-y-2 text-white/85">
                <li>No intentar succionar el veneno.</li>
                <li>No aplicar torniquetes.</li>
                <li>No usar hielo ni calor.</li>
                <li>No cortar la herida.</li>
              </ul>
            </div>

            <div className="mt-10 rounded-xl border border-[var(--color-sunset)]/40 bg-[var(--color-sunset)]/20 p-6">
              <p className="mb-4 font-medium text-white leading-relaxed">
                Buscar atención médica lo antes posible.
                <br />
                Trasladar al herido de inmediato a un hospital es fundamental.
              </p>

              <div className="flex items-center gap-2 font-semibold text-white">
                <Phone className="w-5 h-5 text-[var(--color-sunset)] shrink-0" />
                <span>Emergencias: 107</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Visitor Tips - Parallax */}
      <div className="relative mt-20">
        <WaveSection
          position="top"
          color="#FAFAF9"
          variant="choppy"
          className="-mt-1 z-20" />


        <ParallaxSection
          backgroundImage="/images/foto5.jpg"
          height="min-h-[100vh]"
          overlayOpacity={0.5}>

          <div className="container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tip Cards */}
              {[
                {
                  icon: Utensils,
                  title: 'Gastronomía y cafés',
                  image: '/images/foto1.jpg',
                  text: 'En los alrededores del lago hay restaurantes, bares y cafeterías ideales para almorzar, merendar o disfrutar de una cerveza artesanal con vista al agua.'
                },
                {
                  icon: Trees,
                  title: 'Espacios verdes públicos',
                  image: '/images/foto2.jpg',
                  text: 'Amplias áreas verdes invitan a tomar mate, descansar bajo los árboles o pasar la tarde en familia disfrutando del entorno natural.'
                },
                {
                  icon: Bike,
                  title: 'Actividades al aire libre',
                  image: '/images/foto3.jpg',
                  text: 'Ciclismo, caminatas, kayak y deportes recreativos hacen del lago un punto ideal para disfrutar del aire libre y el movimiento.'
                }
              ].map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Imagen más protagonista */}
                  <div className="h-64 md:h-72 w-full overflow-hidden">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-8">
                    {/* Título con icono */}
                    <h3 className="flex items-center gap-3 text-xl font-serif font-bold text-[var(--color-depth-blue)] mb-4">
                      <tip.icon className="h-6 w-6 text-[var(--color-sunset)] flex-shrink-0" />
                      {tip.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {tip.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        <WaveSection position="bottom" color="#ffffff" variant="gentle" />
      </div>

      {/* Recommendations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold text-[var(--color-depth-blue)]">
              Conocer para cuidar y conservar.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Propuestas pensadas para conectar con la naturaleza, disfrutar del entorno
              y preservar el equilibrio del lago y su biodiversidad.
            </p>
          </div>
        </div>

        <PhotoBlock
          image="/images/foto4.jpg"
          title="No alimentar a la fauna silvestre"
          subtitle="Cuidar también es no intervenir"
          content={
            <>
              Alimentar a los animales silvestres puede alterar su comportamiento natural,
              volverlos dependientes de la comida humana y aumentar el riesgo de enfermedades.
              Entre las consecuencias se encuentran la pérdida del miedo a los humanos,
              la proliferación de especies no deseadas, la propagación de enfermedades
              y la alteración del ecosistema del lago.

              <span className="block mt-4 font-semibold text-red-400">
                Alimentar o mascotizar fauna silvestre en la Argentina está prohibido
                (Ley Nacional 22.421).
              </span>
            </>
          }
          align="left"
        />

        <PhotoBlock
          image="/images/perro.jpg"
          title="Perros con correa"
          subtitle="Una medida simple que protege a todos"
          content={
            <>
              Es obligatorio llevar a los perros con correa dentro del predio del lago.
              Esta medida protege a la fauna silvestre y previene el contagio de enfermedades.
              Los perros sueltos pueden transmitir parvovirus, leptospirosis y enfermedad de Lyme,
              además de atacar aves y pequeños mamíferos, afectando el equilibrio natural.

              <span className="block mt-4 font-semibold text-red-400">
                Ordenanza Municipal N° 17.269 — Uso obligatorio de correa.
              </span>

              <p className="mt-3 font-medium">
                Colaborá llevando a tu perro con correa para un paseo seguro y responsable.
              </p>
            </>
          }
          align="right"
        />


        <PhotoBlock
          image="/images/foto6.jpg"
          title="Salud y convivencia"
          subtitle="Prevención de enfermedades"
          content="La interacción entre humanos y fauna silvestre puede concluir en  enfermedades.
          Algunas zoonosis incluyen la rabia, la leptospirosis y la enfermedad de Lyme,
          mientras que otras pueden transmitirse de humanos a animales, como la gripe.
          Para prevenir riesgos, evitá tocar fauna silvestre, respetá los hábitats,
          no alimentes a los animales, vacuna tus mascotas y mantené una correcta higiene luego del contacto
          con el entorno natural."
          align="left"
        />



      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-depth-blue)] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full opacity-10">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="font-serif text-3xl font-bold mb-2">
                Lago del Fuerte
              </h2>
              <p className="text-[var(--color-sand)] opacity-80">
                Donde la naturaleza vive.
              </p>
            </div>

            <div className="flex items-center space-x-6 z-20 gap-4">
              <a href="https://www.instagram.com/valledelosciervos" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo1.png" alt="Logo 1" className="h-16 w-auto" />
              </a>
              <a href="https://www.instagram.com/granja_los_pibes" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo2.png" alt="Logo 2" className="h-16 w-auto" />
              </a>
            </div>

          </div> 

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Lago del Fuerte - Tandil.
              Todos los derechos reservados. Desarrollado por <a href='matco-software.vercel.app'>Matco</a>.
            </p>
          </div>
        </div>
      </footer>

    </div>);

}
