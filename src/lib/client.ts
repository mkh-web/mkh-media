import { PrismaClient } from '@prisma/client'
//هذا المكان زي الكونفقريشن
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

export default prisma // مؤقت لين البرودكشن تايم

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma//هذا كله عشان ما يسوي اكثر من كونكشن سترنق في اتصال واحد