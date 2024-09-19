import { z } from 'zod'

import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoalCompletion } from '../../functions/create-goal-completion'

export const createCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalsId: z.string(),
        }),
      },
    },
    async req => {
      const { goalsId } = req.body
      await createGoalCompletion({
        goalsId,
      })
    }
  )
}
