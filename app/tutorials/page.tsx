
import { getAllPosts } from "@/lib/mdx"
import { Metadata } from "next"
import { PostList } from "@/components/content/post-list"
import { DecipherText } from "@/components/ui/decipher-text"

export const metadata: Metadata = {
    title: "Tutorials",
    description: "Step-by-step guides for developers.",
}

export default async function TutorialsPage() {
    const posts = await getAllPosts("tutorials")

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Tutorials",
        "description": "Step-by-step guides for developers.",
        "hasPart": posts.map((post) => ({
            "@type": "TechArticle",
            "headline": post.frontmatter.title,
            "description": post.frontmatter.description,
            "datePublished": post.frontmatter.date,
            "url": `https://azhagu-swe.github.io/tutorials/${post.slug}`,
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
                    <DecipherText
                        text="Tutorials"
                        className="font-heading text-4xl tracking-tight lg:text-5xl mb-4 block"
                        revealOn="load"
                        animate={true}
                    />
                    <p className="text-xl text-muted-foreground">
                        Learn something new.
                    </p>
                </div>

                <PostList initialPosts={posts} basePath="/tutorials" />
            </div>
        </>
    )
}
