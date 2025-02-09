import Link from "next/link";
import { fetchStoresAndProducts } from "@/lib/api";
import SearchSection from "@/components/ui/order-now/searchSection";
import Dropdown from "@/components/ui/order-now/dropdown";


const OrderNowPage = async () => {
     // const query = (await searchParams).query
     const { stores, products } = await fetchStoresAndProducts();

     return (
          <section className="min-w-md w-[95%] mt-5 mx-auto">

               <div className="flex flex-col items-center min-w-sm w-[90%] h-auto mx-auto mt-10">
                    <Dropdown stores={stores} />
                    {/* {
                         stores.map((store) => (
                              <div key={store.id} className="border-b-[1.5px] w-[95%] mx-auto pb-1">
                                   <Link href={`#store-${store.id}`} className="hover:text-[#a12fda]">{store.name}</Link>
                              </div>
                         ))
                    } */}
               </div>


               {/* client component for search functionalty */}
               <SearchSection stores={stores} products={products} />

          </section>
     );
}

export default OrderNowPage