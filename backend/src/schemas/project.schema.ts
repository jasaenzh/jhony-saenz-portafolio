import { z } from "zod";

export const CreateProjectSchema = z.object({
  body: z.object({
    projectName: z.string({ required_error: "Nombre del proyecto es requerido" }).min(3, "El nombre del proyecto debe de contener por lo menos 3 caracteres"),
    description: z.string({ required_error: "Descripción del proyecto es requerido" }).min(3, "La descripción del proyecto debe de contener por lo menos 3 caracteres"),
    images: z.array(z.string().optional()),
    urlBackend: z.string({ required_error: "La URL del backend es requerida" }),
    urlFrontend: z.string({ required_error: "La URL del frontend es requerida" }),
  })
})

export const UpdateAndDeleteProjectSchema = z.object({
  body: z.object({
    projectName: z.string().optional(),
    description: z.string().optional(),
    images: z.array(z.string().optional()),
    urlBackend: z.string().optional(),
    urlFrontend: z.string().optional(),
  }),
  params: z.object({
    id: z.string().min(3).max(36, "El ID no debe de ser mayor a 36 caracteres"),
  })
})

export type CreateProjectType = z.infer<typeof CreateProjectSchema>["body"];
export type UpdateProjectBodyType = z.infer<typeof UpdateAndDeleteProjectSchema>["body"];
export type IdProjectParamsType = z.infer<typeof UpdateAndDeleteProjectSchema>["params"];