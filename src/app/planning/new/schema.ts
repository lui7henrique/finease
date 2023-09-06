import { z } from 'zod'

export const FormSchema = z.object({
  investment: z
    .string({ required_error: 'Insira um valor válido.' })
    .refine(
      (value) => {
        const parsedValue = parseFloat(value)
        return !isNaN(parsedValue) && parsedValue >= 1
      },
      {
        message: 'O valor deve ser um número válido e maior ou igual a 1.',
      },
    )
    .transform((value) => Number(value)),
  investmentTime: z
    .string({ required_error: 'Insira um valor válido.' })
    .refine(
      (value) => {
        const parsedValue = parseFloat(value)
        return !isNaN(parsedValue) && parsedValue >= 1
      },
      {
        message: 'O valor deve ser um número válido e maior ou igual a 1.',
      },
    )
    .transform((value) => Number(value)),

  timeMetric: z.enum(['months', 'years', 'decades']),

  investmentDate: z.string().optional(),

  inflation: z.boolean().default(false).optional(),
})
