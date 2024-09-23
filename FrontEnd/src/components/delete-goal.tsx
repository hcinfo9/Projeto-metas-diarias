// import { useQuery } from '@tanstack/react-query'
import { deleteGoalsCompletion } from '../http/delete-goals-completion'

// import { useState } from 'react'
// import { getSummary } from '../http/get-summary'

// const { data } = useQuery({
//   queryKey: ['summary'],
//   queryFn: getSummary,
// })

export function DeleteGoalCompletion({ goalId }: { goalId: string }) {
  //   const [goals, setGoals] = useState(data?.summary || []) //

  //   if(!data) return null
  async function handleDeleteGoalsCompletion() {
    await deleteGoalsCompletion({ goalId })

    //     setGoals(goals.filter(goal => goal.id !== goalId))
  }

  return (
    <button
      type="button"
      onClick={handleDeleteGoalsCompletion}
      className="inline-flex underline underline-offset-2 px-2 border-none text-zinc-500"
    >
      Desfazer
    </button>
  )
}
