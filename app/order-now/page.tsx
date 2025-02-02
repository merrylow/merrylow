import Link from "next/link";
import { Suspense, useState } from "react";
import { fetchStoresAndProducts } from "@/lib/api";
import OrderNow from "@/components/ui/order-now/orderNow";
import SearchSection from "@/components/ui/order-now/searchSection";


const OrderNowPage = async () => {
     // const query = (await searchParams).query
     const { stores, products } = await fetchStoresAndProducts();

     return (
          <section className="min-w-md w-[95%] mt-5 mx-auto">
               <div className="flex flex-col min-w-sm w-[90%] h-auto mx-auto space-y-4 mt-10">
                    {
                         stores.map((store) => (
                              <div key={store.id} className="border-b-[1.5px] w-[75%] mx-auto pb-1">
                                   <Link href={`#store-${store.id}`} className="hover:text-[#a12fda]">{store.name}</Link>
                                   {/* <div className="w-full h-[1px] bg-slate-900"></div> */}
                              </div>
                         ))
                    }
               </div>


               {/* client component for search functionalty */}
               <SearchSection />

               <div>
                    {/* <p>Order now</p>  */}
                    <OrderNow stores={stores} products={products} />
               </div>
          </section>
     );
}

export default OrderNowPage