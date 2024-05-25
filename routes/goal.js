import { Router } from 'express'
import { getGoal, setGoal } from '../controllers/goal'

const goalRouter = Router()

goalRouter.get('/', getGoal)
goalRouter.post('/', setGoal)

export default goalRouter
