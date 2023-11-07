import {getUsersService} from '../../application/useCases/getUsers.service'
import {ControllerResponseType} from './types'

export const getUsersController = async (): Promise<ControllerResponseType> => {
    const users = await getUsersService()

    return {
        payload: {users}
    }
}
