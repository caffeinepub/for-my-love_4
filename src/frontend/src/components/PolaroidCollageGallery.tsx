import { Heart } from 'lucide-react';

export function PolaroidCollageGallery() {
  return (
    <div className="relative w-full max-w-[700px] mx-auto px-4">
      {/* Dark rounded card background */}
      <div className="relative bg-gradient-to-br from-[#2a1a3a] to-[#1a0a2a] rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden">
        {/* Decorative hearts */}
        <div className="absolute top-6 right-6 flex gap-2">
          <Heart className="w-8 h-8 md:w-10 md:h-10 fill-romantic-heart text-romantic-heart animate-pulse" />
          <Heart className="w-6 h-6 md:w-8 md:h-8 fill-romantic-heart text-romantic-heart animate-pulse delay-150" />
        </div>
        
        <div className="absolute bottom-6 left-6 flex gap-2">
          <Heart className="w-7 h-7 md:w-9 md:h-9 fill-romantic-heart text-romantic-heart animate-pulse delay-300" />
          <Heart className="w-5 h-5 md:w-7 md:h-7 fill-romantic-heart text-romantic-heart animate-pulse delay-500" />
        </div>

        {/* Polaroid collage container - increased height for larger polaroids */}
        <div className="relative w-full h-[480px] md:h-[580px] flex items-center justify-center">
          {/* Polaroid 1 - Top left, rotated */}
          <div className="polaroid-frame polaroid-1 absolute">
            <div className="polaroid-tape"></div>
            <div className="polaroid-inner">
              <img
                src="/assets/IMG_20260215_152813_121.jpg"
                alt="Beautiful moment together"
                className="polaroid-photo"
              />
            </div>
          </div>

          {/* Polaroid 2 - Bottom left, slight rotation */}
          <div className="polaroid-frame polaroid-2 absolute">
            <div className="polaroid-tape"></div>
            <div className="polaroid-inner">
              <img
                src="/assets/IMG_20260202_224631_789.jpg"
                alt="Sweet selfie moment"
                className="polaroid-photo"
              />
            </div>
          </div>

          {/* Polaroid 3 - Right, rotated opposite */}
          <div className="polaroid-frame polaroid-3 absolute">
            <div className="polaroid-tape"></div>
            <div className="polaroid-inner">
              <img
                src="/assets/IMG_20260215_152802_638.jpg"
                alt="Precious memory"
                className="polaroid-photo"
              />
            </div>
          </div>
        </div>

        {/* Happy Valentine's Day text */}
        <div className="text-center mt-4">
          <p className="font-script text-3xl md:text-5xl text-romantic-heart drop-shadow-lg">
            happy valentines day
          </p>
        </div>
      </div>
    </div>
  );
}
