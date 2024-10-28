'use client'

import { Product } from '@/db/schema'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { formatPrice } from '@/lib/format'

export default function ProductDetail({ product }: { product: Product }) {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handlePurchase = async () => {
    if (!session) {
      toast({
        title: "ログインが必要です",
        description: "商品を購入するにはログインしてください。",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id }),
      })

      const { sessionId } = await response.json()
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error('Purchase error:', error)
      toast({
        title: "エラーが発生しました",
        description: "購入処理中にエラーが発生しました。もう一度お試しください。",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="relative aspect-square">
          <Image
            src={product.imageUrl || ''}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <CardHeader className="p-0">
            <CardTitle className="text-3xl">{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">{product.description}</p>
            <p className="text-2xl font-bold mt-4">{formatPrice(product.price)}</p>
          </CardContent>
          <CardFooter className="p-0">
            <Button
              className="w-full"
              onClick={handlePurchase}
              disabled={loading}
            >
              {loading ? '処理中...' : '購入する'}
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}