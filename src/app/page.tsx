import ProductGrid from '@/components/ProductGrid'
import { db } from '@/lib/db'
import { products } from '@/db/schema'
import { desc } from 'drizzle-orm'

export default async function Home() {
  const allProducts = await db.select().from(products).orderBy(desc(products.createdAt))

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">商品一覧</h1>
      <ProductGrid products={allProducts} />
    </div>
  )
}