
import { getAllProjects } from "@/lib/mdx"
import { Metadata } from "next"
import { ProjectList } from "@/components/projects/project-list"
import { PAGES_DATA } from "@/lib/data"
import { DecipherText } from "@/components/ui/decipher-text"

export const metadata: Metadata = {
    title: PAGES_DATA.projects.metadata.title,
    description: PAGES_DATA.projects.metadata.description,
}

export default async function ProjectsPage() {
    const posts = await getAllProjects()

    // Velite already ensures the shape, but we might need to map to what ProjectList expects if it's strictly typed to Post
    // For now, let's assume getAllProjects returns compatible ProjectData[].
    // If ProjectList expects Post[], we might need a type cast or update ProjectList.
    // Based on previous code, it seemed to expect Post but we are passing ProjectData.
    // Let's check ProjectList next.

    // Mapping to match existing component expectation if needed (removed manual mapping for now as Velite handles tags)
    // Mapping to match existing component expectation
    const postsWithRequiredData = posts.map(post => ({
        slug: post.slugAsParams,
        content: post.body,
        readingTime: "5 min read", // Placeholder
        frontmatter: {
            title: post.title,
            description: post.description,
            date: post.date,
            tags: post.tags,
            author: "Alagappan P", // Explicit for compatibility
            image: post.image,
            published: true
        }
    })) as unknown as any[] // Temporarily cast to any to bypass strict type mismatch until we unify types completely

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
