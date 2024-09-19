import { client, db } from '.'
import { goalCompletions, goals } from './schema'
import dayjs from 'dayjs'

export async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
      { title: 'Me exercitar', desiredWeeklyFrequency: 3 },
      { title: 'meditar', desiredWeeklyFrequency: 2 },
    ])
    .returning()

  const startOffWeek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    { goalsId: result[0].id, createAt: startOffWeek.toDate() },
    { goalsId: result[1].id, createAt: startOffWeek.add(1, 'day').toDate() },
  ])
}

seed().finally(() => {
  client.end()
})
