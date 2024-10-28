import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatPrice, formatDate } from "@/lib/format"

interface AdminDashboardProps {
  purchases: any[]
}

export default function AdminDashboard({ purchases }: AdminDashboardProps) {
  // 売上の集計
  const totalSales = purchases.reduce((sum, purchase) => sum + purchase.product.price, 0)
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>売上サマリー</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium">総売上</p>
              <p className="text-2xl font-bold">{formatPrice(totalSales)}</p>
            </div>
            <div>
              <p className="text-sm font-medium">総注文数</p>
              <p className="text-2xl font-bold">{purchases.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>最近の注文</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {purchases.map((purchase) => (
              <div
                key={purchase.id}
                className="flex items-center justify-between border-b pb-4 last:border-0"
              >
                <div>
                  <p className="font-medium">{purchase.user.name || purchase.user.email}</p>
                  <p className="text-sm text-muted-foreground">
                    {purchase.product.name} - {formatPrice(purchase.product.price)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(purchase.createdAt)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatPrice(purchase.product.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}