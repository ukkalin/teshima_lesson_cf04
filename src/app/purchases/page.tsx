import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { purchases, products } from '@/db/schema'
import { redirect } from 'next/navigation'
import PurchaseList from '@/components/PurchaseList'
import { desc, eq } from 'drizzle-orm'

export default async function PurchasesPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    redirect('/auth/signin')
  }

  const userPurchases = await db
    .select()
    .from(purchases)
    .innerJoin(products, eq(purchases.productId, products.id))
    .where(eq(purchases.userId, session.user.id))
    .orderBy(desc(purchases.createdAt))

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">購入履歴</h1>
      <PurchaseList purchases={userPurchases} />
    </div>
  )
}