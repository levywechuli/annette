import { Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
      {/* Decorative sparkles */}
      <Sparkles className="absolute top-20 left-10 text-gold/60 w-8 h-8 animate-pulse" />
      <Sparkles className="absolute top-32 right-16 text-gold/40 w-6 h-6 animate-pulse delay-300" />
      <Sparkles className="absolute bottom-40 left-20 text-gold/50 w-7 h-7 animate-pulse delay-500" />
      
      <div className="text-center z-10">
        {/* Heart icon */}
        <div className="mb-8 animate-fade-in-up">
          <Heart 
            size={80} 
            className="mx-auto text-primary fill-primary/80 animate-heartbeat pulse-glow rounded-full p-4"
          />
        </div>

        {/* Main greeting */}
        <h1 
          className="font-display text-6xl md:text-8xl lg:text-9xl text-gradient mb-6 animate-fade-in-up delay-200"
          style={{ opacity: 0, animationFillMode: 'forwards' }}
        >
          Happy Birthday
        </h1>

        {/* Name */}
        <h2 
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 animate-fade-in-up delay-300"
          style={{ opacity: 0, animationFillMode: 'forwards' }}
        >
          Annette Mwende Wechuli 
        </h2>

        {/* Decorative line */}
        <div 
          className="flex items-center justify-center gap-4 mb-10 animate-fade-in-up delay-400"
          style={{ opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50"></div>
          <Heart size={16} className="text-secondary fill-secondary/50" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>

        {/* Subtitle */}
        <p 
          className="font-body text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-500 italic"
          style={{ opacity: 0, animationFillMode: 'forwards' }}
        >
          Today I celebrate the most beautiful soul i know. 
          <br />
          You make every moment in my life magical.
        </p>

        {/* Scroll indicator */}
        <div 
          className="mt-16 animate-fade-in-up delay-600"
          style={{ opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-muted-foreground text-sm mt-3 font-body">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
