"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Post } from "@/lib/types"

interface BentoCardProps {
    post: Post
    className?: string
    delay?: number
    basePath: string
}

export function BentoCard({ post, className, delay = 0, basePath }: BentoCardProps) {
    // Determine card type based on tags or random fallback for demo
    // In a real app, this might be a specific frontmatter field
    const isCodeHeavy = post.frontmatter.tags?.some(t => ["React", "Typescript", "Node.js"].includes(t)) || false
    const hasVideo = false // post.frontmatter.video // Placeholder

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: delay * 0.1 }}
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_hsla(var(--primary),0.2)] transition-all duration-500 flex flex-col",
                className
            )}
        >
            <Link href={`${basePath}/${post.slug}`} className="flex flex-col h-full">
                {/* Card Header / Visual Area */}
                <div className="relative h-48 overflow-hidden bg-secondary/20">
                    {/* Placeholder for Video/Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:scale-105 transition-transform duration-700" />

                    {/* Matrix Digital Rain Placeholder Overlay - Only visible in Matrix/Dark modes roughly */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,transparent_24%,hsla(var(--primary),0.1)_25%,hsla(var(--primary),0.1)_26%,transparent_27%,transparent_74%,hsla(var(--primary),0.1)_75%,hsla(var(--primary),0.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,hsla(var(--primary),0.1)_25%,hsla(var(--primary),0.1)_26%,transparent_27%,transparent_74%,hsla(var(--primary),0.1)_75%,hsla(var(--primary),0.1)_76%,transparent_77%,transparent)] bg-[length:30px_30px]" />

                    {/* Code Snippet Overlay (if code heavy) */}
                    {isCodeHeavy && (
                        <div className="absolute inset-4 rounded-lg bg-background/90 border border-border p-3 font-mono text-[10px] text-muted-foreground/80 hover:text-primary group-hover:opacity-100 transition-all overflow-hidden pointer-events-none shadow-inner">
                            <div className="flex gap-1.5 mb-2 opacity-50">
                                <div className="w-2 h-2 rounded-full bg-primary/20" />
                                <div className="w-2 h-2 rounded-full bg-primary/20" />
                                <div className="w-2 h-2 rounded-full bg-primary/20" />
                            </div>
                            <p><span className="text-secondary-foreground">export</span> <span className="text-primary/70">default</span> <span className="text-primary">function</span> <span className="text-foreground">{post.frontmatter.title.split(" ")[0]}</span>() {"{"}</p>
                            <p className="pl-4"><span className="text-secondary-foreground">return</span> (</p>
                            <p className="pl-8 text-primary/80">"Matrix"</p>
                            <p className="pl-4">)</p>
                            <p>{"}"}</p>
                        </div>
                    )}

                    {/* Play Button Overlay (if we had video) */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-500/50">
                            <Icon icon="lucide:play" className="w-5 h-5 text-cyan-500 ml-1" />
                        </div>
                    </div> */}

                    <div className="absolute top-3 right-3 flex gap-1">
                        {post.frontmatter.tags?.slice(0, 1).map(tag => (
                            <Badge key={tag} variant="outline" className="bg-background/80 border-border text-xs backdrop-blur-md text-primary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-grow relative bg-card text-card-foreground">
                    {/* Decorative Scanline */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="flex items-center gap-2 text-xs text-primary/60 mb-2 font-mono">
                        <span className="w-1.5 h-1.5 rounded-sm bg-primary animate-pulse" />
                        {post.frontmatter.date}
                    </div>

                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
                        {post.frontmatter.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 group-hover:text-primary/60 transition-colors">
                        {post.frontmatter.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground/60 font-mono uppercase">
                            <Icon icon="lucide:terminal" className="w-3 h-3" />
                            {post.readingTime}
                        </div>
                        <div className="p-2 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground/50 group-hover:text-primary">
                            <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
