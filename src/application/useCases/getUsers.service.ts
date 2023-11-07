import {userRepository} from '../../domain/repositories/user.repository'

export const getUsersService = async () => {
    return userRepository.find()
}
