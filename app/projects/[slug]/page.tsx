import { notFound } from "next/navigation"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { getPostBySlug, getPostSlugs } from "@/lib/mdx"
import { CustomMDX } from "@/components/custom-mdx"
import { BentoHeader } from "@/components/mdx/bento-header"
import { Button } from "@/components/ui/button"

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = getPostSlugs("projects")
    return posts.map((post) => ({
        slug: post.replace(/\.mdx$/, ""),
    }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug, "projects" as any) // "projects" is not in the union type in my definition? Let's check logic.

    if (!post) {
        return {}
    }
    const { frontmatter } = post

    return {
        title: frontmatter.title,
        description: frontmatter.description,
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug, "projects" as any)

    if (!post) {
        notFound()
    }
    const { content, frontmatter } = post

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left: Sticky Mockup (Cinematic) */}
                <div className="relative hidden lg:flex flex-col justify-center items-center h-screen sticky top-0 bg-muted/20 border-r border-border p-10 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
                    <div className="absolute inset-0 backdrop-blur-[100px] z-0" />

                    {/* Mockup Container */}
                    <div className="relative z-10 w-full max-w-lg aspect-video rounded-xl shadow-2xl border border-white/10 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
                        {frontmatter.image ? (
                            <img src={frontmatter.image || "/placeholder.png"} alt={frontmatter.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                                <Icon icon="lucide:image" className="w-12 h-12 text-muted-foreground" />
                            </div>
                        )}
                    </div>

                    <div className="absolute bottom-10 left-10 z-10">
                        <Button variant="outline" className="gap-2 backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 text-foreground">
                            <Icon icon="lucide:external-link" />
                            Live Demo
                        </Button>
                    </div>
                </div>

                {/* Right: Scrollable Content */}
                <div className="relative flex flex-col p-6 lg:p-12 xl:p-16 overflow-y-auto">
                    <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <Icon icon="lucide:arrow-left" className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>

                    <BentoHeader
                        title={frontmatter.title}
                        description={frontmatter.description}
                        tags={frontmatter.tags}
                    />

                    <div className="prose dark:prose-invert max-w-none prose-lg prose-headings:font-heading prose-headings:tracking-tighter prose-p:leading-loose">
                        <CustomMDX source={content} />
                    </div>
                </div>
            </div>
        </div>
    )
}
