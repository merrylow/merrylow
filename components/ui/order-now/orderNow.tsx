import { Store, Product } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton"; // Import Client Component

export default async function OrderNow({ stores, products }: { stores: Store[], products: Product[] }) {
     return (
          <section>
               <ul className="space-y-16">
                    {stores.map((store) => {
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
                                   {menuItems.map((menuItem) => (
                                        <div key={menuItem.id}>
                                             <section className="w-[40%] h-[40%]">
                                             <Image src={menuItem.images[0].src} alt={menuItem.name} width={64} height={24} />
                                             </section>

                                             <section>
                                             <p>{menuItem.name}</p>
                                             <p>c{menuItem.price}</p>
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
