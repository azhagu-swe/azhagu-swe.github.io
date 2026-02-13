"use client"

import { useState, useEffect } from "react"
import Giscus from "@giscus/react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

export function Guestbook() {
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Effective theme for Giscus
    const giscusTheme = mounted
        ? (theme === "system" ? systemTheme : theme) === "dark"
            ? "transparent_dark"
            : "light"
        : "light"

    const REPO = "azhagu-swe/azhagu-swe.github.io"
    const REPO_ID = "R_kgDOQsBa0A"
    const CATEGORY = "General"
    const CATEGORY_ID = "DIC_kwDOQsBa0M4C2WpV"

    if (!REPO_ID || !CATEGORY_ID) {
        return (
            <section className="w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-8 text-center"
                >
                    <Icon icon="lucide:alert-triangle" className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Guestbook Configuration Required</h2>
                    <p className="text-muted-foreground mb-6">
                        To enable the Guestbook, you need to get your <strong>Repo ID</strong> and <strong>Category ID</strong> from Giscus.
                    </p>
                    <div className="space-y-4 text-left max-w-md mx-auto bg-card p-6 rounded-xl border border-border">
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                            <li>Go to <a href="https://giscus.app" target="_blank" className="text-primary hover:underline">giscus.app</a></li>
                            <li>Enter your repo: <code className="bg-muted px-1 py-0.5 rounded">{REPO}</code></li>
                            <li>Enable <strong>Discussions</strong> in your GitHub repo settings if needed.</li>
                            <li>Scroll to "Enable giscus" to see your IDs.</li>
                            <li>Update <code className="bg-muted px-1 py-0.5 rounded">components/guestbook.tsx</code> with the IDs.</li>
                        </ol>
                    </div>
                </motion.div>
            </section>
        )
    }

    return (
        <section className="w-full max-w-4xl mx-auto space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <h1 className="text-3xl font-bold tracking-tight">Community Guestbook</h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Ask questions, share feedback, or just say hello!
                    Powered by GitHub Discussions.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 md:p-8"
            >
                <Giscus
                    id="comments"
                    repo={REPO}
                    repoId={REPO_ID}
                    category={CATEGORY}
                    categoryId={CATEGORY_ID}
                    mapping="pathname"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="bottom"
                    theme={giscusTheme}
                    lang="en"
                    loading="lazy"
                />
            </motion.div>
        </section>
    )
}
