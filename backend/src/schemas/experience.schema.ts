import { z } from "zod";

export const CreateExperienceSchema = z.object({
  body: z.object({
    position: z.string({ required_error: "La posición en la que trabajó en el proyecto es requerido" }).min(3, "La posicion debe de contener por lo menos 3 caracteres"),
    company: z.string({ required_error: "Nombre de la compañia es requerido" }).min(3, "La posicion debe de contener por lo menos 3 caracteres"),
    currently: z.boolean(),
    description: z.string({ required_error: "Descripcion del trabajo es requerido" }),
    startDate: z.string(),
    endDate: z.string().optional(),
    userId: z.string({ required_error: "El ID del usuario es requerido" }),
  })
})

export const UpdateAndDeleteExperienceSchema = z.object({
  body: z.object({
    position: z.string().optional(),
    company: z.string().optional(),
    currently: z.boolean().optional(),
    description: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  }),
  params: z.object({
    id: z.string().min(3).max(36, "El ID no debe de ser mayor a 36 caracteres"),
  })
})

export type CreateExperienceType = z.infer<typeof CreateExperienceSchema>["body"];
export type UpdateExperienceBodyType = z.infer<typeof UpdateAndDeleteExperienceSchema>["body"];
export type IdExperienceParamsType = z.infer<typeof UpdateAndDeleteExperienceSchema>["params"];