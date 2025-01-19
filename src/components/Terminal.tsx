import { useEffect, useState } from 'react';

const messages = [
  "Initializing SilkRoad protocol...",
  "Loading memetic potential...",
  "Scanning paper hands...",
  "WARNING: Diamond hands detected",
  "Analyzing moon trajectory...",
  "Pump sequence activated",
  "Deploying smart contracts...",
  "Bullish signals confirmed",
  "SilkRoad Token: The future is now",
  "Calculating gains...",
  "Result: Too high to compute",
  "Status: Ultra bullish",
  "Meme power level: Over 9000",
  "System status: Ultra bullish"
];

export const Terminal = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Typing effect
    const message = messages[currentMessage];
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= message.length) {
        setText(message.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Wait before showing next message
        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % messages.length);
        }, 1000);
      }
    }, 50);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentMessage]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-[#1A1F2C] rounded-lg overflow-hidden shadow-xl border border-primary/20">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-black/40 border-b border-primary/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-4 text-sm text-green-400 font-mono">silkroad@terminal:~</span>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        <div className="flex items-center text-green-400">
          <span className="mr-2">$</span>
          <span>{text}</span>
          <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>▊</span>
        </div>
      </div>
    </div>
  );
};