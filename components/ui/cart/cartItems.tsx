"use client";

import { useCartContext } from "@/lib/contexts/CartContext";
import Image from "next/image";
import PlaceOrderButton from "./placeOrderButton";
import { CartItem, Order } from "@/lib/definitions";
import EmptyCart from "./emptyCart";

const CartItems = () => {
     const { cart, removeFromCart } = useCartContext();

     const createOrderFromCart = (): Order => {
          return {
               payment_method: "cod", // Change this if needed
               payment_method_title: "Cash on Delivery",
               set_paid: false,
               billing: {
                    first_name: "John",
                    last_name: "Doe",
                    address_1: "123 Street",
                    city: "Accra",
                    country: "GH",
                    email: "john.doe@example.com",
               },
               shipping: {
                    first_name: "John",
                    last_name: "Doe",
                    address_1: "123 Street",
                    city: "Accra",
                    country: "GH",
               },
               line_items: cart.map((item) => ({
                    product_id: item.id, // Ensure item.id corresponds to product_id
                    quantity: 1, // Modify if needed
               })),
          };
     };

     if(cart.length === 0) {
          <EmptyCart />
     }

     return (
          <section className="p-4 mb-24">
               <ul>
                    {
                         cart.map((cartItem) => (
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
                         ))
                    }
               </ul>

               {cart.length > 0 && (
                    <div className="mt-4">
                         <PlaceOrderButton order={createOrderFromCart()} />
                    </div>
               )}

          </section>
     );
}

export default CartItems