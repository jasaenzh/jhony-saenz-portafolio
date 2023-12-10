import { z } from "zod";

export const CreateAuthSchema = z.object({
  body: z.object({
    firstName: z
      .string()
      .min(3, "La cadena debe contener al menos 3 caracteres"),
    secondName: z.string().optional(),
    lastName: z
      .string()
      .min(2, "La cadena debe contener al menos 2 caracteres"),
    secondLastName: z.string().optional(),
    aboutMe: z.string(),
    image: z.string().optional(),
    birthdate: z.string(),
    email: z
      .string()
      .min(1, "La cadena debe contener al menos 1 caracteres")
      .email("Email inválido"),
    password: z
      .string()
      .min(6, "La cadena debe contener al menos 6 caracteres"),
  }),
});

export const LoginAuthSchema = z.object({
  body: z.object({
    email: z
      .string()
      .min(1, "La cadena debe contener al menos 1 caracteres")
      .email("Email inválido"),
    password: z
      .string()
      .min(6, "La cadena debe contener al menos 6 caracteres"),
  }),
});

export type AuthType = z.infer<typeof CreateAuthSchema>["body"];
export type LoginType = z.infer<typeof LoginAuthSchema>["body"];
