import { db } from '../db'

import { eq } from 'drizzle-orm'
import { goalCompletions } from '../db/schema'

interface DeleteGoalRequest {
  id: string
}

export async function deleteGoalCompletion({ id }: DeleteGoalRequest) {
  const result = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, id))
    .returning()

  const goalDelete = result[0]

  return {
    goalDelete,
  }
}
