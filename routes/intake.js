import { Router } from 'express'
import {
  getIntake,
  addIntake,
  getIntakeHistory,
} from '../controllers/intake.js'

const intakeRouter = Router()

intakeRouter.get('/', getIntake)
intakeRouter.post('/', addIntake)
intakeRouter.get('/history', getIntakeHistory)

export default intakeRouter
