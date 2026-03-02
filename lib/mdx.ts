import { posts, projects, tutorials } from '@/.velite'
import { Post, ProjectData, VeliteProject, VeliteTutorial } from '@/lib/types'

// Re-export Velite types if needed, or map them to existing types
export type { Post, Project, Tutorial } from '@/.velite'

export function getPostSlugs(type: 'blog' | 'tutorials' | 'projects' = 'blog'): string[] {
    if (type === 'projects') return projects.map(p => p.slugAsParams)
    const data = type === 'blog' ? posts : tutorials
    return (data as any[]).map((p) => p.slugAsParams)
}

export async function getAllPosts(type: 'blog' | 'tutorials' = 'blog'): Promise<Post[]> {
    const data = type === 'blog' ? posts : tutorials
    return (data as any[])
        .filter(post => process.env.NODE_ENV === 'development' || post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map(post => ({
            ...post,
            slug: post.slugAsParams,
            frontmatter: {
                title: post.title,
                description: post.description || "",
                date: post.date,
                tags: post.tags || [],
                image: post.image,
                author: "Alagappan P"
            },
            content: post.body,
            readingTime: post.readingTime
        })) as Post[]
}

export async function getPostBySlug(slug: string, type: 'blog' | 'tutorials' = 'blog'): Promise<Post | null> {
    const data = type === 'blog' ? posts : tutorials
    const post = (data as any[]).find(p => p.slugAsParams === slug)
    if (!post) return null

    return {
        ...post,
        slug: post.slugAsParams,
        frontmatter: {
            title: post.title,
            description: post.description || "",
            date: post.date,
            tags: post.tags || [],
            image: post.image,
            author: "Alagappan P"
        },
        content: post.body,
        readingTime: post.readingTime
    } as Post
}

export async function getRelatedPosts(currentSlug: string, tags: string[], limit: number = 3): Promise<Post[]> {
    const allPosts = await getAllPosts()

    return allPosts
        .filter((post) => post.slug !== currentSlug) // Exclude current post
        .map((post) => {
            // Calculate matching tags
            const matchingTags = post.frontmatter.tags?.filter((tag) => tags.includes(tag)).length || 0
            return { ...post, matchingTags }
        })
        .filter((post) => post.matchingTags > 0) // Only include posts with at least one matching tag
        .sort((a, b) => {
            // Sort by matching tags (descending)
            if (a.matchingTags > b.matchingTags) return -1
            if (a.matchingTags < b.matchingTags) return 1
            // If tags are equal, sort by date (descending)
            return new Date(a.frontmatter.date).getTime() > new Date(b.frontmatter.date).getTime() ? -1 : 1
        })
        .slice(0, limit)
}

// Project Helpers
export async function getAllProjects(): Promise<VeliteProject[]> {
    return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

