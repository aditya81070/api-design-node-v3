import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()
app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({ message: 'hello from nested' })
})

app.use('/api', router)
app.get('/', (req, res) => {
  res.send({ message: 'hello' })
})

const log = (req, res, next) => {
  console.log('logging')
  next()
}

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'okay, got it.' })
})
export const start = () => {
  app.listen(3000, () => {
    console.log('Listening at port 3000')
  })
}
