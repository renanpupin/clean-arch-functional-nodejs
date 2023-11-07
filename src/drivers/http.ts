import express from 'express'
import {Router, Request, Response} from 'express'
import {logger} from './logger'

const app = express()
const route = Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

route.get('/', (req: Request, res: Response) => {
    logger.debug('Hello world from logger.')

    res.json({message: 'hello world with Typescript'})
})

app.use(route)

export const run = () => {
    app.listen(3000, () => 'server running on port 3000')
}
