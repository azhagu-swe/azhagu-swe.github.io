import { notFound } from "next/navigation"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { getPostBySlug, getPostSlugs } from "@/lib/mdx"
import { CustomMDX } from "@/components/custom-mdx"
import { BentoHeader } from "@/components/mdx/bento-header"
import { ReadingProgress } from "@/components/blog/reading-progress"
import { Button } from "@/components/ui/button"

interface TutorialPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = getPostSlugs("tutorials")
    return posts.map((post) => ({
        slug: post.replace(/\.mdx$/, ""),
    }))
}

export async function generateMetadata({ params }: TutorialPageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug, "tutorials")

    if (!post) {
        return {}
    }
    const { frontmatter } = post

    return {
        title: frontmatter.title,
        description: frontmatter.description,
    }
}

export default async function TutorialPage({ params }: TutorialPageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug, "tutorials")

    if (!post) {
        notFound()
    }
    const { content, frontmatter, readingTime } = post

    return (
        <div className="min-h-screen bg-background">
            <ReadingProgress />

            <div className="container py-10 mx-auto max-w-5xl px-4 md:px-6">
                <Link href="/tutorials" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <Icon icon="lucide:arrow-left" className="mr-2 h-4 w-4" />
                    Back to Labs
                </Link>

                <BentoHeader
                    title={frontmatter.title}
                    readingTime={readingTime}
                    tags={frontmatter.tags}
                    description={frontmatter.description}
                    icon="lucide:terminal"
                    gradient="bg-emerald-500"
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <main className="md:col-span-12">
                        <div className="prose dark:prose-invert max-w-none prose-pre:bg-neutral-950 prose-pre:border prose-pre:border-emerald-500/20 prose-pre:rounded-xl prose-pre:shadow-2xl">
                            <CustomMDX source={content} />
                        </div>
                    </main>
                </div>

                {/* Step-by-Step Navigation Footer */}
                <div className="mt-16 border-t border-border pt-8 flex justify-between items-center">
                    <Button variant="ghost" className="text-muted-foreground gap-2">
                        <Icon icon="lucide:chevron-left" /> Previous Step
                    </Button>
                    <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20">
                        Next Step <Icon icon="lucide:chevron-right" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
