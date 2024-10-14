import { z } from "zod";

const searchFormSchema = z.object({
    keyword: z.string().min(1).max(500),
});
type searchType = z.infer<typeof searchFormSchema>;

export { searchFormSchema, type searchType };