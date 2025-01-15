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
