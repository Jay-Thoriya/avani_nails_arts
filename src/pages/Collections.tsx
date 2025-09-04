import React from 'react';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';

// Sample collections data
const collections = [
  {
    id: 1,
    name: "Summer Essentials",
    description: "Bright and vibrant colors perfect for summer",
    image: "/placeholder.svg",
    productCount: 12
  },
  {
    id: 2,
    name: "Wedding Collection",
    description: "Elegant and sophisticated designs for your special day",
    image: "/placeholder.svg",
    productCount: 8
  },
  {
    id: 3,
    name: "Everyday Classics",
    description: "Timeless colors and designs for everyday wear",
    image: "/placeholder.svg",
    productCount: 15
  },
  {
    id: 4,
    name: "Seasonal Trends",
    description: "Stay on trend with our seasonal collection",
    image: "/placeholder.svg",
    productCount: 10
  }
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-2">Collections</h1>
          <p className="text-center text-muted-foreground mb-8">
            Explore our curated nail collections for every occasion
          </p>
          
          <Separator className="my-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{collection.name}</h3>
                  <p className="text-muted-foreground mb-4">{collection.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{collection.productCount} products</span>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm hover:bg-primary/90">
                      View Collection
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Collections;