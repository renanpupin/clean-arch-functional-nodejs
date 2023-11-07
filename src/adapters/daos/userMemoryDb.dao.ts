import {UserRepositoryType} from '../../domain/repositories/user.repository'

export const UserMemoryDbDao: (db: any) => UserRepositoryType = db => {
    return {
        create: (user: any) => {
            return db.users.create(user)
        },
        find: (user: any) => {
            return db.users.find(user)
        }
    }
}
