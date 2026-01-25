interface WaveSectionProps {
  position?: 'top' | 'bottom';
  color?: string;
  className?: string;
  variant?: 'gentle' | 'choppy' | 'deep';
}
export function WaveSection({
  position = 'bottom',
  color = '#ffffff',
  className = '',
  variant = 'gentle'
}: WaveSectionProps) {
  // Different path definitions for variety
  const paths = {
    gentle:
    'M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z',
    choppy:
    'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    deep: 'M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
  };
  const isTop = position === 'top';
  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-none z-10 ${isTop ? 'top-0' : 'bottom-0'} ${className}`}>

      <svg
        className={`relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] ${isTop ? 'rotate-180' : ''}`}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none">

        <path fill={color} fillOpacity="1" d={paths[variant]} />
      </svg>
    </div>);

}