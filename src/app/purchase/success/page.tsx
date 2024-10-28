import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { stripe } from '@/lib/stripe'
import { db } from '@/lib/db'
import { purchases } from '@/db/schema'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { eq } from 'drizzle-orm'

export default async function PurchaseSuccessPage({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    redirect('/auth/signin')
  }

  const { session_id } = searchParams
  if (!session_id) {
    redirect('/')
  }

  const purchase = await db
    .select()
    .from(purchases)
    .where(eq(purchases.stripeId, session_id))
    .get()

  if (!purchase) {
    redirect('/')
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>購入完了</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>ご購入ありがとうございます！</p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/purchases">購入履歴を見る</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">トップに戻る</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}