
import { fetchStoresAndProducts } from "@/lib/api"; 
import { Store, Product, CartItem } from "@/lib/definitions";
import { useCartContext } from "@/lib/contexts/CartContext";
import Image from "next/image";
import StorefrontButton from "@/components/ui/storefront/button";


export default async function StorefrontPage({ params }: { params: { id: string } }) {
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
     (product: Product) =>
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
                                        <StorefrontButton product={product} />
                                   </>
                              )
                         })
                    }
                    {/* <Storefront stores={stores} products={products} /> */}
               </div>
          </div>
     );
}


export async function generateStaticParams() {
     // const { stores } = await fetchStoresAndProducts();
     // const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
     const BASE_URL = process.env.NODE_ENV === "production"
          ? "https://merrylow.vercel.app"
          : "http://localhost:3000";

     const response = await fetch(`${BASE_URL}/api/stores`);
     const stores = await response.json();

     if (!stores || !Array.isArray(stores)) {
          throw new Error("Unable to fetch stores for static params.");
     }

     const params =  stores.map((store) => ({
          id: store.id.toString(),
     }));

     return params;
}