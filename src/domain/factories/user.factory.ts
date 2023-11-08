import {UserEntity} from '../entites/user.entity'
import {isValid, validate} from '../entites/user.invariants'
import {getUsername} from '../entites/user.calculations'

export const UserFactory = {
    isValid: (user: Partial<UserEntity>): boolean => {
        return isValid(user).success
    },
    create: (user: Partial<UserEntity>): UserEntity => {
        validate(user)

        return Object.freeze({
            ...user,
            username: getUsername(user.name)
        })
    },
    update: (user: UserEntity, updatedProperties: Partial<UserEntity>): UserEntity => {
        const updatedUser = UserFactory.create({
            ...user,
            ...updatedProperties
        })
        validate(updatedUser, updatedProperties)

        return updatedUser
    }
}
