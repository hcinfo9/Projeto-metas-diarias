import dayjs from 'dayjs'
import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'
import { gte, lte, and, count, eq } from 'drizzle-orm'
import { sql } from 'drizzle-orm'

interface CreateGoalCompletionRequest {
  goalsId: string
}

export async function createGoalCompletion({
  goalsId,
}: CreateGoalCompletionRequest) {
  const firstDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfweek = dayjs().endOf('week').toDate()

  const goalsCompletionCounts = db.$with('goal_completion_counts').as(
    db
      .select({
        goalsId: goalCompletions.goalsId,
        completionCount: count(goalCompletions.id).as('completionCount'),
      })
      .from(goalCompletions)
      .where(
        and(
          gte(goalCompletions.createAt, firstDayOfWeek),
          lte(goalCompletions.createAt, lastDayOfweek),
          eq(goalCompletions.goalsId, goalsId)
        )
      )
      .groupBy(goalCompletions.goalsId)
  )

  const result = await db
    .with(goalsCompletionCounts)
    .select({
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      completionCount:
        sql /*sql*/`COALESCE(${goalsCompletionCounts.completionCount}, 0)`.mapWith(
          Number
        ),
    })
    .from(goals)
    .leftJoin(
      goalsCompletionCounts,
      eq(goalsCompletionCounts.goalsId, goals.id)
    )
    .where(eq(goals.id, goalsId))
    .limit(1)

  // const result = await db
  //   .insert(goalCompletions)
  //   .values({ goalsId })
  //   .returning()

  const { completionCount, desiredWeeklyFrequency } = result[0]

  if (completionCount >= desiredWeeklyFrequency) {
    throw new Error('Goal already complete this week')
  }

  const insertResult = await db
    .insert(goalCompletions)
    .values({ goalsId })
    .returning()

  const goalCompletion = insertResult[0]

  return {
    goalCompletion,
  }
}
