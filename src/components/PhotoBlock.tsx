import { motion } from 'framer-motion';
interface PhotoBlockProps {
  image: string;
  title: string;
  content: string;
  align?: 'left' | 'right';
  subtitle?: string;
}
export function PhotoBlock({
  image,
  title,
  content,
  align = 'left',
  subtitle
}: PhotoBlockProps) {
  const isLeft = align === 'left';
  return (
    <div className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-center ${isLeft ? '' : 'lg:flex-row-reverse'}`}>

          {/* Image Block */}
          <motion.div
            initial={{
              opacity: 0,
              x: isLeft ? -50 : 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="w-full lg:w-1/2 mb-8 lg:mb-0 relative z-0">

            <div className="relative aspect-[4/5] md:aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover" />

              {/* Decorative border outline */}
              <div className="absolute inset-4 border border-white/30 rounded-sm pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Block - Overlapping */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className={`w-full lg:w-7/12 relative z-10 ${isLeft ? 'lg:-ml-20' : 'lg:-mr-20'}`}>

            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-[var(--color-lake-green)]">
              {subtitle &&
              <span className="block text-[var(--color-lake-green)] font-medium tracking-widest text-sm uppercase mb-3">
                  {subtitle}
                </span>
              }
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-depth-blue)] mb-6">
                {title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{content}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}