import { z } from "zod";

const loginSchema = z.object({
    email: z.string().min(1, {
      message: "Email is Required.",
    }).email("Enter valid Email"),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});
type loginType = z.infer<typeof loginSchema>;

export { loginSchema, type loginType };