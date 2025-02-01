import { NextRequest, NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';


const wc = new WooCommerceRestApi({
     url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL ?? '', 
     consumerKey: process.env.WC_CONSUMER_KEY ?? '', 
     consumerSecret: process.env.WC_CONSUMER_SECRET ?? '',
     version: 'wc/v3' 
});

export async function GET(request: NextRequest) {
     try {
          const response = await wc.get('orders'); 
          return NextResponse.json(response.data); 
     } catch (error) {
          console.error('Error fetching orders:', error);
          return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
     }
}



export async function POST(request: NextRequest) {
     try {
          const body = await request.json(); // Parse request body (should contain order details)
     
         // Send order data to WooCommerce
          const response = await wc.post('orders', body);
     
         return NextResponse.json(response.data, { status: 201 }); // 201 Created
     } catch (error) {
          console.error('Error creating order:', error);
          return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
     }
}