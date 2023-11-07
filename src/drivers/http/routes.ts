import express from 'express'
import {Router, Request, Response} from 'express'
import {getUsersController} from '../../adapters/controllers/getUsers'
import {HttpResponse} from '../../adapters/presenters/httpResponse'

const route = Router()

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'hello world with Typescript'})
})

route.get('/users', async (req: Request, res: Response) => {
    try {
        const {payload} = await getUsersController()

        return HttpResponse.success({res, data: payload})
    } catch (error: any) {
        return HttpResponse.error({res, error})
    }
})

export const routes = route
