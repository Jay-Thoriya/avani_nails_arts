import React from 'react';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/ProductCard';

// Sample best sellers data
const bestSellersProducts = [
  {
    id: 5,
    name: "Classic French Manicure Set",
    price: 32.99,
    image: "../assets/french-manicure-nails.jpg",
    description: "Our most popular classic French manicure set",
    category: "nail-set",
    rating: 4.9
  },
  {
    id: 6,
    name: "Rose Gold Shimmer Polish",
    price: 19.99,
    image: "/src/assets/rose-gold-nails.jpg",
    description: "Bestselling rose gold shimmer for elegant nails",
    category: "polish",
    rating: 4.8
  },
  {
    id: 7,
    name: "Blush Pink Gel Set",
    price: 27.99,
    image: "/src/assets/blush-pink-nails.jpg",
    description: "Customer favorite blush pink gel nail set",
    category: "gel-set",
    rating: 4.7
  },
  {
    id: 8,
    name: "Dusty Rose Essentials",
    price: 24.99,
    image: "/src/assets/dusty-rose-nails.jpg",
    description: "Our top-rated dusty rose nail essentials",
    category: "essentials",
    rating: 4.9
  }
];

const BestSellers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-2">Best Sellers</h1>
          <p className="text-center text-muted-foreground mb-8">
            Our most loved products that customers can't get enough of
          </p>
          
          <Separator className="my-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {bestSellersProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))}
          </div>
          
          <div className="bg-muted p-8 rounded-lg mt-16">
            <h2 className="text-2xl font-medium mb-6 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    ★★★★★
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"The French Manicure Set is absolutely perfect! Lasts for weeks and looks so natural."</p>
                <p className="font-medium">- Sarah T.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    ★★★★★
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"Rose Gold Shimmer is my go-to for special occasions. Always get compliments!"</p>
                <p className="font-medium">- Jessica M.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    ★★★★★
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">"Blush Pink Gel Set changed my nail game. So easy to apply and the color is gorgeous."</p>
                <p className="font-medium">- Emma L.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BestSellers;