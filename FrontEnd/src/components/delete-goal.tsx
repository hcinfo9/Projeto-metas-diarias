import { useQuery } from '@tanstack/react-query'
import { deleteGoalsCompletion } from '../http/delete-goals-completion'
import { getSummary } from '../http/get-summary'

export function DeleteGoalCompletion({ goalId }: { goalId: string }) {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  if (data?.summary?.goalsPerDay) {
    return (
      <button
        type="button"
        onClick={handleDeleteGoalsCompletion}
        className="inline-flex underline underline-offset-2 px-2 border-none text-zinc-500"
      >
        Desfazer
      </button>
    )
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    throw new Error('Erro ao tentar deletar meta!')
  }

  async function handleDeleteGoalsCompletion() {
    await deleteGoalsCompletion({ goalId })

    window.location.reload()
  }
}
