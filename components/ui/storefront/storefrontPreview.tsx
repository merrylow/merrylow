'use server'
import { fetchStoresAndProducts } from "@/lib/api";
import {
     Carousel,
     CarouselContent,
     CarouselItem,
     // CarouselNext,
     // CarouselPrevious,
} from "@/components/ui/homepage/carousel"
// import Autoplay from "embla-carousel-autoplay"
// import Link from "next/link";




export default async function StorefrontPreview() {
     const { stores, products } = await fetchStoresAndProducts();

     return (
          <section className="h-full">
               <ul className="w-full h-full space-y-10">
                    {stores.map(async (store, index) => {
                         const storeProducts = products.filter(
                              (product) =>
                                   product.store?.shop_name?.trim().toLowerCase() ===
                                   store.name?.trim().toLowerCase()
                         );
                         // console.log(storeProducts.length);

                         // Filter out duplicate images based on URL
                         const uniqueImages = storeProducts.reduce((unique: any[], product: any) => {
                              const imageUrl = product.images[0]?.src; // Get the image URL of the product

                              if (imageUrl && !unique.some(item => item.src === imageUrl)) {
                                   unique.push({ src: imageUrl, name: product.name });
                              }
                              
                              return unique;
                         }, []);

                         return (
                              <li key={index} className="border-2 border-red-600 h-48 flex flex-col">
                                        <section>
                                             {/* <Link href={`/stores/${store.slug}`}> */}
                                             <a>{store.name}</a>
                                             {/* </Link> */}
                                        </section>

                                        <section className="carousel">
                                             <div className="carousel-container">
                                                  <Carousel images={uniqueImages} imgHeight='h-[65%] w-[60%]' plugins={[]}> 
                                                       <CarouselContent className="border-2 border-yellow-400" />
                                                  </Carousel>
                                             </div>
                                        </section>
                              
                              </li>
                         );
                    })}
               </ul>
          </section>
     );
}