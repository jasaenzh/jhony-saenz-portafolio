import { z } from "zod";

const UpdateUserSchema = z.object({
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

export { UpdateUserSchema };
