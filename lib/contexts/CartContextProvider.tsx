'use client';

import { ReactNode, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "../definitions";

const CartContextProvider = ({ children }: { children: ReactNode }) => {
     const [cart, setCart] = useState<CartItem[]>(() => {
          if (typeof window !== 'undefined') {
               const savedCart = localStorage.getItem('cart');
               return savedCart ? JSON.parse(savedCart) : [];
          }
          return [];
     });

     useEffect(() => {
          if (cart.length > 0) {
               localStorage.setItem('cart', JSON.stringify(cart));
          }
     }, [cart]);

     const addToCart = (cartItem: CartItem) => {
          setCart((prevCartItems) => [...prevCartItems, cartItem]);
     };

     const removeFromCart = (id: number) => {
          setCart((prevCart) => prevCart.filter((item) => item.id !== id));
     };

     return (
          <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
               {children}
          </CartContext.Provider>
     );
};

export default CartContextProvider;