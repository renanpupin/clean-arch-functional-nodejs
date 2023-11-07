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

        return {
            ...user,
            username: getUsername(user.name)
        }
    }
}
