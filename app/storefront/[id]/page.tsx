import { fetchStoresAndProducts } from "@/lib/api"; 
import { Store, Product, CartItem } from "@/lib/definitions";
import Image from "next/image";
import StorefrontButton from "@/components/ui/storefront/button";
import AddToCartButton from "@/components/ui/AddToCartButton";


export default async function StorefrontPage({ params }: { params: {id: string} }) {
     const storeId = parseInt(params.id, 10);
     if (isNaN(storeId)) {
          return <div>Invalid Store ID</div>;
     }
     // Fetch stores and products
     const { stores, products } = await fetchStoresAndProducts();

     if (!stores || !Array.isArray(stores)) {
          return <div>Error: Unable to fetch stores.</div>;
     }

     // Find the matching store
     const store: Store | undefined = stores.find((store) => store.id === Number(storeId));

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
          <section className="p-4">
               <h1 className="text-3xl font-bold mb-4">{store.name}</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                         menuItems.map((product) => {
                              return (
                                   <div key={product.id}>
                                        <p>{product.name}</p>
                                        <Image src={product.images[0].src} width={120} height={20} alt={product.name} />
                                        {/* <StorefrontButton product={product} /> */}
                                        <AddToCartButton product={product} />
                                   </div>
                              )
                         })
                    }
                    {/* <Storefront stores={stores} products={products} /> */}
               </div>
          </section>
     );
}