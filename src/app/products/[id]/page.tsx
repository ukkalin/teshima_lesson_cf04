import { db } from '@/lib/db'
import { products } from '@/db/schema'
import ProductDetail from '@/components/ProductDetail'
import { notFound } from 'next/navigation'
import { eq } from 'drizzle-orm'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await db
    .select()
    .from(products)
    .where(eq(products.id, params.id))
    .get()

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}