export interface CreateGoalCompletionRequest {
  goalsId: string
}

export async function createGoalCompletion({
  goalsId,
}: CreateGoalCompletionRequest): Promise<void> {
  const response = await fetch('http://localhost:3333/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalsId,
    }),
  })

  if (!response.ok) {
    throw new Error('Error while creating the goal completion')
  }
}
