import {getUsersService} from '../../application/useCases/getUsers.service'
import {ControllerResponseType} from './types'
import {UserRepositoryType} from '../../domain/repositories/user.repository'

export const getUsersController = async (
    userRepository: UserRepositoryType
): Promise<ControllerResponseType> => {
    const users = await getUsersService(userRepository)

    return {
        payload: {users}
    }
}
