import express from 'express'
import {Router, Request, Response} from 'express'
import {HttpResponse} from '../adapters/presenters/httpResponse'
import {getUsersService} from '../application/useCases/getUsers.service'

const app = express()
const route = Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'hello world with Typescript'})
})

route.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await getUsersService()

        return HttpResponse.success({res, data: {users}})
    } catch (error: any) {
        return HttpResponse.error({res, error})
    }
})

app.use(route)

export const run = () => {
    app.listen(3000, () => 'server running on port 3000')
}
