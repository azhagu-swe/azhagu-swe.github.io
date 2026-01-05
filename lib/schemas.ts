import { z } from "zod";

export const FrontmatterSchema = z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().optional().default(true),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
});

export type Frontmatter = z.infer<typeof FrontmatterSchema>;
