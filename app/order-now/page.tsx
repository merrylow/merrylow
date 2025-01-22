import Storefront from "@/components/ui/storefront/storefront";
import Link from "next/link";
import { fetchStoresAndProducts } from "@/lib/api";

export default async function OrderNow() {
     const { stores } = await fetchStoresAndProducts();
     

     return (
          <div className="mt-5 text-center">
               <section className="flex flex-col max-w-sm mx-auto items-center">
                    {
                         stores.map((store) => (
                              <Link href='#'>{store.name}</Link>
                         ))
                    }
               </section>

               <section className="mt-10">
                    {/* <p>Order now</p> */}
                    <Storefront />
               </section>
          </div>
     );
}