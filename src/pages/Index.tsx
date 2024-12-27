import { TokenLogo } from "@/components/TokenLogo";
import { Countdown } from "@/components/Countdown";
import { TokenStats } from "@/components/TokenStats";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    // Show welcome toast
    toast("GM Degens! 🚀", {
      description: "Welcome to the most degenerate token of 2025!",
    });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,rgba(0,0,0,0)_100%)] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div className="absolute inset-0">
          {/* Matrix-like rain effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-primary animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              >
                {Math.random() > 0.5 ? "2" : "5"}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="container pt-20 pb-10 relative">
        <div className="text-center space-y-8">
          {/* Animated Logo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-pulse group-hover:animate-spin-slow" />
            <div className="relative">
              <TokenLogo />
            </div>
          </div>

          {/* Title with Glitch Effect */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold glitch-text" data-text="2025 TOKEN">
              2025 TOKEN
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 animate-pulse">
              The Most Degenerate NYE Token Ever Created
            </p>
            <div className="text-sm text-accent/60 animate-bounce">
              Not Financial Advice | DYOR | 1000x Guaranteed*
            </div>
          </div>

          {/* Meme Notes */}
          <div className="max-w-md mx-auto space-y-2 text-sm">
            <div className="bg-accent/10 backdrop-blur-lg p-2 rounded-lg animate-float">
              💎 "Diamond hands only, paper hands ngmi"
            </div>
            <div className="bg-primary/10 backdrop-blur-lg p-2 rounded-lg animate-float delay-100">
              🚀 "We're all gonna make it in 2025"
            </div>
            <div className="bg-secondary/10 backdrop-blur-lg p-2 rounded-lg animate-float delay-200">
              🌙 "To the moon and beyond!"
            </div>
          </div>

          {/* Interactive Buttons */}
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
            <button 
              onClick={() => toast.error("Ser ut som du är för sent ute...")}
              className="group relative px-8 py-3 bg-accent/10 backdrop-blur-xl border border-accent/20 rounded-full overflow-hidden hover:bg-accent/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <span className="relative bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                Connect Wallet
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

      {/* Stats Section */}
      <div className="container py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent blur-3xl" />
        <h2 className="text-2xl md:text-3xl text-center mb-8 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Tokenomics to the Moon 🌙
        </h2>
        <TokenStats />
      </div>

      {/* Footer Meme Note */}
      <div className="text-center text-sm text-primary/40 pb-4 animate-pulse">
        *Not actually guaranteed. But trust us bro 😉
      </div>
    </div>
  );
};

export default Index;