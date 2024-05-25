import prisma from '../utils/db'

export async function getGoal() {
  try {
    const goal = await prisma.dailyGoal.findFirst()
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' })
    }
    return res.status(200).json(goal)
  } catch (error) {
    console.error('Error fetching goal:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export async function setGoal() {
  const { goal } = req.body
  // TODO: validation

  try {
    const existingGoal = await prisma.dailyGoal.findFirst()
    if (existingGoal) {
      // Update existing goal
      await prisma.dailyGoal.update({
        where: { id: existingGoal.id },
        data: { goal },
      })
    } else {
      // Create new goal
      await prisma.dailyGoal.create({ data: { goal } })
    }
    return res.status(200).json({ message: 'Goal updated successfully' })
  } catch (error) {
    console.error('Error setting goal:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
