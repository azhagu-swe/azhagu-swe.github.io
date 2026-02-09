"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MatrixWrapper } from "@/components/ui/matrix-wrapper"
import { DecipherText } from "@/components/ui/decipher-text"
import { Icon } from "@iconify/react"
import { LUXURY_EASING } from "@/lib/motion"

interface WeekData {
    week: string
    contributions: number
}

const GITHUB_USERNAME = "azhagu-swe"

export function ActivityGraph() {
    const [weeklyData, setWeeklyData] = useState<WeekData[]>([])
    const [totalContributions, setTotalContributions] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchGitHubData() {
            try {
                // Fetch recent events
                const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`)
                if (eventsRes.ok) {
                    const events = await eventsRes.json()

                    // Group by week
                    const weekMap = new Map<string, number>()
                    const today = new Date()

                    // Initialize last 12 weeks
                    for (let i = 0; i < 12; i++) {
                        const weekStart = new Date(today)
                        weekStart.setDate(weekStart.getDate() - (i * 7))
                        const weekLabel = getWeekLabel(weekStart)
                        weekMap.set(weekLabel, 0)
                    }

                    // Count events per week
                    let total = 0
                    events.forEach((event: { created_at: string }) => {
                        const eventDate = new Date(event.created_at)
                        const weekLabel = getWeekLabel(eventDate)
                        if (weekMap.has(weekLabel)) {
                            weekMap.set(weekLabel, (weekMap.get(weekLabel) || 0) + 1)
                            total++
                        }
                    })

                    const data = Array.from(weekMap.entries())
                        .map(([week, contributions]) => ({ week, contributions }))
                        .reverse()

                    setWeeklyData(data)
                    setTotalContributions(total)
                }
            } catch (error) {
                console.error("Failed to fetch GitHub data:", error)
                generateMockData()
            } finally {
                setLoading(false)
            }
        }

        function getWeekLabel(date: Date): string {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            return `${months[date.getMonth()]} ${Math.ceil(date.getDate() / 7)}`
        }

        function generateMockData() {
            const data: WeekData[] = []
            const today = new Date()
            for (let i = 11; i >= 0; i--) {
                const weekStart = new Date(today)
                weekStart.setDate(weekStart.getDate() - (i * 7))
                data.push({
                    week: getWeekLabel(weekStart),
                    contributions: Math.floor(Math.random() * 15) + 1,
                })
            }
            setWeeklyData(data)
            setTotalContributions(data.reduce((sum, d) => sum + d.contributions, 0))
        }

        fetchGitHubData()
    }, [])

    const maxContributions = Math.max(...weeklyData.map(d => d.contributions), 1)

    return (
        <MatrixWrapper className="relative h-full w-full rounded-2xl border border-border/50 bg-card/30 p-5 backdrop-blur-md">
            {/* Header Row */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                        <Icon icon="mdi:github" className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <DecipherText
                            text="Activity"
                            className="text-base font-semibold"
                            revealOn="inView"
                            animate={true}
                        />
                        <p className="text-[11px] text-muted-foreground">Code commits over time</p>
                    </div>
                </div>

                {/* Live Badge */}
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                    <span className="text-[10px] font-medium text-primary">Live</span>
                </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-6 mb-6">
                <div>
                    <div className="text-2xl font-bold text-foreground">{totalContributions}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">This Quarter</div>
                </div>
                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors self-end pb-1"
                >
                    @{GITHUB_USERNAME}
                    <Icon icon="lucide:external-link" className="w-3 h-3" />
                </a>
            </div>

            {/* Bar Chart - Clean & Minimal */}
            {loading ? (
                <div className="flex items-center justify-center h-24">
                    <Icon icon="lucide:loader-2" className="w-5 h-5 text-primary animate-spin" />
                </div>
            ) : (
                <div className="flex items-end gap-2 h-20">
                    {weeklyData.map((data, idx) => {
                        const height = Math.max((data.contributions / maxContributions) * 100, 8)
                        return (
                            <motion.div
                                key={idx}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: `${height}%`, opacity: 1 }}
                                transition={{
                                    delay: idx * 0.05,
                                    duration: 0.4,
                                    ease: LUXURY_EASING.weighted,
                                }}
                                className="flex-1 bg-primary/30 hover:bg-primary/60 rounded-t transition-colors cursor-pointer group relative"
                                title={`${data.week}: ${data.contributions} events`}
                            >
                                {/* Tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="bg-foreground text-background text-[10px] px-2 py-1 rounded whitespace-nowrap font-medium">
                                        {data.contributions}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            )}

            {/* Week Labels */}
            <div className="flex gap-2 mt-2">
                {weeklyData.filter((_, i) => i % 3 === 0).map((data, idx) => (
                    <div key={idx} className="flex-1 text-[9px] text-muted-foreground text-center">
                        {data.week}
                    </div>
                ))}
            </div>
        </MatrixWrapper>
    )
}
