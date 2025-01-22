import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/homepage/carousel"
import Autoplay from "embla-carousel-autoplay"

import StorefrontPreview from "@/components/ui/storefront/storefrontPreview"
import Image from "next/image";



export default async function Home() {
  const images = [
    { src: "/slider-images/pic1.jpg", alt: "Image 1" },
    { src: "/slider-images/pic2.jpg", alt: "Image 2" },
    { src: "/slider-images/pic3.jpeg", alt: "Image 3" },
  ];


  return (
    <main className="container mx-auto flex flex-col justify-between mt-5 space-y-20">
      {/* slider */}
      <section className="min-w-[96%] w-[96%] mx-auto border-2 rounded-[10px]">
        {/* <Carousel>
          <CarouselContent className="border border-red-500">
            { 
              imagesArray.map((image) => (
                <CarouselItem>
                  <Image />
                </CarouselItem>
              ))
            }
            <CarouselItem>2</CarouselItem>
            <CarouselItem>3</CarouselItem>
          </CarouselContent>
          </Carousel> */}

        <Carousel images={images} imgHeight="h-[100%]" carouselHeight="h-[300px]" className="border border-red-700"> 
          <CarouselContent />
        </Carousel>

      </section>


      {/* storefront previews */}
      <section className="min-w-[96%] w-[96%] mx-auto h-[60%]">
        <StorefrontPreview />
      </section>
      
    </main>
  );
}

