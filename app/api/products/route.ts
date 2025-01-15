import { NextRequest, NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export async function GET(request: NextRequest) {
     const wc = new WooCommerceRestApi({
          url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL ?? '', 
          consumerKey: process.env.WC_CONSUMER_KEY ?? '', 
          consumerSecret: process.env.WC_CONSUMER_SECRET ?? '',
          version: 'wc/v3' 
     });


     try {
          const response = await wc.get('products'); 
          return NextResponse.json(response.data); 
     } catch (error) {
          console.error('Error fetching products:', error);
          return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
     }
}