import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string({ required_error: "El email es requerido" })
    .email({ message: "Email inválido" }),
  password: z
    .string({ required_error: "La contraseña es requerida" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres"}),
  username: z
    .string({ required_error: "El nombre de usuario es requerido" })
    .min(4, { message: "El nombre de usuario debe tener al menos 4 caracteres" }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "El email es requerido" })
    .email({ message: "Email inválido" }),
  password: z
    .string({ required_error: "La contraseña es requerida" })
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
