"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Post } from "@/lib/types"
import { Icon } from "@iconify/react"
import { formatDate } from "@/lib/utils"

interface RelatedPostsProps {
    posts: Post[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
    if (posts.length === 0) return null

    return (
        <section className="mt-20 pt-10 border-t border-border">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Icon icon="lucide:sparkles" className="w-6 h-6 text-primary" />
                Read Next
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <Link href={`/blog/${post.slug}`} className="group block h-full">
                            <article className="flex flex-col h-full rounded-xl border border-border/50 bg-card p-5 transition-all hover:bg-accent/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                    <time dateTime={post.frontmatter.date}>
                                        {formatDate(post.frontmatter.date)}
                                    </time>
                                    <span>•</span>
                                    <span>{post.readingTime}</span>
                                </div>
                                <h4 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.frontmatter.title}
                                </h4>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                                    {post.frontmatter.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {post.frontmatter.tags?.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                    {post.frontmatter.tags && post.frontmatter.tags.length > 2 && (
                                        <span className="text-xs text-muted-foreground self-center">
                                            +{post.frontmatter.tags.length - 2}
                                        </span>
                                    )}
                                </div>
                            </article>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
