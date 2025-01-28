import { Product, Store } from "./definitions";

export const BASE_URL = process.env.NODE_ENV === "production"
     ? "https://merrylow.vercel.app"
     : "http://localhost:3000"



export async function fetchStoresAndProducts(): Promise<{ 
     stores: Store[]; 
     products: Product[] ;
}> {
     const storeResponse = await fetch(`${BASE_URL}/api/stores`);
     const stores: Store[] = await storeResponse.json();


     const productResponse = await fetch(`${BASE_URL}/api/products`);
     const products: Product[] = await productResponse.json();

     return { stores, products };
}


export async function fetchStorefront(storeId: any) {
     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stores/${storeId}`);

     const data = await response.json();
     return data;
}