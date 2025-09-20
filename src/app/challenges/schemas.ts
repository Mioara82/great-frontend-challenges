import * as z from "zod";

export const ChallengeSchema = z.object({
    id:z.uuidv4(),
    title: z.string(),
    description: z.string(),
    date: z.iso.date(),
    level:z.enum(['starter', 'mid-level', 'senior']),
    status:z.enum(['completed', 'in-progress', 'not-started']),
})

export type Challenge = z.infer<typeof ChallengeSchema>;