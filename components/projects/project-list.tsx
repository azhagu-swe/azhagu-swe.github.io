"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Post } from "@/lib/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { MatrixWrapper } from "@/components/ui/matrix-wrapper"

interface ProjectListProps {
    initialProjects: Post[]
}

export function ProjectList({ initialProjects }: ProjectListProps) {
    const [filter, setFilter] = useState("All")

    const allTags = ["All", ...Array.from(new Set(initialProjects.flatMap((p) => p.frontmatter.tags || [])))]

    const filteredProjects = initialProjects.filter((project) =>
        filter === "All" ? true : project.frontmatter.tags?.includes(filter)
    )

    return (
        <div className="space-y-8">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                    <Button
                        key={tag}
                        variant={filter === tag ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilter(tag)}
                        className="rounded-full"
                    >
                        {tag}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`/projects/${project.slug}`}>
                                <MatrixWrapper className="h-full rounded-xl">
                                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
                                        <div className="aspect-video w-full bg-muted relative overflow-hidden">
                                            {project.frontmatter.image ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img
                                                    src={project.frontmatter.image}
                                                    alt={project.frontmatter.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-secondary/30">
                                                    <Icon icon="lucide:image" className="w-12 h-12 text-muted-foreground/20" />
                                                </div>
                                            )}
                                        </div>
                                        <CardHeader className="p-4">
                                            <div className="space-y-1">
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors line-clamp-1">{project.frontmatter.title}</h3>
                                                    {project.frontmatter.date && <span className="text-xs text-muted-foreground whitespace-nowrap">{project.frontmatter.date}</span>}
                                                </div>
                                                <p className="text-muted-foreground text-sm line-clamp-2">{project.frontmatter.description}</p>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4 pt-0">
                                            <div className="flex flex-wrap gap-2">
                                                {project.frontmatter.tags?.slice(0, 3).map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                                {project.frontmatter.tags && project.frontmatter.tags.length > 3 && (
                                                    <Badge variant="secondary" className="text-xs font-normal">+{project.frontmatter.tags.length - 3}</Badge>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </MatrixWrapper>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
