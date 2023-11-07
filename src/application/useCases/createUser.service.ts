import {UserRepositoryType} from '../../domain/repositories/user.repository'
import {UserFactory} from '../../domain/entites/user.factory'
import {UserEntity} from '../../domain/entites/user.entity'

export const createUserService = async (userRepository: UserRepositoryType, user: UserEntity) => {
    const newUser = UserFactory.create(user)
    return userRepository.create(newUser)
}
