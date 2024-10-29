import { db } from '@/db'
import { products, users } from './schema'
import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'

async function seed() {
  try {
    // Check if admin user already exists
    const existingAdmin = await db.query.users.findFirst({
      where: eq(users.email, 'admin@example.com')
    })

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10)
      
      console.log('Creating admin user...')
      await db.insert(users).values({
        id: 'admin',
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    // Check if products already exist
    const existingProducts = await db.select().from(products)
    
    if (existingProducts.length === 0) {
      console.log('Creating sample products...')
      await db.insert(products).values([
        {
          id: 'prod_1',
          name: 'デジタルアートワーク',
          description: '高解像度のデジタルアート作品です。',
          price: 2000,
          imageUrl: 'https://picsum.photos/seed/1/500',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'prod_2',
          name: 'プレミアム写真集',
          description: 'プロフェッショナルカメラマンによる厳選写真集です。',
          price: 3000,
          imageUrl: 'https://picsum.photos/seed/2/500',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'prod_3',
          name: 'オリジナルサウンドトラック',
          description: 'プロのミュージシャンによる完全オリジナルの楽曲集です。',
          price: 1500,
          imageUrl: 'https://picsum.photos/seed/3/500',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    }

    console.log('✅ Database seeded successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seed()