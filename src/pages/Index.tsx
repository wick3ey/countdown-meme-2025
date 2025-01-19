import { TokenStats } from "@/components/TokenStats";
import { Terminal } from "@/components/Terminal";
import { SocialIcons } from "@/components/SocialIcons";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SilkroadTerminal } from "@/components/SilkroadTerminal";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    toast("Free Ross! 🗽", {
      description: "Join the movement to free Ross Ulbricht",
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* SilkRoad Logo */}
      <div className="fixed top-4 right-4 z-50 w-48 h-48 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <img
          src="/lovable-uploads/f1fb95ff-d9c0-4a94-aed6-8bf5bbbb62ff.png"
          alt="SilkRoad Logo"
          className="w-full h-full object-contain animate-float"
        />
      </div>

      {/* Main Content */}
      <div className="container pt-20 pb-10 relative">
        <div className="text-center space-y-8">
          {/* Title with Glitch Effect */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold glitch-text" data-text="FREE ROSS ULBRICHT">
              FREE ROSS ULBRICHT
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 animate-pulse">
              Join the Movement for Justice and Freedom
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            <InfoCard
              title="The Case"
              content="Ross Ulbricht, arrested at 29, now 40, faces double life + 40 years with no parole for creating Silk Road, a marketplace promoting free trade."
              gradient="from-primary to-accent"
            />
            <InfoCard
              title="Trump's Promise"
              content="'If you vote for me, on day one, I will commute the sentence of Ross Ulbricht' - Donald Trump at the 2024 Libertarian National Convention"
              gradient="from-accent to-secondary"
            />
            <InfoCard
              title="Take Action"
              content="Support the movement to free Ross. He's been a model prisoner, pursuing education and helping others while incarcerated."
              gradient="from-secondary to-primary"
            />
          </div>

          {/* Terminal Widget */}
          <Terminal />

          {/* Silkroad Terminal */}
          <SilkroadTerminal />

          {/* Call to Action */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => window.open('https://freeross.org', '_blank')}
              className="group relative px-8 py-3 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full overflow-hidden hover:bg-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <span className="relative bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                Support Free Ross
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <SocialIcons />

      {/* Footer Note */}
      <div className="text-center text-sm text-primary/40 pb-4">
        Join the movement for justice and freedom
      </div>
    </div>
  );
};

const InfoCard = ({ 
  title, 
  content,
  gradient 
}: { 
  title: string;
  content: string;
  gradient: string;
}) => (
  <div className="group">
    <div className="relative bg-black/30 backdrop-blur-lg rounded-lg p-6 border border-primary/20 
                    hover:border-primary/40 transition-all duration-300 overflow-hidden h-full">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 
                      group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
      <div className="relative">
        <h3 className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-3`}>
          {title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  </div>
);

export default Index;