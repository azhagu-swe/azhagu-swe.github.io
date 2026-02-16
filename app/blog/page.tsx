
import { getAllPosts } from "@/lib/mdx"
import { Metadata } from "next"
import { PostList } from "@/components/content/post-list"
import { PAGES_DATA } from "@/lib/data"

export const metadata: Metadata = {
    title: PAGES_DATA.blog.metadata.title,
    description: PAGES_DATA.blog.metadata.description,
}

export default async function BlogPage() {
    const posts = await getAllPosts()

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": PAGES_DATA.blog.title,
        "description": PAGES_DATA.blog.description,
        "blogPost": posts.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.frontmatter.title,
            "description": post.frontmatter.description,
            "datePublished": post.frontmatter.date,
            "url": `https://azhagu-swe.github.io/blog/${post.slug}`,
        }))
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container pt-10 pb-0 max-w-5xl px-4 md:px-0 mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="font-heading text-4xl tracking-tight lg:text-5xl mb-4">
                        {PAGES_DATA.blog.title}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {PAGES_DATA.blog.description}
                    </p>
                </div>

                <PostList initialPosts={posts} basePath="/blog" />
            </div>
        </>
    )
}
