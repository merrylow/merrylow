'use client'

import { createContext, useContext } from "react";
import { CartContextType } from '@/lib/definitions' 


export const CartContext = createContext<CartContextType>({
     cart: [],
     addToCart: () => {},
     removeFromCart: () => {},
});

export const useCartContext = () => {
     const context = useContext(CartContext); 

     if (!context) {
          throw new Error("useCartContext must be used within a CartContextProvider");
     }
     return context;
}