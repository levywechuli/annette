import FloatingHearts from '@/components/FloatingHearts';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Images, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const sections = [
    {
      to: '/gallery',
      icon: Images,
      title: 'Photo Gallery',
      description: 'Relive our beautiful moments together',
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      to: '/love-letter',
      icon: Mail,
      title: 'Love Letter',
      description: 'A heartfelt message written just for you',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      to: '/wishes',
      icon: Sparkles,
      title: 'Birthday Wishes',
      description: 'Special wishes for your special day',
      gradient: 'from-pink-500 to-red-600',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FloatingHearts />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        
        {/* Navigation Cards Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-card/50 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-4 animate-fade-in">
              Explore More
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-xl mx-auto">
              Click on any section below to discover more surprises
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sections.map((section, index) => (
                <Link
                  key={section.to}
                  to={section.to}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-primary/20 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <section.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="text-foreground/60 mb-4">
                    {section.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
