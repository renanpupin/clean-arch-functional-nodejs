import {PrismaClient} from '@prisma/client'

export type PrismaDbType = typeof PrismaClient
export const PrismaDb = new PrismaClient()
