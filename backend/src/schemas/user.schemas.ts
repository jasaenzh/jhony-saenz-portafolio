import { z } from "zod";

export const FindUserById = z.object({
  params: z.object({
    id: z
      .string()
      .min(3, "El ID debe contener al menos 3 caracteres")
      .max(36, "El ID no debe de ser mayo a 36 caracteres"),
  }),
});

export const UpdateUserSchema = z.object({
  body: z.object({
    firstName: z.string().optional(),
    secondName: z.string().optional(),
    lastName: z.string().optional(),
    secondLastName: z.string().optional(),
    aboutMe: z.string().optional(),
    image: z.string().optional(),
    birthdate: z.string().optional(),
    email: z.string().email("Email inválido").optional(),
    password: z.string().optional(),
  }),
  params: z.object({
    id: z.string().min(3).max(36, "El ID no debe de ser mayo a 36 caracteres"),
  }),
});

export type ParamsUserType = z.infer<typeof FindUserById>["params"];
export type BodyUserType = z.infer<typeof UpdateUserSchema>["body"];
