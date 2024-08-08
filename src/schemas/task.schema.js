import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(4, { message: "Title must be at least 4 characters long" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description must be at least 10 characters long" }),
  date: z.string().datetime().optional(),
});
