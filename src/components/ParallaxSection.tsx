import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
interface ParallaxSectionProps {
  backgroundImage: string;
  children?: React.ReactNode;
  height?: string;
  overlayOpacity?: number;
  id?: string;
}
export function ParallaxSection({
  backgroundImage,
  children,
  height = 'min-h-screen',
  overlayOpacity = 0.4,
  id
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative flex items-center justify-center overflow-hidden ${height}`}
    >
      {/* Parallax Background */}
      <motion.img
        src={backgroundImage}
        alt=""
        style={{ y: yBg }}
        className="absolute inset-0 z-0 h-[120%] w-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'var(--color-depth-blue)',
          opacity: overlayOpacity
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}