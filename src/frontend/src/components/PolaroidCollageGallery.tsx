import { Heart } from 'lucide-react';

export function PolaroidCollageGallery() {
  // Fixed list of exactly three photos with fallback handling
  const photos = [
    {
      src: '/assets/IMG_20260215_152813_121-4.jpg',
      alt: 'Beautiful moment together',
      fallback: '/assets/IMG_20260215_152027_497.jpg'
    },
    {
      src: '/assets/IMG_20260202_224631_789-2.jpg',
      alt: 'Sweet selfie moment',
      fallback: '/assets/IMG_20260215_152027_497.jpg'
    },
    {
      src: '/assets/IMG_20260215_152802_638-5.jpg',
      alt: 'Precious memory',
      fallback: '/assets/IMG_20260215_152027_497.jpg'
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallback: string) => {
    const img = e.currentTarget;
    if (img.src !== fallback) {
      img.src = fallback;
    }
  };

  return (
    <div className="relative w-full max-w-[700px] mx-auto px-4">
      {/* Dark rounded card background */}
      <div className="relative bg-gradient-to-br from-[#2a1a3a] to-[#1a0a2a] rounded-[32px] p-6 md:p-12 shadow-2xl overflow-hidden">
        {/* Small heart decoration at top-right (matching reference) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
          <Heart className="w-6 h-6 md:w-8 md:h-8 fill-romantic-heart text-romantic-heart" />
        </div>

        {/* Polaroid collage container - adjusted height for larger mobile polaroids */}
        <div className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] flex items-center justify-center">
          {/* Polaroid 1 - Left, rotated */}
          <div className="polaroid-frame polaroid-1 absolute">
            <div className="polaroid-tape"></div>
            <div className="polaroid-inner">
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="polaroid-photo"
                onError={(e) => handleImageError(e, photos[0].fallback)}
              />
            </div>
          </div>

          {/* Polaroid 2 - Center/forward, main focus */}
          <div className="polaroid-frame polaroid-2 absolute">
            <div className="polaroid-tape"></div>
            <div className="polaroid-inner">
              <img
                src={photos[1].src}
                alt={photos[1].alt}
                className="polaroid-photo"
                onError={(e) => handleImageError(e, photos[1].fallback)}
              />
            </div>
          </div>

          {/* Polaroid 3 - Right, rotated opposite */}
          <div className="polaroid-frame polaroid-3 absolute">
            <div className="polaroid-tape"></div>
            <div className="polaroid-inner">
              <img
                src={photos[2].src}
                alt={photos[2].alt}
                className="polaroid-photo"
                onError={(e) => handleImageError(e, photos[2].fallback)}
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
