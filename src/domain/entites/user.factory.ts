import {UserEntity} from './user.entity'
import {isValid, validate} from './user.invariants'

export const UserFactory = {
    isValid: (user: unknown): boolean => {
        return isValid(user)
    },
    create: (user: unknown): UserEntity => {
        validate(user)

        return user as UserEntity
    }
}
