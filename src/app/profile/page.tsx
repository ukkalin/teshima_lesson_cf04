import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { users } from '@/db/schema'
import { redirect } from 'next/navigation'
import ProfileForm from '@/components/ProfileForm'
import { eq } from 'drizzle-orm'

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    redirect('/auth/signin')
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, session.user.id))
    .get()

  if (!user) {
    redirect('/auth/signin')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">プロフィール設定</h1>
      <ProfileForm user={user} />
    </div>
  )
}