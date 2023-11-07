import {Repository} from './generic.repository'
import {UserEntity} from '../entites/user.entity'
import {MemoryDb} from '../../drivers/db/memoryDb'

export type UserRepositoryType = Repository<UserEntity>

export const userRepository: UserRepositoryType = {
    create: async user => {
        return MemoryDb.users.create(user)
    },
    find: async () => {
        return MemoryDb.users.find()
    }
}
