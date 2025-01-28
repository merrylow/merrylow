import { useCartContext } from "./contexts/CartContext";
import { Product, CartItem } from "./definitions";

export function cn(...classes: (string | undefined | null | false)[]): string {
     return classes.filter(Boolean).join(" ");
}



export const handleAddToCart = (product: Product) => {
     const { addToCart } = useCartContext();
     // converts a product to a cart item
     const newCartItem: CartItem = {
          ...product,
          'order-status': 'Pending',
     };
     
     addToCart(newCartItem);
}
