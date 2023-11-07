import {UserRepositoryType} from '../../domain/repositories/user.repository'

export const getUsersService = async (userRepository: UserRepositoryType) => {
    return userRepository.find()
}
