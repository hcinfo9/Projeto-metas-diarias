import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { deleteGoalCompletion } from '../../functions/delete-goals'
import { z } from 'zod'

export const deleteGoalRoute: FastifyPluginAsyncZod = async app => {
  app.delete('/delete-goal-completion/:id', async (req, res) => {
    const schemaDeleteGoal = z.object({
      id: z.string(),
    })

    const { id } = schemaDeleteGoal.parse(req.params)
    const { goalDelete } = await deleteGoalCompletion({ id: id })
    return {
      goalDelete,
    }
  })
}
