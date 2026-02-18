// Static mapping to ensure Tailwind generates these classes
const STAR_ANIMATION_CLASSES = {
  'star-twinkle': 'motion-safe:animate-star-twinkle',
  'star-pop': 'motion-safe:animate-star-pop',
  'star-burst': 'motion-safe:animate-star-burst',
};

export function CurtainStarSparkleLayer() {
  // Generate star sparkles with varied positions, delays, and sizes
  const stars = Array.from({ length: 25 }, (_, i) => {
    const animationTypes: Array<keyof typeof STAR_ANIMATION_CLASSES> = ['star-twinkle', 'star-pop', 'star-burst'];
    const animationType = animationTypes[i % 3];
    const size = i % 4 === 0 ? 'w-3 h-3' : i % 4 === 1 ? 'w-4 h-4' : i % 4 === 2 ? 'w-5 h-5' : 'w-6 h-6';
    
    return {
      id: i,
      left: `${5 + (i * 3.8)}%`,
      top: `${10 + (i * 3.5)}%`,
      delay: `${i * 0.04}s`,
      duration: `${0.8 + (i % 5) * 0.15}s`,
      animationClass: STAR_ANIMATION_CLASSES[animationType],
      size,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Star sparkles with varied animations */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className={`absolute ${star.animationClass} ${star.size}`}
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-romantic-accent drop-shadow-lg"
          >
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
