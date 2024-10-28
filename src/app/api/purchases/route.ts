import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/db'
import { purchases, products } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const userPurchases = await db.select()
      .from(purchases)
      .innerJoin(products, eq(purchases.productId, products.id))
      .where(eq(purchases.userId, session.user.id))
      .orderBy(desc(purchases.createdAt))

    return NextResponse.json(userPurchases)
  } catch (error) {
    console.error('Failed to fetch purchases:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { productId, stripeId } = await req.json()
    
    const newPurchase = await db.insert(purchases).values({
      id: crypto.randomUUID(),
      userId: session.user.id,
      productId,
      stripeId,
      createdAt: new Date()
    }).returning()

    return NextResponse.json(newPurchase[0])
  } catch (error) {
    console.error('Failed to create purchase:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}