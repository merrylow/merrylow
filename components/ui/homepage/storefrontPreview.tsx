"use server";
import { fetchStoresAndProducts } from "@/lib/api";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/homepage/carousel";
import Image from "next/image";
import Link from "next/link";
import FuzzySet from "fuzzyset";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default async function StorefrontPreviews() {
     const { stores, products } = await fetchStoresAndProducts();
     // console.log(stores);

     return (
          <section className="w-full h-full px-4 mb-36">
               <ul className="w-full space-y-10">
                    {stores.map((store) => {
                         const menuItems = products.filter((product) => {
                              const normalizedProductName = product.store?.shop_name?.trim().toLowerCase();
                              const normalizedStoreName = store.name?.trim().toLowerCase();

                              if (!normalizedProductName || !normalizedStoreName) {
                                   return false;
                              }

                              const storeSet = FuzzySet([normalizedStoreName]);
                              const match = storeSet.get(normalizedProductName);

                              return match && match[0][0] >= 0.8;
                         });

                         const uniqueImages = menuItems.reduce((unique: any[], product: any) => {
                              const imageUrl = product.images[0]?.src;
                              if (imageUrl && !unique.some((item) => item.src === imageUrl)) {
                                   unique.push({ src: imageUrl, name: product.name });
                              }
                              return unique;
                         }, []);

                         return (
                              <li key={store.id} className="flex flex-col">
                                   <Link href={`/storefront/${store.id}`} className="w-full space-y-2">
                                        <section className="flex items-center text-[#b532f7]">
                                             <p className="text-md font-semibold">{store.name}</p>
                                             <ChevronRightIcon className="w-5" />
                                        </section>

                                        {/* Carousel Wrapper */}
                                        <section className="mt-3 h-64 overflow-hidden">
                                             <Carousel images={uniqueImages} className="w-full max-w-full overflow-hidden" opts={{ align: 'start', loop: true }} autoplay={false}>
                                                  <CarouselContent className="flex gap-2 overflow-x-auto scrollbar-hide flex-nowrap">
                                                       {uniqueImages.map((image) => (
                                                            <CarouselItem 
                                                                 key={image.src} 
                                                                 className="basis-1/3 h-48 md:h-64">
                                                                 <Image
                                                                      src={image.src}
                                                                      alt={image.name}
                                                                      className="w-full h-full object-cover rounded-lg"
                                                                 /> 
                                                            </CarouselItem>
                                                       ))}
                                                  </CarouselContent>
                                             </Carousel>
                                        </section>
                                   </Link>
                              </li>
                         );
                    })}
               </ul>
          </section>
     );
}
