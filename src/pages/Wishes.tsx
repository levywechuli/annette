import Navigation from "@/components/Navigation";
import WishesSection from "@/components/WishesSection";
import FloatingHearts from "@/components/FloatingHearts";
import Footer from "@/components/Footer";

const Wishes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <FloatingHearts />
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4 animate-fade-in">
            Birthday Wishes
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Heartfelt wishes for the most amazing person in my life.
          </p>
        </div>
        
        <WishesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishes;
