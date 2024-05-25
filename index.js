import express from 'express'
import intakeRouter from './routes/intake'
import goalRouter from './routes/goal'

const app = express()

app.use(express.json())

app.use('/intake', intakeRouter)
app.use('goal', goalRouter)

app.get('/', (req, res) => {
  console.log('hello from server')
  res.end()
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
