import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/homepage/carousel"
import Autoplay from "embla-carousel-autoplay"
import StorefrontPreviews from "@/components/ui/homepage/storefrontPreview"



export default async function Home() {
  const images = [
    { src: '/slider-images/5-cedis-per-delivery.png', alt: "Image 1" },
    { src: '/slider-images/Free-Delivery.png', alt: "Image 2" },
    { src: '/slider-images/How-to-order.png', alt: "Image 3" },
  ];


  return (
    <main className="container mx-auto flex flex-col justify-between mt-5 space-y-20">
      <div className="container w-full h-full">

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
          <StorefrontPreviews />
        </section>
        
      </div>
    </main>
  );
}

