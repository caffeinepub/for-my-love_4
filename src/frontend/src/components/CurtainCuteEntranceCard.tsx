import { Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CurtainCuteEntranceCardProps {
  isRevealing: boolean;
}

export function CurtainCuteEntranceCard({ isRevealing }: CurtainCuteEntranceCardProps) {
  return (
    <div
      className={`relative transition-all duration-700 ${
        isRevealing ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
      }`}
    >
      {/* Decorative floating hearts around the card */}
      <div className="absolute -top-8 -left-8 text-romantic-pink opacity-70 motion-safe:animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>
        <Heart className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute -top-6 -right-6 text-romantic-coral opacity-60 motion-safe:animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.2s' }}>
        <Heart className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute -bottom-6 -left-6 text-romantic-peach opacity-65 motion-safe:animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '2.4s' }}>
        <Heart className="w-7 h-7 fill-current" />
      </div>
      <div className="absolute -bottom-8 -right-8 text-romantic-pink opacity-70 motion-safe:animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '2.6s' }}>
        <Heart className="w-9 h-9 fill-current" />
      </div>

      {/* Sparkle decorations */}
      <div className="absolute top-1/4 -left-12 text-romantic-accent opacity-80 motion-safe:animate-pulse" style={{ animationDuration: '1.5s' }}>
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute top-1/3 -right-12 text-romantic-heart opacity-75 motion-safe:animate-pulse" style={{ animationDuration: '1.8s', animationDelay: '0.4s' }}>
        <Sparkles className="w-6 h-6" />
      </div>

      <Card className="w-full max-w-md mx-4 overflow-hidden border-4 border-romantic-pink/30 shadow-2xl bg-gradient-to-br from-white via-romantic-pink/5 to-romantic-peach/10">
        <CardContent className="p-8 md:p-12 text-center space-y-6">
          {/* Cute kawaii heart character */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              {/* Glow effect behind heart */}
              <div className="absolute inset-0 bg-romantic-pink/30 rounded-full blur-2xl scale-150" />
              
              <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative motion-safe:animate-bounce"
                style={{ animationDuration: '2s' }}
              >
                {/* Main heart shape with gradient */}
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'oklch(0.92 0.08 350)', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: 'oklch(0.88 0.12 40)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'oklch(0.85 0.15 30)', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Heart body */}
                <path
                  d="M70 125C70 125 20 90 20 55C20 38 32 25 48 25C56 25 64 29 70 38C76 29 84 25 92 25C108 25 120 38 120 55C120 90 70 125 70 125Z"
                  fill="url(#heartGradient)"
                  stroke="oklch(0.85 0.15 30)"
                  strokeWidth="2"
                />
                
                {/* Cute blush marks */}
                <ellipse cx="45" cy="65" rx="8" ry="6" fill="oklch(0.85 0.15 30)" opacity="0.4" />
                <ellipse cx="95" cy="65" rx="8" ry="6" fill="oklch(0.85 0.15 30)" opacity="0.4" />
                
                {/* Sparkly eyes */}
                <g>
                  {/* Left eye */}
                  <circle cx="55" cy="58" r="6" fill="#000000" />
                  <circle cx="57" cy="56" r="2" fill="#FFFFFF" />
                  
                  {/* Right eye */}
                  <circle cx="85" cy="58" r="6" fill="#000000" />
                  <circle cx="87" cy="56" r="2" fill="#FFFFFF" />
                </g>
                
                {/* Big kawaii smile */}
                <path
                  d="M50 75 Q70 90 90 75"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                
                {/* Small heart on forehead */}
                <path
                  d="M70 42C70 42 65 38 65 35C65 33 66 32 67.5 32C68.5 32 69 33 70 34C71 33 71.5 32 72.5 32C74 32 75 33 75 35C75 38 70 42 70 42Z"
                  fill="oklch(0.60 0.25 15)"
                />
              </svg>
            </div>
          </div>

          {/* Headline text - exactly as specified, pinkish color */}
          <h1 className="font-script text-4xl md:text-5xl leading-tight" style={{ color: 'oklch(0.70 0.20 350)' }}>
            my Feelings for you
          </h1>

          {/* Decorative hearts row */}
          <div className="flex justify-center items-center gap-3 py-2">
            <Heart className="w-4 h-4 fill-romantic-coral text-romantic-coral opacity-70" />
            <Heart className="w-5 h-5 fill-romantic-pink text-romantic-pink" />
            <Heart className="w-6 h-6 fill-romantic-heart text-romantic-heart" />
            <Heart className="w-5 h-5 fill-romantic-pink text-romantic-pink" />
            <Heart className="w-4 h-4 fill-romantic-coral text-romantic-coral opacity-70" />
          </div>

          {/* Cute instruction text */}
          <p className="text-sm md:text-base italic opacity-70" style={{ color: 'oklch(0.60 0.15 350)' }}>
            ✨ Tap anywhere to continue ✨
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
