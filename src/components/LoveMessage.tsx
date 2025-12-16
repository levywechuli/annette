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
              A Message For You from Levy
            </h2>

            <div className="space-y-6 font-body text-lg md:text-xl text-foreground/90 leading-relaxed italic">
              <p>
                On this special day, I just want to take a moment to remind you how important you are to me and how grateful 
                I am to have you in my life. You mean more to me than I always know how to put into words.
              </p>
              <p>
                Every moment we spend together, whether it’s something big or something simple, becomes a memory I hold close. You’re not just my girlfriend; you’re my best friend, 
                the person I trust the most, and the one I want to share both the good days and the challenging ones with.
              </p>
              <p>
                Being with you feels easy, comforting, and genuine — like I can truly be myself around you. Your love, support, and understanding are things I never take for granted.
              </p>
              <p>
                As you celebrate your birthday today, I hope it brings you the happiness, peace, and love . You deserve all the good things life has to offer, and I’m thankful to be by your side as you continue this journey. Happy Birthday — today and always, you are deeply loved.
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
