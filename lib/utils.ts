import { useCartContext } from "./contexts/CartContext";
import { Product, CartItem, Order } from "./definitions";
import { createOrder } from "./api";

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


export const handlePlaceOrder = async (order: Order) => {
     try {
          const orderResponse = await createOrder(order);
          console.log("Order placed successfully:", orderResponse);
          alert("Order placed successfully!");
     } catch (error) {
          console.error("Order failed:", error);
          alert("Failed to place order. Please try again.");
     }
}