export interface DeleteGoalResponse {
  goalId: string
}

export async function deleteGoalsCompletion(
  goalId: DeleteGoalResponse
): Promise<void> {
  console.log(goalId.goalId)
  const response = await fetch(
    `http://localhost:3333/delete-goal-completion/${goalId.goalId}`,
    { method: 'DELETE' }
  )

  if (!response.ok) {
    throw 'Error delete GoalCompletion Not Exists....'
  }
}
