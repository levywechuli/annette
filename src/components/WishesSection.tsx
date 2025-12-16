import { Cake, Gift, Star, Heart, Sparkles, Music } from 'lucide-react';

const wishes = [
  { icon: Cake, text: "Endless happiness", delay: 0 },
  { icon: Gift, text: "All your dreams come true", delay: 100 },
  { icon: Star, text: "Success in everything", delay: 200 },
  { icon: Heart, text: "Love that grows every day", delay: 300 },
  { icon: Sparkles, text: "Magic in every moment", delay: 400 },
  { icon: Music, text: "Joy that never fades", delay: 500 },
];

const WishesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-gradient mb-4">
            Birthday Wishes
          </h2>
          <p className="font-body text-lg text-muted-foreground italic">
            May your year be filled with...
          </p>
        </div>

        {/* Wishes grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="group bg-card/30 backdrop-blur-sm rounded-xl p-6 romantic-border text-center hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:glow-effect"
              style={{ animationDelay: `${wish.delay}ms` }}
            >
              <wish.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors group-hover:animate-heartbeat" />
              <p className="font-heading text-lg text-foreground/90">
                {wish.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
