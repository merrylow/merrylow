import { fetchStoresAndProducts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";


export default async function Storefront() {
     const { stores, products } = await fetchStoresAndProducts();


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
                              // console.log(storeProducts)
                              
                              return (
                                   <li>
                                        <div>
                                             <Link href=''>
                                                  {store.name}
                                             </Link>
                                        </div>
                                        {/* menu */}
                                        <div>
                                             <Link href=''>
                                                  {
                                                       menuItems.map((storeProduct) => (
                                                            <div>
                                                                 <section className="w-[40%] h-[40%]">
                                                                      <Image src={storeProduct.images[0].src} alt={storeProduct.name} width={64} height={24} />
                                                                 </section>

                                                                 <section>
                                                                      <p>{storeProduct.name}</p>
                                                                      <p>c{storeProduct.price}</p>
                                                                      
                                                                 </section>
                                                            </div>
                                                       ))
                                                  }
                                             </Link>
                                        </div>
                                   </li>
                              )
                         })
                    }
               </ul>
          </section>
     );
}