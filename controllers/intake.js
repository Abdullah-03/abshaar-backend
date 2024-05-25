import prisma from '../utils/db'

export async function addIntake(req, res) {
  try {
    const { amount, date } = req.body
    // TODO: Validation

    const newEntry = await prisma.waterIntakeEntry.create({
      data: {
        amount,
        date: date || undefined, //if date not specified then db will set it to current date
      },
    })

    res.status(201).json(newEntry)
  } catch (error) {
    console.error('Error creating water intake entry:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export async function getIntake(req, res) {
  try {
    const today = new Date()
    const startOfDay = new Date(today.setHours(0, 0, 0, 0))
    const intakeEntries = await prisma.waterIntakeEntry.findMany({
      where: {
        date: {
          gte: startOfDay,
        },
      },
    })
    res.status(200).json(intakeEntries)
  } catch (error) {
    console.error('Error fetching water intake entries:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export async function getIntakeHistory(req, res) {
  try {
    const intakeEntries = await prisma.waterIntakeEntry.findMany() // Retrieve all entries
    res.status(200).json(intakeEntries)
  } catch (error) {
    console.error('Error fetching water intake entries:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
