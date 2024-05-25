import express from 'express'
import intakeRouter from './routes/intake'

const app = express()

app.use(express.json())

app.use('/intake', intakeRouter)

app.get('/', (req, res) => {
  console.log('hello from server')
  res.end()
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
