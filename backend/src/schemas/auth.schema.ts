import { z } from "zod";

const loginShcema = z.object({
  email: z
    .string()
    .min(1, "La cadena debe contener al menos 1 caracteres")
    .email("Email inválido"),
  password: z.string().min(6, "La cadena debe contener al menos 6 caracteres"),
});

export { loginShcema };
