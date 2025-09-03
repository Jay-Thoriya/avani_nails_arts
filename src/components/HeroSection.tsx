import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Heart, Star } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury press-on nails"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="w-8 h-8 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Heart className="w-6 h-6 text-primary/40 fill-current" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
          <Star className="w-7 h-7 text-primary/35 fill-current" />
        </div>
        <div className="absolute bottom-40 right-16 animate-pulse delay-500">
          <Sparkles className="w-5 h-5 text-primary/25" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Badge */}
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-300">
          <Sparkles className="w-4 h-4 mr-2" />
          Premium Press-On Nails
        </Badge>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Luxury Nails
          </span>
          <br />
          <span className="text-foreground">
            Made Simple
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover our collection of premium press-on nails. 
          <span className="text-primary font-medium"> Salon-quality beauty </span>
          at your fingertips, ready in minutes.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Easy 5-minute application</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Lasts up to 2 weeks</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Damage-free removal</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="luxury" 
            size="xl" 
            className="shadow-luxury hover:shadow-glow"
          >
            Shop Collection
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="hero" 
            size="xl"
          >
            See How It Works
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background"></div>
              ))}
            </div>
            <span>10,000+ happy customers</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
            ))}
            <span className="ml-2">4.9/5 average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;