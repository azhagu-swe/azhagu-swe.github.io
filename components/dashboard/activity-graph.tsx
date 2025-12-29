"use client"

import { motion } from "framer-motion"

export function ActivityGraph() {
    // Mock data for the visual curve
    const points = [10, 25, 15, 45, 20, 60, 35, 80, 50, 65, 85, 90]

    // Generate SVG path string
    const width = 100
    const height = 40
    let path = `M 0 ${height - (points[0] / 100) * height}`

    // Simple catmull-rom or similar smoothing could be better, but straight lines or quads for now
    // Normalized X step
    const stepX = width / (points.length - 1)

    points.forEach((p, i) => {
        if (i === 0) return
        const x = i * stepX
        const y = height - (p / 100) * height
        // bezier control points could be calculated for smoothness, 
        // essentially "L" for linear here for simplicity + "round" linejoin
        path += ` L ${x} ${y}`
    })

    return (
        <div className="relative h-full w-full min-h-[120px] rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-md overflow-hidden">
            <div className="flex flex-col gap-1 mb-4">
                <h3 className="text-lg font-semibold">Activity</h3>
                <p className="text-xs text-muted-foreground">Code commits over time</p>
            </div>

            <div className="relative w-full h-24 flex items-end">
                {/* Visual Bars for a Matrix-y equalizer look */}
                <div className="flex items-end justify-between w-full h-full gap-1">
                    {points.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${val}%` }}
                            transition={{ duration: 1, delay: i * 0.05, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                            className="w-full bg-primary/20 hover:bg-primary/50 transition-colors rounded-t-sm"
                            style={{ minHeight: "10%" }}
                        />
                    ))}
                </div>

                {/* Overlay Area Chart Effect - Optional, maybe stick to bars for 'Matrix' equalizer vibe */}
            </div>
        </div>
    )
}
