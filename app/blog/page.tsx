
import { getAllPosts } from "@/lib/mdx"
import { Metadata } from "next"
import { PostList } from "@/components/content/post-list"
import { PAGES_DATA } from "@/lib/data"

export const metadata: Metadata = {
    title: PAGES_DATA.blog.metadata.title,
    description: PAGES_DATA.blog.metadata.description,
}

export default async function BlogPage() {
    const posts = await getAllPosts("blog")

    return (
        <div className="container py-10 max-w-2xl px-4 md:px-0">
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
    )
}
