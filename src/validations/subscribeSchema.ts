import { z } from "zod";

const subscribeFormSchema = z.object({
    email: z.string().min(1).email(),
});
type subscribeType = z.infer<typeof subscribeFormSchema>;

export { subscribeFormSchema, type subscribeType };