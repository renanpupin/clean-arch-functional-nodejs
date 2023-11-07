import {ControllerResponseType} from './types'
import {UserRepositoryType} from '../../domain/repositories/user.repository'
import {UserEntity} from '../../domain/entites/user.entity'
import {createUserService} from '../../application/useCases/createUser.service'
import {CreateUserDto} from '../../domain/dtos/createUser.dto'

export const createUserController = async ({
    userRepository,
    userDto
}: {
    userRepository: UserRepositoryType
    userDto: CreateUserDto
}): Promise<ControllerResponseType<{user: UserEntity}>> => {
    if (!userDto) {
        throw new Error('User not found.')
    }

    const newUser = await createUserService(userRepository).create(userDto)

    return {
        payload: {user: newUser}
    }
}
