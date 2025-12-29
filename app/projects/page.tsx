
import { getAllPosts } from "@/lib/mdx"
import { Metadata } from "next"
import { ProjectList } from "@/components/projects/project-list"
import { PAGES_DATA } from "@/lib/data"
import { DecipherText } from "@/components/ui/decipher-text"

export const metadata: Metadata = {
    title: PAGES_DATA.projects.metadata.title,
    description: PAGES_DATA.projects.metadata.description,
}

export default async function ProjectsPage() {
    const posts = await getAllPosts("projects")

    // Ensure posts have necessary frontmatter for the list
    const postsWithRequiredData = posts.map(post => ({
        ...post,
        frontmatter: {
            ...post.frontmatter,
            tags: post.frontmatter.tags || []
        }
    }))

    return (
        <div className="container pt-10 pb-0 max-w-5xl mx-auto">
            <div className="flex flex-col items-start gap-4 mb-10">
                <DecipherText
                    text={PAGES_DATA.projects.title}
                    className="inline-block font-heading text-4xl tracking-tight lg:text-5xl"
                    revealOn="load"
                    animate={true}
                />
                <p className="text-xl text-muted-foreground">
                    {PAGES_DATA.projects.description}
                </p>
            </div>

            <ProjectList initialProjects={postsWithRequiredData} />
        </div>
    )
}
