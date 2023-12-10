import { z } from "zod";

const CreateAuthSchema = z.object({
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

const UpdateAuthSchema = z.object({
  body: z.object({
    email: z
      .string()
      .min(1, "La cadena debe contener al menos 1 caracteres")
      .optional(),
    password: z.string().optional(),
  }),
  params: z.object({
    id: z.string().min(3),
  }),
});

export { CreateAuthSchema, UpdateAuthSchema };

export type AuthType = z.infer<typeof CreateAuthSchema>["body"];
