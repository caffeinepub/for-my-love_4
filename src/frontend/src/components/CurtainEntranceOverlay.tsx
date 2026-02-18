import { useState, useEffect, useRef } from 'react';
import { CurtainCuteEntranceCard } from './CurtainCuteEntranceCard';
import { CurtainCuteAnimationLayer } from './CurtainCuteAnimationLayer';

interface CurtainEntranceOverlayProps {
  onComplete: () => void;
}

const ANIMATION_DURATION = 1000;

export function CurtainEntranceOverlay({ onComplete }: CurtainEntranceOverlayProps) {
  const [isRevealing, setIsRevealing] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasCompletedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes to reduced motion preference
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (isRevealing || hasCompletedRef.current) return; // Prevent double-activation

    if (prefersReducedMotion) {
      // Quick reveal for reduced motion
      hasCompletedRef.current = true;
      setTimeout(() => onComplete(), 100);
      return;
    }

    setIsRevealing(true);
    
    // Fallback timer in case animation events don't fire
    fallbackTimerRef.current = window.setTimeout(() => {
      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        onComplete();
      }
    }, ANIMATION_DURATION + 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (e.animationName === 'cute-reveal' && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
      onComplete();
    }
  };

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden ${
        isRevealing 
          ? 'motion-safe:animate-cute-reveal motion-reduce:opacity-0' 
          : ''
      }`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onAnimationEnd={handleAnimationEnd}
      role="button"
      tabIndex={0}
      aria-label="Click to enter"
    >
      {/* Soft pastel gradient background */}
      <div className="absolute inset-0 cute-entrance-bg" />
      
      {/* Soft glow overlay */}
      <div className="absolute inset-0 cute-entrance-glow pointer-events-none" />

      {/* Cute animation layer with hearts and sparkles */}
      <CurtainCuteAnimationLayer isActive={!isRevealing} reducedMotion={prefersReducedMotion} />

      {/* Cute entrance card */}
      <CurtainCuteEntranceCard isRevealing={isRevealing} />
    </div>
  );
}
