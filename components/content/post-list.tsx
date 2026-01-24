"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Post } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"
import { Badge } from "@/components/ui/badge"
import { BentoCard } from "@/components/ui/bento-card"
import { AiSidebar } from "@/components/ui/ai-sidebar"
import { cn } from "@/lib/utils"

interface PostListProps {
    initialPosts: Post[]
    basePath: string
}

export function PostList({ initialPosts, basePath }: PostListProps) {
    const [search, setSearch] = useState("")

    const filteredPosts = initialPosts.filter((post) => {
        const query = search.toLowerCase()
        return (
            post.frontmatter.title.toLowerCase().includes(query) ||
            post.frontmatter.description.toLowerCase().includes(query) ||
            post.frontmatter.tags?.some((tag) => tag.toLowerCase().includes(query))
        )
    })

    const heroPost = !search && filteredPosts.length > 0 ? filteredPosts[0] : null
    const gridPosts = heroPost ? filteredPosts.slice(1) : filteredPosts

    // return (
    return (
        <div className="relative min-h-screen">
            {/* Ambient Background Glow - Semantic */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[128px] rounded-full mix-blend-screen opacity-20" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-[128px] rounded-full mix-blend-screen opacity-20" />
            </div>

            <div className="relative z-10 space-y-12 max-w-7xl mx-auto pb-20">
                {/* Search HUD - Semantic */}
                <div className="relative max-w-md mx-auto group z-20 sticky top-4">
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                    <div className="relative flex items-center bg-background/80 backdrop-blur-md border border-primary/30 rounded-full shadow-2xl transition-all focus-within:border-primary focus-within:shadow-[0_0_20px_hsla(var(--primary),0.2)]">
                        <Icon icon="lucide:search" className="absolute left-4 text-primary/50 w-4 h-4 group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Search archive..."
                            className="pl-10 h-10 bg-transparent border-none focus-visible:ring-0 placeholder:text-primary/30 text-sm font-mono text-primary"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="pr-2">
                            <div className="h-1.5 w-1.5 rounded-sm bg-primary animate-pulse" />
                        </div>
                    </div>
                </div>

                <LayoutGroup>
                    {/* Hero Section - Semantic */}
                    <AnimatePresence>
                        {heroPost && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                className="w-full mb-12"
                            >
                                <Link href={`${basePath}/${heroPost.slug}`} className="block group relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl hover:border-primary/50 hover:shadow-[0_0_50px_hsla(var(--primary),0.1)] transition-all">
                                    {/* Hero Background Art */}
                                    <div className="absolute inset-0 z-0">
                                        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-transparent z-10" />
                                        {heroPost.frontmatter.image && (
                                            <div
                                                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                                style={{ backgroundImage: `url(${heroPost.frontmatter.image})` }}
                                            />
                                        )}
                                        {/* Fallback abstract grid */}
                                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(hsla(var(--primary),0.1)_1px,transparent_1px),linear-gradient(90deg,hsla(var(--primary),0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                                    </div>

                                    <div className="relative z-20 p-8 md:p-16 flex flex-col items-start gap-6 max-w-4xl">
                                        <div className="flex items-center gap-3">
                                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 backdrop-blur-md px-3 py-1 font-mono tracking-wider">
                                                LATEST_TRANSMISSION
                                            </Badge>
                                            <span className="text-xs font-mono text-primary/50">{heroPost.frontmatter.date}</span>
                                        </div>

                                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 group-hover:to-primary transition-all duration-500">
                                            {heroPost.frontmatter.title}
                                        </h2>

                                        <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl leading-relaxed border-l-2 border-primary/30 pl-4">
                                            {heroPost.frontmatter.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-sm font-mono text-primary mt-4 group-hover:translate-x-2 transition-transform">
                                            <span>&gt; DECRYPT_FILE</span>
                                            <div className="w-2 h-4 bg-primary animate-pulse" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Bento Grid Header - Semantic */}
                    <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                        <h3 className="text-xl font-mono text-muted-foreground/50 tracking-widest">
                            ARCHIVE_INDEX
                        </h3>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 bg-primary/20 rounded-none transform skew-x-12" />
                            <div className="w-2 h-2 bg-primary/50 rounded-none transform skew-x-12" />
                            <div className="w-2 h-2 bg-primary rounded-none transform skew-x-12" />
                        </div>
                    </div>

                    {/* Bento Grid Section */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[minmax(300px,auto)]">
                        <AnimatePresence mode="popLayout">
                            {gridPosts.map((post, i) => {
                                const isLarge = (i + 1) % 7 === 0
                                const isWide = (i + 1) % 3 === 0 && !isLarge

                                return (
                                    <BentoCard
                                        key={post.slug}
                                        post={post}
                                        basePath={basePath}
                                        className={cn(
                                            isLarge ? "md:col-span-2 md:row-span-2" : isWide ? "md:col-span-2" : "col-span-1"
                                        )}
                                        delay={i}
                                    />
                                )
                            })}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredPosts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20 border border-dashed border-white/10 rounded-xl"
                        >
                            <Icon icon="lucide:terminal" className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
                            <p className="font-mono text-muted-foreground">ERROR 404: NO_DATA_FOUND</p>
                        </motion.div>
                    )}
                </LayoutGroup>
            </div>

            {/* AI Assistant Sidebar */}
            <AiSidebar />
        </div>
    )
}
