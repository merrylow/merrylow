import { fetchStoresAndProducts } from "@/lib/api"; 
import { Store } from "@/lib/definitions";
import Image from "next/image";

export default async function Storefront({ params }: { params: { id: string } }) {
     // Fetch stores and products
     const { stores, products } = await fetchStoresAndProducts();


     if (!stores || !Array.isArray(stores)) {
          return <div>Error: Unable to fetch stores.</div>;
     }

     // Find the matching store
     const store: Store | undefined = stores.find((store) => store.id === Number(params.id));

     if (!store) {
          return <div>Store not found</div>;
     }


     // drafts a menu
     const menuItems = products.filter(
     (product) =>
          product.store?.shop_name?.trim().toLowerCase() ===
          store.name?.trim().toLowerCase()
     );


     return (
          <div className="p-4">
               <h1 className="text-3xl font-bold mb-4">{store.name}</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                         menuItems.map((product) => {

                              return (
                                   <>
                                        <p>{product.name}</p>
                                        <Image src={product.images[0].src} width={120} height={20} alt={product.name} />
                                   </>
                              )
                         })
                    }
               </div>
          </div>
     );
}

export async function generateStaticParams() {
     const { stores } = await fetchStoresAndProducts();

     if (!stores || !Array.isArray(stores)) {
          throw new Error("Unable to fetch stores for static params.");
     }

     const params =  stores.map((store) => ({
          id: store.id.toString(),
     }));

     return params;
}