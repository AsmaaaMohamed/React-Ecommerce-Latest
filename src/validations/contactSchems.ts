import { z } from "zod";

const contactSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email("Enter Valid Email"),
    subject: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    message: z.string(),
  });
  type contactType = z.infer<typeof contactSchema>;
  export {contactSchema ,type contactType};