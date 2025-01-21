
const Stores = async () => {
     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stores`);
     const stores = await response.json(); 

     return (
     <div className="flex flex-wrap -mx-2 overflow-hidden">
               <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4">
               <ul>
                    {stores.map((store: any, index: number) => (
                         <li key={index}>
                              <div>
                                   {store.name}
                              </div>
                              {/* <div>{order.short_description}</div> */}
                              {/* <div>
                                   <Image src={order.images[0].src} width={100} height={100} alt={product.name} />
                              </div> */}
                         </li> 
                    ))}
                    {/* {products[0].name} */}
               </ul>
               </div>
     </div>
     );
};

export default Stores;