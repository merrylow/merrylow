"use client";

import { useState, useEffect } from "react";
import { useCartContext } from "@/lib/contexts/CartContext";
import Image from "next/image";
import Loading from "./loading";


export default function CartPage() {
     const { cart, removeFromCart } = useCartContext();

     const [isHydrated, setIsHydrated] = useState(false);

     useEffect(() => {
          // After page is hydrated, set state to prevent mismatch
          setIsHydrated(true);
     }, []);

     // If not hydrated yet, load
     if (!isHydrated) {
          return <Loading />
     }



     return (
     <div className="p-4 mb-24">
          <h1 className="text-2xl font-bold mb-4">Cart</h1>
               <ul>
                    {cart.map((cartItem) => (
                         <li key={cartItem.id} className="border p-2 mb-2">
                              <h2 className="text-lg">{cartItem.name}</h2>
                              <p>Status: {cartItem['order-status']}</p>
                              <Image src={cartItem.images[0].src} alt={cartItem.name} width={120} height={40} />
                              <button
                                   className="text-red-500"
                                   onClick={() => removeFromCart(cartItem.id)}
                              >
                                   Remove
                              </button>
                         </li>
                    ))}
               </ul>
     </div>
     );
}