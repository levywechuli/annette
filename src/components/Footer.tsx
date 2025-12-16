import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Big heart */}
        <Heart className="w-16 h-16 mx-auto text-primary fill-primary/80 animate-heartbeat pulse-glow rounded-full mb-8" />

        {/* Final message */}
        <h2 className="font-display text-5xl md:text-6xl text-gradient mb-6">
          Happy Birthday, My Love!
        </h2>

        <p className="font-heading text-xl text-foreground/80 italic mb-8">
          Here's to another amazing year together
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40"></div>
          <Heart size={12} className="text-secondary fill-secondary/50" />
          <Heart size={16} className="text-primary fill-primary/50" />
          <Heart size={12} className="text-secondary fill-secondary/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40"></div>
        </div>

        {/* Year */}
        <p className="mt-10 font-body text-muted-foreground">
          Made with <Heart className="inline w-4 h-4 text-primary fill-primary mx-1" /> for Annette
        </p>
      </div>
    </footer>
  );
};

export default Footer;
