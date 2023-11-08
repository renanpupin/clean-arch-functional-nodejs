import {UserEntity} from '../entites/user.entity'
import {isValid, validate} from '../entites/user.invariants'
import {getUsername} from '../entites/user.calculations'
import {CreateUserDto} from '../dtos/createUser.dto'

export const UserFactory = {
    isValid: (user: Partial<UserEntity>): boolean => {
        return isValid(user).success
    },
    create: (user: CreateUserDto): UserEntity => {
        validate(user)

        return Object.freeze({
            ...user,
            username: getUsername(user.name)
        })
    },
    update: (user: UserEntity, newProperties: Partial<UserEntity>): UserEntity => {
        const updatedUser = Object.freeze({
            ...user,
            ...newProperties
        })
        validate(updatedUser)

        return updatedUser
    }
}
