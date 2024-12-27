import { TokenLogo } from "@/components/TokenLogo";
import { Countdown } from "@/components/Countdown";
import { TokenStats } from "@/components/TokenStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black text-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,rgba(0,0,0,0)_100%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="container pt-20 pb-10 relative">
        <div className="text-center space-y-8">
          {/* Animated Logo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-pulse"></div>
            <div className="relative animate-float">
              <TokenLogo />
            </div>
          </div>

          {/* Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mt-8 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              2025 Token
            </span>
          </h1>

          {/* Subtitle with Glow */}
          <p className="text-xl md:text-2xl mt-4 text-primary/70 animate-glow">
            The Future of Meme Tokens is Coming
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="px-8 py-3 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full hover:bg-primary/20 transition-all duration-300 animate-fade-in group">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                Buy Now
              </span>
            </button>
            <button className="px-8 py-3 bg-accent/10 backdrop-blur-xl border border-accent/20 rounded-full hover:bg-accent/20 transition-all duration-300 animate-fade-in group">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                Connect Wallet
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="container py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl"></div>
        <h2 className="text-2xl md:text-3xl text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Time Until 2025
        </h2>
        <Countdown />
      </div>

      {/* Stats Section */}
      <div className="container py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent blur-3xl"></div>
        <h2 className="text-2xl md:text-3xl text-center mb-8 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Token Statistics
        </h2>
        <TokenStats />
      </div>
    </div>
  );
};

export default Index;