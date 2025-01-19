import { useEffect, useState } from 'react';

const ASCII_ART = `
    ▄▄▄█████▓ ▒█████      ▄▄▄█████▓ ██░ ██ ▓█████     ███▄ ▄███▓ ▒█████   ▒█████   ███▄    █ 
    ▓  ██▒ ▓▒▒██▒  ██▒    ▓  ██▒ ▓▒▓██░ ██▒▓█   ▀    ▓██▒▀█▀ ██▒▒██▒  ██▒▒██▒  ██▒ ██ ▀█   █ 
    ▒ ▓██░ ▒░▒██░  ██▒    ▒ ▓██░ ▒░▒██▀▀██░▒███      ▓██    ▓██░▒██░  ██▒▒██░  ██▒▓██  ▀█ ██▒
    ░ ▓██▓ ░ ▒██   ██░    ░ ▓██▓ ░ ░▓█ ░██ ▒▓█  ▄    ▒██    ▒██ ▒██   ██░▒██   ██░▓██▒  ▐▌██▒
      ▒██▒ ░ ░ ████▓▒░      ▒██▒ ░ ░▓█▒░██▓░▒████▒   ▒██▒   ░██▒░ ████▓▒░░ ████▓▒░▒██░   ▓██░
      ▒ ░░   ░ ▒░▒░▒░       ▒ ░░    ▒ ░░▒░▒░░ ▒░ ░   ░ ▒░   ░  ░░ ▒░▒░▒░ ░ ▒░▒░▒░ ░ ▒░   ▒ ▒ 
        ░      ░ ▒ ▒░         ░     ▒ ░▒░ ░ ░ ░  ░   ░  ░      ░  ░ ▒ ▒░   ░ ▒ ▒░ ░ ░░   ░ ▒░
      ░      ░ ░ ░ ▒        ░       ░  ░░ ░   ░      ░      ░   ░ ░ ░ ▒  ░ ░ ░ ▒     ░   ░ ░ 
                 ░ ░                 ░  ░  ░   ░  ░          ░       ░ ░      ░ ░           ░ 
`;

const TERMINAL_MESSAGES = [
  "INITIALIZING 2025 PROTOCOL...",
  "SCANNING BLOCKCHAIN FOR BULLISH PATTERNS...",
  "DETECTED: MASSIVE PUMP INCOMING",
  "ANALYZING MEME POTENTIAL: OVER 9000",
  "DEPLOYING SMART CONTRACTS...",
  "PAPER HANDS ELIMINATED",
  "DIAMOND HANDS PROTOCOL ACTIVATED",
  "NYE PUMP SEQUENCE INITIATED",
  "CALCULATING MOON TRAJECTORY...",
  "MEMETIC WARFARE SYSTEMS ONLINE",
  "LOADING DEGEN PROTOCOLS...",
  "INJECTING HOPIUM.EXE",
  "FOMO LEVELS: CRITICAL",
  "BEARS LIQUIDATED",
  "BULLS TAKING CONTROL",
  "RESISTANCE LEVELS BROKEN",
  "NEW ATH IMMINENT",
  "CHAD MODE: ACTIVATED",
  "WOJAK.EXE STOPPED WORKING",
  "PEPE MARKETS: BULLISH",
  "DOWNLOADING MORE RAM...",
  "MEME MAGIC INITIALIZED",
  "COPIUM RESERVES: FULL",
  "WAGMI PROTOCOL ENGAGED",
  "2025: THE FUTURE IS NOW"
];

export const SilkroadTerminal = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Matrix rain effect
    const canvas = document.getElementById('matrixCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = "01";
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const matrixRain = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const matrixInterval = setInterval(matrixRain, 33);

    // Typing effect for messages
    const message = TERMINAL_MESSAGES[currentMessage];
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= message.length) {
        setText(message.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % TERMINAL_MESSAGES.length);
        }, 1000);
      }
    }, 50);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(matrixInterval);
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentMessage]);

  return (
    <div className="w-full mt-16 relative">
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative bg-black rounded-lg overflow-hidden border border-primary/20 shadow-2xl">
          {/* Matrix Canvas Background */}
          <canvas 
            id="matrixCanvas" 
            className="absolute inset-0 opacity-20"
            style={{ width: '100%', height: '100%' }}
          />
          
          {/* Terminal Header */}
          <div className="relative flex items-center px-4 py-2 bg-[#1A1F2C] border-b border-primary/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-sm text-green-400 font-mono">root@silkroad:~# silkroad_terminal</span>
          </div>
          
          {/* ASCII Art */}
          <div className="p-4 font-mono text-xs md:text-sm overflow-x-auto whitespace-pre text-green-500 opacity-60">
            {ASCII_ART}
          </div>
          
          {/* Terminal Messages */}
          <div className="p-4 font-mono text-sm">
            <div className="flex items-center text-green-400">
              <span className="mr-2">$</span>
              <span>{text}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>▊</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};