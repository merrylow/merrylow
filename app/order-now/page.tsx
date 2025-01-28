import OrderNow from "@/components/ui/order-now/orderNow";
import Link from "next/link";
import { fetchStoresAndProducts } from "@/lib/api";

export default async function OrderNowPage() {
     const { stores, products } = await fetchStoresAndProducts();
     

     return (
          <section className="min-w-md w-[95%] mt-5 mx-auto">
               <div className="flex flex-col min-w-sm w-[90%] h-auto mx-auto items-center space-y-1">
                    {
                         stores.map((store) => (
                              <Link href='#' key={store.id}>{store.name}</Link>
                         ))
                    }
               </div>

               <div className="w-[90%] min-w-sm mx-auto mt-10">
                    {/* <p>Order now</p> */}
                    <OrderNow stores={stores} products={products} />
               </div>
          </section>
     );
}