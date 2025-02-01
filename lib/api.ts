import { Product, Store, Order} from "./definitions";



const fetchStoresAndProducts = async (): Promise<{ 
     stores: Store[]; 
     products: Product[] ;
}> => {
     const BASE_URL = process.env.NODE_ENV === "production"
     ? "https://merrylow.vercel.app"
     : "http://localhost:3000";


     try {
          const storeResponse = await fetch(`${BASE_URL}/api/stores`);
          const stores: Store[] = await storeResponse.json();
     
     
          const productResponse = await fetch(`${BASE_URL}/api/products`);
          const products: Product[] = await productResponse.json();
     
          return { stores, products };
     } catch(error) {
          console.error("Error fetching stores and products:", error);
          return { stores: [], products: [] }; 
     }
}


const createOrder = async (order: Order) => {
     const BASE_URL = process.env.NODE_ENV === "production"
     ? "https://merrylow.vercel.app"
     : "http://localhost:3000";

     try {
          const orderResponse = await fetch(`${BASE_URL}/api/orders`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${btoa(
                    `${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`
               )}`,
               },
               body: JSON.stringify(order),
          });

          if (!orderResponse.ok) {
               throw new Error(`Error: ${orderResponse.status} - ${orderResponse.statusText}`);
          }
     
          return await orderResponse.json();

     } catch(error: any) {
          console.error("Error creating order:", error);
          throw new Error(error.message || "Failed to create order");
     }
}


export { fetchStoresAndProducts, createOrder }