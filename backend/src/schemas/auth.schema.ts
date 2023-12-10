import { z } from "zod";

export const CreateAuthSchema = z.object({
  body: z.object({
    firstName: z
      .string()
      .min(3, "La cadena debe contener al menos 3 caracteres"),
    secondName: z
      .string()
      .min(2, "La cadena debe contener al menos 2 caracteres"),
    lastName: z
      .string()
      .min(2, "La cadena debe contener al menos 2 caracteres"),
    secondLastName: z
      .string()
      .min(2, "La cadena debe contener al menos 2 caracteres"),
    aboutMe: z.string(),
    image: z.string(),
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

export type AuthType = z.infer<typeof CreateAuthSchema>["body"];
