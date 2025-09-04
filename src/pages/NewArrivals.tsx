import React from 'react';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/ProductCard';

// Sample new arrivals data
const newArrivalsProducts = [
  {
    id: 1,
    name: "French Manicure Set",
    price: 24.99,
    image: "/placeholder.svg",
    description: "Classic French manicure set for elegant nails",
    category: "nail-set",
    isNew: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Rose Quartz Nail Polish",
    price: 18.99,
    image: "/placeholder.svg",
    description: "Stunning rose quartz finish for elegant nails",
    category: "polish",
    isNew: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Pastel Dreams Nail Set",
    price: 29.99,
    image: "/placeholder.svg",
    description: "Soft pastel colors for a dreamy manicure",
    category: "nail-set",
    isNew: true,
    rating: 4.9
  },
  {
    id: 4,
    name: "Dusty Rose Collection",
    price: 22.99,
    image: "/placeholder.svg",
    description: "Elegant dusty rose shades for a sophisticated look",
    category: "collection",
    isNew: true,
    rating: 4.6
  }
];

const NewArrivals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-2">New Arrivals</h1>
          <p className="text-center text-muted-foreground mb-8">
            Discover our latest nail products, fresh from our design studio
          </p>
          
          <Separator className="my-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {newArrivalsProducts.map((product) => (
              <div key={product.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    New
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">${product.price}</span>
                    <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90">
                      Add to Cart
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

export default NewArrivals;