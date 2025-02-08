import Link from "next/link";
import { fetchStoresAndProducts } from "@/lib/api";
import SearchSection from "@/components/ui/order-now/searchSection";
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const OrderNowPage = async () => {
     // const query = (await searchParams).query
     const { stores, products } = await fetchStoresAndProducts();

     return (
          <section className="min-w-md w-[95%] mt-5 mx-auto">
               <div className="flex flex-col min-w-sm w-[90%] h-auto mx-auto space-y-4 mt-8">
                    <DropdownMenu>
                         <DropdownMenuTrigger className="w-[80%] h-8 text-[15px] mx-auto rounded-[4px] shadow-md border border-slate-200">
                              {stores[0].name} and more...
                         </DropdownMenuTrigger>
                         <DropdownMenuContent className="w-[21.5em] h-36 bg-[#16191ede] overflow-y-scroll border border-slate-300">
                              <DropdownMenuLabel className="text-white">Stores</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              {
                                   stores.map((store) => (
                                        <div key={store.id} className="border-b-[1.5px] w-[95%] mx-auto pb-1 text-white">
                                             <DropdownMenuItem>
                                                  <Link href={`#store-${store.id}`}>
                                                       {store.name}
                                                  </Link>
                                             </DropdownMenuItem>
                                        </div>
                                   ))
                              }
                         </DropdownMenuContent>
                    </DropdownMenu>
               </div>


               {/* client component for search functionalty */}
               <SearchSection stores={stores} products={products} />

          </section>
     );
}

export default OrderNowPage