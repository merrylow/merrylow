import { Product, Store } from "./definitions";



export async function fetchStoresAndProducts(): Promise<{ 
     stores: Store[]; 
     products: Product[] ;
}> {
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