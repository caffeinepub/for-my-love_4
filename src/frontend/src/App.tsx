import { useState } from 'react';
import { Heart } from 'lucide-react';
import { ShareLinkSection } from './components/ShareLinkSection';
import { CurtainEntranceOverlay } from './components/CurtainEntranceOverlay';
import { PolaroidCollageGallery } from './components/PolaroidCollageGallery';

export default function App() {
  const [showCurtain, setShowCurtain] = useState(true);

  const handleCurtainComplete = () => {
    setShowCurtain(false);
  };

  return (
    <>
      {showCurtain && <CurtainEntranceOverlay onComplete={handleCurtainComplete} />}
      
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-romantic-pink via-romantic-peach to-romantic-coral overflow-x-hidden px-4 py-10 md:py-16">
        {/* Header */}
        <header className="text-center mt-6 md:mt-10">
          <h1 className="font-script text-5xl md:text-7xl text-romantic-deep mb-2 select-none">
            For My Beloved <Heart className="inline-block text-romantic-heart animate-heartbeat" size={48} />
          </h1>
          <p className="italic text-lg md:text-xl text-romantic-dark mt-1">
            You are my heart, my soul, my everything...
          </p>
        </header>

        {/* Photo */}
        <div className="my-8 md:my-12 w-[80vw] h-[80vw] max-w-[300px] max-h-[300px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full shadow-photo border-4 border-romantic-border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-photo-hover">
          <img
            src="/assets/IMG_20260215_152027_497.jpg"
            alt="Your Love's Photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Message */}
        <div className="max-w-[600px] w-full bg-white px-6 py-6 md:px-10 md:py-8 rounded-2xl shadow-message text-base md:text-xl leading-relaxed text-romantic-text select-none">
          <p>
            <strong className="text-romantic-accent">My Dearest Love,</strong>
            <br />
            <br />
            I know I have made mistakes, and your anger feels like a storm in my heart. But please believe me when I say,{' '}
            <strong className="text-romantic-accent">I only love you.</strong> You are the sunshine in my darkest days, the smile in my tears. Without you, my world is incomplete.
            <br />
            <br />
            I promise to be better, to listen, to cherish you always. You are not only the love of my life—you are my best friend, my everything. Please forgive me, and let's walk this path together, hand in hand, forever.
            <br />
            <br />
            I love you now, tomorrow, and for all the days that come. I don't want to lose you. You are my forever.
          </p>
        </div>

        {/* Quote */}
        <div className="mt-8 md:mt-10 font-script text-2xl md:text-3xl text-romantic-quote text-center px-6 select-none max-w-[700px]">
          "Love is not about how many days, months, or years you've been together. It's about how much you love each other every single day."
        </div>

        {/* Photo Gallery - Polaroid Collage */}
        <div className="mt-10 md:mt-12 w-full max-w-[800px]">
          <h2 className="font-script text-3xl md:text-4xl text-romantic-deep text-center mb-8 select-none">
            Our Beautiful Memories
          </h2>
          <PolaroidCollageGallery />
        </div>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 mb-6 text-base md:text-lg text-romantic-footer text-center select-none">
          With all my love,
          <br />
          <strong>Hemant</strong>
        </footer>

        {/* Share Link Section - Centered & Cute */}
        <div className="share-link-shell">
          <ShareLinkSection />
        </div>
      </div>
    </>
  );
}
