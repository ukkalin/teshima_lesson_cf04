import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { db } from '@/db'
import { purchases } from '@/db/schema'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('stripe-signature') as string

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return new NextResponse('Webhook Error', { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    try {
      await db.insert(purchases).values({
        id: crypto.randomUUID(),
        userId: session.metadata.userId,
        productId: session.metadata.productId,
        stripeId: session.id,
        createdAt: new Date()
      })
    } catch (error) {
      console.error('Failed to create purchase record:', error)
      return new NextResponse('Failed to process webhook', { status: 500 })
    }
  }

  return new NextResponse('Webhook processed', { status: 200 })
}