import {UserEntity} from '../entites/user.entity'

export type CreateUserDto = Omit<UserEntity, 'id' | 'createdAt'>
