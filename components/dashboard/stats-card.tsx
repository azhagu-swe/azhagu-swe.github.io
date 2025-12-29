"use client"

import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatsCardProps {
    title: string
    value: string | number
    icon: string
    trend?: string
    trendUp?: boolean
    description?: string
    delay?: number
}

export function StatsCard({ title, value, icon, trend, trendUp, description, delay = 0 }: StatsCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-md transition-all hover:bg-card/50 hover:shadow-lg hover:shadow-primary/10"
        >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />

            <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <Icon icon={icon} className="h-6 w-6" />
                    </div>
                    {trend && (
                        <div className={cn(
                            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-background/50",
                            trendUp ? "text-emerald-500" : "text-rose-500"
                        )}>
                            <Icon icon={trendUp ? "lucide:trending-up" : "lucide:trending-down"} className="h-3 w-3" />
                            <span>{trend}</span>
                        </div>
                    )}
                </div>

                <div className="space-y-1">
                    <h3 className="text-3xl font-bold tracking-tight text-foreground">{value}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{title}</p>
                </div>

                {description && (
                    <p className="text-xs text-muted-foreground/60">{description}</p>
                )}
            </div>

            {/* Matrix Glitch Line Effect on Hover */}
            <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </motion.div>
    )
}
