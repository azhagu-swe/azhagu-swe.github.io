import { notFound } from "next/navigation"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/mdx"
import { CustomMDX } from "@/components/custom-mdx"
import { BentoHeader } from "@/components/mdx/bento-header"
import { ReadingProgress } from "@/components/blog/reading-progress"
import { RelatedPosts } from "@/components/blog/related-posts"

interface PostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = getPostSlugs("blog")
    return posts.map((post) => ({
        slug: post.replace(/\.mdx$/, ""),
    }))
}

export async function generateMetadata({ params }: PostPageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug, "blog")

    if (!post) {
        return {}
    }
    const { frontmatter } = post

    return {
        title: frontmatter.title,
        description: frontmatter.description,
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug, "blog")

    if (!post) {
        notFound()
    }

    const { content, frontmatter, readingTime } = post

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": frontmatter.title,
        "description": frontmatter.description,
        "datePublished": frontmatter.date,
        "author": {
            "@type": "Person",
            "name": "Azhagu",
            "url": "https://azhagu-swe.github.io"
        },
        "url": `https://azhagu-swe.github.io/blog/${slug}`,
        "image": frontmatter.image ? `https://azhagu-swe.github.io${frontmatter.image}` : undefined,
    }

    return (
        <div className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ReadingProgress />

            <div className="container py-10 px-4 md:px-0 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Main Content (Centered) */}
                <article className="lg:col-span-8 lg:col-start-3">
                    <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <Icon icon="lucide:arrow-left" className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>

                    <BentoHeader
                        title={frontmatter.title}
                        date={frontmatter.date}
                        readingTime={readingTime}
                        tags={frontmatter.tags}
                        description={frontmatter.description}
                        icon="lucide:book-open"
                    />

                    <div className="prose dark:prose-invert max-w-none prose-lg prose-headings:scroll-mt-20">
                        <CustomMDX source={content} />
                    </div>

                    <RelatedPosts posts={await getRelatedPosts(slug, frontmatter.tags || [])} />
                </article>

                {/* Floating TOC HUD (Right - Desktop Only) */}
                <aside className="hidden lg:block lg:col-span-2 relative">
                    <div className="sticky top-24 space-y-4">
                        <div className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                            On this page
                        </div>
                        {/* Placeholder for Dynamic TOC - implemented via rehype-slug IDs handled by client component if needed, 
                            for now just a visual placeholder or simple links could go here if we parsed headers */}
                        <div className="text-xs text-muted-foreground border-l border-border pl-4 space-y-2">
                            <p className="hover:text-primary cursor-pointer transition-colors">Introduction</p>
                            <p className="hover:text-primary cursor-pointer transition-colors">Key Concepts</p>
                            <p className="hover:text-primary cursor-pointer transition-colors">Implementation</p>
                            <p className="hover:text-primary cursor-pointer transition-colors">Conclusion</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
