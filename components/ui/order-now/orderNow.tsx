'use client'
// import { useCartContext } from "@/lib/contexts/CartContext";
import { Store, Product, CartItem } from "@/lib/definitions";
import { handleAddToCart } from "@/lib/utils";
import { Button } from "../button";
import Image from "next/image";
import Link from "next/link";


export default async function OrderNow({ stores, products }: { stores: Store[], products: Product[]}) {
     // const { addToCart } = useCartContext();

     const images = [
          { src: "/slider-images/pic1.jpg", alt: "Image 1" },
          { src: "/slider-images/pic2.jpg", alt: "Image 2" },
          { src: "/slider-images/pic3.jpeg", alt: "Image 3" },
     ];



     return (
          <section>
               <ul className="space-y-16">
                    {
                         stores.map(async (store) => {
                              const menuItems = products.filter(
                                   (product) =>
                                        product.store?.shop_name?.trim().toLowerCase() ===
                                        store.name?.trim().toLowerCase()
                              );
                              
                              return (
                                   <li key={store.id}>
                                        <div>
                                             <Link href={`/storefront/${store.id}`}>
                                                  {store.name}
                                             </Link>
                                        </div>
                                        {/* menu */}
                                        <div>
                                             {
                                                  menuItems.map((menuItem) => (
                                                       <div>
                                                            <section className="w-[40%] h-[40%]">
                                                                 <Image src={menuItem.images[0].src} alt={menuItem.name} width={64} height={24} />
                                                            </section>

                                                            <section>
                                                                 <p>{menuItem.name}</p>
                                                                 <p>c{menuItem.price}</p>
                                                                 <Button onClick={() => handleAddToCart(menuItem)}>Add to cart</Button>
                                                                 
                                                            </section>
                                                       </div>
                                                  ))
                                             }
                                        </div>
                                   </li>
                              )
                         })
                    }
               </ul>
          </section>
     );
}