import { useEffect, useState } from 'react';

interface TokenStats {
  supply: number;
  liquidityLocked: boolean;
  contractStatus: string;
  holders: string;
}

export const TokenStats = () => {
  const [stats, setStats] = useState<TokenStats>({
    supply: 1000000000,
    liquidityLocked: true,
    contractStatus: 'Renounced',
    holders: 'Loading...',
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <StatCard
        title="Total Supply"
        value="1B"
        gradient="from-primary to-accent"
      />
      <StatCard
        title="Contract Status"
        value="Renounced"
        gradient="from-accent to-secondary"
      />
      <StatCard
        title="Liquidity"
        value="Locked 🔒"
        gradient="from-secondary to-primary"
      />
      <StatCard
        title="Holders"
        value={stats.holders}
        gradient="from-primary to-secondary"
      />
    </div>
  );
};

const StatCard = ({ 
  title, 
  value, 
  gradient 
}: { 
  title: string; 
  value: string; 
  gradient: string;
}) => (
  <div className="group">
    <div className="relative bg-black/30 backdrop-blur-lg rounded-lg p-4 border border-primary/20 
                    hover:border-primary/40 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      <div className="relative">
        <h3 className={`text-sm bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {title}
        </h3>
        <p className="text-xl md:text-2xl font-bold text-white mt-1 group-hover:scale-105 transition-transform">
          {value}
        </p>
      </div>
    </div>
  </div>
);
