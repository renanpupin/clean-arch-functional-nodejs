import {Repository} from './generic.repository'
import {UserEntity} from '../entites/user.entity'
import {MemoryDb} from '../../drivers/db/memoryDb'
import {UserFactory} from '../entites/user.factory'

export type UserRepositoryType = Repository<UserEntity>

export const userRepository: UserRepositoryType = {
    create: async user => {
        const newUser = UserFactory.create(user)
        return MemoryDb.users.create(newUser)
    },
    find: async () => {
        return MemoryDb.users.find()
    }
}
