import { Heart, Quote } from 'lucide-react';

const LoveMessage = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Card container */}
        <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 romantic-border glow-effect">
          {/* Quote icon */}
          <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/30" />
          
          {/* Message content */}
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl text-gradient mb-8">
              A Message For You
            </h2>

            <div className="space-y-6 font-body text-lg md:text-xl text-foreground/90 leading-relaxed italic">
              <p>
                On this special day, I want you to know just how much you mean to me.
              </p>
              <p>
                Your smile lights up my world, your laughter is my favorite melody,
                and your love is the greatest gift I've ever received.
              </p>
              <p>
                Every moment spent with you feels like magic.
                You're not just my girlfriend – you're my best friend,
                my confidante, and my greatest adventure.
              </p>
              <p className="text-secondary font-medium">
                May this birthday bring you all the happiness you deserve,
                because you deserve the universe and beyond.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 flex flex-col items-center">
              <Heart className="w-8 h-8 text-primary fill-primary animate-heartbeat mb-4" />
              <p className="font-display text-3xl text-gold">
                With All My Love
              </p>
            </div>
          </div>

          {/* Quote icon (closing) */}
          <Quote className="absolute bottom-6 right-6 w-10 h-10 text-primary/30 rotate-180" />
        </div>
      </div>
    </section>
  );
};

export default LoveMessage;
