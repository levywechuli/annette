import { useState } from 'react';
import Navigation from "@/components/Navigation";
import FloatingHearts from "@/components/FloatingHearts";
import Footer from "@/components/Footer";
import { Music, Heart, Play, Sparkles } from 'lucide-react';

// Add Annette's favorite YouTube songs here
const favoriteSongs = [
  {
    title: "Is It a Crime ",
    artist: "Mariah the Scientist, Kali Uchis",
    videoId: "PWf8jHWrK5k", // Replace with actual YouTube video ID
  },
  {
    title: "Sacrifice",
    artist: "Mariah the Scientist",
    videoId: "C3AOynifvJY", // Replace with actual YouTube video ID
  },
  {
    title: "Daylight ",
    artist: "Taylor Swift ",
    videoId: "u9raS7-NisU", // Replace with actual YouTube video ID
  },
];

const Songs = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <FloatingHearts />
      <Navigation />
      
      <main className="pt-24 pb-12">
        {/* Header */}
        <div className="container mx-auto px-4 text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-8 h-8 text-gold animate-pulse" />
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient mb-4 animate-fade-in">
            Your Playlist
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto italic">
           A collection of your favorite songs — the ones you love and the ones that feel just like you.💞💕
          </p>
        </div>

        {/* Songs Grid */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8">
            {favoriteSongs.map((song, index) => (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative glass-card rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    {/* Video embed area */}
                    <div className="relative w-full md:w-2/3 aspect-video bg-background/50">
                      {activeVideo === song.videoId ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${song.videoId}?autoplay=1`}
                          title={song.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center cursor-pointer group/play"
                          onClick={() => setActiveVideo(song.videoId)}
                        >
                          <img 
                            src={`https://img.youtube.com/vi/${song.videoId}/maxresdefault.jpg`}
                            alt={song.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                          <div className="relative z-10 w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/50 group-hover/play:scale-110 transition-transform duration-300">
                            <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Song info */}
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-primary fill-primary/50 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
                            {song.title}
                          </h3>
                          <p className="text-muted-foreground font-body">
                            {song.artist}
                          </p>
                        </div>
                      </div>
                      
                      {/* Decorative music notes */}
                      <div className="mt-6 flex gap-2 opacity-30">
                        <Music className="w-4 h-4 text-gold" />
                        <Music className="w-3 h-3 text-primary" />
                        <Music className="w-5 h-5 text-secondary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Songs;