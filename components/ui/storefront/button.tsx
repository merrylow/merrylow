// 'use client'
// import { useCartContext } from "@/lib/contexts/CartContext";
// import { Button } from "../button";
// import { Store, Product, CartItem } from "@/lib/definitions";
// import { fetchStoresAndProducts } from "@/lib/api";

// export default function StorefrontButton(product: Product) {
//      const { addToCart } = useCartContext();

//      const handleAddToCart = (product: Product) => {
//           // converts a product to a cart item
//           const newCartItem: CartItem = {
//                ...product,
//                'order-status': 'Pending',
//           };
          
//           addToCart(newCartItem);
//      }
     
//      return (
//           <button onClick={() => handleAddToCart(product)}>
//                Add to cart
//           </button>
//      );
// }


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
