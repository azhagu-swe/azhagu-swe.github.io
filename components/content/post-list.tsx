"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Post } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"
import { Badge } from "@/components/ui/badge"
import { MatrixCard } from "@/components/ui/matrix-card"
import { cn } from "@/lib/utils"
// import Image from "next/image" // Assuming images are handled or we use gradients for now

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

    return (
        <div className="space-y-12 max-w-6xl mx-auto">
            {/* Search HUD */}
            <div className="relative max-w-xl mx-auto group">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <div className="relative flex items-center">
                    <Icon icon="lucide:search" className="absolute left-4 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Search transmissions..."
                        className="pl-12 h-12 rounded-full bg-background/50 border-white/10 focus-visible:border-primary/50 focus-visible:ring-primary/20 backdrop-blur-md shadow-2xl transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <LayoutGroup>
                {/* Hero Section (Only visible if no search is active) */}
                <AnimatePresence>
                    {heroPost && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="w-full mb-12"
                        >
                            <Link href={`${basePath}/${heroPost.slug}`} className="block group">
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl hover:border-primary/50 transition-colors duration-500">
                                    {/* Abstract Hero Background/Image */}
                                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 group-hover:opacity-75 transition-opacity" />
                                    {heroPost.frontmatter.image && (
                                        // Placeholder for real image implementation. Using div for now to avoid complexity without next/image configured in this file
                                        <div
                                            className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${heroPost.frontmatter.image})` }}
                                        />
                                    )}

                                    <div className="relative z-10 p-8 md:p-12 flex flex-col items-start gap-4">
                                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 backdrop-blur-md">
                                            Latest Transmission
                                        </Badge>
                                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 group-hover:to-primary transition-all duration-300">
                                            {heroPost.frontmatter.title}
                                        </h2>
                                        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                                            {heroPost.frontmatter.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-sm text-muted-foreground/80 mt-4">
                                            <span className="flex items-center gap-2">
                                                <Icon icon="lucide:calendar" /> {heroPost.frontmatter.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Icon icon="lucide:clock" /> {heroPost.readingTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Grid Section */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {gridPosts.map((post) => (
                            <MatrixCard key={post.slug} layout>
                                <Link href={`${basePath}/${post.slug}`} className="block h-full p-6 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-2 flex-wrap">
                                            {post.frontmatter.tags?.slice(0, 2).map((tag) => (
                                                <Badge key={tag} variant="secondary" className="text-[10px] px-2 h-5 bg-white/5 hover:bg-white/10">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <span className="text-xs text-muted-foreground/50 font-mono">
                                            {post.frontmatter.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                                        {post.frontmatter.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                                        {post.frontmatter.description}
                                    </p>

                                    <div className="flex items-center text-xs text-primary/70 font-medium mt-auto group-hover:text-primary transition-colors">
                                        Read Protocol <Icon icon="lucide:arrow-right" className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </MatrixCard>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
                            <Icon icon="lucide:radio-tower" className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">No transmissions found matching "{search}"</p>
                    </motion.div>
                )}
            </LayoutGroup>
        </div>
    )
}
