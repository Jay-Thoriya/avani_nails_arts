import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, TrendingUp } from 'lucide-react';

// Import our beautiful product images
import roseGoldImage from '@/assets/rose-gold-nails.jpg';
import blushPinkImage from '@/assets/blush-pink-nails.jpg';
import frenchManicureImage from '@/assets/french-manicure-nails.jpg';
import dustyRoseImage from '@/assets/dusty-rose-nails.jpg';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_featured: boolean;
  stock_quantity: number;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Map product names to our generated images
  const imageMap: { [key: string]: string } = {
    'Rose Gold Elegance': roseGoldImage,
    'Blush Pink Classics': blushPinkImage,
    'French Manicure Deluxe': frenchManicureImage,
    'Dusty Rose Dreams': dustyRoseImage,
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const allProducts = data || [];
      setProducts(allProducts);
      setFeaturedProducts(allProducts.filter(product => product.is_featured));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-muted rounded-lg mb-4"></div>
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              Bestsellers
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Customer Favorites
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most loved press-on nail sets, chosen by thousands of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                imageOverride={imageMap[product.name]}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              View All Bestsellers
              <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      )}

      {/* All Products Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-secondary/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our full range of premium press-on nails in various styles and colors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              imageOverride={imageMap[product.name]}
            />
          ))}
        </div>

        {products.length === 0 && !loading && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No products available at the moment.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductGrid;