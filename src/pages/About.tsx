import React from 'react';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-2">About Us</h1>
          <p className="text-center text-muted-foreground mb-8">
            Our story, mission, and commitment to quality
          </p>
          
          <Separator className="my-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <h2 className="text-2xl font-medium mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                LuxeNails was founded in 2020 with a simple mission: to provide high-quality, 
                affordable nail products that allow everyone to express their personal style.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small online store has grown into a beloved brand with customers 
                worldwide. Our commitment to quality and innovation has never wavered.
              </p>
              <p className="text-muted-foreground">
                We believe that beautiful nails should be accessible to everyone, regardless of skill level. 
                That's why we create products that are easy to use and provide professional results.
              </p>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Our team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-medium mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We use only the finest ingredients and materials in our products to ensure 
                  long-lasting wear and vibrant colors.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly researching and developing new formulas and designs to 
                  stay ahead of trends and meet our customers' needs.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing our environmental impact through eco-friendly 
                  packaging and cruelty-free formulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;