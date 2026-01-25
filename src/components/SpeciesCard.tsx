import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
interface SpeciesCardProps {
  name: string;
  scientificName: string;
  description: string;
  image: string | null;
  category: string;
  index: number;
}
export function SpeciesCard({
  name,
  scientificName,
  description,
  image,
  category,
  index
}: SpeciesCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      className="group relative h-[400px] w-full overflow-hidden rounded-xl cursor-pointer">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`
        }} />


      {/* Gradient Overlay - Always visible but deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-depth-blue)] via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <span className="mb-2 inline-block rounded-full bg-[var(--color-sunset)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white w-fit">
          {category}
        </span>

        <h3 className="font-serif text-2xl font-bold leading-tight mb-1">
          {name}
        </h3>

        <p className="font-serif text-sm italic text-gray-300 mb-4 opacity-90">
          {scientificName}
        </p>

        {/* Hidden Content - Reveals on Hover */}
        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
          <p className="mb-4 text-sm leading-relaxed text-gray-200">
            {description}
          </p>
          <div className="flex items-center text-[var(--color-sunset)] font-medium text-sm">
            <span>Learn more</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>);

}