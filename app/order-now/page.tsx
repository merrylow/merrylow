import Link from "next/link";
import { fetchStoresAndProducts } from "@/lib/api";
import SearchSection from "@/components/ui/order-now/searchSection";
import Dropdown from "@/components/ui/order-now/dropdown";


const OrderNowPage = async () => {
     // const query = (await searchParams).query
     const { stores, products } = await fetchStoresAndProducts();

     return (
          <section className="min-w-lg w-[100%] mx-auto">
               <div className="flex flex-col items-center min-w-sm w-[100%] h-auto mx-auto mt-5">
                    <Dropdown stores={stores} />
               </div>


               {/* client component for search functionalty */}
               <SearchSection stores={stores} products={products} />

          </section>
     );
}

export default OrderNowPage