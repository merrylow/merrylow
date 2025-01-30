'use client'

import { useCartContext } from "@/lib/contexts/CartContext";
import { Product, CartItem } from "@/lib/definitions";

export default function StorefrontButton({ product }: { product: Product }) {
     const { addToCart } = useCartContext();

     const handleAddToCart = () => {
          const newCartItem: CartItem = {
               ...product,
               'order-status': 'Pending',
          };
          addToCart(newCartItem);
     };

     return <button onClick={handleAddToCart}>Add to cart</button>;
     }
