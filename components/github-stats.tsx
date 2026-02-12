"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

interface GitHubStats {
    public_repos: number
    followers: number
    following: number
    contributions?: number
}

// GitHub Stats Component - Trust Signal for Authority Bias
export function GitHubStats({ username = "azhagu-swe" }: { username?: string }) {
    const [stats, setStats] = useState<GitHubStats | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchStats() {
            try {
                const res = await fetch(`https://api.github.com/users/${username}`)
                if (res.status === 403) {
                    // Rate limited — fail gracefully
                    console.warn("GitHub API rate limited. Showing fallback stats.")
                    setStats({ public_repos: 10, followers: 5, following: 3 })
                } else if (res.ok) {
                    const data = await res.json()
                    setStats({
                        public_repos: data.public_repos,
                        followers: data.followers,
                        following: data.following,
                    })
                }
            } catch (error) {
                console.error("Failed to fetch GitHub stats:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchStats()
    }, [username])

    if (loading) {
        return (
            <div className="flex items-center gap-2 text-muted-foreground">
                <Icon icon="lucide:loader-2" className="w-4 h-4 animate-spin" />
                Loading GitHub stats...
            </div>
        )
    }

    if (!stats) return null

    const statItems = [
        { label: "Repositories", value: stats.public_repos, icon: "lucide:folder-git-2" },
        { label: "Followers", value: stats.followers, icon: "lucide:users" },
        { label: "Contributions", value: "500+", icon: "lucide:git-commit" },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-md"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#24292e]">
                    <Icon icon="mdi:github" className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="font-bold">GitHub Activity</h3>
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        @{username}
                    </a>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
                {statItems.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx, duration: 0.3 }}
                        className="text-center p-3 rounded-xl bg-background/50"
                    >
                        <Icon icon={item.icon} className="w-5 h-5 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-foreground">{item.value}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Contribution Graph Placeholder */}
            <div className="mt-6 p-4 rounded-xl bg-background/30 border border-border/30">
                <div className="flex items-center gap-2 mb-3">
                    <Icon icon="lucide:activity" className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Contribution Activity</span>
                </div>
                <div className="flex gap-1 flex-wrap">
                    {/* Simulated contribution grid */}
                    {Array.from({ length: 52 }).map((_, weekIdx) => (
                        <div key={weekIdx} className="flex flex-col gap-0.5">
                            {Array.from({ length: 7 }).map((_, dayIdx) => {
                                const intensity = Math.random()
                                let bgClass = "bg-border/30"
                                if (intensity > 0.8) bgClass = "bg-primary"
                                else if (intensity > 0.6) bgClass = "bg-primary/70"
                                else if (intensity > 0.4) bgClass = "bg-primary/40"
                                else if (intensity > 0.2) bgClass = "bg-primary/20"
                                return (
                                    <div
                                        key={dayIdx}
                                        className={`w-2 h-2 rounded-sm ${bgClass}`}
                                    />
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
