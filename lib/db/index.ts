// src/db/index.ts
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  // Check if PrismaClient is initialized
  if (!PrismaClient) {
    throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.')
  }
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma