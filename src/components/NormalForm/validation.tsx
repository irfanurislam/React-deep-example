import { z } from "zod";
export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email().min(1, { message: "email is required" }),
  password: z.string().min(8, "Too ooo short"),
});

export type TNormalForm = z.infer<typeof SignUpSchema>;
