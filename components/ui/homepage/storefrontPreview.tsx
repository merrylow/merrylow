'use server'
import { fetchStoresAndProducts } from "@/lib/api";
import {
     Carousel,
     CarouselContent,
     CarouselItem,
} from "@/components/ui/homepage/carousel"
// import Autoplay from "embla-carousel-autoplay"
// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";




export default async function StorefrontPreview() {
     const { stores, products } = await fetchStoresAndProducts();

     return (
          <section className="h-full">
               <ul className="w-full h-full space-y-10">
                    {stores.map(async (store) => {
                         const menuItems = products.filter(
                              (product) =>
                                   product.store?.shop_name?.trim().toLowerCase() ===
                                   store.name?.trim().toLowerCase()
                         );


                         // Filter out duplicate images based on URL
                         const uniqueImages = menuItems.reduce((unique: any[], product: any) => {
                              const imageUrl = product.images[0]?.src; // Get the image URL of the product

                              if (imageUrl && !unique.some(item => item.src === imageUrl)) {
                                   unique.push({ src: imageUrl, name: product.name });
                              }
                              
                              return unique;
                         }, []);

                         return (
                              <li key={store.id} className="h-48 flex flex-col spacing-y-36">
                                   <div className="w-full h-full">
                                        <section>
                                             <p>{store.name}</p>
                                        </section>

                                        <section className="carousel">
                                             <div className="carousel-container">
                                                  <Carousel images={uniqueImages} imgHeight='h-full' carouselHeight="w-[35%] h-[200px]" plugins={[]}> 
                                                       <CarouselContent className="" />
                                                  </Carousel>
                                             </div>
                                        </section>
                                   </div>
                              
                              </li>
                         );
                    })}
               </ul>
          </section>
     );
}