import { useEffect, useState } from 'react';

export const Preloader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING SYSTEM');

  useEffect(() => {
    const loadingTexts = [
      'INITIALIZING SYSTEM',
      'ESTABLISHING SECURE CONNECTION',
      'BYPASSING FIREWALLS',
      'ACCESSING DARKNET',
      'DECRYPTING DATA',
      'LOADING SECURE PROTOCOL',
      'CONNECTION ESTABLISHED'
    ];

    let currentIndex = 0;
    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingTexts.length;
      setLoadingText(loadingTexts[currentIndex]);
    }, 800);

    const totalDuration = 3400; // 3.4 seconds in milliseconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => onLoadComplete(), 500); // Small delay after reaching 100%
          return 100;
        }
        return prev + (100 / (totalDuration / 30)); // Update every 30ms to make it smooth
      });
    }, 30);

    // Force completion after exactly 3.4 seconds
    const forceComplete = setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      setProgress(100);
      onLoadComplete();
    }, totalDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(forceComplete);
    };
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Matrix-like canvas background */}
      <canvas 
        id="matrixCanvas"
        className="absolute inset-0 opacity-20 w-full h-full"
      />
      
      <div className="relative z-10 w-full max-w-md px-4 sm:px-6 md:px-8">
        {/* Glitch effect title - Responsive text sizes */}
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-center glitch-text" 
          data-text="SYSTEM ACCESS"
        >
          SYSTEM ACCESS
        </h1>

        {/* Loading text with typewriter effect - Responsive container */}
        <div className="text-green-500 font-mono text-sm sm:text-base md:text-lg mb-4 h-6 sm:h-7 md:h-8 text-center overflow-hidden">
          <span className="loading-text inline-block">
            {loadingText}
          </span>
        </div>

        {/* Custom progress bar container - Responsive sizing */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
          <div className="relative">
            {/* Progress bar background */}
            <div className="w-full bg-gray-900 h-2 sm:h-2.5 md:h-3 rounded-full overflow-hidden border border-green-500/20">
              {/* Animated progress fill */}
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-100 relative"
                style={{ width: `${progress}%` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>

            {/* Decorative lines */}
            <div className="absolute -top-1 -bottom-1 left-0 right-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 animate-gradient-x"></div>
          </div>
        </div>

        {/* Progress percentage - Responsive text */}
        <div className="text-green-500 font-mono text-xs sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4 text-center">
          {Math.round(progress)}% COMPLETE
        </div>

        {/* Additional decorative elements for larger screens */}
        <div className="hidden md:block absolute -top-10 -left-10 w-20 h-20 border border-green-500/20 rounded-full animate-pulse"></div>
        <div className="hidden md:block absolute -bottom-10 -right-10 w-20 h-20 border border-green-500/20 rounded-full animate-pulse delay-100"></div>
      </div>
    </div>
  );
};