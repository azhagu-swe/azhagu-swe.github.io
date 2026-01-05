import fs from "fs"
import path from "path"
import { Post } from "@/lib/types"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { FrontmatterSchema } from "@/lib/schemas"

const root = process.cwd()

export function getPostSlugs(type: string) {
    const dir = path.join(root, "content", type)
    if (!fs.existsSync(dir)) return []
    return fs.readdirSync(dir)
}

export async function getPostBySlug(type: string, slug: string): Promise<Post | null> {
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = path.join(root, "content", type, `${realSlug}.mdx`)

    if (!fs.existsSync(fullPath)) {
        return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data: rawFrontmatter, content } = matter(fileContents)

    // Validate frontmatter
    const parsed = FrontmatterSchema.safeParse(rawFrontmatter)

    if (!parsed.success) {
        console.error(`Invalid frontmatter in ${fullPath}:`, parsed.error.format())
        return null // Or throw, but null is safer for build continuation
    }

    const frontmatter = parsed.data

    // Calculate reading time
    const words = content.trim().split(/\s+/).length
    const readingTime = Math.ceil(words / 200) + " min read"

    // Return raw content for react-markdown
    return {
        slug: realSlug,
        frontmatter,
        content: content,
        readingTime
    }
}

export async function getAllPosts(type: string): Promise<Post[]> {
    const slugs = getPostSlugs(type)
    const posts = await Promise.all(slugs.map((slug: string) => getPostBySlug(type, slug)))

    return posts
        .filter((post): post is Post => post !== null)
        .sort((a, b) => {
            return new Date(a.frontmatter.date).getTime() > new Date(b.frontmatter.date).getTime() ? -1 : 1
        })
}
