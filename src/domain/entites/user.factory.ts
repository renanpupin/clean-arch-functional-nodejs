import {UserEntity} from './user.entity'
import {isValid, validate} from './user.invariants'

export const UserFactory = {
    isValid: (user: Partial<UserEntity>): boolean => {
        return isValid(user).success
    },
    create: (user: Partial<UserEntity>): UserEntity => {
        validate(user)

        return user as UserEntity
    }
}
