import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import AuthModal from './AuthModal';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_featured: boolean;
  stock_quantity: number;
}

interface ProductCardProps {
  product: Product;
  imageOverride?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, imageOverride }) => {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = async () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }

    await addToCart(product.id, 1);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <>
      <Card 
        className="group overflow-hidden transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 bg-gradient-card border-border/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="aspect-square bg-gradient-secondary relative overflow-hidden">
            <img
              src={imageOverride || product.image_url}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay with actions */}
            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full shadow-elegant hover:shadow-luxury"
                  onClick={handleWishlist}
                >
                  <Heart className={`w-4 h-4 ${
                    isWishlisted ? 'fill-current text-destructive' : ''
                  }`} />
                </Button>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <Button
                  variant="cart"
                  className="w-full shadow-elegant"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              {product.is_featured && (
                <Badge className="bg-primary text-primary-foreground shadow-soft">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Bestseller
                </Badge>
              )}
              {product.stock_quantity < 10 && (
                <Badge variant="destructive" className="shadow-soft">
                  Only {product.stock_quantity} left
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <CardContent className="p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mt-1">
                {product.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              
              <div className="flex items-center space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-sm text-muted-foreground ml-1">(4.9)</span>
              </div>
            </div>

            {/* Quick add button for desktop */}
            <Button
              variant="outline"
              className="w-full md:hidden group-hover:border-primary group-hover:text-primary"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </CardContent>
        </div>
      </Card>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default ProductCard;