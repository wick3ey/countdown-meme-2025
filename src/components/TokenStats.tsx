import { useEffect, useState } from 'react';

interface TokenStats {
  price: number;
  marketCap: number;
  volume24h: number;
  holders: number;
}

export const TokenStats = () => {
  const [stats, setStats] = useState<TokenStats>({
    price: 0.000025,
    marketCap: 2500000,
    volume24h: 150000,
    holders: 1250,
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        price: prev.price * (1 + (Math.random() - 0.5) * 0.01),
        volume24h: prev.volume24h * (1 + (Math.random() - 0.5) * 0.005),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <StatCard
        title="Price"
        value={`$${stats.price.toFixed(6)}`}
        change="+125%"
      />
      <StatCard
        title="Market Cap"
        value={`$${(stats.marketCap / 1000000).toFixed(2)}M`}
      />
      <StatCard
        title="24h Volume"
        value={`$${(stats.volume24h / 1000).toFixed(2)}K`}
      />
      <StatCard
        title="Holders"
        value={stats.holders.toLocaleString()}
      />
    </div>
  );
};

const StatCard = ({ title, value, change }: { title: string; value: string; change?: string }) => (
  <div className="bg-black/30 backdrop-blur-lg rounded-lg p-4 border border-primary/20 hover:border-primary/40 transition-all">
    <h3 className="text-primary/70 text-sm">{title}</h3>
    <p className="text-xl md:text-2xl font-bold text-white mt-1">{value}</p>
    {change && (
      <span className="text-green-400 text-sm">{change}</span>
    )}
  </div>
);