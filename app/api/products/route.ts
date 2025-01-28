import { NextRequest, NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export async function GET(request: NextRequest) {
     const wc = new WooCommerceRestApi({
          url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL ?? '',
          consumerKey: process.env.WC_CONSUMER_KEY ?? '',
          consumerSecret: process.env.WC_CONSUMER_SECRET ?? '',
          version: 'wc/v3'
     });

     const allProducts: any[] = [];
     const perPage = 100; // Maximum allowed by WooCommerce API
     let page = 1;

     try {
          while (true) {
               const response = await wc.get('products', {
                    per_page: perPage,
                    page: page,
                    _embed: true, // Includes additional media data
               });

               const products = response.data;
               allProducts.push(...products);

               // If the number of products returned is less than `per_page`, we've reached the last page
               if (products.length < perPage) {
                    break;
               }

               page++; // Move to the next page
          }

          return NextResponse.json(allProducts);
     } catch (error) {
          console.error('Error fetching products:', error);
          return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
     }
}
