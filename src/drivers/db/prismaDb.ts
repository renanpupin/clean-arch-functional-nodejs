import {PrismaClient} from '@prisma/client'

export const PrismaDb = new PrismaClient()

export type PrismaDbType = typeof PrismaClient
