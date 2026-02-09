"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { SOCIAL_PROOF_DATA } from "@/lib/data"

// Proof Banner Component - Psychology: Achievement badges create instant credibility
export function ProofBanner() {
    const { proofBanner } = SOCIAL_PROOF_DATA

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden"
        >
            <div className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-primary/10">
                <div className="flex items-center gap-6 animate-marquee">
                    {proofBanner.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/50 border border-primary/20 whitespace-nowrap"
                        >
                            <Icon icon={item.icon} className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm font-medium">{item.text}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {proofBanner.map((item, idx) => (
                        <div
                            key={`dup-${idx}`}
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/50 border border-primary/20 whitespace-nowrap"
                        >
                            <Icon icon={item.icon} className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

// Achievement Highlights - Psychology: Golden/amber colors signal prestige and value
export function AchievementHighlights() {
    const highlights = [
        {
            stat: "40%",
            label: "API Latency Reduced",
            description: "Redis caching strategy",
            icon: "lucide:zap",
        },
        {
            stat: "1M+",
            label: "Devices Powered",
            description: "Geohash proximity engine",
            icon: "lucide:cpu",
        },
        {
            stat: "15%",
            label: "Accuracy Improvement",
            description: "Location-based targeting",
            icon: "lucide:target",
        },
        {
            stat: "#2",
            label: "National Ranking",
            description: "Debugging competition",
            icon: "lucide:trophy",
        },
    ]

    return (
        <section className="py-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                {/* Section Header */}
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <Icon icon="lucide:star" className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Proven Results</h3>
                        <p className="text-sm text-muted-foreground">Measurable impact I've delivered</p>
                    </div>
                </div>

                {/* Achievement Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx, duration: 0.4 }}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500/5 to-amber-500/5 border border-yellow-500/20 p-5 hover:border-yellow-500/40 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-3 p-2 inline-flex rounded-lg bg-yellow-500/10">
                                <Icon icon={item.icon} className="w-5 h-5 text-yellow-500" />
                            </div>

                            {/* Stat */}
                            <div className="power-stat mb-1">{item.stat}</div>

                            {/* Label */}
                            <p className="font-semibold text-sm text-foreground">{item.label}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>

                            {/* Decorative Gradient */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-yellow-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
