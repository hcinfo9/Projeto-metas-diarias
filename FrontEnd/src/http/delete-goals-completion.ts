export interface DeleteGoalResponse {
  goalId: string
}

export async function deleteGoalsCompletion(
  goalId: DeleteGoalResponse
): Promise<void> {
  const response = await fetch(
    `http://localhost:3333/delete-goal-completion/${goalId.goalId}`,
    { method: 'DELETE' }
  )

  if (!response.ok) {
    throw new Error('Error delete GoalCompletion Not Exists....')
  }
}
