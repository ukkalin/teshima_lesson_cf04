import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatPrice } from "@/lib/format"
import { formatDate } from "@/lib/format"
import Link from "next/link"
import Image from "next/image"

interface PurchaseListProps {
  purchases: any[]
}

export default function PurchaseList({ purchases }: PurchaseListProps) {
  return (
    <div className="space-y-4">
      {purchases.map((purchase) => (
        <Card key={purchase.id}>
          <CardHeader>
            <CardTitle>購入日: {formatDate(purchase.createdAt)}</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href={`/products/${purchase.product.id}`} className="flex items-center gap-4">
              {purchase.product.imageUrl && (
                <div className="relative w-24 h-24">
                  <Image
                    src={purchase.product.imageUrl}
                    alt={purchase.product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold">{purchase.product.name}</h3>
                <p className="text-muted-foreground">{formatPrice(purchase.product.price)}</p>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}