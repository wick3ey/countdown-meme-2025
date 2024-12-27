import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const HowToBuy = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-2xl md:text-3xl text-center mb-8 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
        How to Buy $2025
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StepCard
          step={1}
          title="Get SOL"
          description="Buy SOL from your preferred CEX (Binance, Coinbase, etc.)"
          buttonText="Buy SOL"
          onClick={() => window.open('https://www.binance.com', '_blank')}
        />
        
        <StepCard
          step={2}
          title="Transfer to Phantom"
          description="Send SOL to your Phantom Wallet address"
          buttonText="Get Phantom"
          onClick={() => window.open('https://phantom.app', '_blank')}
        />
        
        <StepCard
          step={3}
          title="Swap for $2025"
          description="Use Raydium or Jupiter to swap SOL for $2025"
          buttonText="Contract (Soon)"
          onClick={() => toast.info("Contract address coming soon! 🚀")}
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-primary/60 animate-pulse">
          Contract Address: Coming Soon 🔥
        </p>
      </div>
    </div>
  );
};

const StepCard = ({
  step,
  title,
  description,
  buttonText,
  onClick
}: {
  step: number;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative bg-black/30 backdrop-blur-lg rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
        {step}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Button 
        onClick={onClick}
        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
      >
        {buttonText}
      </Button>
    </div>
  </div>
);