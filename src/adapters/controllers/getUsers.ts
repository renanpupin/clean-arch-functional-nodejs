import {getUsersService} from '../../application/useCases/getUsers.service'
import {ControllerResponseType} from './types'
import {UserRepositoryType} from '../../domain/repositories/user.repository'
import {UserEntity} from '../../domain/entites/user.entity'

export const getUsersController = async ({
    userRepository
}: {
    userRepository: UserRepositoryType
}): Promise<ControllerResponseType<{users: UserEntity[]}>> => {
    const users = await getUsersService(userRepository)

    return {
        payload: {users}
    }
}
