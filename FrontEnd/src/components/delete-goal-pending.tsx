import { deleteGoalsPending } from '../http/delete-goals-pending'

export function DeleteGoalPending({ goalId }: { goalId: string }) {
  handleDeleteGoalPending()

  async function handleDeleteGoalPending() {
    await deleteGoalsPending({ goalId })
    // window.location.reload()
  }
}
