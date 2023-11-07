import {UserRepositoryType} from '../../domain/repositories/user.repository'
import {UserFactory} from '../../domain/factories/user.factory'
import {UserEntity} from '../../domain/entites/user.entity'

export const createUserService = (userRepository: UserRepositoryType) => {
    return {
        create: (user: UserEntity) => {
            const newUser = UserFactory.create(user)
            return userRepository.create(newUser)
        }
    }
}
