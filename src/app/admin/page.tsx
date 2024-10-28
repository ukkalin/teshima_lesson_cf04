import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { purchases, users, products } from '@/db/schema'
import { redirect } from 'next/navigation'
import AdminDashboard from '@/components/AdminDashboard'
import { desc, eq } from 'drizzle-orm'

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user || session.user.role !== 'ADMIN') {
    redirect('/')
  }

  const allPurchases = await db
    .select()
    .from(purchases)
    .innerJoin(users, eq(purchases.userId, users.id))
    .innerJoin(products, eq(purchases.productId, products.id))
    .orderBy(desc(purchases.createdAt))

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">管理者ダッシュボード</h1>
      <AdminDashboard purchases={allPurchases} />
    </div>
  )
}