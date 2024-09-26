export interface deleteGoalsPending {
  goalId: string
}

export async function deleteGoalsPending(
  goalId: deleteGoalsPending
): Promise<void> {
  console.log(goalId.goalId)
  const response = await fetch(
    `http://localhost:3333/delete-goal-pending/${goalId.goalId}`,
    { method: 'DELETE' }
  )
  if (!response.ok) {
    throw new Error('Error delete Goal Pending Not Exists....')
  }
}
