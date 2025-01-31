import { fetchStoresAndProducts } from "@/lib/api"; 
import { Store, Product } from "@/lib/definitions";
import Image from "next/image";
import AddToCartButton from "@/components/ui/AddToCartButton";




export default async function StorefrontPage({ params }: { params: Promise<{ id: string }> }) {
     // const storeId = parseInt(params.id, 10);
     const storeId = Number((await params).id);
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
          <section className="p-4 mb-4 mt-4">
               <div>
                    <h1 className="text-3xl text-center font-bold">{store.name}</h1>
                    <div className="w-8 h-[1.6px] bg-[#a12fda] mt-1 mx-auto"></div>
               </div>

               <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-20 mx-auto">
                    {
                         menuItems.map((product) => {
                              return (
                                   <div key={product.id}>
                                        <div className="space-y-6">
                                             {menuItems.map((menuItem) => (
                                                  <div key={menuItem.id} className="flex items-center h-28 space-x-3">
                                                       <section className="w-[35%] h-28 flex items-center">
                                                            <Image 
                                                            src={menuItem.images[0].src} 
                                                            alt={menuItem.name} 
                                                            width={300}
                                                            height={300} 
                                                            style={{width: '100%', height: '100%'}}
                                                            className="object-cover rounded-[6px]" />
                                                       </section>

                                                       <section className="h-[95%] flex flex-col justify-center space-y-4">
                                                            <div>
                                                                 <p className="text-[14.5px]">{menuItem.name}</p>
                                                                 <p>c{menuItem.price}.00</p>
                                                            </div>
                                                            <AddToCartButton product={menuItem} />
                                                       </section>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                              )
                         })
                    }
                    {/* <Storefront stores={stores} products={products} /> */}
               </div>
          </section>
     );
}