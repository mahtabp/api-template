import express from 'express'
import * as bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import { errorHandler } from './middlewares'
import * as controllers from './controllers'
import config from './shared/config'

const app: express.Express = express()
const port = config.get('HTTP_PORT')

const swaggerDoc = require('./docs/swagger.json')

app.use(bodyParser.json())

app.use(`/docs`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc, null)
)

app.get('/', (req, res) => {
  console.log('HEALTHY')
  res.status(200).send('OK')
})
app.get('/fruits', controllers.fruits.getAll)
app.get('/fruits/:id', controllers.fruits.getById)
app.post('/fruits', controllers.fruits.insertFruit)

app.listen(port, () => console.log(`Server is running at ${ port }`))

app.use(errorHandler)

export default app
