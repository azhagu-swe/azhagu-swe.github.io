"use client"

import { Icon } from "@iconify/react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MatrixWrapper } from "@/components/ui/matrix-wrapper"
import { DecipherText } from "@/components/ui/decipher-text"
import { ProjectData } from "@/lib/types"

const RECENT_WORKS = [
    { title: "Portfolio PWA", status: "Live", date: "Dec 2025", type: "Web App" },
    { title: "Smart Farming Assistant", status: "In Progress", date: "Nov 2025", type: "PWA" },
    { title: "Audience Manager", status: "Completed", date: "Oct 2025", type: "Microservice" },
]

export function RecentWorkList() {
    return (
        <MatrixWrapper className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
                <DecipherText text="Recent Projects" className="text-lg font-semibold" revealOn="inView" animate={true} />
                <Link href="/projects" className="text-xs text-primary hover:underline">View All</Link>
            </div>

            <div className="space-y-4">
                {RECENT_WORKS.map((work, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center justify-between p-3 rounded-xl bg-background/40 border border-transparent hover:border-primary/20 hover:bg-background/60 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Icon icon="lucide:folder-code" className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium">{work.title}</h4>
                                <p className="text-xs text-muted-foreground">{work.type}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-xs text-muted-foreground hidden md:block">{work.date}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${work.status === 'Live' ? 'bg-emerald-500/10 text-emerald-500' :
                                work.status === 'In Progress' ? 'bg-amber-500/10 text-amber-500' :
                                    'bg-blue-500/10 text-blue-500'
                                }`}>
                                {work.status}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </MatrixWrapper>

    )
}
