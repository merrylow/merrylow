import { Store, Product } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../storefront/addToCartButton"; // Import Client Component
import FuzzySet from "fuzzyset";
import { Button } from "../button";
import StorefrontButton from "../storefront/addToCartButton";


export default async function OrderNow({ stores, products }: { stores: Store[], products: Product[] }) {
     return (
          <section className="mb-56">
               <ul className="space-y-16">
                    {stores.map((store) => {
                         // const menuItems = products.filter(
                         // (product) =>
                         //      product.store?.shop_name?.trim().toLowerCase() ===
                         //      store.name?.trim().toLowerCase()


                         // );
                         
                         const menuItems = products.filter((product) => {
                              const normalizedProductName = product.store?.shop_name?.trim().toLowerCase();
                              const normalizedStoreName = store.name?.trim().toLowerCase();
                              
                              if (!normalizedProductName || !normalizedStoreName) {
                                   return false; 
                              }
                              
                              const storeSet = FuzzySet([normalizedStoreName]); 
                              const match = storeSet.get(normalizedProductName); 
                              
                              return match && match[0][0] >= 0.8; // Adjust threshold as needed
                         });
                         
                         

                         return (

                              <li key={store.id} id={`store-${store.id}`} className="w-[90%] flex flex-col justify-between mx-auto pt-5 space-y-6">
                                   <div className="">
                                        <Link href={`/storefront/${store.id}`} className="text-[18px] text-[#a12fda]">
                                             {store.name}
                                        </Link>
                                   </div>

                                   {/* menu */}
                                   <div className="space-y-6">
                                        {menuItems.map((menuItem) => (
                                             <div key={menuItem.id} className="flex items-center h-28 space-x-3">
                                                  <section className="w-[35%] h-28 flex items-center">
                                                       <Image 
                                                       src={menuItem.images[0].src} 
                                                       alt={menuItem.name} 
                                                       width={300}
                                                       height={300} 
                                                       style={{width: '100%', height: '100%'}}
                                                       className="object-cover rounded-[6px]" />
                                                  </section>

                                                  <section className="h-[95%] flex flex-col justify-center space-y-4">
                                                       <div>
                                                            <p className="text-[14.5px]">{menuItem.name}</p>
                                                            <p>c{menuItem.price}.00</p>
                                                       </div>
                                                       {/* <AddToCartButton product={menuItem} /> */}
                                                       <AddToCartButton product={menuItem} />
                                                  </section>
                                             </div>
                                        ))}
                                   </div>
                              </li>
                         );
                    })}
               </ul>
          </section>
     );
}
