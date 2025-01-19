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

    // Calculate the interval needed to reach 100% in 3.4 seconds
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
        className="absolute inset-0 opacity-20"
        style={{ width: '100%', height: '100%' }}
      />
      
      <div className="relative z-10 w-full max-w-md px-4">
        {/* Glitch effect title */}
        <h1 
          className="text-4xl font-bold mb-8 text-center glitch-text" 
          data-text="SYSTEM ACCESS"
        >
          SYSTEM ACCESS
        </h1>

        {/* Loading text with typewriter effect */}
        <div className="text-green-500 font-mono mb-4 h-6 text-center">
          {loadingText}
        </div>

        {/* Custom progress bar */}
        <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden border border-green-500/20">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percentage */}
        <div className="text-green-500 font-mono text-sm mt-2 text-center">
          {Math.round(progress)}% COMPLETE
        </div>
      </div>
    </div>
  );
};