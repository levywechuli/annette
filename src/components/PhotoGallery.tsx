import { useState } from 'react';
import { Heart, Play } from 'lucide-react';
import annette1 from '@/assets/annette-1.jpeg';
import annette2 from '@/assets/annette-2.jpeg';
import annette3 from '@/assets/annette-3.jpeg';
import annetteVideo1 from '@/assets/annette-video-1.mp4';
import annetteVideo3 from '@/assets/annette-video-3.mp4';
import annette4 from '@/assets/annette-4.jpeg';
import annetteVideo5 from '@/assets/annette-video-5.mp4';
import annette5 from '@/assets/annette-5.jpeg';
import annette6 from '@/assets/annette-6.jpeg';
import annette7 from '@/assets/annette-7.jpeg';
import annette8 from '@/assets/annette-8.jpeg';
import annetteVideo6 from '@/assets/annette-video-6.mp4';
import annette9 from '@/assets/annette-9.jpeg';


const mediaItems = [
  { type: 'image', src: annette1, alt: "Annette looking stunning" },
  { type: 'image', src: annette5, alt: "Annette looking stunning" },
  { type: 'image', src: annette6, alt: "Annette looking stunning" },
  { type: 'video', src: annetteVideo1, alt: "Demo Video 1" },
  { type: 'image', src: annette3, alt: "Annette being beautiful" },
  { type: 'video', src: annetteVideo3, alt: "Annette in nature" },
  { type: 'image', src: annette2, alt: "Annette looking stunning" },
  { type: 'image', src: annette4, alt: "Annette looking stunning" },
  { type: 'video', src: annetteVideo5, alt: "Demo Video 1" },
  { type: 'image', src: annette7, alt: "Annette looking stunning" },
  { type: 'image', src: annette8, alt: "Annette looking stunning" },
  { type: 'video', src: annetteVideo6, alt: "Demo Video 1" },
  { type: 'image', src: annette9, alt: "Annette looking stunning" },

];

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.type === 'image' ? (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-72 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent transition-opacity duration-300 flex items-end justify-center pb-6 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <Heart className="w-8 h-8 text-white fill-white/80 animate-pulse" />
                  </div>
                </>
              ) : (
                <div className="relative w-full h-72 bg-card">
                  <iframe
                    src={item.src}
                    title={item.alt}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute top-3 right-3 bg-primary/80 p-2 rounded-full">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center birthday text */}
        <div className="text-center mt-16">
          <span className="font-display text-2xl md:text-3xl text-gold tracking-wider">HAPPY</span>
          <h2 className="font-display text-5xl md:text-7xl text-gradient italic -mt-2">
            birthday
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
