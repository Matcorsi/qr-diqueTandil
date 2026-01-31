import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function Hero() {
  // Ripple effect circles
  const ripples = [0, 1, 2];
  return (
    <section className="relative h-screen w-full overflow-hidden">

        {/* Texto "Auspician" */}
        <div className="absolute top-5 inset-x-0 flex flex-col items-center z-20">
          <span className="text-gray-200 font-medium text-sm">Auspician</span>
        </div>

        {/* Logos */}
        <div className="absolute top-10 inset-x-0 flex items-center justify-center gap-4 sm:gap-6 z-20">
          <a
            href="https://www.instagram.com/valledelosciervos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo1.png"
              alt="Logo 1"
              className="h-12 sm:h-16 w-auto"
            />
          </a>

          <a
            href="https://www.instagram.com/granja_los_pibes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo2.png"
              alt="Logo 2"
              className="h-12 sm:h-16 w-auto"
            />
          </a>
        </div>


      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
          "url('/images/dique.png')"
        }}>

        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Water Ripple Animation Overlay */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-30 pointer-events-none">
        {ripples.map((i) =>
        <motion.div
          key={i}
          className="absolute border border-white/40 rounded-full"
          initial={{
            width: '0%',
            height: '0%',
            opacity: 0.8
          }}
          animate={{
            width: ['0%', '150%'],
            height: ['0%', '150%'],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2.5,
            ease: 'linear'
          }}
          style={{
            aspectRatio: '1/1'
          }} />

        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.5
          }}>

          <span className="mb-4 block text-lg font-medium tracking-[0.2em] uppercase text-[var(--color-sand)]">
            Donde la naturaleza vive
          </span>
          <h1 className="mb-6 font-serif text-6xl md:text-8xl font-bold tracking-tight text-shadow-lg">
            Lago del Fuerte
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl font-light text-gray-100 md:text-2xl text-shadow-sm">
            Un entorno natural para disfrutar, respetar y proteger, en convivencia con la fauna y el paisaje.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: '#E5934D'
            }}
            whileTap={{
              scale: 0.95
            }}
            className="rounded-full bg-[var(--color-sunset)] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors"
            onClick={() =>
            document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })
            }>

            Conocé más
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-0 w-full flex justify-center text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <ChevronDown className="h-8 w-8 opacity-80" />
      </motion.div>
    </section>);

}