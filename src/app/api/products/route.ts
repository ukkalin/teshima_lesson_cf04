import { NextResponse } from 'next/server'
import { db } from '@/db'
import { products } from '@/db/schema'
import { desc } from 'drizzle-orm'

export async function GET() {
  try {
    const allProducts = await db.select().from(products).orderBy(desc(products.createdAt))
    return NextResponse.json(allProducts)
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { name, description, price, imageUrl } = await req.json()
    
    const newProduct = await db.insert(products).values({
      id: crypto.randomUUID(),
      name,
      description,
      price,
      imageUrl,
      createdAt: new Date(),
      updatedAt: new Date()
    }).returning()

    return NextResponse.json(newProduct[0])
  } catch (error) {
    console.error('Failed to create product:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}