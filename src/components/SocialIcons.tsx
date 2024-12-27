import { toast } from "sonner";

export const SocialIcons = () => {
  const handleIconClick = (platform: string, hasLink: boolean = false) => {
    if (!hasLink) {
      toast("Coming Soon!", {
        description: `${platform} social link will be updated soon! 🚀`,
        className: "bg-background/80 backdrop-blur-xl border border-primary/20",
        duration: 3000,
      });
    } else {
      toast("Redirecting...", {
        description: `Opening ${platform} in a new tab! 🔗`,
        className: "bg-background/80 backdrop-blur-xl border border-primary/20",
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex justify-center gap-6 items-center py-8">
      {/* Twitter */}
      <button
        onClick={() => handleIconClick("Twitter", true)}
        className="transition-transform hover:scale-110 bg-transparent border-none p-0"
      >
        <img src="/lovable-uploads/90ad0bdc-6cc2-4b4e-82ff-e9d239b7ff6b.png" alt="Twitter" className="w-8 h-8" />
      </button>

      {/* Telegram */}
      <button
        onClick={() => handleIconClick("Telegram", true)}
        className="transition-transform hover:scale-110 bg-transparent border-none p-0"
      >
        <img src="/lovable-uploads/c9485004-c2d8-4b70-b679-707dccbce321.png" alt="Telegram" className="w-8 h-8" />
      </button>

      {/* Medium */}
      <button
        onClick={() => handleIconClick("Medium", true)}
        className="transition-transform hover:scale-110 bg-transparent border-none p-0"
      >
        <img src="/lovable-uploads/198e74f1-7a89-4628-a46f-60cec792907e.png" alt="Medium" className="w-8 h-8" />
      </button>

      {/* Gecko */}
      <button
        onClick={() => handleIconClick("CoinGecko")}
        className="transition-transform hover:scale-110 bg-transparent border-none p-0"
      >
        <img src="/lovable-uploads/f79fa95d-0bda-4553-a0db-766e5c4dec4b.png" alt="Gecko" className="w-8 h-8" />
      </button>

      {/* Zapper */}
      <button
        onClick={() => handleIconClick("Zapper")}
        className="transition-transform hover:scale-110 bg-transparent border-none p-0"
      >
        <img src="/lovable-uploads/9b48d9a6-e1d2-4221-8c1e-009600f76054.png" alt="Zapper" className="w-8 h-8" />
      </button>
    </div>
  );
};