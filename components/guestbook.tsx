"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"

export function Guestbook() {
    return (
        <section className="w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 text-center"
            >
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon icon="lucide:message-square" className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Community Guestbook
                </h2>

                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    Connect with other developers, ask tasks, or just say hi!
                    This space is powered by GitHub Discussions to keep things developer-focused.
                </p>

                <div className="relative overflow-hidden rounded-xl border border-dashed border-border/50 bg-background/50 p-8">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

                    <div className="flex flex-col items-center gap-4">
                        <Icon icon="lucide:construction" className="w-10 h-10 text-yellow-500/80" />
                        <h3 className="font-semibold text-lg">Coming Soon</h3>
                        <p className="text-sm text-muted-foreground">
                            I'm currently configuring the Giscus integration. Check back later to leave your mark!
                        </p>
                        <Button variant="outline" className="mt-2 group">
                            <Icon icon="lucide:github" className="mr-2 w-4 h-4" />
                            View on GitHub
                            <Icon icon="lucide:arrow-right" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
