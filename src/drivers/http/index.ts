import express from 'express'
import {routes} from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

export const run = () => {
    app.listen(3000, () => 'server running on port 3000')
}
