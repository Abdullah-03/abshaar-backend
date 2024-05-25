import { Router } from 'express'

const router = Router()

// Middleware to prepend "/intake" to all routes in this router
router.use('/intake', (req, res, next) => {
  next()
})

router.get('/', getIntake)
router.post('/', addIntake)
router.get('/history', getIntakeHistory)

export default router
