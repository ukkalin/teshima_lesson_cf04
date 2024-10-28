'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            デジタルストア
          </Link>
          
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <Link href="/purchases" className="hover:text-gray-600">
                  購入履歴
                </Link>
                <Link href="/profile" className="hover:text-gray-600">
                  プロフィール
                </Link>
                {session.user.role === 'ADMIN' && (
                  <Link href="/admin" className="hover:text-gray-600">
                    管理画面
                  </Link>
                )}
                <button
                  onClick={() => signOut()}
                  className="text-red-600 hover:text-red-700"
                >
                  ログアウト
                </button>
              </>
            ) : (
              <Link
                href="/auth/signin"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                ログイン
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}