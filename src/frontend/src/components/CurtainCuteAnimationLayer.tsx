import { CurtainStarSparkleLayer } from './CurtainStarSparkleLayer';

interface CurtainCuteAnimationLayerProps {
  isActive: boolean;
  reducedMotion?: boolean;
}

// Static mapping to ensure Tailwind generates these classes
const HEART_ANIMATION_CLASSES = {
  'heart-float': 'motion-safe:animate-heart-float',
  'heart-float-zigzag': 'motion-safe:animate-heart-float-zigzag',
  'heart-float-spiral': 'motion-safe:animate-heart-float-spiral',
};

const SPARKLE_ANIMATION_CLASSES = {
  'sparkle-twinkle': 'motion-safe:animate-sparkle-twinkle',
  'sparkle-pop': 'motion-safe:animate-sparkle-pop',
  'sparkle-wobble': 'motion-safe:animate-sparkle-wobble',
};

const DRIFT_ANIMATION_CLASSES = {
  'drift-1': 'motion-safe:animate-drift-1',
  'drift-2': 'motion-safe:animate-drift-2',
  'drift-3': 'motion-safe:animate-drift-3',
  'drift-4': 'motion-safe:animate-drift-4',
  'drift-bounce': 'motion-safe:animate-drift-bounce',
  'drift-swirl': 'motion-safe:animate-drift-swirl',
};

export function CurtainCuteAnimationLayer({ isActive, reducedMotion = false }: CurtainCuteAnimationLayerProps) {
  if (!isActive) return null;

  // If reduced motion is enabled, show a minimal static overlay
  if (reducedMotion) {
    return (
      <div className="fixed inset-0 z-40 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-radial from-romantic-heart/10 to-transparent opacity-50" />
      </div>
    );
  }

  // Generate floating hearts with varied positions, delays, sizes, and animation styles
  const hearts = Array.from({ length: 18 }, (_, i) => {
    const animationTypes: Array<keyof typeof HEART_ANIMATION_CLASSES> = ['heart-float', 'heart-float-zigzag', 'heart-float-spiral'];
    const animationType = animationTypes[i % 3];
    const size = i % 3 === 0 ? 'scale-75' : i % 3 === 1 ? 'scale-100' : 'scale-125';
    
    return {
      id: i,
      left: `${5 + (i * 5.3)}%`,
      delay: `${i * 0.12}s`,
      duration: `${2.5 + (i % 4) * 0.5}s`,
      animationClass: HEART_ANIMATION_CLASSES[animationType],
      size,
    };
  });

  // Generate sparkles with varied positions, delays, and animation styles
  const sparkles = Array.from({ length: 30 }, (_, i) => {
    const animationTypes: Array<keyof typeof SPARKLE_ANIMATION_CLASSES> = ['sparkle-twinkle', 'sparkle-pop', 'sparkle-wobble'];
    const animationType = animationTypes[i % 3];
    const size = i % 4 === 0 ? 'scale-75' : i % 4 === 1 ? 'scale-90' : i % 4 === 2 ? 'scale-110' : 'scale-125';
    
    return {
      id: i,
      left: `${3 + (i * 3.2)}%`,
      top: `${8 + (i * 3)}%`,
      delay: `${i * 0.08}s`,
      duration: `${1.4 + (i % 5) * 0.25}s`,
      animationClass: SPARKLE_ANIMATION_CLASSES[animationType],
      size,
    };
  });

  // Generate varied drifting particles
  const driftingParticles = [
    { id: 1, className: 'top-1/4 left-1/4 w-3 h-3', color: 'bg-romantic-pink/60', animationClass: DRIFT_ANIMATION_CLASSES['drift-1'] },
    { id: 2, className: 'top-1/3 right-1/4 w-2 h-2', color: 'bg-romantic-peach/60', animationClass: DRIFT_ANIMATION_CLASSES['drift-2'] },
    { id: 3, className: 'bottom-1/3 left-1/3 w-2.5 h-2.5', color: 'bg-romantic-coral/60', animationClass: DRIFT_ANIMATION_CLASSES['drift-3'] },
    { id: 4, className: 'top-1/2 right-1/3 w-2 h-2', color: 'bg-romantic-heart/60', animationClass: DRIFT_ANIMATION_CLASSES['drift-4'] },
    { id: 5, className: 'top-1/5 left-2/3 w-3.5 h-3.5', color: 'bg-romantic-accent/70', animationClass: DRIFT_ANIMATION_CLASSES['drift-bounce'] },
    { id: 6, className: 'bottom-1/4 right-1/5 w-2.5 h-2.5', color: 'bg-romantic-pink/70', animationClass: DRIFT_ANIMATION_CLASSES['drift-swirl'] },
    { id: 7, className: 'top-2/3 left-1/5 w-3 h-3', color: 'bg-romantic-peach/65', animationClass: DRIFT_ANIMATION_CLASSES['drift-1'], delay: '0.5s' },
    { id: 8, className: 'bottom-1/2 right-2/5 w-2 h-2', color: 'bg-romantic-coral/65', animationClass: DRIFT_ANIMATION_CLASSES['drift-3'], delay: '0.7s' },
  ];

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Star sparkle layer - new addition */}
      <CurtainStarSparkleLayer />

      {/* Soft radial burst from center */}
      <div className="absolute inset-0 motion-safe:animate-soft-burst">
        <div className="absolute inset-0 bg-gradient-radial from-romantic-heart/20 via-romantic-accent/10 to-transparent" />
      </div>

      {/* Floating hearts with varied animations */}
      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className={`absolute bottom-0 ${heart.animationClass} ${heart.size}`}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          <div className="heart-shape text-romantic-heart opacity-80" />
        </div>
      ))}

      {/* Twinkling sparkles with varied animations */}
      {sparkles.map((sparkle) => (
        <div
          key={`sparkle-${sparkle.id}`}
          className={`absolute ${sparkle.animationClass} ${sparkle.size}`}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
          }}
        >
          <div className="sparkle-shape bg-romantic-accent" />
        </div>
      ))}

      {/* Drifting particles with varied animations */}
      {driftingParticles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className={`absolute ${particle.className} rounded-full ${particle.color} ${particle.animationClass}`}
          style={{
            animationDelay: particle.delay || '0s',
          }}
        />
      ))}
    </div>
  );
}
