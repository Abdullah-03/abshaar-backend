import { Router } from 'express'

const intakeRouter = Router()

// Middleware to prepend "/intake" to all routes in this router
intakeRouter.use('/intake', (req, res, next) => {
  next()
})

intakeRouter.get('/', getIntake)
intakeRouter.post('/', addIntake)
intakeRouter.get('/history', getIntakeHistory)

export default intakeRouter
