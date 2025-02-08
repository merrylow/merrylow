import { Store, Product } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../storefront/addToCartButton"; 


const AllStoresAndProducts = ({ stores, products, query } : { stores: Store[], products: Product[], query: string }) => {
     if (query && products.length === 0) {
          return (
               <section className="mb-56 text-center mt-10">
                    <p className="text-lg font-semibold text-gray-600">"{query}" not found</p>
               </section>
          );
     }


     return (
          <section className="mb-56">
               <ul className="space-y-16">
                    {stores.map((store) => {
                         const menuItems = products.filter(
                         (product) =>
                              product.store?.shop_name?.trim().toLowerCase() ===
                              store.name?.trim().toLowerCase()
                         );

                         // If filtering by search and this store has no matches, don't display it
                         if (query && menuItems.length === 0) return null;
               

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
                                                            <p>
                                                                 <span>{menuItem.currency}</span>
                                                                 {menuItem.price}.00
                                                            </p>
                                                       </div>
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

export default AllStoresAndProducts;