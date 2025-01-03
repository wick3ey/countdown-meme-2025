import { Countdown } from "@/components/Countdown";
import { TokenStats } from "@/components/TokenStats";
import { HowToBuy } from "@/components/HowToBuy";
import { Terminal } from "@/components/Terminal";
import { SocialIcons } from "@/components/SocialIcons";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { NewYearTerminal } from "@/components/NewYearTerminal";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "NEW YEAR NEW ME(ME) 🎭",
    "2025 IS OUR YEAR SER 🚀",
    "WAGMI IN 2025 💎",
    "HODL TILL 2025 OR NGMI 💪",
    "NEW YEAR SAME DEGEN 🎮"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);

    toast("GM Degens! 🚀", {
      description: "Welcome to the most degenerate token of 2025!",
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Kid Image */}
      <div className="fixed top-4 right-4 z-50 w-48 h-48 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <img
          src="/lovable-uploads/e58868da-e726-49eb-8c1f-60f3efbb1da8.png"
          alt="Cute kid in red with glasses"
          className="w-full h-full object-contain animate-float"
        />
      </div>

      {/* Main Content */}
      <div className="container pt-20 pb-10 relative">
        <div className="text-center space-y-8">
          {/* Title with Glitch Effect */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold glitch-text" data-text="2025">
              2025
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 animate-pulse">
              The Most Degenerate NYE Ever Created
            </p>
            <div className="text-sm text-accent/60 animate-bounce">
              Not Financial Advice | DYOR
            </div>
          </div>

          {/* Terminal Widget */}
          <Terminal />

          {/* New Year Terminal */}
          <NewYearTerminal />

          {/* Rotating New Year Quotes */}
          <div className="max-w-md mx-auto space-y-2 text-sm">
            <div className="bg-accent/10 backdrop-blur-lg p-4 rounded-lg animate-float text-xl font-bold">
              {quotes[currentQuote]}
            </div>
          </div>

          {/* Interactive Button */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => toast.success("You're officially a degen now! 🎉")}
              className="group relative px-8 py-3 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full overflow-hidden hover:bg-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <span className="relative bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                Ape In Now
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="container py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
        <h2 className="text-2xl md:text-3xl text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Time Until 2025 Takeoff 🚀
        </h2>
        <Countdown />
      </div>

      {/* Token Stats Section */}
      <div className="container py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent blur-3xl" />
        <h2 className="text-2xl md:text-3xl text-center mb-8 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          $2025 Stats 📊
        </h2>
        <TokenStats />
      </div>

      {/* How to Buy Section */}
      <div className="container py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
        <HowToBuy />
      </div>

      {/* Social Icons */}
      <SocialIcons />

      {/* Footer Meme Note */}
      <div className="text-center text-sm text-primary/40 pb-4 animate-pulse">
        *Not actually guaranteed. But trust us bro 😉
      </div>
    </div>
  );
};

export default Index;
