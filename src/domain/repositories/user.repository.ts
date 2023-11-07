import {Repository} from './generic.repository'
import {UserEntity} from '../entites/user.entity'
import {MemoryDb} from '../../drivers/db/memoryDb'
//
// export abstract class UserRepository {
//     abstract create(record: UserEntity): Promise<UserEntity>
//
//     abstract update(record: UserEntity): Promise<UserEntity>
//
//     abstract get(id: string): Promise<UserEntity>
//
//     abstract delete(id: string): Promise<boolean>
//
//     abstract find(): Promise<UserEntity[]>
// }

export const userRepository: Repository<UserEntity> = {
    create: async user => {
        return MemoryDb.users.create(user)
    },
    find: async () => {
        return MemoryDb.users.find()
    }
}
