import { TokenLogo } from "@/components/TokenLogo";
import { Countdown } from "@/components/Countdown";
import { TokenStats } from "@/components/TokenStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black text-white">
      {/* Hero Section */}
      <div className="container pt-20 pb-10">
        <div className="text-center">
          <div className="animate-float">
            <TokenLogo />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mt-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            2025 Token
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-primary/70">
            The Future of Meme Tokens is Coming
          </p>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="container py-10">
        <h2 className="text-2xl md:text-3xl text-center mb-8 text-primary">
          Time Until 2025
        </h2>
        <Countdown />
      </div>

      {/* Stats Section */}
      <div className="container py-10">
        <h2 className="text-2xl md:text-3xl text-center mb-8 text-primary">
          Token Statistics
        </h2>
        <TokenStats />
      </div>
    </div>
  );
};

export default Index;