import { Plus, X } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPendingGoals } from '../http/get-pending-goals'
import { createGoalCompletion } from '../http/create-goal-completion'
import { DeleteGoalPending } from './delete-goal-pending'

export function PendingGoals() {
  const handleClick = ({ goalId }: { goalId: string }) => {
    DeleteGoalPending({ goalId })
  }

  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
  })

  if (isLoading || !data) {
    return null
  }

  async function handleCreateGoalCompletion(goalsId: string) {
    await createGoalCompletion({ goalsId })

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.pendingGoals.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCreateGoalCompletion(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}{' '}
            <X
              className="size-5 text-zinc-600"
              onClick={event => {
                event.stopPropagation()
                handleClick({ goalId: goal.id })
              }}
            />
          </OutlineButton>
        )
      })}
    </div>
  )
}
