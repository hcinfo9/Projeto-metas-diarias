import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { db } from '../db'
import { goals, goalCompletions } from '../db/schema'
import { and, sql, count } from 'drizzle-orm'
import { lte, gte, eq } from 'drizzle-orm'

dayjs.extend(weekOfYear)

export async function getWeekPendingGoal() {
  const firstDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfweek = dayjs().endOf('week').toDate()

  //contagem de metas criadas durante a semana
  const goalsCreatedUpToWeek = db.$with('goals-created_up_to_week').as(
    db
      .select({
        id: goals.id,
        title: goals.title,
        desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
        createdAt: goals.createdAt,
      })
      .from(goals)
      .where(lte(goals.createdAt, lastDayOfweek)) // lte vericara se o 1º registo é menor ou igual ao outro.
  )
  // contagem de metas concluidas
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
          lte(goalCompletions.createAt, lastDayOfweek)
        )
      )
      .groupBy(goalCompletions.goalsId)
  )

  const pendingGoals = await db
    .with(goalsCreatedUpToWeek, goalsCompletionCounts)
    .select({
      id: goalsCreatedUpToWeek.id,
      title: goalsCreatedUpToWeek.title,
      desiredWeeklyFrequency: goalsCreatedUpToWeek.desiredWeeklyFrequency,
      completionCount: sql`
        COALESCE(${goalsCompletionCounts.completionCount}, 0)
      `.mapWith(Number),
    })
    .from(goalsCreatedUpToWeek)
    .leftJoin(
      goalsCompletionCounts,
      eq(goalsCompletionCounts.goalsId, goalsCreatedUpToWeek.id)
    )

  return {
    pendingGoals,
  }
}
