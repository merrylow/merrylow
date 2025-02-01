import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/homepage/carousel"
import StorefrontPreviews from "@/components/ui/homepage/storefrontPreview"



const Home = async () => {
  const images = [
    { src: '/slider-images/5-cedis-per-delivery.png', alt: "Image 1" },
    { src: '/slider-images/Free-Delivery.png', alt: "Image 2" },
    { src: '/slider-images/How-to-order.png', alt: "Image 3" },
  ];


  return (
    <main className="container mx-auto flex flex-col justify-between mt-5 space-y-20">
      <div className="container w-full h-full">
        {/* slider */}
        <section className="min-w-[96%] w-[96%] mx-auto border-2 rounded-[25px] shadow-2xl">
          <Carousel images={images} className="border border-red-700 rounded-[25px]" opts={{
            align: 'start',
            loop: true,
          }}> 
            <CarouselContent />
          </Carousel>

        </section>


        {/* storefront previews */}
        <section className="min-w-[96%] w-[96%] mx-auto h-[60%] mt-12">
          <h1 className="flex flex-col items-center text-[#b532f7] text-2xl">
            Restaurants
            <div className="w-1 h-[1px] bg-[#b532f7]"></div>
          </h1>

          <div className="mt-6">
            <StorefrontPreviews />
          </div>
        </section>
        
      </div>
    </main>
  );
}

export default Home