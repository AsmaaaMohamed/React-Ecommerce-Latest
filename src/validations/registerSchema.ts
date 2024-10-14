import { z } from "zod";

const registerSchema = z.object({
    username:z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
    email: z.string().email("Email is required"),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
  }),
});
type registerType = z.infer<typeof registerSchema>;

export { registerSchema, type registerType };