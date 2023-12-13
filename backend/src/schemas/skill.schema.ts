import { optional, z } from "zod";

export const CreateSkillSchema = z.object({
  body: z.object({
    nameSkill: z
      .string({ required_error: "Nombre del Skill es requerido" })
      .min(3, "El nombre debe de contener al menos 3 caracteres"),
    description: z.string({ required_error: "Descripcion es requerida" }),
    image: z.string().optional(),
  }),
});

export const UpdateAndDeleteSkillSchema = z.object({
  body: z.object({
    nameSkill: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
  params: z.object({
    id: z.string().min(3).max(36, "El ID no debe de ser mayo a 36 caracteres"),
  }),
});

export type CreateSkillType = z.infer<typeof CreateSkillSchema>["body"];
export type UpdateSkillBodyType = z.infer<
  typeof UpdateAndDeleteSkillSchema
>["body"];

export type IdSkillParamsType = z.infer<
  typeof UpdateAndDeleteSkillSchema
>["params"];
