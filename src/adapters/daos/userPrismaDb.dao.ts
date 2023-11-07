import {UserRepositoryType} from '../../domain/repositories/user.repository'
import {PrismaDbType} from '../../drivers/db/prismaDb'

export const UserPrismaDbDao: (db: PrismaDbType) => UserRepositoryType = db => {
    return {
        create: (user: unknown) => {
            return db.users.create(user)
        },
        find: (user: unknown) => {
            return db.users.find(user)
        }
    }
}
