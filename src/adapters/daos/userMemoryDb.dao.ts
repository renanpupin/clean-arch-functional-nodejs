import {UserRepositoryType} from '../../domain/repositories/user.repository'

export const UserMemoryDbDao: (db: unknown) => UserRepositoryType = db => {
    return {
        create: (user: unknown) => {
            return db.users.create(user)
        },
        find: (user: unknown) => {
            return db.users.find(user)
        }
    }
}
