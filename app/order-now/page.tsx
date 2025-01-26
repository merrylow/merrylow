import Storefront from "@/components/ui/storefront/storefront";
import Link from "next/link";
import { fetchStoresAndProducts } from "@/lib/api";

export default async function OrderNow() {
     const { stores } = await fetchStoresAndProducts();
     

     return (
          <div className="min-w-md w-[95%] mt-5 mx-auto">
               <section className="flex flex-col min-w-sm w-[90%] h-auto mx-auto items-center space-y-1">
                    {
                         stores.map((store) => (
                              <Link href='#' className="">{store.name}</Link>
                         ))
                    }
               </section>

               <section className="w-[90%] min-w-sm mx-auto mt-10">
                    {/* <p>Order now</p> */}
                    <Storefront />
               </section>
          </div>
     );
}