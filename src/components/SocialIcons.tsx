import { toast } from "sonner";

export const SocialIcons = () => {
  const handleUnlinkedClick = (platform: string) => {
    toast("Coming Soon!", {
      description: `${platform} social link will be updated soon! 🚀`,
      className: "bg-background/80 backdrop-blur-xl border border-primary/20",
      duration: 3000,
    });
  };

  return (
    <div className="flex justify-center gap-6 items-center py-8">
      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img src="/lovable-uploads/90ad0bdc-6cc2-4b4e-82ff-e9d239b7ff6b.png" alt="Twitter" className="w-8 h-8" />
      </a>

      {/* Telegram */}
      <a
        href="https://telegram.org"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img src="/lovable-uploads/c9485004-c2d8-4b70-b679-707dccbce321.png" alt="Telegram" className="w-8 h-8" />
      </a>

      {/* Medium */}
      <a
        href="https://medium.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <img src="/lovable-uploads/198e74f1-7a89-4628-a46f-60cec792907e.png" alt="Medium" className="w-8 h-8" />
      </a>

      {/* Gecko */}
      <button
        onClick={() => handleUnlinkedClick("CoinGecko")}
        className="transition-transform hover:scale-110 bg-transparent border-none p-0"
      >
        <img src="/lovable-uploads/f79fa95d-0bda-4553-a0db-766e5c4dec4b.png" alt="Gecko" className="w-8 h-8" />
      </button>

      {/* Zapper */}
      <button
        onClick={() => handleUnlinkedClick("Zapper")}
        className="transition-transform hover:scale-110 bg-transparent border-none p-0"
      >
        <img src="/lovable-uploads/9b48d9a6-e1d2-4221-8c1e-009600f76054.png" alt="Zapper" className="w-8 h-8" />
      </button>
    </div>
  );
};