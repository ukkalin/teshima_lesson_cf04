import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/providers/auth-provider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'デジタルコンテンツストア',
  description: 'デジタルコンテンツを販売するオンラインストア',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}