import {Router, Request, Response} from 'express'
import {getUsersController} from '../../adapters/controllers/getUsers'
import {HttpResponse} from '../presenters/httpResponse'
import {UserMemoryDbDao} from '../../adapters/daos/userMemoryDb.dao'
import {MemoryDb} from '../db/memoryDb'
import {createUserController} from '../../adapters/controllers/createUser'
import {CreateUserDto} from '../../domain/dtos/createUser.dto'
import {TypedRequest} from './types'
import {UserPrismaDbDao} from '../../adapters/daos/userPrismaDb.dao'
import {PrismaDb} from '../db/prismaDb'

const route = Router()

const userRepository = UserMemoryDbDao(MemoryDb)
// const userRepository = UserPrismaDbDao(PrismaDb)

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'hello world with Typescript'})
})

route.get('/users', async (req: Request, res: Response) => {
    try {
        const {payload} = await getUsersController({userRepository})

        return HttpResponse.success({res, data: payload})
    } catch (error: any) {
        return HttpResponse.error({res, error})
    }
})

route.post('/users', async (req: TypedRequest<{user: CreateUserDto}>, res: Response) => {
    try {
        const {payload} = await createUserController({
            userRepository,
            userDto: req?.body?.user
        })

        return HttpResponse.success({res, data: payload})
    } catch (error: any) {
        return HttpResponse.error({res, error})
    }
})

export const routes = route
