import { defineConfig, defineCollection, s } from 'velite'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split('/').slice(1).join('/'),
})

const posts = defineCollection({
    name: 'Post',
    pattern: 'blog/**/*.mdx',
    schema: s
        .object({
            slug: s.path(),
            title: s.string().max(99),
            description: s.string().max(999).optional(),
            date: s.isodate(),
            published: s.boolean().default(true),
            tags: s.array(s.string()).optional(),
            image: s.string().optional(),
            body: s.mdx(),
        })
        .transform(computedFields),
})

const projects = defineCollection({
    name: 'Project',
    pattern: 'projects/**/*.mdx',
    schema: s
        .object({
            slug: s.path(),
            title: s.string().max(99),
            description: s.string().max(999),
            date: s.isodate(),
            image: s.string().optional(),
            demo: s.string().url().optional(),
            repo: s.string().url().optional(),
            tags: s.array(s.string()),
            body: s.mdx(),
            metadata: s.object({
                title: s.string(),
                description: s.string()
            }).optional()
        })
        .transform(computedFields),
})

const tutorials = defineCollection({
    name: 'Tutorial',
    pattern: 'tutorials/**/*.mdx',
    schema: s
        .object({
            slug: s.path(),
            title: s.string().max(99),
            description: s.string().max(999).optional(),
            date: s.isodate(),
            published: s.boolean().default(true),
            tags: s.array(s.string()).optional(),
            image: s.string().optional(),
            body: s.mdx(),
        })
        .transform(computedFields),
})

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash:6].[ext]',
        clean: true,
    },
    collections: { posts, projects, tutorials },
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [rehypePrettyCode, { theme: 'github-dark' }],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'wrap',
                    properties: {
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to section',
                    },
                },
            ],
        ],
        remarkPlugins: [],
    },
})
