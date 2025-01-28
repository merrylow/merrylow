import { Product, Store } from "./definitions";

const BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL;


export const API = {
     PRODUCTS: `${BASE_URL}/wp-json/wp/v2/products`,
     POSTS: `${BASE_URL}/wp-json/wp/v2/posts`,
     ORDERS: `${BASE_URL}/wp-json/wp/v2/orders`, 
     MENUS: `${BASE_URL}/wp-json/wp/v2/menus`,
};


// fetch products
export async function fetchProducts() {
     const response = await fetch('api/products');

     if(!response.ok) {
          throw new Error('Failed to fetch products');
     } 

     return response.json();
}


export async function fetchStores() {
     const response = await fetch('api/products/stores');

     if(!response.ok) {
          throw new Error('Failed to fetch products');
     } 

     return response.json();
}


export async function fetchStoresAndProducts(): Promise<{ 
     stores: Store[]; 
     products: Product[] ;
}> {
     const storeResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stores`);
     const stores: Store[] = await storeResponse.json();


     const productResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
     const products: Product[] = await productResponse.json();

     return { stores, products };
}


export async function fetchStorefront(storeId: any) {
     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stores/${storeId}`);

     const data = await response.json();
     return data;
}