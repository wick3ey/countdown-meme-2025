import { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
  const difference = +new Date('2025-01-01') - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center group perspective-1000">
          <div className="relative transform transition-all duration-500 group-hover:rotate-y-180">
            <div className="bg-black/30 backdrop-blur-lg rounded-lg p-4 border border-primary/20 
                          group-hover:border-primary/40 transition-all duration-300
                          animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"></div>
                <div className="relative">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
                                animate-pulse">
                    {value}
                  </div>
                  <div className="text-sm md:text-base text-primary/70 capitalize mt-2">
                    {unit}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};